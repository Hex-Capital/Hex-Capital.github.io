# Lance

> Your Hotel's Best Employees

| Field | Value |
|-------|-------|
| Website | https://www.lance.live |
| YC Page | https://www.ycombinator.com/companies/lance |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Customer Service, Conversational AI |
| YC Partner | Diana Hu |
| Emails | founders@lance.live (YC LinkedIn announcement post) |

## The Idea

**Problem:** Hotels face chronic staffing shortages — 65% of hotels report staffing shortages, and hotels miss up to 40% of inbound requests during peak periods and after hours (YC LinkedIn post, 2026 via search snippet). The front desk is burdened with repetitive call handling (room requests, reservation changes, restaurant bookings, wake-up calls, directions), which diverts staff from in-person guest service. Existing solutions are primarily text-based chatbots that do not handle voice calls or execute multi-step operational tasks end-to-end.

**Approach:** Lance deploys autonomous AI voice agents that answer inbound hotel calls, resolve guest requests, and orchestrate on-property operations without human intervention. The system uses Computer Use Agent technology — vision-based agents that navigate existing hotel PMS software, make real-time decisions, and complete multi-step tasks (e.g., booking a restaurant, scheduling a wake-up call, dispatching towels). Lance also offers a Sales AI Agent that qualifies leads and follows up on RFPs, and "Lance Pad," a tablet-based operations hub for staff coordination that replaces walkie-talkies. The platform supports multiple languages including English, Spanish, Cantonese, Hindi, and Portuguese (lance.live).

**Differentiation:** Unlike text-first chatbot competitors (HiJiffy, Asksuite, Duve), Lance focuses on voice-first AI that handles phone calls — the primary communication channel for hotel guests. Unlike Canary Technologies, which offers AI voice as one module in a broader suite, Lance's core differentiation is its Computer Use Agent technology that can navigate any existing hotel software visually rather than requiring deep API integrations. This approach potentially reduces integration friction with legacy PMS systems. Lance also combines voice handling with operational task execution (dispatching staff, coordinating fulfillment), whereas most competitors focus on guest communication without on-property execution.

**Business Model:** No public pricing page found on lance.live. [Inferred]: Most likely monetization path is per-property SaaS subscription, potentially tiered by call volume or number of properties, given the B2B SaaS tags and hotel-group sales motion.

**TAM/SAM:** The global AI in Hospitality and Tourism market is projected to reach $58.56 billion by 2029 at a 30.1% CAGR (The Business Research Company, 2025 via search snippet). A narrower segment — Artificial Intelligence in Hospitality — is projected at $1.44 billion by 2029 at 57.6% CAGR (The Business Research Company, 2025 via search snippet). [Inferred]: Lance's serviceable market is the subset focused on voice/communication automation for US hotels; with ~55,000 hotels in the US and mid-market SaaS pricing, the SAM would be materially smaller than the broad hospitality AI TAM.

**GTM / Distribution:** Lance is selling to hotel groups managing multiple properties — the YC description states the product is "trusted by some of the top hotel groups in the US, supporting 50+ hotels across brands like Marriott, Hilton, and Hyatt" (YC company page). This suggests a top-down enterprise sales motion targeting hotel management companies rather than individual properties. Co-founder Gavin Brennen "grew up around Marriott operations" (YC LinkedIn post, 2026 via search snippet), suggesting personal network-driven initial distribution.

## Defensibility

**Switching costs:** Hotels that integrate Lance into their daily operations — replacing call handling, coordinating staff via Lance Pad, and routing multi-step requests — face meaningful workflow switching costs. Staff retraining and operational disruption create friction once embedded.

**Data advantage:** Each deployment generates hotel-specific operational data (call patterns, request types, resolution workflows, guest preferences) that can improve the system's performance over time for that property and property type.

**Technical complexity:** The Computer Use Agent approach (vision-based navigation of hotel software) is a non-trivial technical capability that requires handling diverse PMS interfaces, edge cases in screen navigation, and real-time decision-making. This is harder to replicate than API-based integrations.

**Market structure:** Incumbent hotel PMS providers (Oracle Hospitality, Amadeus) could build AI voice features, but their core business model is built around selling established software suites, not AI-native agent infrastructure. Building a Computer Use Agent that navigates *their own* legacy interfaces would highlight UX shortcomings they have commercial incentive to ignore. Chatbot competitors (HiJiffy, Asksuite) are structured around text-based messaging and would need to build voice infrastructure from scratch to compete directly. Canary Technologies ($600M valuation, Hotel Dive Jun 2025 via search snippet) is the closest well-resourced competitor with voice AI capabilities, but its broad suite approach may create different prioritization trade-offs.

**Commoditization risk:** As LLM-based voice agents become commoditized (OpenAI, ElevenLabs, Vapi), the AI voice layer itself is increasingly replicable. Lance's defensibility depends on the operational execution layer (Computer Use Agents navigating PMS, task dispatch, multi-step fulfillment) rather than voice processing alone. Competitors with existing hotel customer bases could add AI voice features as incremental modules.

