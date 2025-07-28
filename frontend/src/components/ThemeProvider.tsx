"use client";

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/app/lib/theme';

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}
