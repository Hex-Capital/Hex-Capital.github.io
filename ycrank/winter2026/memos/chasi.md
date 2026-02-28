# Chasi

> AI Revenue Engine for the Equipment Industry

| Field | Value |
|-------|-------|
| Website | https://chasi.co/ |
| YC Page | https://www.ycombinator.com/companies/chasi |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | New York, NY, USA |
| Tags | SaaS, Industrial |
| YC Partner | Gustaf Alstromer |
| Emails | founders@chasi.co (YC page) |

## The Idea

**Problem:** Equipment dealers — companies that sell, rent, and service forklifts, cranes, excavators, and other heavy equipment — operate in a $1T+ global distribution industry where fleet utilization often sits below 60% (YC company description). Billions in assets sit idle while dealer staff are overwhelmed by phone calls, emails, and manual data entry across disconnected systems. Missed quotes, slow follow-ups, and fragmented workflows result in lost revenue daily. Today, most dealers rely on legacy dealer management systems (CDK, Texada, InTempo) supplemented by manual processes, spreadsheets, and phone-based sales.

**Approach:** Chasi deploys AI agents that plug into a dealer's existing technology stack and operate 24/7 to handle sales inquiries, rental requests, and service requests. The agents automate quoting, lead response, and follow-up across phone, email, and other channels, with the goal of delivering faster response times, higher fleet utilization, and improved margins without adding headcount (YC company description). The company positions itself as an "AI Concierge" for equipment commerce (Stealth Startup Spy, X post).

**Differentiation:** Unlike legacy dealer management systems (Texada, InTempo, CDK) that provide record-keeping and workflow tools but rely on human operators, Chasi provides autonomous AI agents that actively drive revenue by responding to and qualifying leads around the clock. Quipli's recently launched "Quinn" AI product (beta, 2025) is the closest direct competitor, offering a similar AI revenue engine concept but exclusively for Quipli's existing rental software customers (Quipli blog). Chasi differentiates by integrating into any existing dealer stack rather than requiring migration to a new platform. BigRentz has pivoted toward AI but focuses on marketplace aggregation rather than dealer-side agent deployment (Fortune, Jul 2025).

**Business Model:** No public pricing page was accessible at the time of research (chasi.co rendered as a JavaScript-heavy Framer site without extractable content). [Inferred]: Most likely monetization path is SaaS subscription (monthly or annual per-dealership) potentially with usage-based components for AI agent interactions, given the B2B SaaS model typical of this vertical.

**TAM/SAM:** The global dealer management system market was estimated at $9.85 billion in 2024, projected to reach $18.32 billion by 2035 at 5.8% CAGR (Market Research Future, 2024 via search snippet). The equipment management software market was valued at $10.97 billion in 2024, projected to reach $18.69 billion by 2032 at 7.9% CAGR (Credence Research, 2024 via search snippet). The U.S. equipment rental market alone was estimated at $78.2 billion in revenue in 2024, with 5.7% projected growth to $82.6 billion in 2025 (Quipli/ARA via search snippet). SAM: No public data found specific to the AI agent layer for equipment dealers.

**GTM / Distribution:** The YC company description states Chasi is "live across equipment businesses in the US and Europe." [Inferred]: Most likely distribution path is direct sales to mid-market equipment dealers, leveraging the founders' deep industry network from their prior roles at Axion Ray (which served Cummins, Boeing, Medtronic, and other industrials). The integration-first approach (plugging into existing stacks) lowers switching costs for initial adoption.

## Defensibility

**Data moat potential:** As Chasi processes sales, rental, and service interactions across multiple dealers, it accumulates proprietary data on equipment demand patterns, pricing signals, and dealer workflows that could improve AI agent performance over time. This data advantage does not exist today at pre-seed but could compound with scale.

**Switching costs:** Once AI agents are integrated into a dealer's existing stack and handling live customer interactions, switching would require re-integration and retraining, creating moderate lock-in. Dealers in this industry are historically slow to change vendors.

**Domain expertise:** The founders' specific background in industrial AI deployments (Axion Ray served major equipment OEMs including Cummins and Boeing) provides domain knowledge that is difficult to replicate quickly by generalist AI startups.

**Market structure:** Legacy DMS vendors (CDK, Texada, InTempo) have sales channel alignment with existing workflows — their revenue comes from the management layer, not from AI-driven revenue optimization. Building autonomous AI agents that replace human sales effort represents a different value proposition that could cannibalize upsell opportunities for DMS platforms (e.g., training, professional services). Quipli is the most direct structural competitor, having launched Quinn as an AI revenue engine, but it is constrained to its own customer base. [Inferred]: The structural barrier for incumbents is that autonomous AI agents that replace human workflows conflict with the professional services and support revenue models that legacy DMS vendors depend on.

**Commoditization risk:** The core technology (LLM-powered agents handling sales/service inquiries) is broadly available. Multiple companies could build similar agents. The defensibility depends on depth of integration with equipment-specific systems, quality of domain-trained models, and early customer lock-in. Quipli has already launched a competing product (Quinn) with the advantage of an existing customer base and proprietary transaction data from "millions of transactions" (Quipli blog).

