// app/layout.js
import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CyberX Gov Solutions | Federal Contracting Support',
  description: 'Helping government contractors win, comply, and scale.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* You can add your Navbar here later to show on every page */}
        <main>{children}</main>
        {/* You can add your Footer here */}
      </body>
    </html>
  );
}