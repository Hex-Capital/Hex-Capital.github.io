# Rex

> AI Operations Partner for Enterprise Order to Cash

| Field | Value |
|-------|-------|
| Website | https://www.rex.inc |
| YC Page | https://www.ycombinator.com/companies/rex-inc |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Finance and Accounting |
| Team Size | 2 |
| Location | London, United Kingdom |
| Tags | B2B, Enterprise Software, AI |
| YC Partner | Vivian Midha Shen |
| Emails | hello@rex.inc (rex.inc website) |

## The Idea

- **Problem:** Enterprise order-to-cash (invoicing, collections, exceptions) remains heavily manual at scale because work is buried in emails, customer portals, and handoffs — Rex states O2C is a "$60B outsourced function" because traditional automation fails on messy exceptions (YC page; rex.inc).
- **Approach:** Deploys "a network of AI agents" that continuously triage inboxes, post to supplier portals, monitor payment cadence, and manage exceptions across ERPs (NetSuite, SAP, Dynamics, Workday, Oracle Fusion) with human-in-the-loop oversight (rex.inc product page).
- **Differentiation:** Rules-based AR suites (HighRadius, BlackLine, Versapay) automate within deterministic workflows; Rex positions as an "AI-native service" replacing labor rather than software augmenting it, priced on outcomes rather than seats (rex.inc; YC page).
- **Business Model:** "Outcome and SLA-based pricing — pay for outcomes only," no per-seat or per-invoice tier published (rex.inc pricing copy); [Inferred]: Implies enterprise contract billing tied to receivables managed or DSO targets, not headcount displaced.
- **TAM/SAM:** Company cites "$60B outsourced function" for O2C (YC page, 2026, no third-party source given); broader BPO market reported at $250B–$435B in 2025 with AI-in-BPO subsegment forecast $2.6B (2023) → $49.6B (2033) at 34.3% CAGR (Mixflow/Outsource Accelerator, 2025).
- **GTM / Distribution:** Direct enterprise sales to pre-IPO tech and Fortune 100 finance teams, with enterprise auth (WorkOS SSO/SCIM) implemented from day one to clear procurement (WorkOS case study, 2026); [Inferred]: founders' Sequence customer network (Cognition, Incident.io referenced as Sequence customers) likely seeds early pipeline.

## Defensibility

- **Moat today:** Live deployments managing ">$500M in receivables from F100 companies" with cited 90%+ inbox auto-triage rate, 12-day DSO reduction, and 15 hrs/week saved per AR operator (rex.inc, YC page) — early proprietary workflow data from these accounts.
- **Future moat:** [Inferred]: Cross-customer exception patterns and ERP/portal integration breadth could compound into a workflow data moat as agents encounter more counterparty edge cases, but unproven at 2-customer-class scale today.
- **Market structure:** [Inferred]: Incumbents (HighRadius, BlackLine, Versapay) sell per-seat SaaS subscriptions; an "outcome-priced labor replacement" model cannibalizes their seat-based ACV, creating channel/pricing conflict — not an absolute structural barrier, but a real disincentive.
- **Commoditization risk:** Multiple AI-BPO entrants in adjacent O2C/AP space (e.g., Qurrent processing "$1.5B in annual payments, 2.7M AI agents deployed" per TipRanks 2025); the agent-orchestration layer over LLMs is reproducible by well-funded peers.

## Market & Traction

- **Traction signals:**
  - >$500M in receivables under management from F100 companies (YC page, 2026).
  - Live with "pre-IPO tech companies" — specific logos not disclosed (YC page).
  - Example dashboard on site shows 342 customers / 1,909 invoices / $18.4M receivables managed (rex.inc, 2026) — may be illustrative, not aggregate.
  - #1 of 2,500 teams in Vercel AI Accelerator, selected by Guillermo Rauch (Vercel blog, "2026 Vercel AI Accelerator recap").
  - Received Vercel Ventures investment (amount undisclosed) plus Vercel credits (Vercel blog, 2026).
  - WorkOS published an enterprise-readiness case study on Rex (workos.com blog, 2026).
  - Twitter: @rexdotinc — follower count not retrievable via search.
  - LinkedIn: linkedin.com/company/rex-ai-inc/ — follower count not retrievable.
  - Product Hunt launch: No public data found.
  - SOC 2 Type II listed as "pending," GDPR-compliant with EU data residency (rex.inc).
