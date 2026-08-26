# Caution

> Hosting platform for software you don't want to get hacked

| Field | Value |
|-------|-------|
| Website | https://caution.co |
| YC Page | https://www.ycombinator.com/companies/caution |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 5 |
| Location | George Town, George Town, Cayman Islands |
| Tags | Cybersecurity, Cloud Computing, Infrastructure |
| YC Partner | Not listed |
| Emails | info@caution.co, anton@distrust.co, lance@distrust.co, lance@vick.house |

## The Idea

- **Problem:** Organizations running high-assurance cloud workloads may receive an attested binary hash without proof that it came from reviewed source, leaving customers, auditors, and operators dependent on opaque binaries or custom security pipelines ([Caution introduction, Dec 2025](https://caution.co/blog/introducing-caution.html)).
- **Approach:** A git-based workflow builds reproducible enclave images, provisions AWS Nitro infrastructure, and lets third parties rebuild the image, compare hashes, and verify the live workload against source, configuration, kernel, and toolchain ([Caution platform, Aug 2026](https://caution.co/)).
- **Differentiation:** Raw AWS Nitro attests hardware and measurements without linking them to source, while OPAQUE concentrates on governed AI workloads and Edgeless Systems on confidential Kubernetes and containers; Caution provides a general-purpose source-to-runtime verification workflow ([Caution documentation](https://docs.caution.co/guides/verify-an-app/), [OPAQUE](https://www.opaque.co/product), [Edgeless Systems](https://www.edgeless.systems/products/constellation/)).
- **Business Model:** Caution offers free AGPLv3 self-hosting, a contact-sales commercial license, managed deployments in customer AWS accounts, and fully managed hosting, with no public prices ([Caution pricing, Aug 2026](https://caution.co/pricing.html)).
- **TAM/SAM:** The confidential-computing market was $5.5B in 2023 and is forecast to reach $153.8B by 2030 at a 61.1% CAGR ([Grand View Research, 2024](https://www.grandviewresearch.com/industry-analysis/confidential-computing-market-report)).
- **GTM / Distribution:** Caution is using engineer-led private-beta onboarding and direct outreach to teams already operating or evaluating confidential workloads ([Caution LinkedIn, Jun 2026](https://www.linkedin.com/company/cautionco)).

## Defensibility

- **Moat today:** The technical asset is an open-source, reproducible stack that links reviewed source and build inputs to a live enclave and supports independent verification, but no patents, network effect, or proprietary dataset were found ([Caution introduction, Dec 2025](https://caution.co/blog/introducing-caution.html)).
- **Future moat:** [Inferred]: Multi-hardware verification, accumulated deployment integrations, and customer-approved workload baselines could create switching costs, but Caution currently supports only AWS Nitro ([Caution platform, Aug 2026](https://caution.co/)).
- **Market structure:** No structural barrier identified at this stage, because cloud vendors control the hardware trust roots and funded vendors already provide confidential containers, Kubernetes, AI runtimes, and multi-cloud orchestration ([Azure confidential computing](https://azure.microsoft.com/en-us/solutions/confidential-compute/), [OPAQUE](https://www.opaque.co/product), [enclaive](https://www.enclaive.io/)).
- **Commoditization risk:** The complete platform is available under AGPLv3 for self-hosting, while Edgeless Systems, OPAQUE, and enclaive offer overlapping deployment and attestation capabilities ([Caution pricing](https://caution.co/pricing.html), [Edgeless Systems](https://www.edgeless.systems/products/constellation/)).

## Market & Traction

- **Traction signals:**
  - Production deployments with customers across crypto infrastructure, digital-asset lending, consumer hardware, post-quantum security, and private AI inference ([Y Combinator LinkedIn, Aug 2026](https://www.linkedin.com/company/cautionco)).
  - Closed beta with first customers and client onboarding underway ([Caution LinkedIn, Jun 2026](https://www.linkedin.com/company/cautionco)).
  - TrustedStake publicly identified itself as an early Caution user ([TrustedStake/X via TwStalker, Aug 2026](https://www.twstalker.com/TrustedStake)).
  - 292 LinkedIn followers ([LinkedIn, Aug 2026](https://www.linkedin.com/company/cautionco)).
  - 12 X followers at @CautionHosting ([X via search-indexed profile, Jul 2026](https://x.com/CautionHosting)).
  - $4,000 Axelar Network bounty at Zypherpunk for the Caution platform ([Devfolio, Dec 2025](https://devfolio.co/projects/caution-platform-248a)).
  - Accepted into Y Combinator’s Summer 2026 batch in June 2026 ([Cayman Enterprise City, Jul 2026](https://www.caymanenterprisecity.com/blog/member-story-caution-sezc)).
- **Competitors (minimum 3, up to 5):**
  - **OPAQUE ($55.5M raised, revenue unknown):** AI-specific confidential runtime, policy enforcement, agent studio, and audit evidence versus Caution’s general-purpose git deployment workflow ([OPAQUE, Feb 2026](https://www.opaque.co/resources/articles/opaque-raises-24m-series-b-at-300m-valuation-to-advance-confidential-ai-for-the-enterprise)).
  - **Edgeless Systems ($5.3M disclosed seed, revenue unknown):** Confidential Kubernetes and workload-level containers across major clouds versus Caution’s enclave-focused source-to-runtime verification ([Edgeless Systems, Mar 2023](https://www.edgeless.systems/edgeless-systems-raises-5m-to-advance-confidential-computing)).
  - **enclaive (€4.1M raised, revenue unknown):** Multi-cloud confidential VMs, Kubernetes, key management, databases, and compliance automation versus Caution’s reproducible enclave builds ([enclaive, Feb 2026](https://www.enclaive.io/resources/enclaive-raises-eu4-1m-to-bring-confidential-computing-to-the-multi-cloud)).
- **Why now:** [Inferred]: Cloud availability expanded with Azure’s 2025 Intel TDX VM preview while 75% of surveyed organizations were using or piloting confidential computing and 84.5% cited attestation-chain validation as a barrier ([Microsoft, Apr 2025](https://techcommunity.microsoft.com/blog/azureconfidentialcomputingblog/announcing-preview-for-the-next-generation-of-azure-intel%C2%AE-tdx-confidential-vms/4404625), [IDC/Confidential Computing Consortium, 2025](https://confidentialcomputing.io/wp-content/uploads/sites/10/2025/11/US53866125.pdf)).

## Founders & Team

- **Anton Livaja (Co-founder, CEO):**
  - Background: Founding Ledn software engineer and later information-security lead, OpenZeppelin audit contributor, and co-founder of security consultancy Distrust ([Bitcoin Magazine, Apr 2022](https://bitcoinmagazine.com/technical/how-to-protect-client-data-from-breaches), [Distrust](https://distrust.co/company.html)); no public education data found.
  - Twitter/X: @antonlivaja, 916 followers ([X via TwStalker, Jul 2026](https://ngntipkolamrenang.twstalker.com/jia_seed)).
  - LinkedIn: “Caution,” 3K followers ([LinkedIn, Jul 2026](https://ky.linkedin.com/in/alivaja)).
  - GitHub: @antonleviathan; `k8-talos-digital-ocean` has 7 stars ([GitHub, Aug 2026](https://github.com/antonleviathan)).
- **Lance Vick (Co-founder, CTO):**
  - Background: Ivy Tech information-technology coursework; former security roles at Pebble, Fitbit, BitGo, Unit 410, and Turnkey; co-founder of Distrust ([Lance Vick profile, Aug 2026](https://lance.dev/)).
  - Twitter/X: @lrvick; count not retrievable.
  - LinkedIn: No public profile found.
  - GitHub: @lrvick; `youtube-dl` has 611 stars ([GitHub, Aug 2026](https://github.com/lrvick)).
- **Ksenia Lesko (Co-founder, COO):**
  - Background: Studied at Saint Petersburg State University of Finance and Economics from 2008–2013, worked at Ada, and handled strategy and operations at Distrust ([LinkedIn, Jul 2026](https://ky.linkedin.com/in/ksenialesko), [Distrust](https://distrust.co/company.html)).
  - Twitter/X: @Xenush, 49 followers ([X via TwStalker, Jul 2026](https://mobile.twstalker.com/TrustedStake)).
  - LinkedIn: “Ada,” with profile text referencing Caution, 1,282 followers ([LinkedIn, Jul 2026](https://ky.linkedin.com/in/ksenialesko)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Anton and Lance co-founded Distrust in 2021, where Ksenia worked in strategy and operations before the three founded Caution ([Distrust](https://distrust.co/company.html), [Caution](https://caution.co/about.html)).
- **Founder-market fit:** [Inferred]: Anton’s Ledn and cryptography work, Lance’s enclave, HSM, supply-chain, and infrastructure-security work, and their shared Distrust engagements correspond directly to Caution’s product scope ([Anton Livaja](https://antonlivaja.com/about/), [Lance Vick](https://lance.dev/), [Distrust](https://distrust.co/company.html)).

## Key Risks

- **Single trust root:** Current deployments rely on AWS Nitro, so compromised or defective AWS attestation would invalidate the proof chain; Intel TDX, AMD SEV-SNP, and TPM 2.0 support is under development ([Caution introduction, Dec 2025](https://caution.co/blog/introducing-caution.html)).
- **Proof is not code security:** Verification proves that deployed software matches reviewed source but does not establish that the source is safe, leaving threat modeling, dependency review, and vulnerability testing with the customer ([Caution security documentation](https://caution.co/security-controls.html)).
- **Adoption complexity:** 84.5% of surveyed organizations cited validation of attestation chains as a barrier, and Caution’s strongest assurance still requires reproducible builds, approved identities, configuration access, and a trusted verifier ([IDC, 2025](https://confidentialcomputing.io/wp-content/uploads/sites/10/2025/11/US53866125.pdf), [Caution security documentation](https://caution.co/security-controls.html)).
- **Open-source monetization:** Customers may self-host the complete AGPLv3 platform; Caution’s mitigations are paid commercial licensing, managed BYOC, hosting, and support ([Caution pricing](https://caution.co/pricing.html)).
- **Competitive overlap:** OPAQUE, Edgeless Systems, and enclaive already sell overlapping confidential-computing orchestration, attestation, and audit functions and have disclosed institutional funding ([OPAQUE](https://www.opaque.co/resources/articles/opaque-raises-24m-series-b-at-300m-valuation-to-advance-confidential-ai-for-the-enterprise), [Edgeless Systems](https://www.edgeless.systems/edgeless-systems-raises-5m-to-advance-confidential-computing), [enclaive](https://www.enclaive.io/resources/enclaive-raises-eu4-1m-to-bring-confidential-computing-to-the-multi-cloud)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.5B in 2023, projected to $153.8B by 2030 at 61.1% CAGR ([Grand View Research, 2024](https://www.grandviewresearch.com/industry-analysis/confidential-computing-market-report)) |
| SAM | No public data found |
| Traction | Production customers across five disclosed workload categories; first customers in closed beta ([Y Combinator/Caution LinkedIn, Aug 2026](https://www.linkedin.com/company/cautionco)) |
| Revenue Signal | Commercial license, managed BYOC, fully managed hosting, and support offered; amounts undisclosed ([Caution pricing, Aug 2026](https://caution.co/pricing.html)) |
| Founders | Anton Livaja (CEO): Ledn and Distrust security; Lance Vick (CTO): BitGo, Turnkey, Distrust; Ksenia Lesko (COO): Ada and Distrust operations ([Caution](https://caution.co/about.html)) |
| Competitors | OPAQUE ($55.5M raised, revenue unknown, confidential AI); Edgeless Systems ($5.3M disclosed seed, revenue unknown, confidential Kubernetes); enclaive (€4.1M raised, revenue unknown, multi-cloud orchestration) ([OPAQUE](https://www.opaque.co/resources/articles/opaque-raises-24m-series-b-at-300m-valuation-to-advance-confidential-ai-for-the-enterprise), [Edgeless](https://www.edgeless.systems/edgeless-systems-raises-5m-to-advance-confidential-computing), [enclaive](https://www.enclaive.io/resources/enclaive-raises-eu4-1m-to-bring-confidential-computing-to-the-multi-cloud)) |
| Moat Signals | Reproducible full-stack builds, independent source-to-runtime verification, and open-source enclave tooling ([Caution, Dec 2025](https://caution.co/blog/introducing-caution.html)) |
| Risk Factors | AWS Nitro dependency, verification does not prove source safety, open-source substitution ([Caution security documentation](https://caution.co/security-controls.html)) |
| Founder Reach | Anton: X 916, LinkedIn 3K, top GitHub repo 7 stars; Lance: GitHub 414 followers and top repo 611 stars; Ksenia: X 49 and LinkedIn 1,282 ([GitHub](https://github.com/lrvick), [LinkedIn](https://ky.linkedin.com/in/ksenialesko), [X via TwStalker](https://mobile.twstalker.com/TrustedStake)) |
| Distribution Signals | LinkedIn 292 followers, X 12 followers, $4,000 hackathon bounty, YC Summer 2026 acceptance ([LinkedIn](https://www.linkedin.com/company/cautionco), [Devfolio](https://devfolio.co/projects/caution-platform-248a), [Cayman Enterprise City](https://www.caymanenterprisecity.com/blog/member-story-caution-sezc)) |
| Emails | info@caution.co ([Caution LinkedIn](https://www.linkedin.com/company/cautionco)); anton@distrust.co and lance@distrust.co ([Milk Sad](https://milksad.info/)); lance@vick.house ([Lance Vick](https://lance.dev/)) |
