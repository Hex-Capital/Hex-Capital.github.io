# Advocate

> The AI-native system for easy & reimbursable care coordination

| Field | Value |
|-------|-------|
| Website | https://advocatewellbeing.com |
| YC Page | https://speedrun.a16z.com/companies/advocate |
| Batch | No public data found (a16z Speedrun portal listing; page returned 404 at time of research) |
| Industry | AI, Healthcare, B2B / |
| Team Size | 4 |
| Location | New York, New York, United States of America |
| Tags | AI, Healthcare, B2B |
| YC Partner | Not listed (page not accessible at time of research) |
| Emails | andrew@advocatewellbeing.com, justinas@advocatewellbeing.com (a16z Speedrun portal) |

## The Idea

**Problem:** Care coordination staff at healthcare facilities (skilled nursing facilities, home health agencies, behavioral health centers) perform reimbursable work — scheduling, follow-ups, referrals, social determinant screenings — but frequently fail to bill for it. CMS billing codes such as CPT 99490 (Chronic Care Management, ~$62/month), CPT 99491 (Complex CCM), and related codes allow reimbursement for these activities, but the documentation and coding requirements are burdensome. [Inferred]: Most facilities lack dedicated billing staff for care coordination, leaving hundreds of dollars per patient per month uncaptured. Current alternatives require hiring medical coders or adopting full RCM platforms designed for physician billing rather than care coordination workflows.

**Approach:** Advocate captures staff voice notes — audio recordings of care coordination activities already being performed — and uses AI to convert them into coded, compliant, auditable billing packets (company description, a16z Speedrun portal). The system matches voice-documented activities to appropriate billing codes and generates submission-ready packets. The value proposition is "no new hires, no workflow changes, pure margin" (company description, a16z Speedrun portal).

**Differentiation:** Unlike full-stack RCM platforms (Waystar, CodaMetrix) that focus on physician encounter coding, Advocate targets a specific underserved niche: care coordination billing at the facility level. Unlike AI scribe tools (Abridge, DeepScribe, Suki) that document clinical encounters for physician notes, Advocate focuses on non-clinical staff activities and their associated billing codes. Unlike Careforce (YC F24), which automates the coordination work itself with AI workers, Advocate keeps existing human staff and workflow intact, adding only the billing capture layer.

**Business Model:** No public pricing page found. Website (advocatewellbeing.com) redirects to chiefofhealth.com, which was not fully accessible at time of research. [Inferred]: Most likely monetization is a percentage of recovered reimbursement or a per-patient-per-month SaaS fee, given the company's positioning around "unlocking hundreds per patient per month."

**TAM/SAM:** The care coordination software market was valued at $3.2B in 2024, projected to reach $8.1B by 2033 at 10.9% CAGR (Verified Market Research, 2024 via search snippet). The AI in revenue cycle management market was estimated at $20.6B in 2024, projected to reach $70.1B by 2030 at 24.2% CAGR (Grand View Research, 2024 via search snippet). [Inferred]: Advocate's SAM is a subset focused on non-physician care coordination billing at post-acute and behavioral health facilities, likely in the low single-digit billions.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to skilled nursing facilities, home health agencies, and behavioral health centers — facility types with high care coordination activity and low billing capture rates. The CEO's background at Radian Capital in healthcare vertical SaaS (a16z Speedrun portal) and his mother's career as a care coordinator suggest personal network-driven early sales.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) proprietary training data from processed voice notes and billing outcomes, creating increasingly accurate code-matching over time; (2) facility-level switching costs once billing workflows are built around the tool and historical audit trails are accumulated; (3) compliance/audit trail lock-in, as facilities become dependent on the system for regulatory documentation. None of these are proven at this stage.

**Market structure:** [Inferred]: Large RCM incumbents (Waystar, R1 RCM, Optum) focus on physician encounter coding at health systems and payer-provider interfaces. Care coordination billing at smaller facilities is low-ASP, fragmented, and requires different sales channels (facility administrators vs. hospital CFOs). This channel mismatch and the low per-account revenue may discourage incumbents from building a dedicated solution for this segment.

