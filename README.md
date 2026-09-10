# Wenxuan Sun — Academic Website

A lightweight, responsive academic job-market website built with plain HTML, CSS, and a small amount of JavaScript. It has no build step or external dependencies and is ready for GitHub Pages.

## Site structure

- `index.html` — homepage, research identity, job market paper, education
- `research.html` — job market paper and working papers
- `teaching.html` — teaching experience
- `cv.html` — stable landing page for the CV
- `assets/css/styles.css` — all visual styles
- `assets/js/main.js` — mobile navigation and optional-file detection

## Updating the Website

### Update CV

Replace or add `assets/cv/Wenxuan_Sun_CV.pdf`. The site automatically reveals its download link. Navigation points to `cv.html`, so it never breaks while the PDF is absent.

### Add headshot

Add a portrait image at `assets/images/headshot.jpg` (at least 800 × 1000 px recommended). The homepage reveals it only after it loads successfully.

### Add/update JMP

- Paper PDF: `assets/papers/salary_history_bans.pdf`
- Slides: `assets/slides/salary_history_bans.pdf`
- Title, coauthor, status, and presentations: edit the Job Market Paper sections in `index.html` and `research.html`

Buttons for optional files appear automatically only when those files exist.

### Add working-paper files

- `assets/papers/erta.pdf`
- `assets/papers/ip_protection_ma.pdf`

Optional slide files use the same base filenames in `assets/slides/`.

### Update paper abstracts

Edit the full abstracts in `research.html` and the concise job-market-paper summary in `index.html`.

### Update the dissertation committee

Edit the Dissertation Committee section in `index.html`.

### Add Google Scholar

Search the HTML files for `OPTIONAL SCHOLAR LINK`. Add the verified profile URL only after it is available.

## Preview locally

From the repository root, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`. A local server is recommended because the site checks for optional PDFs before showing their links.

## Deploy with GitHub Pages

1. Push the repository to the `main` branch of `wenxuansun22.github.io`.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`, then click **Save**.
5. After deployment, visit `https://wenxuansun22.github.io/`.

### Custom domain later

In **Settings → Pages**, enter the custom domain and follow GitHub's DNS instructions. GitHub will create or update `CNAME`. Enable **Enforce HTTPS** after DNS verification.
