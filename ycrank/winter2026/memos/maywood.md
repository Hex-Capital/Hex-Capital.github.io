# Maywood

> AI for M&A

| Field | Value |
|-------|-------|
| Website | https://maywoodai.com/ |
| YC Page | https://www.ycombinator.com/companies/maywood |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech -> Banking and Exchange |
| Team Size | 5 |
| Location | New York, NY, USA |
| Tags | Artificial Intelligence, Fintech, Finance, B2B |
| YC Partner | Jon Xu |
| Emails | founders@maywoodai.com |

## The Idea

**Problem:** Investment banking M&A deal execution involves dozens of fragmented systems across the transaction lifecycle. Deal teams spend extensive time reconciling updates across platforms, copying figures, and reviewing large decks. The company cites $5 trillion of M&A activity in 2025, yet the underlying execution workflow — generating CIMs, pitch decks, teasers, models, and due diligence responses — remains largely manual (YC Launch page). The primary customer segment is middle-market and large investment banks.

**Approach:** Maywood provides a single AI execution platform that connects to a firm's entire digital universe — files, folders, emails, meetings, data vendors, company filings, and internal databases (company website). The platform: (1) performs foundational company research, industry context, and deal dynamics analysis; (2) auto-generates finished, on-brand CIMs, pitch decks, teasers, memos, and models by analyzing past deal documents to emulate firm-specific language and standards; (3) surfaces due diligence Q&A and flags missing information or deal risks; (4) operates as a unified workspace where a data update in one place propagates across all deal documents automatically (YC Launch page). The product prioritizes editability and auditability — outputs are meant to be modified by bankers, not black-boxed.

**Differentiation:** Existing M&A platforms like Datasite, DealRoom, and Midaxo focus primarily on virtual data rooms, pipeline tracking, and workflow management. Maywood differentiates by automating the content creation layer — generating the actual deliverables (CIMs, presentations, models) rather than just managing document storage and access. It also differs from horizontal AI writing tools (e.g., ChatGPT, Jasper) by being purpose-built for investment banking with firm-specific style matching, financial modeling capabilities, and SOC 2 Type II / GDPR / CCPA compliance with single-tenant deployment and self-hosted options (company website).

**Business Model:** No pricing information is publicly available on the company website. [Inferred]: Most likely monetization path is enterprise SaaS with per-seat or per-deal-team pricing, given the B2B investment banking target customer and the emphasis on security/compliance features (single-tenant, self-hosted options) that signal enterprise contracts.

**TAM/SAM:** The global AI agents in financial services market was valued at $1.79 billion in 2025, projected to reach $6.54 billion by 2035 at a 13.84% CAGR (Precedence Research, 2025 via search snippet). McKinsey estimated that generative AI could contribute $200–$340 billion annually to the global banking sector through productivity gains (McKinsey, via search snippet). No public TAM/SAM data found for the specific M&A deal execution software sub-segment.

**GTM / Distribution:** The company is already "working with several banks" with reported results (YC Launch page). Active job postings for AI Researcher and Applied AI Engineer roles ($150K–$250K) in New York and San Francisco suggest continued product development investment (YC Work at a Startup). [Inferred]: Most likely distribution path is direct enterprise sales to investment banking teams, starting with mid-market banks where deal teams face the highest manual workload-to-headcount ratio and where AI adoption may face less institutional resistance than at bulge-bracket firms.

## Defensibility

**Data advantage (potential):** Each bank deployment creates a proprietary dataset of firm-specific deal language, formatting standards, and historical deal documents. Over time, model fine-tuning on client-specific data could create switching costs — the more deals processed, the better the platform emulates the firm's standards.

**Security/compliance moat:** SOC 2 Type II certification, GDPR/CCPA compliance, ISO 27001 and ISO 42001 in process, single-tenant deployment, and self-hosted options (company website). These certifications represent a meaningful barrier for competitors entering the regulated financial services space, as achieving and maintaining them requires sustained investment.

**Domain specialization:** The product includes finance-specific capabilities (comps analysis, financial modeling, management presentations, data room insights) that horizontal AI tools would need to replicate.

**Market structure:** Incumbent M&A platforms (Datasite, Intralinks) are primarily virtual data room providers whose revenue models center on document storage and access management. Building a generative content layer that creates deal documents represents a fundamentally different product architecture and skill set. Additionally, incumbents risk cannibalizing their high-touch professional services revenue if they automate content creation. Datasite's strategy of acquiring adjacent capabilities (SourceScrub, BlueFlame AI, Grata) rather than building in-house content generation suggests organic development of this capability is not their core competency.

