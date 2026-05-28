# Framewise Health

> AI-native patient engagement

| Field | Value |
|-------|-------|
| Website | https://framewisehealth.com |
| YC Page | https://www.ycombinator.com/companies/framewise-health |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Health Tech, B2B |
| YC Partner | Aaron Epstein |
| Emails | contact@framewisehealth.com, tane@framewisehealth.com |

## The Idea

- **Problem:** Hospitals discharge patients with paper instructions in English that patients cannot understand across 75+ languages, with no scalable alternative beyond manual nurse calls or printed handouts (Framewise website).
- **Approach:** Pulls medical record data via FHIR integrations (Epic, Oracle/Cerner, athenahealth, ModMed, eClinicalWorks, NextGen), auto-generates a personalized video reviewed by clinicians, and delivers it via SMS with no app or login (Framewise website).
- **Differentiation:** Memora Health automates care via text messaging without auto-generated personalized video (CB Insights); Klara is HIPAA-compliant secure messaging and video calls between staff and patients, not AI-generated patient-specific content (SelectHub); [Inferred]: PatientPoint and CipherHealth deliver standardized non-personalized educational content versus per-patient generated video.
- **Business Model:** No pricing disclosed on the website; demo booking via Calendly (Framewise website); [Inferred]: B2B SaaS sold to hospitals, specialty groups, and pharma per stated customer segments (Framewise website).
- **TAM/SAM:** US Patient Engagement Solutions Market $14.55B in 2025 projected to $25.01B by 2030 at 11.4% CAGR (MarketsandMarkets, 2025); global patient engagement solutions $29.33B in 2025 to $51.69B by 2030 (Grand View Research, 2025).
- **GTM / Distribution:** [Inferred]: Direct sales to hospitals, specialty groups, medical devices, and pharma based on stated target segments (Framewise website + YC page); no public partnerships, pilots, or signed customer announcements found.

## Defensibility

- **Moat today:** FHIR-native integrations live with 6 named EHRs (Epic, Oracle/Cerner, athenahealth, ModMed, eClinicalWorks, NextGen) plus HIPAA and SOC 2 compliance (Framewise website); no proprietary dataset, customer count, or contract evidence found in public sources.
- **Future moat:** [Inferred]: Engagement data collected across patients could train downstream personalization models per company description (YC page), unproven now because no traction metrics are public.
- **Market structure:** [Inferred]: EHR-integrated SMS-delivered video personalization combines clinical-content liability, FHIR plumbing, and per-patient generative pipeline that EHR incumbents have not bundled, but no structural barrier is documented in public sources.
- **Commoditization risk:** Memora Health (acquired by Commure Dec 2024 per Tracxn), CipherHealth, and Hyro operate adjacent patient-communication infrastructure (CB Insights, SelectHub) and could add AI-video personalization on top of existing customer bases.

## Market & Traction

- **Traction signals:**
  - $500K raised, standard YC investment (PitchBook profile via search snippet).
  - Y Combinator launch tweet posted with co-founder handles @tanekimm and @sourdoggy8 (Y Combinator X post).
  - LinkedIn company page exists at linkedin.com/company/framewise-health (LinkedIn search result); follower count not retrievable.
  - X/Twitter account @FramewiseHealth created January 2026 (X profile via search snippet); follower count not retrievable.
  - Founderland article: "YC-Backed Framewise Health Turns Medical Records Into Patient Videos" (Founderland.ai).
  - No revenue, customer count, paying-customer disclosure, Product Hunt listing, or app store data found.
- **Competitors:**
  - Memora Health ($80.6M raised across 5 rounds, latest $30M Apr 2023, revenue unknown, acquired by Commure Dec 2024 — Tracxn, FinSMEs): text-based complex-care messaging without auto-generated personalized video.
  - Klara (~$32M raised across 8 rounds including $11.5M Series A led by FirstMark and $15M from Gradient Ventures, revenue unknown — Tracxn, TechCrunch, Fierce Healthcare): secure provider-patient messaging and telehealth, not AI-generated video education.
  - Hyro (raised unknown total, revenue unknown — CB Insights): AI healthcare conversational automation for call centers/mobile, not video.
  - PatientPoint (raised unknown, revenue unknown — CB Insights): point-of-care educational content distribution; non-personalized.
  - CipherHealth (raised unknown, revenue unknown — SelectHub): patient outreach/rounding software, not AI-video personalization.
- **Why now:** [Inferred]: Text-to-video generative models crossed a quality threshold in 2024–2025 enabling clinician-reviewable personalized medical video at scale; no analyst statement found tying this specifically to patient education.

## Founders & Team

- **Tane Kim (CEO):**
  - Background: Dropped out of Brown's BS/MD program; observed 500+ patient interactions across a dozen-plus institutions (YC page).
  - Twitter/X: @tanekimm (Y Combinator X launch post); follower count not retrievable.
  - LinkedIn: "Framewise Health" headline at linkedin.com/in/tanekim/ (LinkedIn search result).
  - GitHub: No public repos found.
- **David Cui (CTO):**
  - Background: Computer vision research at Brown; prior engineering intern at Freya (YC S25 voice AI company) per YC page bio.
  - Twitter/X: @sourdoggy8 (Y Combinator X launch post); follower count not retrievable.
  - LinkedIn: "Co-founder @ Framewise Health | Building AI-generated patient education tools" at linkedin.com/in/david-cui-589a20228/ (LinkedIn search result).
  - GitHub: No public repos confirmed for this individual (search returned unrelated "David Cui" profiles).
