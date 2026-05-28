# Chert

> iMessage infrastructure for trusted communication at scale

| Field | Value |
|-------|-------|
| Website | https://www.trychert.com/ |
| YC Page | https://www.ycombinator.com/companies/chert |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, API, Customer Support, Conversational AI |
| YC Partner | David Lieb |
| Emails | contact@trychert.com |

## The Idea

- **Problem:** Teams that want to deploy conversational iMessage agents for customer service, lead capture, and outbound follow-up face difficult setup and unreliable scaling of the underlying iMessage infrastructure (Product Hunt Chert launch page, May 2026).
- **Approach:** API-based platform delivering peer-to-peer iMessage threads with blue-bubble UX, verified senders, end-to-end encryption, typing indicators, tapbacks, group chats, SMS/RCS fallback, and webhooks (trychert.com, May 2026).
- **Differentiation:** Versus Sendblue (broadest feature set, 5+ years) and LoopMessage (focused on ChatGPT-to-iMessage personal use), Chert positions itself as "Twilio for iMessage" with line-health checks aimed at safer outbound and CRM write-back to HubSpot/Close/GoHighLevel (Launch HN, May 2026; Product Hunt, May 2026).
- **Business Model:** "Scalable pricing structure that lets teams scale to hundreds of lines and thousands of messages" with no public pricing page found on trychert.com; [Inferred]: consumption/per-line API pricing typical of CPaaS, gated to sales calls via cal.com/team/chert (Product Hunt, May 2026; trychert.com).
- **TAM/SAM:** CPaaS market estimated at $21.27B in 2026 growing to $41.05B by 2031 at 14.05% CAGR (Mordor Intelligence, 2026); no public iMessage-API-specific SAM found.
- **GTM / Distribution:** Direct sales via book-a-call funnel and CRM-integration partnerships (Salesforce, HubSpot, Slack, Attio, GoHighLevel, Close, Vapi) per trychert.com (May 2026); YC Launch HN and Product Hunt launches used as awareness channels (news.ycombinator.com/item?id=48267829).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond named integrations and "comprehensive line health checks" claim (Product Hunt, May 2026).
- **Future moat:** [Inferred]: Switching costs from CRM write-back integrations and accumulated per-line deliverability/reputation data could compound; unproven at current 2-person, pre-seed scale.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — iMessage is an Apple-controlled protocol with no official business API, so all competitors rely on similar unofficial techniques (Sendblue compare page, 2026).
- **Commoditization risk:** Multiple funded competitors (Sendblue, LoopMessage, Blooio, Linq) already operate in the same iMessage-API category, and Apple could disrupt all of them by formalizing or restricting iMessage access (Sendblue blog 2026; Blooio alternatives page).

## Market & Traction

- **Traction signals:**
  - Customer logos listed on site: Tour, Symbal, DCNHC, Vela, Whop, Rubbrband, Blue Navy, Chasi, Fintech, Autosana (trychert.com, May 2026).
  - Claimed performance: "up to 65% response rates and 90% action rates for outbound sales via iMessage" (trychert.com, May 2026).
  - Product Hunt: 179 upvotes, ranked #7 in Day Rank (Product Hunt, May 2026).
  - Hacker News: "Launch HN: Chert (YC P26) – Twilio for iMessage" posted May 2026 (news.ycombinator.com/item?id=48267829).
  - Funding: $500K YC standard accelerator investment (Extruct AI / Dealroom, 2026).
  - Backers listed on company site: Y Combinator, Z Fellows, Betafund, LinkedIn, Grafana (per trychert.com — note LinkedIn/Grafana listing may be partnership rather than direct investment; no public funding announcement confirms these).
  - Company X handle: @Cherthq (x.com); follower count not retrievable.
  - Hiring: Not hiring per YC company data (May 2026).
