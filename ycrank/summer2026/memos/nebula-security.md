# Nebula Security

> An AI-native cybersecurity company

| Field | Value |
|-------|-------|
| Website | https://nebusec.ai |
| YC Page | https://www.ycombinator.com/companies/nebula-security |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 2 |
| Location | Vancouver, WA, USA; Remote |
| Tags | Cybersecurity, AI |
| YC Partner | Ankit Gupta |
| Emails | root@nebusec.ai, info@nebusec.ai |

## The Idea

- **Problem:** Software teams face rising volumes of code-level and architectural vulnerabilities, and today rely on legacy SAST scanners (Snyk, Semgrep) plus manual pentesting engagements to catch them (nebusec.ai company page).
- **Approach:** Nebula's VEGA agent performs AI-driven code scanning that has independently discovered production zero-days including Chrome V8 sandbox escape CVE-2026-6307 and V8 RCE CVE-2026-5865, paired with a premium human audit service ("Audited by Nebula Security" mark) (nebusec.ai; nebusec.ai/research/v8-cve-2026-6307-writeup/).
- **Differentiation:** [Inferred]: Versus Snyk/Semgrep (pattern-based SAST) and XBOW (autonomous pentest), Nebula pairs an AI scanner with a founder-led offensive-research audit brand, signaling deeper-bug discovery than rules-based scanners (based on nebusec.ai product description and XBOW comparison via SecurityWeek, Mar 2026).
- **Business Model:** No public pricing page found; company description references "premium security auditing" alongside VEGA scanning, and YC S26 companies receive $500K on the YC standard deal in USDC (cryptobriefing.com, Jun 2026); [Inferred]: services-plus-SaaS model.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Distribution to YC portfolio companies first — the WebSearch snippet noted "they launched VEGA within YC companies and received overwhelmingly positive feedback" (via search snippet) — expanding through the "Audited by Nebula Security" trust mark for external buyers.

## Defensibility

- **Moat today:** Public CVE discoveries (CVE-2026-6307 Chrome V8 sandbox escape; CVE-2026-5865 V8 RCE; CVE-2026-23274 Linux kernel with $10,500 bounty) documented on nebusec.ai/research and NVD serve as credibility evidence for the audit brand.
- **Future moat:** [Inferred]: A proprietary corpus of exploitation traces and bug-class patterns from VEGA scans could compound into a data moat versus rules-based SAST; unproven because scan volume and customer count are not disclosed.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — Snyk ($1.32B raised, $8.5B valuation per Tracxn/PitchBook 2026) and Semgrep ($196M raised per Clay 2026) have deeper distribution and resources.
- **Commoditization risk:** XBOW ($237M raised across Series C + extension, Mar–May 2026 per SecurityWeek/GeekWire) and Semgrep are already shipping AI-native code security; open-source pentest agents (e.g., berylliumsec/nebula on GitHub) exist as free alternatives.

## Market & Traction

- **Traction signals:**
  - YC standard $500K for Summer 2026 batch in USDC (cryptobriefing.com, Jun 2026).
  - 729 vulnerabilities catalogued; "$0K+ in bug bounties earned" per company website counter (nebusec.ai, retrieved Jul 2026).
  - CVE-2026-23274 Linux kernel exploit earned $10,500 bounty (nebusec.ai).
  - Published technical writeup "Longinus" on CVE-2026-6307 Chrome V8 (nebusec.ai/research, 2026).
  - LinkedIn company page: 87 followers (linkedin.com/company/nebulasecurity, retrieved Jul 2026); note the page also lists "Founded 2022, Los Angeles, stealth" which conflicts with the YC page — likely a repurposed handle.
  - X/Twitter: @nebusecurity, account joined Feb 2026; follower count not retrievable (x.com/nebusecurity).
  - Hiring: company_data field indicates Hiring: False.
  - No public data on revenue, ARR, or paying customer count.
