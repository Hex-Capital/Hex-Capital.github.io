# Atrisa (formerly Refortifai)

> AI Agents for Analog Circuit Design

| Field | Value |
|-------|-------|
| Website | https://atrisa.ai |
| YC Page | https://www.ycombinator.com/companies/atrisa |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, Reinforcement Learning, B2B, Semiconductors, AI |
| YC Partner | Nicolas Dessaigne (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** Analog circuit designers rely on tribal knowledge and proprietary company data that is not in frontier LLM training sets, slowing the build/debug cycle for analog and mixed-signal IC teams (YC launch post via WebFetch of YC company page).
- **Approach:** Agentic system that "internalized the intuition of an analog engineer" so engineers can design, understand, and debug circuits using natural language while incorporating industry-specific knowledge (YC company page WebFetch).
- **Differentiation:** Astrus focuses on AI-powered layout/physics-aware microchip design (BetaKit, 2025); Quilter automates circuit design with RL + physics simulations (Quilter blog, 2026); Cadence's ChipStack AI Super Agent targets verification inside Cadence's EDA stack (Cadence press release, Feb 2026); [Inferred]: Atrisa differentiates by focusing the agent on build/debug interaction for analog (vs. layout-only or verification-only) per YC description.
- **Business Model:** No public data found on pricing; [Inferred]: per-seat or enterprise SaaS sold to semiconductor design teams, consistent with EDA tooling norms.
- **TAM/SAM:** EDA tools market USD 20.78B in 2026 growing 8.1% CAGR to USD 30.67B by 2031 (MarketsandMarkets); AI EDA segment USD 4.27B in 2026 → USD 15.85B by 2032 at 24.4% CAGR (MarketsandMarkets).
- **GTM / Distribution:** No public GTM data found; [Inferred]: direct enterprise sales to semiconductor/IC design teams given YC B2B classification and SF location.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond claim that the agent encodes analog-engineer "intuition" via proprietary training (YC launch post, 2026).
- **Future moat:** [Inferred]: Proprietary fine-tuning data from customer circuit designs and a feedback loop on debug traces could create a data moat; unproven now because there are no disclosed paying customers.
- **Market structure:** [Inferred]: Incumbents Synopsys (~31% share), Cadence (~30%), Siemens (~13%) (SemiAnalysis, MarketsandMarkets) have channel-conflict risk in cannibalizing seat-license revenue with agent automation — Cadence's response was to acquire ChipStack rather than build natively (Zach's tech blog, 2026), suggesting acquisition rather than copy is the path.
- **Commoditization risk:** Any team with LLM + RL expertise could attempt this; ChipStack, Quilter, Silimate, and Astrus all demonstrate the build is reachable (Lux Capital "looming labor crisis in chip design"; Quilter, Silimate, Astrus founder coverage).

## Market & Traction

- **Traction signals:**
  - Prior product (Refortifai, runtime security for AI agents): listed on YC directory (YC company page for refortifai); no public users/revenue disclosed.
  - Current product (Atrisa): YC launch in Spring 2026 batch (YC company page); no public users, revenue, Product Hunt rank, press coverage, or follower counts found.
  - Job postings: 0 open roles (YC company page).
