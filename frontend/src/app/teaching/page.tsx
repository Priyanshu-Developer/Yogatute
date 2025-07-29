// pages/Teaching.tsx
'use client';// pages/Teaching.tsx
import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Paper,
  useTheme,
  Stack,
  Avatar,
  Divider,
  LinearProgress
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import CertificateIcon from '@mui/icons-material/CardMembership';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BookIcon from '@mui/icons-material/Book';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface TeacherTrainingProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  format: 'In-Person' | 'Online' | 'Hybrid';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  certification: string;
  price: string;
  installments?: string;
  modules: string[];
  included: string[];
  instructor: string;
  nextBatch: string;
  capacity: number;
  enrolled: number;
  highlights: string[];
}

const Hero = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.accent.cream} 100%)`,
  padding: theme.spacing(12, 0, 8),
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

const ProgramsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const ProgramCard = styled(Card)(({ theme }) => ({
  flex: '1',
  minWidth: 380,
  maxWidth: 450,
  border: `1px solid ${theme.palette.primary.main}20`,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.accent.cream} 100%)`,
  transition: 'transform .25s, box-shadow .25s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: `0 16px 40px ${theme.palette.primary.main}25`
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    width: '100%'
  }
}));

const ProgramHeader = styled(Box)(({ theme }) => ({
  height: 140,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}));

const BenefitsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'center',
  marginTop: theme.spacing(6),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const BenefitCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  background: `linear-gradient(135deg, ${theme.palette.yoga.peace} 0%, ${theme.palette.background.paper} 100%)`,
  border: `2px solid ${theme.palette.primary.main}20`,
  borderRadius: '24px',
  flex: '1',
  minWidth: '280px',
  maxWidth: '320px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 48px ${theme.palette.primary.main}20`,
  }
}));

