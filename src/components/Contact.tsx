import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, ArrowUpRight, MapPin } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'mariaa.thsia@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-y relative border-t border-[#E9C7D4]/10 bg-[#24152F] overflow-hidden">
      {/* Background ambient gradient */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-80 bg-gradient-to-t from-[#6D4AFF]/15 via-[#C98FA8]/10 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-[#C98FA8] uppercase mb-4 px-3 py-1 rounded-full bg-[#352044]/60 border border-[#E9C7D4]/15">
          <span>06 / GET IN TOUCH</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F8F5F2] leading-tight max-w-2xl mx-auto [text-wrap:balance]">
          Let's work{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E9C7D4] to-[#C98FA8]">
            together.
          </span>
        </h2>

        {/* Supporting text */}
        <p className="mt-4 text-base sm:text-lg text-[#E9C7D4]/85 max-w-xl mx-auto font-normal leading-relaxed">
          Have a project, internship opportunity, or idea you'd like to discuss? I’m eager to bring structured analytics, predictive modeling, and executive storytelling to your team.
        </p>

        {/* Primary Contact Action Container */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#2B1A38]/90 border border-[#E9C7D4]/20 shadow-2xl backdrop-blur-md max-w-2xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Direct Email Link Button */}
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#24152F] bg-gradient-to-r from-[#E9C7D4] via-[#F8F5F2] to-[#C98FA8] hover:from-white hover:to-[#E9C7D4] rounded-full shadow-lg shadow-[#6D4AFF]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4 text-[#24152F]" />
              <span>Email Me Directly</span>
              <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-mono text-[#F8F5F2] bg-[#352044] hover:bg-[#432956] border border-[#E9C7D4]/20 rounded-full transition-all cursor-pointer"
              aria-label="Copy Email Address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C98FA8]" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles & Status */}
          <div className="pt-6 border-t border-[#E9C7D4]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#E9C7D4]/80">
              <MapPin className="w-3.5 h-3.5 text-[#C98FA8]" />
              <span>Jakarta, Indonesia</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/maria-theresia-870303325/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#352044] text-[#E9C7D4] hover:text-[#F8F5F2] border border-[#E9C7D4]/15 hover:border-[#C98FA8]/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#8D6A91]" />
              </a>

              <a
                href="https://github.com/mariaaan-bloop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#352044] text-[#E9C7D4] hover:text-[#F8F5F2] border border-[#E9C7D4]/15 hover:border-[#C98FA8]/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#8D6A91]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}