- **Competitors:**
  - Snyk ($1.32B raised, revenue unknown, $8.5B valuation per Tracxn/PitchBook 2026): incumbent SAST/SCA platform with broad enterprise distribution vs. Nebula's boutique offensive-research positioning.
  - Semgrep ($196M raised, revenue unknown, ~$5B secondary valuation per Clay 2026): pattern-based scanner with OSS core (Opengrep) vs. Nebula's AI agent + human audit combo.
  - XBOW ($237M raised, revenue unknown, >$1B valuation per Bloomberg Mar 2026 and GeekWire May 2026): autonomous AI pentesting founded by GitHub Copilot creator Oege de Moor vs. Nebula's code-scanning + audit focus.
  - Socket (funding not retrieved): supply-chain/npm dependency analysis vs. Nebula's code + architecture audit scope (vibe-eval.com, 2026).
  - Aikido (funding not retrieved): all-in-one SAST/SCA/secrets/cloud with in-app firewall vs. Nebula's research-led auditing (nomadlab.cc, May 2026).
- **Why now:** [Inferred]: AI-generated code has raised commit volume and vulnerability density, which the Snyk-alternatives cottage industry cites as driving the shift to AI-native scanners (vibe-eval.com and nomadlab.cc reviews, 2026).

## Founders & Team

- **Eten Zou (CEO & Founder):**
  - Background: Listed as CEO & Founder on the YC page (ycombinator.com/companies/nebula-security); YC company description credits the team with "the first nginx RCE" and "first to root Android 17 through a full browser-to-kernel exploit chain"; no independent public CV, education record, or prior-company history retrievable via web search.
  - Twitter/X: No public individual account found (company account is @nebusecurity).
  - LinkedIn: No public profile found under this name in search results.
  - GitHub: No public repos found under this name in search results.
- **Second co-founder (Role not listed):**
  - Background: Team Size is 2 per YC page, but the YC page lists only Eten Zou; the second co-founder's name, role, and background were not retrievable in public sources at time of research.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: YC company description asserts the founders originated the nginx RCE and an Android 17 browser-to-kernel chain (ycombinator.com/companies/nebula-security), which aligns offensive-research background with a security-auditing product; independent verification of these attributions was not found in public sources.

## Key Risks

