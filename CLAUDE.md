# CLAUDE.md

Project memory for **CIPP/E Study Dashboard**. Read this first when starting a new Claude Code session in this repo.

---

## What this is

A **local-first, static** study app for the IAPP CIPP/E exam. No backend, no build step, no framework. Plain HTML + CSS + vanilla JS. Hosted on **GitHub Pages**.

- Live URL: <https://sudopower.github.io/cippe-study-dashboard/>
- Repo: <https://github.com/sudopower/cippe-study-dashboard>
- Tech: HTML / CSS / vanilla JS / `localStorage`. No npm, no bundler, no transpile.

## How to run

```bash
open ~/cippe-study-dashboard/index.html        # double-click works too
# or for a local server (also lets you test on phone over Wi-Fi):
cd ~/cippe-study-dashboard && python3 -m http.server 8080
```

There is **no install step**. Just refresh the page.

## How to deploy

GitHub Pages serves `main` branch / root. Every push to `main` redeploys (~30–60 s).

```bash
cd ~/cippe-study-dashboard
git add . && git commit -m "your message" && git push
```

## Layout

```
cippe-study-dashboard/
├── index.html         single-page shell, 5 tabs (Dashboard, Flashcards, Practice, Quiz, Progress)
├── styles.css         theme tokens + responsive (light + dark, mobile Safari polished)
├── app.js             all client logic — routing, flashcards, practice, quiz, progress, persistence
├── data/
│   ├── flashcards.js  flashcard deck — assigns to window.FLASHCARDS
│   └── mcqs.js        MCQ bank      — assigns to window.MCQS
├── README.md
└── CLAUDE.md          ← you are here
```

Everything is loaded with plain `<script>` tags so it works from `file://` too (no `fetch`).

---

## Data shapes (memorize these)

### Flashcard

In `data/flashcards.js` — each entry pushed onto `window.FLASHCARDS`:

```js
{
  id: "fc-123",                              // unique; convention: fc-### (zero-pad to 3)
  domain: "III. Legislative Framework",      // MUST exactly match one of the canonical domain names below
  front: "Question or prompt",               // shown first
  back:  "Answer / explanation"              // shown after flip
}
```

### MCQ

In `data/mcqs.js` — each entry pushed onto `window.MCQS`:

```js
{
  id: "q-123",                               // unique; convention: q-### (zero-pad to 3)
  domain: "III. Legislative Framework",      // canonical domain, see below
  question: "Question text",
  options: ["A text", "B text", "C text", "D text"],   // typically 4 options
  answer: 2,                                  // 0-based index of the correct option
  explanation: "Why the correct answer is correct (1–3 sentences)"
}
```

### Canonical domain strings

Use these *exact* strings so filters and progress bars work. They mirror the **CIPP/E Body of Knowledge v1.3.3** (approved 4 March 2025, effective 1 Sept 2025):

- `"I. Introduction to European Data Protection"`
- `"II. European Data Protection Law and Regulation"`
- `"III. European Data Processing"`
- `"IV. European Data Protection: Scope and Accountability"`
- `"V. Compliance with European Data Protection Law and Regulation"`

If you add a new domain, that's fine — the UI auto-discovers them from the data — but keep the Roman-numeral prefix style for consistent ordering.

> **History note:** prior to v1.3.3 the repo used six domains (II. European Regulatory Institutions, III. Legislative Framework, IV. Compliance, V. International Data Transfers, VI. Topical Issues). All MCQs and flashcards were migrated to the v1.3.3 names in 2026. If you regenerate content from older sources, remap before merging.

---

## Common tasks & how to do them

### "Add a flashcard / batch of flashcards"

1. Open `data/flashcards.js`.
2. Append entries to the `window.FLASHCARDS` array. Pick the next `fc-###` id past the existing max.
3. Reload the page locally — no build needed.
4. Commit & push to deploy.

### "Add an MCQ"

Same flow on `data/mcqs.js`. **Double-check `answer` is the 0-based index** of the correct option, and that `explanation` is included.

### "Add a whole new domain section"

Just use a new `domain` string on the cards/MCQs. The dashboard, flashcard filter, practice picker, and quiz picker all read domains dynamically from the data.

### "Change quiz defaults" (pass mark, default count, etc.)

In `index.html`, look for `<select id="quizCount">` and `<select id="quizPass">`. Adjust `<option>` values / `selected`.

### "Tweak styling"

`styles.css`. Theme tokens at the top under `:root` and `[data-theme="dark"]`.

### "Add a new top-level tab / view"

In `index.html`:
1. Add a `<button class="tab" data-view="myview">…</button>` to `#tabs`.
2. Add a `<section class="view hidden" data-view="myview">…</section>` to `<main>`.

In `app.js`:
3. Extend `showView()` to call your render function when `name === "myview"`.

### "Reset progress in my browser"

Open the Progress tab and click **Reset all progress**. Stored in `localStorage` under key `cippe-dashboard-v1`.

---

## Coding conventions / dos and don'ts

- **No frameworks, no build step, no npm.** Keep it that way. The whole point is "open and use."
- **No `fetch` for the data files.** Use `<script src="data/...">` so `file://` opening still works in Safari.
- **No third-party CDNs.** Keep it offline-capable.
- **Mobile Safari first.** Buttons ≥ 44 px tall, inputs ≥ 16 px font (else iOS auto-zooms), use `@media (hover: hover)` for hover styles, respect `env(safe-area-inset-*)`.
- **Vanilla JS only.** No TypeScript transpile, no JSX. ES2020+ is fine (Safari 14+).
- **Progress is local-only.** Don't add network calls or analytics without an explicit ask.
- **Content quality matters.** When adding MCQs, the explanation should cite the GDPR article / case / EDPB guideline where relevant (e.g. "Art. 17(3) GDPR" or "Schrems II, C-311/18"). Keep explanations 1–3 sentences.

## Workflow expectations for Claude

When the user (e.g. "add 20 more MCQs on international transfers") asks for content/code changes:

1. Make the edit.
2. **Quickly sanity-check**: run `node -e "require('./data/mcqs.js'); console.log(MCQS.length)"` is **NOT** valid because the data files assign to `window.*`. Instead, just open the file and visually verify the last entry's commas / brackets, and (optionally) `node --check data/mcqs.js` to confirm it parses.
3. **Commit and push** — Pages will redeploy automatically. Suggested commit form:
   ```
   git add . && git commit -m "Add N MCQs on <topic>" && git push
   ```
4. Tell the user the live URL will update in ~30–60 s.

## Things explicitly *not* in scope (yet)

- Spaced repetition (SM-2) — would go in `app.js`; track per-card ease/interval in `state.cards`.
- Cross-device progress sync — would need a small backend (Node/Express + SQLite was the suggested starting point).
- Question import from CSV / Anki `.apkg`.

If the user asks for any of these, they're greenfield — confirm the approach before building.

## Useful constants and locations

- `localStorage` key: `cippe-dashboard-v1` (bump the suffix if you ever introduce a breaking shape change).
- Default theme: follows OS, overridable via the ◐ button in the topbar. Stored on `state.theme`.
- The IAPP CIPP/E Body of Knowledge changes occasionally — when it does, update the canonical domain strings in this file and migrate the data accordingly.
