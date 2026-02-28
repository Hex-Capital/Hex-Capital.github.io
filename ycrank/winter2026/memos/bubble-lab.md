# Bubble Lab

> Your ops super-employee in Slack

| Field | Value |
|-------|-------|
| Website | https://bubblelab.ai/ |
| YC Page | https://www.ycombinator.com/companies/bubble-lab |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA (PitchBook via search snippet) |
| Tags | Artificial Intelligence, Workflow Automation, Operations |
| YC Partner | Diana Hu |
| Emails | security@bubblelab.ai (company website) |

## The Idea

**Problem:** Operations teams (BizOps, RevOps, Chiefs of Staff) at fast-growing companies spend significant time on repetitive, cross-tool tasks — updating CRMs, filing Jira tickets, pulling reports from Stripe, syncing data across Notion and Google Workspace. This manual work requires constant context-switching between applications. Current solutions are either no-code workflow builders that require upfront configuration or custom internal tooling that requires engineering resources.

**Approach:** Bubble Lab deploys "Pearl," an AI agent that lives natively inside Slack. Users interact with Pearl via natural language messages in Slack. Pearl connects to 25+ integrations (Gmail, Jira, Notion, GitHub, Postgres, Stripe, Airtable, HubSpot, Google Workspace) and can take actions on the user's behalf — updating systems, running reports, and executing operational workflows (company website). One-time prompts can be converted into recurring, scheduled autonomous workflows. Pearl incorporates long-term memory to learn user preferences, tone, and shortcuts over time (company website). A visual workflow builder is also available for power users.

**Differentiation:** Compared to general-purpose workflow automation tools like n8n or Activepieces, Bubble Lab is Slack-native — the interface is the existing messaging tool rather than a separate app or visual builder. Compared to enterprise AI assistant platforms like Dust, Bubble Lab targets operations teams specifically rather than broad enterprise knowledge work. Compared to Gumloop's drag-and-drop no-code builder, Bubble Lab emphasizes conversational interaction via Slack rather than visual pipeline construction. Bubble Lab also offers an open-source workflow engine (github.com/bubblelabai/BubbleLab, Apache 2.0 license) which differentiates from closed-source competitors.

**Business Model:** Freemium with usage-based tiers (company website pricing page):
- **Starter (Free):** $0/month, 100 tasks/month, 2 active workflows, $5 monthly integration credit
- **Pro:** $29.99/month, 6,000 tasks/month, 10 active workflows, $20 monthly integration credit
- **Scale:** $99.99/month, 50,000 tasks/month, 25 active workflows, $80 monthly integration credit
- **Enterprise:** Custom pricing, on-premise deployment option, dedicated support with SLAs

Each Slack message to Pearl or workflow run counts as one task; only successful tasks count. Managed integrations billed at 5% markup above credit allowance. Annual plans receive 20% discount (company website pricing page).

**TAM/SAM:** The global workflow automation market was valued at $23.77 billion in 2025 and is estimated to reach $40.77 billion by 2031 at a CAGR of 9.41% (Mordor Intelligence via search snippet). A separate estimate sizes the market at $24.61 billion in 2025 growing to $53.13 billion by 2033 at 10.1% CAGR (SkyQuest via search snippet). The AI agent market specifically is projected at $7.84 billion in 2025 growing to $52.62 billion by 2030 at 46.3% CAGR (source not named, via search snippet). No public SAM estimate specific to Slack-native operations automation was found.

**GTM / Distribution:** The product's Slack-native design creates a built-in distribution channel — adoption spreads within organizations as team members see Pearl responding in shared channels. The freemium tier (100 tasks/month free) supports bottom-up adoption. The company website includes a "Book Demo" CTA targeting enterprise prospects. [Inferred]: The primary distribution path is product-led growth via Slack workspace virality, supplemented by direct sales for enterprise accounts.

## Defensibility

The open-source workflow engine (1.1k GitHub stars, 173 forks; github.com/bubblelabai/BubbleLab) creates a developer community and contributes to integration breadth. SOC 2 Type 1 certification and Tier 2 CASA verification (company website) represent compliance investments that serve as a barrier for newer entrants targeting enterprise customers. Pearl's long-term memory feature — learning user preferences and operational patterns over time — creates user-level switching costs that increase with usage duration.

**Market structure:** Salesforce, which owns Slack, has announced Agentforce 360 positioning Slack as an "agentic OS" for enterprises (Slack blog via search snippet). This creates both a platform risk and a structural opening: Salesforce's AI features are bundled into Business+ and Enterprise+ plans and oriented toward Salesforce ecosystem workflows, leaving a gap for tool-agnostic operations automation that connects to non-Salesforce tools (Jira, Notion, Stripe, GitHub, Postgres). [Inferred]: Salesforce's incentive to keep AI features as upsell for premium Slack plans may limit its willingness to offer a free or low-cost operations agent, creating pricing space for Bubble Lab's freemium model.

