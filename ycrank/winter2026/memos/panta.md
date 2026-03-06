# Panta

> Commercial insurance brokerage run by AI agents. Scales like software.

| Field | Value |
|-------|-------|
| Website | https://pantainsure.com |
| YC Page | https://www.ycombinator.com/companies/panta |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech -> Insurance |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Insurance, AI |
| YC Partner | Gustaf Alstromer |
| Emails | vincent@pantainsure.com, support@pantainsure.com |

## The Idea

**Problem:** Businesses seeking commercial insurance — particularly in hard-to-place categories like construction, hazmat trucking, and manufacturing — wait weeks to obtain coverage. The $125B U.S. Excess & Surplus (E&S) insurance market (YC company page) relies on a "human API": armies of brokers manually bridging the gap between businesses and carriers through email threads, portal logins, form re-keying, and phone calls. Getting one E&S business insured involves approximately 50 steps over two weeks (YC company page). Traditional brokerages spend ~80% of their time on manual data entry, forcing them to scale linearly with headcount (YC company description). There are approximately 40,000 commercial insurance brokers in the U.S. earning ~$80B in revenue (Fondo/Fernstone launch post via search snippet).

**Approach:** Panta is a licensed commercial insurance brokerage that deploys autonomous AI agents to perform the end-to-end back-office work of a human broker. These AI agents run on physical Mac Mini infrastructure and operate across real file systems, carrier portals, email, and phone systems — handling submissions, follow-ups, certificate generation, service requests, and renewals (YC company page). Rather than selling software tools to existing brokers, Panta became a brokerage itself with a California Surplus Lines Broker license (#4512382) (company website) and claims licensing in all 50 states (company website). The company claims access to 100+ A-rated carriers across admitted, wholesale, and E&S channels (company website).

**Differentiation:** Panta's approach differs from competitors in several ways:
- Unlike **Newfront** (acquired by WTW for $1.3B in Dec 2025), which was a modern brokerage with a human-heavy model and technology layer, Panta aims to eliminate human data entry entirely with autonomous agents.
- Unlike **COVU** ($50M total funding), which combines AI automation with operational outsourcing to support existing agencies, Panta is the brokerage itself rather than an agency tool.
- Unlike **Acolite** (YC), which builds AI "teammates" that assist human agents with submissions and COIs, Panta operates as the autonomous broker end-to-end.
- Unlike **Fernstone** (YC), which uses AI + licensed brokers-in-the-loop, Panta positions its agents as fully autonomous rather than human-assisted.
- **Harper** (YC W25, $47M raised) is the closest comparable — also an AI-native licensed brokerage — but focuses on small-to-mid-sized businesses broadly, while Panta emphasizes the harder-to-place E&S/specialty market (construction, oil & gas, hazmat).

**Business Model:** No pricing page is publicly available. Panta operates as a licensed brokerage, so [Inferred]: the most likely monetization path is earning broker commissions on placed policies (typically 10-15% of premium in commercial lines), consistent with the standard brokerage revenue model. The company's thesis is that by eliminating manual data entry, it operates with "significantly higher margins" — a service business with software economics (YC company description). One anecdotal data point: Panta claims to have undercut a traditional broker quote by 38% ($31K vs. $50K) on a complex placement (Founderland article).

**TAM/SAM:** The U.S. E&S insurance market reached approximately $135B in direct premiums written in 2024, growing 12.5% year-over-year (Insurance Insider US via search snippet). The broader U.S. insurance brokerage market was valued at approximately $80B in 2024 (Precedence Research via search snippet; Markets and Data via search snippet), with estimates ranging up to $140B depending on methodology and scope (Mordor Intelligence via search snippet). The E&S segment has posted seven consecutive years of double-digit growth (Carrier Management via search snippet). SAM: [Inferred]: Panta's serviceable market is the specialty/E&S commercial brokerage segment for hard-to-place risks in industries like construction, logistics, manufacturing, and energy — a subset of the $125-135B E&S premium market.

**GTM / Distribution:** Panta's website features a "Get a Quote" flow requesting coverage type and business zip code, with an insurance import function for businesses switching from existing brokers (company website). The company targets construction, logistics, manufacturing, agriculture, cannabis, and oil & gas sectors (company website; Founderland article). [Inferred]: The most likely distribution path at this stage is direct-to-business digital acquisition through online quoting, supplemented by referrals from businesses in hard-to-place categories underserved by traditional brokers. The speed advantage (claimed 10x faster turnaround) serves as the primary acquisition hook for businesses frustrated by slow traditional placement.

## Defensibility

**Data and operational moat:** Each policy placed generates structured data on carrier appetite, pricing, and underwriting requirements across specific risk categories. Over time, this creates a proprietary dataset on which carriers accept which risks at what price — intelligence that is difficult for new entrants to replicate. The autonomous agent infrastructure (carrier portal integrations, document processing workflows, underwriting logic) compounds in complexity as more carrier relationships and coverage lines are added.

**Licensing as a barrier:** Operating as a licensed brokerage in all 50 states creates a regulatory barrier to entry; obtaining and maintaining these licenses requires compliance infrastructure that pure-software competitors cannot bypass.

**Switching costs:** Once a business has its policies placed through Panta, renewal cycles (typically annual) and the complexity of transferring coverage mid-term create natural retention. The broker of record has information advantages on the client's risk profile.

**Market structure:** Traditional brokerages face a structural barrier to adopting Panta's model: their revenue depends on human headcount, and automating the back-office would cannibalize their existing workforce and operating model. Large brokerages (Marsh, Aon, WTW) are also optimized for large enterprise accounts and face sales channel conflict in serving the long tail of complex small/mid-market risks where Panta focuses.

**Commoditization risk:** Harper (YC W25, $47M raised, 5,000+ businesses served) is building a directly comparable AI-native brokerage. Fernstone (YC) and Acolite (YC) approach adjacent problems. Well-funded insurtech incumbents or traditional brokerages acquiring AI capabilities could also enter this space. The core technology (LLM-based agents navigating portals and handling documents) is not unique — the defensibility depends more on the accumulated carrier relationship data, placement volume, and speed of execution than on the underlying AI architecture.

## Market & Traction

**Traction signals:**
- 127 customer reviews with a 4.9/5 rating (company website, as of research date)
- "Hundreds of businesses" described as having switched to Panta (company website)
- Licensed in all 50 states; California Surplus Lines Broker License #4512382 (company website)
- In production since approximately December 2025; launched January 2026 (Founderland article)
- "Multiple commercial policies" bound in San Francisco within first month of operation (Founderland article)
- 99% placement rate claimed (company website)
- Anecdotal win: undercut traditional broker quote by 38% ($31K vs. $50K); autonomously placed complex oil/gas laboratory coverage (Founderland article)
- Twitter/X: Company account not identified; founder Vincent Chen @dsdvincent (follower count not retrievable due to JavaScript rendering)
- LinkedIn: linkedin.com/company/pantainsure (follower count not retrievable)
- Product Hunt: No launch found
- GitHub: github.com/Panta-Insure listed on YC page; no public repositories found
- No mainstream tech or insurance publication press coverage found as of March 2026

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Panta |
|------------|---------|------------------------------|
| **Harper** (YC W25) | $47M (seed + Series A, Feb 2026) (TechCrunch) | Targets small-to-mid-sized businesses broadly (daycares, restaurants, dealerships); 5,000+ businesses served in 13 months; broader SMB focus vs. Panta's E&S/specialty emphasis |
| **Fernstone** (YC) | No public data found | AI + licensed brokers-in-the-loop model (human review before binding); 100+ businesses; targets construction and security |
| **Newfront** | $312M raised; acquired by WTW for $1.3B (Dec 2025) (Getlatka; Crunchbase via search snippet) | Modern brokerage with human-heavy model plus technology layer; $300M revenue in 2024 (Getlatka via search snippet); validates market but not the autonomous approach |
| **COVU** | ~$50M total funding ($22M Series A + $16M additional) (BusinessWire, Aug 2025) | Sells AI automation and operational outsourcing to existing agencies rather than operating as a brokerage; grew 3-4x in past year |
| **Acolite** (YC) | No public data found | Builds AI "teammates" for insurance agencies handling submissions/COIs; tool for existing agencies vs. Panta's full-stack brokerage model |

**Why now:**
- [Inferred]: The enabling change is the maturation of large language model agents capable of navigating complex, unstructured workflows — carrier portals, email negotiations, form completion — that were previously impossible to automate. Pre-2023 automation tools could handle structured data entry but not the judgment-intensive, multi-step, multi-channel workflows that define specialty insurance placement.
- The U.S. E&S market has experienced seven consecutive years of double-digit premium growth (Carrier Management via search snippet), reaching ~$135B in 2024 (Insurance Insider US via search snippet), increasing the volume of hard-to-place risks flowing through a broker workforce that scales linearly.
- Newfront's $1.3B acquisition by WTW (Dec 2025) and Harper's $47M raise (Feb 2026) signal institutional investor validation that technology-driven brokerages can capture meaningful market share.

## Founders & Team

**Vincent Chen** — Co-founder & CEO
- Former Machine Learning Engineer at Google (~3 years): led foundation model research for recommendation at Vertex AI; led NotebookLM Enterprise; shipped Ask Photos feature at Google I/O; deployed agentic AI systems to billions of users across NotebookLM and Google Photos; built large-scale recommendation systems used by Fortune 500 companies including Disney (YC page; search results via search snippet)
- Licensed commercial insurance broker (LinkedIn post via search snippet)
- Education: No public data found
- Twitter/X: [@dsdvincent](https://x.com/dsdvincent) — follower count not retrievable (JavaScript rendering)
- LinkedIn: [linkedin.com/in/zihong-chen](https://www.linkedin.com/in/zihong-chen/) — headline: "Google" (via search snippet)
- GitHub: No public repos found

**Frank Wang (Jiangda Wang)** — Co-founder & CTO
- Former Senior Full Stack Engineer at Apple (YC page)
- Top open-source contributor to the Rust and Gleam ecosystems (YC company description)
- Won first place at HackIllinois 2024, University of Illinois at Urbana-Champaign's premier collegiate hackathon (LinkedIn via search snippet)
- Licensed commercial insurance broker (LinkedIn post via search snippet)
- Education: University of Illinois at Urbana-Champaign (inferred from HackIllinois participation)
- Twitter/X: No public account found
- LinkedIn: [linkedin.com/in/jiangdawang](https://www.linkedin.com/in/jiangdawang/) — 500+ connections
- GitHub: github.com/Panta-Insure (company org; no public repos found)

**Co-founder relationship:** No shared employer (Google vs. Apple) or university overlap is visible from public data. No public data on how the co-founders met.

**Founder-market fit:** Vincent Chen's experience building agentic AI systems at Google (NotebookLM, Vertex AI) maps directly to the core technical challenge of creating autonomous agents that can navigate complex, multi-step insurance workflows. Frank Wang's full-stack engineering background at Apple and open-source systems expertise (Rust, Gleam) provides the infrastructure needed for reliable agent execution. Both founders obtained commercial insurance broker licenses, indicating direct domain immersion rather than reliance on hired domain expertise. The combination of AI/ML depth and systems engineering is well-matched to the challenge of building reliable autonomous agents operating across real carrier portals and file systems.

## Key Risks

**Direct competitor with significant funding lead:** Harper (YC W25) raised $47M in February 2026 (TechCrunch) and has served 5,000+ businesses in 13 months. Harper is building the same AI-native licensed brokerage model, with roughly 10x Panta's disclosed funding and a ~12-month head start on customer acquisition. Panta's differentiation on E&S/specialty focus may be insufficient to offset this gap if Harper expands into complex risks.

**Carrier relationship dependency:** Panta claims access to 100+ A-rated carriers but has not disclosed any carrier names (Founderland article). The brokerage model depends entirely on carrier willingness to accept submissions from an AI-operated entity. Carriers may impose additional scrutiny, restrict binding authority, or prefer brokerages with established human relationships and track records — particularly for the high-severity, complex risks in Panta's target segments.

**Regulatory and E&O exposure:** Operating as an autonomous AI brokerage across all 50 states creates regulatory risk. Only the California license (#4512382) has been independently verified (company website). Insurance regulators have not yet established clear frameworks for AI-operated brokerages, and adverse outcomes (claims disputes, coverage gaps from AI errors) could trigger regulatory scrutiny or E&O liability. The company has not disclosed its errors and omissions insurance coverage (Founderland article).

**Brand disambiguation:** "Panta" is a common word appearing in multiple contexts (a pan-genome analysis tool, music artists, various individuals). This creates SEO and brand recognition challenges in a trust-dependent industry where businesses search for brokers by name.

**Unverified traction metrics:** The company website claims 127 reviews at 4.9/5 and "hundreds" of businesses, but these metrics have no independent verification. The 99% placement rate and 50-state licensing claims have not been confirmed by third-party sources (Founderland article).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | U.S. E&S insurance market: ~$135B in 2024 premiums, 12.5% YoY growth (Insurance Insider US via search snippet); U.S. insurance brokerage market: ~$80B in 2024 (Precedence Research via search snippet) |
| SAM | [Inferred]: Specialty/E&S commercial brokerage for hard-to-place risks (construction, logistics, manufacturing, energy) — subset of $125-135B E&S premium market |
| Traction | 127 customer reviews, 4.9/5 rating (company website); "hundreds of businesses" switched (company website); in production since ~Dec 2025 (YC page); licensed in 50 states (company website); 99% placement rate claimed (company website) |
| Revenue Signal | No public data found. [Inferred]: Commission-based brokerage model (standard 10-15% of premium). Anecdotal: placed coverage at $31K vs. $50K incumbent quote (Founderland article) |
| Founders | Vincent Chen (CEO): ~3 yrs Google ML (Vertex AI, NotebookLM, Ask Photos), licensed broker. Frank Wang (CTO): Sr. Full Stack Eng at Apple, Rust/Gleam open-source contributor, licensed broker. |
| Competitors | Harper ($47M raised, 5,000+ businesses, AI-native SMB brokerage); Newfront ($312M raised, $300M rev, acquired by WTW $1.3B); COVU (~$50M raised, AI ops for agencies); Fernstone (YC, AI + broker-in-loop, 100+ businesses); Acolite (YC, AI teammates for agencies) |
| Moat Signals | 50-state brokerage licensing; proprietary carrier appetite data from placements; autonomous agent infrastructure across carrier portals |
| Risk Factors | Harper's $47M funding lead and 12-month head start; undisclosed carrier relationships; regulatory uncertainty for AI-operated brokerages |
| Founder Reach | Vincent Chen: X @dsdvincent (count not retrievable), LinkedIn linkedin.com/in/zihong-chen. Frank Wang: X not found, LinkedIn linkedin.com/in/jiangdawang (500+ connections). |
| Distribution Signals | Direct-to-business online quoting (company website); no Product Hunt launch found; no app store presence; no press coverage in named publications found |
| Emails | vincent@pantainsure.com, support@pantainsure.com |
