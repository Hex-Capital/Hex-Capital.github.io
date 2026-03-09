# Payna

> Crypto/fintech compliance simplified.

| Field | Value |
|-------|-------|
| Website | payna.com |
| YC Page | https://www.ycombinator.com/companies/payna |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Finance and Accounting |
| Team Size | 0 (YC listing); research indicates 2 co-founders + at least 1 additional team member |
| Location | San Francisco, CA, US (YC page) |
| Tags | Artificial Intelligence, Fintech, Finance, B2B, Compliance |
| YC Partner | Brad Flora |
| Emails | hello@payna.com |

## The Idea

**Problem:** Crypto and fintech companies seeking to operate legally across US states must obtain and maintain money transmitter licenses (MTLs), VASP registrations, lending licenses, and other regulatory approvals on a state-by-state basis. This involves navigating NMLS procedures, FinCEN requirements, and divergent state examiner playbooks. The process is manual, fragmented across 50+ jurisdictions, and typically handled by compliance law firms or legacy licensing consultancies charging significant fees. Existing tools include manual tracking (spreadsheets, law firms) and basic portals like Cornerstone Licensing's Atlas platform.

**Approach:** Payna positions itself as a "compliance operating system for financial licensing." The platform tracks the full regulatory landscape across all 50 US states, manages renewal deadlines with backward-calculated start dates, runs continuous compliance scoring against state examiner playbooks, and auto-generates documents including applications, BSA/AML policies, and call reports. It maintains cryptographically timestamped compliance records. Verticals covered include lending licenses, mortgage, cryptocurrency/VASP, money transmission, debt collection, loan origination, automobile insurance, insurance carrier, and insurance producer licensing (payna.com). Integrations with NIPR and Sircon are listed as "pilot status," with CRM and document storage integrations on the roadmap (payna.com).

**Differentiation:** The most direct competitor is Brico ($21.6M raised, Forbes Top 50 FinTechs 2025), which automates MTL applications and renewals using AI and human-in-the-loop compliance experts (American Banker, Oct 2025). Payna's framing as a "compliance operating system" with continuous compliance scoring and proactive risk monitoring may differentiate it from Brico's licensing workflow focus. Legacy competitors like Cornerstone Licensing offer consultancy-plus-portal models without AI-native automation. Adjacent compliance platforms (Hummingbird, Unit21, Flagright) focus on AML/KYC/fraud detection rather than licensing workflows.

**Business Model:** No pricing page or pricing information is publicly available. [Inferred]: Most likely monetization path is SaaS subscription (per-entity or per-license-type), consistent with B2B compliance software norms and competitor Brico's model.

**TAM/SAM:** The global RegTech market is approximately $18.6B in 2025, growing at 17.1% CAGR through 2034 (IMARC Group, 2025 via search snippet). Fortune Business Insights estimates $19.06B in 2025 with 20.0% growth (Fortune Business Insights, 2025 via search snippet). Precedence Research estimates $19.21B in 2025, reaching $85.48B by 2035 at 16.1% CAGR (Precedence Research, 2025 via search snippet). No standalone TAM figure was found for the specific sub-segment of US state-by-state financial licensing automation.

**GTM / Distribution:** The company has one open role for a Founding Engineer (web3.career). The website includes a Cal.com booking link for demos (cal.com/aaron-c/user). [Inferred]: Most likely distribution path is founder-led sales to crypto/fintech companies needing multi-state licensing, potentially leveraging YC network connections.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) accumulated regulatory data and state-specific compliance logic across 50+ jurisdictions, which requires significant ongoing maintenance; (2) cryptographically timestamped compliance records creating switching costs as audit history builds; (3) integration depth with NMLS, NIPR, and Sircon systems. These are unproven at this stage.

**Market structure:** [Inferred]: Incumbent compliance law firms and consultancies face business model cannibalization risk — automating licensing workflows reduces billable hours, their primary revenue source. AML/KYC platforms (Hummingbird, Unit21) would need to build licensing-specific domain logic (state-by-state regulatory mapping, NMLS integration) that is outside their current product scope. However, Brico has already demonstrated that a well-funded startup can build this product, so no structural barrier unique to Payna is identified.

**Commoditization risk:** Brico ($21.6M raised) is already building a near-identical product with marquee customers including Marqeta, BitGo, and Better Mortgage (American Banker, Oct 2025). The core technology — AI document generation and regulatory tracking — relies on publicly available regulatory data, making the underlying data non-proprietary. Differentiation likely depends on execution quality, integration depth, and compliance scoring accuracy rather than proprietary technology.

