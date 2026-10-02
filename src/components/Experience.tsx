import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCE_DATA, RoleRecord } from '../data/experienceData';
import { ChevronDown, Briefcase, Calendar, MapPin, Building, Users } from 'lucide-react';

export default function Experience() {
  const [expandedOrgs, setExpandedOrgs] = useState<Record<string, boolean>>({
    'HIMTI BINUS University': true,
    'IMCB — International Marketing Community of BINUS': true,
    'BINUS University': true,
    'World Cleanup Day Indonesia': false,
  });

  const toggleOrg = (orgName: string) => {
    setExpandedOrgs((prev) => ({
      ...prev,
      [orgName]: !prev[orgName],
    }));
  };

  return (
    <section id="experience" className="section-y relative border-t border-[#E9C7D4]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#C98FA8] uppercase mb-2">
            <span>04</span>
            <span aria-hidden="true" className="text-[#8D6A91]">/</span>
            <span>EXPERIENCE & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F5F2] [text-wrap:balance]">
            Experience & Leadership
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#E9C7D4]/80 max-w-xl">
            Documented leadership roles, data operations, event logistics, and community volunteer initiatives.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#E9C7D4]/20 space-y-6">
          {EXPERIENCE_DATA.map((org, index) => {
            const isExpanded = !!expandedOrgs[org.organization];
            return (
              <div key={org.organization} className="relative group">
                {/* Timeline node bullet */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#24152F] border-2 border-[#6D4AFF] group-hover:border-[#C98FA8] transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E9C7D4]" />
                </div>

                {/* Organization Container Card */}
                <div className="rounded-3xl bg-[#2B1A38]/70 border border-[#E9C7D4]/15 overflow-hidden transition-all duration-200 hover:border-[#C98FA8]/40 shadow-xl shadow-[#24152F]/40">
                  {/* Org Header (Clickable Accordion) */}
                  <div
                    onClick={() => toggleOrg(org.organization)}
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#352044]/50 hover:bg-[#352044]/80 transition-colors select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Building className="w-4 h-4 text-[#C98FA8]" />
                        <h3 className="text-lg sm:text-xl font-bold text-[#F8F5F2]">
                          {org.organization}
                        </h3>
                      </div>
                      {org.summary && (
                        <p className="text-xs sm:text-sm text-[#E9C7D4]/75 max-w-2xl font-normal">
                          {org.summary}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      {org.totalDuration && (
                        <span className="text-xs font-mono text-[#C98FA8] px-2.5 py-1 rounded-md bg-[#24152F] border border-[#E9C7D4]/15 whitespace-nowrap">
                          {org.totalDuration}
                        </span>
                      )}
                      <div className="p-1.5 rounded-full bg-[#24152F] text-[#E9C7D4] transition-transform duration-200">
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isExpanded ? 'rotate-180 text-white' : ''
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expanded Roles Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="px-6 py-4 divide-y divide-[#E9C7D4]/10"
                      >
                        {org.roles.map((role: RoleRecord, rIdx) => (
                          <div key={rIdx} className="py-4 first:pt-2 last:pb-2 space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm sm:text-base font-semibold text-[#F8F5F2]">
                                  {role.title}
                                </span>
                                {role.type && (
                                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#352044] text-[#E9C7D4] border border-[#E9C7D4]/15">
                                    {role.type}
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-3 text-xs text-[#8D6A91] font-mono">
                                <span className="flex items-center gap-1 text-[#C98FA8]">
                                  <Calendar className="w-3.5 h-3.5" />
                                  <span>{role.period}</span>
                                </span>
                                {role.duration && (
                                  <span className="opacity-80">({role.duration})</span>
                                )}
                              </div>
                            </div>

                            {role.location && (
                              <div className="flex items-center gap-1.5 text-xs text-[#8D6A91]">
                                <MapPin className="w-3 h-3 text-[#C98FA8]" />
                                <span>{role.location}</span>
                              </div>
                            )}

                            {role.description && (
                              <p className="text-xs sm:text-sm text-[#E9C7D4]/85 leading-relaxed pt-1 font-normal">
                                {role.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
