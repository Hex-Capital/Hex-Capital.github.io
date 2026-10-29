# Archgen Labs

> AI-powered EDA tools for faster, cooler 3D chips

| Field | Value |
|-------|-------|
| Website | https://www.archgen.tech/ |
| YC Page | https://www.ycombinator.com/companies/archgen-labs |
| Batch | Fall 2026 ([YC, accessed Oct 2026, via search snippet](https://www.ycombinator.com/companies/archgen-labs)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hardware, Semiconductors, AI |
| YC Partner | Kulveer Taggar ([YC, via search snippet](https://www.ycombinator.com/companies/archgen-labs)) |
| Emails | hari@archgen.tech, naveen@archgen.tech ([company website](https://www.archgen.tech/)) |

## The Idea

- **Problem:** Physical-design engineers repeatedly diagnose timing, congestion, and design-rule failures through reports, scripts, and reruns; Archgen describes backend implementation as the bottleneck remaining after faster AI-assisted frontend development ([founders’ technical article, Feb 2026](https://haran2001.substack.com/p/cognitive-agents-for-the-next-era)).
- **Approach:** Newton reads design-run evidence, identifies likely root causes, proposes floorplan or script changes, and retains outcomes for subsequent iterations, while YC describes additional placement and thermal tools for vertically stacked chips ([website](https://www.archgen.tech/); [YC, via search snippet](https://www.ycombinator.com/companies/archgen-labs)).
- **Differentiation:** Newton emphasizes persistent backend engineering memory, versus Ricursive’s AI–silicon co-evolution platform and Cognichip’s physics-informed foundation model, while ChipAgents overlaps through design-and-verification automation ([Archgen](https://www.archgen.tech/); [Ricursive](https://www.ricursive.com/); [Cognichip](https://www.cognichip.ai/news/seligman-ventures-leads-cognichips-60m-series-a-to-back-physics-informed-ai-for-chip-design-intel-ceo-lip-bu-tan-and-seligman-ventures-umesh-padval-join-the-board); [ChipAgents](https://chipagents.ai/newsroom/chipagents-series-a2-134m)).
- **Business Model:** [Inferred]: Enterprise software licensing is a possible monetization path because the advertised GTM role specifies enterprise sales to semiconductor teams; public pricing: No public data found ([careers page](https://www.archgen.tech/careers/)).
- **TAM/SAM:** The broader AI EDA market is estimated at $4.27B in 2026, reaching $15.85B by 2032 at 24.4% CAGR; an Archgen-specific serviceable segment estimate: No public data found ([MarketsandMarkets, Mar 2026](https://www.marketsandmarkets.com/Market-Reports/ai-eda-market-212473295.html)).
- **GTM / Distribution:** Archgen recruits for customer discovery and enterprise sales, publishes technical benchmarks, and runs chip-design workshops ([careers](https://www.archgen.tech/careers/); [technical blog](https://www.archgen.tech/blog/posts/how-we-ranked-first-in-the-partcl.html); [company LinkedIn](https://in.linkedin.com/company/archgen-labs)).

## Defensibility

- **Moat today:** Technical execution evidence includes the organizer-confirmed first-place macro-placement result, although its implementation is publicly available rather than exclusively proprietary ([Partcl/HRT](https://github.com/partcleda/macro-place-challenge-2026)).
- **Future moat:** [Inferred]: Accumulated customer-specific fixes and engineering outcomes could create workflow switching costs, but Newton’s proposed memory mechanism does not establish exclusive data access or demonstrated retention ([website](https://www.archgen.tech/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given Synopsys already demonstrates agentic EDA orchestration within its existing tool ecosystem ([Synopsys, Mar 2026](https://news.synopsys.com/2026-03-16-Synopsys-Showcases-NVIDIA-Partnership-Impact-and-Ecosystem-Innovation-at-GTC-2026?asPDF=1)).
- **Commoditization risk:** Archgen’s published placer uses Apache 2.0 licensing and open-source dependencies, permitting code reuse; the effort required to reproduce its complete commercial platform is not publicly quantified ([company GitHub](https://github.com/archgen-ai/Macro-Placement-challenge-2026)).

## Market & Traction

- **Traction signals:**
  - First place with average proxy cost 0.9507 in a competition receiving 132 verified eligible submissions ([Partcl/HRT, accessed Oct 2026](https://github.com/partcleda/macro-place-challenge-2026)).
  - Company-reported GlobalFoundries collaboration on 3D development, targeting first tapeout in 2027; this is not disclosed as a paying customer relationship ([YC, Oct 2026, via search snippet](https://www.ycombinator.com/companies/archgen-labs)).
  - Company-reported LayerTherm temperature prediction approximately 5,000× faster than conventional simulation in internal benchmarks ([YC, Oct 2026, via search snippet](https://www.ycombinator.com/companies/archgen-labs)).
  - Founder-reported $15,000 Emergent Ventures grant supporting incorporation and early experiments ([company LinkedIn, Oct 2026](https://in.linkedin.com/company/archgen-labs)).
  - Workshop reported over 300 registrations and 150+ in-person attendees ([company LinkedIn, accessed Oct 2026](https://in.linkedin.com/company/archgen-labs)).
  - Company X account @archgen_ showed 355 followers in a third-party snapshot ([Sotwe, retrieved Oct 2026, via search snippet](https://www.sotwe.com/archgen_?lang=en)).
  - Public placement repository showed 5 stars ([GitHub, Oct 2026](https://github.com/archgen-ai/Macro-Placement-challenge-2026)).
  - Physical Design Engineer, Machine Learning Engineer, and GTM Lead openings in Bangalore contradict the supplied non-hiring flag ([careers, Oct 2026](https://www.archgen.tech/careers/)).
- **Competitors:**
  - **Ricursive Intelligence ($335M raised, revenue unknown):** Pursues recursive AI–hardware co-design; latest disclosed financing was a $300M Series A led by Lightspeed on January 26, 2026 ([company](https://www.ricursive.com/); [financing announcement](https://www.prnewswire.com/news-releases/ricursive-intelligence-raises-300-million-series-a-at-4-billion-valuation-to-accelerate-ai-driven-semiconductor-design-302670061.html)).
  - **Cognichip ($93M raised, revenue unknown):** Builds a physics-informed foundation model across semiconductor design; announced a $60M Series A led by Seligman Ventures on April 1, 2026 ([company announcement](https://www.cognichip.ai/news/seligman-ventures-leads-cognichips-60m-series-a-to-back-physics-informed-ai-for-chip-design-intel-ceo-lip-bu-tan-and-seligman-ventures-umesh-padval-join-the-board)).
  - **ChipAgents (over $134M raised, absolute ARR unknown):** Automates design and verification beyond Archgen’s stated backend focus; announced $60M Series A2 financing on July 29, 2026, with B Capital joining existing investors; lead investor: No public data found ([company announcement](https://chipagents.ai/newsroom/chipagents-series-a2-134m)).
- **Why now:** [Inferred]: GPU-supported agent orchestration becoming available in semiconductor workflows creates infrastructure for autonomous engineering loops, illustrated by Synopsys’ NVIDIA-integrated AgentEngineer demonstrations in March 2026 ([Synopsys](https://news.synopsys.com/2026-03-16-Synopsys-Showcases-NVIDIA-Partnership-Impact-and-Ecosystem-Innovation-at-GTC-2026?asPDF=1)).

## Founders & Team

- **Hariharan Ayappane (Founder/CEO):**
  - Background: NIT Karnataka education, 2019–2023, and co-author of Archgen’s placement methodology; prior employers/exits: No public data found ([LinkedIn, via search snippet](https://www.linkedin.com/in/hariharan-ayappane); [technical article](https://www.archgen.tech/blog/posts/how-we-ranked-first-in-the-partcl.html)).
  - Twitter/X: @HariAyapps, approximately 1K followers in a third-party snapshot ([Sotwe, retrieved Oct 2026, via search snippet](https://www.sotwe.com/HariAyapps?lang=en)).
  - LinkedIn: Profile found; headline not retrievable; approximately 4K followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/hariharan-ayappane)).
  - GitHub: No public repos found attributable to a verified personal account.
- **Naveen Venkat (Founder/CTO):**
  - Background: Previously a data scientist and GenAI machine-learning engineer at AB InBev; university degree: No public data found ([personal website, via search snippet](https://naveenvenkat.online/)).
  - Twitter/X: @naveen_venk, 828 followers in a third-party snapshot ([Teapawt, Oct 2026, via search snippet](https://teapawt.org/naveen_venk)).
  - LinkedIn: Profile found; headline not retrievable; approximately 3K followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/naveenvenkat17)).
  - GitHub: No public repos found attributable to a verified personal account.
- **Co-founder relationship:** Both were named organizers of the February 2025 NITKonnect alumni dinner ([event organizer’s LinkedIn post, via search snippet](https://www.linkedin.com/posts/almasparveen_what-an-absolute-honour-it-was-to-personally-activity-7308813545519861760-1HRR)).
- **Founder-market fit:** Documented experience combines Naveen’s applied ML work with both founders’ published placement engineering, while YC backing and the founder-reported Emergent Ventures grant identify external supporters ([personal profile, via search snippet](https://naveenvenkat.online/); [technical article](https://www.archgen.tech/blog/posts/how-we-ranked-first-in-the-partcl.html); [company LinkedIn](https://in.linkedin.com/company/archgen-labs)).

## Key Risks

- **Production transfer:** [Inferred]: Competition success may not transfer to production timing and routability, as organizers explicitly caution that proxy optimization alone does not establish production-ready placement ([Partcl/HRT](https://github.com/partcleda/macro-place-challenge-2026)).
- **Thermal validation:** [Inferred]: LayerTherm’s reported speedup does not establish temperature accuracy across production stacks; YC supplies an internal benchmark claim and a future tapeout target, while independent validation: No public data found ([YC, via search snippet](https://www.ycombinator.com/companies/archgen-labs)).
- **Incumbent substitution:** [Inferred]: Native agent orchestration could replace parts of Newton’s workflow layer because Synopsys already demonstrates overlapping design-and-verification automation ([Synopsys, Mar 2026](https://news.synopsys.com/2026-03-16-Synopsys-Showcases-NVIDIA-Partnership-Impact-and-Ecosystem-Innovation-at-GTC-2026?asPDF=1)).
- **Name ambiguity:** [Inferred]: Research can conflate this company with architecture-focused ArchGen AI Labs at archgen.in; different domains and founders distinguish the businesses ([unrelated company LinkedIn](https://in.linkedin.com/company/archgen-ai-labs-private-limited)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI EDA: $4.27B in 2026; 24.4% CAGR through 2032 ([MarketsandMarkets, 2026](https://www.marketsandmarkets.com/Market-Reports/ai-eda-market-212473295.html)) |
| SAM | No public data found |
| Traction | First-place placement result ([Partcl/HRT, 2026](https://github.com/partcleda/macro-place-challenge-2026)); GlobalFoundries collaboration claim ([YC, Oct 2026, via search snippet](https://www.ycombinator.com/companies/archgen-labs)); $15,000 grant and 150+ workshop attendees ([company LinkedIn, Oct 2026](https://in.linkedin.com/company/archgen-labs)) |
| Revenue Signal | No public data found |
| Founders | Hariharan Ayappane, CEO: NITK, placement research ([LinkedIn, via search snippet](https://www.linkedin.com/in/hariharan-ayappane)); Naveen Venkat, CTO: AB InBev ML/GenAI ([personal profile, via search snippet](https://naveenvenkat.online/)) |
| Competitors | Ricursive ($335M, revenue unknown, AI–silicon co-design) ([company](https://www.ricursive.com/)); Cognichip ($93M, revenue unknown, physics-informed model) ([company](https://www.cognichip.ai/news/seligman-ventures-leads-cognichips-60m-series-a-to-back-physics-informed-ai-for-chip-design-intel-ceo-lip-bu-tan-and-seligman-ventures-umesh-padval-join-the-board)); ChipAgents (over $134M, revenue unknown, design/verification agents) ([company](https://chipagents.ai/newsroom/chipagents-series-a2-134m)) |
| Moat Signals | Organizer-confirmed first place, 0.9507 proxy score ([Partcl/HRT, 2026](https://github.com/partcleda/macro-place-challenge-2026)) |
| Risk Factors | Proxy-to-production qualification caveat ([Partcl/HRT](https://github.com/partcleda/macro-place-challenge-2026)); overlapping incumbent agents ([Synopsys, 2026](https://news.synopsys.com/2026-03-16-Synopsys-Showcases-NVIDIA-Partnership-Impact-and-Ecosystem-Innovation-at-GTC-2026?asPDF=1)) |
| Founder Reach | Hariharan: X ~1K ([Sotwe, via search snippet](https://www.sotwe.com/HariAyapps?lang=en)), LinkedIn ~4K ([LinkedIn, via search snippet](https://www.linkedin.com/in/hariharan-ayappane)); Naveen: X 828 ([Teapawt, via search snippet](https://teapawt.org/naveen_venk)), LinkedIn ~3K ([LinkedIn, via search snippet](https://www.linkedin.com/in/naveenvenkat17)); snapshots retrieved Oct 2026 |
| Distribution Signals | Workshop: over 300 registrations ([company LinkedIn, Oct 2026](https://in.linkedin.com/company/archgen-labs)); company X: 355 followers ([Sotwe, Oct 2026, via search snippet](https://www.sotwe.com/archgen_?lang=en)); repository: 5 stars ([GitHub, Oct 2026](https://github.com/archgen-ai/Macro-Placement-challenge-2026)) |
| Emails | hari@archgen.tech, naveen@archgen.tech ([company website, Oct 2026](https://www.archgen.tech/)) |
