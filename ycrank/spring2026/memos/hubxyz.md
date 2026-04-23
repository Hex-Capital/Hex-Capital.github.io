# Hub.xyz

> API for real-world training data.

| Field | Value |
|-------|-------|
| Website | http://hub.xyz |
| YC Page | https://www.ycombinator.com/companies/hubxyz |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 10 |
| Location | Palo Alto, CA, USA |
| Tags | Artificial Intelligence, Data Labeling, Big Data, AI |
| YC Partner | Harj Taggar |
| Emails | No public data found |

## The Idea

**Problem:** AI companies need fresh, multimodal, real-world training data — audio, video, images, rare language samples — that does not exist in static web scrapes like Common Crawl (AI Journal, Tim Sprecher op-ed, 2025). Existing data pipelines rely on centralized annotation workforces or stale crawled datasets, creating bottlenecks around data freshness, geographic coverage, and multimodal diversity (gen.xyz blog). The current alternatives include managed labeling services (Scale AI, Surge AI), software platforms (Labelbox), and crowdsourcing marketplaces (Toloka, Amazon MTurk).

**Approach:** Hub.xyz operates a two-sided platform: a global network of contributors runs a "Dataminer app" that shares idle internet bandwidth, which Hub transforms into AI-ready datasets across text, images, video, and audio (SwissBorg Alpha page). Contributors earn IQ Points (convertible to $HUB tokens at a future Token Generation Event) based on contribution quality (Bitget project page; Airdrop Alert). The platform includes a community-driven AI training component where participants reply to Hub AI Agent prompts on X/Twitter, earning IQ Points for responses that help train the agent (Hub.xyz X post, Nov 2024). Hub also runs an Ethereum-based smart contract layer handling compute requests, SLAs, and payment settlements alongside a decentralized P2P mesh network (Bitget project page).

**Differentiation:** Hub differs from Scale AI, Surge AI, and Toloka in distribution mechanism: rather than employing or contracting annotators, Hub uses crypto-token incentives to recruit a distributed contributor base that provides bandwidth and data passively via an app (SwissBorg Alpha page). Compared to Labelbox (a software platform), Hub is a full-stack data infrastructure provider. The crypto incentive layer (IQ Points, $HUB token, airdrop campaigns) distinguishes Hub from traditional data labeling companies and aligns it with DePIN (Decentralized Physical Infrastructure Network) models (Bitget project page).

**Business Model:** B2B revenue from AI companies purchasing datasets, with a percentage of B2B sales revenue directed to token buybacks and node contributor rewards (SwissBorg Alpha page). No public pricing page was accessible (website returned 403 at time of research). [Inferred]: Likely consumption-based pricing (per-dataset or per-query) given the API-first positioning and B2B focus.

**TAM/SAM:** The AI training dataset market was valued at $3.2B in 2025 and is projected to reach $16.3B by 2033 at a 22.6% CAGR (Grand View Research, 2026). The broader data collection and labeling market reached $4.89B in 2025 with projection to $17.1B by 2030 at 28.4% CAGR (herohunt.ai, 2026 via search snippet). [Inferred]: Hub's SAM would be the subset focused on real-time, multimodal data collection (as opposed to annotation-only or software-platform segments), but no public SAM estimate specific to this segment was found.

**GTM / Distribution:** Hub's primary distribution channel appears to be its crypto-incentivized contributor community. The company runs airdrop campaigns and an Ambassador program targeting 400+ creators by Q2 2025 (SwissBorg Alpha page). The sole job posting is for a "Founding Full Stack AI Engineer" in London/Remote at $70K-$100K with 0.30%-2.00% equity (YC Work at a Startup). [Inferred]: B2B sales to AI companies likely through direct outreach, with Jeff Kanai listed as Head of Sales (SwissBorg Alpha page).

## Defensibility

- **Network scale:** 500K+ contributors across 150+ countries and 100+ languages (Hub.xyz X post, Nov 2024; gen.xyz blog). Community contributed 10M+ replies to AI agent training prompts (Hub.xyz X post, Nov 2024).
- **Data diversity:** Contributors collect rare audio, language samples, and video that do not exist in common repositories (gen.xyz blog).
- **Crypto switching costs:** Contributors accumulate IQ Points redeemable for future $HUB tokens, creating retention through unrealized token value (Bitget project page).
- **Compliance framework:** GDPR and CCPA compliant with transparent consent workflows, full provenance, and audit trails (SwissBorg Alpha page).

[Inferred]: The network of 500K contributors is a potential data moat if the contributors actively collect unique, hard-to-replicate datasets. However, the extent to which these contributors provide high-value labeled data versus passively sharing bandwidth is unclear from public sources.

