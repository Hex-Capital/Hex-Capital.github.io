# Robby

> Agentic revenue growth for home service businesses.

| Field | Value |
|-------|-------|
| Website | https://tryrobby.com |
| YC Page | https://www.ycombinator.com/companies/robby |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Home Services, AI |
| YC Partner | Gustaf Alstromer |
| Emails | founders@tryrobby.com (YC company page via search snippet) |

## The Idea

**Problem:** Home services businesses (HVAC, plumbing, electrical) generate large amounts of valuable data during technician visits—aging equipment, safety issues, upgrade opportunities—that never converts into revenue. Technicians observe these opportunities in the field but lack the tools and context to act on them. Office staff and GMs have no systematic way to capture, prioritize, or follow up on these leads. The industry relies on technicians' ad-hoc memory and manual CRM data entry. The incumbent workflow management platforms (ServiceTitan, Jobber, Housecall Pro) focus on scheduling, dispatching, and invoicing rather than revenue generation from existing customer touchpoints.

**Approach:** Robby is an AI engine that combines existing customer data with third-party data sources to identify revenue opportunities before, during, and after every technician visit. Pre-job, the AI delivers customer context and job history to the technician. On-site, it provides real-time assistance with parts identification, equipment questions, and talking points to support upselling (e.g., thermostat upgrades, maintenance plans). Post-visit, it automatically documents job notes, equipment information, and follow-ups, syncing to ServiceTitan. The system generates dozens of new leads daily and provides GMs with a centralized command center to manage and drive revenue (tryrobby.com).

**Differentiation:** Existing field service management platforms (ServiceTitan, Jobber, Housecall Pro, Workiz) are operational tools focused on scheduling, dispatching, and invoicing. Robby positions itself as a revenue-generation layer that sits on top of these platforms rather than replacing them—it integrates with ServiceTitan for data sync (tryrobby.com). Arch (getarch.com), the closest direct competitor, focuses on AI-driven marketing and lead generation for ServiceTitan contractors using external data (permits, real estate transactions), but Robby differentiates by also operating at the technician level during each visit, providing real-time talking points and automatic documentation. Podium offers AI agents for local businesses broadly but is not specialized for home services technician workflows (OpenAI case study).

**Business Model:** No public pricing page found on tryrobby.com. The website offers a "Book a Demo" call-to-action with free consultation (tryrobby.com). [Inferred]: Most likely monetization path is a SaaS subscription per location or per technician, potentially with a performance-based component tied to revenue generated, given the product's direct attribution to revenue outcomes.

**TAM/SAM:** The U.S. home services market is estimated at $650–$750 billion annually (Hook Agency, 2025 via search snippet). The field service management software market was valued at $5.49 billion in 2025 and is projected to reach $9.17 billion by 2030 at a 12.5% CAGR (MarketsandMarkets, 2025 via search snippet). Home services management software specifically was valued at $596.67 million in 2026, projected to reach $1.29 billion by 2035 at 8.9% CAGR (Market Growth Reports via search snippet). Robby's SAM would be the subset of home services businesses using platforms like ServiceTitan that have field technicians generating revenue opportunities—no public SAM estimate found specific to this niche.

**GTM / Distribution:** The company has 9+ named paying customers: Abe, Barrett, Blue Knight, Lake Norman, Minuteman, MPD, Murphy's, Premier Mechanical, and Wilson (tryrobby.com). A custom subdomain exists for at least one customer (premier-mech.tryrobby.com, via search results). The team spent months riding along with technicians and shadowing every office position; they are also studying for the EPA 608 certification to become certified technicians themselves (YC company page). [Inferred]: Distribution appears to be direct sales to home services business owners/GMs, likely leveraging Joseph Schwarzmann's Bain network in the PE-backed home services sector and hands-on field relationships built during the shadowing period.

## Defensibility

**Data flywheel:** Robby collects additional data from every technician visit, combining customer data and third-party data (YC company page). As more visits are logged, the system accumulates proprietary data on equipment conditions, customer preferences, and conversion patterns that could improve lead quality and talking point effectiveness over time. This data advantage grows with each customer and each visit.

**Domain embedding:** The team's strategy of riding along with technicians, shadowing office positions, and pursuing EPA 608 technician certification (YC company page) suggests deep workflow integration that creates switching costs once technicians and GMs rely on Robby's pre-job intelligence and automatic documentation. ServiceTitan sync integration creates an additional switching cost layer.

