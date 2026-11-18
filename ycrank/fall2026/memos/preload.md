# Preload

> Multisensory systems (EMG+tactile+video) for training physical AI

| Field | Value |
|-------|-------|
| Website | https://preload.ai |
| YC Page | https://www.ycombinator.com/companies/preload |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/preload)) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Neurotechnology, Robotics, Robotic Surgery, B2B, AI |
| YC Partner | David Lieb ([Y Combinator](https://www.ycombinator.com/companies/preload)) |
| Emails | surya@preload.ai — Surya Pandiaraju, robotics data inquiries ([launch post reproduced by Digg](https://digg.com/ai/3dqrswvp)); tony@preload.ai — Runming Wang, robotics data inquiries ([Wang’s LinkedIn post via search snippet](https://www.linkedin.com/in/christinezhwei)) |

## The Idea

- **Problem:** Robotics teams training dexterous manipulation policies rely on first-person video, which leaves contact pressure and muscle effort unmeasured in tasks such as gripping and knot tying ([Preload on YC Jobs](https://www.ycombinator.com/companies/preload/jobs)).
- **Approach:** Preload synchronizes video from a head-mounted camera, contact readings from a tactile glove, and muscle activation from forearm electromyography (EMG) to create human demonstration data for robot training ([Preload launch video](https://launchscene.app/v/preload-preload-launch?play=1&s=2), [Preload on YC Jobs](https://www.ycombinator.com/companies/preload/jobs)).
- **Differentiation:** Preload explicitly captures forearm EMG, while Human Archive’s published stack emphasizes stereo depth and body motion, and 6thSense’s emphasizes pressure, contact, and 3D hand pose ([Preload](https://www.ycombinator.com/companies/preload), [Human Archive](https://www.ycombinator.com/companies/human-archive), [6thSense](https://www.ycombinator.com/companies/6thsense)).
- **Business Model:** [Inferred]: Paid custom data collection and integration could monetize the end-to-end service offered in the launch post ([Pandiaraju launch post reproduced by Digg](https://digg.com/ai/3dqrswvp); Website not accessible at time of research).
- **TAM/SAM:** Meticulous Research estimates the broader third-party egocentric robot-training-data market at $200M–$400M in 2026 and projects 40% compound annual growth through 2034 ([Meticulous Research, 2026](https://www.meticulousresearch.com/meticulous-next/egocentric-robot-training-data-outlook-2026-2034)).
- **GTM / Distribution:** Pandiaraju’s launch post solicits robotics teams directly and offers to collect data and help integrate it into model training ([Pandiaraju launch post reproduced by Digg, Oct 2026](https://digg.com/ai/3dqrswvp)).

## Defensibility

- **Moat today:** Preload has demonstrated a synchronized capture rig and reported preliminary separation of light and heavy handling effort using EMG ([Preload launch video](https://launchscene.app/v/preload-preload-launch?play=1&s=2), [Pandiaraju on X via Nitter, Nov 2026](https://nitter.cf/suryapandiaraju)).
- **Future moat:** [Inferred]: A proprietary library of synchronized recordings could become harder to replicate if it covers repeatable tasks across operators and improves robot performance, with public evidence currently limited to a demo and a preliminary effort-estimation test ([Preload launch video](https://launchscene.app/v/preload-preload-launch?play=1&s=2), [Pandiaraju on X via Nitter, Nov 2026](https://nitter.cf/suryapandiaraju)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Mecka already designs and synchronizes its own multisensor hardware, and Human Archive publishes aligned video, depth, touch, and motion data ([Mecka](https://www.mecka.ai/news/series-b), [Human Archive on YC](https://www.ycombinator.com/companies/human-archive)).

## Market & Traction

- **Traction signals:**
  - 249K views as of Oct 31 on the Oct 1 launch video on X ([Doomers launch tracker, Oct 2026](https://doomers.ai/launches/preload)).
  - 544 LinkedIn followers ([Preload on LinkedIn, Nov 2026](https://www.linkedin.com/company/preloadbionics/)).
  - 159 X followers on @PreloadAI ([X via Nitter, Nov 2026](https://nitter.cf/PreloadAI)).
  - 10 YC job listings, including policy learning, wearable sensors, and surgical data collection ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/preload/jobs)).
  - EMG-controlled ProHand demonstration featuring Preload ([Proception Newsroom, accessed Nov 2026, via search snippet](https://www.proception.ai/news)).
  - Launch coverage in Founderland ([Founderland, Oct 22, 2026](https://founderland.ai/articles/preload-launches-sensor-stack-for-robot-training-data-mvjxa4si)).
- **Competitors:**
  - **Human Archive** ($8.2M disclosed, revenue unknown): Its May 2026 seed was co-led by Wing Venture Capital and NVP Capital, and its capture stack includes stereo depth and body motion sensors ([Hike Ventures](https://www.hikevc.com/news/human-archive-raises-8-2m-to-expand-its-human-data-platform-for-physical-ai/), [NVP Capital](https://www.linkedin.com/posts/nvpcap_the-physical-world-needs-its-own-data-layer-activity-7465406212176605184-k6cD), [Human Archive on YC](https://www.ycombinator.com/companies/human-archive)).
  - **6thSense** (about ₩1B disclosed, revenue unknown): Its July 2026 pre-seed included Krew Capital, and its wearable rigs capture touch, depth, force, and 3D hand pose ([VentureSquare](https://www.venturesquare.net/1097147/), [Krew Capital](https://www.krewcapital.com/portfolio/6thsense), [6thSense on YC](https://www.ycombinator.com/companies/6thsense)).
  - **Mecka** (over $120M raised, over $100M in reported annualized gross revenue): Its October 2026 $60M Series B was led by Sequoia, and it operates global capture fleets and offers robot deployment services ([Gao on X via Teapaw](https://teapaw.org/MeckaAI?filter=posts), [Mecka](https://www.mecka.ai/news/series-b), [The Information](https://www.theinformation.com/projects/the-information-50-2026)).
- **Why now:** [Inferred]: NVIDIA’s November 2026 GR00T 2 results demonstrated transfer from human video to robot hardware, giving data buyers a published method for testing what additional sensor channels contribute ([NVIDIA Research, Nov 2026](https://research.nvidia.com/labs/gear/gr00t-2/)).

## Founders & Team

- **Leo Li (Founder):**
  - Background: Caltech computation and neural systems PhD student, University of Toronto robotics BASc, former Neuralink neuroengineer and Amazon software engineer; business email: No public data found ([YC founder profile](https://www.ycombinator.com/founders/xing-hao-li), [research profile](https://haohao1331.github.io/)).
  - Twitter/X: @yefan2718, 40 followers ([X via Nitter, Nov 2026](https://nitter.cf/yefan2718)).
  - LinkedIn: Profile linked by YC, headline unavailable ([YC founder profile](https://www.ycombinator.com/founders/xing-hao-li)).
  - GitHub: @haohao1331, `ESC204-Team`, 1 star ([GitHub, Nov 2026](https://github.com/haohao1331/ESC204-Team)).
- **Surya Pandiaraju (Founder):**
  - Background: Johns Hopkins biomedical engineering PhD candidate and Waterloo biomedical engineering graduate with neural signal analysis experience at Sonera Magnetics, iota Biosciences, NeuroPace, and Paradromics; business email: surya@preload.ai ([YC founder profile](https://www.ycombinator.com/founders/surya-pandiaraju), [Johns Hopkins Sarma Lab](https://sarmalab.icm.jhu.edu/people/surya-pandiaraju/), [launch post reproduced by Digg](https://digg.com/ai/3dqrswvp)).
  - Twitter/X: @suryapandiaraju, approximately 1K followers ([X via Nitter, Nov 2026](https://nitter.cf/suryapandiaraju)).
  - LinkedIn: Profile linked by YC, headline unavailable ([YC founder profile](https://www.ycombinator.com/founders/surya-pandiaraju)).
  - GitHub: No public repos found.
- **Runming (Tony) Wang (Founder):**
  - Background: Johns Hopkins biomedical engineering PhD candidate and Emory neuroscience graduate who built neural recording hardware and studied motor coordination using EMG at Emory and Georgia Tech; business email: tony@preload.ai ([YC founder profile](https://www.ycombinator.com/founders/runming-wang), [Wang’s LinkedIn post via search snippet](https://www.linkedin.com/in/christinezhwei)).
  - Twitter/X: @RunmingW, 55 followers ([X via Nitter, Nov 2026](https://nitter.cf/RunmingW)).
  - LinkedIn: “Preload (YC F26)” ([LinkedIn profile title via search snippet](https://www.linkedin.com/in/runming-wang-090030139)).
  - GitHub: @RunmingTonyWang, `iDC-cortex-model`, 2 stars; Wang also co-authored the research behind `VBVR-EvalKit`, which has 106 stars ([GitHub, Nov 2026](https://github.com/RunmingTonyWang/iDC-cortex-model), [VBVR-EvalKit](https://github.com/Video-Reason/VBVR-EvalKit)).
- **Co-founder relationship:** Pandiaraju and Wang were in the same Johns Hopkins biomedical engineering PhD cohort, Pandiaraju met Li through Reddit, and Wang met Li at a Carnegie Mellon admitted-students event ([Pandiaraju on X via Nitter, Nov 2026](https://nitter.cf/suryapandiaraju)).
- **Founder-market fit:** The YC-backed founders bring experience in neural interfaces, biosignal analysis, and EMG-based motor-control research to Preload’s wearable sensing and signal-processing work ([YC company profile](https://www.ycombinator.com/companies/preload), [Preload on YC Jobs](https://www.ycombinator.com/companies/preload/jobs)).

## Key Risks

- **Transfer to robot hardware:** [Inferred]: A sensor signal that distinguishes lighter from heavier handling may yield little improvement in robot task success, and Preload’s policy-learning job specifies evaluation on physical robots ([Pandiaraju on X via Nitter, Nov 2026](https://nitter.cf/suryapandiaraju), [YC policy-learning job](https://www.ycombinator.com/companies/preload/jobs/7w1lZPB-robotics-scientist-policy-learning)).
- **Collection consistency:** [Inferred]: Differences in hand size, glove fit, and working conditions could make recordings less comparable, and Preload is hiring to design wearables for extended use across operators and settings ([YC wearables job](https://www.ycombinator.com/companies/preload/jobs/Rha5Frc-mechanical-soft-goods-designer-wearables)).
- **Surgical site access:** [Inferred]: Site approvals and scheduling can constrain surgical data collection, and Preload’s surgical field role covers approvals, sensor calibration, and protocol compliance ([YC surgical field engineer job](https://www.ycombinator.com/companies/preload/jobs/HSCQGvl-field-engineer-surgical-data-collection)).
- **Name ambiguity:** [Inferred]: Buyers searching for “Preload” can encounter the concrete tank company at preload.com, while the robotics company uses preload.ai ([Preload Concrete Tanks](https://www.preload.com/), [YC company profile](https://www.ycombinator.com/companies/preload)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $200M–$400M in 2026 for third-party egocentric robot training data, with 40% projected CAGR through 2034 ([Meticulous Research, 2026](https://www.meticulousresearch.com/meticulous-next/egocentric-robot-training-data-outlook-2026-2034)) |
| SAM | No public data found |
| Traction | 249K X launch-video views ([Doomers, Oct 2026](https://doomers.ai/launches/preload)); 10 job listings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/preload/jobs)); EMG-controlled ProHand demo ([Proception Newsroom, accessed Nov 2026, via search snippet](https://www.proception.ai/news)) |
| Revenue Signal | No public data found |
| Founders | Leo Li (Founder): Caltech, Neuralink, Toronto robotics. Surya Pandiaraju (Founder): Johns Hopkins, Waterloo, Paradromics. Runming (Tony) Wang (Founder): Johns Hopkins, Emory, EMG motor-control research ([Y Combinator](https://www.ycombinator.com/companies/preload)) |
| Competitors | Human Archive ($8.2M, revenue unknown, stereo depth and body motion; [Hike Ventures](https://www.hikevc.com/news/human-archive-raises-8-2m-to-expand-its-human-data-platform-for-physical-ai/), [YC](https://www.ycombinator.com/companies/human-archive)); 6thSense (about ₩1B, revenue unknown, tactile rigs with 3D hand pose; [VentureSquare](https://www.venturesquare.net/1097147/), [YC](https://www.ycombinator.com/companies/6thsense)); Mecka (over $120M raised, over $100M reported annualized gross revenue, global capture fleets; [Gao on X via Teapaw](https://teapaw.org/MeckaAI?filter=posts), [Mecka](https://www.mecka.ai/news/series-b), [The Information](https://www.theinformation.com/projects/the-information-50-2026)) |
| Moat Signals | Synchronized wearable capture demo and preliminary EMG effort separation ([Preload launch video](https://launchscene.app/v/preload-preload-launch?play=1&s=2), [Pandiaraju on X via Nitter, Nov 2026](https://nitter.cf/suryapandiaraju)) |
| Risk Factors | Robot-hardware validation, wearable fit across operators, surgical site approvals ([YC policy-learning job](https://www.ycombinator.com/companies/preload/jobs/7w1lZPB-robotics-scientist-policy-learning), [YC wearables job](https://www.ycombinator.com/companies/preload/jobs/Rha5Frc-mechanical-soft-goods-designer-wearables), [YC surgical field engineer job](https://www.ycombinator.com/companies/preload/jobs/HSCQGvl-field-engineer-surgical-data-collection)) |
| Founder Reach | Li: X 40 ([Nitter](https://nitter.cf/yefan2718)), LinkedIn 738 ([LinkedIn via search snippet](https://www.linkedin.com/in/xhli)), repo 1 star ([GitHub](https://github.com/haohao1331/ESC204-Team)); Pandiaraju: X approximately 1K ([Nitter](https://nitter.cf/suryapandiaraju)); Wang: X 55 ([Nitter](https://nitter.cf/RunmingW)), personal repo 2 stars ([GitHub](https://github.com/RunmingTonyWang/iDC-cortex-model)) |
| Distribution Signals | 544 LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/preloadbionics/)); 159 company X followers ([Nitter, Nov 2026](https://nitter.cf/PreloadAI)); 249K X launch-video views ([Doomers, Oct 2026](https://doomers.ai/launches/preload)) |
| Emails | surya@preload.ai — Surya Pandiaraju, robotics data inquiries ([launch post reproduced by Digg](https://digg.com/ai/3dqrswvp)); tony@preload.ai — Runming Wang, robotics data inquiries ([Wang’s LinkedIn post via search snippet](https://www.linkedin.com/in/christinezhwei)) |
