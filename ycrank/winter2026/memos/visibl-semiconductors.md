# Visibl Semiconductors

> AI agents for chip design.

| Field | Value |
|-------|-------|
| Website | https://visiblsemi.com |
| YC Page | https://www.ycombinator.com/companies/visibl-semiconductors |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Enterprise Software, Semiconductors |
| YC Partner | Tyler Bosmeny |
| Emails | founders@visiblsemi.com (YC page, company contact page) |

## The Idea

**Problem:** As chip designs grow more complex, semiconductor teams face coordination breakdowns where critical workstreams drift out of sync and issues surface late, driving costly delays and months of rework before tapeout (YC LinkedIn launch post, Feb 19, 2026). The bottleneck is no longer ideas but execution throughput — adding engineers yields diminishing returns as coordination costs rise (YC company page). Today, design teams rely on a patchwork of EDA tools from Synopsys, Cadence, and Siemens EDA — which collectively control approximately 75% of the global EDA market (Bloomberg Professional Services via search snippet) — supplemented by internal scripts, spreadsheets, and manual review processes to track cross-workstream alignment.

**Approach:** Visibl positions itself as "the first coordination layer for chip design" (YC LinkedIn launch post, Feb 19, 2026). The platform ingests the full design context — code, specs, scripts, and tool outputs — to decode ambiguous tool feedback into actionable steps (YC company page). Specific capabilities include: AI agents that dispatch automatically on nightly regressions and PR failures, root cause analysis with fix recommendations, a real-time dashboard tracking schedule readiness and tapeout risks, and proactive drift detection across design specifications and implementations (YC LinkedIn launch post, Feb 19, 2026). The product validates changes and packages decisions for human review. An "Orchestrator" product and enterprise download are listed on the company website.

**Differentiation:** While incumbent EDA AI tools (Synopsys DSO.ai, Cadence Cerebrus) focus on optimizing PPA (power, performance, area) within specific design stages, and startups like ChipAgents focus on agent-driven RTL design and verification productivity, Visibl targets the cross-workstream coordination problem — integrating requirements, architecture, and implementation into a unified system rather than optimizing individual design tasks. Silimate (YC S23) operates as a copilot for chip designers finding functional bugs and predicting PPA issues in real-time alongside RTL development (YC page). Chipmind focuses on automating chip design and verification tasks (GlobeNewsWire, Oct 2025). Visibl's framing as a "coordination layer" rather than a point-tool suggests a system-level approach to the design flow.

**Business Model:** No pricing page data found on the company website. The product is described as available for "free download" in search results (visiblsemi.com/legal page via search snippet), with an enterprise tier implied by the "Enterprise Downloads" section on the website and a demo request form requiring company information. [Inferred]: Most likely monetization path is an enterprise SaaS model with per-seat or per-design-team pricing, given the B2B enterprise positioning and demo-request funnel.

**TAM/SAM:** The global EDA market was estimated at USD 20.78 billion in 2026, growing from USD 19.22 billion in 2025 (Mordor Intelligence via search snippet). The U.S. EDA software market was estimated at USD 4.25 billion in 2025, projected to reach USD 10.38 billion by 2035 at 9.34% CAGR (Precedence Research via search snippet). AI-enabled tools could add $6 billion to the EDA market through 2030 (Bloomberg Professional Services via search snippet). [Inferred]: The serviceable addressable market would be a subset of the AI-augmented EDA segment focused on design coordination and workflow orchestration rather than the full EDA tool market.

**GTM / Distribution:** The company website features a demo request form targeting enterprise buyers (visiblsemi.com/contact). The YC launch post framed the product for chip design teams experiencing tapeout delays. [Inferred]: Most likely distribution path is direct enterprise sales to semiconductor design teams, starting with teams that have experienced costly coordination-related tapeout delays. The on-premises deployment model (described as "on-prem AI platform" in Crunchbase via search snippet) is consistent with semiconductor industry requirements for IP security.

## Defensibility

The product requires deep integration with chip design workflows, EDA tool outputs, and proprietary design contexts. The platform's ability to ingest and interpret full design context (code, specs, scripts, tool outputs) creates switching costs once deployed within a team's workflow. Accumulation of design context and team-specific knowledge over time could create a data advantage specific to each customer deployment.

**Market structure:** Synopsys, Cadence, and Siemens EDA dominate the EDA market with ~75% share (Bloomberg Professional Services via search snippet). These incumbents are investing in AI capabilities within their existing tools (Synopsys DSO.ai, Cadence Cerebrus), but these focus on optimizing PPA within stage-specific tools rather than cross-workstream coordination. [Inferred]: Incumbents may face business model conflict in building a coordination layer that sits across their competitors' tools — Synopsys building a layer that orchestrates Cadence tools (and vice versa) would undermine their strategy of capturing the full design flow within their own ecosystem.

