# Lightsprint

> Collaborative product development platform

| Field | Value |
|-------|-------|
| Website | https://lightsprint.ai |
| YC Page | https://www.ycombinator.com/companies/lightsprint |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Generative AI, B2B, Enterprise Software, AI |
| YC Partner | Garry Tan (per YC page) |
| Emails | No public data found |

## The Idea

- **Problem:** Non-engineering teammates (PMs, designers, founders) cannot ship features directly to an existing production codebase and must queue work through engineering (Founderland article; lightsprint.ai).
- **Approach:** AI-native platform where users describe changes in plain English; cloud agents read the codebase, present styled visual trade-offs, generate a live preview URL, and open a real pull request against the existing repo (lightsprint.ai).
- **Differentiation:** Vs. Lovable/Bolt/v0 (greenfield app generators) — operates on existing production codebases with PR-based git workflow; vs. Cursor/Devin (engineer-facing IDE/agent) — explicitly designed for non-engineer collaborators with visual planning surface (lightsprint.ai; Lovable comparison guide, 2026).
- **Business Model:** "Start free, no credit card required" CTA on homepage; no published pricing tiers (lightsprint.ai). [Inferred]: Per-seat SaaS with consumption layer for cloud-agent compute, consistent with the "army of cloud agents" framing on the site.
- **TAM/SAM:** AI coding/"vibe coding" market reported at $4.7B in 2026, with $15B in global developer AI-tool spend (Medium "2026 AI Coding Platform Wars," 2026, via search snippet); no SAM disclosed for the non-engineer collaborative-coding sub-segment.
- **GTM / Distribution:** Founder-led demos via Cal.com booking link on homepage (lightsprint.ai/cal.com/benong); YC batch distribution and founder LinkedIn launch post (LinkedIn, Oct 2025, via search snippet). [Inferred]: Bottom-up land via PM/designer seats inside teams already using GitHub.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond a single named customer testimonial from Warmly.ai's VP Engineering (lightsprint.ai).
- **Future moat:** [Inferred]: Workspace data (plans, previews, PR history tied to a customer codebase) could create switching costs, but unproven now given pre-launch traction.
- **Market structure:** [Inferred]: No structural barrier identified — incumbents (Cursor, Lovable, Replit, GitHub Copilot Workspace) can extend into the same non-engineer + existing-codebase workflow; product is differentiated by UX framing rather than a structural lock.
- **Commoditization risk:** Multiple well-funded players (Cursor $2B ARR, Lovable $100M ARR, Replit $100M ARR per Medium 2026) operate adjacent or overlapping workflows and could ship visual-planning + PR features.

## Market & Traction

- **Traction signals:**
  - Customer testimonial: "Love how it's able to execute my plans in one-shot" — VP of Engineering, Warmly.ai (lightsprint.ai).
  - Founder launch announcement post on LinkedIn (LinkedIn, post activity ID 7445244144001871872, Oct 2025).
  - Founderland article covering the launch (founderland.ai, 2026).
  - No revenue, user count, waitlist size, Product Hunt listing, Discord/Slack size, or job postings located in public sources.
  - Company LinkedIn page exists at linkedin.com/company/lightsprint; follower count not retrievable.
- **Competitors (top 5):**
  - Cursor (Anysphere): ~$2B ARR, $29.3B valuation (Medium "2026 AI Coding Platform Wars," 2026, via search snippet) — IDE for engineers, not visual/non-engineer-first.
  - Lovable: $100M ARR in 8 months, $330M Series B at $6.6B valuation Dec 2025 (Medium, 2026, via search snippet) — greenfield app builder, not designed for existing production codebases.
  - Replit: $10M→$100M ARR in 9 months post-Agent (Medium, 2026, via search snippet) — cloud IDE + agent, browser-native runtime rather than PR-into-existing-repo.
  - Bolt.new (StackBlitz): revenue unknown publicly — visual prototyping for new apps, no team-collaboration PR workflow comparable to Lightsprint (Lovable comparison guide, 2026).
  - Devin (Cognition): revenue unknown publicly; pricing repositioned to $20/mo + $2.25/ACU (Medium, 2026, via search snippet) — autonomous engineer-style agent without the visual planning + non-engineer collaboration framing.
