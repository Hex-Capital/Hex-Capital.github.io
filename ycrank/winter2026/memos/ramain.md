# RamAIn

> Super fast computer-use agents to build AI employees.

| Field | Value |
|-------|-------|
| Website | https://ramain.ai |
| YC Page | https://www.ycombinator.com/companies/ramain |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Machine Learning, Computer Vision |
| YC Partner | Tyler Bosmeny |
| Emails | founders@ramain.ai |

## The Idea

**Problem:** Enterprises across procurement, insurance, healthcare, finance, retail, and logistics rely on complex, repetitive workflows that span multiple desktop and browser applications—many of which lack API access. Current computer-use agents (CUAs) follow a screenshot → VLM inference → decision → repeat loop for every action, making them expensive, slow, and unreliable for production-grade enterprise automation. Legacy RPA solutions require brittle scripts and dedicated RPA specialists to build and maintain.

**Approach:** RamAIn pre-trains CUAs on specific interfaces, teaching the agents UI policies and interface structures in advance rather than reasoning from screenshots at execution time. This allows the agents to simulate mouse and keyboard interactions to move data between legacy systems, desktop applications, and web portals. The system includes self-healing capabilities for unexpected UI changes, human-in-the-loop control, and full audit trails (YC company page). Training and deployment are described as taking "a few days" (YC company page).

**Differentiation:** Standard CUAs (e.g., Anthropic's Computer Use API, OpenAI's CUA) process each action through a full VLM inference cycle at runtime. RamAIn's approach front-loads the learning of interface structures during a pre-training phase, claiming 10x faster decision-making and higher reliability (YC company page). Compared to traditional RPA (UiPath, Automation Anywhere), RamAIn does not require custom scripts per workflow. Compared to open-source browser-only agents like Browser Use or Skyvern, RamAIn targets both browser and desktop applications.

**Business Model:** The website currently lists pricing as "Free" at $0 USD (ramain.ai). [Inferred]: At pre-seed stage, likely offering free access to build initial traction and gather training data, with eventual monetization via per-agent, per-seat, or consumption-based enterprise pricing.

**TAM/SAM:** The global RPA market is valued at $35.27 billion in 2026, projected to reach $247.34 billion by 2035 at a 24.20% CAGR (Precedence Research, Dec 2025 via search snippet). The AI in RPA market specifically is projected to grow by $14.28 billion from 2024 to 2029 at a 33% CAGR (Technavio via search snippet). The agentic browser market is projected to grow from $4.5 billion in 2024 to $76.8 billion by 2034 (Brightdata, 2026 via search snippet). No SAM estimate specific to RamAIn's segment was found.

**GTM / Distribution:** The YC page lists target verticals: procurement, insurance, healthcare, revenue cycle management, finance & operations, retail & store operations, pharmacy operations, and logistics (YC company page). [Inferred]: Most likely distribution path is direct enterprise sales into these verticals, leveraging YC network for initial customer introductions. The "deploy in days" positioning suggests a land-and-expand approach with low implementation friction.

## Defensibility

RamAIn's primary technical differentiation is pre-training CUAs on specific UI interfaces rather than relying on runtime VLM inference. If this approach produces materially better speed and reliability, accumulated pre-training data across enterprise interfaces could constitute a data advantage over time. Self-healing capabilities and audit trails address enterprise compliance requirements.

**Market structure:** Large RPA incumbents (UiPath, Automation Anywhere, Microsoft Power Automate) have built their platforms around script-based, rule-driven automation. Migrating to a vision-model-based, pre-trained approach would require rearchitecting their core product and cannibalizing existing revenue streams from professional services and script maintenance. However, foundation model providers (Anthropic, OpenAI) already offer computer-use APIs and could build competing pre-training layers. No structural barrier identified at this stage beyond execution speed.

**Commoditization risk:** The underlying approach of using VLMs for GUI automation is well-understood and actively pursued by multiple well-funded startups (Browser Use at $17M, Simular at $27M) and foundation model providers. The pre-training on specific interfaces is a differentiating architectural choice, but the technique could be replicated by competitors with sufficient engineering resources. Open-source frameworks like Browser Use lower the barrier to entry for browser-based automation.

## Market & Traction

