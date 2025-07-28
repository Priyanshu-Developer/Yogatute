'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

// Animations
const float = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-10px, -15px) rotate(2deg); }
  50% { transform: translate(10px, -10px) rotate(-2deg); }
  75% { transform: translate(-5px, 10px) rotate(1deg); }
`;

const slideUp = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideLeft = keyframes`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const breathe = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Image Carousel Animations
const fadeOut = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 0; transform: scale(0.95); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(1.05); }
  50% { opacity: 0; transform: scale(1.02); }
  100% { opacity: 1; transform: scale(1); }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.accent.cream} 30%, 
    ${theme.palette.yoga.peace} 70%, 
    ${theme.palette.background.paper} 100%
  )`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '80px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, ${theme.palette.primary.light}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}10 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${theme.palette.accent.warm}08 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

const BgShape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  opacity: 0.6,
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Shape1 = styled(BgShape)(({ theme }) => ({
  top: '10%',
  right: '10%',
  width: '300px',
  height: '300px',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.light}20 0%, 
    ${theme.palette.yoga.energy}15 100%
  )`,
  borderRadius: '50% 30% 40% 60%',
  animation: `${float} 20s infinite ease-in-out`,
}));

const Shape2 = styled(BgShape)(({ theme }) => ({
  top: '50%',
  right: '5%',
  width: '200px',
  height: '200px',
  background: `linear-gradient(135deg, 
    ${theme.palette.accent.sunset}18 0%, 
    ${theme.palette.primary.main}12 100%
  )`,
  borderRadius: '40% 60% 30% 50%',
  animation: `${float} 25s infinite ease-in-out reverse`,
}));

const HeroContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1400px !important',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center',
  position: 'relative',
  zIndex: 3,
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    gap: '3rem',
    textAlign: 'center',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 1rem',
    gap: '2rem',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  maxWidth: '600px',
  [theme.breakpoints.down('lg')]: {
    order: 2,
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
  fontWeight: 800,
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 50%, 
    ${theme.palette.secondary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1.1,
  marginBottom: '1.5rem',
  letterSpacing: '-0.02em',
  opacity: 0,
  transform: 'translateY(30px)',
  animation: `${slideUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.text.secondary,
  marginBottom: '2.5rem',
  lineHeight: 1.6,
  fontWeight: 400,
  opacity: 0,
  transform: 'translateY(30px)',
  animation: `${slideUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  animationDelay: '0.2s',
}));

const CTAButton = styled(Button)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.8rem 2rem',
  minHeight: '48px',
  minWidth: '200px',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.primary.light} 25%, 
    ${theme.palette.primary.dark} 50%, 
    ${theme.palette.secondary.main} 100%
  )`,
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  borderRadius: '40px',
  fontWeight: 600,
  fontSize: '1rem',
  lineHeight: '1.4',
  textTransform: 'none',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
  marginBottom: '3rem',
  opacity: 0,
  transform: 'translateY(30px)',
  animation: `${slideUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  animationDelay: '0.4s',
  border: 'none',
  position: 'relative',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  
  '&.MuiButton-root': {
    textTransform: 'none',
    minWidth: '200px',
    border: 'none',
  },
  
  '&, &:hover, &:focus, &:active': {
    borderRadius: '40px',
    fontSize: '1rem',
  },
  
  '&:hover': {
    transform: 'translateY(-3px) scale(1.01)',
    boxShadow: `0 15px 40px ${theme.palette.primary.main}50`,
    border: `2px solid ${theme.palette.accent.warm}`,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.main} 0%, 
      ${theme.palette.primary.light} 25%, 
      ${theme.palette.primary.dark} 50%, 
      ${theme.palette.secondary.main} 100%
    )`,
  },
  
  '&:focus': {
    outline: `3px solid ${theme.palette.primary.main}50`,
    outlineOffset: '2px',
  },
  
  '&:active': {
    transform: 'translateY(-1px) scale(0.98)',
    transition: 'all 0.1s ease',
  },
  
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
    padding: '0.7rem 1.8rem',
    minWidth: '180px',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: '0.6rem 1.5rem',
    minWidth: '160px',
    width: '100%',
    maxWidth: '300px',
  },
}));

const CTAArrow = styled('span')(({ theme }) => ({
  fontSize: '1.2rem',
  transition: 'transform 0.3s ease',
  '.MuiButton-root:hover &': {
    transform: 'translateX(8px) rotate(0deg)',
  },
}));

const TrustSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  opacity: 0,
  transform: 'translateY(30px)',
  animation: `${slideUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  animationDelay: '0.6s',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
}));

const Avatars = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginRight: '1rem',
}));

