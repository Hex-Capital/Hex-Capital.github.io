# Crebit

> Stablecoin Infrastructure for Payments into the U.S.

| Field | Value |
|-------|-------|
| Website | https://www.crebitpay.com |
| YC Page | https://speedrun.a16z.com/companies/crebit |
| Batch | a16z Speedrun — likely SR006 / Winter-Spring 2026 cohort (YC page URL returned 404; IssueWire and LinkedIn confirm a16z Speedrun backing, not Y Combinator) |
| Industry | Fintech |
| Team Size | 2 |
| Location | San Francisco, California, United States of America (registered office: 1522 Western Ave STE 24214, Seattle, WA 98101 per IssueWire) |
| Tags | Fintech |
| YC Partner | Not listed (a16z Speedrun page returned 404 at time of research) |
| Emails | simmi@getcrebit.com (company data), info@getcrebit.com (IssueWire) |

## The Idea

**Problem:** International students and immigrants face 2–10% markups on cross-border payments into the U.S. for tuition, living expenses, and remittances (Her Hustle / Teli Labs). Traditional bank wires involve hidden FX fees, multi-day settlement, and opaque pricing. Incumbent platforms like Flywire charge ~2–3% markup above live exchange rates, and PayMyTuition charges ~1–2% (IBRLive comparison). The U.S. hosts over 1 million international students annually, each potentially sending tens of thousands of dollars per year in tuition alone.

**Approach:** Crebit uses stablecoins as a settlement layer to bypass correspondent banking networks. Users pay in local currency via local rails — PIX (Brazil), UPI (India), M-Pesa (Africa), PSE/Bre-B (Colombia), SPEI (Mexico) — which is converted to stablecoins and then to USD, EUR, or GBP for delivery (IssueWire). Most transactions complete within one business hour (IssueWire). The platform embeds directly into university payment portals (company description).

**Differentiation:** Unlike Flywire and Convera, which route through traditional correspondent banking, Crebit uses stablecoin rails for the cross-border leg, reducing intermediary costs. Unlike Latitude ($8M raised, Fortune Mar 2026), which focuses on outbound payouts *from* the U.S. to 50+ countries, Crebit focuses on *inbound* payments into the U.S. — the reverse flow direction. Crebit claims to be 4–10% cheaper than traditional banks (Her Hustle / Teli Labs).

**Business Model:** No public pricing page found (website returned only analytics tracking code at time of research). [Inferred]: Most likely monetization is a per-transaction FX spread or flat fee on each transfer, consistent with the international payments space.

**TAM/SAM:** The global cross-border payments market had a TAM of $194.6T in 2024, forecast to reach $320.2T by 2032 (FXC Intelligence). The non-wholesale segment was $39.9T in 2024, growing at 6.2% CAGR to $64.5T by 2032 (FXC Intelligence). No public TAM/SAM data found for the international student tuition payment subsegment specifically.

**GTM / Distribution:** Crebit embeds into university payment portals, currently partnering with 45+ U.S. universities (IssueWire). The company also hosted a developer hackathon on Devpost ("Crebit Pay - Hackathon: Build scalable tech to revolutionize global finance") as a community-building signal (Devpost). [Inferred]: University-first B2B2C distribution — sign the bursar's office, then capture the student flow — is the primary GTM, mirroring Flywire's and PayMyTuition's playbook.

## Defensibility

- **Local rail integrations:** Supporting PIX, UPI, M-Pesa, PSE, SPEI requires per-country regulatory compliance and banking partnerships (IssueWire). Each integration adds switching cost for universities already embedded with Crebit.
- **University portal embedding:** Direct integration into payment portals creates institutional switching costs once live (company description).
- **Regulatory compliance:** Full KYC/AML compliance and end-to-end encryption (IssueWire). Money transmission licensing is a barrier to new entrants.

[Inferred]: No network effects or proprietary data moat evident at this stage. Defensibility could develop via density of university integrations and local rail coverage, but is unproven.

**Market structure:** Incumbents like Flywire generate revenue from FX spreads built on correspondent banking rails. Adopting stablecoin settlement would cannibalize their existing spread-based revenue model. Flywire flagged ~$30M in potential revenue pressure from immigration policy changes affecting student flows (Investing.com), suggesting sensitivity to volume, not margin innovation. [Inferred]: Business model cannibalization is the structural barrier — incumbents profit from the inefficiency Crebit eliminates.

