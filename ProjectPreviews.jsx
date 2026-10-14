import React from 'react';
import { ShoppingBag, Globe, Shield, Terminal, Star, ArrowUpRight, Check, Search, Lock } from 'lucide-react';

export function ShopnovaPreview() {
  return (
    <div className="w-full h-56 sm:h-64 bg-[#0A0E1A] rounded-xl border border-white/[0.08] overflow-hidden flex flex-col font-sans select-none relative group-hover:border-electric/40 transition-colors">
      {/* Browser Bar */}
      <div className="px-3 py-2 bg-[#080B12] border-b border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>
        <div className="px-3 py-0.5 rounded bg-white/[0.05] border border-white/[0.05] font-mono text-[10px] text-slate-400 flex items-center gap-1.5">
          <Lock className="w-2.5 h-2.5 text-emerald-400" />
          <span>shopnova.store/preview</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-electric">
          <ShoppingBag className="w-3 h-3" />
          <span>Cart (2)</span>
        </div>
      </div>

      {/* Mini E-commerce Layout */}
      <div className="p-3.5 space-y-3 overflow-hidden bg-gradient-to-b from-[#0A0E1A] to-[#070A12] flex-1">
        {/* Banner */}
        <div className="p-2.5 rounded-lg bg-gradient-to-r from-electric/20 via-electric/10 to-transparent border border-electric/30 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-accent">Modern Storefront</div>
            <div className="text-xs font-bold text-white">Curated Minimal Tech &amp; Apparel</div>
          </div>
          <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-electric text-white">Browse</span>
        </div>

        {/* Product Grid Mockup */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { name: "Wireless ANC", price: "$129", tag: "Audio" },
            { name: "Mechanical 75%", price: "$95", tag: "Hardware" },
            { name: "Desk Mat Pro", price: "$32", tag: "Accessory" },
          ].map((item, i) => (
            <div key={i} className="p-2 rounded-lg bg-[#0F1424] border border-white/[0.06] flex flex-col justify-between">
              <div className="w-full h-12 rounded bg-white/[0.03] border border-white/[0.04] flex items-center justify-center mb-1.5">
                <ShoppingBag className="w-4 h-4 text-slate-500" />
              </div>
              <div className="text-[10px] font-medium text-slate-200 truncate">{item.name}</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] font-bold text-electric">{item.price}</span>
                <span className="text-[8px] font-mono text-slate-400">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BusinessWebsitePreview() {
  return (
    <div className="w-full h-56 sm:h-64 bg-[#0A0E1A] rounded-xl border border-white/[0.08] overflow-hidden flex flex-col font-sans select-none relative group-hover:border-cyan-accent/40 transition-colors">
      {/* Browser Bar */}
      <div className="px-3 py-2 bg-[#080B12] border-b border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>
        <div className="px-3 py-0.5 rounded bg-white/[0.05] border border-white/[0.05] font-mono text-[10px] text-slate-400 flex items-center gap-1.5">
          <Lock className="w-2.5 h-2.5 text-emerald-400" />
          <span>apexconsulting.com</span>
        </div>
        <Globe className="w-3.5 h-3.5 text-cyan-accent" />
      </div>

      {/* Mini Business Landing Page Layout */}
      <div className="p-3.5 space-y-3 bg-gradient-to-b from-[#0A0E1A] to-[#070A12] flex-1">
        {/* Navigation Mockup */}
        <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/[0.05] pb-2">
          <div className="font-bold text-white flex items-center gap-1">
            <span className="w-2 h-2 rounded bg-cyan-accent"></span>
            <span>APEX SOLUTIONS</span>
          </div>
          <div className="flex gap-2 font-mono text-[9px]">
            <span>Services</span>
            <span>Case Studies</span>
            <span className="text-cyan-accent font-semibold">Get Quote</span>
          </div>
        </div>

        {/* Hero Banner Mockup */}
        <div className="py-2 space-y-1.5">
          <div className="text-xs font-bold text-white tracking-tight">
            Accelerating Enterprise Digital Transformation
          </div>
          <div className="text-[10px] text-slate-400 leading-snug">
            Streamlining customer acquisition with modern responsive web architecture.
          </div>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="p-1.5 rounded bg-[#0F1424] border border-white/[0.06] text-center">
            <div className="text-[11px] font-bold text-cyan-accent">99.9%</div>
            <div className="text-[8px] text-slate-400">Reliability</div>
          </div>
          <div className="p-1.5 rounded bg-[#0F1424] border border-white/[0.06] text-center">
            <div className="text-[11px] font-bold text-electric">&lt; 0.8s</div>
            <div className="text-[8px] text-slate-400">Load Time</div>
          </div>
          <div className="p-1.5 rounded bg-[#0F1424] border border-white/[0.06] text-center">
            <div className="text-[11px] font-bold text-emerald-400">100%</div>
            <div className="text-[8px] text-slate-400">Responsive</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CybersecurityLabPreview() {
  return (
    <div className="w-full h-56 sm:h-64 bg-[#0A0E1A] rounded-xl border border-white/[0.08] overflow-hidden flex flex-col font-mono select-none relative group-hover:border-emerald-400/40 transition-colors">
      {/* Terminal Bar */}
      <div className="px-3 py-2 bg-[#080B12] border-b border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
        </div>
        <div className="px-3 py-0.5 rounded bg-white/[0.05] border border-white/[0.05] font-mono text-[10px] text-slate-400 flex items-center gap-1.5">
          <Shield className="w-2.5 h-2.5 text-emerald-400" />
          <span>aditya@sec-lab: ~/research</span>
        </div>
        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
      </div>

      {/* Mini Lab Dashboard Layout */}
      <div className="p-3 text-[11px] leading-relaxed bg-gradient-to-b from-[#0A0E1A] to-[#070A12] flex-1 space-y-1.5 text-slate-300 overflow-hidden">
        <div className="text-slate-500 text-[10px]"># Active Security Modules &amp; Recon Workflows</div>
        <div className="flex items-center justify-between text-[10px] bg-white/[0.02] p-1.5 rounded border border-white/[0.04]">
          <span className="text-cyan-accent">[MOD-01] OWASP Top 10 Audit Notes</span>
          <span className="text-emerald-400 font-bold">Documented</span>
        </div>
        <div className="flex items-center justify-between text-[10px] bg-white/[0.02] p-1.5 rounded border border-white/[0.04]">
          <span className="text-electric">[MOD-02] Wireshark TCP/IP Packet Captures</span>
          <span className="text-emerald-400 font-bold">Analyzed</span>
        </div>
        <div className="flex items-center justify-between text-[10px] bg-white/[0.02] p-1.5 rounded border border-white/[0.04]">
          <span className="text-amber-300">[MOD-03] OSINT Framework Reconnaissance</span>
          <span className="text-emerald-400 font-bold">Active</span>
        </div>
        <div className="text-[10px] text-slate-400 pt-1 flex items-center gap-1.5">
          <span className="text-emerald-400 font-bold">&gt;</span>
          <span>Security lab notes ready for peer review</span>
          <span className="w-1.5 h-3 bg-emerald-400 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
}