- **Co-founder relationship:** Tane Kim and David Cui met during Brown University freshman orientation (search snippet).
- **Founder-market fit:** CEO has direct clinical exposure via Brown BS/MD program and 500+ patient interactions, and CTO contributes computer-vision research plus YC voice-AI engineering experience at Freya S25 (YC page); no advisors, board members, or investors beyond YC are publicly named.

## Key Risks

- **No documented paying customers or pilots:** Website lists six EHR integrations and target segments but discloses zero customer logos, pilot announcements, or revenue figures (Framewise website); pre-revenue at time of research with no mitigating disclosed letters of intent.
- **Clinical liability and regulatory exposure:** AI-generated medical discharge instructions delivered to patients carry FDA software-as-medical-device and malpractice exposure; mitigation per website is "Reviewed by clinicians" in the workflow (Framewise website), but the regulatory posture (e.g., FDA classification) is not publicly clarified.
- **Incumbent substitution after Commure–Memora consolidation:** Commure acquired Memora Health on 2024-12-20 (Tracxn), concentrating an EHR-adjacent patient-communication incumbent that could bundle AI video personalization into existing hospital contracts.
- **EHR integration dependency:** Distribution depends on FHIR access through Epic, Oracle/Cerner, athenahealth, ModMed, eClinicalWorks, NextGen (Framewise website); any of these vendors shipping native AI patient-education video creates direct substitution risk.
- **Technical feasibility of clinical-grade auto-generated video at scale:** 75+ language personalized clinical video with clinician review is unproven at hospital volume in public sources; no third-party accuracy, safety, or comprehension metrics published.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | US Patient Engagement Solutions $14.55B (2025) → $25.01B (2030), 11.4% CAGR (MarketsandMarkets, 2025); global $29.33B (2025) → $51.69B (2030) (Grand View Research, 2025) |
| SAM | No public data found |
| Traction | $500K YC investment (PitchBook via search snippet); LinkedIn company page live (LinkedIn, 2026); X account @FramewiseHealth created Jan 2026 (X profile via search snippet); Founderland feature article (Founderland.ai); YC launch tweet (Y Combinator X, 2026) |
| Revenue Signal | No public data found |
| Founders | Tane Kim (CEO): Brown BS/MD dropout, 500+ patient interactions observed. David Cui (CTO): Brown computer vision researcher, prior engineering intern at Freya (YC S25). |
| Competitors | Memora Health ($80.6M raised, revenue unknown — text-based care messaging without auto-generated video, acquired by Commure Dec 2024); Klara ($32M raised, revenue unknown — secure provider-patient messaging, not AI video); Hyro (raised unknown, revenue unknown — AI call-center automation, not video); PatientPoint (raised unknown, revenue unknown — non-personalized point-of-care content); CipherHealth (raised unknown, revenue unknown — patient outreach/rounding, not AI video) |
| Moat Signals | FHIR integrations with 6 EHRs (Epic, Oracle/Cerner, athenahealth, ModMed, eClinicalWorks, NextGen); HIPAA + SOC 2 compliant (Framewise website) |
| Risk Factors | No public customer/revenue traction, clinical/FDA regulatory exposure on AI-generated medical instructions, EHR-vendor substitution risk |
| Founder Reach | Tane Kim: Twitter @tanekimm (count not retrievable), LinkedIn /in/tanekim/ (count not retrievable), GitHub not found. David Cui: Twitter @sourdoggy8 (count not retrievable), LinkedIn /in/david-cui-589a20228/ (count not retrievable), GitHub not found. |
| Distribution Signals | Y Combinator launch tweet (Y Combinator X, 2026); Founderland article (Founderland.ai); LinkedIn YC post on Framewise patient adherence (LinkedIn, 2026) |
| Emails | contact@framewisehealth.com (Framewise website), tane@framewisehealth.com (YC page) |

Sources:
- [Framewise Health YC page](https://www.ycombinator.com/companies/framewise-health)
- [Framewise Health website](https://framewisehealth.com)
- [Framewise Health PitchBook](https://pitchbook.com/profiles/company/1389034-27)
- [Founderland article](https://www.founderland.ai/articles/yc-backed-framewise-health-turns-medical-records-into-patien-mp5lsoc6)
- [Y Combinator launch tweet](https://x.com/ycombinator/status/2053934029175660642)
- [Tane Kim LinkedIn](https://www.linkedin.com/in/tanekim/)
- [David Cui LinkedIn](https://www.linkedin.com/in/david-cui-589a20228/)
- [Framewise Health LinkedIn](https://www.linkedin.com/company/framewise-health/)
- [Memora Health Tracxn](https://tracxn.com/d/companies/memora-health/__bHY6JT6r_fUCHM3Rki9LHrIRyECDaXUPI_xqNtMh73g/funding-and-investors)
- [Memora Health $30M FinSMEs](https://www.finsmes.com/2023/04/memora-health-raises-30m-in-funding.html)
- [Klara $11.5M Series A TechCrunch](https://techcrunch.com/2018/08/07/klara-picks-up-11-5-million-to-improve-communication-in-healthcare/)
- [Klara $15M Gradient Ventures Fierce Healthcare](https://www.fiercehealthcare.com/tech/google-s-ai-focused-venture-fund-invests-digital-health-company-klara)
- [Memora competitors CB Insights](https://www.cbinsights.com/company/memora-health/alternatives-competitors)
- [Klara alternatives SelectHub](https://www.selecthub.com/patient-engagement-software/klara/alternatives/)
- [MarketsandMarkets US patient engagement](https://www.marketsandmarkets.com/PressReleases/us-patient-engagement-solutions.asp)
- [Grand View Research patient engagement](https://www.grandviewresearch.com/industry-analysis/patient-engagement-solutions-market)
