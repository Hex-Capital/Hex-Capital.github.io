# Zatanna

> Adaptive Healthcare Admin Agents

| Field | Value |
|-------|-------|
| Website | https://www.zatanna.ai/ |
| YC Page | https://www.ycombinator.com/companies/zatanna |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Office Management |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Healthcare, Dental, Billing, Infrastructure, Conversational AI |

## The Idea

**Problem:** Dental practices face significant administrative overhead driven by insurance friction — verifying eligibility, filing claims with correct codes, tracking pre-authorizations, identifying underpaid or incorrect Explanations of Benefits (EOBs), and pursuing appeals. This work relies heavily on "tribal knowledge" held by experienced billing staff and is error-prone, time-consuming, and directly reduces time providers can spend on patient care. Today, practices use a patchwork of traditional practice management software (e.g., Dentrix, Eaglesoft) supplemented by manual phone calls to insurers and spreadsheet-based tracking.

**Approach:** Zatanna builds AI agents that institutionalize the tribal knowledge of experienced dental billing staff into continuously learning infrastructure. The platform functions as an AI-powered intake coordinator that handles calls, clears insurance, and files claims on autopilot (LinkedIn company page, via search snippet). It checks pre-authorizations, claims, and patient accounts against a dataset of 30,000+ historical EOBs to prevent accounts receivable issues before they occur (LinkedIn company page, via search snippet). When EOBs are wrong or underpaid, the system detects the discrepancy and generates insurer-specific appeals with automatic follow-ups to recover missed revenue (LinkedIn company page, via search snippet).

**Differentiation:** Zatanna's approach differs from incumbents in several ways:
- Versus traditional PMS platforms (Dentrix, Eaglesoft): These are record-keeping systems, not intelligent agents. They require manual data entry and human decision-making at each step.
- Versus Overjet and Pearl: These dental AI companies focus primarily on clinical AI (x-ray analysis, diagnostics) rather than administrative workflow automation.
- Versus Trust AI (Isaac PracticeOS): Trust AI is building a full AI-native practice management system, positioning as a PMS replacement. Zatanna appears to focus specifically on the insurance/billing layer as infrastructure that could integrate with existing PMS tools.
- Versus DentalRobot: DentalRobot automates insurance verification and RCM but has been training on dental workflows for five years. Zatanna's claimed differentiator is the "continuously learning" aspect and the 30,000+ EOB dataset used for pre-emptive AR prevention.

**Business Model:** No public pricing page was found (website rendered primarily as CSS/HTML framework at time of research). [Inferred]: Most likely monetization path is SaaS subscription per practice or per-provider seat, potentially with a usage-based component for claims processed, given the B2B healthcare admin software category norms.

