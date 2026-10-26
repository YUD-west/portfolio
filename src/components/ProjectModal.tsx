import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Cpu } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#111111] border border-white/15 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/10">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/30">
                {project.category}
              </span>

              {project.status === 'Live' ? (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/30 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                  Live
                </span>
              ) : (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/10">
                  In Progress
                </span>
              )}
            </div>

            <h3 id="modal-project-title" className="text-2xl font-bold text-white tracking-tight pt-1">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 font-mono">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg bg-[#181818] text-zinc-400 hover:text-white hover:bg-[#222222] border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-lime-400"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              About
            </h4>
            <p className="text-zinc-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-lime-400" />
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.keyHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400 mt-2 shrink-0"></span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-lime-400" />
              Stack & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#181818] border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0E0E0E] flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-md bg-[#181818] text-white border border-white/15 text-xs font-medium hover:border-lime-400/50 hover:text-lime-400 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-2 rounded-md bg-white text-black text-xs font-semibold hover:bg-lime-400 transition-colors flex items-center gap-1.5"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
