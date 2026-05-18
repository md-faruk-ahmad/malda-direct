import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  show: boolean;
  onClick: () => void;
}

export const WhatsAppButton = ({ show, onClick }: WhatsAppButtonProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-[100]"
        >
          <button 
            onClick={onClick}
            className="bg-[#25D366] text-white flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 active:bg-[#128C7E] transition-all group"
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
  );
};
