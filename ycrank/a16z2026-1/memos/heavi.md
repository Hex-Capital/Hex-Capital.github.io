# Heavi

> AI workforce for heavy vehicle mechanics. Two 2x founders who raised $200M and $75M prev

| Field | Value |
|-------|-------|
| Website | https://Heaviai.com |
| YC Page | https://speedrun.a16z.com/companies/heavi |
| Batch | Not confirmed (listed URL is a16z Speedrun, not YC; page returned 404 at time of research) |
| Industry | AI, Marketplace, B2B / |
| Team Size | 2 |
| Location | San Francisco, California, United States of America |
| Tags | AI, Marketplace, B2B |
| YC Partner | Not listed (a16z Speedrun page returned 404) |
| Emails | founders@heaviai.com (company website), sanjay@heaviai.com, mike@heaviai.com (a16z Speedrun application) |

## The Idea

**Problem:** As experienced diesel technicians retire, heavy-duty repair shops lose decades of institutional knowledge. 65.5% of shops reported being understaffed in 2025, with a 19.3% average vacancy rate (Heavy Duty Journal, 2025). An estimated shortage of 67,000 diesel technicians is projected by 2026 (ATRI, Aug 2025). Annual openings of ~28,500 positions face fewer than 11,000 training program completions, creating a 17,000+ annual deficit (ATRI, Aug 2025). The result: longer service times, harder-to-find parts, and fleet customers losing revenue per day of vehicle downtime. Current solutions are fragmented: shops rely on experienced technicians' memory, manual catalog lookups, and phone calls to multiple vendors for parts sourcing.

**Approach:** Heavi is building an AI-powered parts procurement platform for heavy-duty vehicles. The product accepts a VIN or year/make/model and part description, then searches OE systems, aftermarket catalogs, ecommerce sites, and contacts vendors on the user's behalf (heaviai.com, Apr 2026). It coordinates ordering and delivery. The company claims it can "Find Parts 75% Faster" (heaviai.com). The broader vision per the a16z Speedrun application is an "AI workforce" replacing the institutional knowledge that retiring technicians take with them.

**Differentiation:** Existing shop management platforms (Fullbay, Decisiv, ShopView) focus on workflow management, invoicing, and scheduling. Mitchell 1 TruckSeries provides OEM diagnostic and repair information. Heavi's approach is specifically AI-automated parts procurement — acting as an autonomous agent that searches across multiple sources and contacts vendors, rather than providing a static catalog or shop management tool. [Inferred]: This agent-based approach differs from catalog-search tools by handling the full procurement workflow end-to-end, including vendor communication.

**Business Model:** No pricing page found on heaviai.com. The company reports $100,000 in contracted revenue from 5 design partners (a16z Speedrun application). [Inferred]: Likely SaaS or transaction-based pricing given the B2B/marketplace tags; the "marketplace" label suggests potential take-rate on parts transactions as the model matures.

**TAM/SAM:** The company claims a $250B heavy-duty repair and service market (a16z Speedrun application). Third-party data: the global heavy-duty truck parts aftermarket was estimated at $89.06B in 2024, growing at 4.22% CAGR to $114.14B by 2030 (360iResearch, 2025 via search snippet). The US heavy-duty truck parts dealer market is $25.5B in 2026 (IBISWorld, 2026 via search snippet). The US truck repair services market is $18.1B in 2026 (IBISWorld, 2026 via search snippet). The heavy-duty automotive aftermarket globally is projected to reach $190.24B by 2033 at 3.01% CAGR (IMARC Group via search snippet). [Inferred]: The company's $250B figure likely encompasses global repair labor plus parts plus adjacent heavy equipment segments beyond Class 6-8 trucks.

**GTM / Distribution:** The company is live with 5 design partners (a16z Speedrun application). The website offers early access signup (heaviai.com, Apr 2026). [Inferred]: Initial GTM is direct sales to independent heavy-duty repair shops, leveraging Sanjay Dasari's ASE T8 certification credibility and domain network. The marketplace tag suggests an eventual platform model connecting shops to parts vendors.

## Defensibility

- **Data moat (potential):** Each parts search generates proprietary data on pricing, availability, fitment, and vendor reliability across the fragmented heavy-duty parts ecosystem. [Inferred]: Over time this creates a compounding data advantage that improves search accuracy and vendor matching.
- **Institutional knowledge capture:** The core value proposition is digitizing retiring technicians' knowledge. [Inferred]: If the AI accumulates shop-specific and vehicle-specific repair/parts knowledge, switching costs increase as the system becomes embedded in daily workflows.
- **Domain complexity barrier:** Heavy-duty parts procurement involves thousands of OEM part numbers, cross-references, fitment databases, and vendor relationships across a fragmented market. [Inferred]: This domain-specific complexity creates a higher barrier to entry than general-purpose AI procurement tools.

No defensibility signals from patents, network effects, or regulatory barriers found in public sources at this stage.

