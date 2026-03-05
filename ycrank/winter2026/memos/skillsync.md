# Skillsync

> Find anyone in open source

| Field | Value |
|-------|-------|
| Website | https://skillsync.wiki |
| YC Page | https://www.ycombinator.com/companies/skillsync |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Human Resources |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Recruiting, Open Source, HR Tech |
| YC Partner | Tyler Bosmeny |
| Emails | founders@skillsync.wiki |

## The Idea

**Problem:** Companies hiring for specialized engineering roles (e.g., WASM compilers, edge ML deployment, low-latency trading systems) struggle to identify engineers with verified, deep domain expertise. Traditional recruiting relies on resumes, keyword matching, and self-reported skills on platforms like LinkedIn, which poorly capture actual technical ability. The existing workflow involves recruiters manually browsing GitHub profiles or using broad-spectrum sourcing tools that aggregate surface-level metadata (star counts, follower counts) rather than analyzing the substance of code contributions (YC company page).

**Approach:** Skillsync analyzes developers' open-source contributions on GitHub to create structured skill profiles. It builds a "developer knowledge graph" from actual code, generating descriptions of what each developer has built, their problem-solving patterns, domain expertise, and working style. Companies use a natural-language, "Cursor-like" search interface to describe the capability they need (e.g., "find me engineers who have experience with WASM compilers"), and the platform returns ranked candidates who have demonstrably built in that domain. The workflow then supports filtering by seniority and location, shortlisting, and generating personalized outreach emails referencing the candidate's specific contributions (company website). Developers do not need to sign up or maintain a profile (YC company page).

**Differentiation:** Compared to broad talent sourcing platforms like SeekOut or hireEZ, which aggregate data from 39M–600M+ profiles across LinkedIn, GitHub, Stack Overflow, and other platforms, Skillsync focuses specifically on deep code-level analysis of open-source contributions rather than metadata aggregation. Prog.AI is the closest direct competitor—it also infers skills from GitHub code (TechCrunch, March 2023)—but Skillsync differentiates via its natural-language "Cursor-like" search interface and its emphasis on "personas and working style insights" derived from code analysis, rather than Prog.AI's more traditional search-filter approach. AmazingHiring aggregates profiles from 50+ networks but relies on profile-level data rather than code analysis (search snippet via Juicebox blog, 2026).

**Business Model:** Skillsync charges $499/month or $399/month billed annually ($4,790/year) (company website). No per-seat or usage-based pricing tiers were visible on the website. No freemium tier was identified.

**TAM/SAM:** The global IT Recruitment Market was valued at USD 198.8 billion in 2025 with a CAGR of 7.67% through 2035 (Business Research Insights, 2025 via search snippet). The global online recruitment technology market was valued at USD 15.18 billion in 2025 with a projected CAGR of 12.90% through 2034 (Fortune Business Insights, 2025 via search snippet). [Inferred]: Skillsync's SAM is the subset of technical recruiting spend directed at sourcing specialized/senior engineers, likely a single-digit-billion-dollar segment within the broader IT recruitment market.

**GTM / Distribution:** The website offers a "Book a Demo" and "Talk to Founders" pathway, indicating a founder-led sales motion (company website). The website claims "hundreds of talent teams" are using the platform (company website). [Inferred]: Most likely distribution path is direct sales to engineering-heavy companies and recruiting agencies, supplemented by organic discovery through the open-source developer community and word-of-mouth from the founders' network in the Juspay/Hyperswitch open-source ecosystem.

## Defensibility

Skillsync's primary moat signal is the developer knowledge graph built from deep code analysis of GitHub contributions—a structured data asset that grows more valuable as more repositories are indexed and more skill profiles are generated. The founders' direct experience growing Juspay's Hyperswitch from 0 to 20k+ GitHub stars (now 34–40k+ stars) provides domain-specific insight into how open-source talent operates (YC company page, GitHub).

**Market structure:** Broad talent platforms like LinkedIn Recruiter and SeekOut optimize for breadth (1B+ and 39M profiles respectively) and serve generalist recruiting workflows. Building deep code-analysis capabilities for a niche segment of technical sourcing may not justify the engineering investment for platforms whose revenue model depends on serving all hiring categories. Prog.AI, however, operates in the same niche and has code-analysis capabilities, so the structural barrier against code-analysis-specific competitors is limited.

**Commoditization risk:** The core capability—analyzing public GitHub code to infer developer skills—is technically replicable. LLM-based code analysis is increasingly accessible, and any well-funded recruiting platform could build similar features. Prog.AI already offers code-based skill inference across 60M+ developer profiles (TechCrunch, March 2023). The differentiation rests on search interface quality, depth of the knowledge graph, and speed of iteration rather than structural barriers.

## Market & Traction

