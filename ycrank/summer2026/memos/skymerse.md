# Skymerse

> Autopilot for Flight Operations

| Field | Value |
|-------|-------|
| Website | https://skymerse.com |
| YC Page | https://www.ycombinator.com/companies/skymerse |
| Batch | Summer 2026 (YC company page) |
| Industry | Industrials / Industrials -> Aviation and Space |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Airlines, Aerospace |
| YC Partner | Gustaf Alstromer (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** Airline flight planning requires dispatchers to manually interpret NOTAMs, weather (METARs/TAFs), performance limits, and company procedures across fragmented tools before every flight (skymerse.com, 2026).
- **Approach:** Specialized aeronautical models match schedules against live NOTAMs, weather, and operating minima to output flight-ready decisions rather than raw data, claiming "3 hours off flight planning per flight" (skymerse.com, 2026).
- **Differentiation:** Versus Jeppesen ForeFlight (comprehensive flight-planning/EFB suite, now Thoma Bravo-owned, AeroTime Nov 2025), Sabre AI rCentre, Amadeus Altéa, Lufthansa Systems Lido, and NAVBLUE — Skymerse positions as an AI-native decision layer replacing "fragmented tools and manual interpretation" (YC page, 2026); [Inferred]: incumbents are integrated data/planning suites rather than LLM-driven interpretive agents.
- **Business Model:** Notamify Pro $24.90/month, free tier at 3 briefings/week, Enterprise at custom pricing with API access requiring Pro (Notamify pricing via search snippet, 2026).
- **TAM/SAM:** AI in aviation projected $8.83B in 2026 → $36.68B by 2034, 19.48% CAGR, with flight operations at 37.28% share in 2026 (Fortune Business Insights via search snippet); airline flight operations software $11.2B (2025) → $28.5B (2033), 12.80% CAGR (openpr.com via search snippet).
- **GTM / Distribution:** Land-and-expand from Notamify's self-serve pilot/dispatcher tier into airline Enterprise deals, evidenced by LOT Polish Airlines running "Notamify Operating System" with dashboards and email alerts (skywork.ai review, 2026); [Inferred]: founder's LOT alumni network and Flightradar24 API role support direct airline outreach.

## Defensibility

- **Moat today:** Production airline deployment at LOT Polish Airlines with reported "+98% review efficiency" and "<3 minute" monitoring delay (LOT Ops data cited via search snippet, Jan 2026); Notamify API published as developer platform (skymerse.gitbook.io/notamify-api).
- **Future moat:** [Inferred]: Proprietary aeronautical dataset (NOTAMs, procedures, airline SOPs) plus feedback loops from dispatchers could create data/switching-cost moat; unproven now given single named enterprise customer.
- **Market structure:** [Inferred]: Airline flight-ops procurement involves safety certification, IT integration, and multi-year contracts, creating switching cost against incumbents but also raising barrier for a solo-founder startup; Jeppesen ForeFlight's Thoma Bravo owners publicly plan AI investment (Thoma Bravo press release, Nov 2025), meaning incumbents are actively closing the AI gap.
- **Commoditization risk:** Underlying LLMs (product switched to OpenAI o3-mini per founder LinkedIn, Jan 2025) are commodity; competitive advantage rests on aviation-specific data, workflow depth, and regulatory trust rather than model IP.

## Market & Traction

- **Traction signals:**
  - Notamify serves "thousands" of daily pilots/aviation professionals (YC page, 2026; skymerse.com).
  - LOT Polish Airlines named customer using Notamify Operating System (skywork.ai review of Notamify, 2026).
  - Customer-reported outcome: "+98% review efficiency, <3 minute monitoring delay" at LOT Ops (LOT Ops data via search snippet, Jan 2026).
  - Product updates shipped May 2026: Affected Elements V2, profile-aware filtering, Affected Element Timeline (Notamify blog via search snippet).
  - Notamify migrated to OpenAI o3-mini (founder LinkedIn post, Jan 2025).
  - Twitter/X @skymerse, LinkedIn "Skymerse", GitHub "skymerse" listed on YC page — follower counts not retrievable.
  - No Product Hunt launch, TechCrunch, or funding announcement found in public sources.
- **Competitors:**
  - Jeppesen ForeFlight (acquired by Thoma Bravo from Boeing for $10.55B, AeroTime Nov 2025; revenue not separately disclosed post-carveout): incumbent full-suite planning + EFB, now investing in AI (Thoma Bravo press release, Nov 2025).
  - Sabre (public, revenue unknown for flight-ops segment): Sabre AI rCentre integrated airline ops suite (gitnux.org 2026 roundup).
  - NAVBLUE (Airbus subsidiary, revenue unknown): Airbus-backed flight planning/performance software (gitnux.org 2026).
  - Lufthansa Systems Lido (Lufthansa subsidiary, revenue unknown): high-precision flight planning and OFP (gitnux.org 2026).
  - Amadeus Altéa Operations (public, revenue unknown at segment): end-to-end flight ops + disruption management (gitnux.org 2026).
- **Why now:** LLMs crossed usability threshold for parsing unstructured NOTAM text (FAA NOTAM modernization ongoing per AeroTime 2026), and Boeing's $10.55B carve-out of Jeppesen/ForeFlight to Thoma Bravo (April 2025 announced, Nov 2025 closed, AeroTime) has reset incumbent roadmaps — [Inferred]: creating a temporary window for AI-native entrants.

## Founders & Team

- **Damian Szumski (Founder / solo):**
  - Background: Mgr in Advanced Analytics – Big Data, SGH Warsaw School of Economics 2020–2023; Product Owner (API) at Flightradar24 since April 2024; prior Delivery Technical Lead / Customer Solutions Engineer at FLYR (Apr 2021–Mar 2024); Navigation Coordinator and Flight Dispatcher Assistant at LOT Polish Airlines; Junior Aeronautical Chart Specialist at Lufthansa Systems (Mar 2019–Jan 2020); Licensed Flight Dispatcher (YC page; theorg.com; rocketreach.co).
  - Twitter/X: @zaxrev (per YC page), count not retrievable.
  - LinkedIn: profile at linkedin.com/in/damian-szumski (posts referenced via LinkedIn search snippets); headline not retrievable, count not retrievable.
  - GitHub: @DamianS21 (github.com/DamianS21); no notable repo star count retrievable.
- **Co-founder relationship:** Solo founder — no co-founder history applies (YC page team size = 1).
- **Founder-market fit:** Founder has stacked aviation-industry roles (Lufthansa Systems, LOT Polish Airlines dispatch, FLYR revenue management, Flightradar24 API) plus licensed flight dispatcher certification (YC page; theorg.com), directly mapping to the flight-operations problem; no advisors, investors beyond YC standard deal, or board members disclosed publicly.

## Key Risks

- **Solo-founder execution against enterprise sales:** Team size = 1 (YC page) selling into airline IT/safety procurement, which typically requires multi-stakeholder cycles and 24/7 support commitments; mitigation: existing LOT deployment demonstrates one enterprise close (LOT Ops data via search snippet, Jan 2026).
- **Incumbent AI response:** Thoma Bravo publicly committed to AI investment in Jeppesen ForeFlight (Thoma Bravo press release Nov 2025; theaircurrent.com "bets big on AI"), meaning the largest incumbent is now capitalized and mandated to close the AI feature gap.
- **Safety/regulatory liability:** Cockpit and dispatch decisions carry FAA/EASA oversight; [Inferred]: any LLM hallucination in NOTAM interpretation could trigger airworthiness or operator-certificate implications, and no public evidence of regulatory certification pathway was found.
- **Single-customer concentration:** LOT Polish Airlines is the only publicly named airline customer (skywork.ai review, 2026); loss of this reference account would remove primary enterprise validation.
- **Model-provider dependency:** Notamify moved to OpenAI o3-mini (founder LinkedIn Jan 2025); pricing/availability changes or airline data-residency constraints on US model providers could disrupt the stack.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in aviation: $8.83B (2026) → $36.68B (2034), 19.48% CAGR (Fortune Business Insights, 2026) |
| SAM | Airline flight operations software: $11.2B (2025) → $28.5B (2033), 12.80% CAGR (openpr.com, 2026); flight-ops segment is 37.28% of AI-in-aviation in 2026 (Fortune Business Insights) |
| Traction | "Thousands" of daily Notamify users (YC page, 2026); LOT Polish Airlines enterprise customer (skywork.ai, 2026); customer testimonial: "+98% review efficiency, <3 min monitoring delay" (LOT Ops data, Jan 2026); May 2026 product updates shipped (Notamify blog) |
| Revenue Signal | Notamify Pro $24.90/month; free tier 3 briefings/week; Enterprise custom pricing; API requires Pro (Notamify pricing via search snippet, 2026) |
| Founders | Damian Szumski (Founder): Licensed Flight Dispatcher; Product Owner API at Flightradar24; prior FLYR, LOT Polish Airlines, Lufthansa Systems; Mgr Big Data SGH Warsaw |
| Competitors | Jeppesen ForeFlight ($10.55B sale price to Thoma Bravo Nov 2025, segment revenue undisclosed, incumbent full-stack planning + EFB); Sabre AI rCentre (public, segment revenue unknown, integrated airline ops suite); NAVBLUE (Airbus subsidiary, revenue unknown, planning/performance); Lufthansa Systems Lido (Lufthansa subsidiary, revenue unknown, OFP); Amadeus Altéa Operations (public, segment revenue unknown, end-to-end ops) |
| Moat Signals | Production deployment at LOT Polish Airlines with quantified efficiency gains (LOT Ops data, Jan 2026); published Notamify API (skymerse.gitbook.io/notamify-api); founder's licensed-dispatcher + Flightradar24/LOT/Lufthansa Systems credentials (theorg.com; YC page) |
| Risk Factors | Solo-founder execution vs. enterprise sales; incumbent AI response (Thoma Bravo–backed Jeppesen ForeFlight); safety/regulatory liability on LLM outputs |
| Founder Reach | Damian Szumski: Twitter @zaxrev (count not retrievable), LinkedIn linkedin.com/in/damian-szumski (count not retrievable), GitHub @DamianS21 (star count not retrievable) |
| Distribution Signals | Notamify self-serve web + API (notamify.com; skymerse.gitbook.io); LOT Polish Airlines enterprise reference (skywork.ai, 2026); No public Product Hunt launch, TechCrunch coverage, or funding announcement found |
| Emails | No public data found |

Sources:
- [Skymerse company site](https://skymerse.com)
- [Skymerse YC page](https://www.ycombinator.com/companies/skymerse)
- [Notamify blog](https://notamify.com/blog)
- [Notamify pricing / opentools review](https://opentools.ai/tools/notamify)
- [Skywork.ai Notamify review](https://skywork.ai/skypage/en/Notamify-An-In-Depth-Review-of-the-AI-Tool-Revolutionizing-Flight-Safety-and-Efficiency/1976555878963933184)
- [Damian Szumski personal site](https://www.damianszumski.com/)
- [Damian Szumski at Flightradar24 – The Org](https://theorg.com/org/flightradar24/org-chart/damian-szumski)
- [RocketReach – Damian Szumski](https://rocketreach.co/damian-szumski-email_360322940)
- [GitHub DamianS21](https://github.com/DamianS21)
- [Notamify API docs](https://skymerse.gitbook.io/notamify-api)
- [AeroTime – Boeing $10.55B Jeppesen/ForeFlight sale closes](https://www.aerotime.aero/articles/boeing-thoma-bravo-jeppesen-sale-closes)
- [Thoma Bravo – Jeppesen ForeFlight standalone](https://www.thomabravo.com/press-releases/jeppesen-foreflight-launches-as-a-standalone-company-to-redefine-the-future-of-aviation-software)
- [The Air Current – Jeppesen ForeFlight AI strategy](https://theaircurrent.com/industry-strategy/boeing-jeppesen-foreflight-aviation-ai-software-brad-surak/)
- [Fortune Business Insights – AI in Aviation](https://www.fortunebusinessinsights.com/ai-in-aviation-market-113289)
- [OpenPR – Airline Flight Operations Software Market](https://www.openpr.com/news/4496932/airline-flight-operations-software-market-is-going-to-boom)
- [Gitnux – flight operations software 2026](https://gitnux.org/best/aviation-flight-operations-software/)
