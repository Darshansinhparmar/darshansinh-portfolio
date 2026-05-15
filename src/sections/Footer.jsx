export default function Footer() {
  return (
    <footer className="py-8 border-t border-[rgba(255,255,255,0.05)] relative z-10 bg-[#020202]">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <p className="text-gray-500 text-sm font-light mt-1">
            © 2026 — All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">LinkedIn</a>
        </div>

        <div className="text-gray-500 text-sm font-light flex gap-4 hidden md:flex">
          <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00FFB2]">Darshansinh Parmar</span>
        </div>
      </div>
    </footer>
  );
}
