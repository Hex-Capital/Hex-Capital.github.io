# Adialante

> Cancer screening without barriers

| Field | Value |
|-------|-------|
| Website | http://www.adialante.com |
| YC Page | https://www.ycombinator.com/companies/adialante |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare -> Diagnostics |
| Team Size | 4 (per YC page; company website lists 7 team members) |
| Location | Redwood City, CA, USA (originally founded in Minneapolis, MN) |
| Tags | Hardware, Medical Devices, Health & Wellness |
| YC Partner | Nicolas Dessaigne |
| Emails | clinics@adialante.com (company website) |

## The Idea

**Problem:** MRI is the most robust cancer-detection imaging modality available, yet conventional systems cost millions to purchase, take months to install, weigh tens of thousands of pounds, and require specialized infrastructure and technical staff (Adialante website). Approximately 90% of the global population lacks access to MRI (MNSBIR, Jul 2025). MRI machine design has remained largely unchanged for 40 years (Fogarty Innovation, Aug 2024). Current alternatives for cancer screening (CT, ultrasound) involve radiation exposure or lower diagnostic fidelity. Patients face long wait times and must travel to hospital-based imaging centers.

**Approach:** Adialante has developed a proprietary imaging method called Frequency-modulated Rabi-Encoded Echoes (FREE), which eliminates B0 gradient coils — a core hardware component of conventional MRI (Torres et al., Magnetic Resonance in Medicine, 2022; UMN CTSI, Mar 2024). This results in a system that is approximately one-third less hardware, one-tenth the weight, one-tenth the power consumption, and operates silently compared to traditional MRI (Fogarty Innovation, Aug 2024; UMN CTSI, Mar 2024). The system is deployed as a mobile MRI clinic on wheels: a truck arrives at a medical practice, and patients receive scans on-site. No capital equipment purchase or infrastructure build-out is required by the clinic (Adialante website).

**Differentiation:**
- vs. conventional MRI (Siemens, GE, Philips): Adialante's mobile-as-a-service model eliminates the multi-million-dollar capital expenditure and facility requirements. The FREE technique removes gradient coils entirely, enabling radical size and cost reduction (UMN CTSI, Mar 2024).
- vs. Hyperfine (portable MRI): Hyperfine's Swoop system is FDA-cleared for brain imaging only and is a bedside point-of-care device, not a mobile clinic service (Hyperfine investor relations, 2025). Adialante targets diagnostic-grade cancer screening starting with prostate, a different clinical application.
- vs. Promaxo (office-based MRI): Promaxo builds a compact in-office MRI for prostate biopsy guidance, requiring a clinic to purchase or lease the hardware (Promaxo website). Adialante's model is pay-per-scan with no hardware ownership.
- vs. Ezra (AI-enhanced MRI screening): Ezra uses existing third-party MRI machines paired with AI software to accelerate scans; acquired by Function Health in May 2025 (Radiology Business, 2025). Ezra does not build its own hardware.

**Business Model:** Flat per-scan fee charged to medical sites. No equipment purchase required by the clinic (Adialante website). Starting with prostate cancer screening for urology clinics (pre-biopsy MRI), then expanding to orthopedics, breast, renal, and neuroimaging (Adialante website). No public pricing data found.

**TAM/SAM:** The global MRI systems market was valued at $6.5B in 2025 and projected to reach $9.0B by 2030 at a 6.5% CAGR (MarketsandMarkets, 2025). The broader global medical imaging market was $38.5B in 2020, projected to reach $68.8B by 2030 at 5.8% CAGR (Allied Market Research, 2021). No public TAM/SAM estimate specific to mobile or low-cost MRI-as-a-service found.

**GTM / Distribution:** [Inferred]: The initial go-to-market is direct sales to urology clinics that currently refer patients out for pre-biopsy prostate MRI. The mobile clinic model reduces the clinic's adoption friction to zero capital expenditure, making per-scan economics the primary sales conversation. Geographic expansion likely follows a hub-and-spoke model from initial metro areas.

## Defensibility

- **IP / Patents:** The FREE (Frequency-modulated Rabi-Encoded Echoes) technology is patent-pending (UMN CTSI, Mar 2024). The core physics was published in a peer-reviewed paper in Magnetic Resonance in Medicine (Torres et al., 2022).
- **Technical complexity:** Redesigning MRI from the ground up — new physics, new algorithms, new hardware — represents years of R&D originating from a PhD program at the University of Minnesota under advisor Dr. Michael Garwood, a professor of radiology with decades of imaging expertise (Fogarty Innovation, Aug 2024).
- **Regulatory barrier:** MRI devices require FDA 510(k) clearance or De Novo authorization. Adialante has not yet received FDA clearance (no public clearance data found). This creates a barrier to entry for any new competitor but also represents a gate Adialante must clear.
- **Business model moat:** [Inferred]: The mobile-as-a-service model bundles hardware, logistics, and clinical operations. Replicating this requires not just building the scanner but also managing the fleet, scheduling, and clinical workflow — an operational moat that builds with scale.