**Traction signals:**
- Twitter/X: Company account @ramain_ai (ramain.ai); follower count not retrievable
- LinkedIn: Company page at linkedin.com/company/ramain (search result title shows "RamAIn (YC W26)"); follower count not retrievable
- YC Launch: Announced via YC Launch with video demonstration (YC company page)
- Shourya Vir Jain LinkedIn post announcing RamAIn (YC W26) (LinkedIn, activity ID 7418921965194821632)
- Listed on third-party AI directories: MOGE.ai, EveryDev.ai, AIToolsSpace, HuntScreens (various search results)
- Product Hunt: No Product Hunt listing found
- Discord/Slack community: No public data found
- User counts, revenue, or download metrics: No public data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. RamAIn |
|------------|---------|-------------|-------------------------------|
| **Skyvern** | $2.7M seed (Dec 2025) (Skyvern blog) | $900K revenue in 2024 (GetLatka via search snippet) | Open-source, browser-only; uses LLMs + computer vision without custom code per website. No desktop automation. |
| **Browser Use** | $17M seed (Mar 2025, led by Felicis) (TechCrunch, Mar 2025) | Revenue unknown | Open-source framework (89.1% WebVoyager benchmark); converts web UI to structured text for LLMs. Browser-only. |
| **Simular** | $27M total ($21.5M Series A, Dec 2025, led by Felicis) (TechCrunch, Dec 2025) | Revenue unknown | Full desktop agent (Mac + Windows); ex-Google DeepMind team; Microsoft Windows 365 for Agents partner. Closest direct competitor for desktop automation. |
| **Browserbase** | $40M Series B (Jun 2025) (search snippet) | Revenue unknown | Serverless browser infrastructure for AI agents; infrastructure layer rather than end-to-end agent. |

**Why now:** [Inferred]: Several catalysts converged in 2024–2025: Anthropic released Computer Use API in public beta (Oct 2024), making VLM-based GUI automation a recognized product category. OpenAI launched its competing CUA. These releases validated the approach and created awareness among enterprise buyers. Simultaneously, foundation model capabilities (vision + reasoning) crossed a threshold where GUI automation became reliable enough for production use. The AI agent market grew from $5.25B in 2024 to $7.84B in 2025 (AI Funding Tracker via search snippet), with 40%+ of enterprise budgets allocated to agentic AI.

## Founders & Team

**Shourya Vir Jain** — Co-founder & CEO
- BTech Electrical Engineering, IIT Delhi (batch 2026) (Opensphere, ContactOut via search snippet)
- Former founder of Genoshi, an AI studio for enterprises, bootstrapped to six-figure revenue (Opensphere, YC page via search snippet)
- Business Analyst Intern at McKinsey & Company (The Org)
- Intern at 360 ONE (wealth management) (LinkedIn via search snippet)
- Technical Research Intern at Council on Energy, Environment and Water (CEEW) (ContactOut via search snippet)
- FIDE-rated chess player (rating 2118) (FIDE profile via search snippet)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/shouryavirjain
- GitHub: github.com/SveeJ — 7 public repos; star counts not retrievable

**Vansh Ramani** — Co-founder & CTO
- BTech Computer Science and Engineering, IIT Delhi (2023–2028) (ResearchGate, IIT Delhi CSE page)
- Former researcher at CMU Machine Learning Department (YC page via search snippet, LinkedIn)
- Former researcher at University of Copenhagen (YC page via search snippet)
- Published at ICLR 2025: "Bonsai: Gradient-Free Graph Condensation for Node Classification" (IIT Delhi CSE page, OpenReview)
- Published in ACS Journal of Chemical Theory and Computation 2024: MolMerger solubility prediction using graph neural networks (GitHub, ResearchGate)
- Author of "Panorama: Fast-Track Nearest Neighbors" — a nearest-neighbor search algorithm integrated into Meta's FAISS library (arXiv: 2510.00566)
- Won first prize at Lam Research's Systems Engineering Challenge with IIT Delhi team (Nov 2024) (The Hans India via search snippet)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/ramanivansh — "Carnegie Mellon University" listed
- GitHub: github.com/VanshRamani — 14 public repos; Molmerger-Solubility-Prediction has 2 stars
- Google Scholar: scholar.google.com/citations?user=hKH8NPoAAAAJ

**Co-founder relationship:** Both founders are students at IIT Delhi, confirming a shared university connection. No additional shared employer overlap found in Phase 3 research.

