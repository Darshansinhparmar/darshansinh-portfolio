import { motion } from 'framer-motion';

const methods = [
  {
    name: "User Research",
    desc: "Behavioral insights & user interviews to ground every design decision in real human needs.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Usability Testing",
    desc: "Rapid validation cycles with real users — catching friction before it reaches production.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    )
  },
  {
    name: "Design Systems",
    desc: "Scalable component libraries and token-based systems that maintain consistency at scale.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
        <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
      </svg>
    )
  },
  {
    name: "Rapid Prototyping",
    desc: "High-fidelity interactive prototypes to communicate ideas and align stakeholders fast.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "AI/ML UX",
    desc: "Designing human-in-the-loop AI experiences where transparency, trust and control are key.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3V10a3 3 0 013-3h1V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.7"/>
        <circle cx="9" cy="13" r="1" fill="currentColor"/>
        <circle cx="15" cy="13" r="1" fill="currentColor"/>
        <path d="M9 17c1 1 5 1 6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Dashboards",
    desc: "Complex data interfaces made scannable, intuitive, and decision-ready for enterprise users.",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/>
        <path d="M7 13l2-4 3 5 2-3 3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    )
  },
];

export default function Methods() {
  return (
    <section id="methods" className="relative py-20 overflow-hidden bg-[#030308]">

      {/* Background — same subtle dot grid, different orientation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#030308] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#030308] to-transparent" />
      </div>

      <div className="container-custom relative z-10">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-gray-400 text-xs uppercase tracking-[0.22em] font-body font-medium">Process</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white tracking-tight font-heading mb-3"
        >
          Methods &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00FFB2]">
            Competencies
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-gray-600 text-sm font-body font-light max-w-md mx-auto mb-10"
        >
          Strategic frameworks and design disciplines that power how I think and build.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {methods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.65, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl p-5 bg-[#0C0C15] border border-white/[0.05] hover:border-white/[0.12] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-400 cursor-default"
            >
              {/* Very subtle hover bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3.5">
                {/* Icon */}
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] text-gray-400 group-hover:text-[var(--accent-blue)] group-hover:bg-[var(--accent-blue)]/8 transition-all duration-300">
                  {method.icon}
                </div>

                {/* Name */}
                <h3 className="text-white/90 font-semibold text-sm tracking-wide font-heading">
                  {method.name}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-xs font-body font-light leading-relaxed">
                  {method.desc}
                </p>

                {/* Bottom accent line — only on hover, neon blue */}
                <div className="w-6 h-[1.5px] bg-[var(--accent-blue)] rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
