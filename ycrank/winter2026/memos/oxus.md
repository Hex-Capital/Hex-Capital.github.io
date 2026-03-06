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
| YC Partner | Diana Hu |
| Emails | founders@oxus-ai.com (YC Launch page) |

## The Idea

**Problem:** Internal audit teams at pre-IPO and public companies face costly, labor-intensive SOX (Sarbanes-Oxley) compliance processes. Scoping, documentation, flowcharting, and control testing are largely manual, producing inconsistent results across team members and consuming weeks of effort. Companies currently outsource significant portions of this work at rates of $200–$800/hour, resulting in annual spend of $300K–$1M+ per company (YC Launch page). Existing tools like AuditBoard, Workiva, and TeamMate+ provide workflow management but do not automate the substantive audit work itself (analysis, evidence review, workpaper drafting).

**Approach:** Oxus uses AI to automate the core tasks of internal auditing: (1) audit scoping using financial metrics and qualitative risk analysis, (2) process documentation and flowchart generation from walkthrough meetings, (3) evidence review across disparate files and systems using document intelligence, and (4) automated control testing with workpaper generation (oxus-ai.com). The workflow follows an upload-analyze-generate-review pipeline, producing "review-ready" outputs that auditors verify rather than create from scratch. The platform enforces an auditor-in-the-loop review process with evidence-grounded outputs tied to specific source documents (oxus-ai.com).

**Differentiation:** Incumbent platforms (AuditBoard, Workiva, TeamMate+) focus on audit management—scheduling, workflow tracking, collaboration, and reporting. Oxus targets the substantive audit work itself—scoping decisions, narrative generation, evidence interpretation, and control testing. MindBridge AI focuses on anomaly detection and fraud risk scoring in financial data, which is complementary but different from Oxus's SOX compliance automation. Oxus also offers flexible deployment (Oxus-hosted or customer-hosted), addressing data sensitivity concerns common among audit teams (oxus-ai.com).

**Business Model:** No pricing page is publicly available (oxus-ai.com). [Inferred]: Most likely monetization path is enterprise SaaS with annual contracts, potentially priced per module or per-seat given the target customer segment (mid-to-large enterprises with internal audit teams). The outsourcing cost benchmark of $300K–$1M+/year provides significant pricing headroom.

**TAM/SAM:** The global audit management software market was valued at approximately $2.2B in 2026, projected to reach $6.0B by 2033 at a CAGR of 15.4% (Persistence Market Research, 2026 via search snippet). The broader internal audit software market was estimated at $4.5B in 2024, projected to reach $10.4B by 2033 at a CAGR of 9.8% (Verified Market Research, 2024 via search snippet). The audit software market was estimated at $3.37B in 2024, projected to reach $6.80B by 2030 at a CAGR of 12.37% (360iResearch, 2024 via search snippet). [Inferred]: Oxus's SAM is the subset of this market comprising SOX compliance automation for public and pre-IPO US companies, which would be a fraction of the overall audit software TAM.

**GTM / Distribution:** The YC Launch page indicates the team is actively onboarding early customers and seeking introductions to Chief Audit Executives, CFOs, internal audit leadership, and controllers at mid-to-large enterprises (YC Launch page). [Inferred]: Most likely distribution path is top-down enterprise sales via direct outreach and referral networks, leveraging YC's enterprise network and the founders' finance-industry connections.

## Defensibility

Oxus's primary defensibility signal is domain-specific AI fine-tuned for internal audit workflows—a narrow and complex domain where generic AI tools would require significant adaptation. The auditor-in-the-loop design with evidence-grounded outputs suggests a trust-building mechanism that, over time, could create switching costs as teams build processes around the platform. Customer audit data and templates accumulated on the platform could create a data advantage specific to each client's control environment.

**Market structure:** AuditBoard ($3B+ acquisition by Hg, $200M+ ARR) and Workiva (public company) serve thousands of enterprise customers but position as audit management platforms—workflow, collaboration, and reporting layers. Building AI-native substantive audit automation would require these incumbents to either develop or acquire deep NLP/AI capabilities specifically trained on audit evidence, which represents a different technical skillset from their existing platform engineering. Additionally, an AI tool that automates audit work could cannibalize the outsourcing revenue streams of consulting firms (Big Four, regional firms) that currently perform this work. [Inferred]: This creates a structural misalignment where the largest sales channel for audit software (Big Four partnerships) may resist a product that displaces their own billings.

**Commoditization risk:** Large language model capabilities are commoditizing rapidly. Any AI-focused startup or incumbent could theoretically build similar document analysis and workpaper generation. The barrier is domain expertise in SOX compliance standards, control testing methodologies, and auditor workflows—this requires both technical and audit expertise to encode correctly. Horizontal AI document analysis tools (e.g., from large cloud providers) could also move into this space.

