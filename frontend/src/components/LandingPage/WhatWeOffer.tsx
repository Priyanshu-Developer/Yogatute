'use client';
import React from 'react';
import {
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import shared styles
import {
  DefaultSectionContainer,
  StyledContainer,
  SectionTitle,
  SectionSubtitle,
  ResponsiveGrid,
} from '@/components/SectionsStyles';

import {
  OfferCard,
  ResponsiveCardContent,
  IconContainer,
  float,
} from '@/components/CardStyles';

const offers = [
  {
    icon: '🧘‍♀️',
    title: 'Personalized Yoga Programs',
    description: 'Customized yoga sequences designed specifically for your body type, fitness level, and health goals.',
    features: [
      'Individual assessment and consultation',
      'Customized asana sequences',
      'Progress tracking and adjustments',
      'One-on-one guidance sessions'
    ]
  },
  {
    icon: '📱',
    title: 'Digital Yoga Platform',
    description: 'Access your yoga practice anytime, anywhere with our comprehensive digital platform and mobile app.',
    features: [
      'HD video sessions',
      'Offline practice modes',
      'Progress analytics',
      'Community support features'
    ]
  },
  {
    icon: '👨‍⚕️',
    title: 'Expert Guidance',
    description: 'Learn from certified yoga instructors and wellness experts with years of experience in authentic practices.',
    features: [
      'Certified yoga instructors',
      'Medical advisory board',
      'Regular live sessions',
      '24/7 doubt clearing support'
    ]
  },
  {
    icon: '🏥',
    title: 'Therapeutic Yoga',
    description: 'Specialized therapeutic yoga programs for various health conditions and recovery support.',
    features: [
      'Condition-specific programs',
      'Medical yoga therapy',
      'Rehabilitation support',
      'Health monitoring integration'
    ]
  },
  {
    icon: '🌟',
    title: 'Holistic Wellness',
    description: 'Complete wellness approach combining yoga, meditation, nutrition, and lifestyle coaching.',
    features: [
      'Meditation and mindfulness',
      'Nutritional guidance',
      'Lifestyle coaching',
      'Stress management techniques'
    ]
  },
  {
    icon: '👥',
    title: 'Community Support',
    description: 'Join a vibrant community of yoga practitioners and share your wellness journey with like-minded people.',
    features: [
      'Group practice sessions',
      'Community challenges',
      'Peer support network',
      'Success story sharing'
    ]
  }
];

// Component-specific styles
const OfferTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '1rem',
  lineHeight: 1.3,
  [theme.breakpoints.down('lg')]: {
    fontSize: '1.35rem',
    marginBottom: '0.9rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
    marginBottom: '0.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    textAlign: 'center',
    marginBottom: '0.8rem',
  },
}));

const OfferDescription = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  marginBottom: '1.5rem',
  flexGrow: 1,
  [theme.breakpoints.down('lg')]: {
    fontSize: '0.98rem',
    marginBottom: '1.3rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
    marginBottom: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    textAlign: 'center',
    marginBottom: '1rem',
    lineHeight: 1.5,
  },
}));

const OfferFeatures = styled(Box)(({ theme }) => ({
  marginBottom: '1.5rem',
  [theme.breakpoints.down('lg')]: {
    marginBottom: '1.3rem',
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1rem',
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.8rem',
  marginBottom: '0.7rem',
  color: theme.palette.text.secondary,
  fontSize: '0.9rem',
  lineHeight: 1.4,
  [theme.breakpoints.down('lg')]: {
    gap: '0.7rem',
    marginBottom: '0.6rem',
    fontSize: '0.88rem',
  },
  [theme.breakpoints.down('md')]: {
    gap: '0.6rem',
    fontSize: '0.85rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '0.5rem',
    fontSize: '0.82rem',
    alignItems: 'center',
  },
  '&:last-child': {
    marginBottom: 0,
  },
}));

const FeatureDot = styled(Box)(({ theme }) => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  flexShrink: 0,
  marginTop: '0.4rem',
  [theme.breakpoints.down('sm')]: {
    width: '5px',
    height: '5px',
    marginTop: '0.3rem',
  },
}));

const LearnMoreButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '0.5rem',
  color: theme.palette.primary.main,
  fontWeight: 600,
  fontSize: '0.95rem',
  marginTop: 'auto',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  padding: '0.5rem 0',
  [theme.breakpoints.down('lg')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.88rem',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    fontSize: '0.85rem',
    padding: '0.8rem 0',
  },
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

const ArrowIcon = styled(ArrowForwardIcon)(({ theme }) => ({
  fontSize: '1.2rem',
  transition: 'transform 0.3s ease',
  opacity: 0.7,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const WhatWeOffer: React.FC = () => {
  const theme = useTheme();

  return (
    <DefaultSectionContainer>
      <StyledContainer>
        <SectionTitle>
          What We Offer
        </SectionTitle>
        <SectionSubtitle>
          Discover our comprehensive range of yoga services designed to support your complete wellness journey
        </SectionSubtitle>

        <ResponsiveGrid>
          {offers.map((offer, index) => (
            <OfferCard key={index}>
              <ResponsiveCardContent>
                <IconContainer className="offer-icon">
                  {offer.icon}
                </IconContainer>
                
                <OfferTitle>
                  {offer.title}
                </OfferTitle>
                
                <OfferDescription>
                  {offer.description}
                </OfferDescription>
                
                <OfferFeatures>
                  {offer.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <FeatureDot />
                      <Typography component="span" sx={{ fontSize: 'inherit', color: 'inherit' }}>
                        {feature}
                      </Typography>
                    </FeatureItem>
                  ))}
                </OfferFeatures>
                
                <LearnMoreButton>
                  Learn More
                  <ArrowIcon className="offer-arrow" />
                </LearnMoreButton>
              </ResponsiveCardContent>
            </OfferCard>
          ))}
        </ResponsiveGrid>
      </StyledContainer>
    </DefaultSectionContainer>
  );
};

export default WhatWeOffer;
