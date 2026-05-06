# Arden

> AI agents that automate SOX control testing.

| Field | Value |
|-------|-------|
| Website | https://ardentech.ai/ |
| YC Page | https://www.ycombinator.com/companies/arden |
| Batch | Spring 2026 (YC P26) |
| Industry | B2B / B2B -> Finance and Accounting |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Finance, B2B, AI |
| YC Partner | David Lieb (YC company page) |
| Emails | founders@ardentech.ai (ardentech.ai) |

## The Idea

**Problem:** Every U.S. public company is required to perform Sarbanes-Oxley (SOX) testing of internal controls; teams currently execute this work via spreadsheets, screenshots, and manual evidence collection across enterprise systems (YC company page; ardentech.ai). The 2025 KPMG SOX Survey identifies rising audit complexity, talent shortages, and mounting compliance costs as ongoing pressures (KPMG, 2025 via search snippet).

**Approach:** Computer-use AI agents pull evidence from Workday, Okta, NetSuite, ServiceNow, Active Directory, AuditBoard, and 15+ other systems via read-only API; perform identity resolution/reconciliation across systems; execute end-to-end control testing on full populations; and produce reviewer-ready workpapers with sample bundles, evidence trails, and reviewer sign-offs aligned to PCAOB AS 2201 and COSO frameworks (ardentech.ai). Setup time stated as ~1 hour; testing time stated as "minutes, not weeks" (ardentech.ai).

**Differentiation:** Arden positions against legacy GRC/workflow incumbents (AuditBoard/Optro, Workiva) which "track the administration of a SOX program" while still relying on manual inputs and periodic testing (Scytale comparison; CPA Practice Advisor, Jan 2026 via search snippet). Arden integrates directly with AuditBoard via API rather than replacing it (ardentech.ai). Closest direct competitor is Midship (also AI-native SOX agents, $4.15M seed Jan 2026) (PRNewswire, Jan 2026) and YC-backed Oxus (Launch YC page).

**Business Model:** Pricing not disclosed on ardentech.ai. [Inferred]: Most likely monetization is annual SaaS contract per public-company customer, given the enterprise SOX buyer profile and the AuditBoard/Workiva precedent of seat- or entity-based annual licensing.

**TAM/SAM:** Internal Audit Services Market valued at USD $74.83B in 2025, projected to reach USD $112.23B by 2032 at 5.9% CAGR (Research and Markets via search snippet). SOX Compliance for Financial Institutions market reached USD $2.37B in 2024, projected USD $5.74B by 2033 at 10.4% CAGR (Growth Market Reports via search snippet). Broader Auditing Services Market: USD $292.26B in 2025 (Research and Markets via search snippet).

**GTM / Distribution:** [Inferred]: Direct outbound to internal audit / SOX program leads at U.S. public companies; founder-led sales. Supported by anecdote that founders performed in-person customer discovery in San Francisco's Financial District audit firm lobbies (search snippet, source uncited beyond aggregation).

## Defensibility

- **Integrations breadth:** 15+ enterprise integrations covering Workday, Okta, NetSuite, ServiceNow, Active Directory, AuditBoard (ardentech.ai). Switching/setup cost compounds as more source systems are wired in.
- **Compliance posture:** Read-only-by-default access, AES-256 encryption, TLS 1.2+, US-region Supabase/AWS, SOC 2 Type I "in progress," no model training on customer data (ardentech.ai).
- **Workpaper format alignment:** Output aligned to PCAOB AS 2201 and COSO (ardentech.ai).

**Market structure:** [Inferred]: AuditBoard and Workiva monetize as systems-of-record/workflow platforms; building agents that fully automate testing partially cannibalizes seat-based GRC pricing and substitutes work that consultancies (Big Four advisory) bill hourly. This creates a channel/pricing-model conflict for incumbents that does not bind a startup. No structural regulatory moat identified at this stage.

