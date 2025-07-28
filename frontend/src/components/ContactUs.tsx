"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 8px 32px rgba(243, 145, 30, 0.2); }
  50% { box-shadow: 0 12px 40px rgba(243, 145, 30, 0.4); }
`;

// Reduced section padding by half
const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "4rem 0", // Reduced from 8rem to 4rem
  background: `linear-gradient(135deg, 
    ${theme.palette.background.default} 0%, 
    ${theme.palette.accent.cream} 30%, 
    ${theme.palette.yoga.peace} 60%, 
    ${theme.palette.background.paper} 100%
  )`,
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    padding: "3rem 0", // Reduced from 6rem to 3rem
  },
  [theme.breakpoints.down("md")]: {
    padding: "2.5rem 0", // Reduced from 5rem to 2.5rem
  },
  [theme.breakpoints.down("sm")]: {
    padding: "2rem 0", // Reduced from 4rem to 2rem
  },
  "&::before": {
    content: '""',
    position: "absolute",
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
  maxWidth: "1400px",
  margin: "0 auto",
  position: "relative",
  zIndex: 2,
  padding: "0 2rem",
  [theme.breakpoints.down("md")]: {
    padding: "0 1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0 1rem",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  fontWeight: 800,
  marginBottom: "0.5rem", // Reduced from 1rem
  background: `linear-gradient(135deg, 
    ${theme.palette.text.primary} 0%, 
    ${theme.palette.primary.main} 100%
  )`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0.4rem",
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
  color: theme.palette.text.secondary,
  marginBottom: "2rem", // Reduced from 4rem
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
  lineHeight: 1.6,
  [theme.breakpoints.down("lg")]: {
    marginBottom: "1.75rem",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "1.5rem",
    maxWidth: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1.25rem",
    maxWidth: "100%",
    padding: "0 0.5rem",
  },
}));

// Main Layout Grid
const ContactGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "1.5rem", // Reduced from 3rem
  alignItems: "start",
  [theme.breakpoints.down("lg")]: {
    gridTemplateColumns: "1fr",
    gap: "1.25rem",
  },
  [theme.breakpoints.down("md")]: {
    gap: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "0.75rem",
  },
}));

// Contact Info Grid
const ContactInfoGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem", // Reduced from 1.5rem
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "0.6rem",
  },
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "0.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
}));

// Form Fields Grid
const FormFieldsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.75rem", // Reduced from 1.5rem
  marginBottom: "0.75rem", // Reduced from 1.5rem
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "0.6rem",
    marginBottom: "0.6rem",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "0.5rem",
    marginBottom: "0.5rem",
  },
}));

// Contact Card with reduced height
const ContactCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "24px",
  background: `${theme.palette.background.paper}95`,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: `2px solid ${theme.palette.primary.light}15`,
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: `0 8px 32px ${theme.palette.primary.main}12`,
  [theme.breakpoints.down("md")]: {
    borderRadius: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    borderRadius: "18px",
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 20px 60px ${theme.palette.primary.main}20`,
    border: `2px solid ${theme.palette.primary.main}30`,
    [theme.breakpoints.down("md")]: {
      transform: "translateY(-6px)",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "translateY(-4px)",
    },
  },
}));

// Form Card with reduced padding
const FormCard = styled(Card)(({ theme }) => ({
  borderRadius: "24px",
  background: `${theme.palette.background.paper}95`,
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: `2px solid ${theme.palette.primary.light}20`,
  boxShadow: `0 12px 40px ${theme.palette.primary.main}15`,
  padding: "1rem", // Reduced from 2rem
  [theme.breakpoints.down("md")]: {
    padding: "0.75rem", // Reduced from 1.5rem
    borderRadius: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.5rem", // Reduced from 1rem
    borderRadius: "18px",
  },
}));

