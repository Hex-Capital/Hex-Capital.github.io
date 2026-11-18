# Versine

> The agent-first consumer bank.

| Field | Value |
|-------|-------|
| Website | https://versine.com?utm_source=ycombinator |
| YC Page | https://www.ycombinator.com/companies/versine |
| Batch | Fall 2026 ([YC company profile](https://www.ycombinator.com/companies/versine)) |
| Industry | Fintech / Fintech -> Consumer Finance |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Fintech, Consumer, Consumer Finance, Neobank, AI |
| YC Partner | David Lieb ([YC company profile](https://www.ycombinator.com/companies/versine)) |
| Emails | harshithl1777@gmail.com (Harshith, [founder website](https://www.harshith.dev/)), support@versine.com (support, [Versine](https://versine.com/about)), privacy@versine.com (privacy, [Privacy Policy](https://versine.com/legal/privacy)), legal@versine.com (legal, [Terms of Service](https://versine.com/legal/terms)), privacy@oversine.com (earlier sign-in product, [legacy terms](https://versine.com/terms)) |

## The Idea

- **Problem:** Consumers who ask AI assistants to split a bill or repay a friend still have to complete the transfer themselves in a payment app such as Venmo ([Launch YC](https://www.ycombinator.com/launches/X2Q-versine-send-money-with-ai), [Venmo User Agreement](https://venmo.com/legal/us-user-agreement)).
- **Approach:** Versine connects assistants through Model Context Protocol (MCP) to send or request money using passkey approval or standing rules, with up to 100 transfers per prompt and bank claim links for recipients without accounts ([Versine MCP docs](https://versine.com/docs/mcp), [Launch YC](https://www.ycombinator.com/launches/X2Q-versine-send-money-with-ai)).
- **Differentiation:** Versine lets an assistant initiate person-to-person transfers and send bank claim links, while Venmo uses in-app Pay and Request, Cash App offers shareable payment requests, Stripe Link authorizes purchases at merchants, and Nevermined bills for agent and API usage ([Versine](https://versine.com/), [Venmo](https://venmo.com/legal/us-user-agreement), [Cash App](https://cash.app/press/cash-app-launches-payment-links), [Stripe](https://stripe.com/blog/giving-agents-the-ability-to-pay), [Nevermined](https://nevermined.ai/)).
- **Business Model:** Accounts, sending, and standard bank payouts are free, instant payouts cost $1, and third-party top-up fees appear before confirmation ([Versine Terms of Service, Nov. 15, 2026](https://versine.com/legal/terms#fees)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The November payments launch used Launch YC, Product Hunt, iOS and Android listings, and a $100 credit for sending money to friends ([Launch YC](https://www.ycombinator.com/launches/X2Q-versine-send-money-with-ai), [Product Hunt, Nov. 17, 2026](https://www.producthunt.com/leaderboard/daily/2026/11/17)).

## Defensibility

- **Moat today:** Versine combines a self-custodied USDC wallet, passkey-signed payment permissions, and Bridge identity verification and bank payouts ([Versine Compliance](https://versine.com/legal/compliance), [Versine MCP docs](https://versine.com/docs/mcp)).
- **Future moat:** [Inferred]: Saved contacts, recurring transfers, and assistant-specific rules could increase switching costs if users rely on them regularly, and public retention data for those features was unavailable ([Versine](https://versine.com/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Payment incumbents can reuse their wallet and approval infrastructure for assistant-initiated transactions, as Stripe has done for merchant purchases with Link ([Stripe, Apr. 29, 2026](https://stripe.com/blog/giving-agents-the-ability-to-pay)).

## Market & Traction

- **Traction signals**
  - Payments launch ranked #6 with 182 upvotes on the featured daily leaderboard ([Product Hunt, Nov. 17, 2026 snapshot](https://www.producthunt.com/leaderboard/daily/2026/11/17)).
  - Android listing showed 5+ downloads ([Google Play, Nov. 17, 2026 snapshot](https://play.google.com/store/apps/details?id=com.versine.app)).
  - Company accounts showed 1,213 LinkedIn followers and 168 X followers ([LinkedIn](https://www.linkedin.com/company/versinehq/), [Sotwe mirror of @VersineApp](https://www.sotwe.com/VersineApp?lang=en), Nov. 17, 2026 snapshots).
  - Founderland previewed the payments product on Nov. 6, and SOTA2 covered its receipt-to-payment workflow on Nov. 11 ([Founderland](https://founderland.ai/articles/versine-previews-venmo-for-agents-payments-for-ai-assistants-mw5b1gn2), [SOTA2](https://www.sota2.com/blog/versine), Nov. 2026).
  - YC listed zero open jobs ([YC Jobs, Nov. 17, 2026 snapshot](https://www.ycombinator.com/companies/versine/jobs)).
  - Before the November payments launch, Oversine, Inc. marketed an agent sign-in product in September 2026, and Dealroom records a $125K September seed entry for the company during that period ([September launch coverage](https://companylaunchtracker.substack.com/p/company-launch-tracker-110), [legacy terms](https://versine.com/terms), [Dealroom](https://app.dealroom.co/companies/versine)).
- **Competitors**
  - **Venmo** ($1.2M May 2010 seed led by RRE Ventures, $1.7B FY2025 revenue) handles personal payments inside Venmo and extended transfers to PayPal users ([VatorNews](https://vator.tv/2018-01-02-when-venmo-was-young-the-early-years/), [PayPal FY2025 earnings call](https://s205.q4cdn.com/875401827/files/doc_financials/2025/q4/PayPal-4Q-25-Earnings-Transcript.pdf), [PayPal, Mar. 2026](https://s205.q4cdn.com/875401827/files/doc_news/200-Million-More-Friends-on-Venmo----Send-Money-to-PayPal-Users-Around-the-World-2026.pdf)).
  - **Cash App** (Block segment, $15.43B FY2025 net revenue) provides in-app transfers and shareable payment-request links ([Block FY2025 10-K](https://www.sec.gov/Archives/edgar/data/1512673/000162828026012254/xyz-20251231.htm), [Cash App, Feb. 2026](https://cash.app/press/cash-app-launches-payment-links)).
  - **Stripe Link** (parent announced a Series I exceeding $6.5B in March 2023 with investors including Thrive Capital and General Catalyst, Link revenue unknown) lets assistants shop at merchants with task-specific payment credentials ([Stripe financing announcement](https://stripe.com/en-gi/newsroom/news/stripe-series-i-employee-liquidity), [Stripe Link announcement](https://stripe.com/blog/giving-agents-the-ability-to-pay)).
  - **Nevermined** (over $4M announced in January 2025, led by Generative Ventures, revenue unknown) meters and settles payments for AI services and agent purchases ([Nevermined funding announcement](https://www.globenewswire.com/news-release/2025/01/09/3007256/0/en/Nevermined-Raises-4M-to-Build-the-PayPal-for-AI-Commerce.html), [Nevermined product](https://nevermined.ai/)).
- **Why now:** [Inferred]: The July 2026 MCP release hardened authorization for external tools, and Versine uses MCP to bring payment requests into assistants such as Claude and ChatGPT ([MCP specification release](https://blog.modelcontextprotocol.io/posts/2026-07-28/), [Versine MCP docs](https://versine.com/docs/mcp)).

## Founders & Team

- **Harshith Latchupatula (Founder)**
  - **Background:** Studied computer science at the University of Toronto, worked on Stripe Connect and AWS Fargate autoscaling, and publishes harshithl1777@gmail.com as his direct contact ([YC founder profile](https://www.ycombinator.com/founders/harshith-latchupatula), [founder website](https://www.harshith.dev/)).
  - **Twitter/X:** @harshith, 140 followers ([teapawt X mirror, Nov. 17, 2026](https://www.xitter.gq/harshith)).
  - **LinkedIn:** “University of Toronto” in the indexed profile title ([LinkedIn, via search snippet](https://ca.linkedin.com/in/harshithlatchupatula)).
  - **GitHub:** @harshithl1777, `beacon` with 1 star ([GitHub](https://github.com/harshithl1777/beacon)).
- **Vishnudev Poil (Founder)**
  - **Background:** Attended the University of Waterloo and worked on Amazon Ads and OpenText observability, with no public founder email found ([YC founder profile](https://www.ycombinator.com/founders/vishnudev-poil)).
  - **Twitter/X:** @PoilVishnudev, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/vishnudev-poil)).
  - **LinkedIn:** “Versine (YC F26)” in the indexed profile title ([LinkedIn, via search snippet](https://www.linkedin.com/in/vishnudev-poil/)).
  - **GitHub:** No public repos found.
- **Param Thakkar (Founder)**
  - **Background:** On leave from Waterloo computer science after working on Databricks Vector Search, Glean Deep Research, and Quora ads ML, and publishes p28thakk@uwaterloo.ca as his university contact ([founder website](https://www.param.me/), [YC founder profile](https://www.ycombinator.com/founders/param-thakkar)).
  - **Twitter/X:** @xparamt, about 1,000 followers ([teapawt X mirror, Nov. 17, 2026](https://www.nitter.cf/xparamt)).
  - **LinkedIn:** “Databricks” in the indexed profile title ([LinkedIn, via search snippet](https://www.linkedin.com/in/paramt)).
  - **GitHub:** @paramt, `url-checker` with 33 stars ([GitHub](https://github.com/paramt/url-checker)).
- **Co-founder relationship:** The founders report a 10-year friendship, and Poil and Thakkar both attended Waterloo ([Launch YC](https://www.ycombinator.com/launches/X2Q-versine-send-money-with-ai), [YC Poil profile](https://www.ycombinator.com/founders/vishnudev-poil), [YC Thakkar profile](https://www.ycombinator.com/founders/param-thakkar)).
- **Founder-market fit:** Latchupatula brings payment-platform experience from Stripe Connect, Poil brings systems observability experience from OpenText, and Thakkar brings AI tooling experience from Glean, with David Lieb assigned as their YC partner ([YC company profile](https://www.ycombinator.com/companies/versine)).

## Key Risks

- **Agent payment errors:** An assistant can make an unintended payment within a standing rule, and blockchain transfers may be irreversible. Users can cap permissions, require passkey approval, and revoke assistant access ([Versine Terms](https://versine.com/legal/terms), [MCP docs](https://versine.com/docs/mcp)).
- **Bank payout dependency:** Bridge handles identity verification and bank payouts, so a Bridge outage or restriction could interrupt both functions ([Versine Compliance](https://versine.com/legal/compliance)).
- **Uninsured balances:** Users hold Circle-issued USDC in self-custodied wallets without FDIC deposit insurance ([Versine Terms](https://versine.com/legal/terms)).
- **Name collision:** Finnish software company Secapp Oy also uses the name Versine, which can cause unrelated app, hiring, and financial records to be attributed to the YC company ([Secapp Oy registry profile](https://woorati.com/en/companies/2411828-1/secapp-oy), [Versine Terms](https://versine.com/legal/terms)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 5+ Android downloads ([Google Play, Nov. 17, 2026](https://play.google.com/store/apps/details?id=com.versine.app)), coverage ([Founderland, Nov. 6](https://founderland.ai/articles/versine-previews-venmo-for-agents-payments-for-ai-assistants-mw5b1gn2), [SOTA2, Nov. 11](https://www.sota2.com/blog/versine)) |
| Revenue Signal | Free accounts, transfers, and standard bank payouts, with $1 instant payouts and disclosed provider top-up fees ([Versine Terms, Nov. 15, 2026](https://versine.com/legal/terms#fees)) |
| Founders | Harshith Latchupatula (Founder), Stripe Connect and AWS Fargate. Vishnudev Poil (Founder), Amazon Ads and OpenText observability. Param Thakkar (Founder), Databricks Vector Search and Glean Deep Research ([YC](https://www.ycombinator.com/companies/versine)). |
| Competitors | Venmo ($1.2M seed, $1.7B FY2025 revenue, in-app P2P, [VatorNews](https://vator.tv/2018-01-02-when-venmo-was-young-the-early-years/), [PayPal](https://s205.q4cdn.com/875401827/files/doc_financials/2025/q4/PayPal-4Q-25-Earnings-Transcript.pdf)); Cash App ($15.43B FY2025 segment revenue, in-app P2P, [Block 10-K](https://www.sec.gov/Archives/edgar/data/1512673/000162828026012254/xyz-20251231.htm)); Stripe Link (parent Series I over $6.5B, revenue unknown, merchant checkout, [Stripe](https://stripe.com/en-gi/newsroom/news/stripe-series-i-employee-liquidity), [Link](https://stripe.com/blog/giving-agents-the-ability-to-pay)); Nevermined (over $4M announced, revenue unknown, AI-service billing, [Nevermined announcement](https://www.globenewswire.com/news-release/2025/01/09/3007256/0/en/Nevermined-Raises-4M-to-Build-the-PayPal-for-AI-Commerce.html)) |
| Moat Signals | Passkey-signed payment rules and Bridge identity verification and payout integration ([Versine Compliance](https://versine.com/legal/compliance), [MCP docs](https://versine.com/docs/mcp)) |
| Risk Factors | Agent payment errors, Bridge dependency, uninsured USDC balances ([Versine Terms](https://versine.com/legal/terms), [Compliance](https://versine.com/legal/compliance)) |
| Founder Reach | Harshith: X 140, `beacon` 1 star ([X mirror](https://www.xitter.gq/harshith), [GitHub](https://github.com/harshithl1777/beacon)). Vishnudev: @PoilVishnudev, count not retrievable ([YC](https://www.ycombinator.com/founders/vishnudev-poil)). Param: X about 1K, `url-checker` 33 stars ([X mirror](https://www.nitter.cf/xparamt), [GitHub](https://github.com/paramt/url-checker)). |
| Distribution Signals | Product Hunt #6 with 182 upvotes, LinkedIn 1,213 followers, X 168 followers ([Product Hunt](https://www.producthunt.com/leaderboard/daily/2026/11/17), [LinkedIn](https://www.linkedin.com/company/versinehq/), [Sotwe](https://www.sotwe.com/VersineApp?lang=en), Nov. 17, 2026 snapshots) |
| Emails | harshithl1777@gmail.com (Harshith, [founder website](https://www.harshith.dev/)), support@versine.com (support, [Versine](https://versine.com/about)), privacy@versine.com (privacy, [Privacy Policy](https://versine.com/legal/privacy)), legal@versine.com (legal, [Terms of Service](https://versine.com/legal/terms)), privacy@oversine.com (earlier sign-in product, [legacy terms](https://versine.com/terms)) |
