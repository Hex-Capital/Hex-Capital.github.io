# Asimov

> Internet-scale marketplace for robot training data

| Field | Value |
|-------|-------|
| Website | https://tryasimov.ai/ |
| YC Page | https://www.ycombinator.com/companies/asimov |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Supply Chain and Logistics |
| Team Size | 3 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Robotics, Data Labeling, AI |

## The Idea

**Problem:** Frontier robotics labs building humanoid robots and embodied AI systems face a severe training data bottleneck. Language models scaled by ingesting internet text; vision models scaled via billions of web images. Robotics has no equivalent internet-scale data source. Current approaches rely on teleoperation in controlled lab environments, producing limited variety and volume. Meanwhile, 8 billion people generate hours of real-world physical activity daily, none of which is systematically captured for robot training (tryasimov.ai). Quality robot video data commands $100–$500 per hour depending on complexity, and demand is growing rapidly as companies like Tesla (Optimus), Figure AI, and Physical Intelligence scale humanoid programs (Quasa.io, 2026).

**Approach:** Asimov deploys lightweight headband cameras to a distributed network of 5,000+ contributors in households, restaurants, hotels, and factories (YC company page). Contributors wear the device during daily activities and are paid $20/hr base, rising to $30/hr after 5 hours of collected data (tryasimov.ai; Ecosistema Startup). The company handles end-to-end pipeline: hardware distribution, data collection, quality assurance, and post-processing. Output is clean, annotated datasets with egocentric video, 3D body pose, depth maps, semantic labels, and activity segmentation — delivered ready for robot training (tryasimov.ai). Data is collected across 3 continents (tryasimov.ai). Privacy protections include no audio capture, automatic face blurring, and PII removal (tryasimov.ai).

**Differentiation:** Compared to Sensei (YC S24), which uses a $300 sensorized exoskeleton arm for teleoperation data and focuses on robot manipulation demonstrations, Asimov collects organic egocentric human activity data from everyday environments — capturing how humans naturally interact with physical spaces rather than scripted robot demonstrations (YC company pages for both). Compared to Cortex AI (YC F25), which operates a similar workplace data marketplace, Asimov's contributor network (5,000+) appears larger, and its approach emphasizes household and consumer environments in addition to workplaces (YC company pages for both). Compared to Scale AI's Physical AI division, which collects data through contractors and an SF R&D lab (Scale AI blog, 2025), Asimov's distributed headband model is lower-cost per contributor and captures more diverse, organic human behavior rather than staged demonstrations.

**Business Model:** Asimov operates as a data marketplace supplying frontier robotics labs. The company charges robotics customers for annotated datasets. For businesses hosting data collection, Asimov offers revenue sharing and covers worker salaries during recording (tryasimov.ai). Contributor compensation is $20–$30/hr (tryasimov.ai; YC job listing). No public pricing page for data customers was found. [Inferred]: Revenue model is likely per-hour or per-dataset pricing to robotics labs, with margins between contributor costs ($20–$30/hr) and data sale prices (market rate $100–$500/hr per Quasa.io estimates).

**TAM/SAM:** The global Embodied AI Data market was valued at $753 million in 2024 and is projected to reach $6.75 billion by 2031 at a 36.8% CAGR (QY Research, 2025 via search snippet). The broader embodied AI market is estimated at $4.44 billion in 2025 and projected to reach $23.06 billion by 2030 at a 39.0% CAGR (MarketsandMarkets, 2025 via search snippet). The AI training dataset market overall was $3.2 billion in 2025, projected to reach $16.3 billion by 2033 at 22.6% CAGR (Grand View Research, 2025 via search snippet).

**GTM / Distribution:** The company is hiring Data Collection Specialists at $20–$30/hr (remote, open to new grads) through its YC job listing, indicating active scaling of its contributor network. The company describes its customers as "frontier robotics labs" (YC company page). [Inferred]: Most likely distribution path is direct sales to well-funded robotics companies (e.g., Figure AI, Physical Intelligence, 1X Technologies) that have raised hundreds of millions and need large-scale training data. YC network provides warm introductions to robotics-focused portfolio companies and their investors.

## Defensibility

