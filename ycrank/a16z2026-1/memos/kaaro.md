# Kaaro

> AI Agents for Railways. ex Toma (a16z), Waterloo, UBC

| Field | Value |
|-------|-------|
| Website | https://kaaro.ai |
| YC Page | https://speedrun.a16z.com/companies/kaaro |
| Batch | a16z Speedrun SR006 (Winter/Spring 2026) — note: the company is in a16z Speedrun, not Y Combinator; the Speedrun company page returned 404 at time of research |
| Industry | AI, B2B |
| Team Size | 2 |
| Location | San Francisco, California, United States of America |
| Tags | AI, B2B |
| YC Partner | Not listed (a16z Speedrun, not YC; Speedrun page not accessible) |
| Emails | founders@kaaro.ai, sai@kaaro.ai, gautham@kaaro.ai (kaaro.ai website; a16z Speedrun portal) |

## The Idea

**Problem:** Railroads still run critical operational workflows — paperwork, data entry, incident reporting, billing, car tracking, and crew coordination — through phone calls, email, and tribal knowledge (company description, a16z Speedrun portal). The company website frames the pain as: "Teams chase. Systems lag. Revenue leaks." (kaaro.ai). Existing railroad management systems (e.g., Wabtec RailConnect, Railinc/TransmetriQ) digitize some operations but still rely on manual data entry and fragmented interfaces across legacy "green screen" terminals (Wabtec product page). Short-line railroads in particular often lack the IT budgets for full TMS deployments. CPKC and CN, Canada's two Class I railroads, have invested in AI for asset inspection and predictive maintenance (Klover.ai) but operational workflow automation — billing, communications, yard coordination — remains largely manual.

**Approach:** Kaaro builds "AI coworkers for rail" — agents that sit inside railroad operational workflows to provide real-time railcar tracking (e.g., status of specific car IDs), proactive idle-car alerts (after 36 hours), shipment arrival notifications, loading workflow coordination, and contextual decision support including recommended contacts for specific situations (kaaro.ai). [Inferred]: The approach appears to be an AI overlay that ingests data from existing railroad systems and communication channels (email, phone) rather than a full TMS replacement, given the "one source of truth" framing and the early-access stage.

**Differentiation:** Wabtec RailConnect is a full transportation management system that automates train/switching operations and billing but relies on legacy interfaces and requires significant on-premise deployment (Wabtec product page). Optym focuses on locomotive/train schedule optimization using operations research, not workflow automation (optym.com). Railinc/TransmetriQ provides interoperability and data management across 600+ railroads but is an infrastructure layer, not an AI agent layer (transmetriq.com). [Inferred]: Kaaro's differentiation is the AI-agent-first approach to the manual, communication-heavy workflows that TMS systems don't address — the phone calls, emails, and tribal knowledge that sit around the structured data.

**Business Model:** No pricing page visible; the website shows a "Request Early Access" CTA (kaaro.ai). The a16z Speedrun standard investment is $500K for 10% on a SAFE, with an additional $500K available in the next round within 18 months (speedrun.a16z.com/faq). [Inferred]: Most likely monetization is per-seat or per-railroad SaaS subscription, given the B2B vertical software model and the range of customer sizes (Class I to short-line).

**TAM/SAM:**
- Railway AI market: $2.55B in 2024, growing at 18.4% CAGR (The Business Research Company, 2025 via search snippet).
- Railway management system market: $55.49B in 2025, projected $76B by 2030, CAGR 6.5% (MarketsandMarkets, 2025 via search snippet).
- Rail automation market: $7.55B in 2025, projected $15B by 2035, CAGR 7.1% (Wise Guy Reports, 2025 via search snippet).
- [Inferred]: Kaaro's SAM is the operational workflow software spend by North American freight railroads — a subset of the railway management system market. North America has 7 Class I railroads and ~600 short-line railroads. No public SAM estimate specific to railroad AI workflow automation was found.

