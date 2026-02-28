# Avoice

> The AI Workspace For Architects

| Field | Value |
|-------|-------|
| Website | https://avoice.co/ |
| YC Page | https://www.ycombinator.com/companies/avoice |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Construction, Enterprise Software, Architecture, AI |

## The Idea

**Problem:** Architects spend a disproportionate share of their time on documentation tasks — writing specifications, coordinating schedules, researching building codes, verifying material compliance, and conducting QA/QC — rather than on design work. This work is spread across disconnected systems including PDFs, spreadsheets, and email (YC company page). The fragmented nature of these tools leads to errors, inconsistencies, and loss of institutional knowledge as firms scale. Current alternatives include general-purpose document tools and manual processes; no single platform consolidates architectural documentation intelligence.

**Approach:** Avoice provides three integrated modules (avoice.co):
1. **Studio Assistant** — An AI that interprets architectural drawings and documents in natural language. It can spot sheet inconsistencies, convert sketches to text, compare revisions, find sustainable material substitutions, locate code compliance risks, draft scope narratives, and summarize RFIs.
2. **Studio Workflow** — Automates project-level tasks: QA/QC across entire projects, coordination and RFI prevention, material finding and updating, and contract/tender analysis.
3. **Studio Library** — Centralizes a firm's practice standards, learns from past projects, maintains a living material library, and extracts insights from documents.

The platform claims to save 13 hours per user per week, deliver $25,000 in annual productivity gains per user, and make schedules, specs, and QA processes 3x faster (avoice.co).

**Differentiation:** Avoice focuses specifically on the documentation and coordination layer of architectural practice, rather than design generation or project management. Swapp ($18.5M raised) automates construction documentation from BIM/Revit models specifically, requiring existing BIM workflows (Calcalist, PRNewswire). Monograph (~$49M raised) focuses on project and budget management for architecture firms rather than documentation intelligence (TechCrunch, Architect Magazine). TestFit ($22M raised) targets feasibility studies and building configuration, not post-design documentation (Dallas Innovates). Hypar ($8.28M raised) focuses on design automation and text-to-BIM workflows (PRNewswire). Avoice's differentiator is its focus on the full documentation lifecycle — specs, codes, materials, QA — as a unified AI-native platform that also preserves firm-specific knowledge.

**Business Model:** No public pricing page was found on avoice.co at the time of research. The website offers a "Request a Demo" flow, suggesting a sales-led enterprise model. [Inferred]: Most likely monetization path is per-seat or per-firm SaaS subscription, given the B2B enterprise positioning and demo-request funnel typical of vertical SaaS for architecture firms.

**TAM/SAM:** The Architecture, Engineering and Construction (AEC) Software market was estimated at $11.7 billion in 2024 with a 9.5% CAGR through 2031 (Metastat Insight, 2024 via search snippet). The broader Construction and Design Software market was valued at $11.05 billion in 2024, projected to reach $29.99 billion by 2034 at 10.5% CAGR (Precedence Research, 2024 via search snippet). The AI Architecture Design Software segment was valued at $4.1 billion in 2022 with a 16.2% CAGR to 2030 (UnivDatos via search snippet). No public SAM estimate was found specific to AI-powered architectural documentation software.

**GTM / Distribution:** The website states the platform is "trusted by top architecture and design studios" (avoice.co), and offers demo booking. The YC partner is Jared Friedman (YC company page). [Inferred]: Most likely distribution path is direct sales to mid-to-large architecture firms, starting with demo-led enterprise sales, leveraging the YC network and industry press (ArchDaily feature) for initial pipeline.

## Defensibility

The primary defensibility signal is the **firm-specific knowledge accumulation** mechanism: as architecture firms use Avoice's Studio Library, their practice standards, past project data, and material libraries become embedded in the platform, creating switching costs over time. Each firm's AI system would become more tailored and valuable with use.

**Market structure:** Architecture firms currently use fragmented, general-purpose tools (PDFs, spreadsheets, email) for documentation. Large incumbents like Autodesk (which acquired Spacemaker, now Autodesk Forma) focus primarily on design and BIM tools. [Inferred]: Autodesk's business model is built around design/modeling software (Revit, AutoCAD), and adding a documentation intelligence layer could cannibalize their consulting/services revenue streams and would require a fundamentally different product architecture focused on NLP and document understanding rather than 3D modeling. However, Autodesk has the resources and AEC relationships to build or acquire in this space.