**Commoditization risk:** The "AI agents for X workflow" pattern is being applied broadly across industries. ChipAgents has raised $74 million and is deployed at 50 semiconductor companies (BusinessWire, Feb 2026 via search snippet), demonstrating that well-funded competitors can scale quickly in this space. General-purpose LLM providers or EDA incumbents could build coordination features. The technical barrier is primarily domain expertise in interpreting EDA tool outputs and semiconductor design flows.

## Market & Traction

**Traction signals:**
- YC LinkedIn launch post: 320 likes, 72 comments (LinkedIn, Feb 19, 2026)
- YC launch post titled "The First AI-Enabled Coordination Layer for Chip Design" with accompanying YouTube video (YC company page)
- Company Twitter/X: @visiblsemi, 19 followers (X.com via search snippet, joined Dec 2024)
- LinkedIn company page: linkedin.com/company/visiblsemi (follower count not retrievable)
- Product available for download with authentication system at auth.visiblsemi.com (search results)
- A whitepaper is available at visiblsemi.com/whitepaper (search results)
- No public revenue, user count, or customer data found
- No Product Hunt launch found
- No Discord or Slack community found

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Visibl |
|------------|---------|-------------------------------|
| ChipAgents | $74M total ($21M Series A, $50M Series A1; Bessemer Venture Partners, Micron, MediaTek, Ericsson) (BusinessWire, Oct 2025 and Feb 2026 via search snippets) | Focuses on agentic AI for RTL design, debugging, and verification productivity (claims 80% higher verification productivity); deployed at 50 semiconductor companies. Point-tool focus on verification vs. Visibl's cross-workstream coordination. |
| Silimate (YC S23) | "Well-funded by top investors" (amount undisclosed) (YC page via search snippet) | Copilot for chip designers that finds functional bugs, predicts PPA issues, and recommends fixes in real-time alongside RTL development. Revenue-generating with enterprise and chip unicorn customers. In-editor copilot vs. Visibl's coordination layer approach. |
| Chipmind | $2.5M pre-seed (Founderful) (GlobeNewsWire, Oct 2025 via search snippet) | Zurich-based, "design-aware" AI agents for chip design and verification. Claims 40% reduction in time on repetitive tasks. Founded by ETH Zurich PhDs. Similar agent-based approach but earlier stage and narrower verification scope. |
| Maieutic Semiconductors | $6M seed (Endiya Partners, Exfinity, UTEC) (company website via search snippet) | GenAI copilot exclusively for analog IC design. Claims 50-66% reduction in analog design cycle. Analog-specific vs. Visibl's digital design coordination focus. |
| Synopsys DSO.ai / Cadence Cerebrus | Public companies (Synopsys ~$80B market cap, Cadence ~$70B) | Incumbent AI-powered PPA optimization tools integrated into their existing EDA suites. Optimize within-stage performance rather than cross-workstream coordination. |

**Why now:** [Inferred]: Several converging factors: (1) LLM capabilities reached a threshold in 2024-2025 where they can interpret complex, domain-specific tool outputs (EDA logs, waveform data, synthesis reports), enabling the "AI agent" approach; (2) advanced process nodes (3nm, 2nm) are increasing design complexity and team sizes, amplifying coordination overhead — TSMC's N2 entered high-volume manufacturing in 2H 2025 (Mordor Intelligence via search snippet); (3) the broader "AI agents for engineering workflows" category saw significant venture investment in 2024-2025, with ChipAgents alone raising $74M.

## Founders & Team

**Bryce Neil** — Co-founder & CEO
- Education: Western University (Canada), Faculty of Engineering; recipient of the Western National Scholarship (Faculty Entrance Scholarship for Engineering) — described as one of 15 applicants awarded (LinkedIn via search snippet). Described as recipient of "two of Canada's most competitive academic scholarships" (Crunchbase via search snippet).
- Experience: Built production software and data systems at Deloitte's OmniaAI team, healthcare, and the public sector (Crunchbase via search snippet). Described as a "lifelong hacker" with experience across engineering, data, and business (Crunchbase via search snippet).
- Twitter/X: @BryceNeil__ — 236 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/bryceneil/ — "Co-Founder @ Visibl Semiconductors (YC W26)"
- GitHub: github.com/BryceNeil — 13 public repos, 22 followers, 12 total stars; repos include CPU-Design (Verilog) and Computer-Vision-Practice (GitHub)

**Jordon Kashanchi** — Co-founder & CTO
- Education: MS ECE, University of Texas at Austin (Integrated Circuits and Systems specialization, May 2023); BS EE, University of Texas at Austin (Computer Architecture and Embedded Systems focus) (jordonkash.com)
- Experience: Silicon Design Engineer at Microsoft on Azure Maia custom AI silicon (July 2023–2024); RTL Design Engineer Intern at Arm (Summer 2021); Graphics Systems Hardware Engineer Intern at Intel (Summer 2020) (jordonkash.com). Published in PNAS and ACM for research on wearable biosensors (LinkedIn via search snippet).
- Twitter/X: @jordonkash — 58 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/jordon-kashanchi-46357b143/
- GitHub: github.com/JordonKash — 6 public repos, activity private (GitHub)
- Google Scholar: scholar.google.com/citations?user=MDBiNzUAAAAJ (search results)

