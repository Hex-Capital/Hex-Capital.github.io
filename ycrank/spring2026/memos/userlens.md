# Userlens

> AI CSM that never misses churn and upsells. 

| Field | Value |
|-------|-------|
| Website | https://userlens.io |
| YC Page | https://www.ycombinator.com/companies/userlens |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Productivity |
| Team Size | 4 |
| Location | Helsinki, Finland |
| Tags | SaaS, Customer Success, Enterprise Software, AI Assistant |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** B2B SaaS CSMs only deeply monitor their top ~5 strategic accounts, missing churn signals (champion disengagement, feature non-adoption, sentiment shifts) on the long tail until renewal becomes "damage control" (Userlens YC description, May 2026); founders cite their prior startup Wudpecker, which had 25K users / 1,000+ customers and "zero idea who was about to churn" as the motivating experience (search snippet citing founders, May 2026).
- **Approach:** AI agents ingest product analytics (PostHog, Amplitude, Mixpanel, Segment), CRM (HubSpot, Salesforce, Attio), billing (Stripe), and support/Slack/Intercom data per account, then on a churn/renewal/expansion signal auto-generate talking points and QBR decks using the team's approved templates (userlens.io, May 2026).
- **Differentiation:** Vs. Gainsight/Totango-Catalyst (incumbent enterprise CSPs with embedded AI copilots shipped 2024–Q1 2026) and Vitally/Planhat — Userlens positions as account-by-account "AI CSM" coverage (40→200 accounts per CSM) rather than dashboard/health-score tooling for human CSMs (userlens.io customer story, May 2026; ThriveStack 2026 review).
- **Business Model:** Two-tier SaaS — "Growth" at $500/month for 50 tracked companies (unlimited users/events) and "Enterprise" custom pricing with SSO and dedicated AM (userlens.io/pricing, May 2026).
- **TAM/SAM:** Customer Success Platforms market estimated at $3.61B in 2026 growing to $8.3B by 2030 at 23.2% CAGR (Grand View Research / KBV Research, 2026); Mordor Intelligence pegs Customer Success Management at $2.68B in 2026 at 21.67% CAGR.
- **GTM / Distribution:** [Inferred]: Founder-led outbound + YC network — co-founder Hai Ta personally books demos via Cal.com link on the YC page, and customer stories (Quartr, Smartly) suggest direct sales to Nordic/European SaaS scale-ups; free 3-month trial offered to YC companies (search snippet, May 2026).

## Defensibility

- **Moat today:** Cross-system data integrations (PostHog, Amplitude, Mixpanel, Segment, HubSpot, Salesforce, Attio, Stripe, Intercom, Pylon, Slack) plus per-customer playbook/template ingestion create per-account switching cost once installed (userlens.io, May 2026).
- **Future moat:** [Inferred]: Proprietary labeled data on churn signals → outcomes (which signals actually preceded a churn vs. false alarms) could improve prediction quality vs. competitors; unproven because the product is months old post-pivot and dataset volume is not disclosed.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — Gainsight ($157.98M raised, Crunchbase) and Totango–Catalyst (Totango raised $146M, merged Feb 2024, TechCrunch) have already shipped embedded AI agents between 2024 and Q1 2026 (ThriveStack 2026), and there is no obvious channel conflict preventing them from extending coverage to long-tail accounts.
- **Commoditization risk:** Every major CSP (Gainsight, ChurnZero, Vitally, Totango, Catalyst, Planhat, ThriveStack) shipped an AI agent/copilot between 2024–Q1 2026 (ThriveStack, 2026), and AI churn-risk scoring is described as "table stakes" in 2026 (ThriveStack).

## Market & Traction

