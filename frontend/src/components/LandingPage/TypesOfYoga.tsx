'use client';
import React, { useState, forwardRef } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Fade,
  Grow,
  Slide,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import SendIcon from '@mui/icons-material/Send';

// Component-specific animations
const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const float = keyframes`
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-4px); 
  }
`;

// Custom transition component for mobile modal
const SlideTransition = forwardRef<
  unknown,
  TransitionProps & {
    children: React.ReactElement;
  }
>((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

SlideTransition.displayName = 'SlideTransition';

// Section Containers
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '8rem 0',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.yoga.peace} 25%, 
    ${theme.palette.accent.cream} 50%, 
    ${theme.palette.background.paper} 75%, 
    ${theme.palette.background.default} 100%
  )`,
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: '6rem 0',
  },
  [theme.breakpoints.down('md')]: {
    padding: '5rem 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '4rem 0',
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 2,
  padding: '0 2rem',
  [theme.breakpoints.down('md')]: {
    padding: '0 1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  fontWeight: 800,
  marginBottom: '1rem',
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 50%, 
    ${theme.palette.secondary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '0.8rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
  color: theme.palette.text.secondary,
  marginBottom: '4rem',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto',
  lineHeight: 1.6,
  [theme.breakpoints.down('lg')]: {
    marginBottom: '3.5rem',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '3rem',
    maxWidth: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '2.5rem',
    maxWidth: '100%',
    padding: '0 0.5rem',
  },
}));

// Grid Container to prevent layout shifts
const GridContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  contain: 'layout style',
  '& > *': {
    isolation: 'isolate',
  },
}));

// Grid Layout
const YogaTypesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  alignItems: 'start',
  gridAutoRows: 'min-content',
  isolation: 'isolate',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.8rem',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '1.2rem',
  },
}));

// Card Components
const YogaCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '24px',
  background: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.primary.light}20`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
  minHeight: '450px',
  transformOrigin: 'center center',
  willChange: 'transform, box-shadow',
  backfaceVisibility: 'hidden',
  [theme.breakpoints.down('md')]: {
    minHeight: '420px',
    borderRadius: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '400px',
    borderRadius: '18px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-200px',
    width: '200px',
    height: '100%',
    background: `linear-gradient(90deg, 
      transparent, 
      ${theme.palette.primary.light}20, 
      transparent
    )`,
    animation: 'none',
    zIndex: 1,
    pointerEvents: 'none',
    transition: 'opacity 0.3s ease',
    opacity: 0,
  },
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: `0 20px 60px ${theme.palette.primary.main}25`,
    border: `2px solid ${theme.palette.primary.main}40`,
    zIndex: 10,
    [theme.breakpoints.down('md')]: {
      transform: 'scale(1.01)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'scale(1.005)',
    },
    '&::before': {
      animation: `${shimmer} 2s ease-in-out`,
      opacity: 1,
    },
    '& .yoga-icon': {
      animation: `${float} 2s ease-in-out infinite`,
    },
    '& .play-button': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
}));

const CardImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.light}20 0%, 
    ${theme.palette.accent.warm}15 100%
  )`,
  [theme.breakpoints.down('md')]: {
    height: '180px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '160px',
  },
}));

const YogaIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '4rem',
  zIndex: 2,
  filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
}));

const PlayButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  backgroundColor: `${theme.palette.primary.main}90`,
  color: theme.palette.primary.contrastText,
  width: '60px',
  height: '60px',
  opacity: 0,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 3,
  backdropFilter: 'blur(10px)',
  border: `2px solid ${theme.palette.background.paper}40`,
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translate(-50%, -50%) scale(1.1)',
  },
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  padding: '2rem',
  height: 'calc(100% - 200px)',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('lg')]: {
    padding: '1.8rem',
    height: 'calc(100% - 180px)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
    height: 'calc(100% - 180px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.2rem',
    height: 'calc(100% - 160px)',
  },
  '&:last-child': {
    paddingBottom: '2rem',
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '1.8rem',
    },
    [theme.breakpoints.down('md')]: {
      paddingBottom: '1.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '1.2rem',
    },
  },
}));

const YogaTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '0.8rem',
  lineHeight: 1.3,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    textAlign: 'center',
  },
}));

const YogaDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  marginBottom: '1.2rem',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  flexGrow: 1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    textAlign: 'center',
    WebkitLineClamp: 2,
  },
}));

const YogaBenefits = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
  },
}));

const BenefitChip = styled(Chip)(({ theme }) => ({
  fontSize: '0.75rem',
  height: '28px',
  backgroundColor: `${theme.palette.primary.light}20`,
  color: theme.palette.primary.main,
  fontWeight: 500,
  border: `1px solid ${theme.palette.primary.light}30`,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    height: '26px',
  },
  '&:hover': {
    backgroundColor: `${theme.palette.primary.light}30`,
  },
}));

const YogaStats = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto',
  paddingTop: '1rem',
  borderTop: `1px solid ${theme.palette.grey[200]}`,
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    gap: '0.5rem',
    justifyContent: 'center',
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  color: theme.palette.text.secondary,
  fontSize: '0.85rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

// Filter Components
const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  marginBottom: '3rem',
  [theme.breakpoints.down('sm')]: {
    gap: '0.5rem',
    marginBottom: '2rem',
  },
}));

const FilterChip = styled(Chip)<{ active?: boolean }>(({ theme, active }) => ({
  padding: '0.5rem 1rem',
  fontSize: '0.9rem',
  fontWeight: 600,
  height: '40px',
  backgroundColor: active ? theme.palette.primary.main : `${theme.palette.background.paper}80`,
  color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  border: `2px solid ${active ? theme.palette.primary.main : theme.palette.primary.light}30`,
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    height: '36px',
    padding: '0.4rem 0.8rem',
  },
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 20px ${theme.palette.primary.main}30`,
  },
}));

// Modal Components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '24px',
    maxWidth: '600px',
    background: `${theme.palette.background.paper}95`,
    backdropFilter: 'blur(20px)',
    border: `2px solid ${theme.palette.primary.light}20`,
    [theme.breakpoints.down('sm')]: {
      margin: '1rem',
      maxWidth: 'calc(100% - 2rem)',
    },
  },
}));

const ModalTitle = styled(DialogTitle)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  textAlign: 'center',
  paddingBottom: '1rem',
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const ModalContent = styled(DialogContent)(({ theme }) => ({
  padding: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
  },
}));

const ModalActions = styled(DialogActions)(({ theme }) => ({
  padding: '1.5rem',
  justifyContent: 'center',
  gap: '1rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
    flexDirection: 'column',
    gap: '0.8rem',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: '0.8rem 2rem',
  borderRadius: '30px',
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    fontSize: '0.9rem',
  },
}));

const InfoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '1rem',
  marginBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '0.8rem',
    marginBottom: '1.5rem',
  },
}));