**Founder-market fit:** Vansh Ramani brings deep ML research credentials (ICLR publication, CMU ML department, FAISS contribution) directly relevant to building pre-trained vision models for GUI understanding. Shourya Vir Jain brings entrepreneurial experience (bootstrapping Genoshi to six-figure revenue) and McKinsey consulting exposure to enterprise operations. The combination of ML research depth and enterprise business experience maps to RamAIn's product (pre-trained CUAs sold to enterprises). No advisors, board members, or notable angel investors were identified in public sources beyond YC partner Tyler Bosmeny.

## Key Risks

**Foundation model provider encroachment:** Anthropic (Computer Use API, Claude Cowork) and OpenAI (CUA) already offer first-party computer-use capabilities and are actively investing in making them production-grade. These providers could add pre-training or interface-specific optimization features natively, reducing the value of RamAIn's middleware layer. Mitigation: RamAIn's enterprise-specific focus (audit trails, self-healing, human-in-the-loop) may not be priorities for foundation model providers.

**Well-funded direct competitors:** Simular ($27M raised, ex-DeepMind team, Microsoft partnership) and Browser Use ($17M, 89.1% benchmark accuracy) are pursuing overlapping markets with substantially more capital. Simular in particular targets full desktop automation with Windows 365 for Agents partnership, directly competing with RamAIn's desktop + browser scope. Mitigation: RamAIn's pre-training approach is architecturally distinct from Simular's runtime approach.

**Enterprise sales cycle with a 2-person team:** Target verticals (healthcare, insurance, procurement, finance) have long sales cycles, compliance requirements, and procurement processes. Selling into these verticals with a 2-person team and no visible sales hire requires either YC network leverage or a strong inbound/PLG motion that has not yet been demonstrated publicly.

**Technical validation gap:** The claim of "10x faster" decision-making from pre-trained interface models has no publicly available benchmark data, case studies, or third-party validation. Enterprise buyers in regulated industries (healthcare, insurance) will require demonstrated reliability before adoption.

**Brand disambiguation:** "RamAIn" shares phonetic and textual similarity with "Ramain" (a surname appearing in multiple search results), "Ramen AI" (a separate company at ramenai.com), and generic AI-related terms. This complicates SEO, social media discoverability, and press coverage attribution.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | RPA market: $35.27B in 2026, projected $247.34B by 2035 at 24.20% CAGR (Precedence Research, Dec 2025 via search snippet). AI agent market: $5.25B (2024) to $52.62B by 2030 (AI Funding Tracker via search snippet). |
| SAM | No public data found for RamAIn's specific segment. |
| Traction | YC Launch announcement with demo video (YC page). Listed on multiple AI directories (MOGE.ai, EveryDev.ai, AIToolsSpace, HuntScreens). No user counts, revenue, or download data found. |
| Revenue Signal | Website lists pricing as "Free" / $0 USD (ramain.ai). No revenue data found. |
| Founders | Shourya Vir Jain (CEO): IIT Delhi EE, ex-McKinsey, founded Genoshi (bootstrapped to six figures). Vansh Ramani (CTO): IIT Delhi CS, ex-CMU ML researcher, ICLR 2025 author, Panorama/FAISS contributor. |
| Competitors | Skyvern ($2.7M raised, $900K revenue 2024, open-source browser automation). Browser Use ($17M raised, revenue unknown, open-source browser agent framework). Simular ($27M raised, revenue unknown, desktop agent, ex-DeepMind, Microsoft partner). Browserbase ($40M raised, revenue unknown, browser infra for agents). |
| Moat Signals | Pre-training on specific UI interfaces (architectural differentiation). Panorama algorithm contribution to FAISS (CTO's relevant technical IP). No patents or proprietary datasets identified. |
| Risk Factors | Foundation model provider encroachment (Anthropic/OpenAI native CUA), well-funded direct competitors (Simular $27M, Browser Use $17M), enterprise sales with 2-person team |
| Founder Reach | Shourya Vir Jain: Twitter not found, LinkedIn linkedin.com/in/shouryavirjain. Vansh Ramani: Twitter not found, LinkedIn linkedin.com/in/ramanivansh, GitHub 14 repos / 2 stars, Google Scholar profile. Company: Twitter @ramain_ai (count not retrievable), LinkedIn company/ramain. |
| Distribution Signals | No Product Hunt launch found. No app store or Chrome Web Store listings found. No community (Discord/Slack) found. YC Launch is the only confirmed distribution event. |
| Emails | founders@ramain.ai |
