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

## The Idea

**Problem:** Businesses across regulated industries (fintech, crypto, telecom, e-commerce) must verify customer identities for compliance (KYC/AML) and fraud prevention. Existing solutions from legacy providers are fragmented—companies often need to integrate multiple vendors for document verification, biometrics, liveness detection, AML screening, and authentication. These legacy stacks are slow to integrate (weeks), expensive, and opaque in pricing. AI-generated deepfakes and synthetic identities have intensified the fraud threat, making robust identity verification more urgent.

**Approach:** Didit bundles ID verification, liveness detection (passive, 3D flash, 3D action), 1:1 face matching, 1:N face search, AML screening, biometric authentication, proof of address, phone/email verification, age estimation, and fraud detection into a single platform accessible via REST API, native SDKs (iOS/Android/Web), no-code workflow builder, or hosted links. The platform analyzes "hundreds of data points" per verification and claims real-time automated decisions with auto-approve/reject logic. It supports 14,000+ document types across 220+ countries and 48+ languages (didit.me).

**Differentiation:** Didit differentiates from incumbents like Sumsub, Veriff, Persona, and Onfido (now Entrust) on three axes: (1) a free tier of 500 core KYC verifications per month (ID verification, passive liveness, face match, IP analysis) with no time limit—competitors like Sumsub start at $1.35/verification with a $149/month minimum (Sumsub pricing page via search snippet); (2) a pay-per-success model where credits never expire and no contracts or minimums are required, with claimed 70%+ cost savings vs. legacy providers (didit.me/pricing); and (3) integration speed—Didit advertises "go live in minutes, not weeks" and offers migration support specifically for companies switching from Sumsub, Veriff, Persona, or Onfido (didit.me).

**Business Model:** Freemium + pay-per-use. The free tier provides 500 checks/month for core KYC features. Premium features are priced per successful verification: ID Verification $0.15, Passive Liveness $0.10, Active Liveness $0.15, Face Match 1:1 $0.05, Face Search 1:N $0.05, AML Screening $0.20, Proof of Address $0.20, Age Estimation $0.10, IP Analysis $0.03, Email Verification $0.03, White Label $0.20, Biometric Auth $0.10, Ongoing AML Monitoring $0.07/user/year (didit.me/pricing). Volume discounts are available via prepaid credit packages (e.g., $68K purchase yields $100K in credits—a 32% discount). Enterprise tier offers custom pricing with dedicated support and SLAs (didit.me/pricing). Self-serve tier has $0/month base cost.

**TAM/SAM:** The global identity verification market was valued at $13.75B in 2025 and is projected to reach $29.32B by 2030 at a 15.4% CAGR (MarketsandMarkets, 2025 via search snippet). An alternative estimate projects the market reaching $50.58B by 2034 (Fortune Business Insights, 2025 via search snippet). The biometric identity verification sub-segment was $8.88B in 2025, projected to reach $17.81B by 2030 at 14.9% CAGR (MarketsandMarkets, 2025 via search snippet). The KYC, KYB, and onboarding segment accounted for 43.2% of market share in 2025 (MarketsandMarkets, 2025 via search snippet).

**GTM / Distribution:** Self-serve sign-up with a free tier serves as the primary acquisition funnel for SMBs and developers. The company offers no-code hosted verification links and a visual workflow builder to reduce time-to-value. Named customers include GBTC Finance, Bondex, Crnogorski Telekom, CrediDemo, Shiply, Adelantos, and TucanPay (didit.me). The Orange/GSMA Open Gateway partnership integrates Didit with telecom network APIs (Number Verification, SIM Swap) for anti-fraud across mobile operators (Orange Developer, didit.me/blog). The company also lists on software review platforms (Capterra, GetApp, Software Advice) as a discovery channel. A dedicated Head of Sales for LATAM indicates a regional go-to-market focus in Latin America (didit.me/about-us).

## Defensibility

