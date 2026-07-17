"""
Generates RevenuePulse_Performance_Case_Study.pdf and
SupportDesk_Performance_Case_Study.pdf into public/case-studies/.

Builds a standalone HTML page per case study using the site's actual
design tokens (colors, radii, Geist fonts pulled from node_modules) and
embedded screenshots, then renders it to PDF with headless Chrome so the
output is pixel-accurate to real CSS instead of hand-drawn with a
PDF-drawing library.

Usage:
    python scripts/case-studies/generate.py
    # writes intermediate HTML into scripts/case-studies/dist/ (gitignored,
    # not published). Render each to PDF with headless Chrome, output
    # straight into public/case-studies/, e.g. on Windows:
    "C:/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu \
      --no-pdf-header-footer --print-to-pdf="public/case-studies/RevenuePulse_Performance_Case_Study.pdf" \
      "file:///<repo>/scripts/case-studies/dist/RevenuePulse_Performance_Case_Study.html"

Edit the copy inside build_revenuepulse() / build_supportdesk() to update
case study content; the CSS mirrors src/app/globals.css and the
Badge/Eyebrow/Footer component styles, so keep them in sync if the live
site's design system changes.
"""

import base64
import os
import html as htmlmod

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
OUT_DIR = os.path.join(SCRIPT_DIR, "dist")

def b64_file(path):
    with open(path, "rb") as f:
        return base64.b64encode(f.read()).decode("ascii")

GEIST_SANS = b64_file(os.path.join(PROJECT, "node_modules/next/dist/next-devtools/server/font/geist-latin.woff2"))
GEIST_MONO = b64_file(os.path.join(PROJECT, "node_modules/next/dist/next-devtools/server/font/geist-mono-latin.woff2"))

def img_data_uri(rel_path):
    full = os.path.join(PROJECT, "public", rel_path.lstrip("/"))
    ext = os.path.splitext(full)[1].lstrip(".")
    return f"data:image/{ext};base64,{b64_file(full)}"

def esc(s):
    return htmlmod.escape(s, quote=False)

