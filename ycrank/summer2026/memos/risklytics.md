# Risklytics

> Property-level natural disaster risk scoring for insurers

| Field | Value |
|-------|-------|
| Website | https://www.risklytics.ai/ |
| YC Page | https://www.ycombinator.com/companies/risklytics |
| Batch | Summer 2026 |
| Industry | Fintech / Fintech -> Insurance |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, B2B, Climate, Insurance, AI |
| YC Partner | Ankit Gupta |
| Emails | hello@risklytics.ai |

## The Idea

- **Problem:** California insurers non-renewed over 2.8 million homeowners policies between 2020 and 2025 in fire-prone ZIP codes, and the private-market coverage gap for wildfire is $800B–$1.3T (Stanford Woods / taxpayer.net, 2025), pushing consumers onto the state FAIR Plan which grew from ~126K policies in 2018 to 450K+ with $650B exposure by June 2025 (cfpnet.com / CA DOI, 2025).
- **Approach:** "Ember" API returns a 0–100 wildfire risk score, expected annual loss in dollars, and a ranked list of cost-effective retrofits (e.g., ember-resistant vents, defensible space) per individual address, trained on 131,929 CAL FIRE damage inspections across 435 California wildfires (risklytics.ai, 2026).
- **Differentiation:** vs. ZestyAI Z-FIRE — both use GBTs on property features, but Risklytics packages retrofit-path-to-insurability as the API output (risklytics.ai, 2026); vs. Moody's/CAPE Analytics — CAPE was acquired by Moody's Jan 2025 and now sits inside an incumbent (Moody's, 2025); vs. Guidewire HazardHub — HazardHub is a multi-peril national catalog bundled with the Guidewire platform (Guidewire, 2024).
- **Business Model:** [Inferred]: API consumption/subscription — pricing page exists but rates are gated behind an API-key application form (risklytics.ai/pricing, 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent proxy: California single-family wildfire coverage gap of $800B–$1.3T in insured value (taxpayer.net, Nov 2025).
- **GTM / Distribution:** [Inferred]: Direct API sales to California-domiciled admitted carriers and E&S/surplus lines writers, given the product is currently California-only and targeted at underwriters (risklytics.ai, 2026).

## Defensibility

- **Moat today:** Proprietary training corpus of 131,929 CAL FIRE damage inspections and 435 California wildfires yielding a reported 91% discrimination rate between burned and unburned properties in the January 2025 LA fires validation (risklytics.ai, 2026).
- **Future moat:** [Inferred]: Retrofit-outcome feedback loop — as insurers act on recommendations and properties are rescored post-mitigation, closed-loop data on retrofit efficacy could compound; unproven now because no customer deployments are publicly disclosed.
- **Market structure:** [Inferred]: Incumbent cat modelers (Verisk, Moody's, Karen Clark) monetize enterprise licenses and consulting revenue tied to filed rate models — a per-call API that outputs retrofit paths cannibalizes that motion, though the same firms could still build a parallel offering.
- **Commoditization risk:** CAL FIRE damage inspection data is publicly available and Z-FIRE from ZestyAI already claims training on 20+ years of claims data across 1,500+ wildfires with 200B+ datapoints (zesty.ai, 2026), meaning the underlying modeling approach is not unique.

## Market & Traction

- **Traction signals:**
  - 13,685,446 California homes scored to date (risklytics.ai, 2026).
  - Validated against 30,469 homes in the January 2025 LA fires with 91% discrimination between burned and unburned (risklytics.ai, 2026).
  - Model built on 131,929 CAL FIRE damage inspections and 435 California wildfires (risklytics.ai, 2026).
  - 0 open job postings on YC company page (YC, 2026).
  - No public revenue, paying customer, press coverage, Product Hunt, Twitter/X, or Discord data found.
- **Competitors:**
  - ZestyAI ($76.97M raised across 13 rounds, most recent a $15M line of credit June 25, 2025, revenue unknown; Z-FIRE insures 40% of the CA homeowners market via carriers, trained on 200B+ datapoints — larger data footprint and installed carrier base) (CB Insights / zesty.ai, 2025–2026).
  - CAPE Analytics ($75M raised from State Farm Ventures, Cincinnati Insurance, The Hartford; acquired by Moody's January 2025 for undisclosed terms; revenue unknown — distributed via Moody's post-acquisition) (Moody's / coverager.com, 2025).
  - Guidewire HazardHub (acquired by Guidewire for $52.8M in August 2021; distributed as native module inside Guidewire's core insurance platform — bundled with policy admin) (Guidewire press release, 2021).
  - Verisk, Karen Clark & Company, Moody's RMS (forward-looking wildfire cat models approved by CA Department of Insurance in May 2025 for use in rate filings — filed-model incumbents with regulator relationships) (CA DOI release 052-2025, May 2025).
- **Why now:** California became the first US market in May 2025 to allow insurers to use forward-looking wildfire catastrophe models (not just historical loss data) when setting rates, following CA DOI final evaluation of Verisk, KCC, and Moody's models (CA DOI press release 052-2025, May 2025).

## Founders & Team

- **Samuel Gold (Co-founder):**
  - Background: Studied Computer Science & Economics at Harvard, left after one year; involvement in Harvard Undergraduate Capital Partners and Harvard Financial Analysts Club (LinkedIn /in/samuelggold, per search snippet 2026); no prior insurance/wildfire domain roles surfaced in public search.
  - Twitter/X: No public account found.
  - LinkedIn: "Computer Science & Economics @ Harvard" (linkedin.com/in/samuelggold, via search snippet).
  - GitHub: No public repos found.
- **Alexander Risio (Co-founder):**
  - Background: Harvard AB/SM in Computer Science with focus on systems, intelligence, biology, and "ambitious software" (linkedin.com/in/alexanderrisio, via search snippet 2026); personal site alexanderrisio.com lists a resume and contact links only.
  - Twitter/X: No public account found.
  - LinkedIn: "Co-Founder @ Risklytics (YC S26)" (linkedin.com/in/alexanderrisio, via search snippet).
  - GitHub: @AlexRisio (alexanderrisio.com, 2026); no notable repo star counts retrievable.
- **Co-founder relationship:** [Inferred]: Both list Harvard Computer Science on LinkedIn (via search snippets, 2026), suggesting overlap at Harvard; no explicit prior co-employer confirmed.
- **Founder-market fit:** [Inferred]: Technical CS backgrounds suit ML/API model development, but no public evidence of prior insurance, actuarial, wildfire science, or catastrophe modeling experience for either founder; no advisors, board members, or investors publicly disclosed beyond YC (Summer 2026, group partner Ankit Gupta).

## Key Risks

- **Regulatory model approval risk:** California requires insurers to have wildfire cat models formally reviewed by CA DOI before use in filed rates; only Verisk, KCC, and Moody's models have been approved as of May 2025 (CA DOI release 052-2025), so Risklytics' output cannot directly enter rate filings until (or unless) it passes the same review — limiting the addressable underwriting workflow to non-filed use cases such as underwriting decisions and eligibility screening.
- **Commoditization / entrenched competitor risk:** ZestyAI's Z-FIRE already covers CA and is deployed with carriers writing 40% of the CA homeowners market (zesty.ai, 2026); CAPE Analytics now distributes through Moody's post-January 2025 acquisition (Moody's, 2025) — a two-founder pre-seed API faces distribution asymmetry against these incumbents.
- **Geographic concentration risk:** Product is trained on CAL FIRE data and scores only California homes (risklytics.ai, 2026); expansion to other perils (flood, hurricane, earthquake) or geographies requires new proprietary training corpora.
- **Technical feasibility of "retrofit path to insurability" claim:** The claim that specific retrofits (vents, defensible space) convert declines to binds depends on carrier underwriting rules accepting the recommendation, but no public carrier partnership has been announced (public sources reviewed, 2026).
- **Name-collision risk:** A German company "risklytics GmbH" founded 2018 in Saarbrücken operates in leasing/factoring risk software (LinkedIn de.linkedin.com/company/risklytics-gmbh) — potential trademark and search-visibility conflict.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found; adjacent proxy: California single-family wildfire private-insurance coverage gap of $800B–$1.3T insured value (taxpayer.net, Nov 2025) |
| SAM | No public data found |
| Traction | 13,685,446 California homes scored to date (risklytics.ai, 2026); 30,469-home validation against Jan 2025 LA fires with 91% discrimination (risklytics.ai, 2026); model built on 131,929 CAL FIRE damage inspections and 435 wildfires (risklytics.ai, 2026); 0 open jobs (YC page, 2026) |
| Revenue Signal | No public data found — pricing page gated behind API-key application form (risklytics.ai/pricing, 2026) |
| Founders | Samuel Gold (Co-founder): Harvard CS & Economics (left after 1 year), Harvard Undergraduate Capital Partners. Alexander Risio (Co-founder): Harvard AB/SM Computer Science (systems, intelligence, biology). |
| Competitors | ZestyAI ($76.97M raised, revenue unknown, Z-FIRE already deployed with carriers writing 40% of CA homeowners — larger data + carrier install base) (CB Insights, 2026); CAPE Analytics ($75M raised, revenue unknown, acquired by Moody's Jan 2025 — incumbent distribution) (Moody's, 2025); Guidewire HazardHub (acquired for $52.8M Aug 2021, revenue unknown, bundled inside Guidewire policy-admin platform) (Guidewire, 2021); Verisk / Karen Clark / Moody's RMS (public co / private, revenue unknown, only three CA-DOI-approved forward-looking wildfire models) (CA DOI 052-2025, May 2025) |
| Moat Signals | Proprietary training set of 131,929 CAL FIRE inspections + 435 wildfires; 91% discrimination on Jan 2025 LA fire validation (risklytics.ai, 2026) |
| Risk Factors | Regulatory approval barrier for filed-rate use, commoditization vs. ZestyAI/CAPE/HazardHub, California-only geographic scope |
| Founder Reach | Samuel Gold: Twitter not found, LinkedIn /in/samuelggold (count not retrievable), GitHub not found. Alexander Risio: Twitter not found, LinkedIn /in/alexanderrisio (count not retrievable), GitHub @AlexRisio (star count not retrievable). |
| Distribution Signals | No public data found (no Product Hunt, no press coverage, no app store, no Chrome extension identified) |
| Emails | hello@risklytics.ai (risklytics.ai, 2026) |

Sources:
- [Risklytics](https://www.risklytics.ai/)
- [Risklytics YC page](https://www.ycombinator.com/companies/risklytics)
- [Alexander Risio personal site](https://www.alexanderrisio.com/)
- [Alexander Risio LinkedIn](https://www.linkedin.com/in/alexanderrisio)
- [Samuel Gold LinkedIn](https://www.linkedin.com/in/samuelggold/)
- [CA DOI wildfire model release 052-2025](https://www.insurance.ca.gov/0400-news/0100-press-releases/2025/release052-2025.cfm)
- [California FAIR Plan Key Statistics](https://www.cfpnet.com/key-statistics-data/)
- [Taxpayers for Common Sense CA insurance report](https://www.taxpayer.net/wp-content/uploads/2025/11/tcs-CA-insurance-2025.pdf)
- [ZestyAI Z-FIRE product page](https://zesty.ai/products/wildfire)
- [ZestyAI CB Insights financials](https://www.cbinsights.com/company/powerscout/financials)
- [Moody's to acquire CAPE Analytics](https://www.moodys.com/web/en/us/insights/announcements/moodys-to-acquire-cape-analytics.html)
- [Guidewire acquires HazardHub press release](https://www.guidewire.com/about/press-center/press-releases/20210819/guidewire-acquires-hazardhub)
- [risklytics GmbH (name collision)](https://de.linkedin.com/company/risklytics-gmbh)
