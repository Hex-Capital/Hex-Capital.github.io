# ProjectX

> Infinity: the first OS where humans and agents work with no limits.

| Field | Value |
|-------|-------|
| Website | https://www.projectx.cloud/ |
| YC Page | https://www.ycombinator.com/companies/projectx |
| Batch | Spring 2026 (YC P26) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 6 (YC page); Tracxn reports 26 as of Apr 2026 |
| Location | San Francisco, CA, USA |
| Tags | Marketplace, DevOps, Cloud Computing, Infrastructure, AI |
| YC Partner | Andrew Miklas (YC page) |
| Emails | b***@projectx.cloud (ZoomInfo, redacted); no other public emails found |

## The Idea

- **Problem:** Conventional OSes constrain users to "one cursor, one keyboard, one hardware, one app in focus," which the company frames as a constraint for emerging human + AI-agent workflows where agents need parallel compute (company description, YC page).
- **Approach:** InfinityOS runs each application in its own cloud "computer" with dedicated GPU, input, and environment, mixing Windows and Linux in a single browser-accessed session with cold start in seconds (company description, YC page).
- **Differentiation:** Tracxn lists Canonical, OpenStack, and Neverinstall as top competitors; vs. Amazon WorkSpaces / Nutanix Frame / Neverinstall which stream a single OS desktop, ProjectX claims per-app isolated VMs with independent GPUs concurrent in one session (Tracxn 2026; G2 alternatives listing).
- **Business Model:** No pricing page accessible at time of research — website returned a loading screen on WebFetch; [Inferred]: consumption / per-session GPU compute billing given the per-app dedicated-GPU architecture described on the YC page.
- **TAM/SAM:** Desktop-as-a-Service market projected at $10.5B (Gartner, 2026, via search snippet) and $9.82B in 2025 growing 19.4% CAGR (Research Nester, via search snippet); no public SAM figure tied to "agent-native OS" segment.
- **GTM / Distribution:** [Inferred]: Browser-delivered self-serve trial given "runs on the browser of any device" (YC page); no public GTM or partnership data found.

## Defensibility

- **Moat today:** No defensibility signals (patents, exclusive partnerships, scaled customer base) found in public sources at time of research.
- **Future moat:** [Inferred]: Per-app GPU virtualization stack and low-latency multi-VM session orchestration could become a technical moat if "cold start in seconds" performance claim (YC page) holds at scale; unproven publicly today.
- **Market structure:** [Inferred]: Hyperscaler DaaS offerings (AWS WorkSpaces, Azure Virtual Desktop) optimize whole-desktop streaming and would need to re-architect billing and session models to support per-app GPU isolation, but no structural barrier preventing this is documented.
- **Commoditization risk:** Established cloud-desktop vendors (Kasm, Neverinstall, Frame, Shadow.tech) and hyperscaler GPU pools could replicate per-app session orchestration; Paperspace was acquired by DigitalOcean for $111M in cash (TechCrunch, Jul 2023), showing incumbents are actively buying into the GPU-cloud workspace space.

## Market & Traction

- **Traction signals:**
  - Total funding $704K across 2 rounds, first round Dec 29, 2023, latest Seed Apr 2026 amount undisclosed (Tracxn, 2026 via search snippet).
  - Recognition: World Trade Center Innovation Award 2024 at Eureka! / IIT Bombay (~17,000 startups) (search snippet on Rounak Adhikary).
  - Represented India at Tiger Launch student-entrepreneurship competition, Princeton (search snippet).
  - Part of IIM Bangalore Launchpad accelerator; named investor/affiliate interest reported includes IFC, Elevation Capital, Campus Fund, Kalaari Capital (Inc42 via search snippet — not confirmed as closed rounds).
  - Twitter @ProjectXcloud: 14 followers, joined Oct 2022 (X.com via search snippet).
  - LinkedIn: company page linkedin.com/company/projectx-cloud exists (LinkedIn); follower count not retrievable.
  - No Product Hunt launch found; no Discord/Slack community data found; no press coverage in named tier-1 publications found.
