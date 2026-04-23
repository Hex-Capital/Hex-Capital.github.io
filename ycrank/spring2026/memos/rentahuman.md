# RentAHuman

> Marketplace for AI agents to hire humans.

| Field | Value |
|-------|-------|
| Website | https://rentahuman.ai |
| YC Page | https://www.ycombinator.com/companies/rentahuman |
| Batch | Spring 2026 |
| Industry | Consumer / Consumer -> Job and Career Services |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Marketplace, AI |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** AI agents can execute digital tasks autonomously but cannot interact with the physical world -- picking up packages, attending events, documenting locations, or performing manual verification. Existing gig platforms (TaskRabbit, Mechanical Turk) are designed for human-to-human coordination and lack programmatic APIs for autonomous AI agents to post, manage, and pay for tasks without human intermediation. (Built In, Mar 2026)

**Approach:** RentAHuman converts humans into API-accessible endpoints for AI agents. Agents connect via an MCP (Model Context Protocol) server or REST API, scan a live directory of workers filtered by GPS coordinates and hourly rates, and post tasks as "bounties" or direct messages. Workers submit cryptographically timestamped, geo-tagged "proof of presence" upon completion. Payments are held in escrow and released automatically upon verified task completion. (Built In, Mar 2026; Gizmodo, Feb 2026)

**Differentiation:**
- vs. Amazon Mechanical Turk / Prolific: These platforms serve human requesters for digital micro-tasks (surveys, data labeling). RentAHuman is built for autonomous AI agent requesters commissioning physical-world tasks.
- vs. TaskRabbit: TaskRabbit is a human-to-human marketplace for handyman/errand services with no AI agent API layer.
- vs. Scale AI: Scale provides data labeling and RLHF services to AI companies; RentAHuman provides physical-world task execution to AI agents directly.

**Business Model:** Platform commission on completed bounties (Built In, Mar 2026). $9.99/month optional subscription for verified worker accounts; worker listing is currently free (Built In, Mar 2026). Payments processed via cryptocurrency (stablecoins/Ethereum), Stripe, or platform credits (Built In, Mar 2026). The YC page reports $20,000 MRR achieved within 2 weeks of launch (YC page).

**TAM/SAM:**
- AI Agents Market: $7.84B in 2025, projected to $52.62B by 2030, CAGR 46.3% (MarketsandMarkets, 2024 via search snippet).
- Gig Economy Platforms Market: ~$36.7B in 2026, projected to $192.5B by 2035, CAGR ~20% (Business Research Insights, 2026 via search snippet).
- [Inferred]: RentAHuman's SAM sits at the intersection of these two markets -- physical tasks delegated by AI agents -- which is a nascent sub-segment with no independent sizing available.

**GTM / Distribution:** The MCP server integration enables AI agents (Claude, custom bots) to discover and hire humans programmatically (Gizmodo, Feb 2026). The platform launched virally on Feb 1, 2026 and received organic social media coverage reaching hundreds of millions of views (LinkedIn company page). [Inferred]: Primary distribution is bottom-up via AI developer adoption of the MCP server and API, supplemented by viral press coverage driving worker supply.

## Defensibility

- **Network effects:** Two-sided marketplace where more workers improve geographic coverage and task fulfillment for AI agents, and more AI agent demand attracts workers. As of March 2026, the platform had ~590,000 registered workers and ~70 connected AI agents (Built In, Mar 2026; Gizmodo, Feb 2026).
- **First-mover data:** Task completion data, worker reliability scores, and proof-of-presence verification data accumulate over time. 5,500+ jobs completed to date (Built In, Mar 2026).
- **Technical integration:** MCP server and REST API create switching costs for AI agents that integrate RentAHuman into their workflows (Gizmodo, Feb 2026).

**Market structure:** [Inferred]: Existing gig platforms (TaskRabbit/IKEA, Mechanical Turk/Amazon) are built around human requesters with established billing, labor compliance, and dispute resolution frameworks. Rebuilding these platforms to accept autonomous AI agents as first-class requesters with crypto-native escrow would require rearchitecting their payment stack and trust models, creating structural friction for incumbents.