**Market structure:** Incumbent MRI manufacturers (Siemens Healthineers, GE HealthCare, Philips) sell multi-million-dollar systems to hospitals. [Inferred]: A low-cost mobile per-scan model would cannibalize their installed base economics and disrupt their capital-equipment sales channel. Incumbents also lack the operational infrastructure for a mobile service fleet.

**Commoditization risk:** Building a gradient-free MRI from scratch requires deep MR physics expertise, custom RF hardware, and novel reconstruction algorithms. The FREE technique is patent-pending. [Inferred]: The closest analog, Hyperfine, took over 5 years and >$200M to bring its portable MRI (different technology) to FDA clearance, suggesting substantial time-to-replicate for any new entrant.

## Market & Traction

**Traction signals:**
- Total funding raised: over $3M (MNSBIR, Jul 2025); earlier source cited $1.3M as of Mar 2024 (UMN CTSI)
- Investors: Y Combinator, Fogarty Innovation, Brown Venture Group, NSF SBIR, Walleye Tank, angel investors (Adialante website; PitchBook; MNSBIR)
- NSF SBIR Phase I grant: awarded (NSF; exact amount not publicly detailed)
- NSF SBIR Phase II grant: $1.18M (MNSBIR, Jul 2025)
- ODAT (UMN) grant: $148,000 for pediatric MRI application (UMN CTSI, Mar 2024)
- Walleye Tank Grand Prize: $10,000, December 1, 2023 (UMN Research & Innovation Office)
- MN Cup Semifinalist (MNSBIR, Jul 2025)
- NSF Director Highlight (MNSBIR, Jul 2025)
- NSF I-Corps program participant (NSF I-Corps Hub: Great Lakes Region)
- Fogarty Innovation Company Accelerator Program (CAP) participant (Fogarty Innovation, Aug 2024)
- Conference presentations: LSI USA '24 and LSI Europe '24 (Life Science Intelligence, YouTube)
- LinkedIn followers: ~140 (LinkedIn company page via search snippet)
- Twitter/X: @ET_adialante listed on YC page (follower count not retrievable)
- Founded: 2022-2023 (Fogarty Innovation says "two years ago" as of Aug 2024; PitchBook says 2022)
- Seed round target: $3.5M (UMN CTSI, Mar 2024)
- No revenue, customer count, or scan volume data publicly reported.
- No Product Hunt launch found.
- No Discord/Slack community found.
- No app store presence (hardware product).
- No active job postings (YC page shows 0 open positions).

**Competitive landscape:**

| Competitor | Key Differentiator vs. Adialante | Funding | Revenue |
|---|---|---|---|
| **Hyperfine** (HYPR, public) | FDA-cleared portable MRI for brain only; bedside device, not mobile service; low-field (64mT) | Public company; ~$27.3M net financing proceeds in 2025 (Hyperfine investor relations) | $13.5M FY2025 revenue (Hyperfine Q4 2025 earnings) |
| **Promaxo** | In-office compact MRI for prostate biopsy guidance; clinic purchases/leases hardware | ~$72-81M total raised; $41.9M Series C (Mar 2024) (PitchBook; Tracxn) | Revenue not disclosed |
| **Ezra** (acquired by Function Health, May 2025) | AI software layer on existing third-party MRI machines; no proprietary hardware | $44M total raised; $21M round (Feb 2024) (Crunchbase; BusinessWire) | Doubled revenue in 2023; exact figures not disclosed (Radiology Business) |
| **Openwater** | Uses optoelectronics (not MRI magnets); wearable form factor; targets sub-$1K device | $100M total raised; $54M Series C (Aug 2024) (Tracxn) | Revenue not disclosed |

**Why now:**
- The underlying FREE physics was published in 2022 (Torres et al., Magnetic Resonance in Medicine), enabled by advances in computational power for novel image reconstruction algorithms (UMN CTSI, Mar 2024).
- [Inferred]: Declining costs of high-performance computing make real-time reconstruction from non-traditional encoding schemes (like FREE) clinically feasible for the first time.
- [Inferred]: Growing clinical adoption of prostate MRI before biopsy (driven by NCCN guidelines and PI-RADS standardization) creates a specific demand pull for accessible MRI in urology practices.

## Founders & Team

**Efraín Torres, PhD** — Co-founder & CEO
- PhD in Biomedical Engineering, University of Minnesota (completed fall 2023) (UMN CTSI, Mar 2024)
- BS in Biomedical Engineering, Marquette University (Fogarty Innovation, Aug 2024)
- Prior experience: Boston Scientific, Imaging Biometrics LLC, Marquette University (LinkedIn via search snippet)
- First-generation college graduate; grew up in Little Village, Chicago's south side (UMN CTSI, Mar 2024; Fogarty Innovation, Aug 2024)
- Inventor of the FREE MRI technique; published in Magnetic Resonance in Medicine (2022)
- PhD advisor: Dr. Michael Garwood, Professor of Radiology, UMN (UMN CTSI, Mar 2024)
- Presented at LSI USA '24 and LSI Europe '24 (Life Science Intelligence; YouTube)
- Twitter/X: @ET_adialante (per YC page; follower count not retrievable)
- LinkedIn: linkedin.com/in/efraín-torres-phd-85293512a — CEO & Co-Founder, Adialante
- GitHub: No public repos found

