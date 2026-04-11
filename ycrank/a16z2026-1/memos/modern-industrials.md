# Modern Industrials

> The AI Workforce for Building Materials Distribution.
>
> Built by lifelong friends from xAI, Google, and McKinsey.

| Field | Value |
|-------|-------|
| Website | https://modernindustrials.com |
| YC Page | https://speedrun.a16z.com/companies/modern-industrials |
| Batch | a16z Speedrun (exact cohort not confirmed; SR006 ran Jan 26 – Apr 12, 2026 per speedrun.a16z.com/faq). Note: company is listed on a16z Speedrun, not on ycombinator.com/companies. |
| Industry | AI, B2B |
| Team Size | 4 |
| Location | New York, New York, United States of America |
| Tags | AI, B2B |
| YC Partner | Not listed (speedrun.a16z.com page returned 404 at time of research) |
| Emails | austin@modernindustrials.com, vatsal@modernindustrials.com, ankit@modernindustrials.com (a16z Speedrun portal) |

## The Idea

**Problem:** Lumber and building materials (LBM) distributors process hundreds of quote requests daily through manual data entry, pricing lookups, and order management (Ventura YC page, corroborating the same vertical pain point). The company website describes the status quo as "manual bottlenecks," "error-prone" workflows, and limited 9-to-5 capacity (modernindustrials.com). The $450B+ building materials distribution industry is described by the founders as "one of the largest and most under-digitized industries in North America" (Vatsal Bhargava LinkedIn post, Apr 2, 2026). Legal entity is Korman Labs Inc. (modernindustrials.com footer).

**Approach:** The first product, "AI Sales Engine," automates quoting, order entry, and analytics for LBM distributors (a16z Speedrun portal / company_data). The website lists features including automated order processing, intelligent pricing and seamless quoting, data-driven customer engagement, and actionable business analytics with 24/7 operational capability (modernindustrials.com). [Inferred]: The product likely ingests incoming quote requests (email, fax, PDF), interprets line items against distributor catalogs and pricing rules, and drafts quotes/orders for rep review — similar to the mechanism described by direct competitor Ventura.

**Differentiation:** Unlike legacy ERP systems (DMSi Agility, ECI Spruce, Epicor BisTrack), which are record-keeping platforms, Modern Industrials positions as an AI execution layer that sits on top of existing systems to automate workflow, not replace infrastructure (modernindustrials.com). Unlike Flitch, which provides a broad modern operating system for lumberyards ($3.16M raised, Crunchbase Nov 2023), Modern Industrials focuses specifically on the sales/quoting automation layer. Ventura (YC W26) is the closest direct competitor, also automating quoting for industrial distributors, with a stated focus on ERP integration (ycombinator.com/companies/ventura).

**Business Model:** No pricing page found on modernindustrials.com. [Inferred]: Most likely monetization is SaaS subscription (per-location or per-seat), given the B2B distribution customer base and the pattern established by competitors like Flitch and Ventura.

**TAM/SAM:** The company claims a $450B+ building materials distribution industry (company description). The U.S. building materials market was valued at $173B in 2023 with 6.3% CAGR (Fortune Business Insights, 2024 via search snippet). The global construction materials market was estimated at $1.42–2.20 trillion in 2025, depending on scope (multiple sources via search snippet). [Inferred]: The SAM is the North American LBM distribution segment; the company's $450B+ figure could not be independently verified with a named source for the distribution-specific slice.

**GTM / Distribution:** Vatsal Bhargava stated the company has "already gone live with national players" (LinkedIn post, Apr 2, 2026). The company is hiring "AI native engineers" in NYC (same post). [Inferred]: Direct sales to mid-to-large LBM distributors, likely starting with national accounts that have high quote volumes and manual back-office pain, then expanding downmarket.

## Defensibility

- **Data moat potential:** Each distributor deployment exposes proprietary pricing, product catalogs, and customer behavior data. [Inferred]: Over time, cross-customer learning on pricing patterns and product substitution logic could create a compounding data advantage, but this is unproven at current stage.
- **Switching costs:** [Inferred]: Once integrated into a distributor's quoting workflow and ERP, switching costs increase as the AI is trained on distributor-specific pricing rules and customer preferences.
- No patents, open-source repos, or regulatory barriers found in public sources.

