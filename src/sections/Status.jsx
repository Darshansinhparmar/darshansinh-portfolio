import { motion } from 'framer-motion';

export default function Status() {
  return (
    <section className="relative py-20 bg-[#06060C]">
      {/* Full-width glow strip */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background: 'linear-gradient(135deg, #6C63FF20 0%, transparent 50%, #C084FC15 100%)',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl mx-auto rounded-2xl border border-[#6C63FF]/20 bg-[#0C0C18] p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Glow corner */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)' }}
          />

          {/* Left */}
          <div className="flex flex-col items-start gap-4 relative z-10">
            {/* Status pill */}
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-60 ping-slow" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 font-semibold tracking-widest text-[11px] uppercase">
                Available Immediately for Roles
              </span>
            </div>

            <h3 className="font-heading text-white text-2xl md:text-3xl font-bold leading-tight max-w-md">
              Open to Product Design & Design Systems Roles at{' '}
              <span className="text-accent-gradient">Global Companies</span>
            </h3>

            {/* Role tags */}
            <div className="flex flex-wrap gap-2">
              {['UI/UX Design', 'Product Architecture', 'AI Workflow Design', 'Design Systems', 'B2B SaaS'].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0 relative z-10">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get In Touch
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
            <span className="text-[#5050A0] text-xs">Responds within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
