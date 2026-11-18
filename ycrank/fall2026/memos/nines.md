# Nines

> Robot pit crew for AI data centers

| Field | Value |
|-------|-------|
| Website | https://ninesrobotics.ai/ |
| YC Page | https://www.ycombinator.com/companies/nines |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/nines)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Robotics, AI |
| YC Partner | Pete Koomen ([Y Combinator](https://www.ycombinator.com/companies/nines)) |
| Emails | taerim@ninesrobotics.ai, Taerim Eom, CEO and published company contact ([Nines Robotics](https://ninesrobotics.ai/)) |

## The Idea

- **Problem:** AI data center operators rely on technicians to match, insert, and verify thousands of fiber connections per GPU rack before commissioning and to replace failed components on live sites, where an idle GPU node can cost the operator revenue ([Y Combinator company profile](https://www.ycombinator.com/companies/nines), [Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers)).
- **Approach:** Nines is developing autonomous robots and control models for rack-side work, starting with fiber patching during commissioning and targeting drive swaps, optics reseating, and server restarts during live operations ([Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers)).
- **Differentiation:** Nines starts with autonomous fiber patching on site, while Exclaim prioritizes repairs on live 800 V racks and Proprio also targets server assembly and component recovery from retired hardware ([Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers), [Exclaim Robotics](https://exclaimrobotics.com/), [Proprio Robotics on YC](https://www.ycombinator.com/companies/proprio-robotics)).
- **Business Model:** [Inferred]: Per-site deployment and service fees are a possible model because Nines offers to configure installations for individual rows, halls, and rack formats ([Nines Robotics blog, Sep 2026](https://ninesrobotics.ai/blog/hyperscalers-already-use-robots)).
- **TAM/SAM:** Grand View Research estimates the broader global data center robotics market at $16.2B in 2026 and projects 21.1% CAGR through 2033, including inspection and monitoring robots ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/data-center-robotics-market-report)).
- **GTM / Distribution:** Nines solicits introductions to data center builders and operators through its YC launch and accepts site-specific demo requests through its website ([Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers), [Nines demo form](https://ninesrobotics.ai/demo)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Field data from repeated patching and recovery across rack layouts could improve Nines’ control models, with the case still unproven because its public materials give no fleet-scale performance results ([Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers), [Nines simulation credits](https://ninesrobotics.ai/credits)).
- **Market structure:** No structural barrier identified at this stage, and Microsoft Research has published a rack-side transceiver manipulation prototype ([Microsoft Research, HotNets 2024](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-113.pdf)).
- **Commoditization risk:** [Inferred]: Robotics vendors can start with publicly available simulation assets and cable-manipulation benchmarks, which lowers the cost of prototyping comparable workflows ([Nines simulation credits](https://ninesrobotics.ai/credits), [Industrial Dexterity Benchmark, Jul 2026](https://arxiv.org/abs/2607.14021)).

## Market & Traction

- **Traction signals:**
  - $125K seed entry attributed to Y Combinator in September 2026, as reported by a funding database ([Dealroom, accessed Nov 2026](https://app.dealroom.co/companies/nines_3)).
  - Public launch on November 13, 2026, through Launch YC and Taerim Eom’s X account ([Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers), [Eom’s X post via teapawt](https://nitter.cf/taerimcreates)).
  - Approximately 152,800 views on Eom’s launch post, covered in an industry newsletter ([The Daily Punchlist, Nov 14, 2026](https://dailypunchlist.com/issues/2026-11-14/)).
  - 78 X followers for @ninesrobotics ([X via teapawt, Nov 2026 snapshot](https://nitter.cf/ninesrobotics)).
  - Company LinkedIn page, follower count not retrievable ([LinkedIn, Nov 2026](https://www.linkedin.com/company/ninesrobotics/)).
  - 0 open jobs on YC ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/nines/jobs)).
- **Competitors:**
  - **Watney Robotics** (over $100M raised, revenue unknown): Reports hyperscaler deployments since 2025 and an $80M Series A in September 2026 co-led by Valor Atreides AI Fund and Hummingbird Ventures ([Watney](https://watney.com/media/introducing-watney), [A*, Sep 2026](https://www.a-star.co/news/watney)).
  - **Darwin Robotics** ($3.6M raised, revenue unknown): Trains general-purpose robot technicians from human demonstrations and announced a $3.6M pre-seed led by Link Ventures in November 2026 ([Darwin announcement via Rebel Fund](https://do.linkedin.com/company/rebel-fund), [Fireround](https://fireround.dev/companies/darwin-robotics)).
  - **Exclaim Robotics** ($4.96M raised per Form D, revenue unknown): Focuses on optics, cabling, and drive replacement on live 800 V racks and disclosed an August 2026 pre-seed co-led by Playfair and Founderful ([Exclaim Robotics](https://exclaimrobotics.com/), [SEC Form D](https://www.sec.gov/Archives/edgar/data/2149175/000214917526000001/xslFormDX01/primary_doc.xml), [Playfair investor announcement](https://www.linkedin.com/posts/cdgsmith_nothing-happens-in-europe-in-august-we-activity-7490319472420081664-Pqj6)).
  - **Proprio Robotics** (funding amount undisclosed, revenue unknown): Uses custom hardware and manipulation models for server assembly, live maintenance, and parts recovery, with commercial maintenance deployments targeted for Q1 2027 ([Proprio Robotics on YC](https://www.ycombinator.com/companies/proprio-robotics), [Crunchbase](https://www.crunchbase.com/organization/proprio-robotics)).
- **Why now:** [Inferred]: Production rollouts of rack-scale systems such as Nebius’s December 2025 NVIDIA GB300 NVL72 deployment bring high-density GPU racks into service, where Nines identifies manual fiber commissioning as a bottleneck ([Nebius, Dec 2025](https://nebius.com/blog/posts/first-live-nvidia-gb300-nvl72-deployment-in-europe), [Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers)).

## Founders & Team

- **Taerim Eom (Founder/CEO):**
  - **Background:** Studied computer science at Cornell, worked at Patreon and HomeRoom, and led algorithm work for Cornell’s Perfect Match project ([YC founder profile](https://www.ycombinator.com/founders/taerim-eom), [The Cornell Daily Sun, Feb 2024](https://www.cornellsun.com/article/2024/02/six-hour-delay-in-pairing-propels-threatening-messages-towards-perfect-match-team)). Business email is taerim@ninesrobotics.ai ([Nines Robotics](https://ninesrobotics.ai/)).
  - **Twitter/X:** @taerimcreates, 133 followers ([X via teapawt, Nov 2026 snapshot](https://nitter.cf/taerimcreates)).
  - **LinkedIn:** Headline not retrievable, with “Stealth Startup” and 1K followers in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/taerimeom)).
  - **GitHub:** @taerimeom, `projectry`, 0 stars on the repository page ([GitHub, Nov 2026](https://github.com/taerimeom/projectry)).
- **Tiantian Li (Founder/CTO):**
  - **Background:** Studied computer science at Cornell, worked on Cornell’s autonomous underwater vehicle team and at Xerox PARC, and ran large-scale inference at Meta ([YC founder profile](https://www.ycombinator.com/founders/tiantian-li), [Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers)). Business email: No public data found.
  - **Twitter/X:** @tianx2li, 83 followers ([X via teapawt, Nov 2026 snapshot](https://teapawt.org/tianx2li)).
  - **LinkedIn:** Headline not retrievable, with “Meta” and 384 followers in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/tianx2-li)).
  - **GitHub:** @tiantianLl, `fast-robots`, 0 stars ([GitHub, Nov 2026](https://github.com/tiantianll/fast-robots)).
- **Co-founder relationship:** Both studied computer science at Cornell University ([Eom’s YC profile](https://www.ycombinator.com/founders/taerim-eom), [Li’s YC profile](https://www.ycombinator.com/founders/tiantian-li)).
- **Founder-market fit:** Li brings production inference and robotics experience, Eom helped build and scale Patreon’s livestream product, and YC lists Pete Koomen as primary partner ([Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers), [YC founder profile for Li](https://www.ycombinator.com/founders/tiantian-li), [YC company profile](https://www.ycombinator.com/companies/nines)).

## Key Risks

- **Technical feasibility:** [Inferred]: Flexible cables and crowded ports make repeatable insertion and verification difficult, and Nines identifies its website inspection sequence as a simulation ([Industrial Dexterity Benchmark, Jul 2026](https://arxiv.org/abs/2607.14021), [Nines simulation credits](https://ninesrobotics.ai/credits)).
- **Site integration:** [Inferred]: Differences in rack formats can add installation work at each site, which Nines addresses by proposing site-specific configurations with robotics hardware suppliers ([Nines Robotics blog, Sep 2026](https://ninesrobotics.ai/blog/hyperscalers-already-use-robots)).
- **Operator-built alternatives:** [Inferred]: Hyperscalers with internal robotics teams can build overlapping tools, as Microsoft’s transceiver prototype illustrates, while Nines targets operators that need an external supplier ([Microsoft Research, HotNets 2024](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-113.pdf), [Nines Robotics blog, Sep 2026](https://ninesrobotics.ai/blog/hyperscalers-already-use-robots)).
- **Name ambiguity:** Search and registry results also surface a UK company named Nines Robotics Ltd with a different director and a household management company named Nines ([UK Companies House](https://find-and-update.company-information.service.gov.uk/company/17407748/officers), [Nines Living](https://ninesliving.com/about-nines/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $16.2B global data center robotics estimate for 2026, 21.1% projected CAGR through 2033, broader than rack-side commissioning and repair ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/data-center-robotics-market-report)) |
| SAM | No public data found |
| Traction | $125K YC seed entry ([Dealroom, Sep 2026](https://app.dealroom.co/companies/nines_3)), November 13 public launch ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers), [Eom’s X post via teapawt](https://nitter.cf/taerimcreates)), 0 YC job listings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/nines/jobs)) |
| Revenue Signal | No public data found |
| Founders | Taerim Eom (CEO), Cornell CS, Patreon, HomeRoom ([YC founder profile](https://www.ycombinator.com/founders/taerim-eom)). Tiantian Li (CTO), Cornell CS, Meta inference, Xerox PARC ([YC founder profile](https://www.ycombinator.com/founders/tiantian-li), [Launch YC](https://www.ycombinator.com/launches/XRJ-nines-autonomous-robots-for-ai-data-centers)) |
| Competitors | Watney Robotics (over $100M raised, revenue unknown, hyperscaler deployments) ([Watney](https://watney.com/media/introducing-watney)). Darwin Robotics ($3.6M raised, revenue unknown, demonstration-trained robots) ([Darwin via Rebel Fund](https://do.linkedin.com/company/rebel-fund)). Exclaim Robotics ($4.96M raised, revenue unknown, live 800 V rack repairs) ([SEC Form D](https://www.sec.gov/Archives/edgar/data/2149175/000214917526000001/xslFormDX01/primary_doc.xml), [Exclaim](https://exclaimrobotics.com/)). Proprio Robotics (funding undisclosed, revenue unknown, server assembly and parts recovery) ([YC](https://www.ycombinator.com/companies/proprio-robotics), [Crunchbase](https://www.crunchbase.com/organization/proprio-robotics)) |
| Moat Signals | No public data found |
| Risk Factors | Cable and connector handling, rack-specific integration, operator-built alternatives ([Industrial Dexterity Benchmark](https://arxiv.org/abs/2607.14021), [Nines Robotics blog](https://ninesrobotics.ai/blog/hyperscalers-already-use-robots), [Microsoft Research](https://conferences.sigcomm.org/hotnets/2024/papers/hotnets24-113.pdf)) |
| Founder Reach | Eom: X 133, LinkedIn 1K, `projectry` 0 stars ([X via teapawt](https://nitter.cf/taerimcreates), [LinkedIn, via search snippet](https://www.linkedin.com/in/taerimeom), [GitHub](https://github.com/taerimeom/projectry)). Li: X 83, LinkedIn 384, `fast-robots` 0 stars ([X via teapawt](https://teapawt.org/tianx2li), [LinkedIn, via search snippet](https://www.linkedin.com/in/tianx2-li), [GitHub](https://github.com/tiantianll/fast-robots)) |
| Distribution Signals | Approximately 152,800 founder launch-post views ([The Daily Punchlist, Nov 14, 2026](https://dailypunchlist.com/issues/2026-11-14/)), 78 company X followers ([X via teapawt, Nov 2026](https://nitter.cf/ninesrobotics)), demo request form ([Nines Robotics](https://ninesrobotics.ai/demo)) |
| Emails | taerim@ninesrobotics.ai, Taerim Eom, CEO and published company contact ([Nines Robotics](https://ninesrobotics.ai/)) |
