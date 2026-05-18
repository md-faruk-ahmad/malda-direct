import { MessageCircle, ArrowRight } from "lucide-react";

interface BulkOrderCTAProps {
  openWhatsApp: () => void;
}

export const BulkOrderCTA = ({ openWhatsApp }: BulkOrderCTAProps) => {
  return (
    <section id="bulk-orders" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#1a5d1a] rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e6b34b] blur-[150px] opacity-10 lg:hidden" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white blur-[150px] opacity-10 lg:hidden" />
          
          <div className="relative z-10 max-w-xl text-center lg:text-left text-white">
            <span className="text-[#e6b34b] font-bold tracking-[0.4em] text-[10px] uppercase block mb-6">Partnership</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 leading-[1.1] font-display italic">Wholesale Supply for the Global Market</h2>
            <p className="text-xl text-green-100/70 mb-12">
              Partner with Malda's premium growers. We offer competitive pricing for metric-ton quantities and long-term supply contracts.
            </p>
            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-2xl font-bold text-[#e6b34b]">500kg+</div>
                <div className="text-[10px] uppercase tracking-widest text-green-100/50">Minimum Order</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#e6b34b]">Weekly</div>
                <div className="text-[10px] uppercase tracking-widest text-green-100/50">Restocking Cycles</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-md">
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-7 md:p-12 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 md:gap-5 mb-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 shadow-inner">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs text-green-100/60 uppercase tracking-[0.2em] font-bold mb-1">Quick Link</div>
                  <div className="text-lg md:text-2xl font-bold text-white tracking-tight">Direct WhatsApp</div>
                </div>
              </div>
              <button 
                onClick={openWhatsApp}
                className="w-full bg-[#e6b34b] hover:bg-white text-[#2c241c] py-4 md:py-6 px-4 md:px-6 rounded-2xl md:rounded-[2rem] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2 md:gap-3 group shadow-2xl active:scale-[98%] active:bg-white shadow-[#e6b34b]/20 whitespace-nowrap uppercase"
                id="bulk-cta-whatsapp"
              >
                BULK ORDER
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform shrink-0" />
              </button>
              <p className="text-center text-[9px] md:text-[10px] text-green-100/40 uppercase tracking-[0.3em] mt-6 font-bold">Direct line to grower support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
