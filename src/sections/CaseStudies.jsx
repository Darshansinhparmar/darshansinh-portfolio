import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cases = [
  {
    id: 'priora',
    index: '01',
    bg: '/priora-bg.png',
    accent: '#4F8EF7',
    category: 'Enterprise B2B SaaS · Decision Architecture · Design Systems',
    title: 'Priora — AI Decision Dashboard',
    tagline: 'Centralised intelligence for operational workflows',
    role: 'Lead Product Designer (End-to-End)',
    tags: ['B2B SaaS', 'AI Workflows', 'Design System', 'Figma'],
    metrics: [
      { label: 'Workflow Speed', value: '3× Faster' },
      { label: 'Data Friction', value: 'Reduced' },
      { label: 'Accessibility', value: 'WCAG AA' },
    ],
    description:
      'A centralised decision-support dashboard helping operational teams aggregate cross-platform data, evaluate AI recommendations, and execute workflows — eliminating spreadsheet chaos.',
    responsibilities: [
      'Information architecture & visual layout exploration',
      'Interactive Figma prototyping & component system',
      'Developer handoff specs & design token documentation',
    ],
    overview: {
      problem:
        'Ops leads wasted hours bouncing between disconnected tools and spreadsheets before making critical calls, causing decision fatigue and delays.',
      uxThinking:
        'Designed a split-screen dashboard: contextual AI summaries on the left, editable decision parameters on the right. Users keep full control without trusting black-box recommendations blindly.',
      businessThinking:
        'Focused on reducing decision latency for operational workflows, aligning UI density with executive scanning habits to increase platform retention.',
      devCollaboration:
        'Built with 24 auto-layout components, 8px spatial rules, and named dark mode tokens mapped to Tailwind CSS variables.',
      outcome:
        'Delivered a production-ready Figma prototype and design token spec that simplified multi-variable decision cycles into a structured 3-step workflow.',
    },
    link: 'https://www.figma.com/proto/F8LFfBa5194NGkYAWnsL3A/Priora-Case-study?node-id=208-21&p=f&viewport=1402%2C284%2C0.29&t=9a4MM5DwMjiBifMf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
  },
  {
    id: 'aegis',
    index: '02',
    bg: '/aegis-bg.png',
    accent: '#F97316',
    category: 'Security & Compliance · Risk Analytics · Workflow Systems',
    title: 'Aegis AI — Governance & Risk Platform',
    tagline: 'Enterprise-grade AI compliance monitoring',
    role: 'UI/UX & Systems Designer',
    tags: ['Enterprise AI', 'Risk Analytics', 'Security UX', 'WCAG'],
    metrics: [
      { label: 'Triage Speed', value: '3× Faster' },
      { label: 'Risk Visibility', value: 'High' },
      { label: 'Error Rate', value: '−28%' },
    ],
    description:
      'An enterprise auditing platform enabling compliance officers to monitor AI model deployments, triage safety alerts, and enforce data privacy guardrails — in real-time.',
    responsibilities: [
      'User research synthesis & persona mapping',
      'Risk heatmap visualization UI',
      'Component library & state documentation',
    ],
    overview: {
      problem:
        'Security engineers lacked real-time visibility into prompt risks, PII leaks, and compliance violations due to unorganised log data.',
      uxThinking:
        'Established a 4-tier risk alert structure (Critical, High, Medium, Low) using clear color tokens and progressive disclosure to prevent notification fatigue.',
      businessThinking:
        'Targeted enterprise risk mitigation goals by enabling security managers to identify and remediate compliance anomalies before external audits.',
      devCollaboration:
        'Documented full component state specs (Default, Hover, Focus, Active, Alert, Disabled) for direct React frontend integration.',
      outcome:
        'Designed a clean, scannable compliance monitoring hub that reduced anomaly triage times for enterprise security teams.',
    },
    link: 'https://www.figma.com/proto/7qd3sEOGNjhRMvqVRWnsXd/Aegis-AI?page-id=0%3A1&node-id=22-574&starting-point-node-id=18%3A2&t=bnDHNFMsqYdXZKTw-1',
  },
  {
    id: 'builder',
    index: '03',
    bg: '/builder-bg.png',
    accent: '#14B8A6',
    category: 'Visual Rule Builder · No-Code Systems · Complex UX',
    title: 'AI Governance Builder — Visual Canvas',
    tagline: 'Zero-code policy deployment for compliance teams',
    role: 'Product Designer',
    tags: ['No-Code Builder', 'Visual Canvas', 'Complex UX', 'AI'],
    metrics: [
      { label: 'Setup Overhead', value: '< 10 Mins' },
      { label: 'Code Required', value: '0 Lines' },
      { label: 'Rule Accuracy', value: 'High' },
    ],
    description:
      'A drag-and-drop visual node builder empowering non-technical policy analysts to construct, test, and deploy automated safety checkpoints — without writing a single line of code.',
    responsibilities: [
      'Visual node canvas & connection logic',
      'Drag-and-drop interaction design',
      'Micro-interaction & prototype specs',
    ],
    overview: {
      problem:
        'Policy managers needed developer support to write JSON rule scripts whenever safety guardrails needed updating, causing bottlenecks.',
      uxThinking:
        'Designed a node canvas with snap-to-grid alignment, visual connection paths, and live execution previews.',
      businessThinking:
        'Eliminated engineering dependency for routine rule updates, saving developer sprint capacity and accelerating policy deployment speed.',
      devCollaboration:
        'Specified canvas grid snapping math, node boundary limits, and keyboard shortcuts (Undo, Redo, Zoom) for engineers.',
      outcome:
        'Created an intuitive visual builder allowing policy teams to deploy custom governance checkpoints independently in minutes.',
    },
    link: 'https://www.figma.com/proto/ynfITc8wjijexD4C4xmLYv/AI-Governance?page-id=0%3A1&node-id=2-185&scaling=scale-down&content-scaling=fixed&t=C2BNftFMElThqAeS-1',
  },
];

