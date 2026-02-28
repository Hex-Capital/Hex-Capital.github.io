# Zymbly

> Automates admin for aircraft technicians

| Field | Value |
|-------|-------|
| Website | https://www.zymbly.com |
| YC Page | https://www.ycombinator.com/companies/zymbly |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | No public data found |
| Tags | AIOps, Workflow Automation, Transportation |
| YC Partner | Jared Friedman |
| Emails | No public data found |

## The Idea

**Problem:** Aircraft maintenance technicians spend approximately half their workday on administrative tasks—searching manuals, looking up parts, and writing compliance documentation—rather than hands-on maintenance work (YC company page). North America faces a projected shortage of nearly 43,000 aircraft maintenance technicians (more than 24%) by 2027 (Oliver Wyman, 2023). This labor gap intensifies the cost of administrative inefficiency: every hour a technician spends on paperwork is an hour not spent turning aircraft. Today, technicians manually query ERP systems, flip through maintenance manuals, service bulletins, and parts catalogues, then hand-write or type up compliant documentation. The platform was developed through a design partnership with a major global airline (YC company page).

**Approach:** Zymbly is a voice-first AI copilot that sits on top of an operator's or MRO's existing ERP system (Aviation Week). It uses voice activation to let technicians query aircraft records, maintenance manuals, service bulletins, and parts catalogues in real-time without leaving the hangar floor. The system searches manuals, local procedures, and historical work order data to surface relevant troubleshooting information, identifies correct replacement parts, drafts compliant action notes, and audits documentation (zymbly.com). The product includes built-in "natural friction" to ensure technicians retain ownership of actions—all actions require explicit human sign-off (zymbly.com, Aviation Week). It can be deployed within weeks with minimal operational changes (Aviation Week).

**Differentiation:** Unlike legacy MRO software platforms (Ramco, CAMP Systems, Flatirons) that function as full ERP or maintenance management systems, Zymbly positions itself as a supplementary AI layer that integrates on top of existing ERP systems rather than replacing them (Aviation Week). This reduces adoption friction—MROs do not need to rip-and-replace their current systems. Compared to EmpowerMX's EMX Vision (AI module for MRO planning and execution), Zymbly focuses specifically on the technician's workflow at the point of work via voice-first interaction rather than on planning and scheduling. Compared to AirNxt (next-gen MRO platform), Zymbly is narrower in scope—targeting administrative productivity rather than end-to-end MRO operations.

**Business Model:** No pricing is displayed on the website; the site directs prospects to "Book a demo" (zymbly.com). [Inferred]: Most likely monetization path is a per-seat or per-technician SaaS subscription sold to airlines and third-party MRO providers, given the enterprise demo-driven sales motion and B2B positioning.

**TAM/SAM:** The global aviation MRO software market was valued at $7.15 billion in 2025, growing at a CAGR of 4.6%, and is projected to reach approximately $10 billion by 2030 (The Business Research Company, 2025 via search snippet; ePlane AI / GlobeNewsWire, 2026 via search snippet). Zymbly targets a sub-segment of this market: AI-powered technician productivity tools within MRO operations. No public SAM estimate specific to this sub-segment was found.

**GTM / Distribution:** The company developed its product through a design partnership with a major global airline (YC company page). [Inferred]: The most likely distribution path is enterprise direct sales to airlines and third-party MRO providers, leveraging the founding team's deep aviation industry network (Oliver Wyman, Virgin Atlantic, Airbus, Clermont Group). The demo-driven sales model and regulatory alignment (FAA, EASA, CAA) suggest a top-down enterprise selling motion.

## Defensibility

**Domain-specific data moat (potential):** Zymbly describes itself as a "brain layer that connects the dots across your manuals, local procedures and maintenance systems" (zymbly.com). As the platform processes more queries and documentation across deployments, it could accumulate proprietary data on common troubleshooting patterns, parts failure modes, and documentation best practices. This data advantage does not exist today at the pre-seed stage but could compound with each airline deployment.

**Regulatory alignment:** The product is built around Part 145 operations and CAME standards, with alignment to CAA, FAA, and EASA frameworks (zymbly.com). ISO 27001 and SOC 2 Type II alignment plus GDPR compliance with data sovereignty controls represent non-trivial compliance infrastructure. Customer data is encrypted and not used for AI training (Aviation Week).

**Switching costs:** Once integrated with an operator's ERP system and populated with local procedures, switching to a competitor would require re-integration and retraining. However, this switching cost is moderate since Zymbly sits on top of existing systems rather than replacing them.

**Market structure:** MRO is an industry that "under-invests in people" and digitalization (Robbie Bourke, quoted in Aviation Week). Legacy MRO software vendors (CAMP, Ramco, Flatirons) have built large installed bases around comprehensive ERP suites. Building a lightweight AI layer on top of those systems—rather than competing with them—avoids direct substitution conflict with incumbents. [Inferred]: The structural barrier for incumbents is that adding a voice-first AI copilot to an existing ERP product would require a fundamentally different UX paradigm and could cannibalize professional services revenue that legacy vendors earn from system complexity.

