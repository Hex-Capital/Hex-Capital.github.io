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
| YC Partner | Tyler Bosmeny |
| Emails | contact@crosslayerlabs.com |

## The Idea

**Problem:** Websites and APIs are vulnerable to impersonation attacks that exploit weaknesses across multiple layers of the Internet stack—DNS hijacking, BGP routing attacks, TLS certificate misissuance, and malicious JavaScript injection. These attacks can redirect traffic, intercept credentials, and steal funds. The 2022 KLAYswap incident, where a compromised JavaScript file led to a $2 million cryptocurrency theft, illustrates the financial damage (Princeton CITP Blog, Mar 2022). Current monitoring tools focus primarily on uptime rather than security across these layers (Keller Center page). Affected customer segments include healthcare, cryptocurrency, and banking/fintech organizations (company website). Existing solutions tend to monitor individual layers in isolation—e.g., BGP monitoring tools like Kentik or Qrator.Radar focus on routing, while certificate transparency logs focus on TLS—leaving cross-layer attack patterns undetected.

**Approach:** Crosslayer Labs provides "outside-in" monitoring of customer infrastructure, comprehensively discovering and monitoring all Internet dependencies including DNS, BGP, TLS certificates, and JavaScript (YC page). The platform correlates signals from different layers of the Internet stack to identify attack patterns that single-layer monitoring would miss. Alerts are actionable and include root cause analysis and remediation recommendations (YC page).

**Differentiation:** Existing EASM tools (Censys, IONIX, CrowdStrike Falcon Surface) focus broadly on attack surface discovery and vulnerability scanning. Crosslayer Labs differentiates through cross-layer signal correlation—specifically combining DNS, BGP, TLS, and JavaScript monitoring to detect impersonation attacks. The founding team invented Multi-Perspective Issuance Corroboration (MPIC), which is now a global Internet standard mandated by the CA/Browser Forum (Ballot SC-067, effective March 15, 2025) securing the issuance of every publicly-trusted HTTPS certificate (Google Online Security Blog, Mar 2025). This specific domain expertise in cross-layer network attacks is the basis of the product's detection capability.

**Business Model:** No public pricing page or pricing details were found on the company website. [Inferred]: Most likely monetization path is a SaaS subscription model with tiered pricing based on the number of monitored domains/assets, given the B2B security SaaS positioning and target enterprise customer segments (healthcare, crypto, fintech).

**TAM/SAM:** The global attack surface management market was valued at $1.79 billion in 2025, projected to reach $12.69 billion by 2033 at a 27.7% CAGR (Straits Research via search snippet). The External Attack Surface Management (EASM) sector specifically is projected to grow from $1.55 billion in 2024 to $6.55 billion by 2029 at a 33.5% CAGR (Frost & Sullivan via search snippet). An alternative estimate sizes the ASM market at $1.03 billion in 2025 with a 21.03% CAGR through 2034 (Fortune Business Insights via search snippet). [Inferred]: The SAM for cross-layer impersonation detection specifically—a subset of EASM focused on DNS/BGP/TLS/JS correlation—is a fraction of the broader EASM market, likely in the low hundreds of millions, though no public estimate exists for this specific niche.

**GTM / Distribution:** The company website features a Calendly demo scheduling link, indicating a sales-led motion (company website). Target verticals listed are healthcare, cryptocurrency, and banking/fintech (company website). [Inferred]: Most likely distribution path is direct sales to security teams at mid-market and enterprise organizations in these verticals, potentially leveraging the founders' extensive industry relationships from the MPIC standardization process with major CAs (Google, Apple, Amazon, Let's Encrypt, Cloudflare).

## Defensibility

The founding team invented the MPIC standard, which is now mandated by the CA/Browser Forum (Ballot SC-067) and deployed at Let's Encrypt, Google Trust Services, and Cloudflare, securing approximately 8 million HTTPS certificates daily (henrybirgelee.com). This gives the team deep domain expertise in the specific cross-layer attack vectors the product detects. The Open MPIC Project, founded by the team, won the 2025 IRTF Applied Networking Research Prize (henrybirgelee.com). The team has 15+ peer-reviewed publications at top security venues including USENIX, ACM CCS, NSDI, and IMC (henrybirgelee.com).