Didit holds ISO 27001, ISO 27017, ISO 27018, and iBeta Level 1 certifications, and is GDPR compliant with full data retention controls (didit.me). These compliance certifications represent a barrier to entry for new competitors, though established incumbents hold similar certifications. The platform supports 14,000+ document types across 220+ countries (didit.me), representing a data and coverage asset that grows with each new market entered. The reusable KYC feature—where end users verify once and reuse credentials across platforms—could create network effects if adopted at scale, as each additional business accepting Didit credentials increases the value for verified users.

**Market structure:** Legacy identity verification providers (Onfido/Entrust, Jumio) are structured around enterprise sales with long contracts, opaque pricing, and per-verification fees that subsidize sales teams. Didit's free tier and self-serve model targets the long tail of SMBs that incumbents' cost structures make unprofitable to serve. [Inferred]: Incumbents face business model cannibalization risk in matching a free core KYC tier, as it would undercut existing customer contracts.

**Commoditization risk:** The core technology stack (OCR, biometric matching, liveness detection) is available from multiple providers and underlying model capabilities are improving rapidly. Sumsub, Veriff, Persona, and numerous startups offer similar feature sets. The primary differentiation is pricing and integration speed rather than proprietary technology. The market includes well-funded competitors (Persona at $418M raised, Veriff at $200M, Sumsub at ~$37M) with larger engineering teams.

## Market & Traction

**Traction signals:**
- 1,000+ companies using Didit worldwide (didit.me, December 2025)
- 700+ active B2B customers with ~20% month-over-month growth (YC company page)
- "Millions of humans verified monthly" (YC company page)
- 300%+ net revenue retention by month 6 (YC company page)
- ~90% paid customer retention at month 6 (YC company page)
- "Close to profitability" as of December 2025 (Alberto Rosas, X post, December 2025)
- $2M raised from Y Combinator, Saasholic, Hypersphere, Roar VC, Masia VC, and angel investors across US, Brazil, and EU (Didit blog, December 2025)
- V1 product launched August 2024; V2 launched subsequently (Didit blog)
- Company founded in 2023; originally incubated within Gamium, a blockchain/metaverse project founded in September 2021 (see pivot note below)
- Twitter/X: @Diditprotocol — joined February 2023; follower count not retrievable (JavaScript-rendered)
- LinkedIn: linkedin.com/company/diditprotocol — follower count not retrievable
- Trustpilot: 5-star rating from ~50 reviews (Trustpilot via search snippet)
- Listed on Capterra, GetApp, and Software Advice with positive reviews (via search snippet)
- Mobile apps available: iOS (App Store, requires iOS 16.0+) and Android (Google Play) — a self-custody digital identity wallet for consumers (App Store/Google Play via search snippet)
- Orange/GSMA Open Gateway partnership: integrated Number Verification and SIM Swap APIs under CAMARA standards (Orange Developer, didit.me/blog)
- Named customers: GBTC Finance, Bondex, Crnogorski Telekom, CrediDemo, Shiply, Adelantos, TucanPay (didit.me)
- No Product Hunt launch found

**Pivot note:** Didit originated as an identity protocol within Gamium, a blockchain/metaverse venture founded in September 2021 by the same twin founders. Gamium launched the GMM token in March 2022 and had partnerships with Meta and Telefónica/Wayra (CoinDesk, February 2023). The current Didit identity verification platform (V1 launched August 2024) represents a pivot from Web3/blockchain identity toward a B2B SaaS identity verification product. Prior Gamium/Web3 metrics (token price, partnerships) should not be conflated with current-product traction.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Didit |
|-----------|---------|-------------|------------------------------|
| Persona | $418M raised, $2B valuation (Series D, April 2025; PRNewswire) | Revenue unknown | Top-ranked for execution in Gartner Magic Quadrant (2025); deep enterprise focus with orchestration and case management; significantly larger scale and customer base |
| Sumsub | ~$37M raised (Crunchbase via search snippet) | $85.6M revenue in 2024 (Getlatka via search snippet) | 2,000–4,000 customers; Gartner MQ Leader; strong crypto/fintech vertical; higher price point ($1.35/verification, $149/mo minimum) |
| Veriff | $200M raised, $1.5B valuation (Series C, 2022; TechCrunch) | $41.6M revenue in 2024 (Getlatka via search snippet) | Video-based verification; 10,000+ document types; 75% YoY revenue growth Q4 2024; unicorn status |
| Onfido (now Entrust) | Acquired by Entrust for ~$650M (TechCrunch, February 2024) | £140M+ revenue pre-acquisition (TechCrunch via search snippet) | 1,200+ business customers; now part of Entrust's broader security portfolio; strong enterprise/compliance positioning |

