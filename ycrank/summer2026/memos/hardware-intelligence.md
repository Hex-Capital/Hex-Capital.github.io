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
| YC Partner | Jon Xu |
| Emails | hi@hardwareintelligence.ai, athreya@hardwareintelligence.ai, rishov@hardwareintelligence.ai |

## The Idea

- **Problem:** ASIC and FPGA verification teams inspect multi-gigabyte waveforms after simulations lasting hours or days, while incumbent debuggers from Synopsys, Cadence, and Siemens use GUI and license-server workflows that the company says can cost six figures per seat annually ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence)).
- **Approach:** Wave is a terminal-native waveform debugger whose agent traces faulty signals, proposes fixes with power or performance trade-offs, reruns simulations, and displays waveform differences ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence)).
- **Differentiation:** Wave places agent-controlled debugging and Vim-style interaction inside the terminal, versus Verdi and other incumbent GUI-based viewers, while ChipAgents targets multi-agent workflows across more of the chip-design lifecycle ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence); [ChipAgents, Jul 2026](https://chipagents.ai/)).
- **Business Model:** [Inferred]: The demo-booking and pilot-onboarding motion indicates enterprise software sold to chip-design teams, but no pricing or billing unit is public.
- **TAM/SAM:** The global EDA market was valued at $17.53 billion in 2025 and projected to reach $42.85 billion by 2035 at a 9.35% CAGR ([SNS Insider, Apr 2026](https://www.globenewswire.com/news-release/2026/04/08/3270311/0/en/Electronic-Design-Automation-EDA-Market-Size-to-Hit-42-85-Billion-by-2035-Research-by-SNS-Insider.html)); no public SAM estimate was found for waveform debugging.
- **GTM / Distribution:** The founders are onboarding pilots through booked demos and directly soliciting ASIC, FPGA, and verification engineers by email ([company website, Jul 2026](https://hardwareintelligence.ai/); [LinkedIn launch post, Jul 2026](https://www.linkedin.com/in/athreyaanand)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Integrations with customer simulators, design repositories, and verification histories could create workflow switching costs and proprietary debugging data, but no deployed integrations or accumulated dataset is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Synopsys already offers AI-assisted EDA, while ChipAgents, Tattvam AI, Astrus, and open-source CHIA are developing agentic or AI-driven chip-design workflows ([Synopsys overview](https://en.wikipedia.org/wiki/Synopsys); [CHIA paper, Jun 2026](https://arxiv.org/abs/2606.27350)).

## Market & Traction

- **Traction signals:**
  - Wave launched as the company’s first product in July 2026 ([company website, Jul 2026](https://hardwareintelligence.ai/)).
  - Pilot onboarding was open through booked demos in July 2026 ([Athreya Anand LinkedIn, Jul 2026](https://www.linkedin.com/in/athreyaanand)).
  - The YC directory listed zero open jobs in July 2026 ([YC company page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence)).
- **Competitors (minimum 3, up to 5):**
  - ChipAgents ($74 million raised, revenue unknown): [Inferred]: provides multi-agent chip teams across design workflows, while Wave initially concentrates on waveform debugging ([Business Wire, Feb 2026](https://www.businesswire.com/news/home/20260217568914/en/ChipAgents-Raises-%2474M-to-Scale-an-Agentic-AI-Platform-to-Accelerate-Chip-Design)).
  - Tattvam AI ($1.7 million raised, revenue unknown): [Inferred]: builds an AI abstraction layer spanning RTL-to-GDSII over incumbent EDA tools, versus Wave’s terminal-native verification wedge ([CRN Asia, 2026](https://www.crnasia.com/india/news/2026/semiconductor-veterans-back-ai-targeting-physical-design-a-key-constraint-for-fabless-ecosystems)).
  - Astrus ($8 million raised, revenue unknown): [Inferred]: applies physics-aware AI to analog circuit layout, while Wave targets digital waveform diagnosis ([Business Wire, Sep 2025](https://www.businesswire.com/news/home/20250908219457/en/Astrus-Secures-%248M-USD-to-Accelerate-AI-Driven-Microchip-Design)).
  - Motivo ($20 million raised, revenue unknown): [Inferred]: uses AI to accelerate broader chip design, compared with Wave’s interactive debugging interface ([TechCrunch, Aug 2021](https://techcrunch.com/2021/08/12/motivo-raises-12-5m-series-a-to-speed-up-chip-design-with-ai/)).
- **Why now:** [Inferred]: Agentic hardware workflows moved from proposed frameworks such as AiEDA in December 2024 to implementations spanning commercial tools in CHIA by June 2026, lowering the technical threshold for agents that invoke simulators and EDA systems ([AiEDA paper, Dec 2024](https://arxiv.org/abs/2412.09745); [CHIA paper, Jun 2026](https://arxiv.org/abs/2606.27350)).

## Founders & Team

- **Athreya Anand (Co-founder and CEO):**
  - Background: Former Google tech lead who worked on agentic workflow tools and Google Ventures prediction models, with an M.S. in machine learning and AI from Georgia Tech and experience at AWS Inferentia and Tesla ([YC company page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence)).
  - Twitter/X: @athreyaanand; count not retrievable ([GitHub profile, Jul 2026](https://github.com/athreyaanand)).
  - LinkedIn: “hardware intelligence (YC S26),” with 3K followers ([LinkedIn profile, Jul 2026](https://www.linkedin.com/in/athreyaanand)).
  - GitHub: @athreyaanand; telegram-game-hack has 7 stars ([GitHub profile, Jul 2026](https://github.com/athreyaanand)).
- **Rishov Sarkar (Co-founder and CTO):**
  - Background: Georgia Tech ECE Ph.D. with B.S. and M.S. degrees in computer engineering who developed AMD AI Engine simulators, Siemens EDA LLVM compilation flows, and the LightningSim HLS simulator ([YC company page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence); [Georgia Tech SHARC Lab](https://sharclab.ece.gatech.edu/people/rishov-sarkar/)).
  - Twitter/X: No public account found.
  - LinkedIn: “Sharc Lab @ Georgia Tech,” with 324 followers ([LinkedIn profile, Jul 2026](https://www.linkedin.com/in/rishovsarkar)).
  - GitHub: @ArkaneMoose; BotBot has 9 stars, and he maintains SHARC Lab’s LightningSim ([GitHub profile, Jul 2026](https://github.com/ArkaneMoose); [LightningSim](https://github.com/sharc-lab/LightningSim)).
- **Co-founder relationship:** Anand and Sarkar met in their Georgia Tech freshman dorm nearly a decade before launch and roomed together throughout college ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence)).
- **Founder-market fit:** The team combines Anand’s agent-workflow and chip-company experience with Sarkar’s doctoral research in chip simulation, compilers, and hardware-development tooling ([YC company page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence)).

## Key Risks

- **Incumbent bundling:** Synopsys, Cadence, and Siemens already control established EDA workflows, and Synopsys introduced an LLM-based Copilot in 2023, allowing customers to obtain AI features from existing vendors ([Synopsys overview](https://en.wikipedia.org/wiki/Synopsys)).
- **Verification reliability:** Wave proposes code fixes and proves them through resimulation, so incorrect root-cause analysis or incomplete test coverage could leave hardware defects undetected; no public accuracy or benchmark data were found ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/hardware-intelligence)).
- **Customer-data constraints:** [Inferred]: Agentic debugging requires access to RTL, waveforms, and simulation environments containing chip IP, which may restrict cloud deployment and model-data retention.
- **Competitive overlap:** ChipAgents has raised $74 million for agentic chip-design workflows and reports collaborations with NVIDIA and Ambiq, creating overlap as Wave expands beyond debugging ([Business Wire, Feb 2026](https://www.businesswire.com/news/home/20260217568914/en/ChipAgents-Raises-%2474M-to-Scale-an-Agentic-AI-Platform-to-Accelerate-Chip-Design); [ChipAgents](https://chipagents.ai/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $17.53B in 2025, projected to $42.85B by 2035 at 9.35% CAGR (SNS Insider, Apr 2026) |
| SAM | No public data found |
| Traction | Wave launched and pilot onboarding opened (company website and Athreya Anand LinkedIn, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Athreya Anand (CEO): former Google tech lead, Georgia Tech M.S., AWS Inferentia and Tesla experience; Rishov Sarkar (CTO): Georgia Tech ECE Ph.D., AMD simulator and Siemens EDA compiler experience (YC company page, Jul 2026) |
| Competitors | ChipAgents ($74M raised, revenue unknown, multi-agent chip workflows) (Business Wire, Feb 2026); Tattvam AI ($1.7M raised, revenue unknown, RTL-to-GDSII layer) (CRN Asia, 2026); Astrus ($8M raised, revenue unknown, analog-layout AI) (Business Wire, Sep 2025); Motivo ($20M raised, revenue unknown, AI chip-design optimization) (TechCrunch, Aug 2021) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent AI bundling (Synopsys overview, 2026), no published verification benchmarks (YC launch page, Jul 2026), competitor capitalization (Business Wire, Feb 2026) |
| Founder Reach | Athreya Anand: LinkedIn 3K, GitHub top repo 7 stars (LinkedIn and GitHub, Jul 2026); Rishov Sarkar: LinkedIn 324, GitHub top personal repo 9 stars (LinkedIn and GitHub, Jul 2026) |
| Distribution Signals | Demo booking, waitlist, direct pilot onboarding, and zero YC job postings (company website, LinkedIn, and YC company page, Jul 2026) |
| Emails | hi@hardwareintelligence.ai, athreya@hardwareintelligence.ai, rishov@hardwareintelligence.ai (YC launch page, Jul 2026) |
