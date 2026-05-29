# RASPIRE

> No-code runtime app security with AI

| Field | Value |
|-------|-------|
| Website | https://raspire.com/ |
| YC Page | https://www.ycombinator.com/companies/raspire |
| Batch | Spring 2026 (YC P26) |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA (founded in Cairo, Egypt) |
| Tags | SaaS, B2B, Cybersecurity, No-code, AI |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** Mobile apps in banking, fintech, insurance and government handle sensitive transactions but lose protection once compiled and shipped to user devices, where backend-focused tooling and pre-deployment SAST/DAST scanners cannot defend against reverse engineering, tampering, hooking, and API abuse (fwdstart.me, 2026).
- **Approach:** Adds runtime security (anti-reverse engineering, anti-tampering, fraud prevention, API attestation, live threat monitoring) directly to Android/iOS binaries post-compilation with no SDK, no source code changes, and no engineering integration (YC company page; fwdstart.me, 2026).
- **Differentiation:** Appdome similarly does post-compilation binary fusion but RASPIRE positions on "no-code" + AI-driven autonomous response (YC page); Guardsquare DexGuard/iXGuard require build-system integration (G2 RASP category page, 2026); Promon Shield and Approov are SDK or wrapper based (Appdome RASP page, 2026); [Inferred]: differentiation centers on zero-integration onboarding speed vs. Appdome's 400+ defense library.
- **Business Model:** No public data found on pricing tiers; [Inferred]: B2B SaaS subscription priced per app/per protected end-user, consistent with the enterprise security buyers (banks, fintechs, government) named on the YC page.
- **TAM/SAM:** RASP market $2.59B in 2026 growing at 27.96% CAGR to $8.88B by 2031 (Mordor Intelligence, 2026); broader mobile application security market $10.36B in 2026 at 22.8% CAGR (Research and Markets / openpr, 2026); mobile-specific RASP segment $140.1M in 2025 projected to $723.1M by 2033 (Data Insights Market, 2026).
- **GTM / Distribution:** Exhibited at Black Hat MEA 2025 in Riyadh (Dec 2025) and announced a strategic partnership with Saudi-based Sadq for application security across Saudi Arabia tied to Vision 2030 digital transformation (fwdstart.me, 2026); [Inferred]: direct enterprise sales into MENA banking/fintech via existing relationships, with US expansion via YC network.

## Defensibility

- **Moat today:** Existing deployments protecting apps used by 20M+ end users globally in banking, fintech, insurance and government (fwdstart.me, 2026; Arageek, 2026); switching costs once embedded in mobile release pipelines.
- **Future moat:** [Inferred]: AI-driven autonomous threat response trained on live telemetry from protected apps could form a data moat as attack signatures aggregate; unproven because no public detection-accuracy or telemetry-volume figures have been disclosed.
- **Market structure:** [Inferred]: Incumbents like Appdome and Guardsquare have business-model dependence on SDK/build-integration partner channels and professional-services revenue, creating channel conflict with a zero-integration no-code offering; not a hard structural barrier.
- **Commoditization risk:** Post-compilation binary instrumentation is a known technique used by Appdome (Appdome RASP page, 2026) and others; the core protections (obfuscation, anti-debug, anti-hook, API attestation) are already commodity features in G2's RASP category (G2, 2026).

## Market & Traction

- **Traction signals:**
  - Apps using RASPIRE serve more than 20M end users globally (fwdstart.me, 2026; Arageek, 2026; Arab Founders, 2026).
  - Strategic partnership with Saudi-based Sadq announced at Black Hat MEA 2025 (fwdstart.me, Dec 2025).
  - Pre-YC investors: 500 Global, Sanabil 500 MENA Seed Accelerator, Plus Venture Capital (fwdstart.me, 2026); round size not disclosed.
  - Press coverage in EgyptInnovate, Arageek, ArabFounders, FwdStart (all 2026) following YC P26 acceptance.
  - Company Twitter handle @raspire_ (YC page); follower count not retrievable.
  - LinkedIn company page linkedin.com/company/raspire exists (LinkedIn, 2026); follower count not retrievable.
  - Founded 2024 (YC page).
  - Hiring: False on YC profile (YC page).
