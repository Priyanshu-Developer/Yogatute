'use client';
// pages/About.tsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
  Button,
  useTheme,
  Divider,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import GroupIcon from '@mui/icons-material/Group';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.accent.cream} 100%)`,
  padding: theme.spacing(12, 0, 8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 30% 20%, ${theme.palette.primary.main}10 0%, transparent 50%)`,
    pointerEvents: 'none',
  }
}));

const HeroContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  }
}));

const HeroText = styled(Box)(({ theme }) => ({
  flex: '2',
  [theme.breakpoints.down('md')]: {
    flex: '1',
  }
}));

const HeroImage = styled(Box)(({ theme }) => ({
  flex: '1',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: '400px',
  }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.accent.cream} 100%)`,
  border: `1px solid ${theme.palette.primary.main}20`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 48px ${theme.palette.primary.main}15`,
  },
}));

const ValuesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}));

const ValueCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  background: `linear-gradient(135deg, ${theme.palette.yoga.peace} 0%, ${theme.palette.background.paper} 100%)`,
  border: `2px solid ${theme.palette.primary.main}20`,
  borderRadius: '24px',
  transition: 'all 0.3s ease',
  flex: '1',
  minWidth: '250px',
  maxWidth: '300px',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 48px ${theme.palette.primary.main}20`,
  }
}));

const VisionMissionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}));

const VisionMissionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.yoga.peace} 100%)`,
  border: `1px solid ${theme.palette.primary.main}15`,
  borderRadius: '24px',
  flex: '1',
}));

const TeachersContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  justifyContent: 'center',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const TeacherCard = styled(StyledCard)(({ theme }) => ({
  flex: '1',
  minWidth: '320px',
  maxWidth: '400px',
  [theme.breakpoints.down('lg')]: {
    maxWidth: '500px',
    width: '100%',
  }
}));

const PhilosophyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}));

