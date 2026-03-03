# Grade

> Payroll for performance

| Field | Value |
|-------|-------|
| Website | https://usegrade.com |
| YC Page | https://www.ycombinator.com/companies/grade |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech -> Payments |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Fintech, B2B |
| YC Partner | Brad Flora |
| Emails | No public data found |

## The Idea

**Problem:** Companies that rely on creators (UGC, influencer marketing, affiliate programs) struggle to pay them at scale. When compensation is tied to performance metrics — e.g., paying per view rather than flat fees — the process involves spreadsheets, manual payout calculations, one-off approvals, and piecemeal international transfers. Traditional payroll systems assume hourly or salaried employment and cannot natively handle variable, performance-based compensation across hundreds or thousands of independent creators in 190+ countries. The current workarounds are spreadsheets, manual bank transfers, or general-purpose AP tools not designed for marketing teams.

**Approach:** Grade provides a platform where companies add creators by email (no creator onboarding required), define payment rules (flat rate, performance-based, or hybrid), track performance via a dashboard, and execute bulk global payouts in minutes. The platform generates a single consolidated invoice for finance teams and supports multiple payout rails including Venmo, Wise, PayPal, Revolut, Payoneer, and USDT (company website). The core mechanism is automating the link between performance data and payment execution — the company calls this "payroll for performance."

**Differentiation:** Versus Lumanu, which positions as a "single vendor" intermediary handling tax compliance and vendor onboarding, Grade emphasizes zero creator setup (track by email only) and performance-based payment structures rather than just flat-fee disbursement. Versus Trolley, which is a developer-focused payout API/infrastructure layer, Grade offers a marketer-facing product with built-in performance tracking and creator ratings. Versus Tipalti, which is built for finance teams managing accounts payable broadly, Grade is purpose-built for the creator/marketing use case with flexible performance-based compensation models.

**Business Model:** No public pricing page; the website directs visitors to "Book a Demo" (company website). [Inferred]: Most likely monetization path is a transaction fee on payouts (percentage of disbursement volume) and/or a SaaS subscription, given the company processes $1M+ in payouts and the demo-based sales motion suggests an enterprise/mid-market pricing model.

**TAM/SAM:** The global creator economy market was valued at $205.25 billion in 2024 and is projected to reach $1,345.54 billion by 2033 at a 23.3% CAGR (Grand View Research, 2024 via search snippet). [Inferred]: The SAM — specifically the creator payment infrastructure layer — is a subset of this. No public SAM estimate specific to creator payment platforms was found.

**GTM / Distribution:** The company lists customers including Valid ($30M+ ad spend), Astra AI (2.1M+ users), Growth Gorilla (40+ clients), Hayai Learn (3,000+ customers), and Plutus (50+ clients) on its website. [Inferred]: The GTM appears to be direct sales to companies with active creator/UGC programs, leveraging a demo-based sales process. The founders' prior experience building and scaling consumer apps using creators as a growth channel likely provides a warm network for early customer acquisition.

## Defensibility

The platform processes performance data alongside payments, creating a data layer that ties creator compensation to measurable outcomes. As companies build payment histories and performance ratings for hundreds of creators within Grade, switching costs increase — migrating creator records, payment preferences, and historical performance data to a new system creates friction. The $1M+ already disbursed through the platform (company website) represents an early accumulation of this transactional data.

No patents, regulatory barriers, or network effects are identifiable from public sources at this stage. [Inferred]: A potential moat could develop via aggregated creator performance data across customers (i.e., a shared "creator rating" network), but this is unproven.

**Market structure:** Tipalti ($8B+ valuation AP platform) is built for finance teams and general vendor management; adapting it for performance-based creator payouts would require rearchitecting its payment logic around variable compensation rules, which conflicts with its core AP workflow model. Lumanu is the closest structural competitor but positions around tax compliance and single-vendor consolidation rather than performance-based pay. [Inferred]: The structural barrier is that incumbent payment/AP platforms (Tipalti, Bill.com) are designed for fixed invoices and would need to cannibalize their simple pricing/UX model to introduce variable performance-based payment logic.

