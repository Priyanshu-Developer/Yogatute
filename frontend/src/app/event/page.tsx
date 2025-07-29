// pages/Events.tsx
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
  Button,
  Paper,
  useTheme,
  Stack,
  Avatar,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface YogaEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  type: 'workshop' | 'retreat' | 'class' | 'seminar';
  instructor: string;
  capacity: number;
  registered: number;
  price: string;
  status: 'upcoming' | 'past';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  tags: string[];
}

const Hero = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.accent.cream} 100%)`,
  padding: theme.spacing(12, 0, 8),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `radial-gradient(circle at 60% 40%, ${theme.palette.primary.main}15 0%, transparent 50%)`,
    pointerEvents: 'none',
  }
}));

const FilterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(4),
  alignItems: 'center'
}));

const FilterChips = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  justifyContent: 'center'
}));

const EventsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const EventCard = styled(Card)(({ theme }) => ({
  flex: '1',
  minWidth: 350,
  maxWidth: 420,
  border: `1px solid ${theme.palette.primary.main}20`,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.accent.cream} 100%)`,
  transition: 'transform .25s, box-shadow .25s',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: `0 16px 40px ${theme.palette.primary.main}25`
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
    width: '100%'
  }
}));

const EventHeader = styled(Box)(({ theme }) => ({
  height: 120,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StatusTabs = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  justifyContent: 'center'
}));

const events: YogaEvent[] = [
  // Upcoming Events
  {
    id: 'mindfulness-retreat-aug',
    title: 'Weekend Mindfulness Retreat',
    description: 'A transformative weekend retreat focusing on mindfulness, meditation, and inner peace. Perfect for deepening your practice.',
    date: '2025-08-15',
    time: '09:00 AM',
    duration: '2 days',
    location: 'YogaTute Retreat Center, Rishikesh',
    type: 'retreat',
    instructor: 'Sushma',
    capacity: 25,
    registered: 18,
    price: '₹8,500',
    status: 'upcoming',
    level: 'All Levels',
    tags: ['Mindfulness', 'Meditation', 'Retreat']
  },
  {
    id: 'prenatal-workshop-aug',
    title: 'Prenatal Yoga Workshop',
    description: 'Specialized workshop for expecting mothers, focusing on safe poses, breathing techniques, and preparation for childbirth.',
    date: '2025-08-05',
    time: '10:00 AM',
    duration: '3 hours',
    location: 'YogaTute Studio',
    type: 'workshop',
    instructor: 'Priya Sharma',
    capacity: 15,
    registered: 12,
    price: '₹1,200',
    status: 'upcoming',
    level: 'Beginner',
    tags: ['Prenatal', 'Breathing', 'Safety']
  },
  {
    id: 'therapeutic-seminar-aug',
    title: 'Therapeutic Yoga for Back Pain',
    description: 'Evidence-based seminar on using yoga therapy for chronic back pain management and spinal health.',
    date: '2025-08-10',
    time: '02:00 PM',
    duration: '4 hours',
    location: 'YogaTute Studio',
    type: 'seminar',
    instructor: 'Michael Chen',
    capacity: 20,
    registered: 15,
    price: '₹1,500',
    status: 'upcoming',
    level: 'Intermediate',
    tags: ['Therapeutic', 'Back Pain', 'Healing']
  },
  {
    id: 'senior-yoga-aug',
    title: 'Gentle Yoga for Seniors',
    description: 'Chair-friendly yoga session designed specifically for senior citizens to maintain mobility and wellness.',
    date: '2025-08-12',
    time: '11:00 AM',
    duration: '1.5 hours',
    location: 'YogaTute Studio',
    type: 'class',
    instructor: 'Sital Bhandari',
    capacity: 12,
    registered: 8,
    price: '₹500',
    status: 'upcoming',
    level: 'Beginner',
    tags: ['Seniors', 'Chair Yoga', 'Mobility']
  },

  // Past Events
  {
    id: 'yoga-day-celebration',
    title: 'International Yoga Day Celebration',
    description: 'Community celebration with group classes, meditation sessions, and wellness talks.',
    date: '2025-06-21',
    time: '06:00 AM',
    duration: '6 hours',
    location: 'Central Park, Delhi',
    type: 'class',
    instructor: 'Sushma & Team',
    capacity: 100,
    registered: 95,
    price: 'Free',
    status: 'past',
    level: 'All Levels',
    tags: ['Community', 'Celebration', 'Group Practice']
  },
  {
    id: 'advanced-pranayama-july',
    title: 'Advanced Pranayama Workshop',
    description: 'Deep dive into advanced breathing techniques and their therapeutic applications.',
    date: '2025-07-10',
    time: '03:00 PM',
    duration: '3 hours',
    location: 'YogaTute Studio',
    type: 'workshop',
    instructor: 'Priya Sharma',
    capacity: 18,
    registered: 18,
    price: '₹1,800',
    status: 'past',
    level: 'Advanced',
    tags: ['Pranayama', 'Breathing', 'Advanced']
  },
  {
    id: 'womens-wellness-july',
    title: 'Women\'s Wellness Weekend',
    description: 'Special weekend program addressing women\'s unique health needs through yoga and wellness practices.',
    date: '2025-07-20',
    time: '09:00 AM',
    duration: '2 days',
    location: 'YogaTute Studio',
    type: 'retreat',
    instructor: 'Sushma',
    capacity: 20,
    registered: 20,
    price: '₹3,500',
    status: 'past',
    level: 'All Levels',
    tags: ['Women\'s Health', 'Wellness', 'Weekend']
  },
  {
    id: 'stress-management-june',
    title: 'Stress Management Through Yoga',
    description: 'Learn practical techniques to manage stress and anxiety using yoga and mindfulness.',
    date: '2025-06-15',
    time: '06:00 PM',
    duration: '2 hours',
    location: 'Online Session',
    type: 'seminar',
    instructor: 'Michael Chen',
    capacity: 50,
    registered: 45,
    price: '₹800',
    status: 'past',
    level: 'All Levels',
    tags: ['Stress Relief', 'Anxiety', 'Online']
  }
];

