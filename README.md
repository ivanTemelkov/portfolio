# Ivan Temelkov Developer Portfolio

Professional bilingual portfolio site for Ivan Temelkov, a Senior .NET Developer
targeting remote software developer roles across Europe. English is the primary
language, with an Italian version available under `/it/`.

The site is intentionally built with static HTML, custom CSS, and minimal vanilla
JavaScript so it can be deployed simply through GitHub Pages from the `docs`
folder.

## Project Structure

```text
/
  README.md
  /docs
    index.html
    robots.txt
    sitemap.xml
    .nojekyll
    /assets
      profile-photo.png
      Ivan_Temelkov_CV.pdf
      Ivan_Temelkov_CV_IT.pdf
    /css
      styles.css
    /it
      index.html
    /js
      main.js
```

## Local Preview

From the repository root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/docs/
http://localhost:8000/docs/it/
```

Alternatively, start the static server from inside `docs` and open
`http://localhost:8000/` for English or `http://localhost:8000/it/` for Italian.

Any equivalent static file server is fine. The site does not require a build
step, package manager, framework, or external runtime dependency.

## GitHub Pages Deployment

1. Push this repository to GitHub.
2. In the repository settings, open **Pages**.
3. Select the publishing branch and the `/docs` folder.
4. Save the configuration and wait for GitHub Pages to publish the site.

The configured production URL is:

```text
https://ivantemelkov.github.io/portfolio/
```

The Italian page is published at:

```text
https://ivantemelkov.github.io/portfolio/it/
```

The HTML uses relative asset paths so the page works locally and under the
GitHub Pages project path.

## Before Publication

- ~~TODO: Replace `docs/assets/profile-placeholder.jpg` with the real
  professional photo before publication. The current asset is a generated
  person-outline placeholder, clearly not a final photo. The layout is ready for
  `docs/assets/profile-photo.jpg` if the HTML image path is updated at the same
  time.~~
- ~~TODO: Replace `docs/assets/Ivan_Temelkov_CV.pdf` and
  `docs/assets/Ivan_Temelkov_CV_IT.pdf` with the final CVs before publishing
  the portfolio.~~
- ~~TODO: Confirm final wording, role periods, and any public company references.~~
- ~~TODO: Check all links, including LinkedIn, email, GitHub, and CV download.~~
- TODO: Run Lighthouse and accessibility checks before publishing.

## Notes

Most professional work described here is private and confidential. The case
study content is intentionally vendor-neutral and avoids customer-specific
details, internal screenshots, proprietary schemas, and proprietary code.
