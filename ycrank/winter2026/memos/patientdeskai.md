# Patientdesk.ai

> AI voice agent for patient calls & admin workflows

| Field | Value |
|-------|-------|
| Website | https://patientdesk.ai/ |
| YC Page | https://www.ycombinator.com/companies/patientdeskai |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare IT |
| Team Size | 3 |
| Location | San Francisco, CA (YC page via search snippet) |
| Tags | Customer Service, Call Center, Conversational AI, AI Assistant |
| YC Partner | Gustaf Alstromer (YC page) |
| Emails | info@patientdesk.ai (company website), founders@patientdesk.ai (YC page) |

## The Idea

**Problem:** Dental practices lose revenue from unanswered patient calls, manual insurance verification callbacks, and unfilled appointment slots. Front desk staff in the US cost the dental industry an estimated $7B per year (Arini YC page via search snippet). A typical workflow today requires a patient to call, leave information, wait for a callback to verify insurance, and then schedule — creating friction that leads to drop-off before high-value procedures are booked. Practices currently rely on manual front desk staff, basic answering services, or generic scheduling software that does not handle insurance verification or payment collection during the initial call.

**Approach:** Patientdesk provides an AI voice agent that handles the full patient intake flow on inbound and outbound calls: qualifying patients, booking appointments directly into practice management systems (PMS), verifying insurance in real time during the call (including member ID and benefits confirmation), collecting payments and deposits, and managing follow-up recalls and reminders — all 24/7. The system integrates with major dental PMS platforms including Dentrix, OpenDental, Eaglesoft, Curve Dental, and ModMed (company website). The distinguishing mechanism is the real-time insurance verification during the call itself, which eliminates the callback step that typically causes patient drop-off.

**Differentiation:** Most AI dental receptionists (Arini, Dentina.ai, Rondah) handle call answering and appointment scheduling but require follow-up callbacks for insurance verification. Patientdesk verifies insurance coverage live during the initial call and explains benefits to the patient, which the company states reduces hesitation and increases confirmed bookings for high-value treatments (EIN Presswire, Feb 2026). Additionally, Patientdesk bundles outbound lead generation via Meta Ads campaigns at a stated average cost of $94.27 per qualified lead and claims a 60% conversion rate on AI follow-up calls (company website). TrueLark (acquired by Weave, May 2025) focused primarily on text/chat-based AI communications rather than voice-first intake with live insurance verification.

**Business Model:** Monthly subscription starting at $1,000/month base fee, which includes 1,500 minutes per month. Overage at $0.20/minute. Additional practice locations are charged at 50% of the base fee each. Features are modular (inbound, outbound, reminders, recalls, payments) (company website).

**TAM/SAM:** The global AI voice agents in healthcare market was estimated at $472M in 2025 and is projected to reach $11.7B by 2035 at a 37.85% CAGR (Towards Healthcare, 2026 via search snippet). The broader voice AI agents market was valued at $2.4B in 2024 and is projected to reach $47.5B by 2034 at a 34.8% CAGR (Market.us via search snippet). No public SAM estimate specific to dental AI voice agents was found.

