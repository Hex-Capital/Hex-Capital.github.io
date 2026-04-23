# Callab AI

> AI voice agents for on-prem PBX stacks.

| Field | Value |
|-------|-------|
| Website | https://callab.ai |
| YC Page | https://www.ycombinator.com/companies/callab-ai |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 7 |
| Location | UAE / Tunisia (Wamda, Mar 2024) |
| Tags | Artificial Intelligence, B2B, Call Center |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** Over half the world's contact center infrastructure runs on legacy telephony—CUCM, on-prem PBX, carrier-grade SIP (company website). Current AI voice platforms require cloud-native environments, forcing a costly rip-and-replace migration. The company claims this is a $70B+ market (YC page). 35% of Fortune 500 contact centers still route legacy trunks through cloud APIs to de-risk full migrations (Synthflow blog, 2025 via search snippet).

**Approach:** Callab AI deploys AI voice agents that plug directly into existing on-prem PBX and SIP trunk infrastructure without requiring migration. Features include knowledge-base referencing (PDFs, Google Docs), post-call analysis with sentiment tagging, context-based call transfer between AI and human agents, structured data extraction from voice, batch outbound calling, and Arabic dialect support (company website). The platform supports English, Arabic, and French (Capterra listing, 2026 via search snippet). Documentation site at docs.callab.ai describes SIP trunk integration, inbound/outbound agent deployment, and function-calling for custom actions.

**Differentiation:** Most AI voice agent platforms (Vapi, Retell AI, PolyAI) are cloud-first and require customers to migrate off legacy telephony. Callab AI's stated differentiator is native integration with on-prem PBX stacks (CUCM, SIP trunks) without rip-and-replace (YC page). Trillet AI also claims legacy PBX integration with Avaya, Cisco CUCM, Mitel, and Asterisk (Trillet blog, 2026), making it the closest direct competitor. Callab AI additionally emphasizes Arabic dialect support and MENA-region localization (company website), a niche underserved by English-first platforms.

**Business Model:** No pricing page found on the website. [Inferred]: Most likely monetization is per-seat or per-minute SaaS pricing, given industry norms for contact center AI platforms.

**TAM/SAM:** Contact center software market: $72.86B in 2025, projected to reach $184.24B by 2031 at 16.72% CAGR (Mordor Intelligence via search snippet). Call center AI sub-segment: $1.99B in 2024, projected $7.08B by 2030 at 23.8% CAGR (Grand View Research via search snippet). No public SAM estimate specific to legacy/on-prem telephony AI integration found.

**GTM / Distribution:** The company states it serves clients across three continents, including "DunkinDonut" (YC page). Listed on Capterra, GetApp, and Software Advice as of 2026 (search results). [Inferred]: GTM likely combines direct enterprise sales—leveraging the founders' existing government and enterprise networks in France, Tunisia, and UAE—with inbound demand from software directories.

## Defensibility

- **Technical integration complexity:** Native integration with legacy PBX stacks (CUCM, SIP, Asterisk) requires specialized telephony engineering knowledge that cloud-first platforms have not prioritized (company website; docs.callab.ai).
- **Arabic NLP and dialect support:** The founders co-authored the "101 Billion Arabic Words Dataset," the largest Arabic dataset published (arXiv 2405.01590, April 2024), available on Hugging Face with 72 likes and 532 monthly downloads (Hugging Face). This research underpins dialect-aware voice AI in a language underserved by competitors.
- **Switching costs:** [Inferred]: Once integrated into an enterprise's on-prem telephony stack, migration to a competitor would require re-integration with the same legacy infrastructure, creating moderate switching costs.

**Market structure:** Cloud-native voice AI platforms (Vapi, Retell, PolyAI) have built their architectures around modern cloud telephony APIs; supporting legacy on-prem PBX natively would require re-architecting their infrastructure stack and diverting engineering from their core cloud customers. [Inferred]: This creates a structural disincentive for cloud-first incumbents to serve the legacy segment.

