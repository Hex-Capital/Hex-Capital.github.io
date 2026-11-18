# OpenHack

> Always-on AI security engineer

| Field | Value |
|-------|-------|
| Website | https://openhack.com |
| YC Page | https://www.ycombinator.com/companies/openhack |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/openhack)) |
| Industry | B2B / B2B -> Security |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | DevSecOps, Cybersecurity, AI |
| YC Partner | Max Kolysh ([Y Combinator](https://www.ycombinator.com/companies/openhack)) |
| Emails | ananay@openhack.com (Ananay Arora, founder and CEO, [YC launch](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)), security@openhack.com and legal@openhack.com (security advisories and legal inquiries, [OpenHack Contact](https://openhack.com/contact)), privacy@openhack.com (data deletion and subprocessor notices, [OpenHack Trust Center](https://openhack.com/trust)), team@openhack.com (organization contact, [OpenHack GitHub](https://github.com/openhackai)) |

## The Idea

- **Problem** Engineering and application-security teams spend time triaging false positives from conventional scanners and use periodic penetration tests that can fall out of date as software ships ([OpenHack About](https://openhack.com/about), [YC launch, Nov 2026](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)).
- **Approach** OpenHack maps code, infrastructure, and business logic, uses that context to verify and prioritize findings by business impact, and prepares fixes for review ([OpenHack launch, Nov 2026](https://openhack.com/blog/introducing-openhack)).
- **Differentiation** OpenHack combines application mapping, code scanning, live testing, and business-impact triage, alongside alternatives such as GitHub Code Security’s repository-native alerts and fixes, Aikido’s dedicated on-premises appliance, and Endor Labs’ function-level dependency analysis ([OpenHack launch](https://openhack.com/blog/introducing-openhack), [GitHub Docs](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning), [Aikido](https://www.aikido.dev/blog/the-aikido-machine-on-prem-ai-pentesting-that-never-leaves-your-network), [Endor Labs](https://www.endorlabs.com/use-case/sca-with-reachability)).
- **Business Model** OpenHack lists a $0 pay-as-you-go entry tier with one project, five pull-request reviews per month, and one full scan, plus custom Enterprise pricing ([OpenHack Pricing, Nov 2026](https://openhack.com/pricing)).
- **TAM/SAM** MarketsandMarkets estimates the broader application-security market at $13.63B in 2026 with 11.5% CAGR through 2031, and no public SAM data was found for OpenHack’s specific segment ([MarketsandMarkets, Mar 2026](https://www.marketsandmarkets.com/Market-Reports/application-security-market-110170194.html)).
- **GTM / Distribution** OpenHack offers self-serve signup and an open-source CLI for developers, with founder-led demos and onboarding for enterprise buyers ([OpenHack Pricing](https://openhack.com/pricing), [OpenHack GitHub](https://github.com/openhackai/OpenHack), [YC launch, Nov 2026](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)).

## Defensibility

- **Moat today** OpenHack’s custom scanning software led the six configurations in its own PentestBench comparison on F1 score, which combines precision and recall against the benchmark catalog ([OpenHack PentestBench, Nov 2026](https://openhack.com/blog/introducing-pentestbench)).
- **Future moat** [Inferred]: Customer-specific infrastructure maps, triage rules, and remediation workflows could create switching costs as teams configure the product, although the public materials provide no retention or migration data ([OpenHack launch](https://openhack.com/blog/introducing-openhack), [OpenHack Pricing](https://openhack.com/pricing)).
- **Market structure** No structural barrier identified at this stage.
- **Commoditization risk** Strix already offers scheduled AI testing, remediation pull requests, and retesting, demonstrating overlap with OpenHack’s managed testing and remediation workflow ([Strix platform launch, Apr 2026](https://www.strix.ai/blog/introducing-the-new-strix-platform), [OpenHack launch, Nov 2026](https://openhack.com/blog/introducing-openhack)).

## Market & Traction

- **Traction signals**
  - Pocket, HydraDB, Docura Health, OpenSEO, Hue, and Melty named as users in OpenHack’s launch announcement ([YC launch, Nov 2026](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)).
  - Papermark fixed a cloud-storage exposure reported by OpenHack, according to OpenHack’s launch announcement ([YC launch, Nov 2026](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)).
  - 444 GitHub stars for the open-source scanner ([GitHub, Nov 17, 2026](https://github.com/openhackai/OpenHack)).
  - 416 LinkedIn followers and approximately 1.6K X followers ([OpenHack LinkedIn, Nov 2026](https://www.linkedin.com/company/openhackai), [X profile via Teapawt mirror, Nov 2026](https://nitter.cf/OpenHack)).
  - 65,293 views on the November 3 launch post as of November 4 ([Doomers AI launch tracker, Nov 2026](https://doomers.ai/launches/openhack)).
  - Founder interview on the *Security Bite* podcast ([9to5Mac, Oct 1, 2026](https://9to5mac.com/2026/10/01/security-bite-podcast-the-new-era-of-bug-hunting-with-openhacks-ananay-arora/)).
  - $500K YC accelerator financing reported by Caplight ([Caplight, Oct 2026](https://www.caplight.com/company/openhack)).
  - Zero open postings on YC in November, and Kartik Khorwal announced joining as a Member of Technical Staff in October ([YC directory, Nov 2026](https://www.ycombinator.com/companies/openhack), [OpenHack LinkedIn](https://www.linkedin.com/company/openhackai), [Khorwal’s X announcement via Teapawt mirror, Oct 2026](https://nitter.cf/kartik_builds)).
- **Competitors**
  - **Aikido Security** ($85M raised, over $40M ARR reported in May 2026) offers a dedicated on-premises appliance for AI testing and code analysis, and its $60M January 2026 Series B was led by DST Global ([Aikido About](https://www.aikido.dev/company/about), [ProductLed founder interview](https://productled.com/blog/no-sales-call-required-roeland-delrue-on-scaling-aikido-to-a-cybersecurity-unicorn), [Series B](https://www.aikido.dev/blog/aikido-funding-series-b), [Aikido Machine](https://www.aikido.dev/blog/the-aikido-machine-on-prem-ai-pentesting-that-never-leaves-your-network)).
  - **XBOW** ($272M across announced rounds, revenue unknown) specializes in continuous penetration testing, and its $35M May 2026 extension followed a $120M March Series C co-led by DFJ Growth and Northzone ([XBOW Series B](https://xbow.com/blog/series-b), [Series C](https://xbow.com/news/xbow-raises-120m-to-scale), [May extension](https://xbow.com/news/xbow-secures-additional-35m-from-strategic-investors)).
  - **Endor Labs** ($163M company-disclosed funding, $15M estimated year-end 2025 ARR) offers function-level dependency reachability, and its $93M April 2025 Series B was led by DFJ Growth ([Endor Labs funding](https://www.endorlabs.com/learn/endor-labs-drives-225-revenue-growth-pioneers-the-future-of-secure-sdlc), [Series B](https://www.prnewswire.com/news-releases/endor-labs-raises-93m-series-b-to-secure-the-ai-code-revolution-302435409.html), [Sacra estimate](https://sacra.com/c/endor-labs/), [Endor Labs product](https://www.endorlabs.com/use-case/sca-with-reachability)).
  - **Strix** ($6.7M raised, revenue unknown) emphasizes repeat testing and risk trends by asset, and PitchBook lists a $6.7M June 2026 seed round with no public lead identified ([Strix platform launch](https://www.strix.ai/blog/introducing-the-new-strix-platform), [PitchBook](https://pitchbook.com/profiles/company/1380944-44)).
- **Why now** [Inferred]: Anthropic’s April 2026 introduction of Claude Mythos Preview marked a model capability change that OpenHack put into its commercial scanning workflow with its November 2026 launch ([Anthropic, Apr 2026](https://www.anthropic.com/research/mythos-preview), [OpenHack, Nov 2026](https://openhack.com/blog/introducing-openhack)).

## Founders & Team

- **Ananay Arora (Founder/CEO)**
  - **Background** B.S. and M.S. in computer science from Arizona State University, former Apple software engineer and ASU security researcher, with Legix listed as a prior employer and ananay@openhack.com published for direct business inquiries ([ASU bachelor’s profile](https://stg-fullcircle.fsewp.asu.edu/graduate/ananay-arora/), [ASU master’s profile](https://news.asu.edu/20230428-computer-science-empowers-asu-grad-make-big-impacts), [YC founder profile](https://www.ycombinator.com/founders/ananay-arora), [YC launch](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)).
  - **Twitter/X** @ananayarora, approximately 14.5K followers ([X profile via Teapawt mirror, Nov 2026](https://www.teapaw.org/ananayarora)).
  - **LinkedIn** “Building OpenHack” in the public profile text, with approximately 7K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/ananay)).
  - **GitHub** @ananay, with 330 stars on `apple-auth`, a Node.js library for Sign in with Apple ([GitHub, Nov 2026](https://github.com/ananay/apple-auth)).
- **Co-founder relationship** No public data on co-founder history ([YC lists Arora as the sole founder](https://www.ycombinator.com/companies/openhack)).
- **Founder-market fit** Arora reports over 12 years of vulnerability research and bug bounties from Meta, Apple, Perplexity, DHS, and YC, and OpenHack lists YC, Solo Founders, and SF1 as backers ([YC founder profile](https://www.ycombinator.com/founders/ananay-arora), [OpenHack About](https://openhack.com/about)).

## Key Risks

- **Detection coverage** OpenHack’s configuration found 277 of 761 planted vulnerabilities in its own white-box evaluation, leaving coverage gaps even with source access ([OpenHack PentestBench, Nov 2026](https://openhack.com/blog/introducing-pentestbench)).
- **Platform substitution** GitHub’s native agentic autofix gives existing GitHub Code Security customers an in-platform option for code-scanning remediation, overlapping with OpenHack’s fix pull requests ([GitHub Docs](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning), [OpenHack launch](https://openhack.com/blog/introducing-openhack)).
- **Source-code procurement** Managed scans require temporary access to private repositories, and OpenHack lists read-only access, post-scan deletion, and an on-premises Enterprise option ([OpenHack Trust Center](https://openhack.com/trust), [OpenHack Pricing](https://openhack.com/pricing)).
- **Name ambiguity** [Inferred]: The shared OpenHack name can complicate branded discovery because a Swedish hackathon organization uses `openhack.io` and an educational coding tool uses `openhack.dev` ([OpenHack cybersecurity](https://openhack.com), [Openhack Sweden](https://www.openhack.io/who-we-are), [OpenHack education](https://openhack.dev/legal/gdpr)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $13.63B global application security in 2026, 11.5% CAGR through 2031 ([MarketsandMarkets, Mar 2026](https://www.marketsandmarkets.com/Market-Reports/application-security-market-110170194.html)) |
| SAM | No public data found |
| Traction | Pocket, HydraDB, Docura Health, OpenSEO, Hue, and Melty named at launch, with a disclosed Papermark remediation ([YC launch, Nov 2026](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)); 444 scanner stars ([GitHub, Nov 2026](https://github.com/openhackai/OpenHack)); founder interview ([9to5Mac, Oct 2026](https://9to5mac.com/2026/10/01/security-bite-podcast-the-new-era-of-bug-hunting-with-openhacks-ananay-arora/)) |
| Revenue Signal | $0 pay-as-you-go entry tier and custom Enterprise pricing ([OpenHack Pricing, Nov 2026](https://openhack.com/pricing)). Realized revenue and paying customer count — No public data found |
| Founders | Ananay Arora (Founder/CEO), ASU computer science M.S., former Apple software engineer, vulnerability researcher ([ASU](https://news.asu.edu/20230428-computer-science-empowers-asu-grad-make-big-impacts), [YC](https://www.ycombinator.com/founders/ananay-arora)) |
| Competitors | Aikido Security ($85M raised, over $40M reported ARR, on-premises appliance) ([Aikido](https://www.aikido.dev/company/about), [ProductLed, May 2026](https://productled.com/blog/no-sales-call-required-roeland-delrue-on-scaling-aikido-to-a-cybersecurity-unicorn), [Aikido Machine](https://www.aikido.dev/blog/the-aikido-machine-on-prem-ai-pentesting-that-never-leaves-your-network)); XBOW ($272M across announced rounds, revenue unknown, continuous pentesting) ([XBOW Series B](https://xbow.com/blog/series-b), [Series C](https://xbow.com/news/xbow-raises-120m-to-scale), [extension](https://xbow.com/news/xbow-secures-additional-35m-from-strategic-investors)); Endor Labs ($163M disclosed, $15M estimated year-end 2025 ARR, dependency reachability) ([Endor Labs](https://www.endorlabs.com/learn/endor-labs-drives-225-revenue-growth-pioneers-the-future-of-secure-sdlc), [Sacra](https://sacra.com/c/endor-labs/), [product](https://www.endorlabs.com/use-case/sca-with-reachability)); Strix ($6.7M raised, revenue unknown, scheduled retesting) ([PitchBook](https://pitchbook.com/profiles/company/1380944-44), [Strix](https://www.strix.ai/blog/introducing-the-new-strix-platform)) |
| Moat Signals | Custom scanning software led the company’s published six-configuration comparison on catalog F1 ([OpenHack PentestBench, Nov 2026](https://openhack.com/blog/introducing-pentestbench)) |
| Risk Factors | Detection coverage ([OpenHack PentestBench](https://openhack.com/blog/introducing-pentestbench)), native remediation overlap ([GitHub Docs](https://docs.github.com/en/code-security/how-tos/manage-security-alerts/manage-code-scanning-alerts/managing-access-to-agentic-autofix-for-code-scanning)), private-repository access ([OpenHack Trust Center](https://openhack.com/trust)) |
| Founder Reach | Ananay Arora — X ~14.5K ([Teapawt mirror, Nov 2026](https://www.teapaw.org/ananayarora)), LinkedIn ~7K ([LinkedIn, via search snippet](https://www.linkedin.com/in/ananay)), `apple-auth` 330 stars ([GitHub, Nov 2026](https://github.com/ananay/apple-auth)) |
| Distribution Signals | CLI on PyPI ([PyPI, Jun 2026](https://pypi.org/project/openhack/0.1.0/)), current platform launch ([OpenHack, Nov 3, 2026](https://openhack.com/blog/introducing-openhack)), 65,293 launch-post views ([Doomers AI, Nov 4, 2026](https://doomers.ai/launches/openhack)), 416 company LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/openhackai)), ~1.6K company X followers ([Teapawt mirror, Nov 2026](https://nitter.cf/OpenHack)) |
| Emails | ananay@openhack.com (CEO, [YC launch](https://www.ycombinator.com/launches/Wkw-openhack-always-on-ai-security-engineer)), security@openhack.com and legal@openhack.com ([OpenHack Contact](https://openhack.com/contact)), privacy@openhack.com ([OpenHack Trust Center](https://openhack.com/trust)), team@openhack.com ([OpenHack GitHub](https://github.com/openhackai)) |
