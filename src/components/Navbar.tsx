import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Achievements', href: '#achievements', id: 'achievements' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between transition-all duration-300 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 ${
          isScrolled
            ? 'bg-[#2B1A38]/85 backdrop-blur-md border border-[#E9C7D4]/15 shadow-xl shadow-[#24152F]/60'
            : 'bg-[#2B1A38]/50 backdrop-blur-sm border border-[#E9C7D4]/10'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Zone: Single text element wordmark */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, '#root')}
          className="text-base sm:text-lg font-bold tracking-tight text-[#F8F5F2] hover:text-[#E9C7D4] transition-colors whitespace-nowrap"
        >
          Maria Theresia
        </a>

        {/* Zone 2: Clean text navigation links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-[#F8F5F2] font-semibold'
                    : 'text-[#E9C7D4]/75 hover:text-[#F8F5F2]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6D4AFF] to-[#C98FA8] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Zone 3: Primary Action (Magnetic feeling Let's Talk CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="mailto:mariaa.thsia@gmail.com"
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-[#24152F] bg-gradient-to-r from-[#E9C7D4] via-[#F8F5F2] to-[#C98FA8] hover:from-white hover:to-[#E9C7D4] rounded-full shadow-md shadow-[#C98FA8]/20 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="mailto:mariather536@gmail.com"
            aria-label="Direct Email"
            className="p-1.5 rounded-full text-[#E9C7D4] hover:text-white bg-[#352044] border border-[#E9C7D4]/15"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-[#F8F5F2] hover:text-[#E9C7D4] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 bg-[#2B1A38]/95 backdrop-blur-xl border border-[#E9C7D4]/20 rounded-2xl p-5 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`py-2 px-3 rounded-lg text-sm transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#352044] text-white font-semibold'
                    : 'text-[#E9C7D4]/80 hover:bg-[#352044]/60 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-[#E9C7D4]/15">
              <a
                href="mailto:mariather536@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#24152F] bg-[#E9C7D4] hover:bg-white rounded-xl shadow-md transition-colors"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
