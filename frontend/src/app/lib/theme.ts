// yogaTuteTheme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F3911E', // bright orange from logo
      light: '#F5A94B', // lighter orange
      dark: '#D86E16', // darker orange from logo
      '50': '#FEF7ED',  // very light orange tint
      '100': '#FDF2DB', // light orange tint
      '200': '#FCE4B6', // medium light orange
      '300': '#F9D08A', // medium orange
      '400': '#F6BC5E', // medium dark orange
      '500': '#F3911E', // main brand orange
      '600': '#E67E05', // dark orange
      '700': '#D86E16', // darker orange (from logo)
      '800': '#B85A12', // brown-orange transition
      '900': '#8B4513', // saddle brown
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8B4513', // saddle brown
      light: '#A0522D', // sienna brown
      dark: '#654321', // dark brown
      '50': '#FAF7F2',  // very light brown tint
      '100': '#F5EDE0', // light brown tint
      '200': '#E8D5C0', // medium light brown
      '300': '#D4B894', // medium brown
      '400': '#C09768', // medium dark brown
      '500': '#8B4513', // main brown
      '600': '#7A3C11', // dark brown
      '700': '#69330F', // darker brown
      '800': '#582A0D', // very dark brown
      '900': '#47210B', // darkest brown
      contrastText: '#ffffff',
    },
    background: {
      default: '#FFFBF8', // warm white background
      paper: '#ffffff',   // card & section background
     
    },
    text: {
      primary: '#2D1B0E',   // dark brown heading
      secondary: '#5A3A1F', // medium brown subtitle & body
      disabled: '#A0866B',  // light brown disabled
    },
    // YogaTute accent colors
    accent: {
      warm: '#F5A94B',     // warm accent
      earth: '#A0522D',    // earth tone
      sunset: '#FF8C42',   // sunset orange
      cream: '#F7F3E9',    // cream background
    },
    // Yoga-specific colors
    yoga: {
      meditation: '#8B4513', // deep brown for meditation
      energy: '#F3911E',     // bright orange for energy
      balance: '#D2B48C',    // tan for balance
      peace: '#F5DEB3',      // wheat for peace
    },
    // Additional semantic colors
    success: {
      main: '#8FBC8F',
      light: '#A5D6A5',
      dark: '#7A9F7A',
      '50': '#F0F8F0',
      '500': '#8FBC8F',
      '900': '#4A6B4A',
    },
    warning: {
      main: '#DAA520',
      light: '#F4D03F',
      dark: '#B7950B',
      '50': '#FDF6E3',
      '500': '#DAA520',
      '900': '#6B4C0A',
    },
    error: {
      main: '#CD853F',
      light: '#DEB887',
      dark: '#A0522D',
      '50': '#FDF5E6',
      '500': '#CD853F',
      '900': '#654321',
    },
    info: {
      main: '#B8860B',
      light: '#DAA520',
      dark: '#9A7209',
      '50': '#FDF6E3',
      '500': '#B8860B',
      '900': '#4D3504',
    },
    grey: {
      50: '#FAF7F2',
      100: '#F5EDE0',
      200: '#E8D5C0',
      300: '#D4B894',
      400: '#A0866B',
      500: '#7A654F',
      600: '#5A3A1F',
      700: '#3D2613',
      800: '#2D1B0E',
      900: '#1F1209',
    },
  },
  typography: {
    fontFamily: `'Inter', 'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      color: '#2D1B0E',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      color: '#2D1B0E',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
      color: '#2D1B0E',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#2D1B0E',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#2D1B0E',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      color: '#2D1B0E',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#5A3A1F',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#5A3A1F',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
    caption: {
      fontSize: '0.75rem',
      color: '#A0866B',
    },
  },
  shape: {
    borderRadius: 20,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 4px 14px rgba(243, 145, 30, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(243, 145, 30, 0.4)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #F3911E 0%, #D86E16 100%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(135deg, #E67E05 0%, #B85A12 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
          color: '#ffffff',
          '&:hover': {
            background: 'linear-gradient(135deg, #7A3C11 0%, #8B4513 100%)',
          },
        },
        outlined: {
          borderColor: '#F3911E',
          color: '#F3911E',
          '&:hover': {
            borderColor: '#D86E16',
            backgroundColor: 'rgba(243, 145, 30, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          boxShadow: '0px 12px 40px rgba(139, 69, 19, 0.08)',
          background: '#ffffff',
          border: '1px solid rgba(243, 145, 30, 0.08)',
        },
        elevation1: {
          boxShadow: '0 4px 16px rgba(139, 69, 19, 0.06)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(139, 69, 19, 0.1)',
          border: '1px solid rgba(243, 145, 30, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 48px rgba(139, 69, 19, 0.15)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 2px 16px rgba(139, 69, 19, 0.08)',
          borderBottom: '1px solid rgba(243, 145, 30, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          fontWeight: 500,
        },
        filled: {
          backgroundColor: 'rgba(243, 145, 30, 0.1)',
          color: '#D86E16',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            '&:hover fieldset': {
              borderColor: '#F3911E',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F3911E',
            },
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #F3911E 0%, #D86E16 100%)',
          color: '#ffffff',
          fontWeight: 600,
        },
      },
    },
  },
  // Custom breakpoints for yoga content
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Extend theme type for custom colors
declare module '@mui/material/styles' {
  interface Palette {
    accent: {
      warm: string;
      earth: string;
      sunset: string;
      cream: string;
    };
    yoga: {
      meditation: string;
      energy: string;
      balance: string;
      peace: string;
    };
  }

  interface PaletteOptions {
    accent?: {
      warm?: string;
      earth?: string;
      sunset?: string;
      cream?: string;
    };
    yoga?: {
      meditation?: string;
      energy?: string;
      balance?: string;
      peace?: string;
    };
  }
}

export default theme;