**Commoditization risk:** The core technology—RAG (retrieval-augmented generation) over maintenance manuals, voice-to-text, and document generation—uses widely available AI building blocks. Other AI startups or legacy vendors could replicate the technical approach. The primary barriers to commoditization are domain expertise (understanding aviation compliance requirements), regulatory pre-work, and the difficulty of building trust in safety-critical environments.

## Market & Traction

**Traction signals:**
- Developed through a design partnership with a major global airline (YC company page; airline name not disclosed)
- Claims on website: 5% reduction in maintenance downtime, 70% time saved on troubleshooting, 45% increase in document QC accuracy (zymbly.com; methodology and sample size not disclosed)
- Press coverage in Aviation Week (Aviation Week Network, date not specified in article)
- Mentioned by @DrivenInvestor on X (x.com/DrivenInvestor)
- LinkedIn company page exists (linkedin.com/company/zymbly; follower count not retrievable)
- No Product Hunt listing found
- No company Twitter/X account found
- No app store presence found
- No job postings found on YC jobs board
- No Discord or Slack community found

**Competitive landscape:**

1. **EmpowerMX** — AI-powered cloud-based MRO software for heavy maintenance planning and execution. EMX Vision module (launched October 2023) provides AI-driven predictions of maintenance needs and durations. Total funding ~$10.97M (Tracxn via search snippet). Revenue: $3.2M in 2024, up from $1.7M in 2023 (GetLatka via search snippet). Acquired by IFS in July 2024. Key differentiator vs. Zymbly: broader MRO planning platform rather than point-of-work technician assistant.

2. **CAMP Systems** — Established maintenance tracking provider with 45+ year track record, wholly owned by Hearst. Supports 1,500+ service centers and MRO organizations (CAMP website via search snippet). Launched AI Operations Manager tool in October 2025 (AviTrader via search snippet). Key differentiator vs. Zymbly: incumbent with massive installed base in business aviation; full maintenance management suite rather than AI overlay.

3. **AirNxt** — Next-generation MRO software platform founded in 2024, headquartered in Dubai. Raised $1.5M in pre-seed funding in January 2024 (LeadsOnTrees via search snippet). Focuses on predictive analytics, compliance automation, and real-time data integration. Key differentiator vs. Zymbly: full end-to-end MRO platform rather than voice-first AI assistant layer.

4. **Ramco Aviation** — Established aviation MRO ERP suite serving 4,000+ aircraft and 24,000+ users globally (Ramco website). Incorporates AI/ML and chatbot features. Publicly traded parent (Ramco Systems). Revenue not separately disclosed for aviation division. Key differentiator vs. Zymbly: comprehensive ERP replacement rather than AI overlay on existing systems.

5. **Flatirons Solutions** — 25+ year aerospace technical content and task management provider. Backed by TELEO Capital (amount undisclosed). Serves airlines, MROs, manufacturers, and defense organizations globally (Flatirons website). Key differentiator vs. Zymbly: focused on technical content management and documentation authoring rather than real-time technician assistance.

**Why now:**
- The projected shortage of 43,000 aircraft maintenance technicians in North America by 2027 creates urgency to augment remaining workforce productivity (Oliver Wyman, 2023).
- [Inferred]: Large language models and voice AI reached sufficient maturity in 2023-2024 to enable real-time, voice-first querying across technical manuals with acceptable accuracy—a capability that was not feasible at production quality two years prior. The combination of labor shortage pressure and AI capability threshold crossing creates a window for a purpose-built technician copilot.

## Founders & Team

**Ben Jacob** — Co-founder & CEO
- Previously led Applied AI at Multiverse, a Google-backed edtech company (also backed by GV, General Catalyst, and Index) (YC company page; Aviation Week)
- Earlier career at Oliver Wyman, working on airline operational transformation, including helping a major airline recover operations post-pandemic (Aviation Week)
- Twitter/X: No confirmed public account found
- LinkedIn: No public profile directly confirmed (multiple "Ben Jacob" profiles exist)
- GitHub: No public repos found

