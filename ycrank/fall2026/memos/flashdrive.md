# FlashDrive

> A shared drive for your team and all your AI agents.

| Field | Value |
|-------|-------|
| Website | https://flashdrive.space |
| YC Page | https://www.ycombinator.com/companies/flashdrive |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/flashdrive)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Cloud Computing, Infrastructure, AI, Databases |
| YC Partner | Pete Koomen ([Y Combinator](https://www.ycombinator.com/companies/flashdrive)) |
| Emails | team@evokoa.com, shared Evokoa team inbox ([Evokoa team page](https://wondersearch.ai/team/)) |

## The Idea

- **Problem:** Teams running agents across laptops, cloud sandboxes, and CI use Git, S3, and sync scripts to move files between environments, and concurrent writes can leave agents working from different versions ([Dale Ng, LinkedIn](https://www.linkedin.com/company/flashdriveai)).
- **Approach:** FlashDrive exposes the same cloud files through macOS and Linux mounts or Model Context Protocol (MCP), streams the bytes a program accesses, and merges concurrent changes to Markdown and CSV files or preserves both versions ([Y Combinator](https://www.ycombinator.com/companies/flashdrive), [FlashDrive, LinkedIn](https://www.linkedin.com/company/flashdriveai)).
- **Differentiation:** FlashDrive says it merges simultaneous edits within Markdown and CSV files, while Dropbox documents separate conflicted copies and Google Drive documents uploading a new revision for non-Google files ([FlashDrive, LinkedIn](https://www.linkedin.com/company/flashdriveai), [Dropbox Help](https://help.dropbox.com/en-en/organize/conflicted-copy), [Google Workspace Help](https://support.google.com/a/users/answer/9296687?hl=en)).
- **Business Model:** The launch offered a limited-time free early-access tier, and Dale Ng subsequently announced unlimited free egress ([FlashDrive launch, LinkedIn, Nov 2026](https://www.linkedin.com/company/flashdriveai), [Dale Ng, X mirror, Nov 2026](https://www.xitter.cf/daleverett/status/2122579562488066535)). Website not accessible at time of research.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment. MarketsandMarkets estimates the broader enterprise file sync and share market at $11.96 billion in 2026, with 11.2% forecast CAGR through 2031 ([MarketsandMarkets, 2026](https://www.marketsandmarkets.com/Market-Reports/enterprise-file-sharing-and-synchronization-market-149308334.html)).
- **GTM / Distribution:** The founders promoted the drive as WonderDrive to WonderSearch users before launching FlashDrive with an early-access signup on X and LinkedIn ([FlashDrive, LinkedIn, Nov 2026](https://www.linkedin.com/company/flashdriveai), [Doomers AI launch tracker, Nov 2026](https://doomers.ai/launches/wondersearch-flashdrive)).

## Defensibility

- **Moat today:** The company reports file-level conflict handling across local mounts and agent sandboxes, including concurrent merges within CSV files ([Y Combinator](https://www.ycombinator.com/companies/flashdrive), [FlashDrive, LinkedIn](https://www.linkedin.com/company/flashdriveai)).
- **Future moat:** [Inferred]: Teams that build agent handoffs around shared paths and file history could incur migration costs, but public sources provide no FlashDrive retention or deployment data.
- **Market structure:** No structural barrier identified at this stage ([AWS AgentCore filesystem documentation](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-filesystem-configurations.html), [Dropbox DBX Agent Cloud announcement](https://investors.dropbox.com/news-releases/news-release-details/dropbox-announces-plans-acquire-tigris-data-inc-and-unveils-dbx)).
- **Commoditization risk:** AWS already offers shared S3-backed files across agent sessions, and Layven offers shared MCP storage with write attribution and rollback ([AWS AgentCore documentation](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-filesystem-configurations.html), [Layven product page](https://layven.io/)).

## Market & Traction

- **Traction signals:**
  - Public launch on November 15, 2026, with 28,040 X post views as of November 17 ([Doomers AI launch tracker, Nov 2026](https://doomers.ai/launches/wondersearch-flashdrive)).
  - Approximately 1,500 followers on `@flashdrive_ai` ([X profile mirror, Nov 2026](https://www.nitter.cf/flashdrive_ai)).
  - Y Combinator and Founders, Inc. listed as Evokoa backers ([Evokoa, Nov 2026](https://evokoa.com/)).
  - Zero jobs listed on the YC company page ([Y Combinator, Nov 2026](https://www.ycombinator.com/companies/flashdrive)).
  - Earlier product, **Polygres**: more than 500 users, founder-reported ([Dale Ng, LinkedIn, Jul 2026](https://www.linkedin.com/posts/dale-everett_there-are-places-where-founders-work-and-activity-7487998580763582464-X_57)).
  - Earlier Evokoa projects: approximately 1,100 stars for pgGraph and 266 for pgContext ([pgGraph, GitHub, Nov 2026](https://github.com/Evokoa/pgGraph), [pgContext, GitHub, Nov 2026](https://github.com/Evokoa/pgContext)).
- **Competitors:**
  - **Layven** (funding unknown, revenue unknown): MCP drive with path-scoped agent tokens and separate, attributed versions for simultaneous writes ([Layven product page](https://layven.io/)).
  - **Amulet** (YC Summer 2026 backing, amount undisclosed, revenue unknown): Linux workspaces that fork into isolated writable copies and can merge selected changes ([Amulet product page](https://amulet.so/), [Amulet, LinkedIn](https://www.linkedin.com/company/amulet-labs)).
  - **Daytona** ($91 million raised, $3 million ARR reported in June 2026): shared volumes within its agent sandbox platform, with a $60 million Series B led by FirstMark Growth in October 2026 ([Daytona volumes documentation](https://www.daytona.io/docs/volumes/), [Daytona funding announcement](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Outset Capital interview with Daytona’s CEO](https://outsetcapital.substack.com/p/daytona-hit-3m-arr-in-95-days-ceo)).
  - **Dropbox** ($1.7 billion in disclosed financing tracked by aVenture, $2.555 billion companywide ARR in Q3 2026): conventional file sync with conflicted copies, plus an agent infrastructure offering that starts with S3-compatible object storage ([aVenture funding history](https://aventure.vc/companies/dropbox-san-francisco-ca-us/fundraising), [Dropbox Q3 2026 results](https://dropbox.gcs-web.com/news-releases/news-release-details/dropbox-announces-third-quarter-2026-results), [Dropbox Help](https://help.dropbox.com/en-en/organize/conflicted-copy)).
- **Why now:** [Inferred]: The September 2026 launch of OpenAI’s managed Agents API, which lets parallel subagents work in cloud sandboxes, increases the number of workflows that need to pass files between execution environments ([OpenAI, Sep 2026](https://openai.com/index/introducing-the-agents-api/)).

## Founders & Team

- **Dale Ng (Founder/CEO):**
  - **Background:** Dale Everett Ng attended Singapore Polytechnic, co-founded Master Technologies, grew Swig Energy to over 5,000 customers, and led community at Bholdus ([YC founder profile](https://www.ycombinator.com/founders/dale-ng), [Evokoa team page](https://evokoa.com/team/)). Direct business email: No public data found.
  - **Twitter/X:** `@daleverett`, 5,051 followers at launch ([YC founder profile](https://www.ycombinator.com/founders/dale-ng), [Doomers AI launch tracker, Nov 2026](https://doomers.ai/launches/wondersearch-flashdrive)).
  - **LinkedIn:** “Polygres (YC F26)” appears in the indexed profile title, with approximately 2,000 followers ([LinkedIn, via search snippet](https://sg.linkedin.com/in/dale-everett)).
  - **GitHub:** No public repos found.
- **Dalton Prescott (Founder/CTO):**
  - **Background:** Dalton Prescott Ng attended Singapore Polytechnic, researched at DSO, received Apple scholarships in 2018 and 2019, and led product and pre-sales at BitCyber across more than 250 APAC partners ([YC founder profile](https://www.ycombinator.com/founders/dalton-prescott), [Evokoa team page](https://evokoa.com/team/)). Direct business email: No public data found.
  - **Twitter/X:** `@daltonmeon`, 933 followers ([YC founder profile](https://www.ycombinator.com/founders/dalton-prescott), [X profile mirror, Nov 2026](https://www.xitter.cf/daltonmeon)).
  - **LinkedIn:** “Wondersearch (YC F26)” appears in the indexed profile title, with approximately 2,000 followers ([LinkedIn, via search snippet](https://sg.linkedin.com/in/dalton-prescott-ng)).
  - **GitHub:** No public repos found.
- **Co-founder relationship:** The founders are twins who both attended Singapore Polytechnic and worked together on the Master iOS app ([Apple Newsroom, Mar 2019](https://www.apple.com/sg/newsroom/2019/03/apple-announces-expanded-coding-initiatives-in-singapore-and-indonesia/), [Dale’s YC profile](https://www.ycombinator.com/founders/dale-ng), [Dalton’s YC profile](https://www.ycombinator.com/founders/dalton-prescott)).
- **Founder-market fit:** Dale ran growth and community for prior products, Dalton led B2B product and pre-sales, and both built WonderSearch at Evokoa, whose site names YC and Founders, Inc. as backers ([Evokoa team page](https://evokoa.com/team/), [YC company page](https://www.ycombinator.com/companies/flashdrive), [Evokoa](https://evokoa.com/)).

## Key Risks

- **Concurrent-write correctness:** [Inferred]: The public examples cover Markdown and CSV, leaving merge behavior under interruptions or concurrent edits to other formats unverified, with file version rollback available as a recovery mechanism ([FlashDrive launch, LinkedIn](https://www.linkedin.com/company/flashdriveai)).
- **Enterprise procurement:** [Inferred]: Customers that require completed SOC 2 reports may defer deployment while both Type 1 and Type 2 remain in progress, though Evokoa makes a security questionnaire available ([Evokoa Trust Center](https://trust.evokoa.com/)).
- **Bundled substitutes:** [Inferred]: Teams running agents on AWS or Daytona can source shared storage from their sandbox provider, and Dropbox plans to add filesystem capabilities to DBX Agent Cloud ([AWS AgentCore documentation](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-filesystem-configurations.html), [Daytona volumes documentation](https://www.daytona.io/docs/volumes/), [Dropbox Q3 2026 results](https://dropbox.gcs-web.com/news-releases/news-release-details/dropbox-announces-third-quarter-2026-results)).
- **Name ambiguity:** [Inferred]: The brand shares a term with USB storage hardware, making the `flashdrive.space` domain and YC listing useful identifiers in search ([SanDisk](https://www.sandisk.com/topics/usb-flash-drives/what-is-a-usb-flash-drive), [Y Combinator](https://www.ycombinator.com/companies/flashdrive)).
- **Headquarters discrepancy:** [Inferred]: The operating headquarters is unclear from public records because YC and Evokoa list San Francisco and the company’s LinkedIn page lists Singapore ([Y Combinator](https://www.ycombinator.com/companies/flashdrive), [Evokoa](https://evokoa.com/), [FlashDrive, LinkedIn](https://www.linkedin.com/company/flashdriveai)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | November 15, 2026 launch and 28,040 launch-post views by November 17 ([Doomers AI](https://doomers.ai/launches/wondersearch-flashdrive)); approximately 1,500 company X followers ([X profile mirror, Nov 2026](https://www.nitter.cf/flashdrive_ai)) |
| Revenue Signal | Limited-time free early-access tier and founder-announced unlimited free egress ([FlashDrive launch, LinkedIn, Nov 2026](https://www.linkedin.com/company/flashdriveai), [Dale Ng, X mirror, Nov 2026](https://www.xitter.cf/daleverett/status/2122579562488066535)) |
| Founders | Dale Ng (Founder/CEO), Swig Energy and Bholdus ([Evokoa team](https://evokoa.com/team/)); Dalton Prescott (Founder/CTO), DSO researcher and former BitCyber product and pre-sales lead ([Evokoa team](https://evokoa.com/team/), [YC founder profile](https://www.ycombinator.com/founders/dalton-prescott)) |
| Competitors | Layven (funding unknown, revenue unknown, attributed file versions) ([Layven](https://layven.io/)); Amulet (YC-backed, amount undisclosed, revenue unknown, forkable Linux workspaces) ([Amulet](https://amulet.so/), [Amulet, LinkedIn](https://www.linkedin.com/company/amulet-labs)); Daytona ($91M raised, $3M ARR reported June 2026, sandbox volumes) ([Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Outset Capital](https://outsetcapital.substack.com/p/daytona-hit-3m-arr-in-95-days-ceo)); Dropbox ($1.7B disclosed financing, $2.555B Q3 2026 ARR, conventional sync and agent object storage) ([aVenture](https://aventure.vc/companies/dropbox-san-francisco-ca-us/fundraising), [Dropbox Q3 2026 results](https://dropbox.gcs-web.com/news-releases/news-release-details/dropbox-announces-third-quarter-2026-results)) |
| Moat Signals | Company-reported concurrent Markdown and CSV merges across mounts and MCP connections ([FlashDrive, LinkedIn](https://www.linkedin.com/company/flashdriveai)) |
| Risk Factors | Concurrent-write correctness ([FlashDrive launch](https://www.linkedin.com/company/flashdriveai)), SOC 2 in progress ([Evokoa Trust Center](https://trust.evokoa.com/)), bundled storage substitutes ([AWS AgentCore docs](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-filesystem-configurations.html)) |
| Founder Reach | Dale Ng: 5,051 X followers at launch ([Doomers AI, Nov 2026](https://doomers.ai/launches/wondersearch-flashdrive)), approximately 2,000 LinkedIn followers ([LinkedIn, via search snippet](https://sg.linkedin.com/in/dale-everett)); Dalton Prescott: 933 X followers ([X profile mirror, Nov 2026](https://www.xitter.cf/daltonmeon)), approximately 2,000 LinkedIn followers ([LinkedIn, via search snippet](https://sg.linkedin.com/in/dalton-prescott-ng)) |
| Distribution Signals | Founder-led launch on X and LinkedIn, with 28,040 X launch-post views by November 17, 2026 ([Doomers AI](https://doomers.ai/launches/wondersearch-flashdrive), [FlashDrive, LinkedIn](https://www.linkedin.com/company/flashdriveai)) |
| Emails | team@evokoa.com, shared Evokoa team inbox ([Evokoa team page](https://wondersearch.ai/team/)) |
