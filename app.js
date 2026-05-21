(function () {
  "use strict";

  const STORAGE_KEY = "cippe-dashboard-v1";
  const FLASHCARDS = window.FLASHCARDS || [];
  const MCQS = window.MCQS || [];

  // ---------- state & persistence ----------
  const defaultState = {
    cards: {},          // id -> { status: 'known' | 'review', ts }
    history: [],        // recent quiz attempts (max 50)
    theme: null,        // 'light' | 'dark' | null (system)
  };

  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(defaultState);
      const parsed = JSON.parse(raw);
      return Object.assign(clone(defaultState), parsed);
    } catch (e) {
      console.warn("Could not parse stored state, resetting.", e);
      return clone(defaultState);
    }
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
    catch (e) { /* private mode / quota — ignore */ }
  }
  const state = loadState();

  // ---------- helpers ----------
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function uniqueDomains(items) {
    const seen = new Set();
    items.forEach(it => seen.add(it.domain));
    return Array.from(seen).sort();
  }

  function fillDomainSelect(sel, items, { allowAll = true } = {}) {
    sel.innerHTML = "";
    if (allowAll) {
      const opt = document.createElement("option");
      opt.value = "all";
      opt.textContent = "All domains";
      sel.appendChild(opt);
    }
    uniqueDomains(items).forEach(d => {
      const opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      sel.appendChild(opt);
    });
  }

  function fmtDate(ts) {
    try {
      const d = new Date(ts);
      return d.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });
    } catch { return String(ts); }
  }

  // ---------- theme ----------
  const systemTheme = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function applyTheme() {
    const t = state.theme || (systemTheme && systemTheme.matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", t);
  }
  applyTheme();
  if (systemTheme && systemTheme.addEventListener) {
    systemTheme.addEventListener("change", () => { if (!state.theme) applyTheme(); });
  }
  $("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    state.theme = current === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  });

  // ---------- routing ----------
  function showView(name) {
    $$(".view").forEach(v => v.classList.toggle("hidden", v.dataset.view !== name));
    $$(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === name));
    if (name === "dashboard") renderDashboard();
    if (name === "flashcards") renderFlashcards();
    if (name === "progress") renderProgress();
    window.scrollTo(0, 0);
  }
  $$(".tab").forEach(t => t.addEventListener("click", () => showView(t.dataset.view)));
  document.addEventListener("click", e => {
    const target = e.target.closest("[data-go]");
    if (target) showView(target.dataset.go);
  });

  // ============================================================
  // Dashboard
  // ============================================================
  function renderDashboard() {
    const total = FLASHCARDS.length;
    const reviewed = Object.keys(state.cards).length;
    const known = Object.values(state.cards).filter(c => c.status === "known").length;
    $("#stat-cards").textContent = reviewed;
    $("#stat-cards-total").textContent = total;
    $("#stat-known").textContent = known;
    $("#stat-known-pct").textContent = total ? Math.round((known / total) * 100) + "%" : "0%";

    const quizzes = state.history.length;
    $("#stat-quizzes").textContent = quizzes;
    if (quizzes) {
      const avg = Math.round(state.history.reduce((s, h) => s + h.scorePct, 0) / quizzes);
      const best = Math.max.apply(null, state.history.map(h => h.scorePct));
      $("#stat-avg").textContent = avg + "%";
      $("#stat-best").textContent = best + "%";
    } else {
      $("#stat-avg").textContent = "—";
      $("#stat-best").textContent = "—";
    }

    const domainList = $("#dashboardDomains");
    domainList.innerHTML = "";
    uniqueDomains(FLASHCARDS).forEach(d => {
      const inDomain = FLASHCARDS.filter(c => c.domain === d);
      const knownInDomain = inDomain.filter(c => state.cards[c.id] && state.cards[c.id].status === "known").length;
      const li = document.createElement("li");
      li.innerHTML = `<span>${d}</span><span class="badge">${knownInDomain}/${inDomain.length}</span>`;
      domainList.appendChild(li);
    });
  }

  // ============================================================
  // Flashcards
  // ============================================================
  const fc = {
    deck: [],
    index: 0,
  };

  function renderFlashcards() {
    const sel = $("#fcDomain");
    if (!sel.options.length) {
      fillDomainSelect(sel, FLASHCARDS, { allowAll: true });
      sel.addEventListener("change", rebuildDeck);
      $("#fcFilter").addEventListener("change", rebuildDeck);
      $("#fcShuffle").addEventListener("click", () => { fc.deck = shuffle(fc.deck); fc.index = 0; showCard(); });
      $("#fcPrev").addEventListener("click", () => move(-1));
      $("#fcNext").addEventListener("click", () => move(1));
      $("#fcKnown").addEventListener("click", () => markCurrent("known"));
      $("#fcNeedsReview").addEventListener("click", () => markCurrent("review"));
      $("#flashcard").addEventListener("click", flipCard);
      document.addEventListener("keydown", flashcardKeys);
    }
    rebuildDeck();
  }

  function flashcardKeys(e) {
    const active = document.activeElement;
    if (active && (active.tagName === "INPUT" || active.tagName === "SELECT" || active.tagName === "TEXTAREA")) return;
    const view = $(".view:not(.hidden)");
    if (!view || view.dataset.view !== "flashcards") return;
    if (e.code === "Space") { e.preventDefault(); flipCard(); }
    else if (e.code === "ArrowRight") move(1);
    else if (e.code === "ArrowLeft") move(-1);
    else if (e.code === "KeyK") markCurrent("known");
    else if (e.code === "KeyR") markCurrent("review");
  }

  function rebuildDeck() {
    const domain = $("#fcDomain").value;
    const filter = $("#fcFilter").value;
    let deck = FLASHCARDS.slice();
    if (domain !== "all") deck = deck.filter(c => c.domain === domain);
    if (filter === "known") deck = deck.filter(c => state.cards[c.id] && state.cards[c.id].status === "known");
    else if (filter === "needsReview") deck = deck.filter(c => state.cards[c.id] && state.cards[c.id].status === "review");
    else if (filter === "unreviewed") deck = deck.filter(c => !state.cards[c.id]);
    fc.deck = deck;
    fc.index = 0;
    showCard();
    $("#fcMeta").textContent = `${deck.length} card${deck.length === 1 ? "" : "s"} in current selection`;
  }

  function showCard() {
    const card = fc.deck[fc.index];
    $("#flashcard").classList.remove("flipped");
    if (!card) {
      $("#fcFront").textContent = "No cards match this filter.";
      $("#fcBack").textContent = "";
      $("#fcDomainLabel").textContent = "—";
      $("#fcDomainLabel2").textContent = "—";
      $("#fcPosition").textContent = "—";
      return;
    }
    $("#fcFront").textContent = card.front;
    $("#fcBack").textContent = card.back;
    $("#fcDomainLabel").textContent = card.domain;
    $("#fcDomainLabel2").textContent = card.domain;
    const status = state.cards[card.id];
    const statusText = status ? (status.status === "known" ? "✓ marked known" : "↻ needs review") : "unreviewed";
    $("#fcPosition").textContent = `Card ${fc.index + 1} of ${fc.deck.length} · ${statusText}`;
  }

  function flipCard() {
    if (!fc.deck.length) return;
    $("#flashcard").classList.toggle("flipped");
  }

  function move(delta) {
    if (!fc.deck.length) return;
    fc.index = (fc.index + delta + fc.deck.length) % fc.deck.length;
    showCard();
  }

  function markCurrent(status) {
    const card = fc.deck[fc.index];
    if (!card) return;
    state.cards[card.id] = { status, ts: Date.now() };
    saveState();
    showCard();
    setTimeout(() => move(1), 220);
  }

  // ============================================================
  // Practice (untimed, immediate feedback)
  // ============================================================
  const practice = { queue: [], idx: 0, answered: 0, correct: 0 };

  function initPracticeControls() {
    fillDomainSelect($("#practiceDomain"), MCQS, { allowAll: true });
    $("#practiceStart").addEventListener("click", startPractice);
    $("#practiceNext").addEventListener("click", nextPractice);
    $("#practiceExit").addEventListener("click", () => {
      $("#practiceRunner").classList.add("hidden");
      showView("practice");
    });
  }

  function startPractice() {
    const domain = $("#practiceDomain").value;
    const countSel = $("#practiceCount").value;
    let pool = MCQS.slice();
    if (domain !== "all") pool = pool.filter(q => q.domain === domain);
    pool = shuffle(pool);
    const count = countSel === "all" ? pool.length : Math.min(parseInt(countSel, 10), pool.length);
    practice.queue = pool.slice(0, count);
    practice.idx = 0;
    practice.answered = 0;
    practice.correct = 0;
    $("#practiceRunner").classList.remove("hidden");
    renderPractice();
  }

  function renderPractice() {
    const q = practice.queue[practice.idx];
    if (!q) {
      $("#practiceQ").textContent = "Session complete.";
      $("#practiceDomainLabel").textContent = "—";
      $("#practiceOpts").innerHTML = "";
      $("#practiceExpl").classList.add("hidden");
      $("#practiceFeedback").textContent = `You answered ${practice.correct} / ${practice.answered} correctly.`;
      $("#practiceFeedback").className = "feedback";
      $("#practiceNext").classList.add("hidden");
      $("#practiceProgress").textContent = `Practice complete`;
      return;
    }
    $("#practiceProgress").textContent = `Question ${practice.idx + 1} of ${practice.queue.length}`;
    $("#practiceDomainLabel").textContent = q.domain;
    $("#practiceQ").textContent = q.question;
    $("#practiceExpl").classList.add("hidden");
    $("#practiceFeedback").textContent = "";
    $("#practiceNext").classList.add("hidden");

    const list = $("#practiceOpts");
    list.innerHTML = "";
    q.options.forEach((opt, i) => {
      const li = document.createElement("li");
      li.className = "option";
      li.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
      li.addEventListener("click", () => choosePractice(i, li));
      list.appendChild(li);
    });
  }

  function choosePractice(idx, el) {
    const q = practice.queue[practice.idx];
    const opts = $$("#practiceOpts .option");
    if (opts[0].classList.contains("locked")) return;
    opts.forEach(o => o.classList.add("locked"));
    const right = idx === q.answer;
    el.classList.add(right ? "correct" : "wrong");
    if (!right) opts[q.answer].classList.add("correct");
    practice.answered++;
    if (right) practice.correct++;

    const fb = $("#practiceFeedback");
    fb.textContent = right ? "Correct" : "Incorrect";
    fb.className = "feedback " + (right ? "right" : "wrong");

    const expl = $("#practiceExpl");
    expl.textContent = q.explanation;
    expl.classList.remove("hidden");
    $("#practiceNext").classList.remove("hidden");
  }

  function nextPractice() {
    practice.idx++;
    renderPractice();
  }

  // ============================================================
  // Quiz (graded, immediate answers hidden, final result)
  // ============================================================
  const quiz = { queue: [], idx: 0, answers: [], passMark: 80, domain: "all" };

  function initQuizControls() {
    fillDomainSelect($("#quizDomain"), MCQS, { allowAll: true });
    $("#quizStart").addEventListener("click", startQuiz);
    $("#quizNext").addEventListener("click", nextQuiz);
    $("#quizAgain").addEventListener("click", () => {
      $("#quizResult").classList.add("hidden");
      $("#quizRunner").classList.add("hidden");
    });
    $("#quizExit").addEventListener("click", () => {
      $("#quizRunner").classList.add("hidden");
      $("#quizResult").classList.add("hidden");
    });
  }

  function startQuiz() {
    const domain = $("#quizDomain").value;
    const count = parseInt($("#quizCount").value, 10);
    quiz.passMark = parseInt($("#quizPass").value, 10);
    quiz.domain = domain;
    let pool = MCQS.slice();
    if (domain !== "all") pool = pool.filter(q => q.domain === domain);
    pool = shuffle(pool);
    quiz.queue = pool.slice(0, Math.min(count, pool.length));
    quiz.idx = 0;
    quiz.answers = new Array(quiz.queue.length).fill(null);
    $("#quizResult").classList.add("hidden");
    $("#quizRunner").classList.remove("hidden");
    renderQuiz();
  }

  function renderQuiz() {
    const q = quiz.queue[quiz.idx];
    if (!q) return finishQuiz();
    $("#quizProgress").textContent = `Question ${quiz.idx + 1} of ${quiz.queue.length}`;
    $("#quizDomainLabel").textContent = q.domain;
    $("#quizQ").textContent = q.question;
    $("#quizNext").textContent = (quiz.idx === quiz.queue.length - 1) ? "Finish" : "Next →";

    const list = $("#quizOpts");
    list.innerHTML = "";
    q.options.forEach((opt, i) => {
      const li = document.createElement("li");
      li.className = "option";
      if (quiz.answers[quiz.idx] === i) li.classList.add("selected");
      li.innerHTML = `<span class="letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
      li.addEventListener("click", () => {
        quiz.answers[quiz.idx] = i;
        $$("#quizOpts .option").forEach(o => o.classList.remove("selected"));
        li.classList.add("selected");
      });
      list.appendChild(li);
    });
  }

  function nextQuiz() {
    if (quiz.answers[quiz.idx] == null) {
      // Allow skipping but warn once via subtle border flash
      const opts = $$("#quizOpts .option");
      opts.forEach(o => o.style.transition = "border-color 0.25s");
      opts.forEach(o => o.style.borderColor = "var(--danger)");
      setTimeout(() => opts.forEach(o => o.style.borderColor = ""), 350);
      return;
    }
    if (quiz.idx === quiz.queue.length - 1) finishQuiz();
    else { quiz.idx++; renderQuiz(); }
  }

  function finishQuiz() {
    const total = quiz.queue.length;
    const correct = quiz.queue.reduce((s, q, i) => s + (quiz.answers[i] === q.answer ? 1 : 0), 0);
    const pct = Math.round((correct / total) * 100);
    const pass = pct >= quiz.passMark;

    state.history.unshift({
      ts: Date.now(),
      domain: quiz.domain,
      total,
      correct,
      scorePct: pct,
      pass,
    });
    state.history = state.history.slice(0, 50);
    saveState();

    $("#quizRunner").classList.add("hidden");
    $("#quizResult").classList.remove("hidden");
    $("#quizResultHeader").textContent = pass ? "Nice work" : "Keep going";
    $("#scoreNumber").textContent = pct + "%";
    $("#scoreRing").style.setProperty("--p", pct);
    $("#scoreLine").textContent = `${correct} of ${total} correct · pass mark ${quiz.passMark}%`;
    const pf = $("#passFail");
    pf.textContent = pass ? "Pass" : "Below pass mark";
    pf.className = "badge " + (pass ? "pass" : "fail");

    const review = $("#quizReview");
    review.innerHTML = "";
    quiz.queue.forEach((q, i) => {
      const picked = quiz.answers[i];
      const right = picked === q.answer;
      const li = document.createElement("li");
      li.className = "review-item " + (right ? "right" : "wrong");
      const pickedText = picked != null ? `<span class="picked ${right ? "right" : "wrong"}">Your answer: ${String.fromCharCode(65 + picked)}. ${escapeHtml(q.options[picked])}</span>` : `<span class="picked wrong">No answer</span>`;
      const correctText = `<span class="picked right">Correct: ${String.fromCharCode(65 + q.answer)}. ${escapeHtml(q.options[q.answer])}</span>`;
      li.innerHTML = `
        <div class="meta"><span>${escapeHtml(q.domain)}</span><span>Q${i + 1}</span></div>
        <div class="qtext">${escapeHtml(q.question)}</div>
        ${pickedText}<br/>
        ${right ? "" : correctText + "<br/>"}
        <div class="expl">${escapeHtml(q.explanation)}</div>
      `;
      review.appendChild(li);
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  // ============================================================
  // Progress
  // ============================================================
  function renderProgress() {
    const body = $("#historyBody");
    body.innerHTML = "";
    if (!state.history.length) {
      body.innerHTML = `<tr><td colspan="4" class="muted">No attempts yet.</td></tr>`;
    } else {
      state.history.forEach(h => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${fmtDate(h.ts)}</td>
          <td>${escapeHtml(h.domain === "all" ? "All domains" : h.domain)}</td>
          <td>${h.correct}/${h.total} (${h.scorePct}%)</td>
          <td class="${h.pass ? "pass" : "fail"}">${h.pass ? "Pass" : "Fail"}</td>
        `;
        body.appendChild(tr);
      });
    }

    const list = $("#progressByDomain");
    list.innerHTML = "";
    uniqueDomains(FLASHCARDS).forEach(d => {
      const inDomain = FLASHCARDS.filter(c => c.domain === d);
      const known = inDomain.filter(c => state.cards[c.id] && state.cards[c.id].status === "known").length;
      const pct = inDomain.length ? Math.round((known / inDomain.length) * 100) : 0;
      const row = document.createElement("div");
      row.className = "progress-row";
      row.innerHTML = `
        <span class="pl-label">${escapeHtml(d)}</span>
        <span class="pl-count">${known} / ${inDomain.length} known (${pct}%)</span>
        <span class="bar"><span style="width:${pct}%"></span></span>
      `;
      list.appendChild(row);
    });
  }

  $("#resetAll").addEventListener("click", () => {
    if (!confirm("Reset all flashcard marks and quiz history? This cannot be undone.")) return;
    state.cards = {};
    state.history = [];
    saveState();
    renderProgress();
    renderDashboard();
  });

  // ============================================================
  // boot
  // ============================================================
  initPracticeControls();
  initQuizControls();
  renderDashboard();
})();
