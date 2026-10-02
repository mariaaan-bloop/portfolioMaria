import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACHIEVEMENTS_DATA, AchievementItem } from '../data/experienceData';
import { Award, Trophy, Code2, CheckCircle2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementItem | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const getIcon = (category: string) => {
    if (category.includes('Award')) return Trophy;
    if (category.includes('Programming') || category.includes('Technical')) return Code2;
    return Award;
  };

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const offset = direction === 'left' ? -320 : 320;
    sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section id="achievements" className="section-y relative bg-[#281734]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#C98FA8] uppercase mb-2">
              <span>05</span>
              <span aria-hidden="true" className="text-[#8D6A91]">/</span>
              <span>HONORS & CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F5F2] [text-wrap:balance]">
              Things I'm proud of.
            </h2>
            <p className="mt-2 text-sm text-[#E9C7D4]/80 max-w-xl">
              National business competition podium finishes, verified industry certifications, and competitive credentials.
            </p>
          </div>

          {/* Slider Prev/Next Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => scrollSlider('left')}
              disabled={!canScrollLeft}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-[#352044] hover:bg-[#432956] text-[#F8F5F2] border-[#E9C7D4]/25 hover:border-[#C98FA8]/50'
                  : 'bg-[#24152F]/60 text-[#8D6A91] border-[#E9C7D4]/10 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous achievements"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollSlider('right')}
              disabled={!canScrollRight}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-[#352044] hover:bg-[#432956] text-[#F8F5F2] border-[#E9C7D4]/25 hover:border-[#C98FA8]/50'
                  : 'bg-[#24152F]/60 text-[#8D6A91] border-[#E9C7D4]/10 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next achievements"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Achievements Horizontal Slider Track */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-5 overflow-x-auto pb-6 pt-1 scrollbar-none snap-x snap-mandatory"
        >
          {ACHIEVEMENTS_DATA.map((item) => {
            const Icon = getIcon(item.category);

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedAchievement(item)}
                className="group relative w-[280px] sm:w-[300px] shrink-0 snap-start rounded-3xl bg-[#2B1A38]/80 border border-[#E9C7D4]/15 hover:border-[#C98FA8]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#6D4AFF]/20"
              >
                {/* Certificate Visual Image Preview */}
                {item.image && (
                  <div className="relative h-40 w-full overflow-hidden bg-[#24152F]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1A38] via-[#2B1A38]/40 to-transparent" />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-[#24152F]/90 backdrop-blur-sm text-[10px] font-mono text-[#E9C7D4] border border-[#E9C7D4]/20">
                      {item.year} · {item.category}
                    </div>
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-[#C98FA8] uppercase tracking-wider truncate">
                        {item.issuer}
                      </span>
                      <div className="p-1.5 rounded-xl bg-[#352044] text-[#E9C7D4] group-hover:text-white group-hover:bg-[#6D4AFF] transition-colors shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-[#F8F5F2] group-hover:text-[#E9C7D4] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-[#E9C7D4]/10 flex items-center justify-between">
                    <div className="text-[11px] font-mono text-[#C98FA8] truncate">
                      <span className="truncate">{item.highlight}</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8D6A91] group-hover:text-[#F8F5F2] shrink-0 ml-2">
                      Inspect →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Collectible Detail Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#24152F]/80 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg p-6 sm:p-7 rounded-3xl bg-[#2B1A38] border border-[#C98FA8]/40 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between border-b border-[#E9C7D4]/15 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#C98FA8]">
                    <Award className="w-4 h-4 text-[#6D4AFF]" />
                    <span>VERIFIED RECORD · {selectedAchievement.year}</span>
                  </div>
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="p-1.5 rounded-full text-[#E9C7D4] hover:text-white bg-[#352044] cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {selectedAchievement.image && (
                  <div className="rounded-2xl overflow-hidden border border-[#E9C7D4]/20 shadow-md bg-[#24152F]">
                    <img
                      src={selectedAchievement.image}
                      alt={selectedAchievement.title}
                      className="w-full h-auto object-contain max-h-72 mx-auto"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#F8F5F2]">
                    {selectedAchievement.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8D6A91]">
                    <span>Issuer: {selectedAchievement.issuer}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#E9C7D4]">{selectedAchievement.category}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9C7D4]/90 leading-relaxed font-normal pt-1">
                    {selectedAchievement.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#352044]/60 border border-[#E9C7D4]/10 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div className="text-xs text-[#E9C7D4]">
                    <strong className="text-[#F8F5F2] block font-semibold">Specialization Badge</strong>
                    {selectedAchievement.highlight}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-[#24152F] bg-[#E9C7D4] hover:bg-white transition-colors cursor-pointer"
                >
                  Close Record
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}