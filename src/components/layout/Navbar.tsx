import { motion } from "motion/react";
import { MessageCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  openWhatsApp: () => void;
}

export const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection, openWhatsApp }: NavbarProps) => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#e5e1d8]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter text-[#1a5d1a]">MALDA<span className="text-[#e6b34b]">DIRECT</span></span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Varieties', 'Bulk Orders', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="text-sm font-medium hover:text-[#e6b34b] transition-colors"
              id={`nav-${item.toLowerCase()}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={openWhatsApp}
            className="bg-[#1a5d1a] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#144a14] active:bg-[#144a14] transition-all flex items-center gap-2 shadow-lg shadow-[#1a5d1a]/20"
            id="cta-whatsapp-nav"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} id="mobile-menu-toggle">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
         initial={false}
         animate={isMenuOpen ? { height: "auto", opacity: 1, visibility: "visible" } : { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" } }}
         transition={{ duration: 0.3, ease: "circOut" }}
         className="md:hidden overflow-hidden bg-white border-b border-[#e5e1d8] shadow-2xl relative z-[60]"
      >
        <div className="flex flex-col p-8 gap-8">
          {['Varieties', 'Bulk Orders', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              className="text-left text-xl font-bold text-[#2c241c] hover:text-[#1a5d1a] active:text-[#1a5d1a] transition-colors border-b border-[#f5f2ed] pb-4"
              id={`mobile-nav-${item.toLowerCase().replace(' ', '-')}`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={openWhatsApp}
            className="bg-[#1a5d1a] text-white p-5 rounded-2xl text-center font-bold flex items-center justify-center gap-3 shadow-xl active:scale-95 active:bg-[#144a14] transition-all"
            id="mobile-cta-whatsapp"
          >
            <MessageCircle className="w-6 h-6 text-[#25D366]" />
            Message on WhatsApp
          </button>
        </div>
      </motion.div>
    </nav>
  );
};
