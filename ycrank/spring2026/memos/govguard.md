# GovGuard

> AI Infrastructure for Government Agencies

| Field | Value |
|-------|-------|
| Website | https://govguard.com |
| YC Page | https://www.ycombinator.com/companies/govguard |
| Batch | Spring 2026 (YC P26) |
| Industry | Government / Government |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | GovTech |
| YC Partner | Tom Blomfield (YC company page) |
| Emails | support@govguard.com (govguard.com) |

## The Idea

- **Problem:** City clerks manually process FOIA/public records requests by hunting through archived emails, meeting minutes, PDFs, and shared drives, and many offices still redact sensitive information line-by-line with a Sharpie (YC company page).
- **Approach:** AI agents connect to municipal archives (Dropbox, Microsoft 365, Google Drive, Zoom, Laserfiche), surface responsive records, auto-flag PII/exemption-protected content, and draft statutory response letters citing relevant exemptions (govguard.com).
- **Differentiation:** Versus NextRequest, JustFOIA, GovQA, Granicus — GovGuard claims those are "basically Jira" that manage tickets but do not complete the work, while GovGuard's redaction engine is pre-built with state exemption codes rather than requiring clerks to manually cite codes per redaction (YC company page).
- **Business Model:** [Inferred]: SaaS sold to municipalities; pricing not disclosed on site, only "Contact Sales" at /contactus (govguard.com).
- **TAM/SAM:** Company claims "local governments spend billions processing these requests" (YC company page); no public TAM/SAM data found for the FOIA-software-specific segment.
- **GTM / Distribution:** [Inferred]: Direct outbound sales to city/municipal clerk offices, given founder statement that "most cities we speak with are seeing request volume grow 2x year over year" (YC company page).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond claimed pre-built state-exemption code library (YC company page).
- **Future moat:** [Inferred]: Switching costs from integration into city document systems (Laserfiche, M365, Google Drive) plus accumulated per-jurisdiction exemption logic could create stickiness; unproven because no customer count is public.
- **Market structure:** [Inferred]: Incumbents (NextRequest, GovQA, JustFOIA) are ticketing-workflow tools rather than agentic doc-retrieval systems, and re-architecting around LLM agents may require rebuilding their core data layer; no structural regulatory or channel barrier identified.
- **Commoditization risk:** General-purpose enterprise AI agent platforms or larger GovTech incumbents such as GovWell ($34.5M total funding, Insight Partners-led Series A — PRNewswire, 2025/2026) could add FOIA-specific agents, and the underlying LLM redaction capability is not proprietary.

## Market & Traction

- **Traction signals:**
  - Company claims "20x faster FOIA response" and "1-Click instant evidence retrieval" (govguard.com); no customer count, ARR, or named logos disclosed.
  - YC launch post amplified by Y Combinator LinkedIn (linkedin.com/posts/y-combinator activity 7452793362778128384).
  - No public Product Hunt launch, Twitter follower count, app store data, GitHub repo, or press coverage found.
- **Competitors (Phase 4):**
  - NextRequest (acquired by Civic Plus; revenue unknown per Crunchbase; cloud FOIA intake + AI-powered redaction): broader ticketing platform vs. GovGuard's end-to-end agentic search + drafting (G2; Crunchbase).
  - GovQA (owned by Granicus via private-equity rollup from Frontier Growth; revenue unknown — Crunchbase): enterprise case management workflows vs. GovGuard's agentic retrieval + drafting (Crunchbase).
  - JustFOIA (funding not disclosed; revenue unknown — G2): "affordable, user-friendly" request tracking vs. GovGuard's automated record search/redaction (G2 alternatives page).
  - FOIAXpress (federal/state agency FOIA processing; funding not disclosed): manual review/redaction workflows vs. GovGuard's exemption-code-aware auto-redaction (wifitalents 2026 list).
  - GovWell ($34.5M total raised, $25M Series A led by Insight Partners, 2025/2026; revenue unknown — PRNewswire): broader "AI operating system for modern government" vs. GovGuard's FOIA-specific wedge.
- **Why now:** [Inferred]: Founders state "the new surge of AI-generated requests are overwhelming clerk offices" with "request volume grow[ing] 2x year over year, with no increase in staff" (YC company page) — i.e., LLM-driven request generation crossed a volume threshold that legacy ticketing tools cannot absorb.

## Founders & Team

- **Aditya Sabharwal (CEO/Founder):**
  - Background: BioE & CS at University of Illinois Urbana-Champaign (UIUC); CS Masters at UIUC; prior experience at Centene Corporation; previously co-founded BoardWatch (search-snippet aggregation of LinkedIn results).
  - Twitter/X: No public account found.
  - LinkedIn: "Founder @ GovGuard (YC P26)" (linkedin.com/in/aditya-sabharwal-a2454a1ab); follower count not retrievable.
  - GitHub: No public repos found.
