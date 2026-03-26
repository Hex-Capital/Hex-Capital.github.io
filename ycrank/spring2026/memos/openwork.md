# OpenWork

> The open source alternative to Claude Cowork

| Field | Value |
|-------|-------|
| Website | https://openworklabs.com |
| YC Page | https://www.ycombinator.com/companies/openwork |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | B2B |
| YC Partner | Aaron Epstein |
| Emails | ben@openworklabs.com (GitHub README) |

## The Idea

**Problem:** Claude Cowork, launched by Anthropic on January 12, 2026, allows users to assign agentic desktop tasks from their phone but requires a Claude Max subscription (~$200/mo), is Mac-only, and is locked to Anthropic's models (openworklabs.com; Threads/@_jphwang, Jan 20, 2026). Teams wanting multi-model, cross-platform agentic desktop workflows have no vendor-neutral option. [Inferred]: Non-technical business users ("Susan in Accounting" per HN discussion) and developer teams both need agentic workflows but are constrained by Claude Cowork's pricing and platform lock-in.

**Approach:** OpenWork is a free, MIT-licensed desktop application built on the OpenCode SDK using Tauri (Rust + TypeScript) that runs agentic workflows locally (openworklabs.com). Users bring their own API keys from 50+ LLM providers (Claude, GPT, Gemini, Llama, Mistral) or run free local models via Ollama (AI for Automation, Mar 22, 2026). Features include Browser Operator (automated browser control), Digital Twin (extended task delegation), Sales Inbound (lead qualification), and one-click workflow sharing links for teams (openworklabs.com).

**Differentiation:**
- vs. Claude Cowork: model-agnostic (50+ providers vs. Claude-only), free and open-source vs. ~$200/mo subscription, cross-platform (Mac/Windows/Linux) vs. Mac-only, team sharing via links (openworklabs.com; AI for Automation, Mar 22, 2026).
- vs. Kuse Cowork: OpenWork uses OpenCode SDK with a skills/plugins architecture targeting developers; Kuse targets document/spreadsheet workflows for non-developers (Threads/@_jphwang, Jan 20, 2026).
- vs. accomplish-ai/openwork: Tauri-based (Rust + web) vs. Electron; SDK-driven with skills/plugins vs. subprocess architecture (Threads/@_jphwang, Jan 20, 2026).

**Business Model:** The desktop app is free with no subscription; users pay only their own LLM API costs (openworklabs.com). The website lists contact for "teams and businesses interested in organizational deployment" (GitHub README). [Inferred]: Most likely monetization path is an enterprise tier with managed cloud deployment, audit trails, and team administration, based on the "Cloud Deployment" and "Enterprise Solutions" sections on the website.

**TAM/SAM:** The global agentic AI market was valued at $7.55B in 2025 and is projected to reach $199B by 2034 at 43.84% CAGR (Precedence Research, 2025 via search snippet). The AI agents market was estimated at $7.63B in 2025, projected to reach $183B by 2033 at 49.6% CAGR (Grand View Research, 2025 via search snippet). No public SAM data found specific to open-source desktop agentic tools.

**GTM / Distribution:** Primary distribution is through GitHub (12.5K stars, 1.1K forks as of Mar 25, 2026; GitHub) and direct desktop download from openworklabs.com. Show HN post received 231 points and 60 comments (Hacker News). [Inferred]: Open-source community-led growth with bottom-up enterprise adoption via the team sharing feature; the cal.com/team/openwork/openwork booking link suggests outbound sales to interested organizations.

## Defensibility

- **Open-source community moat:** 12.5K GitHub stars and 1.1K forks in ~2.5 months post-launch, with 1,800+ commits and multiple daily releases (GitHub; AI for Automation, Mar 22, 2026). The contributor ecosystem creates switching costs for teams that build custom skills and plugins on the OpenCode SDK.
- **Multi-model neutrality:** Vendor lock-in to any single LLM provider becomes a liability as the model market fragments; OpenWork's 50+ provider support positions it as the neutral layer (openworklabs.com).
- [Inferred]: Potential moat could develop via network effects from shared workflow packages (one-click sharing links), but this is unproven at this stage.

