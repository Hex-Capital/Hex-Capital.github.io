# Overshoot

> Enable developers to build and run AI vision applications

| Field | Value |
|-------|-------|
| Website | https://overshoot.ai |
| YC Page | https://www.ycombinator.com/companies/overshoot |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Computer Vision, Infrastructure, AI |

## The Idea

**Problem:** Developers building real-time AI vision applications — such as video agents for physical security, robotics, gaming, and consumer products — face slow inference, limited Vision Language Model (VLM) availability, and infrastructure that breaks at scale. Existing inference platforms are optimized for text modalities and treat image/video as secondary. The company's YC description states that "existing platforms make it painful for developers to build these real-time applications" (YC company page).

**Approach:** Overshoot provides a cloud-hosted API and JavaScript SDK that lets developers connect live video feeds to a collection of Vision Language Models with minimal code. The SDK supports multiple video source types (camera, video files, screen capture, LiveKit streams) and offers two processing modes: "Clip Mode" for analyzing short video segments with multiple frames (motion understanding) and "Frame Mode" for individual frame analysis (Overshoot JS SDK, GitHub). The platform supports models including Qwen3-VL-30B, Qwen3-VL-8B, and InternVL3_5-30B (Overshoot JS SDK, GitHub). Claimed response latency is under 200ms (YC company page; Y Combinator X post).

**Differentiation:** Overshoot claims 10x faster inference than existing inference platforms for vision workloads, with sub-200ms latency (YC company page). The company describes its moat as "focus" — image and video are fundamentally different modalities from text, and by specializing in them, Overshoot claims it can make technical improvements across codec, streaming protocols, and inference engines that general-purpose platforms do not (YC company page). General-purpose inference platforms such as Fireworks AI and Together AI serve text, image, audio, and video models through a single API but do not specialize in real-time video stream processing. Traditional computer vision platforms like Roboflow focus on custom model training and deployment rather than VLM-based real-time video inference.

**Business Model:** No public pricing page was found at the time of research. The documentation and platform pages do not list pricing tiers, per-request costs, or free tier information. [Inferred]: Most likely monetization path is consumption-based API pricing (per-request or per-minute of video processed), consistent with the inference API category.

**TAM/SAM:** The global computer vision market was valued at $19.82B in 2024 and is projected to reach $58.29B by 2030, growing at a CAGR of 19.8% (Grand View Research, 2025 via search snippet). The AI in computer vision segment was estimated at $26.31B in 2025 and projected to reach $189.64B by 2032, at a 32.6% CAGR (Coherent Market Insights, 2025 via search snippet). No public SAM estimate specific to real-time VLM inference APIs was found.

**GTM / Distribution:** Overshoot's first public API access was offered at the NexHacks hackathon (January 17-18, 2025), described as a "first public drop" for the API, which had previously been in closed beta (Zakaria El Hjouji LinkedIn post; NexHacks tracks page). The company maintains a developer playground at playground.overshoot.ai and documentation at docs.overshoot.ai. [Inferred]: Primary distribution path is developer-led, bottom-up adoption via hackathons, developer documentation, and a self-serve API with playground, following the standard developer infrastructure playbook.

## Defensibility

The company claims its moat derives from specialization: building inference infrastructure specifically optimized for image and video modalities, including custom work on codec, streaming protocols, and inference engines (YC company page). The JS SDK implements token rate limiting at 128 effective output tokens per second per stream (Overshoot JS SDK, GitHub), suggesting proprietary optimization of video-specific inference pipelines.

No patents, network effects, or data moats are identifiable from public sources at this stage. The 300+ developer base (YC company page) represents early adoption but not yet a switching-cost barrier. [Inferred]: Potential moat could develop via accumulated optimizations in the video inference stack and developer lock-in through SDK integration, but is unproven at this stage.

**Market structure:** General-purpose inference platforms (Fireworks AI, Together AI) serve all modalities and may lack incentive to deeply optimize for real-time video streaming, which requires specialized engineering across codec, streaming protocol, and inference pipeline layers. Cloud providers (AWS Rekognition, Google Cloud Vision) offer batch or near-real-time image APIs but are not optimized for continuous video stream processing with VLMs. [Inferred]: The structural barrier, if one exists, lies in business model focus — large inference platforms optimize for breadth of model support and general throughput, making deep video-streaming specialization a lower priority given its smaller share of overall inference demand.

**Commoditization risk:** The underlying VLMs (Qwen, InternVL) are open-source models not proprietary to Overshoot. General-purpose inference platforms could add video-streaming features. The SDK integration layer is relatively thin (described as "3 lines of code"). Technical differentiation rests on latency optimization at the infrastructure level — if competitors prioritize this, the advantage could erode.

