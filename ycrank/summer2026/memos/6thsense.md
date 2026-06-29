# 6thSense

> A nervous system for physical AI

| Field | Value |
|-------|-------|
| Website | https://6thsense.dev |
| YC Page | https://www.ycombinator.com/companies/6thsense |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 0 (4 founders listed on YC page) |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Robotics, Data Engineering |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

- **Problem:** Robot learning teams pursuing dexterous manipulation face datasets that "miss touch timing, pressure trends, and subtle adjustments," with standalone sensors and recording scripts failing calibration, synchronization, and dataset reliability requirements (6thsense.dev, 2026).
- **Approach:** 6thSense integrates hardware, synchronization, calibration, and data packaging into one stack capturing eight aligned modalities — tactile/pressure, egocentric RGB, RGB-D depth, hand pose, IMU/motion, secondary cameras, labeled commentary, and success/failure tags (6thsense.dev, 2026).
- **Differentiation:** Vs. Human Archive (gig-worker headsets, RGB-D + tactile gloves, India-based collection — TechCrunch, May 2026): 6thSense emphasizes integrated calibration/QC and a tighter eight-modality synchronized stack; vs. AGIBOT G2 open-source pipeline (Robot Report, 2026) and Genesis AI's proprietary tactile glove (Robot Report, 2026): 6thSense sells custom dataset services rather than open-sourcing or vertically integrating into a foundation model.
- **Business Model:** [Inferred]: Per-engagement custom dataset contracts to robot learning teams, given the site frames the offering as "high-value datasets, not multi-month setup and QC work for each collection effort" (6thsense.dev, 2026); no pricing page is published.
- **TAM/SAM:** Humanoid robot market sized at USD 6.24B–10.69B in 2026 (Fortune Business Insights; Future Market Insights, 2026); no public TAM/SAM data found for the tactile/egocentric robot-training-data segment specifically.
- **GTM / Distribution:** [Inferred]: Direct sales to robotics labs and frontier-AI foundation-model teams working on dexterous manipulation, based on the site's targeting of "robot learning teams" for contact-rich tasks (6thsense.dev, 2026); no public GTM data found.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond the integrated multimodal capture stack described on 6thsense.dev (2026); no IP, contracts, or exclusivity disclosed.
- **Future moat:** [Inferred]: Proprietary calibrated tactile + egocentric corpus could accrue switching costs if customers fine-tune on 6thSense schemas; unproven because no customer count, dataset hours, or repeat-purchase data is public.
- **Market structure:** [Inferred]: Vertically integrated foundation-model labs such as Physical Intelligence and Genesis AI have economic incentive to keep data collection in-house (Robot Report, 2026; TechCrunch, Mar 2026), limiting incumbent-substitution but also shrinking the addressable buyer set.
- **Commoditization risk:** Replicable by adjacent data-services entrants — Human Archive (YC-backed, $8.2M seed, May 2026 — TechCrunch) and AGIBOT (open-source G2 pipeline — Robot Report, 2026) demonstrate that capture rigs and pipelines are being built by multiple teams concurrently.

## Market & Traction

- **Traction signals:**
  - No public revenue, customer, or user counts found.
  - No press coverage found in named publications.
  - No Product Hunt, GitHub, Discord, or Slack presence identified.
  - Twitter/X, LinkedIn company page follower counts: not retrievable.
  - YC jobs page: hiring flag is False (YC company data, 2026).
- **Competitors:**
  - Human Archive ($8.2M seed from Wing VC, NVP, YC, and angels from OpenAI/Nvidia/Google — Pulse2, May 2026; revenue unknown): also targets tactile + egocentric data, uses gig workers and >1,000 deployed headsets vs. 6thSense's integrated capture stack (TechCrunch, May 2026).
  - Physical Intelligence (~$1.07B raised; in talks for $1B at >$11B valuation — TechCrunch, Mar 2026; revenue unknown): vertically integrated foundation-model lab (pi-0.5, 3B params) that collects its own data rather than buying datasets (Robot Report, 2026).
  - Genesis AI (funding undisclosed; revenue unknown): proprietary tactile-sensing glove with 1:1:1 glove–hand–robot mapping and in-house dataset generation (Robot Report, 2026).
  - AGIBOT (revenue unknown; raised funding undisclosed in available sources): open-sourced G2 multi-modal dataset (RGB-D, tactile, lidar, IMU) — competes by giving similar modalities away free (Robot Report, 2026).
  - Linkerbot (~$217M raised — RAISE Summit, 2026; revenue unknown): hardware-first dexterous-hand manufacturer rather than dataset vendor; adjacent rather than direct.
- **Why now:** [Inferred]: Frontier robotics labs publicly state that "the next performance gains come from better multimodal demonstrations, not model scale alone" (6thsense.dev, 2026), and Human Archive's May 2026 funding plus Physical Intelligence's $11B March-2026 round indicate capital is flowing into physical-AI data infrastructure within the last 12 months (TechCrunch, May & Mar 2026).

## Founders & Team

- **James Baek (Co-Founder & CEO):**
  - Background: Listed as CEO on YC page (ycombinator.com/companies/6thsense, 2026); no public education, prior-employer, or domain-expertise records were retrievable in searches.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile confirmed for this James Baek (multiple unrelated namesakes returned in search).
  - GitHub: No public repos found tied to this individual.
- **Ronak Agarwal (Founder):**
  - Background: Listed as founder on YC page (ycombinator.com/companies/6thsense, 2026); GitHub handle @ronak-agarwal exists in search results but cannot be confirmed as this Ronak Agarwal; no other public records confirmed.
  - Twitter/X: No public account confirmed.
  - LinkedIn: No public profile confirmed (multiple unrelated namesakes returned).
  - GitHub: @ronak-agarwal exists per search results (github.com), confirmation to this founder not retrievable; star count not retrievable.
