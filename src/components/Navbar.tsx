'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-red-900/30' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Hexagon className="w-10 h-10 text-primary transition-transform group-hover:rotate-60 duration-500 fill-red-600/10" />
            <span className="absolute inset-0 flex items-center justify-center font-bold text-xs font-mono">LFM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tighter font-mono leading-none">TECNOLOGIA</span>
            <span className="text-[10px] tracking-[0.3em] text-primary font-mono">INNOVATION HUB</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors font-mono uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contato"
            className="px-6 py-2 bg-primary text-white text-sm font-bold font-mono uppercase tracking-widest rounded-none hover:bg-red-700 transition-all glow-shadow"
          >
            Fale Conosco
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2 relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold font-mono uppercase tracking-[0.2em] hover:text-primary transition-colors text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="px-10 py-4 bg-primary text-white font-bold font-mono uppercase tracking-widest glow-shadow"
            >
              Fale Conosco
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
