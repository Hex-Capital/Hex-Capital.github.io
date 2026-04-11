# Sellara

> Applied AI For Institutional Trading & Operations

| Field | Value |
|-------|-------|
| Website | https://www.sellara.io |
| YC Page | https://speedrun.a16z.com/companies/sellara |
| Batch | No public data found. The provided URL is an a16z Speedrun portal, not Y Combinator. The Speedrun page returned HTTP 404 at time of research. The company website states it is "backed by Andreessen Horowitz (a16z) Speedrun" (sellara.io). a16z Speedrun SR006 ran Jan 26 – Apr 12, 2026, in San Francisco (a16z.com); SR005 ran Jul 28 – Oct 10, 2025, in Los Angeles (a16z.com). Batch affiliation could not be confirmed. |
| Industry | Fintech |
| Team Size | 4 |
| Location | NYC, New York, United States of America |
| Tags | Fintech |
| YC Partner | Not listed (a16z Speedrun page returned 404) |
| Emails | cj@sellara.io, ar@sellara.io, ss@sellara.io (a16z Speedrun portal, company_data) |

## The Idea

**Problem:** Financial institutions — banks, broker-dealers, hedge funds, asset managers, and wealth managers — rely on human-driven, manually stitched-together processes across front, middle, and back offices (company description). Workflows such as booking, allocations, reconciliations, compliance, and reporting remain repetitive and labor-intensive (sellara.io). [Inferred]: These manual workflows create operational risk, slow trade lifecycle processing, and scale poorly as regulatory and volume demands increase.

**Approach:** Sellara builds custom AI agents deployed within financial institutions to automate these workflows (sellara.io). The product provides a simple interface (copy-and-paste, drag-and-drop execution with file inputs), integrates with existing systems including Outlook and Bloomberg without requiring workflow changes, and supports scheduling on recurring cadences (sellara.io). The company claims its AI "outperforms leading LLMs by 60%+ and runs 30x faster" (company description). Deployment follows a three-step process: identify a starting workflow, configure client integrations and validate outputs, then deploy to production with monitoring and scale (sellara.io). The company states it can "deploy in weeks, not quarters" (sellara.io). Sellara holds SOC II and ISO 27001 certifications (sellara.io).

**Differentiation:**
- vs. **Beam AI** (NYC-based, $1.35M raised, ~$4.5M revenue as of Jun 2025 per Getlatka): Beam focuses on general back-office automation across BFSI with an agent platform for repetitive tasks like data entry and customer support (beam.ai). Sellara claims domain-specialized models that outperform general LLMs by 60%+ on financial workflows (company description), positioning as purpose-built for trading and operations rather than horizontal back-office.
- vs. **Blueflame AI** ($5M Series A, Jun 2024 per Crunchbase): Blueflame targets investment research, deal execution, and portfolio insights for private equity and hedge funds (blueflame.ai). Sellara targets operational workflows (booking, reconciliation, compliance) rather than investment decision support.
- vs. **Derivative Path** (SaaS capital markets platform): Derivative Path provides a deterministic, rule-based platform for derivatives front/middle/back-office automation and regulatory compliance (derivativepath.com). Sellara uses AI agents rather than traditional workflow software, positioning for unstructured and semi-structured tasks.
- vs. **Incumbent vendors (FIS, Bloomberg, Broadridge):** These offer modules within large integrated suites. [Inferred]: Sellara's value proposition is speed of deployment ("weeks, not quarters") and AI-native flexibility vs. incumbents' monolithic, customization-heavy implementations.

**Business Model:** No pricing page or tiers visible on sellara.io. A "Book a demo" CTA links to Calendly (sellara.io). [Inferred]: Most likely monetization is enterprise SaaS (subscription or consumption-based), given the demo-driven sales motion and institutional customer base.