- **Competitors:**
  - Paperspace (raised $35M total; acquired by DigitalOcean for $111M cash, Jul 2023 — TechCrunch): GPU cloud + virtual desktops, single-OS streaming model.
  - Neverinstall (funding not found in this search): browser-delivered virtual desktops connected to AWS/Azure/GCP/Oracle backends (search snippet); single-workspace model vs. per-app VM.
  - Shadow.tech (Blade/Shadow, revenue unknown; emerged from bankruptcy 2021): consumer-focused full-PC streaming via browser at pc.shadow.tech (Shadow blog).
  - Amazon WorkSpaces (part of AWS, revenue unknown standalone): managed Windows/Linux cloud desktops at scale (AWS).
  - Kasm Workspaces (funding/revenue not found in this search): containerized browser/desktop streaming (Kasm.com).
- **Why now:** [Inferred]: Rise of AI coding/computer-use agents in 2024-2026 (e.g., agent benchmarks requiring sandboxed desktop environments) creates demand for multi-session isolated compute, which the company explicitly frames as "when half the users of a computer are not people" (Inc42 description via search snippet).

## Founders & Team

- **Rounak Adhikary (Co-founder, CEO):**
  - Background: Bachelor's in Interaction Design, Lovely Professional University 2021-2024; founded Woldix (tech consulting) at age 19, which funded ProjectX's initial stages; born Jul 18, 2002 (Crunchbase, Highperformr, search snippets).
  - Twitter/X: handle not found in searches.
  - LinkedIn: "ProjectX (YC P26)" — linkedin.com/in/rounakadhikary (LinkedIn).
  - GitHub: No public repos found.
- **Bishal Karmakar (Co-founder, CTO):**
  - Background: Bachelor's from Academy of Technology; affiliations listed include Stanford ASES, Draper U, IIT Bombay; specializes in systems, streaming, cloud infra (LinkedIn, search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "Co-Founder, CTO @ ProjectX.cloud (YC ...)" — linkedin.com/in/bishal-karmakar-2a234623a (LinkedIn).
  - GitHub: No public repos found.
- **Sourya Majumder (Co-founder, COO):**
  - Background: Prior experience scaling an IT consulting team to ~120K MRR (LinkedIn snippet); based in Bengaluru (LinkedIn).
  - Twitter/X: No public account found.
  - LinkedIn: "Redefining Enterprise HPC" — in.linkedin.com/in/souryapx (LinkedIn).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on shared prior employer or university across the three current co-founders; original 2022 incorporation included Rounak Adhikary plus Ronit Banerjee and Suvrakamal Das (Tracxn/search snippet), suggesting a co-founder change before the YC P26 batch.
- **Founder-market fit:** Rounak's prior tech-consulting venture (Woldix) self-funded the company through 2023-2024 (search snippet on Rounak Adhikary); Bishal's stated focus on "systems, streaming, cloud infra" (LinkedIn snippet) aligns with the per-app GPU VM technical approach; no notable advisors, board members, or named lead investors confirmed for closed rounds.

## Key Risks