## Market & Traction

**Traction signals:**
- 300+ developers on the platform (YC company page, as of YC W26 batch launch)
- 1,000+ developers referenced in YC launch materials (YC company page, captured at time of research)
- Sub-200ms response latency claimed (YC company page; Y Combinator X post)
- First public API access at NexHacks hackathon, January 17–18, 2025, where the API exited closed beta (Zakaria El Hjouji LinkedIn post; NexHacks tracks page)
- Overshoot JS SDK on GitHub: 12 stars, 5 forks, 45 commits (GitHub, as of research date)
- Y Combinator X post promoting Overshoot: mentions @zakariaornot and Younes (Y Combinator X post)
- Y Combinator LinkedIn post about Overshoot: reached 1,594,559 followers of the YC page (LinkedIn)
- Zakaria El Hjouji LinkedIn launch post: 85 likes, 10 comments, 2,130 followers (LinkedIn)
- No Product Hunt launch found
- No Discord or Slack community found
- No app store presence found
- No press coverage in named publications found
- Website not fully accessible at time of research (Framer-built, rendered content not captured)

**Competitive landscape:**

1. **Fireworks AI** — $331M total raised, $4B valuation (Series C, October 2025; BusinessWire). Estimated $130M ARR (Sacra, May 2025 via search snippet). General-purpose inference platform supporting text, image, audio, and video models. Key differentiator vs. Overshoot: breadth of model support across all modalities, not specialized in real-time video streaming.

2. **Together AI** — $534M total raised, $3.3B valuation (Series B, February 2025; Together AI blog). Revenue not publicly disclosed. AI acceleration cloud for open-source models. Key differentiator vs. Overshoot: focuses on training and inference at scale across modalities, not video-specific optimization.

3. **Roboflow** — ~$63.6M total raised, including $40M Series B (Fortune, November 2024). Revenue not publicly disclosed. 100,000+ developers (Roboflow website via search snippet). Computer vision platform for custom model training, labeling, and deployment. Key differentiator vs. Overshoot: Roboflow provides end-to-end CV pipeline tools (labeling, training, deployment) rather than real-time VLM inference on video streams.

4. **Clarifai** — $101M total raised, Series C in October 2021 (Crunchbase via search snippet). $16.2M revenue in 2024 (Getlatka via search snippet). Full-stack AI platform for image, video, text, and audio. Key differentiator vs. Overshoot: broader AI platform with enterprise focus; older technology base compared to VLM-native approach.

5. **Replicate** — ~$58M total raised; acquired by Cloudflare in November 2025 (SiliconANGLE via search snippet). Developer-friendly API for running open-source models. Key differentiator vs. Overshoot: general-purpose model hosting, not specialized for real-time video; now part of Cloudflare's infrastructure.

**Why now:** [Inferred]: The emergence of capable open-source Vision Language Models (Qwen3-VL, InternVL3) in 2024–2025 crossed a performance threshold enabling real-time video understanding that was previously not possible with traditional computer vision or proprietary-only multimodal models. Simultaneously, demand for "video agents" — autonomous systems that interpret live video feeds — is increasing across robotics, security, and consumer applications as VLMs become practical for deployment.

## Founders & Team

**Zakaria El Hjouji** — Co-founder & CEO
- Education: Graduated top of his class at the London School of Economics; Master's degree from MIT (2017–2018) (YC company page; LinkedIn via search snippet)
- Career: 7 years building low-latency, high-throughput pricing systems (surge pricing) at Uber; wrote GPU kernels and built inference engines at Meta AI; prior roles at Swiss Re and Millennium Management (YC company page; LinkedIn via search snippet; RocketReach via search snippet)
- Previously built and sold a software product while at MIT (YC company page)
- Won 3 prominent AI hackathons (YC company page)
- Twitter/X: @zakariaornot — follower count not retrievable (JavaScript rendering required)
- LinkedIn: linkedin.com/in/zakariaelhjouji — 2,130 followers (LinkedIn launch post)
- GitHub: github.com/zakariaelh — 13 followers, 6 public repos; notable repos: goldendj (4 stars), smplr (2 stars) (GitHub)
- Other: Substack at zakariae.substack.com; Medium profile with 14 followers (search results)

**Younes El Hjouji** — Co-founder & CTO
- Education: Al Akhawayn University (LinkedIn via search snippet)
- Career: Founding engineer at COSMONiO, a computer vision company founded in 2012/2015 in Groningen, Netherlands, that was acquired by Intel in 2020 (YC company page; Northern Times, 2019; Twitter/Toby Breckon via search snippet). Built a training and serving computer vision platform from scratch at COSMONiO (YC company page). Experience across smart agriculture, livestock analytics, and industrial AI systems (search results)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/younes-el-hjouji-2710b1139 — listed as "Stealth AI Startup" prior to launch; 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/YounesElhjouji — 11 followers, 23 repos; notable: nvim-copy (14 stars), toggle-js-extension (2 stars) (GitHub). Also github.com/younesintel (1 repo) (GitHub)
- Personal website: younes.elhjouji.com

