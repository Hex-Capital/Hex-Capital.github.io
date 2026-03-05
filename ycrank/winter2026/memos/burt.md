# Burt

> AI teammates for logistics

| Field | Value |
|-------|-------|
| Website | https://www.trainburt.com/ |
| YC Page | https://www.ycombinator.com/companies/burt |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Supply Chain and Logistics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Logistics, Supply Chain |
| YC Partner | Ankit Gupta |
| Emails | bobby@trainburt.com |

## The Idea

**Problem:** Freight brokers and forwarders operate on razor-thin margins in a relationship-driven business, yet most of their teams spend the majority of their day on manual, repetitive tasks — chasing proof-of-delivery (POD) documents, tracking shipments, validating invoices, and quoting loads (company website). The U.S. freight brokerage market is ~$19.5B (Mordor Intelligence, 2025 via search snippet), with thousands of small-to-midsize brokerages relying on email, phone calls, and spreadsheets for back-office operations. Existing TMS platforms (e.g., Tai TMS, McLeod, Aljex) handle workflow orchestration but do not autonomously execute repetitive tasks.

**Approach:** Burt helps freight brokers and forwarders build AI teammates that handle their repetitive, manual tasks — specifically POD chasing, shipment tracking, invoice validation, and load quoting — so teams can focus on customers, carriers, and growing the business (YC page, company website). The AI teammates "follow your specific processes" and "work within your existing systems" (company website), suggesting integration with incumbent TMS platforms rather than replacement.

**Differentiation:** Burt positions as "AI teammates" that execute tasks end-to-end within existing broker workflows, rather than offering a replacement TMS (e.g., Tai TMS) or a single-purpose tool. Compared to Lanesurf (YC W26), which focuses on voice AI for carrier rate negotiation and booking, Burt targets a broader set of back-office tasks beyond phone calls. Compared to Lighthouz AI (YC W26), which specializes in freight bill auditing and AP/AR automation, Burt covers a wider task surface including POD chasing and shipment tracking. Compared to HappyRobot ($62M raised; FreightWaves, Sep 2025 via search snippet), which deploys voice agents for large enterprise carriers and brokers like DHL and Werner, Burt appears to target the mid-market with a configurable AI teammate approach.

**Prior Product Note:** The YC page title references "Easily fine tune and deploy specialized models," suggesting Burt may have initially positioned as a general-purpose model fine-tuning platform before narrowing to logistics-specific AI teammates. The current website and all recent LinkedIn activity reference the logistics product exclusively.

**Business Model:** No pricing page is visible on the website. [Inferred]: Most likely monetization path is a SaaS subscription (per-seat or per-task-volume) charged to freight brokerages, given the B2B vertical software pattern and the relationship-driven nature of the customer base.

**TAM/SAM:** The U.S. freight brokerage market is estimated at $19.68B in 2025, growing at a CAGR of 7.44% to $28.17B by 2030 (Mordor Intelligence, 2025 via search snippet). The global digital freight brokerage market reached approximately $3.64B in 2025, growing at a CAGR of 29.2% (Expert Market Research, 2025 via search snippet). [Inferred]: Burt's SAM is the subset of this market spent on back-office labor and software tools at small-to-midsize brokerages; no public estimate specific to this software segment was found.

**GTM / Distribution:** The company website offers a Calendly link (cal.com/bobby-zhong/30min) as the primary CTA, indicating a founder-led sales motion. [Inferred]: Most likely distribution path is direct outbound sales to small-to-midsize freight brokerages, potentially leveraging YC network and logistics industry events.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) process-specific workflow data accumulated across broker customers, enabling better task automation over time; (2) deep integrations with incumbent TMS platforms creating switching costs; and (3) domain-specific fine-tuned models trained on logistics-specific communications and documents. None of these are proven at this stage.

**Market structure:** [Inferred]: Incumbent TMS providers (Tai TMS, McLeod, Aljex) are primarily workflow orchestration tools and may face business model cannibalization risk in building autonomous AI agents — their existing revenue model charges for seat licenses, while AI agents that replace seats could reduce seat count. However, large incumbents like project44 and FourKites focused on visibility, and newer entrants like HappyRobot are well-funded. No structural barrier identified at this stage.

**Commoditization risk:** The core technology (LLM-based task automation for logistics) is replicable. HappyRobot ($62M raised, $500M valuation; Upstarts Media, Sep 2025 via search snippet) is building similar capabilities at scale. Lanesurf (YC W26, backed by General Catalyst; YC page via search snippet) and Lighthouz AI (YC W26; YC page) are also in adjacent spaces. Parade ($36M raised; FreightWaves, 2024 via search snippet) has added AI-driven automation features. The barrier to entry is low for well-resourced teams with logistics domain knowledge.

