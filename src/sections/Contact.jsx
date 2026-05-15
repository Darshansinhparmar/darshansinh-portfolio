import { motion } from 'framer-motion';

const contacts = [
  {
    label: 'Email',
    value: 'darshanux.design@gmail.com',
    href: 'mailto:darshanux.design@gmail.com',
    color: '#00D4FF',
    glow: 'rgba(0,212,255,0.12)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'darshansinhji-parmar',
    href: 'https://www.linkedin.com/in/darshansinhji-parmar',
    color: '#00FFB2',
    glow: 'rgba(0,255,178,0.12)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
    download: 'Darshansinh_Parmar_Resume.pdf',
    color: '#FFDD00',
    glow: 'rgba(255,221,0,0.10)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/>
        <line x1="12" x2="12" y1="15" y2="3"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-[#030308]">

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00D4FF] rounded-full blur-[200px] opacity-[0.04]" />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#030308] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#030308] to-transparent" />
      </div>

      <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <div className="w-12 h-[1px] bg-white/15" />
          <span className="text-gray-400 text-xs uppercase tracking-[0.22em] font-body font-medium">Get In Touch</span>
          <div className="w-12 h-[1px] bg-white/15" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-heading mb-5 leading-[1.15]"
        >
          Let's build{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00FFB2]">
            something
          </span>{' '}
          meaningful.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-500 text-sm md:text-base font-light font-body max-w-md mx-auto mb-14"
        >
          Open to freelance projects, full-time roles, and design collaborations — especially in AI-era products and modern digital experiences.
        </motion.p>

        {/* Contact Cards */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-3xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              download={c.download}
              target={c.label !== 'Email' ? '_blank' : undefined}
              rel={c.label !== 'Email' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative flex-1 flex flex-col items-center gap-4 p-7 rounded-2xl cursor-pointer overflow-hidden transition-all duration-400"
              style={{
                background: '#0C0C15',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = c.color + '35';
                e.currentTarget.style.boxShadow = `0 16px 48px ${c.glow}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Hover glow bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 50% 30%, ${c.glow} 0%, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: c.color + '12',
                  color: c.color + 'AA',
                }}
              >
                {c.icon}
              </div>

              {/* Label */}
              <div className="relative z-10 text-center">
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold font-body mb-1"
                  style={{ color: c.color + 'AA' }}
                >
                  {c.label}
                </p>
                <p className="text-white/80 group-hover:text-white font-heading font-medium text-sm tracking-wide transition-colors duration-300 break-all">
                  {c.value}
                </p>
              </div>

              {/* Arrow */}
              <div
                className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 mt-auto"
                style={{ background: c.color + '15', color: c.color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 text-[11px] font-body uppercase tracking-[0.2em] mt-10"
        >
          Responds within 24 hours · Based in India · Open to remote
        </motion.p>

      </div>
    </section>
  );
}
