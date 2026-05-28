# Parrot

> AI-native operating system for auto shops

| Field | Value |
|-------|-------|
| Website | https://www.useparrot.com/ |
| YC Page | https://www.ycombinator.com/companies/useparrot |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Workflow Automation, Automation, Automotive |
| YC Partner | Aaron Epstein |
| Emails | phillip@useparrot.com |

## The Idea

- **Problem:** Collision repair shops manually handle calls, insurance supplement negotiations, parts sourcing, and customer coordination, with supplement turnaround taking ~5 days and parts sourcing taking ~4 hours per job in pre-pilot baselines (useparrot.com).
- **Approach:** AI voice and email agents that take/make calls 24/7, call multiple suppliers in parallel to compare parts quotes, follow up with insurance adjusters on supplements, and write back to systems of record like CCC ONE, Audatex, and Mitchell 1, with one-tap human approval (useparrot.com).
- **Differentiation:** Incumbents CCC ONE, Mitchell, and Solera Audatex are estimating/workflow systems with AI for damage assessment (Autobody News, 2026); Rote (YC) is narrower, focused only on insurance supplement negotiation (ycombinator.com/companies/rote); Parrot positions across calls, parts, supplements, and customer comms in one "OS" layer that integrates with those incumbents rather than replacing them (useparrot.com).
- **Business Model:** No pricing page visible on useparrot.com at time of research; [Inferred]: per-shop SaaS subscription, likely with per-call or per-supplement usage component given voice agent cost structure.
- **TAM/SAM:** Global auto collision repair management software market projected ~$2B in 2026 at ~10% CAGR (Market Research Future, 2026), with broader collision estimating software at $2.88B in 2026 (Business Research Company, 2026); no public SAM data found for AI-agent middleware specifically.
- **GTM / Distribution:** [Inferred]: Direct sales to independent and MSO collision shops, validated through pilot shops (one 90-day pilot disclosed on useparrot.com); integration listings with CCC ONE, Audatex, and Mitchell 1 cited as compatibility (useparrot.com) suggest channel partnerships as a future path.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond integrations with CCC ONE, Audatex, and Mitchell 1 (useparrot.com), which are advertised but not confirmed as certified partnerships.
- **Future moat:** [Inferred]: Proprietary workflow + call data across supplements, parts vendors, and adjuster interactions could create a data moat for supplement-negotiation and parts-price benchmarking; unproven at 2-person, single-pilot scale.
- **Market structure:** [Inferred]: Incumbents CCC/Mitchell/Solera monetize estimating licenses and insurer data deals (Autobody News, 2026); replacing shop-side phone/admin labor would not cannibalize their estimating revenue, so direct copy-cat motivation is limited but not blocked.
- **Commoditization risk:** Voice-agent + RPA stacks are buildable by other YC entrants — Rote (YC) already targets the supplement-negotiation slice (ycombinator.com/companies/rote), and shops Better Collision Centers (BetterX) and The Crash Co. (CrashCodex) are building in-house AI for shop ops (Autobody News, 2026).

## Market & Traction

- **Traction signals:**
  - 90-day pilot shop: monthly revenue $150K → $180K (+20%) (useparrot.com).
  - 90-day pilot shop: 18% more repair orders booked MoM (useparrot.com).
  - 90-day pilot shop: supplement turnaround 5 days → 2 days; cycle time 14 → 11 days (useparrot.com).
  - 90-day pilot shop: avg $2,800+ monthly parts savings; ~$34K supplement dollars processed/month; 100% inbound call answer rate (useparrot.com).
  - No public revenue, customer count, press coverage, Product Hunt launch, Twitter/X presence, LinkedIn company follower count, Discord, or job postings found for useparrot.com specifically.
- **Competitors:**
  - CCC Intelligent Solutions / CCC ONE (publicly traded, NASDAQ: CCCS, revenue unknown for segment): incumbent estimating + workflow OS with AI damage assessment, integrated with insurers (Autobody News 2026; cccis.com).
  - Mitchell International (Enlyte subsidiary, revenue unknown publicly): estimating + parts + claims, 70% auto-populated line items (Autobody News, 2026).
  - Solera Audatex (Solera, private, revenue unknown for segment): estimating + AI blueprinting + claims workflow (Autobody News, 2026).
  - Rote (YC, funding undisclosed, revenue unknown): narrower AI agent for insurance supplement negotiation only (ycombinator.com/companies/rote).
  - Tractable (raised $115M Series E at $1B valuation, Crunchbase via search snippet): computer-vision damage assessment for insurers and shops (Autobody News, 2026).
- **Why now:** [Inferred]: Voice-AI models reached low-latency, low-error thresholds for multi-party negotiation calls in 2024–2025, and shops face persistent labor shortages cited in industry coverage (Autobody News, 2026); no founder or analyst statement of why-now found.

## Founders & Team

- **Phillip Baek (Co-founder, CEO):**
  - Background: B.S. Biomedical Engineering, University of Texas at Austin, Cockrell School of Engineering (LinkedIn via search snippet); prior role as EP Mapping Specialist at Boston Scientific in San Antonio, TX (LinkedIn via search snippet); previously co-founded Alchemy AI (life sciences computer vision) (LinkedIn via search snippet) — Parrot appears to be a pivot/rebrand from Alchemy.
  - Twitter/X: No public account found.
  - LinkedIn: "Co-founder @ Alchemy (YC P26)" (linkedin.com/in/phillip-baek/).
  - GitHub: No public repos found.
