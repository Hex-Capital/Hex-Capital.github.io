# Clair Health

> We're building the first continuous hormone monitor.

| Field | Value |
|-------|-------|
| Website | https://www.wearclair.com |
| YC Page | https://speedrun.a16z.com/companies/clair-health |
| Batch | a16z Speedrun SR006 (Jan–Apr 2026); not confirmed as a Y Combinator company (see note below) |
| Industry | Healthcare, Deep Tech, Fitness |
| Team Size | 7 |
| Location | Mountain View, California, United States of America |
| Tags | Healthcare, Deep Tech, Fitness |
| YC Partner | Not listed (a16z Speedrun page returned 404 at time of research) |
| Emails | jenny@wearclair.com (a16z Speedrun portal) |

**Note on accelerator affiliation:** The provided "YC Page" URL points to a16z Speedrun, Andreessen Horowitz's accelerator, not Y Combinator. Clair Health does not appear in YC W26 batch databases (Extruct AI; The VC Corner; On Healthcare Tech). The a16z Speedrun SR006 cohort ran January 26–April 12, 2026 in San Francisco (a16z.com), aligning with Clair's February 2026 emergence from stealth (Stanford Daily, Feb 5, 2026). Standard Speedrun deal: $500K for 10% equity plus $500K follow-on option within 18 months (a16z Speedrun FAQ).

## The Idea

**Problem:** Women lack continuous, quantitative data on their reproductive hormones. Current options require periodic blood draws, urine tests (Mira, Oova), or saliva samples (Eli Health, Inne), none of which provide continuous real-time tracking (Reach Capital, Feb 2026). Conditions affected include fertility timing, PCOS, perimenopause, mood changes, and athletic performance optimization (wearclair.com). Existing wearables (Oura, Apple Watch) track temperature and HRV but do not infer specific hormone levels (Fitt Insider, Feb 2026).

**Approach:** A jewelry-inspired wrist wearable with 10 biosensors capturing 100+ physiological biomarkers — skin temperature, heart rate, HRV, breath rate, electrodermal activity, sleep data — fed into a proprietary "female biology world model" that infers estrogen, progesterone, LH, FSH, and PdG continuously without blood or urine (wearclair.com). Processing runs on-device with zero-knowledge encryption for optional cloud backup (wearclair.com).

**Differentiation:**
- vs. Level Zero Health: non-invasive (no microneedles); ships late 2026 vs. Level Zero's 2028 target (TechCrunch, Feb 2025)
- vs. Eli Health: continuous wrist-worn vs. point-in-time saliva samples (Eli Health website)
- vs. Oura/Natural Cycles: infers specific hormone levels rather than proxying cycle phase from temperature alone (Fitt Insider, Feb 2026)
- vs. Peri: broader life-stage coverage (menarche through menopause) vs. perimenopause-only (PRNewswire, Apr 2026)

**Business Model:** Hardware + subscription. Device MSRP $369; founding member price $185 (50% off). App plan $5.99/month, included free for founding members. HSA/FSA eligible via TrueMed partnership (wearclair.com). The company claims $800K in D2C revenue and $18M in B2B contracts signed in under 8 weeks (a16z Speedrun portal description). These figures could not be independently verified; the Speedrun page returned 404 at time of research.

**TAM/SAM:** Global FemTech market valued at ~$60B in 2024, projected CAGR of 16–18% to ~$141B by 2035 (Precedence Research, 2025 via search snippet). Global endocrine testing market: $12.19B in 2023, 8.5% CAGR (Coyote Ventures, 2025). [Inferred]: SAM is narrower — women of reproductive age in US/Canada willing to pay $369+ for a wellness wearable; no public SAM estimate found for this specific segment.

**GTM / Distribution:** D2C pre-orders via wearclair.com with a $1 refundable deposit model (wearclair.com). [Inferred]: B2B channel likely targets corporate wellness, employer health plans, or clinical research partners, given the $18M B2B contracts claim, but no named B2B partners have been disclosed publicly.

## Defensibility

- **Proprietary sensor stack + ML models:** Custom 10-sensor hardware combined with a proprietary "female biology world model" trained against clinical-grade hormone assays on 127 menstrual cycles (wearclair.com). This sensor-algorithm co-design creates a compounding data advantage as more users generate training data.
- **Validation data:** 5,000+ days of continuous physiological data collected across 40+ women and 127 cycles, benchmarked against clinical assays (wearclair.com; Women of Wearables).
- **Edge-first architecture:** On-device AI processing; biometric data never leaves the device (wearclair.com). [Inferred]: Privacy architecture could become a regulatory moat as health data regulations tighten.

