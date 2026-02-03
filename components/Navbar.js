'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Sectors', href: '/sectors' },
    { name: 'Case Study', href: '/case-studies/noida-smart-grid' },
    { name: 'Legacy', href: '/legacy' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0c10]/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Identity */}
        <Link href="/" className="group">
  <div className="flex flex-col">
    <span className="text-2xl font-black text-white tracking-tighter uppercase group-hover:text-red-600 transition">
      COGNIVIX <span className="text-red-600 group-hover:text-white">IT  </span>
       <span className="text-red-600 group-hover:text-white">Solutions</span>
    </span>
    <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.5em] -mt-1">
      Strategic Operations
    </span>
  </div>
</Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-red-600 transition"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mission Control Portal Button */}
          <Link 
            href="/login" 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]"
          >
            Mission Control
          </Link>
        </div>
      </div>
    </nav>
  );
}