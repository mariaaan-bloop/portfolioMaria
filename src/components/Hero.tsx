import {
  useState,
  useEffect,
  Fragment,
  type CSSProperties,
  type ReactNode,
  type MouseEvent,
} from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowDown,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  FileDown,
  MapPin,
} from 'lucide-react';
import { asset } from '../data/assets';
import LanyardBadge from './LanyardBadge';

const ROLES = [
  'Business Intelligence Analyst',
  'Data Analyst',
  'System Analyst',
  'Business Analyst',
];

const TOOLS = [
  'Analytics',
  'Visualization',
  'Data Warehousing',
  'ETL Pipelines',
];

const LINE =
  'M0 132 L60 114 L110 122 L170 86 L230 98 L290 62 L350 74 L420 38 L480 50 L540 20 L600 26';

const WA_NUMBER = '085643724821';

const GMAIL_COMPOSE =
  'https://mail.google.com/mail/?view=cm&fs=1&to=' +
  encodeURIComponent('mariaa.thsia@gmail.com') +
  '&su=' +
  encodeURIComponent('Inquiry from your portfolio');

const SOCIALS = [
  {
    href: 'https://github.com/mariaaan-bloop',
    label: 'GitHub Profile',
    Icon: Github,
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/maria-theresia-870303325/',
    label: 'LinkedIn Profile',
    Icon: Linkedin,
    external: true,
  },
];

const BARS = [30, 46, 38, 58, 50, 70, 62];

const FONT_CSS = `@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Plus+Jakarta+Sans:wght@400..700&display=swap');`;

const DISPLAY =
  "'Bricolage Grotesque', 'Plus Jakarta Sans', system-ui, sans-serif";

const BODY =
  "'Plus Jakarta Sans', system-ui, -apple-system, 'Segoe UI', sans-serif";

