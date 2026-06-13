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

- **No build step.** Pure static HTML/CSS/JS. Edit files directly; open `index.html` in browser to preview. Live is served by the **`sumon`** repo at `/sumon/` (NOT this repo's `origin` — see Deployment).
- **jQuery-based**, not a modern framework. Behavior in `js/init.js`: img-to-SVG inline, preloader, owl carousel, isotope portfolio filter, magnific popup, parallax, animations.
- **Contact form** now works via **Web3Forms** (no backend). `#contact_form` action = `https://api.web3forms.com/submit`; access key + honeypot are hidden inputs in the form. Submit handler in `js/init.js` `beny_tm_contact_form()` uses `fetch()` (not the old PHP AJAX) + email-format validation. Mail lands at `abdulhannansumon70@gmail.com`. Free tier 250/mo. (Was originally a dead `sam.php`/`modal/contact.php` POST — static GitHub Pages has no PHP.)
- Template provenance comments (HTTrack "Mirrored from frenify.com...") at top/bottom of `index.html` — harmless, leftover from template source.
- Vendor files (`jquery.js`, `plugins.js`, `plugins.css`) are minified/bundled — do **not** hand-edit; treat as third-party.
- Profile images: `img/about/S1.jpg` (sidebar avatar), `img/about/sam.PNG` (About photo), `img/hero/sam.jpg` (hero bg, CSS). All compressed; `_old` backups have been deleted.
- IE conditional comments + `modernizr`/`ie8.js` references remain — legacy, safe to ignore.

## Recent customizations (this site, diverged from template)

- **Projects section (`#portfolio`, `.beny_tm_news_wrap`)** — rebuilt to minimal monochrome "Style C" cards (custom CSS block at end of `style.css`): white rounded cards, inline-SVG line icon per project, dot+kicker badge, title + one-line description, hairline footer with "Read More" + circular orange `#fd4d4d` arrow button. Cards use **flexbox equal-height** (`ul.total{display:flex}`, footer pinned via `.definitions_wrap` flex column + `read_more{margin-top:auto}`). Real project images were removed — icons are inline SVG, not the old `img/blog/*` placeholders. **Read More popup** styled in `#beny_tm_popup_blog` (max-width 740px, icon tile, CV meta cards `.proj_meta` = Role/Company/Period/Location pulled from CV).
- **Left sidebar (`.beny_tm_leftpart_wrap`)** — now an inset rounded card (width 322, 16px gap, `border-radius:18px`, faint `rgba(255,255,255,.05)` border). Black backdrop behind it via **`.beny_tm_content::before`** (fixed, width 360, `z-index:0` — must stay *below* sidebar `z-index:100`; do NOT move to a `body`-level overlay, it'll cover the sidebar). Short orange accent bar (`#ea580c`) above nav via `menu_list_wrap::before`; nav hover indents + turns orange; job title muted gray letter-spaced.
- **Accent colors:** project arrow + most hovers use `#fd4d4d`; sidebar nav/social hovers + accent bar use `#ea580c`. "Domain Expertise" label and "Sr. Software Engineer" labels were recolored per owner requests.
- **Socials:** Twitter removed. **GitHub added** as an inline SVG (the `xcon` font lacks a github glyph) → `https://github.com/ahsumon7`, in both sidebar + hero rows.
- **Performance:** hero/avatar images compressed with `sips` (hero/sam.jpg 1.5MB→500K etc.); orphan images deleted (`img/` 5.7MB→2MB); Google Fonts trimmed 20→7 variants + `display=swap` + preconnect. Some swapped images use a `?v=N` cache-bust query in `index.html` to beat the GitHub Pages CDN.

## Conventions

- Match existing template class naming (`beny_tm_*`) when adding markup.
- Keep edits to `index.html`, `css/style.css`, and `img/` — that's where owner content lives.
- Commit only when asked. Default branch: `master`. Live URL: **https://ahsumon7.github.io/sumon/** (see Deployment below — live is a DIFFERENT repo).

## Deployment (READ THIS before pushing — non-obvious)

**The live site is NOT served from this repo's `origin`.** This local checkout's `origin` is `github.com/ahsumon7/ahsumon7.github.io-ahsumon7`, but the live site **https://ahsumon7.github.io/sumon/** is served by a separate GitHub repo **`github.com/ahsumon7/sumon`** (branch `master`, GitHub Pages, project path `/sumon/`). The two repos have **unrelated git histories**. Pushing to `origin` does NOT update the live site.

### One-time setup
Add the live repo as a remote named `live`:
```
git remote add live https://github.com/ahsumon7/sumon.git
```

### Deploy steps (every time you change code/images)
1. Make + verify edits locally (open `index.html` in a browser).
2. Fetch live and stage your changed files onto its tip via a worktree:
   ```
   git fetch live
   git worktree add -f /tmp/deploy live/master
   # copy each file you changed into /tmp/deploy/ (same paths), e.g.:
   cp index.html /tmp/deploy/index.html
   cp css/style.css /tmp/deploy/css/style.css
   cp img/about/sam.PNG /tmp/deploy/img/about/sam.PNG
   ```
3. Commit + push to live (no `--force`; histories diverged but commit-on-top works):
   ```
   cd /tmp/deploy
   git add -A
   git commit -m "your message"
   git push live HEAD:master
   cd -                              # back to project
   git worktree remove /tmp/deploy --force
   ```
4. Wait ~1–2 min for GitHub Pages to rebuild.

### Verify / cache notes
- Check the served file is current (hash should match your local):
  `git rev-parse live/master:img/about/sam.PNG` vs `git hash-object img/about/sam.PNG`
- **Images cache hard by filename** (GitHub Pages CDN + browser). After a push, hard-refresh (Cmd+Shift+R) or open incognito. If a swapped image still shows old for *visitors*, cache-bust the URL — bump the query version, e.g. `img/about/sam.PNG?v=2` → `?v=3`, in `index.html`, then redeploy.
- Optimize images before committing (macOS `sips`): e.g. `sips -Z 1920 -s formatOptions 70 img/hero/sam.jpg --out img/hero/sam.jpg`. Hero/avatar images were oversized (3388px, 1.5MB) — keep them small.

> Long-term cleanup: this `-ahsumon7` repo and `sumon` will keep drifting. Best to work directly in a clone of `sumon` so there is one source of truth. Until then, follow the steps above.
