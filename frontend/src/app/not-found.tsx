'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  50% { transform: translateY(-10px) rotate(-3deg); }
  75% { transform: translateY(-15px) rotate(2deg); }
`;

const breathe = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const lotus = keyframes`
  0%, 100% { transform: rotate(0deg) scale(1); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(1); }
  75% { transform: rotate(270deg) scale(1.1); }
`;

const wave = keyframes`
  0%, 100% { transform: translateX(0px); }
  50% { transform: translateX(10px); }
`;

// Main Container
const NotFoundContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.yoga.peace} 25%, 
    ${theme.palette.accent.cream} 50%, 
    ${theme.palette.background.paper} 75%, 
    ${theme.palette.background.default} 100%
  )`,
  position: 'relative',
  overflow: 'hidden',
  padding: '2rem',
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, ${theme.palette.primary.light}08 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}06 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${theme.palette.accent.warm}05 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  maxWidth: '800px',
  width: '100%',
  animation: `${fadeInUp} 0.8s ease-out`,
}));

// 404 Number
const NotFoundNumber = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(8rem, 20vw, 12rem)',
  fontWeight: 900,
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.accent.sunset} 50%, 
    ${theme.palette.secondary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 0.8,
  marginBottom: '2rem',
  position: 'relative',
  animation: `${breathe} 4s ease-in-out infinite`,
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.5rem',
  },
  '&::after': {
    content: '"🧘‍♀️"',
    position: 'absolute',
    top: '10%',
    right: '10%',
    fontSize: '3rem',
    animation: `${float} 6s ease-in-out infinite`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      top: '5%',
      right: '5%',
    },
  },
}));

// Zen Circle
const ZenCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'clamp(200px, 30vw, 300px)',
  height: 'clamp(200px, 30vw, 300px)',
  border: `4px solid ${theme.palette.primary.light}20`,
  borderRadius: '50%',
  zIndex: -1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20%',
    left: '20%',
    width: '60%',
    height: '60%',
    border: `2px solid ${theme.palette.accent.sunset}15`,
    borderRadius: '50%',
    animation: `${lotus} 20s linear infinite`,
  },
  '&::after': {
    content: '"🪷"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
    animation: `${float} 8s ease-in-out infinite`,
  },
}));

// Title and Description
const NotFoundTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '0.8rem',
  },
}));

const NotFoundDescription = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
  color: theme.palette.text.secondary,
  marginBottom: '2rem',
  lineHeight: 1.6,
  maxWidth: '600px',
  margin: '0 auto 2rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1.5rem',
  },
}));

const ZenQuote = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
  fontStyle: 'italic',
  color: theme.palette.primary.main,
  marginBottom: '3rem',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '2rem',
  },
  '&::before': {
    content: '"🕉️"',
    display: 'block',
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    animation: `${wave} 3s ease-in-out infinite`,
  },
}));

// Action Buttons
const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '1.5rem',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: '1rem 2rem',
  borderRadius: '50px',
  fontWeight: 600,
  fontSize: '1rem',
  textTransform: 'none',
  minWidth: '200px',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    maxWidth: '280px',
    fontSize: '0.9rem',
  },
}));

const PrimaryButton = styled(ActionButton)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.secondary.main} 100%
  )`,
  color: theme.palette.primary.contrastText,
  boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 12px 40px ${theme.palette.primary.main}50`,
  },
}));

const SecondaryButton = styled(ActionButton)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    transform: 'translateY(-2px)',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
  },
}));

// Floating Elements
const FloatingElement = styled(Box)<{ top: string; left: string; delay: string }>(({ theme, top, left, delay }) => ({
  position: 'absolute',
  top,
  left,
  fontSize: '2rem',
  opacity: 0.3,
  animation: `${float} 8s ease-in-out infinite`,
  animationDelay: delay,
  zIndex: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    opacity: 0.2,
  },
}));