## Market & Traction

1. **Traction signals:**
   - LinkedIn company page: 300 followers, 3 employees listed (LinkedIn company page, fetched Mar 2026)
   - LinkedIn listed employee count: 2-10, with Bobby Zhong and Aidan Chen visible (LinkedIn company page, fetched Mar 2026) — note: the YC page lists Kurt Sharma as co-founder, but the LinkedIn page shows Aidan Chen, suggesting possible team changes
   - Twitter/X: Bobby Zhong handle @bobbyzhong333 (YC page); Kurt Sharma handle @zerodaykurt (YC page); follower counts not retrievable
   - No Product Hunt launch found
   - No press coverage in named publications found
   - No public revenue, user count, or customer data found
   - No app store listings, Chrome extension, or Discord/Slack community found

2. **Competitive landscape:**

   | Competitor | Funding | Revenue/ARR | Key Differentiator vs. Burt |
   |-----------|---------|-------------|----------------------------|
   | **HappyRobot** (YC S23) | $62M total ($44M Series B led by Base10; FreightWaves, Sep 2025 via search snippet) | "Well into" eight figures (Upstarts Media, Sep 2025 via search snippet) | Enterprise-focused voice AI for large carriers (DHL, Werner, Schneider); significantly more scale and funding |
   | **Lanesurf** (YC W26) | Pre-Seed, backed by General Catalyst and Jawed Karim (YC page via search snippet) | Revenue unknown | Specialized in voice AI for carrier rate negotiation; handles "tens of thousands of carrier calls monthly" (YC page via search snippet) |
   | **Lighthouz AI** (YC W26) | ~$500K (Tracxn, 2025 via search snippet) | Revenue unknown | Focused on freight bill auditing and AP/AR automation; claims brokers invoice 36% faster (YC page via search snippet) |
   | **Parade** | $36M total ($17M from I Squared Capital; FreightWaves, 2024 via search snippet) | Revenue unknown; $40B+ in transactions processed (Parade website via search snippet) | Capacity management platform with AI-driven carrier matching and booking automation |
   | **Tai TMS** | Not publicly disclosed | Revenue unknown | Incumbent TMS with 500+ carrier integrations; 20+ years in market; email/document automation (Tai Software website via search snippet) |

3. **Why now:** [Inferred]: The convergence of several factors in 2024-2025 opened this opportunity: (a) LLM capabilities crossing the threshold for reliably parsing unstructured logistics communications (emails, PDFs, carrier check calls); (b) HappyRobot's rapid growth (10x revenue increase since Dec 2024 Series A; Upstarts Media, Sep 2025 via search snippet) validating market demand for AI agents in logistics; (c) freight market cyclical downturn pressuring brokerages to cut back-office costs, with industry analysts noting that more than 15% of spot-market truckloads in the U.S. will be automatically tendered and booked by 2026 (Supply Chain 24/7, 2025 via search snippet).

## Founders & Team