**Market structure:** Scale AI's acquisition by Meta (49% stake, June 2025) caused customer flight from OpenAI and Google (Wikipedia; multiple sources, 2025), fragmenting the incumbent market. [Inferred]: This disruption creates an opening for alternative data providers, but Hub's crypto-native model may limit enterprise adoption among traditional AI companies that prefer conventional vendor relationships.

**Commoditization risk:** Multiple well-funded competitors operate in overlapping segments. Toloka raised $72M (May 2025, SiliconANGLE) and operates 200K+ annotators. Surge AI generates $1.4B revenue bootstrapped (Latka, Aug 2025). Labelbox raised $189M (Tracxn). Raw web data collection is increasingly commoditized; Hub's differentiation depends on the quality and exclusivity of multimodal data from its contributor network.

## Market & Traction

**Traction signals:**
- 500K+ users on Hub AI Platform (Hub.xyz X post, Nov 2024)
- 10M+ community replies to AI agent prompts over six months (Hub.xyz X post, Nov 2024)
- Expected >7M active nodes by Q4 2025 (SwissBorg Alpha page, roadmap)
- $1.7M total funding raised; seed round led by SwissBorg (Pulse2, Oct 2025)
- Angel backers: Michael Heinrich (0G Labs co-founder), Nicolas Pouard (Ubisoft innovation VP), Patrick Colangelo (Nesa AI co-founder) (SwissBorg Alpha page)
- Twitter/X: @hubdotxyz — 321.4K followers; @hubxyz — 292.8K followers (X, Apr 2026)
- LinkedIn company page: follower count not retrievable
- 1 active job posting: Founding Full Stack AI Engineer (YC Work at a Startup)
- No Product Hunt listing found
- No Discord/Telegram community size data found
- No public revenue or ARR figures disclosed
- Website not accessible at time of research (HTTP 403)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Differentiator vs. Hub.xyz |
|---|---|---|---|
| Scale AI | $1.6B+ raised ($14.3B Meta investment, Jun 2025) (Wikipedia) | ~$2B revenue 2025 (Sacra) | Full-service managed labeling; 49% owned by Meta, causing customer flight |
| Surge AI | Bootstrapped; seeking $1B at $25B valuation (Bloomberg, Jul 2025) | $1.4B revenue (Latka, Aug 2025) | Expert annotator network; profitable without VC; conventional enterprise model |
| Toloka AI | $72M raised (SiliconANGLE, May 2025) | $26.4M revenue 2024 (CB Insights) | 200K+ annotator crowdsourcing marketplace; Bezos-backed |
| Labelbox | $189M raised (Tracxn) | ~$114.5M/yr (CompWorth) | Software platform for labeling workflow management; $1B+ valuation |

**Why now:**
- Meta's acquisition of 49% of Scale AI in June 2025 disrupted the market leader, with OpenAI and Google cutting ties (multiple sources, 2025). This created demand for alternative data providers.
- [Inferred]: The convergence of DePIN (Decentralized Physical Infrastructure) models and AI data demand creates a moment for crypto-incentivized data collection networks. The proliferation of multimodal AI models (requiring audio, video, and image data beyond text) increases demand for diverse, real-world training data that web scraping alone cannot supply.

## Founders & Team

**Armin Kiani (also known as Armin Zastra K.)** — Co-Founder & CEO
- CS graduate (YC page)
- LP at Q42 and Id4 Ventures (search snippet via RocketReach)
- Self-described: "Making AI training sexy with Hub.xyz. Early crypto, long agentic & robotics" (YC page)
- Twitter/X: @zastrahub — follower count not retrievable; also possibly @Armin__Kiani
- LinkedIn: ae.linkedin.com/in/armin-k-97ab4124b — headline: "co-founder Hub.xyz"
- GitHub: No confirmed public repos found

**Tim Sprecher** — Co-Founder & COO
- Began entrepreneurial career at 18, founding his first company (gen.xyz blog)
- Prior experience in growth operations at RevX (gen.xyz blog)
- Advisory work with community venture fund Q42 (gen.xyz blog)
- Named in "30 Global Founders to Watch" (Tracxn via search snippet)
- Twitter/X: @tim404x — follower count not retrievable
- LinkedIn: linkedin.com/in/tim-sprecher-2a705220a/ — headline: "Co-founder & CEO @ Hub.xyz"
- GitHub: No public repos found

