import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactLinks = [
  {
    label: 'Email',
    value: 'darshanux.design@gmail.com',
    action: 'copy',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'darshansinhji-parmar',
    href: 'https://www.linkedin.com/in/darshansinhji-parmar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Resume',
    value: 'Download PDF',
    href: '/resume.pdf',
    download: 'Darshansinh_Parmar_Resume.pdf',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
        <polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText('darshanux.design@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#06060C]">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)' }}
      />

      <div className="container-custom relative z-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="label mb-4 block justify-center">Direct Contact</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Let's build something <span className="text-accent-gradient">extraordinary.</span>
          </h2>
          <p className="text-[#6060A0] text-sm leading-relaxed">
            Open for full-time Product Design roles, B2B SaaS opportunities, and design systems consulting globally.
          </p>
        </div>

        {/* Copied toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="px-5 py-2.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
                Email copied to clipboard!
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {contactLinks.map((c) => {
            const inner = (
              <>
                <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 text-[#6C63FF] flex items-center justify-center group-hover:bg-[#6C63FF]/20 transition-colors">
                  {c.icon}
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#4040A0] font-semibold mb-1">{c.label}</div>
                  <div className="text-white text-sm font-medium group-hover:text-[#A0A0FF] transition-colors">
                    {c.action === 'copy' ? 'Copy Email ↗' : `${c.value} ↗`}
                  </div>
                </div>
              </>
            );

            if (c.action === 'copy') {
              return (
                <button
                  key={c.label}
                  onClick={handleCopy}
                  className="card p-5 flex flex-col items-center text-center gap-3 cursor-pointer group"
                >
                  {inner}
                </button>
              );
            }

            return (
              <a
                key={c.label}
                href={c.href}
                download={c.download}
                target={c.download ? undefined : '_blank'}
                rel={c.download ? undefined : 'noopener noreferrer'}
                className="card p-5 flex flex-col items-center text-center gap-3 group"
              >
                {inner}
              </a>
            );
          })}
        </div>

        {/* Form */}
        <div className="card p-8 sm:p-10 max-w-2xl mx-auto">
          <h3 className="font-heading text-xl font-bold text-white mb-6">Send a Direct Inquiry</h3>

          <AnimatePresence>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2"
              >
                <div className="font-heading text-lg font-bold text-emerald-300">Message Sent!</div>
                <div className="text-emerald-400/70 text-xs">I'll respond within 24 hours.</div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Your Name *', key: 'name', type: 'text', placeholder: 'e.g. Sarah Jenkins' },
                    { label: 'Your Email *', key: 'email', type: 'email', placeholder: 'e.g. sarah@company.com' },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-[10px] uppercase tracking-widest text-[#5050A0] font-semibold mb-2">{label}</label>
                      <input
                        type={type}
                        required={label.includes('*')}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-[#3030A0] text-sm focus:outline-none focus:border-[#6C63FF]/50 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#5050A0] font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Product Design Role / Project Inquiry"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-[#3030A0] text-sm focus:outline-none focus:border-[#6C63FF]/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-[#5050A0] font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, project, or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-white placeholder-[#3030A0] text-sm focus:outline-none focus:border-[#6C63FF]/50 transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
                  </svg>
                </button>
              </form>
            )}
          </AnimatePresence>

          <p className="text-center text-[#3030A0] text-xs mt-5">
            Responds within 24 hours · Based in India · Open to Global Remote
          </p>
        </div>

      </div>
    </section>
  );
}
