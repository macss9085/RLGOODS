# WebGL Portfolio Clone

A animated WebGL portfolio website built with HTML, CSS, and JavaScript (Three.js, Locomotive.js, GSAP).

## Project Structure

- `index.html` — Main homepage
- `pages/` — Additional pages (about, contact, credits, work)
- `css/style.css` — Main stylesheet
- `javascript/` — JavaScript files
- `*.png`, `*.jpg` — Image assets

## Running the Project

The project is served as a static site using Python's built-in HTTP server:

```
python3 -m http.server 5000 --bind 0.0.0.0
```

This runs on port 5000 and is accessible via the Replit preview pane.

## Deployment

Configured as a static site deployment with `publicDir: "."`.
