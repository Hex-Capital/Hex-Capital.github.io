# Ontora

> AI agents that interview every employee to map how work gets done.

| Field | Value |
|-------|-------|
| Website | https://ontora.com |
| YC Page | https://www.ycombinator.com/companies/ontora |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Analytics, Operations |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** C-suite leaders lack visibility into how work actually happens across their organizations. Per Ontora's YC launch page, 80% of operational knowledge is tacit and undocumented, employees waste 5.3 hours weekly searching for information, and a 1,000-person company loses an estimated $2.4M yearly to productivity gaps (YC launch page). Poor knowledge sharing costs Fortune 500 companies $31.5 billion annually (YC launch page). The current solution is management consulting engagements (McKinsey, BCG, Bain) that cost $500K+ and take 3–6 months, sampling roughly 10% of employees (ontora.com). Additionally, 95% of enterprise GenAI pilots deliver zero measurable business impact because agents lack operational context (YC launch page).

**Approach:** Ontora deploys AI agents that conduct structured conversational interviews with every employee in an organization, completing hundreds of conversations simultaneously within hours (ontora.com). The platform then synthesizes findings with themed insights and impact ratings, generates visual process maps showing cross-team workflows, and produces automation roadmaps with ROI estimates (YC launch page). It also creates a proprietary context layer that feeds operational knowledge into other AI tools (ontora.com). Core product modules include a Process Discovery Agent (crawls processes, maps dependencies, identifies root causes), a Meeting Agent (conducts stakeholder interviews or guides real-time meetings), a Unified Context Layer (connects CRM, email, documents), and an API/MCP Server for integrations (ontora.com).

**Differentiation:** Unlike Celonis, Skan AI, and traditional process mining tools that rely on system event logs or computer-vision screen capture, Ontora's approach extracts tacit knowledge through direct employee conversation — capturing undocumented processes that never appear in system logs. Unlike Glean or Guru, which organize existing documented knowledge, Ontora surfaces knowledge that was never written down. Unlike McKinsey-style consulting, Ontora achieves 100% employee coverage in hours rather than a 10% sample over months, at ~$50K vs. $500K+ (ontora.com).

**Business Model:** No public pricing tiers or revenue figures disclosed. The website references a ~$50K engagement cost compared to $500K+ for traditional consulting (ontora.com). [Inferred]: Most likely monetization path is per-engagement or subscription SaaS pricing targeting enterprise operations teams, given the consulting-replacement positioning and C-suite buyer persona.

**TAM/SAM:**
- Process mining software market: $1.4B in 2024, projected to $21.9B by 2030 (Grand View Research, 2024 via search snippet).
- AI consulting market: $8.75B in 2024 to $11.07B in 2025, projected $90.99B by 2035 at 26.2% CAGR (search snippet, source unspecified).
- [Inferred]: Ontora's SAM straddles both process intelligence software and management consulting automation; the directly addressable segment is the operational diagnostics slice of management consulting ($500K+ engagements at Fortune 500 companies), but no public SAM estimate specific to this niche was found.

**GTM / Distribution:** The Ontora website features a testimonial from a Strategy Manager at Vertiv (ontora.com). Max Arnold's personal website describes Ontora as "enabling consultancies to identify and deliver client projects faster" (maximilianarnold.com), suggesting a possible channel strategy selling through consultancies in addition to direct enterprise sales. [Inferred]: Most likely initial distribution is direct outreach to C-suite and operations leaders at large enterprises, potentially leveraging Max Arnold's Porsche/VW network and Leon Iwanowitsch's consulting connections.

## Defensibility

- **Data moat potential:** Each deployment captures proprietary organizational process maps and tacit knowledge. [Inferred]: Over time, aggregated anonymized process data across clients could create benchmarking advantages, but no evidence of this capability today.
- **Switching costs:** Once Ontora's context layer is integrated into a company's AI stack (via API/MCP server), migrating away would require rebuilding the operational knowledge base (ontora.com).
- No patents, open-source repos, or regulatory barriers identified in public sources.

