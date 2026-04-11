# Mercury

> Ex. Palantir FDEs building no-code multi agent orchestration.

| Field | Value |
|-------|-------|
| Website | https://www.mercury.build/ |
| YC Page | https://speedrun.a16z.com/companies/mercury |
| Batch | a16z Speedrun SR006 (Jan–Apr 2026) |
| Industry | Creative Tools, AI Models/Infrastructure, B2B |
| Team Size | 5 |
| Location | New York, New York, United States of America |
| Tags | Creative Tools, AI Models/Infrastructure, B2B |
| YC Partner | Not listed (a16z Speedrun page returned 404 at time of research) |
| Emails | stefano@mercury.build, naveen@mercury.build |

## The Idea

**Problem:** Building and coordinating multi-agent AI systems today requires deep technical expertise. Users juggle 20+ browser tabs and 9+ disconnected tools, with "gap management" between tools consuming significant time (manifesto.mercury.build). Unless a user is highly technical, they cannot deploy a team of agents that share context, delegate tasks, and maintain persistent memory (a16z Speedrun company description). Existing solutions fall into either developer-oriented frameworks (e.g., CrewAI, LangChain) requiring code, or single-agent no-code builders (e.g., Lindy) that do not support multi-agent orchestration natively.

**Approach:** Mercury provides a no-code interface for deploying and managing teams of AI agents "the same way [users] manage a team of humans" (a16z Speedrun company description). The platform focuses on agent primitives: context sharing, intelligent delegation, persistent memory, and surfacing relevant information at the right moment (manifesto.mercury.build). The product integrates heterogeneous agent backends—the website shows roles filled by Claude Code, Devin, and gstack operating under a unified orchestration layer (mercury.build homepage). The product is in alpha with a "Try Alpha for Free" call-to-action and a waitlist (mercury.build homepage).

**Differentiation:**
- vs. CrewAI / LangChain: These are developer frameworks requiring code; Mercury targets non-technical users via no-code interface.
- vs. Lindy / Relevance AI: These are primarily single-agent builders with workflow automation; Mercury is purpose-built for multi-agent coordination with heterogeneous agent backends.
- vs. Zapier / n8n: These are workflow automation tools adding AI capabilities; Mercury starts agent-native with orchestration primitives (context sharing, delegation, memory) rather than bolting AI onto existing automation.

**Business Model:** No public pricing page found. The alpha is currently free (mercury.build homepage). [Inferred]: Most likely monetization path is a SaaS subscription (per-seat or per-agent-execution) given the B2B positioning and the precedent set by competitors like CrewAI and Lindy.

**TAM/SAM:**
- AI orchestration platform market: $13.56B in 2026, projected to $82.15B by 2035 at 22.16% CAGR (Precedence Research via search snippet).
- Agentic AI orchestration and memory systems market: $6.27B in 2025, projected to $28.45B by 2030 at 35.32% CAGR (Mordor Intelligence via search snippet).
- [Inferred]: SAM is the no-code segment of multi-agent orchestration for non-technical business users—a subset of the broader AI orchestration market. No public SAM estimate found for this specific segment.

**GTM / Distribution:** Stefano Delmanto described running a 5-agent AI sales organization using Mercury's own platform, with agents handling lead sourcing, prospect research, qualification, and outreach asynchronously (a16z speedrun substack, Mar 3, 2026). [Inferred]: Initial GTM is product-led via the free alpha and waitlist, combined with dogfooded AI-driven outbound sales. The a16z Speedrun network provides early distribution to other founders.

## Defensibility

No defensibility signals found in public sources at this stage.

- [Inferred]: Potential moat could develop via (1) orchestration data—as users build complex agent workflows, the platform accumulates coordination patterns that improve routing and delegation; (2) switching costs from agent configurations and persistent memory that are non-portable; (3) network effects if the platform develops a marketplace of agent templates.

**Market structure:** No structural barrier identified at this stage. [Inferred]: Large incumbents (Microsoft, Google) could build multi-agent orchestration into existing platforms (Copilot Studio, Vertex AI), but may face business model tension—they monetize individual model API calls rather than orchestration layers, and bundling orchestration could cannibalize per-token revenue.

