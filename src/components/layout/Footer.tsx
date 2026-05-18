interface FooterProps {
  scrollToSection: (id: string) => void;
}

export const Footer = ({ scrollToSection }: FooterProps) => {
  return (
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
          © 2026 Malda Direct Mangoes. All rights reserved.<br />
          Designed for excellence in agriculture.
        </div>
      </div>
    </footer>
  );
};