**Commoditization risk:** The core technology — connecting performance APIs to a payment disbursement layer — is technically reproducible. Lumanu ($20.6M raised, per Crunchbase/PitchBook via search snippet) and Trolley ($44.4M raised, per BetaKit) are already in the creator payout space with more capital. Any company with API access to payout rails (Stripe, Wise, PayPal) could theoretically build a similar product. The differentiator is the integrated performance-tracking-to-payment workflow, which is a product design advantage rather than a deep technical moat.

## Market & Traction

**Traction signals:**
- 790+ creators paid (company website, as of research date)
- $1M+ total disbursed (company website, as of research date)
- Active in 190+ countries (company website)
- $380K+ in creator payouts processed within 30 days, representing 120% month-over-month growth (YC company page)
- Named customers: Valid, Astra AI, Growth Gorilla, Hayai Learn, Plutus (company website)
- Lotanna Ezeike Twitter/X: ~13.7K followers at @lottsnomad (X.com via search snippet)
- James Heaney Twitter/X: @jvheaney (follower count not retrievable)
- No Product Hunt launch found
- No company LinkedIn page confirmed (a Nordic HR-tech company called "Grade" occupies the primary LinkedIn listing with 1,895 followers — see Key Risks)
- No Discord or Slack community found
- No app store listings found

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Grade |
|------------|---------|---------|------------------------------|
| Lumanu | $20.6M (Crunchbase/PitchBook via search snippet) | $2.1M revenue, 1K customers in 2024 (Latka, Oct 2024 via search snippet) | Positions as "single vendor" for tax compliance; marketers pay Lumanu, which distributes to creators. Less focus on performance-based pay. |
| Trolley | $44.4M total (BetaKit) | Revenue unknown | Developer-focused payout API/infrastructure; broader than creator economy. Starts at $49/mo (Trolley website). |
| Creative Juice | $20M + $50M creator fund (TechCrunch, Apr 2022) | Revenue unknown | Creator-side financial tools and revenue-based financing; serves creators, not brands. |
| Tipalti | >$500M raised (adjacent) | Revenue unknown | Enterprise AP automation; not creator-specific. Finance-team-oriented workflow creates friction for marketing use cases (per Lumanu comparison blog). |

**Why now:** [Inferred]: Several converging factors — (1) the shift from flat-fee creator sponsorships to performance-based compensation models (pay-per-view, affiliate commissions) has created a need for payment infrastructure that can handle variable payouts tied to real-time metrics; (2) the creator economy grew to $205B in 2024 (Grand View Research via search snippet) with creator economy startup funding rebounding in 2024 after two years of decline (The Information via search snippet); (3) the proliferation of UGC as a paid acquisition channel means companies are now managing hundreds or thousands of creator relationships rather than a handful, pushing spreadsheet-based processes past their breaking point.

## Founders & Team

**Lotanna Ezeike** — Co-founder & CEO
- Education: Economics, University of Leicester (FinTech Magazine interview via search snippet)
- Prior experience: Associate Product Manager at SwiftKey; worked at Barclays (FinTech Magazine interview via search snippet)
- Founded XPO, an influencer fintech startup; raised £1M+ (FinTech Magazine, Seedrs via search snippet)
- Founded and sold two SaaS businesses in the travel industry (Acquire.com podcast via search snippet)
- Founded Creator Check, a creator/influencer screening tool for brands (Acquire.com podcast via search snippet)
- Built Bible Buddy, a WhatsApp chatbot with 10K+ active users (X.com post via search snippet)
- Former sprinter for England, turned content creator (~10-12K Instagram followers from athletics) which led to founding XPO (FinTech Magazine interview via search snippet)
- Twitter/X: @lottsnomad — ~13.7K followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/lottsnomad
- GitHub: No public repos found

**James Heaney** — Co-founder & CTO
- Education: BEng Mechanical Engineering, Ryerson University (April 2022) (jvheaney.com)
- Sold first startup at age 22 — focused on distributed systems/cryptography (jvheaney.com)
- Co-founded Pray Screen at Founders Inc (Aug 2024–June 2025): achieved $40K MRR within 2 months, 250,000+ downloads, subsequently sold (jvheaney.com)
- Built FindMyVax (2021): helped 55,000+ Canadians locate COVID-19 vaccines (jvheaney.com)
- Built RU Mine (2020–2022): campus social platform capturing ~5,000 users / ~20% of Ryerson's student body (jvheaney.com)
- Software Engineer at Sunnybrook Health Sciences Centre (2019–2022): worked on MyChart patient records network serving 1M+ patients across North America (jvheaney.com)
- Twitter/X: @jvheaney (follower count not retrievable)
- LinkedIn: linkedin.com/in/jvheaney
- GitHub: github.com/Jvheaney (star counts not retrieved)

