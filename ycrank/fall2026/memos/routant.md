# Routant

> Last mile deployment and connectivity for Agents as a Service

| Field | Value |
|-------|-------|
| Website | https://routant.ai/ |
| YC Page | https://www.ycombinator.com/companies/routant |
| Batch | No public data found |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Cybersecurity, AI |
| YC Partner | Not listed — page could not be verified |
| Emails | No public data found |

## The Idea

- **Problem:** Agent vendors need permission to operate inside customers’ private systems, where trust and access constrain deployment according to the supplied company description; existing approaches include broad API keys and anonymous service accounts ([Okta, February 2026](https://www.okta.com/en-nl/newsroom/articles/enterprise-buyer-survey-ai-agent-security/)).
- **Approach:** Routant describes an access layer that vendors integrate with once while customers define permitted resources, actions requiring human review, and action audit trails (supplied company description; implementation not independently verified).
- **Differentiation:** Routant emphasizes vendor-to-customer deployment governance, while Keycard documents task-scoped credentials and delegation chains and Arcade documents authorization at each action; no exclusive Routant capability could be verified (supplied company description; [Keycard, October 2025](https://www.keycard.ai/blog/the-federated-trust-fabric-for-the-agent-native-era/); [Arcade, June 2026](https://www.arcade.dev/blog/arcade-series-a/)).
- **Business Model:** [Inferred]: Selling access infrastructure to agent vendors is a possible monetization path given the stated integration model, but public pricing, billing units, and contract terms could not be verified.
- **TAM/SAM:** Mordor Intelligence estimates the adjacent AI agent permission management market at $210M in 2026, reaching $1.02B by 2031 at 37.18% CAGR; this is a category estimate rather than Routant’s independently established TAM or SAM ([Mordor Intelligence, 2026](https://www.mordorintelligence.com/industry-reports/ai-agent-permission-management-market)).
- **GTM / Distribution:** No public GTM data found.

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Embedded customer policies and integrations could create replacement costs if customers adopt Routant across production workflows, but deployments and retention could not be verified.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, because existing providers already document agent credentials, delegated authorization, and audit functionality ([Keycard, October 2025](https://www.keycard.ai/blog/the-federated-trust-fabric-for-the-agent-native-era/)).
- **Commoditization risk:** Arcade already offers action-level authorization and governance, while Descope supplies agent identities, scoped tokens, and MCP access policies; the effort required to reproduce Routant’s particular implementation cannot be assessed from available documentation ([Arcade, June 2026](https://www.arcade.dev/blog/arcade-series-a/); [Descope, February 2026](https://www.descope.com/blog/post/2025-review)).

## Market & Traction

- **Traction signals:** No public data found.
- **Competitors:**
  - **Keycard ($38M raised, revenue unknown):** Documents policy-bound credentials, delegation chains, and contextual audit logs, compared with Routant’s stated deployment focus; its funding announcement names Andreessen Horowitz, Acrew Capital, and Boldstart Ventures as leads of the combined financing, without separately specifying round sizes ([Keycard, October 21, 2025](https://www.keycard.ai/blog/the-federated-trust-fabric-for-the-agent-native-era/)).
  - **Arcade.dev ($72M disclosed before a subsequent extension, revenue unknown):** Combines authorization, tool execution, and governance, compared with Routant’s stated connectivity and deployment focus; announced a $60M Series A led by SYN Ventures in June and an additional Cisco Investments extension of undisclosed size in September ([Arcade, June 12, 2026](https://www.arcade.dev/blog/arcade-series-a/); [Arcade, September 28, 2026](https://www.arcade.dev/blog/cisco-investments-backs-arcade/)).
  - **Descope ($88M raised, revenue unknown):** Provides broader customer, partner, and agent identity workflows rather than focusing solely on vendor-agent deployment; its latest verified financing was a $35M seed extension from existing investors, with no separate lead identified ([Descope, September 30, 2025](https://www.descope.com/press-release/seed-funding-advisory-board)).
- **Why now:** [Inferred]: Enterprise attempts to move agents into production are creating demand for access controls, with 69% of respondents in an Okta-commissioned survey of 150 decision-makers reporting that security concerns slowed agent adoption ([Okta/AlphaSights, January 2026 survey, published February 2026](https://www.okta.com/en-nl/newsroom/articles/enterprise-buyer-survey-ai-agent-security/)).

## Founders & Team

- **Founder identities and roles:** No public data found.
  - Background: No public data found.
  - Twitter/X: No public data found.
  - LinkedIn: No public data found.
  - GitHub: No public data found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** No public data found.

## Key Risks

- **Authorization enforcement:** [Inferred]: Because Routant proposes governing agents inside customer systems, bypassable checks or delayed revocation could permit unauthorized actions; customer controls and audit trails are stated mitigations, but enforcement architecture and security testing could not be verified (supplied company description).
- **Overlapping substitutes:** [Inferred]: Buyers could obtain overlapping controls from existing providers, as Arcade documents per-action authorization, human approvals, and audit records, leaving Routant’s technical differentiation unverified ([Arcade, September 2026](https://www.arcade.dev/blog/cisco-investments-backs-arcade/)).
- **Integration maintenance:** [Inferred]: Supporting customers’ private systems could require ongoing adaptation to different identity providers, permissions, and APIs; Routant describes a single vendor integration, but connector coverage and deployment requirements could not be verified (supplied company description).
- **Verification gap:** Website not accessible at time of research through the available browser, and the YC profile also failed to open, preventing verification of founders, batch, assigned partner, pricing, and official contact details (research access checks, October 29, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Adjacent AI agent permission management category: $210M in 2026, projected $1.02B in 2031, 37.18% CAGR; not a company-specific TAM ([Mordor Intelligence, 2026](https://www.mordorintelligence.com/industry-reports/ai-agent-permission-management-market)) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | No public data found |
| Competitors | Keycard ($38M raised, revenue unknown, scoped credentials and delegation chains) ([Keycard, October 2025](https://www.keycard.ai/blog/the-federated-trust-fabric-for-the-agent-native-era/)); Arcade.dev ($72M disclosed before an undisclosed extension, revenue unknown, authorization plus tool execution) ([Arcade, June 2026](https://www.arcade.dev/blog/arcade-series-a/), [September 2026](https://www.arcade.dev/blog/cisco-investments-backs-arcade/)); Descope ($88M raised, revenue unknown, broader external identity platform) ([Descope, September 2025](https://www.descope.com/press-release/seed-funding-advisory-board)) |
| Moat Signals | No public data found |
| Risk Factors | Competitive feature overlap: scoped credentials and delegation chains at Keycard; per-action authorization, approvals, and audits at Arcade ([Keycard, October 2025](https://www.keycard.ai/blog/the-federated-trust-fabric-for-the-agent-native-era/); [Arcade, September 2026](https://www.arcade.dev/blog/cisco-investments-backs-arcade/)) |
| Founder Reach | No public data found |
| Distribution Signals | No public data found |
| Emails | No public data found |
