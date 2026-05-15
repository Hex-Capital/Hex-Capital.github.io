# Incandor

> Behavioral intelligence infrastructure for fraud and trust & safety

| Field | Value |
|-------|-------|
| Website | https://www.incandor.com |
| YC Page | https://www.ycombinator.com/companies/incandor |
| Batch | Spring 2026 (YC company page) |
| Industry | B2B / B2B |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Security, AI |
| YC Partner | David Lieb (YC company page) |
| Emails | info@incandor.com (company website) |

## The Idea

**Problem:** Banking and fintech platforms face account takeovers (ATO), coordinated fraud rings, mule operators, bot sessions, and coerced transactions; existing rule-based and ML-based systems emit opaque risk scores that fraud teams cannot programmatically interrogate (Incandor website). Traditional behavioral biometric systems require fraud labels and historical data to train, creating cold-start problems for new platforms or new attack patterns (Incandor website).

**Approach:** Incandor builds a "behavioral map" of every user from physical interaction signals — mouse dynamics, keystroke timing, scroll patterns, and mobile device-hold posture — without requiring fraud labels, enrollment periods, or historical data; clustering surfaces coordinated rings, mule operators, and coerced sessions at the population level, and detects ATO at the individual level with claimed >99% accuracy (Incandor website; YC company page). Output is a programmable API rather than a black-box score (Incandor website).

**Differentiation:** Versus BioCatch, NuData (Mastercard), BehavioSec, Callsign, ThreatMark, TypingDNA, and Sardine (Datos Insights via search snippet; CB Insights via search snippet), Incandor positions on (a) no-label, no-history cold-start, and (b) a programmable map/API rather than a risk score (Incandor website). [Inferred]: Incumbents in this category typically deliver a session-level risk score to fraud teams; Incandor's query-the-map interface is the principal product surface differentiator.

**Business Model:** No pricing page found on incandor.com (company website). [Inferred]: Likely API consumption pricing (per session/event) or platform subscription tiers based on volume, given the developer-API positioning.

**TAM/SAM:** Behavioral biometrics market estimated at $2.91B (2025) → $3.62B (2026) at 24.4% CAGR (The Business Research Company via search snippet); $2.72B (2025) → $3.45B (2026) (Mordor Intelligence via search snippet); reaching $8.5–13B by 2030–2032 (multiple analyst snippets via search). Fraud detection/prevention accounted for 42.35% of behavioral biometrics in 2025 with 26.95% CAGR through 2031 (Mordor Intelligence via search snippet). Astute Analytica projects $18.39B by 2033 (GlobeNewswire, Nov 2025 via search snippet).

**GTM / Distribution:** [Inferred]: Direct enterprise sales to fraud and trust & safety teams at banks and fintechs, given the SF location, YC network, and the targeting language ("banking and fintech platforms") on the website. No published partnerships, design partners, or customer logos found.

## Defensibility

- **Data network effects:** [Inferred]: A behavioral map improves as more sessions and more cross-customer attack patterns are observed; cross-customer ring detection benefits from breadth of deployment. No public evidence of multi-customer data sharing architecture.
- **Switching costs:** [Inferred]: Once integrated into auth, transaction, and fraud-ops flows with custom map queries, replacement requires re-instrumentation and re-tuning.
- **IP/patents:** No public patents or papers found.
- **Technical complexity:** [Inferred]: Unsupervised behavioral clustering at scale without labels is technically nontrivial; founders' Stanford CS + systems backgrounds (NVIDIA, Apple, Epic) plausibly support this (Incandor website).

**Market structure:** [Inferred]: No structural barrier identified at this stage. Incumbents (BioCatch, NuData/Mastercard) could in principle build an unsupervised cold-start variant; the structural friction is replacing entrenched scoring APIs in their large bank deployments rather than technical inability.

**Commoditization risk:** [Inferred]: The signal sources (mouse, keystroke, scroll, touch) are well-known and used by 10+ vendors (Datos Insights matrix via search snippet); commoditization risk is real, with defensibility resting on the "map + programmable API" abstraction and label-free cold-start performance, neither of which is independently verified.

## Market & Traction

**Traction signals:**
- No public revenue, customer logos, design partners, press coverage, or user counts found.
- Company Twitter/X, LinkedIn company page follower counts: not found via search.
- 0 open jobs on YC page (YC company page).
- Not included in the TechCrunch "16 most interesting startups from YC W26 Demo Day" list (TechCrunch, Mar 2026) — Incandor is Spring 2026 (S26 / Sp26), not W26.
- No Product Hunt launch found.
- Listed on About-Fraud's "YC-Backed Startups Transforming the Anti-Fraud Industry" index (about-fraud.com via search snippet) — content not verified.

