'use client';
import React from 'react';
import {
  Box,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.secondary.dark} 50%, 
    ${theme.palette.primary.dark} 100%
  )`,
  color: theme.palette.primary.contrastText,
  padding: '4rem 0 1rem',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}10 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.palette.accent.warm}08 0%, transparent 50%)
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

// Main Footer Grid
const FooterGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr 1fr',
  gap: '3rem',
  marginBottom: '3rem',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '2fr 1fr 1fr',
    gap: '2.5rem',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginBottom: '2rem',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    textAlign: 'center',
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1rem',
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.3rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  color: theme.palette.primary.contrastText,
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.2rem',
    marginBottom: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-8px',
    left: 0,
    width: '40px',
    height: '3px',
    background: `linear-gradient(90deg, 
      ${theme.palette.primary.main}, 
      ${theme.palette.accent.sunset}
    )`,
    borderRadius: '2px',
    [theme.breakpoints.down('sm')]: {
      left: '50%',
      transform: 'translateX(-50%)',
      width: '30px',
      height: '2px',
    },
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  display: 'block',
  color: `${theme.palette.primary.contrastText}85`,
  textDecoration: 'none',
  marginBottom: '0.8rem',
  fontSize: '0.95rem',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    marginBottom: '0.7rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    marginBottom: '0.6rem',
  },
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateX(8px)',
    [theme.breakpoints.down('sm')]: {
      transform: 'none',
    },
  },
}));

// Company Info Section
const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    marginBottom: '1rem',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  height: '50px',
  width: '50px',
  marginRight: '1rem',
  borderRadius: '12px',
  background: `${theme.palette.background.paper}20`,
  padding: '8px',
  [theme.breakpoints.down('sm')]: {
    height: '40px',
    width: '40px',
    marginRight: '0.8rem',
  },
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontSize: '1.8rem',
  fontWeight: 800,
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.accent.sunset} 100%
  )`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.4rem',
  },
}));

const CompanyDescription = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.contrastText}80`,
  lineHeight: 1.6,
  marginBottom: '1.5rem',
  fontSize: '0.95rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    marginBottom: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    marginBottom: '1rem',
  },
}));

// Contact Info
const ContactInfo = styled(Box)(({ theme }) => ({
  marginBottom: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '1rem',
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginBottom: '1rem',
  color: `${theme.palette.primary.contrastText}85`,
  fontSize: '0.95rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    marginBottom: '0.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    fontSize: '0.85rem',
    marginBottom: '0.6rem',
  },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
  width: '35px',
  height: '35px',
  borderRadius: '8px',
  background: `${theme.palette.primary.main}20`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  flexShrink: 0,
  [theme.breakpoints.down('sm')]: {
    width: '30px',
    height: '30px',
  },
}));

// Social Media
const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.8rem',
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    gap: '0.6rem',
  },
}));

// Fixed Social Button
const SocialButton = styled(IconButton)(({ theme }) => ({
  width: '45px',
  height: '45px',
  backgroundColor: `${theme.palette.background.paper}10`,
  color: theme.palette.primary.contrastText,
  border: `2px solid ${theme.palette.background.paper}20`,
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
  },
  '&:hover': {
    transform: 'translateY(-3px) scale(1.1)',
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
  },
}));

// Alternative: Create a Link-based social button
const SocialLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '45px',
  height: '45px',
  backgroundColor: `${theme.palette.background.paper}10`,
  color: theme.palette.primary.contrastText,
  border: `2px solid ${theme.palette.background.paper}20`,
  borderRadius: '50%',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    width: '40px',
    height: '40px',
  },
  '&:hover': {
    transform: 'translateY(-3px) scale(1.1)',
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
    color: theme.palette.primary.contrastText,
  },
}));

// Bottom Section
const BottomSection = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.background.paper}20`,
  paddingTop: '2rem',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '1rem',
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.contrastText}70`,
  fontSize: '0.9rem',
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    marginBottom: '0.8rem',
  },
}));

const CertificationText = styled(Typography)(({ theme }) => ({
  color: `${theme.palette.primary.contrastText}60`,
  fontSize: '0.85rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.75rem',
    flexDirection: 'column',
    gap: '0.3rem',
  },
}));

// Newsletter Section
const NewsletterSection = styled(Box)(({ theme }) => ({
  marginTop: '1.5rem',
  padding: '1.5rem',
  background: `${theme.palette.background.paper}10`,
  borderRadius: '16px',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.background.paper}20`,
  [theme.breakpoints.down('md')]: {
    padding: '1.2rem',
    marginTop: '1.2rem',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem',
    marginTop: '1rem',
  },
}));

const NewsletterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: '0.8rem',
  color: theme.palette.primary.contrastText,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    marginBottom: '0.6rem',
  },
}));

const NewsletterDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.9rem',
  color: `${theme.palette.primary.contrastText}80`,
  marginBottom: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    marginBottom: '0.8rem',
  },
}));

