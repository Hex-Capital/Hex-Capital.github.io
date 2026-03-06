# Velum Labs

> The OS for data quality across any stack

| Field | Value |
|-------|-------|
| Website | https://www.velum-labs.com/ |
| YC Page | https://www.ycombinator.com/companies/velum-labs |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Data Engineering |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** Enterprise data teams lack automated, stack-agnostic mechanisms to enforce data quality from ingestion through to executive dashboards. Data contracts — rules governing schema, semantics, and integrity — are typically written manually, break when schemas drift, and do not trace lineage across heterogeneous stacks (warehouses, pipelines, SaaS systems, documents). Existing solutions require migration to a specific platform or manual rule authorship. The customer segment is data engineering and analytics teams at enterprises running federated or multi-system data architectures.

**Approach:** Velum describes itself on its website as "the ontology engine for enterprise AI" and on its YC page as "the operating system for data quality" (YC page, velum-labs.com). The product observes real data traffic to automatically derive data contracts, traces lineage across any stack, and enforces integrity without manual rules or migration. Specific technical mechanisms include: zero-shot Named Entity Recognition (NER) for entity extraction from documents, LLM-powered relationship discovery, automatic hypergraph construction, schema mapping to domain ontologies from databases, and data contract generation from ontology definitions (velum-labs.com). The company claims pre-built extractors for 50+ enterprise systems including SAP, Oracle, Salesforce, and ServiceNow (velum-labs.com). The company also states SOC 2 Type II certification (velum-labs.com).

**Product evolution note:** The company's GitHub repositories and YC page title reference an earlier product direction — an "open-source firewall for content-level access control across documents, databases, and applications" built on homomorphic encryption (GitHub velum-labs org; YC page title). GitHub repos include forks of Microsoft SEAL (homomorphic encryption library), EVA (SEAL compiler), and GPU-accelerated homomorphic encryption tools (GitHub velum-labs org). The current website positioning ("ontology engine for enterprise AI") and the YC page description ("operating system for data quality") appear to represent a pivot from the earlier privacy/access-control firewall product. The flagship "Firewall" repo on GitHub has 1 star (GitHub velum-labs org).

**Differentiation:** Existing data observability tools like Monte Carlo or Bigeye focus on anomaly detection and monitoring in data warehouses but require configuration and operate primarily on structured warehouse data. Open-source frameworks like Great Expectations and Soda require engineers to write validation rules manually. Atlan provides a governance/catalog layer but is not an automated contract derivation engine. Velum's claimed differentiation is: (1) automatic contract derivation from observed data traffic (no manual rules), (2) ontology-first approach using LLM-powered entity and relationship extraction across both documents and databases, and (3) no migration required — works across the existing stack via pre-built extractors (velum-labs.com).

**Business Model:** No pricing page or pricing tiers are publicly visible on velum-labs.com. The company is currently recruiting design partners for early access (velum-labs.com). [Inferred]: Most likely monetization path is SaaS subscription (likely usage- or seat-based) for enterprise customers, given the enterprise positioning, SOC 2 certification, and design-partner GTM approach.

**TAM/SAM:** The data observability market was valued at $3.15B in 2025 with a projected CAGR of 11.60% to reach $5.45B by 2030 (Mordor Intelligence via search snippet). An alternative estimate sizes the market at $1.91B in 2025 growing to $6.94B by 2034 at 15.39% CAGR (Market Research Future via search snippet). The enterprise data observability software sub-segment was valued at $1.5B in 2025 (Future Market Insights via search snippet). No public SAM estimate specific to ontology-based data quality or automated contract derivation was found.

**GTM / Distribution:** The company is actively recruiting design partners for early access (velum-labs.com). Early pilots are planned with hospitals, banks, and government teams sourced from early-access signups and founder/YC networks (FYI Combinator via search snippet). [Inferred]: Next-phase distribution likely involves standardized 30-90 day pilot programs, referrals, and partnerships with security/privacy consultancies and vertical software vendors, consistent with enterprise data infrastructure sales motions.

## Defensibility

The company's GitHub repos show technical work in homomorphic encryption, ontology construction, and NER — areas requiring specialized ML and cryptography expertise. The ontology-first approach, if adopted by enterprise customers, would create switching costs: once an organization's data contracts and lineage are defined through Velum's ontology layer, migrating to another system would require re-deriving those semantic models. The 50+ pre-built enterprise extractors represent integration surface area that takes time to replicate.

No network effects are evident at this stage. No patents were found in public sources. The SOC 2 Type II certification is a compliance moat for enterprise sales but is achievable by well-resourced competitors.

**Market structure:** Monte Carlo ($236M raised, $1.6B valuation) and Atlan ($206M raised) are the most well-funded incumbents. Monte Carlo's approach centers on anomaly detection and monitoring rather than ontology-driven contract generation; pivoting to an ontology-first architecture would require a fundamental product redesign. Atlan operates as a metadata catalog and governance layer, not a real-time data traffic observer. [Inferred]: The structural barrier for incumbents is architectural — retrofitting anomaly-detection or catalog-based products with automatic ontology derivation from live data traffic is non-trivial and would cannibalize their existing rule-based or monitoring-based value propositions.

