# ProjectX

> Building Infinity, the cloud OS that runs all apps on any device.

| Field | Value |
|-------|-------|
| Website | https://www.projectx.cloud/ |
| YC Page | https://www.ycombinator.com/companies/projectx |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 6 |
| Location | Kalyani, West Bengal, India / San Francisco (LinkedIn, via search snippet) |
| Tags | |
| YC Partner | Andrew Miklas |
| Emails | bishal@projectx.cloud (GitHub profile, BishalK007) |

## The Idea

**Problem:** GPU-intensive applications (robotics simulators, CAD tools, AI workloads) require expensive local hardware. Over 75% of students in India lack access to high-quality computing devices (Business Standard/ANI, Jul 2024). Enterprise and education users currently rely on local workstations, traditional VDI, or full VM-based cloud desktops, which involve lengthy setup, high cost, and hardware dependency.

**Approach:** Infinity is a cloud-native OS that streams GPU-accelerated applications directly in browser tabs with dedicated per-app compute and sub-3-second cold starts (YC profile). No VMs, no local setup — users access apps like Blender, Unreal Engine, and DaVinci Resolve via a URL (YC profile). The platform uses advanced GPU optimization with flexible, usage-based billing (Business Standard/ANI, Jul 2024).

**Differentiation:**
- Shadow PC provides a full cloud Windows desktop ($38–55/mo) but requires a persistent VM session — not per-app streaming (shadow.tech pricing page).
- Paperspace (acquired by DigitalOcean for $111M, TechCrunch Jul 2023) focused on GPU VMs for ML workloads, not browser-native app streaming.
- Cameyo (acquired by Google, May 2024, Crunchbase) virtualizes Windows apps but lacks GPU-native streaming.
- Infinity differentiates by offering per-app GPU compute in browser tabs rather than a full desktop VM, with sub-3-second cold starts (YC profile).

**Business Model:** Website was not accessible via static fetch at time of research (JS-rendered SPA). No public pricing page found. [Inferred]: Most likely monetization path is usage-based billing (pay per compute hour/resources consumed), consistent with the "flexible billing system" described in the Business Standard/ANI article (Jul 2024), potentially with enterprise tiers for bulk LOI customers.

**TAM/SAM:**
- GPU as a Service market: $4.31B in 2024, projected $49.84B by 2032, CAGR 35.8% (Fortune Business Insights, via search snippet).
- Desktop as a Service market: ~$6.5–7.6B in 2024–2025 (Grand View Research, Market Research Future, via search snippets), CAGR ~11.67%.
- Cloud gaming market (adjacent): $2.27B in 2024, projected $21.04B by 2030, CAGR 44.3% (Grand View Research, via search snippet).
- [Inferred]: ProjectX's SAM sits at the intersection of DaaS and GPUaaS — specifically GPU-streamed professional applications — a narrower segment than the full TAM figures above.

**GTM / Distribution:**
- Pilot program with IIT Bombay (Business Standard/ANI, Jul 2024).
- Rs 20 Cr+ (~$2.4M) in signed LOIs (Business Standard/ANI search snippet, Jul 2024).
- 30,000+ community reported (Business Standard/ANI search snippet, Jul 2024).
- Exhibited at GITEX (gitex.com exhibitor page).
- [Inferred]: Initial GTM targets Indian educational institutions and enterprises, likely expanding to global enterprise HPC and creative professional verticals post-YC.

## Defensibility

- **Technical complexity:** Sub-3-second cold starts for GPU-accelerated applications streamed in browser tabs is a non-trivial systems engineering challenge combining GPU virtualization, low-latency streaming, and container orchestration (YC profile).
- **Switching costs:** [Inferred]: Once enterprises integrate Infinity into workflows (via LOIs), migration costs increase as teams build processes around the browser-based access model.
- No patents, network effects, or data moats identified from public sources at this stage.

**Market structure:** Traditional cloud providers (AWS, Azure, GCP) offer GPU VMs but not browser-native per-app streaming. [Inferred]: Hyperscalers' business model is built on selling raw compute (VMs, containers); building a consumer-friendly per-app streaming OS would cannibalize their higher-margin VM offerings and require fundamentally different product architecture and go-to-market.

**Commoditization risk:** The GPU cloud infrastructure layer is highly competitive — 95 companies tracked, 41 funded, $20.8B raised collectively (Tracxn Cloud GPU Platforms, 2025). Shadow PC, CoreWeave, and hyperscalers all have GPU streaming capabilities. The application-layer OS abstraction is the differentiator, but could be replicated by well-resourced competitors with streaming expertise.

## Market & Traction

