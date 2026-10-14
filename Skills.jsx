import React from 'react';
import { Layout, Server, Code2, ShieldCheck, Check, Sparkles, Terminal } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const categoryIcons = {
  Frontend: Layout,
  Backend: Server,
  Programming: Code2,
  Cybersecurity: ShieldCheck,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden border-t border-white/[0.05]"
      aria-label="Skills &amp; Technologies"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-accent/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-mono tracking-wider uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Foundations</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Practical skills in modern web development and foundational cybersecurity practices. Grounded in solid fundamentals without exaggerated claims.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {siteConfig.skillCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Terminal;
            return (
              <div
                key={category.name}
                className="p-7 rounded-2xl bg-dark-card border border-white/[0.08] hover:border-electric/30 hover:bg-dark-cardHover/70 transition-all duration-300 shadow-card-subtle flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-white/[0.06] mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.03] group-hover:bg-electric/15 border border-white/[0.08] group-hover:border-electric/30 flex items-center justify-center text-slate-300 group-hover:text-electric transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-white group-hover:text-electric-light transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white/[0.02] px-2.5 py-1 rounded border border-white/[0.04]">
                      {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-[#090D17]/80 border border-white/[0.05] hover:border-white/[0.12] transition-all flex flex-col justify-between space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">
                            {skill.name}
                          </span>
                          <Check className="w-3.5 h-3.5 text-cyan-accent opacity-80" />
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Micro note footer */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Category: {category.name}</span>
                  <span className="text-slate-400">Active Practice</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Note Below Grid */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-xl mx-auto">
            &bull; Skills reflect actual technologies actively studied and practiced during coursework and personal projects.
          </p>
        </div>

      </div>
    </section>
  );
}
