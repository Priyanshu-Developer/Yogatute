// pages/Blog.tsx
'use client';
import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Card,
  CardContent,
  Avatar,
  Button,
  Paper,
  useTheme,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  tags: string[];
}

const Hero = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.accent.cream} 100%)`,
  padding: theme.spacing(12, 0, 8),
  textAlign: 'center'
}));

const FilterBar = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'center',
  marginBottom: theme.spacing(4)
}));

const PostsWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const PostCard = styled(Card)(({ theme }) => ({
  flex: '1',
  minWidth: 330,
  maxWidth: 380,
  border: `1px solid ${theme.palette.primary.main}26`,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.accent.cream} 100%)`,
  transition: 'transform .25s, box-shadow .25s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: `0 16px 40px ${theme.palette.primary.main}26`
  }
}));

// Generate gradient covers instead of using placeholder images
const generateGradientCover = (category: string, index: number) => {
  const gradients = {
    'Wellness': 'linear-gradient(135deg, #F3911E 0%, #F5A94B 50%, #FCE4B6 100%)',
    'Therapeutic': 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #D4B894 100%)',
    'Pregnancy': 'linear-gradient(135deg, #FF8C42 0%, #F5A94B 50%, #F7F3E9 100%)',
    'Lifestyle': 'linear-gradient(135deg, #D2B48C 0%, #F5DEB3 50%, #FFFBF8 100%)'
  };
  
  return gradients[category as keyof typeof gradients] || gradients['Wellness'];
};

const blogPosts: BlogPost[] = [
  {
    id: 'mindful-morning',
    title: '5-Step Mindful Morning Routine for Lasting Energy',
    excerpt:
      'Kick-start your day with this simple sequence of breathwork, gentle movement, and gratitude practice that sets a positive tone for everything that follows.',
    cover: '', // Will be generated
    author: 'Sarah Johnson',
    authorAvatar: '', // Will be generated
    date: '15 Jul 2025',
    category: 'Wellness',
    tags: ['Mindfulness', 'Routine', 'Breathwork']
  },
  {
    id: 'chair-yoga-office',
    title: 'Chair Yoga: Relieve Desk-Bound Tension in 10 Minutes',
    excerpt:
      'Long hours at the desk wreak havoc on your spine. Try these office-friendly asanas to stay mobile and pain-free during the work-day.',
    cover: '',
    author: 'Michael Chen',
    authorAvatar: '',
    date: '02 Jul 2025',
    category: 'Therapeutic',
    tags: ['Posture', 'Office', 'Spine']
  },
  {
    id: 'prenatal-breathing',
    title: 'Prenatal Breathing Techniques Every Mom-to-Be Should Know',
    excerpt:
      'Discover safe pranayama practices that support relaxation, pelvic floor awareness, and a smoother birth experience.',
    cover: '',
    author: 'Priya Sharma',
    authorAvatar: '',
    date: '20 Jun 2025',
    category: 'Pregnancy',
    tags: ['Prenatal', 'Pranayama', 'Relaxation']
  },
  {
    id: 'senior-yoga-tips',
    title: 'Gentle Yoga for Seniors: Building Strength and Balance',
    excerpt:
      'Age gracefully with these modified poses designed specifically for mature practitioners. Focus on stability, mobility, and confidence.',
    cover: '',
    author: 'Sushma',
    authorAvatar: '',
    date: '28 Jun 2025',
    category: 'Lifestyle',
    tags: ['Seniors', 'Balance', 'Mobility']
  },
  {
    id: 'stress-relief-yoga',
    title: 'Quick Stress Relief: 5-Minute Yoga Sequence for Busy Lives',
    excerpt:
      'When life gets overwhelming, these simple poses can restore calm and clarity in just minutes. Perfect for office breaks or home practice.',
    cover: '',
    author: 'Sarah Johnson',
    authorAvatar: '',
    date: '10 Jul 2025',
    category: 'Wellness',
    tags: ['Stress Relief', 'Quick Practice', 'Mindfulness']
  },
  {
    id: 'yoga-for-back-pain',
    title: 'Healing Your Back: Therapeutic Yoga for Chronic Pain',
    excerpt:
      'Evidence-based yoga sequences that target common back pain issues. Learn safe modifications and progressive strengthening techniques.',
    cover: '',
    author: 'Michael Chen',
    authorAvatar: '',
    date: '05 Jul 2025',
    category: 'Therapeutic',
    tags: ['Back Pain', 'Healing', 'Therapy']
  }
];

const categories = ['All', 'Wellness', 'Therapeutic', 'Pregnancy', 'Lifestyle'];

