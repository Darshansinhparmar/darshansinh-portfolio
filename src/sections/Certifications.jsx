import { motion } from 'framer-motion';

const certs = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    badge: 'Professional Certificate',
    accent: '#6C63FF',
    desc: 'Rigorous 7-course program covering UX research, wireframing, high-fidelity prototyping, and usability testing.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
        <path d="M8 12l3 3 5-5"/>
      </svg>
    ),
  },
  {
    title: 'Fundamentals of UI/UX Design',
    issuer: 'Microsoft',
    badge: 'Verified Credential',
    accent: '#10B981',
    desc: 'Core design systems, enterprise software layout paradigms, and accessibility compliance guidelines.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="2" y="2" width="9" height="9" rx="1"/>
        <rect x="13" y="2" width="9" height="9" rx="1"/>
        <rect x="2" y="13" width="9" height="9" rx="1"/>
        <rect x="13" y="13" width="9" height="9" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'UI/UX Design Specialization',
    issuer: 'CalArts',
    badge: 'Specialization',
    accent: '#C084FC',
    desc: 'Advanced visual hierarchy, typography scale, composition systems, and interaction aesthetics.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
      </svg>
    ),
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-[#06060C]">
      <div className="container-custom relative z-10">

        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="label mb-4 block justify-center">Credentials</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Verified <span className="text-accent-gradient">Certifications</span>
          </h2>
          <p className="text-[#6060A0] text-sm leading-relaxed">
            Formal design credentials validating research methodologies, enterprise standards, and visual craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card p-7 flex flex-col gap-5 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center border transition-transform group-hover:scale-105"
                  style={{
                    background: `${cert.accent}15`,
                    borderColor: `${cert.accent}30`,
                    color: cert.accent,
                  }}
                >
                  {cert.icon}
                </div>
                <span
                  className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border"
                  style={{
                    color: cert.accent,
                    background: `${cert.accent}15`,
                    borderColor: `${cert.accent}30`,
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              {/* Issuer */}
              <div className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: cert.accent }}>
                {cert.issuer}
              </div>

              {/* Title */}
              <h3 className="font-heading text-base font-bold text-white group-hover:text-[#C0C0FF] transition-colors leading-snug -mt-3">
                {cert.title}
              </h3>

              {/* Desc */}
              <p className="text-[#5A5A80] text-sm leading-relaxed -mt-1">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