**Commoditization risk:** Direct competitor Midship is shipping an overlapping agentic SOX product with $4.15M seed and named public-company customers (PRNewswire, Jan 2026). Oxus (YC) targets the same SOX automation use case (Launch YC page). [Inferred]: The technical core (LLM agents + connector library + workpaper generation) is replicable by any well-resourced compliance-software team; defensibility likely turns on integrations depth, audited reliability, and Big Four channel partnerships rather than core IP.

## Market & Traction

**Traction signals:**
- "Backed by Y Combinator," batch Spring 2026 / P26 (YC company page).
- Customer or pilot logos: MIT and Cal logos shown on ardentech.ai under partnerships (ardentech.ai). No paying-customer count, ARR, or named public-company customer disclosed.
- LinkedIn: linkedin.com/company/ardeninc (YC page); follower count not retrievable.
- Founder Twitter/X: @aryamank24 (Aryaman Khanna, per YC page); @david_loom (David Lomelin, X.com); follower counts not retrievable.
- No Product Hunt launch found for Arden (search returned Oxus, a different YC SOX product).
- No press coverage of Arden funding announcement found in the TechCrunch W26 demo-day roundup (TechCrunch, Mar 2026 via search snippet) — Arden not specifically named in the snippet returned.
- Hiring: company_data flag = False; no public job postings located.
- Anecdotal: founders described as "19 year olds" who "applied to Y Combinator three weeks past the deadline" (search snippet aggregator, primary source uncited).

**Competitive landscape:**
- **Midship** — $4.15M seed Jan 2026, led by Costanoa Ventures with Seguin Ventures and angels (PRNewswire, Jan 2026); founders ex-Instacart/Deloitte/Amazon/Lyft/Faire/PayPal, product trio from Dashworks (acquired by HubSpot); states "leading public companies, including a top social media platform and major fintechs" as users (PRNewswire, Jan 2026). ARR not disclosed. Differentiator vs. Arden: more senior, audit-domain-experienced founding team and disclosed enterprise logos; Arden differentiator: deeper read-only computer-use connector breadth claimed (15+ systems on ardentech.ai).
- **Oxus (YC)** — AI-native SOX audit automation, Launch YC listing (Y Combinator). Funding/ARR not disclosed in search results. Differentiator vs. Arden: explicit pitch on audit scoping and process flowchart generation (Launch YC page).
- **AuditBoard / Optro** — Established GRC workflow incumbent; per Scytale comparison "continues to rely on manual inputs and periodic testing" (Scytale via search snippet). Funding: no figure retrieved in this research; AuditBoard widely reported acquired by Hg Capital in 2024 (not verified in current search results — omitted from key-facts to avoid uncited claim). Differentiator: system-of-record + program management; Arden integrates with rather than replaces it (ardentech.ai).
- **Workiva** — Public company (NYSE: WK); reporting/disclosure-first GRC platform (Workiva.com via search snippet). Differentiator: financial-reporting and ESG disclosure breadth, not agentic testing.
- **Scytale, Drata, Vanta, Secureframe** — Adjacent compliance automation (SOC 2/ISO 27001/HIPAA-leaning); Scytale markets ITGC/SOX automation (Scytale.ai via search snippet). Differentiator: SOC 2-anchored GTM versus Arden's pure SOX/internal-audit focus.

**Why now:** [Inferred]: Three concurrent shifts cited across vendor materials — (a) LLM tool-use/computer-use capability matured to where agents can navigate enterprise UIs and perform multi-step evidence retrieval reliably; (b) audit-team talent shortages and rising compliance costs flagged in the 2025 KPMG SOX Survey (KPMG, 2025 via search snippet); (c) acceptance of AI-generated workpapers within PCAOB AS 2201 documentation norms is being tested commercially by Midship and peers (CPA Practice Advisor, Jan 2026 via search snippet). No explicit regulatory catalyst dated in 2024–2026 is cited by Arden.

## Founders & Team

**Aryaman Khanna** — Co-Founder & CEO
- Studied CS at UC Berkeley (YC company page).
- Previously worked on AI at Databricks (YC company page).
- Twitter/X: @aryamank24 (per YC page); follower count not retrievable.
- LinkedIn: linkedin.com/in/aryaman-khanna-210a9121b — headline "Co-Founder @ Arden (YC P26)" (LinkedIn search result).
- GitHub: No public repos found in search.

