# Boat

> The best cloud VMs for billions of agents

| Field | Value |
|-------|-------|
| Website | https://boat.dev |
| YC Page | https://www.ycombinator.com/companies/boat |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/boat)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | Paris, ?le-de-France, France; Remote |
| Tags | Developer Tools, Cloud Computing |
| YC Partner | Andrew Miklas ([YC](https://www.ycombinator.com/companies/boat)) |
| Emails | support@ascii.dev ([Boat support](https://docs.boat.dev/support)) |

## The Idea

- **Problem:** Developers building long-running coding and knowledge-work agents need persistent computers with browsers and development tools, otherwise requiring them to build and maintain that infrastructure themselves ([YC](https://www.ycombinator.com/companies/boat), accessed Oct 2026).
- **Approach:** Boat provisions Ubuntu VMs with Docker, Chrome, desktop access, snapshots, and fleet management through its CLI, API, and SDKs ([Boat](https://boat.dev), Oct 2026).
- **Differentiation:** Boat’s vendor-authored comparison quotes $0.036/hour for a default VM versus $0.331 for E2B and Daytona and $0.760 for Modal, while its machines support nested virtualization ([pricing](https://docs.boat.dev/pricing), [virtualization docs](https://docs.boat.dev/machines/virtualization), Oct 2026).
- **Business Model:** Consumption billing charges by the second while running, with monthly plans starting at $20, included compute credit, paid overages, and a seven-day trial ([Boat pricing](https://docs.boat.dev/pricing), Oct 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The founders describe using X posts, customer outreach, and a Product Hunt launch to acquire users ([Boat LinkedIn](https://www.linkedin.com/company/boatdotdev), accessed Oct 2026).

## Defensibility

- **Moat today:** Documented technical capabilities include a separate Linux kernel per sandbox, nested virtualization, and dedicated AMD Ryzen hosts; these establish implementation details rather than exclusivity ([Boat virtualization](https://docs.boat.dev/machines/virtualization)).
- **Future moat:** [Inferred]: Customer environments, snapshots, and workflow integrations could create switching costs, but published retention or migration-cost measurements were not found.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given Google’s existing Kubernetes-based agent sandbox offering ([Google Cloud](https://cloud.google.com/blog/products/containers-kubernetes/bringing-you-agent-sandbox-on-gke-and-agent-substrate), May 2026).
- **Commoditization risk:** Google already offers sandbox provisioning and snapshots, while Modal now offers VM sandboxes, demonstrating overlapping functionality from existing infrastructure providers ([Google Cloud](https://cloud.google.com/blog/products/containers-kubernetes/bringing-you-agent-sandbox-on-gke-and-agent-substrate), May 2026; [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d), Oct 2026).

## Market & Traction

- **Traction signals:**
  - More than 1,000 active paying users, founder-reported ([Anicet’s X post, reproduced by teapawt](https://teapaw.org/boatdotdev), Oct 24, 2026).
  - Product Hunt #4 daily finish and 237 points under the Box name ([Product Hunt](https://www.producthunt.com/products/box-4), July 22, 2026).
  - Approximately 3.4K company X followers; LinkedIn follower count and Discord membership count were not retrievable ([X profile via teapawt](https://teapaw.org/boatdotdev), accessed Oct 2026).
  - OpenInspect announced support for Boat sandboxes, including tunnel URLs, prebuilt images, and filesystem snapshots ([announcement reproduced by teapawt](https://teapaw.org/boatdotdev), Oct 23, 2026).
  - Box became Boat on September 15, 2026, with the same product, accounts, machines, and data; Box launch metrics therefore concern the current VM product rather than the earlier IDE ([migration documentation](https://docs.boat.dev/migrating-from-box)).
- **Competitors:**
  - **E2B ($32M raised, revenue unknown):** Its latest disclosed round was a $21M Series A led by Insight Partners in July 2025; its positioning emphasizes enterprise agent infrastructure and an open-source sandbox runtime ([funding summary](https://e2b.dev/resources/updates), [announcement](https://e2b.dev/resources/series-a)).
  - **Daytona ($91M raised, revenue unknown):** Raised a $60M Series B led by FirstMark Growth on October 20, 2026, and documents sandbox isolation through Linux namespaces, compared with Boat’s separate VM kernels ([funding](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [architecture](https://www.daytona.io/docs/en/architecture/), [Boat](https://docs.boat.dev/machines/virtualization)).
  - **Modal (approximately $1,220M raised, over $1,000M annualized revenue run rate):** Raised a $750M Series D led by Accel on October 14, 2026, and combines sandboxes with inference and training infrastructure ([funding total, Sacra](https://sacra.com/c/modal-labs/); [Modal announcement](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Why now:** Google describes the transition from chat interfaces to agents using code execution and persistent terminals as creating demand for dedicated execution environments ([Google Cloud](https://cloud.google.com/blog/products/containers-kubernetes/bringing-you-agent-sandbox-on-gke-and-agent-substrate), May 2026).

## Founders & Team

- **Anicet Nougaret (Founder/CEO):**
  - Background: YC lists INSA Lyon, UPC, and Université Paris Descartes education affiliations and prior work at onepoint and Coddity; he reports previously working on research computing at the European Space Agency ([YC founder profile](https://www.ycombinator.com/founders/anicet-nougaret), [Product Hunt maker statement](https://www.producthunt.com/products/box-4)).
  - Twitter/X: @AniC_dev, approximately 9.3K followers ([profile via teapawt](https://teapawt.org/AniC_dev), accessed Oct 2026).
  - LinkedIn: Ascii affiliation; exact headline: No public data found ([LinkedIn profile](https://fr.linkedin.com/in/anicet-nougaret-b7846b174), via search snippet).
  - GitHub: @AnicetNgrt; jiro-nn, a Rust deep-learning framework, has 130 stars ([GitHub](https://github.com/AnicetNgrt/jiro-nn), accessed Oct 2026).
- **Kirill (Kirill Makarov; Founder/CTO):**
  - Background: YC lists INSA Lyon, University of Jyväskylä, and IUT Lumière Lyon 2 education affiliations and previous work at Volvo, Yandex, farswap, and Ubikap ([YC founder profile](https://www.ycombinator.com/founders/kirill)).
  - Twitter/X: @luaroncrew, approximately 1.7K followers ([profile via teapawt](https://teapawt.org/luaroncrew), accessed Oct 2026).
  - LinkedIn: Listed as Kirill Makarov with Ascii affiliation; exact headline: No public data found ([LinkedIn profile](https://fr.linkedin.com/in/luaroncrew), via search snippet).
  - GitHub: @luaroncrew; pinned repository vibetrader has 53 stars ([GitHub](https://github.com/luaroncrew/vibetrader), accessed Oct 2026).
- **Co-founder relationship:** Both studied computer science at INSA Lyon and report meeting there five years earlier; an October update reports four team members, while LinkedIn lists San Francisco headquarters ([Boat LinkedIn](https://www.linkedin.com/company/boatdotdev), accessed Oct 2026).
- **Founder-market fit:** Nougaret reports research-computing experience and building cloud coding agents before extracting their VM infrastructure into Box, documenting experience with the workload Boat now serves ([Product Hunt maker statement](https://www.producthunt.com/products/box-4)).

## Key Risks

- **Enterprise compliance:** [Inferred]: Customers requiring completed SOC 2 assurance may defer adoption because Boat lists certification as “In progress” ([Boat compliance](https://docs.boat.dev/compliance), Oct 2026).
- **Data residency:** [Inferred]: EU-only storage requirements need contractual verification because Boat documents European compute locations but allows snapshot copies outside the EU ([Boat compliance](https://docs.boat.dev/compliance)).
- **Stopped-data deletion:** Stopped sandbox disks are deleted after 14 days unless preserved through saved snapshots, creating a documented persistence constraint ([Boat pricing](https://docs.boat.dev/pricing)).
- **Competitive convergence:** [Inferred]: Google’s sandbox platform and Modal’s VM sandbox launch could reduce functional differentiation, although Boat continues to compete through its published pricing and configuration ([Google Cloud](https://cloud.google.com/blog/products/containers-kubernetes/bringing-you-agent-sandbox-on-gke-and-agent-substrate), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [Boat pricing](https://docs.boat.dev/pricing)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Over 1,000 active paying users, founder-reported ([X via teapawt](https://teapaw.org/boatdotdev), Oct 24, 2026) |
| Revenue Signal | Founder-reported six-figure ARR, exact amount and currency unspecified ([Boat LinkedIn](https://www.linkedin.com/company/boatdotdev), Oct 2026); $20/month minimum and $0.036/hour default VM ([pricing](https://docs.boat.dev/pricing), Oct 2026) |
| Founders | Anicet Nougaret, CEO: INSA Lyon, prior onepoint/Coddity; Kirill Makarov, CTO: INSA Lyon, prior Volvo/Yandex ([YC Anicet](https://www.ycombinator.com/founders/anicet-nougaret), [YC Kirill](https://www.ycombinator.com/founders/kirill)) |
| Competitors | E2B ($32M raised, revenue unknown, enterprise/open-source positioning; [E2B](https://e2b.dev/resources/updates)); Daytona ($91M raised, revenue unknown, namespace isolation; [Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud)); Modal (~$1,220M raised, >$1,000M annualized run rate, inference/training platform; [Sacra](https://sacra.com/c/modal-labs/), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)) |
| Moat Signals | Separate VM kernels and nested virtualization ([Boat virtualization](https://docs.boat.dev/machines/virtualization)) |
| Risk Factors | SOC 2 in progress, snapshot copies outside EU ([compliance](https://docs.boat.dev/compliance)); stopped-disk deletion ([pricing](https://docs.boat.dev/pricing)) |
| Founder Reach | Nougaret: X ~9.3K, jiro-nn 130 stars ([teapawt](https://teapawt.org/AniC_dev), [GitHub](https://github.com/AnicetNgrt/jiro-nn)); Makarov: X ~1.7K, vibetrader 53 stars ([teapawt](https://teapawt.org/luaroncrew), [GitHub](https://github.com/luaroncrew/vibetrader)); accessed Oct 2026 |
| Distribution Signals | Box Product Hunt #4, July 22, 2026 ([Product Hunt](https://www.producthunt.com/products/box-4)); company X ~3.4K followers ([teapawt](https://teapaw.org/boatdotdev), Oct 2026) |
| Emails | support@ascii.dev ([Boat support](https://docs.boat.dev/support)) |
