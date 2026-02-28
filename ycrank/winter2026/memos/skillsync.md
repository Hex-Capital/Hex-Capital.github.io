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

## The Idea

**Problem:** Companies hiring for specialized engineering roles (low-level systems, robotics, infrastructure, ML on edge) struggle to identify qualified candidates because the engineers who build in these domains are often not active on LinkedIn, do not maintain updated resumes, and are dispersed across the long tail of open-source projects. Existing recruiting workflows rely on keyword-matching against resumes and professional profiles, which systematically miss contributors whose skills are demonstrated only in code. Today, recruiters manually browse GitHub repositories or rely on broad talent marketplaces (SeekOut, HireEZ, Turing) that index professional profiles rather than actual code output.

**Approach:** Skillsync analyzes public GitHub contributions and creates structured skill profiles for developers. Rather than indexing resumes or LinkedIn profiles, it parses code contributions to identify what an engineer has actually built. Companies use a "Cursor-like" search interface to query for specific capabilities (e.g., "deployed custom neural nets on edge," "WASM compiler experience") and receive a shortlist of engineers whose code demonstrates those skills. A browser tool allows users to append "skills" to any GitHub URL (skillsgithub.com/username) to view a capability breakdown. Engineers do not need to sign up or maintain a profile (YC launch page, ycombinator.com/launches/PAP).

**Differentiation:** Traditional sourcing platforms (SeekOut, HireEZ, Entelo) aggregate professional profiles from LinkedIn, job boards, and social media. They search resumes and bios via keyword matching. Turing and Toptal are talent marketplaces where developers opt-in and go through vetting. Skillsync's differentiation is that it indexes actual code contributions rather than self-reported skills, and does not require developer opt-in. This positions it for a segment of the talent pool that is invisible to profile-based sourcing: engineers whose primary professional presence is their GitHub activity rather than a LinkedIn page.

**Business Model:** Skillsync offers three pricing tiers (app.skillsync.wiki): Starter (free, limited searches), Pro ($499/month per seat, unlimited searches, contact credits, export credits, phone/Slack support), and Enterprise (custom pricing, includes MCP server, dedicated account manager, custom integrations, priority support). "Deep profile" credits are priced at $3 each. No public revenue figures have been disclosed.

**TAM/SAM:** The global IT recruitment market was valued at $198.8 billion in 2025 (Business Research Insights, via search snippet). The global recruitment software market was valued at $2.38 billion in 2024 and is projected to reach $3.7 billion by 2033 at a 4.9% CAGR (IMARC Group, via search snippet). A separate estimate sizes the recruitment software market at $3.30 billion in 2025, growing at 9.4% CAGR to $6.20 billion by 2032 (Coherent Market Insights, via search snippet). No publicly available SAM estimate exists specific to code-based or open-source developer sourcing.

**GTM / Distribution:** [Inferred]: The most likely initial distribution path is direct outbound to engineering-led companies hiring for specialized roles (systems, infrastructure, AI/ML), where traditional sourcing is least effective. The YC launch post specifically calls out "low-level systems, robotics, and infrastructure engineering" as target domains. The Pro tier's per-seat pricing at $499/month suggests targeting individual recruiters or small recruiting teams at tech companies rather than enterprise-wide deals initially.

## Defensibility

Skillsync's primary potential defensibility mechanism is the structured skill profile dataset it builds by analyzing GitHub contributions. As more profiles are indexed and refined, the depth and accuracy of code-skill mappings could create a data advantage that new entrants would need to replicate from scratch. No public information exists on proprietary models, patents, or unique data pipelines beyond what is described on the website and YC page.

**Market structure:** GitHub profile-based sourcing platforms (SeekOut, HireEZ) have invested heavily in aggregating professional profiles from LinkedIn, social media, and job boards. Their product architectures, sales motions, and customer expectations are built around keyword-matching against professional text data. Building a code-analysis layer requires a fundamentally different technical stack (parsing repositories, understanding code semantics across languages, mapping contributions to skill taxonomies). [Inferred]: Incumbents could add code-analysis features, but doing so would require significant R&D investment in a capability orthogonal to their current matching infrastructure, and it is unclear whether their customer base (generalist recruiters) would demand it enough to justify the investment.

