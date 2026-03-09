# Revion

> Intelligence for Automotive Operations

| Field | Value |
|-------|-------|
| Website | https://revion.inc |
| YC Page | https://www.ycombinator.com/companies/revion |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | London, GB (LinkedIn company page); also lists 2261 Market Street, San Francisco, CA 94114 (Automotive Management Live 2026 exhibitor page) |
| Tags | AI, Automotive |
| YC Partner | Jon Xu |
| Emails | No public data found |

## The Idea

**Problem:** Automotive service technicians spend 30–40% of their workday on administrative tasks—writing up repair orders, logging time, documenting inspections, and retrieving OEM manual information (Revion website; YC company page). Dealership service departments also lose revenue from missed inbound/outbound phone calls, with one estimate citing $1M annually in lost revenue from after-hours missed calls alone (TechCrunch, Oct 2025, re: Flai, via search snippet). Current tools include legacy DMS platforms (CDK Global, Reynolds and Reynolds) and scheduling systems (Xtime) that are not voice-native and require manual data entry at a terminal.

**Approach:** Revion provides two product lines:
1. **Technician AI tools** — A voice-first, mobile-native platform that lets technicians dictate from the workshop floor. Revion structures spoken input in real-time into repair orders, Complaint-Cause-Correction narratives (OEM warranty-compliant), multi-point inspections (with green/yellow/red status), time logs, and service recommendations linked to operation codes with labor hours and parts data. An AI assistant answers mid-task questions with OEM manual references and technical service bulletins (Revion website).
2. **Voice AI Agents for dealers** — Inbound and outbound call automation that integrates with DMS/CRM systems (CDK, Tekion, Xtime, MyKaarma, Cox Automotive, Keyloop, CitNOW, Salesforce) to complete end-to-end workflows (Automotive Management Live 2026 exhibitor page).

**Differentiation:** Most AI competitors in the dealership space (Toma, Flai, STELLA, Mia) focus primarily on phone call handling for sales and service appointment booking. Revion's technician-facing product targets the in-bay workflow—structuring repair orders, inspections, and time logs via voice while the technician works—which is a distinct use case from answering customer phone calls. The combination of technician productivity tools and dealer communication agents under one platform differentiates from point solutions. Named integrations with CDK Global, Tekion, Xtime, MyKaarma, Cox Automotive, Keyloop, CitNOW, and Salesforce suggest a middleware positioning (Revion website).

**Business Model:** No public pricing page found. [Inferred]: Most likely monetization path is SaaS subscription per rooftop (dealership location), consistent with the pricing model used by competitors STELLA, Toma, and Mia in this space.

**TAM/SAM:**
- The US automotive service market was estimated at $199.38B in 2025, projected to reach $211.14B in 2026, growing at 5.9% CAGR to $281.23B by 2031 (Mordor Intelligence, 2025 via search snippet).
- The global auto dealer software market was valued at $6.1B in 2025, projected to reach $12.5B by 2035 at 7.5% CAGR (OpenPR, 2025 via search snippet).
- Revion's company page references a "$1.2 trillion US automotive sector" as the addressable market (Revion /company page).
- OEM dealerships commanded 41.05% of US automotive service market share in 2025 (Mordor Intelligence, 2025 via search snippet), implying a dealership service SAM of approximately $81.8B.

**GTM / Distribution:** Revion lists named integration partners (CDK Global, Tekion, Xtime, MyKaarma, Cox Automotive, Keyloop, CitNOW, Salesforce, RTC) on its website. The company is exhibiting at Automotive Management Live 2026 (NEC Birmingham, November 2026), indicating UK market expansion alongside US operations (Automotive Management Live exhibitor page). A case study references a dealership handling nearly 12,000 calls while reducing BDC staffing by 50% (Automotive Management Live exhibitor page). [Inferred]: GTM likely combines direct sales to dealership groups with channel distribution through DMS/CRM integrations, starting with larger multi-rooftop groups (evidenced by named partners including a "$500M+ annual revenue" dealership group and an "AM 100 Group UK" with "$700M+ annual revenue" per the Revion website).

