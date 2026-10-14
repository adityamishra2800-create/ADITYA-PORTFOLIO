import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const footerNavLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, '', '#home');
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', href);
    }
  };

  // Only display social links if provided and non-empty
  const hasGithub = siteConfig.socials.github && siteConfig.socials.github.startsWith('http');
  const hasLinkedin = siteConfig.socials.linkedin && siteConfig.socials.linkedin.startsWith('http');
  const hasTwitter = siteConfig.socials.twitter && siteConfig.socials.twitter.startsWith('http');

  return (
    <footer className="bg-[#05070D] border-t border-white/[0.08] pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a
              href="#home"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-electric rounded-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-dark-card border border-white/10 flex items-center justify-center text-electric">
                <Terminal className="w-4 h-4 text-electric" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-white">
                {siteConfig.name.toUpperCase()}
              </span>
            </a>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Web Developer and Cybersecurity Enthusiast. Crafting clean, responsive websites with an emphasis on performance and security fundamentals.
            </p>

            <div className="text-xs font-mono text-cyan-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-accent animate-pulse-subtle"></span>
              <span>{siteConfig.education}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3 text-left">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-electric transition-colors focus-visible:ring-1 focus-visible:ring-electric rounded py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Profiles */}
          <div className="md:col-span-3 space-y-3 text-left md:text-right">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300 font-semibold">
              Connect
            </div>
            
            <div className="flex md:justify-end gap-3 pt-1">
              {hasGithub && (
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-electric/20 border border-white/[0.08] hover:border-electric/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="Aditya Mishra GitHub profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              )}

              {hasLinkedin && (
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-electric/20 border border-white/[0.08] hover:border-electric/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="Aditya Mishra LinkedIn profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              )}

              {hasTwitter && (
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] hover:bg-electric/20 border border-white/[0.08] hover:border-electric/40 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                  aria-label="Aditya Mishra Twitter profile"
                  title="Twitter Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              )}
            </div>

            <p className="text-xs text-slate-500 font-mono pt-1">
              Social profiles configurable in <br className="hidden md:inline" />
              <code className="text-slate-400">siteConfig.js</code>
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React &amp; Tailwind CSS</span>
            
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