**David Lomelin** — Co-Founder & CTO
- Studied Artificial Intelligence at MIT, focus on mechanistic interpretability (YC company page; LinkedIn search snippet).
- Previously built Blueprint, "automated UGC marketing platform for 2,500+ businesses" (LinkedIn search snippet).
- Twitter/X: @david_loom (X.com search result); follower count not retrievable.
- LinkedIn: linkedin.com/in/david-lom — "Building Arden | Prev @ MIT" (LinkedIn search result).
- GitHub: github.com/jdl20515 (GitHub search result); notable repo / star count not retrieved.
- Personal site: davidlomelin.com (search result).

Search-snippet-level claim that both founders are "19 year olds" who applied to YC three weeks past the deadline (aggregator search snippet; primary source uncited) — flagged for verification.

**Co-founder relationship:** No shared employer or university visible in Phase 3 data (Berkeley CS vs. MIT AI; Databricks vs. Blueprint/MIT CSAIL). No public data on co-founder history.

**Founder-market fit:** [Inferred]: Khanna brings ML/data-platform engineering exposure from Databricks; Lomelin brings AI research depth from MIT plus prior shipped product (Blueprint, 2,500+ business users per LinkedIn snippet). Neither founder has documented SOX, internal audit, or Big Four advisory background based on Phase 3 search results — domain knowledge appears to be acquired post-hoc via customer discovery (search snippet about audit-firm lobby visits). No advisors, board members, or notable angels disclosed in public sources.

## Key Risks

**Direct AI-native competitor with audit-domain founding team and disclosed logos:** Midship raised $4.15M seed Jan 2026 from Costanoa Ventures with founders drawn from Instacart/Deloitte/Amazon/Lyft/Faire/PayPal audit and compliance functions, and references named public-company users including "a top social media platform and major fintechs" (PRNewswire, Jan 2026). Arden's two-person team enters the same workflow without disclosed comparable customer references.

**Domain expertise gap on founding team:** Neither founder's public profile lists Big Four, SOX, or internal-audit operating experience (YC page; LinkedIn snippets). PCAOB AS 2201/COSO alignment claims (ardentech.ai) require sustained engagement with external auditors and audit committees; risk that workpapers fail external auditor review at customer year-end. No public mitigation (no senior audit-domain advisor disclosed in search).

**Trust/regulatory acceptance for AI-generated workpapers:** External auditors (Big Four) must accept agent-produced workpapers as audit evidence. SOC 2 Type I is "in progress" rather than complete (ardentech.ai); SOC 2 Type II not stated. Risk that enterprise buyers gate procurement on completed Type II.

**Connector breakage / silent-failure risk:** Computer-use agents pulling from Workday, Okta, NetSuite, ServiceNow are sensitive to UI/API changes; an undetected evidence-collection failure during SOX testing could produce materially wrong control conclusions. No public reliability metric or attestation found.