## Market & Traction

**Traction signals:**
- 50+ hotels supported across Marriott, Hilton, and Hyatt brands (YC company page)
- 30%+ reduction in front desk call volume reported by a customer (testimonial from Marcus Rodriguez, Assistant General Manager, lance.live)
- Customer testimonial: "We're recovering revenue we used to miss — from restaurant bookings to reservation changes" (Priya Sharma, Director of Operations, lance.live)
- YC LinkedIn announcement post: 1,252 likes and 623 comments (LinkedIn, 2026 via search snippet)
- Company Twitter/X: @TryLance (follower count not retrievable)
- Company LinkedIn: linkedin.com/company/trylance/ (follower count not retrievable)
- CEO Twitter/X: @calebychan — 767 followers (X profile, via search snippet)
- No Product Hunt launch found
- No app store presence found
- No Discord/Slack community found

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Lance |
|---|---|---|
| **Canary Technologies** | ~$180M total, $80M Series D (Hotel Dive, Jun 2025) | Broad hospitality platform (contactless check-in, tipping, upselling, AI voice); 20,000+ hotels in 100+ countries. Offers AI voice as one module among many, vs. Lance's voice-and-operations-first approach. |
| **Duve** | $85M total, $60M Series B (Skift, Dec 2025) | Unified guest experience platform (communication, check-in, upselling, mobile keys); 1M+ guests monthly across 70+ countries. Text/messaging-centric, not voice-first. |
| **Akia** | ~$12M total, $6M Series A (Hotel Technology News, Jan 2023) | Agentic hospitality platform with branded Mini Apps; serves luxury brands (Ritz Carlton, Nomad Hotels). Text/messaging-centric. |
| **HiJiffy** | ~€6.2M total (PhocusWire, Jun 2023) | Proprietary Aplysia AI engine with 85%+ automation; 2,500+ hotels across 60+ countries. WhatsApp/webchat-focused, not voice-first. |
| **Asksuite** | Funding amount not publicly disclosed; estimated ~$17.5M annual revenue, 121 employees (Growjo via search snippet) | Omnichannel platform across voice, chat, social media, and messaging. Closest to Lance in channel breadth but established as a larger operation. |

**Why now:** [Inferred]: Three catalysts converge: (1) LLM and voice AI technology crossed a quality threshold in 2024-2025, enabling natural-sounding voice agents capable of multi-turn conversation and task completion — this was not technically feasible at production quality two years prior; (2) Computer Use Agent technology (vision-based screen navigation) emerged as a viable paradigm in late 2024, enabling Lance to integrate with legacy hotel PMS systems without requiring API partnerships; (3) post-pandemic hotel staffing shortages remain acute — 65% of hotels still report staffing shortages (YC LinkedIn post via search snippet) — creating sustained demand for automation of repetitive front-desk tasks.

## Founders & Team

**Caleb Chan** — Co-founder & CEO
- UC Berkeley (dropped out) (X bio via search snippet); President at Entrepreneurs@Berkeley (LinkedIn via search snippet)
- Former Head of Product and Founding Engineer at Silicon Valley Commerce (9-figure exit) (YC company page)
- Previous product roles at Google and Salesforce, building voice and AI agent technology (YC company page)
- Twitter/X: @calebychan — 767 followers (search snippet); joined June 2025
- LinkedIn: linkedin.com/in/caleb-chan-327b14239 — "Co-Founder & CEO @ Lance (YC W26)" (LinkedIn via search snippet)
- GitHub: No public repos found

**Gavin Brennen** — Co-founder & COO
- UC Berkeley — Data Science + Haas (LinkedIn headline via search snippet)
- Previous AI agent work at Domo; product and customer-facing roles at SmartSuite (Series A) and Zeus (YC company page)
- Grew up around Marriott operations (YC LinkedIn post via search snippet)
- Twitter/X: @GavinBrennen (handle from YC page; follower count not retrievable — note: @gavin_brennen on X belongs to an unrelated quantum physics professor at Macquarie University)
- LinkedIn: linkedin.com/in/gavinbrennen — "Data Science + Haas @ Berkeley" (LinkedIn via search snippet)
- GitHub: No public repos found

**Gatik Trivedi** — Co-founder & CTO
- UC Berkeley MET (Management, Entrepreneurship, and Technology) — EECS + Business; accepted as one of 50 out of 7,000 applicants (Patch, San Ramon via search snippet)
- Founded and exited MedTec Innovate, a healthcare technology startup (YC company page; local press coverage via search snippet)
- Speech and language research at Stanford (YC company page)
- Built agent infrastructure at GI Partners; LLM evaluation metrics at Knowtex (YC S22) (YC company page)
- Won third place at an international science fair as a 14-year-old for an at-home COVID-19 symptom monitoring system (Patch, San Ramon via search snippet)
- Twitter/X: @GatikTriv (handle from YC page; follower count not retrievable)
- LinkedIn: Not found via search
- GitHub: No public repos found

