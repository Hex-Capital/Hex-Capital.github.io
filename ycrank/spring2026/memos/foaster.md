# Foaster

> AI-native consulting firm

| Field | Value |
|-------|-------|
| Website | https://foaster.ai |
| YC Page | https://www.ycombinator.com/companies/foaster |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Enterprise Software |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

## The Idea

**Problem:** Management consulting engagements are slow (weeks to months), expensive, and built on partial visibility — typically a limited set of interviews that yield an incomplete picture of operations (foaster.ai). Clients pay premium rates for work that relies on sampling rather than comprehensive data collection.

**Approach:** AI agents conduct employee interviews in parallel across the entire organization, reconstruct a detailed operational map of how the company actually works, and reason on top of it to generate recommendations. A human consultant scopes the engagement, reviews outputs, challenges reasoning, and delivers final recommendations (YC company page). The company claims "100% of teams included," delivery in "days not months," and "3–5x more cost-effective than traditional firms" (foaster.ai). Current service lines: process mapping, AI roadmap design, and cost reduction (YC company page).

**Differentiation:** Traditional consulting firms (McKinsey, BCG, Bain) rely on small interview samples and junior analyst labor. Foaster's agent-driven interview model collects data from every employee, not a sample. Versus Skan.ai ($57.6M raised; Skan.ai press release, Mar 2022), which maps processes via computer vision on screen activity, Foaster uses conversational AI interviews. Versus Dialogue AI ($6M seed; BusinessWire, Oct 2025), which conducts AI interviews for external customer/market research, Foaster interviews internal employees to map operations.

**Business Model:** "Pricing depends on the size of the organization and the scope of the engagement" (foaster.ai). No public pricing tiers. [Inferred]: Most likely monetization is per-engagement consulting fees, potentially transitioning to a platform subscription as the operational map becomes a persistent asset for repeat analysis.

**TAM/SAM:** The global AI consulting services market was estimated at $11.07B in 2026, projected to reach $90.99B by 2035 at 26.2% CAGR (Future Market Insights via search snippet). The broader global management consulting market exceeds $300B. [Inferred]: SAM would be mid-market and enterprise companies purchasing operational/process consulting engagements, a subset of the broader consulting TAM.

**GTM / Distribution:** The website features a "Book a call" CTA and a case study section (foaster.ai). [Inferred]: Direct enterprise sales motion, likely starting with founder-led sales to mid-market companies, leveraging the YC network for initial deal flow.

## Defensibility

- **Data moat potential:** Each engagement generates a proprietary operational map of the client organization. Once built, this map enables follow-on analyses "without starting from scratch" (YC company page). [Inferred]: This creates switching costs — a competing firm would need to re-interview the entire organization to replicate the baseline.
- **Interview methodology:** The quality of AI-conducted employee interviews and the reasoning layer that generates recommendations represent accumulated know-how. The founders' prior work on LLM behavioral benchmarks (Werewolf Benchmark, 300k+ views, shared by OpenAI's president; ENSAE article) provides domain-relevant experience in designing agent interactions.
- **No patents or regulatory barriers found in public sources.**

**Market structure:** Traditional consulting firms face business model cannibalization risk — automating interviews and analysis would undermine their billable-hours model and the leverage structure (partners billing out junior analysts). [Inferred]: This creates an innovator's dilemma where incumbents are structurally disincentivized from offering a 3–5x cheaper alternative.

**Commoditization risk:** The core technology stack (LLM-based interviewing agents, data synthesis, recommendation generation) uses generally available foundation models. Distyl AI ($202M raised, $1.8B valuation; Crunchbase, Sep 2025) and PromptQL ($136M+ raised; VentureBeat) are well-funded players in adjacent AI-consulting spaces. [Inferred]: The barrier is less the technology than the accumulated interview methodology, prompt engineering for organizational analysis, and the proprietary operational maps generated per client.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or customer names disclosed (foaster.ai, YC page).
- LinkedIn company page exists at linkedin.com/company/foaster-ai; follower count not retrievable (LinkedIn).
- Twitter/X: @foasters handle found but unverified; founder handles @RaphaelDabadie and @alexcmbs17 exist but follower counts not retrievable (X returned 402 error).
- GitHub organization Foaster-ai: 11 followers, 2 repos, 32 stars combined (GitHub).
- Werewolf-bench repo: 29 stars, 1 fork, archived Aug 2025 (GitHub).
- No Product Hunt listing found.
- No Discord or Slack community found.
- No app store presence or browser extension found.
- One third-party X post congratulating the team on YC acceptance (@ai_for_success; X).
- One LinkedIn post by Foaster referencing crossing a threshold for AI solving complex business problems (LinkedIn).
- Not hiring per YC page.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Foaster |
|-----------|---------|-------------|-------------------------------|
| Distyl AI | ~$202M (Series B, Sep 2025; Crunchbase) | Undisclosed; 5–8x annual growth claimed (PR Newswire) | Forward-deployed AI engineers for enterprise transformation; broader scope beyond consulting |
| Skan.ai | $57.6M (Series B, Mar 2022; Skan.ai) | $22.2M (GetLatka, 2025) | Computer vision-based process mining vs. Foaster's interview-based approach |
| Aily Labs | $101M (Series B, Nov 2025; PR Newswire) | $28.6M ARR (GetLatka, mid-2025) | Always-on decision intelligence platform vs. engagement-based consulting |
| Dialogue AI | $6M seed (Oct 2025; BusinessWire) | Pre-revenue | AI interviews for external customer research vs. Foaster's internal employee interviews |
| PromptQL (Hasura) | $136M+ (Series C, Feb 2022; Hasura blog) | Seven-figure deals in beta (VentureBeat) | $900/hr AI engineers deployed as consultants; data integration focus |