- **Why now:** [Inferred]: Cloud-agent coding crossed a reliability threshold in 2025 (evidenced by Lovable's $0→$100M ARR in 8 months and Replit's Agent-driven 10x revenue jump per Medium, 2026), making "non-engineer ships to prod" plausible where it wasn't 18 months earlier.

## Founders & Team

- **Ben Ong (Founder / CEO):**
  - Background: Previously scaled AI products at SEA Group (NYSE: SE) and worked at Temasek's $300B venture studio; ex-VC at January Capital (company description; LinkedIn /in/benj-ong/; search snippet).
  - Twitter/X: @BenHLOng (x.com/benhlong); follower count not retrievable.
  - LinkedIn: "Founder at Lightsprint (YC P26)" (linkedin.com/in/benj-ong/).
  - GitHub: No public account found tied to this person.
- **Benedict Chan (Co-founder):**
  - Background: Former VP Engineering at Chainlink Labs; former CTO at BitGo; founded EtherLi (world's first ETH multi-sig web wallet); founding member of WBTC DAO; earlier at Microsoft (Decrypt, 2020; RootData; Crunchbase).
  - Twitter/X: @bencxr — 4,360 followers (search snippet, 2026).
  - LinkedIn: "Lightsprint (YC P26)" (linkedin.com/in/bencxr/).
  - GitHub: @bencxr (github.com/bencxr); top repo star count not retrievable from search.
- **Heng Hong Lee (Co-founder):**
  - Background: Senior Software Engineer at Facebook (~5 years), worked on Facebook Messenger (2013); Director of Engineering at Fazz Financial Group / Xfers (YC S17, ~4 years) (Weekday.works profile; LinkedIn sg/in/henghonglee).
  - Twitter/X: @henghonglee (twitter.com/henghonglee); follower count not retrievable.
  - LinkedIn: profile at sg.linkedin.com/in/henghonglee; headline not retrievable.
  - GitHub: @henghonglee — public repos include `chat-processor`, `D3`, `claude-secrets`; star counts not retrievable from search.
- **Co-founder relationship:** No public data on a shared prior employer or university across the three founders; all three have Singapore/Southeast Asia career overlap (SEA Group, Temasek, Fazz/Xfers) per LinkedIn and company description.
- **Founder-market fit:** Chan brings production infrastructure engineering at scale (BitGo, Chainlink) and Lee brings consumer-scale product engineering (Facebook Messenger, Fazz) relevant to building reliable cloud agents on customer codebases; Ong contributes AI-product and capital-allocation background (SEA Group, Temasek, January Capital) (company description; Decrypt; Weekday.works).

## Key Risks

- **Commoditization by funded incumbents:** Cursor ($2B ARR), Lovable ($100M ARR, $6.6B valuation), and Replit ($100M ARR) all operate adjacent workflows and have the capital to extend into non-engineer + existing-codebase PR generation (Medium "2026 AI Coding Platform Wars," 2026). No structural lock identified at lightsprint.ai.
- **Single-testimonial traction:** Only one named customer (Warmly.ai) is referenced publicly, and no revenue, user, waitlist, or Product Hunt data was located in research (lightsprint.ai; Product Hunt searches returned no Lightsprint listing).
- **Reliability of "non-engineer ships to prod":** The core thesis — that PMs/designers can reliably merge agent-generated PRs into production codebases — is technically unproven at scale; no benchmark, public reliability data, or scale metrics disclosed (lightsprint.ai).
- **Name collision:** "LightsprintSDK" (StepanHrbek/LightsprintSDK on GitHub) is an unrelated real-time global illumination 3D library, which may complicate SEO and trademark positioning (github.com/StepanHrbek/LightsprintSDK).
- **Description accuracy flag:** Company-supplied description lists "BitGo (NYSE:BTGO)," but BitGo is not publicly identified as a NYSE-listed entity in independent sources reviewed (Crunchbase; Decrypt) — minor due-diligence concern on self-reported credentials.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI coding / "vibe coding" market $4.7B in 2026; $15B global developer AI-tool spend (Medium "2026 AI Coding Platform Wars," 2026, via search snippet) |
| SAM | No public data found |
| Traction | 1 named customer testimonial — Warmly.ai VP Engineering (lightsprint.ai); YC Spring 2026 batch (ycombinator.com/companies/lightsprint); Founderland article (founderland.ai, 2026) |
| Revenue Signal | "Start free, no credit card required" homepage CTA; no pricing tiers published (lightsprint.ai) |
| Founders | Ben Ong (Founder): ex-SEA Group AI, ex-Temasek venture studio, ex-January Capital VC. Benedict Chan (Co-founder): ex-VP Eng Chainlink Labs, ex-CTO BitGo, EtherLi founder. Heng Hong Lee (Co-founder): ex-Facebook Messenger engineer, ex-Director of Engineering Fazz (YC S17). |
| Competitors | Cursor (~$2B ARR, $29.3B valuation, IDE for engineers); Lovable ($100M ARR, $330M Series B at $6.6B, greenfield app builder); Replit ($100M ARR, cloud IDE + Agent); Bolt.new (revenue unknown, visual prototyping); Devin/Cognition (revenue unknown, autonomous engineer agent) |
| Moat Signals | No public data found |
| Risk Factors | Commoditization by funded incumbents, single-testimonial traction, unproven non-engineer-to-prod reliability |
| Founder Reach | Ben Ong: Twitter @BenHLOng count not retrievable, LinkedIn /in/benj-ong/, no public GitHub. Benedict Chan: Twitter @bencxr 4,360 followers, LinkedIn /in/bencxr/, GitHub @bencxr stars not retrievable. Heng Hong Lee: Twitter @henghonglee count not retrievable, LinkedIn /in/henghonglee, GitHub @henghonglee stars not retrievable. |
| Distribution Signals | YC Spring 2026 batch listing (ycombinator.com); Founderland article (founderland.ai, 2026); Cal.com demo booking link (lightsprint.ai); founder LinkedIn launch post (LinkedIn, Oct 2025) |
| Emails | No public data found |

Sources:
- [Lightsprint — Y Combinator](https://www.ycombinator.com/companies/lightsprint)
- [Lightsprint homepage](https://lightsprint.ai/)
- [Founderland: YC-Backed Lightsprint](https://www.founderland.ai/articles/yc-backed-lightsprint-lets-non-engineers-ship-features-to-pr-mose7hjw)
- [Ben Ong LinkedIn](https://www.linkedin.com/in/benj-ong/)
- [Ben Ong X (@BenHLOng)](https://twitter.com/benhlong)
- [Benedict Chan X (@bencxr)](https://x.com/bencxr)
- [Benedict Chan LinkedIn](https://www.linkedin.com/in/bencxr/)
- [Benedict Chan GitHub](https://github.com/bencxr)
- [Benedict Chan Crunchbase](https://www.crunchbase.com/person/benedict-chan)
- [Chainlink brings on BitGo CTO — Decrypt](https://decrypt.co/45246/chainlink-bitgo-cto-scaling-tech)
- [Heng Hong Lee — Weekday](https://www.weekday.works/people/heng%20hong-lee-henghonglee)
- [Heng Hong Lee LinkedIn](https://sg.linkedin.com/in/henghonglee)
- [Heng Hong Lee GitHub](https://github.com/henghonglee)
- [2026 AI Coding Platform Wars — Medium](https://medium.com/@aftab001x/the-2026-ai-coding-platform-wars-replit-vs-windsurf-vs-bolt-new-f908b9f76325)
- [Cursor vs Bolt vs Lovable — Lovable](https://lovable.dev/guides/cursor-vs-bolt-vs-lovable-comparison)
- [LightsprintSDK (unrelated) — GitHub](https://github.com/StepanHrbek/LightsprintSDK)
