export default function Services() {
  const serviceList = [
    {
      title: "Proposal Development",
      desc: "End-to-end federal proposal support tailored to agency requirements.",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    },
    {
      title: "Cleared Recruitment",
      desc: "Access pre-vetted, cleared, specialized talent for federal programs.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
    {
      title: "GovCon Consulting",
      desc: "Strategic guidance to help you navigate compliance and bid readiness.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2959210?auto=format&fit=crop&q=80",
    },
    {
      title: "Web Development",
      desc: "Government-ready, compliant websites built for credibility and scale.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black text-center text-slate-900 uppercase tracking-tight mb-16 underline decoration-red-600 decoration-4 underline-offset-8">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceList.map((service, index) => (
            <div key={index} className="group relative h-96 overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
              
              {/* Background Image Layer (Full Coverage) */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                style={{ backgroundImage: `url('${service.img}')` }}
              />
              
              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />

              {/* Content Layer */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {service.desc}
                </p>
                <div className="h-1 w-12 bg-red-600 mt-4 group-hover:w-full transition-all duration-500" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}