**Commoditization risk:** The underlying approach—analyzing GitHub contributions to infer developer skills—is technically reproducible. GitHub's public API provides access to the same raw data. LLMs have made code understanding more accessible. A well-funded competitor or an incumbent like SeekOut or LinkedIn could build similar code-analysis features. The moat, if one develops, would depend on the quality and granularity of skill extraction, the breadth of profiles indexed, and any proprietary signals beyond raw code analysis.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator (W26 batch) (ycombinator.com/companies/skillsync)
- YC Partner: Tyler Bosmeny (YC company page)
- Product Hunt launch: "Discover hidden talent in your codebase" (June 5, 2025, producthunt.com/products/skillsync-3 via search snippet) — 3 upvotes reported (Product Hunt via search snippet). Note: this Product Hunt listing used the tagline "Discover hidden talent in your codebase," which emphasizes internal team analysis; the current YC positioning emphasizes external recruiting ("Find anyone in open source"). This may reflect a repositioning of the product's primary use case.
- GitHub organization: github.com/skillsynchq — no public repositories, 3 followers (GitHub, fetched Feb 2025)
- Company Twitter/X: No dedicated company account found.
- Narayana Aaditya Twitter/X: @narsagna (count not retrievable)
- Nishant Joshi Twitter/X: No public account confirmed for the Skillsync co-founder specifically.
- LinkedIn: linkedin.com/in/narayanaaaditya/ (Narayana Aaditya); linkedin.com/in/nishantjosh/ and linkedin.com/in/joshi-nishant (Nishant Joshi) — follower/connection counts not retrievable.
- Discord/Slack community: No public data found.
- No public user counts, revenue, or growth metrics disclosed.
- No active job postings (YC company page, 0 jobs listed).

**Competitive landscape:**

1. **SeekOut** — $189M raised (Series C, Jan 2022, TechCrunch); $25.2M revenue in 2024 (Getlatka, via search snippet); $1.2B valuation (SeekOut press release, Jan 2022). Indexes 700M+ professional profiles across 30+ platforms. Differentiator vs. Skillsync: SeekOut aggregates professional profile data (LinkedIn, GitHub bios, patents, publications) rather than analyzing code content directly. Broader in scope (not engineering-specific) but shallower on code-level skill extraction.

2. **HireEZ (formerly Hiretual)** — $26M raised (Conductive Ventures, Feb 2022, via search snippet). AI-powered sourcing across the open web. Differentiator vs. Skillsync: HireEZ searches across multiple web sources (social media, professional sites) using NLP on text profiles rather than code analysis. Broader candidate sources but no code-understanding capability.

3. **Entelo** — $44.4M raised over 5 rounds (Tracxn, via search snippet); $35M annual revenue as of June 2024 (Growjo, via search snippet). Focuses on diversity hiring and predictive analytics on professional profiles. Differentiator vs. Skillsync: Profile-based matching with a diversity hiring emphasis; does not analyze code contributions.

4. **Turing** — Developer marketplace with AI-based vetting; access to 2M+ developers (via search snippet). Differentiator vs. Skillsync: Turing is an opt-in marketplace where developers apply and are vetted. Skillsync indexes developers who have not opted in, based on public code. Different GTM (marketplace vs. sourcing tool).

5. **Toptal** — Curated marketplace of "top 3%" freelance talent. Differentiator vs. Skillsync: Opt-in, heavily vetted marketplace model focused on freelance engagements rather than sourcing for full-time hiring.

**Why now:** [Inferred]: The convergence of large language models capable of understanding code semantics (GPT-4, Claude, open-source code LLMs) has made automated code analysis at scale technically feasible in a way it was not 2-3 years ago. Prior approaches to GitHub-based sourcing relied on shallow signals (commit counts, language frequency, star counts). LLMs enable extraction of higher-level skill signals from code (e.g., "deployed custom neural nets on edge") that map to actual hiring requirements. Simultaneously, the AI/ML talent shortage has increased employer willingness to source from non-traditional channels.

## Founders & Team

**Narayana Aaditya Ganeshkumar** — Co-founder & CEO
- Education: NIT Trichy; XLRI Jamshedpur (ContactOut, via search snippet)
- Previously: Associate Product Manager at Juspay (Aug 2022 – Dec 2024), where he worked on Hyperswitch, an open-source Rust payments switch (LinkedIn, via search snippet)
- Helped grow Hyperswitch from launch to 20K+ GitHub stars during his tenure (YC company page). The repo currently has 40.3K stars (GitHub, fetched Feb 2025).
- Background described as spanning "engineering, product, and organizational psychology" (YC company page)
- Twitter/X: @narsagna — follower count not retrievable
- LinkedIn: linkedin.com/in/narayanaaaditya/
- GitHub: No personal public GitHub profile confirmed

**Nishant Joshi** — Co-founder & CTO
- Previously: Rust Developer / SDE at Juspay, building Hyperswitch (LinkedIn, via search snippet)
- Described as "Top 1% Rust developer" (YC company page)
- 2+ years of hands-on Rust programming; skills in system development, service mesh, AWS, Kubernetes (LinkedIn, via search snippet)
- Smart India Hackathon (SIH) 2022 Grand Finalist (LinkedIn, via search snippet)
- Twitter/X: No confirmed account for this specific Nishant Joshi
- LinkedIn: linkedin.com/in/nishantjosh/ and linkedin.com/in/joshi-nishant
- GitHub: github.com/NishantJoshi00 — 182 followers; 100+ public repo contributions; notable pinned repo: shelgon (Rust REPL framework, 271 stars); contributor to juspay/hyperswitch (40.3K stars) (GitHub, fetched Feb 2025)