**Market structure:** Traditional consulting firms (McKinsey, BCG, Bain) face business model cannibalization: automating a $500K, 3-month engagement into a $50K, 4-hour process eliminates the billable-hour revenue model that underpins their operations. McKinsey reported ~40% of projects are AI-related and BCG derived 20% of 2024 revenue from AI consulting (Medium, Fast Company via search snippets), indicating they are investing in AI *for clients* rather than automating their own diagnostic methodology. [Inferred]: This business model conflict — cannibalizing high-margin engagements — creates a structural barrier for incumbents to replicate Ontora's approach directly.

**Commoditization risk:** The core capability (LLM-driven structured interviews + synthesis) could be replicated by any team with access to frontier LLMs. Celonis ($2.4B raised, $13B peak valuation) or Skan AI ($57.6M raised) could add conversational process discovery to their existing platforms. Management consulting firms could build internal tools. The technical barrier is moderate; the go-to-market and trust barrier with C-suite buyers is higher.

## Market & Traction

**Traction signals:**
- Customer testimonial: Strategy Manager at Vertiv stated "What used to take our operating team months of interviews and analysis, Ontora delivered in a single afternoon" (ontora.com).
- YC Launch post published: "Ontora - Read your company like a book" (ycombinator.com/launches).
- Y Combinator promoted the launch via their X/Twitter account (x.com/ycombinator).
- Company Twitter/X: @ontoratech — follower count not retrievable.
- LinkedIn: company page exists — follower count not retrievable.
- GitHub: github.com/ontora-main listed on YC page — no public repo data found.
- No Product Hunt launch found.
- No app store presence, Chrome extension, or Discord/Slack community found.
- 0 open job positions (YC page).

**Competitive landscape:**

| Competitor | Key Differentiator vs. Ontora | Funding | Revenue |
|---|---|---|---|
| **Celonis** | Log-based process mining from enterprise system data; no conversational/tacit knowledge capture | $2.4B total (Crunchbase) | ~$771M (getlatka.com, 2023) |
| **Skan AI** | Computer-vision task mining observing user screens; passive observation vs. active interviews | $57.6M total (Crunchbase) | $22.2M (getlatka.com, 2025) |
| **Workfellow** (acquired by ProcessMaker, Apr 2024) | Hybrid process + task mining; acquired before developing conversational features | Acquired (ProcessMaker, 2024) | Revenue unknown |
| **Glean** | Enterprise AI search across existing documents; does not surface undocumented tacit knowledge | ~$800M total (via search snippet) | Revenue unknown |
| **McKinsey/BCG/Bain** | Manual consultant interviews; high cost ($500K+), months-long timelines, ~10% employee sample | N/A | N/A |