**GTM / Distribution:** The company is working with CPKC (Canada's largest railroad), in late conversations with CN, and building with Gulf & Ohio Railways (a holding company for four short-line railroads in the southeastern US, operating 200 miles of track with 30 locomotives serving 64 industrial customers) (company description; Gulf & Ohio Railways website). Kaaro holds memberships in CARS (Canadian Association of Railway Suppliers), Canadian Railway Club, and NAMRC (kaaro.ai). [Inferred]: GTM appears to be a top-down approach starting with Canadian Class I railroads (leveraging the founders' Canadian background and railroader family connections) combined with bottom-up adoption at short-line railroads where deployment friction is lower.

## Defensibility

- **Domain data accumulation:** [Inferred]: As Kaaro's AI agents process railroad-specific workflows, the system could accumulate proprietary data on operational patterns, billing exceptions, and institutional knowledge that currently exists only in tribal memory. This data advantage would compound over time but does not exist yet at this stage.
- **Industry membership and relationships:** Kaaro has secured memberships in CARS, Canadian Railway Club, and NAMRC and claims engagement with CPKC and CN (kaaro.ai; company description). [Inferred]: In the insular freight rail industry, relationships and trust are significant barriers to entry for new vendors.
- **Switching costs:** [Inferred]: Once an AI agent is trained on a railroad's specific workflows, terminology, contacts, and exception-handling patterns, switching to a competitor would require re-training and re-integration — creating moderate switching costs that grow with usage duration.

**Market structure:** Incumbent railroad software vendors (Wabtec, Railinc) are structured around deterministic, transactional systems — TMS, billing engines, interoperability standards. Wabtec's RailConnect is described as "backbone operational and inventory management" (Wabtec product page). [Inferred]: These vendors face business model cannibalization risk in adopting AI agents that replace the manual data-entry workflows their existing products are designed to support. Their revenue models depend on per-railroad TMS licensing, not on reducing the human labor that feeds those systems.

**Commoditization risk:** [Inferred]: General-purpose AI agent frameworks (e.g., from large LLM providers) could theoretically be configured for railroad workflows by a systems integrator or by the railroads themselves. However, the domain specificity — FRA regulatory requirements, interchange rules, railroad-specific terminology, and integration with legacy TMS — creates a meaningful customization barrier. A well-funded horizontal AI agent company could enter this vertical but would need to invest in the same domain expertise and railroad relationships.

## Market & Traction

**Traction signals:**
- Working with CPKC (Canadian Pacific Kansas City), Canada's largest railroad (company description).
- In late-stage conversations with CN (Canadian National Railway) (company description).
- Building with Gulf & Ohio Railways, a collection of four short-line railroads (company description).
- Memberships: CARS, Canadian Railway Club, NAMRC (kaaro.ai).
- Press: LA Weekly feature — "How Gautham Venkateshwaran Is Building The Future of the AI Workforce for Niche and Underserved Industries" (LA Weekly, date not confirmed; page returned 403).
- Press: Stealth Startup Spy on X announced Kaaro's emergence from stealth (x.com/StealthCoSpy).
- Company X/Twitter: @kaaroai (x.com; follower count not retrievable).
- Company LinkedIn: linkedin.com/company/kaaro-ai (follower count not retrievable).
- f4.fund profile lists Kaaro under Robotics & Automation (f4.fund/startups/kaaro).
- No public revenue figures, user counts, app store listings, Product Hunt launch, or community (Discord/Slack) found.

**Competitive landscape:**

