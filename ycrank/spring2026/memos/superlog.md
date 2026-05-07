# Superlog

> Observability that installs itself and fixes the bugs it finds.

| Field | Value |
|-------|-------|
| Website | https://superlog.sh/ |
| YC Page | https://www.ycombinator.com/companies/superlog |
| Batch | Spring 2026 (YC company page) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Open Source, Monitoring, AI |
| YC Partner | David Lieb (YC company page) |
| Emails | No public data found |

## The Idea

**Problem:** Engineering teams using incumbent observability tools (Sentry, Datadog) receive duplicate, low-context alerts and must still diagnose and write fixes themselves (company description, YC page). The customer segment is software engineering teams running production services.

**Approach:** Superlog runs a wizard that scans the customer's repository and installs OpenTelemetry instrumentation, then re-runs daily to keep instrumentation current as new code ships (YC company page). When errors occur, it groups them into a single incident, investigates with logs, traces, recent deploys, and past Slack threads, and posts a single mergeable PR via Slack that the user can merge, ignore, or open in a Claude Code session (YC page). The GitHub org `superloglabs/skills` ships eight onboarding "skills" for OpenTelemetry across Python, FastAPI, Next.js, LiveKit, Expo, and Supabase Edge, installable via `npx skills add superloglabs/skills` (GitHub repo, May 2026).

**Differentiation:** Vendor-neutral telemetry (OpenTelemetry) is portable across backends per the YC description ("you keep every log, trace, and metric we install, even if you leave"). The fix-as-PR workflow is shared by Middleware's OpsAI (auto-PR on GitHub root cause), Sentry Seer, and Datadog Bits AI Dev Agent (Better Stack 2026 comparison; Dash0 2026 comparison). Superlog's stated wedge is the auto-installing instrumentation wizard plus daily re-scan, not the AI investigator alone.

**Business Model:** No pricing page is publicly accessible — superlog.sh returned HTTP 403 to WebFetch (May 2026). [Inferred]: Likely consumption- or seat-based SaaS with a free open-source onboarding tier (the `superloglabs/skills` repo is public on GitHub), given category norms among observability peers.

**TAM/SAM:** No public TAM/SAM data found for AI-native observability specifically. The broader observability market is referenced across multiple 2026 trade pieces but no numeric figure is sourced in the results gathered.

**GTM / Distribution:** [Inferred]: Bottom-up developer adoption via the open-source GitHub skills repo (`superloglabs/skills`) and Slack-native incident UX, given the npx install path documented in the README and Slack-first incident workflow described on the YC page.

## Defensibility

- **OpenTelemetry portability as anti-moat:** Vendor-neutral telemetry is explicitly marketed as a customer-friendly feature ("you keep every log, trace, and metric we install, even if you leave," YC page) — which lowers switching costs *for* the customer.
- **Onboarding skills library:** Eight framework-specific onboarding skills published on GitHub (`superloglabs/skills`, May 2026). The repo has 1 star and 0 forks (GitHub, May 2026).
- **Founder domain expertise:** CTO Arseniy Shishaev's prior role at Datadog (LinkedIn) is a proprietary-knowledge signal in this category.

[Inferred]: Potential moat could develop via accumulated repo-fingerprint data (knowing which instrumentation patterns work for which codebase shapes) and via Slack workflow integration depth; both unproven at this stage.

**Market structure:** No structural barrier identified at this stage. Datadog has already shipped Bits AI SRE with native code-fix suggestions via Bits AI Dev Agent (Better Stack 2026), and Sentry has shipped Seer (Better Stack, 2026), demonstrating incumbents can and do build adjacent capabilities. The OpenTelemetry-vendor-neutral positioning is a marketing wedge, not a structural one — incumbents support OTel ingest.

**Commoditization risk:** The "AI investigates and posts a fix PR" pattern has at least four named competitors as of 2026 (Middleware OpsAI, Sentry Seer, Datadog Bits AI Dev Agent, IncidentFox) per Better Stack and Dash0 2026 comparisons. Auto-instrumentation wizards are also offered by various OTel auto-instrumentation vendors. The category is contested.

## Market & Traction

**Traction signals:**
- GitHub `superloglabs/skills`: 1 star, 0 forks, HTML 100% (GitHub, May 2026).
- Twitter/X: handle `@superlogyc` exists (YC page); follower count not retrievable.
- LinkedIn: company page `linkedin.com/company/superlogyc` exists (YC page); follower count not retrievable.
- No Product Hunt launch found in search results.
- No press coverage of "Superlog" found in search results (May 2026).
- No funding announcement found beyond YC Spring 2026 batch participation.
- No revenue, user, or paying-customer disclosures found.
- YC page lists hiring as inactive (YC page; company_data field).

