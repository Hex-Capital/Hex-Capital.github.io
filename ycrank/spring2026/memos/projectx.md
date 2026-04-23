# ProjectX

> Building Infinity: the computer that does everything at once.

| Field | Value |
|-------|-------|
| Website | https://www.projectx.cloud/ |
| YC Page | https://www.ycombinator.com/companies/projectx |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 6 |
| Location | Kalyani, West Bengal, India (Startup Story Media); San Francisco also listed (@ProjectX_Cloud X bio) |
| Tags | |
| YC Partner | Andrew Miklas |
| Emails | bishal@projectx.cloud (GitHub profile of CTO) |

## The Idea

**Problem:** Every conventional computer restricts users to a single-focus model — one cursor, one keyboard, one app in focus (YC page). Users needing high-performance computing are constrained by local hardware costs, and running heterogeneous workloads (Windows + Linux, human + AI agent) requires separate machines or complex virtualization. Current solutions include traditional VDI (Citrix, VMware), cloud desktops (Azure Virtual Desktop, Amazon WorkSpaces), and emerging browser-based platforms (Neverinstall, Vagon), all of which impose single-session or single-OS paradigms.

**Approach:** Infinity is a cloud-based operating system accessible via a single URL that runs every application in its own independent virtual computer, each with dedicated GPU, input, and environment (YC page). It supports Windows and Linux applications in the same session, enables human and AI agent workflows side by side, with cold start in seconds (YC page). The public beta was announced on June 28, 2024 (Business Standard, July 2024).

**Differentiation:** Unlike traditional DaaS providers (Citrix, Workspot, Azure Virtual Desktop) that provision a single virtual desktop per session, Infinity provisions per-application isolated compute environments with dedicated GPUs within one browser session (YC page). Unlike Neverinstall and Vagon, which stream a single desktop or application, Infinity's architecture supports concurrent multi-OS execution and native agent co-working. [Inferred]: The per-app isolation model could reduce blast radius from crashes and enable finer-grained resource allocation compared to monolithic desktop approaches.

**Business Model:** No public pricing page was found; the website returned a minimal/loading page at time of research. [Inferred]: Most likely monetization path is consumption-based SaaS pricing (per-GPU-hour or per-seat subscription) given the cloud compute infrastructure underpinning the product, consistent with the "flexible billing" language used in press materials (Business Standard, July 2024).

**TAM/SAM:** The global Desktop-as-a-Service (DaaS) market was estimated at USD 4.5–9.82 billion in 2025, depending on analyst scope, growing at 11.67–19.4% CAGR (OpenPR, 2026; Research Nester, 2025). The broader desktop virtualization market was valued at USD 33.39 billion in 2025 and projected to reach USD 174.29 billion by 2034 (Fortune Business Insights via search snippet). [Inferred]: ProjectX's SAM is the subset of DaaS targeting power users, developers, and enterprises requiring multi-app GPU workloads — likely a fraction of the total DaaS market.

**GTM / Distribution:** [Inferred]: Distribution is likely product-led via the browser-based single-URL access model, targeting developers and technical users initially. The company's India origins and grants from Indian government ministries suggest early traction may come from Indian enterprise and education markets. The YC batch and San Francisco presence indicate a pivot toward US enterprise distribution.

## Defensibility

- **Technical complexity:** Building a per-app isolated cloud OS with independent GPU allocation, sub-second cold starts, and cross-OS (Windows + Linux) support in a single session represents substantial systems engineering (YC page). [Inferred]: The GPU orchestration and multi-OS container orchestration layer is non-trivial to replicate, providing a temporary technical moat.
- **No public IP/patent data found.**
- [Inferred]: Potential defensibility could develop via data/usage advantages (workload optimization from aggregate usage patterns) and switching costs (users building workflows around the multi-app paradigm), but these are unproven at this stage.

**Market structure:** Large incumbents (Microsoft, Amazon, Citrix) offer single-desktop VDI/DaaS. [Inferred]: A per-app isolation model with mixed OS support would require incumbents to re-architect their desktop streaming stacks, which conflicts with their existing per-desktop licensing models. Microsoft's Windows 365 is built around streaming a full Windows desktop — offering per-app Linux+Windows compute would cannibalize Azure Virtual Desktop's positioning. However, no structural barrier prevents a greenfield competitor from building a similar architecture.

**Commoditization risk:** Neverinstall and Vagon are building adjacent browser-based cloud compute products with modest funding ($1.21M and $542K respectively) (Tracxn; Crunchbase). A well-funded new entrant or an incumbent extending their platform could replicate the per-app model. [Inferred]: The primary differentiation hinges on execution quality of GPU orchestration and cold-start performance, which are reproducible given sufficient engineering investment.