const About: React.FC = () => {
  const theme = useTheme();

  const values = [
    {
      title: "Honesty",
      description: "We believe in authentic practice and transparent communication with our community.",
      icon: <FavoriteIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    },
    {
      title: "Wisdom",
      description: "Drawing from ancient yogic traditions while embracing modern teaching methods.",
      icon: <SchoolIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    },
    {
      title: "Love",
      description: "Fostering compassion and connection through mindful practice and community.",
      icon: <FavoriteIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    },
    {
      title: "Compassion",
      description: "Creating a supportive environment where everyone feels welcomed and valued.",
      icon: <GroupIcon sx={{ fontSize: 48, color: theme.palette.primary.main }} />
    }
  ];

  const teachers = [
    {
      name: "Sushma",
      title: "Founder & Lead Instructor",
      credentials: ["International Diamond Yoga Ambassador", "Certified 1500 EIYT", "MBA in Hospital & Healthcare Management"],
      experience: "21+ Years",
      specialties: ["Hatha Yoga", "Teacher Training", "Mindfulness", "Wellness Coaching"],
      image: "/api/placeholder/200/200",
      bio: "Sushma is a distinguished wellness expert with over 21 years of experience in yoga and therapy. She founded YogaTute Health in Aug 2015, driven by a deep belief in the transformative power of yoga. She completed her 200 RYT teacher training program at 1000 Yoga Bangalore, laying the foundation of YogaTute Health with a philosophy rooted in inner happiness over external rewards.",
      achievements: [
        "Founded YogaTute Health in August 2015",
        "Registered with IYS® International Yoga School",
        "Recognized by the Indian Ministry of AYUSH",
        "Completed rigorous 200 RYT training at 1000 Yoga Bangalore"
      ]
    },
    {
      name: "Mr. Ritesh",
      title: "Life Partner & Co-Founder",
      credentials: ["Yoga Practitioner", "Business Development"],
      experience: "15+ Years",
      specialties: ["Business Strategy", "Community Building", "Student Support"],
      image: "/api/placeholder/200/200",
      bio: "Mr. Ritesh provides unwavering support as Sushma's life partner and pioneer in building YogaTute Health. His dedication and commitment have helped shape the yoga temple into a nurturing sanctuary for holistic well-being.",
      achievements: [
        "Co-founded YogaTute Health",
        "Instrumental in studio development",
        "Community outreach coordinator",
        "Student mentorship programs"
      ]
    },
    {
      name: "Sital Bhandari",
      title: "YogaTute Nurturer",
      credentials: ["Advanced Yoga Practitioner", "Student Mentor"],
      experience: "10+ Years",
      specialties: ["Student Care", "Practice Guidance", "Community Support"],
      image: "/api/placeholder/200/200",
      bio: "Sital Bhandari serves as a dedicated YogaTute Nurturer, whose commitment has helped shape the yoga studio into a nurturing sanctuary. Her focus on student care and community building creates a supportive environment for all practitioners.",
      achievements: [
        "Student mentorship specialist",
        "Community wellness advocate",
        "Practice support coordinator",
        "Holistic care provider"
      ]
    },
    {
      name: "Sital Bhandari",
      title: "YogaTute Nurturer",
      credentials: ["Advanced Yoga Practitioner", "Student Mentor"],
      experience: "10+ Years",
      specialties: ["Student Care", "Practice Guidance", "Community Support"],
      image: "/api/placeholder/200/200",
      bio: "Sital Bhandari serves as a dedicated YogaTute Nurturer, whose commitment has helped shape the yoga studio into a nurturing sanctuary. Her focus on student care and community building creates a supportive environment for all practitioners.",
      achievements: [
        "Student mentorship specialist",
        "Community wellness advocate",
        "Practice support coordinator",
        "Holistic care provider"
      ]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
        <Navbar/>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <HeroContent>
            <HeroText>
              <Typography variant="h1" gutterBottom sx={{ position: 'relative' }}>
                About <span style={{ color: theme.palette.primary.main }}>YogaTute Health</span>
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: theme.palette.text.secondary, fontWeight: 400 }}>
                A transformative yoga studio founded with a vision to empower individuals from all walks of life through the practice of yoga
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                <strong>YogaTute Health</strong> is a transformative yoga studio founded with a vision to empower individuals from all walks of life through the practice of yoga. Our mission is to make the profound benefits of yoga accessible to everyone, regardless of their background, by providing high-quality instruction and a supportive community environment.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  }}
                >
                  Start Your Journey
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
                >
                  Learn More
                </Button>
              </Stack>
            </HeroText>
            <HeroImage>
              <Box
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.secondary.main}20 100%)`,
                  p: 2
                }}
              >
                <img
                  src="/yoga_model.png"
                  alt="Yoga practice at YogaTute"
                  style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
                />
              </Box>
            </HeroImage>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Philosophy Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="body1" sx={{ mb: 6, lineHeight: 1.8, fontSize: '1.1rem', textAlign: 'center' }}>
          Rooted in the belief that yoga is not just a physical exercise, but a holistic lifestyle promoting well-being, personal growth, healing, and inner peace, YogaTute Health offers a range of classes, workshops, and teacher training courses aimed at inspiring individuals to embark on a journey of self-discovery, mindfulness, and empowerment.
        </Typography>
        
        <PhilosophyContainer>
          <Paper 
            sx={{ 
              p: 4, 
              borderRadius: '24px', 
              background: `linear-gradient(135deg, ${theme.palette.yoga.peace} 0%, ${theme.palette.background.paper} 100%)`,
              border: `1px solid ${theme.palette.primary.main}15`,
              flex: '1'
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
              The founder of <strong>YogaTute Health</strong>, with a background in MBA in Hospital and Health Care Management, made the courageous decision to pursue her true passion for wellness and mindfulness. Through dedication and perseverance, the studio was established, despite initial challenges.
            </Typography>
          </Paper>
          <Paper 
            sx={{ 
              p: 4, 
              borderRadius: '24px', 
              background: `linear-gradient(135deg, ${theme.palette.accent.cream} 0%, ${theme.palette.background.paper} 100%)`,
              border: `1px solid ${theme.palette.primary.main}15`,
              flex: '1'
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.05rem' }}>
              With a deep belief in the transformative power of yoga and mindfulness, the studio aims to create a nurturing space for holistic well-being within society. YogaTute Health values honesty, wisdom, love, compassion, and integrity, and strives to embody these principles in all aspects of its operations.
            </Typography>
          </Paper>
        </PhilosophyContainer>
      </Container>

      {/* Vision & Mission Section */}
      <Box sx={{ background: `linear-gradient(135deg, ${theme.palette.accent.cream} 0%, ${theme.palette.yoga.peace} 100%)`, py: 8 }}>
        <Container maxWidth="lg">
          <VisionMissionContainer>
            <VisionMissionCard>
              <Typography variant="h3" gutterBottom sx={{ color: theme.palette.primary.main, mb: 3 }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                YogaTute Health envisions the planet where individuals from all walks of life are empowered through the transformative practice of yoga. This vision is rooted in the belief that yoga is not just a physical exercise but a holistic lifestyle to well-being, personal growth, healing, and inner peace, ultimately fostering a more harmonious and compassionate global community.
              </Typography>
            </VisionMissionCard>
            <VisionMissionCard>
              <Typography variant="h3" gutterBottom sx={{ color: theme.palette.primary.main, mb: 3 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                YogaTute Health Studio is dedicated to share the experience and teachings with passion for all who wish for a healthier and happier life. Our mission is to make the profound benefits of yoga accessible to everyone, regardless of their background. We are trying to achieve this by providing equipped infrastructure and high quality teaching that is both authentic and inclusive, respecting the diverse needs and abilities of our students.
              </Typography>
            </VisionMissionCard>
          </VisionMissionContainer>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Our <span style={{ color: theme.palette.primary.main }}>Values</span>
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: theme.palette.text.secondary }}>
          The principles that guide everything we do
        </Typography>
        
        <ValuesContainer>
          {values.map((value, index) => (
            <ValueCard key={index}>
              <Box sx={{ mb: 3 }}>
                {value.icon}
              </Box>
              <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                {value.title}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                {value.description}
              </Typography>
            </ValueCard>
          ))}
        </ValuesContainer>
        
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ 
            lineHeight: 1.8, 
            fontSize: '1.1rem', 
            fontStyle: 'italic',
            color: theme.palette.text.secondary,
            maxWidth: '800px',
            mx: 'auto'
          }}>
            &ldquo;The studio is committed to fostering a culture of positivity, resilience, and well-being, guided by the principles of yoga and self-discovery.&rdquo;
          </Typography>
        </Box>
      </Container>

      {/* Teachers Section */}
      <Box sx={{ background: theme.palette.background.default, py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Meet Our <span style={{ color: theme.palette.primary.main }}>Teachers</span>
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, color: theme.palette.text.secondary }}>
            Experienced guides dedicated to your wellness journey
          </Typography>
          
          <TeachersContainer>
            {teachers.map((teacher, index) => (
              <TeacherCard key={index}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <Avatar
                      src={teacher.image}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: 'auto',
                        mb: 2,
                        border: `4px solid ${theme.palette.primary.main}20`
                      }}
                    />
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                      {teacher.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 1 }}>
                      {teacher.title}
                    </Typography>
                    <Chip 
                      label={teacher.experience} 
                      sx={{ 
                        mb: 2, 
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  </Box>
                  
                  <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, textAlign: 'center' }}>
                    {teacher.bio}
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: theme.palette.primary.main }}>
                    Credentials:
                  </Typography>
                  <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {teacher.credentials.map((credential, idx) => (
                      <Chip 
                        key={idx}
                        label={credential}
                        size="small"
                        variant="outlined"
                        sx={{ 
                          borderColor: theme.palette.primary.main,
                          fontSize: '0.75rem'
                        }}
                      />
                    ))}
                  </Box>
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: theme.palette.primary.main }}>
                    Specialties:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                    {teacher.specialties.map((specialty, idx) => (
                      <Chip 
                        key={idx}
                        label={specialty}
                        size="small"
                        sx={{ 
                          bgcolor: theme.palette.accent.warm, 
                          color: 'white',
                          fontSize: '0.75rem'
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </TeacherCard>
            ))}
          </TeachersContainer>
        </Container>
      </Box>

      {/* Journey Continues Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper 
          sx={{ 
            p: 6, 
            borderRadius: '24px', 
            background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
            border: `1px solid ${theme.palette.primary.main}20`,
            textAlign: 'center'
          }}
        >
          <Typography variant="h3" gutterBottom sx={{ color: theme.palette.primary.main }}>
            The Journey Continues
          </Typography>
          <Typography variant="body1" sx={{ 
            lineHeight: 1.8, 
            fontSize: '1.1rem', 
            mb: 4,
            maxWidth: '800px',
            mx: 'auto'
          }}>
            Together, they remain devoted to promoting health and mindfulness, inspiring individuals to embark on a transformative journey through yoga and self-discovery. At YogaTute Health, we believe in creating a supportive community where practitioners connect, learn, and grow together, supporting us in fostering a culture of positivity, resilience, and well-being.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            Join Our Community
          </Button>
        </Paper>
      </Container>
      <Footer/>
    </Box>
  );
};

export default About;