**Why now:** [Inferred]: Several catalysts have converged: (1) AI-generated deepfakes and synthetic identities have become commercially available, dramatically increasing fraud risk and making advanced liveness detection a necessity rather than a luxury; (2) global regulatory expansion—EU's eIDAS 2.0, evolving KYC requirements in LATAM and APAC—has widened the addressable market; (3) the GSMA Open Gateway initiative (launched 2023–2024) has standardized telecom network APIs for identity signals like SIM Swap and Number Verification, enabling new fraud-prevention integrations; and (4) the cost of AI inference has dropped significantly, making it economically viable to offer free core KYC at scale.

## Founders & Team

**Alberto Rosas Garcia** — Co-founder & CEO
- From Barcelona, Spain; identical twin of Alejandro Rosas
- Former professional tennis player; played at University of the Cumberlands (Freshman, 2015–16 season) (cumberlandspatriots.com)
- MSc Mathematics, Universitat Politècnica de Catalunya (2020–2021) (Crunchbase via search snippet)
- Started programming at age 12; background in software and AI engineering (didit.me/about-us)
- Previously co-CEO of Gamium (blockchain/metaverse venture, founded 2021) (TheOrg via search snippet)
- Twitter/X: @albertorosasg — follower count not retrievable (JavaScript-rendered)
- LinkedIn: linkedin.com/in/albertorosasg — "CEO of Didit (YC W26)"
- GitHub: github.com/rosasalberto — 9 public repos, 47 followers; pinned repo: StyleGAN2-TensorFlow-2.x (143 stars, 42 forks) (GitHub)

**Alejandro Rosas Garcia** — Co-founder & CTO
- From Barcelona, Spain; identical twin of Alberto Rosas
- Former professional tennis player
- BS Mathematics, New Mexico State University; Mathematics Teaching Assistant there (August 2018 – May 2019) (ContactOut via search snippet)
- Data Analyst / Data Scientist at Oracle (October 2019 – October 2020) (ContactOut via search snippet)
- Previously co-CEO/CTO of Gamium (TheOrg via search snippet)
- Skills include React Native, AWS, Java, Python, SQL, Machine Learning (LinkedIn via search snippet)
- Twitter/X: @_arosasg (referenced in search results) — follower count not retrievable
- LinkedIn: linkedin.com/in/alejandrorosasgarcia — "co-CEO/CTO at Didit"
- GitHub: No public account found under confirmed handle

**Co-founder relationship:** Alberto and Alejandro are identical twin brothers from Barcelona, Spain. They have worked together since childhood (programming since age 12), both pursued professional tennis, both attended U.S. universities on tennis scholarships, and co-founded Gamium together in 2021 before pivoting to Didit.

**Founder-market fit:** Both founders have mathematics backgrounds (MSc and BS respectively) relevant to building AI/ML-based verification systems. Alberto's GitHub shows machine learning work (StyleGAN2 implementation with 143 stars), indicating hands-on AI engineering capability. Alejandro's Oracle data science experience provides relevant enterprise data infrastructure knowledge. Their prior Gamium/Web3 work involved identity protocols, giving them domain context in digital identity — though the current B2B SaaS product represents a significant strategic shift from their blockchain origins.

**Additional leadership:** The team of ~12 includes Hector Carrillo (CFO), Joan Sosa (COO), Marcos Riosalido (DevOps, 30+ years IT), Alex Pinilla (full-stack, building biometric ID systems since 2018), and Jose Hernandez (Head of Sales LATAM) (didit.me/about-us).

**YC Partner:** Tyler Bosmeny (YC company page).

## Key Risks

