# Refortifai

> Runtime security for AI agents

| Field | Value |
|-------|-------|
| Website | https://refortif.ai |
| YC Page | https://www.ycombinator.com/companies/refortifai |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Security, AI |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

## The Idea

**Problem:** Enterprises deploying AI agents face runtime security threats including prompt injection, memory poisoning, and privilege escalation (YC page). These agents make tool calls — executing code, querying databases, sending emails — with insufficient governance over what actions they can take. [Inferred]: Existing solutions at the time of Refortifai's founding primarily addressed LLM input/output filtering rather than intercepting and governing the tool-call layer of autonomous agents.

**Approach:** The YC page describes a "security agent that monitors your agent" — intercepting tool calls, enforcing governance policies, and blocking attacks in real time, sitting on top of existing agent setups with minimal integration (YC page). However, the company website (refortif.ai, via search snippet) describes a different product: "Anti-cheat for AI Models" that obfuscates AI model weights before distribution, with a secured runtime that handles execution while keeping original weight values unexposed — never on disk or in RAM (refortif.ai, via search snippet). The website further states this adds "negligible overhead" unlike homomorphic encryption and enables "full inference speed on any hardware" (refortif.ai, via search snippet). This discrepancy suggests either a product pivot toward agent runtime security (reflected in the YC page) or a dual product line. The website was not directly accessible (403 error) at the time of research.

**Differentiation:** Versus Noma Security and Lakera, which provide broader AI security platforms including posture management and red-teaming, Refortifai's YC positioning focuses specifically on the tool-call interception layer (YC page). Versus Capsule Security ($7M seed, April 2026; SiliconANGLE, Apr 2026), which also monitors agent behavior at runtime, Refortifai claims minimal integration overhead (YC page). Versus Microsoft's open-source Agent Governance Toolkit (released April 2, 2026; Microsoft Open Source Blog), which provides free policy enforcement with sub-0.1ms p99 latency across Python, TypeScript, Rust, Go, and .NET (Microsoft Open Source Blog, Apr 2026), Refortifai would need to differentiate on managed-service value, support, or proprietary capabilities. The website's model-weight obfuscation product, if still active, has a different competitive set focused on model IP protection.

**Business Model:** No pricing page was accessible. [Inferred]: Most likely monetization is a SaaS subscription (per-agent or per-organization) given B2B security positioning and the "sits on top of your existing agent setup" integration model described on the YC page.

