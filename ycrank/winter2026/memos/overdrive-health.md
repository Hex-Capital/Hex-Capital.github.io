# Overdrive Health

> AI Powered Medical Billing

| Field | Value |
|-------|-------|
| Website | https://overdrive.health |
| YC Page | https://www.ycombinator.com/companies/overdrive-health |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare Services |
| Team Size | 1 (per YC profile; LinkedIn lists 2-10 employees) |
| Location | New York, NY, USA |
| Tags | Artificial Intelligence, Health Tech, Healthcare, Health Insurance |
| YC Partner | Jared Friedman |
| Emails | michael@overdrive.health (YC page) |

## The Idea

**Problem:** U.S. healthcare providers lose up to 10% of revenue to medical billing inefficiencies — staff manually calling insurance companies, sending faxes, and processing claims that take weeks to months to resolve. Providers spend 2–10% of revenue on billing operations (YC LinkedIn launch post, Mar 4, 2026). The ambulance/EMS segment faces acute billing challenges where even routine claims require extensive manual follow-up with insurers.

**Approach:** Overdrive Health automates the entire medical billing and revenue cycle management (RCM) lifecycle using AI agents. The platform handles insurance discovery, eligibility verification, coding, patient invoicing, and denial management (overdrive.health meta description). The company pairs AI systems with a small team of expert billers. Their go-to-market strategy involves acquiring an existing traditional ambulance billing agency serving ~20 ambulance providers processing over $50 million in claims annually (YC company page), then deploying AI agents to improve efficiency. The company claims revenue per full-time employee has "nearly doubled" since deploying AI agents (YC company page).

**Differentiation:** Unlike pure SaaS RCM tools (e.g., Waystar, Candid Health) that sell software to billing teams, Overdrive Health operates as an outsourced billing services provider — it replaces the billing function entirely rather than augmenting it. The company claims that even a $100 claim becomes profitable to collect with their AI-augmented cost structure (YC company page). Compared to traditional outsourced billers like EMS|MC, Overdrive Health uses AI automation to deliver services at lower cost. Compared to AI-focused EMS startups like Amby Health (YC W25, copilot model) and CareSwift (YC S25, documentation-focused), Overdrive Health takes a full-stack services approach by acquiring and operating the billing agency itself.

**Business Model:** No public pricing page was found on the website (JavaScript-rendered site; content not extractable). [Inferred]: As an outsourced billing services provider, the most likely monetization is a percentage of collections (industry standard is 4–10% of collected revenue) or a per-claim fee, given the company's positioning as a replacement for in-house billing teams.

**TAM/SAM:** The global medical billing market was valued at $16.8 billion in 2024, projected to reach $27.7 billion by 2029 at 10.5% CAGR (MarketsandMarkets, 2024 via search snippet). The U.S. EMS billing services market was valued at $4.39 billion in 2024, projected to reach $11.25 billion by 2034 at 9.86% CAGR, with the outsourced segment holding 57% market share (NovaOne Advisor via search snippet). The company itself references a "$2bn ambulance billing industry" as its initial SAM and the "$40bn U.S. ambulance industry" as the broader context (YC company page). The AI in RCM market was valued at $20.63 billion in 2024, projected to reach $70.12 billion by 2030 at 24.16% CAGR (Grand View Research via search snippet).

**GTM / Distribution:** The company's initial distribution strategy is acquisition-led: purchasing a traditional ambulance billing agency with an existing client base of ~20 providers and $50M+ in annual claims, then deploying AI to improve margins and service quality (YC company page). [Inferred]: This acquire-and-automate approach provides immediate revenue and customer relationships, avoiding cold-start problems typical of pre-seed startups. Expansion likely follows via direct sales to additional ambulance providers, then broadening to other medical specialties.

## Defensibility

The company's current defensibility stems from its operational model: by acquiring and operating a billing agency, Overdrive Health gains proprietary claims data and direct workflow integration with ~20 ambulance providers (YC company page). Switching costs in medical billing are moderate — providers face disruption and retraining when changing billing partners. Over time, AI models trained on ambulance billing data could create a data advantage as the system processes more claims and learns payer-specific patterns.

**Market structure:** Large RCM incumbents (Waystar, R1 RCM, Athenahealth) focus on hospitals and large health systems, not small ambulance providers. Their enterprise sales motions and pricing structures are misaligned with the fragmented EMS market. Traditional EMS billing companies (EMS|MC, ESO Solutions) have established relationships but lack AI capabilities. [Inferred]: Incumbents face business model tension — deploying AI that reduces headcount would cannibalize their labor-based revenue in the short term, creating a window for AI-native entrants.

