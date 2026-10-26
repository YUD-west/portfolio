import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Send,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Clock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const { socials } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = socials.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMessage) return;

    const subject = encodeURIComponent(
      formSubject ? `[Portfolio] ${formSubject}` : `[Portfolio Message] From ${formName}`
    );
    const body = encodeURIComponent(
      `Name: ${formName}\nEmail: ${formEmail || 'Not provided'}\n\nMessage:\n${formMessage}`
    );
    const mailtoUrl = `mailto:${socials.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2">
          <span className="font-mono text-xs text-lime-400 uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl">
            Have a question, project, or opportunity? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Direct Links */}
          <div className="space-y-4">
            {/* Email Card with Copy */}
            <div className="p-4 rounded-xl bg-[#111111] border border-white/10 space-y-3">
              <span className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <Mail className="w-4 h-4 text-lime-400" />
                Email
              </span>

              <div className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-[#161616] border border-white/5 font-mono text-xs sm:text-sm text-zinc-200">
                <a
                  href={`mailto:${socials.email}`}
                  className="truncate hover:text-lime-400 transition-colors"
                >
                  {socials.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="px-2.5 py-1 rounded bg-[#222222] hover:bg-lime-400 hover:text-black text-white text-xs font-medium transition-colors flex items-center gap-1.5 shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-black" />
                      <span className="text-black">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub */}
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-xl bg-[#111111] border border-white/10 hover:border-lime-400/40 hover:bg-[#141414] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#181818] text-white border border-white/5">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-lime-400 transition-colors">
                    GitHub
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    github.com/YUD-west
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-lime-400 transition-all" />
            </a>

            {/* LinkedIn */}
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-xl bg-[#111111] border border-white/10 hover:border-lime-400/40 hover:bg-[#141414] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#181818] text-white border border-white/5">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-lime-400 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    linkedin.com/in/yusuf2537
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-lime-400 transition-all" />
            </a>

            {/* Telegram */}
            <a
              href={socials.telegram}
              target="_blank"
              rel="noreferrer"
              className="group p-4 rounded-xl bg-[#111111] border border-white/10 hover:border-lime-400/40 hover:bg-[#141414] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#181818] text-white border border-white/5">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-lime-400 transition-colors">
                    Telegram
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    t.me/SatoshiFlash
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-lime-400 transition-all" />
            </a>

            {/* Location & Timezone */}
            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-white/5 text-xs font-mono text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                Ethiopia
              </span>
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Clock className="w-3.5 h-3.5" />
                East Africa Time (UTC+3)
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#111111] border border-white/10 space-y-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Send a message
              </h3>
            </div>

            {formSubmitted && (
              <div className="p-3 rounded-lg bg-lime-400/10 border border-lime-400/30 text-lime-400 text-xs font-mono flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Message opened in email client.</span>
              </div>
            )}

            <form onSubmit={handleSendMessage} className="space-y-3.5 text-xs">
              <div>
                <label htmlFor="contact-name" className="block font-mono text-zinc-400 mb-1">
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-3 py-2 rounded-md bg-[#161616] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-mono text-zinc-400 mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 rounded-md bg-[#161616] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-mono text-zinc-400 mb-1">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  placeholder="Project inquiry / Opportunity"
                  className="w-full px-3 py-2 rounded-md bg-[#161616] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-zinc-400 mb-1">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="w-full px-3 py-2 rounded-md bg-[#161616] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:border-lime-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-md bg-white text-black font-semibold text-xs hover:bg-lime-400 transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-lime-400"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