- **Competitors:**
  - Appdome ($39.6M raised across 5 rounds, ARR not public; Crunchbase via search, 2026): SDK-less binary fusion with 400+ defenses; direct head-to-head on "no-code" positioning (Appdome RASP page, 2026).
  - Zimperium ($60.1M total raised over 4 rounds from 12 investors, ARR not public; Tracxn, 2026): MAPS suite combines zShield app hardening with zDefend on-device runtime defense; broader MTD focus than RASPIRE.
  - Guardsquare (total raised not disclosed in available data; investors include Battery Ventures, Ten Eleven Ventures per Crunchbase, 2026): DexGuard (Android) and iXGuard (iOS) require build-pipeline integration vs. RASPIRE's post-compilation approach.
  - Promon (funding data not in public search results): Promon Shield is a wrapper/SDK-based mobile RASP (Appdome RASP page, 2026).
  - Approov (funding data not in public search results): API-attestation and anti-bot focus on mobile/API channel (G2 RASP category, 2026).
- **Why now:** [Inferred]: Saudi Vision 2030 and parallel MENA digital-government / open-banking programs are driving regulated mobile-app deployments (Computer Weekly Black Hat MEA coverage, 2026), while "vibe-coding" and AI-accelerated app generation cited by the founders are creating a surge of insufficiently-hardened binaries reaching production (fwdstart.me, 2026).

## Founders & Team

- **Kareem Selim (Co-Founder & CEO):**
  - Background: Years building and securing applications for banks and fintech companies prior to RASPIRE (fwdstart.me, 2026); recognized as a "10 Years of CyberTalents" alumnus speaker (CyberTalents Facebook, 2026); now based in the SF Bay Area (LinkedIn, 2026).
  - Twitter/X: No public account found tied to RASPIRE searches.
  - LinkedIn: "RASPIRE (YC P26)" — 500+ connections (linkedin.com/in/kareem-se1im, 2026).
  - GitHub: No public repos found.
- **Hassan Mostafa (Co-Founder & CTO):**
  - Background: B.S. studies at Helwan University Cairo 2015–2020; prior role at Cyshield (Egyptian cybersecurity firm) (search snippet from LinkedIn, 2026); years building and securing apps for banks/fintechs alongside Selim (fwdstart.me, 2026).
  - Twitter/X: No public account found.
  - LinkedIn: "RASPIRE" (linkedin.com/in/h4ss4nmostafa, 2026); headline not retrievable beyond company.
  - GitHub: No public repos found.
- **Co-founder relationship:** [Inferred]: Long-standing co-working history securing applications for banks and fintech companies in Egypt prior to founding RASPIRE (fwdstart.me, 2026); shared employer not explicitly named in public sources.
- **Founder-market fit:** Both founders spent years building and fixing applications for banks and fintech companies and identified the post-deployment protection gap from that work (fwdstart.me, 2026; Arageek, 2026); existing backing from 500 Global, Sanabil 500 MENA Seed Accelerator, and Plus VC (fwdstart.me, 2026) provides MENA enterprise reach.

## Key Risks

