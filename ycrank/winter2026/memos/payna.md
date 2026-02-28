# Payna

> Crypto/fintech compliance simplified.

| Field | Value |
|-------|-------|
| Website | https://paena.co/ |
| YC Page | https://www.ycombinator.com/companies/payna |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Finance and Accounting |
| Team Size | 0 |
| Location | San Francisco, CA (web3.career job posting) |
| Tags | Finance, B2B |

**Note on naming and description:** The YC page lists the company as "Payna" with the tagline "Crypto/fintech compliance simplified." However, the company's live website is paena.co and it operates under the name "Paena" on LinkedIn, ETHGlobal, and job boards. The actual product is an on-chain earned wage access (EWA) platform, not a compliance tool. The YC one-liner may reflect an earlier pivot or placeholder description. All product-level data below reflects the current EWA product as described on paena.co, the web3.career job posting, and the ETHGlobal showcase.

## The Idea

**Problem:** Approximately 78% of American workers live paycheck to paycheck. When workers need cash before payday, existing options are predatory payday loans, high-fee cash advances, or credit cards with compounding interest. Legacy earned wage access providers (DailyPay, EarnIn, PayActiv) charge fees that, according to Paena, amount to significantly more than necessary. These legacy EWA platforms rely on traditional banking rails and employer integrations, resulting in higher costs passed to workers or employers. (paena.co; web3.career job posting)

**Approach:** Paena is a direct-to-consumer earned wage access platform. Workers connect a US checking account, upload a pay stub for income verification (via Plaid), and receive access to a set advance limit (e.g., four $100 advances per 30-day cycle). Advances land in the worker's bank account in minutes and are automatically repaid via ACH on payday with a flat dollar fee. Under the hood, advances are funded from a pooled USDC liquidity vault (ERC-4626 style smart contract) deployed on an Ethereum L2 (Base). Each user gets an embedded Privy wallet holding USDC, but the frontend abstracts all crypto — users only see dollars. Fiat on/off-ramps use Bridge APIs; Plaid handles KYC, bank linking, and income verification. Liquidity providers deposit into the vault and earn yield from repayment fees. (ETHGlobal Buenos Aires showcase, November 2025; web3.career job posting; paena.co)

**Differentiation:** Unlike legacy EWA providers (DailyPay, EarnIn, PayActiv) that rely on employer partnerships and traditional banking infrastructure, Paena is direct-to-consumer and does not require employer participation. Its key structural difference is sourcing advance capital from DeFi liquidity pools rather than institutional credit facilities, which Paena claims enables a cost structure approximately 5% of what legacy EWA competitors charge (paena.co). The crypto layer is fully abstracted from end users. Unlike other crypto payroll startups (Rise, Bitwage, Toku), Paena targets non-crypto-native workers who need wage advances rather than crypto-savvy users seeking stablecoin paychecks.

**Business Model:** Flat fee per advance with no interest, no subscriptions, and no tips. Paena states it "takes its upside from a small share of the flat fee" (paena.co). No specific fee amount is publicly disclosed. The LP vault model creates a two-sided revenue dynamic: workers pay a flat fee, and LPs earn yield from the pool. [Inferred]: The company likely retains a spread between the fee charged to workers and the yield paid to LPs, similar to a lending protocol's reserve factor.

**TAM/SAM:** The global earned wage access market was valued at $5.70 billion in 2024 (Fortune Business Insights, 2024 via search snippet), projected to reach $33.43 billion by 2032 at a 24.8% CAGR. Alternative estimates range from $0.78 billion to $28.24 billion for 2024, depending on how the market is defined — software-only vs. broader services (Zion Market Research, MarketMind Partners, Verified Market Research, 2024 via search snippets). Over 55 million U.S. workers had access to EWA solutions by end of 2024 (market.us via search snippet). The crypto compliance solutions market, referenced in the YC tagline, was valued at approximately $198 million in 2024 (Intel Market Research via search snippet) — this appears to be a separate market from Paena's current product focus.