**Commoditization risk:** As contact centers gradually migrate to cloud telephony, the legacy PBX addressable market shrinks over time. Larger competitors like Cognigy (acquired by NICE for $955M in 2025 per search snippet) and Trillet AI already offer some on-prem integration. The Arabic dialect advantage narrows if major LLM providers improve Arabic support.

## Market & Traction

**Traction signals:**
- Clients across three continents, including "DunkinDonut" as a named brand (YC page)
- 7 customer testimonials on website with named individuals and titles across healthcare, real estate, logistics, and sales operations (company website)
- Listed on Capterra, GetApp, Software Advice (search results, 2026)
- Twitter/X: @callab_ai, 22 followers (X.com profile)
- LinkedIn: linkedin.com/company/callabai (YC P26 designation visible; follower count not retrievable)
- No Product Hunt launch found
- No Discord/Slack community found
- No public revenue or user count data found
- Prior entity ClusterLab raised $600K pre-seed in March 2024 from Karim Beguir (InstaDeep co-founder) and regional angel investors (Wamda, Mar 2024)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Callab AI |
|------------|---------|-------------|----------------------------------|
| PolyAI | $200M+ total, $750M valuation (SiliconANGLE, Dec 2025) | 10x growth over 2 years; revenue figure undisclosed (PRNewswire, Dec 2025) | Cloud-native managed service for large enterprises; 2,000+ deployments, 45 languages |
| Vapi | $20M Series A, $130M valuation (GlobeNewsWire, Dec 2024) | Scaled to millions in revenue within first 6 months (Vapi blog) | Developer API platform; cloud-first, no on-prem PBX focus |
| Retell AI | $5.1M total (Crunchbase via search snippet) | $40M ARR by Nov 2025; 40M+ calls/month (Getlatka, 2025; SiliconANGLE, Dec 2025) | Cloud API platform; YC W24; highest capital efficiency in segment |
| Trillet AI | Funding data unverified | Revenue unknown | Closest competitor: claims legacy PBX integration (Avaya, Cisco CUCM, Mitel, Asterisk) with on-prem Docker deployment (Trillet blog, 2026) |

**Why now:** [Inferred]: The convergence of three factors opened this window: (1) LLM-powered voice models reached production-grade quality for real-time phone conversations in 2024-2025, enabling voice agents that can handle complex calls; (2) enterprise contact centers face growing pressure to reduce costs—conversational AI is expected to reduce customer service costs by $80B by 2026 (Synthflow blog, 2025 via search snippet)—but many cannot migrate off legacy telephony due to compliance, cost, or operational constraints; (3) Arabic LLM capabilities improved substantially, partly through datasets like the founders' own 101 Billion Arabic Words Dataset (arXiv, April 2024).

## Founders & Team

**Haithem Kchaou** — Co-founder & CEO
- 7+ years building AI solutions for government and enterprise in France, Tunisia, and UAE (YC page)
- Education: Bethany College (LinkedIn via search snippet)
- Previously: Project Manager intern at Mobioos (LinkedIn via search snippet)
- Founded ClusterLab in 2020 in Tunisia; built Reedz (Arabic audiobook summarization app) before pivoting to Callab AI (Wamda, Mar 2024)
- Selected for Nvidia Inception Program (Wamda, Mar 2024)
- Collaborated with InstaDeep on national AI initiative for Tunisia's Ministry of Higher Education (Wamda, Mar 2024)
- Featured in Inc. Arabia's "GCC Tech Vanguard" (Dec 2024 via search snippet)
- Co-author: "101 Billion Arabic Words Dataset" (arXiv 2405.01590)
- Twitter/X: No personal account found; company account @callab_ai (22 followers)
- LinkedIn: linkedin.com/in/haithemkchaou
- GitHub: No public repos found

