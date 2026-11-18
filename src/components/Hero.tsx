import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal, socials } = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Introduction & Details */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            {/* Status & Location */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#121212] border border-white/10 text-xs font-mono text-zinc-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              <span className="text-white font-medium">Available for work</span>
              <span className="text-zinc-600">·</span>
              <span className="flex items-center gap-1 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                {personal.location}
              </span>
            </div>

            {/* I'M at the top of name, followed by Name & Role */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-lime-400 font-semibold tracking-widest uppercase">
                I'M
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                {personal.name}
              </h1>
              <h2 className="text-lg sm:text-2xl font-normal text-zinc-300 max-w-2xl leading-relaxed pt-1">
                Full-Stack Developer &amp; Aspiring AI/ML Engineer
              </h2>
            </div>

            {/* Confident, Natural Introduction */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              I build practical web applications, algorithmic tools, and applied AI systems. I learn by building software from the ground up and focus on solving real-world problems.
            </p>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-3 rounded-md bg-white text-black font-semibold text-sm hover:bg-lime-400 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-3 rounded-md bg-[#161616] text-white border border-white/15 font-medium text-sm hover:border-lime-400/60 hover:text-lime-400 transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 pl-0 sm:pl-3 sm:border-l sm:border-white/10">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-[#121212] border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-[#121212] border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md bg-[#121212] border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-colors"
                  aria-label="Telegram Profile"
                  title="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
            <div className="relative group w-64 sm:w-72 md:w-full max-w-[320px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#121212] border border-white/15 group-hover:border-lime-400/50 transition-all duration-300 shadow-2xl">
                <img
                  src="/yesuf-dergu.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-lg bg-[#0A0A0A]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-zinc-200">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="h-2 w-2 rounded-full bg-lime-400"></span>
                    Yesuf Dergu
                  </span>
                  <span className="text-zinc-500 text-[11px]">Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
