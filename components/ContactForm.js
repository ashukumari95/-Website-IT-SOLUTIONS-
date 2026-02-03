'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');
    // Simulated database delay
    setTimeout(() => setStatus('secured'), 2000);
  };

  // Expanded and finalized sector list
  const sectors = [
    "Urban Modernization",
    "Strategic Energy Grid",
    "Federal Logistics Hubs",
    "Cyber Governance",
    "National Infrastructure",
    "Defense Systems"
  ];

  return (
    <section id="contact" className="bg-[#f8f9fa] py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Fixed Header Section - No Duplication */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">
            SECURE <span className="text-red-600">INQUIRY</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        {/* The Project Briefing Card */}
        <div className="bg-[#0f1218] rounded-[3.5rem] p-12 md:p-20 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.4)] border border-white/5 relative">
          
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">
              PROJECT <span className="text-red-600">BRIEFING</span>
            </h3>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] mt-3">
              Submit official project tenders for review.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Liaison Name */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block text-center">Liaison Name</label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-[#151921] border border-slate-800 text-white p-5 rounded-2xl focus:border-red-600 outline-none transition-all placeholder:text-slate-700 text-sm font-medium"
                  required 
                />
              </div>

              {/* Authorized Email */}
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block text-center">Authorized Email</label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="dept@gov.in" 
                  className="w-full bg-[#151921] border border-slate-800 text-white p-5 rounded-2xl focus:border-red-600 outline-none transition-all placeholder:text-slate-700 text-sm font-medium"
                  required 
                />
              </div>
            </div>

            {/* Operational Sector - Custom Red Border Styling */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block text-center">Operational Sector</label>
              <div className="relative group">
                <select 
                  name="sector" 
                  className="w-full bg-[#151921] border-2 border-red-600/30 text-white p-5 rounded-2xl focus:border-red-600 outline-none transition-all text-sm appearance-none cursor-pointer font-bold tracking-tight"
                >
                  {sectors.map((s) => (
                    <option key={s} value={s} className="bg-[#0f1218] text-white py-4">
                      {s}
                    </option>
                  ))}
                </select>
                {/* Custom Red Arrow Indicator */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Mission Intelligence */}
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block text-center">Mission Intelligence (Message)</label>
              <textarea 
                name="message" 
                placeholder="Define project scope and requirements..." 
                className="w-full bg-[#151921] border border-slate-800 text-white p-8 rounded-[2rem] h-48 focus:border-red-600 outline-none transition-all placeholder:text-slate-700 text-sm resize-none font-medium leading-relaxed"
                required 
              />
            </div>

            {/* Submission Button */}
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.4em] py-7 rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(220,38,38,0.4)] hover:scale-[1.01] active:scale-[0.98] disabled:bg-slate-800 text-sm"
              disabled={status === 'transmitting'}
            >
              {status === 'transmitting' ? 'Transmitting Pipeline Data...' : status === 'secured' ? 'Submission Secured' : 'Initiate Submission'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}