## Market & Traction

**Traction signals:**
- $204K seed funding from Google Cloud (December 29, 2023) (Crunchbase; The Company Check Blog)
- Rs 10 lakh (~$12K) in grants from India's Ministry of Commerce and Ministry of Electronics and IT (LinkedIn company page; Startup Story Media)
- Over Rs 50 lakh (~$60K) in grants/credits from Microsoft Founder's Programme and AWS Activate (LinkedIn company page; Startup Story Media)
- Winner, Tiger Launch Global Finals at Princeton University — recognized as India's best student startup (Startup Story Media)
- Winner, World Trade Center Innovation Award at Eureka IIT Bombay, among 17,000 competing startups (Startup Story Media)
- Pursuing $3M seed round (Startup Story Media)
- LinkedIn: 1,542 followers (LinkedIn company page)
- Twitter/X: @ProjectX_Cloud (joined February 2024) — follower count not retrievable
- GitHub organization: github.com/projectXcloud — repo count and stars not retrieved
- Instagram: @projectx.cloud — follower count not retrieved
- Press: Business Standard coverage (July 6, 2024, via ANI press release); Startup Story Media coverage of Google Cloud grant and WTC Innovation Award
- No Product Hunt listing found
- No Discord or Slack community found
- No app store listing found
- Website not fully accessible at time of research (returned loading/minimal page)
- No active job postings (YC page: 0 jobs listed)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. ProjectX |
|---|---|---|
| **Neverinstall** (Bengaluru) | $1.21M total, Seed (Tracxn) | Browser-based cloud PC with pre-installed apps; single-desktop model, no per-app GPU isolation or multi-OS support |
| **Vagon** (California) | $542K total, Seed (Crunchbase) | Cloud streaming workstations with Unity partnership (August 2024); focuses on GPU-heavy creative apps, not multi-OS or agent workflows |
| **Workspot** (Menlo Park) | $84.65M total, Series E (Tracxn) | Enterprise cloud-native DaaS with global scale; traditional per-desktop model, targets large enterprise IT departments |
| **Microsoft Azure Virtual Desktop / Windows 365** | N/A (incumbent) | Full Windows desktop streaming backed by Azure infrastructure; no Linux co-execution or per-app GPU isolation in same session |
| **Amazon WorkSpaces** | N/A (incumbent) | AWS-native managed DaaS; single-OS desktop per workspace, no per-app isolation model |

**Why now:** [Inferred]: GPU cloud costs have dropped significantly with increased supply from hyperscalers (AWS, GCP, Azure) expanding GPU fleets for AI workloads in 2023–2025, making per-app GPU allocation economically feasible. The rise of AI agent workflows (2024–2025) creates demand for human-agent co-working environments that traditional single-cursor desktops cannot serve. Container orchestration maturity (Kubernetes GPU support improvements in 2023–2024) enables the per-app isolation architecture at production quality.

## Founders & Team

**Note on team composition:** Crunchbase lists original co-founders as Rounak Adhikary, Ronit Banerjee, and Suvrakamal Das (founded 2022) (Crunchbase). The current YC page lists Rounak Adhikary, Bishal Karmakar, and Sourya Majumder as the founding team (YC page). This indicates a team change between founding and YC acceptance.

**Rounak Adhikary** — Founder & CEO
- BSc Computer Science, Lovely Professional University (2021–2024) (LPU Happenings, May 2023)
- Stanford ASES, Draper University (YC page) — likely fellowship/accelerator programs
- Founded Woldix (web development agency) in 2021 at age 19; used revenue to fund early ProjectX development (Wellfound; Crunchbase)
- Entrepreneur in Residence, Ministry of Electronics and IT, India (2023) (Wellfound)
- Born July 18, 2002, in Kalyani, West Bengal (Wellfound)
- Twitter/X: No personal account found (company account @ProjectX_Cloud)
- LinkedIn: linkedin.com/in/rounakadhikary — "Founder & CEO, ProjectX (YC P26)"
- GitHub: github.com/rounak-adhikary — 3 repositories (GitHub)

**Bishal Karmakar** — CTO / Founding Engineer
- Based in Kalyani, West Bengal (GitHub)
- Expertise in Golang, Rust, C++, TypeScript, Docker, Kubernetes, Flutter; cloud platforms (AWS, GCP, Azure) (GitHub)
- Twitter/X: @BishalK_ — follower count not retrievable
- LinkedIn: linkedin.com/in/bishal-123-karmakar (GitHub profile link)
- GitHub: github.com/BishalK007 — 29 repositories, 23 stars, 3 followers (GitHub)
- Email: bishal@projectx.cloud (GitHub)

