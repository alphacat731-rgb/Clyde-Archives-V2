(() => {
  const ICONS = {
    bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="4"/><path d="M12 2v3"/><circle cx="8.5" cy="12" r="1"/><circle cx="15.5" cy="12" r="1"/><path d="M8 16h8"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16 8 14 14 8 16 10 10 16 8"/></svg>',
    sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 15l.7 1.9 1.8.6-1.8.6L19 20l-.7-1.9-1.8-.6 1.8-.6L19 15z"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2-.5-.5-.7-1.1-.7-1.7 0-1.4 1.1-2.5 2.5-2.5H19c1.7 0 3-2.2 3-4.7C22 5.6 17.5 2 12 2Z"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/></svg>',
    smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v1a7 7 0 0 0 14 0v-1M12 18v4M8 22h8"/></svg>',
    headphones: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 16v3a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 1zM3 16v3a2 2 0 0 0 2 2h2v-6H5a2 2 0 0 0-2 1z"/></svg>',
    settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    imageoff: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="2" x2="22" y2="22"/><path d="M10.7 6.7A2 2 0 0 1 12 6h7a2 2 0 0 1 2 2v7a2 2 0 0 1-.3 1.1"/><path d="M4 8.2A2 2 0 0 1 5 8h1.5"/><path d="M4 16l4-4 3 3"/><path d="M21 15l-4-4-2 2"/><path d="M3 21h18"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>'
  };

  const CATEGORY_TERMS = {
    all: 'Discord Clyde mascot',
    rebrand: 'Discord Clyde 2021 rebrand',
    fanart: 'Discord Clyde fan art',
    memes: 'Discord Clyde meme'
  };

  const SUGGESTIONS = ['furry Clyde', 'anthro Clyde', 'Clyde Discord', 'Clyde fanart', 'Discord mascot', '2021 Clyde'];
  const searchForm = document.getElementById('search-form');
  const input = document.getElementById('search-input');
  const grid = document.getElementById('art-grid');
  const loadingGrid = document.getElementById('loading-grid');
  const emptyState = document.getElementById('empty-state');
  const errorState = document.getElementById('error-state');
  const errorText = document.getElementById('error-text');
  const retryButton = document.getElementById('retry-button');
  const sectionTitle = document.getElementById('section-title');
  const resultCount = document.getElementById('result-count');
  const clearButton = document.getElementById('clear-search');
  const suggestions = document.getElementById('suggestions');
  const moreHint = document.getElementById('more-hint');
  const clydeSuggestion = document.getElementById('clyde-suggestion');
  const searchButton = document.getElementById('search-button');
  const searchSpinner = document.getElementById('search-spinner');
  const statusIcon = document.getElementById('status-icon');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  let controller = null;
  let lastTerm = '';
  let activeCategory = 'all';

  function paintIcons() {
    document.querySelectorAll('[data-icon]').forEach((el) => {
      const name = el.getAttribute('data-icon');
      if (ICONS[name]) el.innerHTML = ICONS[name];
    });
  }

  function normalize(text) {
    return String(text || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function words(text) {
    return normalize(text).split(/[^a-z0-9]+/).filter(Boolean);
  }

  function cleanText(text, fallback = '') {
    const value = String(text ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return value || fallback;
  }

  function escapeHtml(text) {
    return String(text).replace(/[&<>'"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function sourceLabel(source) {
    return normalize(source).includes('wikimedia') ? 'Wikimedia' : 'Openverse';
  }

  function buildQueries(term) {
    const q = term.trim();
    const n = normalize(q);
    const hasClyde = /\bclyde\b/.test(n);
    const hasDiscord = /\bdiscord\b/.test(n);
    const hasFurry = /\bfurry\b|\banthro\b|\banthropomorphic\b/.test(n);
    if (hasClyde || hasDiscord) {
      const out = [q];
      if (!hasClyde) out.push(`${q} Clyde`);
      if (!hasDiscord) out.push(`${q} Discord`);
      if (hasFurry) out.push(`Discord Clyde furry`, `Clyde furry Discord`, `Discord Clyde anthro`, `Clyde anthropomorphic Discord`);
      else out.push(`Clyde Discord mascot`, `Discord Clyde fan art`);
      return [...new Set(out)].slice(0, 6);
    }
    return [q, `${q} Clyde Discord`, `Discord Clyde ${q}`].slice(0, 3);
  }

  function searchText(item) {
    return normalize([
      item.title, item.description, item.artist, item.source, item.license,
      ...(item.tags || [])
    ].join(' '));
  }

  function isObviousBadResult(text) {
    const bad = ['porn', 'nsfw', 'nude', 'explicit', 'hentai', 'fetish', 'xxx', 'erotic', 'sexual'];
    return bad.some((term) => new RegExp(`\\b${term}\\b`, 'i').test(text));
  }

  function scoreItem(item, query) {
    const text = searchText(item);
    const q = normalize(query);
    const qWords = words(query);
    let score = 0;
    if (text.includes('clyde')) score += 90;
    if (text.includes('discord')) score += 70;
    if (text.includes('mascot')) score += 30;
    if (text.includes('fan art') || text.includes('fanart')) score += 25;
    if (text.includes('furry')) score += 40;
    if (text.includes('anthro') || text.includes('anthropomorphic')) score += 40;
    if (text.includes('2021') || text.includes('rebrand')) score += 20;
    if (q && text.includes(q)) score += 35;
    for (const w of qWords) if (w.length > 2 && text.includes(w)) score += 7;
    if (item.source === 'Openverse') score += 5;
    if (isObviousBadResult(text)) score -= 1000;
    return score;
  }

  async function fetchJson(url, signal) {
    const response = await fetch(url, { signal, headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  }

  async function openverse(query, signal) {
    const url = new URL('https://api.openverse.org/v1/images/');
    url.searchParams.set('q', query);
    url.searchParams.set('page_size', '24');
    url.searchParams.set('mature', 'false');
    const data = await fetchJson(url, signal);
    return (data.results || []).map((r) => ({
      id: `ov:${r.id || r.identifier || r.url}`,
      title: cleanText(r.title, 'Untitled Clyde artwork'),
      description: cleanText(r.description),
      artist: cleanText(r.creator, 'Unknown artist'),
      thumbUrl: r.thumbnail || r.url,
      fullUrl: r.url || r.thumbnail,
      descUrl: r.foreign_landing_url || r.source || 'https://openverse.org/',
      source: 'Openverse',
      license: cleanText(r.license),
      tags: (r.tags || []).map((t) => typeof t === 'string' ? t : t?.name).filter(Boolean)
    }));
  }

  async function wikimedia(query, signal) {
    const url = new URL('https://commons.wikimedia.org/w/api.php');
    url.searchParams.set('action', 'query');
    url.searchParams.set('generator', 'search');
    url.searchParams.set('gsrsearch', query);
    url.searchParams.set('gsrnamespace', '6');
    url.searchParams.set('gsrlimit', '24');
    url.searchParams.set('prop', 'imageinfo|info');
    url.searchParams.set('iiprop', 'url|mime|extmetadata');
    url.searchParams.set('iiurlwidth', '640');
    url.searchParams.set('format', 'json');
    url.searchParams.set('origin', '*');
    const data = await fetchJson(url, signal);
    return Object.values(data.query?.pages || {}).map((r) => ({
      id: `wm:${r.pageid}`,
      title: cleanText(r.title?.replace(/^File:/, ''), 'Untitled Clyde artwork'),
      description: cleanText(r.imageinfo?.[0]?.extmetadata?.ImageDescription?.value),
      artist: cleanText(r.imageinfo?.[0]?.extmetadata?.Artist?.value, 'Wikimedia Commons'),
      thumbUrl: r.imageinfo?.[0]?.thumburl || r.imageinfo?.[0]?.url,
      fullUrl: r.imageinfo?.[0]?.url || r.imageinfo?.[0]?.thumburl,
      descUrl: `https://commons.wikimedia.org/wiki/${encodeURIComponent(r.title).replace(/%2F/g, '/')}`,
      source: 'Wikimedia Commons',
      license: cleanText(r.imageinfo?.[0]?.extmetadata?.LicenseShortName?.value),
      tags: []
    }));
  }

  async function searchImages(term, signal) {
    const queries = buildQueries(term);
    const results = [];
    const tasks = [];
    for (const q of queries) {
      tasks.push(openverse(q, signal).catch(() => []));
      if (q === queries[0] || /clyde/i.test(q)) tasks.push(wikimedia(q, signal).catch(() => []));
    }
    const batches = await Promise.all(tasks);
    batches.flat().forEach((item) => results.push(item));

    const seen = new Set();
    const ranked = [];
    const wantsClyde = /\bclyde\b|\bdiscord\b/i.test(term);
    for (const item of results) {
      const key = item.fullUrl || item.thumbUrl || item.id;
      if (!key || seen.has(key)) continue;
      seen.add(key);
      const text = searchText(item);
      const score = scoreItem(item, term);
      if (wantsClyde && !/\bclyde\b|\bdiscord\b/i.test(text)) continue;
      if (isObviousBadResult(text)) continue;
      ranked.push({ ...item, score });
    }
    ranked.sort((a, b) => b.score - a.score);
    return ranked.slice(0, 48);
  }

  function setBusy(busy) {
    searchButton.disabled = busy;
    searchSpinner.classList.toggle('hidden', !busy);
  }

  function showLoading() {
    emptyState.classList.add('hidden');
    errorState.classList.add('hidden');
    moreHint.classList.add('hidden');
    grid.innerHTML = '';
    loadingGrid.innerHTML = Array.from({ length: 8 }, () => '<div class="skeleton"></div>').join('');
    loadingGrid.classList.remove('hidden');
    sectionTitle.textContent = 'Searching real image sources...';
    resultCount.textContent = '';
    statusIcon.innerHTML = ICONS.search;
    setBusy(true);
  }

  function hideLoading() {
    loadingGrid.classList.add('hidden');
    setBusy(false);
  }

  function renderCards(items) {
    grid.innerHTML = items.map((item) => {
      const title = escapeHtml(item.title || 'Untitled');
      const artist = escapeHtml(item.artist || 'Unknown artist');
      const desc = escapeHtml(cleanText(item.description));
      const badge = escapeHtml(sourceLabel(item.source));
      const img = escapeHtml(item.thumbUrl || item.fullUrl || '');
      const date = escapeHtml(item.license || 'Open image source');
      return `<article class="art-card cursor-pointer" data-id="${escapeHtml(item.id)}">
        <div class="art-image-wrap">
          <span class="source-badge">${badge}</span>
          <img class="art-image" loading="lazy" src="${img}" alt="${title}" referrerpolicy="no-referrer">
          <div class="art-overlay"><span class="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white"><span class="icon h-5 w-5" data-icon="eye"></span></span></div>
        </div>
        <div class="p-3">
          <h3 class="truncate text-sm font-semibold text-white" title="${title}">${title}</h3>
          ${desc ? `<p class="mt-1 line-clamp-2 text-xs text-[#949ba4]">${desc}</p>` : ''}
          <div class="mt-2.5 flex items-center justify-between gap-2 text-[11px] text-[#949ba4]">
            <span class="truncate">${artist}</span>
            <span class="shrink-0">${date}</span>
          </div>
        </div>
      </article>`;
    }).join('');
    grid.querySelectorAll('.art-card').forEach((card, index) => card.addEventListener('click', () => openLightbox(items[index])));
    paintIcons();
  }

  function showEmpty(term) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    moreHint.classList.add('hidden');
    sectionTitle.textContent = `No Clyde images found for “${term}”`;
    resultCount.textContent = '';
    suggestions.innerHTML = SUGGESTIONS.map((s) => `<button data-suggestion="${escapeHtml(s)}" class="rounded-full bg-[#2b2d31] border border-[#3b3d44] px-3.5 py-1.5 text-sm text-white transition hover:bg-[#5865f2] hover:border-[#5865f2]">${escapeHtml(s)}</button>`).join('');
    suggestions.querySelectorAll('[data-suggestion]').forEach((b) => b.addEventListener('click', () => runSearch(b.getAttribute('data-suggestion'))));
  }

  function showError(message) {
    grid.innerHTML = '';
    errorState.classList.remove('hidden');
    moreHint.classList.add('hidden');
    sectionTitle.textContent = 'Search failed — please try again';
    resultCount.textContent = '';
    errorText.textContent = message;
  }

  function openLightbox(item) {
    const src = item.fullUrl || item.thumbUrl;
    if (!src) return;
    lightboxImg.src = src;
    lightboxImg.alt = item.title || 'Clyde artwork';
    lightboxCaption.innerHTML = `<div class="font-semibold">${escapeHtml(item.title || 'Clyde artwork')}</div><div class="mt-1 text-[#949ba4]">${escapeHtml(item.artist || item.source || 'Unknown artist')}</div><a class="mt-2 inline-flex items-center gap-1 text-[#5865f2] hover:underline" href="${escapeHtml(item.descUrl || src)}" target="_blank" rel="noopener noreferrer">Open source <span class="icon h-3.5 w-3.5" data-icon="external"></span></a>`;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    paintIcons();
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    lightboxImg.src = '';
  }

  async function runSearch(term) {
    const q = String(term || '').trim();
    if (!q) return;
    lastTerm = q;
    input.value = q;
    clearButton.classList.remove('hidden');
    clearButton.classList.add('flex');
    if (controller) controller.abort();
    controller = new AbortController();
    showLoading();
    try {
      const results = await searchImages(q, controller.signal);
      if (controller.signal.aborted) return;
      hideLoading();
      if (!results.length) {
        showEmpty(q);
        return;
      }
      emptyState.classList.add('hidden');
      errorState.classList.add('hidden');
      renderCards(results);
      sectionTitle.textContent = `Clyde results for “${q}”`;
      resultCount.textContent = `· ${results.length} images`;
      statusIcon.innerHTML = ICONS.sparkles;
      moreHint.classList.remove('hidden');
    } catch (err) {
      if (err?.name === 'AbortError') return;
      hideLoading();
      showError(`The public image sources could not be reached. ${err?.message || ''}`.trim());
    } finally {
      if (!controller?.signal.aborted) setBusy(false);
    }
  }

  function clearSearch() {
    input.value = '';
    clearButton.classList.add('hidden');
    clearButton.classList.remove('flex');
    runSearch(CATEGORY_TERMS[activeCategory]);
  }

  searchForm.addEventListener('submit', (e) => { e.preventDefault(); runSearch(input.value); });
  clearButton.addEventListener('click', clearSearch);
  retryButton.addEventListener('click', () => runSearch(lastTerm || CATEGORY_TERMS[activeCategory]));
  clydeSuggestion.addEventListener('click', () => runSearch('Clyde Discord'));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  lightboxClose.addEventListener('click', closeLightbox);

  document.querySelectorAll('[data-category]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-category]').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      input.value = '';
      clearButton.classList.add('hidden');
      clearButton.classList.remove('flex');
      runSearch(CATEGORY_TERMS[activeCategory]);
    });
  });

  paintIcons();
  document.getElementById('suggestions').innerHTML = SUGGESTIONS.map((s) => `<button data-suggestion="${escapeHtml(s)}" class="rounded-full bg-[#2b2d31] border border-[#3b3d44] px-3.5 py-1.5 text-sm text-white transition hover:bg-[#5865f2] hover:border-[#5865f2]">${escapeHtml(s)}</button>`).join('');
  document.querySelectorAll('[data-suggestion]').forEach((b) => b.addEventListener('click', () => runSearch(b.getAttribute('data-suggestion'))));
  runSearch(CATEGORY_TERMS.all);
})();
