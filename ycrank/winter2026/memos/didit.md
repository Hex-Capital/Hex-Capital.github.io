# Didit

> All-in-one identity platform for fast human verification.

| Field | Value |
|-------|-------|
| Website | https://didit.me/ |
| YC Page | https://www.ycombinator.com/companies/didit |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 12 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Identity |
| YC Partner | Tyler Bosmeny |
| Emails | hello@didit.me |

## The Idea

**Problem:** Businesses that must verify user identities — fintechs, telecom providers, marketplaces, crypto platforms — face a fragmented vendor landscape. Typical KYC/AML compliance requires integrating 3–4 separate tools (document verification, biometrics, liveness detection, AML screening), each with its own pricing, API, and contract. Legacy providers like Onfido (now Entrust IDV), Veriff, and Sumsub charge per-verification fees that can be opaque, with contracts and minimums. Fraud from deepfakes and synthetic identities is increasing, and slow or friction-heavy verification flows cause user drop-off.

**Approach:** Didit consolidates ID verification, passive and active liveness detection, face matching (1:1 and 1:N), AML screening, proof of address, age estimation, phone/email verification, IP analysis, and biometric authentication into a single API-first platform. The system uses AI-driven real-time decisioning across hundreds of fraud signals, including deepfake and spoofing detection. Verification can be deployed via hosted links (no-code), native iOS/Android SDKs, web SDK, iframe embedding, or server-to-server API. A drag-and-drop node-based workflow engine (introduced in Didit v3, January 2026) allows businesses to customize verification sequences without code (Didit changelog, docs.didit.me). Didit also offers an MCP server and programmatic APIs enabling AI agents to run identity verification workflows end-to-end (Didit docs).

**Differentiation:** Didit claims to be the only company offering a free, unlimited core KYC plan — 500 free checks per month covering ID verification, passive liveness, face match, and IP analysis (didit.me/pricing). By contrast, competitors such as Veriff and Sumsub charge from the first verification. Didit's pricing model is pay-per-success with no contracts, minimums, or setup fees, and per-check add-on costs start at $0.03–$0.20 depending on feature. The company claims 70% cost savings versus legacy providers (didit.me blog, Dec 2025). Didit explicitly markets migration paths from Sumsub, Veriff, Persona, and Onfido (didit.me). Competitors: Persona offers deeper workflow customization for enterprises; Veriff emphasizes speed and coverage; Sumsub provides end-to-end compliance across KYC, KYB, and transaction monitoring; Entrust IDV (formerly Onfido) has enterprise-scale backing.

**Business Model:** Transparent pay-per-use, prepaid credit system where 1 credit = $1 USD with no expiration. Free tier: 500 monthly checks for core KYC features. Per-check pricing (didit.me/pricing):

| Feature | Price |
|---------|-------|
| ID Verification | $0.15 |
| Face Match 1:1 | $0.05 |
| Passive Liveness | $0.10 |
| Active Liveness | $0.15 |
| IP Analysis | $0.03 |
| AML Screening | $0.20 |
| Proof of Address | $0.20 |
| Biometric Authentication | $0.10 |
| Age Estimation | $0.10 |
| Email Verification | $0.03 |
| White Label | $0.20 |
| Ongoing AML Monitoring | $0.07/user/year |
| Face Search 1:N | Free |
| Reusable KYC | Free |

Enterprise tier with custom pricing, dedicated support, and SLAs. Volume discounts available. Users only pay for completed verifications — no charge if users drop off mid-flow.

**TAM/SAM:** The global identity verification market was valued at $14.34 billion in 2025, projected to reach $29.32 billion by 2030 at 15.4% CAGR (MarketsandMarkets, 2025 via search snippet). The biometric identity verification sub-segment was valued at $8.88 billion in 2025, projected to reach $17.81 billion by 2030 at 14.9% CAGR (MarketsandMarkets, 2025 via search snippet). Fortune Business Insights estimates the identity verification market growing from $15.84 billion in 2026 to $50.58 billion by 2034 (Fortune Business Insights via search snippet). The KYC/KYB/onboarding segment holds the largest market share within identity verification (MarketsandMarkets, 2025 via search snippet).