**TAM/SAM:**
- AI trading platform market: $11.26B in 2024, projected to reach $69.95B by 2034, CAGR 15.91% (Precedence Research via search snippet).
- Algorithmic trading market: $25.04B in 2026, projected $44.34B by 2030, CAGR 15.4% (Research and Markets via search snippet).
- AI in trade finance market: projected $38.9B by 2033, CAGR 15.5% (Market.us via search snippet).
- [Inferred]: SAM is narrower — limited to operational workflow automation (not algo trading or trade finance broadly) within banks, broker-dealers, hedge funds, and asset managers. No public SAM estimate specific to this segment was found.

**GTM / Distribution:** The website's "Book a demo" flow and institutional focus indicate a direct enterprise sales motion (sellara.io). The company description names specific customer segments: banks, broker-dealers, hedge funds, asset managers, and wealth managers (company description). CEO Charles-André Jolly covered 180 institutional clients at Citi across Macro Credit Derivatives, IG Credit, and Short Term Credit Sales (a16z Speedrun portal). COO Spencer Secord spent 6 years across Cross Asset, Fixed Income, and Convertible Sales desks at Citi (a16z Speedrun portal). [Inferred]: Initial distribution is likely founder-led sales leveraging Jolly's and Secord's institutional relationships from Citi.

## Defensibility

- **Domain-specific AI models:** The company claims AI performance 60%+ above leading LLMs on financial tasks and 30x faster execution (company description). [Inferred]: If validated, this suggests fine-tuned or custom models trained on financial domain data, creating a potential data/model moat that improves with each institutional deployment.
- **Compliance certifications:** SOC II and ISO 27001 certifications (sellara.io) create a baseline trust barrier. [Inferred]: These certifications take months and significant investment to obtain, creating a speed advantage over new entrants.
- **Switching costs:** [Inferred]: Once AI agents are configured and integrated into a financial institution's existing systems (Bloomberg, Outlook, risk systems), switching costs grow as workflows become dependent on the tooling and institutional knowledge embedded in configuration.

No defensibility signals from network effects, patents, or regulatory barriers were found in public sources.

**Market structure:** [Inferred]: Incumbents like FIS and Bloomberg could build AI workflow automation but face business model conflict — their revenue comes from large, multi-year platform contracts with long implementation cycles. A "deploy in weeks" AI agent approach cannibalizes their professional services revenue and challenges their sales model. Additionally, incumbents' compliance review cycles for AI-powered features in regulated environments may slow their response.

**Commoditization risk:** General-purpose AI agent frameworks (LangChain, CrewAI) lower the barrier to building workflow agents. Beam AI already operates in adjacent BFSI automation. Large consulting firms (Accenture, Deloitte) build custom AI solutions for banks. [Inferred]: The moat depends on whether Sellara's claimed 60%+ performance advantage reflects proprietary model training on financial data vs. prompt engineering on commodity models — the former is defensible, the latter is easily replicated.

## Market & Traction

**Traction signals:**
- Backed by a16z Speedrun (sellara.io). a16z Speedrun invests $500K for 10% in a SAFE, plus $500K in the next round within 18 months, plus up to $5M in credits including AI compute (a16z.com).
- SOC II and ISO 27001 certified (sellara.io) — unusual for a pre-seed company and signals enterprise customer requirements.
- Company Twitter/X: @SellaraHQ (company_data). WebFetch returned HTTP 402; follower count not retrievable.
- Company LinkedIn: https://www.linkedin.com/company/sellara/ (company_data). Follower count not retrievable via search.
- No Product Hunt launch found.
- No press coverage in named publications found.
- No public user counts, revenue figures, or customer names found.
- No Discord or Slack community found.
- No app store or Chrome Web Store presence found.
- No job postings found on YC or other platforms.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Sellara |
|-----------|---------|-------------|-------------------------------|
| **Beam AI** | $1.35M (Crunchbase) | ~$4.5M (Getlatka, Jun 2025) | Horizontal BFSI back-office agents; broader scope but less trading-operations specialization |
| **Blueflame AI** | $5M Series A (Crunchbase, Jun 2024) | Revenue unknown | Targets investment research and deal flow for PE/hedge funds; decision-support focus vs. Sellara's operational-workflow focus |
| **Derivative Path** | Revenue unknown | Revenue unknown | Deterministic SaaS platform for derivatives operations; rule-based vs. Sellara's AI-agent approach |
| **SigTech** | Revenue unknown | Revenue unknown | LLM-powered portfolio analytics for hedge funds/asset managers; analytics focus vs. Sellara's workflow automation (sigtech.com) |

