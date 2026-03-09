# Glue

> The Interface Design Canvas for AI agents

| Field | Value |
|-------|-------|
| Website | https://buildwithglue.com |
| YC Page | https://www.ycombinator.com/companies/glue |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Design Tools |
| YC Partner | Jon Xu |
| Emails | No public data found |

## The Idea

**Problem:** Software builders increasingly use AI coding agents (Claude Code, OpenAI Codex, Cursor) to generate frontend code, but the design-to-code workflow remains fractured. Designers create static mockups in tools like Figma, then engineers separately implement those designs in code. With the rise of coding agents collapsing the "engineering, product, design" (EPD) workflow into a single "builder" role, there is no design tool where AI agents are the primary user. Existing design tools bolt on AI copilots as an afterthought rather than building for agent-first workflows (YC company page).

**Approach:** Glue provides an open-source design editor — an infinite canvas where builders and coding agents can co-create UI components in real time. Three core mechanisms: (1) a comment system that lets users click anywhere on a rendered UI to drop feedback, which the coding agent automatically picks up and acts on; (2) "component sticking," which lets users browse any website, select a UI component, and have Glue automatically adapt it to the user's codebase; (3) a single-command setup (`glue init`) with automatic framework detection. Changes made on the canvas are turned into production-ready code in real time (buildwithglue.com).

**Differentiation:** Glue positions itself against several categories of tools:
- *Figma and traditional design tools:* Static mockups require a separate handoff to engineering. Glue merges design and implementation into one canvas.
- *v0 (Vercel):* Generates React/Next.js components from text prompts but is tied to the Vercel ecosystem and is component-level only, not a persistent visual canvas.
- *Lovable / Bolt.new:* Full-stack AI app builders that generate entire applications from natural language. Glue focuses on the visual design iteration layer for coding agents rather than full app generation.
- *Cursor:* An AI-native code editor, not a visual design surface.

Glue supports multiple coding agents — Claude Code and OpenAI Codex are listed as supported, with Google Gemini, GitHub Copilot CLI, and Cursor listed as coming soon or planned (buildwithglue.com).

**Business Model:** No pricing page is visible on the website. The product is described as open source, which the company says "allows us to penetrate workflows at zero cost and build trust quickly" (YC company page). [Inferred]: Most likely monetization path is an open-core model with a free open-source base and paid tiers for team/enterprise features (collaboration, hosting, advanced integrations), following the pattern established by tools like GitLab and Supabase.

**TAM/SAM:** The global software development tools market was valued at approximately USD 6.41–7.57 billion in 2025 and is projected to grow at a ~16% CAGR, reaching USD 15.72 billion by 2031 (Mordor Intelligence, 2025 via search snippet; Global Growth Insights, 2025 via search snippet). No public TAM/SAM data found specific to the AI-native design tooling sub-segment.

**GTM / Distribution:** The company's stated distribution strategy is open-source penetration: making the tool free to adopt and building trust through community adoption (YC company page). The website features an email signup form for onboarding. [Inferred]: Most likely distribution path is developer-led bottoms-up adoption via GitHub, developer communities, and content marketing, converting free users to paid plans once team/enterprise features are introduced.

## Defensibility

No defensibility signals found in public sources at this stage.

[Inferred]: Potential moat could develop via (1) network effects if Glue becomes the canonical canvas that coding agents are trained or optimized to interact with, creating a de facto standard; (2) a data/workflow advantage as user design preferences, component libraries, and agent interaction patterns accumulate; (3) community contributions and plugin ecosystem if the open-source project gains traction. None of these are proven at this stage.

**Market structure:** [Inferred]: Figma (acquired by Adobe for $20B, deal later abandoned) could build agent-first features, but its architecture and business model are optimized for designer-to-designer collaboration, not agent-to-builder workflows. Rebuilding for an agent-first paradigm would risk cannibalizing its existing product positioning and user expectations. Similarly, v0, Bolt, and Lovable are built as prompt-to-app generators, not persistent visual canvases for iterative agent collaboration — a fundamentally different interaction model. However, no structural barrier has been confirmed through public evidence at this stage.

**Commoditization risk:** The AI design canvas concept could be replicated by any well-funded AI dev tool startup (Lovable, Bolt, Cursor) or by incumbents (Figma, Vercel). The core technical complexity — rendering a live preview canvas that syncs with code and accepts agent inputs — is non-trivial but not unprecedented. Open-source status could be both a distribution advantage and a commoditization risk if competitors fork the codebase.

