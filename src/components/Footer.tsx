import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#E9C7D4]/10 bg-[#21132A] text-xs text-[#8D6A91]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand and Academic details */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-sm font-bold text-[#F8F5F2] tracking-tight">
            Maria Theresia
          </div>
          <div className="text-[#E9C7D4]/75 text-xs">
            Business Intelligence Analyst · Computer Science @ BINUS University
          </div>
          <div className="text-[11px] font-mono text-[#8D6A91]">
            Jakarta, Indonesia
          </div>
        </div>

        {/* Right Side: Links & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-4">
            <a
              href="mailto:mariaa.thsia@gmail.com"
              className="text-[#E9C7D4]/70 hover:text-white transition-colors"
              aria-label="Email Maria"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/mariaaan-bloop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E9C7D4]/70 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/maria-theresia-870303325/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E9C7D4]/70 hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[11px] font-mono text-[#8D6A91]">
            © {new Date().getFullYear()} Maria Theresia. Crafted with precision & curiosity.
          </div>
        </div>
      </div>
    </footer>
  );
}
