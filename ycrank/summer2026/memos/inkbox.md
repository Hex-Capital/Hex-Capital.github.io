# Inkbox

> Give your AI agents email, phone, iMessage and an internet address

| Field | Value |
|-------|-------|
| Website | https://inkbox.ai |
| YC Page | https://www.ycombinator.com/companies/inkbox |
| Batch | Summer 2026 (S26) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | Boston, MA, USA (website footer lists 313 Potrero Ave, Unit B, San Francisco, CA 94103; inkbox.ai) |
| Tags | Developer Tools, Infrastructure, AI |
| YC Partner | Tyler Bosmeny (YC page) |
| Emails | hello@inkbox.ai (inkbox.ai) |

## The Idea

- **Problem:** AI agents lack their own persistent communication identities (email inbox, phone number, iMessage, public URL), forcing developers to either share the human operator's contacts or bolt together channel-specific APIs (inkbox.ai product page).
- **Approach:** A single API/SDK issues each agent a mailbox, PSTN phone number with SMS/MMS/voice, iMessage, a public HTTP/2 tunnel URL, an encrypted credential vault, and org-wide contacts/notes — with conversations threaded across channels (github.com/inkbox-ai/inkbox README; inkbox.ai).
- **Differentiation:** Twilio/SendGrid, Postmark, and Mailgun sell channel-specific APIs that require the developer to stitch identity, threading, and credentials themselves, whereas Inkbox bundles all channels under one agent "identity" object with a shared vault and cross-channel context (mailtrap.io "Best Email APIs for AI Agents" 2026; inkbox.ai).
- **Business Model:** Freemium SaaS with per-seat/consumption tiers — Free ($0, 3 identities, no phone), Hobbyist ($10/mo, 5 identities, 1 phone), Developer ($25/mo, 15 identities, 3 phones), Enterprise custom; overages billed at $0.03/SMS, $0.03/call minute, $20/mo per 10DLC campaign (inkbox.ai/pricing).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** SDK/plugin distribution targeting coding-agent developers — Inkbox skills work with Claude Code, Cursor, and framework plugins (Hermes, OpenClaw), plus agent self-signup that lets agents provision themselves without a pre-issued API key (inkbox.ai; github.com/inkbox-ai/inkbox).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond the multi-channel bundle; GitHub repo has 18 stars, 2 forks, 533 commits, MIT-licensed (github.com/inkbox-ai/inkbox).
- **Future moat:** [Inferred]: Cross-channel conversation history and the encrypted vault (login credentials, API keys, SSH keys, OTP) create switching costs as agents accumulate contacts, notes, and secrets tied to an Inkbox identity — unproven because usage volumes are not disclosed.
- **Market structure:** [Inferred]: iMessage support requires Apple-side workarounds not offered by Twilio/SendGrid, and 10DLC-registered agent phone numbers create a compliance surface incumbents targeting human users have not productized for agent-native identities (inkbox.ai/pricing lists 10DLC and dedicated iMessage infra as Enterprise features).
- **Commoditization risk:** Twilio explicitly positions its "next-generation platform" as "an infrastructure layer for every conversation in the agentic era" and already owns SendGrid, SMS, voice, and WhatsApp under one API (investors.twilio.com press release, 2026), meaning an incumbent can bundle equivalent multi-channel agent identity.

## Market & Traction

- **Traction signals:**
  - GitHub: 18 stars, 2 forks, 533 commits, 1 open issue, 3 open PRs on inkbox-ai/inkbox (github.com/inkbox-ai/inkbox).
  - YC S26 batch participation (ycombinator.com/companies/inkbox).
  - Third-party SDK exists: VectorlyApp/inkbox Python & TypeScript SDK (github.com/VectorlyApp/inkbox).
  - Active job postings: 0 (ycombinator.com/companies/inkbox).
  - No public data found for user count, paying customers, revenue, ARR, Product Hunt rank, Hacker News launch, press coverage, Twitter/LinkedIn follower counts, or Discord size.
