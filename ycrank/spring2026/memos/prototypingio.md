# Prototyping.io

> AI-native mechanical manufacturing platform

| Field | Value |
|-------|-------|
| Website | https://www.prototyping.io |
| YC Page | https://www.ycombinator.com/companies/prototypingio |
| Batch | Spring 2026 |
| Industry | Industrials / Manufacturing and Robotics |
| Team Size | 2 |
| Location | Sunnyvale, CA, USA |
| Tags | Hardware, Manufacturing, AI |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

## The Idea

**Problem:** Hardware engineers designing custom mechanical parts face slow, fragmented workflows: uploading CAD files to multiple vendors, waiting days for manual quotes, and discovering manufacturability issues late in the cycle. Existing solutions are either legacy RFQ marketplaces or large platforms that layer AI onto older architectures. The company website states hardware teams are "still stuck dealing with slow, fragmented processes" (Prerit Oberai, LinkedIn).

**Approach:** A manufacturing intelligence platform that ingests CAD files and performs AI-powered DFM (Design for Manufacturability) analysis, identifying issues early and providing optimization suggestions for cost, speed, and quality. The platform covers CNC machining (3-, 4-, and 5-axis milling, turning, EDM), sheet metal, 3D printing, injection molding, extrusion, and die casting (company website). Advertised tolerances of ±0.0001" and max part size up to 34 ft with no minimum order quantity (company website).

**Differentiation:** Xometry ($687M FY2025 revenue; Xometry investor relations) and Protolabs ($533M FY2025 revenue; Protolabs earnings release, Feb 2026) are marketplace/factory incumbents that have added AI quoting but are not AI-native. RMFG (YC, $4.5M seed; VC Tavern, Dec 2025) operates its own AI-powered factories but is currently limited to sheet metal. Jiga (YC, $19.1M raised; The SaaS News, Nov 2025) focuses on sourcing/procurement rather than DFM analysis. Toolpath ($10M seed; Toolpath blog, Sept 2024) and Paperless Parts ($51.1M raised; Paperless Parts press release) sell to manufacturers (sell-side SaaS), not to engineers. Prototyping.io positions as buyer-facing with deep DFM feedback integrated into the ordering flow.

**Business Model:** No pricing page exists; the site displays "Request Early Access" (company website). [Inferred]: Most likely monetization is a per-order transaction margin on manufactured parts, similar to Xometry and Fictiv, potentially with a premium tier for advanced DFM analysis.