## Market & Traction

**Traction signals:**
- No public user counts, revenue figures, or growth metrics found.
- No Product Hunt launch found for this specific Glue product.
- No press coverage found in named publications specific to buildwithglue.com.
- No app store listings, Chrome extension installs, or web traffic estimates found.
- Company Twitter/X: Perbhat Kumar's personal account @perbhatk exists; no dedicated company Twitter account found. Follower count not retrievable.
- Company LinkedIn: No dedicated company LinkedIn page found.
- Discord/Slack community: No public community found.
- GitHub: The company describes itself as open source, but no public GitHub organization or repository was found under "buildwithglue" or "anchorhead" at the time of research.
- Legal entity listed as "Anchorhead, Inc." (buildwithglue.com footer, © 2026).
- YC backing confirmed (buildwithglue.com homepage, YC page).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Glue |
|---|---|---|---|
| Lovable (fka GPT Engineer) | ~$553M total; $330M Series B at $6.6B valuation (TechCrunch, Dec 2025) | $200M+ ARR (TechCrunch, Dec 2025) | Full-stack AI app builder from text prompts; generates entire apps, not a persistent design canvas for agents |
| Bolt.new (StackBlitz) | ~$105M total (Tracxn via search snippet) | $4M ARR (Sacra via search snippet) | Full IDE with Supabase backend integration and mobile support; broader scope than visual design iteration |
| v0 (Vercel) | Part of Vercel's $563M total funding at $3.3B valuation (search snippet) | Revenue unknown | React/Next.js component generation tied to Vercel ecosystem; component-level, not a collaborative canvas |
| Cursor (Anysphere) | $2.3B Series D at $29.3B valuation (CNBC, Nov 2025) | $2B+ annualized revenue (TechCrunch, Mar 2026) | AI-native code editor; code-centric, not visual/design-centric |
| Figma | Acquired/valued at ~$12.5B (post-Adobe deal collapse) | Revenue unknown publicly | Dominant design tool for designers; not agent-first; collaborative but optimized for human designers |

**Why now:** [Inferred]: Two specific catalysts in the last 12–24 months opened this opportunity: (1) The emergence of production-quality coding agents (Claude Code launched 2024, OpenAI Codex agent mode 2025) that can autonomously write and modify frontend code, creating demand for a visual surface these agents can interact with; (2) the "vibe coding" movement (term coined by Andrej Karpathy, early 2025), which normalized the practice of non-engineers building software with AI — collapsing the traditional designer/engineer division and creating a new "builder" persona that needs unified design-and-code tools.

## Founders & Team

**Perbhat Kumar** — Co-founder & CEO
- Previously at Amazon (contributed to Kindle Fire launcher redesign) and Microsoft (built enterprise-scale RAG agents at Microsoft Copilot Studio) (YC company page).
- Self-taught machine learning engineer; transitioned to ML without a formal degree (Medium, @perbcreate).
- Completed Andrej Karpathy's "zero to hero" course; published articles on LLMs and ML topics on Medium (Medium via search snippet).
- Built a Chrome extension for reading ML articles/papers faster (Medium via search snippet).
- Twitter/X: @perbhatk — count not retrievable (JavaScript-rendered page).
- LinkedIn: linkedin.com/in/perbhat/ — headline "Stealth YC Startup" (LinkedIn via search snippet).
- GitHub: github.com/perbhat — 13 public repos, 2 followers. Pinned repo: "DeepLearning" (GitHub). No star counts retrievable.