**Traction signals:**
- $204K total funding (seed round, Google Cloud infrastructure grant, Dec 2023) (Tracxn, via search snippet)
- Rs 20 Cr+ (~$2.4M) in signed LOIs (Business Standard/ANI search snippet, Jul 2024)
- 30,000+ community (Business Standard/ANI search snippet, Jul 2024)
- Public beta launched June 28, 2024 (Business Standard/ANI, Jul 2024)
- Pilot with IIT Bombay (Business Standard/ANI, Jul 2024)
- Pontaq Ventures backing reported in 2025 (search snippet)
- IIM Bangalore Launchpad accelerator selection (Startup Story Media, Dec 2023)
- Twitter/X: @ProjectX_Cloud, joined Feb 2024 (X.com); follower count not retrievable
- Twitter/X CEO: @Rounacc, 683 followers (X.com)
- LinkedIn: ProjectX.Cloud company page (in.linkedin.com/company/projectx-cloud); follower count not retrievable
- Discord: ~116 members (discordbotlist.com)
- Exhibited at GITEX (gitex.com)
- No Product Hunt listing found
- Press: Business Standard/ANI (Jul 2024), Startup Story Media (Dec 2023), Indian Startup News (Dec 2023), The Tribune (Jan 2024)
- Awards: India's Best Student Startup at Tiger Launch Global Finals, Princeton University; World Trade Center Innovation Award at Eureka! IIT Bombay (among 17,000 startups) (LPU Happenings)
- Additional grants: Rs 10 lakh from Ministry of Commerce and Ministry of Electronics & IT; Rs 50 lakh+ from Microsoft Founders Programme and AWS Activate (Startup Story Media, Dec 2023)

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. ProjectX |
|---|---|---|
| **Shadow PC** | $105–169M total (Tracxn/Wikipedia) | Full cloud Windows desktop at $38–55/mo; persistent VM, not per-app streaming; consumer/gaming focus |
| **Paperspace** (DigitalOcean) | $35M raised, acquired for $111M (TechCrunch, Jul 2023) | GPU VMs for ML; developer-focused, not browser-native OS |
| **Cameyo** (Google) | Seed-funded, acquired by Alphabet May 2024 (Crunchbase); $770K revenue (GetLatka) | Windows app virtualization without GPU-native streaming |
| **Workspot** | $106M total (Tracxn) | Enterprise VDI replacement; traditional desktop virtualization, not per-app GPU streaming |
| **Frame** (Dizzion, ex-Nutanix) | $28.5M raised, acquired by Nutanix for $165M (SDxCentral), sold to Dizzion Jun 2023 | Cloud desktop streaming; enterprise-oriented, acquired twice — instability signal |

**Why now:**
- [Inferred]: GPU cloud cost curves have declined sharply as supply expanded — cloud GPU platforms collectively raised $20.8B, most in 2024 (Tracxn, 2025), driving price competition (e.g., Thunder Compute A100 at $0.78/hr vs. hyperscaler pricing).
- [Inferred]: Browser rendering capabilities (WebGPU, WebCodecs) have matured to support low-latency GPU streaming that was not feasible 2–3 years ago.
- [Inferred]: The rise of AI/ML workloads and multi-agent systems has created demand for on-demand GPU compute without local hardware investment.

## Founders & Team

**Rounak Adhikary** — Co-founder & CEO
- Born 2002, Kalyani, West Bengal (LPU Happenings). BSc Interaction Design, Lovely Professional University (2021–2024) (LPU Happenings). Draper University alumnus; IIM Bangalore Entrepreneurship program (Happenings@LPU). Stanford ASES (YC profile).
- Founded Woldix (tech consulting) at age 19, which funded early ProjectX development (Happenings@LPU).
- Entrepreneur in Residence, Ministry of Electronics and IT, India (2023) (Happenings@LPU).
- Twitter/X: @Rounacc — 683 followers (X.com)
- LinkedIn: linkedin.com/in/rounakadhikary — 500+ connections (LinkedIn)
- GitHub: github.com/rounak-adhikary — 3 public repos (GitHub)

**Bishal Karmakar** — Co-founder & CTO
- Bachelor's from Academy of Technology (ZoomInfo). Based in Madanpur, West Bengal (ZoomInfo).
- Expertise in Golang, Rust, C++, NextJS, TypeScript, Docker, Flutter (GitHub profile).
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/bishal-karmakar-2a234623a — "Leading Tech @ ProjectX.cloud" (LinkedIn)
- GitHub: github.com/BishalK007 — personal site bishal.pro (GitHub)

**Sourya Majumder** — Co-founder & COO
- Scaled an IT consulting team to ~$120K MRR prior to ProjectX (YC profile).
- Twitter/X: No confirmed public account found
- LinkedIn: in.linkedin.com/in/souryapx — "Redefining Enterprise HPC" (LinkedIn)
- GitHub: No public repos found

