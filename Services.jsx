import React from 'react';
import { Globe, Layout, RefreshCw, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const serviceIcons = {
  Globe: Globe,
  Layout: Layout,
  RefreshCw: RefreshCw,
};

export default function Services({ onSelectService }) {
  const handleDiscussClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', '#contact');
    }
  };

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden border-t border-white/[0.05]"
      aria-label="Services Offered"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-accent/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-accent/10 border border-cyan-accent/20 text-cyan-accent text-xs font-mono tracking-wider uppercase font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Offerings</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Services &amp; Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Focused, high-quality frontend web solutions designed for small businesses, founders, and personal brands.
          </p>
        </div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.services.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Globe;
            return (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-dark-card border border-white/[0.08] hover:border-electric/40 hover:bg-dark-cardHover transition-all duration-300 shadow-card-subtle flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent top gradient on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-6">
                  {/* Service Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] group-hover:bg-electric/15 border border-white/[0.08] group-hover:border-electric/30 flex items-center justify-center text-slate-300 group-hover:text-electric transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  {/* Title & User Exact Description */}
                  <div className="space-y-2">
                    <h3 className="font-display font-semibold text-xl text-white group-hover:text-electric-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 pt-2 border-t border-white/[0.06]">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <Check className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Discuss Your Project CTA Button */}
                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => handleDiscussClick(service.projectTypeSelect)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/[0.04] hover:bg-electric hover:shadow-glow-sm border border-white/[0.1] hover:border-electric/40 transition-all duration-200 active:scale-98 group-hover:bg-electric/90 focus-visible:ring-2 focus-visible:ring-electric"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Realistic Scope Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-400 max-w-xl mx-auto">
            &bull; Transparent project scoping focused on reliable frontend delivery, responsiveness, and clean aesthetics.
          </p>
        </div>

      </div>
    </section>
  );
}
