(function () {
  'use strict';

  var config = window.SoloOpsGuideSearch || {};
  var indexUrl = config.indexUrl || '/search-index.json';

  var form = document.querySelector('[data-search-form]');
  var input = document.getElementById('search-page-input');
  var filtersEl = document.querySelector('[data-search-filters]');
  var statusEl = document.querySelector('[data-search-status]');
  var resultsEl = document.querySelector('[data-search-results]');

  if (!form || !input || !resultsEl || !statusEl) return;

  // Synonym map — supports "problem-first" discovery so readers can type a
  // blocker in their own words and still land on the right page.
  var SYNONYMS = {
    approval: ['approve', 'approved', 'approves', 'signoff', 'sign-off', 'acceptance', 'accept', 'approver'],
    billing: ['invoice', 'invoicing', 'payment', 'pay', 'bill', 'billable'],
    onboarding: ['onboard', 'kickoff', 'kick-off', 'intake', 'start', 'beginning'],
    offboarding: ['offboard', 'wrap-up', 'wrapup', 'closeout', 'close-out', 'closing', 'end', 'ending', 'final'],
    closeout: ['close-out', 'offboarding', 'offboard', 'wrap', 'wrap-up', 'final', 'ending'],
    handoff: ['handover', 'hand-off', 'hand-over', 'delivery', 'deliver', 'handoffs'],
    delivery: ['handoff', 'handover', 'deliver', 'deliverables'],
    silence: ['ghost', 'ghosted', 'ghosting', 'no-response', 'unresponsive', 'quiet', 'silent'],
    stalled: ['stuck', 'blocked', 'stall', 'pause', 'paused'],
    crm: ['client-relationship', 'contacts', 'pipeline'],
    pm: ['project-management', 'project-manager', 'pmtool'],
    'project-management': ['pm'],
    scope: ['scoping', 'change-request', 'changes'],
    workflow: ['workflows', 'process', 'sequence', 'system'],
    stack: ['tools', 'toolset', 'software'],
    comparison: ['versus', 'vs', 'compare'],
    template: ['templates', 'checklist', 'worksheet'],
    glossary: ['definition', 'term'],
    faq: ['question', 'questions'],
    proposal: ['contract', 'proposals'],
    client: ['customer']
  };

  function expand(token) {
    var out = [token];
    if (SYNONYMS[token]) out = out.concat(SYNONYMS[token]);
    return out;
  }

  function tokenize(q) {
    return q.toLowerCase().split(/[^a-z0-9]+/).filter(function (t) { return t.length > 1; });
  }

  function normalize(s) {
    return (s || '').toString().toLowerCase();
  }

  // Score a page against an array of query tokens.
  // Weights roughly reflect editorial authority: title and tags are the
  // strongest signals, then description/summary, then body excerpt.
  function scorePage(page, tokens) {
    var title = normalize(page.title);
    var desc = normalize(page.description) + ' ' + normalize(page.summary);
    var tags = (page.tags || []).map(normalize).join(' ') + ' ' + normalize(page.category) + ' ' + normalize(page.type) + ' ' + normalize(page.section);
    var body = normalize(page.excerpt);

    var score = 0;
    var matchedTokens = 0;

    for (var i = 0; i < tokens.length; i++) {
      var variants = expand(tokens[i]);
      var tokenMatched = false;

      for (var j = 0; j < variants.length; j++) {
        var v = variants[j];
        var weight = j === 0 ? 1 : 0.6; // original token scores higher than synonym
        if (title.indexOf(v) !== -1) { score += 10 * weight; tokenMatched = true; }
        if (tags.indexOf(v) !== -1) { score += 6 * weight; tokenMatched = true; }
        if (desc.indexOf(v) !== -1) { score += 4 * weight; tokenMatched = true; }
        if (body.indexOf(v) !== -1) { score += 1 * weight; tokenMatched = true; }
      }

      if (tokenMatched) matchedTokens++;
    }

    // Require all tokens to match something somewhere — avoids noisy partial hits.
    if (matchedTokens < tokens.length) return 0;

    // Small boost for priority / cornerstone roles so hubs and anchors
    // surface first when a broad keyword matches many pages.
    if (page.role === 'hub' || page.role === 'workflow-anchor' || page.role === 'pillar') score += 2;

    return score;
  }

  var SECTION_LABELS = {
    'client-workflow-systems': 'Workflow',
    'software-stack-blueprints': 'Blueprint',
    'workflow-comparisons': 'Comparison',
    'templates-checklists': 'Template',
    'glossary': 'Glossary',
    'faq': 'FAQ'
  };

  function renderResults(pages) {
    resultsEl.innerHTML = '';
    var frag = document.createDocumentFragment();

    pages.forEach(function (p) {
      var li = document.createElement('li');
      li.className = 'search-result';

      var label = SECTION_LABELS[p.section] || (p.section || 'Page');
      var desc = p.description || p.summary || '';

      var labelSpan = document.createElement('span');
      labelSpan.className = 'search-result-label';
      labelSpan.textContent = label;

      var a = document.createElement('a');
      a.className = 'search-result-title';
      a.href = p.url;
      a.textContent = p.title;

      var descP = document.createElement('p');
      descP.className = 'search-result-desc';
      descP.textContent = desc;

      li.appendChild(labelSpan);
      li.appendChild(a);
      if (desc) li.appendChild(descP);
      frag.appendChild(li);
    });

    resultsEl.appendChild(frag);
  }

  var indexData = null;
  var indexLoading = null;
  var currentFilter = 'all';
  var lastQuery = '';

  function loadIndex() {
    if (indexData) return Promise.resolve(indexData);
    if (indexLoading) return indexLoading;
    indexLoading = fetch(indexUrl, { credentials: 'same-origin' })
      .then(function (r) {
        if (!r.ok) throw new Error('search index http ' + r.status);
        return r.json();
      })
      .then(function (data) {
        indexData = data;
        return data;
      })
      .catch(function (err) {
        indexLoading = null;
        throw err;
      });
    return indexLoading;
  }

  function runSearch(q) {
    lastQuery = q;
    var trimmed = (q || '').trim();

    if (!trimmed) {
      resultsEl.innerHTML = '';
      statusEl.textContent = 'Type a keyword above to search across SoloOpsGuide.';
      return;
    }

    statusEl.textContent = 'Searching...';

    loadIndex().then(function (data) {
      var tokens = tokenize(trimmed);
      if (tokens.length === 0) {
        statusEl.textContent = 'Type a longer keyword to search.';
        resultsEl.innerHTML = '';
        return;
      }

      var scored = [];
      for (var i = 0; i < data.length; i++) {
        var page = data[i];
        if (currentFilter !== 'all' && page.section !== currentFilter) continue;
        var s = scorePage(page, tokens);
        if (s > 0) scored.push({ score: s, page: page });
      }

      scored.sort(function (a, b) { return b.score - a.score; });
      var top = scored.slice(0, 40).map(function (x) { return x.page; });

      if (top.length === 0) {
        resultsEl.innerHTML = '';
        statusEl.textContent = 'No results for "' + trimmed + '"' + (currentFilter !== 'all' ? ' in ' + (SECTION_LABELS[currentFilter] || currentFilter) : '') + '. Try a broader keyword or remove the section filter.';
        return;
      }

      statusEl.textContent = top.length + ' result' + (top.length === 1 ? '' : 's') + ' for "' + trimmed + '"' + (currentFilter !== 'all' ? ' in ' + (SECTION_LABELS[currentFilter] || currentFilter) : '') + '.';
      renderResults(top);

      if (window.SoloOpsGuide && typeof window.SoloOpsGuide.track === 'function') {
        window.SoloOpsGuide.track('internal_search_query', {
          location: 'search-page',
          label: 'internal',
          query: trimmed,
          filter: currentFilter,
          result_count: top.length
        });
      }
    }).catch(function () {
      statusEl.textContent = 'Search is temporarily unavailable. Please try again in a moment.';
    });
  }

  function updateUrl(q) {
    if (!window.history || !window.history.replaceState) return;
    var url = new URL(window.location.href);
    if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
    if (currentFilter && currentFilter !== 'all') url.searchParams.set('type', currentFilter);
    else url.searchParams.delete('type');
    window.history.replaceState({}, '', url.toString());
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    updateUrl(input.value);
    runSearch(input.value);
  });

  var debounceTimer = null;
  input.addEventListener('input', function () {
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      updateUrl(input.value);
      runSearch(input.value);
    }, 140);
  });

  if (filtersEl) {
    filtersEl.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var filter = btn.getAttribute('data-filter');
      currentFilter = filter;
      var buttons = filtersEl.querySelectorAll('[data-filter]');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('is-active', buttons[i] === btn);
      }
      updateUrl(input.value);
      runSearch(input.value);
    });
  }

  // Initial state from URL
  try {
    var params = new URLSearchParams(window.location.search);
    var qParam = params.get('q');
    var typeParam = params.get('type');
    if (typeParam && filtersEl) {
      var match = filtersEl.querySelector('[data-filter="' + typeParam + '"]');
      if (match) {
        currentFilter = typeParam;
        var buttons2 = filtersEl.querySelectorAll('[data-filter]');
        for (var k = 0; k < buttons2.length; k++) {
          buttons2[k].classList.toggle('is-active', buttons2[k] === match);
        }
      }
    }
    if (qParam) {
      input.value = qParam;
      runSearch(qParam);
    }
  } catch (err) { /* ignore */ }
})();