**GTM / Distribution:** The company operates a dental marketing agency community on Skool (co-founder Fikri San Koktas's profile, Skool), which likely serves as a lead generation channel into dental practices. The press release mentions plans to scale deployments across larger dental groups and DSOs (EIN Presswire, Feb 2026). [Inferred]: The most likely distribution path is direct sales to individual dental practices and small DSOs, leveraging the existing dental marketing agency network and community the founders built prior to Patientdesk, then expanding to larger DSO enterprise accounts.

## Defensibility

The primary defensibility signal today is the integration depth with 10+ dental PMS platforms (Dentrix, OpenDental, Eaglesoft, Curve Dental, ModMed, and others) (company website), which creates switching costs once a practice's workflows depend on Patientdesk's AI handling scheduling, insurance verification, and payments through their existing PMS. Operating in 60+ clinics across three countries (YC page) generates dental-specific conversational data and insurance verification patterns that could compound over time.

**Market structure:** Incumbent dental PMS vendors (Dentrix/Henry Schein, Eaglesoft/Patterson) are primarily software companies monetizing through licensing and hardware sales. Building an AI voice agent with real-time insurance verification and outbound calling capability requires different technical competencies (speech AI, telephony infrastructure, insurance API integrations) and a different pricing model (per-minute/subscription vs. perpetual license). However, Weave's acquisition of TrueLark (May 2025) demonstrates that dental-adjacent communication platforms are actively acquiring in this space, which could bring well-resourced competition.

**Commoditization risk:** The AI dental receptionist space already has multiple funded entrants (Arini, Viva AI, Rondah, Dentina.ai) and the underlying voice AI technology (LLMs, speech-to-text, text-to-speech) is increasingly commoditized. The real-time insurance verification integration is a differentiator today but is technically replicable by competitors with sufficient engineering investment and insurance API partnerships.

## Market & Traction

**Traction signals:**
- $1M pre-seed raised, led by Y Combinator and E2VC (EIN Presswire, Feb 19, 2026)
- Live in 60+ clinics across the US, Australia, and UK (YC page)
- Partnered with 3 major practice management systems (YC page)
- Customer testimonial: one clinic generated over $350,000 in revenue from Patientdesk-managed bookings in December (EIN Presswire, Feb 2026)
- Website displays aggregate customer revenue figures by geography (US $8.2M, UK £6.97M, UAE AED 30.1M, Canada C$10.8M) — these represent revenue generated for client practices, not Patientdesk's own revenue (company website)
- 5.0-star customer ratings displayed on website (company website)
- 60% conversion rate claimed on AI follow-up calls (company website)
- Twitter/X: @PatientdeskAI (active as of ~Feb 2026; follower count not retrievable)
- LinkedIn: linkedin.com/company/patientdesk-ai (follower count not retrievable)
- Facebook: facebook.com/patientdeskai (follower count not retrievable)
- No Product Hunt listing found
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Patientdesk |
|---|---|---|
| **Arini** (YC S24) | $500K seed (Tracxn via search snippet) | Focused on call answering and scheduling for individual dental practices; does not advertise real-time insurance verification or payment collection during calls |
| **Viva AI** | $2.5M seed (Leads on Trees via search snippet) | Broader "practice optimizer" positioning beyond reception; includes AI Office Manager and Practice Optimizer features |
| **Rondah AI** | $1.8M pre-seed (BusinessWire, Apr 2025) | Exclusively targets DSOs (dental support organizations) rather than individual practices; deploying to hundreds of practices through enterprise DSO contracts |
| **TrueLark** (acquired by Weave, May 2025) | $5.95M total (Tracxn via search snippet) | Text/chat-first AI communications platform; acquired by Weave, bringing it into a larger dental communication ecosystem |
| **Dentina.ai** | Bootstrapped (Tracxn via search snippet) | Direct PMS integration for scheduling; no external funding, operating on subscription revenue |

**Why now:** [Inferred]: The convergence of three factors opened this opportunity: (1) voice AI quality crossed a threshold in 2024-2025 with models capable of natural-sounding, real-time conversation handling complex multi-step workflows (insurance verification, payment collection) rather than simple FAQ responses; (2) insurance verification APIs became more accessible, enabling programmatic real-time eligibility checks during calls rather than requiring manual portal lookups; (3) dental staffing shortages and rising front desk labor costs created acute willingness among practice owners to adopt automation for patient-facing communications.

## Founders & Team

**Emre Kaplaner** — Co-founder
- Mathematics, Uppsala University (Stockholm University listed on LinkedIn via search snippet)
- Previously: Analyst at Eitrium, a Swedish industrial holding company focused on acquiring Nordic industrial companies (LinkedIn via search snippet)
- Based in Stockholm, age 25 (Ratsit.se via search snippet — Swedish public records)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/pub/dir/Emre/Kaplaner (LinkedIn)
- GitHub: No public repos found

**Fikri San Koktas** — Co-founder
- MSc Machine Learning, Data Science and Artificial Intelligence, Aalto University (2024–2026) (LinkedIn via search snippet)
- BSc Computational Engineering, Aalto University (thesis: "Reuse of Bridge Materials and Components," 2023) (Aalto University via search snippet)
- Robert College alumnus (LinkedIn post via search snippet)
- Previously: Owner of ESO Marketing Automations (esoautomations.com), a dental marketing agency (RocketReach via search snippet); operates a dental marketing community on Skool with 2.1k followers (Skool)
- Prior roles at Tiem Tekstil and Aalto University (RocketReach via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/fikri-san-koktas-47a73b1ab (LinkedIn)
- GitHub: No public repos found

**Oncel Ozgul** — Co-founder
- Based in San Francisco (LinkedIn via search snippet)
- Active on Skool with content about helping dental clinics bring in implant and veneers cases with automated systems (Skool via search snippet)
- Education: Listed as Y Combinator on LinkedIn (LinkedIn via search snippet); no prior university found
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/oncelozgul (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Fikri San Koktas attended Robert College (Istanbul) and Aalto University (Helsinki). The dental marketing agency background (ESO Marketing Automations) and Skool dental community activity suggest Fikri and Oncel may have connected through the dental marketing/agency space, as both have Skool profiles related to dental practice growth. Emre Kaplaner's Swedish background (Uppsala/Stockholm, Eitrium) does not show obvious overlap with the other founders' educational or professional paths from available public data.

**Founder-market fit:** Fikri San Koktas brings direct dental industry distribution experience through his dental marketing agency (ESO Marketing Automations) and Skool community (2.1k followers), providing an existing network of dental practice owner customers. His ML master's degree at Aalto provides technical grounding for AI product development. Oncel Ozgul has demonstrated dental practice growth expertise through his Skool content on dental implant and veneer case generation. The team's prior experience selling to dental practices through agency and automation services gives them first-hand understanding of practice owner pain points and buying behavior. Emre Kaplaner adds analytical and business operations experience from his role at Eitrium.

## Key Risks

**Crowded AI dental receptionist market:** At least five funded competitors (Arini, Viva AI, Rondah, TrueLark/Weave, Dentina.ai) are targeting the same core use case of AI-powered call handling for dental practices. Rondah raised $1.8M specifically for DSO deployments (BusinessWire, Apr 2025), and Viva AI raised $2.5M (Leads on Trees via search snippet). Weave's acquisition of TrueLark brings a well-capitalized public company ($741M market cap range) into the competitive set with an existing installed base of dental communication tools.

**PMS integration dependency:** The product's value proposition depends on deep integration with third-party PMS platforms (Dentrix, Eaglesoft, OpenDental). If PMS vendors restrict API access, build native AI features, or partner exclusively with competitors, Patientdesk's core functionality could be undermined. Henry Schein (Dentrix) and Patterson (Eaglesoft) have the resources and incentive to develop or acquire AI front desk capabilities.

**Insurance verification reliability:** Real-time insurance verification during calls is the primary stated differentiator. This depends on insurance payer API availability and accuracy. Payer systems vary in reliability, and verification failures during live patient calls could damage the user experience and practice trust. The complexity of dental insurance plans (coverage limits, waiting periods, frequency limitations) adds error surface.

**Geographic revenue concentration ambiguity:** The company website lists customer revenue figures for US, UK, UAE, and Canada, but the YC page states operations in US, Australia, and UK. The UAE and Canada figures on the website versus Australia on the YC page create uncertainty about actual geographic footprint and data accuracy.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $472M AI voice agents in healthcare (2025), projected $11.7B by 2035 at 37.85% CAGR (Towards Healthcare, 2026 via search snippet) |
| SAM | No public data found for dental-specific AI voice agent segment |
| Traction | 60+ clinics live across US, Australia, UK (YC page, Feb 2026); 3 major PMS partnerships (YC page); $1M pre-seed raised (EIN Presswire, Feb 2026) |
| Revenue Signal | $1,000/month base fee, 1,500 included minutes, $0.20/min overage, 50% base fee per additional location (company website). At 60+ clinics, [Inferred]: potential run-rate range of $720K–$1M+ ARR depending on plan mix and overage usage. |
| Founders | Emre Kaplaner: Mathematics (Uppsala), ex-Eitrium analyst. Fikri San Koktas: MSc ML (Aalto), dental marketing agency owner (ESO). Oncel Ozgul: dental automation specialist, SF-based. |
| Competitors | Arini ($500K raised, revenue unknown, scheduling-only vs. Patientdesk's insurance+payments bundle); Viva AI ($2.5M raised, revenue unknown, broader practice optimizer vs. voice-first intake); Rondah AI ($1.8M raised, revenue unknown, DSO-only focus vs. individual practice + DSO); TrueLark ($5.95M raised, acquired by Weave May 2025, text-first vs. voice-first); Dentina.ai (bootstrapped, revenue unknown, no insurance verification) |
| Moat Signals | 10+ PMS integrations (company website); real-time insurance verification during calls; 60+ clinic deployments generating dental-specific conversational data |
| Risk Factors | Crowded competitor field with multiple funded entrants, PMS vendor platform dependency, insurance verification reliability at scale |
| Founder Reach | Emre Kaplaner: Twitter not found, LinkedIn profile found, GitHub not found. Fikri San Koktas: Twitter not found, LinkedIn 500+ (est.), GitHub not found, Skool 2.1k followers. Oncel Ozgul: Twitter not found, LinkedIn profile found, GitHub not found. Company: @PatientdeskAI on X (count not retrievable). |
| Distribution Signals | No Product Hunt listing found; dental marketing Skool community (2.1k members, Fikri San Koktas); press coverage in EIN Presswire and FinSMES (Feb 2026); company blog with dental PMS comparison content |
| Emails | info@patientdesk.ai (company website), founders@patientdesk.ai (YC page) |