**GTM / Distribution:** Self-serve signup with a free tier acts as a product-led growth funnel. The company targets fintech, telecom, e-commerce, and gaming verticals. Didit lists 1,000+ companies as customers (didit.me) and has a Head of Sales for LATAM (didit.me/about-us), suggesting regional expansion. Integration via Zapier was announced (LinkedIn post). The platform is listed on G2, Capterra, GetApp, and Software Advice review sites. A WordPress plugin (Didit Verify) is available on wordpress.org. The company has a dedicated demo request page (didit.me/get-a-demo).

## Defensibility

Didit has built its ID verification, biometrics, liveness, and fraud detection stack from scratch (didit.me/about-us), which provides some technical complexity as a barrier. The platform processes "millions of monthly verifications" (YC page), generating data that could improve fraud detection models over time. Supporting 14,000+ government-issued ID document types across 190+ countries (didit.me) represents significant investment in document template coverage. ISO 27001, ISO 27017, ISO 27018, and iBeta Level 1 certifications (didit.me) create some regulatory compliance switching costs. The claimed 300%+ NRR by month 6 and ~90% paid customer retention at month 6 (YC page) suggest emerging switching costs, though these metrics are self-reported and the time horizon is short.

**Market structure:** The identity verification market has been consolidating — Entrust acquired Onfido for ~$650M in April 2024 (TechCrunch, Feb 2024). Large incumbents (Entrust, LexisNexis) face business model tension: they charge premium per-verification prices, and matching a free-tier model would cannibalize existing revenue. Didit's aggressive pricing (free core KYC, $0.03–$0.20 per check) is structurally difficult for incumbents to match without undermining their unit economics. However, well-funded startups like Persona ($417.5M raised, $2B valuation) and Veriff ($200M raised, $1.5B valuation) could adopt similar pricing strategies.

**Commoditization risk:** Identity verification APIs are increasingly commoditized at the basic level (document OCR, face matching). Multiple well-funded competitors offer similar feature sets. Differentiation depends on fraud detection accuracy, speed, pricing, and breadth of document coverage. AI model performance for deepfake detection is a potential differentiator but requires continuous investment. The free-tier model creates a pricing moat at the low end but does not protect the enterprise segment.

## Market & Traction

**Traction signals:**
- 1,000+ companies using Didit (didit.me, as of March 2026)
- 700+ B2B customers with ~20% month-over-month growth (YC page)
- "Millions of monthly verifications" (YC page)
- 300%+ Net Revenue Retention by month 6 (YC page)
- ~90% paid customer retention at month 6 (YC page)
- "Near-profitable" at time of YC entry, December 2025 (didit.me blog, Dec 2, 2025)
- $2M raised from Y Combinator, Saasholic, Hypersphere, Roar VC, Masia VC, and other investors across US, Brazil, and EU (didit.me blog, Dec 2, 2025)
- Named customers: GBTC Finance, Bondex, Crnogorski Telekom, CrediDemo, Shiply, Adelantos, TucanPay (didit.me)
- Trustpilot: 3.6/5, 16 reviews (Trustpilot)
- iOS App (Didit wallet): 4.3/5, 6 ratings, Finance category (Apple App Store)
- Listed on G2, Capterra, GetApp, Software Advice (search results)
- LinkedIn: 458 followers (LinkedIn via search snippet)
- Twitter/X: @Diditprotocol — follower count not retrievable (JavaScript-rendered page)
- Instagram: @diditbusiness and @didit.app (didit.me/about-us via search snippet)
- YouTube: @DiditProtocol (didit.me/about-us via search snippet)
- GitHub: didit-protocol org — 22 repos, 20 followers; top repo didit-full-demo has 10 stars (GitHub)
- Product Hunt: Listed at producthunt.com/products/didit-3 (Product Hunt via search snippet); specific upvote count not retrieved
- WordPress plugin: Didit Verify available on wordpress.org (search result)
- Supports 48 languages, 190+ countries, 14,000+ ID document types (didit.me)
- Compliance certifications: ISO 27001, ISO 27017, ISO 27018, GDPR, iBeta Level 1 (didit.me)

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Didit |
|------------|---------|---------|------------------------------|
| Persona | $417.5M total, $200M Series D at $2B valuation (Apr 2025) (PRNewswire, Apr 2025 via search snippet) | $141.2M (Latka, Oct 2024 via search snippet) | Deeper workflow customization and orchestration for complex enterprise use cases; serves large fintechs like Square and Robinhood |
| Veriff | $200M total, $100M Series C at $1.5B valuation (Veriff blog) | $41.6M, 75% YoY revenue growth in Q4 2024 (Latka, Oct 2024 via search snippet; GlobeNewsWire, Jan 2025 via search snippet) | Strong biometric accuracy benchmarks; 12,000+ document types across 230+ countries; established trust-and-safety brand |
| Sumsub | $7.5M total (Crunchbase via search snippet) | $85.6M (Latka, Oct 2024 via search snippet) | End-to-end KYC/KYB/AML with transaction monitoring; strong presence in crypto and gaming verticals; capital-efficient growth |
| Entrust IDV (formerly Onfido) | Acquired by Entrust for ~$650M (Apr 2024) (TechCrunch, Feb 2024 via search snippet) | ~$109M (Onfido FY ending Jan 2024) (Biometric Update, Feb 2025 via search snippet) | Enterprise-grade backing from Entrust's security/PKI infrastructure; strong in regulated financial services |
| iDenfy | No public data found | No public data found | Focuses on SMB segment with competitive pricing; provides business verification alongside individual KYC |