function FloatCard({
  style,
  delay,
  reduce,
  children,
}: {
  style: CSSProperties;
  delay: number;
  reduce: boolean | null;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: reduce ? 1 : 0,
        x: reduce ? 0 : 28,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: 'relative',
        width: 208,
        padding: 12,
        borderRadius: 18,
        border: '1px solid rgba(233,199,212,0.18)',
        background: 'rgba(53,32,68,0.72)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 14px 36px rgba(20,10,30,0.45)',
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

const cardTitle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: '#F8F5F2',
  lineHeight: 1.3,
};

const cardSub: CSSProperties = {
  fontSize: 11,
  color: 'rgba(233,199,212,0.7)',
  marginTop: 2,
};

export default function Hero() {
  const reduce = useReducedMotion();

  const [roleIndex, setRoleIndex] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const [wide, setWide] = useState(false);
  const [copied, setCopied] = useState(false);

  const profilePhoto = asset('Personal/Profile_photo.jpg');

  /*
   * ========================================================
   * CV
   * ========================================================
   *
   * File:
   * public/CV_Maria_Theresia.pdf
   *
   * Nama file harus sama persis dengan yang ada di folder public.
   */
  const cvUrl = '/CV_Maria_Theresia.pdf';

  useEffect(() => {
    const m = window.matchMedia('(min-width: 1024px)');
    const w = window.matchMedia('(min-width: 1200px)');

    const update = () => {
      setDesktop(m.matches);
      setWide(w.matches);
    };

    update();

    m.addEventListener('change', update);
    w.addEventListener('change', update);

    return () => {
      m.removeEventListener('change', update);
      w.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (reduce) return;

    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2600);

    return () => clearInterval(id);
  }, [reduce]);

  const copyWhatsApp = async () => {
    try {
      await navigator.clipboard.writeText(WA_NUMBER);
    } catch {
      const ta = document.createElement('textarea');

      ta.value = WA_NUMBER;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';

      document.body.appendChild(ta);
      ta.select();

      document.execCommand('copy');
      document.body.removeChild(ta);
    }

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2200);
  };

  const openGmail = () => {
    window.location.assign(GMAIL_COMPOSE);
  };

  /*
   * ========================================================
   * DOWNLOAD CV
   * ========================================================
   *
   * Fetch PDF dari public → Blob → force download.
   *
   * Kalau browser/StackBlitz menolak forced download,
   * PDF akan dibuka di tab baru sebagai fallback.
   */
  const downloadCV = async () => {
    try {
      const response = await fetch(cvUrl, {
        method: 'GET',
        cache: 'no-cache',
      });

      if (!response.ok) {
        throw new Error(`Unable to load CV. HTTP ${response.status}`);
      }

      // Cegah menyimpan index.html (SPA fallback) sebagai PDF
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        throw new Error('CV file not found (server returned HTML).');
      }

      const blob = await response.blob();

      if (!blob.size) {
        throw new Error('The CV file is empty.');
      }

      const pdfBlob = new Blob([blob], {
        type: 'application/pdf',
      });

      const blobUrl = window.URL.createObjectURL(pdfBlob);

      const link = document.createElement('a');

      link.href = blobUrl;
      link.download = 'Maria_Theresia_CV.pdf';
      link.style.display = 'none';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);
    } catch (error) {
      console.error('CV download failed:', error);

      /*
       * Fallback:
       * buka PDF langsung jika forced download gagal.
       */
      window.open(cvUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToProjects = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : 0.09,
        delayChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: {
      opacity: reduce ? 1 : 0,
      y: reduce ? 0 : 18,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-6 lg:pt-0 lg:pb-0 overflow-hidden"
      style={{
        isolation: 'isolate',
        fontFamily: BODY,
      }}
    >
      <style>{FONT_CSS}</style>

      {/* Ambient light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 bg-[#6D4AFF]/15 rounded-full blur-3xl -z-10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#C98FA8]/15 rounded-full blur-3xl -z-10"
      />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{
          minHeight: desktop ? 540 : undefined,
          // Jarak antara hero dan section About (juga memberi ruang untuk teks "drag the badge")
          paddingBottom: desktop ? 96 : 0,
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
          style={{
            minHeight: desktop ? 540 : undefined,
          }}
        >
          {/* ==================================================
              LEFT
          ================================================== */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative lg:col-span-6 flex flex-col items-start"
            style={{
              gap: 16,
              // Navbar fixed (~112px) → dorong konten kiri turun agar tidak tertimpa.
              // Section tetap lg:pt-0 supaya tali lanyard di kanan menggantung dari atas.
              paddingTop: desktop ? 120 : 0,
            }}
          >
            {/* Garis tren data */}
            <svg
              aria-hidden="true"
              viewBox="0 0 600 160"
              preserveAspectRatio="none"
              className="pointer-events-none absolute"
              style={{
                left: 0,
                top: '48%',
                width: '100%',
                height: 176,
                zIndex: -1,
                display: desktop ? 'block' : 'none',
                WebkitMaskImage:
                  'linear-gradient(to right, #000 55%, transparent)',
                maskImage: 'linear-gradient(to right, #000 55%, transparent)',
              }}
            >
              <defs>
                <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6D4AFF" stopOpacity="0.28" />

                  <stop offset="100%" stopColor="#6D4AFF" stopOpacity="0" />
                </linearGradient>

                <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8D6A91" stopOpacity="0.15" />

                  <stop offset="100%" stopColor="#E9C7D4" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              <motion.path
                d={`${LINE} L600 160 L0 160 Z`}
                fill="url(#hero-area)"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: reduce ? 0 : 1.4,
                  duration: 0.8,
                }}
              />

              <motion.path
                d={LINE}
                fill="none"
                stroke="url(#hero-line)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                initial={{
                  pathLength: reduce ? 1 : 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  delay: 0.3,
                  duration: reduce ? 0 : 1.8,
                  ease: 'easeInOut',
                }}
              />
            </svg>

            {/* Name */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <motion.p
                variants={item}
                className="text-[#C98FA8]"
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                }}
              >
                Hi, I&apos;m
              </motion.p>

              <motion.h1
                variants={item}
                style={{
                  fontFamily: DISPLAY,
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.035em',
                  lineHeight: 1,
                }}
                className="text-[#F8F5F2]"
              >
                Maria Theresia
              </motion.h1>

              {/* Role */}
              <motion.div
                variants={item}
                style={{
                  position: 'relative',
                  height: 48,
                  overflow: 'hidden',
                }}
                aria-live="polite"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={ROLES[roleIndex]}
                    initial={{
                      y: reduce ? 0 : '100%',
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: reduce ? 0 : '-100%',
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-semibold text-[#E9C7D4]"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      fontFamily: DISPLAY,
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      fontSize: 'clamp(1.25rem, 2.4vw, 1.875rem)',
                    }}
                  >
                    {ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Description */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                maxWidth: 512,
              }}
            >
              <motion.p
                variants={item}
                className="text-base sm:text-lg text-[#E9C7D4]/85 leading-relaxed"
              >
                I turn raw data into clear, structured insights that support
                business decisions, operational performance, and reliable
                information systems.
              </motion.p>

              <motion.ul
                variants={item}
                className="flex flex-wrap gap-2"
                aria-label="Tools and methods"
              >
                {TOOLS.map((t) => (
                  <li
                    key={t}
                    className="px-3 py-1 text-xs font-medium text-[#E9C7D4] rounded-full border border-[#E9C7D4]/20 bg-[#352044]/50"
                  >
                    {t}
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Buttons */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                width: '100%',
              }}
            >
              <motion.div
                variants={item}
                className="flex flex-wrap items-center gap-3"
              >
                {/* View Projects */}
                <a
                  href="#projects"
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#24152F] bg-gradient-to-r from-[#E9C7D4] via-[#F8F5F2] to-[#C98FA8] hover:from-white hover:to-[#E9C7D4] rounded-full shadow-lg shadow-[#6D4AFF]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9C7D4]"
                >
                  View projects
                  <ArrowDown className="w-4 h-4" />
                </a>

                {/* ==================================================
                    DOWNLOAD CV
                ================================================== */}

                <button
                  type="button"
                  onClick={downloadCV}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F8F5F2] bg-[#352044]/80 hover:bg-[#352044] border border-[#E9C7D4]/20 hover:border-[#C98FA8]/50 rounded-full transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9C7D4]"
                >
                  <FileDown className="w-4 h-4 text-[#C98FA8]" />
                  Download CV
                </button>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={copyWhatsApp}
                  title="Copy WhatsApp number"
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-medium text-[#E9C7D4] hover:text-[#F8F5F2] transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#E9C7D4] rounded-full"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      WhatsApp number copied
                    </>
                  ) : (
                    <>
                      WhatsApp Number
                      <Copy className="w-4 h-4" />
                    </>
                  )}

                  <span className="sr-only" role="status" aria-live="polite">
                    {copied ? 'copied to clipboard' : ''}
                  </span>
                </button>
              </motion.div>

              {/* Status + Social */}
              <motion.div
                variants={item}
                className="relative z-20 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E9C7D4]/10"
              >
                <div className="flex items-center gap-2 text-sm text-[#E9C7D4]/80">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span>Open to local & remote roles</span>

                  <span aria-hidden="true" className="text-[#8D6A91]">
                    |
                  </span>

                  <MapPin className="w-3.5 h-3.5 text-[#C98FA8]" />

                  <span>Jakarta, Indonesia</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* GitHub + LinkedIn */}
                  {SOCIALS.map(({ href, label, Icon, external }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="p-2.5 rounded-full text-[#E9C7D4] hover:text-[#F8F5F2] bg-[#352044]/60 hover:bg-[#352044] border border-[#E9C7D4]/15 hover:border-[#C98FA8]/40 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9C7D4]"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}

                  {/* EMAIL */}
                  <button
                    type="button"
                    aria-label="Send email via Gmail"
                    title="Send email via Gmail"
                    onClick={openGmail}
                    className="p-2.5 rounded-full text-[#E9C7D4] hover:text-[#F8F5F2] bg-[#352044]/60 hover:bg-[#352044] border border-[#E9C7D4]/15 hover:border-[#C98FA8]/40 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E9C7D4]"
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ==================================================
              FLOATING DATA CARDS
          ================================================== */}

          {wide && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: '44%',
                width: '44%',
                pointerEvents: 'none',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 195,
                  left: 'calc(50% + 160px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                {/* ETL Pipeline */}
                <FloatCard reduce={reduce} delay={0.9} style={{}}>
                  <div style={cardTitle}>ETL Pipeline</div>

                  <div style={cardSub}>Orders in, analytics out</div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      marginTop: 12,
                    }}
                  >
                    {['Extract', 'Transform', 'Load'].map((t, i) => (
                      <Fragment key={t}>
                        {i > 0 && (
                          <span
                            style={{
                              flex: '0 0 8px',
                              height: 1,
                              background: '#8D6A91',
                            }}
                          />
                        )}

                        <span
                          style={{
                            fontSize: 10,
                            padding: '3px 6px',
                            borderRadius: 999,
                            border: '1px solid rgba(233,199,212,0.28)',
                            color: '#E9C7D4',
                          }}
                        >
                          {t}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                </FloatCard>

                {/* Star Schema */}
                <FloatCard reduce={reduce} delay={1.1} style={{}}>
                  <div style={cardTitle}>Data Modeling</div>

                  <div style={cardSub}>Fact and dimension tables</div>

                  <svg
                    viewBox="0 0 190 64"
                    width="100%"
                    style={{
                      marginTop: 10,
                    }}
                  >
                    <g stroke="#8D6A91" strokeWidth="1">
                      <line x1="46" y1="11" x2="70" y2="28" />

                      <line x1="144" y1="11" x2="120" y2="28" />

                      <line x1="46" y1="53" x2="70" y2="36" />

                      <line x1="144" y1="53" x2="120" y2="36" />
                    </g>

                    <rect
                      x="70"
                      y="22"
                      width="50"
                      height="20"
                      rx="5"
                      fill="#6D4AFF"
                      fillOpacity="0.55"
                      stroke="#E9C7D4"
                      strokeOpacity="0.5"
                    />

                    {[
                      [6, 4],
                      [144, 4],
                      [6, 46],
                      [144, 46],
                    ].map(([x, y]) => (
                      <rect
                        key={`${x}-${y}`}
                        x={x}
                        y={y}
                        width="40"
                        height="14"
                        rx="4"
                        fill="none"
                        stroke="#C98FA8"
                        strokeOpacity="0.7"
                      />
                    ))}
                  </svg>
                </FloatCard>

                {/* Executive Dashboard */}
                <FloatCard reduce={reduce} delay={1.3} style={{}}>
                  <div style={cardTitle}>Visualizations</div>

                  <div style={cardSub}>Power BI and Tableau</div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      gap: 6,
                      height: 60,
                      marginTop: 12,
                    }}
                  >
                    {BARS.map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{
                          scaleY: reduce ? 1 : 0,
                        }}
                        animate={{
                          scaleY: 1,
                        }}
                        transition={{
                          delay: reduce ? 0 : 1.5 + i * 0.06,
                          duration: 0.5,
                          ease: 'easeOut',
                        }}
                        style={{
                          flex: 1,
                          height: h,
                          borderRadius: 4,
                          transformOrigin: 'bottom',
                          background:
                            i === BARS.length - 1
                              ? '#E9C7D4'
                              : 'linear-gradient(to top, #6D4AFF, #C98FA8)',
                          opacity: i === BARS.length - 1 ? 1 : 0.8,
                        }}
                      />
                    ))}
                  </div>
                </FloatCard>
              </div>
            </div>
          )}

          {/* ==================================================
              RIGHT: LANYARD
          ================================================== */}

          <div
            className="relative h-[640px] [mask-image:linear-gradient(to_bottom,transparent,black_70px)] lg:[mask-image:none]"
            style={
              desktop
                ? {
                    position: 'absolute',
                    top: -20,
                    bottom: 0,
                    left: '44%',
                    width: '44%',
                    height: 'auto',
                  }
                : undefined
            }
          >
            <LanyardBadge photoSrc={profilePhoto} />
          </div>
        </div>
      </div>
    </section>
  );
}
