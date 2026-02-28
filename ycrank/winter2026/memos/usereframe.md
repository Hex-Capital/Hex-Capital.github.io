# Reframe

> AI agents to automate hardware procurement

| Field | Value |
|-------|-------|
| Website | http://usereframe.ai |
| YC Page | https://www.ycombinator.com/companies/usereframe |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Marketing |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Manufacturing, Supply Chain |
| YC Partner | Brad Flora |
| Emails | No public data found (demo booking link: cal.com/bryan-zin/reframe-demo per YC page) |

## The Idea

**Problem:** Hardware manufacturing teams coordinating overseas production still rely on emails, spreadsheets, and outdated software to manage shipping and delivery logistics (Bryan Zin LinkedIn post, 2025). Consumer electronics companies in particular struggle with shipping delays, vendor price negotiations, and the complexity of multi-part build schedules across international suppliers. The existing workflow involves manual coordination across time zones with multiple vendors, tracking waterfall schedules by hand, and negotiating pricing without data-driven leverage.

**Approach:** Reframe deploys AI agents that can understand a customer's build matrix, coordinate waterfall schedules with suppliers, and negotiate pricing to ensure parts arrive on time for the next build cycle (YC company page). Rather than a passive software dashboard, the agents actively manage vendor communications and logistics coordination on behalf of the hardware engineering team. Bryan Zin's LinkedIn announcement specifically frames the tool as automating "vendor coordination using AI agents" (LinkedIn post, 2025).

**Differentiation:** Existing solutions in this space fall into two categories: (1) traditional procurement platforms like Sourcify, which act as intermediaries connecting brands with pre-vetted factories but still require significant manual coordination, and (2) broad enterprise procurement tools like Procure AI and Pavus AI, which focus on spend analytics and sourcing automation for large organizations across all procurement categories. Reframe's differentiation is its specificity to hardware manufacturing build schedules — understanding build matrices, waterfall timelines, and the sequential dependencies unique to physical product production — rather than general procurement workflows.

**Business Model:** No pricing page or revenue details are publicly available on the company website, which displayed only a headline at the time of research. [Inferred]: Most likely monetization path is a SaaS subscription or per-transaction fee model based on manufacturing volume managed through the platform, given the B2B nature and the operational role the agents play in ongoing production workflows.

**TAM/SAM:** The global procurement software market was valued at approximately $8.89 billion in 2025, projected to reach $20.75 billion by 2034 (Fortune Business Insights, 2025 via search snippet). The supply chain management software market was valued at $33.39 billion in 2025, projected to reach $56.01 billion by 2031 (Mordor Intelligence, 2025 via search snippet). Reframe's SAM would be a subset focused specifically on hardware manufacturing procurement and overseas vendor coordination. No public SAM data found for this specific segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct outreach to hardware engineering teams at consumer electronics companies, starting with companies managing overseas manufacturing relationships. The demo booking link on the YC page (cal.com/bryan-zin/reframe-demo) suggests a founder-led sales motion at this stage. Bryan Zin's Apple iPhone product design background provides a direct network into hardware product development teams.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via proprietary data on supplier pricing, lead times, and reliability accumulated through agent negotiations across multiple customers, creating a data network effect where the platform improves its negotiation and scheduling capabilities as more builds are processed. Switching costs could emerge if the agents develop deep context on a customer's specific supply chain relationships and build processes.

**Market structure:** [Inferred]: Large procurement incumbents (SAP Ariba, Oracle, Coupa) focus on enterprise-wide procurement automation across all spend categories and are oriented toward indirect procurement. Their go-to-market is built around large enterprise contracts and broad horizontal coverage. Building a specialized vertical solution for hardware build matrix coordination would represent a small, niche use case within their existing product, making it unlikely to receive dedicated engineering resources. However, no structural barrier is clearly identifiable beyond this prioritization argument.

