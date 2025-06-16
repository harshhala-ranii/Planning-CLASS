import React from 'react';
import { Container, Typography, Box, Button, Paper, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import logo from './U&I Logo - Red.png';

const OptionsPage: React.FC = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: 'Resources to help plan classes',
      description: 'Access helpful resources and guidelines for effective class planning',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      path: '/resources'
    },
    {
      title: 'Plan classes for this month',
      description: 'Create and manage your class schedule for a specific month',
      icon: <CalendarMonthIcon sx={{ fontSize: 40 }} />,
      path: '/monthly-plan'
    },
    {
      title: 'Plan classes for the year',
      description: 'Plan your entire academic year from July to March',
      icon: <CalendarViewMonthIcon sx={{ fontSize: 40 }} />,
      path: '/yearly-plan'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 8,
          background: 'linear-gradient(45deg, #fff5f5 30%, #ffffff 90%)',
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
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
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #d32f2f 30%, #f44336 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Choose Your Planning Option
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
          {options.map((option, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 6px 12px rgba(211, 47, 47, 0.15)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {option.icon}
                </Box>
                <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                  {option.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {option.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(option.path)}
                  sx={{ 
                    mt: 'auto',
                    px: 4,
                    py: 1.5,
                    boxShadow: '0 4px 6px rgba(211, 47, 47, 0.2)',
                    '&:hover': {
                      boxShadow: '0 6px 8px rgba(211, 47, 47, 0.3)',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OptionsPage; 