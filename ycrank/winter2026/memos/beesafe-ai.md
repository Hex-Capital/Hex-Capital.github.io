# BeeSafe AI

> Stopping Scams Before They Reach Your Customers

| Field | Value |
|-------|-------|
| Website | https://beesafe.ai/ |
| YC Page | https://www.ycombinator.com/companies/beesafe-ai |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Security, Cybersecurity, Fraud Prevention, Fraud Detection |

## The Idea

**Problem:** Trust-based scams — including "pig butchering," romance scams, impersonation, investment fraud, and employment fraud — cost Americans over $12 billion per year (BeeSafe AI website). These scams rely on building trust through extended conversations over weeks or months, convincing victims to voluntarily authorize transactions. This bypasses traditional fraud detection systems, which are designed around unauthorized transactions and identity theft. Financial services companies, telecommunications providers, and government agencies currently lack upstream visibility into the scammer infrastructure generating these attacks. Existing solutions detect fraud at the transaction layer (behavioral analytics, identity verification) rather than intercepting scammers before they reach victims.

**Approach:** BeeSafe AI deploys LLM-powered "anti-scam agents" that proactively engage with fraudsters in real time, posing as potential victims. Through sustained conversations, these AI agents extract deterministic intelligence — mule account details, crypto wallet addresses, fraudulent domains, and attacker infrastructure — from scammers themselves. The academic foundation is described in the founders' paper "Victim as a Service: Designing a System for Engaging with Interactive Scammers" (arXiv, October 2025), which documented a system called Chatterbox. A 7-week deployment (July–August 2025) attracted contact from 4,725 unique scammer accounts and sustained conversations with 568 of them, averaging 44.3 messages and 7.8 days per interaction (arXiv 2510.23927). This intelligence is then fed to enterprise customers to block scam channels and intercept transactions.

