# Salesgraph

> the context layer for fast moving sales teams

| Field | Value |
|-------|-------|
| Website | https://www.salesgraph.com/ |
| YC Page | https://www.ycombinator.com/companies/salesgraph |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Sales |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Sales |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

**Problem:** Sales reps in mid-market and enterprise B2B cycles must manually synthesize context from CRM records, call transcripts, enrichment tools (ZoomInfo, Clearbit), and internal Slack threads before every buyer interaction. The company's website states reps need to know "who the buyer is, what triggered them to take the first call, what their pain points are, how much value this new tool is bringing, [and] are there any technical blockers" (salesgraph.com). Today this is stitched together ad hoc from Salesforce, Gong recordings, and spreadsheets; the YC description notes that "sellers are CEOs of their deals" yet lack a unified context layer (YC page).

**Approach:** Salesgraph ingests data from existing sales stack tools — CRM (Salesforce, HubSpot), conversation intelligence (Gong, Clari), enrichment (ZoomInfo, Clearbit, 6sense), engagement (Salesloft, Outreach), and communications (Slack, Zoom, LinkedIn) — and synthesizes it into proactive pre-call briefs, deal scores, stakeholder maps, and automated three-page business case documents (salesgraph.com). The product provides zero-setup discovery, pipeline health analysis, and post-call next-step recommendations (salesgraph.com).

**Differentiation:** Gong and Clari focus on conversation recording and revenue forecasting, respectively; they surface call analytics but do not generate buyer-ready business cases. Aligned ($14M raised, PR Newswire Jan 2025) provides digital deal rooms for buyer-seller collaboration but does not synthesize pre-call intelligence from the rep's full toolchain. Accord ($10M Series A, TechCrunch Jan 2023) focuses on mutual action plans and deal execution playbooks. Salesgraph's stated differentiator is combining context aggregation with automated business case generation — a capability the founders prototyped at Mintlify, where it was used to close enterprise deals at higher ACV (YC page).

**Business Model:** No pricing page or tier information is publicly available (salesgraph.com). The site offers demo booking and early access sign-up. [Inferred]: Most likely monetization path is per-seat SaaS subscription targeting sales teams, given the B2B SaaS category and mid-market/enterprise positioning.

**TAM/SAM:** The global sales intelligence market was valued at approximately $4.85B in 2025 and is projected to reach $10.25B by 2032 at 11.3% CAGR (Fortune Business Insights, 2025 via search snippet). The sales enablement platform market was $5.04B in 2026, forecast to reach $12.35B by 2031 (Mordor Intelligence via search snippet). [Inferred]: The serviceable segment — deal-stage context and business case generation for mid-market and enterprise SaaS sales teams — is a subset of the broader sales intelligence TAM; no specific SAM estimate was found.

**GTM / Distribution:** The website lists integrations with Salesforce, HubSpot, Gong, Clari, ZoomInfo, Clearbit, 6sense, Salesloft, and Outreach (salesgraph.com). Target verticals listed are Dev Tools & SaaS and Cybersecurity (salesgraph.com). A free GTM Audit tool is offered as a lead-generation mechanism (salesgraph.com). [Inferred]: Initial distribution is likely product-led via the free audit tool and demo requests, with direct outreach to mid-market sales teams in the founders' network from Mintlify.

## Defensibility

No defensibility signals found in public sources at this stage.

- [Inferred]: A potential data moat could develop as the product aggregates deal context across CRM, calls, and enrichment sources — the more deals processed, the better the system can learn patterns of successful business cases. This is unproven at this stage.
- [Inferred]: Integration depth across 10+ sales tools creates switching costs once embedded in a team's workflow, but this requires meaningful adoption first.