**Commoditization risk:** Large language model providers (OpenAI, Anthropic, Google) could enable competitors to build similar generation capabilities. The moat depends on domain-specific fine-tuning, compliance infrastructure, and integration depth with banking workflows rather than on the underlying AI technology. Other well-funded fintech startups or consulting firms with banking relationships could attempt entry.

## Market & Traction

**Traction signals:**
- Working with "several banks" with reported results (YC Launch page, Feb 2026)
- Customer testimonial: one client stated they "doubled capacity" and are "on pace to double deal count next year with the same headcount" (company website)
- Customer testimonial: another client reported "significantly better outcomes for clients, from creating narratives...to flagging key risks" (company website)
- Drake Goodman's LinkedIn post announcing departure from Blackstone to launch Maywood received 952 likes and 67 comments (LinkedIn, Oct 2025)
- Kent Goodman LinkedIn post announcing YC backing (LinkedIn, date not specified)
- Drake Goodman LinkedIn followers: 6,121 (LinkedIn, as of fetch date)
- LinkedIn company page: linkedin.com/company/maywood/ (follower count not retrievable)
- Active hiring: AI Researcher and Applied AI Engineer roles at $150K–$250K (YC Work at a Startup)
- Company Twitter/X: No company account found; @drakegoodman exists but follower count not retrievable
- Product Hunt: No launch found
- Discord/Slack community: No public data found
- App store / Chrome extension: Not applicable (enterprise web platform)

**Competitive landscape:**

1. **Datasite** — $2.03B total funding, $157.9M revenue (Dec 2025, GetLatka via search snippet), 1,435 employees. Global leader in M&A virtual data rooms and AI-powered deal tools. Acquired Ansarada (Oct 2024), SourceScrub, BlueFlame AI, and Grata. Key differentiator vs. Maywood: Datasite focuses on data room management, document security, and workflow orchestration rather than generative content creation. Maywood targets the upstream content creation step.

2. **Finalis** — $10.7M seed (Jul 2022, Finalis press release). 750+ affiliated bankers, 1,700+ active transactions, $80B+ active transaction volume as of Q1 2025 (Finalis blog via search snippet). Revenue not disclosed. Key differentiator vs. Maywood: Finalis is an operating system and compliance infrastructure for deal intermediaries, whereas Maywood focuses on automating deal document creation.

3. **Midaxo** — $23M raised ($15.85M Series B, Mar 2018), $5.7M revenue (2024, GetLatka via search snippet). Key differentiator vs. Maywood: Midaxo provides structured playbooks and synergy tracking for corporate development teams managing buy-side M&A pipelines, not sell-side document generation.

4. **DealRoom** (dealroom.net) — Funding and revenue not publicly disclosed. Key differentiator vs. Maywood: DealRoom unifies pipeline tracking, due diligence, and integration workflows but does not generate deal documents. Focused on the project management layer of M&A.

