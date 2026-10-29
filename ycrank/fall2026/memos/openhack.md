# OpenHack

> Always-on AI security engineer

| Field | Value |
|-------|-------|
| Website | https://openhack.com |
| YC Page | https://www.ycombinator.com/companies/openhack |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/openhack)) |
| Industry | B2B / B2B -> Security |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | DevSecOps, Cybersecurity, AI |
| YC Partner | Max Kolysh ([YC](https://www.ycombinator.com/companies/openhack)) |
| Emails | ananay@openhack.com, security@openhack.com, legal@openhack.com ([Contact](https://openhack.com/contact)); privacy@openhack.com ([Trust Center](https://openhack.com/trust)); team@openhack.com ([GitHub](https://github.com/openhackai)) |

## The Idea

- **Problem:** Engineering and security teams spend time reviewing false-positive scanner alerts and prioritizing vulnerability backlogs while periodic pentests leave intervals between assessments ([OpenHack About](https://openhack.com/about)).
- **Approach:** Agents build an application model, hunt vulnerabilities, validate findings, and attempt browser or sandbox exploitation before reporting verified issues ([OpenHack repository](https://github.com/openhackai/OpenHack)).
- **Differentiation:** OpenHack combines code scanning with exploit verification, versus Semgrep’s SAST/SCA/secrets suite and Terra’s continuous pentesting with explicit human oversight ([OpenHack](https://github.com/openhackai/OpenHack), [Semgrep](https://www.prnewswire.com/news-releases/semgrep-announces-100m-series-d-funding-to-advance-ai-powered-code-security-302367780.html), [Terra](https://www.terra.security/blog/terra-security-raises-30m-series-a-to-redefine-penetration-testing-with-agentic-ai)).
- **Business Model:** The current pricing page offers a $0 pay-as-you-go entry plan covering one project, five free PR reviews monthly and one initial full scan, plus custom-priced Enterprise plans with pooled AI credits and negotiated usage rates ([Pricing, accessed Oct 27, 2026](https://openhack.com/pricing)).
- **TAM/SAM:** Grand View Research estimates the broader application-security market at $12.6B in 2026 with 18.8% CAGR through 2033; No public TAM/SAM data found for this specific segment ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/application-security-market)).
- **GTM / Distribution:** Public entry points include an open-source CLI, self-service signup, research articles, and enterprise demo booking ([GitHub](https://github.com/openhackai/OpenHack), [Website](https://openhack.com), [Blog](https://openhack.com/blog/author/ananay-arora)).

## Defensibility

- **Moat today:** Public technical evidence includes OpenHack’s account of discovering and reproducing Papermark authentication bypass CVE-2026-36755, reported March 1 and patched March 2, 2026, although this establishes a disclosed result rather than exclusive IP ([OpenHack disclosure](https://openhack.com/blog/papermark-missing-await)).
- **Future moat:** [Inferred]: Maintaining customer-specific application context and remediation workflows could create switching costs, but retention or switching-cost evidence is not public.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given existing overlapping code-security and continuous-testing platforms ([Semgrep](https://www.prnewswire.com/news-releases/semgrep-announces-100m-series-d-funding-to-advance-ai-powered-code-security-302367780.html), [Aikido](https://www.aikido.dev/company/about)).
- **Commoditization risk:** [Inferred]: Other security vendors can reuse the MIT-licensed scanner and assemble comparable agent workflows, while OpenHack’s managed integrations would require additional implementation ([Repository and license](https://github.com/openhackai/OpenHack)).

## Market & Traction

- **Traction signals:**
  - Open-source scanner: 430 GitHub stars and 65 forks ([GitHub, accessed Oct 27, 2026](https://github.com/openhackai/OpenHack)).
  - Company LinkedIn: 286 followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/openhackai)).
  - Displayed customer/team logos: Pocket AI, HydraDB, Docura Health, Neatlogs, MarginMed and Melty; payment status is undisclosed ([Website, accessed Oct 27, 2026](https://openhack.com)).
  - Founder interview covering OpenHack and AI vulnerability research appeared on 9to5Mac’s Security Bite podcast ([9to5Mac, Oct 1, 2026](https://9to5mac.com/2026/10/01/security-bite-podcast-the-new-era-of-bug-hunting-with-openhacks-ananay-arora/?extended-comments=1)).
  - Public announcement article dated June 10, 2026 ([OpenHack blog index](https://openhack.com/blog/author/ananay-arora)).
  - Zero active YC job postings ([YC Jobs, accessed Oct 27, 2026](https://www.ycombinator.com/companies/openhack/jobs)).
- **Competitors:**
  - **Aikido Security ($85M raised; >$40M ARR reported):** Covers cloud and runtime security alongside code and autonomous pentesting; latest disclosed round was $60M Series B led by DST Global in January 2026 ([Aikido About](https://www.aikido.dev/company/about), [Funding announcement](https://www.aikido.dev/blog/aikido-funding-series-b), [ProductLed founder interview, May 2026](https://productled.com/blog/no-sales-call-required-roeland-delrue-on-scaling-aikido-to-a-cybersecurity-unicorn)).
  - **Semgrep ($204M raised; revenue unknown):** Offers SAST, dependency and secrets analysis with AI triage and remediation, versus OpenHack’s additional exploit-verification workflow; latest disclosed equity round was $100M Series D led by Menlo Ventures in February 2025 ([Semgrep announcement](https://www.prnewswire.com/news-releases/semgrep-announces-100m-series-d-funding-to-advance-ai-powered-code-security-302367780.html)).
  - **Terra Security ($38M raised; $1M historical ARR milestone):** Combines continuous agentic pentesting with human oversight; latest disclosed round was $30M Series A led by Felicis in September 2025, and its founder described reaching $1M ARR after launching the continuous product ([Terra announcement](https://www.terra.security/blog/terra-security-raises-30m-series-a-to-redefine-penetration-testing-with-agentic-ai), [Founder interview, Jan 2026](https://www.pmf.show/episodes/ep-5-how-his-ai-enabled-services-startup-hit-1m-arr-in-just-3-months-shahar-peled-fou)).
- **Why now:** [Inferred]: AI-generated code and autonomous development agents increase changes requiring security review, creating demand for continuous automated verification, a catalyst Aikido explicitly described in January 2026 ([Aikido announcement](https://www.aikido.dev/blog/aikido-funding-series-b)).

## Founders & Team

- **Ananay Arora (Founder/CEO):**
  - Background: ASU computer-science alumnus, previously an Apple software engineer and ASU cybersecurity researcher, with bug bounties from Meta, Apple, Perplexity, YC and DHS; ASU describes his BS and subsequent master’s studies, while public exit information is unavailable ([YC founder profile](https://www.ycombinator.com/founders/ananay-arora); [ASU, Apr 2023, via search snippet](https://global.asu.edu/sites/default/files/2023-04/India-Inserts-042523.pdf)).
  - Twitter/X: @ananayarora; count not retrievable from X ([YC-linked account](https://www.ycombinator.com/founders/ananay-arora)).
  - LinkedIn: Headline not retrievable; About text reads “Building OpenHack, the always-on AI Security Engineer,” with 7K followers shown in indexed content ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/ananay?isSelfProfile=false)).
  - GitHub: @ananay; pinned authentication library `apple-auth` has 330 stars ([GitHub, accessed Oct 27, 2026](https://github.com/ananay)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Arora’s documented security research and software engineering experience correspond to the product’s vulnerability-discovery workflow, and OpenHack lists YC, Solo Founders and SF1 as backers ([YC](https://www.ycombinator.com/founders/ananay-arora), [OpenHack About](https://openhack.com/about)).

## Key Risks

- **Verification coverage:** [Inferred]: Exploit verification may depend on reproducible customer environments because the public repository labels sandbox/browser verification beta and requires Docker for sandbox execution ([Repository](https://github.com/openhackai/OpenHack)).
- **Source-code handling:** [Inferred]: Processing customer code through infrastructure and inference subprocessors creates confidentiality exposure; OpenHack states it deletes source code after scans and prohibits model training on customer data ([Trust Center](https://openhack.com/trust)).
- **Overlapping platforms:** [Inferred]: Aikido’s combined code, cloud, runtime and autonomous pentesting offering could reduce demand for a separate OpenHack deployment ([Aikido About](https://www.aikido.dev/company/about)).
- **Name ambiguity:** OpenHack shares its name with Microsoft training and a Swedish humanitarian coding organization; their audiences and metrics are excluded here ([Microsoft OpenHack](https://www.linkedin.com/company/microsoft-openhack), [Swedish Openhack](https://www.linkedin.com/company/openhack)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader application-security market proxy: $12.6B in 2026; 18.8% CAGR through 2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/application-security-market)) |
| SAM | No public data found |
| Traction | 430 stars, 65 forks ([GitHub, Oct 27, 2026](https://github.com/openhackai/OpenHack)); 286 company followers ([LinkedIn, Oct 27, 2026](https://www.linkedin.com/company/openhackai)) |
| Revenue Signal | $0 entry plan; custom Enterprise pricing and usage rates ([Pricing, Oct 27, 2026](https://openhack.com/pricing)) |
| Founders | Ananay Arora, Founder/CEO: Apple software engineering, ASU cybersecurity, bug-bounty research ([YC](https://www.ycombinator.com/founders/ananay-arora)) |
| Competitors | Aikido: $85M raised, >$40M reported ARR, cloud/runtime breadth ([Aikido](https://www.aikido.dev/company/about), [ProductLed, May 2026](https://productled.com/blog/no-sales-call-required-roeland-delrue-on-scaling-aikido-to-a-cybersecurity-unicorn)); Semgrep: $204M raised, revenue unknown, static-analysis suite ([Semgrep, Feb 2025](https://www.prnewswire.com/news-releases/semgrep-announces-100m-series-d-funding-to-advance-ai-powered-code-security-302367780.html)); Terra: $38M raised, historical $1M ARR, human oversight ([Terra](https://www.terra.security/blog/terra-security-raises-30m-series-a-to-redefine-penetration-testing-with-agentic-ai), [Founder interview, Jan 2026](https://www.pmf.show/episodes/ep-5-how-his-ai-enabled-services-startup-hit-1m-arr-in-just-3-months-shahar-peled-fou)) |
| Moat Signals | Published discovery and exploit reproduction for CVE-2026-36755 ([OpenHack disclosure, Aug 2026](https://openhack.com/blog/papermark-missing-await)) |
| Risk Factors | Beta verification dependencies ([GitHub](https://github.com/openhackai/OpenHack)), source-code subprocessors ([Trust Center](https://openhack.com/trust)), overlapping platforms ([Aikido](https://www.aikido.dev/company/about)) |
| Founder Reach | Arora: LinkedIn 7K followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/ananay?isSelfProfile=false)); GitHub `apple-auth` 330 stars ([GitHub, Oct 27, 2026](https://github.com/ananay)) |
| Distribution Signals | Open-source CLI ([GitHub](https://github.com/openhackai/OpenHack)); Security Bite interview ([9to5Mac, Oct 1, 2026](https://9to5mac.com/2026/10/01/security-bite-podcast-the-new-era-of-bug-hunting-with-openhacks-ananay-arora/?extended-comments=1)) |
| Emails | ananay@openhack.com, security@openhack.com, legal@openhack.com ([Contact](https://openhack.com/contact)); privacy@openhack.com ([Trust Center](https://openhack.com/trust)); team@openhack.com ([GitHub](https://github.com/openhackai)) |
