# RamAIn

> Super fast computer-use agents to automate complex workflows.

| Field | Value |
|-------|-------|
| Website | https://ramain.ai |
| YC Page | https://www.ycombinator.com/companies/ramain |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Computer Vision, AI |

## The Idea

**Problem:** Enterprises run complex, repetitive workflows across legacy desktop applications, web portals, and browser-based tools. Many of these applications lack APIs, making programmatic automation impossible with traditional approaches. Existing RPA tools (UiPath, Automation Anywhere) require specialized RPA developers to build brittle, rule-based scripts that break when UIs change. Meanwhile, current computer-use agents (CUAs) from Anthropic and OpenAI follow a slow screenshot→VLM→decision→repeat loop that is expensive, unreliable, and too slow for production workflows (YC company page).

**Approach:** RamAIn pre-trains CUAs on specific interfaces, teaching the agent to use particular applications rather than relying on generic vision-language model inference at every step. This bypasses the standard screenshot-VLM decision loop by building interface-specific knowledge ("UI policies") into the agent, enabling it to operate across Windows, Mac, browser, and desktop applications. The company claims this makes decisions "10x faster" than traditional CUA approaches (YC company page). The product is distributed as a desktop application for macOS and Windows (ramain.ai website).

**Differentiation:** Compared to OpenAI Operator, which operates only in a sandboxed browser environment (WorkOS blog, Jan 2026), RamAIn works across native desktop applications. Compared to Anthropic Computer Use, which provides a general-purpose API requiring developer integration (Anthropic docs), RamAIn offers pre-trained, application-specific agents designed for non-technical deployment. Compared to Browser Use ($17M raised, TechCrunch Mar 2025), which focuses on browser automation via an open-source framework, RamAIn covers desktop + browser. Compared to Simular ($26.5M raised, TechCrunch Dec 2025), which also targets desktop automation on Mac/Windows, RamAIn differentiates on speed via pre-training on specific interfaces rather than relying on a general neuro-symbolic approach.

**Business Model:** The product is currently listed as free ($0) on the website (ramain.ai). No pricing tiers, per-seat pricing, or consumption-based billing are publicly visible. [Inferred]: Most likely monetization path is enterprise SaaS pricing (per-agent or per-workflow) once the product matures beyond its current free/early-access phase, given the B2B positioning and target verticals (procurement, insurance, healthcare, finance, retail, pharmacy, logistics as listed on YC page).

**TAM/SAM:** The global RPA market was valued at $28.31 billion in 2025 and is projected to grow to $247.34 billion by 2035 at a CAGR of 24.2% (GlobeNewsWire, Dec 2025). Gartner sized the RPA software market at $3.6 billion in 2024, growing 14.5% year-over-year (Gartner, 2024 via search snippet). [Inferred]: RamAIn's serviceable market is the subset of RPA/desktop automation workflows involving legacy applications without API access, particularly in the target verticals listed on its YC page.

**GTM / Distribution:** The product is available as a direct download for macOS and Windows from ramain.ai. Target verticals listed on the YC page include procurement, insurance, healthcare, finance, retail, pharmacy, and logistics. [Inferred]: Most likely initial distribution path is direct enterprise sales to operations teams in these verticals, potentially starting with a PLG free tier to generate inbound leads, given the current free pricing and desktop download model.

## Defensibility

**Pre-training data moat:** RamAIn's approach of pre-training agents on specific interfaces could create a compounding data advantage—each new interface trained adds to a library of UI policies that competitors would need to replicate independently. However, this moat is nascent and unproven at scale.

**Market structure:** Traditional RPA incumbents (UiPath, Automation Anywhere) have built their businesses around script-based automation that requires RPA developers. Shifting to AI-native CUAs would cannibalize their professional services revenue and potentially reduce per-workflow pricing. This business model conflict could slow incumbent adoption of the pre-trained CUA approach. However, both UiPath and Automation Anywhere are actively integrating AI capabilities into their platforms (UiPath Annual Report FY2025).

**Commoditization risk:** The CUA space is rapidly commoditizing at the model layer. OpenCUA, an open-source framework from HKU researchers, achieved state-of-the-art results surpassing OpenAI's CUA on the OSWorld benchmark (VentureBeat, 2025). Anthropic and OpenAI both offer computer use capabilities as API features. Browser Use has 50,000+ GitHub stars as an open-source browser automation framework (TechCrunch, Mar 2025). Simular has $26.5M in funding and DeepMind alumni building desktop agents (TechCrunch, Dec 2025). The barrier to building a basic CUA is low; the differentiation depends on whether pre-training on specific interfaces delivers a measurable speed/reliability advantage that is difficult to replicate.

## Market & Traction

