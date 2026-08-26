# Palisade

> AI that finds and fixes OS-level vulnerabilities across device fleets

| Field | Value |
|-------|-------|
| Website |  |
| YC Page | https://www.ycombinator.com/companies/palisade-2 |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 1 |
| Location | Los Angeles, CA, USA |
| Tags | Artificial Intelligence, SaaS, B2B, Cybersecurity |
| YC Partner | Jon Xu ([YC company page](https://www.ycombinator.com/companies/palisade-2), Aug 2026) |
| Emails | prince@palisade-ai.com ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026) |

## The Idea

- **Problem:** Companies operating hundreds or thousands of servers, GPU nodes, cloud devices, or on-device endpoints rely primarily on network-, cloud-, and application-layer security products, leaving OS vulnerabilities difficult to detect and manual fleet mitigations taking weeks ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).
- **Approach:** Palisade observes syscalls, eBPF traces, process and memory events, and network packets, applies AI to detect OS vulnerabilities, and installs mitigations as kernel-enforced rules across the fleet ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).
- **Differentiation:** Palisade targets OS vulnerabilities and fleet-wide kernel-rule remediation, whereas Oligo profiles library and function execution, Upwind correlates kernel telemetry with cloud, network, and identity context, and Aqua provides broader code-to-cloud workload protection ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), [Oligo](https://www.oligo.security/runtime-platform/overview), [Upwind](https://www.upwind.io/ebpf), [Aqua](https://www.aquasec.com/products/cwpp-cloud-workload-protection/), Aug 2026).
- **Business Model:** [Inferred]: Palisade could sell enterprise SaaS priced per protected endpoint or fleet because it targets companies operating endpoint fleets, but no pricing page or commercial terms were publicly accessible.
- **TAM/SAM:** The closest public TAM proxy, cloud workload protection platforms, was valued at $5.74 billion in 2026 and projected to reach $25.51 billion by 2034 at a 20.5% CAGR ([Fortune Business Insights](https://www.fortunebusinessinsights.com/cloud-workload-protection-market-106491), Jul 2026); no public SAM data was found for automated OS-level vulnerability remediation.
- **GTM / Distribution:** [Inferred]: Founder-led outreach to security and infrastructure leaders is the initial channel because the launch explicitly requests introductions to operators of OS-level endpoint fleets ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).

## Defensibility

- **Moat today:** Technical-complexity signal: Palisade reports a live LSM-BPF control plane, syscall-level decisions, fleet-wide kernel-rule enforcement, and detection of three named Linux privilege-escalation vulnerabilities ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).
- **Future moat:** [Inferred]: Telemetry and remediation outcomes from deployed fleets could create proprietary mappings between kernel behavior, vulnerabilities, and safe mitigations, but no customer scale or proprietary-data volume has been disclosed.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Oligo, Upwind, and Aqua already deploy eBPF-based runtime sensors, making kernel telemetry reproducible by funded security vendors even if Palisade’s automated OS-fix workflow differs ([Oligo](https://www.oligo.security/runtime-platform/overview), [Upwind](https://www.upwind.io/ebpf), [Aqua](https://www.aquasec.com/products/cwpp-cloud-workload-protection/), Aug 2026).

## Market & Traction

- **Traction signals:**
  - 95 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/palisade-ai/), Aug 2026).
  - 0 YC job postings ([YC company page](https://www.ycombinator.com/companies/palisade-2), Aug 2026).
  - Launch YC product post published in July 2026 ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Oligo Security ($80M raised, revenue unknown; latest $50M Series B in January 2025 led by Greenfield Partners): uses an eBPF sensor for application library- and function-level runtime visibility rather than Palisade’s stated focus on OS-vulnerability remediation ([Business Wire](https://www.businesswire.com/news/home/20250129117162/en/Oligo-Security-Raises-%2450M-Series-B-to-Redefine-Security-for-Modern-Applications), [Oligo](https://www.oligo.security/runtime-platform/overview), Jan 2025).
  - Upwind ($180M raised, revenue unknown; latest $100M Series A in December 2024 led by Craft Ventures): combines eBPF telemetry with cloud inventory, network, API, and identity context rather than focusing solely on OS flaws ([TechCrunch](https://techcrunch.com/2024/12/02/confirmed-cloud-security-specialist-upwind-raises-100m-on-a-900m-valuation/), [Upwind](https://www.upwind.io/ebpf), Dec 2024).
  - Aqua Security ($325M raised, revenue unknown; latest $60M Series E extension in January 2024 led by Evolution Equity Partners): spans code-to-cloud security across containers, Kubernetes, serverless functions, and VMs, including eBPF-based runtime controls ([Aqua funding announcement](https://www.aquasec.com/news/60m-additional-funding/), [Aqua CWPP](https://www.aquasec.com/products/cwpp-cloud-workload-protection/), Jan 2024).
- **Why now:** [Inferred]: Adoption is shifting toward automated runtime response, with Sysdig reporting that more than 70% of surveyed organizations used behavior-based detection and that 140% more organizations automatically killed processes during 2026 ([Sysdig 2026 report](https://www.sysdig.com/blog/sysdig-2026-cloud-native-security-and-usage-report), Apr 2026).

## Founders & Team

- **Fnu Prince (Founder):**
  - Background: Prince says he left Caltech at age 18, worked as an ML researcher and engineer, and performed professional red-team and blue-team security work from age 16, while no prior company or exit was found publicly ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026); YC reports a team of one, although the company LinkedIn page displays both Fnu Prince and Luyao Lei under Employees ([YC](https://www.ycombinator.com/companies/palisade-2), [LinkedIn](https://www.linkedin.com/company/palisade-ai/), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Caltech,” with 207 followers ([LinkedIn](https://www.linkedin.com/in/fnu-prince-a98405276), May 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Prince’s self-reported red-team, blue-team, machine-learning, and operating-systems experience corresponds directly to Palisade’s kernel-level detection and remediation mechanism ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).

## Key Risks

- **Automated-remediation safety:** [Inferred]: Installing kernel-enforced rules fleet-wide within minutes could block legitimate processes if a detection or generated mitigation is incorrect, and no public rollback, approval, or policy-testing mechanism was found ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).
- **Platform coverage:** [Inferred]: The disclosed LSM-BPF implementation and three demonstrated Linux CVEs indicate Linux-focused coverage, while no Windows or macOS mechanism was publicly documented ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).
- **Feature overlap:** Oligo, Upwind, and Aqua already provide eBPF-based kernel telemetry and runtime enforcement, creating substitution risk if they add Palisade-like OS remediation ([Oligo](https://www.oligo.security/runtime-platform/overview), [Upwind](https://www.upwind.io/ebpf), [Aqua](https://www.aquasec.com/products/cwpp-cloud-workload-protection/), Aug 2026).
- **Public verification and access:** Website not accessible at time of research, and the three-CVE efficacy claims were founder-published without public customer validation or independent benchmark results ([YC Launch](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes), Jul 2026).
- **Name ambiguity:** Unrelated entities use “Palisade,” including an email-deliverability product on Product Hunt and Palisade Research in AI security, creating search-result disambiguation risk ([Product Hunt](https://www.producthunt.com/leaderboard/daily/2024/2/23), Feb 2024; [Hacker News](https://news.ycombinator.com/item?id=38099086), Nov 2023).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.74B cloud workload protection platform market in 2026, projected to $25.51B by 2034 at 20.5% CAGR (Fortune Business Insights, Jul 2026) |
| SAM | No public data found |
| Traction | 95 LinkedIn followers (LinkedIn, Aug 2026); 0 YC job postings (YC, Aug 2026); Launch YC post published (YC Launch, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Fnu Prince (Founder): Caltech dropout at 18; self-reported ML researcher/engineer and professional red-team/blue-team practitioner since 16 (YC Launch, Jul 2026) |
| Competitors | Oligo Security ($80M raised, revenue unknown, application function-level runtime protection; Business Wire, Jan 2025); Upwind ($180M raised, revenue unknown, cloud-contextualized eBPF security; TechCrunch, Dec 2024); Aqua Security ($325M raised, revenue unknown, code-to-cloud CNAPP; Aqua, Jan 2024) |
| Moat Signals | LSM-BPF control plane, syscall-level telemetry, kernel-rule enforcement, and three disclosed Linux CVE detections (YC Launch, Jul 2026) |
| Risk Factors | Automated kernel-rule rollout and Linux-focused disclosed coverage (YC Launch, Jul 2026); eBPF competitor overlap (Oligo, Upwind, and Aqua product pages, Aug 2026) |
| Founder Reach | Fnu Prince: 207 LinkedIn followers (LinkedIn, May 2026); no public Twitter/X or GitHub data found |
| Distribution Signals | 95 LinkedIn followers (LinkedIn, Aug 2026); 0 YC job postings (YC, Aug 2026); Launch YC post (YC Launch, Jul 2026) |
| Emails | prince@palisade-ai.com (YC Launch, Jul 2026) |
