# Approxima

> Let your software build itself with agents that can find issues,?

| Field | Value |
|-------|-------|
| Website | https://approxima.ai |
| YC Page | https://www.ycombinator.com/companies/approxima |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Enterprise Software, Infrastructure |
| YC Partner | Diana Hu |
| Emails | No public data found (demo booking via calendly.com/ashish-selvaraj/approxima) |

## The Idea

**Problem:** Software engineering teams spend significant time on routine maintenance, bug fixes, and incremental updates rather than novel feature development. The company's positioning states: "Human-assisted development should be for novel ideation, not routine maintenance, bug fixes or incremental updates" (YC company page). Current alternatives in this space include AI coding assistants like GitHub Copilot, Cursor, and autonomous agents like Devin, but these are primarily focused on code generation rather than autonomous issue detection and self-healing.

**Approach:** Approxima builds AI agents that can autonomously find issues in software and handle routine fixes. Their LinkedIn tagline is "Self-healing Software" (LinkedIn company page). The agents are designed to detect problems proactively and resolve them without developer intervention, covering bug fixes, maintenance tasks, and incremental updates. The company offers demos via Calendly, suggesting an enterprise or high-touch sales motion.

**Differentiation:** While competitors like Devin (Cognition) and Factory AI focus broadly on autonomous software development — generating new code, handling multi-file refactors, and executing full implementation workflows — Approxima's positioning emphasizes the "self-healing" angle: agents that proactively find and fix issues rather than waiting for human-initiated tasks. This positions them closer to continuous maintenance automation than general-purpose code generation. Sweep AI (YC S23) previously occupied a similar niche (automated bug-fix PRs via LLMs) but has since shifted focus to JetBrains IDE tooling (TechCrunch, Nov 2023 via search snippet; sweep.dev).

**Business Model:** No public pricing page was found. Website was not accessible at time of research. [Inferred]: Most likely monetization path is SaaS subscription pricing (per-seat or per-repository), given the enterprise software positioning and demo-based sales motion typical of B2B dev tools at this stage.

**TAM/SAM:** The broader agentic AI market was valued at approximately $7.55 billion in 2025 and is projected to grow to $199.05 billion by 2034 at a CAGR of ~44% (Precedence Research, 2025 via search snippet). The technology and software segment represented 38% of the agentic AI market in 2024 (Precedence Research via search snippet). No public TAM/SAM data was found specific to the autonomous software maintenance sub-segment.

**GTM / Distribution:** The company offers demo booking through Calendly (YC company page), indicating a sales-led or product-led growth model with direct outreach. [Inferred]: Most likely initial distribution path is direct sales to engineering teams at mid-market and enterprise companies, leveraging YC network and warm introductions, given the enterprise software tags and demo-first approach.

## Defensibility

No defensibility signals found in public sources. The company's GitHub organization (github.com/appsidekit) contains repositories from their prior product (SideKit) — an iOS SDK (7 stars), a React Native SDK (1 star), and a kanban board app (3 stars) — none of which appear related to the current Approxima product (GitHub). No patents, open-source projects, or proprietary data advantages related to the self-healing software product were found.

[Inferred]: Potential moat could develop via proprietary training data from customer codebases (data flywheel), deep integration into CI/CD pipelines creating switching costs, or domain-specific fine-tuning that improves fix accuracy over time, but these are unproven at this stage.

**Market structure:** No structural barrier identified at this stage. Major incumbents including GitHub (Microsoft), JetBrains, and Atlassian all have existing developer tool distribution channels and AI integration roadmaps. LLM providers (Anthropic, OpenAI) are shipping autonomous coding agents (Claude Code, Codex) directly. [Inferred]: A potential structural wedge could be that incumbent dev tool companies are focused on augmenting developer workflows rather than replacing routine maintenance entirely, creating a positioning gap for a "fully autonomous maintenance" product — but this is speculative.

**Commoditization risk:** The underlying LLM capabilities for code understanding and generation are widely available from multiple providers. Competitors with significantly more funding (Cognition at $10.2B valuation, Factory at $300M valuation, Augment Code with $252M raised) are building similar autonomous coding capabilities. Open-source alternatives like OpenHands ($23.8M raised) also exist. The barrier to building a basic "AI finds and fixes bugs" product is relatively low given current foundation model capabilities.