BASE_CSS = f"""
@font-face {{
  font-family: 'Geist';
  src: url(data:font/woff2;base64,{GEIST_SANS}) format('woff2');
  font-weight: 100 900;
  font-style: normal;
}}
@font-face {{
  font-family: 'Geist Mono';
  src: url(data:font/woff2;base64,{GEIST_MONO}) format('woff2');
  font-weight: 100 900;
  font-style: normal;
}}

@page {{
  size: 8.5in 11in;
  margin: 0;
}}

:root {{
  --background: #0a0a0a;
  --background-soft: #111111;
  --surface: #171717;
  --surface-elevated: #1f1f1f;
  --text-primary: #ffffff;
  --text-secondary: #a3a3a3;
  --text-muted: #737373;
  --border: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.18);
  --accent: #f5c542;
  --accent-soft: rgba(245, 197, 66, 0.12);
  --red: #f87171;
  --red-soft: rgba(248, 113, 113, 0.08);
  --red-border: rgba(248, 113, 113, 0.25);
  --green: #4ade80;
  --green-soft: rgba(74, 222, 128, 0.08);
  --green-border: rgba(74, 222, 128, 0.25);
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-xl: 1.5rem;
}}

* {{ box-sizing: border-box; }}

html, body {{
  margin: 0;
  padding: 0;
  background: var(--background);
  color: var(--text-primary);
  font-family: 'Geist', system-ui, sans-serif;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}}

.page {{
  width: 8.5in;
  padding: 0.55in 0.65in;
  position: relative;
}}
.page + .page {{
  page-break-before: always;
}}

.eyebrow {{
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--accent);
  display: block;
}}

.hero {{
  padding-bottom: 0.35in;
  margin-bottom: 0.3in;
  border-bottom: 1px solid var(--border);
}}
.hero .eyebrow {{ font-size: 0.8rem; }}
.hero h1 {{
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0.18in 0 0.08in 0;
}}
.hero .subtitle {{
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin: 0 0 0.22in 0;
}}
.pill-row {{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 0.28in;
}}
.pill {{
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  padding: 6px 14px;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-secondary);
}}
.metric-strip {{
  display: flex;
  gap: 0;
  border-top: 1px solid var(--border);
  padding-top: 0.22in;
}}
.metric {{
  padding: 0 0.35in;
  border-left: 1px solid var(--border);
}}
.metric:first-child {{ padding-left: 0; border-left: none; }}
.metric .value {{
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  white-space: nowrap;
}}
.metric .label {{
  font-size: 0.72rem;
  color: var(--text-secondary);
  margin-top: 2px;
}}

.section {{ margin-bottom: 0.32in; }}
.section .eyebrow {{ margin-bottom: 0.06in; }}
.section h2 {{
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 0.14in 0;
}}
.section p {{
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0 0 0.1in 0;
}}
.section ul {{
  margin: 0;
  padding: 0;
  list-style: none;
}}
.section li {{
  position: relative;
  padding-left: 20px;
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 0.1in;
}}
.section li::before {{
  content: "";
  position: absolute;
  left: 3px;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}}

.card {{
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  padding: 0.28in;
}}

.ba-grid {{
  display: flex;
  align-items: center;
  gap: 0.2in;
  margin-top: 0.15in;
  break-inside: avoid;
  page-break-inside: avoid;
}}
.ba-box {{
  flex: 1;
  border-radius: var(--radius-lg);
  padding: 0.22in 0.26in;
}}
.ba-box.before {{ background: var(--red-soft); border: 1px solid var(--red-border); }}
.ba-box.after {{ background: var(--green-soft); border: 1px solid var(--green-border); }}
.ba-box .label {{
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 4px;
}}
.ba-box.before .value {{ font-size: 1.6rem; font-weight: 700; color: var(--red); }}
.ba-box.after .value {{ font-size: 1.6rem; font-weight: 700; color: var(--green); }}
.ba-arrow {{
  font-size: 1.3rem;
  color: var(--text-muted);
}}

.code-block {{
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  background: #050505;
  overflow: hidden;
  margin-bottom: 0.18in;
  break-inside: avoid;
  page-break-inside: avoid;
}}
.code-block .chip-row {{
  padding: 0.12in 0.2in;
  border-bottom: 1px solid var(--border);
}}
.code-chip {{
  display: inline-flex;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 3px 10px;
  border-radius: 999px;
}}
.code-chip.before {{ background: var(--red-soft); color: var(--red); border: 1px solid var(--red-border); }}
.code-chip.after {{ background: var(--green-soft); color: var(--green); border: 1px solid var(--green-border); }}
.code-block pre {{
  margin: 0;
  padding: 0.2in;
  font-family: 'Geist Mono', monospace;
  font-size: 0.72rem;
  line-height: 1.6;
  color: #e5e5e5;
  white-space: pre-wrap;
  word-break: break-word;
}}

table.results {{
  width: 100%;
  border-collapse: collapse;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
}}
table.results thead tr {{ background: #000; }}
table.results th {{
  text-align: left;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  padding: 0.13in 0.18in;
  font-weight: 600;
}}
table.results td {{
  padding: 0.11in 0.18in;
  font-size: 0.85rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--border);
}}
table.results tbody tr:nth-child(even) {{ background: rgba(255,255,255,0.02); }}
table.results td.metric-name {{ color: var(--text-primary); font-weight: 500; }}

.shot-card {{
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  background: rgba(255,255,255,0.03);
  overflow: hidden;
  margin-bottom: 0.28in;
  break-inside: avoid;
  page-break-inside: avoid;
}}
.shot-card .shot-label {{
  padding: 0.13in 0.2in;
  border-bottom: 1px solid var(--border);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
}}
.shot-card img {{
  width: 100%;
  display: block;
}}
.shot-card .shot-caption {{
  padding: 0.13in 0.2in;
  border-top: 1px solid var(--border);
  font-size: 0.82rem;
  color: var(--text-secondary);
}}

.footer-band {{
  margin-top: 0.4in;
  border-top: 1px solid var(--border);
  padding-top: 0.22in;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  break-inside: avoid;
  page-break-inside: avoid;
}}
.footer-band .brand {{
  font-size: 1.05rem;
  font-weight: 700;
}}
.footer-band .brand .dot {{ color: var(--accent); }}
.footer-band .tagline {{
  font-size: 0.78rem;
  color: var(--text-secondary);
  margin-top: 3px;
}}
.footer-band .rightcol {{ text-align: right; }}
.footer-band .copyright {{
  font-size: 0.68rem;
  color: var(--text-muted);
  margin-top: 6px;
}}
"""

