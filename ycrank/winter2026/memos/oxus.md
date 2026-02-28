# Oxus

> AI-powered automation for internal audit workflows

| Field | Value |
|-------|-------|
| Website | https://oxus-ai.com/ |
| YC Page | https://www.ycombinator.com/companies/oxus |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Workflow Automation, Compliance |

## The Idea

**Problem:** Internal audit teams at pre-IPO and public companies spend significant time on manual scoping, documentation, control testing, and evidence review for SOX (Sarbanes-Oxley) compliance. Common pain points include high outsourcing costs when teams are understaffed, inconsistent documentation quality across auditors, time-intensive searches through PDFs and policy documents, and low-value busywork that diverts focus from risk assessment and judgment (oxus-ai.com). Today, these teams rely on a combination of spreadsheets, legacy GRC platforms (AuditBoard, Workiva), and external audit firms.

**Approach:** Oxus is an AI-native platform that automates four core internal audit workflows: (1) control testing and workpaper generation, (2) walkthrough flowchart and narrative generation from documentation, (3) SOX scoping and risk assessment, and (4) document intelligence with AI-powered search, analysis, and annotation (oxus-ai.com). The platform produces evidence-grounded outputs tied to specific source documents, maintains an auditor-in-the-loop review process, and generates consistent, standardized formats. Deployment options include Oxus-hosted or customer-hosted, with customer data never reused or retained for model training (oxus-ai.com).

**Differentiation:** Oxus targets in-house internal audit teams at pre-IPO and public companies, whereas Fieldguide (the most directly comparable AI-native competitor) primarily serves external CPA and advisory firms. Legacy platforms like AuditBoard and Workiva provide workflow management and reporting but were not built as AI-native tools for automating the production of audit deliverables. Denki (YC-backed) positions itself as a "full-stack AI audit firm" performing audit work as a service with "99% software, 1% services" (YC company page), taking a services-replacement approach rather than Oxus's tool-for-teams model.

**Business Model:** No pricing page is publicly visible (oxus-ai.com, accessed Feb 2026). [Inferred]: Most likely monetization path is SaaS subscription pricing, potentially seat-based or per-engagement, given the B2B enterprise audience and the auditor-in-the-loop model.

**TAM/SAM:** The internal audit management software market was valued at USD 3.2 billion in 2026, projected to reach USD 6.5 billion by 2033 at 10.5% CAGR (OpenPR via search snippet). A separate estimate from Verified Market Research values the internal audit management software market at USD 1.2 billion in 2024, projected to reach USD 1.9 billion by 2032 at 7.5% CAGR (Verified Market Research via search snippet). The broader audit software market was valued at USD 77.92 billion in 2024 (GMInsights via search snippet). For SAM, no specific estimate was found for AI-powered SOX internal audit automation specifically.

**GTM / Distribution:** The YC Launch page states Oxus is "currently onboarding early customers" and seeks connections with "Chief Audit Executives, CFOs, heads of internal audit/SOX/internal controls, and internal auditors at pre-IPO and public companies" (YC Launch page). [Inferred]: Most likely distribution path is founder-led direct sales to heads of internal audit at mid-market pre-IPO and recently public companies, leveraging YC network for initial introductions.

## Defensibility

**Data advantages:** Oxus's auditor-in-the-loop model could accumulate proprietary data on audit workflows, control testing patterns, and company-specific documentation structures over time. This data could improve AI model performance for returning customers. However, no evidence of a current data moat exists at this stage.

**Switching costs:** Once audit teams integrate Oxus into their workflows and build institutional knowledge within the platform (scoping templates, control documentation, flowcharts), switching costs increase. Audit teams operate on annual cycles, meaning that mid-cycle switching is impractical.

**Technical complexity:** The product requires domain-specific AI that understands SOX audit methodology, accounting controls, and compliance documentation standards. Building accurate, evidence-grounded outputs in this domain requires specialized prompt engineering, document parsing, and audit-knowledge representation.

No defensibility signals found in public sources beyond the above structural characteristics. [Inferred]: A potential moat could develop via accumulation of proprietary audit workflow data and customer-specific institutional knowledge, but is unproven at this stage.

**Market structure:** AuditBoard (acquired by Hg for $3B+, May 2024; AuditBoard blog) and Workiva ($739M revenue in 2024; Workiva investor relations) are the dominant incumbents. Both are workflow management and reporting platforms that were built before the current generation of LLMs. Rebuilding these platforms as AI-native would require cannibalizing their existing product lines and retraining their sales and customer success organizations around a fundamentally different value proposition (automated outputs vs. workflow tracking). Workiva, as a public company, faces additional pressure to maintain existing revenue streams. [Inferred]: This creates a window for a new entrant, though incumbents are actively adding AI features to their existing platforms.