| Competitor | Key Differentiator vs. Kaaro | Funding / Revenue |
|---|---|---|
| **Wabtec RailConnect** | Full TMS backbone for railroads — deterministic operations/billing system, not AI-agent-based. Legacy "green screen" interfaces being modernized to web. Division of Wabtec ($25B+ public company). | Wabtec is publicly traded (NYSE: WAB); RailConnect-specific revenue not broken out. |
| **Optym** | Operations research-based optimization (locomotive planning, train scheduling, crew scheduling) rather than workflow automation via AI agents. 20+ year track record with Class I railroads including CSX. | $10M total funding; ~$25M annual revenue (TT News; Tracxn via search snippet). |
| **Railinc / TransmetriQ** | Industry data infrastructure — interoperability, messaging, fleet management across 600+ railroads. Data layer, not workflow agent layer. Subsidiary of AAR (Association of American Railroads). | Funding/revenue not publicly disclosed. Industry-owned nonprofit subsidiary. |
| **Ursico** (Poland) | AI-powered automation of freight forwarding workflows in rail logistics, focused on European rail. | Funding not publicly disclosed (StartUs Insights, 2025 via search snippet). |

**Why now:**
- [Inferred]: The emergence of capable LLMs and AI agent frameworks in 2023-2025 crossed a performance threshold enabling AI systems to handle the unstructured, context-heavy communication workflows (phone calls, emails, exception handling) that prior railroad automation could not address.
- CPKC completed its merger of Canadian Pacific and Kansas City Southern in April 2023, creating the first single-line railroad connecting Canada, the US, and Mexico (Wikipedia) — this network integration likely created new operational complexity and demand for unified workflow tools.
- Class I railroads have begun active AI adoption: CPKC signed a multi-year AI agreement with Duos Technologies in May 2024 (Klover.ai); CN partners with Google Cloud for digital twin infrastructure (Klover.ai). [Inferred]: This signals institutional openness to AI vendor relationships that did not exist 3-5 years ago.

## Founders & Team

**Sai Surisetti** — Co-Founder & CEO
- Ex-professional gamer; previous affiliations include Riot Games, VEX Robotics, and Alberta Elite Hockey League (LinkedIn via search snippet).
- First founding engineer at Toma (YC W24, a16z-backed) at age 18; dropped out of University of Waterloo during freshman year (a16z Speedrun portal).
- At Toma: led product and growth as the company scaled from ~20 to hundreds of customers (company description).
- Described as a "second-generation railroader" (company description).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/saisrikar-surisetti — "Founding Engineer @ Toma | ex-Pro Gamer" (LinkedIn via search snippet).
- GitHub: No public profile found.

**Gautham Venkateshwaran** — Co-Founder & CTO
- CS student at University of British Columbia (dropped out after freshman year) (a16z Speedrun portal).
- Founding engineer #2 at Toma (YC W24); led infrastructure and reliability; built DMS integrations with CDK Global, Reynolds & Reynolds, PBS, and Dealervault (LA Weekly via search snippet; The Org).
- Led school Robotics Club: mentored 100+ students, won 11+ awards, qualified 2x for VEX Robotics World Championships (web search snippet).
- Co-founded Calgary's largest high school hackathon (web search snippet).
- Director of Events at UBC BizTech (ZoomInfo).
- Described as a "second-generation railroader" (company description).
- Twitter/X: @gautham_city_ (GitHub profile); follower count not retrievable.
- LinkedIn: linkedin.com/in/gv6 — "Co-founder at Kaaro (a16z...)" (LinkedIn).
- GitHub: github.com/GauthamV6002 — 23 public repos, 28 followers; no repos with notable star counts (GitHub).

**Co-founder relationship:** Both founders were the first two engineers at Toma (YC W24) and have known each other for over a decade (company description). Both are from Alberta, Canada — Sai attended Waterloo, Gautham attended UBC. Both share VEX Robotics backgrounds (LinkedIn snippets). Both dropped out of university at 18-19 to join Toma.

**Founder-market fit:** Both founders are described as "second-generation railroaders" with family ties to the railroad industry (company description). Their experience as the first two engineers at Toma — where they built AI voice agents for car dealerships and scaled from ~20 to hundreds of customers — is directly transferable: Toma automated phone/communication workflows in another traditionally manual, relationship-driven industry (auto dealerships). Toma raised a $17M Series A led by a16z (TechCrunch, June 2025), and the founders' a16z network from Toma likely facilitated Kaaro's admission to a16z Speedrun.