**Why now:**
- LLM capabilities crossed a quality threshold enabling structured conversational interviews at scale — prior NLP could not conduct nuanced follow-up questioning (YC launch page references simultaneous "hundreds of structured conversations").
- McKinsey announced layoffs attributed to AI disruption of consulting workflows (Fast Company, 2025 via search snippet).
- [Inferred]: The convergence of enterprise AI adoption (95% of GenAI pilots failing per Ontora's cited stat) creates demand for operational context layers that make AI deployments effective — positioning Ontora as infrastructure for successful enterprise AI, not just a consulting replacement.

## Founders & Team

**Maximilian Arnold** — Co-Founder & COO
- B.Sc. Software Engineering, CODE University of Applied Sciences (Sep 2021–Feb 2026); top 1% student; DAAD Scholarship; Student Council President (maximilianarnold.com).
- Exchange semester in CS at Stanford University (Jun–Aug 2024); established CODE-Stanford partnership (maximilianarnold.com).
- Porsche AG (Sep 2024–Sep 2025): Project lead; developed agentic SAP process mining for procurement, now used at 4 Volkswagen subsidiaries (maximilianarnold.com).
- sterna.studio (Aug 2022–Dec 2023): Built vertical SaaS for renewable energy; led 7 engineers (maximilianarnold.com).
- Awards: ETH InCube x Roche winner, Telekom XR Challenge 2nd place (€50,000), Intel Liftoff winner, Samsung Solve for Tomorrow Top 10, Berlin Senate Honor for STEM education (maximilianarnold.com).
- Twitter/X: @maxonary — count not retrievable.
- LinkedIn: linkedin.com/in/arnold-max — 500+ connections.
- GitHub: github.com/maxonary — 1 public repo (convitelist, a Minecraft server tool); star count not retrieved.

**Leon Iwanowitsch** — Co-Founder & CEO
- Universität St.Gallen (HSG) (LinkedIn via search snippet).
- Built AI automations at consultancies (YC page description via search snippet).
- Twitter/X: @LeonIwanowitsch — count not retrievable.
- LinkedIn: linkedin.com/in/leon-j-iwanowitsch — 500+ connections.
- GitHub: No public repos found.

**David Korn** — Co-Founder
- CODE University of Applied Sciences (LinkedIn via search snippet).
- Built data pipelines in finance (YC page description via search snippet).
- Twitter/X: @dav1dk0rn — count not retrievable.
- LinkedIn: linkedin.com/in/korn-david.
- GitHub: No public repos found.

**Co-founder relationship:** Max Arnold and David Korn both attended CODE University of Applied Sciences in Berlin. Per search snippets, the three co-founders quit their jobs after a trip to Stockholm's fastest-scaling startups organized by Max.

**Founder-market fit:** Max Arnold built agentic SAP process mining at Porsche deployed across 4 VW subsidiaries — direct domain experience in enterprise process discovery. Leon Iwanowitsch built AI automations at consultancies — direct experience with the buyer persona and delivery model Ontora replaces. David Korn built data pipelines in finance — relevant to Ontora's data integration layer. The team combines process mining engineering, consulting-domain AI, and data infrastructure.

## Key Risks

**LLM dependency and interview quality:** Ontora's core value depends on LLMs conducting nuanced, structured interviews that extract tacit knowledge accurately. Hallucinated synthesis or shallow follow-up questions could produce misleading process maps, with consequences at the C-suite decision level. No public information on validation methodology or accuracy benchmarks.

**Enterprise sales cycle vs. runway:** Selling to C-suite leaders at large enterprises typically involves 6–12 month sales cycles, procurement reviews, and security audits. As a 3-person pre-seed team, Ontora must close enterprise deals before exhausting YC-stage capital. The Vertiv testimonial (ontora.com) suggests at least one enterprise engagement.

**Data sensitivity and compliance:** Interviewing every employee surfaces sensitive operational data, internal politics, and potentially regulated information. Enterprise buyers in healthcare, finance, or government may require SOC 2, HIPAA, or GDPR compliance before deployment. No compliance certifications found in public sources.

**Competitive response from process mining incumbents:** Celonis ($2.4B raised) or Skan AI ($57.6M raised) could add LLM-based conversational discovery to their existing platforms, combining it with their established log-based and vision-based capabilities. This would create a more comprehensive offering than Ontora's standalone conversational approach.

**Name collision:** "Ontora" shares a name with multiple social media accounts (individuals named Nusrat Jahan Ontora on X/Twitter). Co-founder David Korn shares a name with the well-known computer scientist who created the Korn Shell. Neither creates business risk but may complicate search visibility and due diligence.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Process mining software: $1.4B in 2024, projected $21.9B by 2030 (Grand View Research, 2024 via search snippet) |
| SAM | No public data found |
| Traction | Vertiv customer testimonial (ontora.com); YC launch post (ycombinator.com); YC Twitter promotion (x.com/ycombinator) |
| Revenue Signal | No public data found |
| Founders | Max Arnold (COO): Porsche process mining lead, Stanford, CODE Univ. Leon Iwanowitsch (CEO): St.Gallen, AI automations at consultancies. David Korn: CODE Univ, data pipelines in finance. |
| Competitors | Celonis ($2.4B raised, ~$771M revenue (getlatka.com, 2023), log-based process mining); Skan AI ($57.6M raised, $22.2M revenue (getlatka.com, 2025), vision-based task mining); Workfellow (acquired by ProcessMaker Apr 2024, revenue unknown, hybrid process+task mining); Glean (~$800M raised (search snippet), revenue unknown, enterprise AI search) |
| Moat Signals | No public data found |
| Risk Factors | LLM interview quality/accuracy, enterprise sales cycle vs. pre-seed runway, data sensitivity compliance requirements |
| Founder Reach | Max Arnold: Twitter @maxonary (count not retrievable), LinkedIn 500+ connections, GitHub 1 public repo. Leon Iwanowitsch: Twitter @LeonIwanowitsch (count not retrievable), LinkedIn 500+ connections. David Korn: Twitter @dav1dk0rn (count not retrievable), LinkedIn profile exists. |
| Distribution Signals | No public data found |
| Emails | No public data found |
