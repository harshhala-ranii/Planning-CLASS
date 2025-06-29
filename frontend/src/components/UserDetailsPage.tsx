import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './U&I Logo - Red.png';
import { useUserDetails } from '../UserDetailsContext';
import { buildApiUrl } from '../config';

interface ProgramLevels {
  'Foundational Literacy': string[];
  'Foundational Numeracy': string[];
}

const programLevels: ProgramLevels = {
  'Foundational Literacy': [
    'Letter Level',
    'Word Level',
    'Sentence Level',
    'Story Level',
    'Advanced Level'
  ],
  'Foundational Numeracy': [
    'Beginner Level',
    'M Level 1',
    'M Level 2'
  ]
};

const gradeOptions: { [level: string]: string[] } = {
  'Beginner Level': ['Grade LKG to 1', 'Grade 2 and 3', 'Grade 4'],
  'M Level 1': ['Grade 2 and 3', 'Grade 4 and above'],
  'M Level 2': ['Grade 2 and 3', 'Grade 4 and above'],
};

const UserDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserDetails } = useUserDetails();
  const [formData, setFormData] = useState({
    name: '',
    centre_name: '',
    program: '',
    level: '',
    duration: '',
    grade: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProgramChange = (event: SelectChangeEvent) => {
    const program = event.target.value;
    setFormData(prev => ({
      ...prev,
      program,
      level: '' // Reset level when program changes
    }));
  };

  const handleLevelChange = (event: SelectChangeEvent) => {
    setFormData(prev => ({
      ...prev,
      level: event.target.value,
      grade: '', // Reset grade when level changes
    }));
  };

  const handleGradeChange = (event: SelectChangeEvent) => {
    setFormData(prev => ({
      ...prev,
      grade: event.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!formData.name || !formData.centre_name || !formData.program || !formData.level || !formData.duration || (formData.program === 'Foundational Numeracy' && !formData.grade)) {
        alert('Please fill in all fields');
        return;
      }

      await axios.post(buildApiUrl('user-details'), formData);
      setUserDetails(formData);
      navigate('/options');
    } catch (error) {
      console.error('Error saving user details:', error);
      alert('Error saving details. Please try again.');
    }
  };

  const handleDurationChange = (event: SelectChangeEvent) => {
    setFormData(prev => ({
      ...prev,
      duration: event.target.value
    }));
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
            p: { xs: 2, sm: 3, md: 4 },
            width: '100%',
            maxWidth: 600,
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderRadius: { xs: 2, md: 3 },
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
              mb: { xs: 3, md: 4 },
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            }}
          >
            Enter Your Details
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />

            <TextField
              label="Centre Name"
              name="centre_name"
              value={formData.centre_name}
              onChange={handleInputChange}
              fullWidth
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />

            <FormControl fullWidth required>
              <InputLabel>Program</InputLabel>
              <Select
                value={formData.program}
                label="Program"
                onChange={handleProgramChange}
                sx={{
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                {Object.keys(programLevels).map((program) => (
                  <MenuItem key={program} value={program}>
                    {program}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {formData.program && (
              <FormControl fullWidth required>
                <InputLabel>Level</InputLabel>
                <Select
                  value={formData.level}
                  label="Level"
                  onChange={handleLevelChange}
                  sx={{
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  {programLevels[formData.program as keyof ProgramLevels].map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            {formData.program === 'Foundational Numeracy' && gradeOptions[formData.level] && (
              <FormControl fullWidth required>
                <InputLabel>Grade</InputLabel>
                <Select
                  value={formData.grade}
                  label="Grade"
                  onChange={handleGradeChange}
                  sx={{
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  {gradeOptions[formData.level].map((grade) => (
                    <MenuItem key={grade} value={grade}>
                      {grade}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}

            <Alert severity="info" sx={{ mb: { xs: 1.5, md: 2 } }}>
              <Typography variant="body2" sx={{ fontWeight: 500, fontSize: { xs: '0.875rem', md: '0.875rem' } }}>
                Important: Please consult with your leader before selecting the program duration.
                This decision should be based on the student's learning pace and capabilities.
              </Typography>
            </Alert>

            <Box sx={{ mb: { xs: 1.5, md: 2 } }}>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: { xs: '0.85rem', md: '0.875rem' } }}>
                Consider the following factors when selecting the duration:
              </Typography>
              <Typography component="ul" variant="body2" color="text.secondary" sx={{ pl: 2, fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
                <li>Student's current learning pace and capabilities</li>
                <li>Previous performance in similar programs</li>
                <li>Available time for practice and reinforcement</li>
                <li>Support available at home and in the community</li>
              </Typography>
            </Box>

            <FormControl fullWidth required>
              <InputLabel>Duration to Complete Level</InputLabel>
              <Select
                value={formData.duration}
                label="Duration to Complete Level"
                onChange={handleDurationChange}
                sx={{
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <MenuItem value="half">Half Year (5 months) - For students who learn quickly and have strong support systems</MenuItem>
                <MenuItem value="full">Full Year (9 months) - For students who need more time to master concepts</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              size="large"
              fullWidth
              sx={{
                mt: { xs: 2, md: 2 },
                py: { xs: 1.2, md: 1.5 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                boxShadow: '0 4px 6px rgba(211, 47, 47, 0.2)',
                '&:hover': {
                  boxShadow: '0 6px 8px rgba(211, 47, 47, 0.3)',
                  transform: { xs: 'none', md: 'translateY(-1px)' },
                },
                transition: 'all 0.2s',
              }}
            >
              Continue
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default UserDetailsPage; 