- **Entrenched, better-capitalized incumbents:** Appdome ($39.6M raised; Crunchbase, 2026) and Zimperium ($60.1M raised; Tracxn, 2026) already sell post-compilation/runtime mobile protection to large enterprises, including the banks/fintechs RASPIRE targets, with Appdome explicitly marketing "no-code" mobile RASP and app shielding (Appdome RASP page, 2026); no mitigation disclosed beyond AI-driven autonomous response positioning.
- **Commoditized technical primitives:** Anti-reverse-engineering, anti-tampering, anti-hooking and API attestation are catalogued as standard features across 25+ vendors in G2's RASP category (Startup Stash Top 25 RASP, 2026; G2, 2026), raising the bar for sustained differentiation; mitigation would depend on AI/telemetry data accumulation that is not yet quantified publicly.
- **Geographic concentration in MENA:** Disclosed customer traction and the Sadq partnership are concentrated in Saudi Arabia and Egypt (fwdstart.me, 2026), creating dependence on Saudi Vision 2030 procurement cycles and FX/political risk; SF relocation and YC P26 are mitigations toward US expansion.
- **Name disambiguation / brand discoverability:** Multiple unrelated entities surface for "Raspire" in search (including a Saleem-Karim Wikipedia entry and unrelated Rasan, Hassan Arif, Mohamed Mostafa profiles in founder-name searches), and "raspire" yielded zero Product Hunt or launch coverage, indicating limited US/Western press footprint that may slow inbound demand generation.
- **Disclosure opacity on key metrics:** Round size, revenue, ARR, customer logos, and AI model performance are not in public sources (Crunchbase, PitchBook profiles exist but specifics not surfaced); diligence will require founder-supplied data.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | RASP market $2.59B in 2026 at 27.96% CAGR to $8.88B by 2031 (Mordor Intelligence, 2026); mobile app security $10.36B in 2026 at 22.8% CAGR (Research and Markets / openpr, 2026) |
| SAM | Mobile RASP segment $140.1M in 2025, $723.1M by 2033 (Data Insights Market, 2026) |
| Traction | Apps protecting 20M+ end users globally (fwdstart.me, 2026); Sadq partnership announced at Black Hat MEA 2025 Riyadh (fwdstart.me, Dec 2025); YC Spring 2026 acceptance (YC page) |
| Revenue Signal | No public data found |
| Founders | Kareem Selim (CEO): prior bank/fintech app-security work, CyberTalents speaker, based in SF Bay Area. Hassan Mostafa (CTO): Helwan University Cairo 2015–2020, ex-Cyshield, bank/fintech app-security background. |
| Competitors | Appdome ($39.6M raised, ARR unknown, 400+ defense no-code binary fusion); Zimperium ($60.1M raised, ARR unknown, MAPS suite with zShield + zDefend); Guardsquare (total raised undisclosed, Battery & Ten Eleven backed, DexGuard/iXGuard build-integrated); Promon (funding undisclosed, SDK-based Promon Shield); Approov (funding undisclosed, API-attestation focus) |
| Moat Signals | 20M+ end-user app deployments (fwdstart.me, 2026); Sadq strategic partnership (fwdstart.me, Dec 2025); pre-YC backing from 500 Global, Sanabil 500 MENA Seed Accelerator, Plus VC (fwdstart.me, 2026) |
| Risk Factors | Entrenched well-funded incumbents (Appdome, Zimperium); commoditized RASP primitives; MENA geographic concentration |
| Founder Reach | Kareem Selim: Twitter not found, LinkedIn 500+ connections (linkedin.com/in/kareem-se1im), GitHub not found. Hassan Mostafa: Twitter not found, LinkedIn present (linkedin.com/in/h4ss4nmostafa), GitHub not found. |
| Distribution Signals | Black Hat MEA 2025 Riyadh exhibitor (fwdstart.me, Dec 2025); Sadq Saudi partnership (fwdstart.me, Dec 2025); company Twitter @raspire_ (YC page, follower count not retrievable); LinkedIn company page linkedin.com/company/raspire (count not retrievable); no Product Hunt presence found |
| Emails | No public data found |

Sources:
- [RASPIRE YC Profile](https://www.ycombinator.com/companies/raspire)
- [Egyptian cybersecurity startup Raspire joins Y Combinator (FwdStart)](https://www.fwdstart.me/p/egyptian-cybersecurity-startup-raspire-joins-y-combinator-with-no-code-runtime-protection-platform)
- [Arageek coverage of Raspire YC acceptance](https://en.arageek.com/egyptian-cybersecurity-startup-raspire-joins-y-combinators-elite-ranks)
- [EgyptInnovate on Raspire founders and YC](https://egyptinnovate.com/en/news/two-egyptians-lead-their-startup-raspire-to-join-the-us-based-startup-accelerator-y-combinator)
- [Arab Founders coverage](https://arabfounders.net/en/raspire-egypt-ycombinator-cybersecurity/)
- [Kareem Selim LinkedIn](https://www.linkedin.com/in/kareem-se1im/)
- [Hassan Mostafa LinkedIn](https://www.linkedin.com/in/h4ss4nmostafa/)
- [RASPIRE Crunchbase](https://www.crunchbase.com/organization/raspire)
- [Mordor Intelligence RASP Market](https://www.mordorintelligence.com/industry-reports/runtime-application-self-protection-market)
- [Mobile App Security Market (openpr)](https://www.openpr.com/news/4476136/mobile-application-security-market-size-accelerating-at-21-8)
- [Mobile RASP Market (Data Insights)](https://www.datainsightsmarket.com/reports/mobile-runtime-application-self-protection-537713)
- [Appdome Mobile RASP](https://www.appdome.com/mobile-app-security/mobile-rasp-and-app-shielding/)
- [Appdome Crunchbase](https://www.crunchbase.com/organization/appdome)
- [Zimperium Tracxn](https://tracxn.com/d/companies/zimperium/__9atM8CcO-GuBlEfL8ACO6WYxZqMFt-T5q1JXPk7Ojz0)
- [Guardsquare Crunchbase](https://www.crunchbase.com/organization/guardsquare)
- [G2 RASP Tools 2026](https://www.g2.com/categories/runtime-application-self-protection-rasp-tools)
