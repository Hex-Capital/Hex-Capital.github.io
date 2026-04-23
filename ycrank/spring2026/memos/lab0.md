# Lab0

> Automated forward-deployed engineers (AI FDEs)

| Field | Value |
|-------|-------|
| Website | https://lab0.ai |
| YC Page | https://www.ycombinator.com/companies/lab0 |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

**Name disambiguation:** Lab0 (lab0.ai, YC P26) is distinct from Lab0 (lab0.com), a Portland-based robotics/warehouse automation startup that emerged from stealth in March 2025 with NVIDIA technology (Robotics and Automation News, Mar 2025). The GitHub organization github.com/Lab0-inc and the Crunchbase profile for "Lab0" appear to reference the robotics company, not this YC startup. All data below has been verified against the lab0.ai / YC P26 entity.

## The Idea

**Problem:** Enterprise software implementation — whether traditional ERP or new AI systems — requires months of manual integration, configuration, and tuning performed by system integrators and forward-deployed engineers (YC page). Current deployments take 3–12 months and depend on consulting-heavy labor (lab0.ai). The system integration market was valued at $451.6 billion in 2024 (IMARC Group, 2025 via search snippet), indicating the scale of manual services spend. Customers today rely on firms like Accenture, Deloitte, or vendor-specific professional services teams, alongside PSA tools such as Rocketlane, Certinia, and Kantata for project orchestration.

