import { motion } from 'framer-motion';

export default function Status() {
  return (
    <section className="relative pt-16 pb-20 flex justify-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#7A00FF] rounded-full blur-[180px] opacity-[0.07] mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl relative overflow-hidden rounded-[28px] border border-[#A374FF]/20 bg-[#0D0D18]"
        >
          {/* Inner glow border effect */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#A374FF]/8 via-transparent to-[#7A00FF]/5 pointer-events-none" />

          {/* Animated scan line */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#A374FF]/40 to-transparent"
            animate={{ y: [-10, 140] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
          />

          {/* Dot pattern subtle */}
          <div
            className="absolute inset-0 opacity-[0.06] rounded-[28px]"
            style={{
              backgroundImage: `radial-gradient(circle, #A374FF 1px, transparent 1px)`,
              backgroundSize: '28px 28px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">

            {/* Left: Availability info */}
            <div className="flex flex-col items-start gap-5">

              {/* Status badge */}
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[rgba(0,245,255,0.07)] border border-[rgba(0,245,255,0.18)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-blue)] opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-blue)]" />
                </span>
                <span className="text-[var(--accent-blue)] font-semibold tracking-widest text-xs uppercase font-body">
                  Available for Work
                </span>
              </div>

              {/* Main text */}
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold max-w-sm leading-snug font-heading tracking-tight">
                Open to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A374FF] to-[#D1A3FF]">
                  freelance
                </span>{' '}
                and product design opportunities.
              </h3>

              {/* Supporting tags */}
              <div className="flex flex-wrap gap-2 mt-1">
                {['UI/UX Design', 'Product Design', 'AI Interfaces', 'Design Systems'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400 text-[11px] font-body tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#7A00FF] to-[#A374FF] text-white font-semibold flex items-center gap-2.5 shadow-[0_0_30px_rgba(122,0,255,0.35)] group font-body"
              >
                <span className="relative z-10">Let's Talk</span>
                <svg className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </motion.button>
              <p className="text-gray-600 text-[11px] font-body tracking-wide text-center">Responds within 24 hours</p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
