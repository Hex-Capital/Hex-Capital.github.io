# Archgen Labs

> AI-powered EDA tools for faster, cooler 3D chips

| Field | Value |
|-------|-------|
| Website | https://www.archgen.tech/ |
| YC Page | https://www.ycombinator.com/companies/archgen-labs |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/archgen-labs)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 ([Y Combinator](https://www.ycombinator.com/companies/archgen-labs)) |
| Location | San Francisco, CA, USA |
| Tags | Hardware, Semiconductors, AI |
| YC Partner | Kulveer Taggar ([Y Combinator](https://www.ycombinator.com/companies/archgen-labs)) |
| Emails | hari@archgen.tech (CEO), naveen@archgen.tech (CTO), founders@archgen.tech (shared founder inbox) ([Archgen Labs](https://archgenlabs.com/), [Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)) |

## The Idea

- **Problem:** Physical-design teams working on stacked dies must resolve heat, placement, and cross-die timing together, and slow solver runs and manual iteration limit how many layouts they can test ([Archgen Labs](https://archgenlabs.com/), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
- **Approach:** LayerTherm predicts temperature maps from power distributions using physics-informed neural networks, a GPU-accelerated engine evaluates placement trade-offs, and Newton edits and reruns design flows to test fixes for routing, timing, and design-rule violations ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
- **Differentiation:** Archgen combines neural hotspot screening with an agent that edits physical-design flows, while Cadence Integrity integrates Celsius co-simulation and signoff, Synopsys 3DIC Compiler integrates RedHawk-SC Electrothermal for multiphysics analysis, and Siemens Fuse orchestrates coupled analyses across Siemens tools ([Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips), [Cadence](https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/soc-implementation-and-floorplanning/integrity-3dic-platform.html/), [Synopsys](https://www.synopsys.com/implementation-and-signoff/3dic-design.html), [Siemens](https://news.siemens.com/uk-ua/siemens-nvidia-gtc-3d-ic-thermal-ai/)).
- **Business Model:** [Inferred]: Enterprise software licensing could follow pilots with physical-design teams, given Archgen’s direct outreach to teams approaching tapeout ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
- **TAM/SAM:** The broader global market for 3D IC design and manufacturing software and related services is estimated at $14.58B in 2026, with 11.7% projected CAGR through 2030 ([The Business Research Company, 2026](https://www.thebusinessresearchcompany.com/report/3d-ic-design-and-manufacturers-software-market-report)).
- **GTM / Distribution:** Archgen solicits pilot conversations with physical-design, AI accelerator, foundry, and advanced-packaging teams through its YC launch and offers direct meeting booking on its website ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips), [Archgen Labs](https://archgenlabs.com/)).

## Defensibility

- **Moat today:** The placement engine showed technical differentiation by finishing first on the organizers’ IBM benchmark proxy metric, with an average score of 0.9507 ([Partcl/HRT results, Jun 2026](https://github.com/partcleda/macro-place-challenge-2026/blob/main/README.md), [Archgen benchmark write-up, Jun 2026](https://archgenlabs.com/blog/posts/how-we-ranked-first-in-the-partcl.html)).
- **Future moat:** [Inferred]: Newton’s reuse of verified fixes across blocks could improve performance within a customer’s flow, with transfer across customer designs still unverified in public results ([Archgen Labs](https://archgenlabs.com/), [Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
- **Market structure:** No structural barrier identified at this stage ([Siemens 3D IC agent announcement, Oct 2026](https://news.siemens.com/uk-ua/siemens-nvidia-gtc-3d-ic-thermal-ai/)).
- **Commoditization risk:** Archgen published its contest implementation, and Siemens has already demonstrated an agent that coordinates placement and electrothermal analysis in its own toolchain ([Archgen GitHub](https://github.com/archgen-ai/Macro-Placement-challenge-2026), [Siemens, Oct 2026](https://news.siemens.com/uk-ua/siemens-nvidia-gtc-3d-ic-thermal-ai/)).

## Market & Traction

- **Traction signals:**
  - Signed pilots reported by Archgen, with counterparties and payment terms undisclosed ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
  - 3D chip development with GlobalFoundries and a first tapeout targeted for mid-2027 ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
  - First place on the Partcl/HRT macro-placement challenge proxy metric ([Partcl/HRT results](https://github.com/partcleda/macro-place-challenge-2026/blob/main/README.md), [Archgen, Jun 2026](https://archgenlabs.com/blog/posts/how-we-ranked-first-in-the-partcl.html)).
  - LayerTherm averaged 62 ms versus 314 seconds for conventional solvers in Archgen’s benchmark, roughly 5,000× faster ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
  - $15,000 Emergent Ventures grant and Y Combinator backing ([Hariharan Ayappane’s announcement, Oct 2026](https://www.linkedin.com/company/archgen-labs), [Emergent Ventures](https://shrutiraj.com/emergent-ventures-india/), [Y Combinator](https://www.ycombinator.com/companies/archgen-labs)).
  - Public YC launch on Nov 9, 2026, and *Raised* launch coverage on Nov 12, 2026 ([Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips), [Raised](https://raisednews.com/article/archgen-ai-agent-3d-chip-physical-design/)).
  - 1,113 LinkedIn followers, 627 X followers via a public mirror, and 5 stars on the public placement repository ([LinkedIn](https://www.linkedin.com/company/archgen-labs), [X mirror](https://xitter.cf/archgen_/reposts), [GitHub](https://github.com/archgen-ai/Macro-Placement-challenge-2026), Nov 2026).
  - 0 YC job postings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/archgen-labs/jobs)).
- **Competitors:**
  - **Siemens** (public, €83.4B FY2026 group revenue): Fuse orchestrates coupled 3D IC electrothermal analysis across Siemens tools ([Siemens results](https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q4-fy-2026), [Siemens product announcement](https://news.siemens.com/uk-ua/siemens-nvidia-gtc-3d-ic-thermal-ai/)).
  - **Cadence** (public, $5.297B FY2025 company revenue): Integrity bundles multi-die planning, routing, Celsius thermal simulation, and signoff ([Cadence corporate report](https://www.cadence.com/content/dam/cadence-www/global/en_US/documents/company/2025-cadence-corporate-impact-report.pdf), [Cadence Integrity](https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/soc-implementation-and-floorplanning/integrity-3dic-platform.html/)).
  - **Synopsys** (public, $7.054B FY2025 company revenue): 3DIC Compiler combines die-package co-design with RedHawk-SC Electrothermal analysis ([Synopsys results](https://investor.synopsys.com/news/news-details/2025/Synopsys-Posts-Financial-Results-for-Fourth-Quarter-and-Fiscal-Year-2025/default.aspx), [3DIC Compiler](https://www.synopsys.com/implementation-and-signoff/3dic-design.html)).
  - **Vinci** ($296M disclosed across announcements, revenue unknown): Commercializes thermal, thermo-mechanical, and fluid simulation, with a $250M Series B co-led by Advent, Temasek, and Xora in Oct 2026 ([Vinci, Dec 2025](https://www.getvinci.ai/news/vinci-emerges-from-stealth-to-transform-semiconductor-design-and-simulation/), [Advent, Oct 2026](https://www.adventinternational.com/news/vinci-raises-250m-series-b-at-1-5b-valuation-to-build-the-intelligence-infrastructure-for-a-new-era-of-hardware-engineering/)).
  - **ChipAgents** (over $134M raised, revenue unknown): Covers digital and analog design and verification, with a $60M Series A2 led by B Capital in Jul 2026 ([ChipAgents financing](https://chipagents.ai/newsroom/chipagents-series-a2-134m), [ChipAgents investor coverage](https://chipagents.ai/dac-2026), [ChipAgents product announcement](https://chipagents.ai/newsroom/chipagents-ic-star-full-stack-agentic-ai)).
- **Why now:** [Inferred]: TSMC’s entry into volume production for 3 nm SoIC stacking in 2025 increases the relevance of tools that evaluate placement and heat across dies ([TSMC 2025 Annual Report](https://investor.tsmc.com/sites/ir/annual-report/2025/2025%20TSMC%20Annual%20Report.E.pdf), [Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).

## Founders & Team

- **Hariharan Ayappane (Founder/CEO):**
  - **Background:** NIT Karnataka alumnus with prior affiliations at Texas Instruments, Semiconductor Research Corporation, and IISc, and a co-author of Archgen’s placement entry. Business email is hari@archgen.tech ([YC founder profile](https://www.ycombinator.com/founders/hariharan-ayappane), [Archgen benchmark](https://archgenlabs.com/blog/posts/how-we-ranked-first-in-the-partcl.html), [Archgen Labs](https://archgenlabs.com/)).
  - **Twitter/X:** @HariAyapps, 1.9K followers ([X mirror, Nov 2026](https://www.teapaw.org/HariAyapps)).
  - **LinkedIn:** Profile lists Archgen AI and 4K followers, with the headline unavailable ([LinkedIn, Sep 2026, via search snippet](https://www.linkedin.com/in/hariharan-ayappane)).
  - **GitHub:** @haran2001, `local_llm_ui_with_authentication`, 0 stars ([Devpost](https://devpost.com/software/local-llm-with-authentication), [GitHub](https://github.com/haran2001/local_llm_ui_with_authentication)).
- **Naveen Venkat (Founder/CTO):**
  - **Background:** NIT Karnataka alumnus with prior affiliations at AB InBev and the OpenROAD Project, and a co-author of Archgen’s placement entry. Business email is naveen@archgen.tech ([YC founder profile](https://www.ycombinator.com/founders/naveen-venkat), [Archgen benchmark](https://archgenlabs.com/blog/posts/how-we-ranked-first-in-the-partcl.html), [Archgen Labs](https://archgenlabs.com/)).
  - **Twitter/X:** @naveen_venk, 957 followers ([X mirror, Nov 2026](https://www.nitter.cf/naveen_venk)).
  - **LinkedIn:** Profile lists Archgen Labs (YC F26) and 3K followers, with the headline unavailable ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/naveenvenkat17)).
  - **GitHub:** No verified personal handle found, and Archgen credits him on its public macro-placement entry, which has 5 stars ([Archgen benchmark](https://archgenlabs.com/blog/posts/how-we-ranked-first-in-the-partcl.html), [GitHub, Nov 2026](https://github.com/archgen-ai/Macro-Placement-challenge-2026)).
- **Co-founder relationship:** Both attended National Institute of Technology Karnataka ([Ayappane’s YC profile](https://www.ycombinator.com/founders/hariharan-ayappane), [Venkat’s YC profile](https://www.ycombinator.com/founders/naveen-venkat)).
- **Founder-market fit:** Ayappane’s semiconductor research affiliations and Venkat’s OpenROAD experience align with the placement engine they co-developed, backed by YC with Kulveer Taggar as primary partner ([YC founder profiles](https://www.ycombinator.com/founders/hariharan-ayappane), [Archgen benchmark](https://archgenlabs.com/blog/posts/how-we-ranked-first-in-the-partcl.html), [YC company profile](https://www.ycombinator.com/companies/archgen-labs)).

## Key Risks

- **Thermal accuracy:** LayerTherm’s public benchmark reports latency without publishing prediction error, and Archgen positions it as a screening step before detailed thermal verification ([Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
- **Production validation:** The challenge organizers caution that the winning proxy metric is insufficient on its own for production-ready placement, and Archgen’s GlobalFoundries work targets a first tapeout in mid-2027 ([Partcl/HRT results](https://github.com/partcleda/macro-place-challenge-2026/blob/main/README.md), [Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)).
- **Incumbent substitution:** [Inferred]: Siemens customers can evaluate overlapping thermal and placement automation in the toolchain they already use ([Siemens, Oct 2026](https://news.siemens.com/uk-ua/siemens-nvidia-gtc-3d-ic-thermal-ai/)).
- **Name collision:** The Delhi registry entry for Archgen Labs Private Limited lists different directors, creating a risk of misattributing corporate records to the YC startup ([IndiaFilings](https://www.indiafilings.com/search/archgen-labs-private-limited-cin-U85300DL2022PTC403642), [Y Combinator](https://www.ycombinator.com/companies/archgen-labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader 3D IC design and manufacturing software and services market of $14.58B in 2026, with 11.7% forecast CAGR through 2030 ([The Business Research Company, 2026](https://www.thebusinessresearchcompany.com/report/3d-ic-design-and-manufacturers-software-market-report)) |
| SAM | No public data found |
| Traction | Signed pilots, GlobalFoundries development, and mid-2027 tapeout target ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)); first place by placement proxy score ([Partcl/HRT, Jun 2026](https://github.com/partcleda/macro-place-challenge-2026/blob/main/README.md)) |
| Revenue Signal | No public data found |
| Founders | Hariharan Ayappane (CEO), NIT Karnataka, Texas Instruments and SRC ([YC](https://www.ycombinator.com/founders/hariharan-ayappane)); Naveen Venkat (CTO), NIT Karnataka, AB InBev and OpenROAD ([YC](https://www.ycombinator.com/founders/naveen-venkat)) |
| Competitors | Siemens (public, €83.4B FY2026 group revenue, [3D electrothermal orchestration](https://news.siemens.com/uk-ua/siemens-nvidia-gtc-3d-ic-thermal-ai/), [results](https://press.siemens.com/global/en/pressrelease/earnings-release-and-financial-results-q4-fy-2026)); Cadence (public, $5.297B FY2025 revenue, [integrated signoff](https://www.cadence.com/en_US/home/tools/digital-design-and-signoff/soc-implementation-and-floorplanning/integrity-3dic-platform.html/), [corporate report](https://www.cadence.com/content/dam/cadence-www/global/en_US/documents/company/2025-cadence-corporate-impact-report.pdf)); Synopsys (public, $7.054B FY2025 revenue, [multiphysics co-design](https://www.synopsys.com/implementation-and-signoff/3dic-design.html), [results](https://investor.synopsys.com/news/news-details/2025/Synopsys-Posts-Financial-Results-for-Fourth-Quarter-and-Fiscal-Year-2025/default.aspx)); Vinci ($296M disclosed, revenue unknown, thermal and mechanical simulation, [Vinci](https://www.getvinci.ai/news/vinci-emerges-from-stealth-to-transform-semiconductor-design-and-simulation/), [Advent](https://www.adventinternational.com/news/vinci-raises-250m-series-b-at-1-5b-valuation-to-build-the-intelligence-infrastructure-for-a-new-era-of-hardware-engineering/)); ChipAgents (over $134M raised, revenue unknown, digital and analog verification, [financing](https://chipagents.ai/newsroom/chipagents-series-a2-134m), [product](https://chipagents.ai/newsroom/chipagents-ic-star-full-stack-agentic-ai)) |
| Moat Signals | First-place IBM placement proxy score of 0.9507 ([Partcl/HRT results](https://github.com/partcleda/macro-place-challenge-2026/blob/main/README.md)) |
| Risk Factors | Thermal accuracy and production validation ([Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips), [Partcl/HRT](https://github.com/partcleda/macro-place-challenge-2026/blob/main/README.md)), incumbent substitution ([Siemens](https://news.siemens.com/uk-ua/siemens-nvidia-gtc-3d-ic-thermal-ai/)) |
| Founder Reach | Ayappane, X 1.9K and LinkedIn 4K ([X mirror](https://www.teapaw.org/HariAyapps), [LinkedIn via search snippet](https://www.linkedin.com/in/hariharan-ayappane)); Venkat, X 957 and LinkedIn 3K ([X mirror](https://www.nitter.cf/naveen_venk), [LinkedIn via search snippet](https://www.linkedin.com/in/naveenvenkat17)) |
| Distribution Signals | YC launch Nov 9, 2026, 1,113 company LinkedIn followers, 627 company X followers, and 5 placement repository stars ([Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips), [LinkedIn](https://www.linkedin.com/company/archgen-labs), [X mirror](https://xitter.cf/archgen_/reposts), [GitHub](https://github.com/archgen-ai/Macro-Placement-challenge-2026), Nov 2026) |
| Emails | hari@archgen.tech (CEO), naveen@archgen.tech (CTO), founders@archgen.tech (shared founder inbox) ([Archgen Labs](https://archgenlabs.com/), [Launch YC](https://www.ycombinator.com/launches/Wf3-archgen-labs-building-skyscrapers-for-semiconductor-chips)) |