**Market structure:** Incumbents like Fullbay and Decisiv have built shop management and service relationship platforms. [Inferred]: Adding an AI-first autonomous procurement agent would require these incumbents to fundamentally rearchitect their products from workflow tools to agentic systems, and their existing revenue models (per-shop SaaS subscriptions) may not align with a procurement marketplace take-rate model. However, Fullbay's acquisition of Pitstop (Mar 2026) signals willingness to add AI capabilities.

**Commoditization risk:** General-purpose AI companies or large parts distributors (e.g., FleetPride, TruckPro) could build similar procurement agents. The parts data itself is not proprietary. [Inferred]: The defensibility depends on speed of domain-specific data accumulation and depth of vendor integrations rather than on any structural technical moat.

## Market & Traction

**Traction signals:**
- $100,000 contracted revenue from 5 design partners (a16z Speedrun application)
- Design partners report up to 30% employee time savings and ~40% margin improvement (a16z Speedrun application)
- Website launched with early access signup and login portal at app.heaviai.com (heaviai.com, Apr 2, 2026)
- LinkedIn company page exists at linkedin.com/company/heavi-ai; follower count not retrievable
- Company Twitter/X account: not found
- Product Hunt launch: not found
- Press coverage: not found
- App store / Chrome extension: not found
- Discord/Slack community: not found

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Heavi |
|---|---|---|---|
| **Fullbay** | $23M+ (incl. JMI Equity growth investment, Jul 2024) | $19.4M (2024, Latka) | Full shop management ERP (invoicing, scheduling, parts, workflow); broader scope but not AI-first procurement agent. Acquired Pitstop for AI/predictive maintenance (Mar 2026). |
| **Decisiv** | $63.2M (incl. Morgan Stanley, Kayne Anderson) | Revenue not public | Service Relationship Management SaaS; 74,000+ fleet owners, 7M+ assets, 14,000+ daily repair events (Decisiv website). Enterprise OEM-focused vs. Heavi's independent shop focus. |
| **Pitstop** (acquired by Fullbay) | $5.47M raised pre-acquisition (Tracxn) | Revenue not public | AI predictive maintenance for fleets (preventing breakdowns), not parts procurement. 94%+ failure prediction accuracy (Pitstop website). Now integrated into Fullbay. |
| **Mitchell 1 TruckSeries** | Part of Snap-on (public company) | Revenue not broken out | OEM-sourced diagnostic and repair information database; reference tool, not an autonomous procurement agent. |

**Why now:**
- The diesel technician shortage has reached a critical inflection: 65.5% of shops understaffed, 67,000 technician shortfall projected by 2026 (ATRI, Aug 2025).
- [Inferred]: LLM capabilities crossing the threshold for reliable agentic workflows (multi-source search, vendor communication, fitment verification) in 2024-2025 made an autonomous procurement agent technically feasible for the first time.
- Fullbay's acquisition of Pitstop (Mar 2026) and the broader industry trend toward AI-embedded maintenance tools (Heavy Duty Trucking, 2026) signal market readiness for AI in heavy-duty repair operations.

## Founders & Team

**Sanjay Dasari** — Co-founder (likely CEO)
- Co-founded WayCool Foods (2015), an agricultural supply chain marketplace in India that scaled to $250M+ ARR and ~$750M valuation (Entrepreneur India; Inc42). WayCool raised $366M total across 28 rounds (Tracxn); approximately $200M in equity funding (a16z Speedrun application).
- Exited WayCool in late 2024, transitioning to advisory role (YourStory, Dec 2024; Inc42).
- ASE T8 Certified Diesel Mechanic — the national standard for heavy-duty truck service excellence (a16z Speedrun application).
- MBA, Harvard Business School (LinkedIn). BS Entrepreneurship, Babson College (Entrepreneur India).
- Forbes Asia 30 Under 30 (2019); Entrepreneur India 35 Under 35 (Entrepreneur India).
- Father: Vinod Dasari, former Managing Director of Ashok Leyland, one of India's largest commercial vehicle manufacturers (Entrepreneur India).
- Twitter/X: @SanjayVDasari — follower count not retrievable
- LinkedIn: linkedin.com/in/sanjaydasari
- GitHub: No public repos found

**Michael Holkesvik** — Co-founder / CTO
- Previously CTO at NCX (formerly SilviaTerra), a carbon marketplace that raised $74.4M from Union Square Ventures, JP Morgan, and Marc Benioff/TIME Ventures (Tracxn; Crunchbase News). Scaled landowner marketplace from 0 to 15,000 members in under 2 years (a16z Speedrun application). NCX discontinued its core 1-year forest carbon program in 2022 after Verra declined to certify it, and cut staff by 40% (Carbon Herald; QC Intel).
- Previously Engineer at Redfin; Investor at Pioneer (holkesvik.com).
- Member at South Park Commons (ZoomInfo).
- BS Computer Science, Yale University (holkesvik.com).
- Raised in Aberdeen, South Dakota (holkesvik.com).
- Twitter/X: @mholkesvik — follower count not retrievable
- LinkedIn: linkedin.com/in/michael-holkesvik-69a44b21
- GitHub: github.com/mholkesvik — 5 public repos, 37 stars total, 20 followers (GitHub)

