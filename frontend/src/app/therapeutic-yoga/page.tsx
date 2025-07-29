// pages/YogaTypes.tsx
'use client';
import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  TextField,
  InputAdornment,
  useTheme,
  Paper,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface YogaType {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  duration: string;
  participants: string;
  category: string;
  difficulty: string;
  detailedDescription: string;
}

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
    background: `radial-gradient(circle at 70% 30%, ${theme.palette.primary.main}15 0%, transparent 50%)`,
    pointerEvents: 'none',
  }
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  }
}));

const YogaTypesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const YogaTypeCard = styled(Card)(({ theme }) => ({
  flex: '1',
  minWidth: '350px',
  maxWidth: '400px',
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.accent.cream} 100%)`,
  border: `1px solid ${theme.palette.primary.main}20`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 48px ${theme.palette.primary.main}20`,
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    width: '100%',
  }
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  borderRadius: '20px',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
  }
}));

const BenefitChip = styled(Chip)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.accent.warm}20 0%, ${theme.palette.primary.main}20 100%)`,
  color: theme.palette.primary.main,
  fontWeight: 500,
  border: `1px solid ${theme.palette.primary.main}30`,
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const YogaTypes: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const yogaTypes: YogaType[] = [
    {
      id: 'frozen-shoulder',
      title: 'Frozen Shoulder',
      description: 'Specialized yoga therapy for shoulder mobility and pain relief through gentle movements and targeted stretches.',
      icon: '🏥',
      benefits: ['Pain Relief', 'Mobility', 'Strength'],
      duration: '30-45 min',
      participants: '10-15',
      category: 'Therapeutic',
      difficulty: 'Beginner',
      detailedDescription: 'Our Frozen Shoulder program combines gentle yoga movements with targeted therapeutic exercises to restore shoulder mobility and reduce pain. Perfect for those recovering from shoulder injuries or dealing with chronic shoulder stiffness.'
    },
    {
      id: 'spinal-health',
      title: 'Spinal Health',
      description: 'Comprehensive spine care through yoga postures that strengthen, align, and heal your backbone.',
      icon: '🦴',
      benefits: ['Alignment', 'Strength', 'Flexibility'],
      duration: '45-60 min',
      participants: '8-12',
      category: 'Therapeutic',
      difficulty: 'Intermediate',
      detailedDescription: 'Focus on spinal alignment and health through carefully designed asanas that strengthen the back muscles, improve posture, and promote spinal flexibility. Ideal for desk workers and those with back concerns.'
    },
    {
      id: 'cervical-spondylosis',
      title: 'Cervical Spondylosis',
      description: 'Gentle neck and upper spine focused yoga to alleviate cervical pain and improve neck mobility.',
      icon: '🦢',
      benefits: ['Neck Relief', 'Posture', 'Mobility'],
      duration: '30-40 min',
      participants: '6-10',
      category: 'Therapeutic',
      difficulty: 'Beginner',
      detailedDescription: 'Specialized program for cervical spine health featuring gentle neck movements, shoulder releases, and posture correction techniques. Excellent for those spending long hours at computers.'
    },
    {
      id: 'circulatory-health',
      title: 'Circulatory Health',
      description: 'Heart-healthy yoga practices that improve blood circulation and cardiovascular wellness.',
      icon: '❤️',
      benefits: ['Heart Health', 'Circulation', 'Energy'],
      duration: '45-50 min',
      participants: '12-18',
      category: 'Wellness',
      difficulty: 'Intermediate',
      detailedDescription: 'Boost your cardiovascular health with dynamic sequences that promote healthy blood circulation, strengthen the heart, and improve overall energy levels through mindful movement.'
    },
    {
      id: 'sciatica-back-pain',
      title: 'Sciatica Back Pain',
      description: 'Targeted relief for sciatic nerve pain through specific yoga poses and stretches.',
      icon: '⚡',
      benefits: ['Pain Relief', 'Nerve Health', 'Mobility'],
      duration: '35-45 min',
      participants: '8-12',
      category: 'Therapeutic',
      difficulty: 'Beginner',
      detailedDescription: 'Comprehensive approach to sciatic pain relief using gentle yoga poses that decompress the spine, stretch the piriformis muscle, and promote nerve health and healing.'
    },
    {
      id: 'joint-mobility',
      title: 'Joint Mobility',
      description: 'Enhance joint flexibility and reduce stiffness through targeted mobility exercises.',
      icon: '🤸',
      benefits: ['Flexibility', 'Mobility', 'Strength'],
      duration: '40-50 min',
      participants: '10-15',
      category: 'Fitness',
      difficulty: 'Intermediate',
      detailedDescription: 'Comprehensive joint mobility program focusing on all major joints, improving range of motion, reducing stiffness, and maintaining healthy joint function through targeted movements.'
    },
    {
      id: 'digestive-health',
      title: 'Digestive Health',
      description: 'Yoga poses and breathing techniques to improve digestion and gut health.',
      icon: '🌱',
      benefits: ['Digestion', 'Detox', 'Energy'],
      duration: '30-40 min',
      participants: '12-16',
      category: 'Wellness',
      difficulty: 'Beginner',
      detailedDescription: 'Gentle twisting poses, forward bends, and breathing exercises designed to stimulate digestion, reduce bloating, and promote overall digestive wellness and gut health.'
    },
    {
      id: 'hormonal-health',
      title: 'Hormonal Health',
      description: 'Balance hormones naturally through specific yoga practices and meditation.',
      icon: '⚖️',
      benefits: ['Balance', 'Wellness', 'Stress Relief'],
      duration: '45-55 min',
      participants: '8-14',
      category: 'Wellness',
      difficulty: 'Intermediate',
      detailedDescription: 'Restorative yoga practices combined with specific poses that support hormonal balance, reduce stress, and promote overall endocrine system health naturally.'
    },
    {
      id: 'women-wellness',
      title: 'Women Wellness',
      description: 'Specially designed yoga program addressing women\'s unique health needs and challenges.',
      icon: '🌸',
      benefits: ['Female Health', 'Strength', 'Balance'],
      duration: '50-60 min',
      participants: '10-16',
      category: 'Specialized',
      difficulty: 'Intermediate',
      detailedDescription: 'Comprehensive women\'s wellness program addressing menstrual health, reproductive wellness, emotional balance, and physical strength through carefully curated yoga practices.'
    },
    {
      id: 'pregnancy-yoga',
      title: 'Pregnancy Yoga',
      description: 'Safe and nurturing yoga practice for expecting mothers and their growing babies.',
      icon: '🤱',
      benefits: ['Prenatal Care', 'Strength', 'Relaxation'],
      duration: '45-50 min',
      participants: '6-10',
      category: 'Specialized',
      difficulty: 'Beginner',
      detailedDescription: 'Gentle, safe yoga practice designed specifically for pregnant women, focusing on breath work, pelvic floor strength, and preparing the body and mind for childbirth.'
    },
    {
      id: 'mental-emotional-health',
      title: 'Mental Emotional Health',
      description: 'Yoga and meditation practices for emotional balance and mental clarity.',
      icon: '🧠',
      benefits: ['Mental Clarity', 'Emotional Balance', 'Stress Relief'],
      duration: '40-50 min',
      participants: '8-15',
      category: 'Mental Health',
      difficulty: 'Beginner',
      detailedDescription: 'Combine mindful movement with meditation and breathing techniques to reduce anxiety, improve mood, enhance mental clarity, and develop emotional resilience.'
    },
    {
      id: 'pcod-pcos',
      title: 'PCOD/PCOS',
      description: 'Therapeutic yoga to manage PCOD/PCOS symptoms and support hormonal balance.',
      icon: '🔄',
      benefits: ['Hormonal Balance', 'Weight Management', 'Stress Relief'],
      duration: '45-55 min',
      participants: '8-12',
      category: 'Therapeutic',
      difficulty: 'Intermediate',
      detailedDescription: 'Specialized program combining therapeutic yoga poses, breathing exercises, and lifestyle guidance to naturally manage PCOD/PCOS symptoms and support hormonal health.'
    },
    {
      id: 'diabetes-insulin',
      title: 'Diabetes Insulin',
      description: 'Yoga practices to help manage blood sugar levels and support diabetes care.',
      icon: '💉',
      benefits: ['Blood Sugar', 'Metabolism', 'Wellness'],
      duration: '40-50 min',
      participants: '10-14',
      category: 'Therapeutic',
      difficulty: 'Beginner',
      detailedDescription: 'Evidence-based yoga program designed to support diabetes management through poses that improve insulin sensitivity, reduce stress, and promote overall metabolic health.'
    },
    {
      id: 'weight-management',
      title: 'Weight Management',
      description: 'Dynamic yoga practices combined with mindful eating principles for healthy weight management.',
      icon: '⚖️',
      benefits: ['Weight Loss', 'Metabolism', 'Strength'],
      duration: '50-60 min',
      participants: '12-20',
      category: 'Fitness',
      difficulty: 'Intermediate',
      detailedDescription: 'Comprehensive weight management program combining dynamic yoga flows, strength-building poses, and mindfulness practices to support healthy, sustainable weight management.'
    },
    {
      id: 'immunity-health',
      title: 'Immunity Health',
      description: 'Strengthen your immune system through yoga practices and breathing techniques.',
      icon: '🛡️',
      benefits: ['Immunity', 'Energy', 'Vitality'],
      duration: '35-45 min',
      participants: '12-18',
      category: 'Wellness',
      difficulty: 'Beginner',
      detailedDescription: 'Boost natural immunity through specific yoga poses, pranayama techniques, and meditation practices that strengthen the body\'s natural defense systems and promote overall vitality.'
    },
    {
      id: 'senior-citizen-yoga',
      title: 'Senior Citizen Yoga',
      description: 'Gentle, chair-friendly yoga designed specifically for seniors to maintain mobility and wellness.',
      icon: '👴',
      benefits: ['Mobility', 'Balance', 'Wellness'],
      duration: '30-40 min',
      participants: '8-12',
      category: 'Specialized',
      difficulty: 'Beginner',
      detailedDescription: 'Safe, gentle yoga practice designed for seniors, including chair yoga options, balance exercises, and gentle movements to maintain flexibility, strength, and overall well-being.'
    },
    {
      id: 'respiratory-health',
      title: 'Respiratory Health',
      description: 'Breathing-focused yoga to improve lung capacity and respiratory function.',
      icon: '🫁',
      benefits: ['Lung Health', 'Breathing', 'Energy'],
      duration: '35-45 min',
      participants: '10-15',
      category: 'Therapeutic',
      difficulty: 'Beginner',
      detailedDescription: 'Comprehensive respiratory health program featuring pranayama breathing techniques, chest-opening poses, and practices to improve lung capacity and respiratory efficiency.'
    },
    {
      id: 'sleep-disorder-stress-anxiety',
      title: 'Sleep Disorder Stress Anxiety',
      description: 'Calming yoga and meditation practices to improve sleep quality and reduce stress.',
      icon: '😴',
      benefits: ['Better Sleep', 'Stress Relief', 'Relaxation'],
      duration: '40-50 min',
      participants: '8-14',
      category: 'Mental Health',
      difficulty: 'Beginner',
      detailedDescription: 'Restorative yoga practice combining gentle poses, meditation, and breathing techniques specifically designed to reduce stress, manage anxiety, and improve sleep quality naturally.'
    }
  ];

  const categories = ['All', 'Therapeutic', 'Wellness', 'Fitness', 'Specialized', 'Mental Health'];

  const filteredYogaTypes = useMemo(() => {
    return yogaTypes.filter(yogaType => {
      const matchesCategory = selectedCategory === 'All' || yogaType.category === selectedCategory;
      const matchesSearch = yogaType.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          yogaType.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          yogaType.benefits.some(benefit => benefit.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return theme.palette.success.main;
      case 'Intermediate': return theme.palette.warning.main;
      case 'Advanced': return theme.palette.error.main;
      default: return theme.palette.text.secondary;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Therapeutic': theme.palette.primary.main,
      'Wellness': theme.palette.accent.warm,
      'Fitness': theme.palette.secondary.main,
      'Specialized': theme.palette.yoga.balance,
      'Mental Health': theme.palette.info.main,
    };
    return colors[category as keyof typeof colors] || theme.palette.text.secondary;
  };

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
        <Navbar/>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h1" gutterBottom sx={{ position: 'relative' }}>
              Types of <span style={{ color: theme.palette.primary.main }}>Yoga</span>
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: theme.palette.text.secondary, fontWeight: 400 }}>
              Discover specialized yoga programs designed to address your unique health and wellness needs
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
              From therapeutic healing to fitness enhancement, explore our comprehensive range of yoga practices 
              tailored for every body, every need, and every stage of life.
            </Typography>
            
            {/* Search and Filter */}
            <Box sx={{ mb: 4 }}>
              <TextField
                fullWidth
                placeholder="Search yoga types, benefits, or conditions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: theme.palette.primary.main }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  maxWidth: '500px',
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '25px',
                    background: theme.palette.background.paper,
                  }
                }}
              />
            </Box>
          </Box>
        </Container>
      </HeroSection>

      {/* Category Filters */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <FilterContainer>
          {categories.map((category) => (
            <CategoryChip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "filled" : "outlined"}
              sx={{
                bgcolor: selectedCategory === category ? theme.palette.primary.main : 'transparent',
                color: selectedCategory === category ? 'white' : theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: selectedCategory === category ? theme.palette.primary.dark : `${theme.palette.primary.main}10`,
                }
              }}
            />
          ))}
        </FilterContainer>

        {/* Results Count */}
        <Typography variant="h6" sx={{ mb: 4, textAlign: 'center', color: theme.palette.text.secondary }}>
          Showing {filteredYogaTypes.length} yoga {filteredYogaTypes.length === 1 ? 'type' : 'types'}
        </Typography>

        {/* Yoga Types Cards */}
        <YogaTypesContainer>
          {filteredYogaTypes.map((yogaType) => (
            <YogaTypeCard key={yogaType.id}>
              <CardContent sx={{ p: 4 }}>
                {/* Header */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        fontSize: '2rem',
                        background: `linear-gradient(135deg, ${getCategoryColor(yogaType.category)}20 0%, ${theme.palette.primary.main}20 100%)`,
                      }}
                    >
                      {yogaType.icon}
                    </Avatar>
                    <Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 0.5 }}>
                        {yogaType.title}
                      </Typography>
                      <Chip
                        label={yogaType.category}
                        size="small"
                        sx={{
                          bgcolor: getCategoryColor(yogaType.category),
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>
                  <Chip
                    label={yogaType.difficulty}
                    size="small"
                    sx={{
                      bgcolor: getDifficultyColor(yogaType.difficulty),
                      color: 'white',
                      fontWeight: 500,
                    }}
                  />
                </Box>

                {/* Description */}
                <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, color: theme.palette.text.secondary }}>
                  {yogaType.description}
                </Typography>

                {/* Class Info */}
                <Box sx={{ display: 'flex', gap: 3, mb: 3, flexWrap: 'wrap' }}>
                  <InfoItem>
                    <AccessTimeIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{yogaType.duration}</Typography>
                  </InfoItem>
                  <InfoItem>
                    <PeopleIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{yogaType.participants} people</Typography>
                  </InfoItem>
                  <InfoItem>
                    <TrendingUpIcon sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{yogaType.difficulty}</Typography>
                  </InfoItem>
                </Box>

                {/* Benefits */}
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: theme.palette.primary.main }}>
                  Key Benefits:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {yogaType.benefits.map((benefit, index) => (
                    <BenefitChip
                      key={index}
                      label={benefit}
                      size="small"
                    />
                  ))}
                </Box>

                {/* Detailed Description */}
                <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6, fontStyle: 'italic' }}>
                  {yogaType.detailedDescription}
                </Typography>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        flex: 1,
                        minWidth: '80px',
                        fontSize: '0.875rem',
                        py: 1
                        }}
                    >
                        Book Class
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        flex: 1,
                        minWidth: '80px',
                        fontSize: '0.875rem',
                        py: 1
                        }}
                    >
                        Learn More
                    </Button>
                </Box>

              </CardContent>
            </YogaTypeCard>
          ))}
        </YogaTypesContainer>

        {/* No Results */}
        {filteredYogaTypes.length === 0 && (
          <Paper sx={{ p: 6, textAlign: 'center', borderRadius: '24px' }}>
            <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.secondary }}>
              No yoga types found
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
              Try adjusting your search or selecting a different category.
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              }}
            >
              Clear Filters
            </Button>
          </Paper>
        )}
      </Container>

      {/* Call to Action */}
      <Box sx={{ background: `linear-gradient(135deg, ${theme.palette.accent.cream} 0%, ${theme.palette.yoga.peace} 100%)`, py: 8 }}>
        <Container maxWidth="lg">
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
              Ready to Begin Your Journey?
            </Typography>
            <Typography variant="body1" sx={{ 
              lineHeight: 1.8, 
              fontSize: '1.1rem', 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Join thousands of practitioners who have transformed their lives through our specialized yoga programs. 
              Start your wellness journey today with expert guidance and personalized care.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100())`,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Book a Free Consultation
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: theme.palette.primary.main, 
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer/>
    </Box>
  );
};

export default YogaTypes;