**Azmat Habibullah** — Co-founder & CTO
- Master's in Mathematics from Imperial College London, with research focused on the geometry of quantum mechanics (YC company page; LinkedIn via search snippet)
- 4 years building ML models and software for enterprises in highly regulated industries (YC company page)
- Previously at Oliver Wyman Digital (LinkedIn via search snippet)
- Started programming at age 11 (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/azmat-habibullah/
- GitHub: No public repos found

**Robbie Bourke** — Co-founder (titled Chief Customer Officer per Aviation Week)
- 25+ years in aviation as executive, operator, engineer, investor, and advisor (LinkedIn via search snippet)
- Former Head of Aircraft Maintenance at Virgin Atlantic (YC company page)
- Lead engineer at Airbus on design teams (YC company page)
- Former Partner at Oliver Wyman, Transport and Services; established the CAVOK aviation consultancy practice (LinkedIn; Aviation Week)
- Head of Aerospace at Clermont Group (parent of magniX and Eviation) from August 2023 (PR Newswire, August 2023)
- Qualified Aeronautical Engineer (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/robbie-bourke-775494b/ — headline: "Aviation and Aerospace Leader | Board Member | Former Partner at Oliver Wyman | Advisor to Aviation, Aerospace, and Rail"
- GitHub: No public repos found

**Co-founder relationship:** All three founders have ties to Oliver Wyman. Ben Jacob and Azmat Habibullah both worked at Oliver Wyman (in operational transformation and digital, respectively), and Robbie Bourke was a Partner at Oliver Wyman leading the CAVOK aviation practice. The Aviation Week article describes Zymbly as "launched by three former Oliver Wyman executives."

**Founder-market fit:** The team combines deep aviation domain expertise (Bourke: 25+ years across Airbus, Virgin Atlantic, Oliver Wyman, Clermont Group) with applied AI experience (Jacob: led Applied AI at a Google-backed company; Habibullah: 4 years building ML for regulated industries with an Imperial College mathematics background). Bourke's direct experience as Head of Aircraft Maintenance at Virgin Atlantic means the team has firsthand knowledge of the technician workflow they are automating. The Oliver Wyman connection provides a network across global airlines and MRO providers.

## Key Risks

**Incumbent AI features:** CAMP Systems launched its own AI Operations Manager in October 2025 (AviTrader via search snippet), and EmpowerMX shipped EMX Vision in October 2023. Legacy MRO software vendors with large installed bases are adding AI capabilities to their existing platforms, which could reduce demand for a standalone AI overlay product.

**Enterprise sales cycle length:** Airlines and MRO providers are safety-critical, heavily regulated organizations with long procurement cycles. Selling AI tools into these environments requires navigating compliance review, security audits (ISO 27001, SOC 2), and union considerations—processes that can extend sales cycles to 12-18 months and strain a 3-person team's resources.

**Trust and liability in safety-critical environments:** Aircraft maintenance is a domain where documentation errors can have life-safety consequences. Even with human sign-off requirements, adoption of AI-generated documentation in a regulatory environment (FAA, EASA) faces cultural resistance. A single AI-generated error that contributes to an incident could create outsized reputational and legal risk.

**Regulatory uncertainty:** Aviation regulators (FAA, EASA, CAA) have not issued definitive guidance on AI-generated maintenance documentation. Future regulatory requirements could mandate specific AI transparency, validation, or certification standards that require product redesign.

**Founder bandwidth across roles:** Robbie Bourke's LinkedIn headline lists him as "Aviation and Aerospace Leader | Board Member | Former Partner at Oliver Wyman | Advisor to Aviation, Aerospace, and Rail," and he was appointed Head of Aerospace at Clermont Group in August 2023 (PR Newswire). Whether this role is concurrent with his Zymbly co-founder responsibilities, or whether he has transitioned fully, is not publicly clarified.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.15B aviation MRO software market in 2025, ~$10B by 2030 (The Business Research Company, 2025; ePlane AI / GlobeNewsWire, 2026 via search snippets; 4.6% CAGR) |
| SAM | No public data found |
| Traction | Design partnership with a major global airline (YC company page); press coverage in Aviation Week; claimed 70% troubleshooting time savings, 5% downtime reduction, 45% document QC accuracy improvement (zymbly.com; methodology undisclosed) |
| Revenue Signal | No public data found |
| Founders | Ben Jacob (CEO): ex-Head of Applied AI at Multiverse (Google-backed), ex-Oliver Wyman. Azmat Habibullah (CTO): MSc Mathematics Imperial College, ex-Oliver Wyman Digital, 4 yrs ML in regulated industries. Robbie Bourke (CCO): 25+ yrs aviation, ex-Head of Maintenance Virgin Atlantic, ex-Airbus engineer, ex-Partner Oliver Wyman, ex-Head of Aerospace Clermont Group |
| Competitors | EmpowerMX (~$11M raised, $3.2M revenue 2024, acquired by IFS; broader MRO planning vs. point-of-work AI); CAMP Systems (Hearst-owned, 45+ yr incumbent, AI Ops Manager launched Oct 2025; full maintenance suite); AirNxt ($1.5M pre-seed, full next-gen MRO platform); Ramco Aviation (publicly traded parent, 4K+ aircraft served; comprehensive ERP); Flatirons Solutions (TELEO Capital-backed, 25+ yrs; content management focus) |
| Moat Signals | Regulatory alignment (FAA, EASA, CAA, Part 145, CAME); ISO 27001/SOC 2 Type II alignment; potential data moat from accumulating troubleshooting patterns across deployments |
| Risk Factors | Incumbent AI feature additions (CAMP, EmpowerMX), enterprise sales cycle length in regulated aviation, trust/liability in safety-critical AI-generated documentation |
| Founder Reach | Ben Jacob: Twitter not found, LinkedIn not confirmed, GitHub not found. Azmat Habibullah: Twitter not found, LinkedIn linkedin.com/in/azmat-habibullah/, GitHub not found. Robbie Bourke: Twitter not found, LinkedIn linkedin.com/in/robbie-bourke-775494b/, GitHub not found |
| Distribution Signals | Aviation Week press coverage; design partnership with unnamed major airline; no Product Hunt, app store, or community presence found |
| Emails | No public data found |
