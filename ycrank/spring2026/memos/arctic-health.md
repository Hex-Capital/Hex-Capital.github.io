# Arctic Health

> AI-native credentialing and contracting for healthcare

| Field | Value |
|-------|-------|
| Website | https://arctic.health |
| YC Page | https://www.ycombinator.com/companies/arctic-health |
| Batch | Spring 2026 (YC company page) |
| Industry | Healthcare / Healthcare -> Healthcare Services |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Healthcare, Healthcare IT, AI |
| YC Partner | Aaron Epstein (YC company page) |
| Emails | No public data found (only an obfuscated "[email protected]" placeholder visible on arctic.health) |

## The Idea

**Problem:** Healthcare organizations must credential each provider with payers (commercial + government) to be reimbursed in-network. The company describes the process as taking "60-90 days" end-to-end across "300+ insurance networks" in all 50 states + DC (arctic.health). Existing tools either "perform small pieces of the workflow or price out small and mid-sized organizations" (YC page). [Inferred]: Buyers today combine point credentialing software (Medallion, Verifiable, CertifyOS) with manual operations / outsourced CVOs.

**Approach:** End-to-end AI-driven workflow: data collection and validation per state/payer rules, payer-portal submissions via "browser automations [that] enable AI agents to submit and monitor across hundreds of payer portals," and ongoing status/compliance monitoring (YC page). Marketed features include "2-day payer submission," CAQH profile management, re-credentialing monitoring, contract negotiation/rate optimization, multi-state licensure support, delegated credentialing, API integration, white-label, and "AI-powered document extraction" (arctic.health).

**Differentiation:** Arctic positions as full-stack ("end-to-end regardless of organization type or size") vs. point tools (YC page). Direct AI-agent competitor Verifiable launched CredAgent in Feb 2026, an "autonomous AI agent for end-to-end credentialing" claiming "up to 10x productivity gains" (TechEdge AI / Verifiable PR via search snippet). Assured advertises a comparable "two business days" credentialing claim and is NCQA-certified (Fierce Healthcare, 2024 via search snippet).

**Business Model:** No pricing page on arctic.health. [Inferred]: Per-provider credentialing/enrollment fees plus monthly/SaaS subscription for organization-level monitoring, given category norms (Medallion, Verifiable, Assured) and the "API integration for scale clients, white-label" tiers shown on arctic.health.

**TAM/SAM:** Global credentialing software & services in healthcare market: USD 1,006.53M in 2025, projected USD 1.42B by 2030 at 8.3% CAGR (Grand View Research, 2024 via search snippet). U.S. credentialing software & services: USD 267.72M in 2024, 6.95% CAGR 2025-2033 (Grand View Research / Nova One Advisor via search snippet). Adjacent "medical credentialing services" market: USD 4.66B (2025) → USD 7.5B (2035), 4.9% CAGR (Wiseguy/Market Growth Reports via search snippet).

**GTM / Distribution:** No public GTM disclosure. [Inferred]: Direct sales to small and mid-sized provider organizations (one stated wedge per YC page) and a higher-touch enterprise/API tier for scale clients (arctic.health feature page). Co-founder Michael Clark previously "co-founded the inside sales team at Instabase" (search snippet from YC profile / LinkedIn), suggesting an inside-sales motion.

## Defensibility

- **Browser-automation library across payer portals:** Arctic builds and maintains AI agents that submit/monitor across "hundreds of payer portals" (YC page); each portal integration is a non-trivial automation that compounds with edge-case handling.
- **Expert-in-the-loop data:** "Trained by experienced industry experts who handle every edge case" (YC page) → labeled corrections feed a payer-specific dataset. [Inferred]: Data moat strength depends on volume; unproven at 4-person stage.
- **Switching costs:** Credentialing data (CAQH, licensure, rosters) and re-credentialing schedules tie a customer to whoever holds the system of record. [Inferred]: Moderate stickiness once a roster is migrated.
- **No IP/patents found in public sources.**

