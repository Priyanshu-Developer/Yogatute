'use client';
import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  useTheme,
  useMediaQuery,
  Chip,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GoogleIcon from '@mui/icons-material/Google';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';

// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const slideIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(50px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
`;

const slideOut = keyframes`
  from { 
    opacity: 1; 
    transform: translateX(0); 
  }
  to { 
    opacity: 0; 
    transform: translateX(-50px); 
  }
`;



// Section Container
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: '8rem 0',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.paper} 0%, 
    ${theme.palette.accent.cream} 30%, 
    ${theme.palette.yoga.peace} 60%, 
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
    ${theme.palette.primary.main} 100%
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

// Google Reviews Header
const GoogleHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '3rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '0.8rem',
    marginBottom: '2rem',
  },
}));

const GoogleBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  padding: '1rem 1.5rem',
  background: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  borderRadius: '50px',
  border: `2px solid ${theme.palette.primary.light}20`,
  boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
  animation: `${float} 3s ease-in-out infinite`,
  [theme.breakpoints.down('sm')]: {
    padding: '0.8rem 1.2rem',
    gap: '0.6rem',
  },
}));

const GoogleLogo = styled(GoogleIcon)(({ theme }) => ({
  fontSize: '2rem',
  color: '#4285F4',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const RatingInfo = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

const RatingScore = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 800,
  color: theme.palette.text.primary,
  marginBottom: '0.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

const RatingStars = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.2rem',
  marginBottom: '0.3rem',
}));

const RatingText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

// Testimonials Slider
const TestimonialSlider = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}));

const TestimonialContainer = styled(Box)(({ theme }) => ({
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
}));

// Testimonial Card
const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '24px',
  background: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.primary.light}15`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '350px',
  [theme.breakpoints.down('md')]: {
    borderRadius: '20px',
    minHeight: '320px',
  },
  [theme.breakpoints.down('sm')]: {
    borderRadius: '18px',
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
      #4285F4, 
      #34A853, 
      #FBBC05, 
      #EA4335
    )`,
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 60px ${theme.palette.primary.main}20`,
    border: `2px solid ${theme.palette.primary.main}30`,
    [theme.breakpoints.down('md')]: {
      transform: 'translateY(-6px)',
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translateY(-4px)',
    },
  },
}));

const TestimonialContent = styled(CardContent)(({ theme }) => ({
  padding: '2rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
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

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  fontSize: '3rem',
  color: `${theme.palette.primary.main}20`,
  transform: 'rotate(180deg)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    top: '0.8rem',
    right: '0.8rem',
  },
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  fontSize: '1.05rem',
  color: theme.palette.text.primary,
  lineHeight: 1.7,
  marginBottom: '1.5rem',
  flexGrow: 1,
  fontStyle: 'italic',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    marginBottom: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.95rem',
    marginBottom: '1rem',
    lineHeight: 1.6,
  },
  '&::before': {
    content: '"',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    fontSize: '2rem',
    color: theme.palette.primary.main,
    opacity: 0.5,
    fontFamily: 'serif',
  },
}));

// User Info
const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    gap: '0.8rem',
  },
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: '60px',
  height: '60px',
  fontSize: '1.5rem',
  fontWeight: 700,
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.accent.sunset} 100%
  )`,
  boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
  [theme.breakpoints.down('sm')]: {
    width: '50px',
    height: '50px',
    fontSize: '1.2rem',
  },
}));

const UserDetails = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const UserName = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  marginBottom: '0.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const UserLocation = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

// Review Meta Info
const ReviewMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '0.8rem',
    alignItems: 'flex-start',
  },
}));

const ReviewRating = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

const GoogleBadgeSmall = styled(Chip)(({ theme }) => ({
  backgroundColor: '#4285F4',
  color: 'white',
  fontSize: '0.75rem',
  height: '24px',
  fontWeight: 600,
  '& .MuiChip-icon': {
    color: 'white',
    fontSize: '1rem',
  },
}));

const ReviewDate = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  color: theme.palette.text.secondary,
  fontStyle: 'normal',
}));

// Verified Badge
const VerifiedBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  color: '#34A853',
  fontSize: '0.8rem',
  fontWeight: 500,
}));

// Navigation
const NavigationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '3rem',
  [theme.breakpoints.down('sm')]: {
    gap: '1rem',
    marginTop: '2rem',
  },
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  width: '50px',
  height: '50px',
  backgroundColor: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.primary.light}20`,
  color: theme.palette.primary.main,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: '45px',
    height: '45px',
  },
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
  },
  '&:disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
}));

const DotsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.8rem',
  [theme.breakpoints.down('sm')]: {
    gap: '0.6rem',
  },
}));

const Dot = styled(Box)<{ active: boolean }>(({ theme, active }) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : `${theme.palette.primary.main}30`,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: '10px',
    height: '10px',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'scale(1.2)',
  },
}));