**Why now:** [Inferred]: The catalyst is frontier LLM capabilities reaching a threshold where AI agents can conduct nuanced, open-ended employee interviews and synthesize qualitative organizational data — a task that required human judgment until recently. Traditional consulting firms have begun cutting graduate hiring by 6–30% as AI automates junior analyst work (HBR, Sep 2025 via search snippet), signaling market readiness for AI-augmented consulting delivery.

## Founders & Team

**Raphael Dabadie** — Co-founder & CEO
- Education: ENSAE Paris (expected 2026) (ENSAE article). Age ~23.
- At age 11, created the most-followed Rafael Nadal fan Instagram account (245,000+ followers), growing tennis communities to 400,000+ users (So-Tennis; YC page).
- At age 18, recruited as agent for Rafael Nadal's Academy in Manacor, Spain (So-Tennis).
- Co-authored "Probing LLM Social Intelligence via Werewolf" (300k+ views, shared by OpenAI's president; contacted by xAI co-founder) and "The Political Gap Between AIs and Citizens" — combined 12M+ views (ENSAE article; YC page).
- Twitter/X: @RaphaelDabadie — follower count not retrievable.
- LinkedIn: linkedin.com/in/raphael-dabadie — 500+ connections.
- GitHub: No personal account found. Repos under Foaster-ai org.

**Alexandre Combes** — Co-founder & CTO
- Education: ENSAE Paris (expected 2026) (ENSAE article). Age ~23.
- Previously built Repondia, where AI agents handled 60,000+ customer calls for restaurant groups in France (YC page). No independent web presence found for Repondia.
- Co-authored both LLM benchmarks with Dabadie (ENSAE article).
- Twitter/X: @alexcmbs17 — follower count not retrievable.
- LinkedIn: linkedin.com/in/alexandre-combes-2bb450271 — 500+ connections.
- GitHub: No personal account found.

**Co-founder relationship:** Both founders attend ENSAE Paris (expected graduation 2026) and co-authored two LLM benchmark papers together (ENSAE article).

**Founder-market fit:** Combes has direct experience building AI agents that conducted 60,000+ real customer calls at scale (YC page), which maps directly to Foaster's core mechanism of AI-conducted interviews. Both founders' LLM benchmark research — particularly the Werewolf study on AI social intelligence — demonstrates expertise in evaluating and designing AI agent interactions. Dabadie's community-building experience (400K+ users) indicates sales and relationship skills relevant to a consulting GTM motion.

## Key Risks

**Repondia scale ambiguity:** Combes's prior venture Repondia (60K+ calls) has no independent web presence, press coverage, or Crunchbase profile. The lack of verifiable traction for the most relevant prior experience makes it difficult to assess execution capability for enterprise-scale deployments.

**Enterprise sales cycle with a 2-person team:** Consulting engagements require trust-building with senior executives. Selling AI-native consulting to enterprises requires overcoming skepticism about AI replacing human judgment on sensitive organizational topics — a challenge compounded by young founders without prior consulting industry credentials.

**Interview data sensitivity:** AI agents interviewing employees about workflows, inefficiencies, and organizational dynamics collect highly sensitive internal data. Enterprise procurement, legal, and compliance teams may impose significant barriers around data handling, employee consent, and AI governance — particularly in regulated industries.

**Well-funded competitive convergence:** Distyl AI ($202M), Aily Labs ($101M), and PromptQL ($136M+) operate in overlapping territory. Any of these could add an interview-based data collection layer. Dialogue AI ($6M) already conducts AI interviews at scale and could pivot from external to internal interviews.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.07B in 2026, projected $90.99B by 2035 at 26.2% CAGR (Future Market Insights via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Raphael Dabadie (CEO): ENSAE Paris, 400K+ user tennis communities, Nadal Academy agent, 12M+ views on LLM benchmarks. Alexandre Combes (CTO): ENSAE Paris, built Repondia (60K+ AI calls), co-authored same benchmarks. |
| Competitors | Distyl AI (~$202M raised, revenue undisclosed, forward-deployed AI engineers); Skan.ai ($57.6M raised, $22.2M revenue, CV-based process mining); Aily Labs ($101M raised, $28.6M ARR, decision intelligence platform); Dialogue AI ($6M raised, revenue unknown, external AI interviews); PromptQL/Hasura ($136M+ raised, seven-figure deals in beta, $900/hr AI engineers) |
| Moat Signals | No public data found |
| Risk Factors | Enterprise data sensitivity barriers, well-funded competitive convergence, 2-person team vs. enterprise sales cycle |
| Founder Reach | Raphael Dabadie: Twitter @RaphaelDabadie (count not retrievable), LinkedIn 500+ connections. Alexandre Combes: Twitter @alexcmbs17 (count not retrievable), LinkedIn 500+ connections. GitHub org Foaster-ai: 32 stars total (GitHub). |
| Distribution Signals | No public data found |
| Emails | No public data found |