**Market structure:** No structural barrier blocking incumbents was identified. Medallion (announced $43M raise and "AI Credentialing Hub" — TechEdge AI via search snippet), Verifiable (CredAgent, Feb 2026 — search snippet), CertifyOS, Andros, and Assured are all building AI-native credentialing in parallel. [Inferred]: Differentiation will rest on payer-portal coverage breadth, ops-team expertise, and price for SMB segment rather than a structural moat.

**Commoditization risk:** High. At least five funded players (below) are converging on AI agents for the same workflow; LLM + browser-automation stacks are now broadly available. [Inferred]: Time-to-build is months, not years.

## Market & Traction

**Traction signals:**
- Investors disclosed on arctic.health footer: Menlo Ventures, Y Combinator, Fortitude Ventures (arctic.health, May 2026). No round size or valuation disclosed; no announcement found via web search.
- Phone listed: (650) 955-1955 (arctic.health).
- Coverage claim: "All 50 states plus DC; 300+ insurance networks" (arctic.health).
- LinkedIn customer post referencing Arctic Health credentialing/contracting found via search (Saliha Javid post, activity ID 7450613324829941760).
- 0 open jobs on YC profile (YC page).
- No press coverage, Product Hunt launch, app store, Chrome extension, Discord, or revenue figures found.
- Company LinkedIn/Twitter follower counts not retrievable; @arcticahealth Twitter handle surfaced in search but follower count not retrievable.

**Competitive landscape:**
- **Medallion** — $130M total raised across 4 rounds, investors include Spark Capital, Sequoia, GV; recently announced AI Credentialing Hub (Tracxn / TechEdge AI via search snippet). Revenue/ARR unknown. Differentiator vs. Arctic: scale, enterprise customer base, brand.
- **Verifiable** — $47.13M total, Series B; investors include Craft Ventures, Jack Altman, 137 Ventures; launched CredAgent autonomous AI credentialing agent Feb 2026 (CB Insights / Verifiable PR via search snippet). Revenue/ARR unknown. Differentiator vs. Arctic: shipped end-to-end AI agent product earlier with quantified productivity claims.
- **CertifyOS** — $19M+ total ($14.5M Series A led by General Catalyst, 2022) (MedCity News, 2022). Revenue/ARR unknown. Differentiator: API-first credentialing, payer-focused.
- **Andros** (fka SimpleHealth Ventures) — $52.4M total, Series B-III; NCQA-certified CVO with network management suite (CB Insights / PitchBook via search snippet). Revenue/ARR unknown. Differentiator: full CVO services + payer network management.
- **Assured** — $6M seed led by First Round Capital with Kindred Ventures, Bragiel Brothers, and founders of Atria and Grow Therapy (Fierce Healthcare via search snippet). First NCQA-certified system claiming 2-day full credentialing. Differentiator: closest direct analog to Arctic's 2-day positioning, with seed funding and NCQA certification already in hand.
- Other named alternatives in category: Symplr, Verisys, Modio, MedTrainer, Baton Health, Axuall, Constellation4 Health (CB Insights / Capterra via search snippet).

**Why now:** [Inferred]: Three converging shifts in 2024-2025 — (1) LLM-driven browser automation reached production reliability for filling and monitoring stateful payer portals; (2) AI-document-extraction quality removed the manual data-entry bottleneck on CAQH/state forms; (3) competitor activity (Verifiable CredAgent Feb 2026, Medallion AI hub, Assured 2-day claim) signals investor appetite and category readiness. None of these catalysts are explicitly stated by Arctic.

## Founders & Team

**Sam Slezek** — CEO & Co-Founder
- Education: Duke University (search snippet of LinkedIn).
- Prior: Product teams at Scale AI; Instacart; investor at Amasia (early-stage VC); insurance equity coverage at Morgan Stanley (YC profile / LinkedIn via search snippet).
- LinkedIn: linkedin.com/in/slezek; headline "Building | ex-Scale/Instacart/VC"; 500+ connections (LinkedIn via search snippet).
- Twitter/X: No public account found.
- GitHub: No public repos found.