## Market & Traction

**Traction signals:**
- Chasi is described as "live across equipment businesses in the US and Europe" (YC company description). No specific customer count, revenue figure, or growth metric is publicly available.
- No Product Hunt launch found.
- No app store presence found.
- Company LinkedIn page exists at linkedin.com/company/chasi-ai (LinkedIn search result). Follower count not retrievable.
- Akash Pavan X/Twitter: @akash__pavan (x.com). Follower count not retrievable.
- Sarman Aulakh X/Twitter: @sarman_aulakh (twitter.com). Follower count not retrievable.
- No Discord or Slack community found.
- 0 open job postings (YC page).
- A Medium article by "Thedigitaldose" covered Chasi ("Chasi — Another AI agent?"), though the content was not accessible (403 error).
- Stealth Startup Spy account on X posted about Akash Pavan coming out of stealth mode with Chasi AI (x.com/StealthCoSpy).

**Competitive landscape:**

1. **Quipli / Quinn** ($3.5M raised, revenue unknown): Atlanta-based equipment rental software platform that launched "Quinn," an AI revenue growth engine in beta (2025). Quinn offers 24/7 AI across phone, SMS, and email with lead capture, permit monitoring, and churn prevention. Key differentiator vs. Chasi: Quinn is tightly bundled with Quipli's rental management software and available only to Quipli customers, whereas Chasi integrates with any existing stack. Quinn is trained on proprietary data from Quipli's customer transaction base (Quipli blog, 2025).

2. **BigRentz** (~$29.5–31M raised, revenue unknown): Founded 2012, Irvine, CA. Originally an equipment rental marketplace matching contractors with rental yards, now pivoting to an AI-powered construction technology platform built on "$500 million in sales data and more than $1 billion in interactions" (Fortune, Jul 2025). Key differentiator vs. Chasi: BigRentz operates as a marketplace/aggregator rather than a dealer-side AI agent; it serves contractors seeking rentals, not dealers seeking to optimize their own operations.

3. **Big Rentals / HQ Rent** ($2.8M seed raised, led by SNAK Venture Partners, Nov 2025; revenue unknown): Los Angeles-based "Shopify for equipment rentals" combining a national marketplace with AI-powered operating software for independent rental businesses. Key differentiator vs. Chasi: Big Rentals targets small independent rental operators with an integrated marketplace + software bundle, whereas Chasi targets established dealers with an AI agent overlay on existing systems (PR Newswire, Nov 2025).

4. **Texada Software** (funding unknown, revenue unknown): Canadian equipment management platform offering sales, service, and rental modules with AI features. Key differentiator vs. Chasi: Texada is a full DMS platform (record-keeping, fleet management, quoting) rather than an AI agent layer; it competes more with traditional DMS vendors than with Chasi's agent-first approach.

5. **STAEDEAN Rental Management** (funding unknown, revenue unknown): Enterprise-grade rental management on Dynamics 365 with AI agents for equipment availability matching. Key differentiator vs. Chasi: Enterprise-focused, built on Microsoft stack, targeting large multinational rental companies rather than mid-market dealers.

**Why now:**
- [Inferred]: The convergence of LLM capabilities reaching production-quality for voice and text interactions (GPT-4, Claude, etc. reaching sufficient reliability for customer-facing use in 2024-2025) with persistent labor shortages in the equipment industry creates the enabling conditions. Cloud-based DMS adoption reached 54% of new deployments in 2024 (Research and Markets via search snippet), meaning more dealers now have API-accessible systems that AI agents can integrate with. The U.S. construction boom (manufacturing construction at $223 billion, data center construction at $40B annual run rate per Big Rentals PR, Nov 2025) is increasing demand on dealer capacity while labor remains constrained.

## Founders & Team

**Akash Pavan** — Co-founder & CEO
- BE Mechanical Engineering, Government College of Technology, Coimbatore (akashpavan.com)
- Previously: Industrials GTM & Products Head at Axion Ray, an AI-powered proactive quality detection platform ("Datadog for manufacturers") that raised $64M total through Series B led by Salesforce Ventures with Bessemer Venture Partners participation (PR Newswire, Dec 2025). Axion serves Medtronic, Cummins, Boeing, and SharkNinja.
- Previously: Senior Engineer at Titan Engineering & Automation Limited (industrial automation and robotics)
- Previously: Powertrain R&D at TAFE (Tractors and Farm Equipment Limited)
- Designed and built off-road Baja racing cars, tractors, and robots (akashpavan.com)
- Location: Brooklyn, NY
- Twitter/X: @akash__pavan (x.com) — follower count not retrievable
- LinkedIn: linkedin.com/in/akashpavan
- GitHub: No public repos found

