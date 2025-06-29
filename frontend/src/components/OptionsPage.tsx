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
          py: { xs: 4, sm: 6, md: 8 },
          px: { xs: 2, sm: 0 },
          background: 'linear-gradient(45deg, #fff5f5 30%, #ffffff 90%)',
        }}
      >
        <Box sx={{ mb: { xs: 3, md: 4 }, textAlign: 'center' }}>
          <img 
            src={logo} 
            alt="U&I Logo" 
            style={{ 
              maxWidth: '120px',
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
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
              px: { xs: 1, md: 0 },
            }}
          >
            Choose Your Planning Option
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ maxWidth: 1200, width: '100%' }}>
          {options.map((option, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: { xs: 2, md: 3 },
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-4px)' },
                    boxShadow: '0 6px 12px rgba(211, 47, 47, 0.15)',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: { xs: 1.5, md: 2 } }}>
                  <Box sx={{ fontSize: { xs: 32, md: 40 } }}>
                    {option.icon}
                  </Box>
                </Box>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    mb: { xs: 1, md: 1 },
                  }}
                >
                  {option.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary" 
                  sx={{ 
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    lineHeight: 1.5,
                  }}
                >
                  {option.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate(option.path)}
                  fullWidth
                  sx={{ 
                    mt: 'auto',
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.2, md: 1.5 },
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    maxWidth: { xs: '100%', sm: '200px' },
                    boxShadow: '0 4px 6px rgba(211, 47, 47, 0.2)',
                    '&:hover': {
                      boxShadow: '0 6px 8px rgba(211, 47, 47, 0.3)',
                      transform: { xs: 'none', md: 'translateY(-1px)' },
                    },
                    transition: 'all 0.2s',
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