**Michael Clark** — COO & Co-Founder
- Prior: Co-founded inside sales team at Instabase; previously at 1Sharpe Capital (boutique hedge fund) (search snippet of LinkedIn / YC profile).
- LinkedIn: profile exists; URL not uniquely identified among many "Michael Clark" results; count not retrievable.
- Twitter/X: No public account found.
- GitHub: No public repos found.

**Raghav Mehrish** — CTO & Co-Founder
- Education: UCLA (search snippet).
- Prior: Senior software engineer at Airbnb; engineer at Zenefits; co-founder of Handstamp (search snippet of LinkedIn / Wiza).
- LinkedIn: linkedin.com/in/rmehrish — 500+ connections (LinkedIn via search snippet).
- Twitter/X: No public account found.
- GitHub: github.com/raghav297 — star count not retrievable from search snippet.

**Fourth team member:** Not publicly named (YC page lists team size 4 but only 3 co-founders; 1 non-founder employee identity not found).

**Co-founder relationship:** No shared employer or university surfaced across the three founders' prior employers (Scale AI/Instacart/Amasia/Morgan Stanley; Instabase/1Sharpe; Airbnb/Zenefits/Handstamp) or universities (Duke; UCLA; unknown). No public data on co-founder history.

**Founder-market fit:** Slezek's Morgan Stanley insurance-equity coverage and Scale AI product experience map to the payer + AI workflow domain (LinkedIn via search snippet). Clark's Instabase inside-sales founding role maps to building an SMB sales motion. Mehrish's Airbnb + Zenefits engineering background covers consumer-grade automation and benefits/HRIS (an adjacent payer-data domain). [Inferred]: The team is engineering- and GTM-strong but does not show explicit prior credentialing or CVO operations expertise; the YC description states they rely on "experienced industry experts who handle every edge case" as the operational layer. No advisors or board members publicly disclosed.

## Key Risks

**Direct competitor with first-mover AI agent:** Verifiable shipped CredAgent ("industry's first autonomous AI agent for end-to-end credentialing," up to 10x productivity claims) in Feb 2026 (Verifiable PR via search snippet) — 3 months ahead of Arctic's YC Spring 2026 batch launch. Risk: feature parity + brand lag against a Series B-funded competitor.

**Funded SMB-positioned analog:** Assured ($6M seed, First Round Capital, NCQA-certified, 2-day credentialing — Fierce Healthcare via search snippet) targets the same SMB wedge with an earlier-shipped NCQA credential. Arctic's NCQA status is not publicly disclosed.

**Operational/edge-case dependency:** YC description states the system is "trained by experienced industry experts who handle every edge case." [Inferred]: Edge-case payer rules across 300+ portals require either hiring credentialing ops or licensing data — a scaling cost that compresses gross margins until automation coverage improves.

**Regulatory/NCQA gating:** Health plans frequently require NCQA-certified CVOs for delegated credentialing arrangements (industry-standard requirement; Andros and Assured both certified per their websites via search snippet). No public evidence Arctic holds NCQA certification.