## Defensibility

**Data moat potential:** As Revion processes technician voice input in the automotive domain, it accumulates training data on repair narratives, OEM-specific terminology, operation codes, and dealership workflows. This domain-specific data could create a compounding accuracy advantage over time. No evidence of patents or published IP filings found.

**Switching costs:** Once integrated into a dealership's DMS/CRM workflow and used daily by technicians, switching would require retraining staff and re-integrating systems. The breadth of named integrations (9 platforms listed on the website) increases integration depth.

**Market structure:** The incumbent DMS providers (CDK Global, Reynolds and Reynolds) have not shipped voice-first technician tools as a core product. CDK Global manages $540B in auto commerce through its systems (CDK website via search snippet) and has deep dealership lock-in, but their business model is built around back-office and transactional systems, not in-bay technician workflows. [Inferred]: Building voice AI for technicians requires domain-specific speech models tuned to automotive jargon and noisy shop-floor environments, which is outside the core competency of DMS incumbents. However, incumbents could acquire or partner to fill this gap.

**Commoditization risk:** Multiple well-funded startups are building voice AI for automotive dealerships: Toma ($17M, a16z-backed), STELLA ($34.7M+), Mia Labs ($29M total), and Flai ($4.5M). These primarily focus on customer-facing call handling rather than technician-in-bay workflow, but the technology stack (voice AI, LLM integration, DMS connectors) shares significant overlap. General-purpose voice AI platforms (e.g., aiOla) could also enter the automotive vertical. Tekion, valued at $4B, has announced its own "agentic AI" platform for automotive retail (WebProNews, via search snippet).

## Market & Traction

**Traction signals:**
- Case study on website: Ewing Automotive Group — "30,000+ billable hours recovered annually" and "+15% increase in repair order count" (Revion website).
- Partner dealership group with $500M+ annual revenue; AM 100 Group UK partner with $700M+ annual revenue (Revion website).
- Case study: dealership handling ~12,000 calls while reducing BDC staffing by 50% (Automotive Management Live 2026 exhibitor page).
- Company page states users save "up to two hours daily" (Revion /company page).
- Testimonial from a former Ford UK Chairman & CEO endorsing the product (Revion website).
- Testimonial from Stephen Rand, Fixed Operations Director at Mercedes-Benz of Plano (Revion website).
- Exhibition: Stand P67 at Automotive Management Live 2026, NEC Birmingham, November 11, 2026 (AM Live exhibitor page).
- LinkedIn: linkedin.com/company/getrevion — 4 employees listed (Zaki GW, Hanbo Xie, Felipe Mendes, Aiyue Liu) (LinkedIn company page).
- Twitter/X: @revioninc referenced on company page; account not verified in search results — follower count not retrievable.
- No Product Hunt launch found.
- No app store listings found.
- No Discord/Slack community found.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Revion |
|-----------|---------|-------------------------------|
| **Tekion** | $665M total, $4B valuation (Dragoneer-led $200M round, Jul 2024) (PitchBook via search snippet) | Full cloud-native DMS replacing legacy systems end-to-end; announced its own "agentic AI" platform. Incumbent-scale competitor. |
| **Toma** | $17M Series A (a16z, Jun 2025) (TechCrunch, Jun 2025) | Voice agents for dealership service calls; 100+ US dealerships; approaching 8-figure ARR in <1 year. Focuses on call handling, not technician in-bay workflow. |
| **Mia Labs** | $29M total ($20M Series A, Jan 2026) (PR Newswire, Jan 2026 via search snippet) | AI "super employee" for dealership communications; 350+ franchise dealerships; enabled $45M in dealership revenue; 1.5M human hours saved. Customer-facing phone agent, not technician tool. |
| **STELLA Automotive AI** | $34.7M+ total ($19.7M Series A; $11M convertible loan) (Finsmes, May 2024; Presidio Group via search snippet) | Conversational AI voice assistant answering dealership calls 24/7; backed by Reynolds and Reynolds (strategic DMS partner) and 15+ large private dealership groups. |
| **Flai** | $4.5M seed (First Round Capital, YC, Oct 2025) (TechCrunch, Oct 2025) | AI assistants for dealership calls; founded by ex-HappyRobot engineers; built custom voice tech from scratch. Visited ~400 dealerships for training data. |

