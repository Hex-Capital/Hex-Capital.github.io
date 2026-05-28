# Sherpa

> Turn more website visitors into customers

| Field | Value |
|-------|-------|
| Website | https://www.withsherpa.ai/ |
| YC Page | https://www.ycombinator.com/companies/sherpa |
| Batch | Spring 2026 (YC X26/P26) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, B2B, Marketing, AI |
| YC Partner | Andrew Miklas |
| Emails | hello@withsherpa.ai |

## The Idea

- **Problem:** Website operators lose visitors at conversion points and must rely on designers, developers, and analysts to manually run A/B tests, a slow cycle that limits experiment volume (YC launch page, 2026).
- **Approach:** A single line of code analyzes visitor behavior, auto-designs on-brand page variants, runs A/B tests, and ships winners, with one-click approval by the operator (withsherpa.ai; YC launch page, 2026).
- **Differentiation:** vs. VWO/Optimizely/AB Tasty (manual experimentation platforms requiring users to author variants), Sherpa generates and tests variants autonomously (Sherpa landing page; Optimizely/VWO comparison pages, 2026); vs. Statsig (developer-oriented feature flag and experiment infrastructure), Sherpa targets marketing/growth users who don't need to write code (Statsig.com, 2026).
- **Business Model:** No pricing tier disclosed on withsherpa.ai or YC page (withsherpa.ai, 2026). [Inferred]: SaaS subscription tied to monthly traffic volume, consistent with the website-installed JS snippet model.
- **TAM/SAM:** Conversion Rate Optimization software market valued at $1.7B in 2025, projected to $5.0B by 2035 at 11.6% CAGR (Future Market Insights, 2025); A/B testing software market $1.5B in 2025 → $4.82B by 2036 at 11.2% CAGR (Future Market Insights, 2025).
- **GTM / Distribution:** Free 30-second website audit on landing page used as top-of-funnel acquisition hook (withsherpa.ai, 2026); [Inferred]: founder-led outbound and personal network distribution via Lindy alumni, given customer logos include Lindy.

## Defensibility

- **Moat today:** Proprietary session dataset — "learning from 7,338,896+ sessions" displayed on landing page (withsherpa.ai, 2026); customer case study claims +30% conversion lift at Lindy and 2.5x demo bookings at Gauge (YC launch page, 2026).
- **Future moat:** [Inferred]: A cross-customer experiment dataset could train models that predict winning variants before deployment, compounding over time; unproven now because session volume is still small relative to incumbents.
- **Market structure:** [Inferred]: Incumbents (VWO, Optimizely, AB Tasty) sell tooling to in-house experimentation teams and price per-seat, so a fully autonomous agent that eliminates the designer/developer/analyst loop cannibalizes their seat-based revenue, creating channel/pricing conflict.
- **Commoditization risk:** VWO already ships GPT-based copy generation features (VWO blog, 2025), Kameleoon markets "AI for A/B Testing" (kameleoon.com, 2026), and Optimizely added AI variant generation, meaning the LLM-generated-variant capability itself is not exclusive.

## Market & Traction

- **Traction signals:**
  - 7,338,896+ sessions analyzed (withsherpa.ai landing page, 2026).
  - Customer testimonial: Lindy shipped 40 experiments in 30 days, +30% site conversion (YC launch page, 2026).
  - Customer testimonial: Gauge achieved 2.5x higher demo bookings from specific segments (YC launch page, 2026).
  - Named customers: Lindy, Insforge, Gauge (withsherpa.ai, 2026).
  - LinkedIn company page exists (linkedin.com/company/withsherpa); follower count not retrievable.
  - Job postings: 0 listed on YC page (YC company page, 2026).
  - Backed by Y Combinator Spring 2026 batch (LinkedIn announcement, Ethan Kinnan, 2026).
