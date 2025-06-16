import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import logo from './U&I Logo - Red.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const basicsSteps = [
  {
    label: 'Introduction',
    color: '#f8bbd0',
    description: `The Introduction captures students' interest and provides a preview of the lesson. It connects the content to students' prior knowledge and experiences, making the material more relatable and engaging.`
  },
  {
    label: 'Define',
    color: '#f8bbd0',
    description: `In the Define section, key concepts and terms are explained. This foundational knowledge is essential for understanding the lesson. Clear definitions and visual aids help reinforce new vocabulary and ideas.`
  },
  {
    label: 'Modelling',
    color: '#f8bbd0',
    description: `Modelling involves demonstrating the skill or concept being taught. By working through examples step-by-step and thinking aloud, you show students how to approach a problem or perform a task, providing a clear illustration of the process.`
  },
  {
    label: 'Guided Practice',
    color: '#f8bbd0',
    description: `During Guided Practice, students apply what they have learned with your support. This phase involves collaborative activities where you provide immediate feedback, helping students build confidence and competence through practice.`
  },
  {
    label: 'Reflection',
    color: '#f8bbd0',
    description: `Reflection allows students to consolidate their learning. They review what they have learned, discuss challenges, and think about how to apply their new knowledge in different contexts. This step encourages deeper understanding and retention of the lesson content.`
  },
];

const strategies = [
  {
    icon: '🗝️',
    title: 'Foster Key Skills',
    desc: `As a teacher, focus on developing essential social skills like communication, curiosity, and empathy in your students.`
  },
  {
    icon: '💬',
    title: 'Encourage Open Dialogue',
    desc: `Create a classroom environment that promotes open dialogue and safe expression.`
  },
  {
    icon: '🤝',
    title: 'Build Collaboration',
    desc: `Use group activities to enhance collaboration and active listening skills among students.`
  },
  {
    icon: '🌱',
    title: 'Stimulate Curiosity',
    desc: `Encourage curiosity by asking thought-provoking questions and exploring students' interests.`
  },
  {
    icon: '🫂',
    title: 'Model Empathy',
    desc: `Demonstrate empathy by showing genuine interest in students' experiences and discussing diverse perspectives.`
  },
  {
    icon: '⭐',
    title: 'Provide Constructive Feedback',
    desc: `Offer supportive, constructive feedback to help improve students' social interactions.`
  },
  {
    icon: '🏁',
    title: 'Lead by Example',
    desc: `Set a powerful precedent with your behavior and use teaching techniques from the resource website based on students' needs.`
  },
];

const knowledgePitstopRubrics = {
  title: 'KNOWLEDGE PITSTOP',
  subtitle: 'RUBRICS',
  sections: [
    {
      heading: 'Understanding (2 points)',
      items: [
        '4: Demonstrates a complete understanding of the concept and answers correctly.',
        '3: Demonstrates a good understanding but makes a minor error.',
        '2: Shows partial understanding but has several errors.',
        '1: Shows minimal understanding and many errors.',
        '0: No understanding demonstrated.'
      ]
    },
    {
      heading: 'Accuracy (2 points)',
      items: [
        '4: All parts of the question are answered accurately.',
        '3: Most parts are answered accurately with one or two minor mistakes.',
        '2: Some parts are accurate, but there are several mistakes.',
        '1: Few parts are accurate with many mistakes.',
        '0: No parts are answered accurately.'
      ]
    },
    {
      heading: 'Effort (1 point)',
      items: [
        '2: Shows full effort and tries to answer all parts of the question.',
        '1: Shows some effort but does not fully attempt all parts of the question.',
        '0: Shows little to no effort in attempting the question.'
      ]
    }
  ],
  how: `When assessing students, understanding evaluates their grasp of concepts, like identifying letter sounds in phonics. Accuracy checks the correctness of their answers, such as writing the correct sounds for given letters. Effort measures their diligence, like attempting all parts of a question even if some answers are wrong. For example, if a student writes "c–a–t" for "cat" with some errors but tries every part, they may score well on effort, partial on understanding, and moderate on accuracy, providing a comprehensive evaluation.`
};

