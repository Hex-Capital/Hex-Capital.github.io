# Hemlock

> Force + contact dynamics collected at scale for training physical AI.

| Field | Value |
|-------|-------|
| Website | https://hemlock.inc |
| YC Page | https://www.ycombinator.com/companies/hemlock |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/hemlock)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Hardware, Robotics |
| YC Partner | Nicolas Dessaigne ([Y Combinator](https://www.ycombinator.com/companies/hemlock)) |
| Emails | julian@hemlock.inc (Julian Olschwang, Founder/CEO, [Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)) |

## The Idea

- **Problem:** Robotics labs use first-person video to train manipulation models, but video alone omits grip force and contact timing needed for tasks such as handling fragile objects ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
- **Approach:** Hemlock outfits workers with first-person cameras and its wrist-worn Bracelet, then uses surface electromyography (EMG) from forearm muscles to estimate finger force and contact and annotate the video ([Hemlock](https://hemlock.inc/), [Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
- **Differentiation:** Hemlock pairs wrist EMG with first-person video, Preload adds tactile gloves to its EMG and video setup, and Axonnic uses a forearm sleeve and publishes live finger tracking through visual occlusion ([36Kr, Nov 2026](https://eu.36kr.com/en/p/4067487054484612), [Axonnic on YC](https://www.ycombinator.com/companies/axonnic)).
- **Business Model:** [Inferred]: Hemlock could license datasets or charge for task-specific collections, given its offer to share sample data and discuss buyers’ data needs ([Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), [Hemlock contact page](https://hemlock.inc/contact?interest=data)).
- **TAM/SAM:** Emergen Research estimates the broader global robot-training-data market at $1.31B in 2026 with 24.5% projected annual growth through 2035, without a separate estimate for force-annotated human demonstrations ([Emergen Research, Oct 2026](https://www.emergenresearch.com/industry-report/robot-training-data-market)).
- **GTM / Distribution:** Hemlock solicits direct inquiries and referrals from foundation-model teams, robotics data-operations teams, and companies automating force-sensitive tasks, and offers sample data by email ([Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), [Hemlock on LinkedIn](https://www.linkedin.com/company/hemlock-industries-inc)).

## Defensibility

- **Moat today:** Hemlock built a proprietary wearable and shows synchronized video with hand-pose, contact, and depth overlays ([Hemlock](https://hemlock.inc/), [Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
- **Future moat:** [Inferred]: A licensed library spanning workers, tools, and tasks could be costly to reproduce, with public evidence of collection scale and exclusivity limited to the samples and demonstrations Hemlock has released ([Hemlock](https://hemlock.inc/), [Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
- **Market structure:** No structural barrier identified at this stage ([Axonnic on YC](https://www.ycombinator.com/companies/axonnic), [Preload on YC](https://www.ycombinator.com/companies/preload)).
- **Commoditization risk:** Robotics labs can start from ForceBand’s published wrist-EMG design and code, which use per-user calibration to generate finger-force labels ([ForceBand paper, Jun 2026](https://arxiv.org/abs/2606.26093), [ForceBand GitHub](https://github.com/Bottle101/ForceBand)).

## Market & Traction

- **Traction signals:**
  - Company-reported π0.5 egg pick-and-place success rose from 10% to 100% when force data was added to the same nine minutes of demonstration video ([Hemlock on LinkedIn](https://www.linkedin.com/company/hemlock-industries-inc), [Olschwang’s X posts via mirror, Oct 26, 2026](https://xitter.gq/j_olschwang)).
  - Company-reported Gemini 4 Argon lightbulb-screwing success rose from 30% to 80% with Bracelet data, using just under six minutes of demonstrations ([Hemlock on LinkedIn](https://www.linkedin.com/company/hemlock-industries-inc), [Olschwang’s X posts via mirror, Oct 29, 2026](https://xitter.gq/j_olschwang)).
  - Second place at the YC G3 Product Showcase, per Hemlock ([Olschwang’s X posts via mirror, Oct 23, 2026](https://xitter.gq/j_olschwang)).
  - Public launch on Oct 27, 2026 and 80 Launch YC votes as of Nov 17, 2026 ([WERZ](https://werz.ai/), [Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
  - 455 company LinkedIn followers and zero open roles on YC as of Nov 17, 2026 ([Hemlock on LinkedIn](https://www.linkedin.com/company/hemlock-industries-inc), [YC Jobs](https://www.ycombinator.com/companies/hemlock/jobs)).
  - Launch coverage in Reveneau and a subsequent robotics-data feature in 36Kr ([Reveneau, Oct 2026](https://reveneau.com/ainews/hemlock-yc-fall-2026-emg-bracelet-force-data-pi05-gemini-argon), [36Kr, Nov 13, 2026](https://eu.36kr.com/en/p/4067487054484612)).
- **Competitors:**
  - **Axonnic** ($500K raised per [CB Insights, via search snippet](https://www.cbinsights.com/company/axonnic/financials), revenue unknown): Its forearm EMG sleeve captures hand pose and estimated force, and the company reports paid pilots for task-specific automation ([Axonnic on YC](https://www.ycombinator.com/companies/axonnic)).
  - **Preload** ($125K YC seed entry in Sep 2026 per [Dealroom](https://app.dealroom.co/companies/preload), total funding and revenue unknown): Its capture stack combines tactile gloves, EMG, and first-person video ([Preload on YC](https://www.ycombinator.com/companies/preload)).
  - **6thSense** ($660K raised per [Standout](https://standout.work/companies/db6d9918-2147-4590-987c-a2445423c194), Jul 2026 pre-seed per [VCinfo](https://vcinfo.io/companies/6thsense.dev), revenue unknown): Its wearable tactile rigs directly capture pressure and grip alongside depth and hand pose ([6thSense on YC](https://www.ycombinator.com/companies/6thsense)).
  - **Human Archive** ($8.2M raised, May 2026 seed co-led by nvp capital and Wing VC, revenue unknown): Its collection rigs synchronize stereo depth, tactile force, motion capture, and multiple camera views ([nvp capital funding announcement](https://nvpcap.com/blog/human-archive-announces-8-2m-raised-seed-round-co-led-by-nvp-capital/), [nvp capital investment note](https://nvpcap.com/blog/human-archive-physical-ai-training-data/)).
  - **MicroAGI** ($55M disclosed seed led by Hummingbird in Jul 2026, $100M annualized revenue run rate claimed in Oct 2026): Its Shift network captures first-person activity data, and its business also covers robot deployment ([Osborne Clarke](https://www.osborneclarke.com/news/osborne-clarke-advises-redalpine-germanys-largest-seed-funding-round-date-usd-55-million), [Humanoids Daily](https://www.humanoidsdaily.com/news/microagi-100-million-revenue-run-rate-six-months)).
- **Why now:** [Inferred]: Physical Intelligence’s December 2025 demonstration of transfer from first-person human video to robot policies, followed by FACT’s October 2026 force-aware co-training results, established a way to use human tactile demonstrations in policy training ([Physical Intelligence](https://www.pi.website/research/human_to_robot), [FACT preprint](https://arxiv.org/abs/2610.19155)).

## Founders & Team

- **Julian Olschwang (Founder/CEO):**
  - **Background:** Studied electrical and computer engineering at Carnegie Mellon before leaving, built generative models for robot data at UCLA’s Biomechatronics Laboratory, and received a 2024 Davidson Fellowship for an assistive sign-language glove ([YC founder profile](https://www.ycombinator.com/founders/julian-olschwang), [Davidson Institute](https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2024-fellows/2024-davidson-fellow-julian-olschwang/)).
  - **Twitter/X:** @j_olschwang, 234 followers as of Nov 17, 2026 ([YC founder profile](https://www.ycombinator.com/founders/julian-olschwang), [X profile mirror](https://xitter.gq/j_olschwang)).
  - **LinkedIn:** Profile lists “Hemlock (YC F26)” and shows 781 followers in the available snapshot, with the headline unavailable ([LinkedIn, via search snippet](https://www.linkedin.com/in/julian-olschwang)).
  - **GitHub:** No public repos found.
  - **Business email:** julian@hemlock.inc ([Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Olschwang’s prior wearable sensing and robot-data work covers both components of Hemlock’s product, and YC lists Nicolas Dessaigne as the assigned partner ([Davidson Institute](https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2024-fellows/2024-davidson-fellow-julian-olschwang/), [Y Combinator](https://www.ycombinator.com/companies/hemlock)).

## Key Risks

- **Force calibration:** [Inferred]: Worker-specific calibration could slow deployment and affect label consistency, as published ForceBand experiments use per-user calibration to estimate fingertip force from wrist EMG ([ForceBand paper, Jun 2026](https://arxiv.org/abs/2606.26093)).
- **Transfer to production tasks:** [Inferred]: Benefits may vary across tasks and robot hands, with Hemlock’s public comparisons covering egg placement and lightbulb screwing ([Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
- **Substitution:** [Inferred]: Labs can choose direct tactile capture when fingertip pressure measurements matter or build on published force-data collection methods ([6thSense on YC](https://www.ycombinator.com/companies/6thsense), [ForceBand GitHub](https://github.com/Bottle101/ForceBand)).
- **Name ambiguity:** Hemlock also appears in industrial searches for Hemlock Semiconductor, a Michigan polysilicon manufacturer, so the domain and YC profile distinguish the startup in funding and press records ([NIST](https://www.nist.gov/chips/hemlock-semiconductor-michigan-hemlock), [Y Combinator](https://www.ycombinator.com/companies/hemlock)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader robot-training-data market proxy of $1.31B globally in 2026, with 24.5% projected CAGR for 2026–2035 ([Emergen Research, Oct 2026](https://www.emergenresearch.com/industry-report/robot-training-data-market)) |
| SAM | No public data found |
| Traction | Company-reported egg placement success of 10% to 100% and lightbulb screwing success of 30% to 80% ([Hemlock on LinkedIn, Oct 2026](https://www.linkedin.com/company/hemlock-industries-inc)), second at YC G3 Product Showcase ([Olschwang’s X posts via mirror, Oct 23, 2026](https://xitter.gq/j_olschwang)) |
| Revenue Signal | No public data found |
| Founders | Julian Olschwang (Founder/CEO), Carnegie Mellon ECE, UCLA Biomechatronics Lab, Davidson Fellow ([YC founder profile](https://www.ycombinator.com/founders/julian-olschwang), [Davidson Institute](https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2024-fellows/2024-davidson-fellow-julian-olschwang/)) |
| Competitors | Axonnic ($500K raised, revenue unknown, EMG sleeve and factory pilots, [CB Insights via search snippet](https://www.cbinsights.com/company/axonnic/financials), [YC](https://www.ycombinator.com/companies/axonnic)), Preload ($125K documented seed entry, revenue unknown, tactile gloves plus EMG, [Dealroom](https://app.dealroom.co/companies/preload), [YC](https://www.ycombinator.com/companies/preload)), 6thSense ($660K reported raised, revenue unknown, direct tactile capture, [Standout](https://standout.work/companies/db6d9918-2147-4590-987c-a2445423c194), [YC](https://www.ycombinator.com/companies/6thsense)), Human Archive ($8.2M raised, revenue unknown, synchronized depth and tactile capture, [nvp capital](https://nvpcap.com/blog/human-archive-announces-8-2m-raised-seed-round-co-led-by-nvp-capital/), [YC](https://www.ycombinator.com/companies/human-archive)), MicroAGI ($55M disclosed seed, $100M claimed annualized revenue run rate, Shift collection network and robot deployment, [Osborne Clarke](https://www.osborneclarke.com/news/osborne-clarke-advises-redalpine-germanys-largest-seed-funding-round-date-usd-55-million), [Humanoids Daily](https://www.humanoidsdaily.com/news/microagi-100-million-revenue-run-rate-six-months)) |
| Moat Signals | Proprietary EMG Bracelet and synchronized video samples with contact, pose, and depth overlays ([Hemlock](https://hemlock.inc/)) |
| Risk Factors | User-specific calibration in published wrist-EMG research ([ForceBand](https://arxiv.org/abs/2606.26093)), task-limited public benchmarks ([Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)), direct tactile substitutes ([6thSense on YC](https://www.ycombinator.com/companies/6thsense)) |
| Founder Reach | Julian Olschwang, 234 X followers ([X profile mirror, Nov 17, 2026](https://xitter.gq/j_olschwang)), 781 LinkedIn followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/julian-olschwang)) |
| Distribution Signals | 455 company LinkedIn followers ([Hemlock on LinkedIn, Nov 17, 2026](https://www.linkedin.com/company/hemlock-industries-inc)), 80 Launch YC votes ([Launch YC, Nov 17, 2026](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)), coverage in 36Kr ([36Kr, Nov 13, 2026](https://eu.36kr.com/en/p/4067487054484612)) |
| Emails | julian@hemlock.inc (Julian Olschwang, Founder/CEO, [Launch YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)) |
