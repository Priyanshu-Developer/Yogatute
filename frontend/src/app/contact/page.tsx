'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from '@/components/Navbar';

// Animations
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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Main Container
const ContactSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.accent.cream} 25%, 
    ${theme.palette.yoga.peace} 50%, 
    ${theme.palette.background.paper} 75%, 
    ${theme.palette.background.default} 100%
  )`,
  position: 'relative',
  overflow: 'hidden',
  paddingTop: '120px',
  paddingBottom: '80px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '100px',
    paddingBottom: '60px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, ${theme.palette.primary.light}10 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}08 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${theme.palette.accent.warm}06 0%, transparent 50%)
    `,
    zIndex: 1,
  },
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1400px !important',
  position: 'relative',
  zIndex: 2,
}));

// Header Section
const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '5rem',
  animation: `${fadeInUp} 0.8s ease-out`,
  [theme.breakpoints.down('md')]: {
    marginBottom: '4rem',
  },
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontWeight: 800,
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 50%, 
    ${theme.palette.secondary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  marginBottom: '1rem',
  lineHeight: 1.2,
}));

const PageSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
  color: theme.palette.text.secondary,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
}));

// Contact Methods Container
const ContactMethodsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2rem',
  marginBottom: '5rem',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    marginBottom: '4rem',
    gap: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  flex: '1 1 280px',
  minWidth: '280px',
  maxWidth: '320px',
  borderRadius: '24px',
  background: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.primary.light}20`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
  animation: `${fadeInUp} 0.8s ease-out`,
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: `0 20px 60px ${theme.palette.primary.main}25`,
    border: `2px solid ${theme.palette.primary.main}40`,
    '& .contact-icon': {
      animation: `${float} 2s ease-in-out infinite`,
      transform: 'scale(1.1)',
    },
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '100%',
    minWidth: 'auto',
  },
}));

const ContactCardContent = styled(CardContent)(({ theme }) => ({
  padding: '2.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    padding: '2rem',
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.primary.light} 100%
  )`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.contrastText,
  fontSize: '2rem',
  transition: 'all 0.3s ease',
  boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
}));

const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '0.5rem',
}));

const ContactDetails = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

// Contact Form Section
const FormSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '4rem',
  alignItems: 'flex-start',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: '3rem',
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  flex: '1',
  background: `${theme.palette.background.paper}95`,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderRadius: '24px',
  padding: '3rem',
  border: `2px solid ${theme.palette.primary.light}20`,
  boxShadow: `0 15px 40px ${theme.palette.primary.main}15`,
  animation: `${slideIn} 0.8s ease-out`,
  [theme.breakpoints.down('md')]: {
    padding: '2rem',
  },
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '0.5rem',
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '2rem',
  lineHeight: 1.6,
}));

const FormRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1.5rem',
  },
}));

const FormField = styled(Box)(({ theme }) => ({
  flex: '1',
  marginBottom: '1.5rem',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: `${theme.palette.background.default}50`,
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: `${theme.palette.background.default}70`,
    },
    '&.Mui-focused': {
      backgroundColor: `${theme.palette.background.default}80`,
      '& fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
      },
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '1rem 2rem',
  borderRadius: '16px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.secondary.main} 100%
  )`,
  color: theme.palette.primary.contrastText,
  boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  marginTop: '1rem',
  '&:hover': {
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: `0 15px 40px ${theme.palette.primary.main}50`,
    background: `linear-gradient(135deg, 
      ${theme.palette.primary.dark} 0%, 
      ${theme.palette.secondary.dark} 100%
    )`,
  },
  '&:active': {
    transform: 'translateY(-1px) scale(0.98)',
  },
}));

// Map and Info Section
const InfoSection = styled(Box)(({ theme }) => ({
  flex: '1',
  animation: `${slideIn} 0.8s ease-out 0.2s both`,
}));

const MapContainer = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}95`,
  borderRadius: '24px',
  overflow: 'hidden',
  border: `2px solid ${theme.palette.primary.light}20`,
  boxShadow: `0 15px 40px ${theme.palette.primary.main}15`,
  marginBottom: '2rem',
  height: '300px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: '250px',
  },
}));

const MapPlaceholder = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, 
    ${theme.palette.accent.cream} 0%, 
    ${theme.palette.yoga.peace} 100%
  )`,
  color: theme.palette.text.secondary,
  fontSize: '1.1rem',
  fontWeight: 500,
}));

const InfoCard = styled(Box)(({ theme }) => ({
  background: `${theme.palette.background.paper}95`,
  borderRadius: '20px',
  padding: '2rem',
  border: `2px solid ${theme.palette.primary.light}20`,
  boxShadow: `0 8px 25px ${theme.palette.primary.main}15`,
  marginBottom: '1.5rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 35px ${theme.palette.primary.main}20`,
  },
}));

const InfoTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}));

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
}));

// Social Media Section
const SocialSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '4rem',
  padding: '3rem',
  background: `${theme.palette.background.paper}95`,
  borderRadius: '24px',
  border: `2px solid ${theme.palette.primary.light}20`,
  boxShadow: `0 15px 40px ${theme.palette.primary.main}15`,
  animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
}));

const SocialTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: '1rem',
}));

const SocialSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: theme.palette.text.secondary,
  marginBottom: '2rem',
}));

const SocialIcons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.primary.light} 100%
  )`,
  color: theme.palette.primary.contrastText,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `0 6px 20px ${theme.palette.primary.main}30`,
  '&:hover': {
    transform: 'translateY(-5px) scale(1.1)',
    boxShadow: `0 12px 30px ${theme.palette.primary.main}40`,
    background: `linear-gradient(135deg, 
      ${theme.palette.secondary.main} 0%, 
      ${theme.palette.secondary.light} 100%
    )`,
  },
}));

// Contact Form Interface
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Main Contact Component
const ContactPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage('Please fill in all required fields');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbarMessage('Please enter a valid email address');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSnackbarMessage('Thank you! Your message has been sent successfully.');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <PhoneIcon />,
      title: 'Call Us',
      details: '+91 98765 43210\n+91 87654 32109',
      action: () => window.open('tel:+919876543210')
    },
    {
      icon: <EmailIcon />,
      title: 'Email Us',
      details: 'hello@yogaprogram.com\nsupport@yogaprogram.com',
      action: () => window.open('mailto:hello@yogaprogram.com')
    },
    {
      icon: <WhatsAppIcon />,
      title: 'WhatsApp',
      details: '+91 98765 43210\nQuick Support Available',
      action: () => window.open('https://wa.me/919876543210')
    },
    {
      icon: <LocationOnIcon />,
      title: 'Visit Us',
      details: '123 Wellness Street\nYoga District, Mumbai 400001',
      action: () => window.open('https://maps.google.com')
    }
  ];

  return (
    <Box>
        <Navbar/>
        <ContactSection>
      <StyledContainer>
        {/* Header */}
        <HeaderSection>
          <PageTitle>
            Get In Touch
          </PageTitle>
          <PageSubtitle>
            Ready to start your yoga journey? We're here to help you every step of the way. 
            Reach out to us through any of the methods below.
          </PageSubtitle>
        </HeaderSection>

        {/* Contact Methods */}
        <ContactMethodsContainer>
          {contactMethods.map((method, index) => (
            <ContactCard key={index} onClick={method.action}>
              <ContactCardContent>
                <ContactIcon className="contact-icon">
                  {method.icon}
                </ContactIcon>
                <Box>
                  <ContactTitle>{method.title}</ContactTitle>
                  <ContactDetails>
                    {method.details.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < method.details.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </ContactDetails>
                </Box>
              </ContactCardContent>
            </ContactCard>
          ))}
        </ContactMethodsContainer>

        {/* Contact Form and Info */}
        <FormSection>
          {/* Contact Form */}
          <FormContainer>
            <FormTitle>Send us a Message</FormTitle>
            <FormSubtitle>
              Have a question or want to book a session? Fill out the form below and we'll get back to you within 24 hours.
            </FormSubtitle>
            
            <form onSubmit={handleSubmit}>
              <FormRow>
                <FormField>
                  <StyledTextField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                  />
                </FormField>
                <FormField>
                  <StyledTextField
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                  />
                </FormField>
              </FormRow>

              <FormRow>
                <FormField>
                  <StyledTextField
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </FormField>
                <FormField>
                  <StyledTextField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </FormField>
              </FormRow>

              <FormField>
                <StyledTextField
                  label="Message *"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </FormField>

              <SubmitButton
                type="submit"
                variant="contained"
                startIcon={<SendIcon />}
              >
                Send Message
              </SubmitButton>
            </form>
          </FormContainer>

          {/* Map and Additional Info */}
          <InfoSection>
            <MapContainer>
              <MapPlaceholder>
                🗺️ Interactive Map Coming Soon
              </MapPlaceholder>
            </MapContainer>

            <InfoCard>
              <InfoTitle>
                <AccessTimeIcon />
                Business Hours
              </InfoTitle>
              <InfoText>
                Monday - Friday: 6:00 AM - 10:00 PM<br />
                Saturday - Sunday: 7:00 AM - 9:00 PM<br />
                Online Sessions: 24/7 Available
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoTitle>
                <LocationOnIcon />
                Our Studio
              </InfoTitle>
              <InfoText>
                Located in the heart of Mumbai, our peaceful studio offers a serene environment for your yoga practice. 
                Easy parking and public transport access available.
              </InfoText>
            </InfoCard>
          </InfoSection>
        </FormSection>

        {/* Social Media */}
        <SocialSection>
          <SocialTitle>Connect With Us</SocialTitle>
          <SocialSubtitle>
            Follow us on social media for daily yoga tips, inspiration, and community updates
          </SocialSubtitle>
          <SocialIcons>
            <SocialIcon onClick={() => window.open('https://facebook.com')}>
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon onClick={() => window.open('https://instagram.com')}>
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon onClick={() => window.open('https://twitter.com')}>
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon onClick={() => window.open('https://youtube.com')}>
              <YouTubeIcon />
            </SocialIcon>
            <SocialIcon onClick={() => window.open('https://wa.me/919876543210')}>
              <WhatsAppIcon />
            </SocialIcon>
          </SocialIcons>
        </SocialSection>

        {/* Snackbar for notifications */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </StyledContainer>
    </ContactSection>
    </Box>
  );
};

export default ContactPage;
