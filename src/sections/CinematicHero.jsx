import React from 'react';
import { motion } from 'framer-motion';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

export default function CinematicHero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="min-h-[92vh] w-full relative bg-[#06060C] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* ── Background ambience ── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep violet glow — top-left */}
        <div
          className="absolute -top-40 -left-32 w-[700px] h-[700px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 65%)' }}
        />
        {/* Purple glow — right */}
        <div
          className="absolute top-10 right-0 w-[500px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #C084FC 0%, transparent 65%)' }}
        />
        {/* Fine dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        {/* Horizontal rule at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* ── LEFT: Content ── */}
          <motion.div
            className="lg:col-span-7 xl:col-span-7 flex flex-col"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-7">
              <div className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-70 ping-slow" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-400">
                Open to Full-Time Roles Globally
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4"
            >
              <span className="text-white">Darshansinh</span>
              <br />
              <span className="text-accent-gradient">Parmar</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="font-body text-[#8A8AA0] text-base sm:text-lg leading-relaxed mb-6 max-w-xl"
            >
              Product Designer crafting enterprise{' '}
              <span className="text-[#A0A0E8] font-medium">B2B SaaS platforms</span>,{' '}
              AI-driven interfaces & scalable design systems — currently in the final year of B.Tech Computer Engineering.
            </motion.p>

            {/* Credential chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-9">
              {[
                { icon: '🎓', text: 'B.Tech Computer Engineering (2027)' },
                { icon: '🏅', text: 'Google UX & Microsoft Certified' },
                { icon: '📍', text: 'India · Open to Relocation & Remote' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-[#C0C0D8] font-medium"
                >
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('work')} className="btn-primary">
                View Case Studies
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
                Resume PDF
              </a>
              <button onClick={() => scrollTo('contact')} className="btn-secondary hidden sm:inline-flex">
                Contact Me →
              </button>
            </motion.div>

            {/* Social row */}
            <motion.div variants={fadeUp} className="flex items-center gap-5 mt-8 pt-7 border-t border-white/[0.07]">
              <span className="text-xs text-[#6060A0] uppercase tracking-widest font-semibold">Connect</span>
              <a
                href="https://www.linkedin.com/in/darshansinhji-parmar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8080B0] hover:text-[#6C63FF] transition-colors text-sm font-medium"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:darshanux.design@gmail.com"
                className="text-[#8080B0] hover:text-[#6C63FF] transition-colors text-sm font-medium"
              >
                Email ↗
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Floating transparent photo ── */}
          <motion.div
            className="lg:col-span-5 xl:col-span-5 relative flex items-end justify-center lg:justify-end mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glow ring behind the person */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)' }}
            />

            {/* Profile — transparent PNG, no box or card */}
            <img
              src="/profile-transparent.png"
              alt="Darshansinh Parmar"
              className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-auto object-contain drop-shadow-[0_8px_32px_rgba(108,99,255,0.25)]"
              style={{ filter: 'drop-shadow(0 4px 24px rgba(108,99,255,0.2))' }}
            />

            {/* Floating badge: Role */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-10 right-0 lg:right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0F0F1A]/90 border border-[#6C63FF]/25 backdrop-blur-sm shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-[#6C63FF]" />
              <span className="text-[11px] font-semibold text-[#C0C0FF]">Product Designer</span>
            </motion.div>

            {/* Floating badge: Availability */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="absolute bottom-6 left-4 lg:left-0 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-[#0F0F1A]/90 border border-emerald-500/20 backdrop-blur-sm shadow-lg"
            >
              <div className="flex h-2 w-2 relative">
                <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 ping-slow" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div>
                <div className="text-[9px] uppercase tracking-widest text-[#6060A0] font-semibold">Status</div>
                <div className="text-[11px] font-bold text-white">Available for Hire</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