- **Alex Hyungwoo Noh (Founder):**
  - Background: Listed as founder on YC page (ycombinator.com/companies/6thsense, 2026); a "Hyungwoo Noh" LinkedIn profile (Chicago, IL) surfaced but cannot be confirmed as the same individual.
  - Twitter/X: No public account found.
  - LinkedIn: "Hyungwoo Noh – Chicago, Illinois" (linkedin.com/in/hyungwoonoh/) — identity match not confirmed.
  - GitHub: No public repos found.
- **Matt Wulff (Founder):** Listed as founder on YC page (ycombinator.com/companies/6thsense, 2026); multiple Matt Wulff LinkedIn profiles surfaced (including one at Tesla/Skygauge) but none confirmed as the 6thSense founder; Twitter, GitHub: no public data found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: No verifiable public background data on the four founders was retrievable, so prior robotics/tactile-sensing credentials cannot be confirmed; no advisors, board members, or named investors beyond YC found.

## Key Risks

- **Buyer concentration / vertical integration by customers:** Physical Intelligence raised ~$1.07B to date and operates in-house data collection (TechCrunch, Mar 2026); Genesis AI built proprietary tactile gloves (Robot Report, 2026), meaning the largest potential customers may build rather than buy, shrinking 6thSense's addressable market. No mitigation disclosed.
- **Direct YC-backed competitor with capital lead:** Human Archive (YC + Wing VC + NVP, $8.2M seed, May 2026 — Pulse2) is pursuing the same tactile + egocentric data thesis with >1,000 deployed headsets already (TechCrunch, May 2026); 6thSense has no public funding or deployment numbers to counterweight.
- **Commoditization via open-source datasets:** AGIBOT World 2026 dataset is open-sourced with overlapping modalities (RGB-D, tactile, IMU — Robot Report, 2026), which can erode willingness to pay for commercial multimodal datasets.
- **Founder verifiability gap:** Four founders are listed on the YC page but none of their backgrounds (education, prior roles, publications) are confirmable in public search (YC page, 2026; web searches), creating diligence risk that domain expertise in tactile sensing or robotics has not been independently validated.
- **Technical feasibility — eight-modality calibration at scale:** The product hinges on per-channel calibration, drift documentation, and synchronization across eight modalities (6thsense.dev, 2026); no third-party benchmark, customer reference, or technical publication is public to validate that the stack delivers the claimed reliability.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Humanoid robot market USD 6.24B (Fortune Business Insights, 2026) to USD 10.69B (Future Market Insights, 2026) for 2026 |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | James Baek (Co-Founder & CEO); Ronak Agarwal (Founder); Alex Hyungwoo Noh (Founder); Matt Wulff (Founder) — backgrounds not publicly verifiable (YC page, 2026) |
| Competitors | Human Archive ($8.2M seed, Wing/NVP/YC, revenue unknown, gig-worker egocentric data collection — Pulse2/TechCrunch May 2026); Physical Intelligence (~$1.07B raised, ~$11B valuation in talks, revenue unknown, vertically integrated foundation model — TechCrunch Mar 2026); Genesis AI (funding undisclosed, revenue unknown, proprietary tactile glove + GENE-26.5 model — Robot Report 2026); AGIBOT (funding undisclosed, revenue unknown, open-source G2 multi-modal dataset — Robot Report 2026); Linkerbot (~$217M raised, revenue unknown, dexterous-hand hardware — RAISE Summit 2026) |
| Moat Signals | No public data found |
| Risk Factors | Vertical integration by frontier-AI buyers, direct YC-backed competitor (Human Archive) with capital lead, open-source dataset commoditization |
| Founder Reach | James Baek: No public data found. Ronak Agarwal: GitHub @ronak-agarwal exists (identity unconfirmed); other channels — no public data found. Alex Hyungwoo Noh: LinkedIn /in/hyungwoonoh/ surfaced (identity unconfirmed); other channels — no public data found. Matt Wulff: No public data found |
| Distribution Signals | No public data found |
| Emails | No public data found |

Sources:
- [6thSense | Tactile Egocentric Datasets for Robotics](https://6thsense.dev/)
- [6thSense YC Company Page](https://www.ycombinator.com/companies/6thsense)
- [Human Archive raises $8.2M (TechCrunch, May 2026)](https://techcrunch.com/2026/05/26/human-archive-taps-into-indias-services-startups-to-collect-data-for-physical-ai/)
- [Human Archive $8.2M Raised (Pulse2)](https://pulse2.com/human-archive-8-2-million-raised-to-build-training-data-infrastructure-for-physical-ai/amp/)
- [Physical Intelligence in talks to raise $1B (TechCrunch, Mar 2026)](https://techcrunch.com/2026/03/27/physical-intelligence-is-reportedly-in-talks-to-raise-1-billion-again/)
- [Genesis AI GENE-26.5 (Robot Report)](https://www.therobotreport.com/genesis-ai-introduces-gene-foundation-model-more-dexterous-manipulation/)
- [AGIBOT World 2026 Dataset (Robot Report)](https://www.therobotreport.com/agibot-world-2026-dataset-open-source-accelerate-embodied-ai-development/)
- [Humanoid Robot Market (Fortune Business Insights)](https://www.fortunebusinessinsights.com/humanoid-robots-market-110188)
- [Humanoid Robot Market (Future Market Insights)](https://www.futuremarketinsights.com/reports/humanoid-robot-market)
- [20 Physical AI Companies to Watch (RAISE Summit)](https://www.raisesummit.com/post/20-physical-ai-companies-to-watch-in-2026)