## Market & Traction

**Traction signals:**
- LinkedIn company page: 444 followers (LinkedIn, as of research date)
- Aaron Chen Twitter/X: @boewu_ (follower count not retrievable)
- He Song Twitter/X: @7_hesong (follower count not retrievable)
- 1 open job posting: Founding Engineer, Full Stack / Solidity, $150K-$200K salary, 1.00% equity (web3.career)
- No revenue, user count, customer logos, or traction metrics disclosed publicly. Website shows placeholder "0%" metrics for cost/time reduction (payna.com).
- No Product Hunt listing found.
- No press coverage found in any named publication.
- No Discord or Slack community found.

**Product pivot note:** The company previously built "Paena," an on-chain earned wage access platform connecting DeFi liquidity to workers living paycheck to paycheck, which was built at ETHGlobal Buenos Aires in November 2025 (ethglobal.com/showcase/paena-4wg84). The pivot to B2B compliance infrastructure appears to have occurred during or after the YC W26 batch started (January 2026). All prior-product metrics (hackathon participation) should not be conflated with current-product traction.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Payna |
|---|---|---|---|
| Brico | $21.6M ($13.5M Series A, Oct 2025; Flourish Ventures) (American Banker) | Revenue unknown; 600% YoY revenue growth claimed (Brico blog) | Full licensing lifecycle with AI + human-in-the-loop compliance experts; marquee customers (Marqeta, BitGo, Better Mortgage); Forbes Top 50 FinTechs 2025 |
| Cornerstone Licensing (Atlas) | Not VC-funded; professional services firm | Revenue unknown | Legacy consultancy model with basic cloud portal; manual + software hybrid rather than AI-native |
| Regology | ~$8M (Series A led by ACME Capital) (Fintech Global, 2021 via search snippet) | Revenue unknown | Regulatory change monitoring/intelligence platform; broader multi-jurisdictional focus rather than licensing workflow automation |
| Hummingbird | $41.8M ($30M Series B, Dec 2021; Battery Ventures) (TechCrunch, Dec 2021) | Revenue unknown | AML investigation/case management platform (post-licensing compliance); serves Stripe, Coinbase; adjacent rather than direct competitor |
| Flagright (YC) | $7.6M ($4.3M seed, Mar 2025; Frontline Ventures) (Flagright blog) | Revenue unknown | AI-native AML transaction monitoring; 50+ customers across 6 continents; adjacent rather than direct competitor |

**Why now:** The GENIUS Act passed in July 2025 establishing a federal stablecoin regulatory framework, expanding the licensing surface area for crypto companies (Taylor Wessing fintech outlook, Jan 2026 via search snippet). Compliance costs for fintechs are projected to rise 25% in 2025 due to growing regulatory demands (Taylor Wessing via search snippet). [Inferred]: The combination of expanding state-level crypto licensing requirements (VASP registrations, BitLicense equivalents) and new federal stablecoin regulation creates a compliance burden that manual processes and law firms struggle to scale with, opening demand for automated solutions.

## Founders & Team

**Aaron Chen** — Co-founder
- UC Berkeley (withdrew after sophomore year; major listed as Chemistry on LinkedIn)
- Previously sole designer at Axal, an a16z CSX-backed crypto startup (also backed by CMT Digital) that processed "seven figures of deposit funds" and gained coverage from Business Insider and MoonPay (Aaron Chen LinkedIn posts)
- Won $8,000 and the Coinbase bounty at an ETHGlobal hackathon (out of 270+ teams) for a crypto-enabled Amazon checkout Chrome extension (LinkedIn post)
- Selected for the Ritual Foundation Fellowship (decentralized AI) (LinkedIn post)
- Twitter/X: @boewu_ — follower count not retrievable
- LinkedIn: linkedin.com/in/aaron-c2024 — headline references "Chemistry"
- GitHub: github.com/Aaron-Chen — 16 repos, 2 followers; most starred repo: `Secret-key-to-Chinese` (2 stars)

**He Song** — Co-founder
- No public information found on education, prior work history, or domain expertise despite extensive searching
- Twitter/X: @7_hesong — follower count not retrievable
- LinkedIn: profile exists per YC page but not publicly indexed; headline not retrievable
- GitHub: No public profile found

