// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 px-2 py-1 rounded font-bold text-sm">CGS</div>
            <span className="text-xl font-bold tracking-tighter uppercase">CyberX Gov</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            A specialized government contracting support firm helping federal contractors win more opportunities through proposal development and cleared staffing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm border-b border-red-600 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/" className="hover:text-white transition">Our Services</Link></li>
            <li><Link href="/admin/dashboard" className="hover:text-white transition text-slate-800">Admin Login</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm border-b border-red-600 pb-2 inline-block">Connect</h4>
          <p className="text-sm text-gray-400 mb-2">Greater Noida, Uttar Pradesh</p>
          <p className="text-sm text-gray-400 font-bold italic">"Excellence in Federal Execution"</p>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-gray-500">
        <p>&copy; {currentYear} CyberX Gov Solutions. All Rights Reserved.</p>
        <p className="mt-2 italic">Not affiliated with any U.S. Government Agency.</p>
      </div>
    </footer>
  );
}