- **Competitors:**
  - Twilio (NYSE:TWLO, $1.3B Q3 2025 revenue, +15% YoY; investors.twilio.com): owns SendGrid (acquired 2019 for ~$3B all-stock, mailtoolfinder.com); differentiator vs. Inkbox — unified SMS/voice/email/WhatsApp API but not packaged as per-agent identity with vault + tunnels.
  - SendGrid (Twilio subsidiary, revenue not broken out; mailtoolfinder.com 2026): processes >100B emails/month; differentiator — pure email API, no phone/iMessage/tunnel bundling.
  - Postmark (ActiveCampaign subsidiary, revenue unknown; blog.vibecoder.me 2026): transactional-only email deliverability; differentiator — single channel, no identity object.
  - Mailgun (Sinch subsidiary, revenue unknown; mailtrap.io 2026): email API + validation; differentiator — no phone/iMessage or agent-identity abstraction.
  - Cloudflare Email Service (Cloudflare NYSE:NET, revenue unknown at product level; mailtrap.io 2026): email routing tied to Workers; differentiator — infrastructure primitive, not multi-channel agent identity.
- **Why now:** [Inferred]: Widespread adoption of coding-agent frameworks (Claude Code, Cursor) in 2025-2026 has created a population of autonomous agents that need to send/receive outside-world messages, a use case that did not exist at scale before agentic tool-use became a shipping product (inkbox.ai lists Claude Code and Cursor as first-party integrations).

## Founders & Team

- **Ray Liao (Cofounder & CEO):**
  - Background: PhD in Computer Science from MIT (2021), advised by Polina Golland at MIT CSAIL; dissertation "Multimodal Representation Learning for Medical Image Analysis"; previously Head of Product and Operations at Tandem (linkedin.com/in/ruizhi-liao; csail.mit.edu/person/ruizhi-liao; ideastream.mit.edu).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Cofounder @ Inkbox | MIT CS PhD" (linkedin.com/in/ruizhi-liao).
  - GitHub: @RayRuizhiLiao — top repos are academic (medical imaging); star counts not retrievable via search snippet (github.com/RayRuizhiLiao).
- **Dima Vremenko (Cofounder):**
  - Background: Based in Greater Boston; 500+ LinkedIn connections; connected to Founders, Inc. community; maintains VectorlyApp organization (VectorlyApp/inkbox SDK, "Vectorly and Reducto" post about scraping Epstein files); PG rejection story cited (linkedin.com/in/dimavrem; linkedin.com/posts/dimavrem_ Epstein Files post).
  - Twitter/X: @DVremenko (x.com/DVremenko); follower count not retrievable.
  - LinkedIn: "Cofounder @ inkbox.ai | YC S26" (linkedin.com/in/dimavrem).
  - GitHub: Maintains VectorlyApp org (github.com/VectorlyApp/inkbox); personal handle and star counts not retrievable from search snippets.
- **Alex Wilcox (Cofounder & CTO):**
  - Background: Search results conflated multiple individuals; one result matching Boston context describes an Alex Wilcox with a Master's in CS from Northeastern University working as an ML engineer at MIT-linked startup Empallo — identity match to Inkbox CTO not confirmed by a cited primary source (search snippet, ambiguous).
  - Twitter/X: No public account confirmed.
  - LinkedIn: No public profile confirmed as the Inkbox CTO.
  - GitHub: No public repos confirmed as the Inkbox CTO's.
- **Co-founder relationship:** No public data on co-founder history; Vremenko and Liao both list Greater Boston area, and Vremenko's LinkedIn post ecosystem references Founders, Inc. (linkedin.com/in/dimavrem; linkedin.com/in/ruizhi-liao).
- **Founder-market fit:** [Inferred]: Liao's MIT ML PhD provides technical depth for agent tooling but his prior domain was medical imaging rather than communications infrastructure, and no telecom/deliverability/CPaaS background is publicly documented for any of the three founders (linkedin.com/in/ruizhi-liao; linkedin.com/in/dimavrem).

## Key Risks