The cross-layer signal correlation approach—combining DNS, BGP, TLS, and JavaScript monitoring—requires specialized knowledge of how attacks propagate across Internet layers. This technical complexity constitutes a knowledge moat that would require competitors to develop similar multi-layer expertise.

Potential defensibility over time: as the platform monitors more customer infrastructure, it could develop a data advantage through accumulated attack pattern signatures across layers. However, this is unproven at the current stage.

**Market structure:** Large incumbents in the EASM space (CrowdStrike, Palo Alto Networks) focus on broad attack surface management and vulnerability scanning. Building a specialized cross-layer impersonation detection capability would require these incumbents to invest in BGP routing analysis, certificate transparency monitoring, and JavaScript supply chain analysis simultaneously—capabilities that are orthogonal to their existing scanning-and-inventory approach. [Inferred]: The structural barrier is primarily technical specialization: incumbents' R&D is oriented toward breadth of asset discovery rather than depth of cross-layer correlation, making this a low-priority investment for their product teams.

**Commoditization risk:** Individual components—BGP monitoring (Kentik, Qrator.Radar), certificate transparency monitoring (crt.sh, Sectigo), JavaScript integrity checking—exist as separate tools. A well-resourced competitor could assemble these components. The differentiated value lies in the correlation engine and the cross-layer attack pattern detection, which requires the specific academic and operational expertise this team possesses. Other academic groups researching Internet routing security could potentially build competing solutions.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator (Winter 2026 batch), Long Journey Ventures, and AE Investments (company website)
- Affiliated with Princeton University Keller Center entrepreneurship program (Keller Center page)
- The founding team's prior work (MPIC standard) secures over 700 million websites via 3 billion+ digital certificates (YC page) and is deployed at Let's Encrypt, Google Trust Services, and Cloudflare (henrybirgelee.com)
- Open MPIC Project: 10 repositories on GitHub; top repo aws-lambda-python has 16 stars and 11 forks (GitHub, Mar 2026)
- Crosslayer Labs GitHub organization: 1 public repository (crosslayerlabs-go-library, 0 stars, last updated Jan 2026) (GitHub)
- Company LinkedIn page exists (linkedin.com/company/108065591/); follower count not retrievable
- No company Twitter/X account found
- No Product Hunt launch found
- No public revenue or user count data found
- No job postings listed (0 open positions per YC page)

**Competitive landscape:**

