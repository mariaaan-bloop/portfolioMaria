# Maria Theresia — Portfolio

Personal portfolio website of **Maria Theresia**, Business Intelligence Analyst and Computer Science student at BINUS University. It showcases data analytics, business intelligence, data engineering, business/product analysis, and system analysis projects, along with skills, experience, and achievements.

## Features

- **Hero** with a one-click **Download CV** button
- **About** and **Strengths** sections
- **Projects** with category filters and a detailed modal per project (overview, approach, tools, metrics, key insights, outcomes, and links)
- **Skills Playground** — interactive, filterable skill cards (Data, BI, Data Engineering, System, Business & Product, Design)
- **Experience** timeline grouped by organization
- **Achievements** slider with certificate previews
- **Contact** section and footer links
- Interactive touches: click-spark effect, lanyard badge, image sliders, smooth scrolling, and animated section navigation

## Featured Projects

| Project | Category |
| --- | --- |
| Customer Shopping Behavior Analysis | Data & BI |
| Brazilian Olist Big Data & Satisfaction Prediction | Data & BI |
| Customer Support Ticket Analytics | Data & BI / Data Engineering |
| Reeflection — Gamified Coral Conservation & Blue Economy | Business & Product |
| Little Thinkers — Computational Thinking EdTech | Business & Product |
| Servin — F&B Point of Sale System | System Analysis |

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for animations
- [Lucide React](https://lucide.dev/) for icons

## Getting Started

**Prerequisites:** Node.js 18 or newer

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview

# Type-check
npm run lint
```

## Project Structure

```
.
├── public/
│   └── CV_Maria_Theresia.pdf      # CV served by the Download CV button
├── src/
│   ├── assets/images/             # Profile photo, certificates, project screenshots
│   ├── components/                # Navbar, Hero, About, Projects, Skills, Experience, ...
│   ├── data/                      # Content: projects, experience, skills, strengths
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

## Updating Content

All portfolio content lives in `src/data/`, so most updates don't require touching components:

| File | What it controls |
| --- | --- |
| `projectsData.ts` | Projects, metrics, insights, and links |
| `experienceData.ts` | Organizations, roles, and achievements |
| `skillsData.ts` | Skill cards and categories |
| `strengthsData.ts` | Strengths section |

Images are loaded through `src/data/assets.ts`, which resolves everything under `src/assets/images/`. Reference an image by its path relative to that folder, for example `asset('Personal/Profile_photo.jpg')`.

### Changing the CV

1. Replace the file in `public/` (keep the same name, or rename it).
2. If you rename it, update `cvUrl` in `src/components/Hero.tsx` so it matches the file name **exactly**. A mismatch makes the dev server return `index.html`, which results in a broken "Failed to load PDF document" download.

## Deployment

The site is a static build, so it works on any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.):

```bash
npm run build
```

Deploy the generated `dist/` folder. If you host under a sub-path (e.g. GitHub Pages at `/repo-name/`), set `base` in `vite.config.ts` and adjust `cvUrl` accordingly.

## Connect

- GitHub: [mariaaan-bloop](https://github.com/mariaaan-bloop)
- LinkedIn: [Maria Theresia](https://www.linkedin.com/in/maria-theresia-870303325/)

## License

Source code is licensed under Apache-2.0. Portfolio content (text, project write-ups, images, certificates, and CV) belongs to Maria Theresia and may not be reused without permission.
