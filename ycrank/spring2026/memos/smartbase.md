# Smartbase

> Automated order entry for manufacturers

| Field | Value |
|-------|-------|
| Website | https://www.smartbase.so/ |
| YC Page | https://www.ycombinator.com/companies/smartbase |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Operations |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Workflow Automation, Manufacturing, Automation |
| YC Partner | Harj Taggar |
| Emails | sam@smartbase.so (smartbase.so website + YC page) |

## The Idea

- **Problem:** Manufacturers (specifically metal finishing shops) receive POs by paper, email, fax, and handwritten forms and pay multiple full-time employees to manually re-key them into ERPs, with company claim that this is a wedge into "$26 billion clerical labor market in U.S. manufacturing" (YC page, 2026).
- **Approach:** AI extracts data from scanned/messy PO documents, applies custom business rules, and syncs the parsed order into ERPs (Acumatica, Epicor, Infor, MS Dynamics 365, NetSuite, QuickBooks, SAP, SYSPRO, Sage X3) with optional automatic traveler printing (smartbase.so).
- **Differentiation:** vs. Leverage AI (ERP-native PO visibility/acknowledgments for distributors, tryleverage.ai), Turian (agentic procurement workflows from RFQ to ERP update, turian.ai), and Yooz/Netfira (OCR-led capture); [Inferred]: Smartbase narrows to inbound PO entry at metal finishing shops and offers a U.S.-hosted dedicated enclave for ITAR/CMMC/DFARS compliance (smartbase.so) — defense-supply chain compliance is not advertised by the listed competitors.
- **Business Model:** "Five-figure annual contracts" with first customers (YC page, 2026); no public pricing tiers on smartbase.so.
- **TAM/SAM:** Company-claimed $26B U.S. manufacturing clerical labor TAM (YC page, 2026); No public third-party TAM/SAM data found for metal-finishing PO entry specifically.
- **GTM / Distribution:** [Inferred]: Founder-led direct outbound — founders state they "worked on factory floors, sat side-by-side with employees…even slept at a factory" (YC page), indicating in-person sales rather than self-serve or channel.

## Defensibility

- **Moat today:** ITAR/CMMC/DFARS-compliant U.S.-hosted enclave (smartbase.so) is a regulatory/deployment artifact relevant for defense-supply-chain metal finishing shops; integrations with 9+ named ERPs (smartbase.so) create switching cost once wired in.
- **Future moat:** [Inferred]: Document-parsing accuracy improves with shop-specific labeled POs and learned business rules; unproven because customer count is in single digits (YC page indicates "first customers").
- **Market structure:** [Inferred]: Horizontal procurement platforms (SAP Ariba, Coupa) target buyer-side P2P, not seller-side PO ingestion at SMB job shops; incumbent ERPs (Epicor, NetSuite) earn services revenue from manual onboarding, creating channel/economic friction against bundling free PO automation (tryleverage.ai blog, 2026).
- **Commoditization risk:** Document-extraction is a crowded category — Turian ($3.78M raised, Berlin, PitchBook), Leverage AI ($14.9M raised, NYC, Crunchbase/PR Newswire), Evolinq, and OCR vendors (Yooz, Netfira) all process POs (tryleverage.ai, 2026); LLM-based PO parsing is replicable by any team with API access.

## Market & Traction

- **Traction signals:**
  - Revenue: "five-figure annual contracts" with first customers (YC page, 2026)
  - ROI claim: 90% reduction in PO entry time, $81K annual savings, 1.4 headcount saved per shop (smartbase.so ROI calculator)
  - ERP integrations live: 9 named platforms (smartbase.so)
  - Press coverage: gate.com post referencing Smartbase launch announcement (search snippet, 2026)
  - LinkedIn / Twitter / Discord / Product Hunt: No public data found
  - Job postings: None — YC profile lists Hiring: False (ycombinator.com/companies/smartbase)