**Tejas Priyadarshi** — Co-founder & CTO
- BS, University of Maryland (ZoomInfo via search snippet).
- Previously Software Engineer at Meta Platforms; prior role at Microsoft focused on Azure DNS (ZoomInfo via search snippet).
- Internships at Capital One and Lockheed Martin (search snippet via ZoomInfo).
- Won 1st place in mobile application development at the 2018 FBLA National Leadership Conference (Knight Crier via search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/tejas-p-5796a1106/ (LinkedIn via search snippet).
- GitHub: github.com/tejasp2022 — 12 public repos, 6 followers. Pinned repo: "Nomie" (described as "Trusted, scoped memory and consent for AI agents"). GitHub bio reads "Founder @ Willow (YC W26)" — the "Willow" name may indicate a prior product name or pivot (GitHub).

**Co-founder relationship:** Both Perbhat Kumar and Tejas Priyadarshi previously worked at Microsoft, providing a shared employer connection (YC company page; ZoomInfo via search snippet).

**Founder-market fit:** Both founders have direct experience at major tech companies building the types of products Glue targets. Perbhat Kumar's work on the Kindle Fire launcher redesign is directly relevant to interface design at scale, and his experience building enterprise RAG agents at Microsoft Copilot Studio demonstrates familiarity with AI agent architectures. Tejas Priyadarshi's engineering experience at Meta and Microsoft, combined with a competition win in mobile app development, indicates strong frontend/product engineering capabilities. Their shared Microsoft tenure suggests prior professional familiarity.

## Key Risks

**Brand disambiguation:** Multiple companies named "Glue" operate in adjacent markets — Glue.ai (agentic team chat, $20M raised from Craft Ventures, founded by David Sacks), a Helsinki-based VR collaboration startup ($3.85M raised), and an employee engagement platform ($19.8M raised). This creates SEO competition and potential confusion in investor, customer, and press outreach. The "buildwithglue.com" domain partially mitigates this.

**No visible open-source repository:** The company describes itself as open source (YC page, website), but no public GitHub organization or repository was found under "buildwithglue," "anchorhead," or founders' GitHub accounts at the time of research. If the open-source repo is not yet public, the stated open-source distribution strategy has not yet been activated, and community-driven adoption signals are absent.

**Agent platform dependency:** Glue's value proposition depends on the continued availability and extensibility of third-party coding agents (Claude Code, OpenAI Codex). If these platforms restrict third-party integrations, change their APIs, or build competing visual interfaces natively, Glue's utility could be undermined. The product currently supports only two agents, with three more listed as planned.

**Heavily funded competitive field:** The AI-assisted frontend/design space has attracted billions in cumulative funding — Cursor ($2.3B Series D), Lovable ($553M total), StackBlitz/Bolt ($105M total), and Vercel/v0 ($563M total). Any of these well-resourced players could build a visual design canvas feature. Glue's differentiation as an agent-first canvas is conceptual and not yet validated by public traction data.

**Possible product pivot signal:** Tejas Priyadarshi's GitHub bio references "Founder @ Willow (YC W26)" rather than Glue. This may indicate a recent pivot from a prior product called Willow. If so, the current product may be in its earliest stages of development and validation, and any prior Willow-related work or metrics would not apply to the current Glue product.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Software development tools market: ~$6.4–7.6B in 2025, ~16% CAGR to $15.7B by 2031 (Mordor Intelligence via search snippet). No AI design canvas sub-segment data found. |
| SAM | No public data found |
| Traction | No public data found. YC W26 backing confirmed (YC page). |
| Revenue Signal | No public data found. No pricing page visible. Open-source distribution model stated. |
| Founders | Perbhat Kumar (CEO): Amazon (Kindle Fire), Microsoft (Copilot Studio RAG agents), self-taught ML engineer. Tejas Priyadarshi (CTO): BS U. of Maryland, Meta (SWE), Microsoft (Azure DNS), 1st place FBLA Nationals 2018. |
| Competitors | Lovable ($553M raised, $200M+ ARR, full app builder vs. design canvas), Bolt.new ($105M raised, $4M ARR, full IDE vs. design canvas), v0/Vercel ($563M raised, revenue unknown, component generator vs. canvas), Cursor ($2.3B raised, $2B+ ARR, code editor vs. design surface), Figma (~$12.5B valuation, revenue unknown, designer-first vs. agent-first) |
| Moat Signals | No public data found. Potential open-source community moat not yet activated (no public repo found). |
| Risk Factors | Brand disambiguation with multiple "Glue" companies, no visible open-source repo despite OSS claims, agent platform dependency, heavily funded competitive field |
| Founder Reach | Perbhat Kumar: Twitter @perbhatk (count not retrievable), LinkedIn 500+ connections, GitHub 2 followers. Tejas Priyadarshi: Twitter not found, LinkedIn (profile exists), GitHub 6 followers. |
| Distribution Signals | No public data found. No Product Hunt launch, no app store listings, no Chrome extension, no community channels found. |
| Emails | No public data found |
