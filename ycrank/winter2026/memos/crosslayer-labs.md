# Crosslayer Labs

> Protect, monitor and defend your Internet presence

| Field | Value |
|-------|-------|
| Website | https://www.crosslayerlabs.com/ |
| YC Page | https://www.ycombinator.com/companies/crosslayer-labs |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Cybersecurity |

## The Idea

**Problem:** Enterprises face website and API impersonation attacks enabled by vulnerabilities across multiple Internet infrastructure layers — DNS hijacking, BGP route hijacking, TLS certificate misissuance, and compromised JavaScript dependencies. These attacks allow adversaries to impersonate legitimate web services, leading to credential theft, financial loss, and data exfiltration. The Keller Center page cites the Klayswap crypto platform losing $2 million from a single compromised JavaScript file as an example (Keller Center, Princeton University). Existing network monitoring solutions focus on uptime rather than security detection and do not account for the complexity of modern web service dependencies such as software supply chains and third-party hosting (Keller Center, Princeton University).

**Approach:** Crosslayer Labs provides "outside-in" monitoring of customer infrastructure, comprehensively discovering and monitoring all Internet dependencies across DNS, BGP, TLS certificates, and JavaScript (YC company page). The platform correlates signals from different layers of the Internet stack to identify attack patterns, producing actionable alerts with root cause analysis and remediation recommendations (YC company page). The company website lists four core capabilities: Attack Surface Discovery ("understand the attack surface of APIs and web services"), Security Analytics ("advanced threat intelligence to identify attack patterns"), Ongoing Monitoring ("monitoring and correlating attack signals across layers"), and the foundational Multi-Perspective Issuance Corroboration (MPIC) technology (crosslayerlabs.com).

**Differentiation:** The founding team invented the MPIC standard, which became a globally mandated internet standard via CA/Browser Forum Ballot SC-067 (unanimously approved August 2024, reporting mode effective February 18, 2025, enforcement effective September 15, 2025) (CA/Browser Forum, August 2024). MPIC secures the issuance of approximately 8 million HTTPS certificates per day (henrybirgelee.com). Existing attack surface management tools (e.g., Censys, CyCognito, Detectify) primarily scan for known vulnerabilities, misconfigurations, and exposed assets. Crosslayer Labs differentiates by correlating signals across multiple Internet layers (DNS, BGP, TLS, JavaScript) to detect infrastructure-level impersonation attacks — a cross-layer approach that general ASM tools do not natively perform. BGP hijack monitoring tools like Cloudflare Radar, Qrator.Radar, and the open-source ARTEMIS project focus on the routing layer alone without correlating across the full stack (Cloudflare blog; APNIC blog, February 2024).

**Business Model:** No public pricing page is visible on the company website. The site offers "Get Security Assessment" and "Schedule Demo" calls-to-action, suggesting an enterprise sales motion (crosslayerlabs.com). [Inferred]: Most likely monetization path is a SaaS subscription model with tiered pricing based on number of monitored domains/assets, given the B2B security SaaS positioning and demo-driven sales process.

**TAM/SAM:** The global attack surface management market was valued at $1.03 billion in 2025 and is projected to reach $5 billion by 2034 at a 21.03% CAGR (Fortune Business Insights, 2025 via search snippet). The external attack surface management (EASM) sub-segment specifically was estimated at $1.55 billion in 2024, projected to reach $6.55 billion by 2029 at a 33.5% CAGR (Frost & Sullivan, 2024 via search snippet). MarketsandMarkets estimates the broader ASM market at $0.9 billion in 2024, growing to $3.3 billion by 2029 at 29.3% CAGR (MarketsandMarkets via search snippet).

**GTM / Distribution:** The website targets healthcare, cryptocurrency, and banking/fintech verticals (crosslayerlabs.com). Investors include Y Combinator, AE Investments, and Long Journey VC (crosslayerlabs.com). [Inferred]: Most likely distribution path is direct enterprise sales, leveraging the team's deep relationships with certificate authorities (Google, Apple, Amazon, Let's Encrypt, Sectigo) built through MPIC standardization work, and Princeton's institutional network.

## Defensibility

The founding team invented MPIC, which is now a globally mandated internet standard (CA/Browser Forum Ballot SC-067) securing the issuance of approximately 8 million certificates per day (henrybirgelee.com; CA/Browser Forum, August 2024). Henry Birge-Lee coded the first MPIC implementation in 2016, led the 2018 USENIX paper introducing MPIC, and co-authored the CA/Browser Forum ballot mandating it (henrybirgelee.com). The team founded and leads the Open MPIC Project, which provides open-source MPIC implementations used in production by several leading certificate authorities (henrybirgelee.com). The Open MPIC project won the 2025 IRTF Applied Networking Research Prize (henrybirgelee.com). Dr. Prateek Mittal's research has influenced the design of the Tor network and Let's Encrypt (Princeton ECE faculty page).

