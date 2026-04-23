# Mount

> Insure and secure your AI Agents

| Field | Value |
|-------|-------|
| Website | https://mount.insure |
| YC Page | https://www.ycombinator.com/companies/mount |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Insurance |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Artificial Intelligence, Security, Insurance, AI |
| YC Partner | Pete Koomen |
| Emails | No public data found |

## The Idea

**Problem:** When AI agents autonomously sign contracts, manage finances, or interact with customers, every failure creates liability for the deployer (YC page). Existing insurers lack the data, models, and speed to assess deployed AI systems and are actively retreating from AI risk coverage (S&P Global, Feb 2026 via search snippet). Over 90% of businesses want coverage for AI risks, yet no insurer is purpose-built to price this new risk category (YC page). The EU AI Act, fully applicable August 2026, imposes obligations on deployers of high-risk AI systems including human oversight, robustness monitoring, and AI literacy requirements (EU AI Act, entered into force August 2024).

**Approach:** Mount operates as a three-layer platform: (1) red-teaming deployed AI agents to identify vulnerabilities via real-time vulnerability scanning and risk scoring (mount.insure); (2) issuing Agent Deployment Readiness (ADR) certifications — positioned as "the SOC 2 for AI agents" (YC page); (3) underwriting and issuing insurance policies covering first-party risks (data/model corruption restoration, business interruption, API cost spikes, payment processing errors, privacy breaches) and third-party risks (incident response, harmful output claims, service failure/negligence claims) (mount.insure). Each evaluation generates proprietary risk data that feeds the underwriting engine (YC page).

**Differentiation:** Unlike Armilla AI and Testudo, which operate as Managing General Agents issuing policies through Lloyd's of London syndicates, Mount combines security assessment with insurance underwriting in a single platform. Armilla launched its standalone AI liability product in April 2025 as a Lloyd's coverholder (Armilla website). Testudo offers GenAI liability policies through Lloyd's capacity with limits up to $9.25M per insured (fintech.global, Mar 2026). Mount's ADR certification layer creates a proprietary data flywheel that competitors relying on external capacity lack (YC page). [Inferred]: The integrated red-team-then-insure model means Mount captures risk data at the point of assessment rather than relying on application-stage disclosure.

**Business Model:** No pricing page is publicly visible on mount.insure. [Inferred]: Most likely monetization path is a combination of recurring SaaS fees for the risk evaluation/ADR certification platform and premium revenue from insurance policies, given the company describes itself as an "insurer" rather than a broker or MGA.

**TAM/SAM:** The AI agents market was valued at $7.63B in 2025 and is projected to reach $182.97B by 2033 at a CAGR of 49.6% (Grand View Research). The global insurtech market reached approximately $20B in 2025 and is projected to hit $23.5B in 2026 (via search snippet). No public SAM data found specific to AI agent insurance.

**GTM / Distribution:** Mount is hiring a GTM role at $50K–$120K salary (YC jobs page). A Founding AI Engineer, Underwriting & AI Risk role is listed at $170K–$210K with 0.40%–1.40% equity (YC jobs page). [Inferred]: Most likely initial distribution is direct sales to AI-deploying enterprises, supported by the ADR certification as a land-and-expand wedge — companies engage for risk assessment and convert to insurance customers.

## Defensibility

Mount's stated moat is its proprietary risk data generated from every AI agent evaluation, which feeds its underwriting engine — described as "a data moat no competitor can replicate" (YC page). The ADR certification standard, if adopted as an industry benchmark, could create switching costs for enterprises that build compliance workflows around it. [Inferred]: Defensibility today is nascent; the data moat depends on achieving sufficient evaluation volume. Over time, proprietary claims and incident data from issued policies would compound underwriting accuracy.

**Market structure:** Traditional insurers are actively retreating from AI risk coverage due to lack of data and pricing models (S&P Global, Feb 2026 via search snippet). Incumbents face a structural barrier: they cannot price AI agent risk without the red-teaming and continuous monitoring infrastructure that Mount is building. Additionally, traditional carriers' underwriting processes are designed for static annual renewals rather than continuous risk assessment of rapidly evolving AI systems. [Inferred]: The business model conflict for incumbents is that building in-house AI evaluation capabilities would require them to become technology companies while also cannibalizing their existing exclusion-based approach to AI risk.