**Market structure:** Incumbent wearable companies (Apple, Garmin, Fitbit) have not pursued hormone inference, likely because: (1) it requires a purpose-built sensor stack beyond standard PPG/accelerometer/temperature, and (2) the female biology world model requires domain-specific clinical validation datasets that general wearable companies have not invested in building (Reach Capital, Feb 2026). [Inferred]: Large wearable OEMs could acquire rather than build if the approach is validated.

**Commoditization risk:** Multiple startups are pursuing hormone monitoring via different modalities (saliva, microneedles, sweat). If Clair's non-invasive wrist-based approach is validated, competitors with larger datasets (Oura: $900M raised) could attempt replication using their own sensor arrays. The core defensibility depends on whether the proprietary ML models and sensor fusion achieve accuracy levels that cannot be easily replicated with publicly available methods.

## Market & Traction

**Traction signals:**
- $800K D2C revenue, $18M B2B contracts signed in <8 weeks (a16z Speedrun portal; not independently verified)
- Featured in 50+ media outlets including Forbes, Stanford Daily, Fitt Insider, Athletech News, The Print, FemTech World, Wareable, Longevity.technology, LSN Global (wearclair.com; individual publications verified via search)
- Reach Capital investment announced Feb 4, 2026; amount undisclosed (Reach Capital blog)
- a16z Speedrun SR006 participant; standard investment up to $1M (a16z.com)
- Company social handles: @clair_health on Twitter/X, Instagram, TikTok; LinkedIn company/clairhealth; Substack @clairhealth (wearclair.com). Follower counts not retrievable via search.
- Founding member pre-orders open at $185 with $1 refundable deposit (wearclair.com). Waitlist/pre-order count not publicly disclosed.
- Planned ship date: late 2026 US/Canada, mid 2027 rest of world (wearclair.com)

**Competitive landscape:**

| Company | Funding | Modality | Key Differentiator vs. Clair |
|---------|---------|----------|------------------------------|
| Level Zero Health | $6.9M pre-seed (TechCrunch, Feb 2025) | Microneedle wearable | Direct hormone measurement from interstitial fluid; invasive; 2028 target ship |
| Eli Health | $20M total / $12M Series A (Fitt Insider, Jun 2025) | Saliva-based (Hormometer) | Instant point-in-time saliva test; FDA-registered; CES 2025 Best of Innovation |
| Inne | €18.8M Series A+ (Future Fem Health) | Saliva-based | CE-certified contraception; EU regulatory advantage |
| Peri | ~€3M (Fast Company, 2026) | Chest-worn sensor | Perimenopause-specific; shipping now at $449 |
| Natural Cycles | $99.5M total (TechCrunch, 2024) | Temperature-based app | FDA-cleared contraception; targeting $100M revenue 2025 (Mainsights) |

**Why now:**
- Advances in multimodal sensor fusion and on-device ML have reached a threshold enabling real-time inference of hormone levels from non-invasive physiological signals (Reach Capital, Feb 2026).
- [Inferred]: Consumer awareness of hormonal health has increased, driven by the broader femtech movement and perimenopause/menopause entering mainstream discourse.
- Wearable device costs have declined sufficiently to target a $369 consumer price point with 10 biosensors.

## Founders & Team

**Jenny Duan** — Co-founder & CEO (age 21)
- BS Symbolic Systems (AI Ethics & the Social Internet), Stanford University, graduated early (Women of Wearables)
- Co-founded NEXT Creator Collective (10M+ community reach) (Reach Capital, Feb 2026)
- Former marketing lead at Daydream (Reach Capital, Feb 2026)
- Built endometriosis-focused apps at Stanford TreeHacks 2024 (Women of Wearables)
- Worked with women at Rose Haven nonprofit in Oregon (Women of Wearables)
- Twitter/X: @jennysduan — count not retrievable
- LinkedIn: linkedin.com/in/jennysduan
- Instagram: @jennysduan — 4,000+ followers (search snippet)
- GitHub: No public repos found

**Abhinav Agarwal** — Co-founder & CTO (age 23)
- BS '24, MS '25 Computer Science (AI focus), Stanford University (Stanford Daily, Feb 2026)
- Head of ML at KOS AI; developed Argus, a non-invasive continuous glucose monitor (Meditech Today)
- Best Paper at ICAIRME Conference 2025 in Bangkok: 35% model size reduction, 40% speed improvement at 94% accuracy on healthcare tasks (search snippet, Meditech Today)
- LinkedIn: linkedin.com/in/agarwalaabhinav
- Twitter/X: No public account found
- GitHub: No public repos found