## Market & Traction

**Traction signals:**
- YC Launch page upvotes: 2,290 (YC Launch page, ~January 2026)
- LinkedIn company page: https://www.linkedin.com/company/oxus-ai-inc (LinkedIn via search snippet)
- Twitter/X: @AiOxus (follower count not retrievable due to JavaScript rendering)
- No Product Hunt launch found
- No public revenue, user count, or customer data found
- No Discord or Slack community found
- No app store or Chrome extension presence found
- The company is not currently hiring (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Oxus |
|-----------|---------|-------------|---------------------------|
| AuditBoard | $501M raised; acquired by Hg for $3B+ (May 2024) (SiliconANGLE, May 2024 via search snippet) | $200M+ ARR (2024) (AuditBoard blog via search snippet) | Full GRC platform with audit management, risk, and compliance modules; serves 2,000+ enterprises including ~50% of Fortune 500. Focuses on workflow management rather than AI-driven substantive audit automation. |
| MindBridge AI | ~$140M total; $95M Series B (Sept 2025) (SalesTools via search snippet) | ~$24.5M (2025) (GetLatka via search snippet) | AI-powered anomaly detection and fraud risk scoring across 100% of financial transactions. Focuses on risk discovery rather than SOX compliance workflow automation. |
| Workiva | Public company (NYSE: WK) | Pricing starts at $30K/year (SmartSuite, 2026 via search snippet) | Cloud-based connected reporting and compliance platform; strength in financial reporting, ESG disclosures, and SEC filings. Uses "Workiva AI" for task automation but is a broad platform, not SOX-audit-specific. |
| Drata | $328M raised; $2B valuation (Dec 2022) (PRNewswire via search snippet) | ~$100M (2025) (GetLatka via search snippet) | AI-native compliance automation focused on SOC 2, ISO 27001, and 23 frameworks; more oriented toward security compliance than internal audit/SOX. Adjacent market. |
| TeamMate+ (Wolters Kluwer) | Subsidiary of Wolters Kluwer (public company) | Revenue unknown | Established audit management software with planning, scheduling, risk assessment, and reporting. Traditional tool without AI-native capabilities. |

**Why now:** [Inferred]: The emergence of large language models capable of document understanding, summarization, and structured output generation (2023–2025) crossed a capability threshold that makes automated evidence review and workpaper generation technically feasible for the first time. Prior audit automation tools could manage workflows but could not interpret unstructured audit evidence (PDFs, policies, financial documents) or generate narrative outputs. Simultaneously, SOX compliance requirements continue to expand, and the accounting talent shortage has increased outsourcing costs, creating cost pressure that makes AI automation more attractive.

## Founders & Team

**Janet Liu** — Co-founder & CEO
- B.S. Computer Science, Economics, Data Science and Finance, MIT (YC page)
- Previously: Summer 2024 Operations Intern, CBDC Research at Federal Reserve Bank of Boston (LinkedIn via search snippet); investment strategy at D.E. Shaw (YC page via search snippet)
- Co-founded J&M Sunrizon Economics nonprofit with sister Melinda; co-authored children's economics books published by Scholastic including "What Banks Do with Money" and "Making and Saving Money" (Points of Light; Amazon; Barnes & Noble via search snippets)
- Participated in MIT $100K Entrepreneurship Competition; recognized by MIT Female Founders Pitch Competition (LinkedIn post by Sebastian Barriga)
- Twitter/X: No public account confirmed for the Oxus co-founder (a different Janet Liu uses @janetlauyeung)
- LinkedIn: https://www.linkedin.com/in/janet-liu-4856b91b4/
- GitHub: No public repos found

**Melinda Liu** — Co-founder & COO
- B.S. Computer Science, Economics, Data Science and Finance, MIT (YC page)
- Previously: Built AI products for fintech; finance at JPMorgan (YC page via search snippet)
- Co-founded J&M Sunrizon Economics nonprofit with sister Janet; co-authored children's economics books (Points of Light via search snippet)
- Participated in MIT $100K Entrepreneurship Competition (LinkedIn post by Sebastian Barriga)
- Twitter/X: No public account found
- LinkedIn: https://www.linkedin.com/in/melinda-314-liu/ (also https://www.linkedin.com/in/melinda-liu-4a87a3198/)
- GitHub: No public repos found

**Christine Watts** — Co-founder & CTO
- B.S. Artificial Intelligence, MIT (YC page via search snippet)
- Previously: Built ML systems for early- and growth-stage startups; consulting at BCG and NERA Economic Consulting (YC page via search snippet)
- Twitter/X: No public account found
- LinkedIn: https://www.linkedin.com/in/christinewatts2018/ — San Francisco Bay Area, 500+ connections
- GitHub: No public repos found

**Co-founder relationship:** Janet Liu and Melinda Liu are sisters (Points of Light article) who both attended Palm Harbor University High School in Florida before MIT (Sun Coast News via search snippet). They co-founded J&M Sunrizon Economics together and co-authored multiple books. All three co-founders attended MIT, which is the likely connection point for Christine Watts joining the team.

**Founder-market fit:** The team combines finance domain expertise (Federal Reserve CBDC research, D.E. Shaw, JPMorgan) with AI/ML engineering capability (MIT AI degree, BCG consulting, ML systems at startups). Janet and Melinda's background in financial services and economics gives them direct exposure to the audit and compliance pain points their product addresses. Christine's ML engineering experience at startups and consulting background at BCG provides both technical depth and enterprise go-to-market familiarity. The team's publishing track record (Scholastic books) demonstrates an ability to distill complex financial topics—a relevant skill for generating clear audit documentation.

## Key Risks

**Brand disambiguation:** Multiple entities operate under the "Oxus" name, including Oxus.AI (Lithuanian speech analytics company at oxus.ai, which rebranded to Leya AI in 2023), OXUS Technologies, Oxus Capital Group, and the Oxus Society. The company's domain is oxus-ai.com (hyphenated), while a different company holds oxus.ai. This creates potential confusion in search results, social media, and customer discovery.

**Incumbent platform expansion:** AuditBoard ($200M+ ARR, acquired for $3B+) and Workiva (public company) are actively integrating AI features into their platforms. AuditBoard already uses "AI-driven insights" and Workiva has launched "Workiva AI" (search results via SmartSuite, 2026). If these incumbents develop comparable substantive audit automation, they could bundle it into existing enterprise contracts at low marginal cost, making standalone competition difficult.

**Regulatory and liability complexity:** AI-generated audit workpapers carry professional liability implications. Auditors and audit committees may resist AI-generated outputs for SOX compliance due to personal liability exposure (Section 302/906 certifications). Adoption may be constrained by regulatory guidance from the PCAOB or SEC on acceptable use of AI in audit processes, which has not yet been fully articulated.

**Sales cycle length:** Enterprise sales to Chief Audit Executives and CFOs at public companies typically involve extended procurement cycles, security reviews, and pilot periods. A 3-person team may face bandwidth constraints managing concurrent enterprise sales processes alongside product development.

**Channel conflict with outsourcing firms:** The Big Four and regional audit firms that currently provide outsourced internal audit services represent both potential channel partners and competitors. These firms have established relationships with the target customer base and could develop competing AI tools internally or resist recommending a product that displaces their own revenue.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global audit management software: $2.2B (2026), projected $6.0B by 2033, CAGR 15.4% (Persistence Market Research via search snippet). Internal audit software: $4.5B (2024), projected $10.4B by 2033, CAGR 9.8% (Verified Market Research via search snippet). |
| SAM | No public data found for SOX-specific audit automation segment. |
| Traction | 2,290 upvotes on YC Launch page (~Jan 2026). No public user count, revenue, or customer data found. |
| Revenue Signal | No public data found. No pricing page available. |
| Founders | Janet Liu (CEO): MIT CS/Econ, Federal Reserve CBDC research, D.E. Shaw. Melinda Liu (COO): MIT CS/Econ, JPMorgan, fintech AI products. Christine Watts (CTO): MIT AI, BCG, NERA, ML systems at startups. |
| Competitors | AuditBoard ($501M raised, $200M+ ARR, GRC platform). MindBridge AI (~$140M raised, ~$24.5M revenue, anomaly detection). Workiva (public, connected reporting). Drata ($328M raised, ~$100M revenue, security compliance). TeamMate+ (Wolters Kluwer subsidiary, audit management). |
| Moat Signals | Domain-specific AI for SOX audit workflows; auditor-in-the-loop design; flexible deployment (customer-hosted option). No patents or open-source repos found. |
| Risk Factors | Brand disambiguation with other "Oxus" entities, incumbent AI feature expansion (AuditBoard/Workiva), regulatory/liability uncertainty for AI in audit |
| Founder Reach | Janet Liu: LinkedIn (profile found), Twitter not confirmed, GitHub not found. Melinda Liu: LinkedIn (profile found), Twitter not found, GitHub not found. Christine Watts: LinkedIn 500+ connections, Twitter not found, GitHub not found. |
| Distribution Signals | YC Launch page (2,290 upvotes). No Product Hunt, app store, or Chrome extension presence found. |
| Emails | founders@oxus-ai.com (YC Launch page) |