**Data network effects:** Asimov's 5,000+ contributor network across 3 continents represents an early data supply-side advantage (YC company page, tryasimov.ai). As more data is collected from diverse environments and geographies, the dataset becomes more valuable to robotics customers who need variety in training data. Each new contributor adds marginal diversity (different homes, kitchens, workplaces, body types, cultural contexts), which in theory makes the dataset harder to replicate.

**Market structure:** Scale AI ($29B valuation, $870M 2024 revenue per Sacra) has entered physical AI data collection (Scale AI blog, 2025). However, Scale's primary business and revenue engine remains LLM data labeling, and its robotics data operation uses contractors in an SF R&D lab and collection partners rather than a distributed consumer headband model. [Inferred]: Scale's cost structure is optimized for high-touch enterprise data operations, not the high-volume, low-cost distributed collection model Asimov uses. However, no structural barrier prevents Scale from replicating this approach if the market proves large enough.

**Commoditization risk:** Multiple YC-backed startups (Cortex AI F25, Sensei S24) are pursuing adjacent approaches to robotics training data. The headband-based collection hardware does not appear to involve proprietary technology that is difficult to replicate. The key differentiator is the size and geographic diversity of the contributor network, which takes time but not deep technical moats to build. Scale AI's entry into the space with vastly greater resources represents a direct competitive threat.

## Market & Traction

**Traction signals:**
- 5,000+ contributors in the network (YC company page, accessed Feb 2026)
- Collecting data across 3 continents (tryasimov.ai, accessed Feb 2026)
- Supplying "frontier robotics labs" with "thousands of hours" of data (YC company page)
- 1 active job listing: Data Collection Specialist, $20–$30/hr, remote (YC jobs page, accessed Feb 2026)
- Company Twitter/X: @tryasimov (YC page); follower count not retrievable
- Founder Twitter/X: @lyemningthou (YC page); follower count not retrievable
- Company LinkedIn: listed as "tryasimov" (YC page); no dedicated page confirmed distinct from the synthetic biology company Asimov
- No Product Hunt launch found
- No app store presence found
- No Discord/Slack community found

**Competitive landscape:**

| Competitor | Key Differentiator vs. Asimov | Funding | Revenue/ARR |
|---|---|---|---|
| **Scale AI (Physical AI division)** | Incumbent data labeling giant ($29B valuation) that entered physical AI in 2025; operates SF R&D lab + global contractor network; serves Physical Intelligence, Generalist AI, Cobot | $1.6B total raised (multiple sources via search snippet) | $870M in 2024, projected ~$2B in 2025 (Sacra via search snippet) |
| **Cortex AI (YC F25)** | Focuses on workplace robot + egocentric data; marketplace where workplaces host collection sessions; founded by Lucas Ngoo (ex-Carousell co-founder, $1B+ exit) | $500K (Extruct AI via search snippet) | No public data found |
| **Sensei (YC S24)** | Uses proprietary $300 sensorized exoskeleton arm for teleoperation data (vs. $40K+ standard setups); MIT-founded; focuses on robot manipulation demonstrations rather than organic human activity | No public amount found beyond YC standard deal | No public data found |

**Why now:** VCs invested $7.2B in robotics in 2025, up from $3.1B in 2023 (search snippet, source unspecified). Figure AI reached a $39B valuation with a $1B Series C in September 2025 (Quasa.io, 2026). Scale AI launched its Physical AI data collection platform in 2025 (Scale AI blog). China's government funded 40 training centers to address robotics data shortages (Rest of World, 2026). [Inferred]: The convergence of massive robotics funding, multiple humanoid robot programs approaching deployment readiness (Tesla Optimus, Figure, 1X, Apptronik), and the demonstrated data bottleneck for embodied AI created a specific window for dedicated robotics data collection platforms. The transition from "cool demos" to production deployments in 2025 shifted data from a nice-to-have to a critical infrastructure need.

## Founders & Team