**GTM / Distribution:** Direct-to-consumer mobile app with waitlist signup currently live on paena.co. No employer integration required, which lowers distribution friction versus B2B2C competitors. The founding engineer job posting references React Native, indicating a mobile-first approach. [Inferred]: Most likely distribution path is performance marketing and word-of-mouth among hourly workers, potentially supplemented by community-driven growth in gig worker and service industry channels. The LP side likely targets DeFi-native yield seekers.

## Defensibility

The core defensibility mechanism is the DeFi liquidity vault architecture: as more LPs deposit into the USDC vault, the platform can fund more advances at lower costs, creating a potential liquidity-side network effect. Switching costs may develop on the worker side through payroll verification history and advance track records. The integration of DeFi smart contracts (ERC-4626 vaults, Aave v3/v4, Morpho) with fiat payment rails (ACH, Plaid, Bridge) creates technical complexity that requires dual expertise in both DeFi protocol engineering and traditional fintech infrastructure.

**Market structure:** Legacy EWA incumbents (DailyPay, PayActiv) distribute primarily through employer partnerships and are contractually integrated into payroll and HCM systems. Adopting a DeFi-funded, direct-to-consumer model would cannibalize their existing B2B2C distribution channel and require rebuilding their capital sourcing stack — a structural barrier rooted in business model conflict. Traditional lending companies funding advances through institutional credit facilities would face unit economics incompatibility if switching to DeFi LP pools, as their compliance and treasury operations are built around bank-grade credit agreements, not smart contract-based liquidity.

**Commoditization risk:** The ERC-4626 vault standard is open and well-documented. A technically capable team with DeFi and fintech experience could replicate the on-chain liquidity architecture. The consumer-facing UX (abstract crypto, show dollars) is a design pattern, not patentable IP. Regulatory compliance around earned wage access — which varies by state and is actively evolving — would be the same barrier for any entrant. The primary defensibility would need to come from LP liquidity depth and worker acquisition at scale.

## Market & Traction

**Traction signals:**
- Early access waitlist live on paena.co (no count disclosed) (paena.co, accessed February 2026)
- ETHGlobal Buenos Aires hackathon project (November 2025) — no prizes listed (ETHGlobal showcase page)
- Aaron Chen's LinkedIn YC announcement post: 37 likes, 13 comments (LinkedIn, ~December 2025)
- Founding Engineer job posting: $150K–$200K salary, 1.00% equity, San Francisco (web3.career; YC jobs page)
- Company LinkedIn page: linkedin.com/company/payna — follower count not retrievable
- Aaron Chen Twitter/X: @boewu_ — follower count not retrievable
- He Song Twitter/X: @7_hesong — follower count not retrievable
- No Product Hunt listing found
- No app store listing found
- No press coverage in named publications found
- No public revenue or user count data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Paena |
|------------|---------|-------------|------------------------------|
| **DailyPay** | $264M equity, $1.75B valuation (PRNewswire, Jan 2024) | $235M revenue (CB Insights, 2024 via search snippet) | B2B2C model with employer integration into 180+ HCM/payroll systems; requires employer participation |
| **EarnIn** | $190M equity (Tracxn, 2025 via search snippet) | Revenue not publicly disclosed | D2C like Paena but uses traditional banking rails, no crypto; tip-based model |
| **PayActiv** | $134M equity, ~$500M valuation (Bloomberg Law, 2020 via search snippet) | ~$56.1M revenue (CompWorth, 2025 via search snippet) | B2B2C with employer partnerships (Walmart, Wayfair); serves 4M+ employees at 1,000+ businesses |
| **Clair** | $68.7M equity (Fortune, May 2025) | Revenue not publicly disclosed | Embedded in payroll platforms (Gusto, TriNet); FDIC-insured via Pathward bank partnership; free default option with $4.99 instant fee |
| **Wagestream (now Stream)** | €194M equity (~$228M), plus £300M debt (EU-Startups, Jan 2026) | $46.3M revenue (CB Insights via search snippet) | UK/Europe focused; employer-integrated financial wellbeing platform with savings, budgeting tools |