**Commoditization risk:** The core technology — speech-to-text plus medical code mapping — is built on widely available components (LLMs, ASR, CPT/ICD databases). Established AI scribe companies (Abridge, Suki, DeepScribe) could extend their products into care coordination coding. CodaMetrix and Sully.ai already automate medical coding and could add voice-note ingestion. The moat depends on domain-specific training data and workflow fit rather than technical novelty.

## Market & Traction

1. **Traction signals:** No public data found. No Product Hunt launch found. No app store listing found. No press coverage found in named publications. No social media accounts identified for the company (searches for "advocatewellbeing" on Twitter/X and LinkedIn returned no matching accounts). Website (advocatewellbeing.com) redirects to chiefofhealth.com, which displayed minimal content ("advocate-champion-hub" page identifier only) at time of research. The a16z Speedrun listing (speedrun.a16z.com/companies/advocate) returned 404. Company founded in 2025 (a16z Speedrun portal).

2. **Competitive landscape:**
   - **CodaMetrix** ($109M raised across Series A+B; revenue unknown; AI-powered autonomous multi-specialty medical coding; differentiator vs. Advocate: targets physician encounter coding at health systems with 200+ hospitals, not facility-level care coordination) (BusinessWire, Mar 2024; Fierce Healthcare, Mar 2024)
   - **Sully.ai** (~$35M raised including $20M Series A; ~$2M cARR; AI employees for hospitals including coding, scribing, triage; differentiator vs. Advocate: full-stack hospital automation rather than single-workflow voice-to-billing) (Sully.ai funding page; SalesTools, Jan 2025 via search snippet)
   - **Careforce** (YC F24, pre-seed; revenue unknown; AI workers for patient outreach and scheduling; differentiator vs. Advocate: replaces coordination staff with AI agents rather than augmenting existing staff with billing capture) (YC company page)
   - **Waystar** (public company, $1.1B revenue in 2025, 24% YoY growth; acquired Iodine Software for $1.25B; differentiator vs. Advocate: enterprise-scale RCM for health systems, not care coordination billing at smaller facilities) (Investing.com, Q4 2025; Fierce Healthcare, 2025)
   - **Understood Care** ($8.4M raised, YC-backed; AI-native patient advocacy platform for Medicare; differentiator vs. Advocate: provides human advocates enhanced by AI for patient navigation, not facility billing automation) (PR Newswire, Mar 2026)

3. **Why now:** CMS expanded reimbursable care management codes in recent years, including chronic care management (CCM), principal care management (PCM), and behavioral health integration codes, creating a larger addressable billing pool for non-physician care coordination activities. [Inferred]: The maturation of speech-to-text AI (Whisper, cloud ASR services) and LLM-based code mapping crossed a quality threshold in 2024-2025 that makes automated voice-to-billing-code conversion viable without manual review. The combination of expanded CMS codes and newly capable AI creates the specific opening.

## Founders & Team

**Andrew Baran** — Co-Founder & CEO
- Background: Co-founded Leilo.com per company profile (a16z Speedrun portal); public sources identify Sol Broady as Founder/CEO of Leilo (Shoutout LA) and Ethan Blattman as Co-Founder (LinkedIn); Leilo is a kava-based relaxation beverage brand acquired by Fiji Kava in 2022 (BevNet, 2022). Led software due diligence and AI workstreams at McKinsey (a16z Speedrun portal). Software growth equity investor at Radian Capital focused on healthcare and vertical SaaS (a16z Speedrun portal; LinkedIn). Class President and Oxbridge scholar at Columbia University; studied Economics, Political Science, Statistics (a16z Speedrun portal). Worked part-time at Citadel during school (a16z Speedrun portal). Z Fellows participant (LinkedIn via search snippet).
- Twitter/X: @andy_baran — follower count not retrievable
- LinkedIn: linkedin.com/in/andy-baran — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found attributable to this individual