- **Competitors:**
  - Leverage AI ($14.9M raised total; Feb 2022 $5M, Jul 2023 $7M; revenue unknown; Chicago Ventures, Mark Cuban — PR Newswire, Chicago Ventures Medium): broader ERP-native supply-chain visibility for distributors, not metal-finishing-specific.
  - Turian ($3.78M raised; Cherry Ventures, Visionaries Club; revenue unknown — PitchBook): end-to-end agentic procurement (RFQ→PO→ERP) headquartered in Berlin, buyer-side focus.
  - Evolinq (funding not found; revenue unknown — evolinq.io): "Digital Twin" agents managing full PO lifecycle from confirmation to discrepancy handling.
  - SAP Ariba / Coupa (public/multi-billion ARR — marketsandmarkets.com): enterprise P2P suites focused on large buyers, not SMB job-shop sellers.
  - Yooz / Netfira (funding/ARR unknown — tryleverage.ai 2026 comparison): OCR-led document capture and supplier document exchange.
- **Why now:** [Inferred]: Multimodal LLMs crossed the threshold in 2024–2025 for extracting structured fields from heterogeneous documents (handwritten, fax, PDF) that prior OCR/RPA pipelines failed on — Turian, Leverage AI and Evolinq all market this same agentic-AI capability as 2026-launch positioning (tryleverage.ai/blog, 2026).

## Founders & Team

- **Sam Goldman (Co-Founder, CEO):**
  - Background: Previously founded a DevOps platform that raised $2M (YC page, 2026); LinkedIn lists Co-Founder/CEO @ Smartbase with prior role at Anytrace (linkedin.com/in/sam-goldman). Prior company name and specifics not publicly disclosed in search results.
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Co-Founder, CEO @ Smartbase" (linkedin.com/in/sam-goldman); follower count not retrievable.
  - GitHub: No public repos found in search results.
- **Taira Fujioka (Co-Founder, CTO):**
  - Background: Per YC page, "youngest SDE 2 at AWS SageMaker Inference," building inference infrastructure used by Salesforce; also listed as Co-Founder of Anytrace (YC S25), an AI support-engineering agent (ycombinator.com/companies/anytrace; linkedin.com/in/taira-fujioka1999420).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Co-Founder & CTO @ Smartbase (YC P26)" (linkedin.com/in/taira-fujioka1999420); follower count not retrievable.
  - GitHub: No public repos found in search results.
- **Co-founder relationship:** Both founders are linked to Anytrace (YC S25) per LinkedIn — Taira as co-founder, Sam with an "Anytrace" entry on his profile (linkedin.com/in/sam-goldman; linkedin.com/in/taira-fujioka1999420); [Inferred]: Smartbase appears to be a pivot or successor from Anytrace's S25 AI-support-engineer product.
- **Founder-market fit:** [Inferred]: CTO's AWS SageMaker Inference background maps to document-extraction model serving; CEO's prior $2M-raised DevOps platform indicates one prior fundraise (YC page); no publicly identified manufacturing-domain advisors or named investors beyond YC's standard deal.

## Key Risks

