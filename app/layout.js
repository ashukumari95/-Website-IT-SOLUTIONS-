// app/layout.js
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer.js';
import TechnicalFooter from '@/components/TechnicalFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cognivix IT Solutions | Federal Infrastructure & Cybersecurity Strategy',
  description: 'Specialized in National Infrastructure, Cloud Sovereignty, and Federal Proposal Engineering. Cognivix facilitates large-scale digital transformation for government and enterprise sectors.',
  keywords: 'Federal IT, RFP Support, Infrastructure Strategy, Cybersecurity Compliance, Noida IT Solutions, Cognivix',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation bar stays at the top of every page */}
        <Navbar />
        
        {/* This renders the content of each specific page */}
        <main>{children}</main>
        
        {/* The double-layered footer system for professional depth */}
        <Footer />
        <TechnicalFooter />
      </body>
    </html>
  );
}