**Commoditization risk:** AI-powered medical billing is an active area with multiple well-funded competitors. AKASA ($205M raised), Candid Health ($99.5M raised), and CodaMetrix ($95M raised) are building AI RCM tools, though they target different segments (hospitals, surgical specialties). In the EMS vertical specifically, Amby Health (YC W25) and CareSwift (YC S25) are direct competitors, though with different approaches (copilot vs. documentation vs. full-stack services). LunaBill (YC) automates insurance follow-up calls across billing verticals. The barrier to replication of the full-stack model (agency acquisition + AI deployment) is higher than pure software, but not insurmountable.

## Market & Traction

**Traction signals:**
- ~20 ambulance providers served (YC company page)
- $50M+ in annual claims under management (YC company page)
- Revenue per FTE "nearly doubled" since deploying AI agents (YC company page)
- Acquiring a traditional ambulance billing agency (YC company page)
- YC LinkedIn launch post: 285 reactions, 72 comments (LinkedIn, Mar 4, 2026)
- YC Twitter/X launch post published (x.com/ycombinator, Mar 4, 2026)
- LinkedIn company page: 212 followers (LinkedIn)
- No Twitter/X company account found
- No Product Hunt listing found
- No standalone press coverage found beyond YC launch materials
- Website runs Facebook Pixel and Google Ads tracking, indicating active digital marketing (overdrive.health source code)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Overdrive Health |
|---|---|---|---|
| Candid Health (YC alum) | $99.5M (Series C, Feb 2025, led by Oak HC/FT) | Grew ~250% in 2024; ARR not disclosed (TechCrunch, Feb 2025) | SaaS platform for provider billing teams; does not operate as outsourced biller |
| AKASA | $205M (Series C, Jun 2024, led by a16z) | Not disclosed | Enterprise-focused AI RCM for large health systems; prior auth and CDI focus |
| CodaMetrix | $95M (Series B, Mar 2024) | Not disclosed; 200+ hospitals, 50K+ providers (BusinessWire, Mar 2024) | Autonomous medical coding only; hospital-focused, not ambulance/EMS |
| Amby Health (YC W25) | ~$500K (YC) | Not disclosed; one case study showed 33% EMS revenue increase (YC launch page) | AI copilot for ambulance agencies — augments existing staff rather than replacing billing function |
| LunaBill (YC) | ~$500K (YC) | $764K contracted ARR (Reforgers via search snippet) | AI voice callers for insurance follow-up calls; horizontal across billing verticals, not EMS-specific |

**Why now:** [Inferred]: Several converging factors opened this opportunity: (1) Large language models and AI voice agents reached production quality in 2024–2025, enabling automation of insurance phone calls and complex claims processing that previously required human judgment; (2) AI healthcare investment rose 24.4% YoY to $10.7B through September 2025 (Crunchbase); (3) EliseAI's success scaling AI agents from real estate to healthcare (reaching $100M+ ARR and $2.2B valuation) demonstrated the viability of AI-powered operational automation in regulated industries, providing a direct playbook the founders experienced firsthand.

## Founders & Team

**Michael Schroeder** — Co-Founder & CTO (listed as sole "Founder & CEO" on YC page; listed as "Co-Founder & CTO" on LinkedIn and third-party sources)
- Education: Duke University (LinkedIn via search snippet; specific degree not publicly available)
- Previously: Engineering lead at Up&Up (vertically integrated property manager backed by Founders Fund and Khosla Ventures, $319M raised); built AI agents at EliseAI, helping scale from $35M to >$100M ARR (YC LinkedIn launch post, Mar 4, 2026); experience at Citadel (YC bio)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/michael-schroeder-217513bb — ~2,000 followers, 500+ connections (LinkedIn)
- GitHub: No public repos found

**Daniel Inge** — Co-Founder & CEO (not listed on YC founder page; listed as Co-Founder & CEO on LinkedIn and third-party sources)
- Education: Harvard University (2016–2020), B.S. and M.S. in Computer Science (Harvard SEAS Edge Computing Lab page)
- Previously: Built AI agents at EliseAI; built trading systems at Jane Street (LinkedIn via search snippet)
- Published research: "TaintAssembly: Taint-Based Information Flow Control Tracking for WebAssembly" (arXiv, Feb 2018)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/daniel-inge — ~1,000 followers, 500+ connections (LinkedIn)
- GitHub: No public repos found

**Note on title discrepancy:** The YC company page lists only Michael Schroeder as "Founder & CEO." LinkedIn and other third-party sources list Daniel Inge as "Co-Founder & CEO" and Michael Schroeder as "Co-Founder & CTO." The YC LinkedIn launch post (Mar 4, 2026) references only "Founder Michael Schroeder."