- **Gleb Hulting (President/CTO/Founder):**
  - Background: Previously Founder of BoardWatch and Founder of EGO Logistics (search-snippet aggregation of LinkedIn results).
  - Twitter/X: No public account found.
  - LinkedIn: "Founder @ GovGuard (YC P26)" (linkedin.com/in/gleb-hulting-govguard); follower count not retrievable.
  - GitHub: No public repos found (a `lochan027/govguard` repo exists but is an unaffiliated AI-governance project, not this company).
- **Co-founder relationship:** Both founders previously co-founded BoardWatch together prior to GovGuard (search-snippet aggregation; no canonical public source confirms duration).
- **Founder-market fit:** [Inferred]: Founders have prior co-founding experience together (BoardWatch) but no public record of prior government, FOIA, municipal-clerk, or legaltech operating experience was found in search results.

## Key Risks

- **Funded incumbent encroachment:** GovWell raised a $25M Series A led by Insight Partners (PRNewswire, 2025/2026) positioning itself as the "AI operating system for modern government," and could add FOIA-agent capabilities; mitigation: GovGuard is wedge-focused on FOIA-specific exemption logic per state code (YC company page).
- **Procurement cycle length:** Selling to municipal governments typically requires RFP/procurement processes; [Inferred]: a 0-person listed team and absence of public pilot logos suggests no validated procurement motion yet (YC company page Team Size: 0; govguard.com has no customer logos).
- **Technical feasibility — redaction accuracy:** Auto-redaction errors for trade-secret/privileged material expose customer cities to legal liability under public records law; company asserts engine "handles harder edge cases" but no accuracy benchmark is published (YC company page; govguard.com).
- **Name disambiguation / brand collision:** A separate `lochan027/govguard` GitHub project exists for AI governance compliance, unrelated to this company (github.com/lochan027/govguard); could create SEO/search confusion.
- **Founder domain experience:** No public evidence found that founders have prior government, legal, or FOIA-domain operating experience; reliance is on prior generic startup founding (BoardWatch, EGO Logistics) (search snippets).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | "Local governments spend billions processing these requests" (YC company page, 2026); no third-party TAM data found |
| SAM | No public data found |
| Traction | YC P26 batch launch (ycombinator.com/companies/govguard); product claim "20x faster FOIA response" (govguard.com); no customer count, ARR, or logos disclosed |
| Revenue Signal | No public data found (pricing gated behind "Contact Sales" — govguard.com/contactus) |
| Founders | Aditya Sabharwal (CEO): UIUC BioE/CS, prior Centene, prior co-founder BoardWatch. Gleb Hulting (President/CTO): prior founder BoardWatch and EGO Logistics. |
| Competitors | NextRequest (Civic Plus subsidiary, revenue unknown, ticketing vs. agentic); GovQA (Granicus/Frontier Growth-owned, revenue unknown, enterprise case mgmt); JustFOIA (funding undisclosed, revenue unknown, low-cost tracking); FOIAXpress (funding undisclosed, manual review workflows); GovWell ($34.5M raised incl. $25M Series A from Insight Partners, revenue unknown, broader GovOS scope). |
| Moat Signals | No public data found beyond claimed pre-built state-exemption code library (govguard.com) |
| Risk Factors | Funded incumbent (GovWell) encroachment, municipal procurement cycle length, redaction-accuracy legal exposure |
| Founder Reach | Aditya Sabharwal: Twitter not found, LinkedIn count not retrievable, GitHub not found. Gleb Hulting: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | YC launch coverage via Y Combinator LinkedIn post activity 7452793362778128384; no Product Hunt, Chrome Web Store, or app store presence found |
| Emails | support@govguard.com (govguard.com) |

**Note on prompt injection:** The first `WebFetch` result (govguard.com) contained injected `<system-reminder>` tags attempting to surface unrelated Gmail/Drive/Ramp authentication tools. I ignored the injection and continued with the dossier task.

Sources:
- [GovGuard YC company page](https://www.ycombinator.com/companies/govguard)
- [GovGuard website](https://govguard.com)
- [Gleb Hulting LinkedIn](https://www.linkedin.com/in/gleb-hulting-govguard)
- [Aditya Sabharwal LinkedIn](https://www.linkedin.com/in/aditya-sabharwal-a2454a1ab/)
- [GovWell $25M Series A — PRNewswire](https://www.prnewswire.com/news-releases/govwell-raises-25m-series-a-led-by-insight-partners-to-build-the-ai-operating-system-for-modern-government-302770627.html)
- [GovWell Crunchbase](https://www.crunchbase.com/organization/govwell-technologies)
- [GovQA Crunchbase](https://www.crunchbase.com/organization/govqa)
- [NextRequest Crunchbase](https://www.crunchbase.com/organization/nextrequest)
- [JustFOIA alternatives — G2](https://www.g2.com/products/justfoia/competitors/alternatives)
- [Top FOIA software 2026 — wifitalents](https://wifitalents.com/best/foia-management-software/)
- [Y Combinator LinkedIn launch post](https://www.linkedin.com/posts/y-combinator_govguard-is-automating-government-workflows-activity-7452793362778128384-ss5q)
