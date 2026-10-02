import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA, SkillCategory, SkillItem } from '../data/skillsData';
import { RotateCcw, Terminal, Database, BarChart3, PieChart, Table, Cpu, GitBranch, Zap, Server, Workflow, Sheet, Figma as FigmaIcon, Network, Code, Box, GitPullRequest, Sigma, Map as MapIcon } from 'lucide-react';

const CATEGORIES: SkillCategory[] = [
  'ALL',
  'DATA',
  'BI',
  'DATA ENGINEERING',
  'SYSTEM',
  'BUSINESS & PRODUCT',
  'DESIGN',
];

const ICON_MAP: Record<string, any> = {
  Terminal,
  Database,
  BarChart3,
  PieChart,
  Table,
  Cpu,
  GitBranch,
  Zap,
  Server,
  Workflow,
  Sheet,
  Figma: FigmaIcon,
  Network,
  Code,
  Box,
  GitPullRequest,
  Sigma,
  Map: MapIcon,
};

export default function SkillsPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('ALL');
  const [resetKey, setResetKey] = useState(0);
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeCategory === 'ALL') return true;
    return skill.categories.includes(activeCategory);
  });

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    setActiveSkill(null);
  };

  return (
    <section id="skills" className="section-y relative bg-[#24152F]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#C98FA8] uppercase mb-2">
              <span>03</span>
              <span aria-hidden="true" className="text-[#8D6A91]">/</span>
              <span>SKILLS PLAYGROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F5F2] [text-wrap:balance]">
              Tools I work with.
            </h2>
            <p className="mt-2 text-sm text-[#E9C7D4]/80 max-w-xl">
              An interactive physical workspace of analytical tools, data warehouses, and system frameworks.
            </p>
          </div>

          {/* Reset Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-[#E9C7D4] bg-[#352044] hover:bg-[#4d3060] border border-[#E9C7D4]/20 transition-all cursor-pointer shadow-sm hover:text-white"
              aria-label="Reset skills positions"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Skills</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5 p-1 rounded-2xl bg-[#352044]/50 border border-[#E9C7D4]/15 w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#6D4AFF] text-white shadow-md shadow-[#6D4AFF]/25 font-semibold'
                  : 'text-[#E9C7D4]/75 hover:text-white hover:bg-[#352044]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compact Playground Physics Arena */}
        <div
          ref={containerRef}
          key={resetKey}
          className="relative min-h-[220px] sm:min-h-[250px] w-full rounded-3xl bg-[#2B1A38]/50 border border-[#E9C7D4]/15 backdrop-blur-md overflow-hidden p-5 select-none shadow-xl shadow-[#24152F]/70"
        >
          {/* Subtle desk graph grid lines */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #E9C7D4 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Draggable Jelly Skill Tiles */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 relative z-10">
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                const IconComponent = ICON_MAP[skill.iconName] || Terminal;
                const isSelected = activeSkill?.id === skill.id;

                return (
                  <motion.div
                    key={skill.id}
                    drag
                    dragConstraints={containerRef}
                    dragElastic={0.25}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
                    whileHover={{ scale: 1.06, zIndex: 30 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSkill(isSelected ? null : skill)}
                    className={`cursor-grab active:cursor-grabbing px-3.5 py-2.5 rounded-2xl border backdrop-blur-md shadow-md transition-colors flex items-center gap-2.5 ${
                      isSelected
                        ? 'border-[#E9C7D4] bg-[#6D4AFF] text-white shadow-lg shadow-[#6D4AFF]/40'
                        : 'border-[#E9C7D4]/15 bg-[#352044]/90 text-[#F8F5F2] hover:border-[#C98FA8]/50'
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-xl flex items-center justify-center ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#24152F]/70 text-[#C98FA8]'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold tracking-tight">
                        {skill.name}
                        {skill.learning && (
                          <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-1.5 py-px text-[8px] font-mono font-medium text-emerald-300">
                            learning
                          </span>
                        )}
                      </div>
                      <div className="text-[9px] font-mono opacity-70">
                        {skill.level}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Selected Skill Information Drawer */}
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-3 p-4 rounded-2xl bg-[#352044]/90 border border-[#C98FA8]/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#F8F5F2]">{activeSkill.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#24152F] text-[#C98FA8] border border-[#E9C7D4]/15">
                  {activeSkill.level}
                </span>
              </div>
              <p className="text-xs text-[#E9C7D4]/90">{activeSkill.tagline}</p>
            </div>

            <div className="flex items-center gap-1 flex-wrap self-start sm:self-center">
              {activeSkill.categories.map((c, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-[#24152F]/60 text-[9px] font-mono text-[#E9C7D4]/70 border border-[#E9C7D4]/10"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
