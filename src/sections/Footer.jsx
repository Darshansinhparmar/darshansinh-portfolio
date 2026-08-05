export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-white/[0.06] bg-[#09090E] relative z-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Monogram & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="text-base font-bold font-heading text-white">
            DARSHANSINH<span className="text-blue-500 font-black">.</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <p className="text-gray-400 text-xs font-body">
            © {new Date().getFullYear()} Darshansinh Parmar. Crafted for Enterprise Product Design.
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a 
            href="https://www.linkedin.com/in/darshansinhji-parmar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-xs font-medium"
          >
            LinkedIn ↗
          </a>
          <a 
            href="mailto:darshanux.design@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors text-xs font-medium"
          >
            Email ↗
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-xs font-medium"
          >
            Resume PDF ↗
          </a>

          <button
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-gray-300 hover:text-white text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer border border-white/10"
            aria-label="Back to top"
          >
            Back to Top ↑
          </button>
        </div>

      </div>
    </footer>
  );
}
