# OpenWork

> The open source alternative to Claude Cowork

| Field | Value |
|-------|-------|
| Website | https://openworklabs.com |
| YC Page | https://www.ycombinator.com/companies/openwork |
| Batch | Spring 2026 (X26) |
| Industry | B2B / B2B -> Productivity |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | |
| YC Partner | Aaron Epstein |
| Emails | No public data found (sales contact via cal.com/potato/openwork-discovery, openworklabs.com) |

## The Idea

- **Problem:** Enterprises want to deploy Claude Cowork-style agentic desktop workflows but require on-prem deployment, choice of LLM, and compliance posture not offered by Anthropic's hosted Cowork product (Ben Shafii LinkedIn post, Nov 2026; Anthropic Cowork product page).
- **Approach:** Desktop app that wraps SST's OpenCode CLI in a native GUI, letting users bring their own API keys across 50+ model providers and share "skills/MCPs/plugins" setups via single-link import (openworklabs.com; HN Show post, Jan 2026).
- **Differentiation:** vs. Claude Cowork (Anthropic) — open-source/MIT, multi-model, self-hostable instead of Anthropic-only managed SaaS (Anthropic Cowork page; GitHub different-ai/openwork); vs. OpenCode (SST) — native desktop GUI for non-technical users rather than terminal/TUI (HN Show post: "an (alternative) gui for opencode, which has mostly been for technical folks"); vs. Microsoft Copilot Cowork — independent of M365 stack (Yahoo Finance, 2026).
- **Business Model:** Free desktop app; $50/mo per seat for cloud workers; custom enterprise pricing with self-hosted deployment, gateway/MCP/skills integration (openworklabs.com/pricing; openworklabs.com/enterprise via search snippet).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Open-source viral distribution via GitHub plus HN/X launch — 15.6K stars and 150K+ downloads in ~3 months (github.com/different-ai/openwork; YC page, May 2026); [Inferred]: top-down enterprise sales motion layered on bottom-up OSS adoption, given published enterprise self-host plan and a "Founding Member" job posting (ycombinator.com/companies/openwork/jobs).

## Defensibility

- **Moat today:** 15.6K GitHub stars and 150K+ downloads in ~3 months create a distribution lead and contributor mindshare ahead of other Claude Cowork OSS clones (github.com/different-ai/openwork; YC page).
- **Future moat:** [Inferred]: Switching costs from accumulated team-specific skills/MCPs/plugins shared inside an organization could harden over time; unproven now because the shareable-setup feature is new and no published retention data exists.
- **Market structure:** [Inferred]: Anthropic structurally cannot ship a multi-model, self-hosted version of Cowork without cannibalizing its first-party model revenue, since Cowork is the consumption surface that drives Claude API usage on paid plans (Anthropic Cowork GA announcement, testingcatalog.com).
- **Commoditization risk:** OpenWork itself is a thin native GUI on top of SST's OpenCode (160K+ stars, MIT) — any party can fork OpenCode and ship a competing desktop wrapper (paperclipped.de OpenCode review, 2026; GitHub repo description).

## Market & Traction

- **Traction signals:**
  - 15.6K GitHub stars (github.com/different-ai/openwork, May 2026).
  - 150K+ downloads since launch (YC company page, May 2026).
  - Show HN "OpenWork — An open-source alternative to Claude Cowork": 231 upvotes, 60 comments (news.ycombinator.com/item?id=46612494, ~Jan 2026).
  - Latest release v0.14.0 shipped May 27, 2026 (github.com/different-ai/openwork/releases).
  - Active job posting: "Founding Member" at OpenWork (ycombinator.com/companies/openwork/jobs).
  - Coverage: aiforautomation.io ("This YC startup just cloned Claude Cowork — for free", Mar 2026); ht-x.com (Jan 2026); funblocks.net review; ucstrategies.com review.
  - Founder Twitter @benjaminshafii (x.com/benjaminshafii) — follower count not retrievable.
  - Founder GitHub @benjaminshafii: 192 followers (github.com/benjaminshafii via search snippet).
- **Competitors:**
  - Claude Cowork (Anthropic, raised ~$18B+ cumulative, revenue unknown for Cowork SKU; Anthropic Cowork GA, thenewstack.io): first-party closed-source incumbent, Anthropic models only.
  - OpenCode by SST/Anomaly Innovations (funding unknown, no subscription revenue; 160K+ GitHub stars, 7.5M monthly active developers per paperclipped.de, May 2026): underlying engine OpenWork wraps; CLI/TUI-first, dev-focused.
  - Microsoft Copilot Cowork (Microsoft, M365 distribution; finance.yahoo.com, 2026): bundled with Microsoft 365, ships Claude inside Microsoft stack.
  - Claude Code (Anthropic, revenue unknown; Medium/unicodeveloper review, May 2026): adjacent agentic coding tool, dev-focused, Anthropic-only.
- **Why now:** Anthropic took Claude Cowork from preview to GA and announced Microsoft Copilot Cowork integration within the last ~6 months (thenewstack.io; Yahoo Finance, 2026), creating an enterprise demand surface for an OSS/self-hosted equivalent.

## Founders & Team

- **Ben Shafii (Founder):**
  - Background: Previously built a startup and raised $3M+ through Y Combinator, then moved to the VC side and reviewed 8,000+ startup applications (Ben Shafii LinkedIn posts via search snippets); current company listed as "Different AI" (LinkedIn; openworklabs.com © 2026 Different AI). No public data found on university.
  - Twitter/X: @benjaminshafii (x.com/benjaminshafii); count not retrievable.
  - LinkedIn: "openwork (YC X26)" (linkedin.com/in/ben-shafii-450039107).
  - GitHub: @benjaminshafii, 192 followers; top repo different-ai/openwork at 15.6K stars (github.com/benjaminshafii; github.com/different-ai/openwork).