**TAM/SAM:** Online CNC machining services market estimated at $1.5B in 2024, growing to $3.2B by 2033 at 9.2% CAGR (HackMD market report via search snippet). Broader CNC machining services market estimated at $7.28B in 2024, growing to $10.79B by 2033 at 4.47% CAGR (Market Growth Reports via search snippet). Global machining market estimated at $402.56B in 2024 (Precedence Research via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct-to-engineer via the web platform, starting with early-access users from YC network and hardware startup communities, expanding to mid-market hardware teams. The gated early-access model suggests a controlled rollout to validate supply chain and quality.

## Defensibility

- **Data flywheel:** Each CAD file processed trains DFM models on manufacturability patterns across processes, materials, and geometries. [Inferred]: This data advantage compounds with volume but is unproven at current scale.
- **Switching costs:** [Inferred]: Low at this stage; engineers can upload CAD files to any platform. Switching costs could develop if the platform builds workflow integrations (CAD plugins, PLM connections) or institutional knowledge of a customer's design patterns.
- **IP/Patents:** No public patent filings found.

**Market structure:** Xometry and Protolabs generate the majority of revenue from existing procurement relationships and enterprise contracts. [Inferred]: Structural barriers to incumbent response include business model tension — Xometry's marketplace margin model and Protolabs' factory asset base make it difficult to prioritize pre-order DFM analysis that could reduce order volume or complexity. However, both have resources to acquire or replicate AI-native DFM capabilities.

**Commoditization risk:** The DFM analysis layer could be replicated by incumbents with sufficient training data. RMFG, Jiga, and Factorem ($1.35M raised; Crunchbase) are building adjacent AI capabilities. Open-source CAD analysis tools exist. [Inferred]: The barrier is less the AI model than the integrated experience of DFM-to-order with a vetted supplier network.

## Market & Traction

**Traction signals:**
- Product status: Pre-launch, gated early access with waitlist (company website).
- No revenue, user counts, or growth metrics publicly disclosed.
- Company Twitter/X: @prototyping_io listed on YC page; follower count not retrievable.
- LinkedIn company page: Not found via search.
- Product Hunt: Not listed.
- No press coverage found in any named publication.
- No job postings found on YC Work at a Startup or HN.
- No Discord/Slack community found.

**Competitive landscape:**

| Competitor | Differentiator vs. Prototyping.io | Funding | Revenue |
|---|---|---|---|
| Xometry (XMTR) | Massive marketplace (10K+ suppliers), AI quoting at scale, publicly traded | $193M VC + $302M IPO (Xometry investor relations) | $687M FY2025 (Xometry earnings) |
| Protolabs (PRLB) | Owns factories, 1-15 day delivery, includes Hubs network | Public company (Protolabs) | $533M FY2025 (Protolabs earnings, Feb 2026) |
| Fictiv | Premium quality, supply chain orchestration, acquired by MISUMI for $350M (Axios, Apr 2025) | $192-200M (Fictiv press) | Revenue unknown |
| RMFG (YC) | AI-powered owned factories, 100K+ parts shipped, ~200 customers; sheet metal only | $4.5M seed (VC Tavern, Dec 2025) | Revenue unknown |
| Jiga (YC) | AI sourcing platform, NASA/Siemens customers, direct buyer-supplier model | $19.1M total (The SaaS News, Nov 2025) | Revenue unknown |

**Why now:** [Inferred]: LLM and vision model capabilities crossed a threshold in 2024-2025, enabling automated interpretation of 3D CAD geometry for manufacturability analysis at a cost and accuracy level previously infeasible. The wave of AI-native manufacturing startups raising in 2024-2025 (RMFG, Toolpath, Jiga, Korso) reflects this enabling change. Simultaneously, the U.S. manufacturing reshoring trend increased demand for domestic custom parts sourcing.

## Founders & Team

**Revanth Bodepudi** — Co-founder
- B.Tech Mechanical Engineering, IIT Bhubaneswar (2016), Institute Silver Medal (IIT BBS alumni page)
- M.S. Engineering (Aerospace), UT Austin (2019); research at NSF MRSEC on nanowire membranes and aerogel mechanical properties (MRSEC UT Austin)
- Published in International Journal of Adhesion and Adhesives (2017) and Bonfring Journal (2015) (MRSEC UT Austin)
- Previously at Schlumberger (SLB), Houston — mechanical/manufacturing engineering (LinkedIn)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/revanth279 — 2K followers, 500+ connections (LinkedIn)
- GitHub: No public repos found

**Prerit Oberai** — Co-founder & CTO
- B.S. Electrical & Computer Engineering, CU Boulder (2018), with minors in Leadership Studies, BME, and CS; Engineering Fellow, Presidents Leadership Class (CU Boulder PLC page)
- Research at UIUC ECE (2020-2021); published at ACM CoNEXT (2019) and IEEE ICDCS (2022) on microservices and container resource allocation (Google Scholar)
- Previously: Software Engineer at Microsoft (AI systems), Founding Engineer at Stealth Communications (NYC), Arista Networks, LASP spaceflight operations (LinkedIn)
- Twitter/X: @ThePreritOberai — count not retrievable (GitHub profile link)
- LinkedIn: linkedin.com/in/preritoberai — 1K+ followers, 500+ connections (LinkedIn)
- GitHub: github.com/PreritO — 16 followers; repos include Deploy-DC (Go, Kubernetes controller), Gene-Freq (JS, cancer genomics) (GitHub)

**Co-founder relationship:** No shared employer or university found. Revanth attended IIT BBS/UT Austin and worked at Schlumberger; Prerit attended CU Boulder/UIUC and worked at Microsoft/Arista. Prerit's LinkedIn states he "recently joined forces with Revanth Bodepudi" (LinkedIn).

**Founder-market fit:** Revanth brings deep mechanical engineering and materials science expertise (IIT BBS silver medalist, UT Austin aerospace research, Schlumberger manufacturing experience), providing domain knowledge of DFM challenges. Prerit brings software/AI systems expertise (Microsoft AI, distributed systems research published at top venues, founding engineer experience), providing the technical capability to build the AI platform. The pairing covers both the manufacturing domain and the AI/software execution.

## Key Risks

**1. Supply-side execution risk:** The platform advertises ±0.0001" tolerances and up to 34 ft part sizes across six manufacturing processes (company website). Delivering consistent quality across this breadth with a 2-person team requires a vetted supplier network that is not yet publicly validated. No customer testimonials or quality certifications are visible.

**2. Incumbent response:** Xometry has an AI-powered Instant Quoting Engine processing millions of parts and acquired Thomasnet for $300M (Xometry investor relations, Dec 2021). Protolabs' CNC machining revenue grew 25% YoY in Q4 2025 (Protolabs earnings, Feb 2026). Both could add deeper DFM analysis capabilities through acquisition or internal development.

**3. Crowded AI-native cohort:** RMFG ($4.5M seed, 100K+ parts shipped; VC Tavern), Jiga ($19.1M, NASA/Siemens customers; The SaaS News), Toolpath ($10M; Toolpath blog), and Korso (YC) are all AI-native manufacturing startups funded in 2024-2025. Differentiation within this cohort is narrow.

**4. Name confusion:** "Prototyping.io" shares lexical similarity with Proto.io (UI prototyping tool), Prototypr.io (design publication), and ProtoPie (interaction design tool). Phase 2 searches returned results for these other companies in nearly every query, which may impede organic discoverability and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.5B online CNC machining services in 2024, growing to $3.2B by 2033 at 9.2% CAGR (HackMD market report via search snippet); broader CNC services $7.28B in 2024 (Market Growth Reports via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Revanth Bodepudi (Co-founder): IIT BBS Mech. Eng. silver medalist, UT Austin MS Aerospace, Schlumberger. Prerit Oberai (Co-founder & CTO): CU Boulder ECE, UIUC research, Microsoft AI, Stealth Communications founding engineer. |
| Competitors | Xometry ($193M VC + $302M IPO, $687M FY2025 revenue, marketplace at scale); Protolabs (public, $533M FY2025 revenue, owned factories); Fictiv ($192-200M raised, acquired $350M by MISUMI, supply chain orchestration); RMFG ($4.5M seed, revenue unknown, AI-owned factories, sheet metal only); Jiga ($19.1M raised, revenue unknown, AI sourcing platform) |
| Moat Signals | No public data found |
| Risk Factors | Supply-side quality execution at scale, incumbent response from Xometry/Protolabs, crowded AI-native manufacturing cohort, name confusion with Proto.io/Prototypr |
| Founder Reach | Revanth Bodepudi: LinkedIn 2K followers, Twitter not found, GitHub not found. Prerit Oberai: LinkedIn 1K+, Twitter @ThePreritOberai (count not retrievable), GitHub 16 followers (LinkedIn, GitHub) |
| Distribution Signals | No public data found |
| Emails | No public data found |