**Commoditization risk:** The core functionality — AI agents communicating with suppliers via email, tracking schedules, and negotiating pricing — is technically reproducible by other AI startups or well-resourced incumbents. The underlying LLM capabilities are broadly available. Differentiation would depend on domain-specific training data and workflow design for hardware manufacturing, which takes time but is not technically prohibitive.

## Market & Traction

**Traction signals:**
- YC Winter 2026 batch member (YC company page)
- Bryan Zin's LinkedIn announcement of YC acceptance received 99 likes and 11 comments (LinkedIn, 2025)
- Eric Wiener GitHub: 26 followers, 59 repositories (GitHub profile)
- Company LinkedIn page exists at linkedin.com/company/usereframe (YC company page)
- No job postings listed (YC company page)
- No Product Hunt launch found
- No app store presence found
- No public revenue, user count, or customer data found
- Company website displayed only a headline ("Use AI agents to coordinate overseas manufacturing") at the time of research

**Competitive landscape:**

1. **Sourcify** (~$2.9M raised, ~$1M ARR reported in 2019; Tracxn, San Diego Business Journal via search snippet): YC-backed platform connecting companies with pre-vetted overseas manufacturers across Asia. Sourcify acts as a human-mediated intermediary rather than using AI agents, with a network of 700+ factories. Differentiation vs. Reframe: Sourcify provides the sourcing/matching layer but does not automate ongoing build schedule coordination or pricing negotiation via AI.

2. **Procure AI** ($13M seed, led by Headline; SiliconANGLE, Nov 2025): London-based AI-native procurement platform deploying 50+ AI agents across sourcing, contracting, purchasing, and invoice management. Reports 35–46% time reduction and 3.7–5.2% savings per event (company blog). Differentiation vs. Reframe: Procure AI targets broad enterprise procurement across categories, not specifically hardware manufacturing build coordination.

3. **Pavus AI** ($5.3M seed, led by Sentinel Global; SiliconANGLE, Oct 2025): AI-powered procurement analytics platform creating a "digital brain" for procurement data. Focuses on spend analytics and cost optimization. Differentiation vs. Reframe: Pavus is analytics-first (understanding and organizing spend data), whereas Reframe is execution-first (actively coordinating with suppliers).

4. **Zetwerk** (competitor to Sourcify; Tracxn via search snippet): Manufacturing marketplace connecting buyers with manufacturers. Operates primarily in India. Differentiation vs. Reframe: Zetwerk is a marketplace model for custom manufacturing, not an AI agent-based coordination tool.

**Why now:** [Inferred]: Two specific catalysts have converged: (1) LLM capabilities reached a performance threshold in 2024–2025 where AI agents can reliably parse unstructured communications (emails, RFQs, supplier quotes) and conduct multi-turn negotiations — tasks that were not feasible with prior ML approaches; and (2) geopolitical supply chain disruptions (U.S.-China tariff escalations, semiconductor restrictions) have increased the complexity and urgency of overseas manufacturing coordination, making manual processes more costly and error-prone. Generative AI adoption among procurement leaders reached 73% in late 2024 (Spend Matters, 2026 via search snippet), indicating market readiness for AI-driven procurement tools.

## Founders & Team

**Eric Wiener** — Co-founder
- Previously MLE at DoorDash Labs and Zoox, SWE at Apple (YC company page)
- GitHub: github.com/EricWiener — 59 repositories, 26 followers. Bio: "Cofounder at Reframe (YC W26)." Notable repos: point-cloud-de-noising (31 stars, PyTorch lidar noise reduction), supreme-court-cases (26 stars), bbox-utils (10 stars) (GitHub profile). Arctic Code Vault Contributor.
- Maintains a public ML notes site at ericwiener.github.io/ai-notes (GitHub profile)
- Education: No public data found (possible University of Michigan affiliation based on ARM Lab project referenced in search results, but unconfirmed)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/eric-wiener-400280a4 — headline not retrievable due to LinkedIn access restrictions