**Why now:**
- Large language models crossed a capability threshold in 2023–2025 enabling reliable automation of semi-structured financial document processing and multi-step workflows that previously required human judgment (Microsoft Industry Blog, Dec 2025).
- 44% of finance teams projected to use agentic AI in 2026, a 600%+ increase (Neurons Lab, 2026 via search snippet).
- A Forrester study found one financial services firm already has 60 agentic AI agents in production with plans for 200 more by 2026 (rtslabs.com via search snippet).
- [Inferred]: Post-2023 LLM advances made it feasible to automate complex, judgment-heavy financial workflows (reconciliations, compliance) that were previously inaccessible to rule-based RPA, opening a market gap for AI-native tools like Sellara.

## Founders & Team

**Charles-André Jolly** — Co-founder & CEO
- Ex-Citi: covered 180 institutional clients across Macro Credit Derivatives, Investment Grade Credit, and Short Term Credit Sales (a16z Speedrun portal). LinkedIn headline: "Stealth Founder | Ex-Citi, CFR" (LinkedIn). Previously Sales & Trading Summer Analyst at Citi Impact Fund covering Repo and Equity Derivatives Trading (The Org, LinkedIn via search snippet).
- Capital Strategist at ni2o (The Org). Co-Founder & Advisor at Principally LLC (LinkedIn via search snippet).
- Council on Foreign Relations Young Professional Briefing Series member (LinkedIn via search snippet).
- Previous: Summer Analyst at Siebert Williams Shank and Armonia; Marketing Consultant at Gaia Herbs (LinkedIn via search snippet).
- Twitter/X: No public account found under his name.
- LinkedIn: linkedin.com/in/charlesjolly (confirmed).
- GitHub: No public repos found.

**Ahmad Roumie** — Co-founder & CTO
- Education: BE Mechanical Engineering, American University of Beirut (2014–2018); MSc Robotics, Systems and Control, ETH Zurich (2018–2020) with master's thesis at Autonomous Systems Lab under Prof. Roland Siegwart (No Cap Blog, ContactOut via search snippet).
- Previously: Founder of Rex.fit / CTO at BabylonAI (YC W23) — nutrition tracking automation startup (YC company page, Crunchbase). Prior: GE Inspection Robotics / Waygate Technology, AI Retailer Systems, ETH Juniors/FRANKE (No Cap Blog).
- IEEE published author (IEEE Xplore).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/ahmad-roumie (confirmed).
- GitHub: github.com/aroumie1997 — 17 public repos including visual odometry pipeline for ETHZ coursework (GitHub). Star counts not retrievable.

**Spencer Secord** — Co-founder & COO
- Georgetown University (Georgetown Athletics). Ex-Citi: 6 years across Cross Asset, Fixed Income, and Convertible Sales desks (a16z Speedrun portal). Built workflow automations and collaborated with IT, middle office, and engineering teams to integrate functionalities into core risk systems (a16z Speedrun portal).
- Twitter/X: @SpencerSecord (X.com via search). Follower count not retrievable.
- LinkedIn: linkedin.com/in/spencer-secord-4b6705149, 335 connections (LinkedIn via search snippet).
- GitHub: No public repos found.

**Co-founder relationship:** Charles-André Jolly and Spencer Secord both worked at Citi — Jolly in Macro Credit Sales and Secord across Cross Asset/Fixed Income/Convertible Sales desks (a16z Speedrun portal). [Inferred]: Overlapping tenure at Citi likely provided the basis for their co-founder relationship. No shared-employer overlap found between Roumie (ETH Zurich/BabylonAI background) and the other two founders.