**Market structure:** Anthropic's Claude Cowork is bundled with a $200/mo subscription and is Claude-only by design; offering a free, model-agnostic open-source alternative would cannibalize their premium subscription revenue if they attempted to replicate it (AI for Automation, Mar 22, 2026). [Inferred]: This business model conflict is the primary structural barrier — Anthropic is incentivized to keep Cowork proprietary to drive Max subscriptions.

**Commoditization risk:** At least three other open-source Claude Cowork alternatives launched within days of Claude Cowork's release: accomplish-ai/openwork (2.1K stars), langchain-ai/openwork, and Kuse Cowork (Threads/@_jphwang, Jan 20, 2026; search results). The barrier to creating a desktop wrapper around OpenCode is low. LangChain (well-resourced, established developer tooling company) has its own openwork repo (GitHub).

## Market & Traction

**Traction signals:**
- GitHub: 12.5K stars, 1.1K forks (GitHub, Mar 25, 2026); grew from 4.1K stars on Jan 20 to 12.5K by Mar 25 (Threads/@_jphwang; GitHub)
- Commits: 1,800+ (AI for Automation, Mar 22, 2026)
- Release velocity: v0.11.192 as of Mar 25, 2026 (GitHub)
- Hacker News: 231 points, 60 comments on Show HN (Hacker News)
- Press coverage: AI for Automation (Mar 22, 2026), UCS Strategies review, Julian Goldie review, FunBlocks AI review
- Twitter/X: @getopenwork (YC page; follower count not retrievable)
- LinkedIn: linkedin.com/company/openwork-software (YC page; follower count not retrievable)
- Product Hunt: No listing found for this specific product
- Discord/Slack community: No public data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. OpenWork |
|------------|---------|-------------|-------------------------------|
| Claude Cowork (Anthropic) | Anthropic has raised $18B+ total | Included in $200/mo Max plan (openworklabs.com) | First-party Anthropic integration, mobile phone delegation, polished UX; but Claude-only and Mac-only |
| Kuse AI / Kuse Cowork | Bootstrapped, no VC (VentureBeat) | $9M ARR in 60 days (VentureBeat) | Rust-native, offline-first, targets document/spreadsheet workflows for non-developers |
| Simular (Agent S2) | $27M total ($21.5M Series A led by Felicis, Dec 2025; TechCrunch) | Revenue unknown | SOTA computer-use benchmark (34.5% OSWorld 50-step), proprietary model, full OS control |
| accomplish-ai/openwork | No public data found | No public data found | Electron-based, targets non-developers as "AI coworker," 2.1K stars (Threads, Jan 2026) |

**Why now:** Anthropic launched Claude Cowork on January 12, 2026, establishing the category of phone-delegated agentic desktop workflows (Threads/@_jphwang, Jan 20, 2026). OpenCode reached 127K GitHub stars, providing a mature open-source coding agent backbone to build upon (AI for Automation, Mar 22, 2026). [Inferred]: The simultaneous availability of a category-defining commercial product (Claude Cowork) and a mature open-source SDK (OpenCode) created the specific opening for an open-source alternative to emerge rapidly.

## Founders & Team

**Ben Shafii** — Founder
- Education: Associate's degree in Computer Science, SUPINFO (2013–2016) (RocketReach via search snippet)
- Prior roles: Engineering Manager at Request Network; roles at FAMOCO, prologe.io (LinkedIn via search snippet; web3creators.com)
- Founder Fellow at Orange DAO, where he reviewed 8,000+ startup applications on the VC side (RocketReach via search snippet)
- Previously raised $3M+ through YC (RocketReach via search snippet) — specific prior company unclear
- Founded Different AI, building multiple open-source AI tools including Embedbase (522 GitHub stars), Note Companion (812 stars), and Obsidian-AVA (659 stars) (GitHub/benjaminshafii)
- Twitter/X: @hotkartoffel1 (follower count not retrievable)
- LinkedIn: linkedin.com/in/ben-shafii-450039107/ — "Different AI" (LinkedIn)
- GitHub: github.com/benjaminshafii — 198 followers, 77 public repos; pinned repos total ~14.7K stars across 6 projects (GitHub)

