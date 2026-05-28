# TesterArmy

> Test your app with AI, catch bugs before users do

| Field | Value |
|-------|-------|
| Website | https://tester.army |
| YC Page | https://www.ycombinator.com/companies/testerarmy |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 4 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Artificial Intelligence, Developer Tools, B2B |
| YC Partner | Pete Koomen (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** End-to-end UI regressions and UX issues escape code review for web/mobile teams, who currently rely on hand-written Playwright/Appium scripts that break on every UI change (company website, May 2026).
- **Approach:** An AI agent driving a real browser/device executes plain-English test descriptions, handling OAuth, OTP, and stored credentials (AES-256-GCM) and posting screenshots/recordings back to GitHub PRs and Slack (tester.army, May 2026).
- **Differentiation:** Vs. QA Wolf (managed-service Playwright authoring with humans-in-the-loop, qawolf.com), TesterArmy is self-serve agent-run; vs. Octomind (generates portable Playwright code you own, octomind.dev), TesterArmy keeps tests as natural-language prompts; vs. Mabl (low-code recorder, mabl.com), TesterArmy removes the recorder entirely.
- **Business Model:** Tiered SaaS by test-run volume — Hobby $99/mo for 250 runs, Startup $299/mo for 1,000 runs and 10 seats, Enterprise custom with SSO/SAML and Slack Connect SLA; 3 free runs at signup (tester.army/pricing, May 2026).
- **TAM/SAM:** Global AI-enabled testing market $1.21B in 2026 projected to $4.64B by 2034 at 18.3% CAGR (Fortune Business Insights, 2025); broader software testing market $57.73B in 2026 (Fortune Business Insights, 2026).
- **GTM / Distribution:** [Inferred]: Bottom-up developer adoption via GitHub PR integration plus founders' existing React Native open-source audience (callstack.com team pages; founders' OSS profiles on github.com).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond Y Combinator backing and a $500K standard YC deal (ycombinator.com).
- **Future moat:** [Inferred]: Proprietary test-history and failure-pattern dataset per customer could create switching costs as the agent learns app-specific selectors and flows; unproven now because the product launched in the Spring 2026 batch (YC page).
- **Market structure:** [Inferred]: Selenium/Playwright-native incumbents (BrowserStack, Sauce Labs) face cannibalization risk if they fully replace script authoring with prompts, since their seat/parallel-execution pricing depends on script volume.
- **Commoditization risk:** Multiple funded entrants already ship the same plain-English-to-browser-agent pattern — Octomind ($4.8M seed, tech.eu Apr 2024), Momentic ($19.2M, Tracxn 2026), Reflect.run ($1.8M seed, reflect.run), QA.tech, Shiplight, desplega.ai — indicating low technical barrier to a baseline product.

## Market & Traction

- **Traction signals:**
  - Y Combinator Spring 2026 batch participation with standard $500K investment (ycombinator.com).
  - "LAUNCH30" promo code distributed at YC launch (YC company page, 2026).
  - Public Discord, X, and LinkedIn community links live on website (tester.army, May 2026); follower counts not retrievable.
  - Documentation site published at docs.tester.army (tester.army, May 2026).
  - No revenue, customer logos, user counts, press coverage, or Product Hunt listing found in public sources as of May 2026.
- **Competitors:**
  - QA Wolf ($57M total raised; $36M Series B led by Scale Venture Partners, Jul 2024, prnewswire.com; revenue unknown): managed human+Playwright service with zero-flake guarantee vs. TesterArmy's self-serve agent.
  - Mabl ($76.1M total raised, $40M Series C led by Vista Equity Partners Nov 2021, mabl.com; $17.9M revenue 2024 per getlatka.com; $360M valuation 2024 per Tracxn): low-code recorder + AI generation vs. TesterArmy's pure NL prompts.
  - Octomind ($4.8M seed led by Cherry Ventures, Apr 2024, tech.eu; revenue unknown): generates portable Playwright code customers own vs. TesterArmy's hosted agent execution.
  - Momentic (~$19.2M across 3 rounds, Tracxn 2026; revenue unknown): AI test automation, similar NL-driven approach.
  - Reflect.run ($1.8M seed led by Battery and Craft, reflect.run; revenue unknown): no-code recorder predating the agent wave, narrower scope (web only) vs. TesterArmy's web + iOS/Android.
- **Why now:** [Inferred]: Frontier-model browser-use capability (Anthropic computer use, OpenAI Operator) crossed the threshold for handling OAuth/OTP and dynamic UIs in 2024–2025, making script-free test agents viable where prior recorder/heuristic approaches failed.

## Founders & Team

- **Szymon Rybczak (Co-founder & CEO):**
  - Background: Prior Software Engineer at Callstack (callstack.com/team/szymon-rybczak); maintainer of React Native Community CLI and contributor to react-native-ai; began programming at 14, joined Callstack as its youngest engineer (gitnation.com; podcast.galaxies.dev).
  - Twitter/X: @SzymonRybczak (YC page); follower count not retrievable.
  - LinkedIn: "Co-founder & CEO at TesterArmy" — prior "Software Engineer at Callstack" (linkedin.com/in/szymon-rybczak-a0a0481b7).
  - GitHub: Profile linked from szymonrybczak.dev; specific top-repo star count not retrievable from search snippets.
