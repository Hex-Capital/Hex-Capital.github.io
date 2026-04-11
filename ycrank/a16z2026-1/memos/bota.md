# Bota

> Bota is the first AI agent infra for real-world context

| Field | Value |
|-------|-------|
| Website | https://www.bota.dev |
| YC Page | https://speedrun.a16z.com/companies/bota |
| Batch | a16z Speedrun SR006 (Jan–Apr 2026); not a YC batch — founders are YC W24 alumni via StarJar |
| Industry | AI, Developer Tools, B2B / |
| Team Size | 4 |
| Location | Mountain View, California, United States of America |
| Tags | AI, Developer Tools, B2B |
| YC Partner | Gustaf Alstromer (YC partner for StarJar, W24); Bota's a16z Speedrun partner not listed (page returned 404) |
| Emails | contact@bota.dev, ruming@bota.dev, qi@bota.dev |

## The Idea

**Problem:** AI agent companies building products in sales, healthcare, legal, and finance need access to real-world conversation data — in-person meetings, phone calls, and field interactions — to power their agents. Today, most AI agent infrastructure captures only digital/virtual meetings (e.g., Zoom bots). Capturing offline, in-person context requires hardware manufacturing, device logistics, firmware management, and audio processing pipelines that are outside the core competency of software companies. (bota.dev; docs.bota.dev)

**Approach:** Bota provides a multi-tenant hardware-and-API platform. Software companies integrate Bota's REST API and receive white-labeled wearable recording devices provisioned for their end-users. Bota handles manufacturing, logistics, replacements, returns, and support. Devices record offline without connectivity; audio syncs automatically via resumable uploads, is transcribed with speaker diarization, and delivered via webhooks. (docs.bota.dev)

**Differentiation:**
- Recall.ai ($38M Series B, $250M valuation; BusinessWire, Sep 2025) is the closest infrastructure analogy but serves virtual meetings only — it deploys bots into Zoom/Teams/Meet, not physical-world recording. Bota targets the offline gap.
- Limitless ($33M raised; acquired by Meta, Dec 2025; TechCrunch) built a consumer pendant with a beta API — it was consumer-first, not infrastructure-first for B2B developers.
- Omi ($2M seed from Draper Associates; TechCrunch, Jan 2025) is open-source consumer hardware; it offers an API but handles no device lifecycle management for enterprise customers.
- PLAUD.AI ($180M+ ARR, bootstrapped; PR Newswire, Apr 2025) is consumer hardware with an emerging enterprise/developer platform; PLAUD acquired the founders' previous company StarJar.

**Business Model:** No pricing page found on bota.dev or docs.bota.dev. The company claims over $700K in contracted ARR achieved in 5 weeks (a16z Speedrun company description). [Inferred]: Most likely monetization is a platform fee per device provisioned plus per-minute or per-transcription API usage, given the hardware-plus-API model and enterprise compliance features (HIPAA, SOC 2).

**TAM/SAM:**
- Global AI agents market: $7.63B in 2025, projected $182.97B by 2033 at 49.6% CAGR (Grand View Research, 2025 via search snippet).
- Voice AI agents market: $3.14B in 2024, projected $47.5B by 2034 at 34.8% CAGR (search snippet, 2025).
- [Inferred]: Bota's serviceable market is the subset of AI agent companies needing offline/real-world voice capture infrastructure — no public SAM estimate found for this specific segment.

**GTM / Distribution:** Named customer: AlphaWatch AI (YC-backed secure document agent for hedge funds and PE; $500K raised; ycombinator.com). Company description states customers include "top AI agent companies in sales, healthcare, law, finance, productivity" (a16z Speedrun portal). [Inferred]: Distribution is direct B2B sales to AI agent companies, leveraging the founders' YC and PLAUD.AI network. The developer docs site (docs.bota.dev) and API-first approach suggest a developer-led sales motion.

## Defensibility