The YC page lists only Ben Shafii as founder, though team size is 4 (YC page). No other team members' names were found in public sources.

**Co-founder relationship:** Only one founder listed on the YC page; not applicable.

**Founder-market fit:** Ben Shafii has a track record of building open-source AI developer tools (Embedbase, Note Companion, Obsidian-AVA) with meaningful community adoption, totaling ~14.7K stars across pinned repos (GitHub). His experience at Orange DAO reviewing 8,000+ startup applications provides pattern recognition on developer tool GTM. His prior YC experience (raising $3M+) indicates familiarity with the YC network and fundraising process (RocketReach via search snippet).

## Key Risks

**Name collision across multiple projects:** At least three separate GitHub repositories use the "OpenWork" name for Claude Cowork alternatives: different-ai/openwork, accomplish-ai/openwork, and langchain-ai/openwork (Threads/@_jphwang, Jan 20, 2026; GitHub search results). Additionally, "OpenWork" is the name of a major Japanese job review platform with 10.5M+ reviews (LinkedIn). This creates brand confusion, SEO competition, and potential trademark conflicts.

**OpenCode SDK dependency:** The product is described as "powered by opencode" (GitHub README), meaning core agentic capabilities are inherited from an external open-source project (127K stars) rather than proprietary. Changes to OpenCode's license, direction, or maintenance could directly impact OpenWork's functionality. Other competitors (accomplish-ai, langchain-ai) can build on the same foundation.

**LangChain's entry:** LangChain, a well-funded developer tooling company, has published its own langchain-ai/openwork repository on GitHub (GitHub search results). LangChain has an established brand, distribution, and developer community that could outcompete a 4-person startup in the same category.

**Unclear monetization path:** The product is free and MIT-licensed with BYOK pricing; no revenue model is publicly documented (openworklabs.com). Enterprise features are listed on the website but no pricing page exists. Converting open-source adoption into revenue is a well-known challenge, and the MIT license permits unrestricted commercial forks.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.55B in 2025, projected $199B by 2034 at 43.84% CAGR (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 12.5K GitHub stars, 1.1K forks (GitHub, Mar 25, 2026); 4.1K stars on Jan 20, 2026 (Threads/@_jphwang); 1,800+ commits (AI for Automation, Mar 22, 2026); 231 points on Show HN (Hacker News) |
| Revenue Signal | No public data found |
| Founders | Ben Shafii (Founder): Prior YC founder ($3M+ raised), Orange DAO Founder Fellow (8K+ applications reviewed), built multiple open-source AI tools (RocketReach via search snippet; GitHub) |
| Competitors | Claude Cowork (Anthropic, $18B+ total raised, bundled in $200/mo Max; Claude-only, Mac-only); Kuse AI (bootstrapped, $9M ARR per VentureBeat; Rust-native, doc workflows); Simular ($27M raised per TechCrunch; SOTA benchmarks, full OS control); accomplish-ai/openwork (unfunded, 2.1K stars per Threads; Electron, non-dev focus) |
| Moat Signals | 12.5K GitHub stars / 1.1K forks in ~2.5 months (GitHub, Mar 2026); multi-model neutrality across 50+ providers (openworklabs.com) |
| Risk Factors | Name collision with 3+ same-name projects, OpenCode SDK dependency, LangChain competitive entry |
| Founder Reach | Ben Shafii: Twitter @hotkartoffel1 (count not retrievable), LinkedIn (listed), GitHub 198 followers / 14.7K stars across pinned repos (GitHub) |
| Distribution Signals | Show HN 231 points (Hacker News); press in AI for Automation, UCS Strategies, Julian Goldie, FunBlocks AI (search results, Mar 2026); no Product Hunt listing found |
| Emails | ben@openworklabs.com (GitHub README) |
