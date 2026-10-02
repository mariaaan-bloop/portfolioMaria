import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';
import ImageSlider from './ImageSlider';
import ProjectModal from './ProjectModal';
import { ArrowUpRight, ChevronLeft, ChevronRight, Database } from 'lucide-react';

const CATEGORIES = [
  'ALL',
  'DATA & BI',
  'DATA ENGINEERING',
  'BUSINESS & PRODUCT',
  'SYSTEM ANALYSIS',
] as const;

type FilterCategory = typeof CATEGORIES[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeCategory === 'ALL') return true;
    return p.category === activeCategory || !!p.alsoIn?.includes(activeCategory);
  });

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollSlider = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const offset = direction === 'left' ? -380 : 380;
    sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    setTimeout(checkScroll, 350);
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  }, [activeCategory]);

  return (
    <section id="projects" className="section-y relative border-t border-[#E9C7D4]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#C98FA8] uppercase mb-2">
              <span>02</span>
              <span aria-hidden="true" className="text-[#8D6A91]">/</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F5F2] [text-wrap:balance]">
              Selected Work
            </h2>
            <p className="mt-2 text-sm text-[#E9C7D4]/80 max-w-xl">
              Analytics, BI, data pipelines, and system architectures organized into an interactive slider.
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
              aria-label="Previous projects slide"
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
              aria-label="Next projects slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 p-1 rounded-2xl bg-[#352044]/60 border border-[#E9C7D4]/15 w-fit">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#6D4AFF] text-white shadow-md shadow-[#6D4AFF]/20 font-semibold'
                  : 'text-[#E9C7D4]/75 hover:text-[#F8F5F2] hover:bg-[#352044]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Horizontal Slider Track */}
        <div
          ref={sliderRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-1 scrollbar-none snap-x snap-mandatory"
        >
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="w-[310px] sm:w-[380px] shrink-0 snap-start rounded-3xl bg-[#2B1A38]/75 border border-[#E9C7D4]/15 hover:border-[#C98FA8]/40 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-[#6D4AFF]/15"
            >
              {/* Visual Preview / Thumbnail Area */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#24152F]">
                {project.gallery?.length || project.image ? (
                  <ImageSlider
                    images={project.gallery?.length ? project.gallery : [project.image!]}
                    alt={project.title}
                    offset={idx * 700}
                    className="h-full w-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#352044] to-[#24152F] p-6 text-center">
                    <Database className="w-8 h-8 text-[#C98FA8] mb-2 opacity-60" />
                    <span className="text-xs font-mono text-[#E9C7D4]/60">
                      {project.categoryLabel}
                    </span>
                  </div>
                )}

                {/* Scrim Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2B1A38]/80 via-transparent to-[#24152F]/40" />

                {/* Category & Status Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <div className="px-2.5 py-0.5 rounded-md bg-[#24152F]/90 backdrop-blur-sm border border-[#E9C7D4]/20 text-[#E9C7D4] text-[10px]">
                    {project.categoryLabel}
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#352044]/90 backdrop-blur-sm text-[10px] text-[#C98FA8] border border-[#E9C7D4]/15 font-semibold">
                    {project.status}
                  </span>
                </div>

                {/* Primary Metric Badge bottom-left */}
                {project.metrics[0] && (
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-[#24152F]/90 backdrop-blur-sm border border-[#E9C7D4]/20 text-[10px] font-mono text-[#F8F5F2]">
                    <span className="text-[#C98FA8]">{project.metrics[0].label}:</span>
                    <span className="font-bold tabular-nums">{project.metrics[0].value}</span>
                  </div>
                )}
              </div>

              {/* Card Content Area */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#F8F5F2] hover:text-[#E9C7D4] transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="p-1.5 rounded-full bg-[#352044] text-[#E9C7D4] shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <p className="text-xs text-[#E9C7D4]/80 line-clamp-3 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Card Bottom: Role & Tools */}
                <div className="pt-2.5 border-t border-[#E9C7D4]/10 flex items-center justify-between gap-2 text-xs">
                  <span className="text-[10px] text-[#8D6A91] truncate font-medium">
                    Role: {project.role.split('·')[0]}
                  </span>

                  <div className="flex items-center gap-1 flex-wrap shrink-0">
                    {project.tools.slice(0, 2).map((tool, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded bg-[#352044] text-[9px] font-mono text-[#E9C7D4] border border-[#E9C7D4]/10"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 2 && (
                      <span className="text-[9px] font-mono text-[#8D6A91]">
                        +{project.tools.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal Case Study */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}