**Commoditization risk:** Armilla AI (Lloyd's coverholder since 2024) and Testudo (Lloyd's Lab alumni) are already active in AI liability insurance. Large carriers (Munich Re, Beazley, Chubb) have begun offering AI-adjacent coverage through programs like Google Cloud's Risk Protection Program (via search snippet). Security-focused companies with red-teaming capabilities (e.g., AI safety startups) could add insurance distribution. The evaluation/certification layer faces potential competition from compliance platforms and AI governance tools.

## Market & Traction

**Traction signals:**
- No public revenue, user count, or customer metrics found.
- Two active job postings: GTM role and Founding AI Engineer (YC jobs page, accessed Apr 2026).
- LinkedIn company page exists at linkedin.com/company/mountyc (YC page).
- Website published/updated April 20, 2026 (mount.insure).
- No Product Hunt launch found.
- No app store or extension presence found.
- Twitter/X company account: not found.
- Discord/Slack community: not found.

**Competitive landscape:**

- **Armilla AI** — Lloyd's coverholder dedicated to AI liability insurance. Raised Lloyd's-backed capacity to $25M (InsurTech Analyst, Jan 2026). Launched standalone AI liability product April 2025. Partnered with Trustible for end-to-end AI risk management (PR Newswire). Serves AI scale-ups to Fortune 1000 companies (Armilla website). Differentiator vs. Mount: established Lloyd's capacity and Fortune 1000 client base; lacks integrated red-teaming.
- **Testudo** — GenAI liability underwriter backed by Lloyd's of London (Apollo, Atrium, QBE syndicates). Expanded AI liability capacity to $9.25M per insured (fintech.global, Mar 2026). Funded by IA Capital Group, LocalGlobe, A100x, Josh Buckley, Charlie Songhurst (via search snippet). Revenue unknown. Differentiator vs. Mount: proprietary "active liability monitoring" scanning US litigation data; focused on GenAI liability claims rather than agent operational risk.
- **Corgi Insurance** — AI-native full-stack insurance carrier for startups. Raised $108M total (Reinsurance News, 2026). ARR surpassed $40M since regulatory approval July 2025 (Corgi PR). YC-backed. Offers AI-specific coverage including algorithmic bias and hallucination risks (corgi.insure). Differentiator vs. Mount: broad startup insurance carrier with AI as one coverage area vs. Mount's AI-agent-specific focus.
- **Harper** — AI-native commercial insurance brokerage (YC W25). Raised $47M combined seed and Series A (TechCrunch, Feb 2026). 5,000+ customers, handles 1,000+ customers/month (TechCrunch). Led by Emergence Capital. Differentiator vs. Mount: brokerage matching businesses with 160+ carriers rather than purpose-built AI agent risk underwriting.

**Why now:** The EU AI Act became partially applicable in February 2025 (AI literacy) and August 2025 (GPAI model obligations), with full applicability for high-risk AI deployer obligations arriving August 2026 (EU AI Act timeline). Traditional insurers began actively excluding or restricting AI coverage in 2025–2026, creating a supply vacuum (S&P Global, Feb 2026 via search snippet). [Inferred]: The simultaneous emergence of autonomous AI agents (e.g., agents executing financial transactions, signing contracts) and regulatory mandates for deployer accountability creates demand for a new insurance category that incumbents are structurally unwilling to serve.

## Founders & Team

**Fabian Amherd** — Co-founder (Product & Strategy)
- BS in Computer Science at ETH Zürich with a focus on machine learning (LinkedIn, YC page).
- Founded and ran a web development company for 3.5 years, starting at age 16 (LinkedIn via search snippet).
- At MESH, an ETH robotics spin-off, built and deployed custom CNNs for real-time object detection in industrial robotics (LinkedIn via search snippet).
- At Mount, leads product and strategy including the AI risk evaluation platform and underwriting model (YC page).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/fabianamherd — 284 connections (LinkedIn via search snippet).
- GitHub: github.com/FabianAmherd — 3 public repos, 1 follower. Pinned repo: "Heatmap-based-Object-Detection-and-Tracking-with-a-Fully-Convolutional-Neural-Network" (11 stars, 2 forks) — CNN for detecting and tracking objects on a brio-labyrinth (GitHub).

