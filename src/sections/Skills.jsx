import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Core Design',
    accent: '#6C63FF',
    items: [
      { name: 'UI/UX & Product Design', desc: 'User-centred interface design & product strategy' },
      { name: 'UX Flow Architecture', desc: 'End-to-end user journeys & wireframing' },
      { name: 'Interactive Prototyping', desc: 'High-fidelity motion & micro-interaction specs' },
      { name: 'Information Architecture', desc: 'Sitemaps, node navigation & visual hierarchy' },
    ],
  },
  {
    title: 'Enterprise AI Systems',
    accent: '#10B981',
    items: [
      { name: 'AI-Assisted Workflows', desc: 'Human-in-the-loop AI interface patterns' },
      { name: 'Risk & Governance UX', desc: 'Audit dashboards & real-time analytics' },
      { name: 'Explainable AI (XAI)', desc: 'Trust signals & decision transparency' },
      { name: 'Rule Builder Architecture', desc: 'No-code workflow interfaces' },
    ],
  },
  {
    title: 'Design Systems',
    accent: '#C084FC',
    items: [
      { name: 'Design System Architecture', desc: 'Reusable Figma libraries & auto-layout variants' },
      { name: 'Accessibility (WCAG AA)', desc: 'Color contrast compliance & screen-reader labelling' },
      { name: 'Multi-Brand Tokens', desc: 'Dark/Light mode color tokens & typography scales' },
      { name: 'Developer Handoff', desc: 'Figma specs, layout docs & token sync' },
    ],
  },
  {
    title: 'Technical Execution',
    accent: '#F59E0B',
    items: [
      { name: 'Frontend Thinking', desc: 'Translating UI specs into React & Tailwind code' },
      { name: 'Responsive Layouts', desc: 'Mobile-first & multi-breakpoint grid design' },
      { name: 'Motion Design', desc: 'Framer Motion & micro-interaction animation' },
      { name: 'Problem Solving', desc: 'Analytical approach to complex user problems' },
    ],
  },
];

const tools = ['Figma', 'FigJam', 'Framer', 'React', 'Tailwind CSS', 'Adobe XD', 'Notion', 'Jira'];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32 bg-[#06060C]">
      {/* Subtle left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C084FC 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="label mb-4 block justify-center">Skill Taxonomy</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Design & Systems <span className="text-accent-gradient">Arsenal</span>
          </h2>
          <p className="text-[#6060A0] text-sm leading-relaxed">
            A structured breakdown of core product design capabilities, enterprise AI frameworks, and technical execution skills.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
              className="card p-6 sm:p-7"
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.05]">
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: group.accent, boxShadow: `0 0 10px ${group.accent}80` }}
                />
                <h3 className="font-heading text-base font-bold text-white">{group.title}</h3>
              </div>

              {/* Items */}
              <div className="grid grid-cols-1 gap-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-colors group"
                  >
                    <div
                      className="text-sm font-semibold text-white mb-0.5 group-hover:text-[#C0C0FF] transition-colors"
                    >
                      {item.name}
                    </div>
                    <div className="text-xs text-[#5050A0]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <div className="w-full text-center text-[10px] uppercase tracking-widest text-[#4040A0] font-semibold mb-2">
            Tools & Platforms
          </div>
          {tools.map((tool) => (
            <div
              key={tool}
              className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07] text-sm text-[#9090B0] hover:text-white hover:border-[#6C63FF]/40 transition-all cursor-default"
            >
              {tool}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