**Co-founder relationship:** All three founders attended UC Berkeley — Caleb Chan was President of Entrepreneurs@Berkeley, Gavin Brennen studied Data Science + Haas at Berkeley, and Gatik Trivedi was admitted to Berkeley MET. This shared university affiliation is the likely basis for their connection.

**Founder-market fit:** Caleb Chan built voice and AI agent technology at Google and Salesforce and was a founding engineer at a company with a 9-figure exit, providing both technical and product leadership experience. Gavin Brennen grew up around Marriott hotel operations, providing direct hospitality domain knowledge. Gatik Trivedi brings deep technical capability in agent infrastructure, speech/language AI (Stanford), and LLM evaluation (Knowtex/YC S22), plus early entrepreneurial experience with a prior exit. The team combines AI product experience, hospitality domain familiarity, and agent infrastructure expertise.

## Key Risks

**Well-funded incumbent competition:** Canary Technologies ($180M raised, $600M valuation, Hotel Dive Jun 2025 via search snippet) already offers AI voice capabilities and serves 20,000+ hotels in 100+ countries. Duve ($85M raised, Skift Dec 2025) is expanding AI agent capabilities. These competitors have established customer relationships, integration partnerships, and sales teams. Lance must compete against deeply embedded incumbents with orders-of-magnitude more capital.

**Computer Use Agent fragility:** Lance's core technical differentiation — vision-based agents that navigate hotel PMS software via screen interaction — is dependent on the visual consistency of third-party software interfaces. PMS UI updates, redesigns, or version changes could break Lance's automation without warning. This approach, while reducing integration requirements, introduces a different class of maintenance burden compared to API-based integrations.

**Brand disambiguation:** "Lance" is a common English word and proper name. Search results for "Lance" return results for Lance Armstrong, Lance Stroll, Lance Stewart, and numerous other entities. This creates SEO challenges, brand confusion in marketing, and difficulty in organic discoverability. The company uses "TryLance" on social platforms as a workaround.

**Hotel group concentration risk:** The current traction of 50+ hotels appears to come through relationships with "some of the top hotel groups" rather than diversified individual property sales. Loss of a single hotel group relationship could represent a large portion of the customer base at this stage.

**Voice AI commoditization:** OpenAI, Google, and specialized providers (ElevenLabs, Vapi, Bland AI) are rapidly commoditizing voice AI capabilities. The voice interaction layer — Lance's most visible feature — may become table-stakes, compressing the value proposition to the operational execution layer, which is harder to demonstrate in sales cycles.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $58.56B AI in Hospitality & Tourism by 2029 at 30.1% CAGR (The Business Research Company, 2025 via search snippet); $1.44B AI in Hospitality by 2029 at 57.6% CAGR (The Business Research Company, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 50+ hotels across Marriott, Hilton, Hyatt brands (YC company page); 30%+ front desk call volume reduction (customer testimonial, lance.live); YC LinkedIn post: 1,252 likes, 623 comments (LinkedIn, 2026 via search snippet) |
| Revenue Signal | No public data found |
| Founders | Caleb Chan (CEO): UC Berkeley dropout, ex-Google/Salesforce, founding engineer at Silicon Valley Commerce (9-figure exit). Gavin Brennen (COO): UC Berkeley Data Science + Haas, ex-Domo/SmartSuite, grew up around Marriott operations. Gatik Trivedi (CTO): UC Berkeley MET, founded/exited MedTec Innovate, Stanford speech/language research, Knowtex (YC S22). |
| Competitors | Canary Technologies (~$180M raised, revenue unknown, broad hospitality platform with AI voice module); Duve ($85M raised, revenue unknown, unified guest experience platform, text-centric); Akia (~$12M raised, revenue unknown, agentic hospitality for luxury brands); HiJiffy (~€6.2M raised, revenue unknown, WhatsApp/webchat chatbot with 85%+ automation); Asksuite (funding undisclosed, ~$17.5M est. revenue via Growjo, omnichannel platform) |
| Moat Signals | Computer Use Agent technology (vision-based PMS navigation); operational execution layer beyond voice; workflow switching costs once embedded; hospitality-specific operational data accumulation |
| Risk Factors | Well-funded incumbent competition (Canary $180M, Duve $85M), Computer Use Agent fragility on third-party UI changes, voice AI commoditization |
| Founder Reach | Caleb Chan: Twitter @calebychan 767 followers; Gavin Brennen: Twitter @GavinBrennen (count not retrievable); Gatik Trivedi: Twitter @GatikTriv (count not retrievable) |
| Distribution Signals | YC LinkedIn announcement: 1,252 likes, 623 comments (LinkedIn, 2026 via search snippet); no Product Hunt launch found; no app store presence found |
| Emails | founders@lance.live (YC LinkedIn announcement post) |