1. **Traction signals:**
   - Website claims "hundreds of talent teams discovering hidden engineering talent" (company website, accessed March 2026)—no specific count or source verification available.
   - Product Hunt launch: "Discover hidden talent in your codebase" — listed June 2025 with 3 upvotes (Product Hunt via search snippet). Note: this Product Hunt listing describes a codebase-analysis tool for internal teams ("discover hidden talent in your codebase… capture successful patterns without surveys"), which differs from the current positioning as an external developer sourcing/recruiting platform ("Find anyone in open source"). This may indicate a product pivot between mid-2025 and the W26 YC batch.
   - Product Hunt Awards page exists for 2025 but no specific award details were retrievable (Product Hunt via search snippet).
   - Twitter/X: Company handle @skillsync exists (X.com). Follower count not retrievable.
   - Nishant Joshi posted about YC W26 acceptance on X (@nishantjosh, post dated 2025) (X.com via search snippet).
   - LinkedIn: A company page exists at linkedin.com/company/skillsyncjob (LinkedIn via search snippet). Follower count not retrievable. Note: multiple unrelated "SkillSync" entities exist on LinkedIn (SkillSync Solutions, SkillSync Interns), creating brand disambiguation challenges.
   - Pricing at $499/month suggests the product is live and monetizing (company website).
   - No press coverage in named publications found beyond the YC listing.
   - No Discord or Slack community found.
   - No app store listings or Chrome extension found.

2. **Competitive landscape:**

   | Competitor | Funding | Revenue | Key Differentiator vs. Skillsync |
   |-----------|---------|---------|----------------------------------|
   | **Prog.AI** | $1M pre-seed (company blog) | Revenue unknown | Also analyzes GitHub code to infer skills; covers 60M+ developer profiles; offers tiered pricing from free to $530/month (TechCrunch, March 2023). Most direct competitor. |
   | **SeekOut** | $186M total raised, $1.2B peak valuation (SeekOut blog, Jan 2022); laid off 30% in May 2024 (TechCrunch, May 2024) | $25.2M revenue in 2024 (GetLatka via search snippet) | Broad talent intelligence platform with 39M developer profiles and GitHub search feature; serves all roles, not just engineering. Far larger but less code-analysis depth. |
   | **hireEZ** | $76.3M total raised (Tracxn via search snippet) | $42.6M revenue in 2024 (GetLatka via search snippet) | End-to-end outbound recruiting platform across 45+ web sources; broader scope beyond GitHub-specific code analysis. Pricing $169–$250+/user/month. |
   | **AmazingHiring** | No public funding data found | Revenue unknown | Aggregates 600M+ tech profiles from 50+ networks (GitHub, Stack Overflow, Kaggle); ~$300/user/month (search snippet via Juicebox blog, 2026). Profile-based rather than code-analysis-based. |
   | **GitMatcher** | No public funding data found | Revenue unknown | AI GitHub sourcing tool analyzing code performance and contribution velocity; most similar niche positioning to Skillsync. |

3. **Why now:** [Inferred]: Two catalysts converge. First, LLM capabilities crossed a threshold in 2023–2025 that makes deep semantic code analysis at scale feasible and cost-effective—prior tools could only extract surface metadata (language, stars, commit frequency) from GitHub profiles, whereas LLMs can now parse code semantics to infer domain expertise. Second, technical hiring difficulty increased—65% of technology hiring managers reported greater difficulty finding skilled professionals year-over-year (Robert Half, 2026 via search snippet), and AI/ML job postings grew 163% in 2025 (Robert Half via search snippet), creating acute demand for specialized developer sourcing in niche domains where traditional recruiting pipelines fail.

## Founders & Team

**Narayana Aaditya Ganeshkumar** — Co-founder & CEO
- PGDM, XLRI Jamshedpur (2018–2020); B.Tech, National Institute of Technology Tiruchirappalli (2014–2018) (LinkedIn via search snippet, ContactOut via search snippet)
- Previously at Juspay, where he contributed to the Hyperswitch open-source project (a Rust-based payments switch that grew from 0 to 20k+ GitHub stars during his involvement) (YC company page)
- Background spans product, HR/management consulting, strategy, and organizational psychology (LinkedIn via search snippet)
- Twitter/X: @narsagna — follower count not retrievable
- LinkedIn: linkedin.com/in/narayanaaaditya — headline: "Skillsync" (LinkedIn via search snippet)
- GitHub: No public repos found under this handle

**Nishant Joshi** — Co-founder & CTO
- Previously a developer at Juspay, where he worked on Hyperswitch; described as a "Top 1% Rust dev" with 2+ years of hands-on Rust programming (YC company page, GitHub profile via search snippet)
- Skills in Rust (76.76% of code), Python, JavaScript, TypeScript, Zig, Ruby; specializes in type-safe systems, functional programming, and type theory (GitHub profile via search snippet)
- Based in Bengaluru/Mumbai prior to San Francisco (GitHub profile via search snippet)
- Twitter/X: @nishantjosh — follower count not retrievable
- LinkedIn: linkedin.com/in/nishantjosh — headline: "Co-Founder CTO @ Skillsync (YC W26)" (LinkedIn via search snippet)
- GitHub: github.com/NishantJoshi00 — 148 followers, 100+ public repo contributions; personal site nishantjosh.dev (GitHub via search snippet)