**Name disambiguation risk:** Multiple unrelated "Arctic Health" entities exist (Arctic Health AB seafood/health certification; arctichealth.org research library; Arctic Healthcare LinkedIn page; Arctic Health Solutions). [Inferred]: Minor brand/SEO friction but not a business risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global credentialing software & services in healthcare: $1.006B (2025) → $1.42B by 2030, 8.3% CAGR (Grand View Research, 2024 via search snippet); broader medical credentialing services: $4.66B (2025) → $7.5B (2035), 4.9% CAGR (Wiseguy/Market Growth Reports via search snippet) |
| SAM | U.S. credentialing software & services: $267.72M (2024), 6.95% CAGR 2025-2033 (Grand View Research / Nova One Advisor via search snippet) |
| Traction | Investors disclosed: Menlo Ventures, Y Combinator, Fortitude Ventures (arctic.health, May 2026); coverage claim "300+ payer networks, all 50 states + DC" (arctic.health); 0 open jobs (YC page); no public revenue, user, or press metrics found |
| Revenue Signal | No public data found (no pricing page; no funding announcement located) |
| Founders | Sam Slezek (CEO): ex-Scale AI, Instacart, Amasia VC, Morgan Stanley, Duke. Michael Clark (COO): ex-Instabase inside sales co-founder, 1Sharpe Capital. Raghav Mehrish (CTO): ex-Airbnb senior engineer, Zenefits, co-founder Handstamp, UCLA. |
| Competitors | Medallion ($130M raised, ARR unknown, scale + Sequoia/GV-backed AI Credentialing Hub — Tracxn/TechEdge AI via search snippet); Verifiable ($47.13M raised Series B, ARR unknown, shipped CredAgent autonomous AI agent Feb 2026 — CB Insights via search snippet); CertifyOS ($19M+ raised, ARR unknown, API-first/payer-focused — MedCity News, 2022); Andros ($52.4M raised, ARR unknown, NCQA CVO + network mgmt — CB Insights/PitchBook via search snippet); Assured ($6M seed First Round Capital, ARR unknown, NCQA-certified 2-day credentialing — Fierce Healthcare via search snippet) |
| Moat Signals | Payer-portal browser-automation library at scale (YC page); expert-in-the-loop labeled data (YC page); no patents or NCQA cert disclosed |
| Risk Factors | Verifiable CredAgent first-mover (Feb 2026); Assured direct SMB analog with NCQA cert; reliance on credentialing-ops experts to scale |
| Founder Reach | Sam Slezek: Twitter not found, LinkedIn 500+ connections (linkedin.com/in/slezek), GitHub not found. Michael Clark: Twitter not found, LinkedIn count not retrievable, GitHub not found. Raghav Mehrish: Twitter not found, LinkedIn 500+ connections (linkedin.com/in/rmehrish), GitHub github.com/raghav297 stars not retrievable |
| Distribution Signals | No public data found (no Product Hunt, no app store, no Chrome extension, no Discord, no public press) |
| Emails | No public data found (arctic.health displays only obfuscated "[email protected]"; phone (650) 955-1955 listed) |

Sources:
- [Arctic Health — Y Combinator](https://www.ycombinator.com/companies/arctic-health)
- [Arctic Health — Provider Credentialing Done Right](https://arctic.health/)
- [Sam Slezek — LinkedIn](https://www.linkedin.com/in/slezek/)
- [Raghav Mehrish — LinkedIn](https://www.linkedin.com/in/rmehrish/)
- [Raghav Mehrish — GitHub](https://github.com/raghav297)
- [Medallion alternative — Verifiable](https://verifiable.com/lp/medallion-alternative)
- [Verifiable — CB Insights](https://www.cbinsights.com/company/verifiable)
- [Medallion — Tracxn](https://tracxn.com/d/companies/medallion/__VdMdDd5GBCUkzb3pR-PdnYmLOkGNMScGNqzCoBRnzVA)
- [CertifyOS Series A — MedCity News](https://medcitynews.com/2022/09/certifyos-raises-14-5m-in-series-a-funds-for-credentialing-automation-platform/)
- [Medallion raises $43M, AI Credentialing Hub — TechEdge AI](https://techedgeai.com/news/medallion-raises-43m-to-reinvent-provider-credentialing-with-ai/)
- [Assured $6M seed — Fierce Healthcare](https://www.fiercehealthcare.com/health-tech/startup-assured-picks-6m-slash-time-it-takes-credential-providers-using-ai)
- [Andros — PitchBook](https://pitchbook.com/profiles/company/85638-25)
- [Andros / CredSimple — Crunchbase](https://www.crunchbase.com/organization/credsimple)
- [Credentialing software & services market — Grand View Research](https://www.grandviewresearch.com/industry-analysis/credentialing-software-services-healthcare-market-report)
- [U.S. credentialing market — Nova One Advisor](https://www.novaoneadvisor.com/report/us-credentialing-software-services-healthcare-market)
- [Medical credentialing services market — Wiseguy Reports](https://www.wiseguyreports.com/reports/medical-credentialing-services-market)
