import { motion, useScroll, useTransform } from "motion/react";
import { MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
  openWhatsApp: () => void;
}

export const Hero = ({ scrollToSection, openWhatsApp }: HeroProps) => {
  const { scrollY } = useScroll();
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#2c241c]">
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <picture className="w-full h-full">
          <source media="(max-width: 768px)" srcSet="/hero_mango_mobile.png" />
          <img 
            src="/hero_mango.png" 
            className="w-full h-full object-cover"
            alt="Malda Mango Orchard"
            referrerPolicy="no-referrer"
          />
        </picture>
        
        <div className="absolute inset-0 bg-[#2c241c]/60 md:bg-gradient-to-r md:from-[#2c241c]/95 md:via-[#2c241c]/60 md:to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <motion.div 
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-left mx-0"
        >
          <div className="flex items-center justify-start gap-3 mb-6 lg:mt-12">
            <div className="h-px w-8 bg-[#e6b34b]" />
            <span className="text-[#e6b34b] text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase" id="hero-tag">
              ESTABLISHED GROWERS
            </span>
          </div>
          <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] sm:leading-[1] mb-8 tracking-tighter" id="hero-title">
            Freshly <br className="hidden sm:block" />
            <span className="text-[#e6b34b] font-display italic font-light">Heritage</span>
            <br /> Mangoes
          </h1>
          
          <p className="text-lg sm:text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl mx-0 font-normal tracking-wide" id="hero-desc">
            Savor the authentic taste of Malda district. We provide premium wholesale supply of Himsagor and Langra varieties, harvested with generations of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start justify-start">
            <button 
              onClick={() => scrollToSection('varieties')}
              className="w-full sm:w-auto bg-white text-[#2c241c] px-12 py-5 rounded-full font-bold hover:bg-[#e6b34b] hover:text-white active:bg-[#e6b34b] active:text-white transition-all flex items-center justify-center gap-3 group shadow-2xl hover:-translate-y-1 hover:shadow-[#e6b34b]/20"
              id="hero-explore"
            >
              Explore Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openWhatsApp}
              className="w-full sm:w-auto border-2 border-white/20 backdrop-blur-xl text-white px-12 py-5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95"
              id="hero-whatsapp"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Bulk Enquiry
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