**John Bachmann** — Co-founder (Operations & Growth)
- At age 18, founded Horizonn, an AI-first media company that published 5 magazines in Switzerland and generated 400K in annual revenue, building from content production to advertiser sales (YC page, LinkedIn via search snippet).
- At Mount, drives operations and growth (YC page).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/john-bachmann-844978301 — headline references "Mount (YC P26)" (LinkedIn via search snippet). Connection count not retrievable.
- GitHub: No public repos found.

**Co-founder relationship:** Both founders have Swiss backgrounds — Fabian studied at ETH Zürich and previously worked at a Zürich-based robotics spin-off; John founded a media company publishing Swiss magazines. No shared employer or university overlap is visible from available data.

**Founder-market fit:** Fabian's machine learning expertise at ETH Zürich and hands-on experience deploying CNNs in production robotics systems at MESH provides the technical foundation for building AI agent evaluation and red-teaming tools. John's experience founding and scaling an AI-first media company to 400K annual revenue at age 18 demonstrates early operational intensity and revenue-generating ability. [Inferred]: The team combines deep AI/ML technical capability with commercial execution, though neither founder has prior insurance industry experience — a gap that may require domain hires or advisory support.

## Key Risks

**Insurance licensing and regulatory complexity:** Operating as an insurer (not a broker or MGA) requires state-by-state licensing in the US. Corgi required formal regulatory approval before launching as a carrier (Corgi PR, 2025). Mount's website describes itself as an "insurer" but no evidence of carrier licensing or MGA/Lloyd's coverholder status was found. [Inferred]: Without established capacity partnerships (Lloyd's, surplus lines), Mount may face significant time and capital requirements to underwrite policies directly.

**Established competitor advantage:** Armilla AI is already a Lloyd's coverholder serving Fortune 1000 companies with $25M in capacity (InsurTech Analyst, Jan 2026). Testudo has Lloyd's backing from Apollo, Atrium, and QBE with $9.25M per-insured limits (fintech.global, Mar 2026). Both are actively writing policies while Mount appears to be pre-revenue. The window for establishing a proprietary data moat narrows as competitors accumulate their own claims data.

**Undefined risk category:** AI agent insurance is a novel product with no actuarial history, loss tables, or established pricing benchmarks. Mispricing policies could result in either uncompetitive premiums (too high) or unsustainable loss ratios (too low). No public data found indicating Mount has reinsurance arrangements to backstop tail risk.

**No insurance domain expertise on founding team:** Neither founder has documented insurance industry experience (LinkedIn profiles). Building a full-stack insurance company requires actuarial, regulatory, and claims management expertise. The Founding AI Engineer job posting focuses on underwriting and AI risk assessment (YC jobs page), but no actuarial or insurance-specific hiring was found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.63B (2025) → $182.97B by 2033, CAGR 49.6% for AI agents market (Grand View Research) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Fabian Amherd (Co-founder, Product & Strategy): CS at ETH Zürich, ML focus, CNN deployment at MESH robotics. John Bachmann (Co-founder, Ops & Growth): founded Horizonn at 18, 400K annual revenue. |
| Competitors | Armilla AI ($25M Lloyd's-backed capacity, revenue unknown, Lloyd's coverholder with Fortune 1000 clients vs. Mount's pre-revenue status). Testudo ($9.25M per-insured capacity via Lloyd's/Apollo/QBE, revenue unknown, litigation-based active liability monitoring vs. Mount's red-teaming approach). Corgi ($108M raised, $40M ARR (Corgi PR), broad startup insurance carrier vs. Mount's AI-agent-specific focus). Harper ($47M raised, revenue unknown, AI brokerage with 5,000+ customers vs. Mount's underwriting model). |
| Moat Signals | Proprietary risk data from AI agent evaluations feeding underwriting engine (YC page). ADR certification standard as potential switching cost mechanism (YC page). |
| Risk Factors | Insurance licensing/regulatory barriers, established competitors with Lloyd's capacity, novel risk category with no actuarial history |
| Founder Reach | Fabian Amherd: Twitter not found, LinkedIn 284 connections, GitHub 11 stars. John Bachmann: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