const programs: TeacherTrainingProgram[] = [
  {
    id: '200-hour-yttc',
    title: '200-Hour YTTC',
    subtitle: 'Foundational Yoga Teacher Training',
    description: 'Comprehensive foundational training covering yoga philosophy, anatomy, teaching methodology, and personal practice development.',
    duration: '4 weeks intensive / 3 months weekend',
    format: 'Hybrid',
    level: 'Beginner',
    certification: '200-Hour RYT (Yoga Alliance Certified)',
    price: '₹45,000',
    installments: '₹15,000 x 3 months',
    modules: [
      'Yoga Philosophy & History',
      'Anatomy & Physiology',
      'Asana Practice & Alignment',
      'Pranayama & Meditation',
      'Teaching Methodology',
      'Sanskrit & Mantras',
      'Ethics & Business of Yoga'
    ],
    included: [
      'Study Materials & Manual',
      'Yoga Props & Accessories',
      'Practical Teaching Hours',
      'Certification Exam',
      'Post-Training Support',
      'Job Placement Assistance'
    ],
    instructor: 'Sushma',
    nextBatch: 'September 15, 2025',
    capacity: 20,
    enrolled: 14,
    highlights: ['Yoga Alliance Certified', 'International Recognition', 'Job Assistance']
  },
  {
    id: '300-hour-yttc',
    title: '300-Hour YTTC',
    subtitle: 'Advanced Yoga Teacher Training',
    description: 'Advanced training for experienced teachers focusing on deeper philosophy, advanced asanas, therapeutic applications, and specialized teaching skills.',
    duration: '6 weeks intensive / 4 months weekend',
    format: 'In-Person',
    level: 'Advanced',
    certification: '300-Hour RYT (Yoga Alliance Certified)',
    price: '₹65,000',
    installments: '₹22,000 x 3 months',
    modules: [
      'Advanced Philosophy & Texts',
      'Therapeutic Yoga Applications',
      'Advanced Asana & Variations',
      'Energy Work & Chakras',
      'Meditation Techniques',
      'Business & Marketing',
      'Specialty Workshop Design'
    ],
    included: [
      'Advanced Study Materials',
      'Personal Mentorship',
      'Teaching Practicum',
      'Specialty Certifications',
      'Alumni Network Access',
      'Continuing Education Credits'
    ],
    instructor: 'Sushma & Guest Faculty',
    nextBatch: 'October 1, 2025',
    capacity: 15,
    enrolled: 8,
    highlights: ['500-Hour Pathway', 'Specialty Training', 'Mentorship Program']
  },
  {
    id: 'therapeutic-training',
    title: 'Therapeutic Yoga Training',
    subtitle: 'Yoga Therapy Certification',
    description: 'Specialized training in using yoga as therapy for various health conditions, injuries, and chronic pain management.',
    duration: '3 months weekend program',
    format: 'Hybrid',
    level: 'Intermediate',
    certification: 'Therapeutic Yoga Specialist',
    price: '₹35,000',
    installments: '₹12,000 x 3 months',
    modules: [
      'Yoga Therapy Principles',
      'Common Health Conditions',
      'Injury Prevention & Rehabilitation',
      'Adaptive Yoga Techniques',
      'Case Study Analysis',
      'Client Assessment Skills',
      'Professional Ethics'
    ],
    included: [
      'Therapy Manual & Resources',
      'Client Assessment Forms',
      'Supervised Practice Sessions',
      'Case Study Projects',
      'Professional Certification',
      'Continuing Education'
    ],
    instructor: 'Michael Chen',
    nextBatch: 'August 20, 2025',
    capacity: 12,
    enrolled: 9,
    highlights: ['Healthcare Integration', 'Clinical Skills', 'Specialized Certification']
  },
  {
    id: 'prenatal-training',
    title: 'Prenatal Yoga Training',
    subtitle: 'Pregnancy & Postnatal Yoga Certification',
    description: 'Comprehensive training for teaching safe and effective yoga to pregnant women and new mothers.',
    duration: '85 hours / 2 months weekend',
    format: 'In-Person',
    level: 'Intermediate',
    certification: 'Prenatal Yoga Teacher (85-Hour)',
    price: '₹28,000',
    installments: '₹14,000 x 2 months',
    modules: [
      'Pregnancy Anatomy & Physiology',
      'Trimester-Specific Practices',
      'Birth Preparation Techniques',
      'Postnatal Recovery Yoga',
      'Safety Guidelines & Modifications',
      'Emotional Support Skills',
      'Baby & Me Yoga'
    ],
    included: [
      'Prenatal Yoga Manual',
      'Props & Modifications Guide',
      'Practice Teaching Sessions',
      'Safety Certification',
      'Marketing Materials',
      'Ongoing Support Group'
    ],
    instructor: 'Priya Sharma',
    nextBatch: 'September 1, 2025',
    capacity: 15,
    enrolled: 11,
    highlights: ['Specialized Niche', 'High Demand', 'Fulfilling Career Path']
  }
];

const benefits = [
  {
    title: 'Professional Certification',
    description: 'Internationally recognized certifications from Yoga Alliance and other prestigious organizations.',
    icon: <CertificateIcon sx={{ fontSize: 48, color: '#F3911E' }} />
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from experienced teachers with 15+ years of teaching and training experience.',
    icon: <SchoolIcon sx={{ fontSize: 48, color: '#F3911E' }} />
  },
  {
    title: 'Career Support',
    description: 'Job placement assistance, marketing guidance, and ongoing professional development.',
    icon: <StarIcon sx={{ fontSize: 48, color: '#F3911E' }} />
  },
  {
    title: 'Continuing Education',
    description: 'Access to workshops, advanced trainings, and alumni network for lifelong learning.',
    icon: <BookIcon sx={{ fontSize: 48, color: '#F3911E' }} />
  }
];