def hero_html(eyebrow, title, subtitle, pills, metrics):
    pill_html = "".join(f'<span class="pill">{esc(p)}</span>' for p in pills)
    metric_html = "".join(
        f'<div class="metric"><div class="value">{esc(m[0])}</div><div class="label">{esc(m[1])}</div></div>'
        for m in metrics
    )
    return f"""
    <div class="hero">
      <span class="eyebrow">{esc(eyebrow)}</span>
      <h1>{esc(title)}</h1>
      <p class="subtitle">{esc(subtitle)}</p>
      <div class="pill-row">{pill_html}</div>
      <div class="metric-strip">{metric_html}</div>
    </div>
    """

def section_html(num, label, heading, paragraphs=None, bullets=None, extra=""):
    p_html = "".join(f"<p>{esc(p)}</p>" for p in (paragraphs or []))
    b_html = ""
    if bullets:
        items = "".join(f"<li>{esc(b)}</li>" for b in bullets)
        b_html = f"<ul>{items}</ul>"
    return f"""
    <div class="section">
      <span class="eyebrow">{num} &mdash; {esc(label)}</span>
      <h2>{esc(heading)}</h2>
      {p_html}
      {b_html}
      {extra}
    </div>
    """

def before_after_callout(before, after):
    return f"""
    <div class="ba-grid">
      <div class="ba-box before"><div class="label">Before</div><div class="value">{esc(before)}</div></div>
      <div class="ba-arrow">&rarr;</div>
      <div class="ba-box after"><div class="label">After</div><div class="value">{esc(after)}</div></div>
    </div>
    """

def code_block(kind, code):
    return f"""
    <div class="code-block">
      <div class="chip-row"><span class="code-chip {kind}">{kind}</span></div>
      <pre>{esc(code)}</pre>
    </div>
    """

def results_table(rows):
    body = "".join(
        f'<tr><td class="metric-name">{esc(r[0])}</td><td>{esc(r[1])}</td><td>{esc(r[2])}</td></tr>'
        for r in rows
    )
    return f"""
    <table class="results">
      <thead><tr><th>Metric</th><th>Before</th><th>After</th></tr></thead>
      <tbody>{body}</tbody>
    </table>
    """

def shot_card(label, src, caption):
    return f"""
    <div class="shot-card">
      <div class="shot-label">{esc(label)}</div>
      <img src="{src}" alt="{esc(label)}" />
      <div class="shot-caption">{esc(caption)}</div>
    </div>
    """

def footer_band():
    return """
    <div class="footer-band">
      <div>
        <div class="brand">Hritwik<span class="dot">.</span></div>
        <div class="tagline">Frontend engineering for React &amp; Next.js products.</div>
      </div>
      <div class="rightcol">
        <div class="copyright">&copy; 2026 Hritwik Tiwary. Built with Next.js.</div>
      </div>
    </div>
    """

def build_page(inner_html):
    return f'<div class="page">{inner_html}</div>'

def wrap_document(title, pages_html):
    return f"""<!doctype html>
<html><head><meta charset="utf-8"><title>{esc(title)}</title><style>{BASE_CSS}</style></head>
<body>{''.join(pages_html)}</body></html>"""


# ---------------- RevenuePulse ----------------