const InfoCard = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: '1.5rem',
  backgroundColor: theme.palette.accent.cream,
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 15px ${theme.palette.primary.main}20`,
  },
}));

// Types and Data
interface YogaType {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  duration: string;
  participants: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  detailedDescription: string;
}

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

// Main Component
const TypesOfYoga: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedYoga, setSelectedYoga] = useState<YogaType | null>(null);

  const filteredYogaTypes = selectedCategory === 'All' 
    ? yogaTypes 
    : yogaTypes.filter(yoga => yoga.category === selectedCategory);

  const handleCardClick = (yoga: YogaType) => {
    setSelectedYoga(yoga);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedYoga(null);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return theme.palette.success.main;
      case 'Intermediate': return theme.palette.warning.main;
      case 'Advanced': return theme.palette.error.main;
      default: return theme.palette.grey[500];
    }
  };

  return (
    <SectionContainer>
      <StyledContainer>
        <SectionTitle>
          Types of Yoga Programs
        </SectionTitle>
        <SectionSubtitle>
          Discover our comprehensive range of specialized yoga programs designed to address your unique health needs and wellness goals
        </SectionSubtitle>

        {/* Category Filter */}
        <FilterContainer>
          {categories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </FilterContainer>

        {/* Yoga Cards Grid */}
        <GridContainer>
          <YogaTypesGrid>
            {filteredYogaTypes.map((yoga, index) => (
              <Grow
                key={yoga.id}
                in={true}
                timeout={300 + index * 100}
              >
                <YogaCard onClick={() => handleCardClick(yoga)}>
                  <CardImageContainer>
                    <YogaIcon className="yoga-icon">
                      {yoga.icon}
                    </YogaIcon>
                    <PlayButton className="play-button">
                      <PlayArrowIcon />
                    </PlayButton>
                  </CardImageContainer>

                  <CardContentStyled>
                    <Box>
                      <YogaTitle>{yoga.title}</YogaTitle>
                      <YogaDescription>{yoga.description}</YogaDescription>
                      
                      <YogaBenefits>
                        {yoga.benefits.slice(0, 3).map((benefit) => (
                          <BenefitChip
                            key={benefit}
                            label={benefit}
                            size="small"
                          />
                        ))}
                      </YogaBenefits>
                    </Box>

                    <YogaStats>
                      <StatItem>
                        <AccessTimeIcon sx={{ fontSize: '1rem' }} />
                        <Typography variant="caption">{yoga.duration}</Typography>
                      </StatItem>
                      <StatItem>
                        <GroupIcon sx={{ fontSize: '1rem' }} />
                        <Typography variant="caption">{yoga.participants}</Typography>
                      </StatItem>
                      <Chip
                        label={yoga.difficulty}
                        size="small"
                        sx={{
                          backgroundColor: getDifficultyColor(yoga.difficulty),
                          color: 'white',
                          fontSize: '0.7rem',
                          height: '24px',
                        }}
                      />
                    </YogaStats>
                  </CardContentStyled>
                </YogaCard>
              </Grow>
            ))}
          </YogaTypesGrid>
        </GridContainer>

        {/* Modal */}
        <StyledDialog
          open={openModal}
          onClose={handleCloseModal}
          maxWidth="md"
          fullScreen={isMobile}
          TransitionComponent={isMobile ? SlideTransition : Fade}
        >
          {selectedYoga && (
            <>
              <ModalTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <span style={{ fontSize: '2rem' }}>{selectedYoga.icon}</span>
                  {selectedYoga.title}
                </Box>
                <IconButton
                  onClick={handleCloseModal}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </ModalTitle>

              <ModalContent>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
                  {selectedYoga.detailedDescription}
                </Typography>

                <InfoGrid>
                  <InfoCard>
                    <AccessTimeIcon sx={{ color: theme.palette.primary.main, mb: 1 }} />
                    <Typography variant="subtitle2" color="textSecondary">Duration</Typography>
                    <Typography variant="h6">{selectedYoga.duration}</Typography>
                  </InfoCard>
                  <InfoCard>
                    <GroupIcon sx={{ color: theme.palette.primary.main, mb: 1 }} />
                    <Typography variant="subtitle2" color="textSecondary">Group Size</Typography>
                    <Typography variant="h6">{selectedYoga.participants}</Typography>
                  </InfoCard>
                  <InfoCard>
                    <FavoriteIcon sx={{ color: theme.palette.primary.main, mb: 1 }} />
                    <Typography variant="subtitle2" color="textSecondary">Level</Typography>
                    <Typography variant="h6">{selectedYoga.difficulty}</Typography>
                  </InfoCard>
                </InfoGrid>

                <Typography variant="h6" sx={{ mb: 2, color: theme.palette.text.primary }}>
                  Key Benefits
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {selectedYoga.benefits.map((benefit) => (
                    <BenefitChip key={benefit} label={benefit} />
                  ))}
                </Box>
              </ModalContent>

              <ModalActions>
                <ActionButton
                  variant="outlined"
                  onClick={handleCloseModal}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                  }}
                >
                  Close
                </ActionButton>
                <ActionButton
                  variant="contained"
                  startIcon={<SendIcon />}
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  Book Free Trial
                </ActionButton>
              </ModalActions>
            </>
          )}
        </StyledDialog>
      </StyledContainer>
    </SectionContainer>
  );
};

export default TypesOfYoga;