**Commoditization risk:** Stripe launched stablecoin payouts across 100+ countries (Stripe newsroom, 2025). Mastercard unveiled end-to-end stablecoin transaction capabilities (Mastercard newsroom, Apr 2025). Brex announced stablecoin payments (Brex journal). Large infrastructure players could replicate the stablecoin-to-fiat bridge. The inbound-to-U.S. focus and university portal embedding provide some differentiation, but the core technology is replicable.

## Market & Traction

**Traction signals:**
- $1M+ in FX volume processed within first three months of operation (Her Hustle / Teli Labs)
- 45+ U.S. university partners (IssueWire)
- $2.5M total funding raised (IssueWire)
- Launched February 14, 2026 (IssueWire)
- iOS app live (App Store ID: 6755078024) (IssueWire)
- Operating in Brazil, Mexico, Nigeria, Philippines, UAE, US, and Europe (IssueWire)
- Customer testimonial: "someone just bought a home through Crebit" (Simmi Sen LinkedIn post)
- Crebit developer hackathon hosted on Devpost (Devpost)
- Company LinkedIn page: linkedin.com/company/crebit-pay/ (LinkedIn)
- No Product Hunt listing found
- Twitter/X company account: not found
- Discord/Slack community: not found

**Competitive landscape:**

| Competitor | Key Differentiator vs. Crebit | Funding / Revenue |
|---|---|---|
| **Flywire** (FLYW) | Public company; 140+ currencies; deep university relationships; correspondent banking rails (not stablecoin) | IPO'd May 2021; $623M TTM revenue (PitchBook/Yahoo Finance); ~$1.43B market cap |
| **Convera** (fmr. Western Union Business Solutions) | 30K+ global customers; $170B+ payments volume (2021); broad enterprise/education/NGO coverage | Acquired for $910M (BusinessWire, 2021); $500M+ annual revenue (PYMNTS) |
| **PayMyTuition** | 180+ countries, 135+ currencies; ~1–2% markup; education-specific | Funding not publicly disclosed (Crunchbase) |
| **Latitude** | Stablecoin-based outbound payouts from U.S.; ex-Stripe/Coinbase/Uber founders | $8M raised led by NEA (Fortune, Mar 2026); 11 employees |

**Why now:** The GENIUS Act was signed into law on July 18, 2025, establishing the first U.S. federal regulatory framework for payment stablecoins (White House fact sheet). The founders report they started building Crebit in the summer after the GENIUS Act passed (Her Hustle / Teli Labs). [Inferred]: The GENIUS Act removed regulatory ambiguity around stablecoin use in payments, enabling startups to build compliant stablecoin-powered payment products without fear of retroactive enforcement. Concurrently, Stripe, Mastercard, and Brex all launched stablecoin payment features in 2025, signaling market validation of the thesis.

## Founders & Team

**Jensen Coonradt** — Co-Founder & CEO/CTO
- BS Electrical Engineering & Computer Science + BS Mathematical Economics, MIT (Class of 2028, on leave) (MLH profile)
- Age 19; from Aurora, Illinois; Pell Grant-eligible (MLH profile)
- Named MLH Top 50 Hackers of 2025 out of 600,000+ participants (MLH)
- Software engineering intern at Amazon and NASA (company description; MLH profile)
- Built pAIdback (AI refund platform) — secured $50K in funding; built Lendora (blockchain fractional loan marketplace) — acquired by BankSocial, scheduled for Federal Reserve pilot (MLH profile)
- AI paper on diffusion-based LLMs accepted to Tapia Conference; led NASA-funded research on urban heat islands; published PM2.5 research through FermiLab (MLH profile)
- Won $65K for student makerspace at Title I high school (MLH profile)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/jcoonradt/ — "CEO @ Crebit (a16z Speedrun)"
- GitHub: github.com/JCoonradt — 11 public repos, ~6 total stars, 3 followers

**Simmi Sen** — Co-Founder
- Stanford CS + Design (on leave) (company data)
- Founded Tints, a hand-embroidered streetwear brand worn by Offset and Meghan Trainor (Her Hustle / Teli Labs), carried in boutiques across Portland, LA, NYC, Seattle, and SF (LA Weekly; Tints website). Tints received seed funding from Taco Bell (SheSight Magazine).
- GeekWire "Junior Geek of the Month" — created mobile apps that "caught Apple's eye" (GeekWire, 2020)
- NCWIT National Award Winner (SheSight Magazine)
- Founded Rise to Independence nonprofit providing vocational training to women in Bangladesh and India (SheSight Magazine)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/simmi-sen/
- GitHub: No public profile found

