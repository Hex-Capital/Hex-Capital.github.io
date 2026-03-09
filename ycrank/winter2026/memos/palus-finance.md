# Palus Finance

> Better yields on idle cash for startups and SMBs

| Field | Value |
|-------|-------|
| Website | https://palus.finance |
| YC Page | https://www.ycombinator.com/companies/palus-finance |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech |
| Team Size | 2 |
| Location | No public data found |
| Tags | Fintech, Finance, B2B |
| YC Partner | Brad Flora |
| Emails | No public data found |

## The Idea

**Problem:** After a fundraise, startups typically park 18–24 months of cash in a money market fund (MMF) and draw it down gradually. They pay for same-day liquidity on the entire balance, even though most of that cash will not be needed for months. Current startup treasury products (Mercury Treasury, Brex Treasury, Rho Treasury) all sweep into the same MMFs and charge a fee, yielding roughly 3.5%. This leaves an estimated $100–150K per year on the table for every $10M in idle reserves (YC company page).

**Approach:** Palus builds a bond portfolio of short-duration floating-rate agency mortgage-backed securities (MBS) — the same asset class used by Fortune 500 treasury teams — and makes it accessible to startup treasuries. The underlying strategy is currently executed via the MBSF ETF, managed by Regan Capital (the largest floating-rate agency MBS ETF), with plans to develop a dedicated separately managed account using the same strategy (HN Launch post, March 2026). The platform connects to a founder's existing bank account via Plaid, and assets are held by Alpaca, an SEC-licensed custodian, in the customer's name. Target yield is 4.5–5%, with liquidity typically available in 1–2 business days (HN Launch post).

**Differentiation:** Every existing startup treasury product — Mercury, Brex, Rho, Arc — sweeps cash into an MMF and charges a management fee. Palus is differentiated by its investment strategy: agency MBS rather than money market instruments. The 1–1.5% yield premium over MMFs comes from sacrificing same-day liquidity (accepting 1–2 day settlement) rather than taking on credit risk, since agency MBS carry implicit or explicit federal government backing via Ginnie Mae, Fannie Mae, and Freddie Mac (HN Launch post). The founders originally entered YC with a consumer higher-yield savings product but pivoted to startup treasury after recognizing their own need and demand from other YC batch companies (HN search snippet).

**Business Model:** Flat 0.25% annual fee on assets under management, compared to 0.15–0.60% charged by competitors depending on balance size (HN Launch post). No trading fees or hidden spreads mentioned. [Inferred]: Revenue scales linearly with AUM; at $100M AUM this model would generate ~$250K in annual revenue.

**TAM/SAM:** The global treasury management system market was valued at $7.5B in 2024 and is projected to reach $12.5B by 2033 at a 6.5% CAGR (Verified Market Reports, 2024 via search snippet). The broader cash management system market is estimated at $21.78B in 2026 (Mordor Intelligence, 2026 via search snippet). No public SAM estimate specific to startup/SMB treasury management was found. [Inferred]: The serviceable market is a fraction of these figures, bounded by the total idle cash held by VC-backed startups in the U.S., which likely runs in the tens of billions of dollars given that U.S. venture-backed companies raised over $170B in 2024.

**GTM / Distribution:** The company is live with early customers acquired from within its YC W26 batch and is accepting new customers on a rolling basis (HN Launch post). The company targets Series A and earlier startups, noting that Series B+ companies are often restricted by venture debt covenants requiring specific bank relationships (HN Launch post). [Inferred]: The most likely distribution path is founder-to-founder referrals within the YC network, expanding outward through accelerator communities and startup ecosystem channels. The Plaid integration (no bank replacement required) reduces onboarding friction.

## Defensibility

**Data advantage (potential):** As Palus accumulates information on startup cash drawdown patterns, it could optimize portfolio duration-matching in ways competitors without this data cannot replicate. This advantage does not exist today at the company's current scale.

**Investment strategy differentiation:** The core differentiator — a bond portfolio rather than an MMF wrapper — is a strategy any competitor could in theory adopt. However, building the institutional relationships (e.g., with Regan Capital), obtaining necessary regulatory licenses, and developing the risk management infrastructure represents meaningful execution complexity.

**Switching costs:** Moderate. Once a startup's treasury is invested in a bond portfolio with Palus, moving funds involves selling positions and settling over 1–2 days, creating friction compared to withdrawing from an MMF. However, this is not a high barrier.