This deep technical expertise in cross-layer Internet infrastructure attacks represents a knowledge-based moat that is difficult to replicate — the team has over a decade of published academic research at venues including USENIX Security and ACM CCS (henrybirgelee.com; scholar.google.com). Switching costs could develop as customers integrate Crosslayer's monitoring into their security operations workflows.

**Market structure:** The major EASM incumbents (CrowdStrike, Palo Alto Networks, Censys) focus on vulnerability scanning, asset discovery, and exposure management across broad attack surfaces. Cross-layer correlation of DNS, BGP, TLS, and JavaScript signals for impersonation detection is a specialized capability that requires deep protocol-level expertise that general-purpose security platforms have not prioritized. [Inferred]: Incumbents could add BGP monitoring as a feature, but the cross-layer correlation engine combining BGP, DNS, TLS, and JavaScript dependency analysis requires niche expertise that is not a natural extension of their existing scanning architectures.

**Commoditization risk:** Individual components of the solution — DNS monitoring, BGP route monitoring, TLS certificate transparency monitoring — are available as standalone tools (e.g., Cloudflare Radar for BGP, Certificate Transparency logs). The differentiation lies in cross-layer signal correlation and the team's deep domain expertise in how these layers interact to enable impersonation attacks. A well-resourced security vendor could build similar correlation capabilities, though reproducing the team's decade of academic research and CA/Browser Forum relationships would take time.

## Market & Traction

**Traction signals:**
- The founding team's MPIC standard secures over 700 million websites via 3+ billion digital certificates (YC company page) and approximately 8 million certificates are issued daily using MPIC (henrybirgelee.com). These are metrics of the standard's adoption, not of Crosslayer Labs' commercial product.
- Crosslayer Labs was showcased at Princeton's Innovation Forum 2025 (Keller Center, Princeton University).
- The Open MPIC Project won the 2025 IRTF Applied Networking Research Prize (henrybirgelee.com).
- Company LinkedIn page exists at linkedin.com/company/crosslayer-labs; follower count not retrievable.
- No Twitter/X company account found.
- No Product Hunt launch found.
- No public revenue, customer count, or ARR data found.
- 0 job postings listed on the YC page (YC company page).
- Contact email: contact@crosslayerlabs.com (crosslayerlabs.com).

**Competitive landscape:**

1. **Censys** ($131M raised per PitchBook via search snippet; 130% ARR growth reported in October 2023 per SecurityWeek): Provides internet-wide scanning and external attack surface management. Focuses on asset discovery and vulnerability identification across the internet. Differentiator vs. Crosslayer: Censys scans for exposed assets and known vulnerabilities but does not perform cross-layer correlation of DNS/BGP/TLS/JavaScript signals for impersonation detection.

2. **CyCognito** ($153M raised, $800M valuation per Tracxn via search snippet): Automated external attack surface management platform. Differentiator vs. Crosslayer: CyCognito automates reconnaissance like an attacker to find exposed assets but focuses on vulnerability discovery rather than cross-layer impersonation attack detection.

3. **Detectify** ($45.9M raised, acquired by Insight Partners October 2024 per search snippet): Surface monitoring and application scanning powered by crowdsourced ethical hackers. Pricing starts at $302/month for up to 25 internet-facing assets (Detectify website via search snippet). Differentiator vs. Crosslayer: Detectify focuses on web application vulnerability scanning via crowdsourced payloads rather than infrastructure-level impersonation detection.

4. **CrowdStrike Falcon Surface** (public company; acquired Reposify for EASM capability per CrowdStrike press release): Adversary-driven EASM integrated into the broader Falcon platform. Differentiator vs. Crosslayer: Falcon Surface is embedded in a large endpoint/cloud security platform; Crosslayer offers specialized cross-layer impersonation detection as its core focus.

5. **IONIX** ($15M Series A, February 2024 per search snippet): Attack surface management with connective intelligence. Differentiator vs. Crosslayer: IONIX maps asset connections and business context but does not specialize in BGP/DNS/TLS cross-layer correlation.

