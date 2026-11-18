# Phone Harness

> Let your agent control your phone

| Field | Value |
|-------|-------|
| Website | https://phone-harness.com/ |
| YC Page | https://www.ycombinator.com/companies/phone-harness |
| Batch | Fall 2026 ([Y Combinator directory](https://www.ycombinator.com/companies/phone-harness)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Open Source, API, Automation, AI |
| YC Partner | Andrew Miklas ([Y Combinator directory](https://www.ycombinator.com/companies/phone-harness)) |
| Emails | support@phone-harness.com, shared support, billing and privacy inbox ([company terms](https://phone-harness.com/terms), [privacy policy](https://phone-harness.com/privacy)) |

## The Idea

- **Problem** Developers building agents for mobile-only workflows hit a coverage gap when browser automation cannot reach native app features, leaving those steps to manual phone use ([Launch YC](https://www.ycombinator.com/launches/WdR-phone-harness-let-your-agent-tap-scroll-and-type-on-your-iphone-or-android), Nov 2026).
- **Approach** The harness reads iPhone screens through Apple Vision OCR and sends input through macOS iPhone Mirroring, uses Android Debug Bridge and the accessibility tree on Android, and exposes the same agent commands for hosted devices ([GitHub README](https://github.com/phone-harness/phone-harness)).
- **Differentiation** Phone Harness supports personal iPhones through macOS mirroring and rents dedicated cloud iPhones, while Phonebox offers Android cloud devices and PhoneUse operates hosted iPhones with physical robots ([Phone Harness GitHub](https://github.com/phone-harness/phone-harness), [Phonebox](https://phonebox.dev/), [PhoneUse](https://www.phoneuse.com/)).
- **Business Model** The local harness is MIT-licensed, and the cloud beta charges 5¢ per Android phone-minute on Basic with $5 starting credit, $20/month for 1,000 minutes on Plus with 4¢ per extra minute, and $80/month per dedicated iPhone or $100 with eSIM, with annual-billing rates of $64 and $80 per month respectively and volume pricing for Scale ([GitHub license](https://github.com/phone-harness/phone-harness), [Phone Harness pricing](https://phone-harness.com/#pricing), Nov 2026).
- **TAM/SAM** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution** Pana introduced the local harness on X in August and launched the cloud offering in November through X and Launch YC, routing developers to self-serve setup and teams building phone fleets to founder-led demos ([Pana’s X posts via Teapawt](https://www.teapawt.org/shawn_pana), [Launch YC](https://www.ycombinator.com/launches/WdR-phone-harness-let-your-agent-tap-scroll-and-type-on-your-iphone-or-android), 2026).

## Defensibility

- **Moat today** The same command interface spans personal and hosted phones, and saved cloud devices preserve apps and logins across runs, creating workflow continuity for teams that configure those devices ([GitHub README](https://github.com/phone-harness/phone-harness), [cloud terms](https://phone-harness.com/terms)).
- **Future moat** [Inferred]: Accumulated device configurations and reusable workflows could raise switching costs if customers run recurring workloads, but public retention and repeat-usage figures were unavailable.
- **Market structure** No structural barrier identified at this stage.
- **Commoditization risk** Developers can fork the MIT-licensed harness, and Mobilerun already offers a phone fleet and its own agent task runner ([Phone Harness GitHub](https://github.com/phone-harness/phone-harness), [Mobilerun](https://mobilerun.ai/)).

## Market & Traction

- **Traction signals**
  - 5.1K GitHub stars and 522 forks ([GitHub](https://github.com/phone-harness/phone-harness), Nov 17, 2026).
  - 855 followers on company X account @phone_harness ([Teapawt X mirror](https://www.teapawt.org/phone_harness), Nov 17, 2026).
  - 224,391 views on Pana’s Nov 4 cloud-launch post ([Teapawt X mirror](https://www.teapawt.org/shawn_pana), snapshot Nov 17, 2026).
  - Cloud launch on Launch YC in November 2026, with Nov 4 coverage by RuntimeWire ([Launch YC](https://www.ycombinator.com/launches/WdR-phone-harness-let-your-agent-tap-scroll-and-type-on-your-iphone-or-android), [RuntimeWire](https://runtimewire.com/article/phone-harness-ai-agents-real-cloud-phones-shawn-pana)).
  - YC Fall 2026 backing, with a $125K September seed entry in Dealroom and a published YC standard deal of $500K across two SAFEs ([YC directory](https://www.ycombinator.com/companies/phone-harness), [Dealroom](https://app.dealroom.co/companies/phone_harness), [YC standard deal](https://www.ycombinator.com/deal)).
  - 0 open YC job postings ([YC Jobs](https://www.ycombinator.com/companies/phone-harness/jobs), Nov 17, 2026).
- **Competitors**
  - **Mobilerun / Droidrun** (€2.1M disclosed, revenue unknown) bundles its own task-running agent with hosted phones, with a pre-seed round led by Merantix Capital in August 2025 ([Mobilerun](https://mobilerun.ai/), [Merantix Capital](https://news.merantix-capital.com/p/agents-are-automating-desktop-and)).
  - **PhoneUse** (funding unknown, revenue unknown) rents real iPhones that robots operate through physical touch ([PhoneUse](https://www.phoneuse.com/)).
  - **Phonebox** (funding unknown, revenue unknown) offers cloud Android devices with per-second billing and free parking ([Phonebox](https://phonebox.dev/)).
  - **Limrun** (funding amount unverified, revenue unknown) provides remote Xcode and iOS and Android simulators for building and testing apps, with YC Spring 2026 backing ([YC directory](https://www.ycombinator.com/companies/limrun)).
  - **BrowserStack** ($250M across disclosed rounds, $100M ARR milestone in 2022) sells real-device infrastructure for automated QA, with its $200M Series B led by BOND in June 2021 ([BrowserStack company history](https://www.browserstack.com/company), [Series B announcement](https://www.browserstack.com/press/browserstack-closes-200-million-in-series-b-funding-at-a-4-billion-valuation)).
- **Why now** [Inferred]: OpenAI’s March 2026 release of native computer use in GPT‑5.4 gave developers an off-the-shelf model for screenshot-driven interaction, while Phone Harness supplies access to the mobile device ([OpenAI release](https://openai.com/index/introducing-gpt-5-4/), [Phone Harness GitHub](https://github.com/phone-harness/phone-harness)).

## Founders & Team

- **Shawn Pana (Founder/CEO)**
  - **Background** Studied mathematics–computer science and music at UC San Diego, led launches and developer partnerships as Browser Use’s Head of Growth, and built the `smux` terminal automation tool ([founder website](https://shawnpana.com/), [YC founder profile](https://www.ycombinator.com/founders/shawn-pana)). Prior exit and direct business email — No public data found.
  - **Twitter/X** @shawn_pana, 4.3K followers ([Teapawt X mirror](https://www.teapawt.org/shawn_pana), Nov 17, 2026).
  - **LinkedIn** “Shawn Pana – Browser Use” is the indexed profile title, with 1K followers ([LinkedIn via search snippet](https://www.linkedin.com/in/shawnpana), indexed Sep 2026).
  - **GitHub** @ShawnPana, 209 followers, with 1.5K stars for `smux` ([GitHub profile](https://github.com/ShawnPana), [smux repository](https://github.com/ShawnPana/smux), Nov 2026).
- **Co-founder relationship** No public data on co-founder history.
- **Founder-market fit** Pana’s work launching browser-agent tools, developing developer partnerships and building terminal automation overlaps with Phone Harness’s agent integrations and developer distribution, and YC lists Andrew Miklas as primary partner ([YC founder profile](https://www.ycombinator.com/founders/shawn-pana), [founder website](https://shawnpana.com/), [YC directory](https://www.ycombinator.com/companies/phone-harness)).

## Key Risks

- **Platform dependency** Local iPhone control depends on Apple’s iPhone Mirroring and pauses when the user unlocks the phone, with hosted iPhones available as another deployment option ([GitHub README](https://github.com/phone-harness/phone-harness)).
- **Workflow coverage** The local harness excludes multi-touch, camera and Face ID flows, and unlabeled controls require a screenshot and a vision-capable model ([GitHub README](https://github.com/phone-harness/phone-harness)).
- **Cloud data handling** Hosted sessions log commands and entered text, and persistent devices retain app logins between runs, with device reset and temporary Android sessions available to limit what remains on a device ([privacy policy](https://phone-harness.com/privacy)).
- **Third-party app permissions** Cloud terms restrict users to services that permit automated or non-personal access, so an app’s access rules can exclude workflows the harness can technically perform ([cloud terms](https://phone-harness.com/terms)).
- **Name collision** A separate research project called PhoneHarness publishes a mobile-agent benchmark whose results could be misattributed to the startup ([arXiv paper](https://arxiv.org/abs/2606.14832), [YC directory](https://www.ycombinator.com/companies/phone-harness)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 5.1K stars and 522 forks ([GitHub](https://github.com/phone-harness/phone-harness), Nov 17, 2026), 855 company X followers and 224,391 cloud-launch post views ([Teapawt company mirror](https://www.teapawt.org/phone_harness), [founder mirror](https://www.teapawt.org/shawn_pana), Nov 17, 2026), launch coverage ([RuntimeWire](https://runtimewire.com/article/phone-harness-ai-agents-real-cloud-phones-shawn-pana), Nov 4, 2026) |
| Revenue Signal | Android Basic 5¢/minute, Plus $20/month with 1,000 minutes and 4¢/minute overage, dedicated iPhone $80/month or $100 with eSIM ([Phone Harness pricing](https://phone-harness.com/#pricing), Nov 2026). Realized revenue and paying-customer count — No public data found. |
| Founders | Shawn Pana (Founder/CEO), UC San Diego, former Browser Use Head of Growth, creator of `smux` ([YC founder profile](https://www.ycombinator.com/founders/shawn-pana), [founder website](https://shawnpana.com/)) |
| Competitors | Mobilerun (€2.1M disclosed, revenue unknown, bundled task agent) ([Merantix](https://news.merantix-capital.com/p/agents-are-automating-desktop-and), [Mobilerun](https://mobilerun.ai/)), PhoneUse (funding unknown, revenue unknown, robot-operated iPhones) ([PhoneUse](https://www.phoneuse.com/)), Phonebox (funding unknown, revenue unknown, per-second Android) ([Phonebox](https://phonebox.dev/)), Limrun (funding amount unverified, revenue unknown, hosted Xcode and simulators) ([YC](https://www.ycombinator.com/companies/limrun)), BrowserStack ($250M disclosed, $100M ARR milestone in 2022, real-device QA) ([BrowserStack](https://www.browserstack.com/company)) |
| Moat Signals | Shared command interface across local and cloud devices, persistent apps and logins on saved cloud devices ([GitHub README](https://github.com/phone-harness/phone-harness), [cloud terms](https://phone-harness.com/terms)) |
| Risk Factors | Apple Mirroring dependency and workflow exclusions ([GitHub README](https://github.com/phone-harness/phone-harness)), cloud input logging ([privacy policy](https://phone-harness.com/privacy)), third-party automation restrictions ([cloud terms](https://phone-harness.com/terms)) |
| Founder Reach | Shawn Pana — X 4.3K followers ([Teapawt](https://www.teapawt.org/shawn_pana), Nov 2026), LinkedIn 1K followers ([LinkedIn via search snippet](https://www.linkedin.com/in/shawnpana), indexed Sep 2026), GitHub 209 followers and 1.5K `smux` stars ([GitHub profile](https://github.com/ShawnPana), [smux](https://github.com/ShawnPana/smux), Nov 2026) |
| Distribution Signals | Launch YC and X launch (Nov 2026), Python package on PyPI (Aug 2026), OpenClaw plugin on ClawHub ([Launch YC](https://www.ycombinator.com/launches/WdR-phone-harness-let-your-agent-tap-scroll-and-type-on-your-iphone-or-android), [X mirror](https://www.teapawt.org/shawn_pana), [PyPI release history](https://pypi.org/project/phone-harness/#history), [ClawHub](https://docs.clawhub.ai/phone-harness/plugins/phone-harness)) |
| Emails | support@phone-harness.com, shared support, billing and privacy inbox ([company terms](https://phone-harness.com/terms), [privacy policy](https://phone-harness.com/privacy)) |
