# fuchsia

> AI that gets hardware compliance done in weeks, not months.

| Field | Value |
|-------|-------|
| Website | https://getfuchsia.ai/ |
| YC Page | https://www.ycombinator.com/companies/fuchsia |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Hardware, Robotics, Compliance, AI |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

**Note:** The company previously operated under the name "Noetic" and launched on YC as "Noetic — Vanta for hardware" (YC page, LinkedIn). Jack Yin's LinkedIn lists his title as "Co-Founder and COO, noetic (YC W26)" (RocketReach), indicating at least two co-founders despite the listed team size of 1. The YC page lists the batch as "Spring 2026" (YC page); Jack Yin's LinkedIn references "W26," which may reflect a prior batch designation.

---

## The Idea

**Problem:** Hardware companies face fragmented product safety requirements across dozens of regional and industry-specific standards — FCC, FDA, FAA, CE, UL, ISO, RIA — spanning thousands of individual codes (YC page). Companies spend months and tens of thousands of dollars in consultant fees determining which standards apply before even beginning documentation and testing (YC page). The current workflow involves hiring specialized compliance consultants, manually cross-referencing standards documents, and coordinating with testing labs — a process that is slow, expensive, and error-prone (company website).

**Approach:** Fuchsia deploys AI agents that (1) analyze a product against thousands of regulatory codes and surface every relevant requirement with citations, (2) draft required technical documentation for testing labs, and (3) match teams with specialized testing facilities (company website). The platform provides centralized tracking for requirements, documents, and status updates (company website). Supported standards include FCC, CE Marking, FDA 510(k), UL Certification, ISO 9001/9100, and ISO 26262 (company website).

**Differentiation:**
- vs. **Saphira AI** (YC S24): Saphira focuses on automated traceability report generation and safety certification for industrial robotics and heavy machinery, with emphasis on UL, CE, ISO, and TÜV standards (YC launch page). Fuchsia positions more broadly across hardware categories and includes testing lab matching as a core feature (company website).
- vs. **Compliance & Risks**: An established platform (founded 2002) tracking 110,000+ regulations across 195 countries (company search results). Serves large enterprises; not focused specifically on hardware product certification workflows.
- vs. **UL Solutions software**: UL's GCM platform provides regulatory intelligence alongside UL's testing services (search results). UL is both a standards body and testing lab — its software is part of a broader services offering rather than a standalone AI-first compliance tool.
- vs. **Legacy consultants**: Traditional compliance consulting is manual, charges hourly/project fees, and takes months (YC page).

**Business Model:** No pricing page or tiers are publicly listed (company website). [Inferred]: Most likely monetization path is SaaS subscription (per-product or per-project basis), potentially with a marketplace transaction fee for testing lab matching, given the three-part product structure (research, documentation, lab matching).

**TAM/SAM:** The broader compliance software market was valued at $36.22B in 2025 with a 12.67% CAGR projected to reach $65.77B by 2030 (Mordor Intelligence, 2025 via search snippet). The RegTech & compliance automation market was valued at $20.34B in 2024, projected to reach $72.4B by 2032 (Congruence Market Insights, 2024 via search snippet). No public TAM/SAM data found for the hardware-specific compliance software sub-segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct outreach to hardware startups and robotics companies — the team's robotics background and YC network provide an initial channel. The lab-matching feature could create a two-sided network effect over time.

---

## Defensibility

- **Data advantage (potential):** Ingesting, parsing, and structuring thousands of regulatory codes across jurisdictions creates a proprietary regulatory knowledge base. [Inferred]: This dataset becomes more defensible as more standards are added and kept current, but building and maintaining it is labor-intensive rather than technically unique.
- **Workflow switching costs (potential):** [Inferred]: Once a company's product documentation and compliance status is managed inside Fuchsia, migrating mid-certification would be costly and risky.
- **Lab network (potential):** The testing lab matching feature could generate network effects if Fuchsia builds a meaningful directory of labs with pricing, capacity, and specialization data (company website). No public data found on the current size of this lab network.

**Market structure:** UL Solutions, the largest incumbent testing and certification body, reported $3.05B in total revenue for 2025 and ~$102M in quarterly software & advisory revenue (UL Solutions Q4 2025 earnings). UL's software is bundled with its testing services. [Inferred]: An independent AI compliance platform does not directly cannibalize UL's core testing revenue, creating a business model conflict that may slow UL's response — building a tool that helps customers prepare independently could undermine demand for UL's own consulting services.

**Commoditization risk:** The core AI capability (parsing regulatory documents, generating documentation) relies on general-purpose LLMs. [Inferred]: Other teams with regulatory domain expertise could replicate the approach. Saphira AI (YC S24, team of 6, 4 open roles) is already in-market with a similar product (YC page). Reglyr launched an AI-powered product compliance platform in April 2026 covering physical goods, food, and cosmetics (press release, April 2026).

---

## Market & Traction

**Traction signals:**
- Backed by Y Combinator, Spring 2026 batch (YC page)
- YouTube launch video published: https://youtu.be/vbFukT9hQkc (YC page)
- Y Combinator LinkedIn post: "Noetic (YC W26) is making hardware compliance easy" (LinkedIn)
- Twitter/X: @togao0 (YC page); follower count not retrievable
- LinkedIn company page exists (YC page); follower count not retrievable
- No Product Hunt launch found
- No public revenue, user count, or customer data found
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Key Differentiator vs. Fuchsia | Funding | Revenue |
|---|---|---|---|
| **Saphira AI** (YC S24) | Focused on industrial safety certifications (UL, CE, ISO, TÜV); traceability report automation; team of 6 with 4 open roles (YC page) | YC-backed; amount not disclosed (YC page) | No public data found |
| **Compliance & Risks** | Enterprise-scale platform tracking 110,000+ regulations across 195 countries; serves large corporates; 188 employees (search results) | Backed by Luminate Capital Partners (Silicon Republic) | ~$29.8M (Prospeo, 2026 via search snippet) |
| **Reglyr** | Unified knowledge graph across food, physical goods, and cosmetics compliance; retailer-focused (press release, Apr 2026) | No public data found | No public data found |
| **UL Solutions** | Incumbent testing/certification body; GCM software platform bundled with testing services; public company (NYSE: ULS) | Public company | $3.05B total revenue, ~$400M/yr software & advisory (UL Solutions earnings, 2025) |

