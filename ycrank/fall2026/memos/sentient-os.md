# Sentient OS

> On-device AI that knows your entire life and does your work overnight.

| Field | Value |
|-------|-------|
| Website | https://sentient-os.ai |
| YC Page | https://www.ycombinator.com/companies/sentient-os |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/sentient-os)) |
| Industry | B2B / B2B -> Productivity |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Productivity, AI |
| YC Partner | Aaron Epstein ([YC](https://www.ycombinator.com/companies/sentient-os)) |
| Emails | feedback@sentient-os.ai ([website](https://sentient-os.ai/team)), jesai@sentient-os.ai ([company GitHub](https://github.com/Sentient-OS-Labs)), jesaitarun@gmail.com ([founder GitHub](https://github.com/theJayTea)) |

## The Idea

- **Problem:** Knowledge workers must reconstruct context scattered across messages, emails, notes, and files before delegating tasks to chatbots or completing follow-ups manually ([YC launch, accessed Oct 27, 2026](https://www.ycombinator.com/launches/WUE-sentient-os-on-device-ai-that-knows-you-and-takes-over-your-work)).
- **Approach:** An on-device model processes selected sources overnight into editable Markdown knowledge, which supplies context for reply drafting, proactive suggestions, and Sidekick’s computer actions ([YC launch](https://www.ycombinator.com/launches/WUE-sentient-os-on-device-ai-that-knows-you-and-takes-over-your-work)).
- **Differentiation:** Screenpipe captures screen/audio history, Highlight builds shared organizational context, and Cluely assists during meetings, whereas Sentient combines overnight personal-source analysis with drafting and computer use ([Screenpipe](https://screenpipe.com/), [Highlight](https://highlightai.com/), [Cluely](https://cluely.com/), [Sentient](https://sentient-os.ai/)).
- **Business Model:** The consumer assistant is described as free, with lifetime access offered through `FINAL_1000`, while enterprise integrations, commercial licensing, and support are the stated monetization channels; initial teams currently receive free access ([website](https://sentient-os.ai/), [GitHub](https://github.com/Sentient-OS-Labs/sentient-os), [Teams](https://sentient-os.ai/team)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; the broader AI productivity tools category is estimated at $10.32 billion in 2026 with 16% CAGR through 2034 ([Straits Research, 2026](https://straitsresearch.com/report/ai-productivity-tools-market)).
- **GTM / Distribution:** Public distribution includes Reddit launches, GitHub source code, direct Mac downloads, Homebrew installation, and founder-led enterprise contact ([founder launch, Jul 20, 2026](https://www.reddit.com/r/macapps/comments/1v18pdf/os_3_months_ago_2500_of_you_joined_the_waitlist/), [website](https://sentient-os.ai/)).

## Defensibility

- **Moat today:** Public technical evidence comprises a customized LiteRT-LM integration using Metal, speculative decoding, bounded context budgets, and engine reuse across batches ([company GitHub](https://github.com/Sentient-OS-Labs/sentient-os)).
- **Future moat:** [Inferred]: Accumulated personal knowledge could improve contextual usefulness, although editable, portable Markdown and optional sharing reduce exclusive control over that context ([privacy architecture](https://sentient-os.ai/privacy-core)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given Screenpipe’s existing local-history and model-agnostic context offering ([Screenpipe](https://screenpipe.com/)).
- **Commoditization risk:** [Inferred]: Other assistant developers can inspect Sentient’s AGPL-3.0 implementation and combine available inference frameworks with source connectors, although matching integration reliability requires engineering work ([GitHub](https://github.com/Sentient-OS-Labs/sentient-os)).

## Market & Traction

- **Traction signals:**
  - Company-reported 10,000+ users, including users at 130+ companies such as Adobe; company affiliation does not establish enterprise purchasing ([YC launch, accessed Oct 27, 2026](https://www.ycombinator.com/launches/WUE-sentient-os-on-device-ai-that-knows-you-and-takes-over-your-work)).
  - Company-reported alpha adoption of 4,000+ users in its first week with $0 marketing, plus use by over 30 enterprises, without disclosed payment status ([YC profile, accessed Oct 27, 2026](https://www.ycombinator.com/companies/sentient-os)).
  - Founder-reported prelaunch waitlist of 2,500; the July launch thread shows 689 votes ([Reddit, Jul 20, 2026; accessed Oct 27](https://www.reddit.com/r/macapps/comments/1v18pdf/os_3_months_ago_2500_of_you_joined_the_waitlist/)).
  - Main repository: 653 stars and 63 forks ([GitHub, accessed Oct 27, 2026](https://github.com/Sentient-OS-Labs/sentient-os)).
  - Company LinkedIn: 881 followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/sentient-os)).
  - Company-reported financing exceeding $1 million from YC, Afore, Pioneer Fund, and a16z speedrun’s scout fund ([YC profile, accessed Oct 27, 2026](https://www.ycombinator.com/companies/sentient-os)).
  - Product coverage in DoNews ([DoNews, Oct 13, 2026](https://www.donews.com/news/detail/1/6739173.html)).
  - Zero advertised YC jobs ([YC profile, accessed Oct 27, 2026](https://www.ycombinator.com/companies/sentient-os)).
- **Competitors:**
  - **Screenpipe** (reported $0.5M raised; revenue unknown): local screen/audio memory and workflow discovery, versus Sentient’s selected-source overnight processing; Caplight lists YC accelerator funding dated May 14, 2026 ([Caplight](https://www.caplight.com/company/screenpipe), [product](https://screenpipe.com/)).
  - **Highlight AI** ($50M raised; revenue unknown): shared team context rather than primarily personal context, with a $40M Series A led by Khosla Ventures in March 2026 ([CB Insights](https://www.cbinsights.com/company/highlight-ai/financials), [company announcement, Mar 24, 2026](https://www.streetinsider.com/Business%2BWire/Highlight%2BAI%2BRaises%2B%2440%2BMillion%2BSeries%2BA%2Bto%2BBuild%2Bthe%2BShared%2BIntelligence%2BLayer%2Bfor%2Bthe%2BAgentic%2BAge%2Bof%2BWork/26206347.html)).
  - **Cluely** ($20.3M raised; revenue unknown): meeting notes and live answers; latest identified financing was a $15M Series A from a16z in June 2025 ([TechCrunch](https://techcrunch.com/2025/06/20/cluely-a-startup-that-helps-cheat-on-everything-raises-15m-from-a16z/), [product](https://cluely.com/)).
- **Why now:** [Inferred]: Compact models and optimized local inference now permit repeated context processing on consumer hardware, illustrated by Sentient’s Gemma 4 E4B stack supporting an 8 GB baseline ([GitHub, Oct 2026](https://github.com/Sentient-OS-Labs/sentient-os)).

## Founders & Team

- **Jesai Tarun (Founder/CEO):**
  - Background: UMass Amherst affiliation, prior Writing Tools and Bliss AI projects, and on-device inference research; Writing Tools’ reported 30,000+ users belong to that separate project ([YC founder profile](https://www.ycombinator.com/founders/jesai-tarun), [founder GitHub](https://github.com/theJayTea)).
  - Twitter/X: No public account found.
  - LinkedIn: Headline: No public data found; indexed profile shows approximately 3K followers ([LinkedIn, retrieved Oct 27, 2026, via search snippet](https://www.linkedin.com/in/jesai-tarun-37004725a)).
  - GitHub: @theJayTea; WritingTools displays 2.5K stars ([GitHub, accessed Oct 27, 2026](https://github.com/theJayTea/WritingTools)).
- **Aditya Vellanki (Founder/CTO):**
  - Background: UMass Amherst computer science student, previously at Exerton, ArthaNet, and Superteam, with AI and decentralized-software projects ([YC founder profile](https://www.ycombinator.com/founders/aditya-vellanki), [personal website via search snippet](https://adityahemanth.com/)).
  - Twitter/X: @aditya_vellanki; count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/aditya-vellanki)).
  - LinkedIn: Headline: No public data found; indexed profile shows approximately 4K followers ([LinkedIn, retrieved Oct 27, 2026, via search snippet](https://www.linkedin.com/in/adityahemanth)).
  - GitHub: @AdityaHemanthVellanki; pinned Contexto MCP-server project has 1 star ([GitHub, accessed Oct 27, 2026](https://github.com/AdityaHemanthVellanki)).
- **Co-founder relationship:** Both list UMass Amherst, and Tarun publicly describes Vellanki as his best friend ([Tarun YC](https://www.ycombinator.com/founders/jesai-tarun), [Vellanki YC](https://www.ycombinator.com/founders/aditya-vellanki), [founder post](https://www.linkedin.com/posts/jesai-tarun-37004725a_couldnt-have-asked-for-a-better-co-founder-activity-7474919320905539584-d1DE)).
- **Founder-market fit:** [Inferred]: Tarun’s writing-assistant and inference work and Vellanki’s Contexto and enterprise-software background relate to contextual automation; disclosed investors include YC and Afore ([Tarun](https://github.com/theJayTea), [Vellanki](https://github.com/AdityaHemanthVellanki), [YC company profile](https://www.ycombinator.com/companies/sentient-os)).

## Key Risks

- **Technical reliability:** A user reported repeated long-item inference failures exhausting overnight runs, with the issue still open when accessed ([GitHub issue, Oct 21, 2026](https://github.com/Sentient-OS-Labs/sentient-os/issues/353)).
- **Privacy boundary:** Cloud-enabled features can transmit knowledge and screenshots, while local models are available as mitigation and the covered Double Tap service claims Zero Data Retention ([privacy architecture](https://sentient-os.ai/privacy-core)).
- **Platform dependence:** Deployment requires Apple silicon and macOS 15.4+, with Windows on a waitlist, while local-source access requires Full Disk Access ([website](https://sentient-os.ai/)).
- **Name ambiguity:** Unrelated SentientOS humanoid software shares the name, requiring domain and founder checks when attributing coverage or metrics ([unrelated product](https://sentientos.io/), [YC identity](https://www.ycombinator.com/companies/sentient-os)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI productivity category: $10.32B in 2026; 16% CAGR, 2026–2034 ([Straits Research](https://straitsresearch.com/report/ai-productivity-tools-market)) |
| SAM | No public data found |
| Traction | Company reports 10,000+ users and users at 130+ companies ([YC launch, Oct 2026](https://www.ycombinator.com/launches/WUE-sentient-os-on-device-ai-that-knows-you-and-takes-over-your-work)) |
| Revenue Signal | Free consumer offering; enterprise integrations/support monetization; initial teams free; realized revenue: No public data found ([website](https://sentient-os.ai/), [Teams](https://sentient-os.ai/team)) |
| Founders | Jesai Tarun, CEO: Writing Tools, inference research ([YC](https://www.ycombinator.com/founders/jesai-tarun)); Aditya Vellanki, CTO: Exerton, ArthaNet ([YC](https://www.ycombinator.com/founders/aditya-vellanki)) |
| Competitors | Screenpipe ($0.5M reported, revenue unknown, screen/audio memory; [Caplight](https://www.caplight.com/company/screenpipe)); Highlight ($50M, revenue unknown, team context; [CB Insights](https://www.cbinsights.com/company/highlight-ai/financials)); Cluely ($20.3M, revenue unknown, meetings; [TechCrunch](https://techcrunch.com/2025/06/20/cluely-a-startup-that-helps-cheat-on-everything-raises-15m-from-a16z/)) |
| Moat Signals | Customized local inference stack; 653 repository stars ([GitHub, Oct 27, 2026](https://github.com/Sentient-OS-Labs/sentient-os)) |
| Risk Factors | Reported overnight failures ([GitHub](https://github.com/Sentient-OS-Labs/sentient-os/issues/353)), cloud-context transmission ([privacy architecture](https://sentient-os.ai/privacy-core)), Mac dependence ([website](https://sentient-os.ai/)) |
| Founder Reach | Tarun: LinkedIn ~3K ([indexed profile](https://www.linkedin.com/in/jesai-tarun-37004725a), via search snippet), WritingTools 2.5K stars ([GitHub](https://github.com/theJayTea/WritingTools)); Vellanki: LinkedIn ~4K ([indexed profile](https://www.linkedin.com/in/adityahemanth), via search snippet), Contexto 1 star ([GitHub](https://github.com/AdityaHemanthVellanki)); retrieved Oct 27, 2026 |
| Distribution Signals | 689-vote July Reddit launch ([Reddit](https://www.reddit.com/r/macapps/comments/1v18pdf/os_3_months_ago_2500_of_you_joined_the_waitlist/)); company LinkedIn 881 followers ([LinkedIn](https://www.linkedin.com/company/sentient-os)); accessed Oct 27, 2026 |
| Emails | feedback@sentient-os.ai ([website](https://sentient-os.ai/team)), jesai@sentient-os.ai ([company GitHub](https://github.com/Sentient-OS-Labs)), jesaitarun@gmail.com ([founder GitHub](https://github.com/theJayTea)) |