**Co-founder relationship:** Both founders worked together at Juspay on the Hyperswitch open-source Rust project (YC company page, LinkedIn data). This shared experience at the same company on the same open-source project is the identified connection point.

**Founder-market fit:** Both founders experienced the developer sourcing problem firsthand while growing Juspay's Hyperswitch from 0 to 20k+ GitHub stars—they observed that many world-class engineers contribute to open source but are invisible to recruiters through traditional channels (YC company page). Aaditya's XLRI management education and HR/organizational psychology background provides the business and recruiting-domain lens, while Nishant's deep Rust systems engineering experience and extensive GitHub activity provide the technical credibility and ability to build code-analysis infrastructure. Their direct experience operating in the open-source ecosystem gives them a user-side understanding of how skilled developers actually work and signal expertise through code.

## Key Risks

**Pivot uncertainty:** The June 2025 Product Hunt launch positioned the product as "Discover hidden talent in your codebase" (internal team skill mapping), while the current product is positioned as "Find anyone in open source" (external recruiting). This pivot within ~6 months suggests the team is still iterating on product-market fit, and the current positioning may not be final (Product Hunt via search snippet; company website).

**Direct competitor with head start (Prog.AI):** Prog.AI raised $1M in pre-seed funding (Prog.AI blog), already indexes 60M+ developer profiles, offers tiered pricing, and was covered by TechCrunch in March 2023. Prog.AI's founder (Maria Grineva) had a prior exit (Orb Intelligence sold to Dun & Bradstreet). Skillsync will need to differentiate on search quality and depth rather than coverage.

**GitHub data dependency:** The product's entire value proposition depends on analyzing public GitHub data. GitHub (owned by Microsoft) could restrict API access, change rate limits, or launch competing features. GitHub Copilot's expansion into developer profiling or Microsoft's integration of GitHub data into LinkedIn Recruiter would create a direct substitution risk from the platform owner.

**Brand disambiguation:** Multiple unrelated entities use the "SkillSync" name on LinkedIn (SkillSync Solutions, SkillSync Interns, SkillSyncer on Product Hunt). This creates confusion in search results and brand-building challenges. The domain skillsync.wiki (rather than a .com) compounds discoverability friction (LinkedIn via search snippet).

**Limited addressable candidate pool:** The product only surfaces engineers who contribute to public open-source repositories on GitHub. Many highly skilled engineers work primarily on proprietary codebases and have minimal or no public GitHub activity, limiting the pool of discoverable candidates to a subset of the total engineering talent market.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | IT Recruitment Market: $198.8B in 2025, CAGR 7.67% (Business Research Insights via search snippet); Online Recruitment Technology Market: $15.18B in 2025, CAGR 12.90% (Fortune Business Insights via search snippet) |
| SAM | No public data found |
| Traction | "Hundreds of talent teams" (company website, unverified); Product Hunt launch June 2025 with 3 upvotes (Product Hunt via search snippet); YC W26 batch (YC page) |
| Revenue Signal | Pricing: $499/month or $399/month annual ($4,790/year) (company website). No revenue figures disclosed. |
| Founders | Narayana Aaditya Ganeshkumar (CEO): XLRI Jamshedpur PGDM, NIT Trichy B.Tech, ex-Juspay (Hyperswitch). Nishant Joshi (CTO): Top 1% Rust dev, ex-Juspay (Hyperswitch), 148 GitHub followers. |
| Competitors | Prog.AI ($1M pre-seed, revenue unknown, direct GitHub code-analysis competitor); SeekOut ($186M raised, $25.2M revenue 2024, broad talent platform with GitHub search); hireEZ ($76.3M raised, $42.6M revenue 2024, end-to-end outbound recruiting); AmazingHiring (funding unknown, revenue unknown, 600M+ tech profiles from 50+ networks); GitMatcher (funding unknown, revenue unknown, AI GitHub sourcing) |
| Moat Signals | Developer knowledge graph from deep code analysis; founders' direct experience growing Hyperswitch (0 to 20k+ GitHub stars) |
| Risk Factors | Recent pivot from internal codebase tool to external recruiting, direct competitor Prog.AI has head start and prior-exit founder, GitHub platform dependency |
| Founder Reach | Aaditya: Twitter @narsagna (count not retrievable), LinkedIn linkedin.com/in/narayanaaaditya. Nishant: Twitter @nishantjosh (count not retrievable), LinkedIn linkedin.com/in/nishantjosh, GitHub 148 followers. |
| Distribution Signals | Product Hunt launch June 2025 (3 upvotes) (Product Hunt via search snippet); "Book a Demo" / "Talk to Founders" sales motion (company website) |
| Emails | founders@skillsync.wiki |