**Competitive landscape:**
- **BioCatch** — $253M raised across 9 rounds; acquired by Permira May 2024; ARR $160M (Q2 2025) → >$185M (Q4 2025); 90 new customers in 2025 incl. Wells Fargo (Sacra; BioCatch press release; OurCrowd Blog via search snippets). Differentiator vs. Incandor: incumbent scale, deep bank channel; labeled/supervised approach. 
- **NuData Security (Mastercard)** — Acquired by Mastercard 2017 (CB Insights via search snippet); revenue/ARR not disclosed. Differentiator: bundled with Mastercard risk authentication.
- **Sardine** — $145M total raised incl. $70M Series C (Feb 2025) led by Activant Capital; ARR grew 130% YoY (BusinessWire, Feb 2025; Crunchbase News via search snippet). Differentiator: device + behavior + compliance bundle for fintechs; broader fraud-ops platform.
- **BehavioSec** — Acquired by LexisNexis Risk Solutions 2022 (CB Insights via search snippet); revenue not disclosed. Differentiator: continuous authentication focus.
- **TypingDNA / Callsign / ThreatMark / Feedzai / DataVisor** — Named competitors in behavioral biometrics matrix (Datos Insights via search snippet); funding/ARR not researched in depth.

**Why now:** [Inferred]: Three convergent shifts in 2024–2026: (a) generative-AI–driven synthetic identity and bot attacks render label-dependent models stale faster (general industry reporting); (b) regulatory scrutiny on coerced-transaction (APP/authorized push payment) fraud is rising — analyst snippets note "regulatory scrutiny" as a category driver (Mordor Intelligence via search snippet); (c) the behavioral biometrics fraud-prevention sub-segment grew at 26.95% CAGR (Mordor Intelligence via search snippet), pulling new entrants. None of these catalysts are attributed by Incandor directly.

## Founders & Team

YC page does not list founders by name; names sourced from incandor.com.

**Matthew Yekell** — Co-founder & CEO
- Stanford CS (Incandor website; Stanford Profiles search snippet).
- Prior: Vista Equity Partners; Cboe Global Markets; Stanford Management Company (Incandor website; LinkedIn URL: linkedin.com/in/matthew-yekell-399866166 via search snippet).
- Twitter/X: handle twitter.com/matthewyekell appears in search snippet; follower count not retrievable.
- LinkedIn: linkedin.com/in/matthew-yekell-399866166 (search snippet); headline shown as "Vista Equity Partners" in result title.
- GitHub: No public repos found.
- Additional: Stanford Consulting VP and Riley's Way Foundation recognition (EdSource, Jan 2025 via search snippet; Riley's Way Foundation via search snippet).

**Luc Rosenzweig** — Co-founder & CTO
- Stanford CS, systems research background (Incandor website; Stanford Profiles search snippet).
- Prior: NVIDIA, Apple, Epic Games (Incandor website).
- LinkedIn: linkedin.com/in/luc-rosenzweig (search snippet); headline shown as "Stanford University."
- Twitter/X: No public account found.
- GitHub: No public repos found via search.

**Co-founder relationship:** Both founders hold Stanford CS degrees (Incandor website); [Inferred]: prior acquaintance likely via Stanford CS department.

**Founder-market fit:** [Inferred]: Yekell's finance-industry exposure (Vista Equity, Cboe, Stanford Management Company) provides credibility with banking/fintech buyers, the stated ICP; Rosenzweig's NVIDIA/Apple/Epic systems background fits the latency- and signal-processing-intensive nature of capturing mouse/keystroke/touch telemetry at scale. No notable advisors, board members, or named investors beyond YC were found in public sources.

## Key Risks

**Unverified accuracy claim:** Website advertises ">99% accuracy" for ATO detection (Incandor website) with no published benchmark, dataset, or third-party validation. [Inferred]: Enterprise fraud buyers will require independent benchmarking against labeled production data before deployment.

**Entrenched incumbent channel:** BioCatch already has $185M ARR and 90 new customers in 2025 including Wells Fargo (BioCatch press release via search snippet); NuData is bundled with Mastercard; LexisNexis owns BehavioSec. [Inferred]: Bank procurement cycles favor incumbents; Incandor must displace via clearly superior cold-start or programmable-API benefits.

**Cold-start performance unverified:** Core differentiation rests on label-free, history-free clustering accuracy in production (Incandor website). [Inferred]: This is a technical feasibility risk — unsupervised behavioral clustering historically underperforms supervised systems on rare fraud classes.

**Privacy/regulatory exposure:** Continuous keystroke and mouse capture is regulated under GDPR (biometric/behavioral data) and several US state privacy laws. No public statement on consent flow, data residency, or DPA found on incandor.com.