**Differentiation:** Unlike behavioral analytics platforms (e.g., BioCatch's Scams360) that detect anomalies at the transaction layer, BeeSafe operates upstream at the scammer-communication layer. Unlike identity verification providers (e.g., Socure), which authenticate users, BeeSafe directly engages adversaries to extract infrastructure intelligence. Apate AI (Australia) uses a similar honeypot-chatbot approach but focuses on voice calls and messaging via telecom partners; BeeSafe's published research demonstrates multi-platform deployment across communication channels with cross-campaign infrastructure linking. Traditional fraud prevention vendors (Feedzai, BioCatch) focus on protecting the financial transaction itself; BeeSafe's approach targets the scam operation's supply chain — mule accounts and infrastructure — before victims are contacted.

**Business Model:** No public pricing page found on the company website. [Inferred]: Most likely monetization path is enterprise SaaS contracts with financial institutions, telcos, and government agencies, given the B2B positioning and the nature of threat intelligence delivery. Potential pricing models include per-seat/per-deployment licensing or intelligence-feed subscriptions.

**TAM/SAM:** The global fraud detection and prevention market was valued at $32.0 billion in 2025 and is projected to reach $65.68 billion by 2030 at a 20.15% CAGR (MarketsandMarkets via search snippet). A separate estimate places it at $54.61 billion in 2025 (Fortune Business Insights via search snippet). The specific trust-based scam prevention sub-segment is not broken out by major research firms. The company cites $12 billion in annual US losses from trust-based scams (BeeSafe AI website). [Inferred]: The serviceable market is the subset of fraud prevention spend directed at authorized push payment fraud and social engineering scams within financial services, telecom, and government sectors.

**GTM / Distribution:** The company states its intelligence has "enabled financial services and government agencies to intercept scammers mid-transaction and prevent victim losses" (YC page). The NSF SBIR Phase I award (Award #2451800, $305,000, October 2025) is titled "Counteracting Social Engineering Attacks with Honeypot LLM Chatbots" (NSF Seed Fund). Backers include Y Combinator, Obvious Ventures, and America's Seed Fund/SBIR (BeeSafe AI website). [Inferred]: Initial GTM likely involves direct enterprise sales to financial institutions and government agencies, leveraging existing relationships from the founders' academic work at UCSD's security research group (which has DoD-funded programs) and the NSIN Cyber Innovators Challenge win.

## Defensibility

The founders authored the foundational research paper on LLM-based scammer engagement systems ("Victim as a Service," arXiv 2510.23927), giving them a first-mover advantage in the specific technical approach. The Chatterbox system's deployment generated a dataset of 4,725 scammer contacts and 568 extended conversations (arXiv 2510.23927), providing proprietary training data for improving agent performance. As the system scales, each scammer engagement produces additional intelligence (mule accounts, infrastructure patterns, cross-platform linkages), creating a compounding data asset.

The NSF SBIR Phase I award specifically funds development of "natural language processing techniques for autonomous agent engagement" and "chatbot networks across communication platforms for threat intelligence gathering" (NSF Seed Fund), indicating government validation of the technical approach.

**Market structure:** Large incumbent fraud prevention platforms (BioCatch, Feedzai, Socure) are built around transaction-layer detection — monitoring user behavior during financial transactions to flag anomalies. Building an upstream scammer-engagement system requires a fundamentally different technical stack (LLM agent orchestration, multi-platform deployment, long-duration conversation management) and a different data collection paradigm (adversarial interaction rather than user monitoring). [Inferred]: Incumbents face a capability-gap challenge rather than a structural business model conflict; however, the adversarial engagement approach requires sustained R&D investment in a domain (offensive AI interaction with criminals) that sits outside the core competency and risk appetite of compliance-focused incumbent platforms.

**Commoditization risk:** The underlying technique — using LLMs to engage scammers — is described in a published paper, making the general approach reproducible. Apate AI (Australia, A$2.5M seed, August 2025) is already pursuing a similar chatbot-based approach (Startup Daily, August 2025). Large cybersecurity firms or fraud prevention incumbents could build similar systems, though the specialized adversarial AI expertise and accumulated scammer-engagement data represent barriers to rapid replication.

## Market & Traction

**Traction signals:**
- 10,000s of real scammer conversations mapped across communication channels (YC company page)
- 1,000s of mule accounts and linked infrastructure identified (YC company page)
- Research deployment (Chatterbox): 4,725 unique scammer contacts, 568 sustained conversations over 7 weeks (arXiv 2510.23927, October 2025)
- NSF SBIR Phase I award: $305,000 (Award #2451800, October 2025–September 2026) (NSF Seed Fund)
- First prize in Persona and Influence category at NSIN Cyber Innovators Challenge (August 2024) (nvog.github.io; NSIN)
- YC LinkedIn launch post: 148 likes, 32 comments (LinkedIn, YC post)
- Backed by Obvious Ventures in addition to YC (BeeSafe AI website)
- No Product Hunt listing found
- No public app store or Chrome Web Store presence found
- Twitter/X handles identified: @arimirian (Ariana Mirian), @daniel_spokoyny (Daniel Spokoyny), @nikolaivogler (Nikolai Vogler); company account @beesafe_ai referenced in YC tweet; follower counts not retrievable
- LinkedIn company page: not directly accessible; no follower count retrievable
- No Discord or Slack community found
- No public job postings found (company is not currently hiring per YC page)

**Competitive landscape:**

1. **BioCatch** ($211.6M raised, $160M ARR as of June 2025 per Sacra via search snippet): Behavioral biometrics platform detecting fraud through user behavior anomalies during transactions. Launched Scams360 module specifically for authorized push payment scams. Differentiator vs. BeeSafe: BioCatch monitors victim behavior at the transaction point; BeeSafe engages the scammer upstream before victim contact.

2. **Feedzai** ($347–355.8M raised, $2B valuation as of October 2025 per Feedzai press release via search snippet; revenue not public): AI-powered fraud prevention platform for financial institutions. Differentiator vs. BeeSafe: Feedzai provides broad transaction monitoring and risk scoring; BeeSafe provides threat intelligence from direct scammer engagement.

3. **Socure** ($744.4M raised, $4.5B valuation as of November 2021 per TechCrunch via search snippet; $100M revenue in 2022 per Crunchbase via search snippet): AI identity verification and fraud prevention. Differentiator vs. BeeSafe: Socure focuses on identity verification at onboarding; BeeSafe focuses on scam infrastructure takedown.

4. **Apate AI** (A$2.5M seed, August 2025 per Startup Daily): Most directly comparable competitor — uses conversational AI bots to engage scammers across voice and messaging platforms (WhatsApp, Telegram, SMS). Spin-out from Macquarie University, Australia. Partnership with CommBank. Differentiator vs. BeeSafe: Apate focuses on telecom/voice channel scams with Australian market focus; BeeSafe emphasizes cross-platform infrastructure linking and US financial services/government customers.

5. **Hiya** (funding not publicly disclosed): Operates 100,000+ honeypot phone numbers to analyze unwanted calls. Launched AI Phone call assistant (January 2025). Differentiator vs. BeeSafe: Hiya focuses on consumer call screening and spam blocking; BeeSafe targets enterprise intelligence extraction from sustained multi-platform scammer engagement.

**Why now:** [Inferred]: Several converging factors opened this opportunity: (1) LLM capabilities reached a threshold where AI agents can sustain convincing, weeks-long conversations with scammers — the founders' Chatterbox system demonstrated 44.3-message, 7.8-day average interactions (arXiv 2510.23927), a capability that was not feasible before recent foundation model advances; (2) trust-based scams surged, with $12B+ in US losses reported (BeeSafe AI website) and pig butchering specifically growing from a niche to a mainstream law enforcement concern, with US Treasury sanctions (September 2025) and DOJ indictments (October 2025) targeting scam centers; (3) AI-generated deepfakes and voice cloning increased fraud sophistication — AI-assisted forgery rose from 0% to 2% of identity fraud in 2025, and multi-step attack share grew from 10% to 28% (Sumsub Identity Fraud Report 2025–2026 via search snippet); (4) regulatory and government attention intensified, with the US Secret Service, CFTC, and NSF all funding or publicizing counter-scam efforts.

## Founders & Team

**Daniel Spokoyny** — Co-founder
- PhD in Language and Information Technologies, Carnegie Mellon University (2024), advised by Taylor Berg-Kirkpatrick (CMU LTI Alumni page). BS in Computer Science, College of Creative Studies, UC Santa Barbara (spokoyny.github.io).
- Research internships at Google AI (Summer 2019), Microsoft Research (Summer 2020), Boeing (2021), Salesforce Research (Summer 2022) (spokoyny.github.io).
- Postdoctoral researcher at UCSD CSE, co-leading LLM security initiative on social engineering scams with Stefan Savage and Geoffrey Voelker (spokoyny.github.io).
- Core member of Climate Change AI nonprofit (spokoyny.github.io).
- PI on NSF SBIR Phase I award #2451800, $305,000 (NSF Seed Fund).
- Twitter/X: @daniel_spokoyny — follower count not retrievable
- LinkedIn: linkedin.com/in/spokoyny/ — 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/dspoka — 37 repositories (GitHub via search snippet); star counts not retrievable

**Ariana Mirian** — Co-founder
- PhD in Computer Science and Engineering, UC San Diego (2023). Dissertation: "Prioritizing Security Practices via Large-Scale Measurement of User Behavior," advised by Stefan Savage and Geoffrey Voelker (arianamirian.com).
- Senior Security Researcher at Censys (arianamirian.com).
- Google Chrome intern (2017–2018), RetailMeNot PM intern (2014) (arianamirian.com).
- 10+ years in security research and measurement (YC page). Published at IEEE S&P 2025, SIGCOMM '25, ACSAC 2023, IMC 2021, WWW 2021, ICSE 2019 (arianamirian.com).
- USENIX Security PC member (2021–2023), IMC PC member (2024–2025) (arianamirian.com).
- Featured in UCSD-TV/UCTV segment "Improving Internet Security" (UCSD-TV). Research on phishing training effectiveness covered by Marketplace (October 2025) and KPBS (October 2025).
- Twitter/X: @arimirian — follower count not retrievable
- LinkedIn: linkedin.com/in/arianamirian — connection count not retrievable
- GitHub: github.com/amirian28 — 7 repositories (GitHub via search snippet); star counts not retrievable

**Nikolai Vogler** — Co-founder
- PhD student in Computer Science and Engineering, UC San Diego, advised by Taylor Berg-Kirkpatrick (nvog.github.io). MS from Carnegie Mellon University Language Technologies Institute, advised by Graham Neubig (nvog.github.io). BS from UC Irvine (nvog.github.io).
- NSF Graduate Research Fellowship recipient (nvog.github.io).
- First prize, Persona and Influence category, NSIN Cyber Innovators Challenge (August 2024) (nvog.github.io; NSIN).
- Research on NLP, digital humanities, and historical document analysis. Published at AAAI 2023 (nvog.github.io).
- Third Frederick Jelinek Memorial Workshop at JHU: multimodal analysis of Parkinson's disease (nvog.github.io).
- Twitter/X: @nikolaivogler — follower count not retrievable
- LinkedIn: linkedin.com/in/nikolai-vogler-3808a82b2/ — 157 connections (LinkedIn via search snippet)
- GitHub: github.com/nvog — 15 repositories (GitHub via search snippet); star counts not retrievable

**Co-founder relationship:** All three founders are connected through UCSD: Ariana Mirian completed her PhD at UCSD (2023) and Daniel Spokoyny held a postdoctoral position at UCSD CSE, where they co-led work on scammer engagement with professors Stefan Savage and Geoffrey Voelker — who were also Ariana's PhD advisors (arianamirian.com; spokoyny.github.io). Nikolai Vogler is a current PhD student at UCSD in the same department (nvog.github.io). Daniel and Nikolai also both attended CMU's Language Technologies Institute (Daniel for PhD, Nikolai for MS), both working with Taylor Berg-Kirkpatrick. All three are co-authors on the "Victim as a Service" paper (arXiv 2510.23927).

**Founder-market fit:** The team combines deep AI/NLP expertise (three PhDs spanning CMU and UCSD) with direct cybersecurity research experience. Ariana Mirian's decade-long career in security measurement — including published work on phishing, vulnerability remediation, and enterprise security processes at UCSD under Stefan Savage and Geoffrey Voelker (two of the most prominent internet security researchers) — provides direct domain expertise in understanding scam ecosystems. Daniel Spokoyny's NLP research at CMU and industry research stints at Google AI, Microsoft Research, and Salesforce Research provide the ML engineering foundation for building conversational AI agents. Nikolai Vogler's NSIN Cyber Innovators Challenge win in the "Persona and Influence" category (August 2024) demonstrates prior DoD-adjacent validation of the team's capabilities in adversarial persona engagement. The team's academic advisors — Stefan Savage, Geoffrey Voelker, and Taylor Berg-Kirkpatrick — are co-authors on the foundational research paper.

## Key Risks

**Direct competitor with similar approach:** Apate AI (Australia, A$2.5M seed) pursues a nearly identical strategy — deploying conversational AI bots to engage scammers and extract intelligence — and has an existing partnership with CommBank (Startup Daily, August 2025). If the honeypot-chatbot approach proves viable, multiple entrants could fragment the market. Mitigation: BeeSafe's published research demonstrates multi-platform infrastructure linking rather than single-channel engagement, and the US financial services/government focus differs from Apate's Australian telecom/bank market.

**Adversarial adaptation by scammers:** As LLM-based honeypot systems become known, scammer operations may develop countermeasures — such as their own AI-based detection of bot interlocutors or operational security changes that limit the intelligence extractable through conversation. The published "Victim as a Service" paper makes the general approach public, potentially accelerating adversarial adaptation. Mitigation: The founders' research background positions them to iterate on detection-evasion techniques, but this creates an ongoing arms race.

**Enterprise sales cycle for government and financial services:** The primary customer segments — financial institutions and government agencies — have long procurement cycles, strict compliance requirements, and complex vendor onboarding processes. A 3-person team may face challenges sustaining multi-month sales cycles while simultaneously building product. Mitigation: NSF SBIR funding and the government validation from the NSIN challenge may shorten procurement timelines for government customers specifically.

**Legal and ethical exposure from active scammer engagement:** Proactively engaging with criminal actors through deceptive AI agents raises potential legal questions around entrapment concerns (even in civil contexts), data handling of criminal intelligence, and cross-jurisdictional regulatory variation. The company's SBIR award funds this work under a government framework, but commercial deployment to private enterprises may face different scrutiny. No public data on legal review or compliance framework found.

**Brand disambiguation:** Multiple unrelated entities share the "BeeSafe" name, including BeeSafe Biotech Inc. (Canada), BeeSafe.io (Slovakia), Bee-Safe Security, and My BeeSafe Lawn — which could create confusion in search results, trademark disputes, or brand dilution.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $32.0B global fraud detection & prevention market in 2025, projected $65.68B by 2030 at 20.15% CAGR (MarketsandMarkets via search snippet) |
| SAM | No public data found for trust-based scam prevention sub-segment. Company cites $12B+ in annual US losses from trust-based scams (BeeSafe AI website) |
| Traction | 10,000s scammer conversations mapped (YC page); 1,000s mule accounts identified (YC page); 4,725 unique scammer contacts and 568 sustained conversations in 7-week research deployment (arXiv 2510.23927, Oct 2025); NSIN Cyber Innovators 1st place — Persona & Influence (Aug 2024); NSF SBIR Phase I $305K (Oct 2025); YC LinkedIn post 148 likes, 32 comments |
| Revenue Signal | No public data found |
| Founders | Daniel Spokoyny: PhD CMU LTI, ex-Google AI/MSFT/Salesforce Research, NSF SBIR PI. Ariana Mirian: PhD UCSD, 10yr security researcher, ex-Censys, published IEEE S&P/SIGCOMM. Nikolai Vogler: PhD student UCSD, MS CMU LTI, NSF Fellow, NSIN 1st place |
| Competitors | BioCatch ($211.6M raised, $160M ARR, transaction-layer behavioral analytics vs. BeeSafe's upstream engagement); Feedzai ($347M+ raised, $2B valuation, broad fraud platform vs. scam-specific intel); Socure ($744.4M raised, $100M rev 2022, identity verification vs. scam infrastructure); Apate AI (A$2.5M seed, nearest competitor — similar chatbot approach, Australia-focused) |
| Moat Signals | Foundational research paper (arXiv 2510.23927); proprietary scammer conversation dataset (4,725+ contacts); NSF SBIR government funding; first-mover in published LLM scammer engagement |
| Risk Factors | Direct competitor (Apate AI) with similar approach, adversarial adaptation by scammers, enterprise sales cycle for government/financial customers, legal/ethical exposure from active scammer engagement |
| Founder Reach | Daniel Spokoyny: Twitter @daniel_spokoyny (count not retrievable), LinkedIn 500+, GitHub 37 repos. Ariana Mirian: Twitter @arimirian (count not retrievable), LinkedIn (count not retrievable), GitHub 7 repos. Nikolai Vogler: Twitter @nikolaivogler (count not retrievable), LinkedIn 157, GitHub 15 repos |
| Distribution Signals | No Product Hunt listing found. YC LinkedIn launch post (148 likes, 32 comments). YC X/Twitter launch post by @ycombinator. No app store or Chrome Web Store presence |