**Why now:**
- Advances in large language models and voice AI in 2023–2025 made real-time, domain-specific speech-to-structured-data feasible at production quality, enabling voice-first tools for noisy environments like workshops.
- [Inferred]: The US vehicle fleet averaging 12.6 years old (Mordor Intelligence, 2025 via search snippet) increases service demand on dealership fixed operations, creating pressure to improve technician throughput. Dealership labor shortages amplify the need for automation.
- Multiple automotive AI voice startups received significant funding in 2025–2026 (Toma $17M, Mia $20M Series A, Flai $4.5M), indicating investor conviction in the category timing.

## Founders & Team

**Zaki GW** — Co-Founder & CEO
- BSc from London School of Economics (LSE), first-class honours (YC company page).
- Previously: GTM / Commercial at Multiverse (backed by General Catalyst, Index Ventures); Investment Banking at Morgan Stanley and Citi (YC company page).
- Twitter/X: No verified account found for the YC-associated Revion. TikTok: @zaki.gw (search result).
- LinkedIn: linkedin.com/in/zaki-gw-63838014b/ — headline: "Building" (LinkedIn via search snippet).
- GitHub: No public repos found.

**Hanbo Xie** — Co-Founder & CTO
- Imperial College London, first-class honours on scholarship (YC company page).
- Previously: Engineer at Terra (YC-backed; joined at age 18), flow derivatives trading at Goldman Sachs, IBM research (YC company page; Revion /company page).
- Twitter/X: @PsychBoyH (X.com via search result) — follower count not retrievable.
- LinkedIn: linkedin.com/in/hanbo-xie/ (LinkedIn via search result).
- GitHub: github.com/xhb120633 (GitHub via search result) — repo details and star counts not retrieved.

**Felipe Mendes** — Founding Engineer
- Imperial College London; previously at Susquehanna and IBM (Revion /company page).
- LinkedIn: linkedin.com/in/felipe-mendes-b933631aa/ (LinkedIn via search result).

**Aiyue Liu** — (Role not publicly specified; listed as employee on LinkedIn company page.)

**Co-founder relationship:** Both Zaki GW (LSE) and Hanbo Xie (Imperial College London) attended London universities. Felipe Mendes also attended Imperial College London, overlapping with Hanbo Xie's alma mater. No shared prior employer identified between the co-founders from available data.

**Founder-market fit:** Zaki GW brings GTM and commercial experience from Multiverse (an enterprise edtech scaleup) and investment banking, relevant for enterprise sales into dealership groups. Hanbo Xie combines engineering (Terra, IBM Research) with quantitative finance (Goldman Sachs derivatives), providing technical depth for building real-time voice AI and structured data systems. The team has secured testimonials from senior automotive industry figures (former Ford UK Chairman & CEO) and named dealership groups, suggesting existing industry relationships. Investors include YC, EverTrue, and TSIC (Revion /company page).

## Key Risks

**Well-funded direct competitors in voice AI for dealerships:** Toma ($17M, a16z), STELLA ($34.7M+, Reynolds and Reynolds-backed), and Mia Labs ($29M) are all building AI voice agents for dealerships with significantly more capital. Toma has reported approaching 8-figure ARR with 100+ dealerships (TechCrunch, Jun 2025). Revion's differentiation rests partly on the technician in-bay use case, but the voice AI for dealer communications product competes directly with these better-capitalized players.

