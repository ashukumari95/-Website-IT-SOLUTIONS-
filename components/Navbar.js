import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-white/10 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-red-600 px-2 py-1 rounded font-bold text-sm">CGS</div>
          <span className="text-xl font-black uppercase tracking-tighter">CyberX Gov</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-widest">
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#services" className="hover:text-red-500 transition">Services</a>
          <a href="#capabilities" className="hover:text-red-500 transition">Capabilities</a>
          <a href="#contact" className="bg-red-600 px-5 py-2 hover:bg-red-700 transition">Get Started</a>
        </div>
      </div>
    </nav>
  );
}