import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Shield, Terminal, Cpu, CheckCircle2, Lock, Sparkles, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('code');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-electric/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-cyan-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      {/* Subtle tech grid background */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-card border border-white/[0.08] shadow-card-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
                {siteConfig.hero.badgeText}
              </span>
            </div>

            {/* Small Introduction */}
            <div className="text-xs sm:text-sm font-mono tracking-widest uppercase text-electric font-semibold flex items-center gap-2">
              <span className="w-5 h-[1px] bg-electric/60"></span>
              <span>{siteConfig.hero.greeting}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-tight text-white">
              Building Digital Experiences That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric via-[#72A4FF] to-cyan-accent">
                Make an Impact.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {siteConfig.hero.supportingText}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-electric hover:bg-electric-hover rounded-xl shadow-md hover:shadow-glow-md border border-electric/40 transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-electric"
              >
                <span>{siteConfig.hero.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-dark-card hover:bg-dark-cardHover rounded-xl border border-white/[0.12] hover:border-white/[0.25] transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-electric"
              >
                <span>{siteConfig.hero.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4 text-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Key Value Micro-pills */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <Cpu className="w-3.5 h-3.5 text-electric" />
                <span>Responsive Frontend</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <Shield className="w-3.5 h-3.5 text-cyan-accent" />
                <span>Cybersecurity Mindset</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Clean &amp; Accessible Code</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Abstract Tech / Code Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative behind glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric/20 to-cyan-accent/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

              {/* Terminal Container */}
              <div className="relative rounded-2xl bg-dark-card border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-left">
                
                {/* Window Chrome / Header */}
                <div className="px-4 py-3 bg-[#090D17] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block"></span>
                  </div>
                  
                  {/* Interactive Tabs */}
                  <div className="flex items-center space-x-1 text-xs">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-3 py-1 rounded transition-colors ${
                        activeTab === 'code'
                          ? 'bg-white/[0.08] text-white font-medium border border-white/[0.08]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      Developer.config
                    </button>
                    <button
                      onClick={() => setActiveTab('security')}
                      className={`px-3 py-1 rounded transition-colors ${
                        activeTab === 'security'
                          ? 'bg-white/[0.08] text-white font-medium border border-white/[0.08]'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      SecurityLab.sh
                    </button>
                  </div>

                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                </div>

                {/* Tab Content 1: Developer Profile Code */}
                {activeTab === 'code' && (
                  <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-1.5 overflow-x-auto">
                    <div className="text-slate-500 italic">// Developer &amp; Cybersecurity Profile</div>
                    <div>
                      <span className="text-[#F472B6]">const</span>{' '}
                      <span className="text-[#60A5FA]">developer</span> = {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-[#34D399]">"Aditya Mishra"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">degree:</span>{' '}
                      <span className="text-[#34D399]">"B.Tech in Cybersecurity"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">focus:</span>{' '}
                      <span className="text-slate-300">[</span>
                    </div>
                    <div className="pl-8 text-[#FBBF24]">
                      "Modern Web Apps",
                    </div>
                    <div className="pl-8 text-[#FBBF24]">
                      "Responsive UI/UX",
                    </div>
                    <div className="pl-8 text-[#FBBF24]">
                      "Digital Security Fundamentals"
                    </div>
                    <div className="pl-4 text-slate-300">],</div>
                    <div className="pl-4">
                      <span className="text-slate-400">coreStack:</span>{' '}
                      <span className="text-slate-300">[</span>
                      <span className="text-cyan-accent">"React"</span>,{' '}
                      <span className="text-cyan-accent">"Tailwind"</span>,{' '}
                      <span className="text-cyan-accent">"JS"</span>,{' '}
                      <span className="text-cyan-accent">"Python"</span>
                      <span className="text-slate-300">]</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">availableForWork:</span>{' '}
                      <span className="text-[#A78BFA]">true</span>
                    </div>
                    <div>{'};'}</div>
                    <div className="pt-2 text-slate-500 flex items-center gap-2">
                      <span className="text-electric">&gt;</span>
                      <span className="text-slate-400">ready to build next-generation web experiences</span>
                      <span className="w-2 h-4 bg-electric animate-pulse inline-block align-middle"></span>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: Security Checklist */}
                {activeTab === 'security' && (
                  <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-2 overflow-x-auto">
                    <div className="text-slate-500 italic"># Network &amp; Application Security Verification</div>
                    <div className="flex items-center justify-between text-slate-400 pt-1 pb-1 border-b border-white/[0.05]">
                      <span>[OK] SSL/TLS Strict Transport</span>
                      <span className="text-emerald-400 font-semibold">Active</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-white/[0.05]">
                      <span>[OK] OWASP Top 10 Awareness</span>
                      <span className="text-emerald-400 font-semibold">Verified</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-white/[0.05]">
                      <span>[OK] Content Security Policy (CSP)</span>
                      <span className="text-emerald-400 font-semibold">Configured</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-white/[0.05]">
                      <span>[OK] Input Sanitization &amp; Validation</span>
                      <span className="text-emerald-400 font-semibold">Enforced</span>
                    </div>
                    <div className="pt-2 text-cyan-accent text-xs">
                      $ echo "Building resilient, secure web software."
                    </div>
                  </div>
                )}

                {/* Terminal Footer Status Bar */}
                <div className="px-4 py-2.5 bg-[#090D17] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Status: 200 OK</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                    <span>UTF-8</span>
                    <span>&bull;</span>
                    <span>React 18</span>
                  </div>
                </div>

              </div>

              {/* Floating Stat Badge 1 */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-xl bg-dark-surface/95 border border-white/[0.12] shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-electric/15 border border-electric/30 flex items-center justify-center text-electric">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Cybersecurity</div>
                  <div className="text-[11px] text-slate-400 font-mono">B.Tech Specialization</div>
                </div>
              </div>

              {/* Floating Stat Badge 2 */}
              <div className="absolute -top-4 -right-4 sm:-right-5 p-3 rounded-xl bg-dark-surface/95 border border-white/[0.12] shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-accent/15 border border-cyan-accent/30 flex items-center justify-center text-cyan-accent">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Modern UX/UI</div>
                  <div className="text-[11px] text-slate-400 font-mono">Clean &amp; Accessible</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
