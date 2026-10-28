# Elijah Personal Website

A minimal research/portfolio website designed for GitHub Pages.

## Files

- `index.html` — main page/content
- `style.css` — visual design and responsive layout
- `script.js` — small interactions

## Deploy to GitHub Pages

1. Create a repository named `<YOUR_USERNAME>.github.io`.
2. Upload these three files to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose your `main` branch as the source.
5. Your site should become available at `https://<YOUR_USERNAME>.github.io/`.

## Before publishing

In `index.html`, replace:

- `YOUR_USERNAME`
- `YOUR_EMAIL@example.com`
- LinkedIn URL

Also review the wording in the Experience and Projects sections before publishing.

GitHub Pages supports static HTML/CSS/JavaScript files directly.


## Personalisation

The site now includes `assets/profile.jpg` using the supplied profile photo.
Replace `YOUR_GITHUB_USERNAME` in `index.html` with your actual GitHub username.

## Local preview and verification

Prerequisites: Git and Python 3; no build or dependency installation is needed.

```bash
git clone https://github.com/elikim4k-ai/Whitenight-elijah-kim.git
cd Whitenight-elijah-kim
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000`. Check navigation, project links, profile image,
and mobile layout, then inspect the browser console for missing assets/errors.
There is no automated test suite. Record commit, browser, and viewport with
screenshots when reporting layout issues. This is a portfolio presentation;
follow the individual project repositories to reproduce technical results.

For this repository name, a default project Pages URL has the form
`https://elikim4k-ai.github.io/Whitenight-elijah-kim/`, subject to Pages being
enabled and any custom-domain settings. The root username URL requires a
repository named `elikim4k-ai.github.io`.