## Market & Traction

**Traction signals:**
- Website: Not accessible at time of research (ECONNREFUSED error)
- Product Hunt: No launch found
- Press coverage: No coverage found in named publications
- Twitter/X company account: @approximai (YC page); no posts or follower count retrievable
- LinkedIn company page: "Approxima (YC W26)" — 2-10 employees listed; follower count not retrievable (LinkedIn)
- GitHub: Organization at github.com/appsidekit contains only prior-product (SideKit) repos; no Approxima-specific repos found (GitHub)
- Discord/Slack community: No public data found
- App store / Chrome Web Store: Not applicable based on available information
- Revenue: No public data found
- Users: No public data found
- Job postings: Company is not hiring (YC page)

**Pivot note:** The founders originally entered YC W26 as **SideKit**, described as "one package to take your mobile app to production" — a mobile SDK providing analytics, feature flags, and launch controls (YC SideKit page). The company has since pivoted to Approxima, focused on self-healing software via AI agents. The SideKit YC page remains live at ycombinator.com/companies/sidekit. The GitHub organization (appsidekit) still contains only SideKit-era repositories. All prior-product metrics (SideKit iOS SDK: 7 GitHub stars; React Native SDK: 1 star) pertain to the previous product and should not be attributed to Approxima.

**Competitive landscape:**

1. **Cognition (Devin)** — $400M raised at $10.2B valuation (TechCrunch, Sep 2025); ARR grew from $1M (Sep 2024) to $73M (Jun 2025) (Cognition blog via search snippet). Full autonomous software engineer agent. Key differentiator vs. Approxima: broader scope (full SDLC agent, not just maintenance), massive scale and enterprise customer base (Goldman Sachs, Cisco, Palantir).

2. **Factory AI** — $50M Series B at $300M valuation from NEA, Sequoia, NVIDIA, J.P. Morgan (BusinessWire, Sep 2025). Enterprise platform for "agent-native development." Key differentiator vs. Approxima: enterprise-grade platform with Droids agents, #1 on Terminal Bench, customers include MongoDB, EY, Bayer, Zapier.

3. **OpenHands** — $23.8M raised from Menlo Ventures, Madrona, and others (CB Insights via search snippet). Open-source platform for cloud coding agents. Key differentiator vs. Approxima: open-source model providing transparency and community contributions; based on open platform approach.

4. **Sweep AI** (YC S23) — ~$2.5M raised at $25M post-money valuation (TechCrunch, Nov 2023 via search snippet). Originally automated bug-fix PRs, has since shifted to JetBrains IDE tooling. Key differentiator: closest prior analog to Approxima's positioning but appears to have moved away from the autonomous bug-fix niche.

5. **Augment Code** — $252M raised across 3 rounds (Tracxn via search snippet). AI-powered coding assistant focused on code suggestion and quality management. Key differentiator vs. Approxima: larger scale, broader product suite covering code suggestions, API integration, and code quality.

**Why now:** [Inferred]: The enabling catalyst is the rapid improvement in LLM code understanding and agentic capabilities during 2024-2025. Claude Opus 4.6 reaches ~80% on SWE-bench Verified, a benchmark measuring real-world bug fixing on GitHub repos (Faros AI, 2026 via search snippet). By end of 2025, approximately 85% of developers regularly used AI tools for coding (Faros AI via search snippet). The convergence of sufficiently capable foundation models with agentic frameworks has made autonomous bug detection and fixing technically feasible at a quality level that was not possible 18-24 months prior.

## Founders & Team

**Ashish Selvaraj** — Co-founder
- CS & Business Administration '25, University of Waterloo (LinkedIn)
- Previously: Intern at Databricks (delivered production-grade code, authored design documents) and Microsoft (LinkedIn via search snippet)
- Twitter/X: @selvarajashish (X.com) — follower count not retrievable
- LinkedIn: linkedin.com/in/ashish-selvaraj — headline: "CS & Business @ UWaterloo | Prev. Databricks, Microsoft" (LinkedIn via search snippet)
- GitHub: github.com/SaurontheMighty — 20 public repos, 20 followers; Developer Program Member, Pro account, Arctic Code Vault Contributor (GitHub)
- Medium: medium.com/@ashish.selvaraj — 68 followers (search snippet)
- Also listed as founder of SideKit (YC W26, prior product) (YC SideKit page)

