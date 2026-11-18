# 0.security

> Open-source AI security agents for enterprise

| Field | Value |
|-------|-------|
| Website | https://0.security |
| YC Page | https://www.ycombinator.com/companies/0security |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/0security)) |
| Industry | B2B / B2B -> Security |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Open Source, Cybersecurity, Enterprise, Defense |
| YC Partner | Pete Koomen ([Y Combinator](https://www.ycombinator.com/companies/0security)) |
| Emails | doruk@0.security, fabian@0.security ([Launch YC](https://www.ycombinator.com/launches/X77-0-security-the-autonomous-cybersecurity-team-that-ships-fixes-not-findings)), doruk@doruk.ch ([Ozturk portfolio](https://pc.doruk.ch/)), hello@fabianzbinden.ch ([Zbinden portfolio](https://www.fabianzbinden.ch/)) |

## The Idea

- **Problem:** Enterprise and critical-infrastructure teams use periodic security audits and scanners that leave engineers to investigate findings, write patches, and verify fixes while their code continues changing ([founder interview, Zürcher Studierendenzeitung, Sep 2026](https://www.zsonline.ch/2026/09/16/hacken-auf-prophylaktisch), [Launch YC, Nov 2026](https://www.ycombinator.com/companies/0security)).
- **Approach:** 0cloud tests GitHub code changes in isolation and proposes patches for review in pull requests, while enterprise teams can run the open-source software in their own cloud or on premises ([Launch YC, Nov 2026](https://www.ycombinator.com/companies/0security), [0security Enterprise](https://0.security/enterprise/)).
- **Differentiation:** 0.security offers air-gapped deployment with customer-selected models, GitHub Copilot Autofix proposes fixes from code-scanning alerts inside GitHub, and Semgrep combines static-analysis rules with AI-assisted triage and remediation ([0security Enterprise](https://0.security/enterprise/), [GitHub Docs](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning), [Semgrep](https://semgrep.dev/blog/2026/agentic-appsec-platform/)).
- **Business Model:** The open-source software is free, 0cloud uses prepaid credits with a launch offer of $100 for 50 free pull requests, and the company sells enterprise deployment and management ([0security Terms](https://0.security/terms/), [Launch YC, Nov 2026](https://www.ycombinator.com/companies/0security)).
- **TAM/SAM:** MarketsandMarkets forecasts $13.63B in global application security spending in 2026 and 11.5% CAGR through 2031 ([MarketsandMarkets, Sep 2026](https://www.globenewswire.com/news-release/2026/09/28/3370030/0/en/application-security-market-surges-to-23-45-billion-at-a-cagr-11-5-by-2031-report-by-marketsandmarkets.html)).
- **GTM / Distribution:** The company offers free open-source adoption and self-serve 0cloud onboarding for engineering teams, with direct outreach to critical-infrastructure and enterprise security leaders ([Launch YC, Nov 2026](https://www.ycombinator.com/companies/0security)).

## Defensibility

- **Moat today:** The company publishes examples of upstream security fixes and reports 1.4K GitHub stars for its open-source project ([0security](https://0.security/), [Y Combinator, Nov 2026](https://www.ycombinator.com/companies/0security)).
- **Future moat:** [Inferred]: Customer-specific policies and remediation history could increase switching costs as teams use the product, with no public data found on retention or workflow adoption ([0security Enterprise](https://0.security/enterprise/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: GitHub and Semgrep can compete for remediation in existing developer workflows through the pull-request fixes and AI-assisted remediation they already offer ([GitHub Docs](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning), [Semgrep, Nov 2026](https://semgrep.dev/blog/2026/agentic-appsec-platform/)).

## Market & Traction

- **Traction signals**
  - 1.4K GitHub stars ([Y Combinator, Nov 2026](https://www.ycombinator.com/companies/0security)).
  - 30+ previously unknown Linux kernel vulnerabilities and 500+ CVEs reported by the company ([Launch YC, Nov 2026](https://www.ycombinator.com/companies/0security)).
  - EY partnership and work with the Swiss Federal Department of Defence reported by the founders ([Launch YC, Nov 2026](https://www.ycombinator.com/companies/0security)).
  - Customer testimonial: A Spotify engineer reported scanning almost 30,000 files in under a minute ([0security website, accessed Nov 2026](https://0.security/)).
  - 0cloud launch on November 9, 2026 ([RuntimeWire, Nov 2026](https://runtimewire.com/article/0security-launches-0cloud-github-pull-request-security)).
  - Founder interview in *Zürcher Studierendenzeitung* ([Sep 2026](https://www.zsonline.ch/2026/09/16/hacken-auf-prophylaktisch)).
  - 318 LinkedIn followers and 428 X followers for @0securitylabs ([LinkedIn](https://www.linkedin.com/company/0security/), [Teapawt X mirror](https://nitter.gq/0securitylabs), Nov 2026).
  - 0 open YC job listings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/0security/jobs)).
- **Competitors**
  - **Aikido Security** ($85M raised, revenue unknown): Bundles code, cloud, and runtime security with automated remediation, and raised a $60M Series B led by DST Global in January 2026 ([Aikido company page](https://www.aikido.dev/company/about), [Series B announcement](https://www.aikido.dev/blog/aikido-funding-series-b)).
  - **Semgrep** ($204M raised through Series D, revenue unknown): Builds on rule-based source scanning and dependency reachability, and raised a $100M Series D led by Menlo Ventures in February 2025 ([Semgrep funding release](https://www.prnewswire.com/news-releases/semgrep-announces-100m-series-d-funding-to-advance-ai-powered-code-security-302367780.html), [Semgrep product announcement](https://semgrep.dev/blog/2026/agentic-appsec-platform/)).
  - **Snyk** ($1.247B raised per Sacra, $300M+ company-reported ARR): Suggests fixes for findings from Snyk Code and announced a $196.5M Series G led by Qatar Investment Authority in December 2022 ([Sacra](https://sacra.com/c/snyk/), [Snyk ARR disclosure](https://snyk.io/blog/snyk-ranked-51-on-2025-forbes-cloud-100-list/), [Series G](https://snyk.io/news/snyk-closes-196-5-million-series-g-funding-at-7-4-billion-valuation/), [Snyk Docs](https://docs.snyk.io/snyk-data-and-governance/how-snyk-incorporates-generative-ai-into-the-platform)).
- **Why now:** [Inferred]: The share of GitHub pull requests started by coding agents rose from 17% in March 2026 to over 40% in September, increasing the volume of agent-written changes that teams can check during review ([GitHub Octoverse, Oct 2026](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)).

## Founders & Team

- **Doruk Tan Ozturk (Co-founder and CEO)**
  - **Background:** Studied computer science at ETH Zürich and FHNW, worked in cyber defense at Migros, led cyber and autonomous systems for the Swiss Mars Rover team, and co-founded Soothe Studios ([Ozturk portfolio](https://doruk.ch/), [YC founder profile](https://www.ycombinator.com/founders/doruk-tan-ozturk)); business email doruk@0.security ([Launch YC](https://www.ycombinator.com/companies/0security)).
  - **Twitter/X:** @Peak__Twilight, 909 followers ([Teapawt X mirror, Nov 2026](https://nitter.gq/Peak__Twilight)).
  - **LinkedIn:** 2K followers, headline unavailable in the public view ([LinkedIn](https://www.linkedin.com/in/doruk-ozturk)).
  - **GitHub:** @peaktwilight, `fhnw-dashboard` has 3 stars ([GitHub, Nov 2026](https://github.com/peaktwilight/fhnw-dashboard)).
- **Fabian Zbinden (Co-founder)**
  - **Background:** Attended FHNW and Universidad Popular Autónoma del Estado de Puebla, reports co-founding and exiting Mellivora Capital, founded BEEYOND Clothing, and worked in business development at Crypto Finance, where Deutsche Börse acquired a majority stake in 2021 ([YC founder profile](https://www.ycombinator.com/founders/fabian-zbinden), [Zbinden portfolio](https://www.fabianzbinden.ch/), [Deutsche Börse annual report](https://www.deutsche-boerse.com/resource/blob/2725920/46c9bf2ffcf7da4d6c23de616c518344/data/DBG-annual-report-2021.pdf)); business email fabian@0.security ([Launch YC](https://www.ycombinator.com/companies/0security)).
  - **Twitter/X:** @Bartonaut55, 723 followers ([Teapawt X mirror, Nov 2026](https://nitter.gq/Bartonaut55)).
  - **LinkedIn:** 3K followers, headline unavailable in the public view ([LinkedIn](https://www.linkedin.com/in/fabian-zbinden)).
  - **GitHub:** No public repos found.
- **Co-founder relationship:** Both attended FHNW ([Zürcher Studierendenzeitung, Sep 2026](https://www.zsonline.ch/2026/09/16/hacken-auf-prophylaktisch)).
- **Founder-market fit:** [Inferred]: Ozturk’s security operations and engineering experience and Zbinden’s institutional business development experience cover technical delivery and enterprise sales, with YC backing and Pete Koomen as primary partner ([Ozturk portfolio](https://doruk.ch/), [Zbinden portfolio](https://www.fabianzbinden.ch/), [Y Combinator](https://www.ycombinator.com/companies/0security)).

## Key Risks

- **Platform substitution:** [Inferred]: GitHub’s native Autofix can satisfy some teams’ demand for pull-request remediation within the code host they already use, while 0.security also sells deployments on customer infrastructure ([GitHub Docs](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning), [0security Enterprise](https://0.security/enterprise/)).
- **Patch reliability:** [Inferred]: Automated patches can miss flaws or change application behavior, and the company describes patch testing and human approval before merge as safeguards ([0security product FAQ](https://0.security/)).
- **Data residency:** [Inferred]: Cross-border processing under the hosted service’s data terms can constrain buyers with residency requirements, and the company offers on-premises and air-gapped deployment ([0security DPA](https://0.security/dpa/), [0security Enterprise](https://0.security/enterprise/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $13.63B global application security market in 2026, 11.5% CAGR through 2031 ([MarketsandMarkets, Sep 2026](https://www.globenewswire.com/news-release/2026/09/28/3370030/0/en/application-security-market-surges-to-23-45-billion-at-a-cagr-11-5-by-2031-report-by-marketsandmarkets.html)) |
| SAM | No public data found |
| Traction | 1.4K GitHub stars, company-reported 30+ Linux kernel zero-days and 500+ CVEs, EY and Swiss Federal Department of Defence engagements ([Y Combinator, Nov 2026](https://www.ycombinator.com/companies/0security)) |
| Revenue Signal | Prepaid credits and paid enterprise deployment, $100 launch credit for 50 free pull requests ([0security Terms](https://0.security/terms/), [Launch YC, Nov 2026](https://www.ycombinator.com/companies/0security)); $5 per pull-request test reported at launch ([RuntimeWire, Nov 9, 2026](https://runtimewire.com/article/0security-launches-0cloud-github-pull-request-security)); realized revenue: No public data found |
| Founders | Doruk Tan Ozturk (CEO), Migros cyber defense and Swiss Mars Rover cyber systems lead; Fabian Zbinden (co-founder), Mellivora Capital co-founder and Crypto Finance early hire ([Y Combinator](https://www.ycombinator.com/companies/0security), [Ozturk portfolio](https://doruk.ch/)) |
| Competitors | Aikido ($85M raised, revenue unknown, code-to-runtime suite) ([Aikido](https://www.aikido.dev/company/about)); Semgrep ($204M raised, revenue unknown, rule-based scanning) ([Semgrep funding release](https://www.prnewswire.com/news-releases/semgrep-announces-100m-series-d-funding-to-advance-ai-powered-code-security-302367780.html)); Snyk ($1.247B raised, $300M+ ARR, fixes for Snyk Code findings) ([Sacra](https://sacra.com/c/snyk/), [Snyk](https://snyk.io/blog/snyk-ranked-51-on-2025-forbes-cloud-100-list/), [Snyk Docs](https://docs.snyk.io/snyk-data-and-governance/how-snyk-incorporates-generative-ai-into-the-platform)) |
| Moat Signals | Published upstream security fixes and 1.4K GitHub stars ([0security](https://0.security/), [Y Combinator, Nov 2026](https://www.ycombinator.com/companies/0security)) |
| Risk Factors | Native GitHub remediation ([GitHub Docs](https://docs.github.com/en/code-security/concepts/code-scanning/autofix-for-code-scanning)), patch validation ([0security FAQ](https://0.security/)), cross-border hosted processing ([0security DPA](https://0.security/dpa/)) |
| Founder Reach | Ozturk: 909 X followers, 2K LinkedIn followers, 3 stars on `fhnw-dashboard` ([X mirror](https://nitter.gq/Peak__Twilight), [LinkedIn](https://www.linkedin.com/in/doruk-ozturk), [GitHub](https://github.com/peaktwilight/fhnw-dashboard)); Zbinden: 723 X followers, 3K LinkedIn followers ([X mirror](https://nitter.gq/Bartonaut55), [LinkedIn](https://www.linkedin.com/in/fabian-zbinden)) |
| Distribution Signals | Self-serve 0cloud launch on Nov 9, 2026 ([RuntimeWire](https://runtimewire.com/article/0security-launches-0cloud-github-pull-request-security)); 318 LinkedIn followers and 428 X followers in Nov 2026 ([LinkedIn](https://www.linkedin.com/company/0security/), [X mirror](https://nitter.gq/0securitylabs)) |
| Emails | doruk@0.security, fabian@0.security ([Launch YC](https://www.ycombinator.com/companies/0security)), doruk@doruk.ch ([Ozturk portfolio](https://pc.doruk.ch/)), hello@fabianzbinden.ch ([Zbinden portfolio](https://www.fabianzbinden.ch/)) |
