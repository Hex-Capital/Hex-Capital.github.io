# Synapse Semiconductor

> Collapsing the edge AI vision hardware stack into one wafer

| Field | Value |
|-------|-------|
| Website | https://synapsesemi.org |
| YC Page | https://www.ycombinator.com/companies/synapse-semiconductor |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials |
| Team Size | 2 |
| Location | Durham, NC, USA |
| Tags | Artificial Intelligence, Edge Computing Semiconductors, Hard Tech, Robotics, Defense |
| YC Partner | Tyler Bosmeny |
| Emails | founders@synapsesemi.org, sanjeev.chauhan@duke.edu, tania.roy@duke.edu |

## The Idea

- **Problem:** Robotics, drones, satellites, and other physical-AI systems currently move visual data among a camera sensor, MIPI/PCIe interconnects, memory, and a GPU, adding power consumption and latency ([company website, Aug 2026](https://www.synapsesemi.org/)).
- **Approach:** RETINA uses photosensitive compute transistors so each pixel captures light and performs neural-network operations in the same substrate, replacing the separate camera-plus-GPU architecture ([YC launch, Jul 2026](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)).
- **Differentiation:** SynSense Speck places a dynamic-vision sensor and spiking processor as separate functions on one chip, Prophesee pixels emit illumination-change events, and Hailo-15 accepts an external sensor through camera interfaces, whereas Synapse says its compute transistor is itself the photosensor ([SynSense](https://www.synsense.ai/products/speck-2/); [Prophesee](https://docs.prophesee.ai/stable/concepts.html); [Hailo](https://hailo.ai/products/ai-vision-processors/hailo-15-ai-vision-processor/); [YC](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)).
- **Business Model:** [Inferred]: The booking CTA for robotics, drone, and physical-AI developers indicates a design-in motion that could monetize through chip sales, evaluation hardware, or device/process licensing, but no pricing is public ([YC launch, Jul 2026](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)).
- **TAM/SAM:** The broader edge-AI hardware market was estimated at $26.14 billion in 2025 and projected to reach $58.90 billion in 2030 at 17.6% CAGR, while no public SAM data was found for compute-in-pixel vision substrates ([MarketsandMarkets, Jul 2025](https://www.prnewswire.com/news-releases/edge-ai-hardware-market-worth-58-90-billion-by-2030---exclusive-report-by-marketsandmarkets-302498128.html)).
- **GTM / Distribution:** [Inferred]: Initial distribution is founder-led outreach to robotics, drone, defense, and space-vision developers through a consultation-booking page and Duke/YC networks ([company website](https://www.synapsesemi.org/); [YC launch](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)).

## Defensibility

- **Moat today:** Duke reported working, measured pixels, while Roy’s lab published a CMOS-compatible MoS₂/graphene device supporting 4-bit sensing and in-pixel convolution operations, evidencing device and circuit-integration complexity but not company-owned patents ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/); [ACS Nano, May 2026](https://pubs.acs.org/doi/10.1021/acsnano.6c03713)).
- **Future moat:** [Inferred]: Process recipes, yield data, model-to-device mapping, and licensed patents could become barriers after wafer-scale validation, but public sources do not establish ownership or production-scale performance.
- **Market structure:** No structural barrier identified at this stage because SynSense already sells a sensing-and-computing vision SoC, while Sony and TSMC announced joint next-generation image-sensor development for robotics and automotive physical AI ([SynSense](https://www.synsense.ai/products/speck-2/); [Sony, May 2026](https://www.sony-semicon.com/en/news/2026/2026050801.html)).
- **Commoditization risk:** SynSense, Sony/TSMC, Prophesee, Hailo, and semiconductor research groups could pursue alternative forms of sensor-adjacent or in-sensor computation, although Synapse’s same-transistor sensing-and-compute claim differs from their published architectures ([company website](https://www.synapsesemi.org/); [competitor sources](https://www.synsense.ai/products/speck-2/)).

## Market & Traction

- **Traction signals:**
  - Working hardware with fabricated and measured pixels ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/)).
  - Company launch published on YC in July 2026 ([Launch YC, Jul 2026](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)).
  - Supported by Duke’s Office for Translation & Commercialization ([Duke Capital Partners, Jul 2026](https://www.linkedin.com/posts/dukecapitalpartners_dukecapitalpartners-ycombinator-semiconductors-activity-7475182115291226112-YIzS)).
  - Founder-hosted YC event recorded 54 attendees ([Luma, 2026](https://luma.com/xtdwsd5y)).
  - Zero jobs were posted on YC as of August 2026 ([YC Jobs](https://www.ycombinator.com/companies/synapse-semiconductor/jobs)).
- **Competitors (minimum 3, up to 5):**
  - SynSense ($45.09 million raised, revenue unknown): Speck integrates an event sensor and spiking processor on one chip but not in the same photosensitive transistor ([CB Insights, Jun 2026](https://www.cbinsights.com/company/synsense/financials); [SynSense](https://www.synsense.ai/products/speck-2/)).
  - Prophesee (€112 million raised, revenue unknown): Metavision sensors output pixel-level brightness-change events rather than performing Synapse’s claimed neural computation inside each photosensor ([Tech.eu, Jul 2026](https://funding.tech.eu/companies/03C141B2-69AB-4059-BF39-EB40AFB1E21B); [Prophesee](https://docs.prophesee.ai/stable/concepts.html)).
  - Hailo ($340 million raised, revenue unknown): Hailo-15 combines AI inference, ISP, and vision processing but retains interfaces to a separate image sensor ([TechTarget, Apr 2024](https://www.techtarget.com/searchenterpriseai/news/366577773/Edge-AI-startup-reveals-GenAI-accelerator-120M-fundraise); [Hailo](https://hailo.ai/products/ai-vision-processors/hailo-15-ai-vision-processor/)).
  - SiMa.ai ($355 million raised, revenue unknown): Modalix is an edge MLSoC with a compute-and-memory hierarchy rather than a photosensitive compute substrate ([SiMa.ai, Aug 2025](https://sima.ai/press-release/sima-ai-raises-85m-to-scale-physical-ai-bringing-total-funding-to-355m/)).
- **Why now:** [Inferred]: Sony and TSMC’s May 2026 physical-AI image-sensor partnership and Synapse’s measured Duke prototype indicate simultaneous manufacturing interest and laboratory readiness for sensor-integrated AI ([Sony, May 2026](https://www.sony-semicon.com/en/news/2026/2026050801.html); [Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/)).

## Founders & Team

- **Sanjeev Chauhan (Co-founder):**
  - Background: Duke BS ’26 and MS ’26 graduate, former Roy Lab researcher, Duke Capital Partners senior associate, and co-author of machine-learning work for SLAC’s FACET-II accelerator ([Duke](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/); [LinkedIn](https://www.linkedin.com/in/sanjeev-one)).
  - Twitter/X: No public account found.
  - LinkedIn: “Stealth Startup,” with 2K followers ([LinkedIn, Aug 2026](https://www.linkedin.com/in/sanjeev-one)).
  - GitHub: No public repos found.
- **Tania Roy (Co-founder):**
  - Background: Duke associate professor of ECE with Vanderbilt MS ’08 and PhD ’11, postdoctoral training at Georgia Tech and UC Berkeley, and research in two-dimensional materials, neuromorphic computing, optoelectronics, and device reliability ([Duke ECE](https://ece.duke.edu/people/tania-roy/)).
  - Twitter/X: No public account found.
  - LinkedIn: “Duke University Pratt School of Engineering,” with 3K followers ([LinkedIn, Aug 2026](https://www.linkedin.com/in/tania-roy-ba272b24)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Chauhan joined Roy’s Duke laboratory as an undergraduate researcher and continued as a master’s student before they commercialized the laboratory work together ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/)).
- **Founder-market fit:** [Inferred]: Roy contributes semiconductor-device research and measured in-sensor hardware, while Chauhan combines Roy Lab work, ECE training, accelerator modeling, and venture experience ([Duke](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/); [Duke IEEE](https://www.dukeieee.org/)).

## Key Risks

- **System-scale feasibility:** Public research demonstrates 4-bit pixel information and convolution primitives, while the YC launch says CNNs and VLMs can run on the chip, leaving wafer-scale yield, model capacity, throughput, and accuracy publicly unverified ([ACS Nano, May 2026](https://pubs.acs.org/doi/10.1021/acsnano.6c03713); [YC launch, Jul 2026](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)).
- **Commercialization visibility:** The website provides a consultation link but no public pricing, production node, sample schedule, customer, LOI, or company-revenue disclosure ([company website, Aug 2026](https://www.synapsesemi.org/)).
- **Competitive overlap:** SynSense already markets a single-chip sensor/processor product, Hailo supplies camera-focused vision processors, and Sony/TSMC are developing image sensors for physical AI ([SynSense](https://www.synsense.ai/products/speck-2/); [Hailo](https://hailo.ai/products/ai-vision-processors/hailo-15-ai-vision-processor/); [Sony](https://www.sony-semicon.com/en/news/2026/2026050801.html)).
- **University-IP boundary:** Duke describes the company as a departmental spinout supported by its commercialization office, but public sources do not identify an exclusive license or assigned patent portfolio ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/)).
- **Name disambiguation:** Searches also surface the unrelated Synapse Design Inc., a semiconductor design-services company founded in 2003, creating potential search-result confusion ([LinkedIn, Aug 2026](https://no.linkedin.com/company/synapse-design-automation-inc)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $26.14B edge-AI hardware market in 2025, projected to reach $58.90B by 2030 at 17.6% CAGR ([MarketsandMarkets, Jul 2025](https://www.prnewswire.com/news-releases/edge-ai-hardware-market-worth-58-90-billion-by-2030---exclusive-report-by-marketsandmarkets-302498128.html)) |
| SAM | No public data found |
| Traction | Working, measured hardware ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/)); YC launch ([Launch YC, Jul 2026](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)) |
| Revenue Signal | No public data found |
| Founders | Sanjeev Chauhan (Co-founder): Duke BS/MS ’26, Roy Lab and Duke Capital Partners; Tania Roy (Co-founder): Duke ECE associate professor, Vanderbilt PhD, in-sensor-computing researcher ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/)) |
| Competitors | SynSense ($45.09M raised, revenue unknown, integrated event-sensor/SNN SoC) ([CB Insights](https://www.cbinsights.com/company/synsense/financials)); Prophesee (€112M raised, revenue unknown, event sensors) ([Tech.eu](https://funding.tech.eu/companies/03C141B2-69AB-4059-BF39-EB40AFB1E21B)); Hailo ($340M raised, revenue unknown, camera vision processor) ([TechTarget](https://www.techtarget.com/searchenterpriseai/news/366577773/Edge-AI-startup-reveals-GenAI-accelerator-120M-fundraise)); SiMa.ai ($355M raised, revenue unknown, edge MLSoC) ([SiMa.ai](https://sima.ai/press-release/sima-ai-raises-85m-to-scale-physical-ai-bringing-total-funding-to-355m/)) |
| Moat Signals | Working measured pixels and peer-reviewed CMOS-compatible MoS₂/graphene in-pixel computing architecture ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/); [ACS Nano, May 2026](https://pubs.acs.org/doi/10.1021/acsnano.6c03713)) |
| Risk Factors | System-scale performance gap ([ACS Nano; YC, 2026](https://pubs.acs.org/doi/10.1021/acsnano.6c03713)), competitor overlap ([SynSense](https://www.synsense.ai/products/speck-2/)), university-IP boundary ([Duke, Jun 2026](https://pratt.duke.edu/news/synapse-semiconductor-y-combinator/)) |
| Founder Reach | Sanjeev Chauhan: LinkedIn 2K, Twitter/GitHub not found; Tania Roy: LinkedIn 3K, Twitter/GitHub not found ([LinkedIn profiles, Aug 2026](https://www.linkedin.com/in/sanjeev-one)) |
| Distribution Signals | YC launch in July 2026 ([Launch YC](https://www.ycombinator.com/launches/S0x-synapse-semiconductor-we-put-a-neural-network-inside-the-camera-pixel)); founder-hosted event with 54 attendees ([Luma, 2026](https://luma.com/xtdwsd5y)); zero YC jobs ([YC Jobs, Aug 2026](https://www.ycombinator.com/companies/synapse-semiconductor/jobs)) |
| Emails | founders@synapsesemi.org ([company website](https://www.synapsesemi.org/)); sanjeev.chauhan@duke.edu ([founder résumé](https://sanjeev.one/assets/docs/resume.pdf)); tania.roy@duke.edu ([Duke ECE](https://ece.duke.edu/people/tania-roy/)) |