**Co-founder relationship:** Both founders are listed as co-founders of Creator Check — Lotanna as founder and James as CTO (Acquire.com podcast via search snippet; jvheaney.com). They previously collaborated on building, scaling, and exiting 4 mobile AI apps together, with creators as their main growth channel (YC company page). This indicates a prior working relationship predating Grade.

**Founder-market fit:** Both founders have direct, first-hand experience with the problem Grade solves. They built and scaled consumer apps using creators as a paid growth channel, experienced the pain of managing creator payments via spreadsheets, and discovered that switching from flat fees to performance-based pay accelerated growth but made payment logistics harder (YC company page). Lotanna's background founding XPO (an influencer payment fintech) and Creator Check (creator screening) gives him deep domain knowledge of the creator economy infrastructure stack. James brings technical execution capability with two prior exits and experience building products that scaled to hundreds of thousands of users. Both have successfully exited companies before.

## Key Risks

**Brand disambiguation:** "Grade" is a common English word, creating SEO and brand confusion. A Nordic HR-tech company called "Grade" already occupies the primary LinkedIn company page listing (LinkedIn search). Multiple other companies use the "Grade" name (Grade.us for review management, GRADE New York for design). This complicates organic discovery and may require sustained investment in branded search terms.

**Competitive capital disadvantage:** Lumanu ($20.6M raised, per Crunchbase/PitchBook via search snippet) and Trolley ($44.4M raised, per BetaKit) are established in the creator payout space with significantly more capital than Grade's YC standard deal (~$500K). Both have existing enterprise customer bases and integrations. Grade must differentiate strongly on the performance-based pay angle to avoid direct feature competition.

**Platform dependency on payout rails:** Grade routes payments through third-party rails (PayPal, Wise, Venmo, Payoneer, Revolut, USDT) (company website). Changes to these platforms' APIs, fee structures, or compliance requirements could disrupt Grade's service or compress margins. No evidence of proprietary payment infrastructure.

**Creator economy cyclicality:** The company's traction is tied to marketing budgets allocated to creator/UGC programs. An advertising downturn could reduce payout volumes and, consequently, Grade's revenue if it charges transaction-based fees.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $205.25B creator economy in 2024, projected $1,345.54B by 2033 at 23.3% CAGR (Grand View Research via search snippet) |
| SAM | No public data found for creator payment infrastructure specifically |
| Traction | 790+ creators paid, $1M+ disbursed, 190+ countries (company website); $380K+ payouts in 30 days, 120% MoM growth (YC page) |
| Revenue Signal | No public pricing or revenue data; demo-based sales model (company website) |
| Founders | Lotanna Ezeike (CEO): Economics @ Leicester, ex-SwiftKey, founded XPO (raised £1M+), sold 2 SaaS businesses. James Heaney (CTO): MechEng @ Ryerson, 2x exited founder (crypto startup, Pray Screen — $40K MRR / 250K+ downloads). |
| Competitors | Lumanu ($20.6M raised, $2.1M revenue 2024, tax-compliant creator payments); Trolley ($44.4M raised, revenue unknown, developer payout API); Creative Juice ($20M raised, revenue unknown, creator-side financing); Tipalti (>$500M raised, enterprise AP — adjacent) |
| Moat Signals | Integrated performance-tracking-to-payment workflow; early creator payment data accumulation ($1M+ disbursed). No patents or network effects identified. |
| Risk Factors | Brand disambiguation ("Grade" is a common word), competitive capital disadvantage vs. Lumanu/Trolley, payout rail platform dependency |
| Founder Reach | Lotanna Ezeike: Twitter/X ~13.7K followers, LinkedIn active. James Heaney: Twitter/X @jvheaney (count not retrievable), LinkedIn active, GitHub github.com/Jvheaney. |
| Distribution Signals | No Product Hunt launch found; no app store presence; no Discord/Slack community found |
| Emails | No public data found |
