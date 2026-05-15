import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = ['Home', 'Work', 'About', 'Skills', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 backdrop-blur-md bg-[#020202]/80 border-b border-white/5' : 'py-4'
          }`}
      >
        <div className="container-custom flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight cursor-pointer flex items-center" onClick={() => scrollTo('hero')}>
            <span style={{ fontFamily: "'Alex Brush', cursive", fontSize: '2.5rem', fontWeight: 400, paddingRight: '10px', background: 'linear-gradient(135deg, #00D4FF, #00FFB2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 10px rgba(0,212,255,0.4))' }}>DP</span>
          </div>

          <div className="hidden md:flex items-center space-x-1 glass-panel rounded-full px-4 py-1.5">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item === 'Home' ? 'hero' : item.toLowerCase())}
                className="px-3 py-1.5 text-xs md:text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--accent-blue)] transition-all duration-300 group-hover:w-1/2 rounded-full shadow-[0_0_8px_var(--accent-blue)]"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:flex px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
            >
              Contact Me
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`}></span>
              <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`}></span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#020202]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden pt-20 pb-10 px-6"
          >
            <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(item === 'Home' ? 'hero' : item.toLowerCase())}
                  className="text-2xl font-medium text-gray-300 hover:text-white transition-colors w-full text-center py-2 border-b border-white/5"
                >
                  {item}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => scrollTo('contact')}
                className="w-full mt-4 px-6 py-4 rounded-full bg-[var(--accent-blue)] text-black text-lg font-semibold hover:bg-white transition-colors"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
