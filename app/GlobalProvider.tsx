'use client';
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from 'next-themes';

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

    
  if (!mounted) {
    return <>
      <Toaster />
      {children}
    </>
  }

  return (
    <>
    <ThemeProvider attribute="class">
      <Toaster />
        {children}
    </ThemeProvider>
    </>
  );
}