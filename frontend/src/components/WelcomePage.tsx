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
          py: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 0 },
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
            width: { xs: 150, sm: 180, md: 200 },
            height: 'auto',
            mb: { xs: 2, sm: 4 },
          }}
        />

        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, sm: 4, md: 6 },
            width: '100%',
            maxWidth: 800,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: { xs: 2, md: 4 },
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
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Welcome to U&I Class Planning
          </Typography>

          <Box sx={{ position: 'relative', mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h1"
              sx={{
                position: 'absolute',
                left: { xs: -10, md: 0 },
                top: { xs: -25, md: -40 },
                fontSize: { xs: '2.5rem', md: '4rem' },
                color: 'primary.main',
                opacity: 0.15,
                fontWeight: 700,
                zIndex: 0,
                userSelect: 'none',
                display: { xs: 'none', sm: 'block' },
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
                px: { xs: 2, md: 4 },
                position: 'relative',
                zIndex: 1,
                fontWeight: 500,
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                lineHeight: 1.4,
              }}
            >
              It's the teacher that makes the difference, not the classroom.
            </Typography>
            <Typography
              variant="h1"
              sx={{
                position: 'absolute',
                right: { xs: -10, md: 0 },
                bottom: { xs: -25, md: -40 },
                fontSize: { xs: '2.5rem', md: '4rem' },
                color: 'primary.main',
                opacity: 0.15,
                fontWeight: 700,
                zIndex: 0,
                userSelect: 'none',
                display: { xs: 'none', sm: 'block' },
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
              mb: { xs: 4, md: 6 },
              fontWeight: 500,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
              px: { xs: 1, md: 0 },
            }}
          >
            Plan your classes effectively and make a lasting impact on your students' learning journey
          </Typography>

          <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mb: { xs: 4, md: 6 } }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRadius: 2,
                  bgcolor: 'rgba(211, 47, 47, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-5px)' },
                  },
                  textAlign: 'center',
                }}
              >
                <CalendarTodayIcon
                  sx={{
                    fontSize: { xs: 32, md: 40 },
                    color: 'primary.main',
                    mb: { xs: 1, md: 2 },
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  Monthly Planning
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '0.875rem' } }}>
                  Plan your classes week by week with detailed topic organization
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRadius: 2,
                  bgcolor: 'rgba(211, 47, 47, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-5px)' },
                  },
                  textAlign: 'center',
                }}
              >
                <TimelineIcon
                  sx={{
                    fontSize: { xs: 32, md: 40 },
                    color: 'primary.main',
                    mb: { xs: 1, md: 2 },
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  Yearly Planning
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '0.875rem' } }}>
                  Get a comprehensive view of your entire academic year
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Box
                sx={{
                  p: { xs: 2, md: 3 },
                  borderRadius: 2,
                  bgcolor: 'rgba(211, 47, 47, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-5px)' },
                  },
                  textAlign: 'center',
                }}
              >
                <ListAltIcon
                  sx={{
                    fontSize: { xs: 32, md: 40 },
                    color: 'primary.main',
                    mb: { xs: 1, md: 2 },
                  }}
                />
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                  Resources
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.9rem', md: '0.875rem' } }}>
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
            fullWidth
            sx={{
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: '1rem', md: '1.2rem' },
              borderRadius: 3,
              maxWidth: { xs: '100%', sm: '300px' },
              boxShadow: '0 4px 6px rgba(211, 47, 47, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 8px rgba(211, 47, 47, 0.3)',
                transform: { xs: 'none', md: 'translateY(-2px)' },
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