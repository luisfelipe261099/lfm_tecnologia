'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/contact';

const WhatsAppButton = () => (
    <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex items-center gap-3"
    >
        <span className="hidden md:block opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 bg-[#111] border border-white/10 text-white text-xs font-bold font-mono uppercase tracking-widest px-4 py-2 whitespace-nowrap">
            Fale no WhatsApp
        </span>
        <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)]">
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            <MessageCircle size={28} className="relative" />
        </span>
    </motion.a>
);

export default WhatsAppButton;