**Co-founder relationship:** No shared prior employer or university identified between Dasari (Babson, Harvard, WayCool in India) and Holkesvik (Yale, Redfin, NCX). Both are based in San Francisco; Holkesvik is listed as a South Park Commons member (ZoomInfo). [Inferred]: They likely connected through the SF startup ecosystem or South Park Commons network.

**Founder-market fit:** Dasari brings a rare combination: he is both an ASE T8 Certified Diesel Mechanic (direct domain expertise in heavy-duty vehicle repair) and a scaled founder who grew an agricultural supply chain marketplace to $250M+ ARR. His father led Ashok Leyland, a major commercial vehicle manufacturer, providing deep industry network access. Holkesvik brings technical execution credentials — he built NCX's satellite imagery and ML-powered marketplace as CTO and scaled it to 15,000 members. The pairing covers domain expertise (Dasari), marketplace scaling experience (both), and technical AI/ML implementation (Holkesvik).

## Key Risks

**1. Narrow initial product scope vs. incumbent platform expansion:** Heavi's current product focuses on AI-powered parts procurement. Fullbay (the market leader in heavy-duty shop management with $19.4M revenue) acquired Pitstop's AI capabilities in March 2026 (PR Newswire, Mar 2026) and has the distribution (5,000+ shops on its platform) to add AI procurement features. Mitigation: Heavi's agent-first architecture may allow faster iteration on procurement-specific AI than Fullbay's bolt-on approach.

**2. Parts data access dependency:** The product's value depends on real-time access to OE systems, aftermarket catalogs, and ecommerce sites. These data sources may restrict API/scraping access or charge for data, creating cost and availability risk. No public data on Heavi's data partnerships or vendor agreements found.

**3. Heavy-duty repair shop sales cycle:** Independent heavy-duty repair shops are traditionally slow technology adopters (Inside the 2025-2026 State of Heavy-Duty Repair, Trucks Parts & Service). A 2-person team selling into a fragmented market of small shops (average shop size is small) faces distribution challenges. Mitigation: the $100,000 contracted revenue from 5 design partners (a16z Speedrun application) suggests initial willingness to pay.

**4. NCX trajectory of co-founder's prior company:** Holkesvik's prior company NCX raised $74.4M but its core carbon credit program was discontinued after Verra declined certification in 2022, followed by 40% layoffs (Carbon Herald; QC Intel). While this demonstrates fundraising ability, it also represents a prior venture that faced significant regulatory/market setbacks.

**5. $250B TAM claim unverified:** The company claims a $250B market. The closest third-party figure is the global heavy-duty automotive aftermarket at $190.24B projected for 2033 (IMARC Group via search snippet). The US-specific parts + repair market sums to roughly $43.6B ($25.5B parts dealers + $18.1B repair services, IBISWorld 2026). The SAM for AI procurement tools within this is substantially smaller.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global heavy-duty truck parts aftermarket: $89.06B in 2024, 4.22% CAGR to $114.14B by 2030 (360iResearch, 2025 via search snippet). US truck parts dealers: $25.5B (IBISWorld, 2026 via search snippet). Company claims $250B (a16z Speedrun application). |
| SAM | No public data found |
| Traction | $100K contracted revenue from 5 design partners; up to 30% employee time savings and ~40% margin improvement reported by partners (a16z Speedrun application) |
| Revenue Signal | $100,000 contracted revenue (a16z Speedrun application). No pricing page found. |
| Founders | Sanjay Dasari (Co-founder): exited WayCool ($250M+ ARR, $366M raised), ASE T8 Diesel Mechanic, Harvard MBA. Michael Holkesvik (Co-founder/CTO): ex-CTO NCX ($74.4M raised), Yale CS, Redfin engineer. |
| Competitors | Fullbay ($23M+ raised, $19.4M revenue 2024, shop management ERP); Decisiv ($63.2M raised, revenue unknown, service relationship management); Pitstop ($5.47M raised, acquired by Fullbay Mar 2026, predictive maintenance); Mitchell 1 TruckSeries (Snap-on subsidiary, diagnostic info) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent platform expansion (Fullbay + Pitstop AI), parts data access dependency, fragmented low-tech customer base |
| Founder Reach | Sanjay Dasari: Twitter @SanjayVDasari (count not retrievable), LinkedIn linkedin.com/in/sanjaydasari. Michael Holkesvik: Twitter @mholkesvik (count not retrievable), LinkedIn linkedin.com/in/michael-holkesvik-69a44b21, GitHub 37 stars (github.com/mholkesvik). |
| Distribution Signals | No public data found |
| Emails | founders@heaviai.com (company website), sanjay@heaviai.com, mike@heaviai.com (a16z Speedrun application) |