const StyledAvatar = styled(Avatar)<{ index: number }>(({ theme, index }) => ({
  width: '45px',
  height: '45px',
  border: `3px solid ${theme.palette.background.paper}`,
  marginLeft: index === 0 ? 0 : '-12px',
  fontSize: '1rem',
  fontWeight: 700,
  boxShadow: `0 6px 20px ${theme.palette.primary.main}20`,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  ...(index === 0 && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  }),
  ...(index === 1 && {
    background: `linear-gradient(135deg, ${theme.palette.accent.sunset} 0%, ${theme.palette.primary.light} 100%)`,
  }),
  ...(index === 2 && {
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  }),
  ...(index === 3 && {
    background: `linear-gradient(135deg, ${theme.palette.accent.warm} 0%, ${theme.palette.yoga.energy} 100%)`,
  }),
  '&:hover': {
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
    zIndex: 2,
  },
}));

const TrustText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.95rem',
  fontWeight: 500,
}));

const TrustNumber = styled('span')(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  fontSize: '1.1rem',
}));

const HeroImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  [theme.breakpoints.down('lg')]: {
    order: 1,
  },
}));

const MainImage = styled(Box)(({ theme }) => ({
  width: '400px',
  height: '500px',
  borderRadius: '24px',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.paper}95, 
    ${theme.palette.accent.cream}90
  )`,
  backdropFilter: 'blur(25px)',
  WebkitBackdropFilter: 'blur(25px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `
    0 25px 70px ${theme.palette.primary.main}15,
    0 0 0 1px ${theme.palette.primary.light}20
  `,
  overflow: 'hidden',
  position: 'relative',
  border: `2px solid ${theme.palette.accent.cream}60`,
  opacity: 0,
  transform: 'translateX(50px)',
  animation: `${slideLeft} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.3s, ${breathe} 4s ease-in-out infinite 2s`,
  [theme.breakpoints.down('lg')]: {
    width: '350px',
    height: '450px',
  },
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '400px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '280px',
    height: '350px',
  },
}));

// Image Carousel Components
const ImageCarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  borderRadius: '20px',
}));

const MeditationImage = styled('img')<{ 
  isVisible: boolean; 
  isExiting: boolean;
}>(({ theme, isVisible, isExiting }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
  filter: 'saturate(1.1) contrast(1.05)',
  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: isExiting 
    ? `${fadeOut} 0.6s ease-in-out forwards`
    : isVisible 
      ? `${fadeIn} 0.6s ease-in-out forwards`
      : 'none',
  opacity: isVisible && !isExiting ? 1 : 0,
}));

const ImageIndicators = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '15px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '6px',
  zIndex: 10,
}));

// Hero Image Carousel Component
const HeroImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [nextIndex, setNextIndex] = useState(0);

  // Your yoga images array
  const yogaImages = [
    '/images/yoga1.png',
    '/images/yoga2.png',
    '/images/yoga3.png',
    '/images/yoga4.png',
    '/images/yoga5.png',
  ];

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    const next = (currentIndex + 1) % yogaImages.length;
    transitionToImage(next);
  };


  const transitionToImage = (newIndex: number) => {
    setIsExiting(true);
    setNextIndex(newIndex);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsExiting(false);
    }, 300);
  };

  return (
    <ImageCarouselContainer>
      {/* Current Image */}
      <MeditationImage
        src={yogaImages[currentIndex]}
        alt={`Yoga pose ${currentIndex + 1}`}
        isVisible={!isExiting}
        isExiting={isExiting}
      />
      
      {/* Next Image (for smooth transition) */}
      {isExiting && (
        <MeditationImage
          src={yogaImages[nextIndex]}
          alt={`Yoga pose ${nextIndex + 1}`}
          isVisible={true}
          isExiting={false}
        />
      )}

      
    </ImageCarouselContainer>
  );
};

const Hero: React.FC = () => {
  const theme = useTheme();

  return (
    <HeroSection>
      <Shape1 />
      <Shape2 />

      <HeroContainer>
        <HeroContent>
          <HeroTitle variant="h1">
            India&apos;s First Habit Building Yoga Program
          </HeroTitle>
          <HeroSubtitle variant="body1">
            Start your wellness journey with us and build lasting habits that transform your mind, body, and spirit through authentic yoga practice rooted in ancient wisdom.
          </HeroSubtitle>

          <CTAButton>
            🧘‍♀️ Try Free Sessions
            <CTAArrow>→</CTAArrow>
          </CTAButton>

          <TrustSection>
            <Avatars>
              {['Y', 'O', 'G', 'A'].map((letter, index) => (
                <StyledAvatar key={index} index={index}>
                  {letter}
                </StyledAvatar>
              ))}
            </Avatars>
            <TrustText>
              Trusted by <TrustNumber>1.22 Crore +</TrustNumber><br />
              Global yoga practitioners
            </TrustText>
          </TrustSection>
        </HeroContent>

        <HeroImageContainer>
          <MainImage>
            <HeroImageCarousel />
            
          </MainImage>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
