# Arga Labs

> Real-world sandboxes to test agents and agent-facing software

| Field | Value |
|-------|-------|
| Website | https://www.argalabs.com/ |
| YC Page | https://www.ycombinator.com/companies/arga-labs |
| Batch | Spring 2026 (P26, formerly X26) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, SaaS, Infrastructure |
| YC Partner | Pete Koomen |
| Emails | contact@argalabs.com |

## The Idea

- **Problem:** Teams building agents and apps that touch third-party SaaS (Stripe, Slack, GSuite, HubSpot) cannot test against the real services without hitting rate limits or polluting production data, and existing mocks miss edge cases (Arga Labs YC Launch page).
- **Approach:** Arga deploys code into per-PR sandboxes that route to "twins" of third-party services exposing the same APIs, SDKs, and MCP tool calls, while seeding thousands of parallel instances via natural language (argalabs.com; YC Launch).
- **Differentiation:** Versus E2B/Daytona/Runloop (general code-execution sandboxes for agents), Arga's product is specifically API/SaaS-integration twins (Stripe, Slack, GDrive) plus per-PR staging, not generic Linux microVMs (Arga Labs YC Launch; rywalker.com sandbox comparison, 2026).
- **Business Model:** "Limited features for free" at argalabs.com; no published pricing tiers found (YC company page; argalabs.com). [Inferred]: Consumption-based pricing on sandbox instances or seat-based for dev teams, common for sandbox-infra peers (E2B, Runloop pricing pages).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Bottom-up developer adoption via free tier, YC network customer pipeline, and content (LinkedIn posts by founders — Akira Tong, Phillip Li — drive demos), evidenced by onboarding of Hyperspell (YC F25) as a customer (LinkedIn, Arga Labs).

## Defensibility

- **Moat today:** Library of high-fidelity "twins" of third-party APIs (Stripe, Slack, GSuite, HubSpot) maintained to API parity — building and maintaining these is the unit of work that compounds (Arga Labs YC Launch).
- **Future moat:** [Inferred]: Switching costs as customer test suites, seed data, and red-teaming workflows accumulate inside Arga sandboxes; unproven because no public retention or expansion metrics exist.
- **Market structure:** [Inferred]: Stripe/Slack/Google have no incentive to ship official "twin" services because their commercial model is live-API usage; a neutral third party can twin many vendors at once without channel conflict.
- **Commoditization risk:** E2B ($32M raised, 88% Fortune 100 footprint), Daytona ($31M raised), and Runloop ($7M seed) all run general sandboxes and could add SaaS-twin libraries; OSS projects like LocalStack already mock AWS in a similar pattern (E2B blog, Jul 2025; Daytona PR Newswire, Feb 2026; Runloop press, Jul 2025).

## Market & Traction

- **Traction signals:**
  - Customer: Hyperspell (YC F25) onboarded, twins built for their external integrations (LinkedIn, Akira Tong post).
  - "Onboarded fast-moving Seed to Series B customers" over a 6-week window (LinkedIn post by Phillip Li; specific count not disclosed).
  - LinkedIn company page: 1,001 followers (LinkedIn, fetched May 2026).
  - Backed by Y Combinator and Comma Capital (LinkedIn company page).
  - Red-teaming feature for AI agents launched (LinkedIn, Akira Tong, Nov 2025).
  - Phillip Li Twitter/X: @PhillipLii (follower count not retrievable).
  - No Product Hunt listing found; no public revenue, paying customer count, or sandbox-volume metric disclosed.
- **Competitors:**
  - E2B ($32M total raised incl. $21M Series A Jul 2025 led by Insight Partners; revenue unknown; 200M+ sandboxes started, Fortune 100 adoption — general code-execution sandboxes, not SaaS twins) (E2B blog; VentureBeat, Jul 2025).
  - Daytona ($31M total raised incl. $24M Series A Feb 2026 led by FirstMark; revenue unknown; 90ms sandbox creation, Computer Use support — desktop/browser automation, not API twins) (PR Newswire, Feb 2026).
  - Runloop ($7M seed Jul 2025 led by The General Partnership; revenue unknown; Devboxes for AI coding agents with SWE-bench evaluation — coding-agent focus, not third-party API twins) (VentureBeat, Jul 2025).
  - Modal (well-funded compute platform; revenue unknown; GPU-capable sandboxes — focus on inference/training, not SaaS integration testing) (modal.com blog, 2025).
  - LocalStack (open-source AWS mocking; revenue unknown; adjacent — mocks cloud APIs but not SaaS apps like Slack/Stripe) (rywalker.com sandbox comparison, 2026).
- **Why now:** [Inferred]: The mid-2025–2026 wave of agent frameworks calling external tools via MCP (Stripe, Slack, GDrive MCP servers) made integration-testing the bottleneck, evidenced by simultaneous Series A rounds at E2B (Jul 2025) and Daytona (Feb 2026) in the adjacent sandbox category.

