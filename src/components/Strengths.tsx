import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { STRENGTHS_DATA } from '../data/strengthsData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Strengths() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  return (
    <section id="strengths" className="section-y relative bg-[#281734]/30 border-y border-[#E9C7D4]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header with Slider Controls */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-mono tracking-wider text-[#C98FA8] uppercase mb-1">
              <span>CORE ATTRIBUTES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F5F2]">
              How I work
            </h2>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'bg-[#352044] hover:bg-[#432956] text-[#F8F5F2] border-[#E9C7D4]/25 hover:border-[#C98FA8]/50'
                  : 'bg-[#24152F]/60 text-[#8D6A91] border-[#E9C7D4]/10 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous strengths"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                canScrollRight
                  ? 'bg-[#352044] hover:bg-[#432956] text-[#F8F5F2] border-[#E9C7D4]/25 hover:border-[#C98FA8]/50'
                  : 'bg-[#24152F]/60 text-[#8D6A91] border-[#E9C7D4]/10 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next strengths"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Compact Horizontal Slider Track */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
        >
          {STRENGTHS_DATA.map((strength) => (
            <motion.div
              key={strength.id}
              whileHover={{ y: -3 }}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start p-5 rounded-2xl bg-[#2B1A38]/85 border border-[#E9C7D4]/15 hover:border-[#C98FA8]/40 shadow-lg flex flex-col justify-between transition-all"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-[#F8F5F2] truncate">
                    {strength.name}
                  </h3>
                  <span className="text-[9px] font-mono text-[#E9C7D4]/70 px-2 py-0.5 rounded-md bg-[#24152F] border border-[#E9C7D4]/10 shrink-0">
                    {strength.category}
                  </span>
                </div>

                <p className="text-xs text-[#E9C7D4]/85 leading-relaxed font-normal line-clamp-3">
                  {strength.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}