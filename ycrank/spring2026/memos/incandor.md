# Incandor

> Behavioral intelligence infrastructure for anti-fraud

| Field | Value |
|-------|-------|
| Website | https://www.incandor.com |
| YC Page | https://www.ycombinator.com/companies/incandor |
| Batch | Spring 2026 (YC page, May 2026) |
| Industry | B2B / B2B |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Security, AI |
| YC Partner | David Lieb (YC page, May 2026) |
| Emails | info@incandor.com, matthew@incandor.com, luc@incandor.com |

## The Idea

- **Problem:** Banking and fintech platforms face account takeovers, fraud rings, mule operators, and coerced sessions that bypass static risk scores (incandor.com, May 2026).
- **Approach:** Builds a per-user behavioral map from mouse dynamics, keystroke timing, scroll patterns, and mobile device-holding signals, exposed as a programmable API rather than a black-box score (incandor.com, May 2026).
- **Differentiation:** vs. BioCatch / Feedzai / NuData (Mastercard) — Incandor claims no fraud labels or enrollment period are required and works "from session one," while incumbents rely on supervised models and historical labels (incandor.com, May 2026; biocatch.com, May 2026).
- **Business Model:** No pricing page published; [Inferred]: enterprise consumption or per-monthly-active-user API pricing, consistent with peers in the behavioral biometrics infrastructure category (incandor.com shows "Request early access" only).
- **TAM/SAM:** Behavioral biometrics market USD 3.45B in 2026 at 26.95% CAGR (Mordor Intelligence, 2025); Grand View Research projects USD 9.92B by 2030 (Grand View Research, 2025).
- **GTM / Distribution:** [Inferred]: Direct enterprise sales to banking/fintech fraud teams via founder outbound and YC network, given API product, no self-serve pricing, and David Lieb as YC partner (incandor.com + YC page, May 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond a claim of >99% account-takeover detection accuracy (incandor.com, May 2026); no patents, customer logos, or proprietary datasets disclosed.
- **Future moat:** [Inferred]: Cross-customer behavioral baselines and population-level ring detection could create data network effects as more platforms integrate, but unproven absent published customer count.
- **Market structure:** [Inferred]: API-first, label-free deployment may be hard for label-trained incumbents (BioCatch, Feedzai) to copy without cannibalizing supervised-model contracts, but no structural barrier is verifiable yet.
- **Commoditization risk:** BioCatch (60+ patents per cbinsights.com), Feedzai, Sift, NuData, ThreatMetrix, and BehavioSec already ship behavioral biometrics; an unsupervised behavioral-map approach is replicable by any well-funded incumbent (cbinsights.com, May 2026).

## Market & Traction

- **Traction signals:**
  - No public revenue, customer, or user count disclosed (incandor.com, May 2026).
  - Listed on YC company directory, Spring 2026 batch, Active status (ycombinator.com/companies/incandor, May 2026).
  - Launch video referenced on YC page (YC page, May 2026); no Product Hunt listing found.
  - No company LinkedIn page or Twitter/X follower count located in search results.
  - No active job postings found on the YC profile.
  - YC page lists "Not hiring" (company_data, May 2026).
- **Competitors:**
  - BioCatch ($239M raised; acquired by Permira for $1.3B May 2024; revenue unknown): supervised behavioral biometrics for banks, requires historical fraud labels (sacra.com; cbinsights.com, May 2026).
  - Feedzai ($347M raised, $2B valuation Oct 2025; revenue unknown): combines behavioral biometrics, device fingerprinting, and malware detection in one platform (techfundingnews.com, Oct 2025).
  - Sift ($161M raised, $1B valuation Apr 2021; revenue unknown): AI-powered Identity Trust platform serving 700+ brands (cbinsights.com, May 2026).
  - NuData Security (Mastercard subsidiary; revenue unknown): behavioral biometrics for card-not-present fraud, bundled with Mastercard rails (biometricupdate.com, Aug 2025).
  - BehavioSec (acquired by LexisNexis Risk Solutions 2022; revenue unknown): continuous behavioral authentication (cbinsights.com, May 2026).
- **Why now:** [Inferred]: GenAI-driven bot traffic, deepfake-enabled social engineering, and growth in authorized-push-payment / mule fraud have pushed banks past supervised-label fraud models in the last 12-24 months (biometricupdate.com, Aug 2025).

## Founders & Team

- **Matthew Yekell (CEO):**
  - Background: Stanford CS; prior roles at Vista Equity Partners and Cboe Global Markets (incandor.com, May 2026; profiles.stanford.edu; linkedin.com/in/matthew-yekell-399866166, May 2026).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Matthew Yekell – Incandor" (linkedin.com/in/matthew-yekell-399866166, May 2026); follower count not retrievable.
  - GitHub: No public repos found in search results.
- **Luc Rosenzweig (CTO):**
  - Background: Stanford CS; prior roles at NVIDIA, Apple, and Epic Games (incandor.com, May 2026; linkedin.com/in/luc-rosenzweig, May 2026).
  - Twitter/X: No public account found in search results.
  - LinkedIn: Profile at linkedin.com/in/luc-rosenzweig, 307 connections shown in search snippet; headline not retrievable.
  - GitHub: github.com/Rosenzweig — one repository listed per search snippet; no notable star counts surfaced.
- **Co-founder relationship:** Both founders attended Stanford CS per company website (incandor.com, May 2026).
- **Founder-market fit:** [Inferred]: CTO's NVIDIA/Apple/Epic Games tenure suggests systems and graphics/input-handling experience relevant to capturing low-level mouse, keystroke, and touch telemetry; CEO's Cboe (exchange) and Vista (enterprise software PE) background aligns with selling to regulated financial buyers (incandor.com, May 2026); no advisors or investors beyond YC disclosed.

## Key Risks

- **Incumbent overlap with deep moats:** BioCatch ($1.3B Permira acquisition, 60+ patents per cbinsights.com), Feedzai ($2B valuation, techfundingnews.com Oct 2025), and Mastercard's NuData already sell behavioral biometrics to the same banking buyers, and have multi-year fraud-label datasets Incandor explicitly forgoes; no public mitigation beyond the "no labels required" technical claim.
- **Unverified accuracy claim:** ">99% account-takeover accuracy" stated on the company site (incandor.com, May 2026) without published benchmark, dataset, or third-party validation; absent customer case studies, enterprise procurement at banks typically requires this evidence.
- **Regulated-buyer sales cycle:** Banking/fintech compliance reviews (SOC 2, model risk management under SR 11-7) extend enterprise sales cycles; no SOC 2 or compliance attestation disclosed on the website (incandor.com, May 2026).
- **Privacy/regulatory exposure:** Continuous capture of keystroke and motion telemetry triggers GDPR Art. 9 biometric-data and US state biometric privacy considerations (e.g., BIPA); no published privacy posture or DPA terms found (incandor.com, May 2026).
- **Name ambiguity:** "Incandor" returns limited disambiguated results in search; cross-checks via founder names and incandor.com domain confirmed identity, but low search footprint limits external traction verification.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | USD 3.45B in 2026, 26.95% CAGR (Mordor Intelligence, 2025); USD 9.92B by 2030 (Grand View Research, 2025) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch, Active (ycombinator.com/companies/incandor, May 2026); launch video on YC page (YC page, May 2026); >99% ATO accuracy claim, unverified (incandor.com, May 2026) |
| Revenue Signal | No public data found |
| Founders | Matthew Yekell (CEO): Stanford CS, Vista Equity Partners, Cboe Global Markets. Luc Rosenzweig (CTO): Stanford CS, NVIDIA, Apple, Epic Games. |
| Competitors | BioCatch ($239M raised, acquired Permira $1.3B May 2024, revenue unknown, supervised behavioral biometrics for banks); Feedzai ($347M raised, $2B valuation Oct 2025, revenue unknown, 3-in-1 behavioral + device + malware); Sift ($161M raised, $1B valuation Apr 2021, revenue unknown, identity trust platform 700+ brands); NuData/Mastercard (revenue unknown, behavioral biometrics for CNP fraud); BehavioSec (acquired LexisNexis 2022, revenue unknown, continuous authentication) |
| Moat Signals | No public data found |
| Risk Factors | Entrenched incumbents with 60+ patents and $239M-$347M war chests; unverified >99% accuracy claim; biometric-data privacy/regulatory exposure |
| Founder Reach | Matthew Yekell: Twitter not found, LinkedIn count not retrievable, GitHub not found. Luc Rosenzweig: Twitter not found, LinkedIn 307 connections (search snippet), GitHub @Rosenzweig 1 repo (search snippet). |
| Distribution Signals | No public data found |
| Emails | info@incandor.com, matthew@incandor.com, luc@incandor.com |

Sources:
- [Incandor — Behavioral Intelligence for Fraud & Abuse Detection](https://www.incandor.com/)
- [Incandor YC company page](https://www.ycombinator.com/companies/incandor)
- [Matthew Yekell LinkedIn](https://www.linkedin.com/in/matthew-yekell-399866166/)
- [Matthew Yekell Stanford profile](https://profiles.stanford.edu/matthew-yekell)
- [Luc Rosenzweig LinkedIn](https://www.linkedin.com/in/luc-rosenzweig/)
- [Rosenzweig GitHub](https://github.com/Rosenzweig/)
- [BioCatch alternatives — CB Insights](https://www.cbinsights.com/company/biocatch/alternatives-competitors)
- [BioCatch financials — CB Insights](https://www.cbinsights.com/company/biocatch/financials)
- [BioCatch — Sacra](https://sacra.com/c/biocatch/)
- [Feedzai $75M at $2B valuation — TFN](https://techfundingnews.com/feedzai-raises-75m-valuation-2b-outpace-financial-crime/)
- [Sift financials — CB Insights](https://www.cbinsights.com/company/sift-science/financials)
- [QKS behavioral biometrics market analysis — Biometric Update](https://www.biometricupdate.com/202508/feedzai-biocatch-ibm-lead-qks-analysis-of-behavioral-biometrics-market)
- [Behavioral Biometrics Market — Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/behavioral-biometrics-market)
- [Behavioral Biometrics Market — Grand View Research](https://www.grandviewresearch.com/industry-analysis/behavioral-biometrics-market)
- [YC W26 Demo Day — TechCrunch](https://techcrunch.com/2026/03/26/16-of-the-most-interesting-startups-from-yc-w26-demo-day/)
- [YC-Backed Anti-Fraud Startups — About Fraud](https://www.about-fraud.com/yc-backed-startups-transforming-the-anti-fraud-industry/)
