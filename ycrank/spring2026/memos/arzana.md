# Arzana

> AI automation for the manufacturing office

| Field | Value |
|-------|-------|
| Website | https://arzana.ai |
| YC Page | https://www.ycombinator.com/companies/arzana |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Productivity, Industrial |
| YC Partner | Tom Blomfield |
| Emails | kools@stanford.edu (Marshall Kools, Stanford profile) |

## The Idea

**Problem:** Manufacturers and distributors rely on manual, labor-intensive front-office processes — quoting, order entry, RFQ processing, customer service updates, procurement, and accounts receivable. These tasks are typically handled by administrative staff using legacy ERP systems, email, and spreadsheets. The company website states that a 5-person office can accomplish what previously took a team of 30 using their system (arzana.ai). Current alternatives include manual workflows layered atop ERPs such as Epicor, SAP, NetSuite, Infor, and JobBoss, or point solutions addressing individual functions.

**Approach:** Arzana provides an "Office Execution System" (OES) — a platform of AI agents that automate discrete front-office workflows including quoting/RFQ processing, order entry, purchasing/procurement, prospecting, outreach, CRM, AP 3-way matching, AR tracking, and customer service (arzana.ai). The platform integrates with existing ERPs (Epicor, Infor, JobBoss, QuickBooks, NetSuite, SAP, Sage, IFS, Dynamics, IQMS) and CRMs (Salesforce, HubSpot, Zoho, Gmail, Outlook) rather than replacing them (arzana.ai). Implementation timeline is stated as 1–3 months (arzana.ai).

**Differentiation:** Unlike point solutions focused on a single function (e.g., Paperless Parts for quoting, Conexiom for order entry), Arzana bundles multiple front-office automation functions into a single platform. Compared to Endeavor AI, which focuses broadly on manufacturing data unification across sales, operations, and supply chain, Arzana specifically targets the administrative "office" layer. Compared to Mavlon, which specializes in RFQ automation for metal fabricators, Arzana covers a broader workflow surface area including AR/AP, procurement, and customer service.

**Business Model:** Pricing is listed at $2,500–$7,000 per month (arzana.ai). No per-seat or consumption-based pricing detail is published. No freemium tier is indicated.

**TAM/SAM:** The global AI in manufacturing market is projected at $34.18 billion in 2025, growing to $155.04 billion by 2030 at a CAGR of 35.3% (MarketsandMarkets, via search snippet). The workflow automation market is a related adjacent segment (Mordor Intelligence, via search snippet). No public SAM estimate specific to manufacturing front-office automation has been found. [Inferred]: The serviceable market would be a subset focused on administrative/front-office automation for US manufacturers and distributors, likely a fraction of the broader AI-in-manufacturing TAM.

**GTM / Distribution:** The company lists named customers on its website including Tier One Technologies, Tecton, Koike, Milltown Paper, Schneider National, Iowa Mold & Engineering, Kuebler, Givi, and Zeiss (arzana.ai). A LinkedIn post by William Alexander announced "Arzana Launches AI Solution for Supplier Updates" (LinkedIn, via search snippet). The company has physical presence in Okoboji, Iowa and Neenah, Wisconsin in addition to San Francisco (arzana.ai/company). [Inferred]: GTM likely combines direct outreach to manufacturers leveraging the founders' Midwestern manufacturing networks with inbound from ERP integration partnerships.

## Defensibility

**Data advantages:** As Arzana processes quoting, order entry, and procurement workflows for manufacturers, it accumulates proprietary data on pricing patterns, order structures, and customer communication norms specific to industrial verticals. This data could improve AI agent accuracy over time.

**Switching costs:** Deep ERP integration (across 10+ ERP systems) and workflow customization create switching friction once implemented. The 1–3 month implementation timeline suggests meaningful configuration investment per customer.

**Technical complexity:** Building AI agents that reliably handle unstructured manufacturing documents (RFQs, purchase orders, specifications) across heterogeneous ERP environments requires domain-specific training data and integration engineering.

No patents, regulatory barriers, or network effects were identified in public sources.

**Market structure:** [Inferred]: Major ERP vendors (SAP, Oracle/NetSuite, Epicor) could build native AI automation into their platforms, but doing so would require them to build cross-ERP compatibility — which conflicts with their incentive to lock customers into their own ecosystem. Additionally, ERP vendors historically focus on the system-of-record layer rather than the agentic workflow layer, and their sales motions target IT departments rather than the office managers and sales teams Arzana appears to serve.

**Commoditization risk:** The individual functions Arzana automates (order entry, quoting, customer service) are addressable by multiple startups and large incumbents. Conexiom ($170M raised), Paperless Parts ($51M raised), and Endeavor AI ($7M raised) all overlap with portions of Arzana's feature set. General-purpose AI agent platforms could also expand into this vertical. The breadth of Arzana's integrated approach is a differentiator, but each component faces competition from well-funded specialists.

## Market & Traction

