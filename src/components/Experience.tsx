import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-xs text-lime-400 uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work & Projects
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Software development and community initiatives.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/[0.08] space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-mono text-lime-400">
                    {exp.organization}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 bg-[#181818] px-2.5 py-1 rounded border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-[#181818] px-2.5 py-1 rounded border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {exp.description}
              </p>

              <div className="space-y-2">
                <ul className="space-y-2">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2">
                {exp.skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#181818] border border-white/5 text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
