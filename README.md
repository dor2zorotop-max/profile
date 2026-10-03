# Academic Profile

Live site: https://dor2zorotop-max.github.io/profile/

## Local development

```bash
npm install
npm run dev
```

## Content locations

- Profile and contact: `src/data/profile.ts`
- Education: `src/data/education.ts`
- Research themes: `src/data/research.ts`
- Professional skills: `src/data/skills.ts`
- Projects and project media fields: `src/data/projects.ts`
- Publications: `src/data/publications.ts`
- Competitions: `src/data/competitions.ts`
- Honors: `src/data/honors.ts`
- Industry projects: `src/data/industry.ts` (the two supplied company names and supplied engineering materials)
- Images: project paths point into `public/media/research/` or `public/media/industry/`; research MP4 files are served from the GitHub Release `research-media-v1`.
- Public competition media and certificate preview images: `public/media/competitions/`. Original certificates and submission documents are archived in the ignored `.private/competitions/` directory.
- Research video posters: `public/media/research/video-posters/`. Each poster is generated from the corresponding video's first frame.
- CV source PDFs may remain in `public/cv/` for archival compatibility, but the visible site does not expose a CV link or download button; the former `/cv/` and `/zh/cv/` routes redirect to the corresponding biography. Keep editable source documents outside `public/` (the local `cv-source/` directory is ignored by Git).

The site supports English at the root (`/`, `/projects`, `/research`, ...) and Simplified Chinese under `/zh/` (`/zh/`, `/zh/projects`, `/zh/research`, ...). The English pages follow the Chinese content in the existing bilingual data files. Dates, publication metadata, and award facts are shared across locales; translate text fields in place. The language switcher displays `EN / 中文` and preserves the current section where possible.

Date ranges in data sources use the half-width `~` separator (`2025.06~Present`, `2025.06~至今`). Technical hyphenated terms such as `multi-UAV` and `closed-loop` are not date ranges. Non-homepage pages expose a fixed circular back arrow; same-site referrers use `history.back()`, while direct entries fall back to the relevant homepage tab.

The homepage is a single academic personal homepage rather than a CV navigation page. Its profile card and five hash-based tabs (`#biography`, `#research`, `#experience`, `#competitions`, `#projects`) are rendered from profile, research, project, competition, and industry data. The primary header exposes Home and the language switcher; the tabs are the content navigation. Empty data is rendered as a restrained empty state rather than a placeholder card.

Research media directories:

- `public/media/research/reconfigurable-uav/`
- `public/media/research/autonomous-landing/`
- `public/media/research/exoskeleton/`

Industry media directory: `public/media/industry/`

Large research videos are intentionally kept out of the Pages repository. The public video assets are uploaded to the repository release [Research Media](https://github.com/dor2zorotop-max/profile/releases/tag/research-media-v1) with stable English filenames, while `src/data/projects.ts` keeps the structured title, category, caption, poster, and release URL for each video. The single-UAV representative video and five supplied competition videos are also stored in that release. All videos retain their original quality; public pages contain images and posters, not MP4 copies. Research source videos live in `.private/media-source/research/` and competition sources in `.private/media-source/competitions/`. Keep source videos, technical documents, source notes, and other unpublished material inside `.private/`; this directory is ignored by Git.

## GitHub Pages

The public repository is `dor2zorotop-max/profile`. English starts at `/profile/`; Simplified Chinese starts at `/profile/zh/`. Push to `main` to run the official Pages workflow in `.github/workflows/deploy-pages.yml`: GitHub Actions builds the site, then GitHub Pages publishes it. Set the repository's Pages source to **GitHub Actions**.

For a local production-path check in PowerShell, run `$env:BASE_PATH='/profile'; npm run build`. Leave `BASE_PATH` unset for `npm run dev` at the root path. The language routes are English at `/profile/`, `/profile/projects`, `/profile/research`, etc., and Simplified Chinese at `/profile/zh/`, `/profile/zh/projects`, `/profile/zh/research`, etc.; the switcher displays `EN / 中文` and preserves the current section where possible.

The five Chinese content instructions are preserved locally under `.private/source/honors/`. Maintain both locale fields together. Homepage research previews use `src/data/researchPreviews.ts` together with each project's title, period, role, summary, and single hero image. Preview bodies have an 960px maximum height and a 130px fade with a detail link. The homepage never renders full detail sections or research videos. The three project detail pages retain the complete research gallery and all 11 videos. Competition entries use optional subevents, nonclickable certificate previews, and selected videos. There is no supplied CPGDEC award certificate, so no certificate is fabricated for that entry.

## Public material boundaries

Keep competition reports, papers, defense slides, submissions, and source documents in `.private/competitions/`. Keep business plans, BOMs, costs, internal documents, code, and original engineering projects in `.private/industry/`. These ignored folders must never be copied into `public/` or deployment artifacts. Industry public assets are selected image previews only; Shanghai uses the physical control-board photo. The Shanghai bilingual five-paragraph account is maintained in `src/data/industry.ts`; do not shorten it into responsibility bullets.

Removing a tracked file does not remove its history. Previously committed plans and competition documents remain accessible in earlier commits; history rewriting requires a separate decision. Do not force-push as part of routine publication.