**Why now:**
- CA/Browser Forum Ballot SC-067 was unanimously approved in August 2024 and made MPIC mandatory for all certificate authorities starting in 2025 (reporting mode February 18, 2025; enforcement September 15, 2025) (CA/Browser Forum, August 2024). This regulatory shift created industry-wide awareness of BGP-based impersonation risks and validated the threat model that Crosslayer Labs addresses.
- [Inferred]: The MPIC mandate created a moment of heightened awareness among enterprises and CAs about infrastructure-layer attacks on HTTPS, creating a receptive market for a product that monitors for these attacks continuously beyond just certificate issuance.

## Founders & Team

**Henry Birge-Lee** — Founder & CEO
- B.A. Computer Science, Princeton University (henrybirgelee.com via search snippet). PhD student in Electrical and Computer Engineering, Princeton University, under Prateek Mittal and Jennifer Rexford (henrybirgelee.com).
- Previously: Research Software Engineer at Princeton University in CS and ELE departments (henrybirgelee.com).
- Coded the first MPIC implementation in 2016; lead author of the 2018 USENIX Security paper "Bamboozling Certificate Authorities with BGP" introducing MPIC (henrybirgelee.com). Co-authored CA/Browser Forum Ballot SC-067 mandating MPIC industry-wide (henrybirgelee.com). Led the first ethical demonstration of PKI vulnerability to BGP attacks at HotPETs '17 (henrybirgelee.com).
- Founder and lead developer of the Open MPIC Project, winner of 2025 IRTF Applied Networking Research Prize (henrybirgelee.com).
- Twitter/X: No personal account found.
- LinkedIn: linkedin.com/in/henry-birge-lee-211002121/ (LinkedIn search result).
- GitHub: github.com/birgelee — 38 repositories (GitHub via search snippet). Also leads the open-mpic GitHub organization (github.com/open-mpic); top repo aws-lambda-python has 16 stars (GitHub).

**Grace Cimaszewski** — Founder & CTO
- PhD student in Electrical and Computer Engineering, Princeton University, cohort 2020 (Princeton ECE page).
- Presented at USENIX Security 2023 on "How Effective is Multiple-Vantage-Point Domain Control Validation?" (USENIX).
- Demonstrated live BGP attacks against certificate issuance alongside Birge-Lee, contributing to the momentum that led to MPIC mandates (Princeton Engineering news, October 2024).
- Author on CITP Blog and Freedom to Tinker (Princeton-based cybersecurity publications) (blog.citp.princeton.edu; freedom-to-tinker.com).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/grace-cimaszewski-bb3945a3 (LinkedIn search result).
- GitHub: github.com/gcimaszewski — 8 repositories (GitHub via search snippet).

**Dr. Prateek Mittal** — Founder & Chief Scientist
- Professor of Electrical and Computer Engineering, Princeton University. Affiliated faculty in Computer Science and the Center for Information Technology Policy (CITP) (Princeton ECE page).
- Education: PhD from University of Illinois at Urbana-Champaign (Blavatnik Awards page via search snippet).
- Won the ACM Grace Murray Hopper Award in 2024 for "enhancing internet privacy and security" (Princeton Engineering, June 2024). Named ACM Distinguished Member in 2025 (Princeton Engineering, February 2025).
- Faculty research awards from OpenAI, Google, IBM, Intel, Facebook, Cisco, and Siemens. NSF CAREER Award, ONR Young Investigator Award, ARO Young Investigator Prize (Princeton ECE page via search snippet).
- Research influenced the design of the Tor network and Let's Encrypt Certificate Authority (Princeton ECE page).
- Former interim director of CITP (July 2022 – June 2023) (CITP page).
- Twitter/X: @prateekmittal_ (x.com/prateekmittal_); follower count not retrievable.
- LinkedIn: linkedin.com/in/prateek-mittal-aa859a45/ — 500+ connections (LinkedIn via search snippet).
- GitHub: No personal public repos found.

**Co-founder relationship:** All three founders come from Princeton University's Electrical and Computer Engineering department. Henry Birge-Lee was a research software engineer and then PhD student working under Prateek Mittal. Grace Cimaszewski is a PhD student in the same department (cohort 2020) and co-demonstrated the MPIC live BGP attack alongside Birge-Lee (Princeton Engineering news, October 2024). The team has collaborated on MPIC research and the Open MPIC Project for multiple years.

**Founder-market fit:** The team invented the core technology (MPIC) that now secures every HTTPS certificate globally and co-authored the CA/Browser Forum ballot that mandated it. Their combined research output spans over a decade of work on BGP attacks, TLS certificate security, DNS security, and cross-layer Internet infrastructure threats — published at top venues (USENIX Security, ACM CCS). Prateek Mittal's ACM Grace Hopper Award and relationships with major industry players (Google, Apple, Let's Encrypt, Sectigo) provide credibility and potential enterprise access. The team is building a commercial product directly from the research domain where they are recognized global experts.