**Market structure:** ServiceTitan ($9B market cap, FY2026 revenue guidance $895–905M; servicetitan.com press release) is the dominant platform but has historically focused on operational workflows (scheduling, dispatching, invoicing). ServiceTitan has announced AI features including Atlas Campaign Recommendations, Smarter Routing, and SMS Booking Agent for 2026 (servicetitan.com blog). However, ServiceTitan's business model is built around being the system of record for operations; building a revenue-generation AI layer that arms technicians with competitive upsell talking points could cannibalize their relationships with customers who prefer a neutral operational platform. [Inferred]: The structural barrier is that ServiceTitan optimizes for operational efficiency across the entire customer base, while Robby optimizes for revenue maximization per visit—a different objective function that could create tension with ServiceTitan's platform positioning if pursued internally.

**Commoditization risk:** The core technology (combining CRM data with third-party data to generate leads and talking points) is technically replicable. ServiceTitan, Housecall Pro, or Jobber could build similar AI features as extensions of their existing platforms. Arch (getarch.com) already provides overlapping AI-driven lead generation and upsell identification for ServiceTitan users. The barrier is primarily in the domain-specific data models and technician-level workflow integration rather than fundamental technical complexity.

## Market & Traction

**Traction signals:**
- 9+ named paying customers (tryrobby.com): Abe, Barrett, Blue Knight, Lake Norman, Minuteman, MPD, Murphy's, Premier Mechanical, Wilson
- Customer testimonial: "Several paying customers that are each uncovering 6 figures in additional revenue opportunities every week" (YC company page)
- Customer testimonial: "On our first day of launch, we helped close $40k in new business within an hour" (YC company page)
- Website claims: $135,000 additional revenue per technician annually, 15% reduction in callback/return visits, 92% of technicians would recommend Robby (tryrobby.com)
- Company Twitter/X: @robby_assistant (YC tweet, Feb 2026; follower count not retrievable due to JavaScript rendering)
- YC account launch tweet referencing @robby_assistant and @FerozeMohideen (x.com/ycombinator, Feb 2026)
- Company LinkedIn: linkedin.com/company/tryrobby, listed as "Robby (YC W26)" (LinkedIn search results)
- Press: IBTimes article "The British Founder Disrupting U.S. Home Services" (ibtimes.com; article content not extractable via WebFetch)
- Demo site available at demo.tryrobby.com (search results)
- Funding: $500K from Y Combinator (tryrobby.com)
- No Product Hunt listing found
- No app store or Chrome Web Store presence found
- No Discord/Slack community found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Robby |
|-----------|---------|-------------|------------------------------|
| ServiceTitan (public: TTAN) | $1.1B raised, IPO Dec 2024 | FY2026 guidance $895–905M (servicetitan.com) | Full operational platform (scheduling, dispatch, invoicing); Robby is a revenue-generation layer that integrates with ServiceTitan rather than competing directly |
| Jobber | $237.5M raised (Tracxn via search snippet) | $167.5M (2024, Latka via search snippet) | SMB-focused operational FSM; lacks AI-driven technician upsell and revenue intelligence features |
| Housecall Pro | ~$174M raised (Crunchbase via search snippet) | ~$200M estimated (Growjo via search snippet) | Full-service FSM for small residential teams; adding AI features but not specialized in per-visit revenue maximization |
| Workiz | $60M raised (Tracxn via search snippet) | $29.8M (2024, Latka via search snippet) | Affordable FSM for growing businesses; no public AI revenue-generation features |
| Arch (getarch.com) | No public funding data found | No public revenue data found | AI marketing and lead generation for ServiceTitan contractors using external data (permits, real estate); focused on marketing/demand generation rather than technician-level real-time assistance |

**Why now:** ServiceTitan's IPO in December 2024 (servicetitan.com) validated the home services software market at $9B+ market cap and created an ecosystem of contractors on a common data platform. [Inferred]: The convergence of three factors creates the timing: (1) LLM capabilities reaching the threshold needed for real-time technician conversation assistance and automatic documentation from unstructured field data; (2) ServiceTitan's platform maturity creating a standardized data layer that third-party AI tools can integrate with; (3) the private equity consolidation trend in home services creating larger, more professionalized operators who demand data-driven revenue optimization beyond basic scheduling.