**Lyem Ningthou** — Founder
- BS Computer Science, University of California, Berkeley (2022–2026) (LinkedIn via search snippet; MSU/USDA article)
- Prior roles: Software Engineer at FLIP; previously at Blume (YC W24), USDA, Numerator, Aisle (LinkedIn via search snippet; RocketReach via search snippet)
- Participated in MSU/USDA Graduate Summer Research Experience program focused on AI/ML, receiving NSF-funded ~2,000 GPU hours for AI research (MSU newsroom, 2023)
- As an eighth grader at Mississippi School for Mathematics and Science, co-developed "Go Bus," a GPS bus tracking system winning first place in the Oktibbeha County Innovation Challenge (MSU Center for Entrepreneurship)
- Has a Hugging Face profile (huggingface.co/Lyem)
- Described on YC as "Defense tech robotics researcher → building the data layer for humanoid robotics" (YC company page)
- Twitter/X: @lyemningthou (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/lyem-ningthou-5a09a4239 — CS @ UC Berkeley, 500+ connections (LinkedIn via search snippet)
- GitHub: No confirmed public repos attributable to this founder (a "Lyem" GitHub account exists but is located in Brazil and likely a different person)

The YC page lists only Lyem Ningthou as a founder, though the team size is listed as 3. No other team members were identified in public sources.

**Co-founder relationship:** Only one founder is listed publicly. No public data on co-founder history.

**Founder-market fit:** Lyem Ningthou's background combines computer science training at UC Berkeley with prior experience at multiple startups including Blume (a YC W24 company), exposure to defense tech robotics research, and NSF-funded AI/ML research with significant GPU allocations. His experience at FLIP and multiple prior companies demonstrates startup familiarity, and his YC profile specifically references defense tech robotics research as his domain focus.

## Key Risks

**Brand disambiguation with Asimov (synthetic biology):** A well-established company named Asimov (asimov.com), founded in 2017 in Boston, operates in synthetic biology with $200M+ in funding and 7,729 LinkedIn followers (various sources via search snippet). The shared name creates confusion in search results, LinkedIn presence, and investor/customer discovery. The tryasimov.ai domain partially mitigates this but does not resolve the underlying brand conflict.

**Scale AI competitive entry:** Scale AI ($29B valuation, $1.6B raised, $870M 2024 revenue) launched its Physical AI data collection platform in 2025 and already serves leading robotics labs including Physical Intelligence and Generalist AI (Scale AI blog, 2025). Scale has established enterprise sales relationships, massive contractor networks, and resources to subsidize data collection pricing. Asimov must win and retain customers against this well-resourced incumbent.

**Contributor unit economics and quality control:** At $20–$30/hr contributor pay, with data needing annotation (3D body pose, depth maps, semantic labels, activity segmentation), the cost of producing finished datasets may compress margins significantly. Quality control across 5,000+ distributed contributors wearing headband cameras during unscripted daily activities presents challenges in data consistency and usability that grow with scale.

**Customer concentration in a nascent market:** The number of "frontier robotics labs" with both the technical capability to use egocentric training data and the budget to purchase it at scale is currently small. A handful of well-funded companies (Figure, Physical Intelligence, 1X, Tesla) represent the bulk of potential demand, creating concentration risk.

**Solo founder with team of 3 managing hardware logistics globally:** Deploying, maintaining, and supporting physical hardware across 5,000+ contributors on 3 continents introduces operational complexity in shipping, quality control, and contributor management that typically requires larger teams.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.75B embodied AI data market by 2031 at 36.8% CAGR (QY Research, 2025 via search snippet); $23.06B broader embodied AI market by 2030 at 39% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 5,000+ contributors (YC company page, Feb 2026); collecting across 3 continents (tryasimov.ai, Feb 2026); "thousands of hours" of data supplied to frontier robotics labs (YC company page) |
| Revenue Signal | No public data found. Contributor cost: $20–$30/hr (tryasimov.ai; YC job listing). No customer pricing disclosed. |
| Founders | Lyem Ningthou (Founder): UC Berkeley CS, ex-FLIP, ex-Blume (YC W24), defense tech robotics researcher |
| Competitors | Scale AI Physical AI ($1.6B raised, $870M 2024 revenue, incumbent entering robotics data); Cortex AI ($500K raised, revenue unknown, workplace-focused marketplace, ex-Carousell founder); Sensei (YC S24 funding, revenue unknown, $300 exoskeleton teleoperation hardware) |
| Moat Signals | 5,000+ contributor network across 3 continents; dataset diversity from organic household/workplace environments vs. lab-scripted data |
| Risk Factors | Brand disambiguation with Asimov synthetic biology co., Scale AI competitive entry, contributor unit economics at scale |
| Founder Reach | Lyem Ningthou: Twitter @lyemningthou (count not retrievable), LinkedIn 500+ connections, GitHub not confirmed |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no community channels identified) |