- **Liam McBride (Co-founder, CTO):**
  - Background: Master's in Computer Engineering, University of Illinois Urbana-Champaign, 2025–2026 (LinkedIn via search snippet); prior experience at BoBo, Atsign, Stanford University, CivitasAI (LinkedIn via search snippet); previously co-founded Alchemy AI as CTO (linkedin.com/in/ljmcb/).
  - Twitter/X: No public account found.
  - LinkedIn: "Founder, CTO - Alchemy AI" (linkedin.com/in/ljmcb/) — handle/title not yet updated to Parrot.
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders previously co-founded Alchemy AI together, with Phillip as co-founder and Liam as CTO (LinkedIn, via search snippets), indicating a multi-year working relationship before Parrot.
- **Founder-market fit:** [Inferred]: Neither founder has documented prior experience in collision repair, body shops, or auto insurance — the prior co-venture (Alchemy AI) was in life sciences computer vision (LinkedIn via search snippet); no industry advisors, board members, or investors beyond YC found in public sources.

## Key Risks

- **Domain inexperience in collision/insurance:** Both founders' documented backgrounds are in biomedical engineering, computer engineering, and life-sciences AI (LinkedIn via search snippets), with no public evidence of prior collision-repair, shop-management, or insurance-claims operating experience; supplement negotiation involves state-specific insurance regulations and labor-rate disputes (Autobody News, 2026) that require deep institutional knowledge.
- **Direct competitive overlap with another YC company:** Rote (YC) is explicitly "AI-native insurance department for auto body shops" handling supplement negotiation autonomously (ycombinator.com/companies/rote), targeting the same buyer (collision shops) with overlapping product surface.
- **Incumbent platform dependence:** Product advertises compatibility with CCC ONE, Audatex, and Mitchell 1 (useparrot.com); these incumbents control API access and are themselves shipping AI features (cccis.com; Autobody News, 2026), creating substitution and access risk.
- **Pilot-stage evidence base:** All disclosed traction is from a single 90-day pilot shop (useparrot.com); no multi-shop, retention, churn, or revenue data is public, making the +20% revenue lift unverifiable as a generalizable result.
- **Pivot residue / brand confusion:** Both founders' LinkedIn profiles still list the prior company "Alchemy" rather than Parrot (LinkedIn via search snippets); multiple unrelated YC companies share the "Parrot" name (Parrot YC F25 language learning, Parrot Software YC S20 LatAm restaurants, Expected Parrot YC F25), which complicates search/SEO and may dilute brand searches.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Auto collision repair management software ~$2B in 2026, ~10% CAGR (Market Research Future, 2026); collision estimating software $2.88B in 2026, 10.4% CAGR (Business Research Company, 2026) |
| SAM | No public data found |
| Traction | Single 90-day pilot shop: $150K→$180K monthly revenue, +18% ROs MoM, supplement turnaround 5→2 days, cycle time 14→11 days, ~$34K supplement $/mo, $2,800+ parts savings/mo, 100% call answer rate (useparrot.com); no Product Hunt, press, or social follower data found |
| Revenue Signal | No public data found (no pricing page on useparrot.com) |
| Founders | Phillip Baek (CEO): UT Austin BME, ex-Boston Scientific EP Mapping Specialist, ex-Alchemy AI co-founder. Liam McBride (CTO): UIUC MS Computer Engineering, ex-Atsign, ex-Stanford, ex-CivitasAI, ex-Alchemy AI CTO. |
| Competitors | CCC ONE (NASDAQ: CCCS, segment revenue unknown, incumbent estimating + AI damage assessment); Mitchell (Enlyte sub, revenue unknown, 70% auto-populated estimates); Solera Audatex (private, revenue unknown, AI blueprinting); Rote (YC, funding undisclosed, AI insurance supplement agent — direct overlap); Tractable ($115M Series E at ~$1B val per Crunchbase via search snippet, computer-vision damage assessment) |
| Moat Signals | No public data found |
| Risk Factors | Direct YC competitor (Rote), founder domain inexperience in collision/insurance, single-pilot evidence base |
| Founder Reach | Phillip Baek: Twitter not found, LinkedIn count not retrievable, GitHub not found. Liam McBride: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | phillip@useparrot.com (useparrot.com) |

Sources:
- [Parrot — The AI backend for collision shops](https://www.useparrot.com/)
- [Parrot YC Company Page](https://www.ycombinator.com/companies/useparrot)
- [Phillip Baek LinkedIn](https://www.linkedin.com/in/phillip-baek/)
- [Liam McBride LinkedIn](https://www.linkedin.com/in/ljmcb/)
- [Rote — YC competitor](https://www.ycombinator.com/companies/rote)
- [Auto Collision Repair Management Software Market — Market Research Future](https://www.marketresearchfuture.com/reports/auto-collision-repair-management-software-market-24029)
- [Auto Collision Estimating Software Market — Business Research Company](https://www.thebusinessresearchcompany.com/report/auto-collision-estimating-software-global-market-report)
- [More Providers of AI-Based Assessments — Autobody News](https://www.autobodynews.com/news/more-providers-of-ai-based-assessments-pre-estimates-want-to-expand-in-collision-repair)
- [Two Collision Companies with Self-Developed AI — Autobody News](https://www.autobodynews.com/news/two-collision-companies-with-self-developed-ai-software-could-involve-other-shops)
- [CCC AI Technology](https://www.cccis.com/our-technology/ai)