const modalSections = [
  { key: 'problem', label: '1. Problem Statement', accent: '#6C63FF' },
  { key: 'uxThinking', label: '2. UX Thinking & Layout Rationale', accent: '#6C63FF' },
  { key: 'businessThinking', label: '3. Business Value', accent: '#6C63FF' },
  { key: 'devCollaboration', label: '4. Developer Handoff', accent: '#C084FC' },
  { key: 'outcome', label: '5. Outcome', accent: '#10B981' },
];

export default function CaseStudies() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#06060C]">
      <div className="container-custom relative z-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="label mb-4 block">Selected Case Studies</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Featured <span className="text-accent-gradient">Product Work</span>
            </h2>
          </div>
          <p className="text-[#6060A0] text-sm max-w-xs leading-relaxed">
            Deep dives into enterprise SaaS platforms, AI governance tools, and complex design systems.
          </p>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative group overflow-hidden rounded-2xl border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300"
              style={{ minHeight: '320px' }}
            >
              {/* Background image with dark overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${c.bg})` }}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#06060C]/98 via-[#06060C]/80 to-[#06060C]/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060C]/90 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 h-full">

                {/* Left */}
                <div className="flex-1 max-w-2xl">
                  {/* Index + category */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-heading text-4xl font-bold opacity-20 text-white select-none">{c.index}</span>
                    <div className="h-px flex-1 max-w-[40px]" style={{ background: c.accent }} />
                    <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: c.accent }}>
                      {c.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-[#E0E0FF] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-[#8080A0] text-sm mb-5">{c.tagline}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="px-4 py-2 rounded-xl border text-center"
                        style={{
                          background: `${c.accent}10`,
                          borderColor: `${c.accent}30`,
                        }}
                      >
                        <div className="font-heading text-base font-bold text-white">{m.value}</div>
                        <div className="text-[10px] text-[#6060A0] uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTAs */}
                <div className="flex flex-col gap-3 shrink-0">
                  <div className="text-[11px] text-[#5050A0] mb-1">
                    Role: <span className="text-[#A0A0D0]">{c.role}</span>
                  </div>
                  <button
                    onClick={() => setSelected(c)}
                    className="btn-primary text-sm"
                  >
                    Read Case Study
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </button>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm text-center"
                  >
                    Figma Prototype ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl my-8 rounded-2xl border border-white/10 bg-[#0F0F1A] shadow-2xl overflow-hidden"
            >
              {/* Modal header image strip */}
              <div
                className="h-28 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${selected.bg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0F1A]" />
                <div
                  className="absolute inset-0 opacity-60"
                  style={{ background: `linear-gradient(135deg, ${selected.accent}30, transparent)` }}
                />
              </div>

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: selected.accent }}>
                      Case Study Deep Dive
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white mt-1">{selected.title}</h3>
                    <p className="text-xs text-[#6060A0] mt-1">Role: {selected.role}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-[#6060A0] hover:text-white transition-colors cursor-pointer flex-shrink-0 text-sm"
                  >
                    ✕
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Responsibilities */}
                <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="text-[10px] uppercase tracking-widest text-[#6060A0] font-semibold mb-2">
                    Responsibilities
                  </div>
                  <ul className="space-y-1.5">
                    {selected.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-[#A0A0C0] flex items-start gap-2">
                        <span style={{ color: selected.accent }} className="mt-1 flex-shrink-0">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Overview sections */}
                <div className="space-y-4">
                  {modalSections.map(({ key, label, accent: sAccent }) => (
                    <div key={key}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: sAccent }} />
                        <h4 className="text-sm font-semibold text-white">{label}</h4>
                      </div>
                      <p
                        className={`text-sm leading-relaxed p-4 rounded-xl border ${
                          key === 'outcome'
                            ? 'text-emerald-200 bg-emerald-500/[0.08] border-emerald-500/20'
                            : 'text-[#9090B0] bg-white/[0.02] border-white/[0.05]'
                        }`}
                      >
                        {selected.overview[key]}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-white/[0.07]">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open Figma Prototype ↗
                  </a>
                  <button
                    onClick={() => setSelected(null)}
                    className="btn-secondary"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
