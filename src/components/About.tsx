import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Compass, MapPin, Database, Briefcase, Cpu, PieChart, School } from 'lucide-react';

const TIMELINE = [
  {
    icon: GraduationCap,
    period: 'Aug 2024 – Sep 2028',
    title: 'BINUS University',
    sub: "Computer Science · Bachelor's",
    badge: 'Current',
    active: true,
  },
  {
    icon: School,
    period: 'High School',
    title: 'SMA Sedes Sapientiae Semarang',
    sub: 'Science Track',
    badge: 'Graduated',
    active: false,
  },
];

const INFO_CARDS = [
  {
    title: 'PRIMARY FOCUS',
    value: 'Business Intelligence & Data Analytics',
    institution: 'Transforming Raw Data into Decisions',
    period: 'Predictive Modeling · ETL Pipelines',
    icon: Compass,
    accent: 'border-[#E9C7D4]/30',
    badge: 'Core Trajectory',
  },
  {
    title: 'LOCATION',
    value: 'West Jakarta, DKI Jakarta',
    institution: 'Indonesia',
    period: 'Open to Local & Remote Opportunities',
    icon: MapPin,
    accent: 'border-[#C98FA8]/30',
    badge: 'Available for Roles',
  },
];

const FOCUS_DOMAINS = [
  { name: 'DATA', icon: Database, desc: 'Wrangling, ETL, Star Schemas & Predictive Modeling' },
  { name: 'BUSINESS', icon: Briefcase, desc: 'Market Feasibility, Financial Models & KPIs' },
  { name: 'SYSTEMS', icon: Cpu, desc: 'SRS Engineering, Relational ERDs & Process Flow' },
  { name: 'VISUALIZATION', icon: PieChart, desc: 'Executive Power BI & Tableau Dashboards' },
];

const NODE = 26;

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="about" className="section-y relative" style={{ paddingTop: 24 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#C98FA8] uppercase mb-3">
          <span>01</span>
          <span aria-hidden="true" className="text-[#8D6A91]">/</span>
          <span>ABOUT ME</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: satu paragraf utama, penutup di dasar kolom */}
          <div className="lg:col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F5F2] [text-wrap:balance]">
              A little about me.
            </h2>

            <p className="text-[#E9C7D4]/90 text-base sm:text-lg" style={{ lineHeight: 1.8, maxWidth: '58ch' }}>
              I am a Computer Science student at <strong className="text-[#F8F5F2] font-semibold">BINUS University</strong>, having previously graduated from <strong className="text-[#F8F5F2] font-semibold">SMA Sedes Sapientiae Semarang (Science Track)</strong>. I am aspiring to build a career in <strong className="text-[#F8F5F2] font-semibold">Business Intelligence and Data Analytics</strong>, transforming raw data into clear insights that help businesses understand performance, identify opportunities, and make informed decisions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, paddingTop: 24, borderTop: '1px solid rgba(233,199,212,0.12)' }}>
              <span className="text-sm font-semibold text-[#F8F5F2]">What I bring</span>
              <p className="text-[#E9C7D4]/80 text-base" style={{ lineHeight: 1.75, maxWidth: '58ch' }}>
                Through academic projects and organizational experiences, I have developed skills in data analysis, visualization, coordination, and communication.
              </p>
            </div>

            <div aria-hidden="true" style={{ height: 1, background: 'rgba(233,199,212,0.12)' }} />

            <p
              className="text-[#E9C7D4]/90 text-base sm:text-lg"
              style={{ lineHeight: 1.75, maxWidth: '58ch', marginTop: 'auto', paddingLeft: 18, borderLeft: '3px solid #6D4AFF' }}
            >
              I am eager to apply my technical and business knowledge to real-world data-driven challenges and continuously grow as a BI professional.
            </p>
          </div>

          {/* Right: semua kartu/ikon */}
          <div className="lg:col-span-6 space-y-4">
            {/* Education timeline: garis memanjang ke kanan, node di atas garis */}
            <div className="p-5 rounded-3xl border border-[#6D4AFF]/30 bg-[#352044]/60 backdrop-blur-md shadow-md">
              <span className="block text-[10px] font-mono tracking-widest text-[#C98FA8] uppercase font-semibold mb-4">
                EDUCATION TIMELINE
              </span>

              <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 16 }}>
                {/* garis utama dari node pertama sampai tepi kanan kartu */}
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: NODE / 2,
                    right: 0,
                    top: NODE / 2 - 1,
                    height: 2,
                    borderRadius: 2,
                    background: 'linear-gradient(to right, #6D4AFF 0%, rgba(141,106,145,0.55) 50%, rgba(141,106,145,0) 100%)',
                  }}
                />

                {TIMELINE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'relative',
                          zIndex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: NODE,
                          height: NODE,
                          borderRadius: '50%',
                          border: `1px solid ${item.active ? 'rgba(233,199,212,0.5)' : 'rgba(233,199,212,0.3)'}`,
                          background: item.active ? '#6D4AFF' : '#24152F',
                          boxShadow: item.active ? '0 0 14px rgba(109,74,255,0.6)' : 'none',
                        }}
                      >
                        <Icon size={13} color="#fff" />
                      </span>

                      <div style={{ marginTop: 14 }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                          <span className="text-[10px] font-mono text-[#C98FA8]">{item.period}</span>
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full border ${
                              item.active
                                ? 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10'
                                : 'text-[#8D6A91] border-[#E9C7D4]/15'
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <div className="text-sm font-bold text-[#F8F5F2] leading-snug">{item.title}</div>
                        <div className="text-xs text-[#E9C7D4]/75" style={{ marginTop: 2 }}>{item.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Primary focus + location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO_CARDS.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`p-5 rounded-3xl border bg-[#352044]/60 backdrop-blur-md transition-shadow cursor-default flex flex-col justify-between ${card.accent} ${
                      hoveredCard === idx ? 'shadow-xl shadow-[#6D4AFF]/20' : 'shadow-md'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono tracking-widest text-[#C98FA8] uppercase font-semibold">{card.title}</span>
                        <div className="p-2 rounded-xl bg-[#24152F]/70 text-[#E9C7D4]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-base font-bold text-[#F8F5F2] mb-1 leading-snug">{card.value}</div>
                      <div className="text-xs text-[#E9C7D4]/80 font-medium">{card.institution}</div>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#E9C7D4]/10 flex items-center justify-between gap-2 text-[11px] text-[#8D6A91]">
                      <span>{card.period}</span>
                      <span className="text-[#C98FA8] text-[10px] font-medium shrink-0">{card.badge}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Core domains */}
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-[#C98FA8] mb-3">
                Core Domains & Competencies
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FOCUS_DOMAINS.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-2xl bg-[#352044]/50 border border-[#E9C7D4]/15 hover:border-[#C98FA8]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-4 h-4 text-[#C98FA8]" />
                      <span className="text-xs font-bold text-[#F8F5F2] tracking-wider">{item.name}</span>
                    </div>
                    <p className="text-[11px] text-[#E9C7D4]/70 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}