const ResourcesPage: React.FC = () => {
  const [showBasics, setShowBasics] = useState(false);
  const [showStrategies, setShowStrategies] = useState(false);
  const [showRubrics, setShowRubrics] = useState(false);

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
            Resources for Class Planning
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 4, width: '100%', maxWidth: 900 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                cursor: 'pointer',
                background: showBasics ? 'linear-gradient(45deg, #f8bbd0 30%, #fff 90%)' : 'rgba(255,255,255,0.95)',
                border: showBasics ? '2px solid #d32f2f' : '1px solid #e0e0e0',
                boxShadow: showBasics ? 6 : 2,
                transition: 'all 0.2s',
              }}
              onClick={() => { setShowBasics(true); setShowStrategies(false); setShowRubrics(false); }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
                  Basics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lesson structure, pedagogy, and core teaching steps
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                cursor: 'pointer',
                background: showStrategies ? 'linear-gradient(45deg, #bbdefb 30%, #fff 90%)' : 'rgba(255,255,255,0.95)',
                border: showStrategies ? '2px solid #1976d2' : '1px solid #e0e0e0',
                boxShadow: showStrategies ? 6 : 2,
                transition: 'all 0.2s',
              }}
              onClick={() => { setShowStrategies(true); setShowBasics(false); setShowRubrics(false); }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#1976d2', mb: 1 }}>
                  Strategies for a Complete Learning Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Key strategies for engaging and effective lessons
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                cursor: 'pointer',
                background: showRubrics ? 'linear-gradient(45deg, #e1bee7 30%, #fff 90%)' : 'rgba(255,255,255,0.95)',
                border: showRubrics ? '2px solid #8e24aa' : '1px solid #e0e0e0',
                boxShadow: showRubrics ? 6 : 2,
                transition: 'all 0.2s',
              }}
              onClick={() => { setShowRubrics(true); setShowBasics(false); setShowStrategies(false); }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#8e24aa', mb: 1 }}>
                  Knowledge Pitstop Rubrics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rubrics for understanding, accuracy, and effort
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more resource cards here if needed */}
        </Grid>

        {showBasics && (
          <Paper elevation={4} sx={{ p: 4, maxWidth: 900, width: '100%', mb: 4, background: 'rgba(255,255,255,0.98)' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 3, textAlign: 'center' }}>
              The Basics of a Great Lesson
            </Typography>
            {/* Improved Diagram: All steps in one row */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mb: 4, gap: 2, width: '100%' }}>
              <Button variant="contained" sx={{ bgcolor: '#e0e0e0', color: '#888', fontWeight: 700 }} disabled>Introduction</Button>
              <ArrowForwardIcon sx={{ fontSize: 32, color: '#1976d2' }} />
              <Button variant="contained" sx={{ bgcolor: '#e0e0e0', color: '#888', fontWeight: 700 }} disabled>Define</Button>
              <ArrowForwardIcon sx={{ fontSize: 32, color: '#1976d2' }} />
              <Button variant="contained" sx={{ bgcolor: '#e0e0e0', color: '#888', fontWeight: 700 }} disabled>Modelling</Button>
              <ArrowForwardIcon sx={{ fontSize: 32, color: '#1976d2' }} />
              <Button variant="contained" sx={{ bgcolor: '#e0e0e0', color: '#888', fontWeight: 700 }} disabled>Guided Practice</Button>
              <ArrowForwardIcon sx={{ fontSize: 32, color: '#1976d2' }} />
              <Button variant="contained" sx={{ bgcolor: '#e0e0e0', color: '#888', fontWeight: 700 }} disabled>Reflection</Button>
            </Box>
            <Divider sx={{ mb: 3 }} />
            {/* Step Descriptions */}
            {basicsSteps.map((step, idx) => (
              <Box key={step.label} sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  {step.label}
                </Typography>
                <Typography variant="body1" sx={{ color: '#333', mb: 1 }}>
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Paper>
        )}

        {showStrategies && (
          <Paper elevation={4} sx={{ p: 4, maxWidth: 900, width: '100%', mb: 4, background: 'rgba(255,255,255,0.98)' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1976d2', mb: 2, textAlign: 'center' }}>
              STRATEGIES FOR A COMPLETE LEARNING EXPERIENCE
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#333', textAlign: 'center' }}>
              This comprehensive resource is designed to support you in delivering engaging and effective lessons to your students. The guide is structured into several key components, each playing a role in creating a good class experience for the student. Below, you'll find an overview of these components:
            </Typography>
            <Grid container spacing={3}>
              {strategies.map((s, idx) => (
                <Grid item xs={12} sm={6} md={6} key={s.title}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ fontSize: 36, mr: 2 }}>{s.icon}</Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {s.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#333' }}>{s.desc}</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        )}

        {showRubrics && (
          <Paper elevation={4} sx={{ p: 4, maxWidth: 900, width: '100%', mb: 4, background: 'linear-gradient(45deg, #e1bee7 30%, #fff 90%)', border: '2px solid #8e24aa' }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h3" sx={{ fontWeight: 700, color: '#d81b60', letterSpacing: 2, mb: 0 }}>
                {knowledgePitstopRubrics.title}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 500, color: '#333', mb: 2, letterSpacing: 1 }}>
                {knowledgePitstopRubrics.subtitle}
              </Typography>
            </Box>
            {knowledgePitstopRubrics.sections.map((section, idx) => (
              <Box key={section.heading} sx={{ mb: 3, background: '#fff', border: '2px solid #8e24aa', borderRadius: 2, p: 2, boxShadow: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#222', mb: 1 }}>
                  {section.heading}
                </Typography>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {section.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: 2, fontSize: 16 }}>{item}</li>
                  ))}
                </ul>
              </Box>
            ))}
            <Box sx={{ mt: 3, background: '#fff', border: '2px solid #d81b60', borderRadius: 2, p: 2, boxShadow: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#d81b60', mb: 1, letterSpacing: 1 }}>
                HOW?
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#333' }}>
                {knowledgePitstopRubrics.how}
              </Typography>
            </Box>
          </Paper>
        )}

        {/* Other resources can go here */}
      </Box>
    </Container>
  );
};

export default ResourcesPage; 