**Co-founder relationship:** Met at a Bank of America scholarship program in high school, then participated in a Jane Street program together (Her Hustle / Teli Labs). Both graduated high school in 2024 (Her Hustle / Teli Labs).

**Founder-market fit:** Jensen brings deep technical credentials (MIT EECS, Amazon/NASA engineering, blockchain hackathon wins including an acquisition by BankSocial) and direct blockchain/fintech building experience. Simmi brings consumer product, design, and entrepreneurial experience (Tints brand, Stanford CS + Design). Both founders are themselves recent high school graduates (2024) who would have been college-age international-adjacent students, giving them proximity to the customer segment. No advisors, board members, or notable individual investors were found in public sources.

## Key Risks

**Name collision:** At least three other entities use the "Crebit" name — a deadpooled Brazilian fintech (Tracxn), a Colombian payroll lender (Crunchbase), and a Dubai-based financial services company (PitchBook). This creates brand confusion, SEO competition, and potential trademark conflict in fintech specifically.

**University channel concentration:** Revenue depends on university payment portal integration. Flywire has deep incumbent relationships with universities and $623M in TTM revenue to invest in retention (Yahoo Finance). Universities may resist switching payment vendors or may have exclusive contracts with incumbents.

**Immigration policy sensitivity:** Flywire management flagged ~$30M in potential revenue pressure from immigration policy changes affecting student flows (Investing.com). Crebit's core customer segment (international students paying U.S. tuition) faces the same macro exposure.

**Incumbent stablecoin adoption:** Stripe, Mastercard, and Brex all launched stablecoin payment capabilities in 2025 (respective newsrooms). If incumbents integrate stablecoin settlement into their existing products, Crebit's cost advantage narrows. Latitude ($8M, NEA-led) is building adjacent stablecoin payment infrastructure (Fortune, Mar 2026).

**Multi-jurisdiction licensing:** Operating across Brazil, Mexico, Nigeria, Philippines, UAE, US, and Europe (IssueWire) requires money transmission licenses or partnerships in each jurisdiction. Compliance costs for a 2-person team are substantial relative to resources.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $194.6T global cross-border payments in 2024, forecast $320.2T by 2032 (FXC Intelligence); non-wholesale segment $39.9T in 2024, 6.2% CAGR (FXC Intelligence) |
| SAM | No public data found for international student tuition payment subsegment |
| Traction | $1M+ FX volume processed in first 3 months (Her Hustle / Teli Labs); 45+ U.S. university partners (IssueWire); iOS app live (IssueWire); launched Feb 14, 2026 (IssueWire) |
| Revenue Signal | No public data found |
| Founders | Jensen Coonradt (CEO/CTO): MIT EECS, MLH Top 50 Hacker, Amazon/NASA intern, Lendora acquired by BankSocial. Simmi Sen (Co-Founder): Stanford CS+Design, founded Tints streetwear, NCWIT Award Winner. |
| Competitors | Flywire ($623M TTM revenue, public, ~$1.43B market cap, incumbent university relationships); Convera (acquired $910M, $500M+ revenue, 30K+ customers); PayMyTuition (private, funding undisclosed, 180+ countries); Latitude ($8M raised led by NEA, stablecoin outbound payouts) |
| Moat Signals | University portal embedding creates switching costs (company description); multi-country local rail integrations (PIX, UPI, M-Pesa, PSE, SPEI) require per-market compliance (IssueWire) |
| Risk Factors | Name collision with 3+ other "Crebit" entities, immigration policy exposure on core student segment, incumbent stablecoin adoption (Stripe/Mastercard/Brex) |
| Founder Reach | Jensen Coonradt: LinkedIn "CEO @ Crebit (a16z Speedrun)", GitHub 6 stars / 3 followers; Simmi Sen: LinkedIn linkedin.com/in/simmi-sen/; No Twitter/X accounts found for either founder |
| Distribution Signals | 45+ university integrations (IssueWire); Crebit developer hackathon on Devpost (Devpost); no Product Hunt listing found |
| Emails | simmi@getcrebit.com (company data), info@getcrebit.com (IssueWire) |
