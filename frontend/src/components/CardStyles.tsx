import { styled, keyframes } from '@mui/material/styles';
import { Card, CardContent, Avatar} from '@mui/material';

// Common animations
export const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

export const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

export const glow = keyframes`
  0%, 100% { box-shadow: 0 8px 32px rgba(243, 145, 30, 0.2); }
  50% { box-shadow: 0 12px 40px rgba(243, 145, 30, 0.4); }
`;

// Common Card Component
export const BaseCard = styled(Card)(({ theme }) => ({
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
  [theme.breakpoints.down('md')]: {
    borderRadius: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '18px',
  },
}));

// Offer Card with Top Border
export const OfferCard = styled(BaseCard)(({ theme }) => ({
  minHeight: '400px',
  [theme.breakpoints.down('md')]: {
    minHeight: '380px',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: 'auto',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.accent.sunset}, 
      ${theme.palette.secondary.main}
    )`,
    [theme.breakpoints.down('sm')]: {
      height: '3px',
    },
  },
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: `0 20px 60px ${theme.palette.primary.main}20`,
    border: `2px solid ${theme.palette.primary.main}30`,
    [theme.breakpoints.down('md')]: {
      transform: 'translateY(-8px)',
      boxShadow: `0 15px 45px ${theme.palette.primary.main}18`,
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(-6px)',
      boxShadow: `0 12px 30px ${theme.palette.primary.main}15`,
    },
  },
}));

// Image Card with Shimmer Effect
export const ImageCard = styled(BaseCard)(({ theme }) => ({
  minHeight: '400px',
  [theme.breakpoints.down('md')]: {
    minHeight: '380px',
  },
  [theme.breakpoints.down('sm')]: {
    minHeight: '360px',
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
  },
}));

// Common Card Content
export const ResponsiveCardContent = styled(CardContent)(({ theme }) => ({
  padding: '2rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('lg')]: {
    padding: '1.8rem',
  },
  [theme.breakpoints.down('md')]: {
    padding: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1.2rem',
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

// Common Icon Container
export const IconContainer = styled(Avatar)(({ theme }) => ({
  width: '80px',
  height: '80px',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.accent.sunset} 100%
  ) !important`,
  marginBottom: '1.5rem',
  fontSize: '2.5rem',
  boxShadow: `0 8px 32px ${theme.palette.primary.main}30`,
  transition: 'all 0.3s ease',
  alignSelf: 'flex-start',
  '&::before, &::after': {
    display: 'none',
  },
  [theme.breakpoints.down('lg')]: {
    width: '75px',
    height: '75px',
    fontSize: '2.3rem',
    marginBottom: '1.3rem',
  },
  [theme.breakpoints.down('md')]: {
    width: '70px',
    height: '70px',
    fontSize: '2.1rem',
    marginBottom: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '65px',
    height: '65px',
    fontSize: '2rem',
    marginBottom: '1rem',
    alignSelf: 'center',
  },
}));