**Market structure:** Incumbent startup banks (Mercury, Brex) have built their treasury products as ancillary features to their core banking offerings. Their treasury products use MMFs because MMFs offer the same-day liquidity that complements a banking product. Offering a 1–2 day liquidity bond product would introduce complexity to their banking UX and could confuse customers who expect instant access. Additionally, Mercury and Brex earn revenue on treasury AUM via MMF fee-sharing arrangements, and switching to a lower-margin bond strategy could cannibalize existing revenue. [Inferred]: This creates a classic innovator's dilemma — incumbents are disincentivized from adopting the superior-yield strategy because it conflicts with their existing business model and UX paradigm.

**Commoditization risk:** The investment strategy (floating-rate agency MBS) is well-understood in institutional finance and is not proprietary. A funded competitor or an incumbent could replicate the approach. The primary barriers are execution complexity (regulatory compliance, custodian relationships, portfolio management partnerships) and willingness to serve the startup segment with a non-MMF product.

## Market & Traction

**Traction signals:**
- Live product with early customers from YC W26 batch; no specific customer count, AUM, or revenue figures disclosed (HN Launch post, March 2026)
- Launch HN post published approximately March 8, 2026 (Hacker News)
- Twitter/X: @PalusFinance — 5 followers (X.com via search snippet, March 2026); count not independently verified via page fetch
- LinkedIn: /company/palus-finance/ — follower count not retrievable
- No Product Hunt launch found
- No press coverage found beyond the HN Launch post
- No app store presence (web-based product)
- 0 active job postings (YC page)
- Website rendered primarily via JavaScript; substantive content not extractable via static fetch

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Palus |
|------------|---------|-------------|------------------------------|
| **Mercury** | ~$346M total, $3.5B valuation (Series C, Sequoia-led, March 2025) (TechCrunch) | $500M in 2024; $650M annualized in 2025 (Fortune, Nov 2025) | Full-stack startup banking platform with treasury as an add-on; MMF-based yields (~3.5%); same-day liquidity |
| **Arc** | $31M equity + $150M credit facility (Series A, Left Lane Capital, 2022) (TechCrunch) | No public data found | Treasury yield + cash intelligence + capital access for SaaS startups; MMF-based |
| **Rho** | $207M+ total; $150M Series C (Clay, 2024 via search snippet) | No public data found | Unified finance operations platform (cards, banking, AP/AR, treasury); MMF-based |
| **Meow** | $22M Series A (Tiger Global, 2022) (BusinessWire) | No public data found | T-bill laddering and MMF access; 1 basis point/month fee on T-bills; ~$100M AUM early (BusinessWire, 2022) |

**Why now:**
- Interest rate environment: As of early 2026, the Fed funds rate has been declining from 2023-2024 highs, compressing MMF yields and widening the relative attractiveness of the 1–1.5% spread Palus offers over MMFs. [Inferred]: In a lower-rate environment, the incremental yield from agency MBS becomes proportionally more valuable, making the Palus value proposition more compelling.
- Plaid infrastructure maturity: Plaid's broad bank connectivity enables Palus to integrate with existing bank accounts without requiring a bank switch, reducing the onboarding friction that historically limited treasury management adoption.
- [Inferred]: The proliferation of startup treasury products (Mercury, Brex, Arc, Rho) has educated the market on the concept of earning yield on idle cash, creating awareness that Palus can build upon while offering a differentiated strategy.

## Founders & Team

**Sam Lushtak** — Co-founder & CEO
- Education: B.S. in Information & Data Sciences and Business, Economics & Management from Caltech/Pomona College (3-2 dual degree program), 3.9 GPA (LinkedIn via search snippet)
- Previously: Senior Consultant, AI/ML at Spur Reply (LinkedIn via search snippet)
- Built investment research platforms for asset managers managing $3T+ AUM (YC company page)
- Contributed to Caltech CS156 COVID-19 prediction model (Caltech CS156 project page)
- Patent application: "Distance points interactive interface and related methods" (search snippet)
- Twitter/X: @Sam_Lushtak — follower count not retrievable
- LinkedIn: linkedin.com/in/samuel-lushtak — headline: "Senior Consultant, AI/ML - Spur Reply" (may be outdated given current CEO role)
- GitHub: github.com/samuellush — 6 public repos, 2 followers, Arctic Code Vault Contributor; no repos with significant star counts

