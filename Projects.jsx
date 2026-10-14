import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, Shield, X, Info } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ShopnovaPreview, BusinessWebsitePreview, CybersecurityLabPreview } from './ProjectPreviews';
import { GithubIcon } from './Icons';

const previewComponents = {
  ecommerce: ShopnovaPreview,
  business: BusinessWebsitePreview,
  security: CybersecurityLabPreview,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden border-t border-white/[0.05]"
      aria-label="Featured Projects"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-electric/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-mono tracking-wider uppercase font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Showcase &amp; Research</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A selection of modern web concepts and documented cybersecurity research. Each project emphasizes clean implementation and real-world utility.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project) => {
            const Preview = previewComponents[project.previewType] || ShopnovaPreview;
            const hasValidDemo = project.demoUrl && project.demoUrl.startsWith('http');
            const hasValidCode = project.codeUrl && project.codeUrl.startsWith('http');

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-dark-card border border-white/[0.08] hover:border-electric/40 transition-all duration-300 shadow-card-subtle flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Visual Preview Graphic */}
                <div className="p-4 bg-dark-surface/50 border-b border-white/[0.06]">
                  <Preview />
                </div>

                {/* Project Details Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Category & Status */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-accent font-medium">
                        {project.category}
                      </span>
                      {project.id === 'cybersecurity-lab' ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                          Research &amp; Notes
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded bg-electric/10 text-electric text-[10px]">
                          Concept Demo
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-electric transition-colors">
                      {project.name}
                    </h3>

                    {/* Exact User Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology Labels */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {/* Live Demo Link: Only render if valid URL is present, never render dead '#' */}
                      {hasValidDemo ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-electric hover:bg-electric-hover transition-colors shadow-sm"
                          aria-label={`Open live demo of ${project.name}`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-colors"
                        >
                          <Info className="w-3.5 h-3.5 text-cyan-accent" />
                          <span>View Overview</span>
                        </button>
                      )}

                      {/* View Code Link: Only render if valid URL is present */}
                      {hasValidCode && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                          aria-label={`View code repository for ${project.name}`}
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    {/* Details modal trigger button */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs text-slate-400 hover:text-electric transition-colors flex items-center gap-1 font-mono focus-visible:ring-1 focus-visible:ring-electric rounded p-1"
                    >
                      <span>Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Configuration Notice */}
        <div className="mt-12 p-4 rounded-xl bg-dark-card/60 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-electric"></span>
            <span>All project titles, descriptions, and repositories are configured in <code className="text-slate-300 bg-white/[0.05] px-1.5 py-0.5 rounded font-mono">src/config/siteConfig.js</code>.</span>
          </div>
          <span className="text-slate-500 font-mono">Placeholder links ready for your URLs</span>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="relative w-full max-w-2xl bg-dark-card border border-white/[0.12] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors focus-visible:ring-2 focus-visible:ring-electric"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-cyan-accent uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 id="modal-project-title" className="font-display font-bold text-2xl text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Highlights */}
              {selectedProject.highlights && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Features &amp; Implementation Details
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {selectedProject.demoUrl && selectedProject.demoUrl.startsWith('http') && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-electric hover:bg-electric-hover transition-colors"
                    >
                      <span>Open Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {selectedProject.codeUrl && selectedProject.codeUrl.startsWith('http') && (
                    <a
                      href={selectedProject.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Code Repository</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