- **Incumbent bundling risk:** Twilio has publicly repositioned its stack as "an infrastructure layer for every conversation in the agentic era" and already owns email (SendGrid), SMS, voice, and WhatsApp under one API (investors.twilio.com, 2026), giving it the assets to release an agent-identity SKU that overlaps Inkbox's core bundle. No mitigation publicly disclosed.
- **Platform dependency (iMessage):** iMessage delivery is not an Apple-sanctioned developer API; Inkbox lists "dedicated iMessage infrastructure" as an Enterprise offering (inkbox.ai/pricing), and Apple has historically restricted third-party iMessage bridges (Beeper Mini shutdown, 2023-2024) — one enforcement action could remove a headline channel. No mitigation disclosed.
- **10DLC / phone regulatory risk:** Inkbox provisions PSTN numbers to autonomous agents and charges $20/mo per 10DLC campaign (inkbox.ai/pricing); carrier and TCPA rules against automated messaging without human consent create compliance exposure specific to agent-originated SMS. No mitigation disclosed.
- **Name collision:** "Inkbox" is a widely marketed temporary-tattoo brand (inkbox.com), which will suppress organic search discovery and can complicate trademark scope; the YC page and website use "Inkbox" without a distinguishing suffix.
- **Traction is unproven:** No revenue, user counts, launch coverage, waitlist, or third-party press was found in public sources; GitHub SDK has 18 stars (github.com/inkbox-ai/inkbox), indicating pre-launch adoption levels.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | GitHub 18 stars, 2 forks, 533 commits on inkbox-ai/inkbox (GitHub, 2026); YC S26 (ycombinator.com); third-party SDK VectorlyApp/inkbox exists (GitHub) |
| Revenue Signal | Free $0/mo, Hobbyist $10/mo, Developer $25/mo, Enterprise custom; overages $0.03/SMS, $0.03/call min, $20/mo per 10DLC campaign (inkbox.ai/pricing, 2026) |
| Founders | Ray Liao (Cofounder & CEO): MIT CS PhD 2021, ex-Head of Product/Ops Tandem. Dima Vremenko (Cofounder): Boston, VectorlyApp maintainer, Founders Inc. network. Alex Wilcox (Cofounder & CTO): background unverified in public sources. |
| Competitors | Twilio (NYSE:TWLO, $1.3B Q3 2025 rev, unified CPaaS not agent-identity-native); SendGrid (Twilio sub, >100B emails/mo, email-only); Postmark (revenue unknown, transactional email only); Mailgun (Sinch sub, revenue unknown, email-only); Cloudflare Email (revenue unknown, routing primitive) |
| Moat Signals | No public data found |
| Risk Factors | Twilio bundling, iMessage platform dependency, 10DLC/TCPA regulatory exposure |
| Founder Reach | Ray Liao: Twitter not found, LinkedIn "MIT CS PhD" headline, GitHub @RayRuizhiLiao (stars not retrievable). Dima Vremenko: Twitter @DVremenko (count not retrievable), LinkedIn "Cofounder @ inkbox.ai" (count not retrievable), GitHub VectorlyApp org. Alex Wilcox: No public data found. |
| Distribution Signals | Claude Code and Cursor integrations listed (inkbox.ai); Hermes and OpenClaw plugins (inkbox.ai/docs); agent self-signup (inkbox.ai) |
| Emails | hello@inkbox.ai (inkbox.ai) |

Sources:
- [Inkbox website](https://inkbox.ai/)
- [Inkbox pricing](https://inkbox.ai/pricing)
- [Inkbox YC page](https://www.ycombinator.com/companies/inkbox)
- [inkbox-ai/inkbox GitHub](https://github.com/inkbox-ai/inkbox)
- [VectorlyApp/inkbox SDK](https://github.com/VectorlyApp/inkbox)
- [Ray Liao LinkedIn](https://www.linkedin.com/in/ruizhi-liao/)
- [Ruizhi Liao MIT CSAIL](https://www.csail.mit.edu/person/ruizhi-liao)
- [Dima Vremenko LinkedIn](https://www.linkedin.com/in/dimavrem/)
- [Dima Vremenko X](https://x.com/DVremenko)
- [Best Email APIs for AI Agents 2026 (Mailtrap)](https://mailtrap.io/blog/best-email-api-for-ai-agents/)
- [Twilio next-gen agentic platform press release](https://investors.twilio.com/news-releases/news-release-details/twilios-next-generation-platform-infrastructure-layer-every)
- [SendGrid/Twilio acquisition context (MailToolFinder)](https://mailtoolfinder.com/blog/sendgrid-twilio-2026/)