**Commoditization risk:** The underlying LLM technology for document understanding is broadly available. Other AI startups (Swapp, Hypar) and potential new entrants could build similar document-analysis features. The barrier is in building architecture-specific training data, code/standards databases, and firm-specific knowledge graphs — which takes time but is not technically unique. General-purpose AI coding/document assistants could also expand into this vertical.

## Market & Traction

**Traction signals:**
- Website claims: 13 hours saved per user per week, $25K annual productivity gains per user, 3x faster schedules/specs/QA (avoice.co — these are product claims, not independently verified metrics)
- Website states "trusted by top architecture and design studios" (avoice.co) — no specific firm names or user counts disclosed
- Press: Featured in ArchDaily article "Beyond the Render: How AI Is Restructuring Architectural Documentation" (ArchDaily, February 20, 2026), where Avoice is cited as an example of AI structuring technical knowledge for buildable design
- Product Hunt: No listing found
- Twitter/X (company): No confirmed company account found. Note: @AvoiceAI on X.com is a different company (mobile platform for frontline workers based in Orlando, FL)
- LinkedIn (company): No confirmed company page found for the YC Avoice specifically. "AvoiceAI" on LinkedIn appears to correspond to the unrelated Orlando-based company
- Discord/Slack community: No public data found
- App store / browser extension: No public data found
- Job postings: Company is not currently hiring (YC company page)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Avoice |
|---|---|---|
| **Swapp** | $18.5M total ($11.5M Series A led by Eurazeo) (Calcalist) | Automates construction documentation specifically from Revit/BIM models; requires existing BIM workflow. Avoice is BIM-agnostic and focuses on broader documentation intelligence including specs, codes, and firm knowledge |
| **Monograph** | ~$49M total ($20M Series B, Feb 2025, led by Base10 Partners) (Architect Magazine, TechCrunch) | Practice/project management and budgeting for architects (12,000+ users as of 2025). Does not offer AI-powered document generation or QA/QC automation |
| **TestFit** | $22M total ($20M Series A led by Parkway Venture Capital) (Dallas Innovates) | AI-powered feasibility studies and building configuration. Targets pre-design phase, not post-design documentation workflows |
| **Hypar** | $8.28M total ($5.5M Series A, June 2023, led by Brick & Mortar Ventures) (PRNewswire) | Design automation and text-to-BIM. Focused on encoding design standards into automated templates, not document QA/QC or specification writing |

**Why now:** [Inferred]: The key enabling change is the maturation of large language models with multimodal capabilities (text + image/document understanding) in 2023–2025, which for the first time makes it feasible to build AI that can interpret architectural drawings, cross-reference building codes, and generate specification text at sufficient quality for professional use. Prior NLP technology could not reliably parse the combination of technical drawings, regulatory codes, and domain-specific terminology required. Additionally, architecture firms face growing project complexity and labor shortages, making productivity tools more urgent.

## Founders & Team

**Chawin Asavasaetakul** — Co-Founder & CEO
- BS Management Science & Engineering, Stanford University (Bangkok Patana School via search snippet)
- Previously: Co-Founded WeStride, a Southeast Asian EdTech company that grew to serve 1,000+ customers in its first year and over 250 learners with a 93% job placement rate; received Learning Design Award from Stanford's Accelerator for Learning (WeStride website, LinkedIn via search snippet)
- CEO of Kinkum, a platform connecting users to unsold food/ingredients from restaurants in Thailand (LinkedIn via search snippet)
- Co-founded Yindii, a food surplus delivery startup (LinkedIn post)
- Published "Water, Trees and Culture: A Hilltribe Story" based on 4 years of work with hill tribe villages in northern Thailand (Goodreads, SSRN via search snippet)
- Gold Medal in Thailand Philosophy Olympiad; national representative to International History and Philosophy Olympiad (Bangkok Patana School via search snippet)
- Has a Google Scholar profile (scholar.google.co.th via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/chawinasava/ — listed as "AVoice (YC W26)"
- GitHub: No public repos found

**Chawit Asavasaetakul** — Co-Founder & CTO
- FIDE-rated chess player, National Master title (FIDE profile, Chess.com)
- Published iOS app "Jetlag Sync" (Travel category, 4.5 stars, 8 reviews, free with in-app purchases) (Apple App Store)
- GitHub: github.com/AAES-chawit — 1 public repository (GitHub via search snippet; attribution tentative based on name match)
- Education: No public data found
- Twitter/X: No public account found
- LinkedIn: No confirmed public profile found

**Co-founder relationship:** Both founders share the surname Asavasaetakul. Chawin attended Bangkok Patana School before Stanford. Chawit's FIDE chess profile indicates birth year 2003, and both appear to have Thai backgrounds. [Inferred]: The shared surname and Thai background strongly suggest they are siblings (possibly twins given the similar names Chawin/Chawit), though this is not confirmed in public sources.

**Founder-market fit:** Chawin's background is in management science, social entrepreneurship, and EdTech — not architecture specifically. Chawit's public profile shows software development skills (iOS app) and analytical capability (competitive chess). No public evidence of either founder having prior experience in architecture, construction, or AEC software. The team's strength appears to be in building technology products and scaling startups (WeStride's growth) rather than deep domain expertise in architecture. The YC partnership with Jared Friedman and the W26 batch acceptance provide validation of the team's execution ability. No public advisors, board members, or notable investors beyond YC were found.