**Pivot history and brand confusion:** Didit originated as a Web3/blockchain identity protocol within Gamium, which launched a crypto token (GMM) in 2022 and operated in the metaverse space. The current B2B SaaS identity verification product (V1 launched August 2024) is a fundamentally different business. The Gamium entity and GMM token still exist on CoinMarketCap. This creates potential brand confusion and due diligence concerns for enterprise customers who may discover the crypto origins. The HackerNoon interview with Alberto Rosas describes a "wallet-based identity management" product that differs substantially from the current KYC/AML platform.

**Incumbents with deep moats in enterprise:** Persona ($418M raised, $2B valuation, Gartner MQ leader for execution), Sumsub ($85.6M revenue, Gartner MQ leader), and Veriff ($200M raised, unicorn) have established enterprise customer bases, compliance certifications, and sales teams. Onfido's acquisition by Entrust for ~$650M demonstrates that incumbents are consolidating. Didit's $2M in funding and 12-person team must compete for the same enterprise contracts.

**Free tier economics sustainability:** Didit's core differentiator—500 free KYC verifications/month—requires subsidizing infrastructure costs (AI inference, document processing, biometric matching) for potentially thousands of non-paying users. If conversion from free to paid is low, this model could become a cash drain as the customer base grows, particularly given that the company has only raised $2M.

**Regulatory and certification dependency:** Identity verification is a heavily regulated space. Didit must maintain and extend compliance certifications (ISO 27001, iBeta, GDPR) across every market it enters. New regulations (e.g., EU AI Act requirements for biometric systems, evolving AML directives) could require substantial engineering investment that strains a 12-person team.

**Commoditization of core technology:** The underlying technology stack (OCR, face matching, liveness detection) is increasingly available via open-source models and cloud AI services. Multiple startups and incumbents offer similar capabilities. Pricing advantages can be matched, and the barrier to building a competing product is decreasing as AI model costs fall.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $13.75B identity verification market in 2025, projected $29.32B by 2030 at 15.4% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 1,000+ companies (didit.me, Dec 2025); 700+ active B2B customers with ~20% MoM growth (YC page); "millions verified monthly" (YC page); 300%+ NRR at month 6 (YC page); ~90% paid retention at month 6 (YC page); Trustpilot 5 stars / ~50 reviews |
| Revenue Signal | Pay-per-use pricing from $0.03–$0.20/verification with 500 free core checks/month (didit.me/pricing); "close to profitability" as of Dec 2025 (Alberto Rosas, X); $2M raised (Didit blog, Dec 2025) |
| Founders | Alberto Rosas (CEO): MSc Mathematics UPC, ex-pro tennis, AI/ML engineer, co-founded Gamium. Alejandro Rosas (CTO): BS Mathematics NMSU, ex-Oracle data scientist, co-founded Gamium |
| Competitors | Persona ($418M raised, $2B valuation, revenue unknown, Gartner MQ leader for execution); Sumsub (~$37M raised, $85.6M revenue 2024, Gartner MQ leader, higher price point); Veriff ($200M raised, $1.5B valuation, $41.6M revenue 2024, video-based verification); Onfido/Entrust (acquired $650M, £140M+ revenue, enterprise portfolio) |
| Moat Signals | Free core KYC tier (unique among major competitors); 14,000+ document types/220+ countries coverage; ISO 27001/27017/27018 and iBeta Level 1 certifications; reusable KYC feature (potential network effects); Orange/GSMA Open Gateway integration |
| Risk Factors | Pivot from Web3/crypto origins creating brand confusion, well-funded incumbents dominating enterprise, free tier economics sustainability |
| Founder Reach | Alberto Rosas: Twitter @albertorosasg (count not retrievable), LinkedIn linkedin.com/in/albertorosasg, GitHub 143 stars (StyleGAN2 repo). Alejandro Rosas: Twitter @_arosasg (count not retrievable), LinkedIn linkedin.com/in/alejandrorosasgarcia, GitHub not found |
| Distribution Signals | Free tier self-serve funnel; Capterra/GetApp/Software Advice listings; iOS and Android consumer app; Orange/GSMA partnership; Head of Sales LATAM; no Product Hunt launch found |
