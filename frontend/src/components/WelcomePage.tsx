import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimelineIcon from '@mui/icons-material/Timeline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import logo from './U&I Logo - Red.png';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/user-details');
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
            p: 6,
            width: '100%',
            maxWidth: 800,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Welcome to U&I Class Planning
          </Typography>

          <Box sx={{ position: 'relative', mb: 6 }}>
            <Typography
              variant="h1"
              sx={{
                position: 'absolute',
                left: 0,
                top: -40,
                fontSize: '4rem',
                color: 'primary.main',
                opacity: 0.15,
                fontWeight: 700,
                zIndex: 0,
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              "
            </Typography>
            <Typography
              variant="h5"
              component="blockquote"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
                px: 4,
                position: 'relative',
                zIndex: 1,
                fontWeight: 500,
              }}
            >
              It's the teacher that makes the difference, not the classroom.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                position: 'absolute',
                right: 0,
                bottom: -40,
                fontSize: '4rem',
                color: 'primary.main',
                opacity: 0.15,
                fontWeight: 700,
                zIndex: 0,
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              "
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 6,
              fontWeight: 500,
            }}
          >
            Plan your classes effectively and make a lasting impact on your students' learning journey
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'rgba(211, 47, 47, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CalendarTodayIcon
                  sx={{
                    fontSize: 40,
                    color: 'primary.main',
                    mb: 2,
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Monthly Planning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plan your classes week by week with detailed topic organization
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'rgba(211, 47, 47, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <TimelineIcon
                  sx={{
                    fontSize: 40,
                    color: 'primary.main',
                    mb: 2,
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Yearly Planning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get a comprehensive view of your entire academic year
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: 'rgba(211, 47, 47, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <ListAltIcon
                  sx={{
                    fontSize: 40,
                    color: 'primary.main',
                    mb: 2,
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Resources
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access teaching materials and learning resources
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleGetStarted}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              borderRadius: 3,
              boxShadow: '0 4px 6px rgba(211, 47, 47, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 8px rgba(211, 47, 47, 0.3)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s',
            }}
          >
            Get Started
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default WelcomePage; 