1. **Censys** ($75M raised including $50M Series C; revenue unknown; key differentiator: broad Internet-wide scanning and asset discovery for external attack surface management vs. Crosslayer's specialized cross-layer impersonation detection) (SecurityWeek via search snippet)

2. **IONIX** ($50.3M total funding, Series A; revenue unknown; key differentiator: connective intelligence mapping digital supply chain dependencies vs. Crosslayer's protocol-layer signal correlation for impersonation attacks) (TechCrunch, Feb 2024 via search snippet)

3. **SecurityScorecard** ($292M–$378M total funding, ~$1B valuation; ~$50M revenue; key differentiator: security ratings and third-party risk scoring platform vs. Crosslayer's real-time impersonation attack detection) (Tracxn, Crunchbase via search snippet; Dextera Agent via search snippet for revenue)

4. **Detectify** ($45.9M raised; revenue unknown; key differentiator: crowdsourced ethical hacker community for vulnerability discovery vs. Crosslayer's automated cross-layer monitoring) (PitchBook via search snippet)

5. **CrowdStrike Falcon Surface** (CrowdStrike is a large public company; 15.8% ASM mindshare; key differentiator: integrated with broader endpoint/cloud security platform vs. Crosslayer's standalone cross-layer impersonation focus) (Gartner Peer Insights via search snippet)

**Why now:** The CA/Browser Forum passed Ballot SC-067 mandating Multi-Perspective Issuance Corroboration (MPIC) for all publicly-trusted TLS certificates, effective March 15, 2025, with full enforcement on September 15, 2025 (Google Online Security Blog, Mar 2025; Sectigo, 2025). This regulatory mandate—which the founders' research directly informed—has raised industry awareness of cross-layer Internet attacks. [Inferred]: The MPIC mandate creates a market education tailwind: CAs and enterprises that previously did not consider BGP-layer attacks on their infrastructure are now aware of the threat vector, potentially increasing demand for monitoring solutions that detect these attacks in real time beyond the certificate issuance stage.

## Founders & Team

**Henry Birge-Lee** — Co-founder & CEO
- BA Computer Science, Princeton University (henrybirgelee.com)
- Research Software Engineer at Princeton University in Computer Science and ECE departments, working under Prof. Prateek Mittal and Prof. Jennifer Rexford (now Princeton Provost) (henrybirgelee.com)
- Coded the first MPIC implementation in 2016; lead author of the 2018 paper introducing MPIC (henrybirgelee.com)
- Founded the Open MPIC Project and MPIC Labs (henrybirgelee.com)
- 15+ peer-reviewed papers at USENIX, ACM CCS, NSDI, IMC, PAM (henrybirgelee.com)
- Awards: 2025 IRTF Applied Networking Research Prize, 2022 Caspar Bowden PET Award runner-up, 2020 Caspar Bowden PET Award runner-up, 2017 HotPETS Best Talk Award (henrybirgelee.com)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/henry-birge-lee-211002121/ (YC page)
- GitHub: github.com/birgelee — 38 public repos; top repo passive-dcv (2 stars) (GitHub)

**Grace Cimaszewski** — Co-founder & CTO
- PhD student, Department of Electrical and Computer Engineering, Princeton University (Princeton ECE page)
- Research on TLS certificate security, BGP attacks on domain control validation, and MPIC (Princeton CITP Blog, Dec 2023)
- Co-authored research demonstrating how Let's Encrypt's MPIC implementation defends against real-world BGP attacks (Princeton CITP Blog, 2022)
- Co-authored research analyzing the 2022 KLAYswap cryptocurrency theft ($2M stolen via compromised JavaScript) (Princeton CITP Blog, Mar 2022)
- Published research on SCION and cross-border payments (SSRN)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/grace-c-bb3945a3/ (YC page)
- GitHub: No public repos found

**Dr. Prateek Mittal** — Co-founder & Chief Scientist
- B.Tech, Indian Institute of Technology Guwahati; MS and PhD, University of Illinois at Urbana-Champaign (advisor: Nikita Borisov) (UIUC ECE Alumni page via search snippet; Blavatnik Awards via search snippet)
- Professor of Electrical and Computer Engineering at Princeton University; affiliated with Computer Science and CITP (Princeton ECE page via search snippet)
- Interim Director, Center for Information Technology Policy (CITP), Princeton (2022–2023) (search snippet)
- Awards: ACM Grace Murray Hopper Award, Princeton E. Lawrence Keyes Jr. Award, ONR Young Investigator Prize, ARO Young Investigator Prize, NSF CAREER Award; faculty research awards from OpenAI, Mysten Labs, IBM, Intel, Google, Cisco, Siemens (search snippet)
- Research influenced the design of the Tor anonymity network and the Let's Encrypt Certificate Authority (search snippet)
- Twitter/X: @prateekmittal_ — follower count not retrievable (YC page)
- LinkedIn: linkedin.com/in/prateek-mittal-aa859a45 (YC page)
- GitHub: No public repos found

**Co-founder relationship:** Henry Birge-Lee and Grace Cimaszewski are both graduate researchers at Princeton University's ECE department, working under Prof. Prateek Mittal in the INSPIRE research group. They have co-authored multiple papers together, including research on MPIC, BGP attacks, and the KLAYswap incident (Princeton CITP Blog). Birge-Lee's personal website lists Mittal as his research advisor. The three co-founders share a Princeton University ECE affiliation and a multi-year research collaboration.

**Founder-market fit:** The founding team invented the core technology (MPIC) that now underpins the security of every publicly-trusted HTTPS certificate issued globally—a standard mandated by the CA/Browser Forum and adopted by Google, Apple, Amazon, Let's Encrypt, and Cloudflare. Prateek Mittal is a tenured Princeton professor and ACM Grace Murray Hopper Award recipient whose research has shaped the Tor network and Let's Encrypt. Henry Birge-Lee coded the first MPIC implementation and has 15+ publications in top security venues. Grace Cimaszewski has published on TLS security and real-world BGP attack analysis. The team's research directly maps to the product's cross-layer impersonation detection capability. Notable institutional backing includes Princeton University's Keller Center.

## Key Risks

**Incumbent platform bundling:** CrowdStrike holds 15.8% mindshare in the ASM category (Gartner Peer Insights via search snippet). Large security platforms (CrowdStrike, Palo Alto, Microsoft) could add cross-layer impersonation detection as a feature within their broader EASM offerings, reducing the standalone value proposition. Mitigation: the specialized academic expertise required for cross-layer correlation may delay incumbent feature development.

**Narrow attack vector focus:** The product specifically targets cross-layer impersonation attacks (DNS/BGP/TLS/JavaScript). If these attack vectors become less prevalent due to wider RPKI adoption, DNSSEC deployment, or other defensive technologies, the addressable market could shrink. The MPIC mandate itself partially mitigates the TLS certificate misissuance vector, potentially reducing one category of attacks the platform detects.

**Academic-to-commercial transition:** All three founders come from academic research backgrounds at Princeton. The transition from research prototype to production-grade enterprise SaaS requires building sales, customer success, and operational capabilities. The team is currently not hiring (0 open positions, YC page), which may slow commercial execution.

**Customer education burden:** Cross-layer impersonation attacks are a sophisticated threat vector that many security teams may not prioritize relative to more visible attack categories (ransomware, phishing, endpoint compromise). This may require significant education effort in the sales process, lengthening deal cycles.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Attack Surface Management: $1.79B in 2025, projected $12.69B by 2033 at 27.7% CAGR (Straits Research via search snippet); EASM sector: $1.55B in 2024, projected $6.55B by 2029 at 33.5% CAGR (Frost & Sullivan via search snippet) |
| SAM | No public data found for the specific cross-layer impersonation detection segment |
| Traction | YC W26 batch; backed by Long Journey Ventures and AE Investments (company website); Princeton Keller Center affiliated; Open MPIC Project top repo: 16 GitHub stars (GitHub, Mar 2026); founding team's MPIC standard secures 700M+ websites (YC page) |
| Revenue Signal | No public data found |
| Founders | Henry Birge-Lee (CEO): Inventor of MPIC, 15+ publications, 2025 IRTF Prize. Grace Cimaszewski (CTO): Princeton PhD student, TLS/BGP security researcher. Prateek Mittal (Chief Scientist): Princeton professor, ACM Grace Murray Hopper Award, shaped Tor & Let's Encrypt. |
| Competitors | Censys ($75M raised, revenue unknown, broad Internet scanning EASM); IONIX ($50.3M raised, revenue unknown, digital supply chain mapping); SecurityScorecard ($292M+ raised, ~$50M revenue, security ratings platform); Detectify ($45.9M raised, revenue unknown, crowdsourced vulnerability discovery); CrowdStrike Falcon Surface (public company, 15.8% ASM mindshare, integrated security platform) |
| Moat Signals | Team invented MPIC standard (now a global Internet mandate); 15+ peer-reviewed papers; ACM Hopper Award (Mittal); 2025 IRTF Prize (Open MPIC); deep cross-layer attack expertise |
| Risk Factors | Incumbent platform bundling, narrow attack vector focus, academic-to-commercial transition |
| Founder Reach | Henry Birge-Lee: Twitter not found, LinkedIn (profile exists), GitHub @birgelee 38 repos. Grace Cimaszewski: Twitter not found, LinkedIn (profile exists), GitHub not found. Prateek Mittal: Twitter @prateekmittal_ (count not retrievable), LinkedIn (profile exists), GitHub not found. |
| Distribution Signals | No Product Hunt launch found; no app store presence; Calendly demo link on website; 0 job postings (YC page) |
| Emails | contact@crosslayerlabs.com |