**Traction signals:**
- Product available for download on macOS and Windows (ramain.ai)
- Currently priced at $0 / free (ramain.ai)
- Twitter/X: @ramain_ai (handle exists per ramain.ai; follower count not retrievable)
- LinkedIn: linkedin.com/company/ramain (company page exists; follower count not retrievable)
- A LinkedIn post by Shourya Vir Jain announcing RamAIn (YC W26) was found (LinkedIn, via search snippet)
- A third team member, Sujal Choudhari (software engineer), appears on LinkedIn associated with RamAIn (LinkedIn, via search snippet)
- No Product Hunt launch found
- No press coverage in named publications found
- No public user counts, download numbers, or revenue data found
- No Discord/Slack community found
- No app store listings found
- YC Partner: Tyler Bosmeny (YC company page)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. RamAIn |
|-----------|---------|-------------------------------|
| **Simular** | $26.5M total ($21.5M Series A from Felicis + NVentures) (TechCrunch, Dec 2025) | Neuro-symbolic approach; converts workflows to deterministic code; Mac + Windows; DeepMind alumni founders; selected for Microsoft Windows 365 for Agents program |
| **Browser Use** | $17M seed (Felicis, Paul Graham) (TechCrunch, Mar 2025) | Open-source framework (50K+ GitHub stars); browser-only focus; YC W25 |
| **Twin Labs** | ~$13M total ($3M pre-seed + $10M seed from LocalGlobe) (TechCrunch, Mar 2025) | Uses OpenAI CUA; Paris-based; enterprise partnerships (Qonto with 500K+ customers); one of 15 companies in OpenAI CUA beta |
| **UiPath** (incumbent) | Public company; $1.43B annual revenue FY2025 (UiPath IR, 2025) | Full RPA platform with enterprise distribution; script-based + AI augmentation; Gartner MQ leader 7 consecutive years |
| **Automation Anywhere** (incumbent) | $852.7M total funding; $6.8B valuation (Automation Anywhere press releases) | Cloud-native RPA platform; SoftBank-backed; broad enterprise customer base |

**Why now:** [Inferred]: Several specific catalysts in 2024-2025 opened this opportunity: (1) Anthropic released Computer Use as a public beta API in October 2024 (Anthropic, Oct 2024), and OpenAI launched Operator with CUA in January 2025 (MIT Technology Review, Jan 2025), validating computer-use agents as a product category. (2) Vision-language models crossed a performance threshold—OpenCUA-72B achieved 45% success rate on OSWorld benchmarks (VentureBeat, 2025), making CUA feasible for real workflows. (3) AI agent infrastructure costs have declined as open-source models (OpenCUA-7B/32B/72B) became available, reducing the cost of building CUA-based products.

## Founders & Team