## Key Risks

**Narrow attack vector focus:** Crosslayer Labs focuses specifically on infrastructure-level impersonation attacks (BGP hijacking, DNS hijacking, TLS misissuance, JavaScript supply chain compromise). While these are real threats, they represent a subset of the broader attack surface management market. Enterprises may prefer a single platform covering vulnerability scanning, asset discovery, and impersonation detection rather than a point solution. Mitigation: The company could expand its monitoring scope over time, and the cross-layer correlation engine may detect attack patterns that broader tools miss.

**Academic-to-commercial transition risk:** All three founders come from academic research backgrounds at Princeton with no publicly documented prior startup experience or commercial exits. Translating deep technical research into a scalable enterprise SaaS product with sales, customer success, and go-to-market functions is a distinct challenge. Mitigation: Y Combinator provides startup commercialization support; the company has also secured backing from AE Investments and Long Journey VC (crosslayerlabs.com).

**Incumbent expansion threat:** Major cybersecurity platforms (CrowdStrike, Palo Alto Networks) have already acquired EASM startups (CrowdStrike acquired Reposify) and are expanding into adjacent monitoring capabilities. Cloudflare already provides free BGP hijack detection via Cloudflare Radar (Cloudflare blog). These incumbents have existing enterprise customer relationships and could add cross-layer correlation as a feature.

**Chief Scientist availability:** Dr. Prateek Mittal is a tenured Princeton professor with an active research lab, CITP affiliation, and advisory/award commitments. His role as "Chief Scientist" suggests he may not be full-time, which could limit his operational contribution. No public data found on his time commitment.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.03B ASM market in 2025, projected $5B by 2034 at 21.03% CAGR (Fortune Business Insights via search snippet); EASM sub-segment $1.55B in 2024, projected $6.55B by 2029 at 33.5% CAGR (Frost & Sullivan via search snippet) |
| SAM | No public data found |
| Traction | MPIC standard (invented by founders) secures ~8M certificates/day and 700M+ websites (henrybirgelee.com; YC page) — standard adoption, not company product metrics. Princeton Innovation Forum 2025 showcase (Keller Center). 2025 IRTF Applied Networking Research Prize for Open MPIC (henrybirgelee.com). No commercial product traction data found. |
| Revenue Signal | No public data found |
| Founders | Henry Birge-Lee (CEO): Princeton BA CS, PhD student ECE, MPIC inventor, lead author USENIX 2018. Grace Cimaszewski (CTO): Princeton PhD student ECE, USENIX Security 2023 presenter. Prateek Mittal (Chief Scientist): Princeton Professor ECE, ACM Grace Hopper Award 2024, ACM Distinguished Member 2025. |
| Competitors | Censys ($131M raised, 130% ARR growth in 2023, broad internet scanning vs. cross-layer impersonation focus); CyCognito ($153M raised, $800M valuation, automated recon vs. impersonation detection); Detectify ($45.9M raised, acquired by Insight Partners Oct 2024, web app scanning vs. infrastructure-layer monitoring); CrowdStrike Falcon Surface (public co., platform-embedded EASM vs. specialized cross-layer detection); IONIX ($15M Series A Feb 2024, connective intelligence vs. BGP/DNS/TLS correlation) |
| Moat Signals | Team invented MPIC, now a globally mandated internet standard (CA/Browser Forum Ballot SC-067). Open MPIC Project used in production by leading CAs. 2025 IRTF Applied Networking Research Prize. Decade of academic publications at USENIX Security and ACM CCS. |
| Risk Factors | Narrow attack vector focus limiting TAM addressability, academic-to-commercial transition with no prior startup exits, incumbent expansion (CrowdStrike/Cloudflare already in adjacent space), Chief Scientist part-time availability uncertainty |
| Founder Reach | Henry Birge-Lee: Twitter not found, LinkedIn linkedin.com/in/henry-birge-lee-211002121/, GitHub 38 repos + open-mpic org (top repo 16 stars). Grace Cimaszewski: Twitter not found, LinkedIn linkedin.com/in/grace-cimaszewski-bb3945a3, GitHub 8 repos. Prateek Mittal: Twitter @prateekmittal_ (count not retrievable), LinkedIn 500+, GitHub not found. |
| Distribution Signals | No Product Hunt launch found. No app store or Chrome Web Store presence found. No Discord/Slack community found. |
| Emails | contact@crosslayerlabs.com (crosslayerlabs.com) |
