# Minicor

> Managed, self healing desktop automation at scale

| Field | Value |
|-------|-------|
| Website | https://minicor.com |
| YC Page | https://www.ycombinator.com/companies/minicor |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, B2B, Infrastructure |
| YC Partner | Tom Blomfield |
| Emails | connect@minicor.com, faiz@minicor.com |

## The Idea

**Problem:** AI companies selling into healthcare, automotive, logistics, and financial services must read/write data in their customers' systems of record — legacy Windows desktop apps (EHRs, ERPs, DMS, PMS) with no writable APIs (YC page). Some vendors are actively restricting third-party API access (minicor.com). The only integration path is UI-level interaction, which breaks when vendors ship updates. Current solutions: traditional RPA (UiPath-style brittle scripts that require rebuilding on every UI change) or raw LLM computer-use APIs (Anthropic/OpenAI), which deliver 80–85% click accuracy per Minicor's website claims (minicor.com).

**Approach:** Minicor deploys self-healing computer-use agents on Windows VMs. One API call triggers a full desktop workflow. A reflection agent verifies each action against screen content and self-corrects before the workflow breaks (minicor.com). The platform claims 93–96% click accuracy and 11–12 second typical execution time (minicor.com). Automations can be spoken into existence via MCP integration with coding agents (YC page). Deployment options: on-premise, cloud, or Citrix (minicor.com). SOC 2 Type II certified and HIPAA compliant (minicor.com).

**Differentiation:** vs. UiPath/traditional RPA: self-healing agents eliminate script maintenance when UIs change (minicor.com). vs. raw LLM computer-use (Anthropic, OpenAI): higher claimed accuracy (93–96% vs. 80–85%) plus managed infrastructure, observability, and scaling (minicor.com). vs. Skyvern/Induced AI: those focus on browser-based automation; Minicor targets native Windows desktop applications and Citrix environments (minicor.com, skyvern.com).

**Business Model:** No public pricing page found. [Inferred]: API-call-based consumption or per-VM/per-workflow SaaS pricing is the most likely model given the "one API call triggers a workflow" architecture and enterprise deployment model.

**TAM/SAM:** Global RPA market estimated at $35.27B in 2026, projected to $247.34B by 2035 at 24.20% CAGR (Precedence Research via GlobeNewsWire, Dec 2025). Grand View Research projects $35.84B by 2033 at 29.0% CAGR (Grand View Research, 2026 via search snippet). No public SAM estimate specific to desktop-only (non-browser) legacy system automation found.

**GTM / Distribution:** Supported systems listed on website: Athena, Epic, Cerner, PS Suite, Open Dental, Dental Vision, Wellsky, Home Care HomeBase (healthcare); CDK Global (automotive); SAP, HighJump (supply chain) (minicor.com). [Inferred]: Primary GTM is selling to AI companies and system integrators who need to connect to their end-customers' legacy desktop systems, rather than selling directly to the legacy-system end-users.

## Defensibility

- **Technical complexity:** Self-healing desktop automation at production scale across heterogeneous Windows desktop UIs requires specialized computer-vision + agent orchestration that goes beyond general-purpose LLM computer-use (minicor.com).
- **Compliance moat:** SOC 2 Type II and HIPAA compliance are time- and cost-intensive certifications that create a barrier for new entrants targeting healthcare (minicor.com).
- **Switching costs:** [Inferred]: Once workflows are built and integrated via API into customer production systems (e.g., 25,000 patients/day), switching costs increase due to workflow re-creation and validation overhead.

**Market structure:** Large RPA incumbents (UiPath, Automation Anywhere) have legacy architectures built around deterministic, script-based automation. [Inferred]: Rebuilding around AI-agent-based self-healing would cannibalize their existing professional services and maintenance revenue streams. Microsoft Power Automate is tightly coupled to its own ecosystem and has less incentive to optimize for third-party legacy Windows desktop apps.