**Shourya Vir Jain** — Co-Founder & CEO
- BTech in Electrical Engineering, IIT Delhi (batch of 2026; currently on leave) (LinkedIn, ContactOut via search snippet)
- Previously founded Genoshi (genoshi.io), an AI studio for enterprises described as bootstrapped to revenue (Inc42; LinkedIn recommendation via search snippet). Co-founded with Dhruv Joshi in 2024.
- Co-founded boardspace.in (LinkedIn via search snippet)
- Incoming Business Analyst Intern at McKinsey & Co. (ContactOut via search snippet)
- Startup Support Executive at Entrepreneurship Development Cell (eDC) IIT Delhi, Jun 2023–Apr 2024; worked with 80+ startups (LinkedIn via search snippet)
- Technical Research Intern at Council on Energy, Environment and Water (CEEW) (LinkedIn via search snippet)
- FIDE-rated chess player (rating 2118) (FIDE profile); certified karate black belt (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/shouryavirjain — "Ramain (YC W26)"
- GitHub: github.com/SveeJ — 7 repos, 9 followers; organization: @GenoshiAI

**Vansh Ramani** — Co-Founder & CTO
- BTech in Computer Science and Engineering, IIT Delhi (currently on leave for startup) (personal website: vanshramani.github.io)
- Research at Carnegie Mellon University ML Department, Summer 2025, with Prof. Pradeep Ravikumar; focus on causal representation learning, neurosymbolic AI, machine unlearning (personal website)
- Research at University of Copenhagen, May–Jun 2024, with Dr. Panagiotis Karras on high-dimensional nearest neighbor search; Danish Data Science Academy Scholarship recipient (personal website)
- Research Assistant at IIT Delhi DSIRE lab with Dr. Sayan Ranu; focus on graph neural networks and data distillation (personal website)
- Publications: "Bonsai: Gradient-free Graph Distillation" accepted at ICLR 2025 (personal website); "Panorama: Fast-Track Nearest Neighbors" achieving 2-30x speedup, integrated into Meta's FAISS library (arXiv, Oct 2025); "Graph Neural Networks for Predicting Solubility" published in ACS Journal of Chemical Theory and Computation (Jul 2024) (personal website)
- Competition wins: Lam Research Challenge 2024 winner (INR 500,000 prize); 4th place at Goldman Sachs India Hackathon 2024 (8,000 participants); 1st place in Citadel Quants Arena Challenge (personal website)
- Twitter/X: Possible handle @vanshsh2701 (not confirmed)
- LinkedIn: linkedin.com/in/ramanivansh — "Carnegie Mellon University"
- GitHub: github.com/VanshRamani — 14 repos, 13 followers; top repo: Molmerger-Solubility-Prediction (2 stars)

**Co-founder relationship:** Both founders attended IIT Delhi concurrently (Shourya in Electrical Engineering, Vansh in Computer Science, both batch of 2026), indicating a shared university background.

**Founder-market fit:** Vansh Ramani brings deep ML research credentials (CMU, ICLR publication, contribution merged into FAISS) relevant to building the pre-trained model infrastructure that is RamAIn's core differentiator. Shourya Vir Jain brings startup operating experience (founded and bootstrapped Genoshi to revenue), enterprise exposure (McKinsey, 80+ startups via eDC), and business development skills. Together, they cover the technical ML + business operations needed for a B2B AI infrastructure company. No advisors, board members, or notable investors beyond YC were found.

## Key Risks

**Platform-layer commoditization:** Anthropic, OpenAI, and Google are all shipping computer-use capabilities as API features, and open-source alternatives (OpenCUA) are approaching proprietary model performance (VentureBeat, 2025). If foundation model providers integrate pre-training or interface-specific optimization into their APIs, RamAIn's core differentiation could be absorbed into the platform layer.

**Well-funded direct competitors:** Simular ($26.5M, ex-DeepMind team, Microsoft partnership) and Browser Use ($17M, 50K+ GitHub stars, Paul Graham backing) are pursuing adjacent approaches with substantially more capital and distribution. Simular was selected for Microsoft's Windows 365 for Agents program (TechCrunch, Dec 2025), giving it a significant enterprise distribution channel.

**Reliability threshold for enterprise adoption:** Computer-use agents remain error-prone in production environments. Anthropic's own documentation describes computer use as "experimental—at times cumbersome and error-prone" (Anthropic docs). OpenCUA's best model achieves only 45% success rate on the OSWorld benchmark (VentureBeat, 2025). Enterprise customers in RamAIn's target verticals (healthcare, finance, insurance) have low tolerance for automation errors, and the gap between demo-quality and production-quality CUA may be wider than current benchmarks suggest.

**Brand disambiguation:** "RamAIn" shares linguistic similarity with many existing "AI"-suffixed brands, and the name overlaps with common terms (e.g., "remain," various "Ram" entities). This could create SEO and brand recognition challenges as the company scales.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $28.31B global RPA market in 2025, growing to $247.34B by 2035 at 24.2% CAGR (GlobeNewsWire, Dec 2025); Gartner sized RPA software at $3.6B in 2024 (Gartner, 2024 via search snippet) |
| SAM | No public data found |
| Traction | Product available for free download on macOS/Windows (ramain.ai); YC W26 batch; no public user counts, downloads, or community size found |
| Revenue Signal | No public data found; product currently listed as free (ramain.ai) |
| Founders | Shourya Vir Jain (CEO): IIT Delhi EE, founded Genoshi (bootstrapped to revenue), incoming McKinsey. Vansh Ramani (CTO): IIT Delhi CS, CMU ML researcher, ICLR 2025 paper, Panorama merged into FAISS |
| Competitors | Simular ($26.5M raised, revenue unknown, desktop Mac+Windows agent with neuro-symbolic approach vs. RamAIn's pre-trained interface approach); Browser Use ($17M raised, revenue unknown, open-source browser-only framework vs. RamAIn's desktop+browser scope); Twin Labs (~$13M raised, revenue unknown, OpenAI CUA-dependent with Qonto enterprise partnership vs. RamAIn's proprietary pre-training); UiPath (public, $1.43B revenue FY2025, full RPA platform incumbent vs. RamAIn's AI-native approach) |
| Moat Signals | Pre-trained interface-specific UI policies could create a compounding data advantage; unproven at this stage |
| Risk Factors | Platform-layer commoditization from Anthropic/OpenAI/Google, well-funded direct competitors (Simular, Browser Use), CUA reliability gap for enterprise production use |
| Founder Reach | Shourya Vir Jain: Twitter not found, LinkedIn linkedin.com/in/shouryavirjain, GitHub 9 followers. Vansh Ramani: Twitter not confirmed, LinkedIn linkedin.com/in/ramanivansh, GitHub 13 followers |
| Distribution Signals | No public data found; no Product Hunt launch, no app store listings, no Chrome extension |