**Ethan Pronev** — Co-founder
- CS '25, University of Waterloo (YC page)
- Background in competitive programming; participated in online and in-person contests (search snippet from ethanpronev.com)
- Twitter/X: @ethanpronev (YC Approxima page) — follower count not retrievable
- LinkedIn: No public profile found in search results
- GitHub: No public profile found in search results
- Personal website: ethanpronev.com (returned 404 at time of research)

**Co-founder relationship:** Both founders are CS '25 students at the University of Waterloo, indicating they were classmates. They co-founded SideKit together before pivoting to Approxima during YC W26.

**Founder-market fit:** Both founders are recent University of Waterloo CS graduates with hands-on software engineering experience. Selvaraj's internships at Databricks and Microsoft provide exposure to large-scale production codebases and the pain points of software maintenance at enterprise scale. Pronev's competitive programming background suggests strong algorithmic problem-solving skills. Their direct experience as developers building and maintaining software (including their prior SideKit product) gives them first-hand understanding of the routine maintenance burden they aim to automate. No advisors, board members, or notable investors beyond YC were found.

## Key Risks

**Mid-batch pivot execution risk:** The company pivoted from SideKit (mobile app SDK) to Approxima (self-healing software) during the YC W26 batch. The pivot represents a complete change in product category, customer segment, and technical stack. The GitHub organization still contains only SideKit-era code, and the website was not accessible, suggesting the Approxima product may be in very early development. The prior SideKit work (iOS/React Native SDKs) provides limited technical carryover to an AI-powered autonomous code maintenance platform.

**Incumbents with overlapping capabilities:** Well-funded competitors are rapidly expanding into autonomous software maintenance. Cognition (Devin) grew from $1M to $73M ARR in 9 months (Cognition blog via search snippet). Factory AI has enterprise deployments at MongoDB, EY, and Zapier (BusinessWire, Sep 2025). GitHub Copilot and Claude Code are adding agentic capabilities. Approxima would need to find a defensible niche within an increasingly crowded and well-capitalized market.

**Commoditization of core technology:** The underlying capability — using LLMs to detect and fix bugs — relies on foundation models from Anthropic, OpenAI, and others. As these models improve, the value of a wrapper application diminishes. Major model providers are shipping their own coding agents directly (Claude Code, OpenAI Codex), potentially disintermediating startups that build on top of their APIs.

**Brand disambiguation:** Multiple unrelated companies share the "Approxima" name: Approxima S.r.l. (Italian MedTech, raised €1.6M seed from Panakes Partners, now raising Series A) (LinkedIn), Approxima a/s (Danish SAP consulting) (LinkedIn), and Approxima at Politecnico di Milano (polimi.it). This creates potential brand confusion in search results and market positioning.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market: ~$7.55B in 2025, projected $199.05B by 2034 at ~44% CAGR (Precedence Research, 2025 via search snippet). No sub-segment data for autonomous software maintenance. |
| SAM | No public data found |
| Traction | No public data found. Website not accessible. No Product Hunt launch, press coverage, or public user/revenue metrics found. |
| Revenue Signal | No public data found |
| Founders | Ashish Selvaraj (Co-founder): CS/BBA '25 UWaterloo, prev. Databricks & Microsoft intern. Ethan Pronev (Co-founder): CS '25 UWaterloo, competitive programming background. |
| Competitors | Cognition/Devin ($400M raised, $10.2B valuation, $73M+ ARR, full autonomous dev agent); Factory AI ($50M raised, $300M valuation, revenue unknown, enterprise agent platform); OpenHands ($23.8M raised, revenue unknown, open-source coding agent); Augment Code ($252M raised, revenue unknown, AI coding assistant); Sweep AI (~$2.5M raised, revenue unknown, shifted from bug-fix PRs to IDE tooling) |
| Moat Signals | No public data found |
| Risk Factors | Mid-batch pivot with early-stage product, well-funded incumbents with overlapping capabilities, commoditization of LLM-based code fixing |
| Founder Reach | Ashish Selvaraj: Twitter @selvarajashish (count not retrievable), LinkedIn 500+, GitHub 20 followers. Ethan Pronev: Twitter @ethanpronev (count not retrievable), LinkedIn not found, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
