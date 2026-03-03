# Talking Computers

> AI Communication Lab

| Field | Value |
|-------|-------|
| Website | https://talkingcomputers.ai |
| YC Page | https://www.ycombinator.com/companies/talking-computers |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence |
| YC Partner | Ankit Gupta |
| Emails | p.bahraminejad@gmail.com (founder personal site) |

## The Idea

**Problem:** Enterprises deploying multiple AI agents face a coordination and communication challenge. As organizations adopt specialized AI agents across functions, these agents need to communicate with each other and with humans to complete complex workflows. Current approaches rely on developer-built integrations, rigid orchestration pipelines, or manual hand-offs between siloed agents, creating friction and limiting the productive capacity of AI workforces.

**Approach:** Talking Computers is building "Facility, The Workplace for AI" — described as an AI Communication Lab focused on enabling computers to communicate with each other and with humans to complete work (YC company page). The product name "Facility" suggests a shared environment or platform where AI agents operate, coordinate, and interact. The founders describe the mission as "making computers talk" (YC bios). Specific product mechanics, architecture details, and feature lists are not publicly available; the company website returned only a title page at the time of research.

**Differentiation:** [Inferred]: Unlike existing multi-agent frameworks (CrewAI, LangGraph, AutoGen) that primarily target developers building agent pipelines, Facility appears positioned as a "workplace" — suggesting an application-layer product for end users or operators to manage AI agent teams, rather than a code-level framework. Without a public product demo or feature list, the specific differentiation mechanism cannot be confirmed.

**Business Model:** No pricing page or revenue signals found publicly. [Inferred]: Most likely monetization path is SaaS subscription (per-seat or per-agent pricing) based on the "workplace" framing and B2B positioning.

**TAM/SAM:** The agentic AI market was valued at $7.84 billion in 2025 and is projected to reach $52.62 billion by 2030 at a 41%+ CAGR (AI Agents Directory, H1 2025 via search snippet). Gartner reported a 1,445% surge in multi-agent system inquiries from Q1 2024 to Q2 2025 (search snippet). No public TAM/SAM data found for the specific "AI workplace orchestration" sub-segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-led adoption or direct sales to enterprises already deploying multi-agent systems, leveraging the YC network for initial customers. No public GTM data available.

## Defensibility

No defensibility signals found in public sources. The company website is minimal and the product is not yet publicly launched.

[Inferred]: Potential moat could develop via: (1) proprietary communication protocols or agent interoperability standards that create network effects as more agents connect to the platform; (2) data advantages from observing inter-agent communication patterns across customers; (3) switching costs once enterprises embed Facility into agent workflows. None of these are proven at this stage.

**Market structure:** No structural barrier identified at this stage. Major incumbents (Microsoft with AutoGen/Copilot Studio, Google with A2A protocol, OpenAI with Swarm/Assistants API) are actively investing in multi-agent orchestration. [Inferred]: A potential structural advantage could exist if Talking Computers builds a vendor-neutral communication layer — incumbents may face platform lock-in incentives that prevent them from building truly interoperable solutions, but this is speculative.

**Commoditization risk:** Multi-agent orchestration frameworks are proliferating rapidly: CrewAI, LangGraph, AutoGen, and several open-source alternatives are all available. Microsoft merged AutoGen with Semantic Kernel into a unified Agent Framework with GA planned for Q1 2026 (search snippet). The technical barrier to building orchestration tooling is relatively low, with multiple open-source alternatives available. Differentiation at the application layer (UX, workflow design, enterprise features) may be more defensible than at the infrastructure layer.

## Market & Traction

**Traction signals:**
- Company Twitter/X: @talkiecomputers (YC page); follower count not retrievable via automated fetch
- Founder Twitter/X: @prsabahrami (Parsa), @zayaanmulla (Zayaan); follower counts not retrievable
- Website: talkingcomputers.ai returned minimal content (title only) at time of research — appears to be a placeholder or pre-launch page
- No Product Hunt listing found
- No app store presence found
- No press coverage found
- No Discord/Slack community found
- No job postings found beyond the founding team
- No public user counts, revenue, or customer data found

