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

const literacyLevels = [
  {
    level: 'Letter Level',
    color: '#4caf50',
    description: 'Foundation of reading and writing through letter recognition and phonics',
    prerequisites: 'None - This is the starting level for all students',
    coverage: [
      'Alphabet recognition (uppercase and lowercase)',
      'Letter-sound correspondences (phonics)',
      'Beginning, middle, and ending sounds in words',
      'Simple CVC words (cat, pin, bug)',
      'Consonant blends and vowel digraphs',
      'Basic sight words and vocabulary building'
    ],
    redFlags: 'All students begin at Letter Level regardless of their current abilities. Teachers should adapt instruction to meet each child where they are.'
  },
  {
    level: 'Word Level',
    color: '#2196f3',
    description: 'Building vocabulary and understanding word structure and grammar',
    prerequisites: 'Letter Level completion - solid phonics foundation required',
    coverage: [
      'Parts of speech (nouns, pronouns, verbs, adjectives)',
      'Articles (a, an, the) and their usage',
      'Simple sentence construction',
      'Conversational skills and greetings',
      'Subject-verb agreement',
      'Prepositions and WH questions'
    ],
    placementIndicators: {
      ready: [
        'Can read simple CVC words independently',
        'Knows most letter sounds confidently',
        'Can blend sounds to make words',
        'Recognizes 20-30 sight words',
        'Can write simple words with minimal help'
      ],
      needsPrevious: [
        'Struggles with basic phonics (letter sounds)',
        'Cannot read simple 3-letter words',
        'Knows fewer than 10 sight words',
        'Cannot write recognizable letters consistently'
      ]
    },
    redFlags: 'Without solid phonics skills from Letter Level, children will struggle with word formation and reading comprehension at this level.'
  },
  {
    level: 'Sentence Level',
    color: '#ff9800',
    description: 'Constructing sentences and understanding grammar rules',
    prerequisites: 'Word Level completion - must understand basic parts of speech',
    coverage: [
      'Subject and predicate identification',
      'Simple, compound, and complex sentences',
      'Following and giving multi-step instructions',
      'Contractions and possessive forms',
      'Punctuation (periods, commas, question marks)',
      'Past, present, and future tenses',
      'Turn-taking in conversations'
    ],
    placementIndicators: {
      ready: [
        'Can identify nouns, verbs, and adjectives in sentences',
        'Uses articles (a, an, the) correctly most of the time',
        'Can construct simple 4-5 word sentences',
        'Understands basic grammar rules',
        'Can hold simple conversations'
      ],
      needsPrevious: [
        'Cannot identify basic parts of speech',
        'Struggles with simple sentence formation',
        'Doesn\'t understand articles or pronouns',
        'Cannot engage in basic conversations'
      ]
    },
    redFlags: 'Children who cannot form basic sentences or identify parts of speech need more time at Word Level to build grammar foundations.'
  },
  {
    level: 'Story Level',
    color: '#9c27b0',
    description: 'Reading comprehension, storytelling, and advanced language skills',
    prerequisites: 'Sentence Level completion - must be able to construct varied sentence types',
    coverage: [
      'Understanding idioms and metaphors',
      'Converting between affirmative and negative sentences',
      'Advanced tense usage and writing prompts',
      'Voice modulation and expression',
      'Story structure (beginning, middle, end)',
      'Character and plot development',
      'Presentation skills and active listening'
    ],
    placementIndicators: {
      ready: [
        'Can write and speak in complete sentences confidently',
        'Understands different sentence types',
        'Can use punctuation correctly',
        'Can follow multi-step instructions',
        'Shows interest in storytelling'
      ],
      needsPrevious: [
        'Still struggles with basic sentence construction',
        'Cannot use punctuation correctly',
        'Doesn\'t understand different tenses',
        'Cannot follow simple instructions'
      ]
    },
    redFlags: 'Students who cannot construct proper sentences or understand basic grammar concepts will struggle with story comprehension and creation.'
  },
  {
    level: 'Advanced Level',
    color: '#795548',
    description: 'Complex language skills, advanced grammar, and literary analysis',
    prerequisites: 'Story Level completion - must be comfortable with storytelling and presentations',
    coverage: [
      'Complex idioms, metaphors, and similes',
      'All tense forms (present, past, future with variations)',
      'Advanced sentence types and voice modulation',
      'Paragraph structure and essay writing',
      'Plot development and character creation',
      'Advanced presentation skills with visual aids',
      'Critical thinking and literary analysis'
    ],
    placementIndicators: {
      ready: [
        'Can tell coherent stories with clear structure',
        'Uses varied sentence types and punctuation',
        'Understands basic story elements',
        'Can present ideas clearly to others',
        'Shows advanced vocabulary usage'
      ],
      needsPrevious: [
        'Cannot tell simple stories coherently',
        'Limited sentence variety and structure',
        'Basic vocabulary and expression issues',
        'Struggles with presentations or explanations'
      ]
    },
    redFlags: 'Students need strong storytelling abilities and presentation skills before attempting advanced literary concepts and complex writing tasks.'
  }
];

