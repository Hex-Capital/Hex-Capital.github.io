# Velum Labs

> Firewall that controls access to information across AI and humans

| Field | Value |
|-------|-------|
| Website | https://www.velum-labs.com/ |
| YC Page | https://www.ycombinator.com/companies/velum-labs |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Security, Open Source, Privacy |

## The Idea

**Problem:** Enterprises increasingly expose sensitive data through AI workflows (LLM prompts, RAG retrievals, agent actions) and traditional enterprise systems (Salesforce exports, SAP syncs, Workday reports). Existing access controls operate at the document or database level rather than the content level — they gate access to entire files or tables rather than to specific sensitive fields within them. As organizations adopt LLMs, copilots, and AI agents across their stacks, the attack surface for data leakage expands to every prompt, response, and retrieval. Current approaches require either blocking workflows entirely or accepting the risk of sensitive data exposure.

**Approach:** Velum is an open-source firewall that sits between data sources and data consumers (LLMs, users, vendors) to enforce content-level access control in real time. Rather than blocking access to entire documents or tables, the system understands meaning in text, documents, and databases to detect sensitive information — PII, PHI, financial data, trade secrets — based on admin-defined policies written in natural language. It then applies recipient-specific controls (redaction, tokenization, or just-in-time reveal for authorized recipients) without blocking workflows. The product uses an ontology-based approach: admins define entities, relationships, and rules that form the semantic layer for policy enforcement (velum-labs.com). For AI workflows specifically, Velum intercepts prompts, responses, and retrievals to prevent sensitive information from leaking into or out of models (YC company page). The company also offers structure-preserving tokenization for high-throughput pipelines, where tokenized data can be revealed just-in-time when authorization changes (YC company page).

**Differentiation:** Velum differentiates from LLM security tools like Lakera (prompt injection and jailbreak detection) and Noma Security (AI governance across the full model lifecycle) by focusing specifically on content-level access control and data redaction across both AI and traditional enterprise systems. Lakera's primary focus is detecting and blocking malicious prompts before they reach the LLM; Velum's focus is controlling what data each recipient can see based on policy. Securiti AI offers context-aware LLM firewalls but was acquired by Veeam in October 2025 (Securiti press release, 2025) and is part of a broader data privacy platform rather than a standalone content firewall. Lasso Security focuses on shadow AI discovery and monitoring rather than real-time content-level redaction. Velum's open-source positioning also differentiates it from these primarily proprietary competitors.

**Business Model:** No public pricing page was found on velum-labs.com at the time of research. The website indicates the company is actively recruiting design partners for early access. [Inferred]: The most likely monetization path is an open-core model — open-source core with paid enterprise features such as multi-cloud deployment, SOC 2 compliance tooling, configurable data residency per tenant, and enterprise integrations (SAP, Salesforce, Workday) — consistent with the company's "Open Source" tag and enterprise-grade feature set described on the website.

**TAM/SAM:** The global AI Firewall for LLMs market was valued at $410 million in 2024 and is projected to reach $3.2 billion by 2033, at a 25.4% CAGR (ResearchIntelo, 2024 via search snippet). The broader AI cybersecurity market is forecast to reach $134 billion by 2030 (LLM Stats / Hostinger, 2026 via search snippet). No SAM estimate specific to content-level access control for enterprise AI was found.

**GTM / Distribution:** The company website states it is recruiting design partners (velum-labs.com). [Inferred]: The most likely initial distribution path is direct enterprise sales to security and compliance teams at organizations with regulated data (healthcare, finance, legal) that are actively deploying LLMs and AI agents. The open-source component could serve as a developer adoption funnel, converting self-serve users to paid enterprise tiers.

## Defensibility

The ontology-based approach to content-level access control requires building semantic models that understand what data means across different enterprise systems — not just pattern-matching for known PII formats. As customers deploy Velum and define policies across their specific data environments, the accumulated policy library and ontology mappings create switching costs. The open-source positioning could generate a developer community and ecosystem of integrations that create network effects over time.

However, no public data on open-source community size, contributor count, or GitHub stars for the core product was found. The company's GitHub organization for the product (distinct from unrelated entities using the "velumlabs" name — see Key Risks) did not surface public repositories with traction metrics at the time of research.

**Market structure:** Large incumbents (e.g., Microsoft, Google Cloud) offer data loss prevention (DLP) tools but these operate at the document/file level rather than content-semantic level and are optimized for their own platforms. Extending existing DLP to content-level semantic understanding across heterogeneous enterprise systems (SAP, Salesforce, Workday) and AI workflows would require a fundamental architectural change. Additionally, incumbent security vendors that have acquired AI security startups — Check Point acquired Lakera, Veeam acquired Securiti — tend to integrate these as features within broader platforms rather than building dedicated, standalone content-level firewalls. [Inferred]: This integration-as-feature approach may create an opportunity for a focused, open-source alternative that works across the full stack rather than being locked to one vendor's ecosystem.

