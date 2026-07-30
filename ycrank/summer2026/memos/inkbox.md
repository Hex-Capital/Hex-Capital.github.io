# Inkbox

> Give your AI agents email, phone, iMessage and an internet address

| Field | Value |
|-------|-------|
| Website | https://inkbox.ai |
| YC Page | https://www.ycombinator.com/companies/inkbox |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Infrastructure, AI |
| YC Partner | Tyler Bosmeny ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)) |
| Emails | hello@inkbox.ai, ray@inkbox.ai ([Inkbox website](https://inkbox.ai/); [Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)) |

## The Idea

- **Problem:** Developers building autonomous agents must combine human-oriented services such as Gmail, Twilio, and ngrok for authentication and communication, leaving agent identity and cross-channel context fragmented ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)).
- **Approach:** One API atomically provisions an identity with a mailbox, persistent HTTPS tunnel, optional phone number and iMessage, conversation history, contacts, notes, and scoped credential-vault access ([Inkbox documentation, Jul 2026](https://inkbox.ai/docs/get-started/introduction)).
- **Differentiation:** Inkbox combines email, phone, iMessage, a public tunnel, and credentials under one identity, whereas AgentMail focuses on agent email and Arcade.dev focuses on agent authentication and authorization ([Inkbox documentation, Jul 2026](https://inkbox.ai/docs/get-started/introduction); [TechCrunch, Mar 2026](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/); [Arcade.dev, Jun 2026](https://www.arcade.dev/blog/arcade-series-a/)).
- **Business Model:** Inkbox offers Free at $0 for three identities, Developer at $30 monthly for 10 identities, Startup at $180–$200 monthly for 100 identities, custom Enterprise pricing, and usage-based messaging, calling, domain, and 10DLC charges ([Inkbox pricing, Jul 2026](https://inkbox.ai/pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The company distributes through self-service agent signup, an installable skill, open-source SDKs, and plugins for Hermes, OpenClaw, Claude Code, and Codex ([Inkbox website, Jul 2026](https://inkbox.ai/); [Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)).

## Defensibility

- **Moat today:** Public Inkbox repositories have received more than 20 external pull requests, while its largest pinned repositories have 34 and 28 stars, respectively ([Dima Vremenko on LinkedIn, Jul 2026](https://www.linkedin.com/in/dimavrem); [GitHub, Jul 2026](https://github.com/inkbox-ai)).
- **Future moat:** [Inferred]: Persisted cross-channel correspondence, contacts, agent-scoped credentials, and integration-specific workflows could create switching costs, but no retention or migration data establish them yet.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Anima publicly offers a comparable unified identity containing email, phone, voice, vault access, and policy controls, while AgentMail, Arcade.dev, and existing communications APIs can supply individual components ([Anima website, Jul 2026](https://useanima.sh/); [AgentMail, Mar 2026](https://www.globenewswire.com/news-release/2026/03/10/3253159/0/en/agentmail-raises-6m-led-by-general-catalyst-to-build-the-first-email-provider-for-ai-agents.html)).

## Market & Traction

- **Traction signals:**
  - 1,219 LinkedIn company followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/inkbox-ai)).
  - 266 company X followers ([TwStalker, Jul 2026](https://www.twstalker.com/dekrypthor)).
  - Nearly 100 Discord members and more than 20 external pull requests across public repositories ([Dima Vremenko on LinkedIn, Jul 2026](https://www.linkedin.com/in/dimavrem)).
  - 31 GitHub organization followers; top repositories had 34, 28, and 7 stars ([GitHub, Jul 2026](https://github.com/inkbox-ai)).
  - Customer case: Vendo assigned Inkbox identities to five agents across engineering, GTM, operations, and founder-assistant functions ([Inkbox blog, Jul 22, 2026](https://inkbox.ai/blog)).
  - Backed by Y Combinator, NFX, and Night Capital; investment amounts were not disclosed ([Ray Liao on LinkedIn, Jul 2026](https://www.linkedin.com/posts/ruizhi-liao_every-time-i-visit-a-new-place-i-like-to-activity-7470156972340903937-6mxI)).
  - Zero active YC job postings ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)).
- **Competitors (minimum 3, up to 5):**
  - AgentMail ($6M raised, revenue unknown): agent-native email inboxes and autonomous onboarding, without Inkbox’s publicly documented phone, iMessage, tunnel, and vault bundle ([TechCrunch, Mar 2026](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/)).
  - Anima (funding undisclosed, revenue unknown): direct unified email, phone, voice, vault, audit, and policy alternative with server-side compliance controls ([Anima website, Jul 2026](https://useanima.sh/)).
  - Arcade.dev ($72M raised, revenue unknown): agent authorization, governance, and tool execution rather than agent-owned external communication channels ([Arcade.dev, Jun 2026](https://www.arcade.dev/blog/arcade-series-a/)).
  - Composio ($29M raised, revenue unknown): agent skills and tool integrations rather than persistent email, telephone, iMessage, and internet identities ([Composio, Jul 2025](https://composio.dev/blog/series-a)).
- **Why now:** [Inferred]: The 2025–2026 spread of coding and persistent local agents created demand for agents to self-register, authenticate, and communicate outside chat interfaces, reflected in Inkbox’s integrations for Codex, Claude Code, OpenClaw, and Hermes ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)).

## Founders & Team

- **Ray Liao (Cofounder and CEO):**
  - Background: PhD in computer science from MIT and former cofounder/CTO of cardiovascular virtual-clinic company Empallo ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)).
  - Twitter/X: @rayruizhiliao; count not retrievable ([GitHub profile, Jul 2026](https://github.com/rayruizhiliao)).
  - LinkedIn: “Inkbox (YC S26),” with 5K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/ruizhi-liao)).
  - GitHub: @rayruizhiliao; joint_chestxray has 26 stars ([GitHub, Jul 2026](https://github.com/rayruizhiliao)).
- **Alex Wilcox (Cofounder and CTO):**
  - Background: Northeastern MS in computer science and dual BS in mathematics and economics; formerly Empallo’s founding engineer and a Northeastern computer-networking researcher ([Alex Wilcox website, Jul 2026](https://alexwilcox.io/)).
  - Twitter/X: No public account found.
  - LinkedIn: “Inkbox,” with 595 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/alxwlcx)).
  - GitHub: No verified public profile found.
- **Dima Vremenko (Cofounder and CAIO):**
  - Background: Northeastern BS in biochemistry and computer science; former Harvard Medical School research associate who built clinical-prediction pipelines, coauthored six publications, and contributed to an NIH R01 grant ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)).
  - Twitter/X: @DVremenko with 351 followers ([Instalker, Jul 2026](https://instalker.org/aidan__pratt)).
  - LinkedIn: “Inkbox (YC S26),” with 2K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/dimavrem)).
  - GitHub: @dimavrem; no public repositories ([GitHub, Jul 2026](https://github.com/dimavrem)).
- **Co-founder relationship:** Alex and Dima attended Northeastern, Ray and Alex worked at Empallo, and all three built web-automation agents together before Inkbox ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox)).
- **Founder-market fit:** The founders’ documented experience spans ML, networking, telephony infrastructure, web automation, and operating an AI clinic, including Alex’s prior construction of an Asterisk/AWS Chime telephony stack ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/inkbox); [Inkbox blog, Jan 2026](https://inkbox.ai/blog/open-telephony-stack)).

## Key Risks

- **Direct product substitution:** Anima already markets email, phone, voice, credential vaults, audit trails, and agent identity through one API, overlapping most published Inkbox capabilities ([Anima website, Jul 2026](https://useanima.sh/)).
- **Carrier and platform constraints:** U.S. messaging requires 10DLC registration, opt-in, and carrier propagation, while shared iMessage plans impose recipient and message caps ([Inkbox pricing, Jul 2026](https://inkbox.ai/pricing); [Inkbox phone documentation, Jul 2026](https://inkbox.ai/docs/capabilities/phone)).
- **Privacy and compliance exposure:** Inkbox processes email, calls, recordings, transcriptions, texts, credentials, and cross-channel context, while its terms place consent, call-recording, privacy, and telemarketing compliance on customers ([Inkbox terms, Jun 2026](https://inkbox.ai/terms-of-service)).
- **Identity abuse:** Self-registering agents can initially receive mail from anyone and obtain a public address before human verification, although outbound email is limited to the owner and 10 sends daily until approval ([Inkbox agent-signup documentation, Jul 2026](https://inkbox.ai/docs/get-started/agent-signup)).
- **Name collision:** Search results for “Inkbox” frequently refer to the unrelated temporary-tattoo company launched in 2015, creating disambiguation requirements in product and company searches ([Product Hunt](https://www.producthunt.com/products/inkbox/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 1,219 LinkedIn followers (LinkedIn, Jul 2026); nearly 100 Discord members and 20+ external pull requests (Dima Vremenko on LinkedIn, Jul 2026); five-agent Vendo deployment (Inkbox blog, Jul 22, 2026) |
| Revenue Signal | Free $0, Developer $30/month, Startup $180–$200/month, and custom Enterprise tiers (Inkbox pricing, Jul 2026) |
| Founders | Ray Liao (CEO): MIT CS PhD and former Empallo cofounder/CTO; Alex Wilcox (CTO): Northeastern MS CS and former Empallo founding engineer; Dima Vremenko (CAIO): former Harvard Medical School researcher and six-publication coauthor (Y Combinator, Jul 2026) |
| Competitors | AgentMail ($6M raised, revenue unknown, email-only focus; TechCrunch, Mar 2026); Anima (funding undisclosed, revenue unknown, unified identity with policy controls; Anima website, Jul 2026); Arcade.dev ($72M raised, revenue unknown, agent authorization focus; Arcade.dev, Jun 2026); Composio ($29M raised, revenue unknown, tool-integration focus; Composio, Jul 2025) |
| Moat Signals | 20+ external pull requests, nearly 100 Discord members, and 34 stars on the largest public Inkbox repository (LinkedIn and GitHub, Jul 2026) |
| Risk Factors | Direct Anima overlap (Anima website, Jul 2026), carrier and 10DLC constraints (Inkbox pricing, Jul 2026), communications-compliance exposure (Inkbox terms, Jun 2026) |
| Founder Reach | Ray Liao: LinkedIn 5K, GitHub top repo 26 stars (LinkedIn and GitHub, Jul 2026); Alex Wilcox: LinkedIn 595 (LinkedIn, Jul 2026); Dima Vremenko: Twitter 351, LinkedIn 2K, no public GitHub repos (Instalker, LinkedIn, and GitHub, Jul 2026) |
| Distribution Signals | 1,219 LinkedIn followers, 266 X followers, 31 GitHub followers, nearly 100 Discord members, and plugins for four agent harnesses (LinkedIn, TwStalker, GitHub, and Y Combinator, Jul 2026) |
| Emails | hello@inkbox.ai, ray@inkbox.ai (Inkbox website and Y Combinator, Jul 2026) |
