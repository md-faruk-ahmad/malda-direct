import { motion } from "motion/react";
import { MessageCircle, ChevronRight, ShieldCheck } from "lucide-react";
import { MANGO_VARIETIES } from "../../constants";

interface VarietiesProps {
  orderVariety: (variety: string) => void;
}

export const Varieties = ({ orderVariety }: VarietiesProps) => {
  return (
    <section id="varieties" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-baseline justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#e6b34b]"></div>
              <span className="text-[#e6b34b] font-bold tracking-[0.3em] text-xs uppercase">The Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 tracking-tight font-display">Our Signature <span className="text-[#1a5d1a]">Varieties</span></h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Carefully harvested from the fertile soil of Malda, these varieties represent the peak of mango cultivation in India. Each variety is picked at the perfect maturity stage.
            </p>
          </div>
          <div className="hidden lg:block shrink-0">
            <div className="text-[10rem] font-black text-[#f5f2ed] leading-none select-none">2026</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {MANGO_VARIETIES.map((mango, i) => (
            <motion.div
              key={mango.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-[#fdfcf8] rounded-[1.5rem] border border-[#e5e1d8]/50 hover:border-[#e6b34b]/30 hover:shadow-[0_20px_40px_-10px_rgba(44,36,28,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full"
              id={`mango-card-${mango.id}`}
            >
              <div className="aspect-[1/1] shrink-0 overflow-hidden bg-[#f5f2ed]">
                <img 
                  src={mango.image} 
                  alt={mango.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* C2PA Authenticity Badge */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-black/5 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span className="text-[9px] font-bold text-gray-800 uppercase tracking-wider">Certified Authentic</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 md:p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div className="px-2.5 py-0.5 bg-[#1a5d1a] text-white text-[9px] font-bold uppercase tracking-widest rounded-sm">
                    {mango.season}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Malda, WB</span>
                </div>

                <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-[#1a5d1a] transition-colors">{mango.name}</h3>
                <p className="text-gray-600 text-[13px] md:text-sm mb-4 leading-relaxed flex-1 line-clamp-3">
                  {mango.description}
                </p>
                
                <div className="space-y-3 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {mango.characteristics.map((char, idx) => (
                      <span key={idx} className="text-[8px] font-bold uppercase tracking-widest text-[#1a5d1a]/70 bg-[#1a5d1a]/5 px-2 py-0.5 rounded-full">
                        {char}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => orderVariety(mango.name)}
                    className="w-full py-3.5 bg-[#2c241c] hover:bg-[#1a5d1a] active:bg-[#1a5d1a] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm group/btn active:scale-[98%]"
                    id={`order-btn-${mango.id}`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span className="text-sm">Enquiry</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