**Commoditization risk:** Anthropic, OpenAI, and Google are all shipping computer-use capabilities in their foundation models (minicor.com references these as 80–85% accuracy baseline). [Inferred]: As foundation model accuracy improves, the raw computer-use layer commoditizes; Minicor's value depends on the managed infrastructure, self-healing orchestration, observability, and compliance layers remaining differentiated.

## Market & Traction

**Traction signals:**
- One customer processing 25,000 patients/day (minicor.com)
- Six customer logos displayed on website (minicor.com)
- Pre-seed investment from NOMO Ventures (Rahul Prakash and Kate R.) (LinkedIn, Mark Bailey profile via search snippet)
- Company Twitter/X: @minicor_ (YC page); follower count not retrievable
- Company LinkedIn: linkedin.com/company/minicor-automations (LinkedIn via search snippet); follower count not retrievable
- GitHub org: github.com/laminar-run — public repos include hookmock (3 stars), beautiful-mermaid (3 stars) (GitHub)
- YC LinkedIn post announcing Minicor (YC P26) — activity ID 7442601243564408832 (LinkedIn via search snippet)
- No Product Hunt launch found
- 0 open job postings (YC page)
- No public revenue figures found

**Pivot note:** The company previously operated as Laminar, a low-code integration platform. Legal entity remains Laminar Run, Inc. (minicor.com copyright notice). The pivot to desktop automation occurred after encountering a need to connect to an on-premise Windows-based medical record system with no API (LinkedIn, Mark Bailey profile via search snippet). Prior-product metrics (Laminar integration platform) should not be conflated with current Minicor traction.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Minicor |
|---|---|---|
| **UiPath** | Public company (NYSE: PATH) | Incumbent enterprise RPA; script-based, not AI-agent self-healing; massive existing customer base and ecosystem |
| **Automation Anywhere** | $6.8B+ total raised (Crunchbase via search snippet) | Cloud-native RPA with agentic AI additions; broader automation platform but legacy architecture |
| **Skyvern** | $2.7M seed (skyvern.com blog, Dec 2025) | Open-source AI browser automation (YC company); browser-focused, not native Windows desktop |
| **Induced AI** | $2.3M seed (TechCrunch, Oct 2023) | Browser-based workflow automation backed by Sam Altman; browser-only, not desktop-native |
| **Browserbase** | $40M Series B at $300M valuation (Upstarts Media, Jun 2025) | Headless browser infrastructure; platform layer, not end-to-end desktop automation |

**Why now:** [Inferred]: Foundation model computer-use capabilities (Anthropic Claude computer use launched Oct 2024, OpenAI followed) crossed a usability threshold, making AI-driven UI interaction viable for production use cases. Simultaneously, legacy system vendors are increasingly restricting third-party API access (minicor.com), making UI automation the only viable integration path.

## Founders & Team

**Faizaan Chishtie** — Co-Founder & CEO
- B.A.Sc. Software Engineering, University of Ottawa (LinkedIn)
- Prior: software engineer at Phoenix (YC W21), shipped integrations and MVPs at Typecast and Secoda (getprog.ai profile)
- Co-founded Homeboard Technologies (incorporated Feb 2021), grew to mid five figures in ARR (getprog.ai profile; OpenGovCA)
- Founded Software For Love (nonprofit mobilizing student volunteers) (getprog.ai profile)
- Founder in Residence at ASCENT by McMillan; Next Canada and Antler cohort participant (getprog.ai profile)
- Twitter/X: @faizchishtie (GitHub profile); follower count not retrievable
- LinkedIn: linkedin.com/in/fchishtie — CEO & Co-Founder at Minicor (YC P26)
- GitHub: github.com/FaizChishtie — 49 repos, 108 stars total; pinned repo vemcache (in-memory vector DB, Rust, 38 stars) (GitHub)