def build_revenuepulse():
    doc_title = "RevenuePulse Performance Case Study"

    page1 = hero_html(
        "Performance Case Study",
        "RevenuePulse",
        "SaaS Revenue Analytics Dashboard — Performance Turnaround",
        ["React", "Next.js", "React Profiler", "useMemo", "useDeferredValue"],
        [("2000ms → 140ms", "Render Time"), ("14x", "Faster"), ("Profiler", "Validated")],
    )
    page1 += section_html(
        "01", "Overview", "Overview",
        paragraphs=["RevenuePulse is a React and Next.js SaaS analytics dashboard for monitoring recurring revenue and subscription activity — monthly recurring revenue, revenue trends, subscription analytics, customer metrics, retention, cohort analysis, and account management. As the underlying dataset grew, the dashboard began showing measurable rendering delays across its core interactions, particularly on the Revenue view where KPI cards, charts, and a searchable/filterable subscriptions table all update together."],
    )
    page1 += section_html(
        "02", "The Problem", "The Problem",
        paragraphs=["Users experienced slow KPI card loading, delayed revenue chart rendering, laggy subscription search, slow plan filtering, and a heavy dashboard refresh on every interaction. An initial React Profiler recording measured a commit render time of 2000ms on the Revenue page — long enough to be visibly perceived as the UI freezing rather than updating."],
        extra=before_after_callout("2000ms", "140ms"),
    )

    page2 = section_html(
        "03", "Root Cause Analysis", "Root Cause Analysis",
        bullets=[
            "KPI cards were artificially delayed before the dashboard became interactive, blocking perceived readiness.",
            "The revenue chart waited on the full commit cycle before rendering, delaying access to historical trend data.",
            "Changing the subscription plan filter triggered a full dashboard-wide re-render instead of a scoped update to just the affected view.",
            "Every search keystroke re-filtered the complete subscription dataset with no memoization, directly competing with the render pass for main-thread time.",
        ],
    )
    page2 += section_html(
        "04", "Diagnostic Methodology", "Diagnostic Methodology",
        bullets=[
            "Recorded an initial baseline using React DevTools Profiler on a cold load of the Revenue page to capture the unoptimized commit duration.",
            "Used the Profiler's flamegraph and ranked views to identify which components were re-rendering on each commit and why, via the “What caused this update?” panel.",
            "Cross-referenced render hotspots against Chrome DevTools' Performance panel to confirm whether time was spent in React's render phase, in expensive JS computation, or in layout/paint.",
            "Instrumented suspect computations (filtering, KPI aggregation) to confirm they were re-running on renders where their inputs hadn't actually changed.",
        ],
    )

    page3 = section_html(
        "05", "Optimizations Implemented", "Optimizations Implemented",
        bullets=[
            "Removed artificial delays from KPI and chart rendering so the UI reflects real data availability immediately.",
            "Memoized revenue calculations with useMemo so aggregate figures recompute only when the underlying dataset changes, not on every render.",
            "Memoized subscription filtering so filter operations run only when search text or the selected plan actually changes.",
            "Moved search-input handling off the render-blocking path using useDeferredValue, keeping typing responsive while filtering catches up.",
            "Reduced table rendering to the visible subscription rows rather than reconciling the full dataset on every update.",
        ],
    )
    page3 += f"""
    <div class="section">
      <span class="eyebrow">06 &mdash; Representative Fix (Before)</span>
      <h2>Before Optimization</h2>
      {code_block("before", "function RevenueSummary({ subscriptions, filter }) {\n  const filtered = subscriptions.filter(s => matches(s, filter));\n  const total = filtered.reduce((sum, s) => sum + s.mrr, 0);\n  // recalculates on EVERY render, including unrelated state changes\n  return <KpiCard value={total} />;\n}")}
    </div>
    """

    page4 = f"""
    <div class="section">
      <span class="eyebrow">06 &mdash; Representative Fix (After)</span>
      <h2>After Optimization</h2>
      {code_block("after", "function RevenueSummary({ subscriptions, filter }) {\n  const filtered = useMemo(\n    () => subscriptions.filter(s => matches(s, filter)),\n    [subscriptions, filter]\n  );\n  const total = useMemo(\n    () => filtered.reduce((sum, s) => sum + s.mrr, 0),\n    [filtered]\n  );\n  return <KpiCard value={total} />;\n}")}
    </div>
    """

    page5 = f'<div class="section"><span class="eyebrow">07 &mdash; Screenshot Assets</span><h2>Application &amp; Profiler Captures</h2></div>'
    page5 += shot_card("Application Dashboard", img_data_uri("images/revenuepulse/dashboard.png"), "Revenue dashboard after performance optimization.")
    page5 += shot_card("React Profiler Analysis", img_data_uri("images/revenuepulse/profiler.png"), "Optimized React Profiler capture showing reduced render time.")

    page6 = section_html("08", "Results Table", "Results", extra=results_table([
        ("Render Time", "2000ms", "140ms"),
        ("KPI Loading", "Delayed", "Immediate"),
        ("Chart Loading", "Slow", "Fast"),
        ("Search Responsiveness", "Laggy", "Smooth"),
        ("Filter Response", "Full-page refresh", "Scoped update"),
        ("Overall Dashboard Feel", "Poor", "Strong"),
    ]))
    page6 += section_html(
        "09", "Business Impact", "Business Impact",
        paragraphs=["For a revenue-monitoring tool, a 2-second freeze on every filter or search action isn't just a UX complaint — it directly undermines trust in a dashboard whose entire job is giving finance and growth teams fast, confident answers. Bringing the interaction down to 140ms moves the dashboard from feeling like a report you wait on to a tool you can actively explore."],
    )
    page6 += f"""
    <div class="section">
      <span class="eyebrow">10 &mdash; Techniques Used</span>
      <h2>Techniques</h2>
      <div class="pill-row">
        {''.join(f'<span class="pill">{esc(t)}</span>' for t in ["React Profiler", "useMemo", "useDeferredValue", "Memoized Computation", "Scoped Re-rendering", "Large-Dataset Optimization"])}
      </div>
    </div>
    """
    page6 += footer_band()

    pages = [page1, page2, page3, page4, page5, page6]
    html_pages = [build_page(p) for p in pages]
    return wrap_document(doc_title, html_pages)


