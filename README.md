# Aditya Mishra - Premium Developer Portfolio

A modern, high-performance personal portfolio website for **Aditya Mishra**, aspiring Web Developer and Cybersecurity Enthusiast (pursuing B.Tech in Cybersecurity).

Built with **React.js**, **Tailwind CSS**, and modern web standards.

---

## 🌟 Highlights & Features

- **Aesthetic**: Deep dark navy & black theme (`#080B12`, `#0D111C`) with electric blue (`#4F8CFF`) and subtle cyan accents.
- **Typography**: Clean hierarchy with Space Grotesk (headings) and Inter (body).
- **Navigation**: Sticky navbar with section scroll spy, mobile drawer menu, and "Let's Talk" CTA.
- **Hero Section**: Above-the-fold impact with live status badge ("Available for Freelance Opportunities"), quick actions, and an interactive dual-tab tech/security terminal visual (no fake photos).
- **About Me**: Authentic biography, academic context (B.Tech in Cybersecurity), and 3 focus cards (Web Development, Cybersecurity Learning, Continuous Improvement).
- **Skills Matrix**: Categorized into Frontend, Backend, Programming, and Cybersecurity without inflated percentages.
- **Featured Projects**: Clean showcase of Shopnova, Business Website, and Cybersecurity Learning Lab with responsive mockups, tech badges, and modal overviews.
- **Services**: Business Website Development, Landing Page Design, and Website Redesign with direct 1-click consultation triggers that auto-select the project in the contact form.
- **Why Work With Me**: 5 honest pillars tailored for an early-career developer.
- **Contact & Inquiries**: Form with input validation, working `mailto:` generator that pre-fills details into your email client, and a 1-click clipboard copy fallback for webmail users.
- **Accessibility & Performance**: Visible keyboard focus states, semantic HTML, reduced-motion media query support, zero broken image dependencies, and dynamic copyright year.

---

## 📁 Project Structure

```
aditya-portfolio/
├── index.html                   # SEO meta tags, OpenGraph, fonts, SVG favicon
├── package.json                 # Dependencies (React, Tailwind CSS, Lucide icons)
├── tailwind.config.js           # Dark theme colors, typography, glow utilities
├── src/
│   ├── config/
│   │   └── siteConfig.js        # ⚡ Single source of truth for all personal data & links
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with active section spy & mobile menu
│   │   ├── Hero.jsx             # Hero with interactive terminal tabs
│   │   ├── About.jsx            # Bio and 3 focus cards
│   │   ├── Skills.jsx           # 4 skill categories
│   │   ├── Projects.jsx         # Project showcase & detail modal
│   │   ├── ProjectPreviews.jsx  # High-fidelity SVG mockups (zero external image lag)
│   │   ├── Services.jsx         # 3 service cards with project type triggers
│   │   ├── WhyWorkWithMe.jsx    # 5 collaboration pillars
│   │   ├── Contact.jsx          # Form validation, mailto link & clipboard copy
│   │   ├── Footer.jsx           # Dynamic year, wordmark, socials & back-to-top
│   │   └── Icons.jsx            # Crisp custom SVG icons (Github, LinkedIn, Twitter)
│   ├── App.jsx                  # Main application container
│   ├── index.css                # Tailwind directives, dark scrollbars, tech patterns
│   └── main.jsx                 # React root
```

---

## ⚡ Quick Start (Run Locally)

1. **Open a terminal** inside the `aditya-portfolio` folder:
   ```bash
   cd aditya-portfolio
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in `dist/`.

---

## ⚙️ How to Personalize Your Portfolio

All your data is centrally organized in `src/config/siteConfig.js`. You do not need to touch component logic to update your information!

### 1. Update Your Email Address
Open `src/config/siteConfig.js` and change:
```javascript
contactEmail: "aditya.mishra.developer@example.com",
```
to your actual email address.

### 2. Update Your Social Links
```javascript
socials: {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  twitter: "", // Leave blank if not using
}
```
*Note: If you leave a link empty, it will automatically hide.*

### 3. Update Projects & Repositories
In `siteConfig.js`, find `projects`:
- Replace `demoUrl` with your deployed URL (e.g. Vercel, Netlify). If a project does not have a live demo yet, leave it as `null` or `""` and the site will cleanly present the overview instead of creating a broken link.
- Replace `codeUrl` with your GitHub repository link.

---

## 🚀 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your repository.
4. Framework Preset: **Vite** (detected automatically).
5. Click **Deploy**. Your site will be live with a free SSL certificate.

### Deploying to Netlify
1. Go to [netlify.com](https://netlify.com).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy site**.
