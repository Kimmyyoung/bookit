'use client';
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux'; 
import { store } from "@/redux/store";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

    
  if (!mounted) {
    return ( 
      <>
        <Toaster />
        <Provider store={store}>
        <SessionProvider>
          {children}
          </SessionProvider>
        </Provider>
      </>
    );
  }

  return (
    <>
    <ThemeProvider attribute="class">
        <Toaster />
        <Provider store={store}>
        <SessionProvider>
          {children}
          </SessionProvider>
        </Provider>
    </ThemeProvider>
    </>
  );
}