**Co-founder relationship:** Both founders previously worked at EliseAI, where they built AI agents for healthcare applications (LinkedIn profiles, YC bio).

**Founder-market fit:** Both founders have direct experience building AI agents in healthcare at EliseAI, a confirmed unicorn ($2.2B valuation, $100M+ ARR) that expanded from real estate into healthcare automation (EliseAI press releases, Aug 2024 and Aug 2025). Michael Schroeder's background at Up&Up (vertically integrated property management) maps to Overdrive Health's vertically integrated billing approach. Daniel Inge's computer science background at Harvard and trading systems experience at Jane Street contribute technical depth. Both founders' experience automating operationally intensive workflows at EliseAI directly parallels the challenge of automating medical billing.

## Key Risks

**EMS vertical concentration:** The company's entire current operation depends on ~20 ambulance providers from a single acquired agency (YC company page). Loss of a few key clients or failure to expand beyond this initial base would represent outsized revenue impact. Mitigation: the acquire-and-automate model could be replicated with additional agency acquisitions.

**YC cohort competition in EMS billing:** At least two other YC-backed startups — Amby Health (W25) and CareSwift (S25) — target the same ambulance billing market (YC company pages). This creates direct competitive pressure from similarly resourced, YC-network-connected peers pursuing the same customer segment.

**Regulatory and compliance exposure:** Medical billing is subject to HIPAA, CMS regulations, and payer-specific rules. AI-generated coding errors could trigger compliance issues, audits, or False Claims Act liability. Operating as a billing services provider (not just a software vendor) means Overdrive Health bears direct regulatory responsibility for claims submitted on behalf of providers.

**Founder role ambiguity:** Public sources present conflicting information about the founding team structure — the YC page lists one founder while LinkedIn and other sources indicate two co-founders with different title assignments (see title discrepancy note above). This creates uncertainty about team composition and governance for prospective investors.

**Acquisition integration risk:** The company's go-to-market depends on acquiring and transforming a traditional billing agency. Integration challenges — staff retention, client relationships, technology deployment — could slow the AI efficiency gains that underpin the business model.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global medical billing: $16.8B in 2024, projected $27.7B by 2029 at 10.5% CAGR (MarketsandMarkets, 2024 via search snippet). AI in RCM: $20.63B in 2024, projected $70.12B by 2030 at 24.16% CAGR (Grand View Research via search snippet) |
| SAM | U.S. EMS billing services: $4.39B in 2024, projected $11.25B by 2034 at 9.86% CAGR (NovaOne Advisor via search snippet). Company states "$2bn ambulance billing industry" (YC company page) |
| Traction | ~20 ambulance providers, $50M+ annual claims under management, revenue per FTE "nearly doubled" (all from YC company page). LinkedIn company page: 212 followers. YC LinkedIn launch post: 285 reactions, 72 comments (Mar 4, 2026) |
| Revenue Signal | No public pricing or revenue data found. Company operates as outsourced billing service; acquiring a traditional billing agency with existing revenue (YC company page) |
| Founders | Michael Schroeder (Co-Founder/CTO per LinkedIn): Duke University, ex-EliseAI (scaled $35M→$100M+ ARR), ex-Up&Up, ex-Citadel. Daniel Inge (Co-Founder/CEO per LinkedIn): Harvard BS/MS CS, ex-EliseAI, ex-Jane Street |
| Competitors | Candid Health ($99.5M raised, ~250% growth in 2024, SaaS RCM platform). AKASA ($205M raised, revenue unknown, enterprise AI RCM). CodaMetrix ($95M raised, revenue unknown, autonomous coding). Amby Health (YC W25, ~$500K raised, EMS AI copilot). LunaBill (YC, ~$500K raised, $764K contracted ARR, AI voice for billing calls) |
| Moat Signals | Operational data from $50M+ in annual claims; vertically integrated services model (agency acquisition + AI); switching costs from billing provider relationships |
| Risk Factors | EMS vertical concentration on ~20 providers, YC cohort competition (Amby Health, CareSwift), regulatory/compliance exposure as billing services operator |
| Founder Reach | Michael Schroeder: Twitter not found, LinkedIn ~2K followers. Daniel Inge: Twitter not found, LinkedIn ~1K followers. No GitHub repos found for either founder |
| Distribution Signals | Acquired traditional ambulance billing agency as initial distribution (YC company page). Active Facebook Pixel and Google Ads on website. No Product Hunt listing, no app store presence |
| Emails | michael@overdrive.health (YC page) |