**Co-founder relationship:** Both founders worked at Juspay, where they contributed to the Hyperswitch open-source payments project. This shared employer and project experience constitutes a prior working relationship.

**Founder-market fit:** Both founders come directly from the open-source ecosystem that Skillsync targets. At Juspay, they grew Hyperswitch to 20K+ stars and managed a community of hundreds of contributors, giving them first-hand experience with the problem of identifying skilled contributors in open-source projects. Nishant Joshi's deep Rust expertise and GitHub presence (100+ repos, 271 stars on shelgon) demonstrates active participation in the developer community Skillsync indexes. Narayana Aaditya's product management background at Juspay and organizational psychology training from XLRI provide the product and GTM perspective.

## Key Risks

**Name disambiguation / brand confusion:** Multiple unrelated products and projects share the "SkillSync" name, including an EIT upskilling tool in Europe (digital-skills-jobs.europa.eu), several unrelated GitHub repositories (Chinmay-Ankolekar/SkillSync, Shubhiidixit/SkillSync, opencodeiiita/SkillSync-Frontend), and a separate Product Hunt listing ("Skillsync: Ship your ideas into functional apps," producthunt.com/products/skillsync-2). This creates SEO competition and potential brand confusion for prospective customers searching for the product.

**GitHub API dependency:** Skillsync's core functionality relies on access to public GitHub data. GitHub (Microsoft) could restrict API access, change rate limits, or introduce competing native features. GitHub Copilot's expansion into developer analytics and GitHub's existing "Sponsors" and profile features indicate the platform is investing in developer identity products. Any policy change regarding scraping or bulk API usage of contribution data could constrain Skillsync's data pipeline.

**Developer consent and privacy concerns:** Skillsync creates profiles of developers without requiring their opt-in. Engineers may object to having their GitHub contributions analyzed and presented to recruiters without consent, especially in jurisdictions with strict data protection regulations (GDPR, CCPA). This could lead to reputational backlash within the developer community that Skillsync depends on for its data, or regulatory challenges in certain markets.

**Incumbent response at scale:** SeekOut ($189M raised, $25.2M revenue) and HireEZ ($26M raised) have existing recruiter customer bases and could add code-analysis features as an extension of their platforms. LinkedIn, which owns the dominant professional graph and has access to GitHub data through Microsoft, is a latent competitive threat with distribution advantages that would be difficult to overcome.

**Product positioning uncertainty:** The June 2025 Product Hunt launch positioned the product as "Discover hidden talent in your codebase" (internal team analytics), while the current YC positioning is "Find anyone in open source" (external recruiting). This shift suggests the company may still be iterating on its core use case and target buyer, which introduces execution risk around product-market fit.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $198.8B IT recruitment market (Business Research Insights, 2025, via search snippet); $2.38B recruitment software market (IMARC Group, 2024, 4.9% CAGR, via search snippet) |
| SAM | No public data found |
| Traction | YC W26 batch; Product Hunt launch June 2025, 3 upvotes (producthunt.com/products/skillsync-3 via search snippet); No public user or revenue metrics |
| Revenue Signal | Pricing: Free tier, Pro $499/mo/seat, Enterprise custom, $3/deep profile credit (app.skillsync.wiki). No disclosed revenue. |
| Founders | Narayana Aaditya Ganeshkumar (CEO): NIT Trichy, XLRI Jamshedpur, ex-Juspay PM (Hyperswitch). Nishant Joshi (CTO): ex-Juspay Rust dev, top 1% Rust, SIH 2022 Grand Finalist. |
| Competitors | SeekOut ($189M raised, $25.2M ARR 2024, profile aggregation across 700M+ profiles vs. code-based); HireEZ ($26M raised, revenue unknown, open-web NLP sourcing vs. code analysis); Entelo ($44.4M raised, $35M revenue 2024, diversity-focused profile matching vs. code-based) |
| Moat Signals | Structured skill-profile dataset built from code analysis; founders' direct open-source community experience (Hyperswitch, 40.3K stars). No patents or proprietary data sources identified. |
| Risk Factors | GitHub API dependency, developer privacy/consent concerns, brand name disambiguation, incumbent response (SeekOut/LinkedIn), product positioning still iterating |
| Founder Reach | Narayana Aaditya: Twitter @narsagna (count not retrievable), LinkedIn linkedin.com/in/narayanaaaditya/. Nishant Joshi: Twitter not confirmed, LinkedIn linkedin.com/in/nishantjosh/, GitHub 182 followers + 271 stars (shelgon) |
| Distribution Signals | Product Hunt launch June 2025 (3 upvotes); YC Launch page (ycombinator.com/launches/PAP); GitHub org skillsynchq (3 followers, no public repos) |