**Commoditization risk:** The core technical components (MCP server, REST API, escrow system) are reproducible. Any gig platform could add an AI agent API layer. The primary barrier is assembling two-sided liquidity -- the worker base and agent integrations simultaneously.

## Market & Traction

**Traction signals:**
- 130 workers on Day 1 (Feb 1, 2026); 1,000 on Day 2; 145,000 on Day 3 (Built In, Mar 2026)
- ~70,000 signups and ~70 AI agents connected as of Feb 4, 2026 (Gizmodo, Feb 2026)
- ~590,000–600,000 registered workers as of ~Mar 11, 2026 (Built In, Mar 2026)
- 633,794 registered as of mid-March 2026 (Planet Today, Mar 2026)
- 700,000+ signups claimed (LinkedIn company page)
- $20,000 MRR within 2 weeks of launch (YC page)
- 4+ million platform visits (Built In, Mar 2026)
- 11,300 active bounties (Built In, Mar 2026)
- 5,500+ jobs completed (Built In, Mar 2026)
- Only 13% of registered users connected a crypto wallet (Gizmodo, Feb 2026)
- Only 83 visible browsable profiles despite 70K+ claimed registrations as of early February (Futurism, Feb 2026)
- Product Hunt: 111 upvotes, #13 Day Rank, 85 followers (Product Hunt)
- Press: Forbes, Wired, Business Insider, Futurism, Gizmodo, Built In, The Daily Star, 36kr, Gadget Review, and 30+ publications (YC page; LinkedIn)
- Social media: organically created videos/posts reached "hundreds of millions of views" (LinkedIn company page)
- LinkedIn company page: linkedin.com/company/rentahuman-ai; follower count not retrievable
- Twitter/X: founder account @AlexanderTw33ts; follower count not retrievable

**Competitive landscape:**

| Competitor | Key Differentiator vs. RentAHuman | Funding / Revenue |
|---|---|---|
| Amazon Mechanical Turk | Digital micro-tasks for human requesters; no AI agent API | Subsidiary of Amazon; revenue undisclosed |
| Scale AI | Enterprise data labeling & RLHF for AI companies; not a physical-task marketplace | $1.6B total raised, $25B valuation (2025 tender offer); ~$290M/yr revenue (Sacra) |
| Prolific | Academic research participant recruitment; digital-only | Previously raised $1.2M seed (TechCrunch, 2019); 200K+ active participants |
| TaskRabbit | Human-to-human local errand/handyman marketplace; no AI agent interface | Acquired by IKEA (2017) |

**Why now:** [Inferred]: The emergence of the Model Context Protocol (MCP) standard in late 2024–2025 created a standardized interface for AI agents to interact with external tools and services. Simultaneously, autonomous AI agents (Claude, GPT-based agents) gained the ability to hold multi-step goals and manage tasks programmatically. These two developments created the technical precondition for AI agents to autonomously commission physical-world work.

## Founders & Team

**Alexander Liteplo** -- Founder
- Age 26; BS Computer Science, University of British Columbia (2024) (Crunchbase; search results)
- Previously: Software Engineer at LayerZero Labs, Across Protocol, UMA Protocol (crypto/DeFi infrastructure) (Crunchbase; GitHub)
- Described as a "crypto software engineer" currently based in San Francisco (Gizmodo, Feb 2026)
- Conceived RentAHuman during travels in Japan, inspired by human-leasing services (search results)
- Twitter/X: @AlexanderTw33ts -- follower count not retrievable
- LinkedIn: Not found (direct profile not located; Crunchbase profile exists)
- GitHub: github.com/alexanderliteplo -- 33 public repos, 66 followers, 1 published MCP Server (GitHub)

**Patricia Tani** -- Co-founder
- Former art student, self-taught developer; attended University of British Columbia (search results; Built In, Mar 2026)
- Previously: Built and sunsetted Lemon AI startup; declined offer at Vercel (search results)
- LinkedIn: linkedin.com/in/patricia-tani -- listed role at Vercel, 500+ connections (LinkedIn)
- Twitter/X: No public account found
- GitHub: No public repos found

**Kumar Abhishek** -- listed as maker on Product Hunt (Product Hunt). Role unclear; no additional public profile data linking to RentAHuman found.

