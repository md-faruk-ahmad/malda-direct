/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { MessageCircle, MapPin, Mail, ChevronRight, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { MANGO_VARIETIES, CONTACT_INFO } from "./constants";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFAB, setShowFAB] = useState(false);
  const { scrollY } = useScroll();

  // Hero Parallax Effects
  const imageScale = useTransform(scrollY, [0, 1000], [1, 1.15]);
  const textY = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setShowFAB(true);
    } else {
      setShowFAB(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in bulk ordering Malda mangoes. Please provide more details.");
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  const orderVariety = (variety: string) => {
    const message = encodeURIComponent(`Hello! I'm interested in bulk ordering the ${variety} mango variety from Malda Direct. Please provide availability and pricing details.`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#2c241c] font-sans selection:bg-[#e6b34b] selection:text-white">
      {/* Navigation */}
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
              className="bg-[#1a5d1a] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#144a14] transition-all flex items-center gap-2 shadow-lg shadow-[#1a5d1a]/20"
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
                className="text-left text-xl font-bold text-[#2c241c] hover:text-[#1a5d1a] transition-colors border-b border-[#f5f2ed] pb-4"
                id={`mobile-nav-${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={openWhatsApp}
              className="bg-[#1a5d1a] text-white p-5 rounded-2xl text-center font-bold flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-transform"
              id="mobile-cta-whatsapp"
            >
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              Message on WhatsApp
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Backdrop for Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-[#2c241c]/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#2c241c]">
          <motion.div 
            style={{ scale: imageScale }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/src/assets/images/hero_mango_orchard_1779088608533.png" 
              className="w-full h-full object-cover"
              alt="Malda Mango Orchard"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#2c241c]/40 md:bg-gradient-to-r md:from-[#2c241c]/95 md:via-[#2c241c]/60 md:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2c241c] via-transparent to-transparent md:hidden" />
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
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] mb-8 tracking-tighter" id="hero-title">
                Freshly <br className="hidden sm:block" />
                <span className="text-[#e6b34b] font-display italic font-light">Heritage</span>
                <br /> Mangoes
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200/80 mb-10 leading-relaxed max-w-xl mx-0 font-light tracking-wide" id="hero-desc">
                Savor the authentic taste of Malda district. We provide premium wholesale supply of Himsagor and Langra varieties, harvested with generations of expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-start justify-start">
                <button 
                  onClick={() => scrollToSection('varieties')}
                  className="w-full sm:w-auto bg-white text-[#2c241c] px-12 py-5 rounded-full font-bold hover:bg-[#e6b34b] hover:text-white transition-all flex items-center justify-center gap-3 group shadow-2xl hover:-translate-y-1 hover:shadow-[#e6b34b]/20"
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

        {/* Varieties Section */}
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
                        className="w-full py-3.5 bg-[#2c241c] hover:bg-[#1a5d1a] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm group/btn active:scale-[98%]"
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

        {/* Handling & Logistics */}
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

        {/* Bulk Orders CTA */}
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
                    className="w-full bg-[#e6b34b] hover:bg-white text-[#2c241c] py-4 md:py-6 px-4 md:px-6 rounded-2xl md:rounded-[2rem] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-2 md:gap-3 group shadow-2xl active:scale-[98%] shadow-[#e6b34b]/20 whitespace-nowrap uppercase"
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

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                <div className="inline-block px-3 py-1 bg-[#e6b34b]/10 text-[#e6b34b] text-[10px] font-bold uppercase tracking-widest rounded-sm mb-6">
                  Contact
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-10 tracking-tight font-display italic">Let's Discuss <br />Your Supply Needs</h2>
                <p className="text-lg text-gray-600 mb-16 leading-relaxed">
                  Our headquarters are located in the heart of Malda's mango district. Visit our collection centers or schedule a call to discuss logistics.
                </p>

                <div className="space-y-12">
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-3xl bg-[#f5f2ed] flex items-center justify-center flex-shrink-0 text-[#1a5d1a]">
                      <MapPin />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Grower Base</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">English Bazar, District Malda <br />West Bengal, India, 732101</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-8">
                    <div className="w-16 h-16 rounded-3xl bg-[#f5f2ed] flex items-center justify-center flex-shrink-0 text-[#1a5d1a]">
                      <Mail />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Partnership Queries</h4>
                      <p className="text-gray-500 leading-relaxed font-medium">sales@maldadirectmangoes.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-[#e6b34b] blur-[100px] opacity-10 pointer-events-none lg:hidden" />
                <div className="relative bg-white p-8 sm:p-12 lg:p-16 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(44,36,28,0.1)] border border-[#e5e1d8]">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 font-display italic">Send Quick Message</h3>
                  <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Your Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full bg-[#fdfcf8] border-b-2 border-[#e5e1d8] py-4 focus:border-[#1a5d1a] outline-none transition-all placeholder:text-gray-300" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">WhatsApp Number</label>
                        <input type="tel" placeholder="+91 9474..." className="w-full bg-[#fdfcf8] border-b-2 border-[#e5e1d8] py-4 focus:border-[#1a5d1a] outline-none transition-all placeholder:text-gray-300" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Business / Organization</label>
                      <input type="text" placeholder="Organic Fruits Ltd." className="w-full bg-[#fdfcf8] border-b-2 border-[#e5e1d8] py-4 focus:border-[#1a5d1a] outline-none transition-all placeholder:text-gray-300" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Estimated Bulk Quantity</label>
                      <div className="flex items-center gap-4">
                        <input type="number" placeholder="500" className="flex-1 bg-[#fdfcf8] border-b-2 border-[#e5e1d8] py-4 focus:border-[#1a5d1a] outline-none transition-all placeholder:text-gray-300" />
                        <span className="font-bold text-gray-400">Kg</span>
                      </div>
                    </div>
                    <button 
                      onClick={openWhatsApp}
                      className="w-full bg-[#1a5d1a] text-white py-4 rounded-2xl font-bold text-xs tracking-[0.1em] uppercase flex items-center justify-center gap-2 hover:bg-[#e6b34b] transition-all shadow-2xl active:scale-[98%]"
                      id="submit-form-cta"
                    >
                      Connect on WhatsApp
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </button>
                    <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-6">
                      No automated spam. Direct human response.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2c241c] text-white py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div>
            <span className="text-2xl font-bold tracking-tighter text-white">MALDA<span className="text-[#e6b34b]">DIRECT</span></span>
            <p className="text-gray-500 text-sm mt-2 max-w-xs">Premium Mango Supplier from Malda district, West Bengal.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            <button onClick={() => scrollToSection('varieties')} className="hover:text-[#e6b34b]">Varieties</button>
            <button onClick={() => scrollToSection('bulk-orders')} className="hover:text-[#e6b34b]">Bulk Orders</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#e6b34b]">Contact</button>
          </div>
          <div className="text-gray-500 text-xs text-center md:text-right">
            © 2024 Malda Direct Mangoes. All rights reserved.<br />
            Designed for excellence in agriculture.
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <AnimatePresence>
        {showFAB && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[100]"
          >
            <button 
              onClick={openWhatsApp}
              className="bg-[#25D366] text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group"
              id="floating-whatsapp"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-white rounded-full animate-ping opacity-20" />
                <MessageCircle className="w-6 h-6 relative z-10" />
              </div>
              <span className="font-bold text-sm hidden md:block">Bulk Enquiry</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