**Market structure:** Legacy ERP vendors (DMSi, ECI, Epicor) sell large, monolithic systems; adding an AI quoting layer risks cannibalizing professional services revenue tied to customization and training (DMSi website). [Inferred]: This business model conflict may slow incumbents from building native AI quoting, creating a window for startups. However, ERP vendors could partner with or acquire AI quoting startups rather than build in-house.

**Commoditization risk:** Ventura (YC W26) is building a nearly identical product for the same vertical. Flitch ($3.16M raised, Crunchbase) targets the same customer base with broader software. General-purpose AI document processing tools (e.g., from large cloud providers) could be adapted to LBM quoting with domain-specific fine-tuning. The core technical challenge — parsing unstructured quote requests and matching to product catalogs — is addressable by multiple well-funded teams.

## Market & Traction

**Traction signals:**
- "Already gone live with national players" (Vatsal Bhargava LinkedIn, Apr 2, 2026) — no customer names, counts, or revenue disclosed
- LinkedIn announcement post: 225 likes, 84 comments (LinkedIn, Apr 2, 2026)
- LinkedIn company page exists at linkedin.com/company/modern-industrials (LinkedIn); follower count not retrievable
- Hiring AI engineers in NYC (LinkedIn post, Apr 2, 2026)
- Listed on f4.fund startup database as "Enterprise Software," stage: Seed (f4.fund)
- No Product Hunt listing found
- No Twitter/X company account found
- No app store listing, Chrome extension, or Discord/Slack community found
- No press coverage in named publications found

**Competitive landscape:**

| Competitor | Differentiator vs. Modern Industrials | Funding | Revenue/ARR |
|---|---|---|---|
| **Ventura** (YC W26) | ERP-integrated AI teammate; one customer processes 1M+ quotes/orders annually (ycombinator.com). CEO has prior exit in wholesale distribution SaaS. | YC standard deal (~$500K) | Revenue unknown |
| **Flitch** | Broader OS for lumberyards covering inventory, orders, and customer service beyond quoting (getflitch.com) | $3.16M pre-seed (Crunchbase, Nov 2023) | Revenue unknown |
| **DMSi Agility** | Legacy full-suite ERP purpose-built for LBM since 1976; deep installed base (dmsi.com) | Privately held; no funding data found | Revenue unknown |
| **ECI Spruce** | Part of ECI Software Solutions; ERP for lumberyards with up to 200 employees (softwareconnect.com) | ECI is PE-backed (Apax Partners acquired ECI in 2022) | Revenue unknown |
| **Scalera** | AI procurement for construction tendering in Europe; different geography and use case (EU-Startups, May 2025) | $6.5M seed (Tech.eu, May 2025) | Revenue unknown |

**Why now:** [Inferred]: LLM capabilities crossed a performance threshold in 2024–2025 that made parsing unstructured trade documents (faxes, emails, spec sheets) commercially viable for the first time. The LBM distribution industry's reliance on legacy communication formats (fax, phone, email PDFs) creates a specific NLP/document-understanding challenge that was not cost-effective to solve with pre-LLM technology.

## Founders & Team

**Austin Mao** — Co-founder & CEO
- Former Head of Growth & Operations at Roon (Sequoia-backed Series A) (a16z Speedrun portal)
- Led F500 AI engagements at McKinsey; ranked in top 5% of the company (a16z Speedrun portal)
- Selected for Northwestern's BS/MD program (<0.1% acceptance); Frederick Shipp Diebler Award as top economics undergraduate (a16z Speedrun portal)
- Twitter/X: @austinmao — count not retrievable
- LinkedIn: linkedin.com/in/a-mao — "CEO at Modern Industrials | Backed by a16z" (LinkedIn search snippet)
- GitHub: No public repos found

**Vatsal Bhargava** — Co-founder
- Led ML initiatives for Google Ads Bidding, driving incremental revenue at scale (a16z Speedrun portal)
- Built a real-time NBA injury intelligence platform to $10K MRR with 500+ users (a16z Speedrun portal)
- Early engineer at Bloomfilter (Sequoia-backed) (a16z Speedrun portal)
- Left Google to start Modern Industrials (LinkedIn post, Apr 2, 2026)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/vatsal-bhargava — "Modern Industrials" (LinkedIn)
- GitHub: No public repos found

