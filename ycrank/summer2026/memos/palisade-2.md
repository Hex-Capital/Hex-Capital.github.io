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
| YC Partner | Jon Xu |
| Emails | prince@palisade-ai.com |

## The Idea

- **Problem:** Companies operating server, cloud-device, GPU, or on-device fleets face privilege-escalation, remote-code-execution, and memory-corruption vulnerabilities that network-, cloud-, and application-layer tools may not observe, while fleet-wide mitigation can take weeks ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).
- **Approach:** Palisade analyzes syscalls, eBPF traces, process and memory events, and network packets at the kernel level, then installs mitigations as kernel-enforced rules across endpoints ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).
- **Differentiation:** Palisade combines AI-based kernel telemetry analysis with fleet-wide rule enforcement, while Falco centers on runtime detection, Tetragon supports eBPF observability and enforcement, and Tracee emphasizes runtime forensics ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes); [Better Stack, 2026](https://betterstack.com/community/comparisons/tracee-alternatives/)).
- **Business Model:** [Inferred]: A per-endpoint or fleet-priced enterprise subscription is a possible monetization path because the product is deployed across organizational device fleets, but no pricing was published.
- **TAM/SAM:** The global endpoint-security market was valued at $37.2 billion in 2025 and is projected to reach $95.9 billion by 2033 at a 12.7% CAGR from 2026 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/endpoint-security-market)).
- **GTM / Distribution:** Palisade publicly requested introductions to security and infrastructure leads operating large endpoint fleets and offered founder-led demonstrations ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Deployment-specific kernel telemetry and the results of accepted or rejected remediation rules could support proprietary detection and policy data, but no customer deployments or accumulated dataset were disclosed.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Cisco’s Tetragon and Aqua Security’s Tracee already derive security telemetry from eBPF, while Tetragon also performs in-kernel enforcement ([Cisco, Apr 2024](https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Isovalent-to-Define-the-Future-of-Multicloud-Networking-and-Security/default.aspx); [Better Stack, 2026](https://betterstack.com/community/comparisons/tracee-alternatives/)).

## Market & Traction

- **Traction signals:**
  - Palisade demonstrated detection and remediation of CVE-2024-1086, CVE-2025-6019, and CVE-2025-32463 ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).
  - 79 LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/palisade-ai/)).
  - 5 votes on its YC launch page ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).
  - Zero jobs listed on the YC company page ([YC company page, Jul 2026](https://www.ycombinator.com/companies/palisade-2)).
  - Website not accessible at time of research (palisade-ai.com, Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - SentinelOne ($696.5M raised, revenue unknown): endpoint protection operating at the device kernel, versus Palisade’s stated focus on AI-generated fleet-wide OS vulnerability fixes ([TechCrunch, Jun 2021](https://techcrunch.com/2021/06/04/cybersecurity-sentinelone-ipo/); [TechCrunch, Oct 2015](https://techcrunch.com/2015/10/13/sentinelone-raises-25-million-to-attack-security-threats-at-the-kernel/)).
  - Cisco/Isovalent Tetragon ($69M raised before acquisition, revenue unknown): open-source eBPF security observability and runtime enforcement for cloud-native workloads, versus Palisade’s endpoint-fleet remediation workflow ([Cisco, Apr 2024](https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Isovalent-to-Define-the-Future-of-Multicloud-Networking-and-Security/default.aspx); [CyberDB, Jan 2024](https://www.cyberdb.co/wp-content/uploads/2024/01/Cyber-MA-Q4-2023-vendors.pdf)).
  - Aqua Security/Tracee ($325M raised, revenue unknown): eBPF-based runtime security and forensics oriented toward cloud-native environments, versus Palisade’s automatic fleet-wide mitigation ([Aqua Security, Jan 2024](https://www.aquasec.com/news/60m-additional-funding/); [Better Stack, 2026](https://betterstack.com/community/comparisons/tracee-alternatives/)).
  - Sysdig/Falco (~$750M raised, revenue unknown): open-source syscall-based cloud and container threat detection, versus Palisade’s detection-plus-remediation proposition ([Sysdig, Dec 2021](https://sysdig.com/blog/ceo-suresh-on-sysdig-series-g-funding/)).
  - CrowdStrike ($480M raised before IPO, revenue unknown): broad endpoint detection, incident response, and threat intelligence, versus Palisade’s kernel-level OS vulnerability detection and rule deployment ([Axios, May 2019](https://www.axios.com/2019/05/15/crowdstrike-ipo-cybersecurity-2020-hacking)).
- **Why now:** [Inferred]: The availability of eBPF/LSM-BPF enforcement and AI processing of syscall, memory, process, and packet telemetry enables automated kernel-policy generation that Palisade says converts weeks-long fleet remediation into minutes ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).

## Founders & Team

- **Fnu Prince (Founder):**
  - Background: Prince left Caltech at age 18, reports professional red-team and blue-team work beginning at age 16, and has worked in machine learning, operating systems, and competitive-programming education ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes); [Competitive Programming Initiative](https://joincpi.org/)).
  - Twitter/X: No public account found.
  - LinkedIn: “Fnu Prince — Caltech” with 207 followers ([LinkedIn, accessed Jul 2026](https://www.linkedin.com/in/fnu-prince-a98405276)).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Prince reports professional offensive- and defensive-security work since age 16 and identifies OS vulnerabilities as a recurring problem encountered in that work ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).

## Key Risks

- **Automated-remediation safety:** [Inferred]: A mistaken kernel-enforced rule could interrupt legitimate processes across an entire fleet, and no public false-positive, rollback, testing, or availability measurements were found.
- **Platform coverage:** Public demonstrations reference LSM-BPF, eBPF, Linux-kernel CVEs, syscalls, and sudo, but no Windows, macOS, mobile-OS, or supported-distribution matrix was published ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).
- **Open-source substitution:** Tetragon already provides eBPF observability and enforcement, while Falco and Tracee provide open-source kernel-level detection or forensics ([Cisco, Apr 2024](https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Isovalent-to-Define-the-Future-of-Multicloud-Networking-and-Security/default.aspx); [Better Stack, 2026](https://betterstack.com/community/comparisons/tracee-alternatives/)).
- **Evidence gap:** Palisade’s public materials show three CVE examples but disclose no customers, paid deployments, revenue, benchmark methodology, detection rates, or remediation-error rates ([YC launch, Jul 2026](https://www.ycombinator.com/launches/Rpj-palisade-ai-that-detects-and-fixes-os-vulnerabilities-across-every-endpoint-in-minutes)).
- **Name collision:** Search results contain unrelated companies named Palisade in DMARC software, cryptocurrency custody, cybersecurity consulting, and AI-safety research, increasing the risk of misattributing funding or traction data ([Palisade DMARC announcement, Jan 2024](https://www.palisade.email/resources-post/palisade-raises-a-1-5m-pre-seed-led-by-boreal-ventures)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $37.2B global endpoint-security market in 2025, projected to $95.9B by 2033 at 12.7% CAGR from 2026 (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | Demonstrated detection and remediation of three named CVEs (YC Launch, Jul 2026); 79 LinkedIn followers (LinkedIn, Jul 2026); 5 YC launch votes (YC Launch, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Fnu Prince (Founder): Caltech dropout; professional red-team and blue-team work since age 16; ML and operating-systems background (YC Launch, Jul 2026) |
| Competitors | SentinelOne ($696.5M raised, revenue unknown, kernel-level endpoint protection) (TechCrunch, Jun 2021); Cisco/Isovalent Tetragon ($69M raised, revenue unknown, open-source eBPF enforcement) (Cisco/CyberDB, 2024); Aqua Security/Tracee ($325M raised, revenue unknown, eBPF runtime forensics) (Aqua Security, Jan 2024); Sysdig/Falco (~$750M raised, revenue unknown, cloud and container detection) (Sysdig, Dec 2021) |
| Moat Signals | No public data found |
| Risk Factors | Automated-remediation safety, Linux/eBPF-centered public evidence, open-source and incumbent substitution (YC Launch; Cisco; Better Stack, 2026) |
| Founder Reach | Fnu Prince: LinkedIn 207 followers; Twitter and GitHub data unavailable (LinkedIn, accessed Jul 2026) |
| Distribution Signals | 79 LinkedIn followers (LinkedIn, Jul 2026); 5 YC launch votes and founder-led demo requests (YC Launch, Jul 2026); zero YC job postings (YC company page, Jul 2026) |
| Emails | prince@palisade-ai.com (YC Launch, Jul 2026) |
