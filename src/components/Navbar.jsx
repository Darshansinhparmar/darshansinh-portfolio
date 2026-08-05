import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Methods', id: 'methods' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#06060C]/90 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="font-heading text-lg font-bold tracking-tight cursor-pointer group"
          >
            <span className="text-white group-hover:text-[#A0A0FF] transition-colors">DARSHAN</span>
            <span className="text-[#6C63FF]">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1.5">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="px-4 py-1.5 rounded-full text-sm text-[#8A8AA0] hover:text-white hover:bg-white/[0.06] transition-all duration-200 font-medium cursor-pointer"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden lg:flex btn-primary px-5 py-2.5 text-xs"
            >
              Hire Me
            </button>

            {/* Mobile hamburger */}
            <button
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] cursor-pointer"
            >
              <span className={`w-5 h-[1.5px] bg-white transition-all ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
              <span className={`w-5 h-[1.5px] bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`w-5 h-[1.5px] bg-white transition-all ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#06060C]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 lg:hidden"
          >
            {navItems.map(({ label, id }, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(id)}
                className="font-heading text-2xl font-bold text-[#8080B0] hover:text-white transition-colors cursor-pointer"
              >
                {label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.06 }}
              onClick={() => scrollTo('contact')}
              className="btn-primary mt-4"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