**TAM/SAM:**
- AI in cybersecurity market: $34.09B in 2025, projected $213.17B by 2034, 21.71% CAGR (Fortune Business Insights, 2025 via search snippet).
- Security & surveillance AI agents segment: $574.9M in 2025, 50.4% CAGR to 2033 (Grand View Research, 2025 via search snippet).
- Broader agentic AI market: $7.29B in 2025, projected $139.19B by 2034, 40.50% CAGR (Fortune Business Insights, 2025 via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-led adoption via SDK/API integration into existing agent frameworks (LangChain, CrewAI, etc.), given the "minimal integration" claim on the YC page and the technical founder profile.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via proprietary threat intelligence data from monitoring agent tool calls across customers (data network effect), but this is unproven at pre-seed.

If the model-weight obfuscation product (refortif.ai, via search snippet) remains active, proprietary obfuscation techniques that maintain inference performance could represent IP-based defensibility, but no patents were found in public records.

**Market structure:** Microsoft released the Agent Governance Toolkit as free open-source software under MIT license covering all 10 OWASP agentic AI risks (Microsoft Open Source Blog, Apr 2026). This directly addresses the same runtime policy enforcement use case. [Inferred]: A structural barrier for incumbents like CrowdStrike or Palo Alto is that their existing endpoint/network security architectures were not designed for the agent tool-call interception pattern, requiring a new product line rather than an extension. However, Microsoft's open-source release demonstrates that well-resourced incumbents can and do enter this space.

**Commoditization risk:** The agent runtime security pattern — intercept tool calls, apply policy, allow/deny — is architecturally straightforward. Microsoft's Agent Governance Toolkit (open-source, Apr 2026), Capsule Security ($7M seed, Apr 2026; SiliconANGLE), and Noma Security ($132M raised; SecurityWeek) all offer overlapping runtime governance capabilities. [Inferred]: Commoditization risk is elevated given the open-source alternative and multiple well-funded entrants in the same quarter.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt launch found.
- No press coverage in named publications found.
- Company Twitter/X account: not found. Founder Sayan Mitra: @Cyan9800 (YC page), follower count not retrievable.
- LinkedIn company page: not found (search returned only "Fortifai Inc." and "Fortifai," which are different companies).
- No Discord, Slack, or community channels found.
- No app store listings, Chrome extension, or download counts found.
- No active job postings found.
- Website not accessible at time of research (403 error).

**Competitive landscape:**

| Company | Funding | Key Differentiator vs. Refortifai |
|---------|---------|-----------------------------------|
| Noma Security | $132M total ($32M Series A Oct 2024, $100M Series B Jul 2025; SecurityWeek) | Full-lifecycle AI security platform with posture management, pipeline scanning, and runtime protection; 1,300% ARR growth reported (Noma blog, 2025) |
| Lakera | $30M total ($20M Series A Jul 2024; TechCrunch) | AI application firewall focused on LLM input/output filtering; acquired by Check Point (BankInfoSecurity) |
| Capsule Security | $7M seed (Apr 2026; SiliconANGLE) | Runtime monitoring of AI agent behavior with agent discovery and white-box red teaming; open-source ClawGuard tool |
| PromptArmor (YC W24) | $3M total (Crunchbase via search snippet) | LLM security and compliance with data exfiltration prevention and risk assessment; investors include Accel, Lightspeed |
| Microsoft Agent Governance Toolkit | Open-source, MIT license (Apr 2026; Microsoft Open Source Blog) | Free seven-package system in 5 languages; sub-0.1ms p99 latency; covers all 10 OWASP agentic AI risks; integrates with LangChain, CrewAI, Google ADK |

CalypsoAI ($38.2M raised) was acquired by F5 for $180M (GeekWire, Sep 2025). Lasso Security raised $6M seed (Nov 2023; BigDATAwire) and reported $1M in 2024 revenue (CBInsights via search snippet).

**Why now:** Gartner predicted that by 2026, 40% of enterprise applications will feature embedded task-specific agents, up from less than 5% in early 2025 (Obsidian Security blog, 2025 via search snippet). [Inferred]: The specific catalyst is the shift from LLMs-as-chatbots to LLMs-as-autonomous-agents with tool-use capabilities (function calling, MCP protocol), which creates a new attack surface at the tool-call layer that traditional LLM guardrails do not address. Microsoft's April 2026 release of the Agent Governance Toolkit further validates that this attack surface is now recognized as a category-level problem.

## Founders & Team

**Sayan Mitra** — Co-founder & CEO
- Background details beyond the YC page listing are limited. A "Sayan Mitra" at Zscaler appears on LinkedIn (linkedin.com/in/sayan-mitra-a48888131/) but could not be confirmed as the same individual.
- Twitter/X: @Cyan9800 (YC page); follower count not retrievable.
- LinkedIn: No confirmed public profile found for the Refortifai founder specifically.
- GitHub: No public repos found.

**Rithik Jain** — Co-founder & COO
- University of Wisconsin-Madison; began with Economics and History, then shifted to Computer Science, completing 21 CS courses, 7 Math courses, and 4 Economics courses (LinkedIn, via search snippet).
- LinkedIn: linkedin.com/in/rithik--jain/ — 500+ connections (LinkedIn via search snippet).
- Twitter/X: No public account found.
- GitHub: No public repos found.

**Atman Kar** — Co-founder & CTO
- MS, North Carolina State University (LinkedIn via search snippet).
- RTL Digital Design Engineer at Texas Instruments, building 3rd-generation automotive RADAR hardware accelerators (LinkedIn via search snippet).
- Previously interned at Tenstorrent as CPU RTL Engineer (LinkedIn via search snippet).
- Completed CTO Executive Program from ISB (LinkedIn via search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/atman-kar/ (LinkedIn).
- GitHub: github.com/Atman-Kar — 11 public repos, 11 followers. Pinned repos: soft6502 (6502 emulator in C, 2 stars), LameOS (OS for i386, 3 stars), NTP-Client (2 stars), Radon-Transform (Rust, 1 star). Contributor to ERC-BPGC/Trotbot (delivery robot, 15 stars) (GitHub).

**Co-founder relationship:** Rithik Jain's LinkedIn describes launching Refortifai "along with two friends, Sayan Mitra and Atman Kar" (LinkedIn via search snippet). Rithik attended UW-Madison; Atman attended NC State. No shared employer or university overlap is visible from available data.

**Founder-market fit:** Atman Kar's hardware engineering background at Texas Instruments and Tenstorrent provides low-level systems expertise relevant to runtime instrumentation and model-weight obfuscation. Rithik Jain's cross-disciplinary background (economics to CS) provides breadth but limited visible security domain experience. No confirmed security-specific background was found for Sayan Mitra. [Inferred]: The team's strongest technical depth appears oriented toward the model-weight protection product (hardware/systems engineering) rather than the agent runtime security product (which typically requires application security and policy engine expertise).

## Key Risks

**Product direction ambiguity:** The YC page describes "runtime security for AI agents" (tool-call interception, governance policies), while the company website describes "anti-cheat for AI models" (model weight obfuscation) (refortif.ai via search snippet; YC page). These are fundamentally different products targeting different buyers and threat models. Unclear which product is the primary focus.

**Microsoft open-source substitution:** Microsoft released the Agent Governance Toolkit under MIT license on April 2, 2026 (Microsoft Open Source Blog), providing free runtime policy enforcement for AI agents across five programming languages with integrations into LangChain, CrewAI, and Google ADK. This directly addresses Refortifai's YC-page use case and could compress willingness to pay for commercial alternatives.

**Crowded and well-funded competitive field:** Noma Security ($132M raised; SecurityWeek), Lakera ($30M; TechCrunch), Capsule Security ($7M seed in same month; SiliconANGLE), and PromptArmor ($3M, YC W24; Crunchbase) all operate in overlapping segments of AI agent/LLM security. Multiple entrants launched or raised in Q1-Q2 2026 specifically.

**Limited visible security domain expertise:** No founder has a confirmed public background in cybersecurity, application security, or threat research (based on available LinkedIn and search data). The CTO's background is in hardware design (Texas Instruments, Tenstorrent), and the COO transitioned from economics to CS.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in cybersecurity: $34.09B in 2025, 21.71% CAGR to $213.17B by 2034 (Fortune Business Insights, 2025 via search snippet) |
| SAM | Security & surveillance AI agents: $574.9M in 2025, 50.4% CAGR to 2033 (Grand View Research, 2025 via search snippet) |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Sayan Mitra (CEO): limited public background. Rithik Jain (COO): UW-Madison, Economics→CS. Atman Kar (CTO): MS NC State, RTL engineer at TI, intern at Tenstorrent. |
| Competitors | Noma Security ($132M raised, 1300% ARR growth, full-lifecycle AI security platform); Capsule Security ($7M seed Apr 2026, revenue unknown, runtime agent monitoring); PromptArmor ($3M raised, revenue unknown, LLM compliance); Microsoft Agent Governance Toolkit (open-source/free, sub-0.1ms latency, covers OWASP agentic top 10) |
| Moat Signals | No public data found |
| Risk Factors | Product direction ambiguity (website vs. YC page), Microsoft open-source substitution, crowded/well-funded competitive field |
| Founder Reach | Sayan Mitra: Twitter @Cyan9800 (count not retrievable), LinkedIn not confirmed. Rithik Jain: LinkedIn 500+ connections, no Twitter. Atman Kar: LinkedIn present, GitHub 11 followers / ~8 stars across repos, no Twitter. |
| Distribution Signals | No public data found |
| Emails | No public data found |