**Note:** The July 2024 Business Standard/ANI article lists original co-founders as Rounak Adhikari, Subhrakamal Das, Ronit Banerjee, and Suraj Kuncham. The YC Spring 2026 page lists Rounak Adhikary, Bishal Karmakar, and Sourya Majumder. ZoomInfo also lists Suraj Kuncham (COO), Gautam Vora (Head of Product Design), and others. [Inferred]: The founding team has been restructured between the 2024 launch and the 2026 YC application.

**Co-founder relationship:** Both Rounak Adhikary and Bishal Karmakar are from West Bengal (Kalyani and Madanpur respectively) (multiple sources). No shared employer or university overlap is visible from available data.

**Founder-market fit:** Rounak Adhikary brings entrepreneurial experience (founded Woldix at 19, EIR at Ministry of Electronics & IT), accelerator experience (Draper U, IIM Bangalore, Stanford ASES), and the original product vision (LPU Happenings). Bishal Karmakar brings deep systems programming expertise across languages critical for GPU streaming infrastructure (GitHub profile). Sourya Majumder brings operational scaling experience from his consulting venture (YC profile). The team recruited experts from CISCO, NVIDIA, Wharton, and IITs (Business Standard/ANI, Jul 2024).

## Key Risks

**Name collision:** "ProjectX" is shared with ProjectX.com, a futures trading platform with established web presence. This creates brand confusion in search results, investor diligence, and SEO (observed during research — multiple searches returned the trading platform).

**Founding team restructuring:** The founding team listed on the YC page (Adhikary, Karmakar, Majumder) differs from the team in the 2024 press releases (Adhikari, Das, Banerjee, Kuncham). Multiple co-founder departures at pre-seed stage may indicate alignment issues (Business Standard/ANI Jul 2024 vs. YC profile).

**GPU infrastructure cost dependency:** Streaming GPU-accelerated applications requires significant compute infrastructure. The company's $204K in funding (Tracxn) is minimal relative to infrastructure costs. Competitors like Shadow ($105–169M raised) and CoreWeave ($5B+ in debt and equity, TechCrunch 2024) have vastly more capital for GPU procurement.

**Competitive convergence:** Google acquired Cameyo (May 2024, Crunchbase) for app virtualization. Hyperscalers adding browser-native GPU streaming could compress the opportunity window. The cloud GPU platforms sector has 95 tracked companies (Tracxn, 2025).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | GPUaaS: $4.31B in 2024, projected $49.84B by 2032, CAGR 35.8% (Fortune Business Insights, via search snippet); DaaS: ~$6.5–7.6B in 2024–2025 (Grand View Research/Market Research Future, via search snippets) |
| SAM | No public data found |
| Traction | Rs 20 Cr+ (~$2.4M) signed LOIs (Business Standard/ANI search snippet, Jul 2024); 30,000+ community (Business Standard/ANI search snippet, Jul 2024); IIT Bombay pilot (Business Standard/ANI, Jul 2024); public beta Jun 2024 (Business Standard/ANI, Jul 2024); Discord ~116 members (discordbotlist.com) |
| Revenue Signal | No public data found |
| Founders | Rounak Adhikary (CEO): Stanford ASES, Draper U, founded Woldix at 19, EIR at Ministry of Electronics & IT. Bishal Karmakar (CTO): systems engineer, Golang/Rust/C++. Sourya Majumder (COO): scaled IT consulting to ~$120K MRR. |
| Competitors | Shadow PC ($105–169M raised, revenue unknown, full cloud Windows desktop vs. per-app streaming); Paperspace/DigitalOcean ($35M raised, acquired $111M, GPU VMs for ML vs. browser-native OS); Cameyo/Google (seed-funded, $770K revenue via GetLatka, Windows app virtualization vs. GPU-native streaming); Workspot ($106M raised, revenue unknown, enterprise VDI vs. per-app GPU streaming) |
| Moat Signals | No public data found |
| Risk Factors | Name collision with ProjectX.com futures trading, founding team restructuring, GPU infrastructure capital intensity, competitive convergence from hyperscalers |
| Founder Reach | Rounak Adhikary: Twitter @Rounacc 683 followers, LinkedIn 500+ connections, GitHub 3 repos. Bishal Karmakar: LinkedIn present, GitHub BishalK007. Sourya Majumder: LinkedIn present, no Twitter/GitHub found. |
| Distribution Signals | Exhibited at GITEX (gitex.com); Tiger Launch Princeton (LPU Happenings); Eureka! IIT Bombay winner among 17,000 startups (LPU Happenings); IIM Bangalore Launchpad (Startup Story Media, Dec 2023); no Product Hunt listing found |
| Emails | bishal@projectx.cloud (GitHub profile, BishalK007) |
