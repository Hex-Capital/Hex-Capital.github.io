# Superlog

> Observability that installs itself and fixes the bugs it finds.

| Field | Value |
|-------|-------|
| Website | https://superlog.sh/ |
| YC Page | https://www.ycombinator.com/companies/superlog |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Open Source, Monitoring, AI |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

- **Problem:** Engineering teams using Sentry/Datadog receive duplicated, low-context alerts and must still investigate and write fixes themselves (Superlog YC page, 2026).
- **Approach:** A wizard scans the repo, installs OpenTelemetry instrumentation, re-runs daily as code ships, groups errors into incidents, investigates with full context (logs, traces, deploys, past Slack threads) and posts a single mergeable PR in Slack (Superlog YC page, 2026; HN Show HN #48195021).
- **Differentiation:** Vs. Sentry/Datadog — no manual instrumentation and ships PR fixes, not just alerts (Superlog YC page, 2026); vs. SigNoz — adds AI investigation and PR generation on top of vendor-neutral OTel (HN Show HN #48195021, May 2026).
- **Business Model:** Usage-based pricing on traces, logs, metrics, and "investigation credits"; founder clarified on HN that pricing is "only by usage," not per-repo (HN #48195021, May 2026).
- **TAM/SAM:** APM market estimated at $14.30B in 2026 (Research and Markets) and broader observability tools market at $3.35B in 2026 (Mordor Intelligence); Datadog's TAM projected $58–62B by 2026 (sergeycyw.substack.com via search snippet).
- **GTM / Distribution:** [Inferred]: Bottom-up developer adoption via open-source CLI/skills on GitHub (superloglabs org) and HN launch (73 points, May 2026), with Slack-native PR delivery as the wedge.

## Defensibility

- **Moat today:** Open-source CLI and "skills" repos (cli 6 stars, skills 6 stars on github.com/superloglabs, May 2026) plus framework-specific instrumentation skills (NextJS, FastAPI, React Native/Expo) per HN thread (#48195021).
- **Future moat:** [Inferred]: Compounding training/eval data on which auto-generated fix PRs get merged vs. rejected could improve fix accuracy over time; unproven because product is weeks old with no disclosed dataset size.
- **Market structure:** [Inferred]: Sentry and Datadog monetize alert/event volume and human-in-the-loop dashboards; auto-fixing PRs that reduce incident counts would cannibalize that volume-based revenue, creating a strategic disincentive to replicate fully.
- **Commoditization risk:** OpenTelemetry auto-instrumentation is already shipped by Datadog, Dynatrace and SigNoz (signoz.io, 2026 search snippet); the AI-fix-PR layer is replicable by any vendor with Claude/GPT API access.

## Market & Traction

- **Traction signals:**
  - Show HN launch: 73 points, 49 comments, ~May 2026 (news.ycombinator.com/item?id=48195021).
  - Twitter @superlogYC: 270 followers, joined April 2026, 0 posts at time of crawl (x.com/superlogYC via search snippet).
  - GitHub org superloglabs: 11 followers, top repos cli (6★/3 forks), skills (6★/3 forks), agent (1★) (github.com/superloglabs, May 2026).
  - Customer testimonial: "Top clients accept 80–90% of PRs," some requesting auto-merge (founder comment, HN #48195021, May 2026).
  - LinkedIn post from YC: "Superlog (YC P26) is the observability tool you're not opening" (linkedin.com/y-combinator activity 7460018473205706752, 2026).
- **Competitors:**
  - Datadog (NASDAQ: DDOG, public, multi-$B ARR): incumbent full-stack observability with native OTel auto-instrumentation (signoz.io comparison, 2026).
  - Sentry (raised >$200M, revenue undisclosed): error-tracking incumbent; Superlog explicitly positions against Sentry's alert-dump model (Superlog YC page, 2026).
  - SigNoz (raised ~$7M total, $6.5M led by SignalFire Sep 2023, ARR undisclosed): OSS OpenTelemetry-native observability without AI fix-PRs (techcrunch.com, 2023).
  - Dynatrace (NYSE: DT, public): OneAgent auto-instrumentation plus "Davis" AI for anomaly detection (signoz.io comparison, 2026).
  - New Relic (taken private 2023, $6.5B deal, revenue undisclosed): APM incumbent with embedded error tracking (signoz.io comparison, 2026).
- **Why now:** [Inferred]: Frontier coding models (Claude, GPT-class) crossed the threshold in 2024–2025 where autonomous code-fix PRs achieve usable accept rates, enabling fix-PR-as-a-product as a category distinct from alerting.

## Founders & Team

- **Nicolò Magnante (CEO):**
  - Background: HEC Paris alumnus (hec.edu); began career at Bain & Company, then BCG Milan (BrightHouse division), then Ovrsea (Parisian scale-up); co-founder & CEO of Bluco, an AI hiring startup with clients including McDonald's, Volkswagen, Dufry (linkedin.com/in/nicolò-magnante; crunchbase.com/person/nicolò-magnante); math olympiad winner (YC page).
  - Twitter/X: handle not surfaced in search; count not retrievable.
  - LinkedIn: "Swish | Ex BCG | Ex Bluco" (linkedin.com/in/nicolò-magnante).
  - GitHub: No public repos found.
- **Arseniy Shishaev (CTO):**
  - Background: CS degree École 42 Paris '22; built data pipelines/historical-metrics tooling at Datadog (linkedin.com/in/arseniy-shishaev); co-founder & CTO Bluco (top 40 SF F40 France 2025) (x.com/joinstationf/status/1884295079428542533).
  - Twitter/X: @arseniycodes (x.com/arseniycodes, follower count not retrievable).
  - LinkedIn: "Prev. CTO @ Bluco (SF F40), Datadog" (linkedin.com/in/arseniy-shishaev).
  - GitHub: @dd-ashishaev (github.com/dd-ashishaev); top public repo star count not retrievable in search snippet; personal site arseniy.wtf.
- **Co-founder relationship:** Previously co-founded Bluco together in 2024–2025, an AI hiring startup that reached STATION F's top 40 France ranking in 2025 (x.com/joinstationf/status/1884295079428542533).
- **Founder-market fit:** CTO has direct Datadog engineering experience building telemetry data pipelines (linkedin.com/in/arseniy-shishaev) and CEO has prior B2B enterprise sales record (McDonald's, Volkswagen, Dufry at Bluco per linkedin/in/nicolò-magnante).

## Key Risks

- **Incumbent commoditization:** Datadog, Dynatrace and New Relic already ship native OTel auto-instrumentation (signoz.io comparison, 2026) and could bolt on Claude-powered fix-PR features within a quarter; no patented mechanism disclosed. Mitigation: vendor-neutral telemetry stance lets users keep data even if they leave (Superlog YC page).
- **Fix-PR accuracy risk:** Core value depends on AI-generated PRs being mergeable; only anecdotal "80–90% accept" claim from founder on HN (#48195021, May 2026), no third-party benchmark, no disclosed evaluation dataset.
- **Telemetry cost/control liability:** Auto-instrumentation that runs daily can produce unbounded log/trace volume; HN commenters and pricing model both reference usage-based billing on traces/logs/metrics (HN #48195021), creating customer-bill-shock and trust risk if the wizard over-instruments.
- **Distribution dependency on Slack + GitHub:** PR delivery flow assumes Slack + GitHub plus repo write access; no enterprise GitLab/Bitbucket/Azure DevOps support mentioned in launch materials (HN #48195021, Superlog YC page).
- **Operational fragility at launch:** Site went down during the Show HN launch due to a Railway/Google Cloud outage (HN #48195021, May 2026), indicating reliance on a single PaaS for a product that markets itself as fixing reliability problems.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | APM $14.30B in 2026 (Research and Markets); observability tools $3.35B in 2026 (Mordor Intelligence); Datadog TAM $58–62B by 2026 (sergeycyw.substack.com) |
| SAM | No public data found |
| Traction | Show HN 73 points / 49 comments May 2026 (news.ycombinator.com/item?id=48195021); Twitter @superlogYC 270 followers (x.com/superlogYC, Apr 2026 join); GitHub superloglabs 11 followers, top repo 6★ (github.com/superloglabs, May 2026); customer testimonial "80–90% PR accept rate" (HN #48195021) |
| Revenue Signal | Usage-based pricing on traces, logs, metrics, and investigation credits; not per-repo (founder comment, HN #48195021, May 2026); no ARR disclosed |
| Founders | Nicolò Magnante (CEO): HEC Paris, ex-BCG/Bain/Ovrsea, ex-Bluco CEO. Arseniy Shishaev (CTO): École 42 Paris '22, ex-Datadog data systems, ex-Bluco CTO |
| Competitors | Datadog (public, multi-$B ARR, native OTel auto-instrumentation); Sentry ($200M+ raised, ARR n/a, error-tracking incumbent); SigNoz ($7M total, $6.5M Seed-II SignalFire Sep 2023, OSS OTel without AI fix-PRs); Dynatrace (public, OneAgent + Davis AI); New Relic (private post-$6.5B 2023, APM incumbent) |
| Moat Signals | Open-source CLI (6★) and skills repos (6★) at github.com/superloglabs (May 2026); framework-specific instrumentation skills for NextJS/FastAPI/React Native (HN #48195021) |
| Risk Factors | Incumbent commoditization (Datadog/Dynatrace already auto-instrument), unverified fix-PR accuracy, usage-based-billing bill-shock |
| Founder Reach | Nicolò Magnante: Twitter not found, LinkedIn present (count not retrievable), GitHub not found. Arseniy Shishaev: Twitter @arseniycodes (count not retrievable), LinkedIn present (count not retrievable), GitHub @dd-ashishaev (star count not retrievable) |
| Distribution Signals | Show HN 73 points May 2026 (news.ycombinator.com/item?id=48195021); YC LinkedIn promo post (linkedin.com activity 7460018473205706752, 2026); GitHub org superloglabs 11 followers May 2026; no Product Hunt launch found |
| Emails | No public data found |