**Commoditization risk:** Multi-agent orchestration frameworks are proliferating rapidly. CrewAI's open-source framework has significant developer adoption (150 beta enterprise customers as of Oct 2024, SiliconANGLE). LangChain, AutoGen, and OpenAI's Agents SDK all offer multi-agent capabilities. The no-code wrapper is the differentiator, but Lindy and Relevance AI are adjacent and could add multi-agent orchestration features.

## Market & Traction

**Traction signals:**
- Alpha product live with "Try Alpha for Free" and "Join Waitlist" options (mercury.build homepage, accessed Apr 2026).
- Part of a16z Speedrun SR006 cohort, which selected ~70 startups from 19,000+ applicants (a16z speedrun substack, Feb 5, 2026).
- Company Twitter/X: @mercury_build (mercury.build homepage); follower count not retrievable.
- Company LinkedIn: linkedin.com/company/mercury-intelligence (company data); follower count not retrievable.
- No public user counts, revenue, download metrics, Product Hunt launch, Discord/Slack community, or app store presence found.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Mercury |
|-----------|---------|-------------|-------------------------------|
| CrewAI | $24.5M total (Tracxn via search snippet) | $3.2M (Jul 2025, Latka via search snippet) | Developer-focused Python framework; requires code. Mercury targets no-code users. |
| Relevance AI | $37M total, $24M Series B (TechCrunch, May 2025) | Revenue unknown; 40K agents registered Jan 2025 (TechCrunch) | No-code agent builder with vector search; primarily single-agent focused. Mercury emphasizes multi-agent coordination. |
| Lindy AI | ~$50M total (Tracxn via search snippet) | $5.1M (Oct 2024, Latka via search snippet) | No-code single-agent builder for workflow automation. Mercury orchestrates heterogeneous multi-agent teams. |
| Dust | $21.5M total (TechCrunch, Jun 2024) | $7.3M ARR (2025, Latka via search snippet) | Enterprise AI agents connected to internal data. Focused on data retrieval/RAG rather than multi-agent coordination. |

**Why now:** [Inferred]: Several specific catalysts opened this opportunity in 2024–2026: (1) The emergence of capable coding agents (Claude Code, Devin, Cursor) created a heterogeneous ecosystem of specialized agents that need coordination—a problem that did not exist when there was only ChatGPT. (2) OpenAI's release of the Agents SDK (Mar 2025) and Anthropic's tool-use APIs normalized multi-agent patterns, creating demand for non-developer access. (3) Enterprise AI adoption shifted from "try one AI tool" to "deploy multiple AI tools," creating the "gap management" problem Mercury describes.

## Founders & Team

**Stefano Delmanto** — Co-founder & CEO
- Stanford University, Religious Studies and Electrical Engineering (a16z Speedrun profile).
- Previously: Forward Deployed Engineer (FDE) at Palantir Technologies, Sep 2021–Mar 2025 (LinkedIn via search snippet).
- Co-founder of Vivah Cosméticos (search snippet; details limited).
- Twitter/X: No public personal account found.
- LinkedIn: linkedin.com/in/stefanodelmanto — headline references Palantir Technologies; 500+ connections (LinkedIn via search snippet).
- GitHub: No public repos found.

**Naveen Sharma** — Co-founder & CTO
- Background in AI, robotics, and applied mathematics (a16z Speedrun profile).
- Previously: Forward Deployed Engineer (FDE) at Palantir Technologies (a16z Speedrun profile; LinkedIn at linkedin.com/in/naveensharma02 confirms Palantir).
- Twitter/X: No public personal account found.
- LinkedIn: linkedin.com/in/naveensharma02 — headline references Palantir Technologies (LinkedIn via search snippet).
- GitHub: No public repos found.

**Jayson** — Co-founder (role unspecified)
- Named as co-founder on the Mercury manifesto (manifesto.mercury.build). No last name, background, or social profiles found in public sources.

