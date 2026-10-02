import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, ChevronRight, Layers, Lightbulb, Compass, FileText, BarChart3 } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';
import Stepper, { Step } from './Stepper';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  useEffect(() => {
    setSelectedGalleryImg(project?.gallery?.[0] || project?.image || null);
    setActiveJourneyIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#24152F]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', damping: 28, stiffness: 280 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#2B1A38] border border-[#E9C7D4]/20 rounded-3xl shadow-2xl shadow-[#24152F]/90 text-[#F8F5F2] z-10 flex flex-col"
        >
          {/* Sticky Modal Top Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-[#2B1A38]/90 backdrop-blur-xl border-b border-[#E9C7D4]/15 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#E9C7D4]/75">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C98FA8] font-semibold">{project.status}</span>
            </div>

            <div className="flex items-center gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#352044] hover:bg-[#432956] text-[#F8F5F2] border border-[#E9C7D4]/15 transition-colors"
                  aria-label="View Project on GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              )}
              {project.links.powerbi && (
                <a
                  href={project.links.powerbi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#6D4AFF] hover:bg-[#5b3ce0] text-white shadow-sm transition-colors"
                  aria-label="View Power BI Report"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Power BI</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
              {project.links.tableau && (
                <a
                  href={project.links.tableau}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#6D4AFF] hover:bg-[#5b3ce0] text-white shadow-sm transition-colors"
                  aria-label="View Tableau Dashboard"
                >
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Tableau</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              )}
              {project.links.figma && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#352044] hover:bg-[#432956] text-[#E9C7D4] border border-[#E9C7D4]/20 transition-colors"
                  aria-label="View Figma Prototype"
                >
                  <span>Figma</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-[#352044] hover:bg-[#4d3060] text-[#E9C7D4] hover:text-white transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Overview */}
            <div className="space-y-3">
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F5F2] [text-wrap:balance]">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#E9C7D4]/90 leading-relaxed font-normal">
                {project.overview}
              </p>
            </div>

            {/* Project Screenshot / Gallery Preview */}
            {(project.gallery || project.image) && (
              <div className="space-y-3">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#E9C7D4]/20 bg-[#24152F] shadow-lg">
                  <img
                    src={selectedGalleryImg || project.gallery?.[0] || project.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover blur-2xl scale-125 opacity-40"
                  />
                  <img
                    src={selectedGalleryImg || project.gallery?.[0] || project.image}
                    alt={project.title}
                    className="relative h-full w-full object-contain"
                  />
                </div>

                {project.gallery && project.gallery.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                    {project.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedGalleryImg(img)}
                        aria-label={`Screenshot ${i + 1}`}
                        className={`relative aspect-video w-24 shrink-0 overflow-hidden rounded-xl border bg-[#24152F] transition-all cursor-pointer ${
                          (selectedGalleryImg || project.gallery?.[0]) === img
                            ? 'border-[#6D4AFF] ring-2 ring-[#6D4AFF]/40'
                            : 'border-[#E9C7D4]/20 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt="" className="h-full w-full object-contain" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#352044]/60 border border-[#E9C7D4]/15 flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-[#8D6A91] uppercase">
                    {metric.label}
                  </span>
                  <div className="my-1.5 text-xl sm:text-2xl font-bold text-[#F8F5F2] font-mono tabular-nums">
                    {metric.value}
                  </div>
                  {metric.detail && (
                    <span className="text-[11px] text-[#E9C7D4]/70 leading-snug">
                      {metric.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Role & Core Highlights */}
            <div className="p-5 rounded-2xl bg-[#352044]/40 border border-[#E9C7D4]/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C98FA8]">
                <Layers className="w-4 h-4 text-[#6D4AFF]" />
                <span>My Role & Contributions</span>
              </div>
              <div className="text-sm font-semibold text-[#F8F5F2]">
                {project.role}
              </div>
              {project.roleHighlights && (
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#E9C7D4]/80">
                  {project.roleHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C98FA8] mt-1">›</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Methodology & Analytical Approach with Stepper */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-[#C98FA8]">
                Methodology & Analytical Approach
              </div>
              <Stepper
                initialStep={1}
                backButtonText="Previous"
                nextButtonText="Next"
              >
                {project.approach.map((item, idx) => (
                  <Step key={idx}>
                    <div className="space-y-2 py-1">
                      <div className="flex items-center gap-2.5">
                        <span className="w-7 h-7 rounded-xl bg-[#6D4AFF]/30 border border-[#6D4AFF]/50 text-[#F8F5F2] flex items-center justify-center text-xs font-mono font-bold">
                          0{idx + 1}
                        </span>
                        <h4 className="text-sm sm:text-base font-bold text-[#F8F5F2]">
                          Methodology Phase 0{idx + 1}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-[#E9C7D4]/90 leading-relaxed pl-9">
                        {item}
                      </p>
                    </div>
                  </Step>
                ))}
              </Stepper>
            </div>

            {/* Interactive Project Journey */}
            {project.journey && project.journey.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C98FA8]">
                    <Compass className="w-4 h-4 text-[#6D4AFF]" />
                    <span>Project Execution Journey</span>
                  </div>
                  <span className="text-xs text-[#8D6A91] font-mono">
                    Step {activeJourneyIndex + 1} of {project.journey.length}
                  </span>
                </div>

                {/* Journey Steps Selector Ribbon */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  {project.journey.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveJourneyIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 border ${
                        activeJourneyIndex === idx
                          ? 'bg-[#6D4AFF] text-white border-[#E9C7D4] shadow-md shadow-[#6D4AFF]/20'
                          : 'bg-[#352044]/60 text-[#E9C7D4]/80 border-[#E9C7D4]/10 hover:border-[#C98FA8]/40 hover:text-white'
                      }`}
                    >
                      <span className="text-[10px] font-mono opacity-70">0{idx + 1}.</span>
                      <span>{step.phase}</span>
                    </button>
                  ))}
                </div>

                {/* Active Journey Card */}
                <div className="p-5 rounded-2xl bg-[#352044]/70 border border-[#C98FA8]/30 space-y-2">
                  <div className="text-sm font-bold text-[#F8F5F2] flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[#6D4AFF]/40 text-[#E9C7D4] font-mono">
                      Phase: {project.journey[activeJourneyIndex].phase}
                    </span>
                    <span>{project.journey[activeJourneyIndex].title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#E9C7D4]/90 leading-relaxed">
                    {project.journey[activeJourneyIndex].desc}
                  </p>
                </div>
              </div>
            )}

            {/* Key Insights */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C98FA8]">
                <Lightbulb className="w-4 h-4 text-[#C98FA8]" />
                <span>Key Quantitative Insights & Findings</span>
              </div>
              <div className="space-y-2.5">
                {project.keyInsights.map((insight, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#352044]/60 border-l-4 border-l-[#6D4AFF] border border-[#E9C7D4]/10 text-xs sm:text-sm text-[#F8F5F2] leading-relaxed"
                  >
                    {insight}
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables / Outcomes */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C98FA8]">
                <FileText className="w-4 h-4 text-[#6D4AFF]" />
                <span>Deliverables & Outputs</span>
              </div>
              <ul className="space-y-2">
                {project.outcomes.map((outcome, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-[#E9C7D4]/85"
                  >
                    <ChevronRight className="w-4 h-4 text-[#6D4AFF] shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Recommendations (if available) */}
            {project.recommendations && project.recommendations.length > 0 && (
              <div className="p-5 rounded-2xl bg-[#352044]/50 border border-[#C98FA8]/30 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C98FA8]">
                  Strategic Recommendations
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#E9C7D4]/90">
                  {project.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#C98FA8] font-bold">›</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tools Used (Clean unboxed tags) */}
            <div className="pt-4 border-t border-[#E9C7D4]/10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-[#8D6A91] mr-2">Tools & Tech:</span>
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#352044] text-[11px] font-mono text-[#E9C7D4] border border-[#E9C7D4]/15"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