**Commoditization risk:** The core technology (LLM-based document analysis and generation) is accessible to any team with AI engineering capability. Fieldguide ($125M raised, $700M valuation; Fortune, Feb 2026) is already building AI-native audit tools, though focused on external advisory firms. Denki (YC-backed) targets a similar use case. General-purpose AI tools (e.g., ChatGPT, Copilot) could also be adapted by audit teams for ad-hoc automation, though without the domain-specific workflow integration.

## Market & Traction

**Traction signals:**
- YC Launch page: 2,262 upvotes (YC Launches page)
- Status: "Onboarding early customers" (YC Launch page)
- Twitter/X: @AiOxus (handle confirmed; follower count not retrievable due to JavaScript rendering)
- LinkedIn: linkedin.com/company/oxus-ai-inc (follower count not retrievable)
- No Product Hunt launch found
- No public revenue, user count, or customer names disclosed
- No app store listings, Chrome extensions, or open-source repositories found for the YC W26 Oxus
- No Discord or Slack community found

**Competitive landscape:**

1. **AuditBoard** — Acquired by Hg for $3B+ (May 2024; AuditBoard blog). Crossed $200M ARR in late 2023 (SiliconANGLE, May 2024 via search snippet). Serves 2,000+ enterprises including ~50% of the Fortune 500. Cloud-based platform for internal audit, SOX, and risk management. Differentiation vs. Oxus: comprehensive GRC suite with established enterprise relationships, but pre-AI-era architecture focused on workflow management rather than AI-generated audit deliverables.

2. **Fieldguide** — $125M total raised including $75M Series C led by Goldman Sachs (Fortune, Feb 2026). ~$700M valuation. Used by half of the Top 100 US accounting firms including Baker Tilly, BDO, KPMG, and Grant Thornton. Revenue not publicly disclosed. Differentiation vs. Oxus: targets external CPA/advisory firms rather than in-house internal audit teams; broader audit and advisory scope beyond SOX.

3. **Drata** — $328M raised, $2B valuation (Drata press release, Dec 2022). ~$100M ARR (Drata blog, FY25). 7,500+ customers. Differentiation vs. Oxus: focuses on compliance automation for SOC 2, ISO 27001, HIPAA, and similar frameworks rather than SOX internal audit; primarily serves tech companies seeking compliance certifications rather than public company internal audit departments.

4. **Workiva** — Public company (NYSE: WK). $739M revenue in 2024, up 17% YoY (Workiva investor relations, Q4 2024). 6,500+ organizations, 85%+ of Fortune 1,000. Differentiation vs. Oxus: integrated financial reporting, sustainability, and GRC platform; significantly broader scope but not AI-native for audit automation specifically.

5. **Denki** — YC-backed (batch not confirmed from search results). No public funding data found. Positions as a "full-stack AI financial audit firm" performing audit work with "99% software and 1% services" (YC company page). Differentiation vs. Oxus: services-replacement model (Denki performs the audit) vs. Oxus's tool-for-teams model (Oxus augments in-house auditors).

**Why now:** [Inferred]: Two catalysts have converged: (1) LLM capabilities reached a threshold in 2023-2024 sufficient for reliable document analysis, evidence extraction, and structured output generation at the quality level required for audit deliverables; and (2) a CPA talent shortage — 75% of CPAs are projected to retire in the next decade (Denki YC launch page via search snippet) — is increasing the cost and difficulty of staffing internal audit functions, pushing teams to seek automation solutions. The regulatory burden has not decreased (SOX compliance remains mandatory for public companies), while the supply of qualified auditors is contracting.

## Founders & Team

**Janet Liu** — Co-founder & CEO
- MIT B.S. in Computer Science, Economics, Data Science, and Finance (LinkedIn)
- Previous: Summer 2024 Operations Intern, CBDC Research at Federal Reserve Bank of Boston (LinkedIn); investment strategy at D.E. Shaw (YC page)
- Co-President of MIT Women Business Leaders; VP Finance of MIT StartLabs (Datanyze via search snippet)
- Twitter/X: No confirmed public account found for this individual
- LinkedIn: linkedin.com/in/janet-liu-4856b91b4/
- GitHub: No public repos found

