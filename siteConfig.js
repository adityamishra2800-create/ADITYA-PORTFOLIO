/**
 * Aditya Mishra - Portfolio Configuration
 * 
 * Central configuration file for all portfolio data, content, and links.
 * Easily edit personal information, project URLs, and contact details here.
 */

export const siteConfig = {
  // Personal Information
  name: "Aditya Mishra",
  title: "Aspiring Web Developer & Cybersecurity Enthusiast",
  education: "Pursuing B.Tech in Cybersecurity",
  status: "Available for Freelance Opportunities",
  
  // Contact Information
  // IMPORTANT: Replace this email with your real email address when ready!
  contactEmail: "aditya.mishra.developer@example.com",
  
  // Professional Links
  // Replace these with your actual profiles. If empty, the link will be cleanly hidden or disabled.
  socials: {
    github: "https://github.com/your-username", // Replace with your actual GitHub profile
    linkedin: "https://linkedin.com/in/your-username", // Replace with your actual LinkedIn profile
    twitter: "", // Optional: Add Twitter/X if available, or leave empty
  },

  // Hero Section
  hero: {
    greeting: "HELLO, I'M ADITYA MISHRA",
    headline: "Building Digital Experiences That Make an Impact.",
    supportingText: "I build modern, responsive websites for businesses and explore cybersecurity to create safer digital experiences.",
    badgeText: "Available for Freelance Opportunities",
    ctaPrimary: "Explore My Work",
    ctaSecondary: "Let's Work Together",
  },

  // About Section
  about: {
    heading: "A Little About Me",
    subheading: "Passionate about building intuitive web applications and exploring digital systems security.",
    bio: "I'm Aditya Mishra, a technology enthusiast currently pursuing a B.Tech in Cybersecurity. I enjoy building modern websites, learning new technologies, and understanding how digital systems work. My focus is on creating clean, responsive, user-friendly web experiences while continuously improving my development and cybersecurity skills.",
    highlights: [
      {
        title: "Web Development",
        description: "Crafting responsive, clean, and accessible web interfaces using modern standards like React, Tailwind CSS, and JavaScript.",
        icon: "Code2",
      },
      {
        title: "Cybersecurity Learning",
        description: "Exploring networking protocols, OSINT investigations, and web vulnerability concepts to build secure-by-design solutions.",
        icon: "ShieldCheck",
      },
      {
        title: "Continuous Improvement",
        description: "Dedicated to disciplined daily practice, code reviews, staying updated with emerging tech, and learning from peers.",
        icon: "TrendingUp",
      },
    ],
  },

  // Skills Section
  skillCategories: [
    {
      name: "Frontend",
      description: "Building fast, intuitive, and responsive client-side interfaces.",
      skills: [
        { name: "HTML5", badge: "Semantic Markup" },
        { name: "CSS3", badge: "Modern Layouts / Flex & Grid" },
        { name: "JavaScript", badge: "ES6+ & Async/Await" },
        { name: "React.js", badge: "Hooks & Component Architecture" },
      ],
    },
    {
      name: "Backend",
      description: "Foundational server-side development and API consumption.",
      skills: [
        { name: "Node.js", badge: "Runtime & Package Ecosystem" },
      ],
    },
    {
      name: "Programming",
      description: "Core algorithmic thinking and object-oriented programming.",
      skills: [
        { name: "Python", badge: "Scripting & Automation" },
        { name: "Java", badge: "Object-Oriented Fundamentals" },
      ],
    },
    {
      name: "Cybersecurity",
      description: "Foundational security exploration and investigative methodologies.",
      skills: [
        { name: "Networking Fundamentals", badge: "TCP/IP, DNS & HTTP/S" },
        { name: "OSINT Fundamentals", badge: "Information Gathering" },
        { name: "Web Security Learning", badge: "OWASP Concepts & Defense" },
      ],
    },
  ],

  // Featured Projects
  // NOTE: You can easily add demoUrl or codeUrl. If you don't have a live demo yet,
  // leave demoUrl as null or "" and the button will automatically hide or state "Code on Request".
  projects: [
    {
      id: "shopnova",
      name: "Shopnova",
      category: "E-Commerce Concept",
      description: "A shopping website concept focused on a clean product browsing experience and modern e-commerce design.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI"],
      // Set to your actual repo / demo URLs when ready:
      demoUrl: "https://shopnova-demo-placeholder.vercel.app", // Editable placeholder
      codeUrl: "https://github.com/your-username/shopnova", // Editable placeholder
      featured: true,
      previewType: "ecommerce",
      highlights: [
        "Interactive product catalog with category filtering",
        "Responsive shopping cart drawer with live subtotal calculation",
        "Mobile-first checkout flow mockup and clean product details view"
      ]
    },
    {
      id: "business-website",
      name: "Business Website",
      category: "Client Solution",
      description: "A responsive business website concept designed to present services, communicate value, and help customers get in touch.",
      technologies: ["HTML5", "CSS3 / Tailwind", "JavaScript", "Form UX"],
      demoUrl: "https://business-site-placeholder.vercel.app", // Editable placeholder
      codeUrl: "https://github.com/your-username/business-website-concept", // Editable placeholder
      featured: true,
      previewType: "business",
      highlights: [
        "Clear service value proposition and modern hero layout",
        "Interactive consultation scheduler and contact lead form",
        "Optimized lighthouse performance with semantic SEO structure"
      ]
    },
    {
      id: "cybersecurity-lab",
      name: "Cybersecurity Learning Lab",
      category: "Security Research",
      description: "A learning project focused on cybersecurity fundamentals, web security concepts, and ethical research.",
      technologies: ["Networking Protocols", "OSINT Tools", "Web Security", "Documentation"],
      demoUrl: null, // As specified: learning project / lab documentation; not an invented live app
      codeUrl: "https://github.com/your-username/cybersecurity-learning-lab", // Editable placeholder for lab notes/scripts
      featured: true,
      previewType: "security",
      highlights: [
        "Documented analysis of OWASP Top 10 web vulnerabilities",
        "Packet capture and network traffic analysis writeups (Wireshark/TCP)",
        "Open-source intelligence (OSINT) workflows and reconnaissance notes"
      ]
    },
  ],

  // Services Section
  services: [
    {
      id: "business-website",
      title: "Business Website Development",
      description: "Responsive websites that help businesses establish a professional online presence.",
      icon: "Globe",
      features: [
        "Tailored responsive layouts for desktop, tablet, and mobile",
        "Clean, semantic code structure optimized for fast loading",
        "Easy-to-navigate information architecture for your customers",
        "Integration of contact points and lead generation forms",
      ],
      projectTypeSelect: "Business Website Development",
    },
    {
      id: "landing-page",
      title: "Landing Page Design",
      description: "Focused landing pages designed to communicate a clear message and guide visitors toward an action.",
      icon: "Layout",
      features: [
        "High-impact above-the-fold value proposition",
        "Strategic call-to-action placement to boost conversions",
        "Fast-loading assets and lightweight styling",
        "Clear feature highlights and objection handling sections",
      ],
      projectTypeSelect: "Landing Page Design",
    },
    {
      id: "website-redesign",
      title: "Website Redesign",
      description: "Modernize existing websites with improved layout, usability, responsiveness, and visual consistency.",
      icon: "RefreshCw",
      features: [
        "Visual audit and modern dark or brand-aligned UI upgrade",
        "Fixing mobile responsiveness and broken viewport layouts",
        "Enhanced typography, spacing, and micro-interactions",
        "Cleaner codebase for easier ongoing maintenance",
      ],
      projectTypeSelect: "Website Redesign",
    },
  ],

  // Why Work With Me Section
  whyWorkWithMe: [
    {
      title: "Responsive-First Design",
      description: "Every page is crafted to look crisp and operate effortlessly on mobile phones, tablets, laptops, and ultra-wide screens.",
      icon: "Smartphone",
    },
    {
      title: "Clean, Organized Implementation",
      description: "Well-structured, readable code with reusable components and predictable styling that makes future updates straightforward.",
      icon: "Code",
    },
    {
      title: "Clear Communication",
      description: "Honest status updates, prompt replies, and collaborative discussions throughout the design and development process.",
      icon: "MessageSquare",
    },
    {
      title: "Willingness to Learn & Improve",
      description: "High enthusiasm for mastering new tools, adapting to specific project requirements, and incorporating client feedback.",
      icon: "Sparkles",
    },
    {
      title: "Attention to Detail",
      description: "Careful focus on spacing, typography hierarchy, visual consistency, and subtle interaction touches that elevate the experience.",
      icon: "CheckCircle2",
    },
  ],

  // Contact Section Info
  contact: {
    heading: "Have a Project in Mind?",
    supportingText: "Tell me what you're building. I'd be happy to discuss your website requirements.",
    projectTypes: [
      "Business Website Development",
      "Landing Page Design",
      "Website Redesign",
      "Other Project Inquiry",
    ],
  },
};
