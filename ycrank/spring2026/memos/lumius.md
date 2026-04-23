# Lumius

> Fast, smart, accessible 3D ultrasound for everyone

| Field | Value |
|-------|-------|
| Website | https://www.lumius-imaging.com |
| YC Page | https://www.ycombinator.com/companies/lumius |
| Batch | Spring 2026 (P26) |
| Industry | Healthcare / Medical Devices |
| Team Size | 4 |
| Location | Durham, NC, USA |
| Tags | Hard Tech, Medical Devices, Digital Health |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

Note: The company website's About page lists four co-founders plus four advisors (lumius-imaging.com/about). The YC page lists three co-founders (Chenhang Li, Luca Menozzi, Tri Vu) and omits the fourth, Junjie Yao, who holds the title "President, Scientific Advisor & Co-Founder" (lumius-imaging.com/about). The website carries an FDA disclaimer: "These statements and products have not been evaluated by the FDA. They are not intended for medical use" (lumius-imaging.com).

---

## The Idea

**Problem:** Ultrasound imaging today is predominantly 2D (YC page). Clinicians must mentally reconstruct 3D anatomy while simultaneously manipulating the probe, making procedures like vascular access difficult to learn and perform consistently (YC page). Approximately 50% of vascular access attempts fail on the first try (YC page). Hospitals spend millions annually on 2D ultrasound training (YC page). Existing 3D ultrasound devices cost over 10x as much as 2D systems (YC page).

**Approach:** Lumius builds a real-time 3D ultrasound system that displays a volumetric view of subsurface anatomy—working over a large volume rather than a thin 2D slice (YC page). The device is designed to be affordable, compact, and portable (YC page). The initial clinical application is vascular access, specifically central line placement (YC page). The underlying technology draws on diffractive acoustic tomography (3D-DAT), developed in the Duke Photoacoustic Imaging Lab, which uses an off-the-shelf linear-array transducer with single-slit acoustic diffraction to achieve simultaneous 3D photoacoustic and ultrasound imaging with near-isotropic resolution and a large field of view (2023 BMES Annual Meeting abstract). Future use cases include blood clot detection, tumor diagnosis, and biopsy guidance (YC page).

**Differentiation:**
- vs. **Butterfly Network** ($2,000–$3,000 handheld probe, 2D imaging): Butterfly offers AI-assisted 2D POCUS; Lumius provides native real-time 3D volumetric imaging (YC page, Butterfly product page).
- vs. **Exo** (handheld 2D POCUS with AI workflow tools): Exo focuses on AI-enhanced 2D imaging and workflow; Lumius differentiates on 3D volumetric reconstruction at an affordable form factor (Exo product page, YC page).
- vs. **GE Vscan Air** (pocket-sized 2D): Incumbent portable product remains 2D; a dual-probe system for cardiac and vascular assessments but no real-time 3D (GE HealthCare product page).
- vs. legacy 3D/4D ultrasound systems (GE Voluson, Philips EPIQ): These offer 3D but are cart-based, expensive (>10x cost), and designed for radiology suites rather than point-of-care bedside use (YC page).

**Business Model:** No pricing page or revenue figures are publicly available (lumius-imaging.com). The website offers a "Book a Demo" CTA, suggesting a direct sales or field-sales engagement model (lumius-imaging.com). [Inferred]: Most likely monetization path is hardware device sales to hospitals and clinics, potentially with recurring software/service subscriptions, given the medical device category and the "Book a Demo" go-to-market motion.