**Commoditization risk:** The core capability — an LLM-powered agent that calls APIs on behalf of users — is technically reproducible. Multiple well-funded competitors (n8n at $253M raised, Gumloop at $24.5M raised) are building adjacent products. Slack's own AI features could expand to cover more of Bubble Lab's use cases. The open-source engine is a double-edged sword: it builds community but also makes the core technology available for self-hosting.

## Market & Traction

**Traction signals:**
- 4,000+ business professionals using the platform (company website, as of time of research)
- Named customers: Dyna Robotics, Corgi, Hattrick Ventures, Insforge, PeakMojo (company website)
- Customer testimonial: Dyna Robotics reports "saving our Ops team 10+ hours per week" (company website)
- Customer testimonial: PeakMojo reports "saved us 40+ hours of engineering time" (company website)
- NVIDIA Inception Program participant (company website)
- GitHub: bubblelabai/BubbleLab — 1.1k stars, 173 forks, 522 commits, Apache 2.0 license (GitHub repository page)
- X/Twitter: @bubblelab_ai — 716 followers (via search snippet)
- X/Twitter: Founder @Selinaliyy — 581 posts, follower count not retrievable (via search snippet)
- LinkedIn company page: linkedin.com/company/bubblelab-ai (via search snippet)
- Discord community: discord.gg/PkJvcU2myV (company website; member count not retrievable)
- Instagram: @bubblelab.ai (via search snippet)
- SOC 2 Type 1 certified, Tier 2 CASA verified (company website)
- No Product Hunt listing found for Bubble Lab
- Founders' prior startup gymii.ai won at Cornell Tech's 2025 Startup Awards competition (Cornell Chronicle, May 2025)

**Competitive landscape:**

| Competitor | Key Differentiator vs. Bubble Lab | Funding | Revenue/ARR |
|---|---|---|---|
| **n8n** | Open-source visual workflow builder for technical teams; broader scope beyond Slack; self-hostable | $253M total, $180M Series C at $2.5B valuation (Oct 2025) (VentureBurn, Sacra via search snippet) | ~$40M ARR (Sacra, Jul 2025 via search snippet) |
| **Dust** | Enterprise multi-agent platform connected to company data; broader use cases (HR, legal, ops); Sequoia-backed | $21.5M total, $16M Series A (TechCrunch, Jun 2024) | ~$7.3M revenue (Getlatka, Jul 2025 via search snippet) |
| **Gumloop** | No-code drag-and-drop AI automation builder; visual pipeline interface vs. conversational Slack interface | $24.5M Series A (TechCrunch, Jan 2025) | Revenue not public |
| **Activepieces** | Open-source no-code automation with TypeScript customization; YC S22 alum | $500K seed (Crunchbase via search snippet) | $1.7M revenue (Getlatka, 2024 via search snippet) |
| **Slack native AI (Salesforce)** | Built-in to Slack Business+/Enterprise+; integrated with Salesforce ecosystem; no third-party dependency | N/A (Salesforce product) | N/A |

**Why now:** [Inferred]: The convergence of two factors opened this opportunity: (1) LLM capabilities crossed a reliability threshold for multi-step tool use and API orchestration in 2024-2025, making it feasible to build an agent that can reliably execute multi-tool workflows rather than just answer questions; (2) Slack's ubiquity as the default workspace for operations teams (particularly at startups and mid-market companies) creates a dense surface area for an embedded agent, and Salesforce's acquisition of Slack has oriented native AI features toward the Salesforce ecosystem, leaving a gap for tool-agnostic automation.

## Founders & Team

**Selina Li** — Co-founder & CEO
- Education: UPenn '23, Cornell Tech MEng (Computer Science) '25 (YC page)
- Previously: Co-founder of gymii.ai, an AI-powered nutrition tracking app that secured partnerships with LPGA veteran Jennifer Song and Tennis Olympian Connie Hsu as brand ambassadors; reached 1,000+ users (Fitt Insider via search snippet). Described as "former JPMorgan Quant Researcher" (Fitt Insider via search snippet). Competitive golfer (YC page)
- gymii.ai won at Cornell Tech's 2025 Startup Awards competition (Cornell Chronicle, May 2025)
- Twitter/X: @Selinaliyy — 581 posts, follower count not retrievable (x.com/Selinaliyy)
- LinkedIn: linkedin.com/in/selina-li-2624a4198 — "Bubble Lab (YC W26)" (via search snippet)
- GitHub: No public repos found under personal account

**Zach Zhong** — Co-founder
- Education: UCSD CS '24, Cornell Tech CS '25 (YC page)
- Previously: Co-founder of gymii.ai; described as "3x founding engineer" (Fitt Insider via search snippet)
- Twitter/X: @zhubzyz (x.com/zhubzyz) — follower count not retrievable
- LinkedIn: linkedin.com/in/zzy0516 — "Co-founder @ bubblelab.ai" (via search snippet)
- GitHub: No public repos found under personal account. Organization account: github.com/bubblelabai (1.1k stars on BubbleLab repo)

