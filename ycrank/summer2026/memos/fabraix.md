# Fabraix

> The world's frontier hacker for AI agents.

| Field | Value |
|-------|-------|
| Website | https://fabraix.com |
| YC Page | https://www.ycombinator.com/companies/fabraix |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Reinforcement Learning, Cybersecurity |
| YC Partner | Jon Xu |
| Emails | founders@fabraix.com |

## The Idea

- **Problem:** Teams deploying customer-facing AI agents must retest after model, prompt, tool, permission, or data-source changes, while manual red-teaming takes weeks and can cost six figures ([Fabraix website, Aug 2026](https://fabraix.com/)).
- **Approach:** Nyx conducts black-box, multi-turn attacks, including payloads placed in controlled websites, files, messages, and SaaS replicas, while adapting its strategy to the target’s responses ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
- **Differentiation:** Nyx requires no source-code integration and targets indirect and multimodal interaction surfaces, while HiddenLayer bundles red-teaming with model scanning and detection-response and VirtueRed emphasizes compliance mapping and audit evidence ([Fabraix](https://fabraix.com/), [HiddenLayer](https://www.hiddenlayer.com/news/security-for-ai-platform-expansion-introducing-automated-red-teaming-for-ai), [Virtue AI](https://www.virtueai.com/virtuered)).
- **Business Model:** Researchers receive a $0 tier, one-off scans are custom-priced per agent, and continuous CI testing is custom-priced monthly by usage ([Fabraix pricing, Aug 2026](https://fabraix.com/)).
- **TAM/SAM:** The broader generative-AI cybersecurity market was estimated at $8.65B in 2025 and projected to reach $35.50B by 2031 at a 26.5% CAGR, while no Fabraix-specific SAM was found ([MarketsandMarkets, 2026](https://www.marketsandmarkets.com/Market-Reports/generative-ai-cybersecurity-market-164202814.html)).
- **GTM / Distribution:** Fabraix uses demo-led enterprise sales, a free researcher tier, Product Hunt launches, and an open-source adversarial playground to reach AI builders and security teams ([Fabraix](https://fabraix.com/), [Product Hunt](https://www.producthunt.com/products/nyx-4), [GitHub](https://github.com/fabraix)).

## Defensibility

- **Moat today:** Fabraix reports a continuously updated library of 10,000+ strategies, a self-learning attack loop, and 71 GitHub stars for its open-source Playground repository ([Fabraix](https://fabraix.com/), [GitHub, Aug 2026](https://github.com/fabraix)).
- **Future moat:** [Inferred]: Recurring scans and Playground submissions could expand Fabraix’s attack corpus and regression data, but no public customer-retention or revenue data establishes this advantage.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Virtue AI, HiddenLayer, SPLX, Mindgard, and free tools including Garak and PyRIT already provide automated or continuous AI red-teaming capabilities ([Virtue AI](https://www.virtueai.com/virtuered), [HiddenLayer](https://www.hiddenlayer.com/news/security-for-ai-platform-expansion-introducing-automated-red-teaming-for-ai), [Mindgard comparison, Jul 2026](https://mindgard.ai/blog/best-tools-for-red-teaming)).

## Market & Traction

- **Traction signals:**
  - Nyx reported a 78% AgentHarm attack-success rate versus 67% for GPT-5.6 Sol and detected failures in public-facing agents operated by dozens of Fortune 500 companies ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
  - Fabraix reports that Nyx typically produces its first exploit in under one hour ([Fabraix website, Aug 2026](https://fabraix.com/)).
  - The first Playground challenge received more than 50,000 attempts ([LinkedIn, Aug 2026](https://www.linkedin.com/company/fabraix/)).
  - Fabraix ranked #6 on Product Hunt on May 8, 2026, while Playground ranked #5 on July 13, 2026 ([Product Hunt leaderboard](https://www.producthunt.com/leaderboard/daily/2026/5/8), [Product Hunt](https://www.producthunt.com/products/nyx-4)).
  - The Product Hunt listing had 934 followers, a 5.0 rating, and one review ([Product Hunt, Aug 2026](https://www.producthunt.com/products/nyx-4)).
  - The company LinkedIn page had 543 followers ([LinkedIn, Aug 2026](https://www.linkedin.com/company/fabraix/)).
  - Fabraix’s Playground repository had 71 stars and Nyx had 8 stars ([GitHub, Aug 2026](https://github.com/fabraix)).
  - YC listed zero active company jobs ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
  - Byld lists a 2026 pre-seed investment alongside YC, with no amount disclosed ([Byld portfolio, Aug 2026](https://www.byld.vc/portfolio)).
- **Competitors (minimum 3, up to 5):**
  - Virtue AI ($30M raised through seed and Series A led by Lightspeed and Walden Catalyst in April 2025, revenue unknown): offers continuous red-teaming, compliance evidence, runtime guardrails, and agent simulations across sandboxed environments ([Business Wire, Apr 2025](https://www.businesswire.com/news/home/20250415693312/en/Virtue-AI-Raises-%2430-Million-in-Seed-and-Series-A-Funding-to-Bridge-the-Critical-AI-Security-Gap)).
  - HiddenLayer ($56M raised, including a $50M Series A led by M12 and Moore Strategic Ventures in September 2023, revenue unknown): combines automated red-teaming with model scanning and AI detection-response ([TechCrunch, Sep 2023](https://techcrunch.com/2023/09/19/hiddenlayer-raises-50m-for-its-ai-defending-cybersecurity-tools/)).
  - SPLX ($9M raised, including a $7M seed led by LAUNCHub Ventures in March 2025, revenue unknown): combines continuous probes with runtime protection, governance, and compliance workflows and was acquired by Zscaler in 2025 ([SPLX, Mar 2025](https://splx.ai/blog/splxai-closes-7m-seed-funding-round-to-help-organizations-secure-agentic-ai-systems), [Zscaler, Nov 2025](https://ir.zscaler.com/news-releases/news-release-details/zscaler-secures-enterprise-ai-lifecycle-acquisition-innovative)).
- **Why now:** AI agents increasingly interact with websites, files, tools, permissions, and confidential data while their models and prompts change between releases, creating a need for repeatable rather than point-in-time testing ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).

## Founders & Team

- **Ahmed Aly (Founder):**
  - Background: Led international-payments fraud at Monzo and was Two’s first data scientist, where systems processed $1B+ in annual transactions and reportedly prevented $50M in losses; he left a UCL PhD and has published peer-reviewed research ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
  - Twitter/X: No public account conclusively tied to this founder found.
  - LinkedIn: “Co-founder @ Fabraix, building a frontier hacker agent” ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
  - GitHub: No public repos found.
- **Ibrahim Abdu (Founder):**
  - Background: Built production-debugging AI agents at Meta, was an early engineer at Two, developed compiler and database systems at TradingHub, and earned an Oxford PPE degree in the top 8% of his cohort ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
  - Twitter/X: @ibrahim_abdu1; count not retrievable ([Product Hunt newsletter, Jul 2026](https://www.producthunt.com/newsletters/archive/52632-get-paid-to-break-ai)).
  - LinkedIn: “Founder at Fabraix” ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
  - GitHub: No public repos found.
- **Co-founder relationship:** The founders previously worked together and had known each other for almost four years at launch ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
- **Founder-market fit:** Ahmed’s fraud and adversarial-systems work and Ibrahim’s agent, compiler, and database engineering provide documented experience across offensive testing, financial abuse, and agent infrastructure ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).

## Key Risks

- **Benchmark transfer:** The 78% result is company-reported on AgentHarm, a public benchmark for harmful multi-step agent tasks, and public evidence does not establish equivalent results across customer production systems ([Fabraix](https://fabraix.com/), [ICLR AgentHarm paper, 2025](https://proceedings.iclr.cc/paper_files/paper/2025/hash/c493d23af93118975cdbc32cbe7323f5-Abstract-Conference.html)).
- **Traction interpretation:** The claim concerns vulnerabilities found in public-facing agents operated by dozens of Fortune 500 companies and does not identify those companies as paying customers ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/fabraix)).
- **Platform bundling:** Check Point acquired Lakera and Zscaler acquired SPLX in 2025, placing overlapping AI-security products inside established enterprise-security distribution channels ([Check Point](https://www.checkpoint.com/press-releases/check-point-acquires-lakera-to-deliver-end-to-end-ai-security-for-enterprises/), [Zscaler](https://ir.zscaler.com/news-releases/news-release-details/zscaler-secures-enterprise-ai-lifecycle-acquisition-innovative)).
- **Enterprise certification:** Fabraix lists SOC 2 Type II as “in progress,” while its continuous tier targets enterprise CI/CD deployments ([Fabraix website, Aug 2026](https://fabraix.com/)).
- **Residual prompt-injection risk:** NIST states that guardrails require continuous monitoring because prompts capable of bypassing them will remain discoverable, limiting red-teaming’s ability to establish permanent closure ([NIST, Jun 2026](https://www.nist.gov/news-events/news/2026/06/nist-mathematical-proof-supports-transition-continuous-monitor-and-update)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8.65B generative-AI cybersecurity market in 2025, projected to $35.50B by 2031 at 26.5% CAGR (MarketsandMarkets, 2026) |
| SAM | No public data found |
| Traction | 78% AgentHarm success rate versus 67% for GPT-5.6 Sol; failures found in agents at dozens of Fortune 500 companies (Y Combinator, Aug 2026); 50K+ Playground attempts (LinkedIn, Aug 2026) |
| Revenue Signal | $0 researcher tier; custom per-agent scans; custom monthly usage pricing for continuous testing (Fabraix pricing, Aug 2026) |
| Founders | Ahmed Aly (Founder): Monzo fraud lead, first data scientist at Two, UCL PhD dropout; Ibrahim Abdu (Founder): former Meta agent engineer, early Two engineer, Oxford PPE (Y Combinator, Aug 2026) |
| Competitors | Virtue AI ($30M raised, revenue unknown, compliance and runtime suite); HiddenLayer ($56M raised, revenue unknown, model-scanning bundle); SPLX ($9M raised, revenue unknown, lifecycle platform acquired by Zscaler) (Business Wire; TechCrunch; SPLX/Zscaler, 2023–2025) |
| Moat Signals | 10,000+ attack strategies, self-learning attack loop, 71-star Playground repository (Fabraix; GitHub, Aug 2026) |
| Risk Factors | Benchmark-to-production transfer, Fortune 500 customer-status ambiguity, incumbent platform bundling, SOC 2 Type II in progress (Fabraix; Y Combinator; Check Point; Zscaler, Aug 2026) |
| Founder Reach | Ahmed Aly: No public data found; Ibrahim Abdu: X @ibrahim_abdu1 with count not retrievable and LinkedIn 861 followers (Product Hunt; LinkedIn, Jun–Jul 2026) |
| Distribution Signals | Product Hunt #6 on May 8, 2026; Playground #5 on July 13, 2026; 934 Product Hunt followers; 543 LinkedIn followers; 71 GitHub stars (Product Hunt; LinkedIn; GitHub, Aug 2026) |
| Emails | founders@fabraix.com (Y Combinator, Aug 2026) |