// Search Suggestion
const SearchSuggestion = styled(Box)(({ theme }) => ({
  marginTop: '3rem',
  padding: '1.5rem',
  background: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  borderRadius: '20px',
  border: `2px solid ${theme.palette.primary.light}20`,
  maxWidth: '500px',
  margin: '3rem auto 0',
  [theme.breakpoints.down('sm')]: {
    margin: '2rem auto 0',
    padding: '1rem',
  },
}));

const SuggestionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
}));

const SuggestionLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  justifyContent: 'center',
}));

const SuggestionLink = styled(Button)(({ theme }) => ({
  fontSize: '0.85rem',
  fontWeight: 500,
  padding: '0.5rem 1rem',
  borderRadius: '20px',
  backgroundColor: `${theme.palette.primary.light}20`,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.light}30`,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    transform: 'translateY(-2px)',
  },
}));

// Component Data
const zenQuotes = [
  "The path that leads nowhere, often leads to inner peace 🧘‍♀️",
  "Sometimes you need to get lost to find yourself 🌸",
  "Every wrong turn is a step toward self-discovery 🪷",
  "In the space between pages, wisdom grows 🕉️",
];

const suggestions = [
  { title: 'Types of Yoga', href: '/types-of-yoga' },
  { title: 'Programs', href: '/programs' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Blog', href: '/blog' },
  { title: 'Free Trial', href: '/trial' },
];

const floatingElements = [
  { icon: '🧘‍♀️', top: '10%', left: '10%', delay: '0s' },
  { icon: '🪷', top: '20%', right: '15%', delay: '2s' },
  { icon: '🕉️', top: '70%', left: '5%', delay: '4s' },
  { icon: '🌸', top: '80%', right: '10%', delay: '6s' },
  { icon: '🧘‍♂️', top: '60%', right: '5%', delay: '8s' },
];

// Main Component
const NotFound: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const [currentQuote, setCurrentQuote] = useState(0);

  // Rotate zen quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % zenQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSuggestionClick = (href: string) => {
    router.push(href);
  };

  return (
    <NotFoundContainer>
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <FloatingElement
          key={index}
          top={element.top}
          left={element.left || 'auto'}
          delay={element.delay}
          sx={{
            right: (element as { right?: string }).right || 'auto',
          }}
        >
          {element.icon}
        </FloatingElement>
      ))}

      <ContentWrapper>
        {/* 404 Number with Zen Circle */}
        <Box sx={{ position: 'relative', marginBottom: '2rem' }}>
          <ZenCircle />
          <NotFoundNumber>404</NotFoundNumber>
        </Box>

        {/* Title and Description */}
        <NotFoundTitle>
          Oops! This Page is on a Meditation Retreat
        </NotFoundTitle>

        <NotFoundDescription>
          It seems the page you&apos;re looking for has gone on a spiritual journey. 
          While it finds its inner peace, let us guide you back to your wellness path.
        </NotFoundDescription>

        {/* Zen Quote */}
        <ZenQuote key={currentQuote}>
          {zenQuotes[currentQuote]}
        </ZenQuote>

        {/* Action Buttons */}
        <ActionButtonsContainer>
          <PrimaryButton
            startIcon={<HomeIcon />}
            onClick={handleGoHome}
          >
            Return Home
          </PrimaryButton>

          <SecondaryButton
            startIcon={<ArrowBackIcon />}
            onClick={handleGoBack}
          >
            Go Back
          </SecondaryButton>

          {!isMobile && (
            <SecondaryButton
              startIcon={<RefreshIcon />}
              onClick={handleRefresh}
            >
              Refresh
            </SecondaryButton>
          )}
        </ActionButtonsContainer>

        {/* Search Suggestions */}
        <SearchSuggestion>
          <SuggestionTitle>
            <SearchIcon />
            Popular Pages
          </SuggestionTitle>
          <SuggestionLinks>
            {suggestions.map((suggestion, index) => (
              <SuggestionLink
                key={index}
                onClick={() => handleSuggestionClick(suggestion.href)}
              >
                {suggestion.title}
              </SuggestionLink>
            ))}
          </SuggestionLinks>
        </SearchSuggestion>
      </ContentWrapper>
    </NotFoundContainer>
  );
};

export default NotFound;
