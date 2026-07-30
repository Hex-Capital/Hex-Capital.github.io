# Nebula Security

> A security engineer in your team

| Field | Value |
|-------|-------|
| Website | https://nebusec.ai |
| YC Page | https://www.ycombinator.com/companies/nebula-security |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 4 |
| Location | Vancouver, WA, USA; Remote |
| Tags | Artificial Intelligence, B2B, Security, Cybersecurity, Enterprise |
| YC Partner | Ankit Gupta ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/nebula-security)) |
| Emails | info@nebusec.ai, root@nebusec.ai, founders@nebusec.ai ([company website](https://nebusec.ai/), [security-audit page](https://nebusec.ai/security-audit/), [Y Combinator](https://www.ycombinator.com/companies/nebula-security), Jul 2026) |

## The Idea

- **Problem:** Software teams must detect code-level, architectural, and business-logic vulnerabilities before release, while existing alternatives include rule-based scanners, manual review, and periodic penetration tests that can generate false positives or miss multistep flaws ([Nebula Security audit page](https://nebusec.ai/security-audit/); [Gecko Security launch](https://www.ycombinator.com/companies/gecko-security), Jul 2026).
- **Approach:** VEGA scans full repositories and pull requests, monitors code changes, analyzes root causes, produces proofs of concept and patches, and combines automated analysis with researcher-led validation ([Nebula Security Vega page](https://nebusec.ai/vega/); [Y Combinator](https://www.ycombinator.com/companies/nebula-security), Jul 2026).
- **Differentiation:** Nebula pairs its agent with exploit-focused researchers, whereas Gecko uses a compiler-accurate indexer plus LLM threat modeling, ZeroPath combines LLMs with AST analysis and one-click patches, XBOW continuously attacks deployed applications, and Semgrep combines deterministic rules with AI reasoning ([Nebula audit process](https://nebusec.ai/security-audit/); [Gecko](https://www.ycombinator.com/companies/gecko-security); [ZeroPath](https://zeropath.com/blog/introducing-zeropath-v1); [XBOW](https://xbow.com/news/xbow-raises-120m-to-scale); [Semgrep](https://semgrep.dev/blog/2025/series-d-announcement/)).
- **Business Model:** The Researcher plan is pay-as-you-go with metered features and per-repository subscriptions, while the Enterprise plan uses contact-sales pricing for multiple repositories ([Nebula Security Vega page](https://nebusec.ai/vega/), Jul 2026).
- **TAM/SAM:** The application-security market was estimated at $33.7 billion in 2024 and projected to reach $55 billion by 2029 at a 10.3% CAGR, while SAST software was estimated at $6.25 billion in 2025 and projected to reach $13.15 billion by 2033 at a 9.74% CAGR ([Research and Markets](https://www.researchandmarkets.com/report/application-security); [Future Market Report](https://www.futuremarketreport.com/industry-report/static-application-security-testing-software-market/)).
- **GTM / Distribution:** Nebula combines per-repository product access with demo-led enterprise sales and opened VEGA to enterprise customers through a private beta ([Vega page](https://nebusec.ai/vega/); [Nebula LinkedIn](https://www.linkedin.com/company/nebula-security/), Jul 2026).

## Defensibility

- **Moat today:** Nebula reports 1,162 validated findings, 98 public CVEs, and a public exploit repository with 1,186 GitHub stars, providing evidence of vulnerability-discovery and exploit-validation capability ([Vega page](https://nebusec.ai/vega/); [GitHub](https://github.com/NebuSec), Jul 2026).
- **Future moat:** [Inferred]: Repeated scans, exploit validation, patch outcomes, and researcher feedback could create a proprietary vulnerability dataset, but no public evidence shows that customer-derived data currently produces a compounding advantage.
- **Market structure:** No structural barrier identified at this stage, because competing startups and model providers can sell code scanning or autonomous penetration testing through similar developer and enterprise channels ([Axios](https://www.axios.com/2026/03/06/openai-codex-security-ai-cyber); [Gecko](https://www.ycombinator.com/companies/gecko-security)).
- **Commoditization risk:** OpenAI, Gecko, ZeroPath, Semgrep, and XBOW offer overlapping automated discovery, validation, remediation, or offensive-testing functions ([Axios](https://www.axios.com/2026/03/06/openai-codex-security-ai-cyber); [ZeroPath](https://zeropath.com/blog/introducing-zeropath-v1); [XBOW](https://xbow.com/news/xbow-raises-120m-to-scale)).

## Market & Traction

- **Traction signals:**
  - More than $400,000 in Google bug-bounty rewards ([Y Combinator](https://www.ycombinator.com/companies/nebula-security), Jul 2026).
  - 1,162 validated findings, including 1,125 Linux-kernel bugs, eight Chrome zero-days, and 98 public CVEs ([Vega page](https://nebusec.ai/vega/), Jul 2026).
  - CyberMeowfia exploit repository reached 1,186 GitHub stars ([GitHub](https://github.com/NebuSec), Jul 2026).
  - 6,000 X followers for @nebusecurity ([TwStalker profile listing](https://twstalker.com/ShadowChasing1), Jul 2026).
  - 109 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/nebula-security/), Jul 2026).
  - Enterprise private beta and zero YC job postings ([LinkedIn](https://www.linkedin.com/company/nebula-security/); [Y Combinator](https://www.ycombinator.com/companies/nebula-security), Jul 2026).
  - Company and CEO mentioned in Inc. coverage of YC’s 2026 class ([Inc.](https://www.inc.com/lucia-auerbach/y-combinator-requests-for-startups-fall-2026/91379840), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Gecko Security (funding unknown, $440,000 ARR reported): compiler-indexed AI SAST focused on business-logic flaws ([Latka](https://getlatka.com/companies/gecko.security); [Y Combinator](https://www.ycombinator.com/companies/gecko-security)).
  - ZeroPath (funding unknown, revenue unknown): LLM-plus-AST SAST with automated patch generation ([ZeroPath](https://zeropath.com/blog/introducing-zeropath-v1)).
  - XBOW ($120 million Series C, revenue unknown): continuous autonomous penetration testing of deployed applications rather than repository-centered researcher audits ([XBOW](https://xbow.com/news/xbow-raises-120m-to-scale), Mar 2026).
  - Semgrep ($204 million raised, revenue unknown): open-core, rule-based and AI-assisted application-security platform supporting approximately 40 languages ([Semgrep](https://semgrep.dev/about); [Series D announcement](https://semgrep.dev/blog/2025/series-d-announcement/)).
- **Why now:** [Inferred]: AI-assisted software output and AI-enabled offensive capabilities are increasing review volume, while OpenAI’s March 2026 launch of Codex Security showed model providers entering automated vulnerability discovery and remediation ([Axios](https://www.axios.com/2026/03/06/openai-codex-security-ai-cyber); [Semgrep](https://semgrep.dev/blog/2025/series-d-announcement/)).

## Founders & Team

- **Eten “Xiaochen” Zou (CEO):**
  - Background: PhD in cybersecurity and MS in computer science from UC Riverside, bachelor’s from UESTC, former Microsoft security researcher, and author of Linux-kernel vulnerability research ([personal CV](https://etenal.me/download/cv_zou_xiaochen.pdf); [USENIX](https://www.usenix.org/conference/usenixsecurity24/presentation/zhang-zheng)).
  - Twitter/X: @ETenal7, approximately 1,000 followers ([TwStalker listing](https://site.twstalker.com/saksham_gupta__), Jul 2026).
  - LinkedIn: “Nebula Security,” with 657 followers ([LinkedIn](https://www.linkedin.com/in/xiaochen-zou-phd-29540b168), Jul 2026).
  - GitHub: @plummm; CVE-2022-27666 had 207 stars ([GitHub](https://github.com/plummm), Jul 2026).
- **Yuan Tan (CTO):**
  - Background: Lanzhou University undergraduate, former UC Riverside cybersecurity PhD student, Black Hat USA speaker, Linux contributor, and initial developer of VEGA ([Linux-kernel mailing list](https://www.mail-archive.com/linux-kernel%40vger.kernel.org/msg2642306.html); [Y Combinator](https://www.ycombinator.com/companies/nebula-security)).
  - Twitter/X: No public account found.
  - LinkedIn: No confirmed public profile found.
  - GitHub: No public repos found.
- **Frank “Yifan” Wu (Research Lead):**
  - Background: UC Riverside PhD dropout, DEF CON finalist, DARPA AIxCC program-repair team lead, Black Hat speaker, and co-author of NDSS security research ([Y Combinator](https://www.ycombinator.com/companies/nebula-security); [NDSS proceedings](https://www.ndss-symposium.org/wp-content/uploads/NDSS2026_Proceedings_Front_Matter.pdf)).
  - Twitter/X: @FrankOverF1ow, approximately 1,000 followers ([TwStalker listing](https://twstalker.com/hareh4ru), Jul 2026).
  - LinkedIn: “Nebula Security (YC S26)” ([LinkedIn](https://www.linkedin.com/in/yifan-wu-cs)).
  - GitHub: No public repos found.
- **Xiaochuan Yu (Research Lead):**
  - Background: MS from UC San Diego, former Zellic researcher, three-time DEF CON finalist, Black Hat speaker, and r3kapig member ([Y Combinator](https://www.ycombinator.com/companies/nebula-security)).
  - Twitter/X: @Nyaaaaa_ovo, approximately 3,000 followers ([TwStalker](https://mobile.twstalker.com/Nyaaaaa_ovo), Jul 2026).
  - LinkedIn: “Nebula Security (YC S26),” with 75 followers ([LinkedIn](https://www.linkedin.com/in/xiaochuan-yu-3103a5297), Jul 2026).
  - GitHub: @KpwnZ; Def1nit3lyN0tAJa1lbr3akTool had 412 stars ([GitHub](https://github.com/KpwnZ/Def1nit3lyN0tAJa1lbr3akTool), Jul 2026).
- **Co-founder relationship:** Eten, Yuan, and Frank conducted research at UC Riverside, while Frank and Xiaochuan competed with r3kapig ([Eten CV](https://etenal.me/download/cv_zou_xiaochen.pdf); [OpenReview](https://openreview.net/profile?id=~Yifan_Wu28); [Y Combinator](https://www.ycombinator.com/companies/nebula-security)).
- **Founder-market fit:** The founders’ documented work spans kernel exploitation, browser vulnerabilities, program analysis, DARPA automated repair, Pwn2Own, DEF CON, Black Hat, and more than $400,000 in Google bounty awards ([Y Combinator](https://www.ycombinator.com/companies/nebula-security)).

## Key Risks

- **Platform commoditization:** OpenAI launched Codex Security with vulnerability finding, validation, and patch proposals, creating overlap with VEGA’s workflow ([Axios](https://www.axios.com/2026/03/06/openai-codex-security-ai-cyber)).
- **Validation throughput:** Yuan Tan stated that all VEGA reports are human-reviewed and include human-written patches while the system has found hundreds of Linux bugs, creating a potential review bottleneck; the team plans to limit report volume and prioritize maintained code ([Linux-kernel mailing list](https://www.mail-archive.com/linux-kernel%40vger.kernel.org/msg2642306.html), Jul 2026).
- **Commercial-conversion evidence:** Public metrics concern CVEs, exploit demonstrations, bounties, and social reach, while no public revenue or paying-customer count was found; the published mitigation is pay-as-you-go access and an enterprise private beta ([Vega page](https://nebusec.ai/vega/); [LinkedIn](https://www.linkedin.com/company/nebula-security/)).
- **Name ambiguity:** Search results also identify an unrelated Los Angeles company at nebulasecurity.io and Zyxel products using “Nebula Security,” which can complicate company discovery ([unrelated LinkedIn page](https://www.linkedin.com/company/nebulasecurity); [Zyxel documentation](https://bulletin.nebula.zyxel.com/online-help/nebula-cc/NCC_UG_v17.10.pdf)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $33.7B application-security market in 2024, projected to $55B by 2029 at 10.3% CAGR ([Research and Markets](https://www.researchandmarkets.com/report/application-security)) |
| SAM | $6.25B SAST-software market in 2025, projected to $13.15B by 2033 at 9.74% CAGR ([Future Market Report](https://www.futuremarketreport.com/industry-report/static-application-security-testing-software-market/)) |
| Traction | $400K+ Google bounties ([YC](https://www.ycombinator.com/companies/nebula-security), Jul 2026); 1,162 validated findings and 98 public CVEs ([Vega](https://nebusec.ai/vega/), Jul 2026); 1,186 GitHub stars ([GitHub](https://github.com/NebuSec), Jul 2026) |
| Revenue Signal | Pay-as-you-go metered Researcher plan, per-repository subscriptions, and contact-sales Enterprise plan ([Vega pricing](https://nebusec.ai/vega/), Jul 2026) |
| Founders | Eten Zou (CEO): UCR cybersecurity PhD, Microsoft security researcher; Yuan Tan (CTO): Linux contributor, Black Hat speaker; Frank Wu and Xiaochuan Yu (Research Leads): DEF CON finalists and exploit researchers ([YC](https://www.ycombinator.com/companies/nebula-security)) |
| Competitors | Gecko Security (funding unknown, $440K ARR reported, compiler-indexed AI SAST) ([Latka](https://getlatka.com/companies/gecko.security)); ZeroPath (funding and revenue unknown, LLM-plus-AST SAST) ([ZeroPath](https://zeropath.com/blog/introducing-zeropath-v1)); XBOW ($120M Series C, revenue unknown, autonomous pentesting) ([XBOW](https://xbow.com/news/xbow-raises-120m-to-scale)); Semgrep ($204M raised, revenue unknown, hybrid rules and AI) ([Semgrep](https://semgrep.dev/about)) |
| Moat Signals | 1,162 validated findings, 98 public CVEs, $400K+ in Google bounties, and 1,186-star exploit repository ([Vega](https://nebusec.ai/vega/); [YC](https://www.ycombinator.com/companies/nebula-security); [GitHub](https://github.com/NebuSec), Jul 2026) |
| Risk Factors | Model-provider competition ([Axios](https://www.axios.com/2026/03/06/openai-codex-security-ai-cyber)), human-validation throughput ([Linux mailing list](https://www.mail-archive.com/linux-kernel%40vger.kernel.org/msg2642306.html)), name ambiguity ([LinkedIn](https://www.linkedin.com/company/nebulasecurity)) |
| Founder Reach | Eten: X 1K, LinkedIn 657, GitHub repo 207 stars ([TwStalker](https://site.twstalker.com/saksham_gupta__), [LinkedIn](https://www.linkedin.com/in/xiaochen-zou-phd-29540b168), [GitHub](https://github.com/plummm)); Yuan: No public data found; Frank: X 1K ([TwStalker](https://twstalker.com/hareh4ru)); Xiaochuan: X 3K, LinkedIn 75, GitHub repo 412 stars ([TwStalker](https://mobile.twstalker.com/Nyaaaaa_ovo), [LinkedIn](https://www.linkedin.com/in/xiaochuan-yu-3103a5297), [GitHub](https://github.com/KpwnZ/Def1nit3lyN0tAJa1lbr3akTool)) |
| Distribution Signals | X 6K followers ([TwStalker](https://twstalker.com/ShadowChasing1), Jul 2026), LinkedIn 109 followers ([LinkedIn](https://www.linkedin.com/company/nebula-security/), Jul 2026), GitHub repository 1,186 stars ([GitHub](https://github.com/NebuSec), Jul 2026) |
| Emails | info@nebusec.ai, root@nebusec.ai, founders@nebusec.ai ([company website](https://nebusec.ai/), [audit page](https://nebusec.ai/security-audit/), [YC](https://www.ycombinator.com/companies/nebula-security), Jul 2026) |