- **Hyperscaler substitution:** AWS WorkSpaces, Azure Virtual Desktop, and Google's cloud workstations already serve browser-delivered Windows/Linux desktops at scale (AWS; G2 alternatives listing). DigitalOcean's $111M Paperspace acquisition (TechCrunch, Jul 2023) signals incumbents are buying rather than ceding GPU-workspace share.
- **Technical feasibility at unit economics:** "Each app in its own independent computer — own GPU" (YC page) implies high per-session GPU cost; the company has not published benchmarks, density numbers, or pricing showing the model is viable below incumbent VDI cost curves. No public data found on margins or COGS.
- **Founder transition risk:** Founding team listed in 2022 search snippets (Adhikary, Ronit Banerjee, Suvrakamal Das) differs from the YC P26 founding team (Adhikary, Karmakar, Majumder), indicating co-founder turnover between original incorporation and the YC batch; no public explanation found.
- **Name disambiguation / brand collisions:** Multiple unrelated entities use the "ProjectX" name (a prop-firm trading tool at propfirmapp.com/projectx; @ProjectX, @ProjectXNetwork, @prjx_hl handles on X), creating discoverability and SEO friction (search results).
- **Geographic / entity complexity:** Delaware C-corp HQ in San Francisco with India engineering subsidiary (search snippet on Rounak Adhikary / Tracxn); creates IP, hiring, and regulatory coordination requirements not yet documented publicly.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | DaaS market $10.5B 2026 (Gartner, via search snippet); $9.82B 2025 at 19.4% CAGR (Research Nester, via search snippet) |
| SAM | No public data found |
| Traction | Total funding $704K over 2 rounds (Tracxn, 2026); Twitter @ProjectXcloud 14 followers (X, joined Oct 2022); WTC Innovation Award 2024 at IIT Bombay Eureka! (search snippet); IIM Bangalore Launchpad affiliate (Inc42, via search snippet) |
| Revenue Signal | No public data found |
| Founders | Rounak Adhikary (CEO): Lovely Professional University, prior founder of Woldix consulting. Bishal Karmakar (CTO): Academy of Technology grad, Stanford ASES / Draper U / IIT Bombay affiliations, systems & streaming focus. Sourya Majumder (COO): scaled prior IT consulting team to ~120K MRR. |
| Competitors | Paperspace ($35M raised, acquired by DigitalOcean for $111M cash Jul 2023, single-OS GPU cloud — TechCrunch); Neverinstall (funding unknown, revenue unknown, browser DaaS on hyperscaler backends — G2); Shadow.tech (funding/revenue unknown, consumer full-PC streaming — Shadow blog); Amazon WorkSpaces (part of AWS, standalone revenue unknown, managed cloud desktops — AWS); Kasm Workspaces (funding/revenue unknown, containerized browser/desktop streaming — Kasm.com) |
| Moat Signals | No public data found |
| Risk Factors | Hyperscaler substitution, per-app GPU unit economics unproven, co-founder transition between 2022 and YC P26 |
| Founder Reach | Rounak Adhikary: Twitter not found, LinkedIn present (count not retrievable), GitHub none found. Bishal Karmakar: Twitter not found, LinkedIn present (count not retrievable), GitHub none found. Sourya Majumder: Twitter not found, LinkedIn present (count not retrievable), GitHub none found. |
| Distribution Signals | Company Twitter @ProjectXcloud 14 followers (X, joined Oct 2022); no Product Hunt launch found; no Chrome extension or app-store presence found |
| Emails | b***@projectx.cloud (ZoomInfo redacted, Bishal Karmakar); no other public emails found |

Sources:
- [ProjectX YC company page](https://www.ycombinator.com/companies/projectx)
- [ProjectX.cloud website](https://www.projectx.cloud/)
- [ProjectX Crunchbase](https://www.crunchbase.com/organization/project-x-6465)
- [ProjectX Tracxn profile](https://tracxn.com/d/companies/projectx/__XosquKSmlTS0Wov4knnKUuqgdos-Kig0Yi7_tgHhO3o)
- [ProjectX Inc42 profile](https://inc42.com/company/projectx-cloud/)
- [Rounak Adhikary Crunchbase](https://www.crunchbase.com/person/rounak-adhikari)
- [Rounak Adhikary LinkedIn](https://www.linkedin.com/in/rounakadhikary/)
- [Bishal Karmakar LinkedIn](https://www.linkedin.com/in/bishal-karmakar-2a234623a/)
- [Sourya Majumder LinkedIn](https://in.linkedin.com/in/souryapx)
- [@ProjectXcloud on X](https://x.com/ProjectXcloud)
- [DigitalOcean acquires Paperspace for $111M — TechCrunch](https://techcrunch.com/2023/07/06/digitalocean-acquires-cloud-computing-startup-paperspace-for-111m-in-cash/)
- [Gartner IT Spending Forecast Feb 2026](https://www.gartner.com/en/newsroom/press-releases/2026-02-03-gartner-forecasts-worldwide-it-spending-to-grow-10-point-8-percent-in-2026-totaling-6-point-15-trillion-dollars)
- [Research Nester DaaS Market](https://www.researchnester.com/reports/desktop-as-a-service-daas-market/4123)
- [G2 Cloud OS alternatives](https://www.g2.com/products/cloud-os/competitors/alternatives)
- [Neverinstall](https://neverinstall.com/)
- [Shadow PC in Browser](https://shadow.tech/us/blog/shadow-browser/)
