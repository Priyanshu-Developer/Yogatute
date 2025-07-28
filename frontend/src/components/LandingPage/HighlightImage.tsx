'use client';
import React from 'react';
import {
  Box,
  Typography,
  Card,
  useTheme,
  Chip,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

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

// CSS Grid Layout (replacing MUI Grid)
const ImagesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
  alignItems: 'stretch',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1.8rem',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '1.2rem',
  },
  [theme.breakpoints.down(400)]: {
    gridTemplateColumns: '1fr',
    gap: '1rem',
  },
}));

const ImageCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  background: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.primary.light}20`,
  boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
  height: 'auto',
  minHeight: '450px',
  [theme.breakpoints.down('md')]: {
    borderRadius: '20px',
    minHeight: '420px',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '18px',
    minHeight: '400px',
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
      ${theme.palette.primary.light}30, 
      transparent
    )`,
    animation: `${shimmer} 4s infinite`,
    zIndex: 1,
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: `0 25px 80px ${theme.palette.primary.main}25`,
    border: `2px solid ${theme.palette.primary.main}40`,
    [theme.breakpoints.down('md')]: {
      transform: 'translateY(-8px) scale(1.01)',
      boxShadow: `0 20px 60px ${theme.palette.primary.main}20`,
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(-6px)',
      boxShadow: `0 15px 40px ${theme.palette.primary.main}18`,
    },
    '& .image-overlay': {
      opacity: 1,
    },
    '& .play-button': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
      [theme.breakpoints.down('sm')]: {
        transform: 'translate(-50%, -50%) scale(0.9)',
      },
    },
    '& .image-content': {
      transform: 'translateY(0)',
      opacity: 1,
    },
    '& .highlight-image': {
      transform: 'scale(1.1)',
      [theme.breakpoints.down('sm')]: {
        transform: 'scale(1.05)',
      },
    },
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '280px',
  overflow: 'hidden',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.light}20 0%, 
    ${theme.palette.accent.warm}15 100%
  )`,
  [theme.breakpoints.down('lg')]: {
    height: '260px',
  },
  [theme.breakpoints.down('md')]: {
    height: '240px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '220px',
  },
}));

const HighlightImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease',
  filter: 'brightness(0.9) contrast(1.1)',
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.7) 100%
  )`,
  opacity: 0,
  transition: 'opacity 0.3s ease',
  zIndex: 2,
}));

const PlayButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(0)',
  width: '70px',
  height: '70px',
  borderRadius: '50%',
  background: `${theme.palette.primary.main}90`,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  opacity: 0,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 3,
  border: `3px solid ${theme.palette.background.paper}60`,
  boxShadow: `0 8px 32px ${theme.palette.primary.main}50`,
  [theme.breakpoints.down('md')]: {
    width: '60px',
    height: '60px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
  },
}));

const ImageContent = styled(Box)(({ theme }) => ({
  padding: '1.5rem',
  transform: 'translateY(10px)',
  opacity: 0,
  transition: 'all 0.3s ease',
  position: 'relative',
  zIndex: 4,
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100% - 280px)',
  [theme.breakpoints.down('lg')]: {
    padding: '1.3rem',
    height: 'calc(100% - 260px)',
  },
  [theme.breakpoints.down('md')]: {
    padding: '1.2rem',
    height: 'calc(100% - 240px)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
    height: 'calc(100% - 220px)',
  },
}));

const ImageTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '0.8rem',
  lineHeight: 1.3,
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.25rem',
    marginBottom: '0.7rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.15rem',
    marginBottom: '0.6rem',
    textAlign: 'center',
  },
}));

const ImageDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  marginBottom: '1rem',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  flexGrow: 1,
  [theme.breakpoints.down('lg')]: {
    fontSize: '0.9rem',
    marginBottom: '0.9rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.88rem',
    marginBottom: '0.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    textAlign: 'center',
    WebkitLineClamp: 3,
  },
}));

const ImageStats = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
  flexWrap: 'wrap',
  gap: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    gap: '0.8rem',
  },
}));

