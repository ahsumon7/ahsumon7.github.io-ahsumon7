# CLAUDE.md

Guidance for Claude Code working in this repo.

## What this is

Personal portfolio website for **Abdul Hannan Sumon**, deployed via GitHub Pages (`ahsumon7.github.io`). Static single-page site built on the "Beny" (Marketify) jQuery template, originally HTTrack-mirrored from `frenify.com` in 2019, then customized with the owner's content.

## Owner profile (from CV)

**Abdul Hannan Sumon** — Software Engineer, ~5.5+ years. Backend focus: Java + Spring Boot.
Domains: Banking (MFI), ERP systems, OTA (online travel) platforms.

- Contact: abdulhannansumon70@gmail.com · +880 1921 78 80 55 · Dhaka-1212, Bangladesh
- LinkedIn: linkedin.com/in/abdul-hannan-sumon-80a46a152 · GitHub: github.com/ahsumon7
- Education: BSc CSE, Daffodil International University (DIU), 2020, CGPA 3.55/4.00

### Core skills

- **Languages:** Java (11/17/21), SQL, JavaScript, TypeScript, VB.NET
- **Backend:** Spring Boot, Spring MVC, Spring Data JPA, Spring Security
- **Frontend:** Angular, HTML, CSS (basic)
- **Databases:** PostgreSQL, MS SQL Server, Redis, Elasticsearch
- **Architecture:** Monolithic, Microservices, RESTful APIs
- **Messaging:** RabbitMQ, Kafka
- **Cloud/DevOps:** AWS (EC2), Docker, Maven
- **Testing:** JUnit, Mockito, Locust, Kibana
- **Reporting:** JasperReports, Power BI
- **Tooling:** Git, GitHub, GitLab, Swagger, Postman, Jira, Agile/Scrum

### Experience

1. **IBCS-PRIMAX Software (BD) Ltd.** — Analyst Programmer, Nov 2025–Present. ERP modules (Material Control, Purchase, Store & Inventory) for Bangladesh Ordnance Factories (BOF). Stack: Java 17, Spring Boot, Angular, PostgreSQL, Docker, JasperReports, Swagger, GitLab.
2. **Adventure Dhaka Ltd** (subsidiary of Adventure Inc., Japan OTA) — Software Engineer, May–Oct 2025. "Sky Ticket" OTA platform microservices; Indigo + Air India airline API integrations. Stack: Java 21, Spring Boot, Microservices, JUnit, Mockito, Swagger, PostgreSQL, Elasticsearch.
3. **Southtech Limited** — Analyst Programmer, Mar 2020–Feb 2025. MFI banking solution "Ascend Financials"; CRVS school student profile; MSSQL→PostgreSQL migration. Stack: Java 11, Spring MVC/Boot, MSSQL, PostgreSQL, Docker, JasperReports, VB.NET.

> Note: site content should reflect this profile. CV lists newer roles (IBCS-PRIMAX, Adventure Dhaka) that the site may predate — keep site copy in sync when editing.

## Codebase structure

```
index.html        # entire site — one page, all sections inline
css/
  style.css       # main theme styles (~3k lines)
  plugins.css     # vendor plugin styles (~2.2k lines)
  font/           # xcon icon webfont (eot/svg/ttf/woff/woff2)
js/
  jquery.js       # jQuery (minified, single line)
  init.js         # site behavior — Marketify template init (~700 lines)
  plugins.js      # bundled vendor plugins (~1k lines)
icon/icon.jpg     # favicon
img/              # assets by section: about/ hero/ portfolio/ blog/ svg/ fotter/
```

### Page sections (anchors in `index.html`)

`#home` (hero) · `#about` · skills · `#services` (labeled "Interest" in nav) · `#portfolio` · `#testimonials` · news (commented out) · `#contact` · footer.

Nav lives in `.beny_tm_leftpart_wrap` (fixed left sidebar): Home, About, Interest→#services, Portfolio, Contact.

### Key facts / gotchas

- **No build step.** Pure static HTML/CSS/JS. Edit files directly; open `index.html` in browser to preview. GitHub Pages serves repo root.
- **jQuery-based**, not a modern framework. Behavior in `js/init.js`: img-to-SVG inline, preloader, owl carousel, isotope portfolio filter, magnific popup, parallax, animations.
- **Contact form** posts to `sam.php` (`#contact_form`) — no PHP backend in repo, so form is non-functional on GitHub Pages. Note this before "fixing" submit logic.
- Template provenance comments (HTTrack "Mirrored from frenify.com...") at top/bottom of `index.html` — harmless, leftover from template source.
- Vendor files (`jquery.js`, `plugins.js`, `plugins.css`) are minified/bundled — do **not** hand-edit; treat as third-party.
- Profile image: `img/about/S1.jpg`. Recent git status shows image swaps in `img/about/` (S1, sam) with `_old` backups.
- IE conditional comments + `modernizr`/`ie8.js` references remain — legacy, safe to ignore.

## Conventions

- Match existing template class naming (`beny_tm_*`) when adding markup.
- Keep edits to `index.html`, `css/style.css`, and `img/` — that's where owner content lives.
- Commit only when asked. Default branch: `master`. Live URL: https://ahsumon7.github.io/