const ResourcesPage: React.FC = () => {
  const [showBasics, setShowBasics] = useState(false);
  const [showStrategies, setShowStrategies] = useState(false);
  const [showRubrics, setShowRubrics] = useState(false);
  const [showLiteracyLevels, setShowLiteracyLevels] = useState(false);

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
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                cursor: 'pointer',
                background: showBasics ? 'linear-gradient(45deg, #f8bbd0 30%, #fff 90%)' : 'rgba(255,255,255,0.95)',
                border: showBasics ? '2px solid #d32f2f' : '1px solid #e0e0e0',
                boxShadow: showBasics ? 6 : 2,
                transition: 'all 0.2s',
              }}
              onClick={() => { setShowBasics(true); setShowStrategies(false); setShowRubrics(false); setShowLiteracyLevels(false); }}
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
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                cursor: 'pointer',
                background: showStrategies ? 'linear-gradient(45deg, #bbdefb 30%, #fff 90%)' : 'rgba(255,255,255,0.95)',
                border: showStrategies ? '2px solid #1976d2' : '1px solid #e0e0e0',
                boxShadow: showStrategies ? 6 : 2,
                transition: 'all 0.2s',
              }}
              onClick={() => { setShowStrategies(true); setShowBasics(false); setShowRubrics(false); setShowLiteracyLevels(false); }}
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
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                cursor: 'pointer',
                background: showRubrics ? 'linear-gradient(45deg, #e1bee7 30%, #fff 90%)' : 'rgba(255,255,255,0.95)',
                border: showRubrics ? '2px solid #8e24aa' : '1px solid #e0e0e0',
                boxShadow: showRubrics ? 6 : 2,
                transition: 'all 0.2s',
              }}
              onClick={() => { setShowRubrics(true); setShowBasics(false); setShowStrategies(false); setShowLiteracyLevels(false); }}
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
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                cursor: 'pointer',
                background: showLiteracyLevels ? 'linear-gradient(45deg, #c8e6c9 30%, #fff 90%)' : 'rgba(255,255,255,0.95)',
                border: showLiteracyLevels ? '2px solid #4caf50' : '1px solid #e0e0e0',
                boxShadow: showLiteracyLevels ? 6 : 2,
                transition: 'all 0.2s',
              }}
              onClick={() => { setShowLiteracyLevels(true); setShowBasics(false); setShowStrategies(false); setShowRubrics(false); }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#4caf50', mb: 1 }}>
                  Foundational Literacy Level Guide
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Placement guide for literacy levels and student assessment
                </Typography>
              </CardContent>
            </Card>
          </Grid>
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

        {showLiteracyLevels && (
          <Paper elevation={4} sx={{ p: 4, maxWidth: 1200, width: '100%', mb: 4, background: 'rgba(255,255,255,0.98)' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#4caf50', mb: 3, textAlign: 'center' }}>
              Foundational Literacy Level Guide
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#333', textAlign: 'center', fontSize: '1.1rem' }}>
              This guide helps you assess which literacy level is appropriate for each student. Each level builds on the previous one, 
              so it's crucial to ensure students have mastered the prerequisites before advancing.
            </Typography>
            
            <Grid container spacing={3}>
              {literacyLevels.map((level, idx) => (
                <Grid item xs={12} key={level.level}>
                  <Paper 
                    elevation={3} 
                    sx={{ 
                      p: 3, 
                      mb: 2, 
                      background: `linear-gradient(45deg, ${level.color}20 30%, #fff 90%)`,
                      border: `2px solid ${level.color}`,
                      borderRadius: 2
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, color: level.color, mb: 2, display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        backgroundColor: level.color, 
                        color: 'white', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontWeight: 700, 
                        mr: 2 
                      }}>
                        {idx + 1}
                      </Box>
                      {level.level}
                    </Typography>
                    
                    <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic', color: '#555' }}>
                      {level.description}
                    </Typography>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
                        Prerequisites:
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                        {level.prerequisites}
                      </Typography>
                    </Box>

                    <Grid container spacing={2}>
                      <Grid item xs={12} md={level.placementIndicators ? 4 : 12}>
                        <Box sx={{ background: '#fff', p: 2, borderRadius: 1, border: '1px solid #e0e0e0' }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: level.color, mb: 1 }}>
                            Topics Covered:
                          </Typography>
                          <ul style={{ margin: 0, paddingLeft: 20 }}>
                            {level.coverage.map((topic, i) => (
                              <li key={i} style={{ marginBottom: 4, fontSize: '0.9rem' }}>{topic}</li>
                            ))}
                          </ul>
                        </Box>
                      </Grid>
                      
                      {level.placementIndicators && (
                        <>
                          <Grid item xs={12} md={4}>
                            <Box sx={{ background: '#e8f5e8', p: 2, borderRadius: 1, border: '1px solid #4caf50' }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: '#2e7d32', mb: 1 }}>
                                ✓ Ready for this level if student:
                              </Typography>
                              <ul style={{ margin: 0, paddingLeft: 20 }}>
                                {level.placementIndicators.ready.map((indicator, i) => (
                                  <li key={i} style={{ marginBottom: 4, fontSize: '0.9rem' }}>{indicator}</li>
                                ))}
                              </ul>
                            </Box>
                          </Grid>
                          
                          <Grid item xs={12} md={4}>
                            <Box sx={{ background: '#fff3e0', p: 2, borderRadius: 1, border: '1px solid #ff9800' }}>
                              <Typography variant="h6" sx={{ fontWeight: 600, color: '#e65100', mb: 1 }}>
                                ⚠ Needs previous level if student:
                              </Typography>
                              <ul style={{ margin: 0, paddingLeft: 20 }}>
                                {level.placementIndicators.needsPrevious?.map((indicator, i) => (
                                  <li key={i} style={{ marginBottom: 4, fontSize: '0.9rem' }}>{indicator}</li>
                                ))}
                              </ul>
                            </Box>
                          </Grid>
                        </>
                      )}
                    </Grid>
                    
                    <Box sx={{ mt: 2, p: 2, background: '#ffebee', borderRadius: 1, border: '1px solid #f44336' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#c62828', mb: 1 }}>
                        🚩 Red Flag - Placement Concern:
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#d32f2f' }}>
                        {level.redFlags}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ mt: 4, p: 3, background: '#e3f2fd', borderRadius: 2, border: '2px solid #1976d2' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#1565c0', mb: 2 }}>
                💡 Quick Assessment Tips:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>• Letter Level Assessment:</Typography>
                  <Typography variant="body2" sx={{ mb: 2, ml: 2 }}>Ask child to identify 10 random letters and their sounds</Typography>
                  
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>• Word Level Assessment:</Typography>
                  <Typography variant="body2" sx={{ mb: 2, ml: 2 }}>Have them read simple CVC words (cat, dog, run) and identify parts of speech</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>• Sentence Level Assessment:</Typography>
                  <Typography variant="body2" sx={{ mb: 2, ml: 2 }}>Ask them to construct a sentence and identify subject/predicate</Typography>
                  
                  <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>• Story Level Assessment:</Typography>
                  <Typography variant="body2" sx={{ mb: 2, ml: 2 }}>Have them tell a simple story with beginning, middle, and end</Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        )}

        {/* Other resources can go here */}
      </Box>
    </Container>
  );
};

export default ResourcesPage; 