# Eiko Visual Website (Astro.js)

Official static website for **Eiko Visual** (`https://www.eikovisual.com`), rebuilt from WordPress/Elementor using **Astro 5** and **Astro Content Collections**. All pages, styles, and assets are 100% self-contained with zero dependency on the legacy WordPress server.

---

## Table of Contents

1. [How to Run Locally](#1-how-to-run-locally)
2. [How to Deploy](#2-how-to-deploy)
3. [How to Add a Blog / Article](#3-how-to-add-a-blog--article)
4. [How to Add a Project](#4-how-to-add-a-project)
5. [Project Structure](#5-project-structure)

---

## 1. How to Run Locally

### Prerequisites
- **Node.js** `v18.17.1+` or `v20+` / `v22+` (recommended)
- **npm** `v9+`

### Installation & Development Server

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser. The page will automatically reload when you edit files in `src/` or `public/`.

3. **Build for production (static output):**
   ```bash
   npm run build
   ```
   This generates the static production site inside the `dist/` directory, including `sitemap-index.xml`.

4. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## 2. How to Deploy

Because this project builds to a pure static site (`dist/`), you can deploy it to any static hosting provider or web server.

### Option A: Vercel / Netlify / Cloudflare Pages (Recommended)
1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Import the repository into your hosting provider and configure:
   - **Framework Preset:** `Astro`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Node.js Version:** `20` or `22`
3. Connect your custom domain (`www.eikovisual.com`).
4. Every push to your main branch or new Markdown file commit will automatically trigger a rebuild and deployment.

### Option B: Traditional Hosting (cPanel / Nginx / Apache / VPS)
1. Run the production build locally:
   ```bash
   npm run build
   ```
2. Upload the **contents** of the `dist/` folder to your server's web root (e.g., `public_html/` or `/var/www/eikovisual.com/`).

---

## 3. How to Add a Blog / Article

Blog posts are managed via **Astro Content Collections** inside `src/content/blog/`.

- **Listing Page:** Automatically rendered on `/blogs/` (sorted newest first by `date`).
- **Detail Page URL:** Automatically generated at `/<filename-without-md>/` via `src/pages/[slug].astro`.

### Step-by-Step

1. **Add your images** (featured image and any inline article images) to `public/assets/blog/`—for example:
   ```text
   public/assets/blog/my-new-article-cover.webp
   ```
   Reference it in Markdown as `/assets/blog/my-new-article-cover.webp`.

2. **Create a new `.md` file** in `src/content/blog/`.
   The filename becomes the URL slug. For example:
   ```text
   src/content/blog/strategi-branding-perusahaan-modern.md
   ```
   will be published at:
   `https://www.eikovisual.com/strategi-branding-perusahaan-modern/`

3. **Add the frontmatter and Markdown content** using the template below:

```markdown
---
title: "Strategi Branding Perusahaan Modern di Era Digital"
seoTitle: "Strategi Branding Perusahaan Modern | Eiko Visual"
description: "Panduan lengkap membangun strategi branding perusahaan yang konsisten dan kredibel di era digital."
date: "2026-10-20"
category: "Branding"
author: "Eiko Visual"
authorRole: "Brand Strategist"
authorAvatar: "/assets/blog/author-avatar.webp"
featuredImage: "/assets/blog/my-new-article-cover.webp"
ctaHeading: "Ingin Brand Perusahaan Anda Tampil Lebih Profesional?"
ctaDescription: "Diskusikan kebutuhan branding dan website perusahaan Anda bersama tim Eiko Visual."
faqs:
  - question: "Berapa lama proses pembuatan brand guideline?"
    answer: "<p>Proses pengerjaan rata-rata memakan waktu 3 hingga 6 minggu tergantung kompleksitas dan ruang lingkup proyek.</p>"
  - question: "Apakah termasuk file master desain?"
    answer: "<p>Ya, seluruh file master dan panduan penggunaan diserahkan sepenuhnya kepada klien.</p>"
---

Tulis paragraf pembuka artikel Anda di sini menggunakan format **Markdown** standar.

## 1. Subjudul Bagian Pertama

Penjelasan detail bagian pertama. Anda juga bisa menambahkan poin-poin:

- Poin pertama yang menjelaskan konsep utama
- Poin kedua dengan **teks tebal** atau *miring*
- Poin ketiga dengan [tautan internal](/brand-development-details/)

## 2. Subjudul Bagian Kedua

Lanjutkan isi artikel Anda di sini...
```

### Blog Frontmatter Reference (`src/content.config.ts`)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | Yes | Main H1 title of the article and card title on `/blogs/`. |
| `seoTitle` | `string` | Yes | Browser `<title>` and OpenGraph title. |
| `description` | `string` | Yes | Meta description for SEO and excerpt summary. |
| `date` | `string` | Yes | Publication date in `YYYY-MM-DD` format (used for sorting & display). |
| `category` | `string` | No | Category badge (default: `"Branding"`). |
| `author` | `string` | No | Author name (default: `"Eiko Visual"`). |
| `authorRole` | `string` | No | Author role subtitle (default: `"Brand Strategist"`). |
| `authorAvatar` | `string` | No | Local path to author avatar (default: `"/assets/blog/author-avatar.webp"`). |
| `featuredImage` | `string` | Yes | Local path to the cover image under `public/assets/blog/`. |
| `ctaHeading` | `string` | No | Optional custom heading for the bottom contact section. |
| `ctaDescription` | `string` | No | Optional custom description for the bottom contact section. |
| `faqs` | `array` | No | Optional list of `{ question, answer }` items rendered at the bottom of the post. |

---

## 4. How to Add a Project

Portfolio projects are managed via **Astro Content Collections** inside `src/content/projects/`.

- **Projects Page (`/projects/`):** Automatically displays all projects sorted by the `order` field (ascending: `1, 2, 3...`).
- **Home Page (`/`):** Automatically displays projects where `featuredOnHome: true`, sorted by `order`.
- **Project Detail Page:** Automatically generated at `/<slug>/` via `src/pages/[slug].astro`.

### Step-by-Step

1. **Place your project images** inside `public/assets/projects/<project-name>/` (e.g., `public/assets/projects/contoh-karya/`).
2. **Create a new `.md` file** inside `src/content/projects/`, for example:
   ```text
   src/content/projects/nama-klien.md
   ```
3. **Fill out the frontmatter** following the schema below:

```markdown
---
title: "PT Contoh Karya Nusantara"
seoTitle: "Portofolio Branding PT Contoh Karya Nusantara | Eiko Visual"
metaDescription: "Studi kasus perancangan identitas visual dan website untuk PT Contoh Karya Nusantara oleh Eiko Visual."
slug: "contoh-karya-project-details"
cardTitle: "PT Contoh Karya Nusantara"
cardSummary: "Merancang ulang identitas visual dan sistem profil perusahaan untuk meningkatkan kepercayaan mitra B2B."
cardImage: "/assets/projects/contoh-karya/contoh-card.webp"
cardTags:
  - "Brand Identity"
  - "Company Profile"
  - "Website"
order: 6
featuredOnHome: true
yearBadge: "©2026"
heroTitlePrefix: "PT Contoh Karya"
heroTitleHighlight: "Nusantara."
topGallery:
  - "/assets/projects/contoh-karya/contoh-top-1.webp"
  - "/assets/projects/contoh-karya/contoh-top-2.webp"
summaryText: "Ringkasan latar belakang proyek, profil klien, dan tujuan utama dari perancangan identitas visual ini."
clientName: "PT Contoh Karya Nusantara"
clientScope: "Branding & Web Design"
projectDate: "Oktober 2026"
middleGalleryRow1:
  - "/assets/projects/contoh-karya/contoh-mid-1.webp"
  - "/assets/projects/contoh-karya/contoh-mid-2.webp"
challengeText: "Penjelasan tantangan yang dihadapi klien sebelum bekerja sama dengan Eiko Visual."
deliverables:
  - "Logo & Sistem Identitas Visual"
  - "Brand Guideline Lengkap"
  - "Desain Company Profile"
  - "Website Korporat Responsif"
middleGalleryRow2:
  - "/assets/projects/contoh-karya/contoh-mid-3.webp"
  - "/assets/projects/contoh-karya/contoh-mid-4.webp"
solutionHeading: "Solusi Kami"
solutionHtml: "<p>Kami menyusun sistem identitas visual yang tegas, modern, dan mudah diterapkan di berbagai media komunikasi perusahaan.</p>"
valuePoints:
  - title: "Konsistensi di Semua Media"
    description: "Panduan visual memastikan tampilan brand seragam dari dokumen resmi hingga media digital."
  - title: "Citra Korporat Lebih Kredibel"
    description: "Meningkatkan kepercayaan calon klien dan mitra strategis sejak pandangan pertama."
  - title: "Siap untuk Pertumbuhan Jangka Panjang"
    description: "Sistem desain yang fleksibel mendukung ekspansi layanan perusahaan ke depannya."
ctaBadge2: "Digital Agency"
ctaHeading: "Siap Membangun Identitas Brand yang Kuat Seperti PT Contoh Karya?"
ctaDescription: "Konsultasikan kebutuhan branding dan website bisnis Anda bersama tim kami."
relatedArticlesHeadingPrefix: "Artikel Terkait"
relatedArticlesHeadingHighlight: "Branding Korporat"
relatedArticleSlugs:
  - "cara-membangun-brand-identity-perusahaan-tambang"
  - "mengapa-identitas-visual-perusahaan-tambang-penting"
---
```

### Project Frontmatter Reference (`src/content.config.ts`)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | Yes | Project name (used in alt texts and breadcrumbs). |
| `seoTitle` | `string` | Yes | Browser `<title>` and SEO title. |
| `metaDescription` | `string` | No | Meta description for search engines. |
| `slug` | `string` | Yes | URL path for the project detail page (e.g. `"babah-rot-project-details"` -> `/babah-rot-project-details/`). |
| `cardTitle` | `string` | Yes | Title displayed on project cards on `/` and `/projects/`. |
| `cardSummary` | `string` | Yes | Short description displayed on the project card (supports inline HTML). |
| `cardImage` | `string` | Yes | Thumbnail image path for the project card. |
| `cardTags` | `string[]` | Yes | Array of tags shown as pills on the project card. |
| `order` | `number` | Yes | Display order (`1` appears first). |
| `featuredOnHome` | `boolean` | No | Set to `true` to display this project on the Homepage (`/`). |
| `yearBadge` | `string` | No | Copyright/year badge on the detail page (default: `"©2025"`). |
| `heroTitlePrefix` | `string` | Yes | Regular white text part of the detail page H1. |
| `heroTitleHighlight` | `string` | Yes | Italic gradient highlight part of the detail page H1. |
| `topGallery` | `string[]` | Yes | 2 image paths displayed at the top of the project detail page. |
| `summaryText` | `string` | Yes | Paragraph under *"Ringkasan Proyek"*. |
| `clientName` | `string` | Yes | Client name displayed in the metadata grid. |
| `clientScope` | `string` | Yes | Service scope displayed in the metadata grid. |
| `projectDate` | `string` | Yes | Project date/year displayed in the metadata grid. |
| `middleGalleryRow1` | `string[]` | Yes | 2 image paths displayed above *"Tantangan Kami"*. |
| `challengeText` | `string` | Yes | Paragraph under *"Tantangan Kami"*. |
| `deliverables` | `string[]` | Yes | Bullet pills of project deliverables. |
| `middleGalleryRow2` | `string[]` | No | Optional 2 image paths displayed below *"Tantangan Kami"*. |
| `solutionHeading` | `string` | No | Heading for the solution section (default: `"Solusi Kami"`). |
| `solutionHtml` | `string` | Yes | HTML content describing the solution provided. |
| `valuePoints` | `array` | Yes | Array of `{ title, description }` cards showing key results/impact. |
| `ctaBadge2` | `string` | No | Orange badge text on the bottom CTA section. |
| `ctaHeading` | `string` | Yes | Heading for the bottom contact CTA section. |
| `ctaDescription` | `string` | No | Subtitle for the bottom contact CTA section. |
| `relatedArticleSlugs` | `string[]` | No | Optional array of blog filenames (without `.md`) to link related articles at the bottom. |

---

## 5. Project Structure

```text
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   └── assets/
│       ├── blog/                # Blog cover images & author avatar
│       ├── branding/            # Eiko Visual logo, favicons, OpenGraph image
│       ├── clients/             # Client SVG logos for LogoMarquee
│       ├── documents/           # Downloadable PDFs (Company Profile)
│       ├── heroes/              # Page hero banners & decorative illustrations
│       ├── icons/               # UI badge cursor & sparkle icons
│       └── projects/            # Portfolio images grouped by client folder
│           ├── babah-rot/
│           ├── bismillah/
│           ├── pravikara/
│           ├── sakoo/
│           └── unsuda/
├── src/
│   ├── components/
│   │   ├── ContactSection.astro # Reusable contact CTA section (mailto integration)
│   │   ├── FaqSection.astro     # Reusable FAQ accordion section
│   │   ├── Footer.astro         # Site footer
│   │   ├── Header.astro         # Navigation header with dropdown & mobile drawer
│   │   ├── LogoMarquee.astro    # Client logo marquee
│   │   └── ServiceDetailLayout.astro # Shared layout for service detail pages
│   ├── content/
│   │   ├── blog/                # Blog posts (.md)
│   │   └── projects/            # Portfolio projects (.md)
│   ├── content.config.ts        # Astro Content Collections schema definitions
│   ├── layouts/
│   │   └── BaseLayout.astro     # Global HTML head, SEO meta, JSON-LD, Header/Footer
│   ├── pages/
│   │   ├── index.astro          # Homepage (/)
│   │   ├── tentang-kami.astro   # About page (/tentang-kami/)
│   │   ├── about.astro          # Alias for About page (/about/)
│   │   ├── services.astro       # Services overview (/services/)
│   │   ├── projects.astro       # Portfolio listing (/projects/)
│   │   ├── blogs.astro          # Blog listing (/blogs/)
│   │   ├── contact.astro        # Contact page (/contact/)
│   │   ├── pricing-details.astro# Pricing page (/pricing-details/)
│   │   ├── [slug].astro         # Dynamic route for Project details & Blog posts
│   │   └── ...                  # Service detail & industry landing pages
│   └── styles/
│       └── global.css           # Global design tokens, typography, and component styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