const StatChip = styled(Chip)(({ theme }) => ({
  fontSize: '0.75rem',
  height: '28px',
  backgroundColor: `${theme.palette.primary.light}20`,
  color: theme.palette.primary.main,
  fontWeight: 500,
  border: `1px solid ${theme.palette.primary.light}30`,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.7rem',
    height: '26px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.68rem',
    height: '24px',
  },
}));

const CategoryBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: '15px',
  left: '15px',
  zIndex: 5,
  backgroundColor: `${theme.palette.background.paper}90`,
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '0.8rem',
  border: `2px solid ${theme.palette.primary.light}30`,
  [theme.breakpoints.down('md')]: {
    top: '12px',
    left: '12px',
    fontSize: '0.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    top: '10px',
    left: '10px',
    fontSize: '0.7rem',
  },
}));

const PopularBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  gap: '0.3rem',
  [theme.breakpoints.down('sm')]: {
    gap: '0.2rem',
  },
}));

const PopularText = styled(Typography)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 600,
  [theme.breakpoints.down('md')]: {
    fontSize: '0.7rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.68rem',
  },
}));

const highlights = [
  {
    id: 1,
    title: 'Morning Sunrise Yoga',
    description: 'Start your day with energizing sunrise yoga sessions in serene natural settings.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Morning Practice',
    stats: { duration: '45 min', participants: '12-15' }
  },
  {
    id: 2,
    title: 'Therapeutic Healing',
    description: 'Specialized therapeutic yoga sessions for injury recovery and pain management.',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Therapeutic',
    stats: { duration: '60 min', participants: '6-8' }
  },
  {
    id: 3,
    title: 'Meditation Mastery',
    description: 'Deep meditation practices to cultivate mindfulness and inner peace.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Meditation',
    stats: { duration: '30 min', participants: '20-25' }
  },
  {
    id: 4,
    title: 'Prenatal Wellness',
    description: 'Safe and nurturing yoga practice designed specifically for expecting mothers.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Prenatal',
    stats: { duration: '50 min', participants: '8-10' }
  },
  {
    id: 5,
    title: 'Advanced Asanas',
    description: 'Challenge yourself with advanced yoga postures and dynamic flow sequences.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Advanced',
    stats: { duration: '90 min', participants: '6-10' }
  },
  {
    id: 6,
    title: 'Group Harmony',
    description: 'Experience the power of collective energy in our popular group yoga sessions.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Group Classes',
    stats: { duration: '60 min', participants: '15-20' }
  }
];

const HighlightImages: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionContainer>
      <StyledContainer>
        <SectionTitle>
          Experience YogaTute
        </SectionTitle>
        <SectionSubtitle>
          Discover the beauty and transformative power of our yoga programs through these inspiring moments
        </SectionSubtitle>

        {/* Replaced MUI Grid with CSS Grid */}
        <ImagesGrid>
          {highlights.map((highlight, index) => (
            <ImageCard key={highlight.id}>
              <CategoryBadge label={highlight.category} />
              
              <ImageContainer>
                <HighlightImage
                  src={highlight.image}
                  alt={highlight.title}
                  className="highlight-image"
                />
                <ImageOverlay className="image-overlay" />
                <PlayButton className="play-button">
                  <PlayArrowIcon sx={{ 
                    fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' }, 
                    marginLeft: '3px' 
                  }} />
                </PlayButton>
              </ImageContainer>

              <ImageContent className="image-content">
                <ImageTitle>{highlight.title}</ImageTitle>
                <ImageDescription>{highlight.description}</ImageDescription>
                
                <ImageStats>
                  <StatChip 
                    icon={<GroupIcon sx={{ fontSize: '0.9rem' }} />}
                    label={highlight.stats.participants}
                    size="small"
                  />
                  <StatChip 
                    label={highlight.stats.duration}
                    size="small"
                  />
                  <PopularBadge>
                    <FavoriteIcon sx={{ 
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }} />
                    <PopularText variant="caption">
                      Popular
                    </PopularText>
                  </PopularBadge>
                </ImageStats>
              </ImageContent>
            </ImageCard>
          ))}
        </ImagesGrid>
      </StyledContainer>
    </SectionContainer>
  );
};

export default HighlightImages;