**Commoditization risk:** The core capabilities — NLP-based sensitive data detection, policy-based redaction, tokenization — are individually reproducible using commodity ML models and existing PII detection libraries. The differentiator is the integration layer across enterprise systems and the ontology engine, which requires significant enterprise integration work. Well-funded competitors (Noma Security at $132M, or incumbent cybersecurity vendors) could build similar functionality. The open-source strategy may provide some defensibility through community adoption but has not yet demonstrated traction.

## Market & Traction

**Traction signals:** The company is in the design partner recruitment phase (velum-labs.com). No public revenue figures, user counts, or growth metrics were found. No Product Hunt launch was identified. No Chrome Web Store extension or mobile app was found. No Discord or Slack community was identified. The LinkedIn company page is at linkedin.com/company/velum-labs-ai (LinkedIn search result). No company Twitter/X account was identified distinct from the founders' personal accounts. No job postings were found beyond the 2-person founding team — the YC page indicates the company is not currently hiring.

**Competitive landscape:**

- **Lakera** ($30M total raised; acquired by Check Point Software, 2025 — TechCrunch, Jul 2024; BankInfoSecurity, 2025): Focuses on prompt injection detection and jailbreak prevention for LLM applications. Differentiator vs. Velum: Lakera is primarily an inbound threat detection tool (blocking malicious prompts) rather than a content-level access control system for outbound data exposure.

- **Noma Security** ($132M total raised, 1,300% ARR growth year-over-year — Noma Security press release, Jul 2025): Full-lifecycle AI security and governance platform covering models, data pipelines, SaaS applications, LLMs, and autonomous agents. Differentiator vs. Velum: Noma is a broader AI governance platform; Velum is focused specifically on content-level access control and data redaction.

- **Lasso Security** ($6M seed — PRNewswire, Nov 2023): GenAI cybersecurity platform with Shadow AI Discovery, LLM data-flow monitoring, and real-time detection. Differentiator vs. Velum: Lasso focuses on visibility and monitoring of AI usage across the organization, while Velum focuses on policy enforcement and data redaction at the content level.

- **Securiti AI** ($156M total raised; acquired by Veeam, Oct 2025 — Securiti press releases): Offered context-aware LLM firewalls for prompts and responses, plus a retrieval firewall for RAG. Differentiator vs. Velum: Securiti was part of a broader data privacy and governance platform; now absorbed into Veeam's portfolio, its standalone positioning has changed.

**Why now:** [Inferred]: The rapid enterprise adoption of LLMs, AI copilots, and agentic AI systems in 2024-2025 has created a new category of data exposure risk that traditional DLP tools were not designed to handle. Specifically: (1) the proliferation of RAG architectures means enterprise data is being retrieved and fed to LLMs in real time, creating content-level exposure at every query; (2) regulatory pressure (GDPR, CCPA, HIPAA) is intensifying enforcement around AI-mediated data processing; (3) the AI security market has only ~13 specialized companies with $414 million total funding (Software Strategies Blog, Dec 2025 via search snippet), indicating early-stage market formation; (4) major acqui-hires (Check Point/Lakera, Veeam/Securiti) in 2025 have removed two standalone competitors, potentially opening space for a new entrant.

## Founders & Team

**Benjamin Muñoz-Cerro** — Co-founder & CEO
- Physics and Mathematics at Stanford University (listed on Stanford Physics Department for Academic Year 2021-22) (physics.stanford.edu)
- Research in quantum computing, with collaborations involving BlueQubit and Quantinuum teams (LinkedIn via search snippet)
- Member of the OpenDACS organization on GitHub (open hardware DAC-ADC projects)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/benjamzc/ — headline: "Physics & Math @ Stanford" (LinkedIn via search snippet)
- GitHub: github.com/benjamzc — 5 repos, 1 star, 1 follower

**Alen Rubilar-Muñoz** — Co-founder & CTO
- B.Sc. Computer Science and Mathematics, Minerva University (2022–2026) (000alen.com)
- Prior studies at Pontificia Universidad Católica de Chile and Universidad Técnica Federico Santa María (000alen.com)
- Principal Software Engineer at Dataroot (ML PaaS for managed machine learning applications) (LinkedIn)
- ML/Software Intern at Tetramem (analog in-memory compute hardware) (GitHub bio)
- Deep learning research at Vanderbilt University (protein folding, structural biology) (000alen.com)
- Topological neural networks research at Leipzig University (molecule optimization) (000alen.com)
- Hackathon wins: CalHacks overall winner (PulseBud, a seizure prediction system); HackMIT Inclusive Workplace Challenge winner (Phaedra); Samsung Solve for Tomorrow regional finalist (TotemUV, UV-based skin cancer prediction) (000alen.com, GitHub)
- Twitter/X: @000alen (count not retrievable due to JavaScript rendering)
- LinkedIn: linkedin.com/in/000alen/
- GitHub: github.com/000alen — 77 repos, 599 stars total, 50 followers. Pinned repos include "ontology" (TypeScript, data ontology) and "capstone" (SO(n)-equivariant neural networks)

