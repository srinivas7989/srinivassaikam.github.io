# Personal portfolio

A responsive, dependency-free portfolio inspired by the engineering-oriented structure of https://shreyvarshney.pages.dev/. This is an original implementation, not a copy of that site's source. All personal information and projects are labeled placeholders.

## Run locally

1. Extract the ZIP.
2. Open a terminal in the `portfolio` folder.
3. Run `python3 -m http.server 8000` (Windows: `py -m http.server 8000`).
4. Visit http://localhost:8000 in your browser.
5. Stop the server with Ctrl+C.

You can also open index.html directly. The local server is recommended for clipboard support. No npm install or build is needed.

## Customize

- `index.html`: replace Your Name, YN initials, location, roles, dates, email, sample skills, and project concepts with your own information.
- Update the page title and description in the document head.
- Replace project overview content with your contribution and evidence; add actual repository or demo links when available.
- `style.css`: change the color variables at the top, typography, and layouts.
- `script.js`: theme toggle, project disclosure controls, copy email, active navigation, and footer date.

Google Fonts is optional and requires an internet connection. Local system fonts are used automatically offline. The illustrations are CSS and require no external images. The theme uses browser local storage when available. There is no backend or contact form; the contact button copies the configured email address.

## Hosting

Upload index.html, style.css, and script.js together to any static host, preserving the filenames. No server configuration, credentials, or environment variables are required.