**Co-founder relationship:** Alexander Liteplo and Patricia Tani met while studying at the University of British Columbia (search results).

**Founder-market fit:** Liteplo's crypto/DeFi engineering background (LayerZero, UMA, Across) provides direct expertise for the crypto-native escrow and payment infrastructure. Tani's prior experience building and sunsetting Lemon AI provides startup iteration experience. Both are early-career builders without prior exits.

## Key Risks

**Supply-demand imbalance:** The platform reports a ~50:1 worker-to-bounty ratio (Built In, Mar 2026). 11,300 bounties vs. ~590,000 workers means the vast majority of workers have no available tasks. Many tasks are structured as competitions where only one worker is paid, leaving others' labor uncompensated (36kr, Feb 2026). Sustained worker disengagement could collapse the supply side.

**Metric reliability:** Early reporting noted 70,000+ claimed registrations but only 83 browsable profiles (Futurism, Feb 2026). The gap between claimed signups and verifiable engagement raises questions about the depth of user activation beyond initial registration.

**Crypto payment friction:** Only 13% of registered users connected a cryptocurrency wallet (Gizmodo, Feb 2026). Crypto-based payments create onboarding barriers for mainstream workers. The platform has added Stripe as an alternative (Built In, Mar 2026), but the primary payment infrastructure remains crypto-native.

**Regulatory exposure:** AI agents autonomously commissioning human labor raises unresolved questions about labor classification (employee vs. contractor), liability for AI-directed tasks, and compliance with local labor laws across jurisdictions. No regulatory framework currently governs AI-to-human employment relationships (36kr, Feb 2026).

**Trust and safety:** Agents can anonymously post tasks; workers cannot confirm the real identity of the AI employer. The platform lacks a formal dispute resolution mechanism, and cryptocurrency payments are irreversible (36kr, Feb 2026). Reported scams and payment errors have required manual intervention (Built In, Mar 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI Agents Market: $7.84B (2025) → $52.62B by 2030, CAGR 46.3% (MarketsandMarkets, 2024 via search snippet); Gig Economy Platforms: ~$36.7B (2026) → $192.5B by 2035 (Business Research Insights, 2026 via search snippet) |
| SAM | No public data found |
| Traction | 700K+ registered workers (LinkedIn company page); 5,500+ jobs completed (Built In, Mar 2026); 4M+ visits (Built In, Mar 2026); 11,300 active bounties (Built In, Mar 2026); ~70 AI agents connected (Gizmodo, Feb 2026) |
| Revenue Signal | $20,000 MRR within 2 weeks of launch (YC page); $9.99/mo verified subscription tier (Built In, Mar 2026); platform commission on bounties (Built In, Mar 2026) |
| Founders | Alexander Liteplo (Founder): UBC CS '24, ex-LayerZero/UMA/Across Protocol. Patricia Tani (Co-founder): UBC, ex-Lemon AI, declined Vercel offer. |
| Competitors | Amazon Mechanical Turk (Amazon subsidiary, revenue undisclosed, digital micro-tasks); Scale AI ($1.6B raised, ~$290M/yr revenue per Sacra, enterprise data labeling); Prolific ($1.2M seed per TechCrunch 2019, academic research); TaskRabbit (acquired by IKEA 2017, local errands) |
| Moat Signals | Two-sided marketplace with 700K+ workers and ~70 AI agents (YC page; Gizmodo, Feb 2026); MCP server integration creating agent switching costs (Gizmodo, Feb 2026) |
| Risk Factors | 50:1 worker-to-task imbalance (Built In, Mar 2026), crypto payment friction with 13% wallet connection rate (Gizmodo, Feb 2026), regulatory uncertainty around AI-directed labor |
| Founder Reach | Alexander Liteplo: Twitter @AlexanderTw33ts (count not retrievable), GitHub 66 followers (GitHub). Patricia Tani: LinkedIn 500+ connections (LinkedIn). |
| Distribution Signals | Product Hunt #13 Day Rank, 111 upvotes (Product Hunt); Forbes, Wired, Business Insider, 30+ publications (YC page); hundreds of millions of organic social media views (LinkedIn company page) |
| Emails | No public data found |
