'use client';
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/LandingPage/HeroSection";
import HighlightImages from "@/components/LandingPage/HighlightImage";
import Navbar from "@/components/Navbar"
import TypesOfYoga from "@/components/LandingPage/TypesOfYoga";
import WhatWeOffer from "@/components/LandingPage/WhatWeOffer";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import Testimonials from "@/components/LandingPage/Testimonials";


export default function LandinPage() {
  return(
    <Box sx={{width: '100%', overflow: 'hidden'}}>
      <Navbar/>
      <Hero/>
      <WhatWeOffer/>
      <TypesOfYoga/>
      <HighlightImages/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </Box>
    
  )
  
}