**Sourya Majumder** — COO
- Previously scaled IT consulting operations to ~120K MRR (YC page)
- BTech, West Bengal University of Technology; MBA, Manonmaniam Sundaranar University (ZoomInfo — note: may refer to a different Sourya Majumder)
- Twitter/X: No public account found
- LinkedIn: Not confirmed (multiple profiles with similar names)
- GitHub: No public repos found

**Co-founder relationship:** Rounak Adhikary and Bishal Karmakar are both based in Kalyani, West Bengal (Wellfound; GitHub), suggesting geographic proximity as a connection. No shared prior employer or university overlap was identified from available data.

**Founder-market fit:** Rounak has been building ProjectX since 2022 (age 20), demonstrating sustained commitment to the cloud computing problem over 4 years (Crunchbase; Wellfound). Bishal brings systems-level engineering depth in Rust, Go, and container orchestration relevant to building a cloud OS (GitHub). Sourya's IT consulting operations experience is relevant to enterprise sales and scaling. The team has attracted grants from Google Cloud, Microsoft, and AWS, indicating technical credibility with hyperscaler programs. The YC page mentions team expertise from CISCO, NVIDIA, Wharton, and IITs (YC page), though it is unclear which team members this refers to — it may reference advisors or broader team beyond the three founders.

## Key Risks

**Name collision and brand confusion:** "ProjectX" is an extremely common name shared by a trading platform (ProjectX Trading), multiple other startups, and generic project codenames. This creates SEO challenges, investor confusion, and potential trademark disputes. Mitigation: the company uses "projectx.cloud" as its domain and "ProjectX_Cloud" as social handles.

**Founding team turnover:** Two of three original co-founders (Ronit Banerjee, Suvrakamal Das) listed on Crunchbase are no longer on the YC page, replaced by Bishal Karmakar and Sourya Majumder (Crunchbase; YC page). Early co-founder departures at pre-seed may indicate founder disagreements or equity complications.

**GPU unit economics:** Per-app dedicated GPU allocation is computationally expensive. At pre-seed scale, the company must demonstrate that per-app GPU utilization rates can support viable margins against hyperscaler compute costs. The $200K Google Cloud grant provides infrastructure credits, not recurring revenue (Startup Story Media). [Inferred]: When credits expire, the company will face full compute costs, which could pressure margins before reaching sufficient user density for GPU multiplexing efficiency.

**Product maturity and website state:** The company website returned a minimal/loading page at time of research, and the public beta was announced nearly two years ago (June 2024) with no publicly visible traction metrics since (Business Standard, July 2024). No user counts, download numbers, or customer logos are publicly available.

**Hyperscaler platform risk:** The product depends on cloud GPU infrastructure from AWS, GCP, and Azure. These providers could build competing per-app streaming features or change GPU pricing/availability. Google Cloud is both an investor/grantor and a potential competitor.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | DaaS market USD 4.5–9.82B in 2025, 11.67–19.4% CAGR (OpenPR, 2026; Research Nester, 2025) |
| SAM | No public data found |
| Traction | 1,542 LinkedIn followers (LinkedIn); Tiger Launch Princeton winner (Startup Story Media); WTC Innovation Award at IIT Bombay Eureka among 17,000 startups (Startup Story Media) |
| Revenue Signal | No public data found |
| Founders | Rounak Adhikary (CEO): BSc CS from LPU, Stanford ASES, Draper U, founded Woldix at 19. Bishal Karmakar (CTO): systems engineer, Go/Rust/C++/K8s. Sourya Majumder (COO): scaled IT consulting to ~120K MRR |
| Competitors | Neverinstall ($1.21M raised, revenue unknown, browser cloud PC — no per-app isolation); Vagon ($542K raised, revenue unknown, GPU streaming workstations — no multi-OS); Workspot ($84.65M raised, revenue unknown, enterprise DaaS — traditional per-desktop model) |
| Moat Signals | No public data found |
| Risk Factors | Founding team turnover, GPU unit economics at scale, name collision/brand confusion |
| Founder Reach | Rounak: LinkedIn (YC P26 headline), GitHub 3 repos. Bishal: Twitter @BishalK_ (count not retrievable), GitHub 23 stars. Sourya: No public data found |
| Distribution Signals | No public data found |
| Emails | bishal@projectx.cloud (GitHub profile of CTO) |
