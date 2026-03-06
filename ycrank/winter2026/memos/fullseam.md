# FullSeam

> FullSeam is an AI employee for finance and accounting teams.

| Field | Value |
|-------|-------|
| Website | https://fullseam.com |
| YC Page | https://www.ycombinator.com/companies/fullseam |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Finance and Accounting |
| Team Size | 3 |
| Location | No public data found |
| Tags | Artificial Intelligence, FinOps, Fintech, SaaS |
| YC Partner | Brad Flora |
| Emails | tom@fullseam.com (YC Launch page) |

## The Idea

**Problem:** Finance and accounting teams at growing companies are burdened with high volumes of routine, manual work — invoicing customers, processing vendor bills, recording payments, reconciling bank statements, and updating financial records across multiple systems. These tasks are time-consuming, error-prone, and typically require staff to log in and out of disparate tools (ERP, billing, banking, CRM). The founding team experienced this directly: at their prior company TaxProper, their accounting team was "drowning in invoicing, reconciliations, customer questions, and exception handling" as the business scaled (YC Launch page). Current solutions are either manual workflows or traditional AP/AR automation platforms that still require significant human oversight.

**Approach:** FullSeam deploys AI "employees" (agents) that log into a company's existing accounting, billing, banking, and CRM tools and autonomously complete routine tasks. Specific capabilities include: (1) **Accounts Receivable** — automated customer follow-ups until payment, invoice generation, and customer AP portal updates; (2) **Accounts Payable** — invoice ingestion from email/portals/PDFs, invoice-to-PO/contract matching, GL coding with vendor defaults, and vendor follow-up for missing information; (3) **Cash Application** — AI-powered payment matching against open invoices including partial payments; (4) **Reconciliation** — bank statement matching, GL comparison, and variance flagging (fullseam.com). The system includes confidence scoring on data extraction, exception flagging and routing for human review, custom approval workflows, and auditable action logs (fullseam.com).

**Differentiation:** Unlike point solutions that automate only AP (e.g., Stampli, Vic.ai) or only AR (e.g., Fazeshift, HighRadius), FullSeam spans both AP and AR plus cash application and reconciliation as a single integrated platform. The "AI employee" framing — agents that log in to existing tools and act autonomously — contrasts with copilot-style tools that assist humans in existing workflows but still require manual triggering. Auditoria.ai is the closest comparable offering multi-function AI automation across AP and AR, though it targets enterprise customers and has raised $60.5M (Auditoria.ai press release, Feb 2025). FullSeam integrates with nine named platforms: QuickBooks, Stripe, Xero, HubSpot, Bill, Sage, NetSuite, PandaDoc, and Salesforce (fullseam.com).

**Business Model:** No pricing page is publicly available on fullseam.com. [Inferred]: Most likely monetization path is SaaS subscription pricing, potentially tiered by transaction volume or number of connected tools, given the B2B SaaS positioning and the category norms of AP/AR automation vendors.

**TAM/SAM:** The global accounts payable automation market was estimated at USD 3.07 billion in 2023, projected to reach USD 7.1 billion by 2030 at a 12.5% CAGR (Grand View Research, via search snippet). The accounts receivable automation market is expected to grow from USD 3.40 billion in 2025 to USD 6.57 billion by 2031 at an 11.6% CAGR (Mordor Intelligence, via search snippet). Combined, the AP + AR automation TAM is approximately USD 9.5 billion in 2025 across both segments. [Inferred]: FullSeam's SAM is the subset of SMB and mid-market companies using the nine integrations listed, which narrows the addressable segment but is not publicly quantified.

**GTM / Distribution:** The company offers demo booking via fullseam.com and lists testimonials from two named customers (Deferred, Belfry Software), suggesting a direct sales or founder-led sales approach. The YC Launch page mentions a contact email (tom@fullseam.com). [Inferred]: Most likely distribution path at this stage is founder-led sales targeting SMB and mid-market companies already using QuickBooks, Xero, or NetSuite, leveraging YC network and the founders' real estate/fintech contacts from TaxProper.

## Defensibility

**Workflow data moat:** As FullSeam agents process invoices, payments, and reconciliations, the system accumulates company-specific financial data, vendor/customer communication patterns, and GL coding preferences. Over time, this creates switching costs — the AI becomes tuned to each customer's unique accounting rules and vendor relationships. However, this moat is nascent and unproven at the current stage.

**Multi-system integration breadth:** Supporting nine integrations across accounting, billing, banking, and CRM creates a compound integration barrier. Each new integration adds complexity for competitors attempting to replicate the same breadth of autonomous operation across tool combinations.

**Repeat founder advantage:** All three founders previously built and exited TaxProper (S19 → Opendoor acquisition, 2022), giving them direct experience building fintech SaaS that interfaces with financial systems and institutional customers. This is an execution advantage rather than a structural moat.

**Market structure:** [Inferred]: Large incumbents like Intuit (QuickBooks), Sage, and Oracle (NetSuite) could build similar AI automation natively within their platforms, but doing so would cannibalize professional services revenue and partner ecosystem relationships. Their incentive is to remain a platform rather than replace the workflows that drive ecosystem stickiness. However, no structural barrier prevents them from shipping this as a feature.