**Justinas Banys** — Co-Founder & CTO
- Background: Led data teams and built systems at Garner Health, joining at Series A (a16z Speedrun portal). Garner Health is a care navigation startup valued at $1.35B after a $118M Series D (Fierce Healthcare, 2024). Senior Data Science Engineer title at Garner (Apollo.io). Previously built health monitoring applications at Analysis Group, 2019-2021 (a16z Speedrun portal). Williams College alumnus, class of 2019 (The Williams Record via search snippet).
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/justinas-banys — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Both founders are based in New York (LinkedIn via search snippet). Baran worked in healthcare investing at Radian Capital while Banys was building healthcare data systems at Garner Health. No shared employer or university identified from available data.

**Founder-market fit:** Baran brings a personal connection to care coordination (raised by a mother working as a care coordinator, per a16z Speedrun portal), healthcare investing experience at Radian Capital (healthcare + vertical SaaS), and McKinsey due diligence experience. Banys brings hands-on healthcare data engineering at Garner Health (a unicorn care navigation company) and health monitoring work at Analysis Group. The combination covers the commercial/domain side (Baran) and the data/engineering side (Banys). No advisors, board members, or notable investors identified from public sources.

## Key Risks

**Name confusion and discoverability:** "Advocate" is an extremely common word in healthcare. Search results are dominated by Advocate Health (a $27B+ health system), Health Advocate (employee benefits), ARPA-H's ADVOCATE program, and Citizen Health's "AI Advocate." This creates material SEO, discoverability, and brand confusion challenges. The domain redirect from advocatewellbeing.com to chiefofhealth.com may indicate an early-stage rebrand, adding further confusion.

**Regulatory and compliance exposure:** Billing packet generation touches CMS fraud and abuse regulations (False Claims Act, Anti-Kickback Statute). Automated coding errors that lead to upcoding could expose facilities to significant legal liability. The system must meet documentation standards for CMS audits. Regulatory risk is heightened because the product automates the step between clinical activity and billing submission.

**Incumbent extension risk:** AI scribe companies (Abridge, DeepScribe, Suki) already capture clinical voice data and are expanding into coding workflows. Adding care coordination billing codes to their existing voice-to-code pipeline is a natural product extension that would directly compete with Advocate's core value proposition.

**Reimbursement rate dependency:** The company's value proposition ("hundreds per patient per month") is anchored to current CMS reimbursement rates for care coordination codes. CMS rate changes, documentation requirement updates, or billing code restructuring could materially impact the per-patient revenue opportunity and thus the product's ROI case.

**Leilo co-founding claim discrepancy:** Public sources (Shoutout LA; BevNet, 2022) identify different individuals as Leilo founders. The CEO's claim of co-founding Leilo (a16z Speedrun portal) could not be independently verified in this research. If contested, this could raise credibility questions with investors.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Care coordination software: $3.2B in 2024, projected $8.1B by 2033 at 10.9% CAGR (Verified Market Research, 2024 via search snippet); AI in RCM: $20.6B in 2024, projected $70.1B by 2030 at 24.2% CAGR (Grand View Research, 2024 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Andrew Baran (CEO): Columbia, McKinsey, Radian Capital (healthcare VC), claims Leilo.com co-founder. Justinas Banys (CTO): Williams College '19, Analysis Group, Garner Health (data teams, joined at Series A). |
| Competitors | CodaMetrix ($109M raised, revenue unknown, AI medical coding for health systems) (BusinessWire, Mar 2024); Sully.ai (~$35M raised, ~$2M cARR, full-stack AI hospital employees) (SalesTools, Jan 2025 via search snippet); Waystar (public, $1.1B revenue 2025, enterprise RCM) (Investing.com, Q4 2025); Careforce (YC F24, pre-seed, AI care coordination workers) (YC company page); Understood Care ($8.4M raised, AI patient advocacy) (PR Newswire, Mar 2026) |
| Moat Signals | No public data found |
| Risk Factors | Name confusion with major healthcare entities, regulatory/compliance exposure on automated billing, incumbent AI scribes extending into care coordination coding |
| Founder Reach | Andrew Baran: Twitter @andy_baran (count not retrievable), LinkedIn 500+ connections. Justinas Banys: Twitter not found, LinkedIn 500+ connections. (LinkedIn via search snippet) |
| Distribution Signals | No public data found |
| Emails | andrew@advocatewellbeing.com, justinas@advocatewellbeing.com (a16z Speedrun portal) |