**Founder-market fit:** Two of three founders (Jolly and Secord) spent years on institutional trading desks at Citi, giving them firsthand experience with the manual workflows Sellara targets and established relationships with the institutional buyers they sell to. Jolly personally covered 180 institutional clients (a16z Speedrun portal). Secord specifically built workflow automations at Citi integrated into core risk systems (a16z Speedrun portal). Roumie brings deep AI/ML engineering expertise (ETH Zurich robotics MSc, YC W23 AI startup CTO, IEEE publications) as the technical co-founder. No advisors, board members, or notable angel investors were identified beyond the a16z Speedrun backing.

## Key Risks

**1. Accelerator/batch ambiguity:** The company is listed with an a16z Speedrun URL (company_data), not a Y Combinator URL, and the Speedrun page returned HTTP 404 at time of research. No YC listing was found via ycombinator.com search. The specific batch affiliation and current program status could not be independently verified.

**2. Performance claims lack third-party validation:** The claim that Sellara's AI "outperforms leading LLMs by 60%+ and runs 30x faster" (company description) has no published benchmark, peer review, or third-party audit. Financial institutions conduct rigorous model validation before production deployment; if this claim cannot be substantiated during due diligence, it undermines the core differentiation.

**3. Regulatory and compliance burden in financial services:** Selling AI agents into regulated financial institutions requires navigating firm-specific model risk management frameworks (SR 11-7/OCC 2011-12 in the US), information security review processes, and vendor onboarding cycles that commonly exceed 6–12 months. SOC II and ISO 27001 certifications (sellara.io) help but do not eliminate this friction. [Inferred]: This creates a long sales cycle risk for a capital-constrained startup.

**4. CTO domain pivot risk:** Ahmad Roumie's background is in robotics, computer vision, and health-tech (Rex.fit/BabylonAI at YC W23 — nutrition tracking, No Cap Blog). His transition to building AI for institutional trading and financial operations represents a significant domain shift. [Inferred]: While his ML/AI engineering skills transfer, the specific requirements of financial data pipelines, regulatory constraints, and trading system integrations may require domain learning or additional hires.

**5. Beam AI competitive pressure:** Beam AI operates in directly adjacent territory (AI agents for BFSI back-office), is headquartered in NYC, has reported ~$4.5M revenue (Getlatka, Jun 2025), 57 employees (Crunchbase), and was selected for Accenture's 2026 FinTech Innovation Lab (beam.ai). This represents a more resourced competitor in the same geography targeting overlapping buyers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI trading platform market: $11.26B (2024), projected $69.95B by 2034, CAGR 15.91% (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | Backed by a16z Speedrun (sellara.io); SOC II and ISO 27001 certified (sellara.io). No public user counts, revenue, or named customers found. |
| Revenue Signal | No public data found |
| Founders | Charles-André Jolly (CEO): Ex-Citi Macro Credit Sales, 180 institutional clients, CFR member. Ahmad Roumie (CTO): MSc ETH Zurich Robotics, CTO BabylonAI (YC W23), IEEE author. Spencer Secord (COO): Ex-Citi 6yr Cross Asset/FI/Convertible Sales, Georgetown. |
| Competitors | Beam AI ($1.35M raised, ~$4.5M revenue per Getlatka Jun 2025, horizontal BFSI agents); Blueflame AI ($5M Series A per Crunchbase Jun 2024, revenue unknown, investment research focus); Derivative Path (funding unknown, revenue unknown, deterministic derivatives SaaS); SigTech (funding unknown, revenue unknown, LLM portfolio analytics) |
| Moat Signals | SOC II + ISO 27001 certifications (sellara.io); claimed 60%+ LLM outperformance and 30x speed (company description, unvalidated) |
| Risk Factors | Unverified performance claims, long enterprise sales cycles in regulated finance, Beam AI competitive overlap |
| Founder Reach | Charles-André Jolly: Twitter not found, LinkedIn confirmed; Ahmad Roumie: Twitter not found, LinkedIn confirmed, GitHub 17 repos (github.com/aroumie1997); Spencer Secord: Twitter @SpencerSecord (count not retrievable), LinkedIn 335 connections |
| Distribution Signals | No public data found |
| Emails | cj@sellara.io, ar@sellara.io, ss@sellara.io (a16z Speedrun portal) |
