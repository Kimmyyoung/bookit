import './globals.css'
import 'tailwindcss/tailwind.css';


import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from './Head';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GlobalProvider } from './GlobalProvider';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <GlobalProvider>
          <Header />
          {children}
          <Footer />
        </GlobalProvider>
      </body>
    </html>
  );
}

