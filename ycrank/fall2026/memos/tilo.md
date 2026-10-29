# Tilo

> A Linux-based, AI-native operating system.

| Field | Value |
|-------|-------|
| Website | https://tilo.so |
| YC Page | https://www.ycombinator.com/companies/tilo |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/tilo)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, AI |
| YC Partner | Grey Baker ([YC](https://www.ycombinator.com/companies/tilo)) |
| Emails | security@tilo.so ([Tilo security policy](https://code.tilo.so/tilo/tilo/src/branch/main/SECURITY.md)) |

## The Idea

- **Problem:** Tilo targets people deploying computer-use agents whose screenshot-and-click workflows incur latency, expense, and interface fragility, according to its company description ([YC, accessed Oct 2026](https://www.ycombinator.com/companies/tilo)).
- **Approach:** Applications expose typed actions that agents invoke directly, while humans use visible interfaces sharing workspace state, permissions, history, and undo ([Tilo action API](https://tilo.so/docs/developers/agent-action-api/), [Tilo OS](https://tilo.sh/)).
- **Differentiation:** Simular automates existing interfaces and Browser Use converts websites into structured representations, whereas Tilo introduces an application framework with system-managed actions and collaborative state ([Simular](https://www.simular.ai/articles/simular-raises-21-5m-to-build-autonomous-computer-agents), [Browser Use](https://browser-use.com/posts/seed-round), [Tilo SDK](https://tilo.so/docs/)).
- **Business Model:** No public data found.
- **TAM/SAM:** The broader AI operating-system category is estimated at $16.7B in 2026, with 30.5% CAGR through 2033 across mobile, desktop, and embedded deployments; no Tilo-specific TAM/SAM was found ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-operating-system-market-report)).
- **GTM / Distribution:** [Inferred]: Public source code, application-development documentation, and browser-based workspace access provide a developer-led adoption path ([Tilo repository](https://code.tilo.so/tilo/tilo), [SDK](https://tilo.so/docs/), [browser application](https://tilo.coffee/)).

## Defensibility

- **Moat today:** [Inferred]: Integrating application actions, shared storage, collaboration, permissions, and undo creates implementation work for a replica, although public documentation does not establish an exclusive advantage ([Tilo SDK](https://tilo.so/docs/)).
- **Future moat:** [Inferred]: Third-party applications built around Tilo’s resource-and-action model could increase ecosystem switching costs, but external developer adoption counts were not found ([Tilo developer documentation](https://tilo.so/docs/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Other Linux developers could reuse Tilo’s published implementation under its licenses, while browser automation already offers structured interaction without adopting its OS; Tilo licenses its application framework under MIT and other code under AGPL-3.0 ([repository](https://code.tilo.so/tilo/tilo), [Browser Use](https://browser-use.com/posts/seed-round)).

## Market & Traction

- **Traction signals:**
  - YC Fall 2026 participation and company backing listed publicly ([YC](https://www.ycombinator.com/companies/tilo), [Tilo website](https://tilo.so/), accessed Oct 27, 2026).
  - GitHub mirror: 3 stars and 0 forks ([GitHub](https://github.com/tilo-os/tilo), accessed Oct 27, 2026).
  - Named publication coverage: Founderland article dated October 19, 2026 ([Founderland](https://founderland.ai/articles/tilo-launches-ai-native-linux-os-cutting-agent-costs-15x-mvfvijip)).
  - Active YC job postings: 0 ([YC Jobs](https://www.ycombinator.com/companies/tilo/jobs), accessed Oct 27, 2026).
- **Competitors — adjacent alternatives:**
  - **Simular ($26.5M across disclosed seed and Series A rounds, revenue unknown):** Operates existing desktop interfaces rather than requiring Tilo-native applications; its latest announced round was $21.5M Series A, December 2, 2025, led by Felicis ([Simular announcement](https://www.simular.ai/articles/simular-raises-21-5m-to-build-autonomous-computer-agents)).
  - **E2B (approximately $35M across disclosed rounds, revenue unknown):** Supplies isolated cloud machines, including graphical Linux environments, rather than a replacement collaborative desktop; latest announced round was $21M Series A, July 28, 2025, led by Insight Partners ([E2B funding history](https://e2b.dev/about), [round announcement](https://e2b.dev/resources/series-a)).
  - **Browser Use ($17M announced financing, revenue unknown):** Structures existing websites for agents rather than rebuilding desktop application state; its announced financing was led by Felicis on March 22, 2025 ([Browser Use](https://browser-use.com/posts/seed-round)).
  - [Inferred]: These are adjacent alternatives because their documented products address agent interaction or execution environments without reproducing Tilo’s complete desktop-and-application architecture.
- **Why now:** [Inferred]: MCP’s introduction on November 25, 2024 provided a shared integration protocol for exposing tools to assistants, supporting Tilo’s action-based approach ([Anthropic announcement](https://www.anthropic.com/news/model-context-protocol?cid=482), [Tilo YC profile](https://www.ycombinator.com/companies/tilo)).

## Founders & Team

- **Xaver Emmerling (Founder/CEO):**
  - Background: Studied computer science through TUM’s early-admission program, began programming at age 12, and lists BDPE among previous affiliations ([Tilo About](https://tilo.so/about/), [YC founder profile](https://www.ycombinator.com/founders/xaver-emmerling)).
  - Twitter/X: @XaEmmerling; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/xaver-emmerling)).
  - LinkedIn: Profile identifies Tilo; headline not retrievable; 443 followers in the indexed profile ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/xaver-emmerling-915228278)).
  - GitHub: No public data found.
- **Quinten Wolff (Founder/CTO):**
  - Background: Entered TUM’s early-admission computer-science program in 2022 and led AI workflow development at Munich patent-litigation firm BDPE during 2025–2026, building patent-workflow automation ([Tilo About](https://tilo.so/about/), [YC founder profile](https://www.ycombinator.com/founders/quinten-wolff)).
  - Twitter/X: @NetniuqFlow; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/quinten-wolff)).
  - LinkedIn: YC links a public profile; headline not retrievable ([YC](https://www.ycombinator.com/founders/quinten-wolff), [LinkedIn](https://www.linkedin.com/in/quinten-wolff-44810140b)).
  - GitHub: No verified profile found; his public Forgejo account is @qwolff, including PineTime firmware project pineOS with 1 star ([Tilo Forge, Oct 2026](https://code.tilo.so/qwolff)).
- **Co-founder relationship:** Both list TUM and BDPE affiliations, although their meeting history is undisclosed ([Xaver’s YC profile](https://www.ycombinator.com/founders/xaver-emmerling), [Quinten’s YC profile](https://www.ycombinator.com/founders/quinten-wolff)).
- **Founder-market fit:** [Inferred]: Their computer-science backgrounds and Wolff’s documented workflow-automation experience relate to building agent-operable software; YC is a disclosed backer ([Tilo About](https://tilo.so/about/), [YC](https://www.ycombinator.com/companies/tilo)).

## Key Risks

- **Performance verification:** Tilo claims computer use can be up to 10,000× cheaper, but no independently reproduced benchmark was found ([company statement on YC, Oct 2026](https://www.ycombinator.com/companies/tilo)).
- **Application integration:** Deeper search, history, and shared state require native applications to describe their items and actions; conventional Linux applications receive a narrower feature set ([Tilo OS](https://tilo.sh/)).
- **Security boundaries:** Offline-replica revocation timing remains unsettled, peer boot-state attestation is not implemented end to end, and hosted-operator isolation is unimplemented; scoped grants and signed changes provide documented controls ([Tilo security model](https://tilo.sh/security/)).
- **Catalogue availability:** Tilo documents an October 21, 2026 authorization expiry that removed catalogue access across devices; its documented response includes renewal procedures, monitoring metrics, and clearer expiry messages ([Tilo registry documentation](https://tilo.so/docs/developers/registry/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI OS category: $16.7B in 2026; 30.5% CAGR during 2026–2033; includes mobile and embedded deployments ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-operating-system-market-report)). |
| SAM | No public data found |
| Traction | GitHub mirror: 3 stars; Founderland coverage October 19, 2026 ([GitHub, Oct 2026](https://github.com/tilo-os/tilo), [Founderland](https://founderland.ai/articles/tilo-launches-ai-native-linux-os-cutting-agent-costs-15x-mvfvijip)). |
| Revenue Signal | No public data found |
| Founders | Xaver Emmerling, CEO: TUM early admission, BDPE affiliation; Quinten Wolff, CTO: TUM early admission, BDPE workflow automation ([Tilo About](https://tilo.so/about/), [YC founders](https://www.ycombinator.com/founders/xaver-emmerling)). |
| Competitors | Simular ($26.5M disclosed rounds, revenue unknown, existing-interface automation); E2B (~$35M disclosed rounds, revenue unknown, cloud sandboxes); Browser Use ($17M announced, revenue unknown, browser automation) ([Simular](https://www.simular.ai/articles/simular-raises-21-5m-to-build-autonomous-computer-agents), [E2B](https://e2b.dev/about), [Browser Use](https://browser-use.com/posts/seed-round)). |
| Moat Signals | Shared resource/action framework connecting automation, undo, and collaboration ([Tilo SDK](https://tilo.so/docs/)). |
| Risk Factors | Native-application integration requirements, unresolved revocation boundaries, catalogue expiry incident ([Tilo OS](https://tilo.sh/), [security model](https://tilo.sh/security/), [registry docs](https://tilo.so/docs/developers/registry/)). |
| Founder Reach | Emmerling: 443 LinkedIn followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/xaver-emmerling-915228278)). |
| Distribution Signals | Browser waitlist and public application SDK ([Tilo browser application](https://tilo.coffee/), [developer docs](https://tilo.so/docs/), Oct 2026). |
| Emails | security@tilo.so ([Tilo security policy](https://code.tilo.so/tilo/tilo/src/branch/main/SECURITY.md)). |