**Shaamak Goyal** — Team member (not listed as co-founder on YC page)
- University of Chicago — BA in Business Economics, Statistics, and Global Studies (LinkedIn)
- Prior experience: Research Intern at Kearney; TPM at American Express; role at Devicethread Inc. (RocketReach via search snippet)
- Director of Midway Studio at Midway Ventures (UChicago student VC organization) (midwayvc.com)
- Partner at Oracle Trading (UChicago prediction markets club) (midwayvc.com)
- LinkedIn: linkedin.com/in/shaamak-goyal-37631024b — headline: "Payna | YC W26"
- Twitter/X: No public account found
- GitHub: No public profile found

**Co-founder relationship:** No shared employer or university overlap identified between Aaron Chen (UC Berkeley) and He Song (background unknown). No public data on co-founder history.

**Founder-market fit:** Aaron Chen has direct crypto/DeFi experience from Axal (a16z CSX-backed), ETHGlobal hackathon wins, and the Ritual Foundation Fellowship. His experience is primarily in product design and crypto product development rather than regulatory compliance or legal operations. He Song's background is entirely opaque. Shaamak Goyal brings business economics and consulting background (Kearney, American Express). No advisors, board members, or notable investors beyond the standard YC deal were identified.

## Key Risks

**Brico competitive dominance:** Brico has $21.6M in funding, Forbes Top 50 recognition, 600% YoY revenue growth, and marquee enterprise customers (Marqeta, BitGo, Better Mortgage) in the same licensing automation space (American Banker, Oct 2025). Payna enters this market with significantly fewer resources and no disclosed customers. Brico's head start in customer relationships and regulatory data coverage could make displacement difficult.

**Founder domain gap:** Neither co-founder has documented experience in regulatory compliance, legal operations, or financial licensing. Aaron Chen's background is in crypto product design; He Song's background is unknown. The compliance software space typically requires deep regulatory domain expertise to build accurate, jurisdiction-specific tooling. Mitigation: The team may have undisclosed domain expertise or advisors not visible in public sources.

**He Song opacity:** One of two co-founders has virtually no public digital footprint — no findable education, work history, LinkedIn profile content, or domain expertise. This creates due diligence difficulty for investors and potential customers evaluating the team's qualifications.

**Recent pivot risk:** The company pivoted from a consumer DeFi earned-wage-access product (built at ETHGlobal Buenos Aires, Nov 2025) to B2B compliance infrastructure during or after January 2026 (ethglobal.com/showcase/paena-4wg84). This suggests the current product is at most ~2-3 months old, with limited time for iteration, customer feedback, or regulatory data coverage building.

**Brand confusion:** The legal entity is "Paena Technologies, Inc." while the brand is "Payna." The LinkedIn URL uses /company/paena. "Payna" also returns unrelated results in web searches (a fintech payments company in other markets). This creates SEO and discovery friction.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | RegTech market: ~$18.6B in 2025, 17.1% CAGR through 2034 (IMARC Group via search snippet); ~$19.06B in 2025, 20.0% growth (Fortune Business Insights via search snippet) |
| SAM | No public data found for US financial licensing automation sub-segment specifically |
| Traction | No public data found (no disclosed users, customers, or revenue) |
| Revenue Signal | No public data found |
| Founders | Aaron Chen (Co-founder): UC Berkeley dropout, former sole designer at Axal (a16z CSX), ETHGlobal hackathon winner ($8K + Coinbase bounty). He Song (Co-founder): background unknown. |
| Competitors | Brico ($21.6M raised, revenue unknown but 600% YoY growth, direct licensing automation competitor); Cornerstone Licensing (not VC-funded, legacy consultancy + portal); Regology (~$8M raised, revenue unknown, regulatory intelligence platform); Hummingbird ($41.8M raised, revenue unknown, AML ops — adjacent); Flagright ($7.6M raised, revenue unknown, AML monitoring — adjacent) |
| Moat Signals | No public data found |
| Risk Factors | Brico competitive dominance, founder domain gap in compliance/legal, recent pivot (~2-3 months on current product) |
| Founder Reach | Aaron Chen: Twitter @boewu_ (count not retrievable), LinkedIn linkedin.com/in/aaron-c2024, GitHub 2 followers / 2 max stars. He Song: Twitter @7_hesong (count not retrievable), LinkedIn not indexed, GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt, no app store listing, no Chrome extension) |
| Emails | hello@payna.com |
