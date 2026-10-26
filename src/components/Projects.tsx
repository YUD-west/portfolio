import React, { useState } from 'react';
import { ArrowUpRight, Github, Info, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filters = ['All', 'Live', 'In Progress'];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Live') return p.status === 'Live';
    if (selectedFilter === 'In Progress') return p.status === 'In Development';
    return true;
  });

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] scroll-mt-12"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-lime-400 uppercase tracking-widest">
              Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Work
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl">
              A selection of web applications, tools, and projects I've built and am actively developing.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121212] border border-white/10 rounded-lg">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                type="button"
                className={`text-xs px-3 py-1.5 rounded-md transition-all font-mono ${
                  selectedFilter === f
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isLive = project.status === 'Live';

            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between bg-[#111111] border border-white/[0.08] hover:border-lime-400/40 rounded-xl p-6 transition-all duration-200 hover:bg-[#141414]"
              >
                <div className="space-y-4">
                  {/* Meta Top Row: Category & Status */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/20 text-[11px] font-medium">
                      {project.category}
                    </span>

                    {isLive ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/30 text-[11px] font-medium">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lime-400"></span>
                        </span>
                        Live
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-[#181818] text-zinc-400 border border-white/5 text-[11px]">
                        In Progress
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-lime-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-zinc-500 group-hover:text-lime-400 p-1"
                        aria-label={`View details for ${project.title}`}
                        title="View details"
                      >
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#181818] border border-white/5 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded bg-[#181818] text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    type="button"
                    className="text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-lime-400" />
                    <span>Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded bg-[#181818] text-zinc-400 hover:text-white border border-white/5 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                        title="View GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded bg-white text-black font-semibold text-[11px] hover:bg-lime-400 transition-colors flex items-center gap-1"
                        aria-label={`Open live deployment for ${project.title}`}
                        title="Visit Live"
                      >
                        <span>Visit</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