**Léonie Nguyen** — Listed as co-founder on Tracxn; listed as Angel Backer on SwissBorg page
- Master of Engineering in Industrial Engineering, Université de Technologie de Troyes, France; dual Master's in Logistics and Management; Executive Certificates from U.S. institutions (Yahoo Finance, Vietnam News)
- Previously: Senior roles at Minh Thai ATV (serving Lacoste, Zara, The North Face, Adidas); Project Manager at GEODIS (Yahoo Finance)
- Chief Strategy Officer at Meey Group since Jan 2025; appointed CEO of Meey Group (Yahoo Finance, Vietnam News)
- Described as "Kaisar Network co-founder" on SwissBorg Alpha page
- Note: Not listed as a founder on the YC page, which names only Armin Kiani and Tim Sprecher.
- Twitter/X: No confirmed account found
- LinkedIn: linkedin.com/in/leonienguyen/
- GitHub: No public repos found

**Co-founder relationship:** Armin Kiani and Tim Sprecher both have connections to Q42 venture fund — Armin as an LP and Tim in an advisory role (gen.xyz blog; RocketReach via search snippet). No shared employer or university found in public sources.

**Founder-market fit:** Armin Kiani's background in crypto and AI interest and Tim Sprecher's growth operations experience at RevX align with building a crypto-incentivized data marketplace. Neither founder has documented deep technical AI/ML research credentials or prior exits in public sources. The team's crypto-native orientation (early crypto involvement, DePIN architecture, token economics) positions them for the web3-meets-AI intersection specifically.

**Other team members:** Jeff Kanai — Head of Sales (SwissBorg Alpha page).

## Key Risks

**Token/regulatory risk:** Hub.xyz uses IQ Points convertible to $HUB tokens and runs airdrop campaigns (Bitget project page; Airdrop Alert). Token-based incentive structures face evolving regulatory scrutiny, particularly under U.S. SEC enforcement actions against utility tokens that function as securities. The company is headquartered in Palo Alto (YC page), placing it within U.S. regulatory jurisdiction.

**Contributor quality vs. quantity ambiguity:** The 500K contributor count (Hub.xyz X post, Nov 2024) and 10M+ replies metric appear substantially driven by airdrop-farming incentives (users participating to earn future tokens). The portion of contributors generating commercially valuable, labeled multimodal datasets versus passively sharing bandwidth or farming airdrops is not publicly disclosed.

**Name and identity confusion:** The company website domain hub.xyz is a generic, high-value domain. Multiple unrelated entities use "Hub" branding. The founder "Armin Kiani" also appears as "Armin Zastra K." across sources, and "Léonie Nguyen" is inconsistently listed as co-founder vs. angel backer. This creates due diligence friction.

**Enterprise adoption barrier:** AI enterprise buyers (the B2B customer base) typically require conventional vendor relationships, SOC 2 compliance, and SLA guarantees. Hub's crypto-native model (token payments, decentralized P2P mesh, Ethereum smart contracts) may create friction with procurement teams at large AI companies accustomed to working with Scale AI or Surge AI. No enterprise customers are publicly named.

**Competitive intensity:** The AI training data market includes players with $189M-$15.9B in funding (Labelbox, Scale AI) and $1.4B in bootstrapped revenue (Surge AI). Hub's $1.7M in funding positions it at significant resource disadvantage against incumbents who already serve the same target customers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.2B in 2025, projected $16.3B by 2033, CAGR 22.6% (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | 500K users on Hub AI Platform (Hub.xyz X post, Nov 2024); 10M+ community replies (Hub.xyz X post, Nov 2024); 321.4K Twitter followers @hubdotxyz (X, Apr 2026) |
| Revenue Signal | No public data found |
| Founders | Armin Kiani (CEO): CS graduate, LP at Q42/Id4 Ventures. Tim Sprecher (COO): Growth ops at RevX, advisor Q42, "30 Global Founders to Watch." |
| Competitors | Scale AI ($1.6B+ raised, ~$2B rev, full-service managed labeling); Surge AI (bootstrapped, $1.4B rev, expert annotator network); Toloka ($72M raised, $26.4M rev 2024, crowdsource marketplace); Labelbox ($189M raised, ~$114.5M/yr rev, labeling software platform) |
| Moat Signals | 500K contributor network across 150+ countries (Hub.xyz X post, Nov 2024); crypto-token switching costs via IQ Points (Bitget project page) |
| Risk Factors | Token/regulatory exposure, contributor quality ambiguity, competitive intensity from well-funded incumbents |
| Founder Reach | Armin Kiani: Twitter @zastrahub (count not retrievable), LinkedIn present. Tim Sprecher: Twitter @tim404x (count not retrievable), LinkedIn present. Company: @hubdotxyz 321.4K followers (X, Apr 2026) |
| Distribution Signals | Airdrop campaigns and Ambassador program targeting 400+ creators (SwissBorg Alpha page); 1 active job posting (YC Work at a Startup); no Product Hunt listing found |
| Emails | No public data found |