**Concentration on integrations Arden does not own:** Distribution/utility depends on read-only access to AuditBoard and other GRC systems whose vendors compete for the same SOX-automation budget (ardentech.ai). API access policies at those vendors could change.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Internal Audit Services Market $74.83B 2025 → $112.23B 2032, 5.9% CAGR (Research and Markets via search snippet); Auditing Services Market $292.26B 2025 (Research and Markets via search snippet) |
| SAM | SOX Compliance for Financial Institutions $2.37B 2024 → $5.74B 2033, 10.4% CAGR (Growth Market Reports via search snippet) |
| Traction | YC Spring 2026 batch (YC company page); MIT and Cal logos shown as partnerships (ardentech.ai); SOC 2 Type I in progress (ardentech.ai); no customer count, ARR, or press funding announcement found |
| Revenue Signal | No public data found (no pricing page on ardentech.ai; no funding announcement located) |
| Founders | Aryaman Khanna (CEO): UC Berkeley CS, prior AI at Databricks (YC page). David Lomelin (CTO): MIT AI / mechanistic interpretability, prior built Blueprint UGC marketing platform for 2,500+ businesses (YC page; LinkedIn snippet) |
| Competitors | Midship ($4.15M seed Jan 2026 led by Costanoa, ARR undisclosed, audit-domain founders w/ named public-co customers — PRNewswire Jan 2026); Oxus (YC, funding undisclosed, SOX audit scoping & flowcharting — Launch YC); AuditBoard/Optro (funding not retrieved, ARR undisclosed, GRC system-of-record — Scytale via search snippet); Workiva (NYSE: WK, public, reporting-first GRC — Workiva.com via search snippet); Scytale (funding not retrieved, AI GRC w/ SOC 2 lean — Scytale.ai via search snippet) |
| Moat Signals | 15+ enterprise integrations claimed (ardentech.ai); read-only-by-default + AES-256 + TLS 1.2+ (ardentech.ai); PCAOB AS 2201/COSO alignment (ardentech.ai); SOC 2 Type I in progress (ardentech.ai) |
| Risk Factors | Direct AI-native competitor (Midship) with disclosed logos; founder audit-domain experience gap; SOC 2 Type II not stated |
| Founder Reach | Aryaman Khanna: Twitter @aryamank24 count not retrievable, LinkedIn aryaman-khanna-210a9121b count not retrievable, GitHub no public repos found. David Lomelin: Twitter @david_loom count not retrievable, LinkedIn david-lom count not retrievable, GitHub jdl20515 stars not retrieved |
| Distribution Signals | No Product Hunt launch found for Arden (search returned different YC product Oxus); no press funding announcement located; hiring flag = False (company_data); Arden not specifically named in TechCrunch W26 demo-day roundup snippet returned (TechCrunch, Mar 2026 via search snippet) |
| Emails | founders@ardentech.ai (ardentech.ai) |

Sources:
- [Arden | SOX Testing, Fully Automated](https://ardentech.ai/)
- [Arden — Y Combinator](https://www.ycombinator.com/companies/arden)
- [Aryaman Khanna LinkedIn](https://www.linkedin.com/in/aryaman-khanna-210a9121b/)
- [David Lomelin LinkedIn](https://www.linkedin.com/in/david-lom/)
- [David Lomelin GitHub](https://github.com/jdl20515)
- [David Lomelin X](https://x.com/david_loom)
- [Arden LinkedIn company page](https://www.linkedin.com/company/ardeninc)
- [Midship Raises $4.15M to Automate SOX Testing with Agentic AI (PRNewswire)](https://www.prnewswire.com/news-releases/midship-raises-4-15m-to-automate-sox-testing-with-agentic-ai-302670608.html)
- [Midship Raises $4.15M Seed (CPA Practice Advisor)](https://www.cpapracticeadvisor.com/2026/01/27/midship-raises-4-15m-to-automate-sox-testing-with-agentic-ai/176932/)
- [Launch YC: Oxus — AI-native automation for SOX audits](https://www.ycombinator.com/launches/P5u-oxus-ai-native-automation-for-sox-audits)
- [Scytale vs Optro (AuditBoard) vs Workiva](https://scytale.ai/resources/scytale-vs-optro-vs-workiva/)
- [Workiva vs AuditBoard](https://www.workiva.com/compare/workiva-vs-auditboard)
- [Internal Audit Services Market — Research and Markets](https://www.researchandmarkets.com/report/internal-audit)
- [SOX Compliance for Financial Institutions Market — Growth Market Reports](https://growthmarketreports.com/report/sox-compliance-for-financial-institutions-market)
- [Auditing Services Market — Research and Markets](https://www.researchandmarkets.com/report/auditing)
- [2025 KPMG SOX Survey](https://kpmg.com/us/en/articles/2025/2025-kpmg-sox-survey.html)
- [16 of the most interesting startups from YC W26 Demo Day — TechCrunch](https://techcrunch.com/2026/03/26/16-of-the-most-interesting-startups-from-yc-w26-demo-day/)
