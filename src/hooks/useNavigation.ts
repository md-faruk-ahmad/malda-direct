import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { CONTACT_INFO } from '../constants';

export const useNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFAB, setShowFAB] = useState(false);
  const { scrollY } = useScroll();

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
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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

  return {
    isMenuOpen,
    setIsMenuOpen,
    showFAB,
    scrollToSection,
    openWhatsApp,
    orderVariety
  };
};