**Co-founder relationship:** Both founders are listed as having worked at Microsoft (Bryce at Deloitte, but the YC LinkedIn post mentions "systems at Microsoft" among their combined background). The YC launch post states they "previously built systems at Microsoft, Intel, Arm, Deloitte OmniaAI, and SST" and "launched Visibl after repeatedly seeing coordination bottlenecks delay integration and tapeout" (YC LinkedIn launch post, Feb 19, 2026). No shared university or concurrent employer identified from available data.

**Founder-market fit:** Jordon Kashanchi brings direct semiconductor design experience across three major chip companies (Microsoft Azure Maia, Arm, Intel), with hands-on Verilog, EDA tool (Cadence, Synopsys), and RTL design expertise, plus a graduate specialization in Integrated Circuits and Systems from UT Austin. Bryce Neil brings software engineering and data systems experience from Deloitte's OmniaAI team — a consulting AI practice focused on enterprise data and AI applications — providing the software platform and AI/ML engineering skills. The YC launch post states they experienced coordination bottlenecks firsthand.

## Key Risks

**Well-funded direct competitor:** ChipAgents has raised $74M total and is deployed at 50 semiconductor companies (BusinessWire, Feb 2026 via search snippet), giving it a significant head start in customer relationships and design-context data. ChipAgents' advisory board includes former CEOs/CTOs of Mentor Graphics, Synopsys, and Cadence (BusinessWire, Oct 2025 via search snippet), providing deep industry access.

**Incumbent AI tool expansion:** Synopsys and Cadence are actively investing in AI-powered EDA capabilities (Synopsys DSO.ai, Cadence Cerebrus) and could extend their existing tools to include cross-workstream coordination features. Their existing customer relationships and integration with design flows create a distribution advantage. AI-enabled features could add $6 billion to the EDA market through 2030 (Bloomberg Professional Services via search snippet), creating strong incumbent incentive to capture this value.

**On-premises deployment complexity:** The product is described as an "on-prem AI platform" (Crunchbase via search snippet), which is appropriate for semiconductor IP security requirements but creates longer sales cycles, higher deployment costs, and more complex support requirements for a two-person team. Enterprise semiconductor customers have strict security and compliance requirements for tools that access design IP.

**Semiconductor sales cycle length:** Enterprise semiconductor companies typically have lengthy procurement and qualification processes for new design tools. The product needs to integrate with existing EDA tool chains (Cadence, Synopsys, Siemens) and internal workflows, creating technical integration barriers that extend time-to-revenue.

**CEO domain gap:** Bryce Neil's background is in software/data systems at Deloitte's consulting practice, not in semiconductor design. While this brings complementary software engineering skills, the team's semiconductor design domain expertise is concentrated in a single founder (Jordon Kashanchi).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $20.78B global EDA market in 2026 (Mordor Intelligence via search snippet); AI could add $6B to EDA market through 2030 (Bloomberg Professional Services via search snippet) |
| SAM | No public data found |
| Traction | YC LinkedIn launch post: 320 likes, 72 comments (Feb 19, 2026); YouTube launch video posted (YC page); whitepaper available (visiblsemi.com/whitepaper) |
| Revenue Signal | No public data found. Product described as available for "free download" with enterprise tier implied (visiblsemi.com via search snippet) |
| Founders | Bryce Neil (CEO): Western University Engineering, Deloitte OmniaAI, two Canadian academic scholarships. Jordon Kashanchi (CTO): MS ECE UT Austin, Microsoft Azure Maia silicon design, Arm, Intel, published PNAS/ACM |
| Competitors | ChipAgents ($74M raised, revenue unknown, agentic AI for verification/RTL vs. cross-workstream coordination); Silimate (YC S23, funding undisclosed, generating revenue, in-editor copilot vs. coordination layer); Chipmind ($2.5M raised, revenue unknown, verification agents vs. coordination); Maieutic ($6M raised, revenue unknown, analog-specific vs. digital coordination); Synopsys/Cadence (public incumbents, PPA optimization tools vs. coordination layer) |
| Moat Signals | Deep workflow integration and design context ingestion create switching costs; on-prem deployment accumulates customer-specific design knowledge |
| Risk Factors | ChipAgents at $74M and 50 customers, incumbent AI tool expansion (Synopsys/Cadence), on-prem deployment complexity for 2-person team, long enterprise semiconductor sales cycles |
| Founder Reach | Bryce Neil: Twitter @BryceNeil__ 236 followers, LinkedIn 500+, GitHub 22 followers/12 stars. Jordon Kashanchi: Twitter @jordonkash 58 followers, LinkedIn profile active, GitHub 6 repos (activity private) |
| Distribution Signals | YC W26 batch launch (Feb 2026); demo request form on website; no Product Hunt, app store, or Chrome Web Store presence found |
| Emails | founders@visiblsemi.com (YC page, company contact page) |
