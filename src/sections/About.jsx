import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  
  // Mouse position for cursor-reactive glow
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Ambient Particles / Neural Nodes
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    })));
  }, []);

  // Parallax on Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth upward movement for the content block based on scroll
  const yParallax = useTransform(scrollYProgress, [0, 1], [80, -80]);

  // Premium Blur-to-Clear Reveal Variants
  const textVariant = {
    hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 }
    }
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-12 md:py-24 flex items-center justify-center overflow-hidden bg-[#030308]"
    >
      {/* 1. DIGITAL NEURAL GRID BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Base */}
        <div className="absolute inset-0 bg-[#020205]" />

        {/* Single soft ambient glow — not distracting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#7A00FF] opacity-[0.04] blur-[160px] rounded-full pointer-events-none" />

        {/* ── DOT GRID — white, not purple ── */}
        <div 
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 25%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 25%, transparent 100%)'
          }}
        />

        {/* ── SCAN LINE — very subtle ── */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ y: ['-5%', '105%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
        />

        {/* ── NEURAL LINES — muted white ── */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="35%" y2="50%" stroke="white" strokeWidth="0.8" />
          <line x1="35%" y1="50%" x2="60%" y2="30%" stroke="white" strokeWidth="0.8" />
          <line x1="60%" y1="30%" x2="85%" y2="60%" stroke="white" strokeWidth="0.8" />
          <line x1="20%" y1="75%" x2="50%" y2="55%" stroke="white" strokeWidth="0.8" />
          <circle cx="10%" cy="20%" r="2" fill="white" />
          <circle cx="35%" cy="50%" r="1.5" fill="white" />
          <circle cx="60%" cy="30%" r="2" fill="white" />
          <circle cx="85%" cy="60%" r="1.5" fill="white" />
          <circle cx="20%" cy="75%" r="1.5" fill="white" />
        </svg>
        
        {/* Cursor Reactive Glow (Intelligent System Feel) */}
        <motion.div
          className="absolute rounded-full pointer-events-none mix-blend-screen"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "tween", ease: "easeOut", duration: 1.5 }}
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(122,0,255,0.08) 0%, transparent 60%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Floating Particles — white, very subtle */}
        {particles.slice(0, 15).map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size * 0.7, height: p.size * 0.7 }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.12, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 2. CONTENT */}
      <div className="container-custom relative z-10 w-full max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="flex flex-col items-center text-center space-y-10"
          style={{ y: yParallax }}
        >
          
          {/* Main Heading */}
          <motion.h2 
            variants={textVariant}
            className="font-heading text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.18] max-w-4xl"
          >
            I approach product design as{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#00FFB2] to-[#00D4FF]" style={{ filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.4))' }}>
                intelligent systems
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />
            </span>
            ,{' '}not just visual screens.
          </motion.h2>

          {/* Body Paragraphs */}
          <motion.div 
            variants={textVariant}
            className="flex flex-col space-y-6 text-sm md:text-base text-gray-400 font-body font-light leading-[1.85] max-w-2xl mx-auto"
          >
            <p>
              Final-year B.Tech Computer Engineering student and UI/UX & Product Designer focused on building modern digital experiences that balance visual aesthetics, intuitive interaction, and strong UX flow. I believe great design is not only about how a screen looks, but also how users move, think, and interact throughout the entire experience.
            </p>
            <p>
              My design process starts with ideas, user behavior, UX flows, and interaction thinking before moving into visual design. I focus on creating seamless, scalable, and meaningful product experiences that solve real problems while maintaining a clean and immersive interface.
            </p>
          </motion.div>

          {/* Case Studies tag */}
          <motion.div 
            variants={textVariant}
            className="border-t border-white/[0.05] pt-6 flex items-center justify-center gap-3 w-full max-w-xl"
          >
            <div className="w-1 h-1 rounded-full bg-white/30" />
            <p className="font-body text-[10px] text-gray-600 uppercase tracking-[0.22em] font-medium">
              3 featured case studies showcased below
            </p>
            <div className="w-1 h-1 rounded-full bg-white/30" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