- **Competitors:**
  - Astrus ($13.3M raised including $11M CAD round; revenue unknown; BetaKit 2025): AI-powered analog microchip layout, founded 2022, Toronto, backed by Khosla Ventures.
  - Quilter ($10M Series A led by Benchmark, Feb 2026; revenue unknown; Quilter blog): reinforcement learning + physics simulation for circuit design.
  - Silimate (funding undisclosed; revenue unknown; Stanford Daily, Mar 2026): AI debugger for chip designers, first EDA company YC backed.
  - ChipStack (~$7M raised pre-acquisition; revenue unknown; Zach's tech blog 2026): acquired by Cadence; agentic verification, now ChipStack AI Super Agent inside Cadence (Cadence press release, Feb 2026).
  - Cadence / Synopsys / Siemens (~70% EDA share combined; SemiAnalysis): incumbent EDA suites adding agentic features (Cadence Agentic AI Solutions page).
- **Why now:** Cadence's Feb 2026 launch of the ChipStack AI Super Agent (Cadence press release, Feb 2026) and the AI-EDA segment reaching USD 4.27B in 2026 (MarketsandMarkets) mark the threshold at which agentic chip-design tools moved from research to commercial product.

## Founders & Team

- **Sayan Mitra (CEO):**
  - Background: Listed as founder of RefortifAI/Atrisa, YC P26 (RateMyTechFounder; LinkedIn search result "Sayan Mitra - refortif.ai (YC P26)"). Name-collision risk with UIUC ECE Professor Sayan Mitra (PhD MIT under Nancy Lynch) — public sources do not confirm these are the same person; the YC founder's LinkedIn is hosted on in.linkedin.com (sayanmitra9) which differs from the UIUC professor's mitras handle.
  - Twitter/X: No public account found.
  - LinkedIn: "refortif.ai (YC P26)" headline at linkedin.com/in/sayanmitra9 (search result).
  - GitHub: No public repos confirmed for the YC founder.
- **Atman Kar (CTO):**
  - Background: RTL Digital Design Engineer at Texas Instruments per LinkedIn (linkedin.com/in/atman-kar/); education Birla Institute of Technology and Science, Pilani – Goa Campus (LinkedIn search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "RTL Digital Design Engineer, Texas Instruments" (LinkedIn).
  - GitHub: @Atman-Kar (github.com/Atman-Kar); star counts not retrievable via search snippet.
- **Rithik Jain (COO):**
  - Background: "CoFounder and COO @ refortifai" on LinkedIn (linkedin.com/in/rithik--jain/); separate from a Duolingo software engineer with similar name.
  - Twitter/X: No public account found.
  - LinkedIn: "CoFounder and COO @ refortifai" (LinkedIn search result).
  - GitHub: @rithikjain (github.com/rithikjain); star counts not retrievable via search snippet.
- **Co-founder relationship:** No public data on shared employer or university across the three founders.
- **Founder-market fit:** Atman Kar's RTL Digital Design Engineer role at Texas Instruments (LinkedIn) provides direct silicon-design domain experience relevant to analog/mixed-signal tooling; no public data found on Mitra's or Jain's analog circuit credentials.

## Key Risks

- **Pivot risk from Refortifai to Atrisa:** The team pivoted from "Runtime security for AI agents" (Refortifai YC listing) to analog circuit design agents within the same batch (YC company page WebFetch); prior-product traction does not transfer and the new domain requires different expertise than AI security.
- **Incumbent acquisition compression:** Cadence acquired ChipStack and shipped ChipStack AI Super Agent within three months (Zach's tech blog; Cadence press release, Feb 2026), signaling the incumbent playbook is rapid acqui-hire of agent startups, capping exit-multiple windows.
- **Well-funded direct competitors:** Astrus ($13.3M, Khosla Ventures; BetaKit) and Quilter ($10M Series A, Benchmark; Quilter blog) hold capital leads in adjacent analog/circuit AI categories.
- **Name disambiguation / founder verification:** Public sources do not definitively distinguish the YC CEO "Sayan Mitra" from the UIUC ECE professor of the same name (Google search results return both); investors should verify founder identity and full-time commitment directly.
- **Technical feasibility for analog:** Analog circuit design depends on tacit, simulation-driven tradeoffs that frontier LLMs are documented to struggle with (Atrisa's own launch post; Viks Newsletter "AI/ML for Automated Analog Circuit Design"); no public benchmark or demo confirms Atrisa's agent meets production-grade performance.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | EDA tools USD 20.78B in 2026, 8.1% CAGR to USD 30.67B by 2031 (MarketsandMarkets, 2026) |
| SAM | AI EDA segment USD 4.27B in 2026, 24.4% CAGR to USD 15.85B by 2032 (MarketsandMarkets, 2026) |
| Traction | Spring 2026 YC batch launch (YC company page, 2026); 0 open job postings (YC company page, 2026); no public users, revenue, or Product Hunt data found |
| Revenue Signal | No public data found |
| Founders | Sayan Mitra (CEO): listed founder Refortifai/Atrisa YC P26. Atman Kar (CTO): RTL Digital Design Engineer at Texas Instruments, BITS Pilani Goa. Rithik Jain (COO): CoFounder/COO at Refortifai. |
| Competitors | Astrus ($13.3M raised, revenue unknown, layout/physics-aware analog AI); Quilter ($10M Series A Benchmark, revenue unknown, RL+physics circuit automation); Silimate (funding undisclosed, revenue unknown, AI chip-perf debugger, YC-backed); ChipStack (~$7M raised pre-acq, acquired by Cadence Feb 2026, agentic verification); Synopsys/Cadence/Siemens (~70% EDA share, incumbents adding agentic AI). |
| Moat Signals | No public data found beyond claimed proprietary "analog engineer intuition" training (YC launch post, 2026) |
| Risk Factors | Pivot from AI security to analog EDA mid-batch; incumbent acqui-hire compression (Cadence/ChipStack); well-funded direct competitors |
| Founder Reach | Sayan Mitra: Twitter not found, LinkedIn @sayanmitra9 count not retrievable, GitHub not found. Atman Kar: Twitter not found, LinkedIn @atman-kar count not retrievable, GitHub @Atman-Kar stars not retrievable. Rithik Jain: Twitter not found, LinkedIn @rithik--jain count not retrievable, GitHub @rithikjain stars not retrievable. |
| Distribution Signals | No public data found |
| Emails | No public data found |

Sources:
- [Atrisa YC company page](https://www.ycombinator.com/companies/atrisa)
- [Refortifai YC company page](https://www.ycombinator.com/companies/refortifai)
- [Sayan Mitra on RateMyTechFounder](https://ratemytechfounder.com/founder/sayan-mitra)
- [Atman Kar LinkedIn](https://www.linkedin.com/in/atman-kar/)
- [Atman Kar GitHub](https://github.com/Atman-Kar)
- [Rithik Jain LinkedIn](https://www.linkedin.com/in/rithik--jain/)
- [Rithik Jain GitHub](https://github.com/rithikjain)
- [Astrus funding (BetaKit)](https://betakit.com/astrus-announces-11-million-cad-to-automate-semiconductor-design-with-ai/)
- [Quilter EDA stack blog](https://www.quilter.ai/blog/the-2026-eda-stack-for-hardware-startups-how-to-speed-up-layout-and-extend-your-runway)
- [Silimate Stanford Daily](https://stanforddaily.com/2026/03/11/silimate-ceo-pioneers-ai-debugger/)
- [Cadence ChipStack AI Super Agent press release](https://www.cadence.com/en_US/home/company/newsroom/press-releases/pr/2026/cadence-unleashes-chipstack-ai-super-agent-pioneering-a-new.html)
- [Why Cadence acquired ChipStack (Zach's blog)](https://www.zach.be/p/why-did-cadence-acquire-chipstack)
- [AI EDA market (MarketsandMarkets)](https://www.marketsandmarkets.com/ResearchInsight/ai-eda-companies.asp)
- [EDA Market Primer (SemiAnalysis)](https://newsletter.semianalysis.com/p/eda-market-primer)
- [AI/ML for Analog Circuit Design (Viks Newsletter)](https://www.viksnewsletter.com/p/ai-ml-for-automated-analog-circuit-design)