const eventTypes = ['All', 'workshop', 'retreat', 'class', 'seminar'];

const Events: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesStatus = event.status === activeTab;
      const matchesType = selectedType === 'All' || event.type === selectedType;
      const searchText = (event.title + event.description + event.instructor + event.tags.join(' ')).toLowerCase();
      const matchesSearch = searchText.includes(searchTerm.toLowerCase());
      return matchesStatus && matchesType && matchesSearch;
    });
  }, [activeTab, selectedType, searchTerm]);

  const getTypeColor = (type: string) => {
    const colors = {
      'workshop': theme.palette.primary.main,
      'retreat': theme.palette.secondary.main,
      'class': theme.palette.accent.warm,
      'seminar': theme.palette.info.main
    };
    return colors[type as keyof typeof colors] || theme.palette.text.secondary;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return theme.palette.success.main;
      case 'Intermediate': return theme.palette.warning.main;
      case 'Advanced': return theme.palette.error.main;
      default: return theme.palette.info.main;
    }
  };

  const generateEventGradient = (type: string) => {
    const gradients = {
      'workshop': `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.accent.warm}20 100%)`,
      'retreat': `linear-gradient(135deg, ${theme.palette.secondary.main}20 0%, ${theme.palette.yoga.peace}20 100%)`,
      'class': `linear-gradient(135deg, ${theme.palette.accent.warm}20 0%, ${theme.palette.yoga.energy}20 100%)`,
      'seminar': `linear-gradient(135deg, ${theme.palette.info.main}20 0%, ${theme.palette.yoga.balance}20 100%)`
    };
    return gradients[type as keyof typeof gradients] || gradients['class'];
  };

  const getEventIcon = (type: string) => {
    const icons = {
      'workshop': '🛠️',
      'retreat': '🏔️',
      'class': '🧘‍♀️',
      'seminar': '📚'
    };
    return icons[type as keyof typeof icons] || '🧘‍♀️';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const isEventSoon = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
    <Navbar/>
      {/* Hero Section */}
      <Hero>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h1" gutterBottom>
              YogaTute <span style={{ color: theme.palette.primary.main }}>Events</span>
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, color: theme.palette.text.secondary, fontWeight: 400 }}>
              Join our community events, workshops, and retreats designed to deepen your practice and connect with fellow yogis
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 4 }}>
              From intimate workshops to transformative retreats, discover opportunities to grow, learn, and connect in our vibrant yoga community.
            </Typography>
          </Box>
        </Container>
      </Hero>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Status Tabs */}
        <StatusTabs>
          <Button
            variant={activeTab === 'upcoming' ? 'contained' : 'outlined'}
            onClick={() => setActiveTab('upcoming')}
            size="medium"
            sx={{
              bgcolor: activeTab === 'upcoming' ? theme.palette.primary.main : 'transparent',
              color: activeTab === 'upcoming' ? 'white' : theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              px: 3,
              py: 1,
              '&:hover': {
                bgcolor: activeTab === 'upcoming' ? theme.palette.primary.dark : `${theme.palette.primary.main}10`
              }
            }}
          >
            <EventIcon sx={{ mr: 1, fontSize: 20 }} />
            Upcoming Events
          </Button>
          <Button
            variant={activeTab === 'past' ? 'contained' : 'outlined'}
            onClick={() => setActiveTab('past')}
            size="medium"
            sx={{
              bgcolor: activeTab === 'past' ? theme.palette.primary.main : 'transparent',
              color: activeTab === 'past' ? 'white' : theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              px: 3,
              py: 1,
              '&:hover': {
                bgcolor: activeTab === 'past' ? theme.palette.primary.dark : `${theme.palette.primary.main}10`
              }
            }}
          >
            <CalendarMonthIcon sx={{ mr: 1, fontSize: 20 }} />
            Past Events
          </Button>
        </StatusTabs>

        {/* Search and Filters */}
        <FilterSection>
          <TextField
            fullWidth
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              maxWidth: 500,
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px',
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

          <FilterChips>
            {eventTypes.map((type) => (
              <Chip
                key={type}
                label={type.charAt(0).toUpperCase() + type.slice(1)}
                onClick={() => setSelectedType(type)}
                variant={selectedType === type ? 'filled' : 'outlined'}
                sx={{
                  bgcolor: selectedType === type ? theme.palette.primary.main : 'transparent',
                  color: selectedType === type ? 'white' : theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: selectedType === type ? theme.palette.primary.dark : `${theme.palette.primary.main}15`
                  }
                }}
              />
            ))}
          </FilterChips>
        </FilterSection>

        {/* Results Count */}
        <Typography
          variant="subtitle1"
          sx={{ textAlign: 'center', color: theme.palette.text.secondary, mb: 4 }}
        >
          {filteredEvents.length} {activeTab} {filteredEvents.length === 1 ? 'event' : 'events'} found
        </Typography>

        {/* Events Cards */}
        <EventsContainer>
          {filteredEvents.map((event) => (
            <EventCard key={event.id}>
              {/* Event Header with Gradient */}
              <EventHeader sx={{ background: generateEventGradient(event.type) }}>
                <Typography variant="h2" sx={{ color: 'rgba(0,0,0,0.6)' }}>
                  {getEventIcon(event.type)}
                </Typography>
                {isEventSoon(event.date) && activeTab === 'upcoming' && (
                  <Chip
                    label="Coming Soon"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      bgcolor: theme.palette.warning.main,
                      color: 'white',
                      fontWeight: 600
                    }}
                  />
                )}
              </EventHeader>

              <CardContent sx={{ p: 3 }}>
                {/* Event Type and Level */}
                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                  <Chip
                    label={event.type.toUpperCase()}
                    size="small"
                    sx={{
                      bgcolor: getTypeColor(event.type),
                      color: 'white',
                      fontWeight: 600
                    }}
                  />
                  <Chip
                    label={event.level}
                    size="small"
                    sx={{
                      bgcolor: getLevelColor(event.level),
                      color: 'white',
                      fontWeight: 500
                    }}
                  />
                </Stack>

                {/* Title and Description */}
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6, mb: 3 }}>
                  {event.description}
                </Typography>

                {/* Event Details */}
                <Stack spacing={1.5} mb={3}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CalendarMonthIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                    <Typography variant="body2">{formatDate(event.date)}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <AccessTimeIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                    <Typography variant="body2">{event.time} • {event.duration}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <LocationOnIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                    <Typography variant="body2">{event.location}</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <PeopleIcon sx={{ fontSize: 18, color: theme.palette.primary.main }} />
                    <Typography variant="body2">
                      {event.registered}/{event.capacity} registered
                    </Typography>
                  </Stack>
                </Stack>

                {/* Instructor */}
                <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: theme.palette.primary.main,
                      color: 'white',
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}
                  >
                    {event.instructor.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </Avatar>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    with {event.instructor}
                  </Typography>
                </Stack>

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {event.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: `${theme.palette.primary.main}15`,
                        color: theme.palette.primary.main,
                        fontWeight: 500
                      }}
                    />
                  ))}
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* Price and Action */}
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
                    {event.price}
                  </Typography>
                  {activeTab === 'upcoming' ? (
                    <Button
                      variant="contained"
                      size="small"
                      disabled={event.registered >= event.capacity}
                      sx={{
                        background: event.registered >= event.capacity 
                          ? theme.palette.grey[400]
                          : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                        px: 2,
                        fontSize: '0.875rem'
                      }}
                    >
                      {event.registered >= event.capacity ? 'Full' : 'Register'}
                    </Button>
                  ) : (
                    <Chip
                      label="Completed"
                      size="small"
                      sx={{
                        bgcolor: theme.palette.success.main,
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                  )}
                </Stack>
              </CardContent>
            </EventCard>
          ))}
        </EventsContainer>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <Paper sx={{ p: 6, textAlign: 'center', borderRadius: '24px', mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              No {activeTab} events found
            </Typography>
            <Typography variant="body1" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
              Try adjusting your search or selecting a different event type.
            </Typography>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setSearchTerm('');
                setSelectedType('All');
              }}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100())`,
                px: 2
              }}
            >
              Clear Filters
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
              Stay Updated
            </Typography>
            <Typography variant="body1" sx={{ 
              lineHeight: 1.8, 
              fontSize: '1.1rem', 
              mb: 4,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Never miss an event! Subscribe to our newsletter to get notified about upcoming workshops, retreats, and special yoga events.
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
                Subscribe for Updates
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
                Contact Us
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Events;