**Commoditization risk:** The core capabilities (invoice OCR, GL coding, payment matching) are technically reproducible using commercially available LLMs and standard API integrations. Stampli ($148M raised), Vic.ai ($52M raised), and Auditoria.ai ($60.5M raised) all have more capital and established customer bases. Multiple YC-backed startups (e.g., Fazeshift for AR) target adjacent segments. The barrier to entry for any single function (AP or AR) is low; the differentiator is breadth of coverage and execution speed.

## Market & Traction

**Traction signals:**
- YC Launch page upvotes: 17 (YC Launch page, as of research date)
- Named customer testimonials: Judd Schoenholtz, CEO of Deferred; Jordan Wallach, CEO of Belfry Software (fullseam.com)
- Customer testimonial: "FullSeam understands our business context and automated our AP process without additional overhead" — Judd Schoenholtz, CEO Deferred (fullseam.com)
- Customer testimonial: "We went from people interpreting contracts to a system that actually understands them" — Jordan Wallach, CEO Belfry Software (fullseam.com)
- Funding: $500K raised (PitchBook profile, via search snippet)
- Twitter/X: @FullSeam (YC page) — follower count not retrievable
- LinkedIn: https://www.linkedin.com/company/fullseam/ — follower count not retrievable
- Facebook: https://www.facebook.com/profile.php?id=61583790849054 (YC page) — follower count not retrievable
- Job postings: 0 active (YC page)
- Product Hunt: No listing found
- Press coverage: No coverage found in named publications
- App store / Chrome extension: Not applicable
- Prior company traction: TaxProper processed over $1 billion annually in property tax payments before the Opendoor acquisition (YC Launch page)

**Competitive landscape:**

| Competitor | Key Differentiator vs. FullSeam | Funding | Revenue |
|---|---|---|---|
| **Stampli** | AP-only focus with AI copilot "Billy the Bot"; 500K customers; more mature product with Blackstone backing | $148M total (Series D, Oct 2023) (Clay, via search snippet) | $11.2M revenue in 2024 (Latka, via search snippet) |
| **Vic.ai** | AP-focused autonomous automation with predictive analytics; longer track record in enterprise AP | $52M+ total (Crunchbase, via search snippet) | Revenue unknown |
| **Auditoria.ai** | Multi-function agentic AI across AP and AR (closest comparable); targets enterprise; processes $2.4B in collections and $9B in invoicing annually for customers | $60.5M total (Series B, Feb 2025) (Auditoria.ai press release) | Revenue unknown; "triple-digit growth" in 2024 (Auditoria.ai press release) |
| **Fazeshift** (YC) | AR-only AI agent; Harvard/MIT founding team; already working with large enterprise clients | $5.5M total (Seed, Jan 2025) (PitchBook, via search snippet) | Revenue unknown |
| **HighRadius** | Enterprise-focused order-to-cash platform; established player with deep ERP integrations | Revenue unknown; established late-stage company | Revenue unknown |

**Why now:** [Inferred]: The convergence of two factors in 2024-2025 created the opening: (1) LLM capabilities crossed a performance threshold for reliably extracting structured data from unstructured financial documents (invoices, contracts, bank statements) and reasoning about GL coding rules — tasks that were previously too error-prone for automation; (2) the agentic AI paradigm matured, enabling software agents to autonomously chain multi-step workflows across multiple systems (log in, extract, match, record, follow up) rather than requiring human orchestration at each step. These technical inflection points made it feasible to build a full-stack autonomous finance worker for the first time.

## Founders & Team

**Thomas Dowling** — Co-founder
- BA in History and Political Science, University of Illinois at Urbana-Champaign (2018); MSc in Comparative Social Policy, University of Oxford (Rhodes Scholar, 2019) (University of Illinois History Department Q&A, Mar 2025; thetomdowling.com)
- Co-founder & CEO of TaxProper (YC S19), which grew to service 115,000+ properties worth $35B+ and was acquired by Opendoor (NASDAQ: OPEN) on November 4, 2022 (PitchBook, via search snippet; TaxProper blog post)
- TaxProper raised $2M+ from Khosla Ventures and YC (thetomdowling.com)
- TaxProper processed over $1B annually in property tax payments (YC Launch page)
- Former municipal finance advisor to Chicago Mayor Lori Lightfoot (thetomdowling.com)
- Commissioner, Illinois Student Assistance Commission (appointed by Governor J.B. Pritzker) — expanded annual student assistance awards from $450M to $600M+ (thetomdowling.com)
- Twitter/X: @thetomdowling — count not retrievable
- LinkedIn: linkedin.com/in/thomas-dowling-2a3aabb7/
- GitHub: No public repos found

