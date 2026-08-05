import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
};

const stats = [
  { value: '3+', label: 'Enterprise Projects' },
  { value: '2', label: 'Industry Certifications' },
  { value: 'WCAG AA', label: 'Accessibility Standard' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#06060C]">
      {/* Subtle background glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="label">Background & Approach</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.12] mb-6 max-w-3xl"
          >
            Engineering mindset.
            <br />
            <span className="text-accent-gradient">Design precision.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* ── Story paragraphs ── */}
            <motion.div variants={fadeUp} className="lg:col-span-7 space-y-5 text-[#9090B0] text-base leading-relaxed">
              <p>
                I came into design through computer engineering. Building backend systems taught me how software functions
                under the hood — but I quickly found that even the most elegant architecture fails when the UI is confusing.
              </p>
              <p>
                Today I design complex enterprise software — from AI governance platforms to visual rule builders. My
                engineering background means I design with technical feasibility, component states, and edge cases built
                in from day one.
              </p>
              <p>
                My focus: reduce friction for users while handing off tight, production-ready Figma libraries and
                design token systems to engineering teams. No guesswork, no back-and-forth — just clean handoffs.
              </p>

              {/* Quote */}
              <div className="border-l-2 border-[#6C63FF] pl-5 py-1">
                <p className="text-[#C0C0E0] italic text-sm">
                  "Design is not just what it looks like — it's how it works, how it scales, and how it solves real business problems."
                </p>
              </div>
            </motion.div>

            {/* ── Stats & credentials ── */}
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-4">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-2">
                {stats.map(({ value, label }) => (
                  <div key={label} className="metric-card text-center">
                    <div className="font-heading text-xl font-bold text-[#A0A0FF]">{value}</div>
                    <div className="text-[10px] text-[#6060A0] font-medium uppercase tracking-wider">{label}</div>
                  </div>
                ))}
              </div>

              {/* Credential cards */}
              {[
                {
                  accent: '#6C63FF',
                  tag: 'Degree',
                  title: 'B.Tech Computer Engineering',
                  sub: 'Final Year · Graduating 2027',
                },
                {
                  accent: '#10B981',
                  tag: 'Certifications',
                  title: 'Google UX Design & Microsoft Certified',
                  sub: 'Verified credentials from accredited programs',
                },
                {
                  accent: '#C084FC',
                  tag: 'Specialisation',
                  title: 'B2B SaaS & AI Workflow Design',
                  sub: 'Design Systems · Enterprise UX · Tokens',
                },
              ].map(({ accent, tag, title, sub }) => (
                <div
                  key={tag}
                  className="card p-4 flex items-start gap-4"
                >
                  <div
                    className="w-1 rounded-full flex-shrink-0 mt-1"
                    style={{ background: accent, minHeight: '40px' }}
                  />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: accent }}>
                      {tag}
                    </div>
                    <div className="font-heading text-sm font-bold text-white mb-0.5">{title}</div>
                    <div className="text-xs text-[#6060A0]">{sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