**Programmable-API adoption friction:** [Inferred]: Bank fraud-ops teams traditionally consume risk scores, not query languages; adoption requires both engineering and analyst workflow change. No public design-partner case study validates the pattern.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Behavioral biometrics $3.45–3.79B in 2026, $8.5–18.39B by 2030–2033 (Mordor Intelligence, The Business Research Company, KBV Research, Astute Analytica via search snippets) |
| SAM | Fraud detection sub-segment = 42.35% of behavioral biometrics, 26.95% CAGR through 2031 (Mordor Intelligence via search snippet) |
| Traction | No public data found |
| Revenue Signal | No public data found (no pricing page on incandor.com) |
| Founders | Matthew Yekell (CEO): Stanford CS, ex-Vista Equity, Cboe, Stanford Management Co. Luc Rosenzweig (CTO): Stanford CS, ex-NVIDIA, Apple, Epic Games (Incandor website) |
| Competitors | BioCatch ($253M raised, $185M ARR Q4'25, incumbent bank channel) (Sacra, BioCatch press release via search snippets); Sardine ($145M raised, ARR +130% YoY 2024, broader fraud+compliance platform) (BusinessWire Feb 2025 via search snippet); NuData/Mastercard (acquired 2017, ARR undisclosed, bundled with Mastercard) (CB Insights via search snippet); BehavioSec (acquired by LexisNexis 2022, ARR undisclosed) (CB Insights via search snippet); Callsign/ThreatMark/TypingDNA/Feedzai/DataVisor (named in Datos Insights matrix via search snippet) |
| Moat Signals | No public data found |
| Risk Factors | Unverified >99% accuracy claim, entrenched incumbents (BioCatch/NuData/BehavioSec), unverified cold-start technical performance |
| Founder Reach | Matthew Yekell: Twitter @matthewyekell (count not retrievable), LinkedIn linkedin.com/in/matthew-yekell-399866166, GitHub no public repos found. Luc Rosenzweig: Twitter no public account found, LinkedIn linkedin.com/in/luc-rosenzweig, GitHub no public repos found |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage, 0 open jobs on YC page) |
| Emails | info@incandor.com (Incandor website) |

Sources:
- [Incandor company website](https://www.incandor.com)
- [Incandor YC page](https://www.ycombinator.com/companies/incandor)
- [Mordor Intelligence — Behavioral Biometrics Market](https://www.mordorintelligence.com/industry-reports/behavioral-biometrics-market)
- [The Business Research Company — Behavioral Biometrics 2026](https://www.thebusinessresearchcompany.com/report/behavioral-biometrics-global-market-report)
- [KBV Research — Behavioral Biometrics Market](https://www.kbvresearch.com/behavioral-biometrics-market/)
- [Astute Analytica / GlobeNewswire — Behavioral Biometrics 2033](https://www.globenewswire.com/news-release/2025/11/21/3192718/0/en/Behavioral-Biometrics-Market-Is-Poised-to-Surpass-US-18-39-Billion-by-2033-Astute-Analytica.html)
- [BioCatch Q2 2025 ARR press release](https://www.biocatch.com/press-release/biocatch-posts-record-q2)
- [BioCatch Q4 2025 record quarter (OurCrowd)](https://blog.ourcrowd.com/biocatch-finishes-2025-with-best-quarter-in-company-history/)
- [Sacra — BioCatch funding & revenue](https://sacra.com/c/biocatch/)
- [Sardine — $70M Series C announcement (BusinessWire)](https://www.businesswire.com/news/home/20250211169372/en/Sardine-AI-Raises-$70M-to-Make-Fraud-and-Compliance-Teams-More-Productive)
- [Crunchbase News — Sardine $70M Series C](https://news.crunchbase.com/cybersecurity/fraud-detection-startup-sardine-ai-fundraise/)
- [Datos Insights — Behavioral Biometrics matrix](https://datos-insights.com/reports/datos-insights-matrix-behavioral-biometrics-and-device-fingerprinting-solutions/)
- [CB Insights — NuData competitors](https://www.cbinsights.com/company/nudata-security-competitors)
- [Matthew Yekell — Stanford Profiles](https://profiles.stanford.edu/matthew-yekell)
- [Matthew Yekell — LinkedIn](https://www.linkedin.com/in/matthew-yekell-399866166)
- [Luc Rosenzweig — Stanford Profiles](https://profiles.stanford.edu/luc-rosenzweig)
- [Luc Rosenzweig — LinkedIn](https://www.linkedin.com/in/luc-rosenzweig/)
- [About-Fraud — YC anti-fraud startups](https://www.about-fraud.com/yc-backed-startups-transforming-the-anti-fraud-industry/)
