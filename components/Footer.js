// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[#0f1218] border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">
            Cognivix <span className="text-red-600">IT Solutions</span>
          </h3>
          <p className="text-slate-500 max-w-sm text-sm leading-relaxed uppercase font-bold tracking-tight">
            Leading the evolution of national digital infrastructure. 
            Engineering resilient enterprise systems through federal-grade 
            strategy and technological modernization.
          </p>
        </div>
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Strategic Divisions</h4>
          <ul className="space-y-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <li><a href="/services" className="hover:text-red-600 transition">Cloud Sovereignty</a></li>
            <li><a href="/services" className="hover:text-red-600 transition">Cyber Governance</a></li>
            <li><a href="/services" className="hover:text-red-600 transition">Federal Proposals</a></li>
            <li><a href="/services" className="hover:text-red-600 transition">Enterprise AI</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-black uppercase text-xs tracking-widest mb-6">Liaison Office</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Greater Noida, UP</p>
          <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-2 underline">
            hq@cognivix.in
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-900 flex justify-between items-center text-[8px] font-black text-slate-600 uppercase tracking-[0.5em]">
        <span>© 2026 COGNIVIX STRATEGIC OPERATIONS</span>
        <span>SYSTEM STATUS: ENCRYPTED SESSION ACTIVE</span>
      </div>
    </footer>
  );
}