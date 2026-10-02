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
- Industry collaboration placeholder: `src/data/industry.ts`
- Videos and images: project paths point into `public/media/research/` or `public/media/industry/`
- CV: `public/cv/cv-zh.pdf` and `public/cv/cv-en.pdf` are the published files; each language only links to its own PDF. Keep editable source documents outside `public/` (the local `cv-source/` directory is ignored by Git).

The site supports English at the root (`/`, `/projects`, `/research`, ...) and Simplified Chinese under `/zh/` (`/zh/`, `/zh/projects`, `/zh/research`, ...). The English pages follow the Chinese content in the existing bilingual data files. Dates, publication metadata, and award facts are shared across locales; translate text fields in place. The language switcher displays `EN / 中文` and preserves the current section where possible.

Research media directories:

- `public/media/research/reconfigurable-uav/`
- `public/media/research/autonomous-landing/`
- `public/media/research/exoskeleton/`

Industry media directory: `public/media/industry/`

## GitHub Pages

The public repository is `dor2zorotop-max/profile`. English starts at `/profile/`; Simplified Chinese starts at `/profile/zh/`. Push to `main` to run the official Pages workflow in `.github/workflows/deploy-pages.yml`: GitHub Actions builds the site, then GitHub Pages publishes it. Set the repository's Pages source to **GitHub Actions**.

For a local production-path check in PowerShell, run `$env:BASE_PATH='/profile'; npm run build`. Leave `BASE_PATH` unset for `npm run dev` at the root path.