# ---------------- SupportDesk ----------------

def build_supportdesk():
    doc_title = "SupportDesk Performance Case Study"

    page1 = hero_html(
        "Performance Case Study",
        "SupportDesk",
        "Enterprise Ticketing Platform — Performance Turnaround",
        ["React", "Next.js", "Debounced Search", "Pagination", "Large Datasets"],
        [("3675ms → 2.3ms", "Render Time"), ("1500x", "Faster"), ("10,000", "Records Tested")],
    )
    page1 += section_html(
        "01", "Overview", "Overview",
        paragraphs=["SupportDesk is a React and Next.js ticketing platform for managing customer support operations — ticket management, search, advanced filtering, agent assignment, and support operations tracking. As ticket volume grew to 10,000 records, the Tickets page — the primary daily-use view for support agents — began showing significant rendering and interaction delays."],
    )
    page1 += section_html(
        "02", "The Problem", "The Problem",
        paragraphs=["Users reported a slow initial page load, laggy search, and slow filtering on the Tickets table. An initial React Profiler recording measured a commit render time of 3675ms on that view, with every keystroke in search and every filter change re-triggering the same expensive work."],
        extra=before_after_callout("3675ms", "2.3ms"),
    )

    page2 = section_html(
        "03", "Root Cause Analysis", "Root Cause Analysis",
        bullets=[
            "The full 10,000-ticket dataset was regenerated from scratch on every render instead of being created once and reused.",
            "Each filter change re-filtered, re-sorted, and re-rendered the entire ticket table rather than a scoped subset.",
            "Every search keystroke triggered a full dataset scan, sort, and re-render, with no memoization and additional unnecessary computation sitting directly in the search path.",
            "The table rendered all 10,000 rows to the DOM regardless of what was actually visible in the viewport.",
        ],
    )
    page2 += section_html(
        "04", "Diagnostic Methodology", "Diagnostic Methodology",
        bullets=[
            "Captured a baseline Profiler recording while typing in the search box and toggling filters, to isolate whether the bottleneck was data generation, filtering logic, or DOM rendering.",
            "Used the Profiler's commit-duration timeline to confirm the render cost scaled directly with dataset size rather than with the number of visible rows — a strong signal that pagination, not just memoization, was needed.",
            "Checked CPU usage in Chrome DevTools' Performance panel during rapid typing to quantify how much main-thread time was spent in redundant filter/sort work versus actual rendering.",
            "Validated each optimization incrementally — memoization first, then debouncing, then pagination — re-profiling after each change to confirm which fix contributed the most before moving to the next.",
        ],
    )

    page3 = section_html(
        "05", "Optimizations Implemented", "Optimizations Implemented",
        bullets=[
            "Memoized dataset generation so the 10,000-ticket dataset is created once and reused across renders instead of regenerated each time.",
            "Memoized filtering logic so filter operations recompute only when their actual inputs (status, priority, assignee, search text) change.",
            "Added debounced search input alongside useDeferredValue and precomputed search text, so rapid typing no longer triggers a full scan on every keystroke.",
            "Removed unnecessary computation that had crept into the search path over time.",
            "Paginated the ticket table to 50 rows per page instead of rendering all 10,000 rows to the DOM at once.",
        ],
    )
    page3 += f"""
    <div class="section">
      <span class="eyebrow">06 &mdash; Representative Fix (Before)</span>
      <h2>Before Optimization</h2>
      {code_block("before", "function TicketsTable({ tickets, filters }) {\n  const visible = tickets\n    .filter(t => matchesFilters(t, filters))\n    .sort(byUpdatedDesc);\n  // full 10,000-row scan + sort on every keystroke\n  return visible.map(t => <TicketRow key={t.id} ticket={t} />);\n}")}
    </div>
    """

    page4 = f"""
    <div class="section">
      <span class="eyebrow">06 &mdash; Representative Fix (After)</span>
      <h2>After Optimization</h2>
      {code_block("after", "function TicketsTable({ tickets, filters, page }) {\n  const deferredFilters = useDeferredValue(filters);\n  const visible = useMemo(\n    () => tickets.filter(t => matchesFilters(t, deferredFilters))\n              .sort(byUpdatedDesc),\n    [tickets, deferredFilters]\n  );\n  const pageRows = visible.slice(page * 50, page * 50 + 50);\n  return pageRows.map(t => <TicketRow key={t.id} ticket={t} />);\n}")}
    </div>
    """

    page5 = f'<div class="section"><span class="eyebrow">07 &mdash; Screenshot Assets</span><h2>Application &amp; Profiler Captures</h2></div>'
    page5 += shot_card("SupportDesk Dashboard", img_data_uri("images/supportdesk/dashboard.png"), "Ticketing dashboard after performance optimization.")
    page5 += shot_card("React Profiler Analysis", img_data_uri("images/supportdesk/profiler.png"), "Optimized React Profiler capture showing reduced render time.")

    page6 = section_html("08", "Results Table", "Results", extra=results_table([
        ("Render Time", "3675ms", "2.3ms"),
        ("Search Responsiveness", "Laggy", "Smooth"),
        ("Filter Response", "Slow", "Fast"),
        ("Rows Rendered per Page", "10,000", "50"),
        ("CPU Usage While Typing", "High", "Lower"),
        ("Overall Responsiveness", "Poor", "Strong"),
    ]))
    page6 += section_html(
        "09", "Business Impact", "Business Impact",
        paragraphs=["Support agents work inside this ticket table for most of their shift — every second of lag on search or filtering is a second multiplied across every agent, every ticket, every day. A near-instant table (2.3ms) instead of a multi-second freeze (3675ms) turns a tool agents have to work around into one that keeps pace with how quickly they actually need to triage and respond."],
    )
    page6 += f"""
    <div class="section">
      <span class="eyebrow">10 &mdash; Techniques Used</span>
      <h2>Techniques</h2>
      <div class="pill-row">
        {''.join(f'<span class="pill">{esc(t)}</span>' for t in ["React Profiler", "useMemo", "useDeferredValue", "Debounced Search", "Pagination", "Large-Dataset Optimization"])}
      </div>
    </div>
    """
    page6 += footer_band()

    pages = [page1, page2, page3, page4, page5, page6]
    html_pages = [build_page(p) for p in pages]
    return wrap_document(doc_title, html_pages)


if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    rp = build_revenuepulse()
    sd = build_supportdesk()
    with open(os.path.join(OUT_DIR, "RevenuePulse_Performance_Case_Study.html"), "w", encoding="utf-8") as f:
        f.write(rp)
    with open(os.path.join(OUT_DIR, "SupportDesk_Performance_Case_Study.html"), "w", encoding="utf-8") as f:
        f.write(sd)
    print(f"Wrote HTML to {OUT_DIR}. Render each to PDF with headless Chrome (see module docstring).")
