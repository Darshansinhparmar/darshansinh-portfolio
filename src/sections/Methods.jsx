import { motion } from 'framer-motion';

const methods = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/><path d="M8 11h6M11 8v6"/>
      </svg>
    ),
    title: 'User Research & Discovery',
    desc: 'Behavioral insights, qualitative interviews, and affinity mapping to ground every decision in real user needs.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4"/><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Usability Testing & Validation',
    desc: 'Rapid validation with target personas — catching cognitive friction before engineering sprint handoff.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
      </svg>
    ),
    title: 'Design Systems & Tokens',
    desc: 'Scalable component libraries, auto-layout variants, and token-based systems that maintain consistency at scale.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Interactive Prototyping',
    desc: 'High-fidelity micro-interactions and motion specs to communicate complex state transitions to engineering.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3V10a3 3 0 013-3h1V6a4 4 0 014-4z"/>
        <circle cx="9" cy="13" r="1" fill="currentColor"/><circle cx="15" cy="13" r="1" fill="currentColor"/>
        <path d="M9 17c1 1 5 1 6 0"/>
      </svg>
    ),
    title: 'Human-in-the-Loop AI UX',
    desc: 'Designing trustworthy AI interfaces where transparency, explainability, and user control are paramount.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M7 13l2-4 3 5 2-3 3 2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Enterprise Data Dashboards',
    desc: 'High-density data interfaces made scannable, accessible, and decision-ready for operational leadership.',
  },
];

export default function Methods() {
  return (
    <section id="methods" className="relative py-24 lg:py-32 bg-[#06060C]">
      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="label mb-4 block justify-center">Process & Methodology</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            How I Solve <span className="text-accent-gradient">Product Problems</span>
          </h2>
          <p className="text-[#6060A0] text-sm leading-relaxed">
            Strategic design frameworks that turn complex user challenges into clean, scalable software.
          </p>
        </div>

        {/* Methods grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-6 flex flex-col gap-4 group"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-[#6C63FF] group-hover:bg-[#6C63FF]/20 transition-colors">
                {m.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold text-white group-hover:text-[#C0C0FF] transition-colors">
                {m.title}
              </h3>

              {/* Description */}
              <p className="text-[#6060A0] text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
