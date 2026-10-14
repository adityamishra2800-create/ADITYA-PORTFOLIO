import React from 'react';
import { Code2, ShieldCheck, TrendingUp, BookOpen, Layers, Terminal, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  const iconMap = {
    Code2: Code2,
    ShieldCheck: ShieldCheck,
    TrendingUp: TrendingUp,
  };

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden border-t border-white/[0.05]"
      aria-label="About Me"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-electric/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-mono tracking-wider uppercase font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {siteConfig.about.heading}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {siteConfig.about.subheading}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story & Profile Information */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-dark-card border border-white/[0.08] shadow-card-subtle relative overflow-hidden group hover:border-white/[0.15] transition-all">
            
            {/* Ambient accent top border */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric via-cyan-accent to-transparent"></div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/30 flex items-center justify-center text-electric">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {siteConfig.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-accent">
                    {siteConfig.education}
                  </p>
                </div>
              </div>

              {/* Exact bio required by user */}
              <p className="text-slate-300 leading-relaxed text-base">
                {siteConfig.about.bio}
              </p>

              <div className="pt-2 text-xs font-mono text-slate-400 space-y-2 border-t border-white/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Current Focus:</span>
                  <span className="text-slate-300 font-medium">Frontend Web &amp; Security Lab</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Academic Track:</span>
                  <span className="text-slate-300 font-medium">B.Tech Cybersecurity</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Work Ethic:</span>
                  <span className="text-slate-300 font-medium">Honest, Curious &amp; Dedicated</span>
                </div>
              </div>
            </div>

            {/* Note banner */}
            <div className="mt-8 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-electric shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-normal">
                Committed to delivering clean, accessible web interfaces while maintaining rigorous security hygiene in code and configurations.
              </p>
            </div>

          </div>

          {/* Three Highlight Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {siteConfig.about.highlights.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || Code2;
              return (
                <div
                  key={card.title}
                  className="p-6 rounded-2xl bg-dark-card border border-white/[0.08] hover:border-electric/40 hover:bg-dark-cardHover transition-all duration-300 shadow-card-subtle flex flex-col sm:flex-row items-start sm:items-center gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] group-hover:bg-electric/15 border border-white/[0.08] group-hover:border-electric/30 flex items-center justify-center text-slate-300 group-hover:text-electric transition-all shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-semibold text-lg text-white group-hover:text-electric-light transition-colors">
                        {card.title}
                      </h4>
                      <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