**Why now:**
- [Inferred]: The rise of generative AI and deepfake technology has dramatically increased identity fraud risk, making real-time AI-driven fraud detection a necessity rather than a nice-to-have. Regulatory pressure (EU's eIDAS 2.0, expanded KYC requirements in LATAM and APAC) is forcing more businesses to adopt identity verification. The cost and complexity of legacy providers (multi-vendor integrations, opaque pricing) has created demand for simpler, cheaper alternatives — particularly among fintechs and crypto platforms scaling in emerging markets.

## Founders & Team

**Alberto Rosas** — Co-founder & CEO
- Former professional tennis player; transitioned to software and AI engineering
- Studied Mathematics in the U.S. (didit.me/about-us)
- Background in Machine Learning and Blockchain technologies (YC page, didit.me/about-us)
- Co-founded Gamium (metaverse/SocialFi platform) in September 2021 with twin brother Alejandro and others; Didit was originally built as identity infrastructure for Gamium before spinning out as a standalone product (Gamium Medium, Gate.io via search snippet)
- Twitter/X: @albertorosasg — follower count not retrievable
- LinkedIn: linkedin.com/in/albertorosasg — "Didit (YC W26)"
- GitHub: github.com/rosasalberto — 9 repos, 47 followers; pinned repo StyleGAN2-TensorFlow-2.x has 143 stars, mil (multiple instance learning library) has 65 stars (GitHub)

**Alejandro Rosas** — Co-founder & CTO
- Former professional tennis player; studied Mathematics in the U.S. (didit.me/about-us)
- Built AI systems at Oracle in Silicon Valley (didit.me/about-us)
- Co-founded Gamium with Alberto (Gamium Medium, Gate.io via search snippet)
- Twitter/X: @_arosasg — follower count not retrievable
- LinkedIn: linkedin.com/in/alejandrorosasgarcia — "Didit"
- GitHub: No public repos found under personal account

**Additional team members** (from didit.me/about-us): Hector Carrillo (CFO, finance background via U.S. tennis scholarship), Joan Sosa (COO, engineering career), Marcos Riosalido (DevOps, 30+ years IT), Khalid Eddib (Frontend Developer), Alex Pinilla (Full-Stack Developer, biometric ID systems since 2018), Adrián Pardo (Finance Accountant), Francesc Carbó (Art Designer), Victor Navarro (Marketing Specialist), Guillem Medina (Customer Success Manager), Jose Hernandez (Head of Sales LATAM).

**Co-founder relationship:** Alberto and Alejandro Rosas are identical twins who have built projects together since age 12 (didit.me/about-us). Both were professional tennis players, both studied Mathematics in the U.S., and both co-founded Gamium in 2021 before building Didit.

**Founder-market fit:** Alberto's GitHub profile demonstrates hands-on ML expertise (StyleGAN2 implementation with 143 stars, multiple instance learning library with 65 stars). Alejandro's experience building AI at Oracle in Silicon Valley provides enterprise-scale engineering background. Their prior experience building Gamium's identity infrastructure directly led to the creation of Didit as a standalone identity verification product, providing domain-specific experience in the problem space. Alex Pinilla (full-stack developer) has been building biometric ID systems since 2018.

## Key Risks

**Pivot history and Web3 origin:** Didit originated as decentralized identity infrastructure for Gamium, a metaverse/SocialFi platform with a token ($GMM). The GitHub organization is still named "didit-protocol," the whitepaper lives at whitepaper.didit.me, and $GMM token holders were offered airdrops tied to Didit's growth (Gamium Medium via search snippet). This Web3 lineage may raise questions for enterprise B2B buyers about the company's focus and positioning. The relationship between the current B2B identity verification product and the earlier decentralized protocol/wallet product warrants clarification.

**Pricing sustainability at scale:** Didit offers 500 free core KYC checks per month and per-check pricing starting at $0.03. While this aggressive pricing is a customer acquisition lever, maintaining it while approaching profitability requires high verification volumes and operational efficiency. Competitors like Sumsub have achieved $85.6M revenue on only $7.5M in funding (Latka, Oct 2024 via search snippet), suggesting capital-efficient growth is possible — but Didit's pricing is materially lower than Sumsub's, compressing margins further.

**Competitive intensity from well-funded players:** Persona ($417.5M raised, $2B valuation), Veriff ($200M raised, $1.5B valuation), and Entrust (public company that acquired Onfido for $650M) have substantially more capital, brand recognition, and enterprise sales capacity. Persona specifically positions itself as "the verified identity layer for an agentic AI world" (PRNewswire, Apr 2025) — directly overlapping with Didit's messaging and AI agent support.

**Brand disambiguation:** "Didit" shares its name with Didit (didit.com), a long-established digital marketing agency. Search results frequently conflate the two entities, which could create confusion for potential customers and complicate SEO/brand building.

**Self-reported metrics:** The traction metrics cited (700+ customers, 20% MoM growth, 300%+ NRR, ~90% retention, "near-profitable") are sourced from the company's own blog post and YC page. No independent verification of these figures is available in public sources.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $14.34B in 2025, projected $29.32B by 2030 at 15.4% CAGR (MarketsandMarkets, 2025 via search snippet); biometric IDV sub-segment $8.88B in 2025, projected $17.81B by 2030 at 14.9% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found for Didit's specific serviceable segment |
| Traction | 1,000+ companies (didit.me); 700+ B2B customers, ~20% MoM growth, millions of monthly verifications (YC page); 300%+ NRR by month 6, ~90% paid retention at month 6 (YC page); "near-profitable" Dec 2025 (didit.me blog) |
| Revenue Signal | Free tier: 500 checks/month; paid per-check pricing $0.03–$0.20 (didit.me/pricing); prepaid credits, no contracts/minimums; enterprise tier with custom pricing |
| Founders | Alberto Rosas (CEO): ML/AI engineer, pro tennis player, studied Math in U.S., co-founded Gamium. Alejandro Rosas (CTO): AI at Oracle, pro tennis player, studied Math in U.S., co-founded Gamium. |
| Competitors | Persona ($417.5M raised, $141.2M revenue, deeper enterprise workflow orchestration); Veriff ($200M raised, $41.6M revenue, biometric accuracy leader); Sumsub ($7.5M raised, $85.6M revenue, end-to-end compliance); Entrust IDV (acquired for $650M, ~$109M revenue, enterprise security infrastructure) |
| Moat Signals | Proprietary full-stack built from scratch; 14,000+ document templates across 190+ countries; ISO 27001/27017/27018 and iBeta certifications; claimed 300%+ NRR and 90% retention at month 6 (YC page) |
| Risk Factors | Web3/Gamium origin may complicate B2B positioning, aggressive pricing sustainability, intense competition from well-funded incumbents |
| Founder Reach | Alberto Rosas: Twitter @albertorosasg (count not retrievable), LinkedIn linkedin.com/in/albertorosasg, GitHub 47 followers / 143 stars top repo. Alejandro Rosas: Twitter @_arosasg (count not retrievable), LinkedIn linkedin.com/in/alejandrorosasgarcia, GitHub not found. |
| Distribution Signals | Product Hunt listing (producthunt.com/products/didit-3); G2, Capterra, GetApp, Software Advice listings; WordPress plugin (wordpress.org); Zapier integration; iOS app 4.3/5, 6 ratings (App Store); Trustpilot 3.6/5, 16 reviews; LinkedIn 458 followers (via search snippet) |
| Emails | hello@didit.me |