**TAM/SAM:**
- 3D Vascular Ultrasound Imaging Market: $525.1M in 2025, projected to $894.7M by 2035 at 5.6% CAGR (OMR Global, 2025 via search snippet).
- Broader 3D Ultrasound Market: $4.26B in 2025, projected to $7.21B by 2032 at 7.8% CAGR (Coherent Market Insights, 2025 via search snippet).
- Point-of-Care Ultrasound Market: $1.5B in 2025, projected to $5.56B by 2034 (Fortune Business Insights, 2025 via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to hospital systems and academic medical centers, starting with anesthesiology and critical care departments that perform central line placements. The "Book a Demo" model and Durham, NC location (adjacent to Duke Health) suggest an initial land-and-expand strategy through Duke-affiliated clinical networks.

---

## Defensibility

- **IP/Technical complexity:** The core technology—3D diffractive acoustic tomography (3D-DAT)—was developed in the Duke Photoacoustic Imaging Lab under Prof. Junjie Yao, a Lumius co-founder (Duke PAI Lab). Building real-time volumetric reconstruction from a linear-array transducer with single-slit acoustic diffraction requires specialized expertise in acoustic physics, signal processing, and hardware design (2023 BMES abstract). [Inferred]: Duke-originated IP likely includes patentable methods around the diffraction grating and reconstruction algorithms.
- **Regulatory barriers:** FDA clearance (510(k) or de novo) is required before commercial medical use; the current product has not been evaluated by the FDA (lumius-imaging.com disclaimer). This creates a barrier to entry for any follower once Lumius obtains clearance.
- **Founder-domain lock-in:** Three of four co-founders hold PhDs from Duke's photoacoustic imaging program, and the fourth (Junjie Yao) leads the lab (Duke PAI Lab, Duke BME). This team has multi-year head start in the specific imaging modality.

**Market structure:** [Inferred]: Large incumbents (GE, Philips, Siemens) sell premium cart-based 3D systems at high price points ($50K–$200K+). Introducing an affordable, portable 3D device would cannibalize their high-margin product lines—a classic innovator's dilemma. Incumbents' sales channels are optimized for radiology departments and capital equipment procurement, not bedside point-of-care adoption.

**Commoditization risk:** Butterfly Network and Exo have significant engineering teams and capital ($353.5M and $428M raised respectively) (Crunchbase, Fierce Biotech). Both could pursue 3D capabilities. Clarius is actively developing 3D volume registration using IMU data (Clarius blog). However, achieving real-time volumetric imaging at low cost from a single transducer requires the specific DAT approach that Lumius's team invented. [Inferred]: Commoditization risk is moderate—well-funded competitors could pursue alternative 3D approaches, but replicating the specific DAT method would require licensing or independent invention.

---

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or customer metrics found.
- No Product Hunt launch found.
- No app store presence found.
- No GitHub repositories found.
- LinkedIn company page exists at linkedin.com/company/lumius-imaging (LinkedIn); follower count not retrievable.
- No company Twitter/X account found; no Discord/Slack community found.
- No job postings listed on YC page (YC page).
- Website offers "Book a Demo" as only conversion point (lumius-imaging.com).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Lumius |
|---|---|---|---|
| Butterfly Network | $353.5M; public via SPAC (Crunchbase) | $97.6M TTM (PitchBook, Dec 2025) | Chip-based 2D POCUS; mass-market pricing (~$2K); no native 3D |
| Exo | $428M total (Crunchbase, Fierce Biotech) | Revenue unknown | Handheld 2D POCUS with AI workflow platform; no real-time 3D volumetric |
| EchoNous | $60M raised (search snippet) | Revenue unknown | AI-enhanced Kosmos platform <$12K; Color Doppler for vascular access; 2D only |
| Clarius | $39.1M raised; Series B Mar 2022 (Crunchbase) | Revenue unknown | Wireless portable 2D with developing 3D via IMU-based volume registration |
| Rivanna Medical | $3.25M raised (Tracxn) | Revenue unknown | Accuro 3S with SpineNav-AI for neuraxial procedures; FDA 510(k) cleared Jul 2025; niche focus on spinal needle guidance |

**Why now:**
- [Inferred]: Advances in computational power and GPU-accelerated signal processing have made real-time 3D reconstruction from acoustic diffraction data feasible on portable hardware—a threshold that was not practical five years ago.
- Point-of-care ultrasound adoption has accelerated: the POCUS market is projected to grow from $1.5B to $5.56B by 2034 (Fortune Business Insights, 2025 via search snippet).
- Exo's $220M Series C (Jul 2021) and Samsung's potential $100M investment in Exo (TechCrunch, May 2025) signal strong investor conviction in next-generation portable ultrasound.

---

## Founders & Team

**Tri Vu, PhD** — CEO & Co-Founder
- PhD, Duke University (Photoacoustic Imaging Lab) (Duke PAI Lab)
- BS Biomedical Engineering, University at Buffalo (Duke PAI Lab)
- Research Assistant Professor, University of Oklahoma (LinkedIn)
- Research focus: high-intensity focused ultrasound (HIFU) and deep-learning applications in photoacoustic computed tomography (Duke PAI Lab)
- Prior experience at Philips (search snippet, unconfirmed via direct source)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/tri-vu-pilab/ — "Research Asst. Professor | Entrepreneur | Research Scientist | Photoacoustic & Ultrasound Imaging"
- GitHub: No public repos found

**Luca Menozzi** — CTO & Co-Founder
- PhD candidate, Biomedical Engineering, Duke University (Duke PAI Lab)
- NSF Graduate Research Fellow (LinkedIn)
- BS Biomedical Engineering, UNC Chapel Hill / NC State joint program; BA Mathematics, UNC Chapel Hill (Duke PAI Lab)
- Developed 3D diffractive acoustic tomography (3D-DAT) — the core technology behind Lumius (2023 BMES abstract)
- Published on PAUSAT system for 3D brain imaging of ischemic stroke (PubMed)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/luca-menozzi-7490a6154 — "BME PhD Candidate @ Duke || NSF Graduate Research Fellow"
- GitHub: No public repos found

**Chenhang Li** — COO/CFO & Co-Founder
- PhD candidate, Duke University (Ni Lab — epidermal electronics, programmable materials, soft robotics) (Duke Ni Lab)
- MS Theoretical and Applied Mechanics, Northwestern University (ResearchGate)
- BE Civil and Environmental Engineering, Rutgers University (ResearchGate)
- Research focus: wearable electronics, mechano-acoustic wave sensing, multiphysics modeling of bioelectronics (ResearchGate)
- Twitter/X: @lichenhang1225 (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/chenhang-li-00330632b/ — "Co-Founder - Lumius Imaging"
- GitHub: No public repos found

**Junjie Yao, PhD** — President, Scientific Advisor & Co-Founder
- Jeffrey N. Vinik Associate Professor of Biomedical Engineering, Duke University (Duke BME)
- Google Scholar: 11,000+ citations, H-index 50 (Google Scholar)
- Awards: 2019 IEEE Photonic Society Young Investigator Award; 2022 NSF CAREER Award; 2023 OPTICA Fellow (Duke BME)
- Leads the Photoacoustic Imaging Lab at Duke; affiliated with Duke Cancer Institute, Duke Institute of Brain Sciences (Duke BME)

**Advisors:** Jun Xia, PhD (Scientific); Jeffrey Lawson, MD, PhD (Clinical); Keith Hemmert, MD (Clinical); Barry Myers, MD, PhD (Business); Shayne Messerly (Industry) (lumius-imaging.com/about).

**Co-founder relationship:** All four co-founders are affiliated with Duke University — Tri Vu and Luca Menozzi both worked in Prof. Junjie Yao's Photoacoustic Imaging Lab, while Chenhang Li is in a different Duke lab (Ni Lab). Junjie Yao is the PI who supervised the research underlying the company's technology. The three junior co-founders share the common thread of Duke doctoral programs.

**Founder-market fit:** The team is directly responsible for inventing the core imaging technology (3D-DAT) at Duke. Tri Vu brings industry experience (Philips, per search snippet) and academic research leadership. Luca Menozzi developed the specific diffractive acoustic tomography system. Chenhang Li adds hardware/electronics expertise from wearable device research. Junjie Yao, with 11,000+ citations and multiple national awards in photoacoustic imaging, provides deep scientific credibility and likely IP ownership through Duke.

---

## Key Risks

**FDA regulatory timeline:** The product explicitly has not been evaluated by the FDA (lumius-imaging.com). Medical device clearance (510(k) or de novo) is required before commercial sale for clinical use. Timelines for novel imaging modalities can extend 12–24+ months and require clinical validation studies. No public information on submission status was found.

**Well-funded competitors pursuing 3D:** Butterfly Network ($353.5M raised, public company) and Exo ($428M raised) have substantial resources to develop 3D capabilities (Crunchbase, Fierce Biotech). Clarius is actively developing 3D volume reconstruction (Clarius blog). If any of these companies delivers an adequate 3D solution first, Lumius's window narrows.

**Academic-to-commercial transition:** All four co-founders come from academic research at Duke, with no publicly documented prior startup operating experience or exits. The transition from lab prototype to manufactured, FDA-cleared, commercially distributed medical device requires supply chain, manufacturing, regulatory, and sales capabilities not evidenced in the current team's public profiles.

**Name confusion risk:** "Lumius" is phonetically similar to "Lumus" (an Australian radiology services company with its own Crunchbase and PitchBook profiles) and "Lumus" (an Israeli AR optics company with a Wikipedia page). This could create brand confusion in investor searches, press coverage, and SEO.

---

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | 3D Vascular Ultrasound Imaging: $525.1M in 2025 (OMR Global, 2025 via search snippet); Broader 3D Ultrasound: $4.26B in 2025 (Coherent Market Insights, 2025 via search snippet) |
| SAM | Point-of-Care Ultrasound Market: $1.5B in 2025 (Fortune Business Insights, 2025 via search snippet) |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Tri Vu (CEO): PhD Duke, Photoacoustic/Ultrasound imaging, Research Asst. Prof at OU. Luca Menozzi (CTO): PhD candidate Duke, NSF Fellow, invented 3D-DAT. Chenhang Li (COO/CFO): PhD candidate Duke, wearable electronics. Junjie Yao (President/Advisor): Duke Assoc. Prof, 11K+ citations, OPTICA Fellow. |
| Competitors | Butterfly Network ($353.5M raised, $97.6M TTM revenue, 2D chip-based POCUS); Exo ($428M raised, revenue unknown, 2D handheld with AI); EchoNous ($60M raised, revenue unknown, AI POCUS <$12K); Clarius ($39.1M raised, revenue unknown, wireless 2D developing 3D); Rivanna Medical ($3.25M raised, revenue unknown, spinal needle guidance) |
| Moat Signals | Duke-originated 3D-DAT technology; founding team includes lab PI (Junjie Yao, 11K+ citations, Google Scholar); FDA regulatory barrier once cleared |
| Risk Factors | FDA clearance not yet obtained, well-funded competitors pursuing 3D, academic-to-commercial transition |
| Founder Reach | Chenhang Li: Twitter @lichenhang1225 (count not retrievable), LinkedIn 1 profile. Luca Menozzi: LinkedIn 1 profile. Tri Vu: LinkedIn 1 profile. Junjie Yao: Google Scholar 11K+ citations. No company social accounts found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
