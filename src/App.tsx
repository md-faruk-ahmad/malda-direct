/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useNavigation } from "./hooks/useNavigation";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { WhatsAppButton } from "./components/ui/WhatsAppButton";
import { Hero } from "./sections/Hero";
import { Varieties } from "./sections/Varieties";
import { Logistics } from "./sections/Logistics";
import { BulkOrderCTA } from "./sections/BulkOrderCTA";
import { Contact } from "./sections/Contact";

export default function App() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    showFAB,
    scrollToSection,
    openWhatsApp,
    orderVariety
  } = useNavigation();

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#2c241c] font-sans selection:bg-[#e6b34b] selection:text-white">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
        openWhatsApp={openWhatsApp} 
      />

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
        <Hero scrollToSection={scrollToSection} openWhatsApp={openWhatsApp} />
        <Varieties orderVariety={orderVariety} />
        <Logistics />
        <BulkOrderCTA openWhatsApp={openWhatsApp} />
        <Contact openWhatsApp={openWhatsApp} />
      </main>

      <Footer scrollToSection={scrollToSection} />
      
      <WhatsAppButton show={showFAB} onClick={openWhatsApp} />
    </div>
  );
}
