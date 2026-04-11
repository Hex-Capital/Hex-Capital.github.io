# Panorama

> Enterprise AI workflow enablement built by an ex-Cash App, Lyft, Google, and MIT PhD team

| Field | Value |
|-------|-------|
| Website | https://withpanorama.com |
| YC Page | https://speedrun.a16z.com/companies/panorama |
| Batch | a16z Speedrun 006 (LinkedIn company page; not confirmed as a Y Combinator batch company — no YC listing found) |
| Industry | AI, B2B / |
| Team Size | 4 |
| Location | San Francisco, California, United States of America |
| Tags | AI, B2B |
| YC Partner | Not listed (a16z Speedrun page returned 404 at time of research) |
| Emails | founders@withpanorama.com (company website), jingwei@withpanorama.com, jackie@withpanorama.com (a16z Speedrun portal) |

**Note on batch affiliation:** The provided "YC Page" URL points to a16z Speedrun, not Y Combinator. No listing for Panorama or its legal entity Telescopic Inc was found in YC W26 batch databases (The VC Corner; Extruct AI). The LinkedIn company page references "a16z speedrun 006" (LinkedIn).

## The Idea

**Problem:** Knowledge workers spend significant time on repetitive, structured tasks — filling out recurring documents, converting planning docs into tickets, tracking team patterns — without realizing how much could be automated. Existing automation tools (Zapier, n8n, Make) require users to identify automatable workflows themselves and manually configure them. [Inferred]: The target customer segment is mid-size to enterprise teams using collaboration tools like Slack, Notion, and Linear.

**Approach:** Panorama analyzes workplace data (e.g., Slack messages, Notion documents, project management tools) over a minimum of 1–2 weeks to surface hidden repetitive patterns, then recommends and executes automations (Product Hunt, April 2026). Specific examples from the product page: auto-drafting a recurring Notion document filled out every Friday; converting a planning doc into Linear tickets automatically; surfacing team burnout signals and workload imbalances (Product Hunt, April 2026). The company describes this as a "TikTok-like recommendation engine" for workflows (a16z Speedrun portal).

**Differentiation:** Unlike Zapier, n8n, or Make — which require users to manually define triggers and actions — Panorama observes existing work patterns and proactively recommends automations (Product Hunt, April 2026). Unlike Moveworks or Aisera (enterprise IT help desk automation), Panorama targets cross-functional workflow discovery rather than IT service management. The LinkedIn company description positions it as converting "plain English into powerful workflows" that "works across your stack" (LinkedIn company page).

**Business Model:** No public pricing page found. A promotional code "PH1MONTH" offering "your first month off" indicates a subscription-based SaaS model (Product Hunt, April 2026). [Inferred]: Most likely monetization is per-seat or per-team monthly/annual subscription, given the B2B SaaS positioning and team-level product surface.

**TAM/SAM:** The global workflow automation market was valued at $23.77 billion in 2025, projected to reach $40.77 billion by 2031 at a CAGR of 9.41% (Mordor Intelligence, 2025 via search snippet). The AI orchestration platform market was $11.1 billion in 2025, projected to reach $82.15 billion by 2035 at 22.16% CAGR (Precedence Research, 2025 via search snippet). The AI productivity tools market was $8.8 billion in 2024, projected to reach $36.4 billion by 2033 at 15.9% CAGR (Grand View Research, 2024 via search snippet). No SAM estimate specific to AI-driven workflow discovery was found.

**GTM / Distribution:** Product Hunt launch on April 5, 2026 achieved #2 Product of the Day with 363 upvotes and 60 comments (Product Hunt). The company has a web app at compose.withpanorama.com (company website). [Inferred]: Initial distribution is product-led growth via the Product Hunt launch and free trial (implied by promo code), likely expanding to direct sales for enterprise accounts given the SOC2 and CASA certifications.

## Defensibility

- **Data moat potential:** The product learns from a team's historical workplace data over time. [Inferred]: Longer usage generates more tailored recommendations, creating switching costs — but this moat requires sustained engagement to materialize.
- **Security certifications:** SOC2 Type I certification and CASA Tier 3 security rating achieved (company website). These are table-stakes for enterprise sales but represent early investment for a pre-seed company.
- **No patents or open-source repos found:** The GitHub organization (panorama-dev) has no public repositories (GitHub). No patent filings were found.

**Market structure:** [Inferred]: Zapier and similar tools are structured as general-purpose automation platforms where users build their own workflows. Panorama's approach — observing and recommending workflows — requires deep integration with workplace data and an ML-driven recommendation engine, which represents a different product architecture. However, incumbents like Microsoft (Copilot Studio) and Google (AgentSpace) could incorporate similar observational features into their existing ecosystems. No structural barrier identified at this stage beyond product design philosophy.