**Commoditization risk:** The core technical components (NER, LLM-powered relationship extraction, schema mapping) use broadly available ML techniques. Open-source tools like Great Expectations already provide rule-based data validation. A well-resourced data platform company (e.g., Databricks, Snowflake) could build ontology-based features as add-ons to their existing platforms. The main barrier is the integration work across 50+ enterprise systems and the domain-specific ontology models.

## Market & Traction

**Traction signals:**
- Funding: $500K total raised (Extruct AI via search snippet). YC standard deal.
- The company is in design-partner recruitment phase with no publicly disclosed customers, revenue, or user counts (velum-labs.com).
- GitHub organization (github.com/velum-labs): 12 repositories, 2 followers. Flagship "Firewall" repo: 1 star (GitHub).
- LinkedIn: linkedin.com/company/velum-labs-ai — follower count not retrievable.
- Twitter/X company account: No public account found.
- Product Hunt: No listing found.
- Press coverage: No coverage found in named publications.
- Discord/Slack community: No public data found.
- App store / Chrome extension: Not applicable.
- Job postings: Company is not currently hiring (YC page).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Velum Labs |
|---|---|---|---|
| Monte Carlo | $236M, Series E at $1.6B valuation (TechTarget, Oct 2025 via search snippet) | Revenue unknown | End-to-end data observability with anomaly detection; no-code, no-extract architecture. Monitors warehouses and pipelines rather than deriving ontologies. |
| Atlan | $206M, Series C at $750M valuation (TechCrunch, May 2024 via search snippet) | $14.5M annual revenue as of Mar 2024 (Tracxn via search snippet) | Active metadata platform combining data quality, governance, and discovery in one control plane. Catalog-centric vs. Velum's ontology-centric approach. |
| Soda | $28.43M, Series B (TechTarget, Jul 2024 via search snippet) | Revenue unknown | Open-source data quality testing framework (Soda Core) + SaaS control plane (Soda Cloud). Code-defined checks embedded in DataOps workflows vs. Velum's automatic derivation. |
| Great Expectations | $65M total (TechCrunch, 2022 via search snippet) | Revenue unknown | Open-source data validation framework with the largest community adoption for rule-based checks. Requires manual rule authoring vs. Velum's automated approach. |
| Bigeye | $71–73.5M total (VentureBeat via search snippet) | $7.2M revenue in 2025 (Latka via search snippet) | Data observability and AI trust platform with automated monitoring. Recently launched bigAI suite for AI-powered resolution and prevention. |

**Why now:** [Inferred]: Several converging factors: (1) LLM capabilities have reached the performance threshold needed for reliable zero-shot NER and relationship extraction, making automatic ontology derivation technically feasible at enterprise scale — this was not practical before 2023-era foundation models; (2) the proliferation of data mesh architectures has increased demand for federated data contracts across heterogeneous systems; (3) the rapid adoption of enterprise AI has elevated data quality from a "nice-to-have" engineering concern to a boardroom-level requirement, as model outputs are only as reliable as their input data.

## Founders & Team

**Benjamin Muñoz-Cerro** — Co-founder & CEO
- Undergraduate in Physics & Math at Stanford University (Stanford Profiles)
- YC bio: "stanford quantum computing | harvard physics" (YC page)
- Research affiliations listed on company website include Harvard, Stanford, and Max Planck Institutes (velum-labs.com)
- No prior startup exits found
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/benjamzc/ — "Physics & Math @ Stanford" (LinkedIn via search snippet)
- GitHub: No public repos found under his name

**Alen Rubilar-Muñoz** — Co-founder & CTO
- B.Sc. Computer Science & Mathematics, Minerva University (2022–2026) (GitHub profile)
- Prior: Principal Software Engineer at Dataroot (managed ML application platform); ML/Software Intern at Tetramem (analog in-memory compute hardware) (GitHub profile)
- CalHacks overall winner; HackMIT participant (Phaedra project for neuro-inclusive AI) (Devpost via search snippet; LinkedIn via search snippet)
- Research focus: topological neural networks, SO(n)-equivariant models, privacy-preserving inference (GitHub profile)
- Twitter/X: x.com/000alen — follower count not retrievable
- LinkedIn: linkedin.com/in/000alen/ — "Velum Labs" (LinkedIn via search snippet)
- GitHub: github.com/000alen — 80 repositories, 50 followers. Pinned repos include "ontology" (TypeScript, data ontology implementation), "capstone" (SO(n) equivariant neural networks), "PulseBud" (seizure prediction, 5 stars), "diagnostika" (graph theory + representation learning for medical diagnosis) (GitHub)