- **Oskar Kwaśniewski (Co-founder):**
  - Background: Senior React Native Developer at Callstack; React Native Core contributor with 100+ merged PRs; led "React Native for Apple Vision Pro" announcement; educated at Zachodniopomorski Uniwersytet Technologiczny w Szczecinie (callstack.com/team/oskar-kwasniewski; oskarkwasniewski.dev; linkedin.com).
  - Twitter/X: @o_kwasniewski (YC page); follower count not retrievable.
  - LinkedIn: "Senior React Native Developer at Callstack" (linkedin.com/in/oskar-kwaśniewski-452977207).
  - GitHub: @okwasniewski (github.com/okwasniewski); top-repo star count not retrievable from search snippets.
- **Piotr Matyjasik (Co-founder & CPO):**
  - Background: Computer Science student at West Pomeranian University of Technology; prior front-end/back-end engineer at Fujitsu; builds iOS apps using React Native in side work (pmatyjasik.dev; linkedin.com/in/piotr-matyjasik).
  - Twitter/X: @p_matyjasik (YC page); follower count not retrievable.
  - LinkedIn: "Co-Founder / CPO at @TesterArmy (YC P26)" (linkedin.com/in/piotr-matyjasik).
  - GitHub: @pmatyjasik (github.com/pmatyjasik); top-repo star count not retrievable from search snippets.
- **Co-founder relationship:** Szymon and Oskar worked together at 4 prior companies; Piotr and Oskar studied computer science together at West Pomeranian University of Technology in Szczecin, Poland (WebSearch snippet citing TesterArmy bio, 2026).
- **Founder-market fit:** All three founders shipped production React Native tooling at Callstack and contributed to React Native Core/CLI (callstack.com team pages; github.com/okwasniewski), giving direct exposure to the mobile-app testing pain TesterArmy targets; no external advisors or board members beyond YC's Pete Koomen disclosed publicly.

## Key Risks

- **Crowded, well-funded competitive set:** Direct agent-based testing competitors include QA Wolf ($57M raised, prnewswire.com Jul 2024), Mabl ($76.1M, $360M valuation, Tracxn), and Momentic (~$19.2M, Tracxn) — TesterArmy enters with $500K YC standard funding (ycombinator.com) against incumbents with multi-year head starts and enterprise sales motions; no mitigation publicly disclosed.
- **Technical feasibility of agent reliability:** Plain-English browser agents handling OAuth/OTP/dynamic UIs depend on frontier-model browser-use capabilities still evolving in 2025–2026 (Fortune Business Insights AI-enabled testing report, 2025); agent flakiness is the explicit value-prop competitors (QA Wolf "zero-flake guarantee," qawolf.com) market against, raising the bar.
- **Model-provider cost exposure:** Pricing is per-test-run at 250 runs/$99 and 1,000 runs/$299 (tester.army/pricing, May 2026), implying gross margin sensitivity to frontier-model API pricing on inputs the company does not control.
- **Limited US enterprise GTM presence:** Three founders are Poland-based ex-Callstack engineers with deep OSS credibility but no disclosed enterprise sales background (callstack.com team pages); enterprise tier requires SSO/SAML, Slack Connect SLAs, and white-glove onboarding (tester.army/pricing) that typically need dedicated GTM hires — company is not hiring per YC page.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI-enabled testing $1.21B in 2026 → $4.64B by 2034, 18.3% CAGR (Fortune Business Insights, 2025); software testing overall $57.73B in 2026 (Fortune Business Insights, 2026) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch + $500K standard deal (ycombinator.com); "LAUNCH30" promo at YC launch (YC page, 2026); Discord/X/LinkedIn channels live (tester.army, May 2026) |
| Revenue Signal | Hobby $99/mo (250 runs); Startup $299/mo (1,000 runs, 10 seats); Enterprise custom; 3 free runs at signup (tester.army/pricing, May 2026) |
| Founders | Szymon Rybczak (CEO): ex-Callstack, React Native CLI maintainer. Oskar Kwaśniewski (Co-founder): ex-Callstack Senior RN Dev, React Native Core contributor 100+ PRs. Piotr Matyjasik (CPO): ex-Fujitsu, CS at West Pomeranian Univ. of Technology. |
| Competitors | QA Wolf ($57M raised, revenue unknown, managed-service Playwright with zero-flake guarantee); Mabl ($76.1M raised, $17.9M revenue 2024 per getlatka.com, low-code recorder); Octomind ($4.8M raised, revenue unknown, portable Playwright code output); Momentic (~$19.2M raised, revenue unknown, similar NL-driven agent); Reflect.run ($1.8M raised, revenue unknown, no-code recorder) |
| Moat Signals | No public data found |
| Risk Factors | Crowded well-funded competitive set, agent reliability/flakiness, frontier-model COGS exposure, limited US enterprise GTM presence |
| Founder Reach | Szymon Rybczak: Twitter @SzymonRybczak count not retrievable, LinkedIn count not retrievable, GitHub stars not retrievable. Oskar Kwaśniewski: Twitter @o_kwasniewski count not retrievable, LinkedIn count not retrievable, GitHub @okwasniewski stars not retrievable. Piotr Matyjasik: Twitter @p_matyjasik count not retrievable, LinkedIn count not retrievable, GitHub @pmatyjasik stars not retrievable. |
| Distribution Signals | YC Spring 2026 launch with promo code "LAUNCH30" (YC page, 2026); GitHub PR + Slack + webhook integrations (tester.army, May 2026); no Product Hunt listing found |
| Emails | No public data found |