- **Competitors:**
  - HighRadius ($484M raised, ~$300M ARR 2022, $3.1B valuation; TechCrunch 2021, Latka): incumbent rules-based O2C suite serving 1,300+ finance teams (HighRadius), per-seat SaaS rather than outcome-priced agentic.
  - BlackLine (NASDAQ:BL, public, revenue unknown vs Rex): unified credit/collections/cash-app under AI-driven platform (G2, 2026) — enterprise-scale incumbent.
  - Versapay (~$20.6M disclosed, $42M revenue 2024; PitchBook, Latka): B2B AR collaboration workspace, payment network of 1M+ companies (Versapay).
  - Tesorio ($27–34M raised, $11M ARR 2024; CB Insights, Latka): predictive AI for AR + cash flow forecasting.
  - Qurrent (revenue unknown; TipRanks 2025): adjacent AI-BPO platform automating P2P/O2C/close/FP&A — closest direct architectural analog.
- **Why now:** [Inferred]: LLM/agent reliability crossing the threshold for unstructured enterprise workflows in 2024–2025 (long context, tool use, browser agents) plus Sequence's Dec 2025 $20M Series A around AI revenue ops (TechCrunch/Axios, Dec 2025) signaling investor appetite for AI-native finance ops.

## Founders & Team

- **Merlin Kafka (Co-founder, CEO):**
  - Background: 4 years as CPO/Head of Product at Sequence (a16z-backed, raised total $38M including Dec 2025 $20M Series A; TechCrunch, Axios); prior role building AI security at Tessian (Sequoia-backed, acquired 2023) (LinkedIn via search snippet).
  - Twitter/X: handle not found in search results — "No public account found."
  - LinkedIn: "Co-founder/CEO @ Rex | AI operations" (uk.linkedin.com/in/merlinkafka).
  - GitHub: No public repos found.
- **Lewis Blackwood (Co-founder, CTO):**
  - Background: BA Economics, University of Cambridge (2011–2014); Operations Engineer at GoCardless (2015); Co-founder/CTO at Personably (2016); Engineering Lead at Sequence (4 years) (LinkedIn, Crunchbase, TheOrg via search snippet).
  - Twitter/X: count not retrievable.
  - LinkedIn: linkedin.com/in/lewisblackwood (headline "Rex.inc").
  - GitHub: @lewisblackwood — top repo / star counts not retrievable from search.
- **Co-founder relationship:** Both spent ~4 years building Sequence together (Merlin as Head of Product/CPO, Lewis as Engineering Lead) from zero to Series A (YC description; LinkedIn/TheOrg via search snippet).
- **Founder-market fit:** Domain match — founders built and scaled a B2B finance-ops platform (Sequence, a16z-backed) and state they "saw firsthand that at-scale, O2C still runs on manual labour" (YC page); backed by Vercel Ventures and selected by Guillermo Rauch (Vercel blog, 2026).

## Key Risks

