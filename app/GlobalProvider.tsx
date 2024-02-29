'use client';
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    
  if (!mounted) {
    return ( 
      <>
        <Toaster />
        <SessionProvider>
          {children}
        </SessionProvider>
      </>
    );
  }

  return (
    <>
    <ThemeProvider attribute="class">
        <Toaster />
        <SessionProvider>
          {children}
        </SessionProvider>
    </ThemeProvider>
    </>
  );
}