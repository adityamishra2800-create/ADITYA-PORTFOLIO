import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle2, Copy, AlertCircle, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: siteConfig.contact.projectTypes[0],
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDetails, setCopiedDetails] = useState(false);
  const [isPrepared, setIsPrepared] = useState(false);

  // Sync selectedService prop with projectType dropdown
  useEffect(() => {
    if (selectedService && siteConfig.contact.projectTypes.includes(selectedService)) {
      setFormData((prev) => ({ ...prev, projectType: selectedService }));
    }
  }, [selectedService]);

  const validate = (fieldValues = formData) => {
    const newErrors = {};

    if ('name' in fieldValues) {
      if (!fieldValues.name.trim()) {
        newErrors.name = 'Please provide your name.';
      } else if (fieldValues.name.trim().length < 2) {
        newErrors.name = 'Name must be at least 2 characters.';
      }
    }

    if ('email' in fieldValues) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!fieldValues.email.trim()) {
        newErrors.email = 'Please provide your email address.';
      } else if (!emailRegex.test(fieldValues.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if ('message' in fieldValues) {
      if (!fieldValues.message.trim()) {
        newErrors.message = 'Please provide details about your project.';
      } else if (fieldValues.message.trim().length < 10) {
        newErrors.message = 'Message should be at least 10 characters long.';
      }
    }

    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate({ [field]: formData[field] });
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setIsPrepared(false);

    if (touched[name]) {
      const fieldErrors = validate({ [name]: value });
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Aditya,\n\n` +
      `My Name: ${formData.name}\n` +
      `My Email: ${formData.email}\n` +
      `Project Category: ${formData.projectType}\n\n` +
      `Project Requirements:\n${formData.message}\n\n` +
      `-- Sent via your portfolio contact form --`
    );
    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsPrepared(true);
      // Trigger the mailto client with pre-filled details
      window.location.href = generateMailtoUrl();
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      // Fallback
    }
  };

  const copyFormattedDetails = async () => {
    try {
      const text =
        `To: ${siteConfig.contactEmail}\n` +
        `Subject: Project Inquiry: ${formData.projectType} - from ${formData.name}\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Project Type: ${formData.projectType}\n\n` +
        `Message:\n${formData.message}`;
      await navigator.clipboard.writeText(text);
      setCopiedDetails(true);
      setTimeout(() => setCopiedDetails(false), 3000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden border-t border-white/[0.05]"
      aria-label="Contact Section"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-electric/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 border border-electric/20 text-electric text-xs font-mono tracking-wider uppercase font-medium">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {siteConfig.contact.heading}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {siteConfig.contact.supportingText}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-dark-card border border-white/[0.08] shadow-card-subtle space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-electric/15 border border-electric/30 flex items-center justify-center text-electric">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-white text-base">Direct Email</h3>
                  <p className="text-xs text-slate-400 font-mono">Open for project discussions</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#080B12] border border-white/[0.06] flex items-center justify-between gap-2">
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-xs sm:text-sm font-mono text-cyan-accent hover:underline truncate"
                  title="Send direct email"
                >
                  {siteConfig.contactEmail}
                </a>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedEmail && (
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Email address copied to clipboard!</span>
                </div>
              )}
            </div>

            {/* Response Time & Collaboration Card */}
            <div className="p-6 rounded-2xl bg-dark-card border border-white/[0.08] shadow-card-subtle space-y-4 text-xs text-slate-400">
              <h4 className="font-display font-semibold text-white text-sm">
                What you can expect:
              </h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric mt-1.5 shrink-0"></span>
                  <span>Direct, transparent communication regarding timelines and scope.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent mt-1.5 shrink-0"></span>
                  <span>Modern, clean code with responsive design tested on multiple screen sizes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                  <span>No hidden overheads or unneeded dependencies.</span>
                </li>
              </ul>
            </div>

            {/* Notice regarding backend setup */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <AlertCircle className="w-3.5 h-3.5 text-electric" />
                <span>Form Submission Mechanism</span>
              </div>
              <p>
                To avoid fake confirmations, submitting this form opens your email client directly via <code className="text-cyan-accent">mailto:</code> with all filled fields pre-formatted.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-dark-card border border-white/[0.08] shadow-2xl relative">
              
              <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name <span className="text-electric">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    placeholder="e.g. Jane Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-[#090D17] border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      touched.name && errors.name
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/[0.1] focus:border-electric'
                    }`}
                    aria-invalid={touched.name && !!errors.name}
                    aria-describedby={touched.name && errors.name ? 'name-error' : undefined}
                    required
                  />
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs text-rose-400 font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Email <span className="text-electric">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    placeholder="e.g. jane@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#090D17] border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      touched.email && errors.email
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/[0.1] focus:border-electric'
                    }`}
                    aria-invalid={touched.email && !!errors.email}
                    aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                    required
                  />
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs text-rose-400 font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Project Type Dropdown */}
                <div>
                  <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#090D17] border border-white/[0.1] text-white text-sm focus:outline-none focus:border-electric transition-colors appearance-none cursor-pointer"
                  >
                    {siteConfig.contact.projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#090D17] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Project Details / Requirements <span className="text-electric">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Tell me about what you are building, design preferences, timeline, and goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#090D17] border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-y ${
                      touched.message && errors.message
                        ? 'border-rose-500/80 focus:border-rose-500'
                        : 'border-white/[0.1] focus:border-electric'
                    }`}
                    aria-invalid={touched.message && !!errors.message}
                    aria-describedby={touched.message && errors.message ? 'message-error' : undefined}
                    required
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-rose-400 font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-electric hover:bg-electric-hover shadow-md hover:shadow-glow-md border border-electric/40 transition-all duration-200 active:scale-98 focus-visible:ring-2 focus-visible:ring-electric"
                  >
                    <span>Send Message (via Mail Client)</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {/* Secondary copy fallback button */}
                  <button
                    type="button"
                    onClick={copyFormattedDetails}
                    disabled={!formData.name || !formData.message}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Copy formatted message to paste into webmail (Gmail/Outlook)"
                  >
                    {copiedDetails ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Details Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Details</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Confirmation Box when prepared */}
                {isPrepared && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 space-y-1.5 animate-fade-in">
                    <div className="font-semibold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Email Client Prompted</span>
                    </div>
                    <p className="text-slate-300">
                      Your default mail program should now open with your filled details. If your client didn't open automatically, click <strong>"Copy Details"</strong> and email directly to <code className="text-cyan-accent font-mono">{siteConfig.contactEmail}</code>.
                    </p>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
