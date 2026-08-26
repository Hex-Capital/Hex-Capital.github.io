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
| YC Partner | Tyler Bosmeny |
| Emails | hello@inkbox.ai, ray@inkbox.ai, privacy@inkbox.ai |

## The Idea

- **Problem:** Developers building autonomous agents must combine services such as Gmail, Twilio, and ngrok to handle verification emails, two-factor codes, phone communication, and inbound internet traffic without a shared identity or context ([YC launch](https://www.ycombinator.com/launches/RIu-inkbox-give-your-ai-agents-email-phone-imessage-and-an-internet-address), Jul 2026).
- **Approach:** Inkbox atomically provisions each agent with a mailbox and stable HTTP/WebSocket/TCP tunnel, with optional PSTN phone service, iMessage, channel history, scoped contacts and notes, and a zero-knowledge credential vault ([Inkbox documentation](https://inkbox.ai/docs/get-started/introduction), Aug 2026).
- **Differentiation:** AgentMail supplies agent email, Twilio supplies communications APIs, and ngrok supplies tunnels, while Inkbox combines these surfaces around one persistent agent identity with cross-channel context and agent self-registration ([AgentMail](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/), Mar 2026; [Inkbox documentation](https://inkbox.ai/docs/get-started/introduction), Aug 2026).
- **Business Model:** Inkbox offers a free tier for three identities, a $30-per-month Developer plan for 10 identities, $180–$200-per-month Startup options for 100 identities, custom Enterprise pricing, and usage overages for messages, calls, and 10DLC campaigns ([Inkbox pricing](https://inkbox.ai/pricing), Aug 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Inkbox distributes through self-serve signup, an installable agent skill, SDKs, and plugins for Claude Code, Codex, OpenClaw, OpenCode, and Hermes, while requesting introductions to operators of agent fleets ([Inkbox website](https://inkbox.ai/), Aug 2026; [YC launch](https://www.ycombinator.com/launches/RIu-inkbox-give-your-ai-agents-email-phone-imessage-and-an-internet-address), Jul 2026).

## Defensibility

- **Moat today:** Inkbox’s public organization has 16 repositories, its main SDK repository has 34 stars, and the company reports 20+ external pull requests and nearly 100 Discord members ([GitHub](https://github.com/inkbox-ai), Aug 2026; [founder post](https://www.linkedin.com/posts/dimavrem_before-y-combinator-and-inkbox-yc-s26-activity-7483245213780463617--Vvu), Aug 2026).
- **Future moat:** [Inferred]: Persistent identities, accumulated cross-channel histories, verified domains, phone registrations, and scoped credentials could create switching costs, but no retention or migration data are public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Developers can assemble overlapping capabilities from AgentMail for email, Vapi or Twilio for voice and messaging, and ngrok for ingress, while Twilio already markets APIs spanning voice, SMS, email, and conversations ([AgentMail](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/), Mar 2026; [Twilio](https://www.twilio.com/en-us/press/releases/Q4-full-year-2025-earnings), Feb 2026; [ngrok](https://ngrok.com/press-releases/ngrok-raises-50m-for-ingress-as-a-service), Dec 2022).

## Market & Traction

- **Traction signals:**
  - Customer testimonial: YC-backed Vendo assigned Inkbox identities to five engineering, GTM, operations, and founder-assistant agents ([Inkbox case study](https://inkbox.ai/blog/vendo-runs-its-team-on-inkbox), Jul 2026).
  - 20+ external pull requests across public Inkbox repositories and nearly 100 Discord members ([founder post](https://www.linkedin.com/posts/dimavrem_before-y-combinator-and-inkbox-yc-s26-activity-7483245213780463617--Vvu), Aug 2026).
  - 1,219 LinkedIn followers ([LinkedIn company page](https://www.linkedin.com/company/inkbox-ai), Aug 2026).
  - 266 X followers under @inkbox_ai ([TwStalker profile index](https://www.twstalker.com/dekrypthor), Aug 2026).
  - 34 GitHub organization followers and 34 stars on the main Inkbox repository ([GitHub](https://github.com/inkbox-ai), Aug 2026).
  - Zero active YC job postings ([YC company page](https://www.ycombinator.com/companies/inkbox), Aug 2026).
  - Backers include Y Combinator, NFX, and Night Capital, with no public financing amount disclosed ([LinkedIn company page](https://www.linkedin.com/company/inkbox-ai), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - AgentMail ($6M raised, revenue unknown): provides agent-native email inboxes and self-onboarding but not Inkbox’s bundled phone, iMessage, tunnel, and vault ([TechCrunch](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/), Mar 2026).
  - ngrok ($50M raised, revenue unknown): provides application ingress and public tunnels rather than a multichannel agent identity ([ngrok](https://ngrok.com/press-releases/ngrok-raises-50m-for-ingress-as-a-service), Dec 2022).
  - Vapi ($72M raised, revenue unknown): provides voice-agent development and deployment rather than email, identity, credential, and tunnel infrastructure ([TechCrunch](https://techcrunch.com/2026/05/12/vapi-hits-500m-valuation-as-amazon-ring-chose-its-ai-platform-over-40-rivals/), May 2026).
  - Twilio (public company, $5.07B 2025 revenue): supplies voice, SMS, email, authentication, and conversation APIs, while Inkbox packages communication resources around individual agent identities ([Twilio](https://www.twilio.com/en-us/press/releases/Q4-full-year-2025-earnings), Feb 2026).
- **Why now:** [Inferred]: Adoption of coding agents and the 2026 spread of continuously running personal agents such as OpenClaw created demand for software-owned inboxes and communication endpoints ([TechCrunch](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/), Mar 2026).

## Founders & Team

- **Ray Liao (Cofounder and CEO):**
  - Background: Liao earned a BEng from Tsinghua and a computer-science PhD from MIT, researched multimodal clinical machine learning, and previously cofounded cardiovascular virtual-clinic company Empallo ([MIT profile](https://people.csail.mit.edu/ruizhi/); [YC](https://www.ycombinator.com/companies/inkbox)).
  - Twitter/X: @rayruizhiliao, 954 followers ([TwStalker](https://mobile.twstalker.com/rayruizhiliao), Aug 2026).
  - LinkedIn: “Inkbox (YC S26)” ([LinkedIn](https://www.linkedin.com/in/ruizhi-liao), Aug 2026).
  - GitHub: @RayRuizhiLiao; joint_chestxray has 26 stars ([GitHub](https://github.com/RayRuizhiLiao), Aug 2026).
- **Dima Vremenko (Cofounder/CAIO):**
  - Background: Vremenko earned a BS in biochemistry and computer science from Northeastern and built pathology-image and EHR prediction pipelines at Harvard Medical School, coauthoring six publications and contributing to an NIH R01 grant ([YC](https://www.ycombinator.com/companies/inkbox)).
  - Twitter/X: @DVremenko, 334 followers ([TwStalker](https://www.twstalker.com/dekrypthor), Aug 2026).
  - LinkedIn: “Inkbox (YC S26)” ([LinkedIn](https://www.linkedin.com/in/dimavrem), Aug 2026).
  - GitHub: @dimavrem22; Brain-Tumor-Detection has 0 stars ([GitHub](https://github.com/dimavrem22/Brain-Tumor-Detection), Aug 2026).
- **Alex Wilcox (Cofounder and CTO):**
  - Background: Wilcox earned dual bachelor’s degrees in mathematics and economics and an MS in computer science from Northeastern, conducted networking research, and was Empallo’s founding engineer ([personal site](https://alexwilcox.io/), Aug 2026).
  - Twitter/X: @alxwlcx, 173 followers ([TwStalker index](https://twstalker.com/poseidonaero), Aug 2026).
  - LinkedIn: “Inkbox (YC S26)” ([LinkedIn](https://www.linkedin.com/in/alxwlcx), Aug 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Ray and Alex previously worked together at Empallo, while the team subsequently built the Bluebox web-automation project before Inkbox ([Alex Wilcox](https://alexwilcox.io/); [founder post](https://www.linkedin.com/posts/dimavrem_before-y-combinator-and-inkbox-yc-s26-activity-7483245213780463617--Vvu)).
- **Founder-market fit:** [Inferred]: Ray’s and Dima’s ML research, Alex’s networking work, the team’s prior web-automation and telephony development, and backing from YC, NFX, and Night Capital align with the product’s agent, networking, and communications scope ([YC](https://www.ycombinator.com/companies/inkbox); [Inkbox blog](https://inkbox.ai/blog); [LinkedIn](https://www.linkedin.com/company/inkbox-ai)).

## Key Risks

- **Bundled-platform substitution:** AgentMail addresses agent email, while Twilio, Vapi, and ngrok cover communications and ingress components, allowing customers or incumbents to recreate portions of the Inkbox bundle ([TechCrunch](https://techcrunch.com/2026/03/10/agentmail-raises-6m-to-build-an-email-service-for-ai-agents/); [Twilio](https://www.twilio.com/en-us/press/releases/Q4-full-year-2025-earnings); [ngrok](https://ngrok.com/press-releases/ngrok-raises-50m-for-ingress-as-a-service)).
- **Carrier and iMessage constraints:** U.S. SMS use requires 10DLC registration, shared iMessage requires the human recipient to initiate contact, and plan-specific message and recipient caps can pause sending; Inkbox offers managed registration, dedicated numbers, and spend controls as mitigations ([Inkbox pricing](https://inkbox.ai/pricing), Aug 2026).
- **Agent-signup abuse:** Agents can obtain provisional mailboxes and API keys before human approval, although unclaimed identities can send only to their supervising human and Inkbox supports per-identity allowlists and blocklists ([agent-signup documentation](https://inkbox.ai/docs/api/agent-signup); [product documentation](https://inkbox.ai/docs/get-started/introduction)).
- **Concentrated communication data:** Email, calls, texts, notes, contacts, and credentials flow through one service; Inkbox states that vault contents are zero-knowledge encrypted and access can be scoped per agent ([Inkbox documentation](https://inkbox.ai/docs/get-started/introduction), Aug 2026).
- **Name disambiguation:** A separate Toronto temporary-tattoo company also uses “Inkbox,” was acquired by BIC for $65M, and continues to occupy inkbox.com, creating search and brand ambiguity ([BIC](https://corporate.bic.com/en-us/news/bic-acquires-inkbox), Jan 2022; [tattoo-brand website](https://inkbox.com/), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Vendo deployed five agent identities (Inkbox case study, Jul 2026); 20+ external PRs and nearly 100 Discord members (founder LinkedIn post, Aug 2026); 1,219 LinkedIn followers (LinkedIn, Aug 2026) |
| Revenue Signal | Free plan; $30/month Developer; $180–$200/month Startup; custom Enterprise; usage overages (Inkbox pricing, Aug 2026) |
| Founders | Ray Liao (CEO): MIT CS PhD, Tsinghua BEng, Empallo cofounder; Dima Vremenko (CAIO): Northeastern BS, Harvard Medical School ML researcher; Alex Wilcox (CTO): Northeastern MS, Empallo founding engineer (YC, Aug 2026; Alex Wilcox website, Aug 2026) |
| Competitors | AgentMail ($6M raised, revenue unknown, email-only versus multichannel identity) (TechCrunch, Mar 2026); ngrok ($50M raised, revenue unknown, tunnels only) (ngrok, Dec 2022); Vapi ($72M raised, revenue unknown, voice-agent platform) (TechCrunch, May 2026); Twilio (public, $5.07B 2025 revenue, general CPaaS) (Twilio, Feb 2026) |
| Moat Signals | 16 public repositories, 34-star main SDK repository, 20+ external PRs, nearly 100 Discord members (GitHub and founder LinkedIn post, Aug 2026) |
| Risk Factors | Component bundling by AgentMail/Twilio/ngrok (company and competitor sources, 2022–2026), carrier and iMessage restrictions (Inkbox pricing, Aug 2026), shared name with BIC’s tattoo brand (BIC, Jan 2022) |
| Founder Reach | Ray: X 954, LinkedIn 5K, GitHub top repo 26 stars (TwStalker, LinkedIn, GitHub, Aug 2026); Dima: X 334, LinkedIn 2K, GitHub top repo 0 stars (TwStalker, LinkedIn, GitHub, Aug 2026); Alex: X 173, LinkedIn 595, GitHub not found (TwStalker and LinkedIn, Aug 2026) |
| Distribution Signals | 1,219 LinkedIn followers, 266 X followers, 34 GitHub followers, nearly 100 Discord members, 20+ external PRs, zero YC job postings (LinkedIn, TwStalker, GitHub, YC, Aug 2026) |
| Emails | hello@inkbox.ai (Inkbox contact page, Aug 2026), ray@inkbox.ai (YC launch, Jul 2026), privacy@inkbox.ai (Inkbox privacy policy, Jun 2026) |