Note: Parsa Bahraminejad's GitHub profile lists his role as "CTO @ Speedtrain (YC W26)" (GitHub, accessed March 2026), suggesting the company may have operated under the name "Speedtrain" prior to adopting "Talking Computers." No YC page for "Speedtrain" was found; the URL redirected to Talking Computers.

**Competitive landscape:**

1. **CrewAI** ($18M+ raised including Series A led by Insight Partners, Oct 2024; $24.5M total per PitchBook via search snippet; revenue unknown): Multi-agent orchestration platform enabling enterprises to build, deploy, and track "crews" of agents. Reports running ~450M agents/month (Insight Partners via search snippet). Key differentiator: developer-focused framework for coding agent pipelines. Talking Computers appears to position at the application layer ("workplace") rather than the framework layer.

2. **Lindy AI** ($35M Series B; investors include Battery Ventures, Coatue, Menlo Ventures via search snippet; revenue unknown): AI assistant platform for work automation across inbox, meetings, and calendar. Key differentiator: consumer-grade UX for individual productivity. Talking Computers focuses on agent-to-agent communication rather than individual human productivity.

3. **Relevance AI** ($24M Series B led by Bessemer Venture Partners, May 2025 per TechCrunch): No-code multi-agent "Workforce" platform for building specialized teams of agents. Key differentiator: no-code builder accessible to non-technical users. Closest direct competitor to the "workplace for AI" positioning.

4. **Microsoft Copilot Studio / AutoGen** (part of Microsoft; effectively unlimited resources): Enterprise agent building platform with deep Azure/M365 integration. Merged AutoGen into a unified Agent Framework. Key differentiator: native integration with Microsoft ecosystem. Structural advantage in Microsoft-centric enterprises.

**Why now:** Two specific catalysts opened this opportunity in 2024-2025: (1) The emergence of standardized agent communication protocols — Anthropic's Model Context Protocol (MCP) saw broad adoption throughout 2025, and Google launched Agent-to-Agent Protocol (A2A), establishing HTTP-equivalent standards for agent interoperability (search snippets). (2) Enterprise AI agent adoption reached a threshold where multi-agent coordination became a practical requirement rather than a theoretical concern — Gartner reported a 1,445% surge in multi-agent system inquiries from Q1 2024 to Q2 2025 (search snippet). [Inferred]: These protocol standards create an opportunity for a neutral "workplace" layer that sits above individual agent frameworks and enables cross-vendor agent collaboration.

## Founders & Team

**Parsa Bahraminejad** — Co-founder
- Computer Science with a minor in Combinatorics & Optimization at the University of Waterloo (personal website)
- Previously: Software Engineer Intern at TextQL (LinkedIn via search snippet); worked at prefix.dev on Pixi package management tooling in Rust (LinkedIn via search snippet)
- Competitive programming background with expertise in graph theory, low-level programming, and compiler development (personal website)
- Significant open-source contributions to Conda/Rust ecosystem: contributed to prefix-dev/resolvo (SAT-based package resolver), conda/rattler, prefix-dev/shell, and pixi-pack (GitHub pinned repos)
- Twitter/X: @prsabahrami; follower count not retrievable
- LinkedIn: linkedin.com/in/parsa-bahrami
- GitHub: github.com/prsabahrami — 39 repos, 51 stars, 21 followers; Pro account; pinned repos in Rust and C++ (GitHub profile)
- Personal email: p.bahraminejad@gmail.com (personal website)