**Co-founder relationship:** Both founders share Chilean-origin surnames (Rubilar-Muñoz / Muñoz-Cerro), suggesting possible familial connection or shared cultural background. No shared employer or university was identified from Phase 3 findings — Benjamin attended Stanford while Alen attended Minerva University; no overlapping prior employers were found.

**Founder-market fit:** Alen's background as a principal ML engineer at Dataroot (an ML platform), his research in topological neural networks and privacy-preserving inference, and his "ontology" pinned GitHub repo directly relate to Velum's core technical problem of automated ontology construction and data contract derivation. Benjamin's physics background at Stanford and quantum computing research indicate strong quantitative and systems-thinking capability. The team's research affiliations with Max Planck Institutes add academic depth in ML and systems.

## Key Risks

**Product direction instability:** The company has publicly presented at least three different product framings: (1) a homomorphic-encryption-based firewall for content-level access control (YC page title, GitHub repos), (2) an "operating system for data quality" with automated contracts and lineage (YC page description), and (3) "the ontology engine for enterprise AI" (current website). Multiple pivots at the pre-launch stage indicate the product-market fit hypothesis is still being refined. The GitHub org's repos are predominantly forks of homomorphic encryption libraries from the prior product direction, with the flagship "Firewall" repo at 1 star.

**Brand confusion with multiple "Velum Labs" entities:** At least two other companies use the "Velum Labs" name: Velum Labs Sdn Bhd, a Malaysian cyber intelligence company at velumlabs.com, and a separate crypto/AI framework company at github.com/velumlabs. The YC company uses velum-labs.com (hyphenated). This creates SEO, brand recognition, and due diligence confusion.

**Incumbent platform risk:** Snowflake, Databricks, and dbt Labs are actively building data quality and governance features natively into their platforms. Snowflake's Horizon governance suite and Databricks' Unity Catalog already include data quality monitoring. If ontology-based contract derivation proves valuable, these platforms could integrate similar capabilities as native features, reducing the need for a standalone tool.

**Enterprise sales cycle vs. team capacity:** The company targets hospitals, banks, and government teams (FYI Combinator via search snippet) — verticals with long procurement cycles, compliance requirements, and proof-of-concept demands. With a 2-person team and $500K in funding, sustaining multiple concurrent enterprise pilots while iterating on product is a significant operational constraint.

**Technical feasibility at scale:** Automatic ontology derivation via LLM-powered NER and relationship extraction across 50+ heterogeneous enterprise systems requires high accuracy to generate trustworthy data contracts. False positives in contract derivation could undermine the core value proposition of "data trust you can prove." No public benchmarks, accuracy metrics, or case studies validating this approach at enterprise scale were found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Data observability market: $3.15B in 2025, 11.60% CAGR to $5.45B by 2030 (Mordor Intelligence via search snippet). Alternative: $1.91B in 2025, 15.39% CAGR to $6.94B by 2034 (Market Research Future via search snippet). |
| SAM | Enterprise data observability software: $1.5B in 2025 (Future Market Insights via search snippet). No ontology-specific sub-segment estimate found. |
| Traction | Design-partner recruitment phase; no disclosed customers or users (velum-labs.com). GitHub org: 12 repos, 2 followers, flagship repo 1 star (GitHub). |
| Revenue Signal | No public data found. No pricing page. Pre-revenue design-partner stage (velum-labs.com). |
| Founders | Benjamin Muñoz-Cerro (CEO): Physics & Math undergraduate at Stanford, quantum computing & Harvard physics background. Alen Rubilar-Muñoz (CTO): BS CS & Math at Minerva, Principal SWE at Dataroot, ML intern at Tetramem, CalHacks overall winner. |
| Competitors | Monte Carlo ($236M raised, revenue unknown, end-to-end observability). Atlan ($206M raised, $14.5M revenue, metadata catalog + governance). Soda ($28.43M raised, revenue unknown, open-source data quality testing). Great Expectations ($65M raised, revenue unknown, open-source validation framework). Bigeye ($71–73.5M raised, $7.2M revenue, observability + AI trust). |
| Moat Signals | Ontology-first architecture differentiates from anomaly-detection incumbents; 50+ pre-built enterprise extractors represent integration surface area; SOC 2 Type II certification (velum-labs.com). |
| Risk Factors | Multiple product pivots pre-launch, brand confusion with other "Velum Labs" entities, incumbent platform integration risk (Snowflake/Databricks), enterprise sales cycle vs. 2-person team |
| Founder Reach | Benjamin Muñoz-Cerro: Twitter not found, LinkedIn linkedin.com/in/benjamzc/, GitHub not found. Alen Rubilar-Muñoz: Twitter x.com/000alen (count not retrievable), LinkedIn linkedin.com/in/000alen/, GitHub github.com/000alen (50 followers, 80 repos). |
| Distribution Signals | No Product Hunt listing. No press coverage. No community (Discord/Slack) found. LinkedIn company page exists (follower count not retrievable). Currently in design-partner recruitment. |
| Emails | No public data found |
