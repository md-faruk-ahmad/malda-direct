import { MessageCircle, MapPin, Mail } from "lucide-react";
import { CONTACT_INFO } from "../../constants";

interface ContactProps {
  openWhatsApp: () => void;
}

export const Contact = ({ openWhatsApp }: ContactProps) => {
  return (
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
                  <p className="text-gray-500 leading-relaxed font-medium">{CONTACT_INFO.email}</p>
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
                  className="w-full bg-[#1a5d1a] text-white py-4 rounded-2xl font-bold text-xs tracking-[0.1em] uppercase flex items-center justify-center gap-2 hover:bg-[#e6b34b] active:bg-[#e6b34b] transition-all shadow-2xl active:scale-[98%]"
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
  );
};