**Melinda Liu** — Co-founder & COO
- MIT B.S. in Computer Science, Economics, Data Science, and Finance (LinkedIn)
- Previous: Finance role at JPMorgan; built AI products in fintech (YC page, LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/melinda-314-liu/
- GitHub: No public repos found

**Christine Watts** — Co-founder & CTO
- MIT B.S. in Artificial Intelligence (LinkedIn via search snippet)
- Previous: ML systems engineering at startups; consulting at BCG and NERA (YC page)
- Reported to have gotten into Y Combinator as a 19-year-old solo founder, described as the first from Tajikistan (LinkedIn via search snippet); it is unclear whether this refers to a prior venture or the current Oxus application, given that Oxus has three co-founders
- LinkedIn: linkedin.com/in/christinewatts2018/
- Twitter/X: No public account found
- GitHub: No public repos found

**Co-founder relationship:** All three founders hold MIT degrees in overlapping fields (Computer Science, Economics, Data Science, Finance, and AI), indicating they were contemporaries at MIT. Janet Liu and Melinda Liu share a surname, but no public information confirms a familial relationship. The shared MIT affiliation is the clearest documented co-founder connection.

**Founder-market fit:** Janet Liu's Federal Reserve CBDC research and D.E. Shaw investment strategy experience provide exposure to financial regulation and institutional finance. Melinda Liu's JPMorgan background and fintech AI product experience connect domain finance knowledge with AI product development. Christine Watts's ML systems engineering and BCG/NERA consulting background combines technical AI capability with advisory and consulting experience relevant to audit clients. Collectively, the team spans financial regulation, institutional finance, AI/ML engineering, and management consulting — all relevant to building AI tools for internal audit teams.

## Key Risks

**Well-funded AI-native competitor overlap:** Fieldguide ($125M raised, ~$700M valuation; Fortune, Feb 2026) is building AI-native audit automation and has relationships with major accounting firms. While Fieldguide currently focuses on external advisory firms rather than in-house audit teams, expanding into the internal audit market would be a natural adjacency. Fieldguide's capital advantage and existing customer base create a competitive threat if they move into Oxus's target segment.

**Incumbent AI feature additions:** AuditBoard (2,000+ enterprise customers, $3B+ acquisition) and Workiva (6,500+ customers, $739M revenue) have established relationships with exactly the buyer personas Oxus targets. Both companies are actively integrating AI capabilities into their existing platforms. If incumbent AI features prove "good enough" for audit teams, Oxus would need to demonstrate substantially superior output quality to justify a separate tool purchase and workflow change.

**Enterprise sales cycle and trust barriers:** SOX compliance is high-stakes — errors can result in material weakness findings and regulatory consequences. Audit teams and their management may be reluctant to adopt AI-generated outputs from an early-stage company without extensive validation. [Inferred]: This likely necessitates lengthy pilot periods and risk-averse procurement processes, which could slow early revenue growth.

**Brand disambiguation:** An older, now-defunct company called Oxus.AI (Lithuanian speech analytics startup, founded 2020, became Leya AI in June 2023; Crunchbase) shares a similar name. The GitHub organization "oxus-ai" belongs to this older entity. Additionally, "Oxus" is the name of several unrelated organizations in Central Asia (Oxus Tajikistan, OXUS Afghanistan on LinkedIn). This could create confusion in search results, investor due diligence, and customer discovery.

**Narrow initial TAM segment:** Oxus's current positioning targets SOX compliance at pre-IPO and public companies. The number of US public companies subject to SOX is approximately 4,000-5,000. The internal audit buyer within each company is a single department. [Inferred]: This creates a relatively narrow initial addressable segment, requiring either high contract values or expansion into adjacent audit types (operational audits, IT audits, financial audits beyond SOX) to scale.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.2B internal audit management software market in 2026, projected $6.5B by 2033 at 10.5% CAGR (OpenPR via search snippet); alternate estimate $1.2B in 2024 projected $1.9B by 2032 at 7.5% CAGR (Verified Market Research via search snippet) |
| SAM | No public data found for AI-powered SOX internal audit automation specifically |
| Traction | 2,262 upvotes on YC Launch page; "onboarding early customers" (YC Launch page) |
| Revenue Signal | No public data found |
| Founders | Janet Liu (CEO): MIT CS/Econ/Data Science/Finance, ex-Federal Reserve, ex-D.E. Shaw. Melinda Liu (COO): MIT CS/Econ/Data Science/Finance, ex-JPMorgan, fintech AI. Christine Watts (CTO): MIT AI, ex-BCG/NERA, ML systems engineering. |
| Competitors | AuditBoard ($3B+ acquisition by Hg, $200M+ ARR, broad GRC suite vs. AI-native audit outputs); Fieldguide ($125M raised, ~$700M valuation, revenue unknown, CPA/advisory firm focus vs. in-house audit teams); Drata ($328M raised, ~$100M ARR, compliance certification focus vs. SOX internal audit); Workiva (public, $739M revenue, financial reporting platform vs. AI-native audit automation); Denki (YC-backed, funding unknown, revenue unknown, audit-as-a-service vs. tool-for-teams) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded AI-native competitor (Fieldguide) in adjacent segment, incumbent AI feature additions (AuditBoard/Workiva), enterprise trust barriers for AI in high-stakes compliance |
| Founder Reach | Janet Liu: Twitter not found, LinkedIn linkedin.com/in/janet-liu-4856b91b4/. Melinda Liu: Twitter not found, LinkedIn linkedin.com/in/melinda-314-liu/. Christine Watts: Twitter not found, LinkedIn linkedin.com/in/christinewatts2018/. Company: Twitter @AiOxus (count not retrievable), LinkedIn linkedin.com/company/oxus-ai-inc (count not retrievable) |
| Distribution Signals | YC Launch page with 2,262 upvotes; no Product Hunt launch found; no app store or Chrome Web Store presence found |