const Footer: React.FC = () => {
  const theme = useTheme();

  const socialLinks = [
    { icon: <FacebookIcon />, href: 'https://facebook.com/yogatute', label: 'Facebook' },
    { icon: <InstagramIcon />, href: 'https://instagram.com/yogatute', label: 'Instagram' },
    { icon: <TwitterIcon />, href: 'https://twitter.com/yogatute', label: 'Twitter' },
    { icon: <YouTubeIcon />, href: 'https://youtube.com/yogatute', label: 'YouTube' },
    { icon: <WhatsAppIcon />, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/company/yogatute', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { title: 'About Us', href: '/about' },
    { title: 'Types of Yoga', href: '/types-of-yoga' },
    { title: 'Programs', href: '/programs' },
    { title: 'Instructors', href: '/instructors' },
    { title: 'Blog', href: '/blog' },
    { title: 'Success Stories', href: '/testimonials' },
    { title: 'Free Trial', href: '/trial' },
    { title: 'Pricing', href: '/pricing' },
  ];

  const programs = [
    { title: 'Therapeutic Yoga', href: '/programs/therapeutic' },
    { title: 'Prenatal Yoga', href: '/programs/prenatal' },
    { title: 'Senior Citizen Yoga', href: '/programs/senior' },
    { title: 'Weight Management', href: '/programs/weight-management' },
    { title: 'Mental Health Yoga', href: '/programs/mental-health' },
    { title: 'PCOD/PCOS Support', href: '/programs/pcod-pcos' },
    { title: 'Diabetes Care', href: '/programs/diabetes' },
    { title: 'Immunity Boost', href: '/programs/immunity' },
  ];

  const support = [
    { title: 'Help Center', href: '/help' },
    { title: 'Contact Support', href: '/contact' },
    { title: 'Book Free Trial', href: '/trial' },
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Refund Policy', href: '/refund' },
    { title: 'FAQ', href: '/faq' },
    { title: 'Community', href: '/community' },
  ];

  return (
    <FooterContainer>
      <StyledContainer>
        <FooterGrid>
          {/* Company Info */}
          <FooterSection>
            <LogoSection>
              <LogoImage src="/icon.png" alt="YogaTute Logo" />
              <CompanyName>YogaTute</CompanyName>
            </LogoSection>
            
            <CompanyDescription>
              India&apos;s first habit-building yoga program dedicated to transforming lives through authentic yoga practices, therapeutic programs, and holistic wellness solutions rooted in ancient wisdom.
            </CompanyDescription>

            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <PhoneIcon sx={{ fontSize: '1.2rem' }} />
                </ContactIcon>
                <Typography color='primary.contrastText'>+91 98765 43210</Typography>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <EmailIcon sx={{ fontSize: '1.2rem' }} />
                </ContactIcon>
                <Typography color='primary.contrastText'>hello@yogatute.com</Typography>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <LocationOnIcon sx={{ fontSize: '1.2rem' }} />
                </ContactIcon>
                <Typography color='primary.contrastText'>123 Wellness Street, Yoga District, Mumbai 400001</Typography>
              </ContactItem>
            </ContactInfo>

            <NewsletterSection>
              <NewsletterTitle>🧘‍♀️ Join Our Wellness Journey</NewsletterTitle>
              <NewsletterDescription>
                Stay updated with yoga tips, wellness insights, and exclusive offers from YogaTute.
              </NewsletterDescription>
              
              {/* Fixed Social Container - Option 1: Using Link components */}
              <SocialContainer>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialContainer>
            </NewsletterSection>
          </FooterSection>

          {/* Quick Links */}
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            {quickLinks.map((link, index) => (
              <FooterLink key={index} href={link.href}>
                {link.title}
              </FooterLink>
            ))}
          </FooterSection>

          {/* Programs */}
          <FooterSection>
            <FooterTitle>Yoga Programs</FooterTitle>
            {programs.map((program, index) => (
              <FooterLink key={index} href={program.href}>
                {program.title}
              </FooterLink>
            ))}
          </FooterSection>

          {/* Support */}
          <FooterSection>
            <FooterTitle>Support</FooterTitle>
            {support.map((item, index) => (
              <FooterLink key={index} href={item.href}>
                {item.title}
              </FooterLink>
            ))}
          </FooterSection>
        </FooterGrid>

        <BottomSection>
          <CopyrightText>
            © 2024 YogaTute. All rights reserved. | Made with <FavoriteIcon sx={{ fontSize: '1rem', mx: 0.5, color: theme.palette.accent.sunset }} /> for your wellness journey
          </CopyrightText>
          <CertificationText>
            <span>🏆 Certified by Yoga Alliance International</span>
            <span>📜 ISO 9001:2015 Certified</span>
            <span>🌟 Trusted by 1.22 Crore+ practitioners</span>
          </CertificationText>
        </BottomSection>
      </StyledContainer>
    </FooterContainer>
  );
};

export default Footer;