**Saheed Akinbile** — Co-Founder & CTO
- B.A.Sc. Software Engineering with option in Technology Management & Entrepreneurship, University of Ottawa (saheedakinbile.com)
- Born and raised in Lagos, Nigeria (saheedakinbile.com)
- Prior: Senior Software Engineer at Ford Motor Company (2022–2025, Android Auto); Morgan Stanley; Kinaxis (LinkedIn via search snippet)
- Co-founded Software For Love; served as Software Engineering Advisor (2020–2023) (search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/saheed-akinbile — CTO & Co-Founder at Laminar | Ex-Morgan Stanley / Ex-Ford
- GitHub: github.com/sakin070 — 43 repositories (GitHub); star counts not retrievable

**Mark Bailey** — Revenue executive at Minicor; described as having "a record of scaling SaaS and AI companies from early traction" (LinkedIn via search snippet). Not listed as a founder on the YC page.

**Co-founder relationship:** Both Faizaan and Saheed graduated from University of Ottawa in Software Engineering and both co-founded Software For Love (getprog.ai, saheedakinbile.com).

**Founder-market fit:** Faizaan has prior YC experience (Phoenix, W21), startup operating experience (Homeboard to mid-five-figure ARR), and integration-building experience at Typecast and Secoda. Saheed brings enterprise engineering experience from Ford (desktop-adjacent automotive software) and Morgan Stanley (financial services — a target vertical). The pivot from Laminar (integration platform) to Minicor (desktop automation) originated from a direct customer encounter with the legacy-desktop problem (LinkedIn, Mark Bailey).

## Key Risks

**Foundation model commoditization:** Anthropic, OpenAI, and Google are rapidly improving computer-use accuracy in their base models. As accuracy approaches Minicor's claimed 93–96%, the core agent capability commoditizes, pressuring Minicor to differentiate on infrastructure, orchestration, and compliance alone (minicor.com accuracy claims).

**Pivot recency:** The company pivoted from Laminar (low-code integration platform) to Minicor (desktop automation). The legal entity remains Laminar Run, Inc. (minicor.com). This pivot means current-product traction is early, and prior Laminar metrics do not transfer.

**Vendor countermeasures:** Legacy system vendors (Epic, Cerner, etc.) could detect and block automated UI interaction, or open APIs that eliminate the need for UI automation entirely. Epic has historically been restrictive about third-party integrations (industry knowledge).

**Single-vertical concentration:** Website customer logos and supported systems skew heavily toward healthcare (6 of 8 named systems are healthcare EHRs/practice management) (minicor.com). Revenue concentration in one regulated vertical creates regulatory and customer-concentration risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $35.27B in 2026, $247.34B by 2035 at 24.20% CAGR (Precedence Research via GlobeNewsWire, Dec 2025) |
| SAM | No public data found |
| Traction | 1 customer at 25,000 patients/day (minicor.com); 6 customer logos on website (minicor.com); YC S26/P26 batch (YC page) |
| Revenue Signal | No public data found |
| Founders | Faizaan Chishtie (CEO): Phoenix (YC W21), Homeboard (mid-5-fig ARR), U of Ottawa. Saheed Akinbile (CTO): Ex-Ford, Ex-Morgan Stanley, U of Ottawa. |
| Competitors | UiPath (public, NYSE: PATH, incumbent RPA); Automation Anywhere ($6.8B+ raised via search snippet, cloud-native RPA); Skyvern ($2.7M seed, browser-only AI automation); Induced AI ($2.3M seed, browser-only); Browserbase ($40M Series B, browser infrastructure) |
| Moat Signals | SOC 2 Type II + HIPAA compliance (minicor.com); self-healing agent orchestration layer (minicor.com) |
| Risk Factors | Foundation model commoditization, pivot recency, vendor countermeasures, single-vertical concentration |
| Founder Reach | Faizaan: X @faizchishtie (count not retrievable), LinkedIn linkedin.com/in/fchishtie, GitHub 108 stars (GitHub). Saheed: X not found, LinkedIn linkedin.com/in/saheed-akinbile, GitHub 43 repos (GitHub). |
| Distribution Signals | No public data found |
| Emails | connect@minicor.com (minicor.com), faiz@minicor.com (YC page) |