**Co-founder relationship:** Both founders have Chilean surnames and prior academic connections in Chile (Benjamin studied at Stanford but both have Chilean educational roots — Alen studied at Pontificia Universidad Católica de Chile). The shared Chilean background and geographic overlap suggest prior acquaintance, though no specific shared employer or institution was confirmed from public data.

**Founder-market fit:** Alen Rubilar-Muñoz's background is directly relevant to the product: his principal engineering role building a managed ML PaaS at Dataroot, deep learning research at Vanderbilt and Leipzig, and his pinned GitHub repo "ontology" (a TypeScript data ontology project) align with building an ontology-based content-level firewall. His Minerva University education (a global rotation program) and work across multiple countries suggest exposure to data residency and compliance challenges. Benjamin Muñoz-Cerro's physics and mathematics background at Stanford provides a quantitative foundation, though his published work in quantum computing is less directly aligned with the AI data security domain. The website lists research affiliations at Harvard, Stanford, Vanderbilt, Leipzig, Minerva, and Max Planck Institutes (velum-labs.com). No advisors, board members, or notable angel investors were identified in public sources.

## Key Risks

**Brand disambiguation challenge:** At least three unrelated entities use the "Velum Labs" name: (1) Velum Labs Sdn Bhd, a Malaysian cybersecurity company at velumlabs.com; (2) a GitHub organization at github.com/velumlabs focused on AI agents and cryptocurrency (Thor Framework) based in Milwaukee, WI; (3) a cybersecurity intelligence firm listed on cybersecurityintelligence.com. Additionally, the similarly named "Vellum" (vellum.ai, YC W23, $25M+ raised) is a well-funded AI development platform that dominates search results for adjacent queries. This creates SEO competition and potential customer confusion.

**Well-funded incumbent competition:** The AI security market has seen rapid consolidation and capital inflows. Noma Security raised $132M and reports 1,300% ARR growth (Noma Security, Jul 2025). Check Point acquired Lakera (2025), and Veeam acquired Securiti ($156M raised) in October 2025. Velum is entering this market with $500K against competitors with 100–300x more capital and established enterprise sales motions.

**Product positioning ambiguity:** The company's website currently describes Velum as "The ontology engine for enterprise AI" with ontology construction and data contract features, while the YC page and company description position it as an "open-source firewall for content-level access control." The blog references "The Dynamic Data Firewall for your Unstructured Data." These different framings may reflect product evolution or a pivot in progress, but could create market positioning confusion for prospective customers and partners.

**Open-source traction risk:** The company is tagged "Open Source" and the YC description references an open-source firewall, but no public GitHub repository for the core product was found with visible star counts or community activity at the time of research. Open-source businesses depend on community adoption as a distribution mechanism; without a visible public repo gaining traction, the open-source strategy remains unvalidated.

**Enterprise integration complexity:** The website claims support for 50+ enterprise systems including SAP, Oracle, Salesforce, and ServiceNow, and claims SOC 2 Type II certification (velum-labs.com). For a 2-person team founded in 2025, building and maintaining 50+ production-quality enterprise integrations and achieving SOC 2 Type II compliance represents a significant scope of work. These claims could not be independently verified.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $410M AI Firewall for LLMs market in 2024, projected $3.2B by 2033 at 25.4% CAGR (ResearchIntelo, 2024 via search snippet) |
| SAM | No public data found |
| Traction | Recruiting design partners (velum-labs.com). No public user counts, revenue, or growth metrics found |
| Revenue Signal | No public data found |
| Founders | Benjamin Muñoz-Cerro (CEO): Stanford Physics & Math, quantum computing research. Alen Rubilar-Muñoz (CTO): Minerva CS & Math, ex-Dataroot Principal SWE, ML research at Vanderbilt/Leipzig, CalHacks overall winner |
| Competitors | Noma Security ($132M raised, 1,300% ARR growth, broader AI governance platform vs. content-level focus); Lakera ($30M raised, acquired by Check Point, prompt injection focus vs. data redaction focus); Lasso Security ($6M raised, revenue unknown, shadow AI monitoring vs. policy enforcement); Securiti AI ($156M raised, acquired by Veeam, broader data privacy platform vs. standalone firewall) |
| Moat Signals | No public data found. Ontology-based approach and open-source strategy could develop switching costs and community effects if adoption materializes |
| Risk Factors | Well-funded competitors (Noma $132M, incumbents acquiring AI security startups), brand disambiguation with 3+ same-name entities plus similarly named Vellum, product positioning ambiguity across website and YC description |
| Founder Reach | Benjamin Muñoz-Cerro: Twitter not found, LinkedIn (linkedin.com/in/benjamzc/), GitHub 1 star. Alen Rubilar-Muñoz: Twitter @000alen (count not retrievable), LinkedIn (linkedin.com/in/000alen/), GitHub 599 stars |
| Distribution Signals | No public data found. No Product Hunt launch, no app store presence, no community channels identified |