**Ankit Bhargava** — Co-founder & CTO
- Former Member of Technical Staff at xAI building agentic AI systems (a16z Speedrun portal)
- Previously ML engineer at Uber on Surge pricing team (a16z Speedrun portal; LinkedIn search snippet)
- Developed algorithmic trading systems for Kalshi and Polymarket generating $200K+ profit (16% ROI) (a16z Speedrun portal)
- Disinformation Researcher at University of Michigan School of Information (ContactOut search snippet)
- Twitter/X: No confirmed account found (multiple "Ankit Bhargava" accounts exist; none verified as this individual)
- LinkedIn: linkedin.com/in/abharg (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Vatsal and Ankit Bhargava are brothers. Austin Mao is their childhood best friend of 20+ years (Vatsal Bhargava LinkedIn post, Apr 2, 2026; a16z Speedrun portal).

**Founder-market fit:** The team combines operational experience in enterprise AI deployment (McKinsey F500 engagements), ML engineering at scale (Google Ads Bidding, Uber Surge), and frontier AI systems (xAI agentic AI). Austin's operations role at Roon provides startup scaling experience. No prior experience in building materials or distribution was found in public sources. [Inferred]: The team's strength is technical AI capability rather than domain expertise in LBM; domain knowledge may come from early customer partnerships with "national players."

## Key Risks

**Direct competitor overlap with Ventura (YC W26):** Ventura targets the identical use case (AI quoting for industrial/building materials distributors), has a CEO with a prior exit in wholesale distribution SaaS, and is live with customers including one processing 1M+ quotes/orders annually (ycombinator.com/companies/ventura). Both companies launched in 2025 with similar value propositions.

**No demonstrated domain expertise in LBM:** None of the three founders have documented experience in building materials, lumber, or distribution industries (a16z Speedrun portal, LinkedIn profiles). The industry is relationship-driven and sales cycles to traditional distributors may require domain credibility that takes time to build.

**Name disambiguation risk:** "Modern Industrials" and "Modern Industries" are common phrases. Multiple unrelated companies share similar names (Modern Industries Inc., Modern Industrial on LinkedIn). This may create brand confusion in search, sales, and fundraising contexts.

**ERP integration dependency:** The product's value requires integration with incumbent ERP systems (DMSi Agility, ECI Spruce, Epicor BisTrack). ERP vendors could restrict API access, build competing features, or favor partnership with a single AI vendor, creating platform risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $450B+ building materials distribution (company claim, unverified). U.S. building materials market $173B in 2023 (Fortune Business Insights, 2024 via search snippet) |
| SAM | No public data found |
| Traction | "Gone live with national players" (Vatsal Bhargava LinkedIn, Apr 2, 2026); 225 likes on launch post (LinkedIn, Apr 2, 2026) |
| Revenue Signal | No public data found |
| Founders | Austin Mao (CEO): McKinsey top 5%, Head of Growth at Roon (Sequoia). Vatsal Bhargava: Google Ads ML, $10K MRR side project. Ankit Bhargava (CTO): xAI MTS, Uber ML, $200K+ trading profits. |
| Competitors | Ventura (YC W26 standard deal, revenue unknown, same quoting use case), Flitch ($3.16M raised per Crunchbase Nov 2023, revenue unknown, broader LBM OS), DMSi Agility (private, revenue unknown, legacy ERP incumbent) |
| Moat Signals | No public data found |
| Risk Factors | Direct competitor overlap with Ventura, no founder domain expertise in LBM, ERP integration dependency |
| Founder Reach | Austin Mao: Twitter @austinmao (count not retrievable), LinkedIn linkedin.com/in/a-mao. Vatsal Bhargava: LinkedIn linkedin.com/in/vatsal-bhargava, 225 likes on launch post (LinkedIn). Ankit Bhargava: LinkedIn linkedin.com/in/abharg. GitHub: none found for any founder. |
| Distribution Signals | No public data found |
| Emails | austin@modernindustrials.com, vatsal@modernindustrials.com, ankit@modernindustrials.com (a16z Speedrun portal) |