- **Competitors:**
  - Statsig (raised $100M Series C May 2025, revenue unknown): developer-first feature flag + experimentation infra; Sherpa differs by targeting non-technical growth users (Crunchbase; Statsig.com, 2025).
  - VWO/Wingify (combined with AB Tasty under Everstone, $100M+ platform formed Jan 2026, revenue unknown): manual experimentation suite; Sherpa differs by autonomously generating variants (TechCrunch, Jan 2026).
  - AB Tasty (combined with VWO under Everstone Jan 2026, 1,000+ brands, total funding ~$50M+ historically): enterprise experimentation + personalization; Sherpa differs by self-running experiments with no designer (TechCrunch, Jan 2026).
  - Kameleoon ($7.8M raised across 2 rounds, $22.1M revenue 2024, 450 customers): A/B testing + personalization; Sherpa differs by full automation of variant creation (Tracxn; GetLatka, 2024).
  - Optimizely (private, revenue unknown, Gartner DXP Leader 2025): full digital experience platform; Sherpa differs in scope (single-purpose autonomous CRO) and target buyer (SMB/growth-stage) (Optimizely.com, 2025).
- **Why now:** [Inferred]: LLM capability now allows generating on-brand HTML/CSS variants reliably enough for production traffic, and academic work (AgentA/B, arXiv 2504.09723, 2025) confirms LLM-driven website experimentation crossed feasibility threshold within the past 12 months.

## Founders & Team

- **Ethan Kinnan (CEO):**
  - Background: Attended University of Washington Foster School of Business (LinkedIn, 2026); first forward-deployed engineer at Lindy where he taught 10,000+ people to build custom agents and held Head of Partnerships role (YC launch page; RocketReach, 2026); has automated roles using AI since GPT-3 API launch (YC launch page, 2026).
  - Twitter/X: @ethan_kinnan (x.com/ethan_kinnan); follower count not retrievable.
  - LinkedIn: "Sherpa (YC X26)" (linkedin.com/in/ethan-kinnan/).
  - GitHub: No public account found.
- **Norbu Sonam (CTO):**
  - Background: BS Computer Science, Rensselaer Polytechnic Institute 2018–2022 (LinkedIn, 2026); shipped AI products at Microsoft (Copilot image generation, Microsoft Designer) per YC launch page; led agent infrastructure and growth engineering at Lindy, ran 50+ growth experiments and "tripled paywall conversion" (YC launch page, 2026).
  - Twitter/X: No public account found.
  - LinkedIn: "Sherpa (YC X26)" (linkedin.com/in/norbusonam/).
  - GitHub: @norbusonam (github.com/norbusonam); top repo star counts not retrievable.
- **Co-founder relationship:** Both worked together at Lindy prior to founding Sherpa — Ethan as forward-deployed engineer/partnerships, Norbu as growth/agent infrastructure engineer (YC launch page, 2026).
- **Founder-market fit:** Norbu directly ran 50+ growth experiments and "tripled paywall conversion" at Lindy, the exact workload Sherpa automates (YC launch page, 2026); Ethan's forward-deployed engineering and partnerships role at Lindy aligns with Sherpa's GTM motion of embedding a JS snippet for SMB growth teams (YC launch page; LinkedIn, 2026).

## Key Risks