**Bobby Zhong** — Co-Founder & CEO
- BS Computer Science, UC Irvine (The Org, via search snippet)
- Previously: Engineer at Replo (YC S21), building coding agents and LLM tooling (YC page)
- Previously: Founding engineer (#2) at Pirros (YC W23), March 2024–March 2025 (The Org, via search snippet)
- Previously: Co-founder of Educado, a student support platform, Sep 2023–Apr 2024 (RocketReach, via search snippet)
- Previously: Co-founder of Moonwish Studios, web development agency (RocketReach, via search snippet)
- Previously: Software engineer intern at PipeIQ, summer 2023 (search snippet)
- Twitter/X: @bobbyzhong333 (YC page) — follower count not retrievable
- LinkedIn: linkedin.com/in/bobby-zhong — headline: "Burt (YC W26)" (LinkedIn, via search snippet)
- GitHub: github.com/bobbyzhong — 29 public repos, 12 followers (GitHub, fetched Mar 2026)

**Kurt Sharma (Kartavya Sharma)** — Co-Founder & CTO
- EECS, UC Berkeley (YC page; personal website kartavyas.com, fetched Mar 2026)
- Previously: Engineer at Replo (YC S21) (LinkedIn, via search snippet)
- Previously: Academic Intern, UC Berkeley EECS, Jun 2022–present (personal website, fetched Mar 2026)
- Previously: Backend Web Developer at Caltools, Jun–Aug 2021 (personal website)
- Previously: Founder/Developer of ROZE, a voice assistant for preventing distracted driving, Jun 2018–Nov 2020 (personal website)
- Twitter/X: @zerodaykurt (YC page); also @floatyvariable (personal website) — follower counts not retrievable
- LinkedIn: linkedin.com/in/kartavya-sharma — headline: "Engineering @ Replo" (LinkedIn, via search snippet)
- GitHub: github.com/KartavyaSharma — 46 public repos, 176 stars total, 19 followers (GitHub, fetched Mar 2026)

**Co-founder relationship:** Both Bobby Zhong and Kartavya Sharma worked at Replo (YC S21) as engineers. Bobby joined Replo in March 2025 (LinkedIn post, fetched Mar 2026), and Kartavya's LinkedIn lists him at Replo as well. This shared employer is the likely basis of the co-founder relationship.

**Founder-market fit:** Both founders have strong engineering backgrounds with LLM and AI agent experience from their time at Replo building coding agents. Bobby has experience as a founding engineer at an early-stage YC company (Pirros, YC W23). Neither founder has documented prior experience working in the freight or logistics industry directly. No advisors, board members, or notable investors beyond YC and the standard YC deal have been publicly identified.

## Key Risks

**Dominant well-funded competitor (HappyRobot):** HappyRobot (YC S23) has raised $62M, is valued at ~$500M, reports eight-figure revenue, and has signed enterprise customers including DHL, Werner, and Schneider (Upstarts Media, FreightWaves, Sep 2025 via search snippet). HappyRobot is building an AI workforce for logistics that directly overlaps with Burt's positioning. Burt would need to find a defensible niche or differentiated approach to compete against this level of resourcing.

**No demonstrated logistics domain expertise:** Neither founder has documented prior work experience in the freight brokerage or logistics industry (Phase 3 research findings). The founding team's strength is in engineering and LLM tooling, which may slow GTM in a relationship-driven, trust-intensive industry where domain credibility matters for sales.

**Product positioning ambiguity / pivot history:** The YC page title still references "Easily fine tune and deploy specialized models," while the current website and description focus on logistics AI teammates. This suggests a recent pivot. The breadth of task coverage (POD chasing, tracking, invoicing, quoting) is ambitious for a two-person team versus competitors specializing in narrower slices (Lanesurf on voice booking, Lighthouz on bill auditing).

**Crowded YC W26 cohort in same vertical:** At least two other YC W26 companies (Lanesurf, Lighthouz AI) target overlapping customer segments (freight brokers). This creates direct competition for mindshare among the same YC network and early-adopter pool.

**Brand disambiguation:** "Burt" is a common name shared by multiple companies including Burt Intelligence (ad-tech), Burt Corporation, and others. This creates search visibility and branding challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | U.S. freight brokerage market: $19.68B in 2025, CAGR 7.44% to $28.17B by 2030 (Mordor Intelligence, 2025 via search snippet). Global digital freight brokerage: $3.64B in 2025, CAGR 29.2% (Expert Market Research, 2025 via search snippet) |
| SAM | No public data found for the logistics back-office automation software sub-segment specifically |
| Traction | LinkedIn: 300 followers (LinkedIn, fetched Mar 2026). No other public traction data found |
| Revenue Signal | No public data found |
| Founders | Bobby Zhong (CEO): BS CS UCI, founding engineer at Pirros (YC W23), engineer at Replo (YC S21). Kurt Sharma (CTO): EECS UC Berkeley, engineer at Replo (YC S21), built ROZE voice assistant |
| Competitors | HappyRobot ($62M raised, eight-figure ARR, enterprise voice AI for logistics); Lanesurf (Pre-Seed, revenue unknown, voice AI for carrier rate negotiation); Lighthouz AI (~$500K raised, revenue unknown, freight bill auditing); Parade ($36M raised, revenue unknown, capacity management); Tai TMS (funding undisclosed, revenue unknown, incumbent TMS) |
| Moat Signals | No public data found |
| Risk Factors | Dominant well-funded competitor (HappyRobot at $62M/$500M valuation), no demonstrated logistics domain expertise, recent pivot from model fine-tuning platform |
| Founder Reach | Bobby Zhong: Twitter @bobbyzhong333 (count not retrievable), LinkedIn in/bobby-zhong, GitHub 29 repos/12 followers. Kurt Sharma: Twitter @zerodaykurt (count not retrievable), LinkedIn in/kartavya-sharma, GitHub 46 repos/176 stars |
| Distribution Signals | No public data found. Founder-led sales via Calendly booking link on website |
| Emails | bobby@trainburt.com |