**Co-founder relationship:** Zakaria and Younes El Hjouji are cousins (YC company page). Both share the El Hjouji surname. No overlapping employer was found in public records — Zakaria's career was at Uber/Meta/Swiss Re/Millennium, while Younes was at COSMONiO/Intel.

**Founder-market fit:** Zakaria built low-latency pricing systems at Uber (surge pricing) and GPU inference engines at Meta AI — directly relevant to building a low-latency inference platform. Younes was a founding engineer at COSMONiO (acquired by Intel), where he built a computer vision training and serving platform, and witnessed the shift from traditional CV to VLM-based approaches. The combination spans both inference infrastructure optimization and computer vision platform engineering. No advisors, board members, or notable investors beyond Y Combinator were found in public sources.

## Key Risks

**Inference commoditization from well-funded platforms:** Fireworks AI ($331M raised, $4B valuation), Together AI ($534M raised, $3.3B valuation), and other general-purpose inference providers could add video-streaming optimization features. These platforms already support vision models and have engineering resources that exceed Overshoot's two-person team by orders of magnitude. Mitigation: Overshoot's specialization may allow faster iteration on video-specific optimization, but the window may narrow as competitors expand.

**Upstream model dependency:** Overshoot's supported models (Qwen3-VL, InternVL) are open-source models developed by external organizations (Alibaba, OpenGVLab/Shanghai AI Lab). Changes to licensing, model availability, or performance improvements that competitors can equally access diminish Overshoot's differentiation. Overshoot does not control model development or roadmap.

**Developer count ambiguity:** The YC page references both "300+ developers" and "1,000+ developers" in different contexts. Without third-party verification, the actual scale and engagement depth of the developer base is unclear. Active usage, retention, and production deployments versus trial signups are not publicly distinguishable.

**Brand disambiguation:** "Overshoot" is a common English word used in many contexts (Earth Overshoot Day, Climate Overshoot Commission, animation terminology, economic terminology). Search results are heavily polluted by unrelated entities, which could complicate SEO, brand recognition, and developer discoverability.

**Cloud provider entry risk:** AWS (Rekognition), Google Cloud (Vision AI/Vertex AI), and Azure (Computer Vision) already offer computer vision APIs. If VLM-based real-time video processing becomes a significant demand category, these providers could build native support integrated with their existing GPU infrastructure and developer ecosystems, offering it at marginal cost to existing customers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $19.82B computer vision market in 2024, projected $58.29B by 2030 at 19.8% CAGR (Grand View Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 300+ developers (YC company page); 1,000+ developers referenced in launch materials (YC company page); first public API at NexHacks hackathon Jan 2025 (Zakaria LinkedIn post); 12 GitHub stars on JS SDK (GitHub) |
| Revenue Signal | No public data found |
| Founders | Zakaria El Hjouji (CEO): LSE, MIT, 7yr Uber (surge pricing), Meta AI (GPU kernels/inference), sold a software product. Younes El Hjouji (CTO): Al Akhawayn U., founding engineer COSMONiO (acq. by Intel 2020), built CV training/serving platform. |
| Competitors | Fireworks AI ($331M raised, ~$130M ARR est., general-purpose inference vs. video-specialized); Together AI ($534M raised, revenue unknown, training + inference cloud vs. video-specialized); Roboflow ($63.6M raised, revenue unknown, end-to-end CV tooling vs. VLM inference API); Clarifai ($101M raised, $16.2M revenue, broad AI platform vs. real-time video focus); Replicate ($58M raised, acq. by Cloudflare Nov 2025, general model hosting vs. video-specialized) |
| Moat Signals | Video-specialized inference optimization (codec, streaming, inference engine); sub-200ms latency claim (YC company page) |
| Risk Factors | Inference commoditization from well-funded platforms, upstream open-source model dependency, cloud provider entry risk, brand disambiguation |
| Founder Reach | Zakaria: X @zakariaornot (count not retrievable), LinkedIn 2,130 followers, GitHub 6 stars total. Younes: X not found, LinkedIn 500+, GitHub 14 stars (nvim-copy) |
| Distribution Signals | NexHacks hackathon sponsorship Jan 2025 (NexHacks tracks page); YC W26 launch post by Y Combinator on X and LinkedIn; developer playground at playground.overshoot.ai; no Product Hunt launch found |