## Founders & Team

**Vineet Jammalamadaka** — Co-founder
- B.S.E. Computer Science (Honors), University of Michigan; MS/MBA, Harvard Business School (Underscore VC Pearce Fellows article, 2025)
- Founding Engineer (employee #1) at Cloud Health Systems; built and scaled data platforms at Affinity and Uber (Underscore VC Pearce Fellows article, 2025)
- 2025 Underscore VC Pearce Fellow; initially explored an AI agent platform for customs imports/brokers (Importrix) before pivoting (Underscore VC blog)
- Twitter/X: @_vineetj (referenced in YC launch tweet; follower count not retrievable)
- LinkedIn: linkedin.com/in/vineetj23 — 500+ connections (LinkedIn search results)
- GitHub: github.com/vineetj23 — 3 public repos, 2 followers; no repos with significant star counts

**Feroze Mohideen** — Co-founder (CTO per Lifelong Health listing)
- B.S.E. Electrical/Computer Engineering and Computer Science, Summa Cum Laude, Duke University; Harvard Business School (ZoomInfo via search snippet, Clay.earth via search snippet)
- Previously: Software Engineer at Ironclad, Porter, Amazon, Coursera (RocketReach via search snippet, Clay.earth via search snippet)
- Previously joined Andreessen Horowitz as Product & Investing Partner (ZoomInfo via search snippet)
- Previously co-founded Lifelong Health with Joseph Schwarzmann (Wellfound)
- Twitter/X: @FerozeMohideen (referenced in YC launch tweet; follower count not retrievable)
- LinkedIn: linkedin.com/in/feroze-mohideen — 500+ connections (LinkedIn search results)
- GitHub: github.com/ferozemohideen — 34 public repos, 11 followers; pinned repos include a Duke Datathon 2018 winning project; no repos with significant star counts

**Joseph Schwarzmann** — Co-founder & COO
- Cambridge University; Harvard Business School (IBTimes via search snippet)
- Previously: Bain & Company consultant, focused on PE software acquisitions and home services growth projects (YC company page, IBTimes via search snippet)
- Previously co-founded Lifelong Health with Feroze Mohideen (Wellfound)
- Described as "The British Founder Disrupting U.S. Home Services" in IBTimes profile (ibtimes.com)
- Twitter/X: No public account found
- LinkedIn: No direct profile URL confirmed (LinkedIn directory shows 4 results for "Joseph Schwarzmann")
- GitHub: No public account found

**Co-founder relationship:** All three founders met at Harvard Business School (YC company page). Feroze Mohideen and Joseph Schwarzmann previously co-founded Lifelong Health together (Wellfound). Vineet Jammalamadaka and Feroze Mohideen were co-fellows in the 2025 Underscore VC Pearce Fellows program (Underscore VC blog).

**Founder-market fit:** Joseph Schwarzmann brings direct domain expertise from consulting PE firms on home services acquisitions at Bain, where he developed pattern recognition across dozens of home services businesses (IBTimes via search snippet). Vineet Jammalamadaka brings experience as a founding engineer scaling data platforms at early-stage companies (Cloud Health Systems employee #1, Affinity, Uber). Feroze Mohideen brings engineering depth from Ironclad, Porter, and Amazon, plus a Duke Datathon win suggesting data science capability. The team's commitment to riding along with technicians and pursuing EPA 608 certification indicates hands-on domain immersion. The combination of PE-level industry understanding (Schwarzmann), data platform engineering (Jammalamadaka), and full-stack product engineering (Mohideen) maps to the product's requirements of combining third-party data with field workflows.

**Prior product note:** The team pivoted to Robby from earlier ventures. Vineet explored Importrix (AI customs brokerage) through the Pearce Fellowship before pivoting when U.S. tariff dynamics shifted (Underscore VC blog, 2025). Feroze and Joseph previously co-founded Lifelong Health, a health-tech startup (Wellfound). Robby was launched in September 2025 (IBTimes via search snippet).

## Key Risks

**ServiceTitan platform dependency:** Robby syncs data to ServiceTitan and positions itself as a complementary layer (tryrobby.com). ServiceTitan has announced native AI features for 2026 including Atlas Campaign Recommendations and SMS Booking Agent (servicetitan.com blog), which could overlap with Robby's lead generation and technician assistance features. ServiceTitan could restrict API access or build competing functionality, as it controls the data platform Robby integrates with.

**Revenue attribution clarity:** The company's traction claims reference customer revenue outcomes ("6 figures in additional revenue opportunities every week," "$40K in new business within an hour") rather than Robby's own revenue or pricing (YC company page). "Revenue opportunities" uncovered is a different metric from revenue actually closed and attributed to the tool. The distinction between opportunities surfaced and deals closed may affect customer retention if expectations are misaligned.

**Serial pivot history:** The founding team has pivoted through multiple ventures in a short timeframe: Importrix/customs AI (Vineet, 2025), Lifelong Health (Feroze & Joseph, pre-2025), and now Robby (September 2025) (Underscore VC blog; Wellfound). While pivoting is common at pre-seed, three distinct product directions across the team in under a year may indicate the current direction is still being validated.

**Brand disambiguation:** "Robby" shares its name with Robby Technologies (YC S17), a separate YC company building autonomous delivery robots (ycombinator.com/companies/robby-technologies). This creates potential confusion in search results, investor databases, and YC alumni networks.

**Narrow initial vertical:** The product is currently focused on HVAC and related home services with ServiceTitan integration. Expansion to other verticals or FSM platforms would require new integrations and domain-specific data models. The 9+ named customers suggest early concentration in a single segment.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.49B field service management software market in 2025, projected $9.17B by 2030 at 12.5% CAGR (MarketsandMarkets via search snippet); broader U.S. home services market $650–750B annually (Hook Agency, 2025 via search snippet) |
| SAM | No public data found specific to AI revenue-generation tools for home services |
| Traction | 9+ named paying customers (tryrobby.com); $500K YC funding (tryrobby.com); customer testimonials: "6 figures in additional revenue opportunities per week" per customer, "$40K closed within first hour of launch" (YC page); website claims: $135K additional revenue per technician/year, 15% callback reduction, 92% technician recommendation rate (tryrobby.com); IBTimes press coverage (ibtimes.com) |
| Revenue Signal | No public pricing or company revenue data found. Website offers "Book a Demo" with free consultation (tryrobby.com) |
| Founders | Vineet Jammalamadaka: UMich CS, Harvard MBA, founding engineer Cloud Health Systems, ex-Uber/Affinity. Feroze Mohideen: Duke ECE/CS Summa Cum Laude, Harvard MBA, ex-Ironclad/Porter/Amazon, a16z Product & Investing Partner. Joseph Schwarzmann: Cambridge, Bain & Company (PE + home services), Harvard MBA |
| Competitors | ServiceTitan ($1.1B raised, IPO Dec 2024, FY2026 guidance $895–905M, full FSM platform vs. Robby's revenue layer); Jobber ($237.5M raised, $167.5M revenue 2024, SMB FSM vs. AI upsell focus); Housecall Pro (~$174M raised, ~$200M revenue est., residential FSM vs. technician revenue intelligence); Workiz ($60M raised, $29.8M revenue 2024, affordable FSM vs. AI revenue generation); Arch (funding unknown, revenue unknown, AI marketing for ServiceTitan vs. Robby's real-time technician assistance) |
| Moat Signals | Proprietary data accumulation from technician visits; deep ServiceTitan integration; EPA 608 certification pursuit signals domain embedding |
| Risk Factors | ServiceTitan platform dependency with overlapping AI features announced, serial pivot history across team, brand confusion with Robby Technologies (YC S17) |
| Founder Reach | Vineet Jammalamadaka: Twitter @_vineetj (count not retrievable), LinkedIn 500+, GitHub 3 repos/2 followers. Feroze Mohideen: Twitter @FerozeMohideen (count not retrievable), LinkedIn 500+, GitHub 34 repos/11 followers. Joseph Schwarzmann: Twitter not found, LinkedIn not confirmed, GitHub not found |
| Distribution Signals | YC W26 launch tweet by @ycombinator (Feb 2026); IBTimes feature article (ibtimes.com); demo site at demo.tryrobby.com; no Product Hunt listing found |
| Emails | founders@tryrobby.com (YC company page via search snippet) |