Adjacent: **Toku + Pact Labs** announced a partnership for stablecoin-powered EWA (BusinessWire, September 2025), representing a crypto-native approach similar to Paena but targeting employers rather than going D2C.

**Why now:**
- The U.S. passed the GENIUS Act establishing a federal regulatory framework for stablecoins, providing legal clarity for stablecoin-based financial products (multiple news sources, 2025)
- Y Combinator began offering $500K investment in stablecoins rather than cash (PYMNTS.com, 2026), signaling institutional acceptance of stablecoin rails
- FedNow transaction volume increased 172% quarter-over-quarter in Q4 2024 (market.us via search snippet), expanding real-time payment infrastructure that EWA platforms rely on
- ERC-4626 tokenized vault standard reached maturity and broad adoption across DeFi lending protocols, enabling standardized LP pool infrastructure
- [Inferred]: The combination of stablecoin regulatory clarity, real-time payment rails, and mature DeFi vault primitives creates a window where on-chain capital can be connected to off-chain workers at viable cost structures for the first time

## Founders & Team

**Aaron Chen** — Co-founder
- UC Berkeley, Computer Science (withdrew/on leave at age 19 to pursue startup) (LinkedIn post, May 2025)
- Previously sole designer at Axal, an a16z CSX and CMT Digital-backed crypto startup focused on democratizing onchain yield via stablecoins (LinkedIn; boewu.design). Reported that "seven figures of deposit funds have gone through the product I designed" (LinkedIn post, May 2025)
- Founded MoffittStatus, a real-time library capacity tracking platform adopted and acquired by UC Berkeley (LinkedIn via search snippet)
- Built BuildInCollege, a startup platform for college founders — 50,000+ users (LinkedIn via search snippet)
- Won $8K in prizes and the Coinbase bounty at ETHGlobal (270+ competing teams) (LinkedIn post, May 2025)
- Featured in Business Insider; work displayed on MoonPay and reposted by Ethereum Foundation (LinkedIn post, May 2025)
- Selected for Ritual Foundation Fellowship (decentralized AI) (LinkedIn post, May 2025)
- Twitter/X: @boewu_ — follower count not retrievable
- LinkedIn: linkedin.com/in/aaron-c2024 — 105+ connections visible
- GitHub: Repository at github.com/Aaron-Chen/ehtglobalBA (ETHGlobal Buenos Aires project) — star count not retrievable; also github.com/aaronchencal

**He Song** — Co-founder
- UC Berkeley, Computer Science + Mathematics (LinkedIn via search snippet)
- Software Engineering Intern at Gemini (cryptocurrency exchange), New York City (LinkedIn via search snippet)
- Built CalGPT (calgpt.xyz), an AI-powered course scheduling tool for Berkeley students (LinkedIn via search snippet)
- Twitter/X: @7_hesong — follower count not retrievable
- LinkedIn: linkedin.com/in/he-song — 105 connections
- GitHub: No public repos found

**Shaamak Goyal** — Role unclear (LinkedIn lists "Payna | YC W26")
- UC Berkeley (LinkedIn via search snippet)
- Director of Midway Studio at Midway Ventures, a student venture organization (Midway Ventures website via search snippet)
- Incoming TPM at American Express (LinkedIn via search snippet)
- MATHCOUNTS participant; placed top 5 at Stanford Math Tournament 2023; writes test questions for math olympiads globally (MATHCOUNTS staff page, 2024–2025 via search snippet)
- LinkedIn: linkedin.com/in/shaamak-goyal-37631024b
- Twitter/X: No public account found
- GitHub: No public repos found

**Co-founder relationship:** Aaron Chen and He Song both attend (or attended) UC Berkeley, providing a shared institutional connection. Both are active in Berkeley's tech and crypto communities. No additional shared employer overlap identified.

**Founder-market fit:** Aaron Chen's experience as the sole designer at Axal (a16z-backed DeFi startup) and his ETHGlobal hackathon wins provide direct experience in building consumer-facing DeFi products with abstracted crypto UX — the core technical challenge Paena faces. He Song's internship at Gemini (a major U.S.-regulated crypto exchange) provides exposure to crypto compliance, custody, and trading infrastructure. Both founders are young (19–20) and technically capable, though neither has prior experience in the earned wage access, consumer lending, or payroll industries specifically.