**Commoditization risk:** The core concept of observing work patterns and suggesting automations is replicable. Large incumbents (Microsoft, Google, Slack/Salesforce) have access to the same workplace data through their own platforms. [Inferred]: Execution speed and recommendation quality are the near-term differentiators, not structural barriers.

## Market & Traction

**Traction signals:**
- Product Hunt: #2 Product of the Day, 363 upvotes, 60 comments, 482 followers (Product Hunt, April 5, 2026)
- LinkedIn company page: 109 followers, 6 employees listed (LinkedIn, as of April 2026)
- Twitter/X: @withpanorama — handle exists; follower count not retrievable due to JavaScript rendering (X.com)
- SOC2 Type I and CASA Tier 3 certifications (company website)
- Legal entity: Telescopic Inc (company website)
- GitHub organization: No public repositories (GitHub)
- No public revenue, user count, or customer figures found.
- No press coverage in named publications found beyond Product Hunt.
- No Discord or Slack community found.
- No app store listing or Chrome extension found.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Panorama |
|---|---|---|---|
| **Zapier** | $2.68M (largely bootstrapped), $5B valuation (secondary sales, 2026 via search snippet) | $310M revenue in 2024 (Getlatka) | General-purpose user-configured automation across 7,000+ app integrations; does not auto-discover workflows |
| **n8n** | $254M total, $2.5B valuation (Series C, Oct 2025; Ventureburn) | $40M ARR as of July 2025 (Getlatka) | Open-source, developer-first workflow builder; AI-assisted but user-initiated; strong self-hosted option |
| **Workato** | $421M total (Tracxn) | $150M ARR in 2023 (Sacra) | Enterprise integration platform with IT governance; recipe-based automation, not observational |
| **Moveworks** (acquired by ServiceNow, $2.85B, Mar 2025; TechCrunch) | $315M total pre-acquisition (Tracxn) | $100M+ ARR in late 2024 (Contrary Research via search snippet) | IT service desk automation; acquired by ServiceNow in Dec 2025 |

**Why now:** [Inferred]: The catalyst is the maturation of large language models (2023–2025) enabling natural-language understanding of unstructured workplace data (Slack messages, docs, planning artifacts) at commercially viable inference costs. Prior workflow automation required structured triggers and explicit user configuration. LLM-based pattern recognition allows observational workflow discovery that was not technically feasible at this quality level before 2023.

## Founders & Team

**Jingwei Hao** — Founder & CEO
- Pursuing Master's degrees at Carnegie Mellon University and Institute of Computing Technology, Chinese Academy of Sciences (Clay.earth via search snippet)
- Previously: Infrastructure engineer at Cash App (owned key mobile/server infrastructure stack, managed migration to Treehouse open-source framework across 20+ engineering teams); progressed from Senior Engineer to Staff Engineer to Tech Lead Manager at Lyft (Mobile Infra, Android frameworks, mobile observability, Envoy Mobile contributor); also worked at Twitter and Google (a16z Speedrun portal; Clay.earth via search snippet; Lyft Mobile Podcast)
- Featured on Lyft Mobile Podcast episode "Becoming Leaders" (Lyft Mobile Podcast)
- Twitter/X: @haojingwei — follower count not retrievable (X.com)
- LinkedIn: linkedin.com/in/jingwei-hao (LinkedIn)
- GitHub: github.com/jingwei99 — 0 public repos, 18 followers; pinned Envoy Mobile project (567 stars, 84 forks; this is a Lyft open-source project, not personal); Arctic Code Vault Contributor achievement (GitHub)

**Jaclyn Lunger** — Cofounder & CTO
- PhD in machine learning for materials science, MIT; BS Materials Science and Engineering, Cornell University (2017) (MIT Gomez-Bombarelli Lab; Google Scholar)
- DOE Office of Science Graduate Student Research (SCGSR) awardee; 6 months at SLAC National Accelerator Laboratory (MIT lab page via search snippet)
- Built and deployed high-throughput virtual screening pipeline, generated the largest existing dataset of 10,000+ adsorption energies on perovskite surfaces at time of publication (MIT lab page via search snippet)
- Founding Scientist (first employee) at Lila Sciences — built and deployed materials discovery engine leading to dozens of product candidate materials. Lila Sciences subsequently raised $350M Series A at $1.3B+ valuation with Nvidia backing (Yahoo Finance, Oct 2025; Bloomberg, Sep 2025)
- LinkedIn headline: "Building something new" (LinkedIn)
- Twitter/X: No public account found
- GitHub: No public account found
- Google Scholar profile exists with published research (Google Scholar)