const Teaching: React.FC = () => {
  const theme = useTheme();
  const [selectedFormat, setSelectedFormat] = useState<string>('All');

  const formats = ['All', 'In-Person', 'Online', 'Hybrid'];

  const filteredPrograms = useMemo(() => {
    return programs.filter(program => 
      selectedFormat === 'All' || program.format === selectedFormat
    );
  }, [selectedFormat]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return theme.palette.success.main;
      case 'Intermediate': return theme.palette.warning.main;
      case 'Advanced': return theme.palette.error.main;
      default: return theme.palette.info.main;
    }
  };

  const getFormatGradient = (format: string) => {
    const gradients = {
      'In-Person': `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.accent.warm}20 100%)`,
      'Online': `linear-gradient(135deg, ${theme.palette.info.main}20 0%, ${theme.palette.yoga.balance}20 100%)`,
      'Hybrid': `linear-gradient(135deg, ${theme.palette.secondary.main}20 0%, ${theme.palette.yoga.peace}20 100%)`
    };
    return gradients[format as keyof typeof gradients] || gradients['In-Person'];
  };

  const getFormatIcon = (format: string) => {
    const icons = {
      'In-Person': '🏫',
      'Online': '💻',
      'Hybrid': '🔄'
    };
    return icons[format as keyof typeof icons] || '🏫';
  };

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Navbar/>
      <Hero>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Typography variant="h1" gutterBottom>
              Become a <span style={{ color: theme.palette.primary.main }}>Yoga Teacher</span>
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: theme.palette.text.secondary, fontWeight: 400 }}>
              Transform your practice into a profession with our comprehensive teacher training programs
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
              Join our internationally recognized teacher training programs designed to deepen your practice, 
              expand your knowledge, and prepare you for a fulfilling career in teaching yoga. 
              Whether you're a beginner or advanced practitioner, we have the perfect program for your journey.
            </Typography>
            
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" gap={2}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100())`,
                  px: 2,
                  py: 1.5,
                  fontSize: '0.875rem'
                }}
              >
                View Programs
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: theme.palette.primary.main, 
                  color: theme.palette.primary.main,
                  px: 2,
                  py: 1.5,
                  fontSize: '0.875rem'
                }}
              >
                Schedule Consultation
              </Button>
            </Stack>
          </Box>
        </Container>
      </Hero>

      {/* Format Filter */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 6, flexWrap: 'wrap' }}>
          {formats.map((format) => (
            <Chip
              key={format}
              label={format}
              onClick={() => setSelectedFormat(format)}
              variant={selectedFormat === format ? 'filled' : 'outlined'}
              sx={{
                bgcolor: selectedFormat === format ? theme.palette.primary.main : 'transparent',
                color: selectedFormat === format ? 'white' : theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                fontWeight: 600,
                cursor: 'pointer',
                px: 2,
                '&:hover': {
                  bgcolor: selectedFormat === format ? theme.palette.primary.dark : `${theme.palette.primary.main}15`
                }
              }}
            />
          ))}
        </Box>

        {/* Programs */}
        <ProgramsContainer>
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id}>
              {/* Program Header */}
              <ProgramHeader sx={{ background: getFormatGradient(program.format) }}>
                <Typography variant="h2" sx={{ color: 'rgba(0,0,0,0.6)', mb: 1 }}>
                  {getFormatIcon(program.format)}
                </Typography>
                <Chip
                  label={program.format}
                  size="small"
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    color: 'white',
                    fontWeight: 600
                  }}
                />
              </ProgramHeader>

              <CardContent sx={{ p: 4 }}>
                {/* Title and Level */}
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                  <Box>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 0.5 }}>
                      {program.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, fontWeight: 500 }}>
                      {program.subtitle}
                    </Typography>
                  </Box>
                  <Chip
                    label={program.level}
                    size="small"
                    sx={{
                      bgcolor: getLevelColor(program.level),
                      color: 'white',
                      fontWeight: 500
                    }}
                  />
                </Stack>

                {/* Description */}
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6, mb: 3 }}>
                  {program.description}
                </Typography>

                {/* Program Details */}
                <Stack spacing={1.5} mb={3}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <AccessTimeIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                    <Typography variant="body2">{program.duration}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CertificateIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                    <Typography variant="body2">{program.certification}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PeopleIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                    <Typography variant="body2">
                      {program.enrolled}/{program.capacity} enrolled • Next batch: {program.nextBatch}
                    </Typography>
                  </Stack>
                </Stack>

                {/* Enrollment Progress */}
                <Box sx={{ mb: 3 }}>
                  <LinearProgress
                    variant="determinate"
                    value={(program.enrolled / program.capacity) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: `${theme.palette.primary.main}20`,
                      '& .MuiLinearProgress-bar': {
                        bgcolor: theme.palette.primary.main,
                        borderRadius: 4
                      }
                    }}
                  />
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary, mt: 0.5, display: 'block' }}>
                    {program.capacity - program.enrolled} spots remaining
                  </Typography>
                </Box>

                {/* Instructor */}
                <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    {program.instructor.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </Avatar>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Led by {program.instructor}
                  </Typography>
                </Stack>

                {/* Highlights */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {program.highlights.map((highlight, index) => (
                    <Chip
                      key={index}
                      label={highlight}
                      size="small"
                      icon={<CheckCircleIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        bgcolor: `${theme.palette.success.main}20`,
                        color: theme.palette.success.main,
                        fontWeight: 500,
                        '& .MuiChip-icon': {
                          color: theme.palette.success.main
                        }
                      }}
                    />
                  ))}
                </Box>

                <Divider sx={{ mb: 3 }} />

                {/* Pricing */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                  <Box>
                    <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                      {program.price}
                    </Typography>
                    {program.installments && (
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        or {program.installments}
                      </Typography>
                    )}
                  </Box>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        fontSize: '10px'
                      }}
                    >
                      Learn More
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100())`,
                        fontSize: '10px'
                      }}
                    >
                      Apply Now
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </ProgramCard>
          ))}
        </ProgramsContainer>
      </Container>

      {/* Benefits Section */}
      <Box sx={{ background: `linear-gradient(135deg, ${theme.palette.accent.cream} 0%, ${theme.palette.yoga.peace} 100%)`, py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Why Choose <span style={{ color: theme.palette.primary.main }}>YogaTute</span> Training?
          </Typography>
          <Typography variant="h6" align="center" sx={{ mb: 6, color: theme.palette.text.secondary }}>
            Comprehensive training with international recognition and ongoing support
          </Typography>

          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <Box sx={{ mb: 3 }}>
                  {benefit.icon}
                </Box>
                <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                  {benefit.description}
                </Typography>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </Box>

      {/* Application Process */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Application <span style={{ color: theme.palette.primary.main }}>Process</span>
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: theme.palette.text.secondary }}>
          Simple steps to begin your teaching journey
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {[
            { step: '1', title: 'Apply Online', desc: 'Submit your application with basic details and yoga experience' },
            { step: '2', title: 'Interview', desc: 'Personal interview to understand your goals and commitment' },
            { step: '3', title: 'Enrollment', desc: 'Complete payment and receive your welcome kit and schedule' },
            { step: '4', title: 'Begin Training', desc: 'Start your transformative journey with expert guidance' }
          ].map((item, index) => (
            <Paper
              key={index}
              sx={{
                p: 4,
                textAlign: 'center',
                borderRadius: '20px',
                border: `2px solid ${theme.palette.primary.main}30`,
                flex: '1',
                minWidth: '200px',
                maxWidth: '250px',
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.accent.cream} 100%)`
              }}
            >
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: theme.palette.primary.main,
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  mx: 'auto',
                  mb: 2
                }}
              >
                {item.step}
              </Avatar>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* Call to Action */}
      <Box sx={{ background: theme.palette.background.default, py: 8 }}>
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
              Ready to Begin Your Teaching Journey?
            </Typography>
            <Typography variant="body1" sx={{ 
              lineHeight: 1.8, 
              fontSize: '1.1rem', 
              mb: 4,
              maxWidth: '700px',
              mx: 'auto'
            }}>
              Take the first step towards a meaningful career in yoga teaching. Join our community of certified instructors 
              and make a positive impact on people's lives through the transformative power of yoga.
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" gap={2}>
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
                Apply Now
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
                Download Brochure
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
                Schedule Call
              </Button>
            </Stack>
          </Paper>
        </Container>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Teaching;