- **Co-founder relationship:** YC page lists Ben Shafii as the only named founder despite team size of 4 (ycombinator.com/companies/openwork); no public data on other team members or co-founder history.
- **Founder-market fit:** [Inferred]: Prior YC founder experience plus 8,000+ application reviews on the VC side (LinkedIn snippets) gives operational exposure to enterprise SaaS GTM; no public data found on advisors or post-YC outside investors.

## Key Risks

- **Upstream dependency on OpenCode/SST:** OpenWork's GitHub README states it "requires OpenCode CLI installed and available on PATH" and uses OpenCode as its core orchestration engine (github.com/different-ai/openwork); if SST changes OpenCode's license, roadmap, or ships its own desktop GUI, OpenWork's core stack is exposed. No public mitigation found.
- **Direct competition from the named target:** Anthropic moved Claude Cowork to GA on all paid plans with role-based access controls and admin analytics aimed at enterprises (thenewstack.io, 2026), narrowing the "enterprise needs Anthropic-grade Cowork" gap OpenWork is selling into.
- **Thin technical differentiation / commoditization:** Reviewers describe OpenWork as "an (alternative) gui for opencode" by the founder himself (HN Show post) and one head-to-head test reported OpenWork "struggled to show progress and appeared to stall" vs. Claude Cowork on the same workflow (funblocks.net review).
- **Single named founder at team-size 4:** YC lists only Ben Shafii as founder while team size is 4 (ycombinator.com/companies/openwork); no public data on technical co-founder, creating key-person concentration on the founder/CEO.
- **Monetization unproven at OSS-distribution scale:** 150K+ downloads vs. paid tier starting at $50/mo cloud (openworklabs.com/pricing); no public ARR, paying-customer count, or enterprise logo disclosure as of May 2026.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 15.6K GitHub stars (github.com/different-ai/openwork, May 2026); 150K+ downloads (YC page, May 2026); Show HN 231 upvotes, 60 comments (news.ycombinator.com/item?id=46612494, ~Jan 2026); v0.14.0 release (GitHub releases, May 27 2026) |
| Revenue Signal | Free desktop; $50/mo per seat cloud workers; custom enterprise pricing (openworklabs.com/pricing via search snippet); no ARR disclosed |
| Founders | Ben Shafii (Founder): prior YC founder (raised $3M+), prior VC reviewing 8,000+ applications, operates as "Different AI" |
| Competitors | Claude Cowork (Anthropic, revenue unknown, first-party closed-source incumbent); OpenCode/SST (funding unknown, 160K stars, CLI-first dev tool that OpenWork wraps); Microsoft Copilot Cowork (Microsoft, bundled M365 distribution); Claude Code (Anthropic, revenue unknown, dev-focused agentic coding) |
| Moat Signals | 15.6K GitHub stars, 150K+ downloads in ~3 months, MIT license, top-10 of YC Spring 2026 batch per search snippet (github.com/different-ai/openwork; YC page) |
| Risk Factors | Upstream OpenCode dependency, direct Anthropic Cowork GA competition, thin GUI-on-OpenCode differentiation |
| Founder Reach | Ben Shafii: Twitter @benjaminshafii (count not retrievable), LinkedIn ben-shafii-450039107 (count not retrievable), GitHub @benjaminshafii 192 followers, top repo different-ai/openwork 15.6K stars |
| Distribution Signals | Show HN 231 upvotes/60 comments (Jan 2026); 15.6K GitHub stars (May 2026); 150K+ downloads (YC page, May 2026); press in aiforautomation.io (Mar 2026), ht-x.com (Jan 2026), funblocks.net, ucstrategies.com |
| Emails | No public data found (sales via cal.com/potato/openwork-discovery, openworklabs.com) |

Sources:
- [OpenWork on Y Combinator](https://www.ycombinator.com/companies/openwork)
- [OpenWork website](https://openworklabs.com)
- [GitHub different-ai/openwork](https://github.com/different-ai/openwork)
- [Show HN: OpenWork](https://news.ycombinator.com/item?id=46612494)
- [Ben Shafii LinkedIn](https://www.linkedin.com/in/ben-shafii-450039107/)
- [Ben Shafii X/Twitter](https://x.com/benjaminshafii)
- [Ben Shafii GitHub](https://github.com/benjaminshafii)
- [Anthropic Claude Cowork](https://www.anthropic.com/product/claude-cowork)
- [Anthropic takes Claude Cowork GA — The New Stack](https://thenewstack.io/anthropic-takes-claude-cowork-out-of-preview-and-straight-into-the-enterprise/)
- [Microsoft + Anthropic Copilot Cowork — Yahoo Finance](https://finance.yahoo.com/news/microsoft-and-anthropic-team-up-to-bring-claude-cowork-to-microsoft-365-130001836.html)
- [OpenCode by SST review — paperclipped.de](https://www.paperclipped.de/en/blog/opencode-open-source-coding-agent/)
- [aiforautomation.io coverage](https://aiforautomation.io/news/2026-03-22-openwork-free-claude-cowork-alternative-yc-12k-stars)
- [ht-x.com coverage](https://ht-x.com/posts/2026/01/github-different-ai-openwork-an-open-source-altern/)
- [FunBlocks OpenWork review](https://www.funblocks.net/aitools/reviews/openwork)
- [ucstrategies OpenWork test](https://ucstrategies.com/news/is-this-free-open-source-ai-agent-really-a-claude-cowork-killer-i-tested-openwork/)
- [OpenWork Founding Member job posting](https://www.ycombinator.com/companies/openwork/jobs/pYPx6Dn-founding-member)