- **Incumbent + AI-BPO competitive density:** HighRadius ($484M raised, $3.1B valuation), BlackLine (public), Versapay, Tesorio, and AI-native peers like Qurrent target overlapping O2C buyers (TechCrunch 2021; TipRanks 2025); no disclosed structural moat beyond execution speed in current Rex public materials.
- **Conflict with Sequence (founders' prior company):** Sequence raised $20M Series A in Dec 2025 for "AI agents to automate revenue operations…billing and invoice automation" (Axios/TechCrunch Dec 2025) — adjacent product surface and shared investor (a16z) ecosystem create relationship/non-compete exposure not addressed publicly.
- **Compliance gating for enterprise close:** SOC 2 Type II is listed as "pending" on rex.inc; F100 procurement typically requires completed Type II, limiting expansion velocity until certification lands (rex.inc security page).
- **Outcome-based pricing execution risk:** "Pay for outcomes only" model (rex.inc) ties revenue to measurable SLAs across heterogeneous ERP/portal environments; agent failure modes on long-tail exceptions could compress unit economics — no public retention or gross-margin data found.
- **Disclosure verifiability:** ">$500M receivables managed from F100 companies" (YC page) is self-reported without named logos or third-party verification; the dashboard "342 customers / $18.4M" on the homepage may be illustrative rather than actual aggregate (rex.inc).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Company-cited "$60B outsourced O2C function" (YC page, 2026, no analyst source); broader AI-in-BPO $2.6B (2023) → $49.6B (2033), 34.3% CAGR (Mixflow, 2025) |
| SAM | No public data found |
| Traction | >$500M receivables managed from F100 (YC, 2026); #1/2,500 Vercel AI Accelerator (Vercel blog, 2026); 12-day DSO reduction, 15 hrs/wk saved/operator, 90%+ auto-triage (rex.inc, 2026); Vercel Ventures investment (Vercel blog, 2026); WorkOS case study (workos.com, 2026) |
| Revenue Signal | "Outcome and SLA-based pricing — Pay for outcomes only" (rex.inc pricing); no dollar figures disclosed |
| Founders | Merlin Kafka (CEO): ex-CPO Sequence (4y, a16z-backed), ex-Tessian. Lewis Blackwood (CTO): ex-Engineering Lead Sequence (4y), ex-Personably co-founder/CTO, ex-GoCardless, Cambridge Economics |
| Competitors | HighRadius ($484M raised, ~$300M ARR 2022, $3.1B valuation, rules-based incumbent); BlackLine (public, AI-driven unified I2C); Versapay ($20.6M raised, $42M revenue 2024, AR collaboration); Tesorio ($27–34M raised, $11M ARR 2024, predictive AR); Qurrent (revenue unknown, AI-BPO across P2P/O2C/FP&A) |
| Moat Signals | Live F100 deployments + >$500M AR under management (YC, 2026); enterprise auth stack (WorkOS SSO/SCIM/Directory Sync) live (workos.com, 2026); SOC 2 Type II pending, GDPR/EU residency (rex.inc) |
| Risk Factors | Adjacency/conflict with founders' prior company Sequence, incumbent + AI-BPO competitive density, SOC 2 Type II pending |
| Founder Reach | Merlin Kafka: Twitter not found, LinkedIn uk.linkedin.com/in/merlinkafka (count not retrievable), GitHub not found. Lewis Blackwood: Twitter not found, LinkedIn linkedin.com/in/lewisblackwood (count not retrievable), GitHub @lewisblackwood (stars not retrievable) |
| Distribution Signals | Vercel AI Accelerator #1/2,500 (Vercel blog, 2026); Vercel Ventures investment (Vercel blog, 2026); WorkOS published case study (workos.com, 2026); Product Hunt — no public data found |
| Emails | hello@rex.inc (rex.inc) |

Sources:
- [Rex YC page](https://www.ycombinator.com/companies/rex-inc)
- [Rex website](https://www.rex.inc/)
- [Vercel AI Accelerator 2026 recap](https://vercel.com/blog/2026-vercel-ai-accelerator-recap)
- [WorkOS case study on Rex](https://workos.com/blog/how-rex-went-from-zero-to-enterprise-ready-in-weeks)
- [Sequence $20M Series A — TechCrunch](https://techcrunch.com/2022/09/19/sequence-orders-up-19m-led-by-a16z-for-a-new-approach-to-b2b-fintech/)
- [Sequence Series A — Axios](https://www.axios.com/pro/fintech-deals/2025/12/16/sequence-20-million-revenue-ops)
- [Merlin Kafka LinkedIn](https://uk.linkedin.com/in/merlinkafka)
- [Lewis Blackwood LinkedIn](https://www.linkedin.com/in/lewisblackwood/)
- [HighRadius Series C — TechCrunch](https://techcrunch.com/2021/03/30/highradius-raises-300m-triples-valuation-to-3-1b-for-ai-powered-fintech-software/)
- [Tesorio revenue — Latka](https://getlatka.com/companies/tesorio)
- [Versapay financials — Latka](https://getlatka.com/companies/versapay)
- [Qurrent AI BPO — TipRanks](https://www.tipranks.com/news/private-companies/qurrent-launches-ai-bpo-platform-to-automate-mission-critical-finance-operations-for-cfos)
