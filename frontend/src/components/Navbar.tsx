import React, { useState, useRef, useEffect } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Box, 
    Typography, 
    Stack, 
    SxProps, 
    Theme, 
    useTheme,
    IconButton 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

interface BackgroundStyle {
    transform?: string;
    width?: string;
}

interface NavigationItem {
    name: string;
    href: string;
}

const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Programs', href: '/programs' },
    { name: 'Features', href: '/features' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' }
];

const Navbar: React.FC = () => {
    const theme = useTheme();
    const pathname = usePathname();
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [backgroundStyle, setBackgroundStyle] = useState<BackgroundStyle>({});
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const navItemsRef = useRef<(HTMLElement | null)[]>([]);

    // Update active index based on current pathname
    useEffect(() => {
        const currentIndex = navigationItems.findIndex(item => {
            if (item.href === '/' && pathname === '/') return true;
            if (item.href !== '/' && pathname.startsWith(item.href)) return true;
            return false;
        });
        
        if (currentIndex !== -1) {
            setActiveIndex(currentIndex);
        }
    }, [pathname]);

    useEffect(() => {
        // Calculate the position and size of the active item
        if (navItemsRef.current[activeIndex] && !mobileMenuOpen) {
            const activeElement = navItemsRef.current[activeIndex];
            if (activeElement) {
                const { offsetLeft, offsetWidth } = activeElement;
                
                setBackgroundStyle({
                    transform: `translateX(${offsetLeft}px)`,
                    width: `${offsetWidth}px`,
                });
            }
        }
    }, [activeIndex, mobileMenuOpen]);

    const handleItemClick = (index: number, href: string): void => {
        setActiveIndex(index);
        setMobileMenuOpen(false); // Close mobile menu on item click
        router.push(href);
    };

    const toggleMobileMenu = (): void => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <AppBar 
            position="fixed" 
            color="transparent" 
            sx={{ 
                p: 0,
                borderRadius: 0,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                border: `1px solid ${theme.palette.accent.cream}`,
                boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `
                        linear-gradient(135deg, ${theme.palette.accent.cream}80 0%, ${theme.palette.background.default}40 100%),
                        radial-gradient(circle at 20% 50%, ${theme.palette.primary.light}30 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, ${theme.palette.secondary.light}20 0%, transparent 50%)
                    `,
                    borderRadius: 'inherit',
                    zIndex: -1,
                }
            }} 
            elevation={0}
        >
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 }, py: 1 }}>
                {/* Logo Section */}
                <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <Box display="flex" alignItems="center" sx={{ cursor: 'pointer' }}>
                        <Box 
                            component="img" 
                            src="icon.png" 
                            alt="YogaTute Logo" 
                            sx={{ 
                                height: { xs: 40, md: 50 }, 
                                mr: 1,
                                padding: '6px',
                                borderRadius: '12px',
                                background: `${theme.palette.accent.cream}60`,
                                backdropFilter: 'blur(10px)',
                                border: `1px solid ${theme.palette.primary.light}40`,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                                }
                            }} 
                        />
                        <Typography 
                            variant="h6" 
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', md: '1.25rem' },
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            YogaTute
                        </Typography>
                    </Box>
                </Link>
                
                {/* Desktop Navigation */}
                <Box 
                    sx={{ 
                        position: 'relative', 
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        background: `${theme.palette.background.paper}60`,
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        borderRadius: '30px',
                        border: `1px solid ${theme.palette.primary.light}40`,
                        padding: '6px 16px',
                        boxShadow: `0 8px 32px ${theme.palette.primary.main}15`,
                    }}
                >
                    {/* Sliding Background */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 8,
                            left: '16px',
                            height: '40px',
                            background: `linear-gradient(135deg, 
                                ${theme.palette.primary.main} 0%, 
                                ${theme.palette.primary.light} 25%, 
                                ${theme.palette.primary.dark} 50%, 
                                ${theme.palette.secondary.main} 100%
                            )`,
                            borderRadius: '20px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: 'translateY(-50%)',
                            zIndex: 0,
                            boxShadow: `0 6px 20px ${theme.palette.primary.main}40, 
                                       0 0 0 1px ${theme.palette.primary.light}30`,
                            ...backgroundStyle,
                        } as SxProps<Theme>}
                    />
                    
                    {/* Navigation Items */}
                    <Stack direction="row" spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
                        {navigationItems.map((item: NavigationItem, index: number) => (
                            <Typography
                                key={item.name}
                                ref={(el: HTMLSpanElement | null) => { navItemsRef.current[index] = el; }}
                                variant="body1"
                                onClick={() => handleItemClick(index, item.href)}
                                sx={{
                                    cursor: 'pointer',
                                    color: activeIndex === index 
                                        ? theme.palette.primary.contrastText 
                                        : theme.palette.text.primary,
                                    fontWeight: activeIndex === index ? 600 : 500,
                                    padding: '10px 18px',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    userSelect: 'none',
                                    fontSize: '0.95rem',
                                    textShadow: activeIndex === index 
                                        ? '0 2px 4px rgba(0, 0, 0, 0.3)' 
                                        : 'none',
                                    '&:hover': {
                                        color: activeIndex === index 
                                            ? theme.palette.primary.contrastText 
                                            : theme.palette.primary.main,
                                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                        transform: 'translateY(-2px)',
                                    },
                                } as SxProps<Theme>}
                            >
                                {item.name}
                            </Typography>
                        ))}
                    </Stack>
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    sx={{ 
                        display: { xs: 'flex', md: 'none' },
                        color: theme.palette.primary.main,
                        background: `${theme.palette.accent.cream}60`,
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${theme.palette.primary.light}40`,
                        '&:hover': {
                            background: `${theme.palette.primary.light}20`,
                            transform: 'scale(1.05)',
                        }
                    }}
                    onClick={toggleMobileMenu}
                    aria-label="toggle mobile menu"
                >
                    {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            background: `${theme.palette.background.paper}95`,
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: `1px solid ${theme.palette.primary.light}40`,
                            borderTop: 'none',
                            borderRadius: '0 0 24px 24px',
                            boxShadow: `0 12px 40px ${theme.palette.primary.main}20`,
                            zIndex: 1000,
                        }}
                    >
                        <Stack spacing={0} sx={{ p: 2 }}>
                            {navigationItems.map((item: NavigationItem, index: number) => (
                                <Typography
                                    key={item.name}
                                    variant="body1"
                                    onClick={() => handleItemClick(index, item.href)}
                                    sx={{
                                        cursor: 'pointer',
                                        color: activeIndex === index 
                                            ? theme.palette.primary.main 
                                            : theme.palette.text.primary,
                                        fontWeight: activeIndex === index ? 600 : 500,
                                        padding: '12px 20px',
                                        borderRadius: '16px',
                                        transition: 'all 0.3s ease',
                                        background: activeIndex === index 
                                            ? `${theme.palette.primary.light}20` 
                                            : 'transparent',
                                        border: activeIndex === index 
                                            ? `1px solid ${theme.palette.primary.light}40` 
                                            : '1px solid transparent',
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                            background: `${theme.palette.primary.light}15`,
                                            transform: 'translateX(8px)',
                                        },
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            ))}
                        </Stack>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