**Parker Jenkins, MS** — Co-founder & COO
- MS in Biomedical Engineering, University of Minnesota (PhD student as of Mar 2024) (UMN CTSI)
- BS in Biomedical Engineering, Marquette University (Fogarty Innovation, Aug 2024)
- Focus on imaging hardware (Adialante website)
- From Minneapolis suburbs; motivated by rural healthcare gaps in northern Minnesota (Fogarty Innovation, Aug 2024)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/parker-jenkins-486893130 — listed as Fogarty Innovation affiliation
- GitHub: No public repos found

Additional team members per company website: Michael Mullen, PhD (Principal Software Engineer, Physics PhD UMN); Sai Abitha Srinivas, PhD (Principal Systems Engineer, BME PhD Vanderbilt, Rabi Award winner); Daniel Pizetta, PhD (Staff Software Engineer, Computational Physics, University of São Paulo); Kyle King (CFO); Nabil Othman (Junior Software Engineer).

**Co-founder relationship:** Torres and Jenkins met on the first day of classes at Marquette University as undergraduates (same dormitory floor) and both pursued graduate studies at the University of Minnesota in biomedical engineering (Fogarty Innovation, Aug 2024).

**Founder-market fit:** Both co-founders hold biomedical engineering degrees with specific MRI specialization from a top-ranked program (UMN) under Dr. Michael Garwood, a leading MRI researcher. Torres invented the core FREE technology during his PhD and has prior medical device industry experience at Boston Scientific and Imaging Biometrics. Jenkins brings hardware engineering focus. Their team includes additional PhD-level engineers in MR physics, systems engineering, and computational physics, giving the company deep bench strength in the core technical domain.

## Key Risks

**FDA regulatory pathway uncertainty:** Adialante's novel MRI technology (FREE) has no predicate device using the same physics, which may require a De Novo classification rather than a simpler 510(k) pathway. No FDA submission or clearance has been publicly announced. Timeline to clearance is uncertain and could delay commercial launch significantly.

**Clinical validation gap:** The FREE technique has been demonstrated in published research (Torres et al., 2022), but no peer-reviewed clinical trial data comparing diagnostic accuracy to conventional MRI has been publicly reported. Urology practices will need evidence of diagnostic equivalence before adopting the system for pre-biopsy prostate imaging.

**Capital intensity of hardware + fleet operations:** Building MRI hardware and operating a mobile fleet requires significant capital for manufacturing, vehicles, staffing, and logistics. The company's current ~$3M in funding (MNSBIR, Jul 2025) and $3.5M seed target (UMN CTSI, Mar 2024) may be insufficient for scaled manufacturing and fleet deployment without substantial follow-on funding.

**Well-funded competition in adjacent space:** Hyperfine ($13.5M FY2025 revenue), Promaxo (~$72-81M raised), and Openwater ($100M raised) are pursuing portable/low-cost MRI with different technical approaches and significantly more capital. While none currently offer a mobile-as-a-service model for cancer screening, any could pivot toward similar deployment models.

**Name disambiguation risk:** "Adialante" is similar to "Adial Pharmaceuticals" (NASDAQ: ADIL), a public clinical-stage pharma company. Search results occasionally conflate the two entities.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global MRI systems market $6.5B in 2025, projected $9.0B by 2030 at 6.5% CAGR (MarketsandMarkets, 2025) |
| SAM | No public data found |
| Traction | $3M+ total funding raised (MNSBIR, Jul 2025); $1.18M NSF SBIR Phase II (MNSBIR, Jul 2025); Walleye Tank Grand Prize (UMN Research Office, Dec 2023); Fogarty Innovation CAP participant (Fogarty Innovation, Aug 2024); YC S26 batch (YC page) |
| Revenue Signal | No public data found |
| Founders | Efraín Torres (CEO): PhD BME UMN, FREE inventor, ex-Boston Scientific. Parker Jenkins (COO): MS BME UMN, hardware focus, Marquette alum. |
| Competitors | Hyperfine (public; $13.5M FY2025 rev; portable brain MRI, not cancer screening), Promaxo (~$72-81M raised; revenue unknown; in-office prostate MRI), Ezra ($44M raised; revenue unknown; AI on existing MRI, acquired by Function Health May 2025), Openwater ($100M raised; revenue unknown; optoelectronics, not MRI magnets) |
| Moat Signals | Patent-pending FREE technology (UMN CTSI, Mar 2024); peer-reviewed publication (Magnetic Resonance in Medicine, 2022); novel physics requiring deep MR expertise |
| Risk Factors | FDA pathway uncertainty (no clearance announced), clinical validation gap, capital-intensive hardware + fleet model |
| Founder Reach | Torres: Twitter @ET_adialante (count not retrievable), LinkedIn (profile found). Jenkins: LinkedIn (profile found), Twitter not found. Company LinkedIn ~140 followers (LinkedIn via search snippet) |
| Distribution Signals | No public data found |
| Emails | clinics@adialante.com (company website) |