**Market structure:** Gong ($584M raised, $300M+ ARR per TechCrunch Mar 2025) and Clari ($520M raised, merged with Salesloft Dec 2025 per search snippet) are the primary incumbents in sales intelligence. [Inferred]: These incumbents are optimized for conversation analytics and revenue forecasting respectively; building a cross-tool context aggregation and business case generation layer would require them to integrate deeply with competitors' tools (e.g., Gong integrating Clari data and vice versa), creating a business model conflict. However, either could build a comparable feature natively within their own data silo.

**Commoditization risk:** The core capabilities — data aggregation from APIs, LLM-based summarization, and document generation — use generally available technologies. [Inferred]: Any well-resourced sales tech company with API access to the same tools could replicate the technical approach; the barrier is execution speed and workflow-specific tuning rather than proprietary technology.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator Spring 2026 batch (YC page)
- Company Twitter handle: @salesgraph (YC page); follower count not retrievable
- Ricardo Nunez Twitter: @ricardonunez_io (YC page); follower count not retrievable
- Ruhan Ponnada Twitter: @RuhanPonnada (YC page); follower count not retrievable
- No Product Hunt launch found
- No public user counts, revenue, or customer logos found
- No Chrome Web Store extension, mobile app, or download counts found
- No Discord or Slack community found
- No active job postings found (company is not hiring per YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Salesgraph |
|---|---|---|---|
| Gong | $584M (Crunchbase via search snippet) | $300M+ ARR (TechCrunch, Mar 2025) | Conversation intelligence and call analytics platform; does not generate buyer-facing business cases |
| Clari (merged with Salesloft, Dec 2025) | $520M (PitchBook via search snippet) | ~$158.5M revenue (GetLatka, 2024) | Revenue forecasting and pipeline inspection; focused on forecast accuracy, not deal-level context synthesis |
| People.ai | $198M (Tracxn via search snippet) | Revenue unknown | Automated activity capture and revenue action orchestration; 2025 Gartner Magic Quadrant Visionary; does not produce business case documents |
| Aligned | $14M (PR Newswire, Jan 2025) | Revenue unknown; tripled revenue in 2024; 30K+ users (PR Newswire, Jan 2025) | AI-powered digital deal rooms for buyer-seller collaboration; buyer-facing vs. Salesgraph's rep-facing approach |
| Accord | $10M Series A (TechCrunch, Jan 2023) | Revenue unknown | Mutual action plans and deal execution playbooks; focuses on process orchestration rather than context aggregation |

**Why now:** Gartner projects that by 2027, 95% of seller research workflows will begin with AI (Gartner via search snippet). Bain & Company reported in 2025 that early AI deployments in sales boosted win rates by more than 30% (Bain via search snippet). Gartner also predicts ~30% of B2B sales cycles will be managed through digital sales rooms by 2026 (Gartner via search snippet). [Inferred]: The enabling change is the maturation of LLMs capable of synthesizing unstructured data (call transcripts, Slack threads, news articles) into structured business cases — a task that was not feasible with prior-generation NLP. The founders' Mintlify prototype predated broadly available foundation models and required significant manual curation; current models reduce that overhead.

## Founders & Team

**Ricardo Nunez** — Co-founder
- Among the first 10 employees at Mintlify, where he worked on sales/engineering (YC page, RocketReach via search snippet)
- At Mintlify, co-built the business case generator prototype that became the basis for Salesgraph (YC page)
- Education: No public data found
- Twitter/X: @ricardonunez_io (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/ricardonunez-01 — headline references Mintlify (LinkedIn via search snippet)
- GitHub: github.com/ricardonunez-io — 28 public repos; top pinned repo "servercomponents" (React Server Components resource) with 53 stars, "queue-benchmarks" (Bun vs Go) with 26 stars (GitHub)

**Ruhan Ponnada** — Co-founder
- BS Computer Science, Georgia Institute of Technology, 2020–2023 (LinkedIn via search snippet)
- Product Manager at Microsoft Mesh (LinkedIn via search snippet)
- Founding Solutions Engineer at Mintlify; among first 10 employees (The Org, LinkedIn via search snippet)
- Previously built Mabbu, an auto-diagramming and documentation tool for developers (X.com/RuhanPonnada, Apr 2023)
- Also associated with Pioneer (RocketReach via search snippet)
- Twitter/X: @RuhanPonnada (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/ruhanponnada (LinkedIn via search snippet)
- Medium: medium.com/@ruponnada (Medium via search snippet)
- GitHub: No confirmed public account found

**Co-founder relationship:** Both founders were among the first 10 employees at Mintlify, where they collaborated on the business case generator that became Salesgraph's core product concept (YC page). Their shared tenure at Mintlify is the documented basis of their working relationship.

**Founder-market fit:** Both founders experienced the deal context problem firsthand at Mintlify, where they built an internal tool that combined call recordings, news triggers, ROI calculators, and case studies into business case documents for enterprise sales (YC page). Ruhan brings a product management background (Microsoft) and CS degree (Georgia Tech), while Ricardo brings full-stack engineering and sales experience from Mintlify. Their prototype at Mintlify reportedly contributed to closing enterprise deals at higher ACV (YC page).

## Key Risks

**Integration dependency:** The product's value proposition requires maintained API integrations with 10+ third-party tools (Salesforce, HubSpot, Gong, Clari, ZoomInfo, Clearbit, 6sense, Salesloft, Outreach, Slack, Zoom, LinkedIn) (salesgraph.com). Any API changes, rate limits, or access restrictions from these providers could degrade core functionality. A two-person team maintaining this breadth of integrations is an engineering capacity constraint.

**Incumbent feature absorption:** Gong ($300M+ ARR, TechCrunch Mar 2025) has been expanding beyond conversation intelligence into deal execution and pipeline analytics. Clari merged with Salesloft in December 2025 (search snippet), combining revenue intelligence with sales engagement. Either combined platform could add pre-call briefing and business case generation as a feature, leveraging their existing install base and data access.

**Name collision risk:** "Salesgraph" shares naming similarity with "Sales Graphics" (@SalesGraphics on Twitter), an established presentation design agency. This could create brand confusion in search results and social media discovery.

**Single-use-case entry point:** The core product — pre-call notes and business case generation — addresses a real but narrow workflow moment. [Inferred]: Expansion into broader deal management or revenue intelligence would be required to justify enterprise-grade pricing, but would put the product in more direct competition with well-funded incumbents.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$4.85B in 2025, projected $10.25B by 2032 at 11.3% CAGR (Fortune Business Insights, 2025 via search snippet) |
| SAM | No public data found |
| Traction | Y Combinator Spring 2026 batch (YC page); no other public traction signals found |
| Revenue Signal | No public data found |
| Founders | Ricardo Nunez (Co-founder): early employee at Mintlify, full-stack engineering + sales. Ruhan Ponnada (Co-founder): BS CS Georgia Tech, PM at Microsoft Mesh, Founding Solutions Engineer at Mintlify. |
| Competitors | Gong ($584M raised, $300M+ ARR, conversation intelligence); Clari ($520M raised, ~$158.5M revenue, revenue forecasting, merged with Salesloft); People.ai ($198M raised, revenue unknown, activity capture); Aligned ($14M raised, revenue unknown, digital deal rooms); Accord ($10M raised, revenue unknown, deal execution playbooks) |
| Moat Signals | No public data found |
| Risk Factors | Integration dependency across 10+ third-party APIs, incumbent feature absorption (Gong/Clari-Salesloft expansion), name collision with Sales Graphics |
| Founder Reach | Ricardo Nunez: Twitter @ricardonunez_io (count not retrievable), LinkedIn linkedin.com/in/ricardonunez-01, GitHub 79 stars total. Ruhan Ponnada: Twitter @RuhanPonnada (count not retrievable), LinkedIn linkedin.com/in/ruhanponnada, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