- **Competitors:**
  - Sendblue (revenue unknown, $500K reported via PitchBook — YC-backed, market-leading iMessage API with 5+ years, broadest feature set per its own comparison content): more mature feature set and longer track record than Chert (Sendblue.com 2026; PitchBook).
  - LoopMessage (funding unknown, "delivers millions of messages monthly," 2–10 employees, Austin): targets ChatGPT-to-iMessage personal use and developers rather than Chert's customer-support/sales focus (loopmessage.com; Crunchbase).
  - Blooio (funding unknown, revenue unknown): flat-rate $39/mo unlimited iMessage with RCS fallback and n8n/Zapier integrations, undercutting Chert/Sendblue on price (blooio.com/alternatives/sendblue, 2026).
  - Linq (funding unknown, revenue unknown): described as "well-funded competitor focused on AI agents" on iMessage per Sendblue comparison content (Sendblue blog, 2026 — via search snippet).
- **Why now:** [Inferred]: LLM-driven conversational agents have reached a quality threshold where automated iMessage dialogue can plausibly drive sales/support outcomes, paired with the Sendblue-led emergence of a commercial iMessage API category over the past 12-24 months (Sendblue best-iMessage-API comparison, 2026).

## Founders & Team

- **Gary Gao (Co-Founder, CEO):**
  - Background: Studied CS & Business (Wharton) at University of Pennsylvania; spent the past year researching ML model architectures and designing neuromorphic chips before building Chert with Ian (LinkedIn profile via search snippet, 2026; YC company page).
  - Twitter/X: @GaryGao891219 (x.com); follower count not retrievable.
  - LinkedIn: "Co-Founder @ Chert (YC P26) | CS & Wharton" (linkedin.com/in/gary-gao-b177932b0).
  - GitHub: No public repos found.
- **Ian Fong (Co-Founder):**
  - Background: Studied Math and Economics at NYU; did fast-algorithm research at Courant; 8x hackathon winner (UPenn, MIT, Harvard, Princeton); was incoming at JP Morgan prior to Chert (ianfong.space; LinkedIn via search snippet, 2026).
  - Twitter/X: @ianyfong (x.com); follower count not retrievable.
  - LinkedIn: "Chert (YC P26)" (linkedin.com/in/ianyfong).
  - GitHub: No public repos found.
- **Co-founder relationship:** Per Ian's bio, the two "still hit random hackathons together for fun" and "started this journey last June [2025]" (search snippet from Ian Fong profile, 2026); no shared prior employer or university documented (Ian: NYU; Gary: Penn).
- **Founder-market fit:** [Inferred]: Both founders are technical with quantitative/CS training, and the team reports spending "the last six months building projects on iMessage for leasing companies, DTC startups, and home service agencies" before launching Chert, which is the directly applicable domain experience (Product Hunt launch description, May 2026); no notable advisors or board members disclosed publicly.

## Key Risks