**Co-founder relationship:** Both attended Stanford; Jenny class of '26, Abhinav BS '24 / MS '25. Met at Stanford and began working on Clair shortly after (Stanford Daily, Feb 2026).

**Founder-market fit:** Agarwal's prior work building a non-invasive continuous glucose monitor at KOS AI provides direct technical transfer to hormone inference from wearable signals. Duan's women's health advocacy background (Rose Haven, endometriosis hackathon projects) and growth marketing experience (NEXT Creator Collective, 10M+ reach) provide domain motivation and D2C distribution capability. Team backgrounds span Whoop, Apple, Stanford Medicine, Johnson & Johnson, Meta, Eight Sleep, Princeton, Hinge, and Mercedes-Benz (wearclair.com/about).

## Key Risks

**Accuracy on real-world populations:** Validation study covered 40+ women across 127 cycles — a small sample (wearclair.com). Accuracy drops from 95.2% on regular cycles to 84.3% on irregular cycles (wearclair.com). Scaling to diverse populations (varying BMI, skin tones, medical conditions) may degrade performance. No peer-reviewed publication found.

**Inference vs. measurement gap:** Clair infers hormone levels from proxy signals (temperature, HRV, EDA) rather than directly measuring hormones in blood or interstitial fluid. Competitors like Level Zero Health use microneedle-based direct hormone measurement ($6.9M pre-seed, TechCrunch Feb 2025). If direct-measurement wearables achieve consumer-acceptable form factors, inference-based approaches face credibility risk.

**Pre-revenue hardware execution:** The device has not shipped (target late 2026). Hardware startups face manufacturing, supply chain, and quality control risks. The $800K D2C revenue and $18M B2B contracts claims (a16z Speedrun portal) could not be independently verified and the source page returned 404.

**Regulatory pathway ambiguity:** Clair 1.0 launches as a general wellness device, which limits medical claims. Clair 2.0 plans to pursue FDA 510(k) clearance (wearclair.com), but the predicate device pathway for continuous non-invasive hormone inference is unclear.

**Name confusion:** "Clair" overlaps with Clair (employee benefits fintech, $67.7M raised), St. Clair Health (hospital system), and Clairity (breast cancer AI, $43M Series B). This complicates brand discovery and investor research.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global FemTech market ~$60B in 2024, ~16–18% CAGR to ~$141B by 2035 (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | $800K D2C revenue, $18M B2B contracts (a16z Speedrun portal; not independently verified); 50+ press mentions (wearclair.com); pre-orders open (wearclair.com) |
| Revenue Signal | Device MSRP $369; founding member $185; app $5.99/mo (wearclair.com). $800K D2C revenue claimed (a16z Speedrun portal; not independently verified) |
| Founders | Jenny Duan (CEO): Stanford BS Symbolic Systems, NEXT Creator Collective co-founder, Daydream marketing lead. Abhinav Agarwal (CTO): Stanford BS+MS CS, KOS AI Head of ML (built Argus glucose monitor), ICAIRME 2025 Best Paper. |
| Competitors | Level Zero Health ($6.9M pre-seed, revenue unknown, microneedle direct measurement); Eli Health ($20M total, revenue unknown, saliva-based instant testing); Inne (€18.8M, revenue unknown, CE-certified saliva contraception); Peri (~€3M, revenue unknown, perimenopause chest sensor); Natural Cycles ($99.5M total, targeting $100M revenue 2025 per Mainsights, temperature-based app) |
| Moat Signals | Proprietary 10-sensor stack + female biology world model trained on 5,000+ days of clinical-benchmarked data (wearclair.com); edge-first on-device processing architecture (wearclair.com) |
| Risk Factors | Inference vs. direct measurement credibility gap, pre-ship hardware execution risk, small validation dataset (40+ women) |
| Founder Reach | Jenny Duan: Twitter @jennysduan (count not retrievable), LinkedIn linkedin.com/in/jennysduan, Instagram 4,000+ followers (search snippet). Abhinav Agarwal: LinkedIn linkedin.com/in/agarwalaabhinav, Twitter not found, GitHub not found. |
| Distribution Signals | 50+ press mentions including Forbes, Stanford Daily, Fitt Insider (wearclair.com); Reach Capital investment blog post (Feb 2026); a16z Speedrun SR006 participation (a16z.com). No Product Hunt launch found. |
| Emails | jenny@wearclair.com (a16z Speedrun portal) |
