# John Ed Manauis: Portfolio

Personal portfolio site for John Ed A. Manauis, DevOps Engineer (Cloud & Observability).

**Live:** https://neo64347.github.io/portfolio-manauis/

## Contents
- `index.html`: single-page site (About, Skills, Experience, Projects, Certifications)
- `assets/`: Bootstrap 5, Font Awesome, AOS, styles, scripts and images
- `assets/cv/John-Ed-Manauis-CV.pdf`: downloadable CV
- `cv/cv.html`: CV source

## Updating the CV
Edit `cv/cv.html`, then regenerate the PDF (macOS):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --no-pdf-header-footer --print-to-pdf=assets/cv/John-Ed-Manauis-CV.pdf \
  "file://$PWD/cv/cv.html"
```

## Deploy
Hosted with GitHub Pages from the `main` branch root. It's a static site with no build step.