- **Hardware + logistics moat (developing):** Managing device manufacturing, provisioning, firmware, replacements, and returns creates operational complexity that pure-software competitors would need to replicate (docs.bota.dev). This is operational, not yet a structural moat.
- **Multi-tenant data pipeline:** Enterprise compliance certifications (SOC 2 Type II, HIPAA, GDPR) and database-level tenant isolation create switching costs once integrated (docs.bota.dev).
- **Network effects:** [Inferred]: As more AI agent companies integrate Bota devices into their products, the installed hardware base grows, potentially creating a data flywheel for improving transcription quality. Unproven at this stage.

**Market structure:** Recall.ai could extend into offline recording but would need to build or acquire hardware capabilities — a fundamentally different operational model from deploying virtual meeting bots. PLAUD.AI is building its own developer platform (PR Newswire, Apr 2025), which represents the most direct structural threat, as PLAUD already manufactures devices at scale and acquired the founders' prior company. [Inferred]: PLAUD's developer platform may prioritize first-party device distribution over becoming neutral infrastructure for third-party AI agent companies, creating a potential channel conflict.

**Commoditization risk:** The core components (BLE wearable hardware, speech-to-text APIs, webhook delivery) are individually available. Omi's open-source hardware demonstrates low barriers to device replication. The defensibility depends on execution quality of the integrated platform — device lifecycle management, enterprise compliance, and reliability at scale — rather than any single proprietary technology.

## Market & Traction

**Traction signals:**
- $700K contracted ARR in 5 weeks from founding (company self-reported, a16z Speedrun portal description).
- Named production customer: AlphaWatch AI, integrating Bota for private equity conversation capture workflows (bota.dev).
- Company claims customers across sales, healthcare, law, finance, and productivity verticals (a16z Speedrun portal).
- a16z Speedrun SR006 participant; program invests up to $1M per company (a16z Speedrun FAQ).
- Company Twitter/X: link to @Rumingzh provided; no dedicated company handle found.
- Company LinkedIn: https://www.linkedin.com/company/botadev (company data); follower count not retrievable.
- No Product Hunt launch found. No Discord/Slack community found. No app store listing found. No press coverage in named publications found.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Bota |
|---|---|---|
| Recall.ai | $38M Series B, $250M valuation (BusinessWire, Sep 2025) | Virtual meeting API only; no hardware/offline capture |
| PLAUD.AI | Bootstrapped, $180M+ ARR (PR Newswire, Apr 2025) | Consumer hardware-first; enterprise platform launching summer 2025; acquired Bota founders' prior company |
| Limitless | $33M raised; acquired by Meta Dec 2025 (TechCrunch) | Consumer pendant; API in beta; no longer independent |
| Omi (Based Hardware) | $2M seed (TechCrunch, Jan 2025) | Open-source consumer hardware; no enterprise logistics/compliance layer |

**Why now:** [Inferred]: Three converging catalysts: (1) AI agent companies raised billions in 2024–2025 and are moving from digital-only to real-world deployment, creating demand for offline context; (2) speech-to-text costs dropped significantly with open-source models (Whisper, etc.), making per-minute transcription economically viable at scale; (3) Meta's acquisition of Limitless (Dec 2025) and PLAUD's $180M+ ARR validated the AI recording hardware category while removing a potential competitor from the independent market.

## Founders & Team

**Ruming Zhen** — Co-founder & CEO
- MS Mechanical Engineering, Robotics and Product Design, Stanford University (Product School; TechTimes, Jul 2021)
- Product leadership at Tesla and Intuit (PR Newswire, Apr 2025)
- Co-founded StarJar (YC W24, Dec 2023) — acquired by PLAUD.AI, Apr 2025; company claims "8-figure" exit (a16z Speedrun portal)
- Forbes Technology Council advisor; Harvard Business Review advisor (Globee Awards)
- Twitter/X: @zhenruming — follower count not retrievable
- LinkedIn: linkedin.com/in/zhenruming — "Startup Founder | YC, Tesla, Stanford"; 500+ connections
- GitHub: No public repos found

