# GrayPass

> Verify the expected person is still in control before sensitive?

| Field | Value |
|-------|-------|
| Website | https://graypass.com/ |
| YC Page | https://www.ycombinator.com/companies/graypass |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/graypass)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | Toronto, ON, Canada |
| Tags | Biometrics, Identity, Infrastructure |
| YC Partner | Max Kolysh ([Y Combinator](https://www.ycombinator.com/companies/graypass)) |
| Emails | aravmathur23@gmail.com ([Mathur’s GitHub contact](https://github.com/aravM23)), aditya@graypass.org ([Ranjan’s LinkedIn, via search snippet](https://www.linkedin.com/in/ad1tyaranjan)), founders@graypass.org ([founder and evaluation inbox](https://graypass.com/company)), tools@graypass.org ([legal, privacy, and security inbox](https://graypass.com/privacy)) |

## The Idea

- **Problem:** Applications that handle payouts, data exports, or permission changes can receive a sensitive request hours after password, passkey, or MFA sign-in, when the original check offers limited evidence about who controls the session ([GrayPass](https://graypass.com/)).
- **Approach:** GrayPass evaluates identity, device, session, transaction, and behavioral evidence such as typing cadence and pointer movement against customer policy, returns allow, challenge, hold, or deny for the application to enforce, and issues short-lived signed proof bound to permitted actions in enforce mode ([GrayPass](https://graypass.com/), [YC Launch](https://www.ycombinator.com/launches/Wb9-graypass-the-most-dangerous-actions-happen-after-login)).
- **Differentiation:** GrayPass signs proof for an exact application action, while Castle applies account-abuse policies to risk scores, BioCatch scores banking fraud and scams, and BehavioSec delivers behavioral risk signals through LexisNexis’s decision platform ([GrayPass](https://graypass.com/), [Castle](https://docs.castle.io/docs/creating-a-policy), [BioCatch](https://www.biocatch.com/company), [LexisNexis](https://risk.lexisnexis.com/products/behaviosec)).
- **Business Model:** The evaluation form lists a starting price of $500/month, and the terms describe paid evaluations or annual contracts with an allowance metered by assured actions or active Brainprint months ([GrayPass Evaluation](https://graypass.com/evaluate), [Terms](https://graypass.com/terms), [October 2026 documentation](https://app.graypass.org/docs/GrayPass-Documentation.pdf)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment. Grand View Research estimates the broader global behavioral biometrics market at $3.8B in 2026, with 23.0% CAGR through 2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/behavioral-biometrics-market)).
- **GTM / Distribution:** GrayPass recruits evaluators through a form that asks which workflow and identity stack they want to test, then starts with a protected action in shadow mode ([GrayPass Evaluation](https://graypass.com/evaluate), [Platform](https://graypass.com/platform)).

## Defensibility

- **Moat today:** GrayPass documents customer-scoped behavioral templates and cryptographic proofs bound to a specific action and application ([GrayPass Privacy Policy](https://graypass.com/privacy), [GrayPass Platform](https://graypass.com/platform)).
- **Future moat:** [Inferred]: Customer-specific enrollment and policies embedded in sensitive workflows could create switching costs, with no public retention or migration data establishing their magnitude ([GrayPass Platform](https://graypass.com/platform)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Castle already combines behavioral and device evidence with application-defined policies that return allow, challenge, or deny, and Mathur says incumbent security vendors could build the same capability ([Castle](https://docs.castle.io/docs/creating-a-policy), [Entrepreneur, Nov 2026](https://www.entrepreneur.com/business-news/tech/graypass-founders-arav-mathur-and-aditya-ranjan-are-betting-security-cannot-stop-at-login)).

## Market & Traction

- **Traction signals:**
  - More than 900,000 sessions processed across customer applications, company-reported ([YC Launch, Oct 2026](https://www.ycombinator.com/launches/Wb9-graypass-the-most-dangerous-actions-happen-after-login)).
  - $100K investment from 1517 Fund disclosed in GrayPass’s continuous-authentication announcement ([Mathur, LinkedIn, Mar 2026](https://www.linkedin.com/posts/aravmathur_imagine-raising-6-figures-for-a-startup-you-activity-7435783477691817984-O4Bg)).
  - Ontario regional winner in Entrepreneurship and Technology for its biometric authentication project ([Ingenious+, 2026](https://ingeniousplus.ca/submission/graypass/)).
  - Company coverage in Forbes and Entrepreneur, plus a company announcement distributed through Markets Insider ([Forbes, Sep 2026](https://www.forbes.com/sites/terdawn-deboe/2026/09/23/small-business-security-now-depends-on-what-happens-after-login/), [Entrepreneur, Nov 2026](https://www.entrepreneur.com/business-news/tech/graypass-founders-arav-mathur-and-aditya-ranjan-are-betting-security-cannot-stop-at-login), [Markets Insider press release, Oct 2026](https://markets.businessinsider.com/news/stocks/graypass-introduces-post-login-security-to-check-who-is-still-in-control-before-critical-actions-1036654166)).
  - 421 LinkedIn followers and 94 X followers on @graypassinc ([GrayPass LinkedIn, Nov 2026](https://www.linkedin.com/company/graypass/), [X profile mirror, Nov 2026](https://www.nitter.cf/graypassinc)).
  - 21K views on Ranjan’s October 28 launch post on X ([The Launch Video Company, Nov 2026 snapshot](https://www.launchvideo.com/directory/graypass)).
  - 0 open roles on YC Jobs ([Y Combinator, Nov 2026](https://www.ycombinator.com/companies/graypass/jobs)).
- **Competitors:**
  - Castle ($11.6M raised, revenue unknown): Developer APIs for device and behavioral fraud scoring and custom policies, with a $9.2M Series A led by Index Ventures in February 2019 ([Castle funding announcement](https://blog.castle.io/weve-raised-9-2-million-led-by-index-ventures/), [SparkLabs](https://www.sparklabsgroup.com/portfolio/castle), [Castle Policies](https://docs.castle.io/docs/creating-a-policy)).
  - BioCatch (over $200M raised per Sacra, over $185M ARR at year-end 2025): Banking fraud and scam detection, with a $145M Bain Capital Tech Opportunities-led Series C in April 2020 and a $20M bank-led extension in September 2020 ([Sacra](https://sacra.com/c/biocatch/), [BioCatch results](https://www.biocatch.com/press-release/biocatch-finishes-2025-with-best-quarter-in-company-history), [Bain Capital](https://www.baincapital.com/news/biocatch-closes-145-million-investment-led-bain-capital-tech-opportunities), [BioCatch extension](https://www.biocatch.com/press-release/major-global-banks-invest-20-million-in-biocatch-and-join-american-express-ventures-on-new-client-innovation-board)).
  - BehavioSec (€21M raised per Tech.eu, revenue unknown): Passive behavioral analytics bundled with LexisNexis ThreatMetrix, following a $17.5M January 2018 Series B led by Trident Capital Cybersecurity and acquisition by LexisNexis in 2022 ([Tech.eu](https://funding.tech.eu/companies/0DE3BFF3-7D03-4BF8-BF90-A0AA513E2E8C), [BehavioSec funding announcement](https://news.cision.com/behaviosec/r/behaviosec-raises--17-5m-series-b-investment-led-by-trident-capital-cybersecurity-to-accelerate-glob%2Cc2439985), [LexisNexis](https://risk.lexisnexis.com/global/en/about-us/press-room/press-release/20220503-behaviosec)).
- **Why now:** [Inferred]: The July 2025 release of ChatGPT agent, which can fill in forms and edit spreadsheets through a browser, gives applications a reason to distinguish user actions from delegated actions within authenticated sessions ([OpenAI, Jul 2025](https://openai.com/index/introducing-chatgpt-agent/)).

## Founders & Team

- **Arav Mathur (Founder/CEO):**
  - Background: Studied computer science at Waterloo, worked in growth engineering at Stan and in software or AI roles at BenchSci and AVIEW International, and built the separate fashion app Oro, which he reported reached 4.3K weekly active users. Email: aravmathur23@gmail.com ([YC founder profile](https://www.ycombinator.com/founders/arav-mathur), [Entrepreneur](https://www.entrepreneur.com/business-news/tech/graypass-founders-arav-mathur-and-aditya-ranjan-are-betting-security-cannot-stop-at-login), [GitHub contact](https://github.com/aravM23)).
  - Twitter/X: @aravmathur23, 548 followers ([X profile mirror, Nov 2026](https://teapawt.org/aravmathur23)).
  - LinkedIn: “Founder/CEO” in Experience, with 3K followers in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/aravmathur)).
  - GitHub: @aravM23, with 1 star for `Sound-Generation` ([GitHub, Nov 2026](https://github.com/aravM23/Sound-Generation)).
- **Aditya Ranjan (Founder/COO):**
  - Background: Studied neuroscience at McGill, conducted neurosurgical research at SickKids, and received a UBC fellowship to model epilepsy outcomes from MRI scans. Email: aditya@graypass.org ([YC founder profile](https://www.ycombinator.com/founders/aditya-ranjan), [LinkedIn, via search snippet](https://www.linkedin.com/in/ad1tyaranjan)).
  - Twitter/X: @ad1tyaranjan, 470 followers ([TwStalker, Nov 2026](https://m.twstalker.com/ad1tyaranjan)).
  - LinkedIn: “Founder/COO” in Experience, with 3K followers in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/ad1tyaranjan)).
  - GitHub: No public repos found.
- **Co-founder relationship:** They met at Harold M. Brathwaite Secondary School in 2021 and moved to San Francisco in 2026 to run GrayPass, whose YC directory entry lists Toronto ([Mathur’s YC profile](https://www.ycombinator.com/founders/arav-mathur), [Ranjan’s YC profile](https://www.ycombinator.com/founders/aditya-ranjan), [Entrepreneur](https://www.entrepreneur.com/business-news/tech/graypass-founders-arav-mathur-and-aditya-ranjan-are-betting-security-cannot-stop-at-login), [YC directory](https://www.ycombinator.com/companies/graypass)).
- **Founder-market fit:** Mathur brings application engineering experience and Ranjan brings computational neuroscience research, and GrayPass identifies YC, Afore, 1517 Fund, and Boost VC as backers ([Entrepreneur](https://www.entrepreneur.com/business-news/tech/graypass-founders-arav-mathur-and-aditya-ranjan-are-betting-security-cannot-stop-at-login), [GrayPass LinkedIn](https://www.linkedin.com/company/graypass/)).

## Key Risks

- **Recognition performance:** GrayPass labels its behavioral continuity signals experimental and limits them to sandbox and shadow evaluation while the core decision API is in beta ([GrayPass Platform](https://graypass.com/platform)).
- **Application enforcement:** Coverage depends on customers wiring each protected workflow into their server-side authorization path and enforcing the decision before execution, with shadow mode available to test the integration ([GrayPass Platform](https://graypass.com/platform)).
- **Biometric consent:** Illinois deployments must gate collection on affirmative consent under GrayPass’s published policy, which also specifies retention and deletion procedures ([GrayPass BIPA policy](https://graypass.com/legal/bipa)).
- **Bundled substitutes:** LexisNexis already combines behavioral biometrics with device and identity intelligence, and Castle offers developer-facing policy decisions at transaction time ([LexisNexis BehavioSec](https://risk.lexisnexis.com/products/behaviosec), [Castle risk documentation](https://docs.castle.io/docs/risk-scores)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader behavioral biometrics market: $3.8B in 2026, 23.0% CAGR through 2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/behavioral-biometrics-market)) |
| SAM | No public data found |
| Traction | More than 900,000 customer-app sessions ([YC Launch, Oct 2026](https://www.ycombinator.com/launches/Wb9-graypass-the-most-dangerous-actions-happen-after-login)), Ontario regional award ([Ingenious+, 2026](https://ingeniousplus.ca/submission/graypass/)) |
| Revenue Signal | $50K in company-reported October 2026 revenue as of launch ([YC Launch](https://www.ycombinator.com/launches/Wb9-graypass-the-most-dangerous-actions-happen-after-login), [dated launch post archive](https://www.launchvideo.com/directory/graypass)), pricing from $500/month ([GrayPass Evaluation](https://graypass.com/evaluate)) |
| Founders | Arav Mathur (CEO), Waterloo CS and Stan growth engineering ([YC](https://www.ycombinator.com/founders/arav-mathur)). Aditya Ranjan (COO), McGill neuroscience and SickKids research ([YC](https://www.ycombinator.com/founders/aditya-ranjan)). |
| Competitors | Castle ($11.6M raised, revenue unknown, account-fraud APIs) ([Castle](https://blog.castle.io/weve-raised-9-2-million-led-by-index-ventures/)). BioCatch (over $200M raised, over $185M ARR at year-end 2025, banking fraud) ([Sacra](https://sacra.com/c/biocatch/), [BioCatch](https://www.biocatch.com/press-release/biocatch-finishes-2025-with-best-quarter-in-company-history)). BehavioSec (€21M raised, revenue unknown, behavioral risk within LexisNexis) ([Tech.eu](https://funding.tech.eu/companies/0DE3BFF3-7D03-4BF8-BF90-A0AA513E2E8C), [LexisNexis](https://risk.lexisnexis.com/products/behaviosec)). |
| Moat Signals | Tenant-scoped behavioral templates and signed proofs bound to an application action ([GrayPass Privacy Policy](https://graypass.com/privacy), [Platform](https://graypass.com/platform)) |
| Risk Factors | Experimental behavioral recognition, application-side enforcement ([GrayPass Platform](https://graypass.com/platform)), biometric consent requirements ([GrayPass BIPA policy](https://graypass.com/legal/bipa)) |
| Founder Reach | Mathur: 548 X followers, 3K LinkedIn followers, 1 GitHub repo star ([X profile mirror](https://teapawt.org/aravmathur23), [LinkedIn, via search snippet](https://www.linkedin.com/in/aravmathur), [GitHub](https://github.com/aravM23/Sound-Generation)). Ranjan: 470 X followers, 3K LinkedIn followers ([TwStalker](https://m.twstalker.com/ad1tyaranjan), [LinkedIn, via search snippet](https://www.linkedin.com/in/ad1tyaranjan)). |
| Distribution Signals | 421 company LinkedIn followers, 94 company X followers, 21K views on Ranjan’s launch post ([GrayPass LinkedIn](https://www.linkedin.com/company/graypass/), [X profile mirror](https://www.nitter.cf/graypassinc), [The Launch Video Company, Nov 2026](https://www.launchvideo.com/directory/graypass)) |
| Emails | aravmathur23@gmail.com ([Mathur’s GitHub contact](https://github.com/aravM23)), aditya@graypass.org ([Ranjan’s LinkedIn, via search snippet](https://www.linkedin.com/in/ad1tyaranjan)), founders@graypass.org ([founder and evaluation inbox](https://graypass.com/company)), tools@graypass.org ([legal, privacy, and security inbox](https://graypass.com/privacy)) |