**Traction signals:**
- Named customers listed on website: Tier One Technologies, Tecton, Koike, Milltown Paper, Schneider National, Iowa Mold & Engineering, Kuebler, Givi, and Zeiss (arzana.ai). These include Fortune 500-level names (Schneider National, Zeiss). No user counts, ARR figures, or growth metrics are publicly disclosed.
- Customer testimonial: "Arzana's Quoting Agent cut our TTQ from 5 days to 1, and our RFQ win rate skyrocketed" — Mason Sokolosky, VP Sales, Tier One Technologies (arzana.ai).
- LinkedIn company page: 123 followers, 4 employees listed (LinkedIn, accessed March 2026).
- Social media presence: LinkedIn, Instagram, YouTube, TikTok (@arzana_automation) (arzana.ai/company). Follower counts not retrievable for Instagram, YouTube, or TikTok.
- Press: Featured in The New York Times, "These A.I. Dreamers Don't Fit the Stereotype" (February 8, 2026) (YC page / dnyuz.com mirror).
- LinkedIn post: William Alexander announced "Arzana Launches AI Solution for Supplier Updates" (LinkedIn).
- No Product Hunt listing found.
- No app store or Chrome extension presence found.
- 0 open job listings (YC page, March 2026).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Arzana |
|---|---|---|---|
| **Conexiom** | ~$170M total (Warburg Pincus, ICONIQ) (VentureBeat, via search snippet) | $50–100M estimated (Owler, via search snippet) | Specialized in "touchless" order-to-cash document automation; serves 16 of top 20 distributors; focused on document-level accuracy rather than full office workflow |
| **Paperless Parts** | $51.1M total, Series B led by OpenView (Paperless Parts press release, via search snippet) | $50–100M estimated (Growjo, via search snippet) | Purpose-built quoting/estimating platform for job shops and contract manufacturers; deep CAD/3D file analysis; narrower scope than Arzana's multi-function OES |
| **Endeavor AI** | $7M seed (Craft Ventures, Heartland Ventures, Contrary, BoxGroup) (WebWire, via search snippet) | Revenue unknown | Broader manufacturing data platform unifying sales, operations, and supply chain; founded by Wharton grad Sahitya Senapathy (age 22); overlap on order entry and quoting |
| **Rossum** | $111M total, $100M Series A (General Catalyst) (Rossum blog, via search snippet) | Revenue unknown; 275+ enterprise customers (Rossum, via search snippet) | AI document processing platform for transactional documents; broader than manufacturing (finance, logistics, insurance); proprietary T-LLM "Aurora" |
| **Mavlon** | Funding unknown | Revenue unknown; pricing $15K–$50K/year (mavlon.co, via search snippet) | Narrow focus on RFQ email parsing and quoting for metal fabricators; email-native UX; does not cover order entry, AR/AP, or procurement |

**Why now:** [Inferred]: The convergence of large language models capable of parsing unstructured manufacturing documents (RFQs, purchase orders, technical specs) with agentic AI frameworks capable of executing multi-step workflows has created a technology threshold. Prior automation solutions (e.g., Conexiom, founded 2001) relied on template-based OCR and rules engines that required significant per-document configuration. LLM-based approaches can generalize across document formats with less setup. Additionally, 98% of manufacturers are exploring AI but only 20% are fully prepared (PR Newswire, 2026, via search snippet), suggesting demand is outpacing adoption — creating an opportunity for turnkey solutions.

## Founders & Team

**William Alexander** — Co-founder & CEO
- Education: Stanford University — Economics + Computer Science (YC page)
- Background: Age 21, from Okoboji, Iowa. Self-taught Mandarin Chinese (during a semester in Hong Kong) and Italian via Duolingo. Achieved Iowa state ranking in discus by self-teaching via YouTube. Started a Neapolitan-style pizza business at Lake Okoboji as a teenager (Lake Life Okoboji, June 2021). No formal tech background prior to founding Arzana; described by NYT as not fitting the tech stereotype.
- Quote: "There is no Plan B, because that assumes you will fail" (NYT, Feb 2026 via dnyuz.com mirror).
- Twitter/X: @williealex found via search but not confirmed as belonging to this William Alexander. Count not retrievable.
- LinkedIn: linkedin.com/in/william--alexander (LinkedIn)
- GitHub: No public repos found attributable to this individual.

**Marshall Kools** — Co-founder & COO
- Education: Stanford University — BS & MA in Management Science & Engineering (LinkedIn headline; Stanford Profiles lists "Management Science and Engineering")
- Background: Age 24, from Neenah, Wisconsin. Division 1 wrestler at Stanford (four-time letterwinner and 2020 Wisconsin state champion at Neenah High School) (GoStanford athletics roster; Neenah Satellite). Also played Stanford club rugby (Stanford Club Sports roster, via search snippet). No formal tech background; stated "I took, like, one coding class in my life" (NYT, Feb 2026 via dnyuz.com mirror). Paid himself approximately $10,000 in 2025 (NYT, Feb 2026 via dnyuz.com mirror).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/marshallkools — "Building @ Arzana | Stanford BS & MA" (LinkedIn)
- GitHub: No public repos found.