**Bryan Zin** — Co-founder
- Cornell University, Product Design degree (Apollo.io via search snippet)
- Previously Product Design Engineer at Apple, iPhone PD (YC company page)
- Prior experience at Facebook, Dex, Barclays, BAE Systems, Cornell Autonomous Underwater Vehicle team, and NASA (Weekday.works via search snippet)
- Attended Lowell High School in San Francisco (Apollo.io via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/bryan-zin — headline: "Ex-Apple iPhone Product Design" (search snippet)
- GitHub: No public repos found matching "Bryan Zin"

**Co-founder relationship:** Both founders worked at Apple, though in different roles (Eric as SWE, Bryan as Product Design Engineer on iPhone). This shared employer suggests a possible prior acquaintance, though the specific timing and overlap is not confirmed from public sources.

**Founder-market fit:** The team combines ML engineering depth (Eric's experience at DoorDash Labs and Zoox in autonomous systems/ML, plus his published ML research and tooling) with hardware product development experience (Bryan's hands-on iPhone product design work at Apple, plus his engineering background at NASA and BAE Systems). Bryan's direct experience navigating Apple's hardware supply chain and build processes provides first-hand understanding of the coordination problem Reframe targets. Eric's ML engineering background provides the technical capability to build the AI agent system.

## Key Risks

**Brand disambiguation:** At least three other companies use "Reframe" as their name in adjacent spaces: Reframe (YC S21, alcohol reduction app with $14M raised), Reframe Systems (robotics for housing construction), and Reframe Holdings. This creates potential confusion in search results, investor communications, and customer discovery. The domain "usereframe.ai" partially mitigates this but the brand overlap is significant.

**Narrow vertical scope with scaling constraints:** The product is specifically designed for hardware manufacturing build schedule coordination — a workflow used by a subset of companies with overseas manufacturing. Expanding beyond this niche to broader procurement or other manufacturing verticals would require significant product adaptation. The addressable customer base at launch may be small relative to horizontal procurement platforms.

**Incumbent platform integration dependency:** Hardware manufacturing teams typically manage procurement through existing ERP systems (SAP, Oracle, NetSuite). Reframe's agents would need to either integrate with these systems or convince teams to manage a parallel workflow, creating adoption friction. If ERP vendors add native AI agent capabilities for procurement coordination, Reframe's standalone value proposition weakens.

**Two-person team with dual technical/sales burden:** While a two-person team is standard at pre-seed, this particular product requires both deep AI engineering and credibility with hardware manufacturing procurement teams. Selling into hardware engineering organizations typically requires domain expertise and relationship-based sales, which may stretch a two-person team attempting to simultaneously build the product.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8.89B procurement software market in 2025, growing to $20.75B by 2034 (Fortune Business Insights via search snippet); $33.39B SCM software market in 2025 (Mordor Intelligence via search snippet) |
| SAM | No public data found for hardware manufacturing procurement specifically |
| Traction | YC W26 batch member; no public user, revenue, or customer data found |
| Revenue Signal | No public data found |
| Founders | Eric Wiener (Co-founder): ex-MLE DoorDash Labs & Zoox, ex-SWE Apple. Bryan Zin (Co-founder): Cornell Product Design, ex-Apple iPhone PD, ex-NASA/BAE Systems |
| Competitors | Sourcify (~$2.9M raised, ~$1M ARR reported 2019, human-mediated overseas manufacturing sourcing); Procure AI ($13M seed, broad enterprise AI procurement agents); Pavus AI ($5.3M seed, procurement analytics/spend intelligence); Zetwerk (manufacturing marketplace, India-focused) |
| Moat Signals | No public data found |
| Risk Factors | Brand disambiguation with multiple "Reframe" companies, narrow vertical scope, ERP incumbent integration dependency |
| Founder Reach | Eric Wiener: Twitter not found, LinkedIn present (count not retrievable), GitHub 26 followers/59 repos. Bryan Zin: Twitter not found, LinkedIn present (500+ connections per search snippet), GitHub not found |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no Chrome extension) |
| Emails | No public data found |