**Aaron Coppa** — Co-founder
- University of Illinois at Urbana-Champaign (LinkedIn, via search snippet); Stanford GSB MBA (planned) (LinkedIn, via search snippet)
- Head of Product at TaxProper (YC S19), which was acquired by Opendoor (data-lead.com, via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/aaron-coppa-451a1955/
- GitHub: No public repos found

**Geoff Segal** — Co-founder
- University of Illinois at Urbana-Champaign (LinkedIn, via search snippet)
- Co-founder of TaxProper (YC S19), acquired by Opendoor in 2022 (Crunchbase, via search snippet)
- Former actuarial statistician and research analyst at State Farm (Topio Networks, via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/geoff-segal-744407ba/
- GitHub: No public repos found

**Co-founder relationship:** All three founders attended the University of Illinois at Urbana-Champaign. Dowling and Segal co-founded TaxProper together in 2019, and Coppa joined as Head of Product at TaxProper. All three worked together at TaxProper through its acquisition by Opendoor in 2022 and continued at Opendoor before founding FullSeam.

**Founder-market fit:** The team built and exited a fintech SaaS company (TaxProper) that processed $1B+ in annual property tax payments, giving them direct operational experience with high-volume financial transactions, institutional customers, and the pain of scaling accounting operations. The founding motivation for FullSeam came directly from experiencing accounting team bottlenecks at TaxProper during its growth phase. Segal's actuarial/statistical background at State Farm adds quantitative rigor to financial modeling. Dowling's Rhodes Scholarship and policy experience demonstrate leadership capacity. This is a second-time YC team (S19 → W26) with a prior exit.

## Key Risks

**Incumbent platform risk:** QuickBooks (Intuit), Xero, and NetSuite (Oracle) — three of FullSeam's nine listed integrations — are actively investing in native AI features. Intuit announced AI-powered automation capabilities within QuickBooks in 2024-2025. If these platforms ship native AP/AR automation, FullSeam's value proposition as a middleware layer diminishes, and integration access could be restricted or deprecated.

**Well-funded competitor convergence:** Auditoria.ai ($60.5M raised, Feb 2025) offers a directly comparable multi-function agentic AI product for AP and AR. Stampli ($148M raised) and Vic.ai ($52M raised) could extend their AP-only tools into AR. FullSeam's $500K in funding creates a significant capital disadvantage in a race to build integration breadth and AI reliability.

**Accuracy and trust threshold:** Autonomous AI agents making financial entries without human approval carry inherent risk of errors in GL coding, payment matching, or invoice processing. Accounting errors have regulatory and audit implications. Customer adoption may be gated by the willingness of finance teams to trust autonomous agents with financial data integrity — a higher bar than other AI automation domains.

**API dependency:** FullSeam's product relies on API access to nine third-party platforms. Any changes to API terms, rate limits, pricing, or deprecation by integration partners (particularly dominant ones like QuickBooks, Stripe, or NetSuite) could disrupt core functionality without recourse.

**Single-segment customer base:** Both named customer testimonials (Deferred, Belfry Software) appear to be early-stage software companies. Expanding beyond the startup/SMB segment into mid-market and enterprise — where the largest AP/AR pain exists — requires different sales motions, compliance certifications (SOC 2, etc.), and integration depth that are not yet publicly evidenced.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AP automation: $3.07B in 2023, projected $7.1B by 2030 at 12.5% CAGR (Grand View Research, via search snippet); AR automation: $3.40B in 2025, projected $6.57B by 2031 at 11.6% CAGR (Mordor Intelligence, via search snippet) |
| SAM | No public data found |
| Traction | 2 named customer testimonials (fullseam.com); 17 upvotes on YC Launch page; TaxProper (prior company) processed $1B+ annually (YC Launch page) |
| Revenue Signal | No public data found |
| Founders | Thomas Dowling: Rhodes Scholar (Oxford), co-founder/CEO of TaxProper (S19, acquired by Opendoor 2022). Aaron Coppa: UIUC, Head of Product at TaxProper. Geoff Segal: UIUC, co-founder of TaxProper, former actuarial statistician at State Farm. |
| Competitors | Stampli ($148M raised, $11.2M revenue 2024, AP-only with AI copilot); Vic.ai ($52M+ raised, revenue unknown, AP-focused autonomous automation); Auditoria.ai ($60.5M raised, revenue unknown, multi-function agentic AI for AP+AR); Fazeshift ($5.5M raised, revenue unknown, AR-only AI agent, YC-backed) |
| Moat Signals | Repeat founders with prior exit (TaxProper → Opendoor); multi-system integration breadth (9 integrations); potential workflow data accumulation over time |
| Risk Factors | Incumbent platform AI features (QuickBooks, Xero, NetSuite), well-funded direct competitors (Auditoria.ai, Stampli), accuracy/trust threshold for autonomous financial agents |
| Founder Reach | Thomas Dowling: Twitter @thetomdowling (count not retrievable), LinkedIn linkedin.com/in/thomas-dowling-2a3aabb7/. Aaron Coppa: Twitter not found, LinkedIn linkedin.com/in/aaron-coppa-451a1955/. Geoff Segal: Twitter not found, LinkedIn linkedin.com/in/geoff-segal-744407ba/. GitHub: No public repos found for any founder. |
| Distribution Signals | YC Launch page (17 upvotes); No Product Hunt listing found; No press coverage found in named publications |
| Emails | tom@fullseam.com (YC Launch page) |
