import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import logo from './U&I Logo - Red.png';
import { useUserDetails } from '../UserDetailsContext';

interface MonthlyPlan {
  [month: string]: {
    [week: string]: string[];
  };
}

const months = [
  'July', 'August', 'September', 'October', 'November',
  'December', 'January', 'February', 'March'
];

// Helper to map duration
const mapDuration = (duration: string) => {
  if (duration === 'half') return '5months';
  if (duration === 'full') return '9months';
  return '9months'; // default
};

const MonthlyPlanPage: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [plan, setPlan] = useState<MonthlyPlan>({});
  const [recommendedTopics, setRecommendedTopics] = useState<string[]>([]);
  const [topicInputs, setTopicInputs] = useState<{ [week: string]: string }>({});
  const [activeWeek, setActiveWeek] = useState<string>('');

  const { userDetails } = useUserDetails();

  const handleMonthChange = (event: SelectChangeEvent) => {
    const month = event.target.value;
    setSelectedMonth(month);
    if (!plan[month]) {
      setPlan((prev: MonthlyPlan) => ({
        ...prev,
        [month]: {
          'Week 1': [],
          'Week 2': [],
          'Week 3': [],
          'Week 4': []
        }
      }));
    }
    setTopicInputs({});
    setActiveWeek('');
    setRecommendedTopics([]);
  };

  const fetchRecommendedTopics = async (month: string, week: string) => {
    try {
      const program = userDetails.program || 'Foundational Literacy';
      const level = userDetails.level || 'Letter Level';
      const duration = mapDuration(userDetails.duration || 'full');
      const response = await axios.get('http://localhost:8000/api/recommended-topics', {
        params: {
          program,
          level,
          duration,
          month,
          week,
          grade: userDetails.grade
        }
      });
      setRecommendedTopics(response.data.topics);
      setActiveWeek(week);
    } catch (error) {
      setRecommendedTopics([]);
      setActiveWeek(week);
      console.error('Error fetching recommended topics:', error);
    }
  };

  const handleWeekClick = (week: string) => {
    if (selectedMonth) {
      fetchRecommendedTopics(selectedMonth, week);
    }
  };

  const handleTopicInputChange = (week: string, value: string) => {
    setTopicInputs((prev) => ({ ...prev, [week]: value }));
  };

  const handleTopicAdd = (week: string, topic?: string) => {
    const topicToAdd = topic !== undefined ? topic : topicInputs[week];
    if (!topicToAdd || !topicToAdd.trim()) return;
    setPlan((prev: MonthlyPlan) => ({
      ...prev,
      [selectedMonth]: {
        ...prev[selectedMonth],
        [week]: [...(prev[selectedMonth]?.[week] || []), topicToAdd.trim()]
      }
    }));
    setTopicInputs((prev) => ({ ...prev, [week]: '' }));
  };

  const handleTopicDelete = (week: string, topicIndex: number) => {
    setPlan((prev: MonthlyPlan) => ({
      ...prev,
      [selectedMonth]: {
        ...prev[selectedMonth],
        [week]: prev[selectedMonth][week].filter((_, index) => index !== topicIndex)
      }
    }));
  };

  const handleGenerateGantt = async () => {
    try {
      // Check if any topics are added
      const hasTopics = Object.values(plan).some(monthPlan => 
        Object.values(monthPlan).some(weekTopics => weekTopics.length > 0)
      );

      if (!hasTopics) {
        alert('Please add at least one topic before generating the Gantt chart.');
        return;
      }

      const requestData = {
        ...userDetails,
        start_month: selectedMonth,
        end_month: selectedMonth,
        monthly_plans: [{
          month: selectedMonth,
          weeks: Object.entries(plan[selectedMonth]).map(([week, topics]) => ({
            week_number: parseInt(week.split(' ')[1]),
            topics
          }))
        }]
      };

      const response = await axios.post('http://localhost:8000/api/generate-gantt', requestData, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${selectedMonth.toLowerCase()}_plan_gantt.png`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating Gantt chart:', error);
      alert('Error generating Gantt chart. Please try again.');
    }
  };

  return (
    <Container maxWidth="lg">
      {/* User Details Summary Card */}
      <Box sx={{ my: 2 }}>
        <Paper elevation={2} sx={{ p: 2, mb: 2, background: 'rgba(255,255,255,0.95)' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            User Details
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Typography variant="body1"><b>Name:</b> {userDetails.name || '-'}</Typography>
            <Typography variant="body1"><b>Centre:</b> {userDetails.centre_name || '-'}</Typography>
            <Typography variant="body1"><b>Program:</b> {userDetails.program || '-'}</Typography>
            <Typography variant="body1"><b>Level:</b> {userDetails.level || '-'}</Typography>
            <Typography variant="body1"><b>Duration:</b> {userDetails.duration === 'half' ? 'Half Year (5 months)' : userDetails.duration === 'full' ? 'Full Year (9 months)' : '-'}</Typography>
            {userDetails.grade && (
              <Typography variant="body1"><b>Grade:</b> {userDetails.grade}</Typography>
            )}
          </Box>
        </Paper>
      </Box>
      <Box sx={{ my: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          mb: 4 
        }}>
          <img 
            src={logo} 
            alt="U&I Logo" 
            style={{ 
              maxWidth: '150px',
              height: 'auto',
              marginBottom: '1rem'
            }} 
          />
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #d32f2f 30%, #f44336 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Monthly Class Planning
          </Typography>
        </Box>

        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 3,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box sx={{ mb: 4 }}>
            <FormControl fullWidth>
              <InputLabel id="month-select-label">Select Month</InputLabel>
              <Select
                labelId="month-select-label"
                value={selectedMonth}
                label="Select Month"
                onChange={handleMonthChange}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.dark',
                  },
                }}
              >
                {months.map((month) => (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Grid container spacing={2}>
            {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week) => (
              <Grid item xs={12} key={week}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'rgba(211, 47, 47, 0.05)',
                    },
                  }}
                  onClick={() => handleWeekClick(week)}
                >
                  <Typography variant="h6" gutterBottom>
                    {week}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                    <TextField
                      size="small"
                      placeholder="Add topic"
                      value={topicInputs[week] || ''}
                      onChange={(e) => handleTopicInputChange(week, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleTopicAdd(week);
                        }
                      }}
                      sx={{ maxWidth: 300 }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleTopicAdd(week)}
                      sx={{ minWidth: 80 }}
                    >
                      Add
                    </Button>
                  </Box>
                  {plan[selectedMonth]?.[week]?.map((topic: string, index: number) => (
                    <Chip
                      key={index}
                      label={topic}
                      onDelete={() => handleTopicDelete(week, index)}
                      sx={{ m: 0.5 }}
                    />
                  ))}
                  {recommendedTopics.length > 0 && activeWeek === week && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Recommended Topics:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {recommendedTopics.map((topic: string, index: number) => (
                          <Chip
                            key={index}
                            label={topic}
                            onClick={() => handleTopicAdd(week, topic)}
                            sx={{
                              m: 0.5,
                              bgcolor: 'rgba(211, 47, 47, 0.1)',
                              '&:hover': {
                                bgcolor: 'rgba(211, 47, 47, 0.2)',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateGantt}
            size="large"
            sx={{ 
              px: 6, 
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: '0 4px 6px rgba(211, 47, 47, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 8px rgba(211, 47, 47, 0.3)',
              },
            }}
          >
            Generate Gantt Chart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MonthlyPlanPage; 