## Key Risks

**Regulatory uncertainty around on-chain EWA:** Earned wage access is subject to an evolving patchwork of state-level regulations in the U.S. Some states classify EWA as lending, which would trigger licensing requirements, interest rate disclosures, and consumer protection rules. Connecticut, California, and other states have enacted or proposed EWA-specific legislation (Congress.gov CRS report IF12727). Funding advances via DeFi smart contracts rather than traditional bank credit facilities introduces novel regulatory questions about custody, money transmission, and securities classification of LP deposits. No public data on Paena's licensing status or regulatory counsel found.

**LP liquidity bootstrapping (cold start problem):** The platform requires a funded USDC vault before it can issue any advances. Attracting initial liquidity providers to an unproven EWA vault with no track record of repayment rates poses a classic two-sided marketplace cold start problem. Legacy competitors fund advances through institutional credit facilities (DailyPay has a $660M Citi credit facility). Paena must convince DeFi yield-seekers that worker repayment rates will sustain attractive yields.

**Well-funded incumbent competition:** The EWA market includes DailyPay ($1.75B valuation, $235M revenue), EarnIn ($190M+ raised, backed by a16z), PayActiv ($500M valuation), and Clair ($68.7M raised, embedded in Gusto/TriNet). These incumbents have established employer partnerships, regulatory track records, and millions of active users. EarnIn already operates a D2C model similar to Paena's but without crypto infrastructure complexity.

**Brand disambiguation and product clarity:** The company operates under two names (Payna on YC, Paena on its website and LinkedIn) and its YC one-liner ("Crypto/fintech compliance simplified") does not match its actual product (earned wage access). This creates confusion for potential users, investors, and recruits.

**Repayment and default risk:** The flat-fee model assumes high repayment rates from paycheck-to-paycheck workers. If default rates exceed LP yield expectations, the vault could become underfunded. Unlike bank-backed competitors, the smart contract-based vault has no FDIC insurance or institutional backstop. No data on projected or actual default rates found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.70B global EWA market (Fortune Business Insights, 2024 via search snippet, 24.8% CAGR to $33.43B by 2032). Estimates vary widely: $0.78B–$28.24B for 2024 depending on market definition |
| SAM | No public data found |
| Traction | Waitlist live on paena.co (count not disclosed); ETHGlobal Buenos Aires prototype (Nov 2025); 1 job posting (Founding Engineer, $150K–$200K, 1% equity) |
| Revenue Signal | No public data found. Flat fee per advance model described on paena.co; no fee amount disclosed |
| Founders | Aaron Chen (Co-founder): UC Berkeley CS, ex-Axal (a16z-backed), 50K+ users on BuildInCollege. He Song (Co-founder): UC Berkeley CS+Math, ex-Gemini intern, built CalGPT. Shaamak Goyal (role unclear): UC Berkeley, Midway Ventures |
| Competitors | DailyPay ($264M equity raised, $235M revenue, B2B2C employer-integrated); EarnIn ($190M+ equity raised, revenue unknown, D2C tip-based); PayActiv ($134M+ equity raised, ~$56M revenue, B2B2C employer partnerships); Clair ($68.7M equity raised, revenue unknown, embedded in payroll platforms); Stream/Wagestream (€194M equity raised, $46.3M revenue, UK/EU employer-focused) |
| Moat Signals | DeFi liquidity vault architecture (ERC-4626) with potential LP-side network effect; dual DeFi + fiat integration complexity |
| Risk Factors | State-level EWA regulatory uncertainty for on-chain model, LP cold start problem, well-funded incumbents with established distribution |
| Founder Reach | Aaron Chen: Twitter @boewu_ (count not retrievable), LinkedIn 105+ connections, GitHub repos found. He Song: Twitter @7_hesong (count not retrievable), LinkedIn 105 connections, GitHub not found |
| Distribution Signals | No Product Hunt listing found; no app store listing found; waitlist on paena.co (count not disclosed) |
