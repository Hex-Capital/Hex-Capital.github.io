# hardware intelligence

> AI tools for the chips your AI runs on

| Field | Value |
|-------|-------|
| Website | https://hardwareintelligence.ai |
| YC Page | https://www.ycombinator.com/companies/hardware-intelligence |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Hardware, Enterprise Software, Semiconductors |
| YC Partner | Jon Xu ([YC](https://www.ycombinator.com/companies/hardware-intelligence), Aug 2026) |
| Emails | hi@hardwareintelligence.ai, athreya@hardwareintelligence.ai, rishov@hardwareintelligence.ai ([YC](https://www.ycombinator.com/companies/hardware-intelligence), Aug 2026) |

## The Idea

- **Problem:** ASIC and FPGA verification engineers spend more time debugging than on any other verification activity and currently inspect multi-gigabyte waveform files through GUI tools and license servers from Synopsys, Cadence, and Siemens ([Siemens Wilson study](https://blogs.sw.siemens.com/verificationhorizons/2022/12/12/part-8-the-2022-wilson-research-group-functional-verification-study/), Dec 2022; [Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026).
- **Approach:** Wave runs inside a terminal, reads VCD and FST waveform dumps, lets an agent trace signals to their source, proposes fixes, reruns the customer’s simulator, and displays an auditable waveform diff ([Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026).
- **Differentiation:** Wave contrasts Synopsys Verdi, Cadence, and Siemens products with a terminal-native, fully on-prem viewer using the customer’s model key, although Verdi already offers AI-driven failure analysis and automated signal tracing ([Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026; [Synopsys Verdi](https://www.synopsys.com/verification/debug/verdi.html), Aug 2026).
- **Business Model:** [Inferred]: Enterprise contracts or licenses for on-prem deployments are the likely monetization path because the company books demonstrations and personally onboards pilot teams, but no pricing is published.
- **TAM/SAM:** The company describes its target as a $20B EDA industry, while SEMI reported $5.47B of electronic-system-design revenue in Q4 2025 and a 10.1% four-quarter growth rate; no public SAM estimate was found for waveform debugging specifically ([Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026; [SEMI](https://www.semi.org/en/semi-press-release/esd-alliance-reports-electronic-system-design-industry-posts-5.5-billion-dollars-in-revenue-in-q4-2025), Apr 2026).
- **GTM / Distribution:** The founders solicit ASIC and FPGA engineers through a waitlist and demonstrations and personally onboard chip-design pilot teams ([Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Integration with simulator flows, accumulated workflow configurations, and team-specific audit histories could create switching costs, but the product’s on-prem architecture prevents customer design data from automatically forming a shared proprietary dataset.
- **Market structure:** No structural barrier identified at this stage because Synopsys already combines AI failure analysis with an established FSDB ecosystem ([Synopsys Verdi](https://www.synopsys.com/verification/debug/verdi.html), Aug 2026).
- **Commoditization risk:** ChipAgents already offers multi-agent waveform root-cause analysis, while Silimate’s SMDB finds chip-design bugs and their causes ([ChipAgents RCA](https://chipagents.ai/blogs/chipagents-rca), Nov 2025; [Silimate](https://www.silimate.com/blog/2025-year-end-review), Jan 2026).

## Market & Traction

- **Traction signals:**
  - Wave launched and pilot onboarding opened in July 2026 ([company launch](https://hardwareintelligence.ai/wave/), Jul 2026).
  - 0 active YC job listings ([YC](https://www.ycombinator.com/companies/hardware-intelligence), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - ChipAgents ($134M Series A financing, revenue unknown): offers a broader semiconductor-agent platform whose RCA system analyzes designs, testbenches, logs, and waveforms rather than operating primarily as a terminal viewer ([ChipAgents newsroom](https://chipagents.ai/newsroom), Jul 2026; [ChipAgents RCA](https://chipagents.ai/blogs/chipagents-rca), Nov 2025).
  - Silimate ($2.5M raised, revenue unknown): combines its SMDB AI root-cause debugger with Preqorsor power, performance, and area prediction tools ([CB Insights](https://www.cbinsights.com/company/silimate/financials), Aug 2026; [Silimate](https://www.silimate.com/blog/2025-year-end-review), Jan 2026).
  - PrimisAI ($1.5M raised, revenue unknown): RapidGPT provides natural-language FPGA development, HDL auditing, IP integration, and documentation rather than a terminal-native waveform viewer ([CB Insights](https://www.cbinsights.com/company/primisai), Aug 2026).
- **Why now:** [Inferred]: The 2025–2026 catalyst is the transition from conversational EDA copilots to agents that inspect waveforms and execute debugging steps, reflected in ChipAgents RCA’s November 2025 release, Synopsys Verdi Assistant in April 2026, and Wave’s July 2026 launch ([ChipAgents RCA](https://chipagents.ai/blogs/chipagents-rca), Nov 2025; [Synopsys](https://www.synopsys.com/blogs/chip-design/using-ai-to-debug-more-quickly-and-accurately.html), Apr 2026; [Wave](https://hardwareintelligence.ai/wave/), Jul 2026).

## Founders & Team

- **Athreya Anand (Co-founder and CEO):**
  - Background: Georgia Tech MS in machine learning and AI; former Google tech lead who led agentic-workflow and prediction-model work, with prior chip-design exposure through AWS Inferentia and Tesla ([YC](https://www.ycombinator.com/companies/hardware-intelligence), Aug 2026).
  - Twitter/X: @athreyaanand; count not retrievable ([X](https://x.com/athreyaanand), Aug 2026).
  - LinkedIn: “hardware intelligence (YC S26),” with 3K followers ([LinkedIn](https://www.linkedin.com/in/athreyaanand), Aug 2026).
  - GitHub: @athreyaanand; telegram-game-hack has 7 stars ([GitHub](https://github.com/athreyaanand/telegram-game-hack), Aug 2026).
- **Rishov Sarkar (Co-founder and CTO):**
  - Background: Georgia Tech PhD in electrical and computer engineering plus MS and BS degrees; developed AMD AI Engine simulators, worked on LLVM compilation flows at Siemens EDA, and received Georgia Tech’s 2022 ECE graduate teaching-assistant award ([YC](https://www.ycombinator.com/companies/hardware-intelligence), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Sharc Lab @ Georgia Tech,” with 324 followers ([LinkedIn](https://www.linkedin.com/in/rishovsarkar), Aug 2026).
  - GitHub: @ArkaneMoose; maintains the 77-star LightningSim high-level-synthesis simulator ([GitHub](https://github.com/ArkaneMoose), Aug 2026; [LightningSim](https://github.com/sharc-lab/LightningSim), Aug 2026).
- **Co-founder relationship:** Anand and Sarkar met in a Georgia Tech freshman dorm nearly a decade ago and were roommates throughout their four undergraduate years ([Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026).
- **Founder-market fit:** Anand’s agentic-AI work and chip-tool exposure complement Sarkar’s research and employment history in chip simulation, compilers, and EDA tooling ([YC](https://www.ycombinator.com/companies/hardware-intelligence), Aug 2026; [LightningSim](https://github.com/sharc-lab/LightningSim), Aug 2026).

## Key Risks

- **File-format coverage:** Wave currently reads VCD and FST files, while FSDB requires customer-specific integration, and Synopsys describes FSDB as the established database for Verdi workflows ([Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026; [Synopsys Verdi](https://www.synopsys.com/verification/debug/verdi.html), Aug 2026).
- **Incumbent feature overlap:** Synopsys Verdi already provides natural-language commands, AI failure analysis, automatic signal tracing, waveform comparison, and an FSDB ecosystem that overlap with Wave’s advertised workflow ([Synopsys](https://www.synopsys.com/blogs/chip-design/using-ai-to-debug-more-quickly-and-accurately.html), Apr 2026).
- **Private-competitor deployment:** ChipAgents reported deployments at more than 120 semiconductor companies and 6× ARR growth during the first half of 2026, alongside its $134M Series A financing ([ChipAgents newsroom](https://chipagents.ai/newsroom), Jul 2026).
- **Technical validation:** Public product evidence consists of founder demonstrations of multi-gigabyte waveform analysis and automated fixes, with rerunning the customer’s simulator, waveform diffs, and evidence-linked transcripts serving as validation mechanisms ([Wave launch](https://hardwareintelligence.ai/wave/), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $20B EDA industry claimed by the company (company Wave launch citing SEMI, Jul 2026); $5.47B Q4 2025 electronic-system-design revenue, +10.3% YoY (SEMI, Apr 2026) |
| SAM | No public data found |
| Traction | Wave launched and pilot onboarding opened (company Wave launch, Jul 2026); 0 YC job listings (YC, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Athreya Anand (CEO): Google AI tech lead, Georgia Tech MS, AWS Inferentia and Tesla chip exposure; Rishov Sarkar (CTO): Georgia Tech ECE PhD, AMD simulator and Siemens EDA compiler experience (YC, Aug 2026) |
| Competitors | ChipAgents ($134M Series A financing, revenue unknown, broader multi-agent chip-design and RCA platform) (ChipAgents, Jul 2026); Silimate ($2.5M raised, revenue unknown, AI debugging plus PPA prediction) (CB Insights and Silimate, Aug 2026); PrimisAI ($1.5M raised, revenue unknown, natural-language FPGA and RTL tooling) (CB Insights, Aug 2026) |
| Moat Signals | No public data found |
| Risk Factors | FSDB integration gap (company Wave launch, Jul 2026), Synopsys AI-feature overlap (Synopsys, Apr 2026), ChipAgents deployments at 120+ semiconductor companies (ChipAgents, Jul 2026) |
| Founder Reach | Athreya Anand: X count not retrievable, LinkedIn 3K followers, GitHub top repo 7 stars; Rishov Sarkar: no public X account, LinkedIn 324 followers, LightningSim 77 stars (LinkedIn and GitHub, Aug 2026) |
| Distribution Signals | Founder-led demonstrations, waitlist, and personal pilot onboarding (company Wave launch, Jul 2026); 0 YC job listings (YC, Aug 2026) |
| Emails | hi@hardwareintelligence.ai, athreya@hardwareintelligence.ai, rishov@hardwareintelligence.ai (YC, Aug 2026) |