**Co-founder relationship:** Both Selina Li and Zach Zhong were Cornell Tech CS '25 classmates and co-founded gymii.ai together (along with a third co-founder, Alex Taic, MBA '25) prior to Bubble Lab (Cornell Chronicle, May 2025). They share both an educational institution (Cornell Tech) and a prior startup.

**Founder-market fit:** Both founders have direct experience building a multi-tool product (gymii.ai involved AI-powered image analysis, social features, and nutrition databases). Selina Li's background as a JPMorgan quant researcher provides exposure to operations-heavy financial environments. Both are recent CS graduates from Cornell Tech with hands-on engineering capability, relevant for a product that requires deep API integrations across 25+ tools. The pivot from consumer health (gymii.ai) to B2B operations automation represents a domain shift; neither founder has documented prior experience in BizOps or RevOps roles specifically.

## Key Risks

**Slack platform dependency:** Bubble Lab's core value proposition is Slack-native. Salesforce (Slack's owner) is actively building AI agent capabilities into Slack via Agentforce 360 (Slack blog via search snippet). If Salesforce expands native AI to cover operations workflows with third-party tool integrations, Bubble Lab's differentiation narrows. Mitigation: the open-source workflow engine enables deployment outside of Slack, and the visual workflow builder provides a non-Slack interface.

**Brand name confusion:** "Bubble Lab" shares naming overlap with Bubble (bubble.io), a well-known no-code platform with significant Product Hunt and LinkedIn presence. Search results consistently returned Bubble.io content when searching for "Bubble Lab." A separate "Bubble Lab" robotics company in Beijing (linkedin.com/company/bubblelabrobotics) also exists. This could complicate SEO, brand recognition, and investor discovery.

**Domain pivot from consumer to B2B:** The founding team's prior startup (gymii.ai) was a consumer nutrition tracking app. Bubble Lab targets B2B operations teams — a different buyer persona, sales motion, and product lifecycle. No public evidence of prior B2B sales experience or enterprise go-to-market execution from either founder was found.

**Open-source commoditization:** The Apache 2.0 licensed workflow engine (github.com/bubblelabai/BubbleLab) allows anyone to self-host and extend the core technology. While this builds community (1.1k stars), it also means the execution engine itself is not proprietary. Competitors or customers could fork and build on top of it without paying Bubble Lab.

**Well-funded competitive field:** Direct and adjacent competitors include n8n ($253M raised, $40M ARR), Gumloop ($24.5M raised), and Dust ($21.5M raised, ~$7.3M revenue), all of which are significantly better-capitalized and further along in market traction.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $23.77B workflow automation market in 2025, growing to $40.77B by 2031 at 9.41% CAGR (Mordor Intelligence via search snippet) |
| SAM | No public data found |
| Traction | 4,000+ business professionals (company website); 1.1k GitHub stars (GitHub repo page); 716 X/Twitter followers (@bubblelab_ai via search snippet); named customers include Dyna Robotics, PeakMojo, Hattrick Ventures (company website); NVIDIA Inception participant (company website) |
| Revenue Signal | Freemium with paid tiers at $29.99/mo (Pro), $99.99/mo (Scale), custom Enterprise (company website pricing page). No public revenue figures found. |
| Founders | Selina Li (CEO): UPenn '23, Cornell Tech MEng '25, ex-JPMorgan quant researcher, co-founded gymii.ai. Zach Zhong (Co-founder): UCSD CS '24, Cornell Tech CS '25, 3x founding engineer, co-founded gymii.ai. |
| Competitors | n8n ($253M raised, ~$40M ARR, visual workflow builder for technical teams); Dust ($21.5M raised, ~$7.3M revenue, enterprise multi-agent platform); Gumloop ($24.5M raised, revenue unknown, no-code drag-and-drop AI automation); Activepieces ($500K raised, $1.7M revenue, open-source no-code automation) |
| Moat Signals | 1.1k GitHub stars on open-source engine; SOC 2 Type 1 + CASA Tier 2 certifications; long-term memory / personalization creating switching costs |
| Risk Factors | Slack/Salesforce platform dependency and competing native AI features, brand name confusion with Bubble.io, well-funded competitors with 100x+ more capital |
| Founder Reach | Selina Li: X @Selinaliyy (count not retrievable), LinkedIn 500+. Zach Zhong: X @zhubzyz (count not retrievable), LinkedIn profile active. Company: X @bubblelab_ai 716 followers, GitHub 1.1k stars |
| Distribution Signals | Slack-native deployment (viral within workspaces); freemium tier; open-source engine (1.1k GitHub stars); Discord community (member count not retrievable); no Product Hunt listing found |
| Emails | security@bubblelab.ai (company website) |