**Sarman Aulakh** — Co-founder & CTO
- Computer Engineering, University of Waterloo (sarmanaulakh.com, LinkedIn via search snippet)
- Previously: 2× founding engineer; built internal supply chain orchestration software at Tesla (LinkedIn via search snippet)
- Previously: Software roles at RBCx, Nuvalence, and a stealth startup (LinkedIn via search snippet)
- Previously: Part of founding team / GM at Axion Ray (pre-seed through Series B) (LinkedIn via search snippet)
- Led AI deployments at Cummins, Harley Davidson, Denso & Fortune 500 industrials (search snippet)
- Built BitChat, a Bluetooth mesh communication project (LinkedIn post)
- Twitter/X: @sarman_aulakh (twitter.com) — follower count not retrievable
- LinkedIn: linkedin.com/in/sarmanaulakh
- GitHub: No public profile found via search

**Co-founder relationship:** Both Akash Pavan and Sarman Aulakh were part of the founding team at Axion Ray, where Akash served as Industrials GTM & Products Head and Sarman was part of the founding team / GM. This indicates a prior working relationship at a shared company before co-founding Chasi.

**Founder-market fit:** Both founders have direct, hands-on experience in equipment-heavy industries. Akash brings mechanical engineering background with experience designing tractors and industrial automation at TAFE and Titan Engineering, combined with GTM experience selling AI to industrial manufacturers at Axion Ray. Sarman brings software engineering from the University of Waterloo with founding-engineer experience at Tesla (supply chain systems) and AI deployments at Cummins, Harley Davidson, and Denso. Their overlap at Axion Ray — which serves the same category of industrial and manufacturing customers that Chasi targets — provides direct domain knowledge of how equipment OEMs and their dealer networks operate.

## Key Risks

**Direct competitor with data advantage (Quipli/Quinn):** Quipli launched Quinn, an AI revenue growth engine for equipment rental, trained on "millions of transactions" from its existing customer base (Quipli blog, 2025). Quipli has an established customer base including Arapahoe, Haulotte, SANY, and Sonsray (PR Newswire, 2023). This gives Quinn a proprietary data training advantage and built-in distribution that Chasi must overcome through superior integration breadth or dealer segment targeting.

**Integration complexity across fragmented DMS landscape:** Chasi's value proposition depends on plugging into a dealer's "existing stack," but the equipment dealer management system market is fragmented across dozens of platforms (CDK, Texada, InTempo, Baseplan, DIS, e-Emphasys, and others). Building and maintaining integrations across this fragmented ecosystem is engineering-intensive and each new integration represents a custom effort. Mitigation: the founders' Axion Ray experience involved similar multi-system integration challenges in industrial settings.

**Brand name disambiguation:** Multiple unrelated entities use the "Chasi" name, including a WordPress hosting platform (chasi.app), a healthcare organization in Staten Island (CHASINYC on X/Twitter), and the Chasi website builder. This creates potential brand confusion in online search and marketing. The company's LinkedIn is listed as "Chasi (YC W26)" and the domain chasi.co differentiates from chasi.app and chasi.com.

**Dealer adoption inertia:** Equipment dealers are historically slow technology adopters. The industry's average fleet utilization sitting below 60% persists despite existing software solutions, suggesting that the barrier to improvement is not just technology availability but organizational readiness and change management. AI agents that interface directly with customers on a dealer's behalf require a higher trust threshold than back-office tools.

**Dependence on LLM infrastructure:** Chasi's AI agents rely on third-party LLM APIs for natural language processing of sales and service interactions. Changes in API pricing, rate limits, or model capabilities could affect unit economics and product quality. This is a shared risk across AI agent startups but is amplified in equipment sales where domain-specific accuracy requirements are high (e.g., correctly quoting equipment specifications and pricing).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $9.85B global dealer management system market (Market Research Future, 2024, 5.8% CAGR via search snippet); $10.97B equipment management software market (Credence Research, 2024, 7.9% CAGR via search snippet) |
| SAM | No public data found |
| Traction | "Live across equipment businesses in the US and Europe" (YC company description); no specific customer count or revenue disclosed |
| Revenue Signal | No public data found |
| Founders | Akash Pavan (CEO): BE Mech Eng, ex-Axion Ray GTM & Products Head, ex-Titan Engineering, ex-TAFE. Sarman Aulakh (CTO): Computer Eng, U of Waterloo, ex-Tesla founding engineer, ex-Axion Ray founding team/GM |
| Competitors | Quipli/Quinn ($3.5M raised, revenue unknown, bundled AI within own rental software); BigRentz (~$30M raised, revenue unknown, AI-powered rental marketplace); Big Rentals ($2.8M seed, revenue unknown, marketplace + operating software for small operators); Texada Software (funding unknown, legacy DMS with AI features) |
| Moat Signals | Both founders ex-Axion Ray (industrial AI, $64M raised); integration-based switching costs; domain-specific AI training potential |
| Risk Factors | Direct competitor Quipli/Quinn with proprietary transaction data, fragmented DMS integration complexity, brand name disambiguation |
| Founder Reach | Akash Pavan: Twitter @akash__pavan (count not retrievable), LinkedIn linkedin.com/in/akashpavan. Sarman Aulakh: Twitter @sarman_aulakh (count not retrievable), LinkedIn linkedin.com/in/sarmanaulakh. GitHub: not found for either founder |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no community channels identified) |
| Emails | founders@chasi.co (YC page) |