**Additional team members** (from Product Hunt and LinkedIn):
- **Oleksandr Ladyzhenskyi** — listed as "Building" on Product Hunt; employee on LinkedIn (Product Hunt; LinkedIn)
- **Maryam Alaeifard** — Product Designer (Product Hunt; LinkedIn)
- **Eunice Tan** — Engineer at Panorama (Product Hunt)
- **Joel Banta** — listed as employee on LinkedIn (LinkedIn)

LinkedIn lists 6 employees vs. the stated team size of 4, suggesting recent growth (LinkedIn).

**Co-founder relationship:** Jingwei Hao's background is primarily at Cash App, Lyft, Twitter, and Google (infrastructure engineering), while Jaclyn Lunger's is at MIT and Lila Sciences (ML for materials science). No shared employer or university overlap is visible from Phase 3 research.

**Founder-market fit:** Jingwei Hao's experience leading infrastructure and mobile platform teams across Cash App, Lyft, Twitter, and Google provides direct exposure to the cross-team coordination and repetitive workflow problems Panorama targets (Clay.earth via search snippet). Jaclyn Lunger's PhD in ML and experience building ML pipelines at MIT and production ML systems at Lila Sciences provides the technical ML foundation for Panorama's recommendation engine (MIT lab page; a16z Speedrun portal). No advisors, board members, or notable investors identified beyond a16z Speedrun participation.

## Key Risks

**Name collision:** "Panorama" is a common word shared with Panorama Education (YC S13, 15M+ students, well-funded EdTech company), AWS Panorama (computer vision platform), Panorama Software, and multiple other entities (YC directory; G2). This creates SEO and brand confusion challenges, evidenced by search results returning unrelated companies for most queries.

**Incumbent platform integration risk:** Microsoft Copilot Studio, Google AgentSpace, and Slack/Salesforce each have native access to the workplace data Panorama must integrate with via APIs (Vellum AI blog, 2026 via search snippet). If these incumbents add observational workflow discovery features, Panorama's data access advantage erodes. ServiceNow's $2.85B acquisition of Moveworks (TechCrunch, Mar 2025) signals enterprise appetite for AI workflow automation, and ServiceNow could extend Moveworks beyond IT into general workflows.

**Cold-start dependency:** Panorama requires 1–2 weeks of workplace data to generate meaningful recommendations (Product Hunt, April 2026). This creates a delayed time-to-value problem during evaluation periods, which may reduce conversion from trial to paid in self-serve GTM.

**Accelerator affiliation uncertainty:** The company's presence on a16z Speedrun is confirmed (LinkedIn), but no Y Combinator batch affiliation was found despite the data suggesting otherwise. This ambiguity may affect due diligence assumptions about funding terms, network access, and signal value.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Workflow automation market: $23.77B in 2025, 9.41% CAGR to $40.77B by 2031 (Mordor Intelligence, 2025 via search snippet); AI productivity tools market: $8.8B in 2024 (Grand View Research, 2024 via search snippet) |
| SAM | No public data found |
| Traction | Product Hunt #2 of Day, 363 upvotes, 60 comments (Product Hunt, April 5, 2026); 109 LinkedIn followers (LinkedIn, April 2026); SOC2 Type I certified (company website) |
| Revenue Signal | No public data found (subscription model implied by "PH1MONTH" promo code on Product Hunt, April 2026) |
| Founders | Jingwei Hao (CEO): Staff Eng → TLM at Lyft, infra eng at Cash App/Twitter/Google, CMU MS. Jaclyn Lunger (CTO): MIT PhD ML, first employee at Lila Sciences ($1.3B valuation) |
| Competitors | Zapier ($2.68M raised, $310M revenue 2024, user-configured automation — Getlatka); n8n ($254M raised, $40M ARR July 2025, open-source developer-first — Getlatka/Ventureburn); Workato ($421M raised, $150M ARR 2023, enterprise integration — Tracxn/Sacra); Moveworks ($315M raised pre-acquisition, $100M+ ARR, acquired by ServiceNow $2.85B — TechCrunch/Contrary Research) |
| Moat Signals | No public data found |
| Risk Factors | Name collision with multiple established "Panorama" entities, incumbent platform integration risk (Microsoft/Google/Slack), cold-start data dependency |
| Founder Reach | Jingwei Hao: Twitter @haojingwei (count not retrievable), LinkedIn in/jingwei-hao, GitHub 18 followers/0 public repos. Jaclyn Lunger: Twitter not found, LinkedIn in/jaclynlunger, GitHub not found |
| Distribution Signals | Product Hunt #2 of Day, 363 upvotes (Product Hunt, April 5, 2026) |
| Emails | founders@withpanorama.com (company website), jingwei@withpanorama.com, jackie@withpanorama.com (a16z Speedrun portal) |
