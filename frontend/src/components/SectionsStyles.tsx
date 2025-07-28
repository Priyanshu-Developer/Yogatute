import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

// Common Section Container
export const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '8rem 0',
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

// Section Container with Default Background
export const DefaultSectionContainer = styled(SectionContainer)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.background.paper} 0%, 
    ${theme.palette.accent.cream} 50%, 
    ${theme.palette.background.default} 100%
  )`,
}));

// Section Container with Primary Background
export const PrimarySectionContainer = styled(SectionContainer)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.primary.dark} 25%, 
    ${theme.palette.secondary.main} 50%, 
    ${theme.palette.secondary.dark} 100%
  )`,
  color: theme.palette.primary.contrastText,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, ${theme.palette.accent.warm}15 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${theme.palette.yoga.peace}10 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

// Section Container with Gradient Background
export const GradientSectionContainer = styled(SectionContainer)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.yoga.peace} 25%, 
    ${theme.palette.accent.cream} 50%, 
    ${theme.palette.background.paper} 75%, 
    ${theme.palette.background.default} 100%
  )`,
}));

// Contact Section Container
export const ContactSectionContainer = styled(SectionContainer)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.accent.cream} 30%, 
    ${theme.palette.yoga.peace} 60%, 
    ${theme.palette.background.paper} 100%
  )`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, ${theme.palette.primary.light}08 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}06 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

// Common Styled Container
export const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1400px !important',
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

// Common Section Title
export const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  fontWeight: 800,
  marginBottom: '1rem',
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '0.8rem',
  },
}));

// Section Title for Dark Backgrounds
export const DarkSectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  fontWeight: 800,
  marginBottom: '1rem',
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('sm')]: {
    marginBottom: '0.8rem',
  },
}));

// Common Section Subtitle
export const SectionSubtitle = styled(Typography)(({ theme }) => ({
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

// Section Subtitle for Dark Backgrounds
export const DarkSectionSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
  color: `${theme.palette.primary.contrastText}85`,
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

// Common Grid Layout
export const ResponsiveGrid = styled(Box)(({ theme }) => ({
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

// Compact Grid for smaller cards
export const CompactGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '2rem',
  alignItems: 'stretch',
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

// Two Column Grid
export const TwoColumnGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '3rem',
  alignItems: 'start',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
    gap: '2.5rem',
  },
  [theme.breakpoints.down('md')]: {
    gap: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.5rem',
  },
}));
