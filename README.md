<div align="center">

<br/>

# ⚡ Alani Nu — Animated Landing Page

**A high-performance, scroll-driven product landing page built with React, GSAP & Tailwind CSS.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-ff69b4?style=for-the-badge&logo=netlify&logoColor=white)](https://energy-drink-gsap.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Haseeba-f/gsapawwards)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<br/>

![Project Banner](https://energy-drink-gsap.netlify.app/og-preview.png)

> *Inspired by the Alani Nu brand — this project demonstrates advanced frontend animation techniques, scroll storytelling, and production-quality UI design.*

<br/>

</div>

---

## 📌 Overview

This is a **fully animated, scroll-driven product landing page** built as a frontend engineering challenge. The goal: replicate the kinetic, high-energy feel of modern CPG brand websites using only React, GSAP, and Tailwind CSS — no third-party component libraries.

Every section is deliberately paced with GSAP timelines, creating a guided visual narrative from hero to call-to-action.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🎬 **Scroll-Triggered Animations** | GSAP `ScrollTrigger` drives every section reveal with precise timing and easing |
| 🌊 **Parallax Motion** | Multi-layer depth effects on hero imagery and product visuals |
| 🧃 **Product Showcase** | Animated flavor cards with hover states and staggered entry transitions |
| 🔤 **Text Kinetics** | Character-level and word-level text animations using GSAP `SplitText` patterns |
| 📱 **Fully Responsive** | Mobile-first layout with Tailwind, adapting animations for smaller viewports |
| ⚡ **Vite-Powered** | Sub-second HMR in development; optimized production bundle with tree-shaking |

---

## 🛠️ Tech Stack

```
React 18          — Component architecture & state management
GSAP 3            — Animation engine (Timeline, ScrollTrigger, Ease)
Tailwind CSS 3    — Utility-first styling & responsive design
Vite 5            — Build tooling & dev server
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 18.x`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Haseeba-f/gsapawwards.git
cd gsapawwards

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint code check
```

---

## 🗂️ Project Structure

```
gsapawwards/
├── public/               # Static assets (images, fonts)
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductSection.jsx
│   │   ├── FlavorsGrid.jsx
│   │   └── Footer.jsx
│   ├── hooks/            # Custom React hooks (useGSAP, useScrollTrigger)
│   ├── assets/           # Local images & SVGs
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # Tailwind directives & global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 🎨 Animation Architecture

Animations are organized into **three tiers**:

**1. Page Load (Orchestrated Timeline)**
```js
// Hero sequence — staged entry over 1.2s
gsap.timeline()
  .from('.hero-headline', { y: 80, opacity: 0, duration: 0.8, ease: 'power3.out' })
  .from('.hero-subtext',  { y: 40, opacity: 0, duration: 0.6 }, '-=0.4')
  .from('.hero-cta',      { scale: 0.9, opacity: 0, duration: 0.5 }, '-=0.3')
```

**2. Scroll-Triggered Sections**
```js
// Product cards — staggered reveal on scroll
gsap.from('.flavor-card', {
  scrollTrigger: { trigger: '.flavors-section', start: 'top 75%' },
  y: 60, opacity: 0, stagger: 0.15, duration: 0.7, ease: 'back.out(1.2)'
})
```

**3. Interactive Micro-animations**
```js
// Hover lift effect on product imagery
card.addEventListener('mouseenter', () =>
  gsap.to(card, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' })
)
```

---

## 📸 Screenshots

| Section | Preview |
|---|---|
| Hero | *(scroll-animated headline + product reveal)* |
| Flavors Grid | *(staggered card entry with hover states)* |
| About / Stats | *(counter animations on scroll)* |
| CTA Footer | *(parallax + fade-up)* |

> 🔗 **[View live site →](https://energy-drink-gsap.netlify.app/)**

---

## 🧠 What I Learned

- **GSAP ScrollTrigger** — pinning, scrubbing, and start/end markers to choreograph scroll-paced reveals
- **Animation performance** — using `will-change`, `transform` over layout properties, and `gsap.context()` for cleanup in React
- **Responsive motion design** — reducing or disabling animations on mobile using `matchMedia` and `prefers-reduced-motion`
- **Tailwind + GSAP integration** — separating layout (Tailwind) from motion (GSAP) cleanly without style conflicts

---

## 🌱 Roadmap

- [ ] Add cursor-tracking spotlight effect on hero
- [ ] Implement flavor filter with animated list transitions
- [ ] Add `prefers-reduced-motion` accessibility toggle
- [ ] Migrate animations to `useGSAP()` hook (GSAP React official)
- [ ] Lighthouse audit & performance optimization pass

---

## 🤝 Contributing

Contributions, issues, and feedback are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add smooth parallax on hero'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

**Built with ⚡ by [Haseeba-f](https://github.com/Haseeba-f)**

*This project is a personal creative & learning exercise. Alani Nu is a registered trademark of its respective owners.*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-energy--drink--gsap.netlify.app-ff69b4?style=flat-square)](https://energy-drink-gsap.netlify.app/)

</div>
