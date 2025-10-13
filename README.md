# SaasCo —  SaaS Dashboard Project

A responsive, production-ready Next.js SaaS dashboard template and component library. SaasCo provides a modern admin UI, pre-built pages, and reusable components to help teams ship dashboards and web apps faster.

Key technologies: Next.js (App Router) + React 19 + TypeScript + Tailwind CSS.

Contents
- Overview
- Feature highlights
- Quick start
- Project structure
- Page summaries (Home, About, Contact, Pricing, How it works)
- Contributing & License

Overview
--------
SaasCo is a clean, accessible and extensible dashboard template tailored for SaaS products and internal admin tools. It includes charts, calendar integration, map components, tables, forms and many UI primitives assembled into production-ready pages.

Feature highlights
------------------
- App Router based Next.js application (TypeScript)
- Tailwind CSS-driven design with dark mode support
- ApexCharts for charts and analytics
- FullCalendar for scheduling
- Vector world map via @react-jvectormap
- Reusable components: tables, forms, modals, cards, header, sidebar

Quick start (development)
-------------------------
Prerequisites:
- Node.js 18+ and npm

Run these commands in PowerShell from the repository root:

```powershell
npm install
npm run dev
```

Scripts available (see `package.json`):
- `npm run dev` — start development server
- `npm run build` — build app for production
- `npm run start` — start production server after build
- `npm run lint` — run linter

Project structure (high level)
-----------------------------
- `app/` — Next.js routes and page layouts (App Router)
- `components/` — UI components grouped by domain (charts, forms, ui, tables, header, etc.)
- `context/`, `hooks/` — app contexts and custom hooks
- `public/` — images and static assets
- `src/`, `saasco/` — additional code and type declarations

Page summaries (extracted from source)
------------------------------------

Home
- Hero and features-focused landing page with CTA.
- Highlights fast performance, user friendliness and security.
- Uses animated gradient accents and feature/stat sections.
- CTAs to Get Started and Contact.

About
- Company mission and team showcase.
- Statistics (clients, uptime, support) and team profiles with social links.
- Emphasis on empowering creators and delivering reliable tools.

Contact
- Contact form (name, email, message) with office locations.
- Provides additional contact methods: support email, phone, and support hours.

Pricing
- Tiered pricing cards: Starter (free), Pro (monthly), Enterprise (custom).
- Features list per tier and a highlighted "Most Popular" tier.
- CTA to choose plan or contact sales.

How It Works
- Simple three-step onboarding: Sign Up, Connect Your Data, Analyze & Grow.
- Clear, actionable copy and CTA to contact sales/support.

Contributing
------------
Contributions are welcome. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b my-feature`
3. Make your changes and test locally
4. Commit and push, then open a pull request

Please follow existing TypeScript and Tailwind patterns and run the linter before submitting.

License
-------
See the `LICENSE` file in the repository root for license details.

Contact / Maintainers
---------------------
Repository owner: daSoftwares

If you have questions or issues, please open an issue in the repository.

README last updated: October 13, 2025