**TAM/SAM:** The global dental RCM services market was valued at $748.3 million in 2025, projected to reach $1.19 billion by 2034 at a 5.25% CAGR (Towards Healthcare, 2025 via search snippet). The broader dental practice management software market was estimated at $1.82 billion in 2025, projected to reach $4.16 billion by 2035 at an 8.64% CAGR (Towards Healthcare, 2025 via search snippet). The U.S. dental insurance market overall was estimated at $97.7 billion in 2025 (Precedence Research, 2025 via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to dental practices and dental support organizations (DSOs), starting with individual practices and expanding to multi-location groups. The dental vertical has concentrated distribution channels through dental conferences, dental associations, and PMS integrations. The company's initial focus on dental (rather than broader healthcare) suggests a vertical wedge strategy.

## Defensibility

**Data moat potential:** Zatanna claims a dataset of 30,000+ historical EOBs used to train its agents (LinkedIn company page, via search snippet). If this dataset grows with each practice onboarded, it could create a compounding data advantage where the system becomes more accurate at predicting claim outcomes, detecting underpayments, and generating successful appeals. This moat does not exist at meaningful scale today but could develop over time with customer acquisition.

**Switching costs:** [Inferred]: Once a practice relies on Zatanna's agents for daily insurance verification, claims filing, and appeals, switching would require retraining staff on manual processes or a competing system, creating moderate switching costs. The "tribal knowledge" codified into the system becomes practice-specific institutional memory.

**Market structure:** Incumbent PMS vendors (Henry Schein/Dentrix, Patterson/Eaglesoft) have distribution advantages but their business models are built around seat-based licensing for record-keeping software. Building intelligent billing agents requires fundamentally different AI/ML capabilities and a data pipeline for insurer-specific claim patterns — capabilities outside their core engineering DNA. [Inferred]: Incumbents face business model cannibalization risk if AI agents reduce the need for billing staff seats, which is part of their existing customer spend justification.

**Commoditization risk:** LLM-based administrative automation is an increasingly accessible capability. Other YC-backed and venture-funded startups are pursuing adjacent dental AI opportunities (Trust AI, DentalRobot). Well-resourced competitors like Overjet (~$133M raised) could expand from clinical AI into administrative workflows. The defensibility ultimately depends on the depth and accuracy of the insurer-specific EOB dataset and the quality of practice-specific learning.

## Market & Traction

**Traction signals:**
- No public revenue data found.
- No public user count or customer count found.
- No Product Hunt launch found.
- No app store listings found.
- Company LinkedIn page exists at linkedin.com/company/usezatanna (LinkedIn, via search snippet). Follower count not retrievable.
- Tarun Vedula has a Twitter/X account at @TarunVedula (X.com, via search snippet). Follower count not retrievable.
- No Discord or Slack community found.
- Website was not fully accessible at time of research (Framer-built site rendered without content).
- YC partner: Jared Friedman (YC company page).
- Company is not currently hiring (YC company page).

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Zatanna |
|---|---|---|
| **Trust AI** (Isaac PracticeOS) | $6.5M seed (PR Newswire, Aug 2025) | Full AI-native PMS replacement; 8,000+ dentists on platform (PR Newswire, Feb 2026); broader scope beyond billing/claims |
| **Overjet** | ~$133M total ($53.2M Series C), $550M valuation (Overjet blog, Mar 2024) | Clinical dental AI (x-ray analysis, diagnostics) for both providers and payers covering 120M+ members; not primarily admin-focused |
| **Pearl** | $58M Series B (BusinessWire, Jul 2024) | FDA-cleared clinical AI for dental x-rays used by 150K+ practitioners (hellopearl.com, Jan 2025); focuses on diagnostics rather than billing |
| **DentalRobot** | No public funding data found | Direct RCM competitor — automates insurance verification and writes back to 12+ PMS systems; 5 years of dental-specific AI training |

**Why now:** [Inferred]: Several converging factors have opened this opportunity: (1) Large language models reached sufficient capability in 2023-2024 to handle the nuanced, insurer-specific language in EOBs and claims documentation, enabling "conversational AI" agents that can parse and generate insurance communications; (2) the No Surprises Act (effective January 2022) and increasing insurance complexity have added compliance burden to dental practices; (3) dental industry staffing shortages post-COVID have made experienced billing staff harder to recruit and retain, increasing demand for automation.

## Founders & Team

**Rithvik Vanga** — Co-founder & CEO
- BSE Computer Science, University of Michigan (2022–2025) (RocketReach, via search snippet)
- Previously: Coinbase, Series, Hamming AI, John Deere (RocketReach, via search snippet)
- Published IEEE research: "Identifying Race and Gender Bias in Stable Diffusion AI Image Generation" at ICAIC 2024 (IEEE Xplore)
- Mentored FIRST Global robotics teams internationally (RocketReach, via search snippet)
- Twitter/X: No verified public account found
- LinkedIn: linkedin.com/in/rithvik-vanga-0824a5225
- GitHub: No public repos found under verified account

**Tarun Vedula** — Co-founder
- BS Data Science, University of Wisconsin-Madison (2022–2026 expected) (RocketReach, via search snippet)
- Previously: Amazon, Odyssey, HandsOn, AT&T (RocketReach, via search snippet)
- Contributor to The Badger Herald, UW-Madison student newspaper (badgerherald.com)
- Twitter/X: @TarunVedula — follower count not retrievable
- LinkedIn: linkedin.com/in/tarunvedula
- GitHub: No public repos found

**Alex Blackwell** — Co-founder & CTO
- Previously at Pikkit (YC company page). Pikkit is a sports betting analytics platform founded in 2019 (Tracxn, via search snippet).
- Note: A different individual named Alex Blackwell (BSc CS, Simon Fraser University; SDE II at Demonware) has a public GitHub (github.com/Alex0Blackwell) and personal website (alexblackwell.ca). This appears to be a different person from Zatanna's Alex Blackwell; no information on that profile references Zatanna or Pikkit.
- Twitter/X: No verified public account found
- LinkedIn: No verified profile found distinct from the Demonware engineer
- GitHub: No verified public repos found

**Co-founder relationship:** Rithvik Vanga (University of Michigan) and Tarun Vedula (University of Wisconsin-Madison) attended different universities. No shared prior employer is visible from the data gathered. Alex Blackwell's educational background is not confirmed. No public data on co-founder history.

**Founder-market fit:** Rithvik Vanga's experience at Coinbase and Hamming AI indicates exposure to fintech infrastructure and AI systems. His IEEE-published research on AI bias shows ML research capability. Tarun Vedula's experience at Amazon provides large-scale engineering context, and his data science degree is relevant to the analytics component. No founder has publicly documented direct dental industry or healthcare billing experience, though such experience may exist and simply not be publicly listed.

## Key Risks

**Name confusion with DC Comics character:** "Zatanna" is the name of a well-known DC Comics character (Zatanna Zatara), which creates brand disambiguation challenges in search results. Multiple search queries returned DC Comics content alongside company results, which could complicate SEO, brand building, and investor/customer discovery.

**Well-funded direct and adjacent competitors:** Trust AI raised $6.5M for a dental AI PMS with 8,000+ dentists already on the platform (PR Newswire, Feb 2026). DentalRobot has been building dental-specific RCM automation for five years. Overjet ($133M raised) and Pearl ($58M raised) dominate dental AI mindshare and could expand into administrative workflows. Zatanna must differentiate against both dental-native AI competitors and potential expansion from clinical AI players.

**Narrow vertical entry point:** Starting with dental limits initial addressable market to the $748M dental RCM segment (Towards Healthcare, 2025 via search snippet). While the company's description references broader "healthcare" ambitions, the dental-specific EOB dataset and insurer knowledge may not transfer directly to medical billing, which has different coding systems (CDT vs. CPT/ICD-10), payer dynamics, and regulatory requirements.

**Regulatory and compliance surface area:** Handling patient insurance data and claims requires HIPAA compliance and potentially state-specific insurance regulations. As an AI system making claims decisions and generating appeals, the company may face scrutiny over accuracy and liability for incorrect filings, particularly as AI regulation in healthcare evolves.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $748.3M dental RCM services market in 2025, 5.25% CAGR to $1.19B by 2034 (Towards Healthcare, 2025 via search snippet); $1.82B dental practice management software market in 2025, 8.64% CAGR (Towards Healthcare, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Rithvik Vanga (CEO): BSE CS U of Michigan, ex-Coinbase/Hamming AI/John Deere, IEEE-published researcher. Tarun Vedula (Co-founder): BS Data Science UW-Madison, ex-Amazon/AT&T. Alex Blackwell (CTO): ex-Pikkit. |
| Competitors | Trust AI ($6.5M seed, 8K+ dentists, full AI-native PMS vs. Zatanna's billing-layer focus); Overjet (~$133M raised, $550M valuation, clinical AI for providers & payers); Pearl ($58M Series B, 150K+ practitioners, FDA-cleared diagnostic AI); DentalRobot (funding unknown, direct RCM automation competitor with 5 years dental AI training) |
| Moat Signals | 30,000+ historical EOB dataset for pre-emptive AR prevention (LinkedIn company page, via search snippet); continuously learning system that codifies practice-specific tribal knowledge |
| Risk Factors | Brand confusion with DC Comics character, well-funded dental AI competitors (Trust AI, DentalRobot, Overjet, Pearl), narrow vertical entry limiting near-term TAM, healthcare regulatory/compliance surface area |
| Founder Reach | Rithvik Vanga: Twitter not found, LinkedIn profile found. Tarun Vedula: Twitter @TarunVedula (count not retrievable), LinkedIn profile found. Alex Blackwell: no verified social accounts found. |
| Distribution Signals | No public data found |