// Contact Icon Container with reduced size
const ContactIconContainer = styled(Avatar)(({ theme }) => ({
  width: "50px", // Reduced from 70px
  height: "50px", // Reduced from 70px
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.accent.sunset} 100%
  )`,
  marginBottom: "0.75rem", // Reduced from 1.5rem
  animation: `${float} 3s ease-in-out infinite`,
  boxShadow: `0 8px 32px ${theme.palette.primary.main}30`,
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem", // Reduced icon size
  },
  [theme.breakpoints.down("md")]: {
    width: "45px",
    height: "45px",
    marginBottom: "0.6rem",
    "& .MuiSvgIcon-root": {
      fontSize: "1.3rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "40px",
    height: "40px",
    marginBottom: "0.5rem",
    "& .MuiSvgIcon-root": {
      fontSize: "1.2rem",
    },
  },
}));

// Contact Title with reduced size
const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.1rem", // Reduced from 1.3rem
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: "0.4rem", // Reduced from 0.8rem
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
    marginBottom: "0.3rem",
  },
}));

// Contact Info with reduced size
const ContactInfo = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem", // Reduced from 1rem
  color: theme.palette.text.secondary,
  lineHeight: 1.4, // Reduced from 1.6
  marginBottom: "0.25rem", // Reduced from 0.5rem
  [theme.breakpoints.down("md")]: {
    fontSize: "0.85rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

// Styled TextField with reduced size
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: `${theme.palette.background.paper}80`,
    backdropFilter: "blur(10px)",
    fontSize: "0.9rem", // Reduced from 1rem
    padding: "0.5rem", // Added padding reduction
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      borderWidth: "2px",
    },
  },
  "& .MuiInputLabel-root": {
    fontSize: "0.9rem", // Reduced from 1rem
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8rem",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "0.75rem", // Reduced input padding
    [theme.breakpoints.down("sm")]: {
      padding: "0.6rem",
    },
  },
}));

// Submit Button with more spacing
const SubmitButton = styled(Button)(({ theme }) => ({
  padding: "0.8rem 2rem", // Slightly reduced padding
  borderRadius: "50px",
  background: `linear-gradient(135deg, 
    ${theme.palette.primary.main} 0%, 
    ${theme.palette.secondary.main} 100%
  )`,
  color: theme.palette.primary.contrastText,
  fontWeight: 600,
  fontSize: "1rem", // Reduced from 1.1rem
  textTransform: "none",
  boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
  transition: "all 0.3s ease",
  marginTop: "1.5rem", // Added more top margin for spacing
  [theme.breakpoints.down("md")]: {
    padding: "0.7rem 1.8rem",
    fontSize: "0.95rem",
    marginTop: "1.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.6rem 1.5rem",
    fontSize: "0.9rem",
    width: "100%",
    marginTop: "1rem",
  },
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: `0 12px 40px ${theme.palette.primary.main}50`,
    animation: `${glow} 2s ease-in-out infinite`,
  },
  "&:disabled": {
    opacity: 0.7,
    cursor: "not-allowed",
  },
}));

// Social Container with reduced spacing
const SocialContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0.5rem", // Reduced from 1rem
  justifyContent: "center",
  marginTop: "1rem", // Reduced from 2rem
  flexWrap: "wrap",
  [theme.breakpoints.down("lg")]: {
    marginTop: "0.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "0.4rem",
    marginTop: "0.5rem",
  },
}));

// Social Button with reduced size
const SocialButton = styled(IconButton)(({ theme }) => ({
  width: "40px", // Reduced from 50px
  height: "40px", // Reduced from 50px
  background: `${theme.palette.background.paper}80`,
  backdropFilter: "blur(10px)",
  border: `2px solid ${theme.palette.primary.light}30`,
  color: theme.palette.primary.main,
  transition: "all 0.3s ease",
  [theme.breakpoints.down("sm")]: {
    width: "35px",
    height: "35px",
  },
  "&:hover": {
    transform: "translateY(-3px) scale(1.1)",
    boxShadow: `0 8px 25px ${theme.palette.primary.main}30`,
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

// Form Title with reduced size
const FormTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem", // Reduced from 2rem
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginBottom: "1rem", // Reduced from 2rem
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.4rem",
    marginBottom: "0.75rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
    marginBottom: "0.6rem",
  },
}));

// Button Container for better spacing
const ButtonContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginTop: "2rem", // Added extra spacing above button
  [theme.breakpoints.down("md")]: {
    marginTop: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.2rem",
  },
}));

// Form Data Interface
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Contact Info Data with reduced icon sizes
const contactInfo = [
  {
    icon: <PhoneIcon sx={{ fontSize: "1.5rem" }} />, // Reduced from 2rem
    title: "Call Us",
    info: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: <EmailIcon sx={{ fontSize: "1.5rem" }} />, // Reduced from 2rem
    title: "Email Us",
    info: ["hello@yogatute.com", "support@yogatute.com"],
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: "1.5rem" }} />, // Reduced from 2rem
    title: "Visit Us",
    info: ["123 Wellness Street", "Yoga District, Mumbai 400001"],
  },
];

// Social Links Data
const socialLinks = [
  { icon: <WhatsAppIcon />, color: "#25D366", label: "WhatsApp" },
  { icon: <FacebookIcon />, color: "#1877F2", label: "Facebook" },
  { icon: <InstagramIcon />, color: "#E4405F", label: "Instagram" },
  { icon: <TwitterIcon />, color: "#1DA1F2", label: "Twitter" },
];

// Main Component
const ContactUs: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSnackbarMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setOpenSnackbar(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <SectionContainer>
      <StyledContainer>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Ready to start your yoga journey? Contact us today and let&apos;s create a
          personalized wellness plan for you
        </SectionSubtitle>

        <ContactGrid>
          {/* Contact Information */}
          <ContactInfoGrid>
            {contactInfo.map((contact, index) => (
              <ContactCard key={index}>
                <CardContent
                  sx={{
                    padding: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }, // Reduced padding
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <ContactIconContainer>{contact.icon}</ContactIconContainer>
                  <ContactTitle>{contact.title}</ContactTitle>
                  {contact.info.map((item, itemIndex) => (
                    <ContactInfo key={itemIndex}>{item}</ContactInfo>
                  ))}
                </CardContent>
              </ContactCard>
            ))}

            <SocialContainer>
              {socialLinks.map((social, index) => (
                <SocialButton
                  key={index}
                  aria-label={social.label}
                  sx={{
                    "&:hover": {
                      backgroundColor: social.color,
                      borderColor: social.color,
                    },
                  }}
                >
                  {social.icon}
                </SocialButton>
              ))}
            </SocialContainer>
          </ContactInfoGrid>

          {/* Contact Form */}
          <FormCard>
            <FormTitle>Send Us a Message</FormTitle>

            <form onSubmit={handleSubmit}>
              <FormFieldsGrid>
                <StyledTextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                />
                <StyledTextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                />
                <StyledTextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variant="outlined"
                />
                <StyledTextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  variant="outlined"
                />
              </FormFieldsGrid>

              <StyledTextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                multiline
                rows={3} // Reduced from 6 to 3
                variant="outlined"
                sx={{
                  marginBottom: { xs: "0.75rem", sm: "1rem" }, // Reduced margin
                }}
              />

              <ButtonContainer>
                <SubmitButton
                  type="submit"
                  size="large"
                  disabled={isSubmitting}
                  startIcon={<SendIcon />}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </SubmitButton>
              </ButtonContainer>
            </form>
          </FormCard>
        </ContactGrid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </StyledContainer>
    </SectionContainer>
  );
};

export default ContactUs;
