# Dipole Labs

> AI-controlled optical switching for AI clusters

| Field | Value |
|-------|-------|
| Website | https://dipolelabs.com/ |
| YC Page | https://www.ycombinator.com/companies/dipole-labs |
| Batch | Summer 2026 ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026) |
| Industry | Industrials / Industrials |
| Team Size | 0 |
| Location | Boston, MA, USA |
| Tags | Hard Tech, Semiconductors, AI |
| YC Partner | Jared Friedman ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026) |
| Emails | dthureja@fas.harvard.edu ([Harvard](https://www.chemistry.harvard.edu/people/deepankur-thureja), accessed Aug 2026) |

## The Idea

- **Problem:** AI clusters lose compute utilization when network data movement becomes the bottleneck, while conventional inter-rack routing converts optical signals to electricity and back, adding power consumption, heat, and latency ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).
- **Approach:** Dipole is developing large-port optical circuit switches that keep traffic in the optical domain, target sub-microsecond reconfiguration, and use a control layer that learns GPU communication patterns and synchronizes topology changes with training and inference ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).
- **Differentiation:** Unlike conventional electrical switches and NVIDIA’s co-packaged-optics packet switches, Dipole proposes workload-synchronized circuit reconfiguration, while nEye’s competing product integrates silicon-photonic and MEMS switching on one chip ([YC](https://www.ycombinator.com/companies/dipole-labs), [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories), Mar 2025; [nEye](https://www.neye.ai/), Apr 2026).
- **Business Model:** [Inferred]: Hardware or module sales and paid design partnerships with hyperscalers and neoclouds, based on the company’s request for design partners and photonic-foundry collaborators ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).
- **TAM/SAM:** The optical-circuit-switch market is forecast at $560 million in 2026 and $2.52 billion in 2032, a 28.5% CAGR ([MarketsandMarkets](https://www.marketsandmarkets.com/ResearchInsight/optical-circuit-switches-ai-data-center-interconnects.asp), Jul 2026); no public SAM data found.
- **GTM / Distribution:** The company is soliciting design partnerships with hyperscalers and neoclouds and collaborations with photonic foundries to move custom devices from prototype to scale ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).

## Defensibility

- **Moat today:** The founders report a decade of photonics work, and Deepankur Thureja is an inventor on ETH-assigned exciton-confinement and nanostructured-hBN patents, but no Dipole-owned optical-switch patent was located ([YC](https://www.ycombinator.com/companies/dipole-labs), [EPO](https://data.epo.org/publication-server/rest/v1.0/publication-dates/20220817/patents/EP4044261NWA1/document.pdf), Aug 2022; [USPTO](https://patents.justia.com/examiner/deoram-persaud), Mar 2026).
- **Future moat:** [Inferred]: Joint optimization of proprietary switch hardware, GPU-workload telemetry, and topology-control models could create accumulated operating data and switching costs, but no production deployment is publicly documented.
- **Market structure:** No structural barrier is identified because Google developed OCS internally for most of its data-center networks, while NVIDIA and photonics vendors are commercializing overlapping infrastructure ([Google Cloud](https://cloud.google.com/blog/topics/systems/the-evolution-of-googles-jupiter-data-center-network), Aug 2022; [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories), Mar 2025).
- **Commoditization risk:** nEye is commercializing foundry-compatible silicon-photonic MEMS OCS chips, and Lumentum reported commercial wins with hyperscale customers, providing alternative suppliers and architectures ([nEye](https://optics.org/news/neye-systems-lands-80m-to-scale-optical-circuit-switching), Apr 2026; [Lumentum SEC filing](https://www.sec.gov/Archives/edgar/data/1633978/000130817925000617/lite014752-ars.pdf), 2025).

## Market & Traction

- **Traction signals:**
  - Company launch included in a YC launch roundup ([Menlo Times](https://www.menlotimes.com/post/y-combinator-launches-of-the-week-153), Aug 2026).
  - Three openings—Photonic Engineer, Electronics Engineer, and Engineering Intern—were listed on the company website, while YC listed zero jobs ([Dipole careers](https://dipolelabs.com/careers), accessed Aug 2026; [YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - nEye ($152 million raised, revenue unknown): silicon-photonic MEMS OCS-on-a-chip rather than Dipole’s disclosed workload-synchronized hardware-and-control approach ([Optics.org](https://optics.org/news/neye-systems-lands-80m-to-scale-optical-circuit-switching), Apr 2026).
  - Xscape Photonics ($81 million Series A, revenue unknown): programmable multi-wavelength laser and optical-interconnect platform rather than a disclosed AI-controlled circuit switch ([Xscape](https://www.xscapephotonics.com/blog-post/an-update-from-xscape-photonics-product-milestones-and-what-comes-next), Jul 2026).
  - Lightmatter ($850 million raised, revenue unknown): rack-level photonic interposers and optical I/O rather than workload-aware topology reconfiguration ([Lightmatter](https://lightmatter.co/), accessed Aug 2026).
  - Celestial AI/Marvell (more than $515 million raised before acquisition, revenue unknown): package-, system-, and rack-level Photonic Fabric for scale-up connectivity rather than a stand-alone OCS control stack ([Celestial AI via Business Wire](https://markets.financialcontent.com/bpas/article/bizwire-2025-3-11-celestial-ai-secures-250-million-funding-to-revolutionize-ai-infrastructure-with-its-photonic-fabric), Mar 2025; [Marvell](https://investor.marvell.com/news-events/press-releases/detail/1005/marvell-completes-acquisition-of-celestial-ai), Feb 2026).
- **Why now:** NVIDIA’s March 2025 introduction of co-packaged silicon-photonics switches for million-GPU AI factories and Lumentum’s subsequent hyperscaler OCS wins indicate that optical networking moved into commercial AI-infrastructure procurement during the last 18 months ([NVIDIA](https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories), Mar 2025; [Lumentum SEC filing](https://www.sec.gov/Archives/edgar/data/1633978/000130817925000617/lite014752-ars.pdf), 2025).

## Founders & Team

- **Deepankur Thureja (Co-founder and CEO):**
  - Background: PhD in physics from ETH Zürich, Harvard postdoctoral work in quantum optics, a 2022 Nature paper on electrically tunable exciton confinement, and the 2024 ETH Medal for his doctoral thesis ([Dipole Labs](https://dipolelabs.com/about), [PubMed](https://pubmed.ncbi.nlm.nih.gov/35614215/), May 2022; [ETH Zürich](https://quantumphotonics.ethz.ch/news-and-events/qpg-news/2024/11/eth-medal-for-outstanding-doctoral-theses-for-deepankur-thureja.html), Nov 2024).
  - Twitter/X: No public account found.
  - LinkedIn: “CEO & Co-founder @ Dipole Labs; Building optical switching and compute modules…” with approximately 1K followers ([LinkedIn](https://www.linkedin.com/in/dthureja), accessed Aug 2026).
  - GitHub: No public repos found.
- **Gabriele Pasquale (Co-founder and CTO):**
  - Background: PhD in applied physics and materials science from EPFL, Harvard postdoctoral work from 2024–2026, and an IBM Prize for a tunneling method used to detect correlated electronic states ([Dipole Labs](https://dipolelabs.com/about), [Harvard](https://kim.physics.harvard.edu/alumni), accessed Aug 2026; [EPFL](https://www.epfl.ch/schools/sb/research/iphys/recipients/), 2025).
  - Twitter/X: No public account found.
  - LinkedIn: “Currently a Postdoctoral Fellow at Harvard University in the Laboratory of Integrated…” with approximately 2K followers ([LinkedIn](https://www.linkedin.com/in/gabrielepasquale), accessed Aug 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Deepankur Thureja and Gabriele Pasquale met while working as postdoctoral researchers at Harvard ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).
- **Founder-market fit:** [Inferred]: Their doctoral and postdoctoral work covers photonics, semiconductor devices, nanofabrication, and quantum materials, although public biographies do not document prior data-center networking sales or operations experience ([Dipole Labs](https://dipolelabs.com/about), accessed Aug 2026).

## Key Risks

- **Technical feasibility:** The company describes sub-microsecond reconfiguration at large port counts as a target rather than a measured result, and no public data found for prototype throughput, loss, reliability, or workload benchmarks ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).
- **Customer build-versus-buy:** Dipole targets hyperscalers and neoclouds, but Google built OCS internally and NVIDIA offers photonics-enabled switches, creating substitution through customer-owned or incumbent platforms ([YC](https://www.ycombinator.com/companies/dipole-labs), [Google Cloud](https://cloud.google.com/blog/topics/systems/the-evolution-of-googles-jupiter-data-center-network), Aug 2022; [NVIDIA](https://nvidianews.nvidia.com/news/nvidia-spectrum-x-co-packaged-optics-networking-switches-ai-factories), Mar 2025).
- **Manufacturing dependency:** Dipole is seeking photonic-foundry collaborations to move custom devices from prototype to scale, making qualification, yield, and production capacity dependent on external partners ([YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).
- **Name disambiguation:** Separate businesses use similar names, including UK laser manufacturer DiPOLE Systems, creating search-result and counterparty-identification risk; the YC company is identified by dipolelabs.com, its Boston/Zurich locations, and its S26 founders ([DiPOLE Systems LinkedIn](https://www.linkedin.com/company/dipole-systems-ltd), accessed Aug 2026; [YC](https://www.ycombinator.com/companies/dipole-labs), accessed Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $560 million in 2026, projected to $2.52 billion by 2032 at 28.5% CAGR (MarketsandMarkets, Jul 2026) |
| SAM | No public data found |
| Traction | YC company launch coverage and three website job openings (Menlo Times, Aug 2026; Dipole Labs careers, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Deepankur Thureja (CEO): ETH physics PhD, Harvard postdoc, Nature author and ETH Medal recipient; Gabriele Pasquale (CTO): EPFL applied-physics/materials PhD, Harvard postdoc, IBM Prize recipient (Dipole Labs, Aug 2026; ETH Zürich, Nov 2024; EPFL, 2025) |
| Competitors | nEye ($152M raised, revenue unknown, OCS-on-chip); Xscape Photonics ($81M Series A, revenue unknown, multi-wavelength interconnects); Lightmatter ($850M raised, revenue unknown, photonic interposers); Celestial AI/Marvell ($515M+ raised before acquisition, revenue unknown, package-to-rack Photonic Fabric) (Optics.org, Apr 2026; Xscape, Jul 2026; Lightmatter, Aug 2026; Celestial AI, Mar 2025) |
| Moat Signals | Founder photonics research, one EPO exciton-confinement patent application and one U.S. nanostructured-hBN patent naming Deepankur Thureja, both assigned to ETH Zürich (EPO, Aug 2022; USPTO, Mar 2026) |
| Risk Factors | Unpublished prototype benchmarks, external foundry scale-up dependency, hyperscaler and incumbent substitution (YC, Aug 2026; Google Cloud, Aug 2022; NVIDIA, Mar 2025) |
| Founder Reach | Deepankur Thureja: LinkedIn approximately 1K, no public Twitter/GitHub found; Gabriele Pasquale: LinkedIn approximately 2K, no public Twitter/GitHub found (LinkedIn, Aug 2026) |
| Distribution Signals | Three company-site openings but zero YC-listed jobs; YC launch-roundup coverage (Dipole Labs careers, Aug 2026; YC, Aug 2026; Menlo Times, Aug 2026) |
| Emails | dthureja@fas.harvard.edu (Harvard, Aug 2026) |