**Competitive landscape:**
- **Resolve AI** — $125M raise at $1B valuation from Lightspeed Venture Partners (Feb 2026, total funding past $150M, per Better Stack 2026 / search snippet). Multi-agent AI SRE founded by OpenTelemetry co-creators Spiros Xanthos and Mayank Agarwal. Differentiator vs. Superlog: OTel-creator team and 100x funding scale.
- **Middleware (OpsAI)** — funding amount not in retrieved sources. Full-stack APM/RUM/Kubernetes with auto-PR fix and Kubernetes auto-apply (Dash0, 2026 via search snippet). Differentiator: broader stack coverage including K8s auto-remediation.
- **IncidentFox** — YC W26-backed, prior batch peer. Slack-native AI SRE with 300+ built-in tools, Apache 2.0 open core (Better Stack 2026; YC company page). Differentiator: open-source self-hosting; Slack-only.
- **Sentry Seer** — Sentry's AI-powered incident investigation feature (Better Stack 2026 via search snippet). Differentiator: native to incumbent error-tracking platform with installed user base.
- **Datadog Bits AI SRE / Dev Agent** — incumbent autonomous SRE agent with native access to Datadog's full telemetry dataset, suggests code fixes (Better Stack 2026 via search snippet). Differentiator: cross-signal corpus and existing enterprise distribution.