**Co-founder relationship:** Both Stefano Delmanto and Naveen Sharma were FDEs at Palantir Technologies with overlapping tenures (Stefano: Sep 2021–Mar 2025 per LinkedIn; Naveen: also at Palantir per a16z Speedrun profile). Both have Stanford connections (Stefano attended Stanford; Naveen's educational institution not confirmed but applied mathematics background noted). [Inferred]: The co-founders likely met and worked together at Palantir, where FDEs work in small, high-autonomy deployment teams.

**Founder-market fit:** Both CEO and CTO deployed agent and AI systems at enterprise scale as Palantir FDEs—a role that involves embedding with customers to build and operate complex data and decision systems in production (a16z Speedrun company description: "deployed agent systems in the real world"). This direct experience with the gap between powerful AI tools and operational coordination is the specific problem Mercury addresses. Stefano's dual background in Religious Studies and Electrical Engineering at Stanford is unusual. [Inferred]: The Palantir FDE experience is directly relevant—FDEs bridge technical and non-technical users, mirroring Mercury's no-code positioning.

## Key Risks

**Name collision with Mercury Financial (mercury.com):** Mercury (mercury.com) is a $3.5B+ fintech banking platform serving 200,000+ startups (TechCrunch, Mar 2025; Crowdfund Insider, Apr 2026). Additionally, Inception Labs markets a diffusion LLM called "Mercury." Search engine results, press coverage, and SEO will be structurally disadvantaged. The .build TLD partially mitigates this but the brand conflict is persistent.

**Incumbent platform risk from agent providers:** Mercury's orchestration layer sits atop third-party agents (Claude Code, Devin, gstack as shown on the homepage). These agent providers (Anthropic, Cognition, others) could build native orchestration features, disintermediating Mercury. OpenAI already ships an Agents SDK with multi-agent orchestration (openai.github.io/openai-agents-python).

**Well-funded no-code competitors converging on multi-agent:** Lindy ($50M raised), Relevance AI ($37M raised), and CrewAI ($24.5M raised) are all expanding capabilities. Adding multi-agent orchestration to an existing no-code agent builder with established user bases is an incremental feature addition for them, while Mercury must build the full product and acquire users from scratch.

**Third co-founder opacity:** The manifesto names "Jayson" as a co-founder but no last name, role, background, or social presence is publicly available. For a 5-person team where co-founders represent core leadership, the absence of public information on one of three co-founders is a diligence gap.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI orchestration platform market: $13.56B in 2026, projected $82.15B by 2035 at 22.16% CAGR (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | Alpha live with free access and waitlist (mercury.build, Apr 2026); a16z Speedrun SR006 cohort, ~70 selected from 19K+ applicants (a16z speedrun substack, Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Stefano Delmanto (CEO): Stanford, ex-Palantir FDE. Naveen Sharma (CTO): ex-Palantir FDE, AI/robotics/applied math. Jayson: co-founder, no public details. |
| Competitors | CrewAI ($24.5M raised, $3.2M revenue Jul 2025, developer framework — Tracxn/Latka via search snippets); Relevance AI ($37M raised, revenue unknown, no-code single-agent — TechCrunch May 2025); Lindy ($~50M raised, $5.1M revenue Oct 2024, no-code single-agent — Tracxn/Latka via search snippets); Dust ($21.5M raised, $7.3M ARR 2025, enterprise data-connected agents — TechCrunch Jun 2024/Latka via search snippet) |
| Moat Signals | No public data found |
| Risk Factors | Name collision with Mercury Financial ($3.5B+ fintech), incumbent agent providers building native orchestration, well-funded competitors converging on multi-agent |
| Founder Reach | Stefano Delmanto: LinkedIn 500+ connections, no Twitter/GitHub found. Naveen Sharma: LinkedIn profile confirmed, no Twitter/GitHub found. Jayson: no public data found. |
| Distribution Signals | Free alpha + waitlist on mercury.build (Apr 2026); a16z Speedrun SR006 network access (a16z speedrun substack, Feb 2026); @mercury_build on X (mercury.build homepage, follower count not retrievable) |
| Emails | stefano@mercury.build, naveen@mercury.build (a16z Speedrun profile) |
