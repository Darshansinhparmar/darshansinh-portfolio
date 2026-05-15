import { motion } from 'framer-motion';

// ── SKILL DATA — top skills featured (span=2), rest normal ─────────────────
const skills = [
  { name: "UI/UX Design",            level: 90, cat: "Design",   color: "#00D4FF" },
  { name: "Product Design",          level: 88, cat: "Design",   color: "#00D4FF" },
  { name: "AI-Assisted Design",      level: 88, cat: "AI",       color: "#00D4FF" },
  { name: "Generative AI Workflow",  level: 89, cat: "AI",       color: "#00FFB2" },
  { name: "Design Systems",          level: 85, cat: "Systems",  color: "#00FFB2" },
  { name: "UX Flow Design",          level: 86, cat: "Systems",  color: "#00FFB2" },
  { name: "Interaction Design",      level: 87, cat: "Design",   color: "#00D4FF" },
  { name: "Responsive Design",       level: 88, cat: "Dev",      color: "#00FFB2" },
  { name: "Motion Design",           level: 84, cat: "Motion",   color: "#FFDD00" },
  { name: "Micro Interactions",      level: 86, cat: "Motion",   color: "#FFDD00" },
  { name: "Interactive Prototyping", level: 87, cat: "Design",   color: "#00D4FF" },
  { name: "Human-Centered AI",       level: 85, cat: "AI",       color: "#00D4FF" },
  { name: "Frontend Thinking",       level: 82, cat: "Dev",      color: "#00FFB2" },
  { name: "Problem Solving",         level: 90, cat: "Thinking", color: "#FF6B6B" },
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03, y: -3 }}
      className="group relative overflow-hidden rounded-2xl cursor-default"
    >
      {/* Card base */}
      <div
        className="relative h-full w-full p-6 rounded-2xl flex flex-col justify-between transition-all duration-400"
        style={{
          background: '#0C0C14',
          border: `1px solid rgba(255,255,255,0.06)`,
          minHeight: '130px',
        }}
      >
        {/* Hover glow fill */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${skill.color}18 0%, transparent 70%)`,
          }}
        />

        {/* Glow border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 1px ${skill.color}40` }}
        />

        {/* Top: Category + Level */}
        <div className="flex items-center justify-between mb-3 relative z-10">
          <span
            className="text-[10px] uppercase tracking-[0.2em] font-semibold font-body"
            style={{ color: skill.color + 'AA' }}
          >
            {skill.cat}
          </span>
          <motion.span
            className="font-mono text-sm font-bold"
            style={{ color: skill.color }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
          >
            {skill.level}%
          </motion.span>
        </div>

        {/* Skill Name */}
        <div className="relative z-10">
          <h3 className="font-heading font-semibold tracking-tight text-white/80 group-hover:text-white transition-colors duration-300 leading-tight text-base md:text-lg">
            {skill.name}
          </h3>

          {/* Thin animated bar at bottom */}
          <div className="mt-3 h-[2px] w-full bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.3, delay: 0.2 + index * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})` }}
            />
          </div>
        </div>

        {/* Corner glow dot */}
        <div
          className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-12 md:py-20 overflow-hidden bg-[#030308]">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          }}
        />
        {/* Ambient glow — electric cyan */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#00D4FF] rounded-full blur-[180px] opacity-[0.04]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[300px] bg-[#00FFB2] rounded-full blur-[180px] opacity-[0.04]" />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#030308] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030308] to-transparent" />
      </div>

      <div className="container-custom relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-gray-400 text-xs uppercase tracking-[0.22em] font-body font-medium">Skill Arsenal</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white tracking-tight font-heading mb-10"
        >
          Skills Behind{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00FFB2]">
            Modern Digital Products
          </span>
        </motion.h2>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>

        {/* ── LEGEND ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8"
        >
          {[
            { label: 'Design / AI', color: '#00D4FF' },
            { label: 'Systems / Dev', color: '#00FFB2' },
            { label: 'Motion', color: '#FFDD00' },
            { label: 'Thinking', color: '#FF6B6B' },
          ].map(l => (
            <span key={l.label} className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] font-body text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.color }} />
              {l.label}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