**Tekion's agentic AI platform:** Tekion ($665M raised, $4B valuation) announced its own AI Agents for Service, representing a direct competitive threat from an incumbent with 30,000+ dealership customers and deep DMS integration (WebProNews via search snippet). Tekion's existing dealership relationships could make it difficult for Revion to win the same accounts.

**Brand disambiguation:** An unrelated company, Revion Solutions Inc (founded 1999, Oracle/cloud hosting), operates at revion.com with an active Twitter (@revionsolutions) and LinkedIn presence. This creates potential confusion in search results, vendor evaluations, and brand building.

**Dual-product surface area:** Revion appears to be building both technician workflow tools (voice-to-repair-order) and dealer communication AI agents (inbound/outbound call handling). For a 4-person team, maintaining two distinct product lines with different end users (technicians vs. BDC staff/customers) risks spreading resources too thin. The Automotive Management Live listing references getrevion.com as a separate domain, suggesting potential product segmentation.

**DMS integration dependency:** Revion lists 9 integration partners (CDK, Tekion, Xtime, MyKaarma, Cox Automotive, Keyloop, CitNOW, Salesforce, RTC). These integrations are essential for the product's value proposition, but any of these platforms could restrict API access, build competing features, or change partnership terms.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | US automotive service market: $199.38B in 2025, 5.9% CAGR to $281.23B by 2031 (Mordor Intelligence, 2025 via search snippet). Auto dealer software market: $6.1B in 2025, 7.5% CAGR to $12.5B by 2035 (OpenPR, 2025 via search snippet). |
| SAM | [Inferred]: OEM dealership service share of US automotive service market ~$81.8B (41.05% of $199.38B, Mordor Intelligence, 2025 via search snippet). No company-specific SAM estimate found. |
| Traction | 30,000+ billable hours recovered annually at Ewing Automotive Group (Revion website); +15% repair order count increase (Revion website); ~12,000 calls handled with 50% BDC staff reduction at unnamed dealership (AM Live exhibitor page); partners include $500M+ and $700M+ revenue dealership groups (Revion website); testimonials from former Ford UK Chairman & CEO and Mercedes-Benz of Plano Fixed Ops Director (Revion website). |
| Revenue Signal | No public data found. No pricing page. |
| Founders | Zaki GW (CEO): LSE first-class honours, Multiverse GTM, Morgan Stanley/Citi IB. Hanbo Xie (CTO): Imperial College first-class honours (scholarship), Terra engineer (age 18), Goldman Sachs derivatives, IBM Research. |
| Competitors | Tekion ($665M raised, $4B valuation, revenue unknown, full cloud DMS + AI agents); Toma ($17M raised, approaching 8-figure ARR, voice AI for dealership calls); Mia Labs ($29M raised, 350+ dealerships, AI phone agents); STELLA ($34.7M+ raised, revenue unknown, voice AI + Reynolds & Reynolds partnership); Flai ($4.5M raised, revenue unknown, custom voice tech for dealerships) |
| Moat Signals | 9 named DMS/CRM integrations (Revion website); domain-specific voice AI for in-bay technician workflows; dealership group partnerships ($500M+ and $700M+ revenue groups). |
| Risk Factors | Well-funded direct competitors (Toma, STELLA, Mia), Tekion agentic AI platform threat, brand disambiguation with Revion Solutions Inc |
| Founder Reach | Zaki GW: Twitter not found, LinkedIn linkedin.com/in/zaki-gw-63838014b/. Hanbo Xie: Twitter @PsychBoyH (count not retrievable), LinkedIn linkedin.com/in/hanbo-xie/, GitHub github.com/xhb120633 (details not retrieved). |
| Distribution Signals | Exhibiting at Automotive Management Live 2026 (NEC Birmingham, Nov 2026); named dealership group partnerships; 9 platform integrations listed. No Product Hunt launch found. No app store listing found. |
| Emails | No public data found |