// Testimonials Data (Google Reviews)
interface GoogleReview {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

const googleReviews: GoogleReview[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    avatar: 'PS',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    date: '2 weeks ago',
    text: 'YogaTute has completely transformed my life! The therapeutic yoga program helped me recover from chronic back pain that I suffered for years. The instructors are incredibly knowledgeable and the personalized approach made all the difference. Highly recommend to anyone looking for authentic yoga practice.',
    verified: true,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    avatar: 'RK',
    location: 'Delhi, India',
    rating: 5,
    date: '1 month ago',
    text: 'Amazing experience with YogaTute! Their PCOD management program has been a game-changer for my wife. The combination of yoga, meditation, and lifestyle guidance has shown remarkable results. The instructors are very caring and professional.',
    verified: true,
  },
  {
    id: 3,
    name: 'Sneha Patel',
    avatar: 'SP',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    date: '3 weeks ago',
    text: 'I joined YogaTute during my pregnancy and it was the best decision I made. The prenatal yoga sessions were safe, effective, and helped me have a smooth delivery. The instructors understood my needs perfectly and provided excellent guidance throughout.',
    verified: true,
  },
  {
    id: 4,
    name: 'Dr. Arun Mehta',
    avatar: 'AM',
    location: 'Bangalore, Karnataka',
    rating: 5,
    date: '2 months ago',
    text: 'As a medical professional, I can confidently say that YogaTute follows authentic and scientific yoga practices. Their diabetes management program has helped many of my patients improve their blood sugar levels naturally. Excellent work!',
    verified: true,
  },
  {
    id: 5,
    name: 'Kavita Singh',
    avatar: 'KS',
    location: 'Pune, Maharashtra',
    rating: 5,
    date: '1 week ago',
    text: 'YogaTute\'s mental health yoga program helped me overcome anxiety and depression. The breathing techniques and meditation practices have given me inner peace and strength. The support from instructors is outstanding. Life-changing experience!',
    verified: true,
  },
  {
    id: 6,
    name: 'Mohan Reddy',
    avatar: 'MR',
    location: 'Hyderabad, Telangana',
    rating: 5,
    date: '5 days ago',
    text: 'Excellent platform for seniors like me! The senior citizen yoga program is perfectly designed for our age group. The chair yoga sessions and gentle movements have improved my flexibility and reduced joint pain significantly. Thank you YogaTute!',
    verified: true,
  },
];

// Main Component
const Testimonials: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviewsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(googleReviews.length / reviewsPerPage);

  const getCurrentReviews = () => {
    const startIndex = currentPage * reviewsPerPage;
    return googleReviews.slice(startIndex, startIndex + reviewsPerPage);
  };

  const handleNext = () => {
    if (isAnimating || currentPage >= totalPages - 1) return;
    setIsAnimating(true);
    setCurrentPage(prev => prev + 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handlePrev = () => {
    if (isAnimating || currentPage <= 0) return;
    setIsAnimating(true);
    setCurrentPage(prev => prev - 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentPage) return;
    setIsAnimating(true);
    setCurrentPage(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentPage(prev => (prev + 1) % totalPages);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, totalPages]);

  const averageRating = googleReviews.reduce((acc, review) => acc + review.rating, 0) / googleReviews.length;

  return (
    <SectionContainer>
      <StyledContainer>
        <SectionTitle>
          What Our Community Says
        </SectionTitle>
        <SectionSubtitle>
          Real experiences from our yoga practitioners who transformed their lives through authentic practices
        </SectionSubtitle>

        {/* Google Reviews Header */}
        <GoogleHeader>
          <GoogleBadge>
            <GoogleLogo />
            <RatingInfo>
              <RatingScore>{averageRating.toFixed(1)}</RatingScore>
              <RatingStars>
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    sx={{
                      fontSize: '1.2rem',
                      color: index < Math.floor(averageRating) ? '#FBBC05' : '#E0E0E0',
                    }}
                  />
                ))}
              </RatingStars>
              <RatingText>Based on {googleReviews.length}+ Google Reviews</RatingText>
            </RatingInfo>
          </GoogleBadge>
        </GoogleHeader>

        {/* Testimonials */}
        <TestimonialSlider>
          <TestimonialContainer>
            {getCurrentReviews().map((review, index) => (
              <TestimonialCard 
                key={review.id}
                sx={{
                  animation: `${slideIn} 0.5s ease-out`,
                }}
              >
                <TestimonialContent>
                  <QuoteIcon />
                  
                  <UserInfo>
                    <UserAvatar>{review.avatar}</UserAvatar>
                    <UserDetails>
                      <UserName>{review.name}</UserName>
                      <UserLocation>{review.location}</UserLocation>
                    </UserDetails>
                    {review.verified && (
                      <VerifiedBadge>
                        <VerifiedIcon sx={{ fontSize: '1rem' }} />
                        <span>Verified</span>
                      </VerifiedBadge>
                    )}
                  </UserInfo>

                  <TestimonialText>
                    {review.text}
                  </TestimonialText>

                  <ReviewMeta>
                    <ReviewRating>
                      <Rating
                        value={review.rating}
                        readOnly
                        size="small"
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: '#FBBC05',
                          },
                        }}
                      />
                      <GoogleBadgeSmall
                        icon={<GoogleIcon />}
                        label="Google"
                        size="small"
                      />
                    </ReviewRating>
                    <ReviewDate>{review.date}</ReviewDate>
                  </ReviewMeta>
                </TestimonialContent>
              </TestimonialCard>
            ))}
          </TestimonialContainer>

          {/* Navigation */}
          <NavigationContainer>
            <NavButton 
              onClick={handlePrev}
              disabled={currentPage === 0 || isAnimating}
            >
              <ArrowBackIosIcon />
            </NavButton>

            <DotsContainer>
              {[...Array(totalPages)].map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentPage}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </DotsContainer>

            <NavButton 
              onClick={handleNext}
              disabled={currentPage >= totalPages - 1 || isAnimating}
            >
              <ArrowForwardIosIcon />
            </NavButton>
          </NavigationContainer>
        </TestimonialSlider>
      </StyledContainer>
    </SectionContainer>
  );
};

export default Testimonials;