- **Pivot history and product-market validation:** Both founders' LinkedIn profiles show Anytrace (YC S25, AI support-engineer) preceding Smartbase (YC P26) (linkedin.com/in/taira-fujioka1999420; ycombinator.com/companies/anytrace), implying a recent pivot; current Smartbase traction ("first customers," YC page) is from the new product only, not Anytrace metrics.
- **Narrow ICP wedge:** Website is explicit that Smartbase serves "metal finishing shops" (smartbase.so), a sub-segment of U.S. manufacturing — expansion to other manufacturing verticals requires re-validating workflows and ERP rule-sets, and the $26B TAM claim (YC page) is company-asserted, not third-party.
- **Crowded document-AI competitive set:** Leverage AI ($14.9M, PR Newswire), Turian ($3.78M, PitchBook), Evolinq, Yooz, and Netfira all market AI-driven PO automation (tryleverage.ai, 2026); incumbent ERPs (Epicor, SAP, NetSuite) can bundle equivalent capability natively.
- **Name disambiguation / search ambiguity:** Multiple unrelated entities named "SmartBase Solutions" appear in Crunchbase/Owler (crunchbase.com/organization/smartbase-solutions; owler.com/company/smartbasesolutions); investors and customers may confuse the YC P26 company with these unrelated firms.
- **Technical feasibility on edge documents:** Smartbase's stated input set includes "paper, email, fax, and…handwritten" (YC page); [Inferred]: Handwritten-PO extraction accuracy in regulated defense-supply environments (ITAR/CMMC, smartbase.so) is unproven publicly and a single missed line-item can trigger compliance/shipping errors.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $26B U.S. manufacturing clerical labor market (company claim, YC page 2026); no third-party source found |
| SAM | No public data found |
| Traction | First customers on "five-figure annual contracts" (YC page, 2026); 9 ERP integrations live (smartbase.so); ROI calculator claims $81K savings / 1.4 headcount per shop (smartbase.so) |
| Revenue Signal | "Five-figure annual contracts" (YC page, 2026); no public pricing page |
| Founders | Sam Goldman (CEO): prior DevOps platform that raised $2M. Taira Fujioka (CTO): ex-AWS SageMaker Inference SDE 2, Anytrace YC S25 co-founder. |
| Competitors | Leverage AI ($14.9M raised, revenue unknown, broader ERP-native supply-chain visibility); Turian ($3.78M raised, revenue unknown, agentic RFQ→ERP procurement, Berlin); Evolinq (funding unknown, revenue unknown, Digital Twin PO agents); SAP Ariba / Coupa (multi-billion enterprise P2P incumbents); Yooz / Netfira (funding/revenue unknown, OCR capture and supplier doc exchange) |
| Moat Signals | U.S.-hosted ITAR/CMMC/DFARS-compliant enclave (smartbase.so); 9 ERP integrations (smartbase.so) |
| Risk Factors | Recent pivot from Anytrace YC S25, crowded AI-PO competitive set, narrow metal-finishing ICP |
| Founder Reach | Sam Goldman: Twitter not found, LinkedIn count not retrievable, GitHub not found. Taira Fujioka: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | No public Product Hunt, Chrome Web Store, app-store, or paid-press data found; gate.com referenced a launch post (search snippet, 2026) |
| Emails | sam@smartbase.so (smartbase.so, YC page) |

Sources:
- [Smartbase YC profile](https://www.ycombinator.com/companies/smartbase)
- [Smartbase website](https://www.smartbase.so/)
- [Sam Goldman LinkedIn](https://www.linkedin.com/in/sam-goldman/)
- [Taira Fujioka LinkedIn](https://www.linkedin.com/in/taira-fujioka1999420/)
- [Anytrace YC profile](https://www.ycombinator.com/companies/anytrace)
- [Turian PitchBook](https://pitchbook.com/profiles/company/516138-13)
- [Leverage AI funding (Chicago Ventures)](https://medium.com/chicago-ventures/leverage-raises-7m-to-modernize-global-supply-chains-with-visibility-platform-88c7adcb83ef)
- [Leverage AI $5M PR Newswire](https://www.prnewswire.com/news-releases/leverage-raises-5m-to-modernize-global-supply-chains-with-its-leading-ai-assisted-management-platform-301476913.html)
- [Top 7 AI procurement platforms 2026 (Leverage blog)](https://tryleverage.ai/blog/pf/ai-procurement-automation-platforms-manufacturers)
- [Best PO automation software (Leverage blog)](https://tryleverage.ai/blog/pf/po-automation-software-manufacturers)
- [SmartBase Solutions Crunchbase (disambiguation)](https://www.crunchbase.com/organization/smartbase-solutions)
