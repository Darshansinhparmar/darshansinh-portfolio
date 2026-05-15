import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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
    // Add logic to toggle theme on html/body if fully implementing light mode
    // document.documentElement.classList.toggle('light-mode');
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight cursor-pointer flex items-center" onClick={() => scrollTo('hero')}>
          <span style={{ fontFamily: "'Alex Brush', cursive", fontSize: '2.5rem', fontWeight: 400, paddingRight: '10px', background: 'linear-gradient(135deg, #00D4FF, #00FFB2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 10px rgba(0,212,255,0.4))' }}>DP</span>
        </div>

        <div className="hidden md:flex items-center space-x-1 glass-panel rounded-full px-4 py-1.5">
          {['Home', 'Work', 'About', 'Skills', 'Contact'].map((item) => (
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

        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:flex px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:scale-105 transition-transform"
        >
          Contact Me
        </button>
      </div>
    </motion.nav>
  );
}
