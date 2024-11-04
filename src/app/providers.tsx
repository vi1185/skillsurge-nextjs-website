'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider refetchInterval={0}>
      <ThemeProvider enableSystem={false} attribute="class">
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
} 