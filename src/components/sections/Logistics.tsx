export const Logistics = () => {
  return (
    <section className="py-32 bg-[#fdfcf8] border-y border-[#e5e1d8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6 font-display">Specialized <span className="text-[#e6b34b]">Bulk Handling</span></h2>
          <p className="text-gray-600">We prioritize the integrity of our fruit during transit. From orchard sorting to final crating, our process is optimized for fresh delivery.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: "🌡️", title: "Temperature Managed", desc: "Stored in ventilated environments to maintain natural freshness from orchard to transport." },
            { icon: "📦", title: "Export Packaging", desc: "Three-layered corrugated boxes with protective padding to ensure zero bruising during transit." },
            { icon: "🚛", title: "Swift Logistics", desc: "Optimized route planning for Pan-India delivery via reliable agriculture-specialized transport." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-[3rem] bg-white border border-[#e5e1d8]/50 shadow-sm">
              <div className="w-20 h-20 bg-[#f5f2ed] rounded-[2rem] flex items-center justify-center mb-8 text-3xl">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
