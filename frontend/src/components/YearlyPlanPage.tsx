import React, { useState, useEffect } from 'react';
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
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import logo from './U&I Logo - Red.png';
import { useUserDetails } from '../UserDetailsContext';
import { useNavigate } from 'react-router-dom';

interface WeekPlan {
  week_number: number;
  topics: string[];
}

interface MonthPlan {
  month: string;
  weeks: WeekPlan[];
}

interface ClassPlan {
  start_month: string;
  end_month: string;
  monthly_plans: MonthPlan[];
}

const months = [
  'July', 'August', 'September', 'October', 'November',
  'December', 'January', 'February', 'March'
];

const mapDuration = (duration: string) => {
  if (duration === 'half') return '5months';
  if (duration === 'full') return '9months';
  return '9months'; // default
};

const YearlyPlanPage: React.FC = () => {
  const [plan, setPlan] = useState<ClassPlan>({
    start_month: 'July',
    end_month: 'March',
    monthly_plans: months.map(month => ({
      month,
      weeks: Array.from({ length: 4 }, (_, i) => ({
        week_number: i + 1,
        topics: []
      }))
    }))
  });
  const [recommendedTopics, setRecommendedTopics] = useState<{ [key: string]: string[] }>({});
  const [activeWeek, setActiveWeek] = useState<{ month: string; week: string } | null>(null);

  const { userDetails } = useUserDetails();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userDetails.name || !userDetails.centre_name || !userDetails.program || !userDetails.level || !userDetails.duration) {
      navigate('/user-details');
    }
  }, [userDetails, navigate]);

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
      setRecommendedTopics(prev => ({ ...prev, [`${month}-${week}`]: response.data.topics }));
      setActiveWeek({ month, week });
    } catch (error) {
      setRecommendedTopics(prev => ({ ...prev, [`${month}-${week}`]: [] }));
      setActiveWeek({ month, week });
      console.error('Error fetching recommended topics:', error);
    }
  };

  const handleTopicAdd = (monthIndex: number, weekIndex: number, topic: string) => {
    if (!topic.trim()) return;
    const newPlan = { ...plan };
    newPlan.monthly_plans[monthIndex].weeks[weekIndex].topics.push(topic);
    setPlan(newPlan);
  };

  const handleTopicDelete = (monthIndex: number, weekIndex: number, topicIndex: number) => {
    const newPlan = { ...plan };
    newPlan.monthly_plans[monthIndex].weeks[weekIndex].topics.splice(topicIndex, 1);
    setPlan(newPlan);
  };

  const handleGenerateGantt = async () => {
    if (!userDetails.name || !userDetails.centre_name || !userDetails.program || !userDetails.level || !userDetails.duration) {
      alert('Please fill out your user details before generating a Gantt chart.');
      return;
    }
    const payload = {
      user_details: userDetails,
      plan: plan,
    };
    try {
      const response = await axios.post('http://localhost:8000/api/generate-gantt', payload, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'class_plan_gantt.png');
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
            Yearly Class Planning
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
          <Grid container spacing={3}>
            {plan.monthly_plans.map((monthPlan, monthIndex) => (
              <Grid item xs={12} md={4} key={monthPlan.month}>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                  }}
                >
                  {monthPlan.month}
                </Typography>
                {monthPlan.weeks.map((week, weekIndex) => (
                  <Box 
                    key={week.week_number} 
                    sx={{ 
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                      cursor: 'pointer',
                      '&:hover': { bgcolor: 'rgba(211, 47, 47, 0.05)' },
                    }}
                    onClick={() => fetchRecommendedTopics(monthPlan.month, `Week ${week.week_number}`)}
                  >
                    <Typography 
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: 'primary.dark',
                      }}
                    >
                      Week {week.week_number}
                    </Typography>
                    <List dense>
                      {week.topics.map((topic, topicIndex) => (
                        <ListItem
                          key={topicIndex}
                          sx={{
                            bgcolor: 'background.default',
                            borderRadius: 1,
                            mb: 0.5,
                          }}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              onClick={() => handleTopicDelete(monthIndex, weekIndex, topicIndex)}
                              color="primary"
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemText primary={topic} />
                        </ListItem>
                      ))}
                    </List>
                    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                      <TextField
                        size="small"
                        placeholder="Add topic"
                        fullWidth
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const input = e.target as HTMLInputElement;
                            handleTopicAdd(monthIndex, weekIndex, input.value);
                            input.value = '';
                          }
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            '&:hover fieldset': {
                              borderColor: 'primary.main',
                            },
                          },
                        }}
                      />
                    </Box>
                    {/* Recommended Topics for this week */}
                    {recommendedTopics[`${monthPlan.month}-Week ${week.week_number}`] && activeWeek && activeWeek.month === monthPlan.month && activeWeek.week === `Week ${week.week_number}` && (
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                          Recommended Topics:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {recommendedTopics[`${monthPlan.month}-Week ${week.week_number}`].map((topic: string, index: number) => (
                            <Chip
                              key={index}
                              label={topic}
                              onClick={() => handleTopicAdd(monthIndex, weekIndex, topic)}
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
                  </Box>
                ))}
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
            Generate Yearly Gantt Chart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default YearlyPlanPage; 