- **Founder attribution unverified:** The nginx RCE and "Android 17 browser-to-kernel" claims in the YC description could not be corroborated against a named researcher, conference talk, or CVE credit in public search results; a search for "first nginx RCE" surfaced CVE-2026-42945 credited to "depthfirst" (cybersecuritynews.com), not Nebula.
- **Competitive density in AI code security:** XBOW closed $120M Series C in Mar 2026 plus $35M extension in May 2026 at >$1B valuation (Bloomberg; SecurityWeek; GeekWire), and Semgrep closed $100M Series D in Feb 2025 (Clay), meaning Nebula enters a category with well-funded incumbents targeting the same "AI-native security" buyer.
- **Brand/name confusion:** Multiple entities share the "Nebula" security name — the LinkedIn page linkedin.com/company/nebulasecurity resolves to a "stealth" LA company founded 2022 with a nebulasecurity.io URL, distinct from nebusec.ai; there is also a "Nebula iXDR" AI cyber-defense platform (nebulaixdr.com), creating buyer-search collisions.
- **No disclosed revenue or customer proof:** Company website displays "$0K+ in bug bounties earned" and no pricing page, customer logos, or ARR disclosure (nebusec.ai, retrieved Jul 2026); traction is currently CVE-discovery output, not commercial adoption.
- **Two-person team scope risk:** Team Size 2 (YC page) versus a category where XBOW's founding team came from GitHub Copilot with dozens of engineers (SecurityWeek, Mar 2026) creates execution-bandwidth risk on shipping both a scanning product and a premium audit service.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 729 vulnerabilities catalogued (nebusec.ai, Jul 2026); CVE-2026-6307 Chrome V8 sandbox escape (NVD/nebusec.ai research writeup, 2026); CVE-2026-5865 V8 RCE (nebusec.ai); CVE-2026-23274 Linux kernel exploit, $10,500 bounty (nebusec.ai); LinkedIn 87 followers (linkedin.com/company/nebulasecurity, Jul 2026); X account @nebusecurity joined Feb 2026 (x.com) |
| Revenue Signal | No public data found (no pricing page; "$0K+ bug bounties earned" counter on nebusec.ai, Jul 2026; YC S26 standard $500K in USDC per cryptobriefing.com Jun 2026) |
| Founders | Eten Zou (CEO & Founder): credited on YC page with team's nginx RCE and Android 17 browser-to-kernel exploit chain. Second co-founder: name/role not listed on public YC page. |
| Competitors | Snyk ($1.32B raised, revenue unknown, incumbent SAST/SCA platform); Semgrep ($196M raised, revenue unknown, pattern-based SAST with OSS core); XBOW ($237M raised, revenue unknown, autonomous AI pentest at >$1B valuation); Socket (funding not retrieved, npm supply-chain focus); Aikido (funding not retrieved, all-in-one AppSec) |
| Moat Signals | Published CVE discoveries: CVE-2026-6307, CVE-2026-5865, CVE-2026-23274 (nebusec.ai/research; NVD, 2026) |
| Risk Factors | Unverified founder-credit claims, competitive density (XBOW/Semgrep/Snyk), name collision with other Nebula security entities |
| Founder Reach | Eten Zou: Twitter not found, LinkedIn not found, GitHub not found; Second co-founder: No public data found |
| Distribution Signals | X @nebusecurity joined Feb 2026 (x.com); LinkedIn 87 followers (linkedin.com/company/nebulasecurity, Jul 2026); no Product Hunt, Chrome Web Store, or app store presence found |
| Emails | root@nebusec.ai, info@nebusec.ai (nebusec.ai, Jul 2026) |

Sources:
- [Nebula Security · AI security research lab](https://nebusec.ai/)
- [Nebula Security research writeup CVE-2026-6307](https://nebusec.ai/research/v8-cve-2026-6307-writeup/)
- [Y Combinator - Nebula Security](https://www.ycombinator.com/companies/nebula-security)
- [Nebula Security LinkedIn](https://www.linkedin.com/company/nebulasecurity)
- [Nebula Security on X](https://x.com/nebusecurity)
- [Ankit Gupta - YC Partner](https://www.ycombinator.com/people/ankit-gupta)
- [Snyk on Tracxn](https://tracxn.com/d/companies/snyk/__R962gE3cLhPYE6YfvOOI_C7Ek9zrtlGPOgVeCjDvLBI)
- [Semgrep funding - Clay](https://www.clay.com/dossier/semgrep-funding)
- [XBOW $120M Series C - Bloomberg](https://www.bloomberg.com/news/articles/2026-03-18/ai-security-startup-xbow-now-valued-at-more-than-1-billion)
- [XBOW $35M extension - GeekWire](https://www.geekwire.com/2026/xbow-the-unicorn-with-a-seattle-mailbox-raises-another-35m-for-its-autonomous-hacking-platform/)
- [YC S26 Demo Day - CryptoBriefing](https://cryptobriefing.com/y-combinator-s26-demo-day-usdc-stablecoin-funding/)
- [Best AI Code Security Tools 2026 - NomadLab](https://nomadlab.cc/blog/2026/05/best-ai-code-security-tools-2026-snyk-semgrep-endor-labs-socket-aikido)
- [18-year-old NGINX RCE - Cybersecurity News](https://cybersecuritynews.com/18-year-old-nginx-rce-vulnerability/)
- [NVD CVE-2026-6307](https://nvd.nist.gov/vuln/detail/CVE-2026-6307)