**Joe Politi** — Lead Founding Engineer, based in Menlo Park, CA (arzana.ai/company, LinkedIn).

**Mason Vander Pol** — Founding Field Engineer, based in Okoboji, IA (arzana.ai/company).

**Co-founder relationship:** William Alexander and Marshall Kools met as classmates at Stanford University (NYT, Feb 2026 via dnyuz.com mirror). Both are from Midwestern backgrounds (Iowa and Wisconsin, respectively).

**Founder-market fit:** Both founders have Midwestern manufacturing-region roots — Alexander grew up in Okoboji, Iowa, and Kools in Neenah, Wisconsin (a Fox Valley manufacturing hub). While neither has prior professional manufacturing or tech industry experience, the company maintains physical presence in Iowa and Wisconsin alongside San Francisco, suggesting direct relationships with the manufacturing customer base. Alexander's YC bio describes him as a "manufacturing nerd from Iowa" (YC page). The founding field engineer (Mason Vander Pol) is based in Okoboji, IA, indicating a field-sales/implementation model tied to manufacturing geographies.

## Key Risks

**Well-funded incumbent overlap:** Conexiom (~$170M raised, $50–100M revenue) and Paperless Parts ($51M raised) address core portions of Arzana's value proposition (order automation and quoting, respectively) with established enterprise customer bases. Conexiom claims 16 of the top 20 distributors as customers (conexiom.com). Endeavor AI ($7M seed from Craft Ventures) targets a nearly identical market segment with an overlapping feature set and a similarly young founder. Arzana must compete on breadth of workflow automation while these competitors deepen their specializations.

**Non-technical founding team:** Both co-founders have no formal engineering background. Alexander studied Economics + CS but has no prior tech roles; Kools took "one coding class" and holds an MS in Management Science & Engineering. Engineering execution depends on Joe Politi (Lead Founding Engineer) and potentially future hires. At a 4-person team size with 0 open job postings (YC page, March 2026), the engineering capacity for maintaining integrations across 10+ ERPs and 6+ CRMs while building AI agents is constrained.

**Customer logo verifiability:** The website lists major enterprise names (Schneider National, Zeiss) as customers, but no independent press coverage, case studies with quantified outcomes, or third-party validation of these relationships was found. The sole testimonial is from Tier One Technologies. If the customer relationships are early pilots or limited engagements, the implied Fortune 500 traction may overstate current commercial adoption.

**ERP integration maintenance burden:** Supporting 10+ ERP systems (Epicor, Infor, JobBoss, QuickBooks, NetSuite, SAP, Sage, IFS, Dynamics, IQMS) requires ongoing integration maintenance as each ERP vendor releases updates. At 4 team members, this creates a significant surface area risk where any breaking ERP change could disrupt customer operations.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in manufacturing: $34.18B (2025) → $155.04B (2030), CAGR 35.3% (MarketsandMarkets, via search snippet) |
| SAM | No public data found for manufacturing front-office automation specifically |
| Traction | 9 named customer logos on website including Schneider National and Zeiss (arzana.ai); 1 customer testimonial from Tier One Technologies (arzana.ai); NYT feature (Feb 8, 2026); 123 LinkedIn followers (LinkedIn, March 2026) |
| Revenue Signal | Pricing: $2,500–$7,000/month (arzana.ai). No ARR or revenue figures disclosed. |
| Founders | William Alexander (CEO): Stanford Econ + CS, from Iowa, age 21. Marshall Kools (COO): Stanford BS & MA in MSE, D1 wrestler, from Wisconsin, age 24. |
| Competitors | Conexiom (~$170M raised, $50–100M est. revenue, enterprise order automation); Paperless Parts ($51.1M raised, $50–100M est. revenue, quoting platform); Endeavor AI ($7M seed, manufacturing AI platform); Rossum ($111M raised, revenue unknown, document processing); Mavlon (funding unknown, revenue unknown, RFQ automation) |
| Moat Signals | Multi-ERP integration breadth (10+ ERPs); bundled multi-function OES vs. point solutions; accumulating proprietary manufacturing workflow data |
| Risk Factors | Well-funded incumbent overlap, non-technical founding team, ERP integration maintenance burden at 4-person scale |
| Founder Reach | William Alexander: LinkedIn linkedin.com/in/william--alexander (count not retrievable), Twitter unconfirmed. Marshall Kools: LinkedIn linkedin.com/in/marshallkools (count not retrievable), Twitter not found. |
| Distribution Signals | NYT feature "These A.I. Dreamers Don't Fit the Stereotype" (Feb 8, 2026); LinkedIn company page (123 followers); Social presence on Instagram, YouTube, TikTok (@arzana_automation) — follower counts not retrievable. No Product Hunt listing found. |
| Emails | kools@stanford.edu (Stanford Profiles) |