**Why now:** [Inferred]: The convergence of two factors creates the window: (1) Large language models reached sufficient quality in 2024–2025 to generate coherent, structured financial documents — a capability threshold that did not exist before GPT-4-class models — making automated CIM and presentation generation feasible for the first time; (2) M&A volume rebounded in 2025 ($5 trillion, per the company's citation), creating deal team capacity constraints that increase willingness to adopt automation tools.

## Founders & Team

**Drake Goodman** — Co-Founder & CEO
- BS Economics (Finance, Entrepreneurship & Innovation concentrations), Wharton School, University of Pennsylvania (Huntsman Program), Summa Cum Laude (YC Launch page, LinkedIn)
- Previously: Investor in Private Equity at Blackstone; Summer Analyst at Tensile Capital Management (LinkedIn via search snippet, The Org)
- Product, strategy, and go-to-market lead at Maywood (YC Launch page)
- Author at Scholars of Finance (scholarsoffinance.org via search snippet)
- Twitter/X: @drakegoodman — follower count not retrievable
- LinkedIn: linkedin.com/in/drake-goodman/ — 6,121 followers (LinkedIn post data)
- GitHub: No public repos found

**Kent Goodman** — Co-Founder
- MIT — EECS and Sloan (LinkedIn via search snippet)
- Neural stylistic transfer research at MIT (YC Launch page)
- Previously: BCG — automated enterprise work at Fortune 500 companies (YC Launch page)
- AI and go-to-market lead at Maywood (YC Launch page)
- ZoomInfo lists title as "Chief Financial Officer & Co-Founder" (ZoomInfo via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/kent-goodman/ — 500+ connections
- GitHub: No public repos found

**Esteban Vizcaino** — Co-Founder & CTO
- MIT — EECS (Extruct AI via search snippet)
- Previously: Balyasny Asset Management (hedge fund), focused on AI transformation in financial organizations (YC Launch page)
- AI and infrastructure lead at Maywood (YC Launch page)
- Long-time friend of Drake Goodman (LinkedIn post)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/esteban-vizcaino-9920a5210
- GitHub: No public repos found

**Co-founder relationship:** Drake and Kent Goodman are brothers (Drake's LinkedIn post, Oct 2025). Drake attended Wharton; Kent and Esteban both attended MIT, indicating a likely shared university connection between the two.

**Founder-market fit:** Drake Goodman worked on deals at Blackstone in private equity, giving him direct experience with the M&A execution pain points the product addresses. Kent Goodman brings MIT AI research credentials (neural stylistic transfer) relevant to the document generation core of the product, combined with BCG enterprise automation experience. Esteban Vizcaino brings both MIT EECS training and hedge fund experience at Balyasny, where he focused on AI transformation in financial organizations. The team combines domain expertise (sell-side/buy-side finance), AI research depth, and enterprise deployment experience.

## Key Risks

**Regulated buyer sales cycles:** Investment banks have long procurement cycles with extensive security reviews, vendor due diligence, and compliance approvals. SOC 2 Type II certification and single-tenant deployment options (company website) partially mitigate this, but each new bank customer may require months-long sales processes, potentially limiting growth velocity at this stage.

**Incumbent acquisition response:** Datasite has been on an aggressive acquisition spree (SourceScrub, BlueFlame AI, Grata, Ansarada) and holds $2.03B in total funding (GetLatka via search snippet). If generative document creation proves valuable, Datasite could acquire a competing startup or build the capability internally, leveraging its existing installed base of M&A customers.

**Output quality and liability:** AI-generated financial documents (CIMs, models) in M&A carry regulatory and legal implications. Errors in auto-generated financial models or misstatements in CIMs could expose banks to liability. The product's emphasis on "editability and auditability" (company website) suggests awareness of this risk, but the standard of accuracy required in investment banking is higher than in most AI content generation use cases.

**Founder concentration in one family:** Two of three co-founders (Drake and Kent Goodman) are brothers. While this can strengthen trust and alignment, it also concentrates key-person risk and may affect governance dynamics or investor preferences.

**Brand disambiguation:** "Maywood" is a common place name (municipalities in NJ, IL, CA) which may create SEO and brand discovery challenges, as evidenced by search results dominated by municipal entities rather than the company.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agents in financial services: $1.79B (2025), projected $6.54B by 2035 at 13.84% CAGR (Precedence Research via search snippet). GenAI in banking: $200–$340B annual value (McKinsey via search snippet). No M&A-specific software TAM found. |
| SAM | No public data found |
| Traction | Working with "several banks" (YC Launch page, Feb 2026); customer testimonials cite doubled capacity and doubled deal count (company website); Drake Goodman LinkedIn: 6,121 followers, 952 likes on launch post (LinkedIn, Oct 2025) |
| Revenue Signal | No public data found |
| Founders | Drake Goodman (CEO): Wharton Summa Cum Laude, Blackstone PE. Kent Goodman (Co-Founder): MIT EECS/Sloan, BCG. Esteban Vizcaino (CTO): MIT EECS, Balyasny Asset Management. |
| Competitors | Datasite ($2.03B raised, $157.9M revenue, full-suite VDR focus vs. Maywood's generative content); Finalis ($10.7M seed, revenue unknown, compliance/operating system for intermediaries); Midaxo ($23M raised, $5.7M revenue, buy-side playbooks vs. Maywood's sell-side generation); DealRoom (funding unknown, revenue unknown, PM layer for M&A) |
| Moat Signals | SOC 2 Type II certified; firm-specific data/style learning over time; single-tenant and self-hosted deployment options |
| Risk Factors | Regulated buyer sales cycles, incumbent acquisition threat (Datasite), AI output liability in financial documents |
| Founder Reach | Drake Goodman: Twitter @drakegoodman (count not retrievable), LinkedIn 6,121 followers. Kent Goodman: LinkedIn 500+ connections. Esteban Vizcaino: LinkedIn profile exists, counts not retrievable. |
| Distribution Signals | Active hiring for AI roles at $150K–$250K (YC Work at a Startup); YC W26 Launch page posted ~Feb 2026; no Product Hunt launch found |
| Emails | founders@maywoodai.com |