- **Traction signals:**
  - Total funding raised $849K — investors include Y Combinator, Accelerace, Sofokus Ventures, Trind Ventures, Kiuas Accelerator (search snippet, May 2026).
  - Prior product Wudpecker (same founding team, pre-pivot) raised €330K pre-seed from Trind Ventures, Accelerace, Sofokus Ventures (search snippet, May 2026) and reached 25K users / 1,000+ customers (founders' statement via search snippet); current Userlens user/customer count not publicly disclosed.
  - Self-reported revenue: "$660K revenue with a 6 person team in 2025" (GetLatka, 2025; Latka data is self-reported and team size differs from YC's listed 4).
  - Customer logos displayed: Gymshark, TrueClicks, Luminovo, Homie, Deel, Calendly, Framer, McDonald's (userlens.io, May 2026); inclusion as a logo does not confirm paid contract.
  - Customer testimonial: Quartr "went from 40 accounts per CSM to 200" and NRR +18% in 3 months while growing 1M→10M ARR (userlens.io customer story, May 2026).
  - Customer testimonial: Smartly ($200M ARR) CSM performance "absolutely vertical"; Userlens claims to have "predicted and prevented 23 6-figure deals in churn risk already in a month" (search snippet citing Userlens, May 2026).
  - Website published/updated May 22, 2026 (userlens.io).
  - Twitter/LinkedIn follower counts: not retrievable.
  - No Product Hunt launch found in search results.
- **Competitors:**
  - Gainsight ($157.98M raised across 11 rounds, Crunchbase; revenue not publicly disclosed): incumbent enterprise CSP, owns Staircase AI for sentiment/relationship intelligence vs. Userlens' AI-agent-per-account framing.
  - Totango + Catalyst ($146M raised by Totango, TechCrunch; merged Feb 2024, no cash, backed by Great Hill Partners; revenue unknown): merged scale player targeting Gainsight; broader CS workflow platform vs. Userlens' narrower churn-prediction/QBR-generation focus.
  - Vitally ($9M Series A led by a16z, Vitally blog; revenue unknown): mid-market CS platform with "AI-powered customer success" positioning; dashboard-centric vs. Userlens' auto-generated talking points/decks.
  - Planhat (Sweden-based, founded 2015; funding undisclosed in search results): European CS platform competitor — relevant given Userlens' Helsinki base and EU customer focus.
  - Staircase AI (acquired by Gainsight per ThriveStack 2026; revenue unknown): sentiment-from-communications detection up to "six weeks earlier than usage data alone" — overlaps with Userlens' sentiment-shift monitoring in Slack/Intercom.
- **Why now:** [Inferred]: LLM cost/quality crossing the threshold to read and summarize per-account Slack/Intercom/CRM data continuously made "AI agent per account" economically feasible 2024–2026, the same window in which incumbents (Gainsight, ChurnZero, Vitally, Totango, Catalyst, Planhat) shipped their own AI agents per ThriveStack 2026.

## Founders & Team

- **Ankur Dahama (Co-founder & CEO):**
  - Background: Previously co-founded Wudpecker (AI knowledge management, raised €330K pre-seed with Trind Ventures/Accelerace/Sofokus per search snippet); Userlens is a pivot of Wudpecker per dealroom/aigregator/toolify listings of "Userlens by Wudpecker"; writes on Medium @whoaskedtho about startups and sales.
  - Twitter/X: @ankur_d (YC page); follower count not retrievable.
  - LinkedIn: "CEO @ Userlens (YC P26) - The AI-native CS platform" (linkedin.com/in/ankurdahama).
  - GitHub: No public account found in search results.
- **Hai Ta (Co-founder, CCO):**
  - Background: Co-founded Wudpecker with Ankur Dahama and Joona Jokivuori (search snippet, 2023); titled "CCO & Co-founder @ Userlens" per ContactOut; books demos personally via Cal.com (YC page).
  - Twitter/X: @HaiTa (YC page, x.com/haita); follower count not retrievable.
  - LinkedIn: linkedin.com/in/anhaita (YC page link); headline not retrievable in this research.
  - GitHub: No public account found in search results.
- **Other team members (consolidated, team size 4):** Joona Jokivuori — third Wudpecker co-founder per Wudpecker funding announcement (search snippet); Jenna Kuningas — referenced alongside Hai Ta in a 2023 LinkedIn post by Ankur Dahama announcing a Wudpecker website launch (search snippet); current Userlens roles for both not publicly confirmed.
- **Co-founder relationship:** Ankur Dahama and Hai Ta co-founded Wudpecker (2022/2023) prior to Userlens; ~1,162-day working history per Dahama's LinkedIn post (search snippet, 2025).
- **Founder-market fit:** Founders experienced the target problem firsthand at Wudpecker — 25K users / 1,000+ customers with no churn visibility (search snippet citing founders, May 2026) — and Userlens' early investor set (Accelerace, Sofokus Ventures, Trind Ventures, Kiuas Accelerator) consists of the same Nordic pre-seed funds that backed Wudpecker (search snippets).

## Key Risks

- **Incumbent feature parity / commoditization:** Gainsight (owns Staircase AI), Totango–Catalyst, ChurnZero, Vitally, Planhat, and ThriveStack all shipped AI agents or copilots between 2024 and Q1 2026 (ThriveStack, 2026), and AI health/churn scoring is described as "table stakes" — Userlens must differentiate on quality of output, not feature presence; no public benchmark data found showing Userlens prediction accuracy vs. incumbents.
- **Pivot validation risk:** Userlens is a pivot of Wudpecker (per dealroom, aigregator, toolify "Userlens by Wudpecker" listings; founders' "1,162 days" / "we've finally niched down" LinkedIn post, 2025), so pre-Userlens user/customer counts (25K users, 1,000+ customers) refer to a different product and do not transfer as current-product traction.
- **Single-tier pricing and small ACV at SMB end:** Public Growth plan is $500/month for 50 tracked companies (userlens.io/pricing) — implied ~$6K ARR per Growth customer requires high enterprise mix to scale toward the self-reported $660K revenue figure (GetLatka, 2025, self-reported and dated to pre-YC period).
- **Self-reported / unverifiable metrics:** Latka revenue ($660K) is self-reported and lists 6-person team vs. YC's 4, suggesting stale or inconsistent reporting; customer-outcome claims ("23 6-figure deals prevented in a month") are sourced to Userlens' own marketing without independent verification.
- **Name disambiguation:** Multiple unrelated entities use "Userlens" in adjacent CX/analytics spaces; aigregator and toolify still index the company as "Userlens by Wudpecker," indicating brand-transition risk in SEO and category discovery.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.61B in 2026 → $8.3B by 2030 at 23.2% CAGR (Grand View Research / KBV Research, 2026); alternate estimate $2.68B in 2026 at 21.67% CAGR (Mordor Intelligence, 2026) |
| SAM | No public data found |
| Traction | $849K total funding raised (search snippet, May 2026); Wudpecker (prior product, same team) €330K pre-seed (search snippet); $660K self-reported revenue 2025 (GetLatka, 2025); customer logos Gymshark, TrueClicks, Luminovo, Homie, Deel, Calendly, Framer, McDonald's (userlens.io, May 2026); Quartr testimonial — 40→200 accounts per CSM, +18% NRR in 3 months (userlens.io customer story, May 2026) |
| Revenue Signal | Growth plan $500/month, 50 tracked companies; Enterprise custom pricing (userlens.io/pricing, May 2026); self-reported $660K revenue 2025 (GetLatka, 2025) |
| Founders | Ankur Dahama (Co-founder, CEO): ex-Wudpecker co-founder, €330K pre-seed; Hai Ta (Co-founder, CCO): ex-Wudpecker co-founder, runs founder-led demos via Cal.com |
| Competitors | Gainsight ($157.98M raised, Crunchbase; revenue unknown; incumbent enterprise CSP with Staircase AI); Totango+Catalyst ($146M raised by Totango, TechCrunch; merged Feb 2024; revenue unknown; broader CS workflow); Vitally ($9M Series A a16z, Vitally blog; revenue unknown; mid-market CS); Planhat (funding unknown; revenue unknown; EU-based CSP); Staircase AI (acquired by Gainsight; revenue unknown; comms-sentiment overlap) |
| Moat Signals | Multi-system integrations (PostHog, Amplitude, Mixpanel, Segment, HubSpot, Salesforce, Attio, Stripe, Intercom, Pylon) + customer-specific QBR template ingestion (userlens.io, May 2026); SOC 2 Type 2 in progress, GDPR compliance (userlens.io, May 2026) |
| Risk Factors | Incumbent AI-feature parity (ThriveStack, 2026), pivot validation, self-reported / unverifiable customer-outcome metrics |
| Founder Reach | Ankur Dahama: Twitter @ankur_d (count not retrievable), LinkedIn /in/ankurdahama (count not retrievable), GitHub not found; Hai Ta: Twitter @HaiTa (count not retrievable), LinkedIn /in/anhaita (count not retrievable), GitHub not found |
| Distribution Signals | Founder-led demos via Cal.com on YC page (May 2026); free 3-month trial for YC companies (search snippet); no Product Hunt launch found |
| Emails | No public data found |

Sources:
- [Userlens YC Page](https://www.ycombinator.com/companies/userlens)
- [Userlens website](https://userlens.io)
- [Userlens pricing](https://userlens.io/pricing)
- [Quartr customer story](https://userlens.io/customer-stories/how-quartr-empowers-sales-and-customer-success-teams-with-userlens-insights)
- [Userlens on PitchBook](https://pitchbook.com/profiles/company/513041-05)
- [Wudpecker Crunchbase](https://www.crunchbase.com/organization/wudpecker)
- [Ankur Dahama LinkedIn](https://www.linkedin.com/in/ankurdahama/)
- [Hai Ta on X](https://x.com/haita)
- [Gainsight Crunchbase](https://www.crunchbase.com/organization/gainsight)
- [Vitally Series A](https://www.vitally.io/post/vitally-raises-series-a-funding)
- [Totango–Catalyst merger (TechCrunch)](https://techcrunch.com/2024/02/28/totango-catalyst-merger-customer-success/)
- [ThriveStack AI CS Platforms 2026](https://www.thrivestack.ai/research/ai-customer-success-platforms)
- [Mordor Intelligence CS Management market](https://www.mordorintelligence.com/industry-reports/customer-success-management-market)
- [KBV Research CS Platforms market](https://www.kbvresearch.com/customer-success-platforms-market/)
- [GetLatka Userlens revenue](https://getlatka.com/companies/userlens.io/vs/userlens.io)
