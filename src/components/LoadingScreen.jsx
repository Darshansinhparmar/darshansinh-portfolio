import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total loading time
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      
      // Add a little randomness to make it feel like a real game loading
      const randomBoost = Math.random() > 0.8 ? Math.random() * 5 : 0;
      
      setProgress((prev) => Math.min(prev + (100 / steps) + randomBoost, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300); // slight delay after 100% before transitioning
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-[#050508] text-white p-10 font-mono overflow-hidden">
      {/* Background cinematic elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(60,60,120,0.1)_0%,_rgba(0,0,0,0)_100%)]" />
        <div className="absolute w-[200vw] h-[2px] bg-[var(--accent-blue)] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>

      {/* Top Section: Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center justify-center mt-12 text-center"
      >
        <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-gray-300">
          Darshansinh Parmar
        </h1>
        <h2 className="text-sm md:text-base tracking-[0.4em] uppercase text-[var(--accent-blue)] mt-2 opacity-80">
          Portfolio Loading
        </h2>
      </motion.div>

      {/* Middle Section: Abstract visual or logo placeholder */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 border border-white/10 rounded-full relative flex items-center justify-center"
        >
          <div className="absolute w-full h-full border border-[var(--accent-purple)]/20 rounded-full scale-110" />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border border-dashed border-white/20 rounded-full"
          />
          <div className="absolute w-2 h-2 bg-[var(--accent-blue)] rounded-full top-0 shadow-[0_0_10px_var(--accent-blue)] animate-pulse" />
        </motion.div>
      </div>

      {/* Bottom Section: Progress Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl flex flex-col gap-4 mb-8"
      >
        <div className="flex justify-between items-end text-sm text-gray-400 tracking-widest uppercase">
          <span>Loading Assets...</span>
          <span className="text-[var(--accent-blue)] font-bold">{Math.floor(progress)}%</span>
        </div>
        
        {/* The Bar */}
        <div className="w-full h-1 bg-white/5 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-purple)] to-[var(--accent-pink)] shadow-[0_0_15px_var(--accent-purple)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between items-start text-[10px] text-gray-600 tracking-widest">
          <span>DO NOT POWER OFF</span>
          <span>ESTABLISHING CONNECTION</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
