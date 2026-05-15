import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function CinematicHero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

  // Parallax for the main background image
  const bgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-1%", "1%"]);
  const bgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-1%", "1%"]);
  
  // 3D Tilt effect for the content
  const contentRotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2deg", "-2deg"]);
  const contentRotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2deg", "2deg"]);

  // Floating particles state
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Staggered animation variants for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8 // Start after background reveals
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section 
      id="hero" 
      className="h-[100dvh] max-md:h-auto max-md:pb-20 w-full relative bg-[#020202] overflow-hidden flex items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "2000px" }}
    >
      {/* 1. IMMERSIVE BACKGROUND */}
      <motion.div 
        className="absolute inset-[-2%] w-[104%] h-[104%] z-0"
        style={{ x: bgX, y: bgY }}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover max-md:bg-[position:75%_center] md:bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/cyberpunk-hero.jpg')" }}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />

        {/* Ambient Lighting & Gradients for Readability */}
        {/* Left deep black gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/90 to-transparent w-[80%] md:w-[60%]" />
        
        {/* Bottom deep fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent opacity-90" />
        
        {/* Subtle purple ambient glow on the left */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-purple)]/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      </motion.div>

      {/* 2. FLOATING PARTICLES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[var(--accent-purple)] opacity-20 shadow-[0_0_12px_rgba(122,0,255,0.8)] mix-blend-screen"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* 3. PREMIUM TYPOGRAPHY OVERLAY */}
      <div className="container-custom relative z-10 w-full h-full flex items-start pt-[120px] md:items-center md:pt-24">
        <motion.div 
          className="max-w-3xl flex flex-col items-start"
          style={{ rotateX: contentRotateX, rotateY: contentRotateY, transformStyle: "preserve-3d" }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Subtitle / Role (Neon Pill Effect) */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)] shadow-[0_0_10px_var(--accent-blue)] animate-pulse" />
            <span className="font-body text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--accent-blue)]">
              PRODUCT DESIGNER , UI/UX DESIGNER
            </span>
          </motion.div>

          {/* Main Name */}
          <motion.div variants={itemVariants} className="flex flex-col leading-[1.0] mb-6 font-heading">
            <h1 className="text-[10vw] sm:text-[6vw] md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight">
              DARSHANSINH
            </h1>
            <h2 className="text-[8vw] sm:text-[5vw] md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600 tracking-tight mt-1">
              PARMAR
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants} 
            className="font-body text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-10 font-light"
          >
            Designing intuitive digital products and immersive user experiences through modern UI/UX design, interaction, and strategic product thinking in the AI era.
          </motion.p>

          {/* Experience Tags */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center gap-x-4 gap-y-3 font-body text-xs md:text-sm text-gray-500 font-medium tracking-wide uppercase"
          >
            <span className="text-white font-semibold">5+ Real Projects</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)] opacity-80 shadow-[0_0_8px_var(--accent-purple)]" />
            <span>UI/UX</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)] opacity-80 shadow-[0_0_8px_var(--accent-purple)]" />
            <span>Product Design</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)] opacity-80 shadow-[0_0_8px_var(--accent-purple)]" />
            <span>Motion</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)] opacity-80 shadow-[0_0_8px_var(--accent-purple)]" />
            <span>Frontend</span>
          </motion.div>
          
          {/* Subtle Call to Action / Scroll indicator inside the block */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 flex items-center gap-4 group cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--accent-purple)]/50 group-hover:bg-[var(--accent-purple)]/5 transition-all duration-500">
              <div className="w-1.5 h-1.5 bg-[var(--accent-purple)] rounded-full animate-bounce shadow-[0_0_8px_var(--accent-purple)]" />
            </div>
            <span className="font-body text-xs tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors duration-500">
              Explore Vision
            </span>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