**Why now:**
- [Inferred]: The emergence of capable LLMs (GPT-4-class and beyond, 2023–2025) crossed a performance threshold for parsing dense regulatory text, extracting structured requirements, and generating technical documentation — tasks that previously required human domain experts.
- Over 1,000 new regulations are introduced annually across sectors, and the total number of compliance regulations is projected to exceed 10,000 (search results via snippet). [Inferred]: This increasing regulatory volume makes manual compliance increasingly untenable for small and mid-size hardware teams.
- The EU AI Act and updated product safety regulations (GPSR) introduced new compliance requirements in 2024–2025 (search results via snippet), expanding the surface area of hardware compliance obligations.

---

## Founders & Team

**Tony Gao** — Founder
- Math & Physics, Yale University (YC page)
- Background in frontier robotics — perception research and humanoid deployments; experience at AI startups (YC page)
- Twitter/X: @togao0 (YC page); follower count not retrievable
- LinkedIn: Not definitively identified among multiple "Tony Gao" profiles; YC page describes "Yale dropouts" (YC page)
- GitHub: No public repos definitively linked

**Jack Yin** — Co-Founder & COO (listed under prior company name "Noetic")
- CS & Math, Yale University (LinkedIn)
- Prior experience at D.E. Shaw Group, IntBot, Citadel Securities, Five Rings (RocketReach)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/jackjyin — "CS & Math @ Yale" (LinkedIn)
- GitHub: github.com/jonathanyin12 (search results); repo details not confirmed

**Co-founder relationship:** Both Tony Gao and Jack Yin attended Yale University concurrently, studying quantitative disciplines (Math + Physics and CS + Math respectively) (YC page, LinkedIn). The YC page describes the team as "Yale dropouts" (YC page).

**Founder-market fit:** Tony Gao's robotics background (perception research, humanoid deployments) provides direct experience with the hardware certification process that Fuchsia automates (YC page). Jack Yin's quantitative trading background (D.E. Shaw, Citadel Securities, Five Rings) brings engineering rigor and, per RocketReach, experience at IntBot, which may provide robotics/hardware exposure. [Inferred]: The combination of hardware domain experience and quantitative engineering capability is relevant to building AI systems that parse and structure regulatory text.

---

## Key Risks

**Name confusion with Google Fuchsia OS:** Google's open-source operating system "Fuchsia" is a well-known project with extensive web presence (fuchsia.dev). Search results for "fuchsia" are dominated by Google's OS (search results). This creates SEO and brand discovery challenges and may cause confusion in due diligence or sales contexts.

**Direct YC-backed competitor with head start:** Saphira AI (YC S24) launched over a year earlier with the explicit positioning "Vanta for hardware," has a team of 6, is actively hiring across 4 roles including a Founding Account Executive (indicating GTM investment), and addresses the same regulatory standards (UL, CE, ISO, TÜV) (YC page, YC launch page). Saphira's earlier market entry provides a lead in customer relationships and product iteration.

**Regulatory data maintenance burden:** Hardware compliance standards are updated by dozens of independent bodies (FCC, FDA, FAA, EU, ISO, UL, etc.) on different schedules. Keeping the regulatory database current and accurate is operationally intensive and errors carry liability risk for customers relying on the platform's output. No public data found on how Fuchsia manages regulatory data freshness.

**Solo-founder / small team execution risk at product complexity level:** The YC page lists team size as 1, though Jack Yin appears as COO on LinkedIn (RocketReach). The product spans three distinct capabilities (regulatory research AI, document generation, lab marketplace) across multiple regulatory domains and geographies. [Inferred]: Delivering and maintaining all three at production quality requires either rapid team scaling or tight scope management.

---

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $36.22B compliance software market in 2025, 12.67% CAGR to $65.77B by 2030 (Mordor Intelligence via search snippet) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC page); YouTube launch video published (YC page); LinkedIn post by YC (LinkedIn). No user, revenue, or customer data found |
| Revenue Signal | No public data found |
| Founders | Tony Gao (Founder): Yale Math+Physics, robotics/AI background. Jack Yin (Co-Founder/COO): Yale CS+Math, D.E. Shaw, Citadel Securities, Five Rings (RocketReach, LinkedIn) |
| Competitors | Saphira AI (YC S24, funding undisclosed, revenue unknown, industrial safety focus); Compliance & Risks (Luminate Capital-backed, ~$29.8M revenue (Prospeo via search snippet), enterprise-scale platform); Reglyr (funding unknown, revenue unknown, consumer goods compliance); UL Solutions (public, $3.05B revenue (earnings 2025), incumbent TIC + software) |
| Moat Signals | No public data found |
| Risk Factors | Name confusion with Google Fuchsia OS, direct YC-backed competitor (Saphira AI) with 1-year head start, regulatory data maintenance burden |
| Founder Reach | Tony Gao: Twitter @togao0 (count not retrievable), LinkedIn not confirmed, GitHub not confirmed. Jack Yin: Twitter not found, LinkedIn linkedin.com/in/jackjyin, GitHub not confirmed |
| Distribution Signals | No public data found |
| Emails | No public data found |