**Approach:** Lab0 builds agentic AI systems that automate the implementation layer. The product compresses months-long implementations into weeks via async context gathering, auto-configuration, and continuous learning from every rollout (lab0.ai). The company describes striving toward "0-day Enterprise software Implementation" (YC page, Sujay Srivastava profile). [Inferred]: The agents likely handle discovery (understanding the customer's existing systems), configuration (setting parameters and business rules), integration (connecting APIs and data flows), and testing — tasks traditionally done by forward-deployed engineers.

**Differentiation:** Unlike PSA platforms (Rocketlane, Kantata, Certinia) that help human consultants manage implementation projects, Lab0 aims to replace the human labor itself with AI agents. Unlike RPA tools (Automation Anywhere, UiPath) that automate repetitive workflows within deployed software, Lab0 targets the pre-deployment implementation phase. Rocketlane's CEO confirmed Lab0 "operates in a space that directly overlaps with Rocketlane's offerings" when excluding Lab0 from their Propel conference on April 19, 2026 (Newsbeep, Apr 2026), positioning Lab0 in the agentic PSA and customer onboarding space.

**Business Model:** No pricing page or revenue signals found on lab0.ai. No job postings listed (YC page). [Inferred]: Most likely monetization path is usage-based or per-implementation pricing, given the high-value, project-scoped nature of enterprise implementations.

**TAM/SAM:** The global system integration market was valued at $451.6 billion in 2024 and is projected to reach $847.5 billion by 2033 at a 6.88% CAGR (IMARC Group, 2025 via search snippet). The System Integrators Market (a narrower segment) is expected to reach $46.91 billion in 2025 and grow at 5.85% CAGR to $62.34 billion by 2030 (Mordor Intelligence via search snippet). [Inferred]: Lab0's SAM is the subset of implementation spend addressable by AI automation — likely the configuration, integration, and testing portions rather than strategic consulting or change management.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to enterprise software vendors who currently employ forward-deployed engineers (e.g., ERP vendors, AI platform companies), or to system integrators seeking to scale delivery capacity without proportional headcount growth. The Rocketlane conference incident suggests Lab0 is already visible enough to incumbents to be perceived as competitive.

## Defensibility

- **Data flywheel potential:** Lab0 claims "continuous learning from every rollout" (lab0.ai). [Inferred]: Each implementation could generate training data on enterprise configurations, integration patterns, and failure modes, creating a compounding data advantage over time. This moat is unproven at this stage.
- **Research depth:** Co-founder Lakshya Gupta co-authored "World of Workflows: A Benchmark for Bringing World Models to Enterprise Systems" (arXiv 2601.22130, Jan 2026), a ServiceNow-based benchmark with 234 evaluation tasks for enterprise AI agents. The paper found that frontier LLMs suffer from "dynamics blindness" — failing to predict cascading side effects in enterprise systems. [Inferred]: This research may inform Lab0's technical approach to handling enterprise workflow complexity.
- **Switching costs:** [Inferred]: Once an enterprise has used Lab0 to implement software, the switching cost for future implementations would be moderate — the value is per-project, though accumulated configuration knowledge could create retention.

**Market structure:** Incumbent system integrators (Accenture, Deloitte, Wipro) derive revenue from billable consultant hours. Automating implementations would cannibalize their core revenue model. PSA vendors (Rocketlane, Kantata) sell tools to manage human-led projects; shifting to autonomous implementation would require fundamental product rearchitecture. [Inferred]: Business model cannibalization creates a structural barrier for consulting firms, while PSA vendors face a pivot-or-compete dilemma.

**Commoditization risk:** As frontier LLMs improve at enterprise workflow understanding, large cloud vendors (Microsoft, Google, Salesforce) could build implementation agents natively into their platforms. ServiceNow, which acquired Moveworks in late 2025 (search snippet), is well-positioned to build implementation automation for its own ecosystem. Any company with access to frontier models and enterprise workflow data could attempt this.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- Company Twitter/X: @_Lab0_ (follower count not retrievable due to platform restrictions).
- LinkedIn company page: https://www.linkedin.com/company/lab-0 (follower count not retrievable).
- No Product Hunt launch found.
- No app store listings, Chrome extension, or Discord/Slack community found.
- No job postings (YC page, 0 open positions).
- The Rocketlane Propel conference exclusion incident (April 19, 2026) generated social media discussion and press coverage in Newsbeep and Storyboard18.

**Competitive landscape:**

1. **Rocketlane** — $105M total raised ($60M Series C led by Insight Partners, March 2026; PRNewswire). 750+ customers including 17 Forbes Cloud 100 companies (PRNewswire, Mar 2026). Revenue more than doubled in the past year; average deal size increased 4.5× since 2023 (PRNewswire, Mar 2026). Agentic PSA platform; launched "Nitro," an agentic execution platform for professional services teams. Key differentiator vs. Lab0: Rocketlane augments human consultants with AI tools; Lab0 aims to replace the consultant layer entirely.

2. **Certinia** — Salesforce-native PSA platform. Launched "Veda," described as "the industry's only suite of specialist AI agents" for professional services (CPA Practice Advisor, Apr 2026). Funding and revenue not publicly disclosed. Key differentiator vs. Lab0: Certinia is tightly coupled to the Salesforce ecosystem; Lab0 appears platform-agnostic.

3. **Kantata** — Launched "Expertise Engine," described as "the first AI platform purpose-built for professional services transformation" (Kantata press release, Oct 2025). Funding details via PitchBook but not publicly available in search results. Key differentiator vs. Lab0: Kantata focuses on firmwide knowledge management and proposal generation; Lab0 targets the technical implementation execution layer.

4. **ServiceNow (post-Moveworks acquisition)** — Acquired Moveworks in late 2025 (search snippet). Enterprise IT automation platform with native workflow capabilities. Key differentiator vs. Lab0: ServiceNow automates post-deployment IT workflows; Lab0 targets pre-deployment implementation. However, ServiceNow could extend into implementation automation.

**Why now:**
- [Inferred]: The "dynamics blindness" problem identified in the World of Workflows paper (arXiv, Jan 2026) suggests frontier LLMs are now capable enough for basic enterprise tasks but still struggle with cascading workflow effects — creating a window for specialized solutions like Lab0 that can solve this specific gap.
- Consolidation in enterprise AI automation: Moveworks acquired by ServiceNow and Aisera acquired by Automation Anywhere, both in late 2025 (search snippets), signals market maturation and creates vacuum for new entrants.
- Major PSA incumbents simultaneously launching AI agent products in 2025–2026 (Rocketlane Nitro, Certinia Veda, Kantata Expertise Engine) confirms market timing for AI-driven implementation.

## Founders & Team

**Lakshya Gupta** — Founder
- IIT Bombay (Newsbeep, Apr 2026). Previously a Founding Engineer at Emergent (LinkedIn snippet via search).
- Co-author of "World of Workflows: A Benchmark for Bringing World Models to Enterprise Systems" (arXiv 2601.22130, Jan 2026), a 234-task benchmark for evaluating LLMs as enterprise agents on ServiceNow.
- Twitter/X: @lakshya806 (count not retrievable).
- LinkedIn: linkedin.com/in/lakshya-gupta-0030771ba (headline not fully retrievable).
- GitHub: No public repos confirmed for this individual.

**Sujay Srivastava** — Founder
- IIT Madras: Integrated B.Tech in Engineering Design + M.S. in Quantum Computing, completed 2024 (Careers360 interview). DAAD scholarship; master's thesis at Leibniz University Hannover, Germany (Careers360).
- Previously founded Ravvio, an AI startup for sales and customer engagement in the BFSI sector, with co-founder Nithin Maloth (IIT Madras Best Place to Build page; Careers360).
- CAT 2024 topper with 99.94 percentile (Careers360, 2025).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/sujaysriv/ — "Lab0 (YC P26)".
- GitHub: github.com/srivastavasujay — 8 followers; repos include multilingual-news-summarizer, CompetitiveProgramming, ImageClassification_TensorFlow (GitHub).

**Onkar Borade** — Co-founder
- IIT Bombay, CSE (LinkedIn, GitHub). Previous roles at Oracle, Samespace, Mudrex, and InvoicEase (Weekday.works profile). Senior Software Engineer specializing in Java, Spring Boot, Full Stack (onkarborade.com).
- Twitter/X: @onkar_borade_10 — bio: "Building | Fintech | Consumer AI cse · @iitbombay" (X). Count not retrievable.
- LinkedIn: linkedin.com/in/onkar-borade/ — "Building in Stealth | IIT Bombay CSE".
- GitHub: github.com/Onkar-10 — personal site repo (GitHub).

**Co-founder relationship:** All three founders attended Indian Institutes of Technology — Lakshya Gupta and Onkar Borade both at IIT Bombay, and Sujay Srivastava at IIT Madras. The shared IIT Bombay connection between Gupta and Borade suggests a university-based relationship. No public data on prior shared employment between any pair.

**Founder-market fit:** Lakshya Gupta has direct research experience in enterprise workflow AI, as demonstrated by the World of Workflows paper benchmarking LLM performance on ServiceNow tasks. Sujay Srivastava brings prior startup experience (Ravvio) and a technical background spanning engineering design and quantum computing. Onkar Borade contributes production engineering experience across multiple B2B/fintech companies (Oracle, Mudrex, Samespace). No advisors, board members, or notable investors beyond YC found publicly.

## Key Risks

**Name collision and brand confusion:** "Lab0" shares its name with Lab0 (lab0.com), a robotics/warehouse automation startup that emerged from stealth in March 2025 with NVIDIA backing (Robotics and Automation News, Mar 2025). The Crunchbase profile, CBInsights entry, and GitHub organization for "Lab0" all reference the robotics company. This creates SEO competition and investor confusion risk.

**Incumbent response velocity:** Three major PSA vendors launched AI agent products within a six-month window: Rocketlane Nitro (Mar 2026), Certinia Veda (Apr 2026), and Kantata Expertise Engine (Oct 2025). Rocketlane alone has $105M in funding, 750+ customers, and doubled revenue in the past year (PRNewswire, Mar 2026). Lab0 faces well-capitalized competitors already deploying AI into their installed bases.

**Enterprise sales cycle mismatch:** Enterprise software implementation buyers (CIOs, VPs of IT) typically require extensive proof-of-concept periods, SOC 2 compliance, and reference customers. A 3-person pre-seed team may face prolonged sales cycles that strain runway. Rocketlane's exclusion of Lab0 from Propel (Newsbeep, Apr 2026) demonstrates that incumbents are actively gatekeeping distribution channels.

**Platform dependency on LLM capabilities:** The World of Workflows paper (arXiv, Jan 2026) found that frontier LLMs suffer from "dynamics blindness" in enterprise systems. If Lab0's agents rely on third-party LLMs, its product quality is bounded by external model improvements, and any degradation in model performance (pricing changes, capability regressions) directly impacts Lab0's value proposition.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | System integration market: $451.6B in 2024, projected $847.5B by 2033 at 6.88% CAGR (IMARC Group, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Lakshya Gupta (Founder): IIT Bombay, co-author enterprise AI benchmark paper. Sujay Srivastava (Founder): IIT Madras, previously founded Ravvio (BFSI AI). Onkar Borade (Co-founder): IIT Bombay CSE, prev. Oracle/Mudrex/Samespace. |
| Competitors | Rocketlane ($105M raised, revenue doubled YoY, agentic PSA platform; PRNewswire Mar 2026). Certinia (funding undisclosed, launched Veda AI engine; CPA Practice Advisor Apr 2026). Kantata (funding undisclosed, launched Expertise Engine; Kantata press release Oct 2025). ServiceNow/Moveworks (acquired late 2025, enterprise IT automation; search snippet). |
| Moat Signals | No public data found |
| Risk Factors | Brand collision with lab0.com robotics company, rapid incumbent AI agent launches, enterprise sales cycle mismatch for pre-seed team |
| Founder Reach | Lakshya Gupta: X @lakshya806 (count not retrievable). Sujay Srivastava: LinkedIn "Lab0 (YC P26)", GitHub 8 followers. Onkar Borade: X @onkar_borade_10 (count not retrievable), GitHub Onkar-10. |
| Distribution Signals | No public data found |
| Emails | No public data found |
