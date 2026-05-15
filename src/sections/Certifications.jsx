import { motion } from 'framer-motion';

const certs = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    color: "#00D4FF",
    glow: "rgba(0,212,255,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    badge: "Professional",
  },
  {
    title: "Fundamentals of UI/UX Design",
    issuer: "Microsoft",
    color: "#00FFB2",
    glow: "rgba(0,255,178,0.12)",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="13" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="2" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="13" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    badge: "Verified",
  },
  {
    title: "UI/UX Design Specialization",
    issuer: "California Institute of the Arts (CalArts)",
    color: "#FFDD00",
    glow: "rgba(255,221,0,0.10)",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      </svg>
    ),
    badge: "Specialization",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-12 md:py-20 overflow-hidden bg-[#030308]">

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
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#030308] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030308] to-transparent" />
      </div>

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-gray-400 text-xs uppercase tracking-[0.22em] font-body font-medium">Certifications</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white tracking-tight font-heading mb-10"
        >
          Verified{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00FFB2]">
            Credentials
          </span>
        </motion.h2>

        {/* Cert Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl p-6 cursor-default"
              style={{
                background: '#0C0C15',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = cert.color + '35';
                e.currentTarget.style.boxShadow = `0 12px 40px ${cert.glow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Hover bg glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${cert.glow} 0%, transparent 70%)` }}
              />

              {/* Top: icon + badge */}
              <div className="relative z-10 flex items-start justify-between mb-5">
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{ background: cert.color + '12', color: cert.color + 'CC' }}
                  onMouseEnter={e => e.currentTarget.style.color = cert.color}
                  onMouseLeave={e => e.currentTarget.style.color = cert.color + 'CC'}
                >
                  {cert.icon}
                </div>

                {/* Badge */}
                <span
                  className="text-[9px] uppercase tracking-[0.18em] font-semibold font-body px-2.5 py-1 rounded-full"
                  style={{
                    color: cert.color,
                    background: cert.color + '15',
                    border: `1px solid ${cert.color}25`,
                  }}
                >
                  {cert.badge}
                </span>
              </div>

              {/* Issuer */}
              <p
                className="relative z-10 text-[10px] uppercase tracking-[0.18em] font-semibold font-body mb-2"
                style={{ color: cert.color + 'AA' }}
              >
                {cert.issuer}
              </p>

              {/* Title */}
              <h3 className="relative z-10 text-white/85 group-hover:text-white font-heading font-semibold text-base leading-snug tracking-tight transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Bottom accent line */}
              <div
                className="relative z-10 mt-5 h-[1.5px] w-10 rounded-full opacity-40 group-hover:opacity-90 group-hover:w-16 transition-all duration-500"
                style={{ background: cert.color }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
