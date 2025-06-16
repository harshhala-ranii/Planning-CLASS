import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './U&I Logo - Red.png';

const ProgramDurationPage: React.FC = () => {
  const navigate = useNavigate();
  const [duration, setDuration] = useState<string>('');

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (!duration) {
        alert('Please select a program duration');
        return;
      }

      // Update the user details with the selected duration
      await axios.post('http://localhost:8000/api/user-details/duration', { duration });
      navigate('/options');
    } catch (error) {
      console.error('Error saving duration:', error);
      alert('Error saving duration. Please try again.');
    }
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #fff5f5 0%, #fff 100%)',
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="U&I Logo"
          sx={{
            width: 200,
            mb: 4,
          }}
        />

        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: '100%',
            maxWidth: 600,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 600,
              mb: 4,
            }}
          >
            Select Program Duration
          </Typography>

          <Alert severity="info" sx={{ mb: 4 }}>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Important: Please consult with your leader before selecting the program duration.
              This decision should be based on the student's learning pace and capabilities.
            </Typography>
          </Alert>

          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" paragraph>
              The program duration you select will determine the pace at which topics are covered.
              Consider the following factors:
            </Typography>
            <Typography component="ul" sx={{ pl: 2 }}>
              <li>Student's current learning pace and capabilities</li>
              <li>Previous performance in similar programs</li>
              <li>Available time for practice and reinforcement</li>
              <li>Support available at home and in the community</li>
            </Typography>
          </Box>

          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            <FormLabel component="legend" sx={{ mb: 2, fontWeight: 600 }}>
              Choose Program Duration
            </FormLabel>
            <RadioGroup
              value={duration}
              onChange={handleDurationChange}
              sx={{ gap: 2 }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  border: duration === 'half' ? '2px solid #d32f2f' : '1px solid #e0e0e0',
                  borderRadius: 2,
                }}
              >
                <FormControlLabel
                  value="half"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Half Year Program (5 months)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Recommended for students who learn quickly and have strong support systems.
                        Topics will be covered at a faster pace.
                      </Typography>
                    </Box>
                  }
                />
              </Paper>

              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  border: duration === 'full' ? '2px solid #d32f2f' : '1px solid #e0e0e0',
                  borderRadius: 2,
                }}
              >
                <FormControlLabel
                  value="full"
                  control={<Radio />}
                  label={
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        Full Year Program (9 months)
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Recommended for students who need more time to master concepts.
                        Provides more practice and reinforcement opportunities.
                      </Typography>
                    </Box>
                  }
                />
              </Paper>
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            size="large"
            fullWidth
            sx={{
              py: 1.5,
              fontSize: '1.1rem',
              boxShadow: '0 4px 6px rgba(211, 47, 47, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 8px rgba(211, 47, 47, 0.3)',
              },
            }}
          >
            Continue
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default ProgramDurationPage; 