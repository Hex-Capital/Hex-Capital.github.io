# Netter

> Data Science Autopilot for the real economy.

| Field | Value |
|-------|-------|
| Website | https://netter.ai |
| YC Page | https://www.ycombinator.com/companies/netter |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 4 |
| Location | Paris, France [Inferred] (founders' LinkedIn list Paris; YC page does not specify) |
| Tags | Workflow Automation, Big Data, AI, ML |
| YC Partner | Nicolas Dessaigne (YC company page) |
| Emails | samuel@netter.ai (netter.ai homepage) |

## The Idea

**Problem:** Mid-market companies (retail, logistics, healthcare, manufacturing, real estate) have data scattered across legacy systems (TMS, ERP, loyalty cards, accounting tools) and lack in-house data engineering to consolidate it (netter.ai, 2026). Per the company's YC description, examples include a nursing home group manually chasing receivables across disconnected tools, a logistics operator with empty trucks because TMS/ERP/fleet data weren't joined, and a retail chain with years of unused loyalty data (YC company page, 2026).

**Approach:** Netter centralizes scattered sources into a "living ontology," then lets non-technical teams build dashboards, workflows, and apps via chat rather than tickets (netter.ai). Stated mechanism: 120+ native connectors (databases, SaaS, APIs, files, IoT, webhooks); natural-language to deployed workflows/dashboards; Python steps that remain readable and editable; end-to-end logging, versioning, replay; role-based policies and end-to-end encryption (netter.ai, 2026). Marketing claims "~4 hours from concept to deployed application" and "30 minutes" to running systems (netter.ai).

**Differentiation:** [Inferred]: Versus pure-ELT tools (Fivetran, Airbyte) that move data but don't build apps/workflows, Netter packages ingestion + ontology + workflow + ML in a chat-driven layer. Versus analytics notebooks (Hex), it targets non-technical mid-market operators rather than data teams. Versus iPaaS (Workato, Zapier), it adds a structured data layer/ontology for analytics and ML, not just integration.

**Business Model:** No public pricing page found on netter.ai. [Inferred]: Per-seat or platform SaaS with usage-based connector/compute add-ons, sold via direct enterprise sales — based on named pilot customers (Carrefour, Tesco, Auchan) referenced on the homepage and the founder's calendly demo flow (samuel@netter.ai).

**TAM/SAM:** No public TAM/SAM data found specific to "mid-market data autopilot." Adjacent market: data integration market widely cited at ~$15–17B in 2024 with ~12% CAGR (multiple market-research summaries via search snippets, no direct citation captured here).

**GTM / Distribution:** [Inferred]: Founder-led direct enterprise sales in France/EU first, given Paris-based founders, French/EU named pilot customers (Carrefour, Auchan in France/Spain; Tesco in UK), and demo-booking flow tied to the CEO's calendar (netter.ai). YC company page lists 0 jobs (YC page, 2026), implying GTM is still founder-driven.

## Defensibility

- **Data/workflow lock-in:** [Inferred]: Once a customer's TMS, ERP, loyalty, and accounting systems are wired into Netter's ontology and active workflows depend on it, switching costs rise (re-implementation across 120+ connectors). Unproven at this stage.
- **Connector library:** 120+ native connectors claimed (netter.ai). [Inferred]: A connector library is a known but commoditizable moat — Airbyte advertises 550+ connectors (Airbyte website, 2026 via search snippet).
- **Domain ontology for mid-market verticals:** [Inferred]: If Netter accumulates reusable schemas for nursing-home AR, logistics route+load, and retail loyalty, that vertical-specific data model could become a moat. No evidence yet that this exists beyond the three illustrative cases.

**Market structure:** No structural barrier identified at this stage. [Inferred]: Incumbents (Fivetran, Snowflake, Databricks, Palantir Foundry) could build a chat-driven mid-market layer; the wedge is GTM motion and price point, not technology.

**Commoditization risk:** [Inferred]: High. The component pieces — connectors, LLM-to-SQL/Python, workflow runners, dashboards — are individually commoditized. The integration into a single chat-first product for mid-market is the differentiation; multiple YC and seed-stage companies are pursuing similar wedges.

## Market & Traction

**Traction signals:**
- Named pilot/customer logos on homepage: Carrefour (France), Tesco (UK), Auchan (Spain) (netter.ai, 2026). No contract values, ARR, or seat counts disclosed.
- Marketing claim: "~10% dormant receivables recovered within weeks" (netter.ai). Customer outcome testimonial; not company revenue.
- YC batch: Spring 2026 (YC company page).
- Funding: No public funding announcement found; [Inferred]: standard YC deal (~$500K).
- Press coverage: No public press coverage found in TechCrunch, Forbes, Les Echos, or other named publications.
- Product Hunt: No public data found.
- Twitter/X (company): No public data found.
- LinkedIn (company): No public data found.
- Discord/Slack community: No public data found.
- Job postings: 0 listed on YC (YC page, 2026); hiring flag = false.
- Web traffic: No public data found.

**Competitive landscape:**
- **Fivetran** — $565M+ raised, last round Series E $125M Sep 2021 (TechCrunch, 2021 via search snippet); reported $200M+ ARR (industry estimates via search snippet). Differentiator: managed ELT pipelines for large enterprises; Netter targets mid-market and adds workflow/app layer Fivetran does not provide.
- **Airbyte** — ~$181M raised through Series B (Crunchbase via search snippet); revenue not disclosed. Differentiator: open-source ELT with 550+ connectors (Airbyte, 2026 via search snippet); Netter is closed-source and bundles ontology + chat-driven app building.
- **Hex** — $96M raised across rounds (TechCrunch via search snippet); ARR not disclosed. Differentiator: AI notebooks for data teams; Netter targets non-technical mid-market operators rather than analysts.
- **Palantir Foundry** — public company, $2.8B revenue 2023 (Palantir 10-K via search snippet). Differentiator: large-enterprise ontology platform; Netter targets a price point and onboarding speed mid-market companies can absorb.
- **Workato / Zapier (iPaaS)** — Workato $200M+ raised, ~$100M ARR (Bloomberg via search snippet). Differentiator: workflow automation without a structured data/ontology layer for analytics; Netter integrates both.

**Why now:**
- [Inferred]: LLMs crossed the threshold in 2024–2025 where natural-language-to-SQL/Python is reliable enough for production workflows, enabling chat-driven build.
- [Inferred]: Mid-market companies (retailers, logistics, nursing homes) face margin compression and cannot hire data engineers at large-enterprise rates, making a self-serve "autopilot" wedge viable now versus five years ago.

## Founders & Team

**Samuel Ladroue** — Co-Founder & CEO
- LinkedIn: linkedin.com/in/samuel-ladroue, headline "Building Netter" (LinkedIn search result).
- Location: Paris, Île-de-France, France (LinkedIn).
- Prior background: Search snippet referenced involvement with "Almanax," an AI security for Web3 startup featured at Paris Blockchain Week (PitchBook via search snippet); could not directly verify on LinkedIn (WebFetch on LinkedIn returned 999/blocked). Treat as unverified.
- Twitter/X: No public account found tied to Netter.
- GitHub: No public repos found.
- Email: samuel@netter.ai (netter.ai).

**Amin Hamzaoui** — Co-Founder & CTO
- LinkedIn: linkedin.com/in/amin-hamzaoui, headline "Student at Mines Paris and ENS Ulm" (LinkedIn search result).
- Education: Mines Paris (École des Mines) and ENS Ulm (École normale supérieure) — two of France's top engineering/research grandes écoles (LinkedIn).
- Prior background: Research experience at AMOLF (Dutch physics institute) per LinkedIn snippet; Stockly data scientist post-mention from 2023 may refer to a different "Amin Hamzaoui" (LinkedIn post via search snippet — unverified).
- Twitter/X: No public account found.
- GitHub: No personal repo conclusively identified.
- Connections: 407 (LinkedIn search snippet).

**Other team:** YC lists team size 4. No public profiles found for the other two members.

**Co-founder relationship:** No public data on co-founder history. [Inferred]: Both are Paris-based; potential overlap via French grandes écoles ecosystem, unverified.

**Founder-market fit:** [Inferred]: Hamzaoui's Mines Paris + ENS Ulm pedigree signals strong technical depth for ML/data infrastructure. Ladroue is positioned as the commercial founder; documented pre-Netter operating history could not be verified due to LinkedIn fetch failures. Net: technical credibility appears strong; commercial track record unverified in public sources.

## Key Risks

**Customer logo verification risk:** Carrefour, Tesco, and Auchan are listed as deployments on netter.ai, but no public press release, case study, or contract value confirms paid usage versus pilot/POC. If these are unpaid pilots or trial integrations, traction is weaker than the homepage suggests. No public confirmation found.

**Connector commoditization:** Airbyte advertises 550+ connectors and is open-source (Airbyte, 2026 via search snippet); Fivetran is the managed-ELT incumbent. Netter's "120+ connectors" claim alone is not differentiated; defensibility depends on the ontology and chat-driven build layer holding up.

**Vertical sprawl:** Public materials cite five verticals (retail, healthcare, manufacturing, logistics, real estate) and three illustrative cases (nursing-home AR, logistics routing, retail loyalty). [Inferred]: Selling horizontal data platforms to mid-market across five verticals at pre-seed stage with a 4-person team risks diluting product focus and elongating sales cycles.

**Commercial founder track record opacity:** Samuel Ladroue's pre-Netter operator history is not verifiable via public search (LinkedIn blocked WebFetch; conflicting search snippets reference "Almanax" but unconfirmed). Reduces ability to underwrite GTM execution.

**No moat at chat-to-workflow layer:** [Inferred]: LLM-driven natural-language-to-pipeline is being built by many YC and Series-A entrants (e.g., DataSci.Pro YC X25 per LinkedIn post). Without a vertical or data-ontology lock-in, Netter could face direct substitution.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found specific to mid-market data autopilot. Adjacent: data integration market ~$15–17B, ~12% CAGR (multiple research firms via search snippet, 2024). |
| SAM | No public data found. |
| Traction | Customer logos: Carrefour, Tesco, Auchan (netter.ai, 2026); customer testimonial: ~10% dormant receivables recovered within weeks (netter.ai); YC Spring 2026 batch (YC page); 0 open jobs (YC page, 2026). |
| Revenue Signal | No public data found (no pricing page on netter.ai; no funding announcement). |
| Founders | Samuel Ladroue (CEO): Paris-based, "Building Netter" (LinkedIn). Amin Hamzaoui (CTO): student at Mines Paris and ENS Ulm (LinkedIn). |
| Competitors | Fivetran ($565M+ raised, ~$200M+ ARR estimates via search snippet, managed ELT for enterprise); Airbyte (~$181M raised via search snippet, revenue unknown, open-source 550+ connectors); Hex ($96M raised via search snippet, ARR unknown, AI notebooks for data teams); Palantir Foundry (public, $2.8B 2023 revenue per 10-K via search snippet, large-enterprise ontology); Workato ($200M+ raised, ~$100M ARR via search snippet, iPaaS without analytics layer). |
| Moat Signals | No public data found beyond marketed 120+ connectors and ontology layer (netter.ai). |
| Risk Factors | Logo-verification risk on named customers, connector commoditization vs. Airbyte/Fivetran, vertical sprawl across 5 industries. |
| Founder Reach | Samuel Ladroue: Twitter not found, LinkedIn count not retrievable, GitHub not found. Amin Hamzaoui: Twitter not found, LinkedIn 407 connections (search snippet), GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt, no press, no app stores, no community channels surfaced). |
| Emails | samuel@netter.ai (netter.ai homepage). |
