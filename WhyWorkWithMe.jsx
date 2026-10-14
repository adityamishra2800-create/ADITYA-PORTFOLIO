import React from 'react';
import { Smartphone, Code, MessageSquare, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const iconMap = {
  Smartphone: Smartphone,
  Code: Code,
  MessageSquare: MessageSquare,
  Sparkles: Sparkles,
  CheckCircle2: CheckCircle2,
};

export default function WhyWorkWithMe() {
  return (
    <section
      className="py-20 relative overflow-hidden border-t border-white/[0.05]"
      aria-label="Why Work With Me"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-mono tracking-wider uppercase font-medium">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Collaboration Values</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Why Work With Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Straightforward collaboration built on genuine dedication, clean code craftsmanship, and reliable communication.
          </p>
        </div>

        {/* 5-Item Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.whyWorkWithMe.map((item, idx) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-dark-card border border-white/[0.08] hover:border-electric/30 hover:bg-dark-cardHover transition-all duration-300 shadow-card-subtle flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.03] group-hover:bg-electric/15 border border-white/[0.08] group-hover:border-electric/30 flex items-center justify-center text-slate-300 group-hover:text-electric transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base sm:text-lg text-white group-hover:text-electric-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Commitment 0{idx + 1}</span>
                  <span className="text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity">Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
