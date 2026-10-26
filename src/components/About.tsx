import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="about"
      aria-label="About Me"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-xs text-lime-400 uppercase tracking-widest">
            About
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Background & Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4 text-zinc-300 text-base leading-relaxed">
            {personal.bioLong.map((paragraph, index) => (
              <p key={index} className="text-zinc-300">
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <div className="p-5 rounded-lg bg-[#111111] border border-white/[0.08] space-y-4">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-white border-b border-white/5 pb-2">
                Overview
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-zinc-500 block font-mono">Location</span>
                  <span className="text-zinc-200 font-medium">Ethiopia</span>
                </div>

                <div>
                  <span className="text-zinc-500 block font-mono">Background</span>
                  <span className="text-zinc-200 font-medium">Self-Taught Developer</span>
                </div>

                <div>
                  <span className="text-zinc-500 block font-mono">Core Focus</span>
                  <span className="text-zinc-200 font-medium">Full-Stack & Applied AI/ML</span>
                </div>

                <div>
                  <span className="text-zinc-500 block font-mono">Primary Stack</span>
                  <span className="text-zinc-200 font-medium">React, TypeScript, Node.js, Python</span>
                </div>

                <div>
                  <span className="text-zinc-500 block font-mono">Status</span>
                  <span className="text-lime-400 font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