**Zayaan Mulla** — Co-founder
- Bachelor of Computer Science at the University of Waterloo (LinkedIn via search snippet)
- Previously: Member of Technical Staff at Yutori (RocketReach via search snippet); Inference Engineer at Modular (LinkedIn via search snippet)
- Skills include parallel computing, NVIDIA cuDNN, TensorRT, Rust, and GPU programming (LinkedIn via search snippet)
- Interests in building performant systems, optimizing model inference, deep learning compilers, and training infrastructure (LinkedIn via search snippet)
- Writes about mathematics on Medium (Medium profile)
- Twitter/X: @zayaanmulla (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/zayaan-mulla-95412b1b1
- GitHub: No public GitHub profile found under common handle variations

**Co-founder relationship:** Both founders studied Computer Science at the University of Waterloo, indicating a shared educational background and likely prior acquaintance through the university.

**Founder-market fit:** The founders bring complementary technical backgrounds relevant to building AI agent infrastructure. Parsa's experience in systems programming (Rust, package management, compilers) and Zayaan's experience in ML inference optimization (GPU programming, TensorRT, working at Modular on inference infrastructure) together cover the systems-level and ML-level expertise needed to build an AI agent communication platform. Parsa's work at TextQL (an AI data analysis platform) and Zayaan's work at Yutori (an AI agent startup) provide direct exposure to the multi-agent AI application space. Both are early-career (undergraduate or recently graduated) with internship-level industry experience rather than senior roles.

## Key Risks

**Brand disambiguation:** "Talking Computers" is a common English phrase. Multiple unrelated businesses use similar names: Talking Computers Ltd (UK-based IT support, LinkedIn page exists), Talking Computers IT Solutions (talkingcomputers.org), and talkingcomputers.com (an unrelated entity). This creates SEO competition and potential customer confusion. The company's domain (talkingcomputers.ai) partially mitigates this.

**Incumbent platform convergence:** Microsoft, Google, and OpenAI are all actively building multi-agent orchestration and communication layers. Microsoft merged AutoGen into its Agent Framework with enterprise GA targeted for Q1 2026. Google launched the A2A protocol. OpenAI offers Swarm and Assistants API. These incumbents have distribution advantages (existing enterprise relationships, cloud platforms) and can bundle agent orchestration into existing products at marginal cost.

**Pre-product stage risk:** The company website returned only a title page at the time of research. No product demo, feature documentation, pricing, or customer testimonials are publicly available. The product "Facility" appears to be in pre-launch or stealth development. The viability of the specific product approach cannot be assessed from public information.

**Possible pivot history:** Parsa Bahraminejad's GitHub profile (accessed March 2026) lists his role as "CTO @ Speedtrain (YC W26)" rather than Talking Computers, suggesting the company may have changed its name or pivoted during the YC batch. No public information is available about the prior "Speedtrain" identity or what changed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market: $7.84B in 2025, projected $52.62B by 2030, 41%+ CAGR (AI Agents Directory, H1 2025 via search snippet) |
| SAM | No public data found for AI workplace orchestration sub-segment |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Parsa Bahraminejad (Co-founder): UWaterloo CS, intern at TextQL & prefix.dev, Rust/systems expertise. Zayaan Mulla (Co-founder): UWaterloo CS, inference at Modular, MTS at Yutori, GPU/ML systems expertise. |
| Competitors | CrewAI ($24.5M raised, revenue unknown, developer-focused multi-agent framework); Lindy AI ($35M raised, revenue unknown, individual AI work assistant); Relevance AI ($24M raised, revenue unknown, no-code multi-agent workforce platform); Microsoft Copilot Studio/AutoGen (Microsoft-backed, native Azure/M365 integration) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent platform convergence (Microsoft/Google/OpenAI), pre-product stage with no public demo, brand disambiguation challenge |
| Founder Reach | Parsa: Twitter @prsabahrami (count not retrievable), LinkedIn in/parsa-bahrami, GitHub 51 stars/21 followers. Zayaan: Twitter @zayaanmulla (count not retrievable), LinkedIn in/zayaan-mulla-95412b1b1, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | p.bahraminejad@gmail.com (founder personal site) |