## Founders & Team

- **Phillip Li (Co-founder & CEO):**
  - Background: Studied at UBC (met co-founder in first-year calculus); pivoted from neuroscience to CS; built an internal dev tool at Amazon as an intern that saved "10+ recurring weeks/year of engineer hours"; former Canadian Junior National Team fencer (YC Launch page; LinkedIn).
  - Twitter/X: @PhillipLii (count not retrievable).
  - LinkedIn: "Arga Labs (YC P26)" (linkedin.com/in/phillip-li-a28a84217).
  - GitHub: No public repos found in search.
- **Akira Tong (Co-founder & CTO):**
  - Background: Skipped high school, graduated UBC at 19 (CS & Business); prior SWE at Stripe and quant analyst at Goldman Sachs; cites Stripe experience as origin of insight that "high-fidelity staging was the key to unlocking dev productivity" (YC Launch; LinkedIn; StartupHub.ai).
  - Twitter/X: No public account found in search.
  - LinkedIn: "Arga Labs (YC P26) | CS & Business @ UBC" (linkedin.com/in/akira-tong).
  - GitHub: No public repos found in search.
- **Co-founder relationship:** Met at UBC in first-year calculus; Akira was 14 at the time (YC Launch; Phillip Li LinkedIn).
- **Founder-market fit:** Akira shipped at Stripe, the canonical API the product twins, and Phillip's Amazon internship project was internal dev tooling — both directly relevant to building API twins for developer workflows (YC Launch; LinkedIn). Investor: Comma Capital (Arga Labs LinkedIn page).

## Key Risks

- **Commoditization by funded sandbox peers:** E2B ($32M raised, 88% Fortune 100), Daytona ($31M raised), and Runloop ($7M raised) can extend general sandboxes with SaaS-twin libraries; Arga's edge depends on staying ahead on twin breadth and fidelity (E2B blog, Jul 2025; Daytona PR Newswire, Feb 2026).
- **Twin-fidelity maintenance burden:** Every Stripe/Slack/GDrive API change requires updating the twin or customers will see drift between sandbox and production; no public evidence of automated parity tooling found in launch materials (Arga Labs YC Launch).
- **Vendor adversarial risk:** Stripe, Slack, and Google's ToS may restrict cloning of API surfaces or use of branded names; no public legal disclosure found, and Akira Tong is a Stripe alum which may or may not affect access (YC Launch; no public ToS analysis found).
- **Concentration in YC customer base:** Named customer Hyperspell is YC F25 and other early customers cited as "Seed to Series B" — narrow ICP outside YC network not yet demonstrated (LinkedIn, Phillip Li post).
- **No public revenue or paid-conversion signal:** Free tier is live but no pricing page, paying customer count, or ARR has been disclosed; impossible to assess monetization from public data (argalabs.com; YC company page).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Hyperspell (YC F25) onboarded as customer (LinkedIn, Akira Tong); "Seed to Series B" customers onboarded over 6 weeks, count undisclosed (LinkedIn, Phillip Li); LinkedIn company page 1,001 followers (LinkedIn, May 2026); backed by YC + Comma Capital (LinkedIn) |
| Revenue Signal | "Limited features for free" at argalabs.com; no pricing page or ARR disclosed (argalabs.com; YC company page) |
| Founders | Phillip Li (CEO): UBC, ex-Amazon intern dev tooling. Akira Tong (CTO): UBC at 19, ex-Stripe SWE, ex-Goldman Sachs quant. |
| Competitors | E2B ($32M raised, revenue unknown, general code sandboxes vs. Arga's SaaS twins); Daytona ($31M raised, revenue unknown, 90ms sandboxes + Computer Use vs. SaaS twins); Runloop ($7M raised, revenue unknown, coding-agent Devboxes vs. SaaS twins); Modal (compute platform, revenue unknown, GPU sandboxes vs. integration testing); LocalStack (open-source, revenue unknown, AWS-only mocks vs. multi-SaaS twins) |
| Moat Signals | Library of high-fidelity API twins for Stripe/Slack/GSuite/HubSpot (Arga Labs YC Launch) |
| Risk Factors | Commoditization by funded sandbox peers, twin-fidelity maintenance burden, vendor ToS/adversarial risk |
| Founder Reach | Phillip Li: Twitter @PhillipLii (count not retrievable), LinkedIn (count not retrievable), GitHub not found. Akira Tong: Twitter not found, LinkedIn (count not retrievable), GitHub not found. Company LinkedIn: 1,001 followers (May 2026) |
| Distribution Signals | LinkedIn company page 1,001 followers (LinkedIn, May 2026); YC Launch posts (ycombinator.com/launches, 2026); no Product Hunt listing found |
| Emails | contact@argalabs.com (Arga Labs LinkedIn page) |
