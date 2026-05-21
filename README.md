# CIPP/E Study Dashboard

A local-first study app for the IAPP **CIPP/E** exam (Certified Information Privacy Professional / Europe). 100% static HTML/CSS/JS — runs in Safari from your filesystem and deploys to GitHub Pages with no build step.

Features
- **Dashboard** — at-a-glance stats and per-domain progress.
- **Flashcards** — flip cards, mark them *known* or *needs review*, filter by domain. Keyboard shortcuts: `Space` flip, `←` `→` navigate, `K` known, `R` needs review.
- **Practice** — untimed walk through MCQs with the explanation revealed after each answer.
- **Quiz** — graded, randomised quizzes (10/20/40 questions) with configurable pass mark and a per-question review at the end.
- **Progress** — quiz history (last 50) and per-domain flashcard progress bars.
- **Dark / light theme**, persisted.
- **No backend, no tracking** — all progress is stored in `localStorage` in your browser.

## Run locally in Safari

Option A — just double-click:

```
open ~/cippe-study-dashboard/index.html
```

That opens it via `file://` in your default browser. Everything works because the data is loaded via plain `<script>` tags (not `fetch`).

Option B — serve over a tiny local server (also lets you open it on your phone):

```bash
cd ~/cippe-study-dashboard
python3 -m http.server 8080
# then visit http://localhost:8080 in Safari
```

To open it on Mobile Safari on the same Wi‑Fi network, find your Mac's IP (`ipconfig getifaddr en0`) and visit `http://<that-ip>:8080` on your iPhone/iPad. You can then "Add to Home Screen" from the Share menu to get a full-screen app icon.

## Deploy free on GitHub Pages

1. Create an empty GitHub repo, e.g. `cippe-study-dashboard`.
2. From the project folder:

   ```bash
   cd ~/cippe-study-dashboard
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<your-username>/cippe-study-dashboard.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment**, set **Source = Deploy from a branch**, **Branch = `main` / root**, save.
4. Your dashboard will be live at `https://<your-username>.github.io/cippe-study-dashboard/` within a minute or two.

## Project layout

```
cippe-study-dashboard/
├── index.html         — single-page shell with tabs
├── styles.css         — theme (light + dark) and components
├── app.js             — routing, flashcards, practice, quiz, progress
├── data/
│   ├── flashcards.js  — flashcard deck (60+ cards across 6 domains)
│   └── mcqs.js        — MCQ bank with answers + explanations
└── README.md
```

## Editing / expanding content

Both data files are plain JS files that assign to `window.FLASHCARDS` and `window.MCQS`. Add new entries following the existing shape:

```js
// flashcards.js
{
  id: "fc-200",
  domain: "III. Legislative Framework",
  front: "Question or prompt",
  back:  "Answer or explanation"
}

// mcqs.js
{
  id: "q-100",
  domain: "III. Legislative Framework",
  question: "Question text",
  options: ["A", "B", "C", "D"],
  answer: 2,                          // index of correct option (0-based)
  explanation: "Why it's correct"
}
```

Refresh the page and the new content shows up immediately. There's no build step.

## Roadmap ideas (optional)

- Spaced-repetition scheduling for flashcards (SM-2 / Anki-style).
- Import/export progress as JSON.
- Optional Node/Express backend with SQLite to sync progress across devices.
- Hard-mode quiz with a timer.

## Disclaimer

Content is study material derived from publicly described CIPP/E topic areas (GDPR, ePrivacy, LED, EDPB guidance, key CJEU cases). It is **not** affiliated with or endorsed by the IAPP and is **not** a substitute for the official Body of Knowledge or a paid prep program. Always check the IAPP-published exam objectives and current EDPB / DPA guidance before relying on any single source.