## Key Risks

**Incumbent TMS integration dependency:** Kaaro's AI agents must integrate with existing railroad management systems (Wabtec RailConnect, Railinc systems, proprietary Class I internal tools). These are legacy, often on-premise systems with limited APIs. Wabtec's RailConnect is described as modernizing from "green screens" to web interfaces (Wabtec product page), suggesting an active upgrade cycle that could either create an integration window or render Kaaro's overlay redundant if Wabtec adds AI capabilities natively.

**Class I sales cycle length:** CPKC and CN are among the largest enterprises in North America. Railroad technology procurement involves extensive safety, compliance, and IT security review. The company describes being "in late conversations" with CN but no signed contract is publicly confirmed (company description). [Inferred]: Conversion from conversation to contract at Class I railroads typically takes 6-18 months, creating significant cash-flow risk for a two-person pre-seed company.

**Regulatory and liability exposure:** AI agents handling incident reporting, billing, and operational communications in a federally regulated industry (FRA in the US, Transport Canada) carry compliance risk. Errors in AI-generated incident reports or billing could have regulatory consequences. [Inferred]: No public information was found on how Kaaro handles regulatory compliance or whether AI outputs require human approval before submission.

**Concentrated customer pipeline:** The disclosed customer pipeline is three entities: CPKC, CN, and Gulf & Ohio Railways (company description). Loss of any single relationship — particularly CPKC — would represent a significant setback. [Inferred]: The North American freight railroad market is structurally concentrated (7 Class I railroads account for the majority of ton-miles), meaning customer concentration may be inherent to the market.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Railway AI market: $2.55B in 2024, 18.4% CAGR (The Business Research Company, 2025 via search snippet); Railway management systems: $55.49B in 2025, 6.5% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | Working with CPKC; in late conversations with CN; building with Gulf & Ohio Railways (company description). CARS, Canadian Railway Club, NAMRC memberships (kaaro.ai). LA Weekly feature (LA Weekly, date unconfirmed). |
| Revenue Signal | No public data found |
| Founders | Sai Surisetti (CEO): ex-pro gamer, founding engineer #1 at Toma (YC W24, a16z), dropped out of Waterloo at 18, second-generation railroader. Gautham Venkateshwaran (CTO): founding engineer #2 at Toma, dropped out of UBC, VEX Robotics world championship qualifier, second-generation railroader. |
| Competitors | Wabtec RailConnect (division of NYSE: WAB ~$25B market cap, revenue not broken out, full TMS incumbent); Optym ($10M raised, ~$25M revenue, train schedule/locomotive optimization); Railinc/TransmetriQ (industry-owned, revenue undisclosed, data interoperability layer); Ursico (funding undisclosed, EU-focused AI rail freight forwarding) |
| Moat Signals | CPKC and CN engagement (company description); CARS/Canadian Railway Club/NAMRC memberships (kaaro.ai); founders described as second-generation railroaders (company description) |
| Risk Factors | Incumbent TMS integration dependency, Class I sales cycle length, regulatory/liability exposure in FRA-regulated workflows |
| Founder Reach | Sai Surisetti: Twitter not found, LinkedIn linkedin.com/in/saisrikar-surisetti. Gautham Venkateshwaran: Twitter @gautham_city_ (count not retrievable), LinkedIn linkedin.com/in/gv6, GitHub 28 followers (github.com/GauthamV6002). |
| Distribution Signals | No Product Hunt launch, app store listing, or community (Discord/Slack) found. Company X/Twitter @kaaroai exists (follower count not retrievable). Company LinkedIn exists (follower count not retrievable). |
| Emails | founders@kaaro.ai (kaaro.ai), sai@kaaro.ai, gautham@kaaro.ai (a16z Speedrun portal) |