- **Apple platform dependency:** Chert operates over iMessage, an Apple-controlled protocol with no official business API; Apple could restrict, deprecate, or directly compete by formalizing iMessage business access, killing the category — same risk faced by Sendblue, LoopMessage, Blooio, and Linq (Sendblue compare page, 2026). No public mitigation found beyond SMS/RCS fallback (trychert.com).
- **Commoditization / category crowding:** At least four established iMessage-API competitors (Sendblue, LoopMessage, Blooio, Linq) already exist, with Blooio undercutting on price at $39/mo flat-rate (blooio.com, 2026) and Sendblue holding the feature-breadth lead (Sendblue blog, 2026).
- **Outbound deliverability / abuse risk:** Heavy outbound iMessage usage for cold outreach (a stated Chert use case per trychert.com) historically triggers Apple's anti-spam line-banning; Chert's "line health checks" are presented as mitigation but performance is unverified externally (Product Hunt, May 2026).
- **Traction claim verifiability:** "Up to 65% response rates and 90% action rates" are company-stated without third-party validation or named customer case studies (trychert.com, May 2026).
- **Investor-list accuracy:** Company site lists LinkedIn and Grafana among "backers" alongside Y Combinator/Z Fellows/Betafund, which is inconsistent with how those organizations typically invest; no public funding announcement confirms direct investment from LinkedIn or Grafana (trychert.com vs. absence in news sources).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | CPaaS market $21.27B in 2026, growing to $41.05B by 2031 at 14.05% CAGR (Mordor Intelligence, 2026); alternative estimate $29.70B in 2026 → $215.36B by 2034 at 28.10% CAGR (Fortune Business Insights, 2026) |
| SAM | No public data found |
| Traction | 10 customer logos on site: Tour, Symbal, DCNHC, Vela, Whop, Rubbrband, Blue Navy, Chasi, Fintech, Autosana (trychert.com, May 2026); 179 Product Hunt upvotes, #7 Day Rank (Product Hunt, May 2026); Launch HN posted May 2026 (news.ycombinator.com/item?id=48267829) |
| Revenue Signal | No public pricing or revenue figures found; sales gated to cal.com booking (trychert.com, May 2026) |
| Founders | Gary Gao (Co-Founder/CEO): Penn CS & Wharton; ML architecture and neuromorphic chip research. Ian Fong (Co-Founder): NYU Math/Econ; Courant fast-algorithm research; 8x hackathon winner; ex-incoming JPMorgan. |
| Competitors | Sendblue ($500K reported via PitchBook, revenue unknown, market-leading feature breadth and 5+ years); LoopMessage (funding unknown, revenue unknown, ChatGPT-to-iMessage personal-use focus); Blooio (funding unknown, revenue unknown, $39/mo flat-rate undercut); Linq (funding unknown, revenue unknown, "well-funded" AI-agents focus per Sendblue snippet) |
| Moat Signals | No public data found |
| Risk Factors | Apple iMessage platform dependency, category commoditization with 4+ competitors, outbound deliverability/spam risk |
| Founder Reach | Gary Gao: Twitter @GaryGao891219 count not retrievable, LinkedIn present, GitHub not found. Ian Fong: Twitter @ianyfong count not retrievable, LinkedIn present, GitHub not found. Company: @Cherthq on X, count not retrievable. |
| Distribution Signals | Product Hunt 179 upvotes / #7 Day Rank (May 2026); Launch HN May 2026; CRM integrations with Salesforce, HubSpot, Attio, GoHighLevel, Close, Vapi, Slack (trychert.com) |
| Emails | contact@trychert.com (YC company page) |

Sources:
- [Chert — trychert.com](https://www.trychert.com/)
- [Chert — Y Combinator](https://www.ycombinator.com/companies/chert)
- [Launch HN: Chert (YC P26) – Twilio for iMessage](https://news.ycombinator.com/item?id=48267829)
- [Chert — Product Hunt](https://www.producthunt.com/products/chert)
- [Ian Fong personal site](https://www.ianfong.space/)
- [Ian Fong LinkedIn](https://www.linkedin.com/in/ianyfong/)
- [Gary Gao LinkedIn](https://www.linkedin.com/in/gary-gao-b177932b0/)
- [Chert — Dealroom](https://app.dealroom.co/companies/chert)
- [Chert — Extruct AI](https://www.extruct.ai/hub/trychert-com/)
- [Sendblue iMessage API comparison (2026)](https://www.sendblue.com/blog/best-imessage-api-comparison)
- [Sendblue — Crunchbase](https://www.crunchbase.com/organization/sendblue)
- [SendBlue — PitchBook](https://pitchbook.com/profiles/company/534533-95)
- [LoopMessage — Crunchbase](https://www.crunchbase.com/organization/loopmessage)
- [Blooio — Sendblue Alternatives](https://blooio.com/alternatives/sendblue)
- [CPaaS Market — Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/communication-platform-as-a-service-cpaas-market)
- [CPaaS Market — Fortune Business Insights](https://www.fortunebusinessinsights.com/communication-platform-as-a-service-cpaas-market-106471)
