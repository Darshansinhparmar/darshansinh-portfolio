import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const cases = [
  {
    id: 1,
    title: "Priora — AI Decision & Productivity Platform",
    description: "A comprehensive dashboard designed to streamline complex decision-making processes by integrating AI-driven insights with traditional workflow management.",
    points: [
      "Reduced task completion time by 32%",
      "Structured dashboards for faster decisions",
      "Added AI explainability and trust signals"
    ],
    tags: ["AI", "SaaS", "Dashboard"],
    link: "https://www.figma.com/proto/F8LFfBa5194NGkYAWnsL3A/Priora-Case-study?node-id=208-21&p=f&viewport=1402%2C284%2C0.29&t=9a4MM5DwMjiBifMf-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
  },
  {
    id: 2,
    title: "Aegis AI — Enterprise AI Governance Platform",
    description: "An enterprise-grade governance tool that helps organizations track, audit, and manage their AI models for compliance and safety.",
    points: [
      "Improved compliance efficiency by 28%",
      "Designed role-based workflows",
      "Focused on transparency and auditability"
    ],
    tags: ["Enterprise", "AI", "UX"],
    link: "https://www.figma.com/proto/7qd3sEOGNjhRMvqVRWnsXd/Aegis-AI?page-id=0%3A1&node-id=22-574&starting-point-node-id=18%3A2&t=bnDHNFMsqYdXZKTw-1"
  },
  {
    id: 3,
    title: "AI Governance Builder — Automation & Safety Platform",
    description: "A visual builder that empowers teams to construct custom governance rules and safety checkpoints without writing complex code.",
    points: [
      "Designed rule builders and review checkpoints",
      "Built scalable UX systems",
      "Simplified complex configurations"
    ],
    tags: ["SaaS", "Systems", "AI"],
    link: "https://www.figma.com/proto/ynfITc8wjijexD4C4xmLYv/AI-Governance?page-id=0%3A1&node-id=2-185&scaling=scale-down&content-scaling=fixed&t=C2BNftFMElThqAeS-1"
  }
];

function CaseCard({ data }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className="relative group perspective-1000 w-full"
    >
      <div 
        className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[var(--accent-blue)] via-[var(--accent-purple)] to-[var(--accent-pink)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[8px]"
        style={{ transform: "translateZ(-10px)" }}
      />
      <div 
        className="glass-panel p-8 sm:p-10 rounded-[20px] relative bg-[#12121A] border border-[rgba(255,255,255,0.05)] group-hover:border-[rgba(255,255,255,0.2)] transition-colors flex flex-col"
        style={{ transform: "translateZ(20px)" }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex gap-2">
            {data.tags.map((tag, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full bg-[rgba(255,255,255,0.03)] text-xs text-gray-300 font-medium border border-[rgba(255,255,255,0.05)]">
                {tag}
              </span>
            ))}
          </div>
          <a 
            href={data.link || "#"}
            target={data.link && data.link !== "#" ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!data.link || data.link === "#") {
                e.preventDefault();
              }
            }}
            className="text-sm font-semibold text-white group-hover:text-[var(--accent-blue)] transition-colors flex items-center gap-2 cursor-pointer z-10 relative"
          >
            View Case Study
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <h3 className="text-2xl sm:text-[28px] font-bold mb-6 text-white leading-tight">{data.title}</h3>
        <p className="text-gray-400 font-light text-[15px] sm:text-[17px] mb-8 leading-relaxed max-w-3xl">
          {data.description}
        </p>
        <ul className="space-y-4 mb-2">
          {data.points.map((point, i) => (
            <li key={i} className="text-gray-300 flex items-start text-[15px] sm:text-[16px]">
              <span className="text-[var(--accent-blue)] mr-4 mt-1.5 text-[10px]">◆</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="py-12 md:py-32 relative">
      <div className="container-custom grid-12">
        {/* Left (5 columns): Intro */}
        <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-[32px] md:text-[40px] font-bold mb-6 text-white"
            >
              Selected{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00FFB2]">
                Work
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-lg max-w-sm"
            >
              Deep dives into AI governance, decision dashboards, and enterprise productivity systems.
            </motion.p>
          </div>
        </div>

        {/* Right (7 columns): Cards */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-12">
          {cases.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="w-full"
            >
              <CaseCard data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