- **Incumbent AI feature parity:** VWO ships GPT-3.5-based copy generation (VWO blog, 2025) and Kameleoon markets AI A/B testing (kameleoon.com, 2026), so distribution-advantaged incumbents can layer similar generative-variant features onto existing customer bases.
- **Consolidation in adjacent category:** Everstone combined Wingify/VWO and AB Tasty into a $100M+ platform in Jan 2026 (TechCrunch, Jan 2026), creating a better-resourced competitor that can outspend on R&D and enterprise distribution.
- **Technical feasibility of autonomous variant generation:** Customer-facing claims (15–20% lift in 30 days, +30% Lindy lift) come from a small named customer set (Lindy, Insforge, Gauge) (withsherpa.ai; YC launch page, 2026); generalization to sites outside the founders' network is unproven publicly.
- **Name collision:** Multiple unrelated entities use the "Sherpa" name (MarketingSherpa, Sherpa Global, Sherpa Labs YC company, Sherpa AI at sherpai.us) (search results, 2026), creating SEO and brand-discovery friction.
- **Concentration in founder network customers:** All three named logos (Lindy, Insforge, Gauge) are early-stage YC-adjacent companies (withsherpa.ai, 2026); enterprise or non-network customer evidence is not public.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | CRO software market $1.7B (2025) → $5.0B (2035) at 11.6% CAGR (Future Market Insights, 2025); A/B testing software $1.5B (2025) → $4.82B (2036) at 11.2% CAGR (Future Market Insights, 2025) |
| SAM | No public data found |
| Traction | 7,338,896+ sessions analyzed (withsherpa.ai, 2026); Lindy customer: 40 experiments/30 days, +30% conversion (YC launch, 2026); Gauge customer: 2.5x demo bookings (YC launch, 2026); 3 named logos: Lindy, Insforge, Gauge (withsherpa.ai, 2026); 0 job postings (YC page, 2026) |
| Revenue Signal | No public data found |
| Founders | Ethan Kinnan (CEO): Univ. of Washington Foster, ex-Lindy forward-deployed engineer/Head of Partnerships. Norbu Sonam (CTO): RPI CS 2022, ex-Microsoft (Copilot/Designer), ex-Lindy growth engineering. |
| Competitors | Statsig ($100M raised May 2025, revenue unknown, developer-first experimentation); VWO+AB Tasty (Everstone $100M+ combined Jan 2026, revenue unknown, manual enterprise CRO); Kameleoon ($7.8M raised, $22.1M revenue 2024, A/B + personalization); Optimizely (private, revenue unknown, DXP Leader); AB Tasty (1,000+ brands, enterprise experimentation) |
| Moat Signals | 7.3M+ session dataset on landing page (withsherpa.ai, 2026); founder operating experience at Lindy growth (YC launch, 2026) |
| Risk Factors | Incumbent AI feature parity, VWO+AB Tasty consolidation, customer concentration in YC/founder network |
| Founder Reach | Ethan Kinnan: Twitter @ethan_kinnan (count not retrievable), LinkedIn present (count not retrievable), GitHub not found. Norbu Sonam: Twitter not found, LinkedIn present (count not retrievable), GitHub @norbusonam (stars not retrievable). |
| Distribution Signals | Free 30-second website audit (withsherpa.ai, 2026); YC Launch page published 2026 (ycombinator.com/launches/Q2I); LinkedIn company page (linkedin.com/company/withsherpa, 2026) |
| Emails | hello@withsherpa.ai (withsherpa.ai, 2026) |

Sources:
- [Sherpa YC page](https://www.ycombinator.com/companies/sherpa)
- [Sherpa Launch YC](https://www.ycombinator.com/launches/Q2I-sherpa-turn-more-website-visitors-into-customers)
- [withsherpa.ai](https://www.withsherpa.ai/)
- [Ethan Kinnan LinkedIn](https://www.linkedin.com/in/ethan-kinnan/)
- [Norbu Sonam LinkedIn](https://www.linkedin.com/in/norbusonam/)
- [Norbu Sonam GitHub](https://github.com/norbusonam)
- [Everstone combines Wingify and AB Tasty (TechCrunch)](https://techcrunch.com/2026/01/20/everstone-combines-wingify-and-ab-tasty-for-100m-digital-experience-optimization-platform/)
- [Kameleoon revenue (GetLatka)](https://getlatka.com/companies/kameleoon)
- [Statsig Crunchbase](https://www.crunchbase.com/organization/statsig)
- [A/B Testing Software Market (Future Market Insights)](https://www.futuremarketinsights.com/reports/ab-testing-software-market)
- [CRO Software Market (Future Market Insights)](https://www.futuremarketinsights.com/reports/conversion-rate-optimization-software-market)
- [AgentA/B research (arXiv)](https://arxiv.org/html/2504.09723v2)