**Chehir Dhaouadi** — Co-founder & CTO
- 10+ years in enterprise systems, IT consulting, and financial technology (YC page)
- Previously: CTO at FivePoints The Talent Pool (Crunchbase via search snippet)
- Built platforms serving 200,000+ users across Tunisian government entities (LinkedIn via search snippet)
- Architects core voice AI infrastructure and legacy telephony integrations (YC page)
- Co-author: "101 Billion Arabic Words Dataset" (arXiv 2405.01590)
- Twitter/X: @chehir_dh (follower count not retrievable)
- LinkedIn: linkedin.com/in/chehirdhawedi
- GitHub: No public repos found

**Co-founder relationship:** Both co-founded ClusterLab together in Tunisia in 2020 (Wamda, Mar 2024), indicating at least 6 years of working together.

**Founder-market fit:** Both founders have direct experience building AI products for Arabic-speaking markets and enterprise/government clients in MENA—Kchaou across France, Tunisia, and UAE, and Dhaouadi with 200K+ user government platforms in Tunisia. Their co-authorship of the largest Arabic NLP dataset provides domain-specific technical depth in a language underserved by competitors. Karim Beguir, co-founder of InstaDeep (acquired by BioNTech for ~$680M), is an early investor (Wamda, Mar 2024).

## Key Risks

**Legacy market decay:** The core value proposition depends on enterprises remaining on on-prem PBX infrastructure. As cloud migration accelerates, the addressable legacy segment shrinks. Callab AI must either expand to cloud-native deployments or maintain enough legacy demand to sustain growth.

**Direct competitor overlap with Trillet AI:** Trillet AI claims nearly identical legacy PBX integration capabilities (CUCM, Avaya, Mitel, Asterisk) with on-prem Docker deployment and enterprise SLAs (Trillet blog, 2026). Differentiation may rest primarily on Arabic dialect support and MENA focus rather than technical integration capability.

**Product pivot recency:** The parent entity ClusterLab was founded in 2020 around Arabic content summarization (Reedz). The pivot to voice AI for contact centers represents a significant domain shift. Prior-product metrics (Reedz, Elm) should not be conflated with current-product traction.

**Concentration risk in MENA go-to-market:** The founders' networks and Arabic dialect advantage are strongest in MENA and francophone markets. Scaling to English-dominant markets (US, UK) would require competing directly against well-funded cloud-native platforms (Retell AI, Vapi, PolyAI) without the legacy integration moat being as differentiated.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Contact center software: $72.86B in 2025, $184.24B by 2031 at 16.72% CAGR (Mordor Intelligence via search snippet); Call center AI: $1.99B in 2024, $7.08B by 2030 at 23.8% CAGR (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | Clients across 3 continents including "DunkinDonut" (YC page); 7 named customer testimonials (company website); listed on Capterra, GetApp, Software Advice (search results, 2026) |
| Revenue Signal | No public data found |
| Founders | Haithem Kchaou (CEO): 7+ yrs AI in MENA, Nvidia Inception, co-author 101B Arabic Words Dataset. Chehir Dhaouadi (CTO): 10+ yrs enterprise systems, 200K+ user gov platforms, co-author 101B Arabic Words Dataset. |
| Competitors | PolyAI ($200M+ raised, revenue undisclosed, cloud-native enterprise focus); Vapi ($20M raised, revenue undisclosed, developer API platform); Retell AI ($5.1M raised, $40M ARR per Getlatka 2025, cloud API); Trillet AI (funding unverified, revenue unknown, closest legacy PBX competitor) |
| Moat Signals | Native on-prem PBX/SIP integration (company website); 101B Arabic Words Dataset with 72 likes on Hugging Face (Hugging Face); Arabic dialect specialization (company website) |
| Risk Factors | Legacy market decay as cloud migration accelerates, direct competitor overlap with Trillet AI, product pivot recency from Reedz/ClusterLab |
| Founder Reach | Haithem Kchaou: Twitter N/A (company @callab_ai 22 followers, X.com), LinkedIn present. Chehir Dhaouadi: Twitter @chehir_dh (count not retrievable), LinkedIn present. GitHub: no public repos for either founder. |
| Distribution Signals | No Product Hunt launch found; no app store presence; Capterra/GetApp/Software Advice listings (search results, 2026) |
| Emails | No public data found |