const Blog: React.FC = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(p => {
      const catOK = selectedCategory === 'All' || p.category === selectedCategory;
      const txt = (p.title + p.excerpt + p.tags.join(' ')).toLowerCase();
      const searchOK = txt.includes(search.toLowerCase());
      return catOK && searchOK;
    });
  }, [selectedCategory, search]);

  const catColor = (cat: string) =>
    cat === 'Wellness'
      ? theme.palette.accent.warm
      : cat === 'Therapeutic'
      ? theme.palette.primary.main
      : cat === 'Pregnancy'
      ? theme.palette.secondary.main
      : theme.palette.info.main;

  // Generate author avatar with initials
  const generateAuthorAvatar = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    return (
      <Avatar 
        sx={{ 
          width: 28, 
          height: 28, 
          bgcolor: theme.palette.primary.main,
          color: 'white',
          fontSize: '0.75rem',
          fontWeight: 600
        }}
      >
        {initials}
      </Avatar>
    );
  };

  return (
    <Box sx={{ background: theme.palette.background.default, minHeight: '100vh' }}>
      {/* Hero */}
      <Navbar/>
      <Hero>
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            YogaTute <span style={{ color: theme.palette.primary.main }}>Blog</span>
          </Typography>
          <Typography variant="h5" sx={{ color: theme.palette.text.secondary, mb: 4 }}>
            Inspiration, education and stories from the mat
          </Typography>

          <TextField
            fullWidth
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{
              maxWidth: 500,
              mx: 'auto',
              '& .MuiOutlinedInput-root': {
                borderRadius: 25,
                background: theme.palette.background.paper
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: theme.palette.primary.main }} />
                </InputAdornment>
              )
            }}
          />
        </Container>
      </Hero>

      {/* Category Chips */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <FilterBar>
          {categories.map(cat => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setSelectedCategory(cat)}
              variant={selectedCategory === cat ? 'filled' : 'outlined'}
              size="medium"
              sx={{
                bgcolor: selectedCategory === cat ? theme.palette.primary.main : 'transparent',
                color: selectedCategory === cat ? '#fff' : theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
                fontWeight: 600,
                cursor: 'pointer',
                '&:hover': {
                  bgcolor:
                    selectedCategory === cat
                      ? theme.palette.primary.dark
                      : `${theme.palette.primary.main}14`
                }
              }}
            />
          ))}
        </FilterBar>

        {/* Results Count */}
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 3 }}
        >
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
        </Typography>

        {/* Posts */}
        <PostsWrap>
          {filteredPosts.map((post, index) => (
            <PostCard key={post.id}>
              {/* Gradient Cover Image */}
              <Box
                sx={{
                  height: 200,
                  background: generateGradientCover(post.category, index),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Category Icon Overlay */}
                <Typography 
                  variant="h2" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {post.category === 'Wellness' ? '🧘‍♀️' : 
                   post.category === 'Therapeutic' ? '🩺' :
                   post.category === 'Pregnancy' ? '🤱' : '🏠'}
                </Typography>
                {/* Overlay Pattern */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  }}
                />
              </Box>

              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                  <Chip
                    label={post.category}
                    size="small"
                    sx={{
                      bgcolor: catColor(post.category),
                      color: '#fff',
                      fontWeight: 500
                    }}
                  />
                  {post.tags.slice(0, 2).map(t => (
                    <Chip
                      key={t}
                      label={t}
                      size="small"
                      sx={{
                        bgcolor: `${theme.palette.primary.main}12`,
                        color: theme.palette.primary.main
                      }}
                    />
                  ))}
                </Stack>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary, lineHeight: 1.6, mb: 2 }}
                >
                  {post.excerpt}
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{ color: theme.palette.text.secondary, mb: 2 }}
                >
                  {generateAuthorAvatar(post.author)}
                  <PersonIcon sx={{ fontSize: 18 }} />
                  <Typography variant="caption">{post.author}</Typography>
                  <CalendarMonthIcon sx={{ fontSize: 18 }} />
                  <Typography variant="caption">{post.date}</Typography>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      px: 2,
                      fontSize: '.875rem'
                    }}
                  >
                    Read More
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      px: 2,
                      fontSize: '.875rem'
                    }}
                  >
                    Share
                  </Button>
                </Stack>
              </CardContent>
            </PostCard>
          ))}
        </PostsWrap>

        {/* No Results State */}
        {filteredPosts.length === 0 && (
          <Paper sx={{ p: 6, textAlign: 'center', borderRadius: 4, mt: 4 }}>
            <Typography variant="h6" gutterBottom>No articles match your search.</Typography>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
              }}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                mt: 2,
                px: 2
              }}
            >
              Reset Filters
            </Button>
          </Paper>
        )}
      </Container>

      {/* Call to Action */}
      <Box sx={{ background: `linear-gradient(135deg, ${theme.palette.accent.cream} 0%, ${theme.palette.yoga.peace} 100%)`, py: 8 }}>
        <Container maxWidth="lg">
          <Paper 
            sx={{ 
              p: 6, 
              borderRadius: '24px', 
              background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
              border: `1px solid ${theme.palette.primary.main}20`,
              textAlign: 'center'
            }}
          >
            <Typography variant="h3" gutterBottom sx={{ color: theme.palette.primary.main }}>
              Stay Connected
            </Typography>
            <Typography variant="body1" sx={{ 
              lineHeight: 1.8, 
              fontSize: '1.1rem', 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Subscribe to our newsletter for the latest yoga tips, wellness insights, and updates from the YogaTute community.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="medium"
                sx={{ 
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100())`,
                  px: 3,
                  py: 1.2,
                  fontSize: '1rem'
                }}
              >
                Subscribe Newsletter
              </Button>
              <Button 
                variant="outlined" 
                size="medium"
                sx={{ 
                  borderColor: theme.palette.primary.main, 
                  color: theme.palette.primary.main,
                  px: 3,
                  py: 1.2,
                  fontSize: '1rem'
                }}
              >
                Follow Us
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Blog;