**Qi Zhang** — Co-founder & CTO
- ~10 years at Amazon: AWS Supply Chain, Amazon Fresh & Prime Now, Whole Foods supply chain, Amazon Global Marketplace, Amazon Mobile Shopping (LinkedIn, PR Newswire Apr 2025)
- Co-founded StarJar (YC W24) — acquired by PLAUD.AI, Apr 2025
- Founded non-profit health network for keratoconus patients in China with 20K+ members and 130+ publications (LinkedIn)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/qi-zhang-21211264 — "B2B AI Startup Founder | YC W24 | Amazon"; second profile at linkedin.com/in/i-am-qi-zhang — "Startup Founder | Speedrun, YC, Amazon"
- GitHub: No public repos found

**Co-founder relationship:** Zhen and Zhang co-founded StarJar together in December 2023 (YC W24; ycombinator.com/companies/starjar), joined PLAUD.AI together following the acquisition (PR Newswire, Apr 2025), and then co-founded Bota in 2026. Multi-year working relationship as co-founders.

**Founder-market fit:** Both founders previously built and sold a company to PLAUD.AI, an AI recording hardware company with $180M+ ARR and 700K+ users (PR Newswire, Apr 2025). This gave them direct experience with AI hardware manufacturing, enterprise workflows, and the developer platform PLAUD was building. Zhen's Stanford robotics and Tesla hardware background combines with Zhang's decade of Amazon infrastructure experience. Their prior company (StarJar) served healthcare systems with document processing — a regulated enterprise vertical similar to Bota's target compliance-heavy customers.

## Key Risks

**PLAUD.AI competitive overlap:** PLAUD.AI announced a developer platform with APIs and SDKs in the same April 2025 press release that disclosed the StarJar acquisition (PR Newswire, Apr 2025). PLAUD has $180M+ ARR, 700K+ devices deployed, and manufacturing at scale. Bota's founders built technology at PLAUD before leaving to start Bota, creating potential IP overlap questions and a well-resourced direct competitor with an installed base. Mitigation: Bota may have a non-compete carve-out or differentiated positioning as neutral infrastructure vs. PLAUD's first-party platform.

**Hardware execution risk:** Managing device manufacturing, logistics, firmware, and returns at scale is capital-intensive and operationally complex. A 4-person pre-seed team has limited capacity to manage hardware supply chain issues (component shortages, quality control, warranty). Mitigation: The founders have hardware experience from Stanford/Tesla/PLAUD.

**Single-channel dependency:** Traction appears concentrated in AI agent companies as customers. If the AI agent market consolidates rapidly or major platforms (OpenAI, Google) build native offline context capabilities, Bota's customer base could contract. No diversification beyond AI agent developers is evident.

**Name disambiguation:** "Bota" is shared with Bota Systems AG (Swiss robotics sensors), Bota Biosciences (Chinese biotech, $100M+ raised), and others. This may cause brand confusion in search, investor diligence, and developer discovery.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.63B in 2025, $182.97B by 2033 at 49.6% CAGR for AI agents market (Grand View Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | $700K contracted ARR in 5 weeks (company self-reported, a16z Speedrun portal); AlphaWatch AI as named production customer (bota.dev) |
| Revenue Signal | $700K contracted ARR (company self-reported, a16z Speedrun portal); no independent verification or pricing page found |
| Founders | Ruming Zhen (CEO): Stanford MS, Tesla, Intuit, StarJar exit to PLAUD.AI. Qi Zhang (CTO): ~10yr Amazon, StarJar exit to PLAUD.AI |
| Competitors | Recall.ai ($48M total raised, $250M valuation, 2,000+ customers; virtual meeting API only). PLAUD.AI (bootstrapped, $180M+ ARR; consumer hardware, launching dev platform). Limitless ($33M raised, acquired by Meta; consumer pendant). Omi ($2M seed; open-source consumer hardware) |
| Moat Signals | Hardware + device logistics operational complexity; SOC 2/HIPAA/GDPR compliance certifications (docs.bota.dev) |
| Risk Factors | PLAUD.AI competitive overlap, hardware execution at pre-seed scale, name disambiguation |
| Founder Reach | Ruming Zhen: Twitter @zhenruming (count not retrievable), LinkedIn 500+ connections. Qi Zhang: Twitter not found, LinkedIn linkedin.com/in/qi-zhang-21211264 |
| Distribution Signals | No public data found |
| Emails | contact@bota.dev, ruming@bota.dev, qi@bota.dev |