## Key Risks

**Brand disambiguation:** Multiple unrelated companies use the "Avoice" name: AvoiceAI (avoiceai.com, mobile platform for frontline workers in Orlando, FL), UAB Avoice (Lithuanian telecom), and several Brazilian event companies. The @AvoiceAI handle on X.com belongs to the Orlando-based company, not the YC startup. This creates SEO competition and potential brand confusion for customers searching for the product.

**No demonstrated architecture domain expertise in founding team:** Neither founder has publicly documented experience working in architecture, construction, or AEC software prior to Avoice. Architecture documentation is a domain requiring deep understanding of building codes, specification standards (CSI MasterFormat), coordination workflows, and professional liability concerns. Mitigation: the team may have hired domain experts among the 4-person team or engaged architecture firm advisors, but no public evidence of this was found.

**Incumbent platform risk from Autodesk:** Autodesk dominates the AEC software market with Revit, AutoCAD, and Autodesk Forma (formerly Spacemaker). Autodesk has been actively acquiring AI capabilities and could build or acquire documentation intelligence features that integrate natively with their existing BIM tools, which would be difficult for a standalone product to compete against given architects' existing Autodesk workflows.

**Well-funded direct competitor (Swapp):** Swapp has raised $18.5M and directly automates architectural construction documentation with AI, learning firm-specific standards. Swapp is further along in funding and has established a market presence in the same problem space, though with a more BIM-centric approach.

**Narrow vertical with long sales cycles:** Architecture firms are a specialized customer segment with typically conservative technology adoption patterns and long procurement cycles. The total addressable population of architecture firms is smaller than many B2B SaaS markets, potentially constraining growth velocity.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.7B AEC Software market (Metastat Insight, 2024, 9.5% CAGR); $4.1B AI Architecture Design Software (UnivDatos, 2022, 16.2% CAGR) |
| SAM | No public data found |
| Traction | ArchDaily feature article (Feb 20, 2026); website claims "trusted by top architecture and design studios" (avoice.co) — no specific user counts or firm names disclosed |
| Revenue Signal | No public data found |
| Founders | Chawin Asavasaetakul (CEO): Stanford BS MS&E, co-founded WeStride (EdTech, 1K+ customers), CEO of Kinkum. Chawit Asavasaetakul (CTO): iOS developer (Jetlag Sync app), FIDE National Master chess player |
| Competitors | Swapp ($18.5M raised, revenue unknown, BIM-to-documentation automation vs. Avoice's broader doc intelligence); Monograph (~$49M raised, 12K+ users, practice/budget management vs. Avoice's AI documentation); TestFit ($22M raised, revenue unknown, pre-design feasibility vs. Avoice's post-design documentation); Hypar ($8.28M raised, revenue unknown, design automation/text-to-BIM vs. Avoice's spec/QA focus) |
| Moat Signals | Firm-specific knowledge accumulation in Studio Library creates switching costs over time; no patent or network effect data found |
| Risk Factors | Brand disambiguation with multiple "Avoice" entities, no public architecture domain expertise in founding team, Autodesk incumbent platform risk, well-funded direct competitor (Swapp at $18.5M) |
| Founder Reach | Chawin Asavasaetakul: Twitter not found, LinkedIn linkedin.com/in/chawinasava/, GitHub not found. Chawit Asavasaetakul: Twitter not found, LinkedIn not confirmed, GitHub tentative (1 repo) |
| Distribution Signals | ArchDaily article mention (Feb 20, 2026); YC W26 batch; no Product Hunt, app store, or browser extension listings found |
