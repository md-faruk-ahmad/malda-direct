/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, MapPin, Mail, ChevronRight, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { MANGO_VARIETIES, CONTACT_INFO } from "./constants";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
           animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
           className="md:hidden overflow-hidden bg-white border-b border-[#e5e1d8]"
        >
          <div className="flex flex-col p-6 gap-6">
            {['Varieties', 'Bulk Orders', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-left text-lg font-medium"
                id={`mobile-nav-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={openWhatsApp}
              className="bg-[#1a5d1a] text-white p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
              id="mobile-cta-whatsapp"
            >
              <MessageCircle /> WhatsApp Now
            </button>
          </div>
        </motion.div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/hero_mango_orchard_1779088608533.png" 
              className="w-full h-full object-cover"
              alt="Malda Mango Orchard"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2c241c]/90 via-[#2c241c]/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 bg-[#e6b34b] text-white text-xs font-bold tracking-widest uppercase mb-6 rounded-sm shadow-sm">
                Established Growers in Malda
              </span>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] mb-8 tracking-tighter">
                Freshly Sourced <br />
                <span className="text-[#e6b34b] font-display italic">Malda Mangoes</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
                Directly from our family-managed orchards in Malda district. We specialize in bulk supplies of Himsagor, Langra, and premium Fazli varieties.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                <button 
                  onClick={() => scrollToSection('varieties')}
                  className="w-full sm:w-auto bg-white text-[#2c241c] px-10 py-5 rounded-full font-bold hover:bg-[#e6b34b] hover:text-white transition-all flex items-center justify-center gap-3 group shadow-2xl"
                  id="hero-explore"
                >
                  Explore Varieties
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto border-2 border-white/40 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                  id="hero-whatsapp"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  Bulk Order Enquiry
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 hidden lg:block bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-center py-10">
                <div className="flex gap-20">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Natural Ripening</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">Direct</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Farm-to-Gate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">Premium</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Export Quality</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <MapPin className="scale-75" />
                  <span>English Bazar, Malda, WB</span>
                </div>
              </div>
            </div>
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
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight font-display">Our Signature <span className="text-[#1a5d1a]">Varieties</span></h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Carefully harvested from the fertile soil of Malda, these varieties represent the peak of mango cultivation in India. Each variety is picked at the perfect maturity stage.
                </p>
              </div>
              <div className="hidden lg:block shrink-0">
                <div className="text-[10rem] font-black text-[#f5f2ed] leading-none select-none">2024</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {MANGO_VARIETIES.map((mango, i) => (
                <motion.div
                  key={mango.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="group relative bg-[#fdfcf8] rounded-[2.5rem] border border-[#e5e1d8]/50 hover:border-[#e6b34b]/30 hover:shadow-[0_30px_60px_-15px_rgba(44,36,28,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full"
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
                  
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="px-3 py-1 bg-[#1a5d1a] text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                        {mango.season}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Malda, West Bengal</span>
                    </div>

                    <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-[#1a5d1a] transition-colors">{mango.name}</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed flex-1">
                      {mango.description}
                    </p>
                    
                    <div className="space-y-4 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {mango.characteristics.map((char, idx) => (
                          <span key={idx} className="text-[9px] font-bold uppercase tracking-widest text-[#1a5d1a]/70 bg-[#1a5d1a]/5 px-2.5 py-1 rounded-full">
                            {char}
                          </span>
                        ))}
                      </div>
                      <button 
                        onClick={() => orderVariety(mango.name)}
                        className="w-full py-4.5 bg-[#2c241c] hover:bg-[#1a5d1a] text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl group/btn"
                        id={`order-btn-${mango.id}`}
                      >
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                        Bulk Enquiry
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
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
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e6b34b] blur-[150px] opacity-10" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white blur-[150px] opacity-10" />
              
              <div className="relative z-10 max-w-xl text-center lg:text-left text-white">
                <span className="text-[#e6b34b] font-bold tracking-[0.4em] text-[10px] uppercase block mb-6">Partnership</span>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] font-display italic">Wholesale Supply for the Global Market</h2>
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
                <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-10 border border-white/10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-sm text-green-100/60 uppercase tracking-widest font-bold">Quick Link</div>
                      <div className="text-xl font-bold text-white tracking-tight">Direct WhatsApp</div>
                    </div>
                  </div>
                  <button 
                    onClick={openWhatsApp}
                    className="w-full bg-[#e6b34b] hover:bg-white text-[#2c241c] py-8 rounded-[2rem] text-2xl font-black transition-all flex items-center justify-center gap-4 group shadow-2xl active:scale-95"
                    id="bulk-cta-whatsapp"
                  >
                    CHAT WITH US
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-[10px] text-green-100/40 uppercase tracking-widest mt-6 font-bold">Inquiries handled by managing director</p>
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
                <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight font-display italic">Let's Discuss <br />Your Supply Needs</h2>
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
                <div className="absolute inset-0 bg-[#e6b34b] blur-[100px] opacity-10 pointer-events-none" />
                <div className="relative bg-white p-12 lg:p-16 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(44,36,28,0.1)] border border-[#e5e1d8]">
                  <h3 className="text-3xl font-bold mb-10 font-display italic">Send Quick Message</h3>
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
                      className="w-full bg-[#1a5d1a] text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-4 hover:bg-[#e6b34b] transition-all shadow-2xl active:scale-[98%]"
                      id="submit-form-cta"
                    >
                      Connect on WhatsApp
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
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
      <footer className="bg-[#2c241c] text-white py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:row items-center justify-between gap-8 text-center md:text-left">
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
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform md:hidden"
        id="floating-whatsapp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
}

