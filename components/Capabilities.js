// components/Capabilities.js
export default function Capabilities() {
  const items = [
    { 
      title: "Proposal Development", 
      desc: "Full-lifecycle support including Red Team reviews, compliance matrices, and technical writing for complex RFPs." 
    },
    { 
      title: "Cleared Staffing", 
      desc: "Rapid recruitment of Secret, Top Secret, and Polygraph cleared professionals across IT and engineering domains." 
    },
    { 
      title: "Cybersecurity Compliance", 
      desc: "NIST 800-171 and CMMC readiness assessments to ensure your firm meets all federal security requirements." 
    },
    { 
      title: "GSA Schedule Support", 
      desc: "Navigating the complexities of GSA Schedule acquisition, management, and price list maintenance." 
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-red-600 uppercase tracking-[0.3em] mb-4">// Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
              A Partner in Federal Mission Success
            </h3>
          </div>
          <div className="h-1 w-24 bg-red-600 mb-4 hidden md:block" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {items.map((item, i) => (
            <div key={i} className="group border-b border-gray-100 pb-8 transition-all hover:border-red-600">
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-3 uppercase">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}