**Why now:** [Inferred]: Coding-agent maturity in 2025–2026 (Claude Code referenced directly in Superlog's product description as an integration target) made auto-PR fixes practical. OpenTelemetry adoption reached "evolving standards" status for AI agent observability per OpenTelemetry blog (2025) — enabling vendor-neutral instrumentation as a differentiator. The Resolve AI $125M/$1B round (Feb 2026, search snippet) signals tier-1 VC validation of the AI-SRE category timing.

## Founders & Team

**Nicolò Magnante** — Co-founder & CEO
- Education: Master in Management, Digital Innovation & Acceleration, HEC Paris (HEC Paris alumni page).
- Previously: Co-founder & CEO of **Bluco** (AI hiring tools, 2024, Station F-incubated; X post by @joinstationf and Crunchbase). Earlier roles at Ovrsea, BCG (BrightHouse Milan launch), Bain & Company, Accenture (HEC Paris page; LinkedIn).
- LinkedIn: linkedin.com/in/nicolò-magnante — headline "Swish | Ex BCG | Ex Bluco" (LinkedIn search result).
- Twitter/X: No public account found in searches.
- GitHub: No public profile found in searches.

**Arseniy Shishaev** — Co-founder & CTO
- Education: Bac+5 Software Engineering, École 42 (2019–2022) (LinkedIn search snippet).
- Previously: CTO at **Bluco** with Magnante; earlier engineer at **Datadog** (LinkedIn search snippet); also linked to **Swish** as Co-Founder & CTO (LinkedIn, RocketReach, Oct 2025 LinkedIn post "Swish: Meet the post-signup GTM agent").
- Personal site: arseniy.wtf (search result).
- LinkedIn: linkedin.com/in/arseniy-shishaev (LinkedIn).
- Twitter/X: No public handle surfaced in searches.
- GitHub: No personal handle confirmed; org `superloglabs` exists on GitHub (1 star on `skills` repo).

**Prior-product context (pivot):** Bluco (AI recruitment, 2024, Station F, third co-founder Francisco Shirazi) preceded a venture branded **Swish** ("post-signup GTM agent," LinkedIn posts dated Oct 2025), which preceded Superlog. A Nov 2025 LinkedIn post by Magnante stated "we're building something new… Arseniy and I decided it's time" (LinkedIn, post 7403716228885790721). Bluco/Swish metrics (users, revenue) — no public data found and not transferable to Superlog.

**Co-founder relationship:** Magnante and Shishaev co-founded Bluco together (Station F X post, Jan 2025) and continued through Swish into Superlog — multi-year co-founder history confirmed via LinkedIn and Crunchbase.

**Founder-market fit:** Shishaev's prior tenure at Datadog (LinkedIn search snippet) gives direct incumbent-observability engineering exposure relevant to building an OpenTelemetry-based competitor. Magnante's BCG/Bain consulting background plus prior CEO seat at Bluco supplies the commercial role. No notable advisors or investors named beyond YC (Spring 2026, David Lieb partner).

## Key Risks

**Crowded AI-SRE category with funded incumbents:** Resolve AI raised $125M at $1B valuation in Feb 2026 (Better Stack 2026 / search snippet); Datadog and Sentry have shipped overlapping native features (Bits AI SRE, Seer per Better Stack 2026). Superlog must differentiate in a market where the autonomous-fix-PR workflow is no longer novel.

**Incumbent platform substitution:** Datadog's Bits AI SRE has native access to Datadog's full observability dataset (Better Stack 2026 via search snippet). Customers already on Datadog/Sentry can adopt the incumbent feature without changing vendors, creating direct substitution risk.

**Two prior products in 18 months:** Bluco (AI recruiting, 2024 per Station F X post) → Swish (post-signup GTM agent, Oct 2025 LinkedIn) → Superlog (Spring 2026 YC). Two pivots within ~18 months across unrelated categories (recruiting → GTM → observability). [Inferred]: raises ICP/durability questions; conviction in current thesis is unproven.

**Vendor-neutrality undermines lock-in:** The marketed "you keep every log… even if you leave" (YC page) makes churn frictionless by design — a sales asset that simultaneously weakens retention defensibility.

**Auto-PR correctness risk:** [Inferred]: An autonomous fix posted to Slack must clear a high correctness bar to gain merge trust at production engineering teams. No public benchmark data found on Superlog's PR accept rate.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | GitHub `superloglabs/skills` 1 star, 0 forks (GitHub, May 2026); Twitter/X @superlogyc and LinkedIn /company/superlogyc exist (YC page, follower counts not retrievable); no press, Product Hunt launch, or revenue disclosure found |
| Revenue Signal | No public data found (superlog.sh returned HTTP 403 to fetch, May 2026; no pricing page accessible) |
| Founders | Nicolò Magnante (CEO): HEC Paris MiM, ex-BCG, ex-Bain, ex-Bluco CEO. Arseniy Shishaev (CTO): École 42, ex-Datadog engineer, ex-Bluco CTO. |
| Competitors | Resolve AI ($125M raised at $1B valuation Feb 2026 Lightspeed, ARR unknown — OTel-creator team, Better Stack 2026 via search snippet); Middleware (funding unknown, ARR unknown — full-stack incl. K8s auto-fix, Dash0 2026 via search snippet); IncidentFox YC W26 (funding unknown, ARR unknown — Apache 2.0 OSS Slack-native, Better Stack 2026); Sentry Seer (Sentry feature, Better Stack 2026 via search snippet); Datadog Bits AI SRE (Datadog feature, Better Stack 2026 via search snippet) |
| Moat Signals | OpenTelemetry-native auto-instrumentation wizard + 8 framework skills published OSS (GitHub, May 2026); CTO ex-Datadog (LinkedIn) |
| Risk Factors | Crowded AI-SRE category with $125M-funded competitor (Resolve AI, Feb 2026); incumbent substitution (Datadog Bits, Sentry Seer); two pivots in 18 months (Bluco → Swish → Superlog) |
| Founder Reach | Magnante: Twitter not found, LinkedIn /in/nicolò-magnante (count not retrievable), GitHub not found. Shishaev: Twitter not found, LinkedIn /in/arseniy-shishaev (count not retrievable), GitHub `superloglabs` org 1 star (May 2026) |
| Distribution Signals | GitHub OSS `superloglabs/skills` with 8 npx-installable framework skills (May 2026); no Product Hunt, no press, no Discord/Slack community size found |
| Emails | No public data found |

Sources:
- [Superlog YC company page](https://www.ycombinator.com/companies/superlog)
- [superloglabs/skills GitHub](https://github.com/superloglabs/skills)
- [Nicolò Magnante LinkedIn](https://www.linkedin.com/in/nicol%C3%B2-magnante/)
- [Nicolò Magnante Crunchbase](https://www.crunchbase.com/person/nicol%C3%B2-magnante)
- [Nicolò Magnante HEC Paris profile](https://www.hec.edu/en/innovation-entrepreneurship-institute/stories/nicolo-magnante)
- [Arseniy Shishaev LinkedIn](https://www.linkedin.com/in/arseniy-shishaev/)
- [Arseniy Shishaev personal site](https://arseniy.wtf/)
- [Station F X post on Bluco co-founders](https://x.com/joinstationf/status/1884295079428542533)
- [Magnante LinkedIn pivot post](https://www.linkedin.com/posts/nicol%C3%B2-magnante_were-building-something-new-everything-activity-7403716228885790721-vV-9)
- [Better Stack — IncidentFox alternatives 2026](https://betterstack.com/community/comparisons/incidentfox-alternatives/)
- [Better Stack — Sentry Seer alternatives 2026](https://betterstack.com/community/comparisons/sentry-seer-alternatives/)
- [Dash0 — Top AI-Powered Observability Tools 2026](https://www.dash0.com/comparisons/ai-powered-observability-tools)
- [IncidentFox YC page](https://www.ycombinator.com/companies/brownie)
- [OpenTelemetry blog — AI agent observability 2025](https://opentelemetry.io/blog/2025/ai-agent-observability/)