**Michael Gonzalez** — Co-founder & CTO
- Education: Caltech alumnus (YC company page)
- Previously: Built monitoring software for quantum computing optimization (YC company page)
- Twitter/X: @michaelatpalus — account not independently verified; follower count not retrievable
- LinkedIn: No public profile found matching this individual at Palus Finance
- GitHub: No public profile found

**Co-founder relationship:** Both founders are Caltech alumni (YC company page), indicating they likely met during their studies.

**Founder-market fit:** Sam Lushtak's experience building investment research platforms for asset managers managing $3T+ AUM provides direct domain exposure to institutional fixed-income strategies, including the agency MBS approach that Palus employs. His AI/ML background is relevant to optimizing portfolio construction and cash flow modeling. Michael Gonzalez's engineering background at Caltech provides the technical foundation for building the platform. The pivot from a consumer savings product to startup treasury was driven by the founders' own experience managing their startup's cash after receiving YC funding (HN Launch post).

## Key Risks

**Interest rate sensitivity of value proposition:** Palus's core pitch — 1–1.5% yield premium over MMFs — is a function of the current interest rate environment and the spread between agency MBS yields and MMF rates. If MMF yields rise (due to Fed rate increases) or MBS spreads compress, the incremental value proposition narrows. The company's attractiveness is partially tied to macroeconomic conditions outside its control.

**Regulatory and compliance burden:** Operating as an investment advisor directing client funds into securities (agency MBS) entails SEC and FINRA regulatory requirements. The company uses Alpaca as custodian, but must maintain its own compliance posture. Any regulatory changes affecting agency MBS treatment or startup treasury regulations could increase operating costs for a 2-person team.

**AUM concentration risk:** As a pre-seed company with early customers primarily from its YC batch, Palus likely has concentrated AUM across a small number of accounts. A single large customer withdrawal could materially impact fee revenue and force portfolio liquidation at suboptimal timing.

**Incumbent response:** Mercury ($650M annualized revenue, $3.5B valuation) could introduce a bond-portfolio treasury tier as an add-on feature, leveraging its existing 200K+ business customers (Mercury Wikipedia page via search snippet). While the innovator's dilemma dynamics described above provide some protection, Mercury has the resources and customer base to overcome these barriers if the opportunity proves large enough.

**Liquidity mismatch communication risk:** The product involves a tradeoff — higher yield in exchange for 1–2 day liquidity vs. same-day liquidity from MMFs. If a customer faces an unexpected cash need and cannot access funds immediately, the resulting negative experience could damage reputation in the tight-knit startup community where word-of-mouth is the primary distribution channel.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Treasury management system market: $7.5B in 2024, projected $12.5B by 2033, 6.5% CAGR (Verified Market Reports via search snippet) |
| SAM | No public data found specific to startup/SMB treasury segment |
| Traction | Live with early YC W26 batch customers; no specific user count, AUM, or revenue disclosed (HN Launch post, March 2026) |
| Revenue Signal | 0.25% annual fee on AUM (HN Launch post); no revenue figures disclosed |
| Founders | Sam Lushtak (CEO): Caltech/Pomona CS, AI/ML consultant, built investment research platforms for $3T+ AUM managers. Michael Gonzalez (CTO): Caltech alumnus, built monitoring software for quantum computing. |
| Competitors | Mercury ($346M raised, $500M 2024 revenue, full-stack banking + MMF treasury), Arc ($31M equity raised, revenue unknown, treasury + capital access), Rho ($207M+ raised, revenue unknown, unified finance ops + MMF treasury), Meow ($22M raised, revenue unknown, T-bill laddering) |
| Moat Signals | Differentiated investment strategy (agency MBS vs. MMF); potential data advantage from startup cash-flow patterns (unproven at current scale) |
| Risk Factors | Interest rate sensitivity of value proposition, incumbent response from Mercury/Brex, liquidity mismatch communication risk |
| Founder Reach | Sam Lushtak: Twitter @Sam_Lushtak (count not retrievable), LinkedIn 500+, GitHub 2 followers. Michael Gonzalez: Twitter @michaelatpalus (count not retrievable), LinkedIn not found, GitHub not found. Company: @PalusFinance 5 followers (X.com via search snippet) |
| Distribution Signals | HN Launch post (March 2026); no Product Hunt, app store, or other distribution signals found |
| Emails | No public data found |
