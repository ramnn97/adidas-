# Awwwards-Winning 3D adidas Landing Page (Next.js + Three.js)


<div style="display: flex; flex-direction: column; width: 100%; gap: 20px; align-items: center;"> 
  <img src="https://github.com/user-attachments/assets/1d49ff99-c1a9-4495-9a56-f9c4ec38e346" alt="Live Demo" style="width: 100%; height: auto; max-width: 100%; border-radius: 8px;" /> 
  <img src="https://github.com/user-attachments/assets/80a9dabc-71b7-48c9-a106-44e0f8748b34" alt="Main Model" style="width: 100%; height: auto; max-width: 100%; border-radius: 8px;" /> 
  <img src="https://github.com/user-attachments/assets/65c17bb5-a012-42c5-842e-f25c2a751f69" alt="All Models" style="width: 100%; height: auto; max-width: 100%; border-radius: 8px;" />
</div>


A polished, scroll-animated **3D landing page** built with Next.js, React Three Fiber, Three.js, and GSAP—designed to hit Awwwards-level polish.

---

## 📚 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [What You’ll Learn](#-what-you'll-learn)
- [Assets](#-assets)
- [Contributing](#-contributing)
- [Contact Me](#-contact-me)
- [Like This Project?](#-like-this-project)

---

## ✨ Features

- 🔥 3D visuals powered by **React Three Fiber** and **Drei**
- ⚡ Smooth transitions and scroll-based animations using **Framer Motion**
- 🎨 Clean, responsive UI with **TailwindCSS**
- 💌 Working contact form using **EmailJS**
- 🧱 Beautiful UI enhancements with **Aceternity UI** and **Magic UI**
- 🚀 Lightning-fast development with **Vite**

---

## 📁 Project Structure

```bash
app/
 ├── shirts/[slug]/page.tsx   # Dynamic product routes
 ├── layout.tsx               # Root layout
 ├── page.tsx                 # Main landing page
components/
 ├── Header.tsx / Footer.tsx  # UI components
 ├── Scene.tsx / Rig.tsx      # 3D scene setup
 ├── ScrollIndicator.tsx      # UI + animation helper
 ├── LoadingSkeleton.tsx      # Custom loader
 ├── FirstGrayModel.tsx       # 3D product models
 └── ViewCanvas.tsx           # Three.js canvas wrapper
lib/
 ├── colors.ts                # Theme colors
 ├── material.ts              # Reusable materials
 ├── patchThreeLoadingManager.ts # Preloading manager
 ├── useFirstAnimation.ts     # Custom animation hook
 └── useTextures.ts           # Texture loading helper
public/
 ├── icons/                   # Static icons
 ├── models/                  # 3D models
 ├── test/                    # Misc assets
 └── textures/                # Texture assets
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 15.x  
- npm or Yarn or pnpm  
- Basic familiarity with React / Three.js  

### Installation

```bash
git clone https://github.com/Ali-Sanati/awwwards-adidas.git
cd awwwards-adidas
npm install
```

### Development

```bash
npm run dev
```
Open http://localhost:3000.

### Production Build

```bash
npm run build
npm run start
```



## 📖 Contributing

Contributions are welcome! If you spot a bug, want to add a new feature, or improve documentation:

1. Fork the repo
2. Create a branch feature/your-feature or fix/issue-name
3. Make your changes & test
4. Submit a Pull Request



[<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="22" height="22" style="vertical-align:middle;">](https://www.instagram.com/ramnn.1/) [**Instagram**](https://www.instagram.com/ramnn.1/)




