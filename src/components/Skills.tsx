import React from 'react';
import { Layout, Server, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const categoryIcons = [
    <Layout key="fe" className="w-4 h-4 text-lime-400" />,
    <Server key="be" className="w-4 h-4 text-lime-400" />,
    <Terminal key="prog" className="w-4 h-4 text-lime-400" />,
    <Sparkles key="ai" className="w-4 h-4 text-lime-400" />,
  ];

  return (
    <section
      id="skills"
      aria-label="Skills"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] scroll-mt-12"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-xs text-lime-400 uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technologies & Tools
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Technologies and tools I work with across frontend, backend, and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-[#111111] border border-white/[0.08] flex flex-col justify-between space-y-5"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  {categoryIcons[index % categoryIcons.length]}
                  <h3 className="font-bold text-white text-lg tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono bg-[#161616] border border-white/5 text-zinc-300"
                  >
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
