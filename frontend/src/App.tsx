import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import WelcomePage from './components/WelcomePage';
import UserDetailsPage from './components/UserDetailsPage';
import ProgramDurationPage from './components/ProgramDurationPage';
import OptionsPage from './components/OptionsPage';
import MonthlyPlanPage from './components/MonthlyPlanPage';
import YearlyPlanPage from './components/YearlyPlanPage';
import ResourcesPage from './components/ResourcesPage';
import { UserDetailsProvider } from './UserDetailsContext';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d32f2f', // Deep red
      light: '#ff6659',
      dark: '#9a0007',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f44336', // Lighter red
      light: '#ff7961',
      dark: '#ba000d',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#fff5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <UserDetailsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/user-details" element={<UserDetailsPage />} />
            <Route path="/program-duration" element={<ProgramDurationPage />} />
            <Route path="/options" element={<OptionsPage />} />
            <Route path="/monthly-plan" element={<MonthlyPlanPage />} />
            <Route path="/yearly-plan" element={<YearlyPlanPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </UserDetailsProvider>
  );
}

export default App; 