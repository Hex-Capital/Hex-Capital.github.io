# Jinko

> Travel Search & Booking Infrastructure for AI agents

| Field | Value |
|-------|-------|
| Website | https://gojinko.com |
| YC Page | https://www.ycombinator.com/companies/jinko |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/jinko)) |
| Industry | B2B / B2B |
| Team Size | 6 |
| Location | Paris, ?le-de-France, France |
| Tags | Travel, APIs |
| YC Partner | Christopher Golda ([Y Combinator](https://www.ycombinator.com/companies/jinko)) |
| Emails | partnership@gojinko.com for sales and partnerships, support@gojinko.com for support ([Jinko Contact](https://gojinko.com/contact/)), privacy@gojinko.com for privacy requests ([Jinko Privacy Policy](https://gojinko.com/privacy/)) |

## The Idea

- **Problem:** Developers building AI travel agents need live inventory through checkout, but browser-based agents can be blocked by airline sites and conventional flight APIs commonly require fixed destinations and dates ([Jinko engineering blog, Aug 2026](https://gojinko.com/blog/why-agents-struggle-to-book-travel/)).
- **Approach:** Jinko exposes budget-based destination discovery, live pricing, checkout with traveler approval, and post-booking changes and refunds through REST, MCP and CLI connectors for flights, hotels and car rentals ([Jinko homepage](https://gojinko.com/), [Jinko API terms](https://gojinko.com/api-terms/)).
- **Differentiation:** Jinko documents budget-led discovery across destinations, while Duffel offers embedded travel checkout, Nuitée offers hotel loyalty rates and branded storefronts, Etraveli’s Flight MCP focuses on air, and YGO connects suppliers’ existing booking systems to agent channels ([Jinko](https://gojinko.com/), [Duffel](https://duffel.com/blog/introducing-duffel-cars), [Nuitée](https://nuitee.com/connect), [Etraveli](https://www.mynewsdesk.com/etraveli-group/pressreleases/etraveli-group-opens-its-flight-engine-to-ai-agents-with-new-flight-mcp-3474454), [Ventech](https://ventechvc.com/stories/ygo-raises-eu8-million-to-build-the-ai-infrastructure-for-the-travel-industry)).
- **Business Model:** Pay-as-you-go includes free discovery, a 1% flight booking fee and $0.005 per search above a monthly 1,500:1 search-to-book ratio, with bespoke enterprise terms and commission sharing on completed hotel stays and car rentals ([Jinko pricing, Nov 2026](https://gojinko.com/pricing/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Jinko offers self-serve API keys and quickstarts, founder demos, and distribution through Exa Connect and agent plugins ([Jinko docs](https://docs.gojinko.com/introduction), [Launch YC](https://www.ycombinator.com/launches/WfH-jinko-the-travel-search-booking-api-built-for-agents), [Exa Connect](https://exa.ai/connect), [GitHub](https://github.com/jinkoso/jinko-agent-plugins)).

## Defensibility

- **Moat today:** Jinko reports holding IATA and ARC accreditations, allowing customers to book through Jinko’s credentials, and lists a French travel-operator registration, financial guarantor and liability insurer ([Jinko FAQ](https://gojinko.com/faq/), [API terms](https://gojinko.com/api-terms/)).
- **Future moat:** [Inferred]: Integrations that rely on Jinko for checkout, changes and refunds could create switching costs, with no public data on retention or migration effort ([Jinko docs](https://docs.gojinko.com/introduction)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Existing travel aggregators can expose their booking engines through MCP, as Etraveli did for flight search, booking and servicing in October 2026 ([Etraveli Group](https://www.mynewsdesk.com/etraveli-group/pressreleases/etraveli-group-opens-its-flight-engine-to-ai-agents-with-new-flight-mcp-3474454)).

## Market & Traction

- **Traction signals:**
  - Current API launched publicly through YC ([Launch YC](https://www.ycombinator.com/launches/WfH-jinko-the-travel-search-booking-api-built-for-agents), Nov 2026).
  - Wajo and Pally named as collaborators ([Launch YC](https://www.ycombinator.com/launches/WfH-jinko-the-travel-search-booking-api-built-for-agents), Nov 2026).
  - Live flight and hotel search listed in Exa Connect ([Exa Connect](https://exa.ai/connect), checked Nov 2026).
  - Twin travel-booking integration announced ([Jinko LinkedIn](https://fr.linkedin.com/company/jinkotravel), Oct 2026).
  - Alfie and AgentCard partnerships announced ([Jinko LinkedIn](https://www.linkedin.com/company/jinkotravel), Nov 2026).
  - Advertised inventory of 800 airlines, 2.6 million hotels and 28,000 car rental locations ([Jinko FAQ](https://gojinko.com/faq/), checked Nov 2026).
  - Customer testimonial: a travel startup founder reported reaching live bookings in four hours ([Jinko For Entrepreneurs](https://gojinko.com/solutions/entrepreneurs/), undated).
  - 1,098 LinkedIn followers and 149 X followers at @jinkohq ([LinkedIn](https://www.linkedin.com/company/jinkotravel), [X profile mirror](https://nitter.gq/jinkohq), Nov 2026).
  - 55 weekly downloads for `@gojinko/plugin` ([npm](https://www.npmjs.com/package/%40gojinko/plugin?activeTab=dependencies), Nov 2026 snapshot).
  - Zero open positions on YC Jobs ([YC Jobs](https://www.ycombinator.com/companies/jinko/jobs), Nov 2026).
  - Earlier Jinko ChatGPT travel app announced live in April 2026, followed by the developer API launch through YC in November 2026 ([Sebastien Texier](https://www.linkedin.com/posts/sebastientexier_jinko-is-live-on-chatgpt-a-small-step-activity-7448439220513161216-wvWa), [Launch YC](https://www.ycombinator.com/launches/WfH-jinko-the-travel-search-booking-api-built-for-agents)).
  - Earlier `jinkoso/jinko-mcp` hotel-booking repository recorded at 413 stars by a registry, with the original repository subsequently unavailable ([MCP Toplist](https://mcptoplist.com/org/jinkoso), [ChatForest audit](https://chatforest.com/reviews/hospitality-hotels-mcp-servers/), Aug 2026).
  - STATION F Future 40 selection and coverage in *Les Echos* ([STATION F](https://stationf.co/news/future40-2025), [Les Echos](https://association.centralesupelec-alumni.com/medias/editor/People_of_CentraleSupelec/Station_F_Future_40.pdf), Nov 2025).
- **Competitors:**
  - **Duffel** ($56M disclosed raised, revenue unknown): embedded checkout for flights, stays and cars, with a $30M Series B led by Index Ventures in October 2019 ([Index Ventures](https://www.indexventures.com/perspectives/duffel-reinvents-infrastructure-behind-online-travel-booking/), [Duffel](https://duffel.com/blog/introducing-duffel-cars)).
  - **Nuitée** ($48M disclosed raised, revenue unknown): hotel distribution, member rates and branded storefronts alongside a travel MCP, with a $48M Series A led by Accel in December 2024 ([Nuitée Connect](https://nuitee.com/connect), [Nuitée funding announcement](https://nuitee.com/insights/Nuitee-raises-USD48M-Series-A-led-by-Accel)).
  - **Etraveli Group** (funding amount undisclosed, €879.8M FY2025 net sales): flight-focused MCP, with a KKR minority investment alongside CVC completed in December 2025 ([Flight MCP release](https://www.mynewsdesk.com/etraveli-group/pressreleases/etraveli-group-opens-its-flight-engine-to-ai-agents-with-new-flight-mcp-3474454), [investment release](https://www.etraveligroup.com/etraveli-group-completes-previously-announced-kkr-investment/), [2025 annual report](https://www.etraveligroup.com/wp-content/uploads/Group-Annual-Report-2025-ENGL-Final.pdf)).
  - **YGO** (at least €10.5M across disclosed rounds, seven-figure ARR): integrates with suppliers’ existing booking systems, with an €8M Series A led by Ventech in October 2026 following a disclosed €2.5M round ([YGO newsroom](https://ygo.ai/newsroom), [Ventech](https://ventechvc.com/stories/ygo-raises-eu8-million-to-build-the-ai-infrastructure-for-the-travel-industry)).
- **Why now:** [Inferred]: Google’s August 2026 rollout of hotel checkout inside AI Mode shows that conversational travel search can now end in a booking with participating suppliers ([Google, Aug 2026](https://blog.google/products-and-platforms/products/search/book-travel-ai-mode/)).

## Founders & Team

- **Kevin Gauthier (Founder/Co-CEO):**
  - Background: Montpellier Business School and IAE Montpellier alumnus, Winglet and Mowgli co-founder, and former Hopper Europe expansion lead after Hopper acquired Mowgli ([YC founder profile](https://www.ycombinator.com/founders/kevin-gauthier)).
  - Twitter/X: @kgauthier15, 332 followers ([X profile mirror, Nov 2026](https://xitter.gq/kgauthier15)).
  - LinkedIn: Headline unavailable in public view, approximately 7K followers ([LinkedIn](https://fr.linkedin.com/in/kevin-gauthier-7b663b87)).
  - GitHub: No public repos found.
  - Business email: No public data found.
- **Sebastien Texier (Founder/Co-CEO):**
  - Background: EM Lyon alumnus, former Air France/KLM partnerships leader and Hopper Europe GM, and co-founder of Winglet and Mowgli, which reached 450K users in six months before its acquisition by Hopper ([LinkedIn](https://fr.linkedin.com/in/sebastientexier), [YC company profile](https://www.ycombinator.com/companies/jinko)).
  - Twitter/X: No public account found.
  - LinkedIn: Headline unavailable in public view, approximately 3K followers ([LinkedIn](https://fr.linkedin.com/in/sebastientexier)).
  - GitHub: No public repos found.
  - Business email: No public data found.
- **Shuai ZHANG (Founder/CTO):**
  - Background: École Polytechnique, Télécom Paris and Wuhan University alumnus, former Winglet and Mowgli CTO, and builder of Hopper’s EMEA engineering team ([YC founder profile](https://www.ycombinator.com/founders/shuai-zhang), [YC company profile](https://www.ycombinator.com/companies/jinko)).
  - Twitter/X: No public account found.
  - LinkedIn: “Building your travel agent | Ex-Hopper & Ex-Dailymotion, ML, Flight Booking” ([FinalScout profile mirror](https://finalscout.com/people/shuai_z)).
  - GitHub: @dyzsasd, `dev-loop` had 5 stars ([GitHub](https://github.com/dyzsasd), [npm publisher profile](https://www.npmjs.com/~dyzsasd)).
  - Business email: No public data found.
- **Co-founder relationship:** The trio worked together at Winglet, launched Mowgli and joined Hopper after its 2021 acquisition ([Les Echos, Nov 2025](https://association.centralesupelec-alumni.com/medias/editor/People_of_CentraleSupelec/Station_F_Future_40.pdf)).
- **Founder-market fit:** The YC-backed team previously built an airline distribution API at Winglet and ran European travel operations and engineering at Hopper, where the co-CEOs report reaching $70M GMV and $9M revenue ([YC company profile](https://www.ycombinator.com/companies/jinko)).

## Key Risks

- **Supplier control:** Jinko’s supplier agreements restrict fare markups, with a separate disclosed service fee available when the customer acts as merchant of record ([Jinko FAQ](https://gojinko.com/faq/)).
- **Search economics:** [Inferred]: Agents that explore many routes per booking can incur excess search charges, while Jinko offers free destination discovery and charges above 1,500 searches per booking ([Jinko pricing](https://gojinko.com/pricing/)).
- **Incumbent substitution:** Etraveli now offers agents direct flight search, booking and servicing through MCP, overlapping Jinko’s flight workflow ([Etraveli Group, Oct 2026](https://www.mynewsdesk.com/etraveli-group/pressreleases/etraveli-group-opens-its-flight-engine-to-ai-agents-with-new-flight-mcp-3474454)).
- **Name ambiguity:** [Inferred]: Searches for Jinko can mix this travel company with solar manufacturer JinkoSolar, making domain and founder names useful identity checks ([YC](https://www.ycombinator.com/companies/jinko), [JinkoSolar investor relations](https://ir.jinkosolar.com/news-releases/news-release-details/jinkosolar-files-2025-annual-report-form-20-f)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | API launch and Wajo/Pally collaborations ([Launch YC](https://www.ycombinator.com/launches/WfH-jinko-the-travel-search-booking-api-built-for-agents), Nov 2026), live search integration ([Exa Connect](https://exa.ai/connect), checked Nov 2026), customer testimonial reporting live bookings in four hours ([Jinko For Entrepreneurs](https://gojinko.com/solutions/entrepreneurs/), undated) |
| Revenue Signal | Published pricing of 1% per flight booking and $0.005 per excess search above 1,500:1, with bespoke enterprise terms ([Jinko pricing](https://gojinko.com/pricing/), Nov 2026). Realized revenue: No public data found |
| Founders | Kevin Gauthier (Co-CEO), Winglet and Mowgli co-founder and Hopper expansion lead. Sebastien Texier (Co-CEO), Air France/KLM and Hopper Europe. Shuai ZHANG (CTO), École Polytechnique and Hopper EMEA engineering ([YC](https://www.ycombinator.com/companies/jinko)) |
| Competitors | Duffel ($56M raised, revenue unknown, embedded checkout) ([Index Ventures](https://www.indexventures.com/perspectives/duffel-reinvents-infrastructure-behind-online-travel-booking/), [Duffel](https://duffel.com/blog/introducing-duffel-cars)); Nuitée ($48M raised, revenue unknown, hotel distribution and storefronts) ([Nuitée funding release](https://nuitee.com/insights/Nuitee-raises-USD48M-Series-A-led-by-Accel), [Nuitée Connect](https://nuitee.com/connect)); Etraveli Group (funding undisclosed, €879.8M FY2025 net sales, flight MCP) ([annual report](https://www.etraveligroup.com/wp-content/uploads/Group-Annual-Report-2025-ENGL-Final.pdf), [Flight MCP release](https://www.mynewsdesk.com/etraveli-group/pressreleases/etraveli-group-opens-its-flight-engine-to-ai-agents-with-new-flight-mcp-3474454)); YGO (at least €10.5M raised, seven-figure ARR, supplier-system integrations) ([YGO](https://ygo.ai/newsroom), [Ventech](https://ventechvc.com/stories/ygo-raises-eu8-million-to-build-the-ai-infrastructure-for-the-travel-industry)) |
| Moat Signals | Company-reported IATA and ARC accreditations and French travel-operator registration ([Jinko FAQ](https://gojinko.com/faq/), [API terms](https://gojinko.com/api-terms/)) |
| Risk Factors | Fare-markup restrictions ([Jinko FAQ](https://gojinko.com/faq/)), excess-search fees ([Jinko pricing](https://gojinko.com/pricing/)), incumbent flight MCP ([Etraveli Group](https://www.mynewsdesk.com/etraveli-group/pressreleases/etraveli-group-opens-its-flight-engine-to-ai-agents-with-new-flight-mcp-3474454)) |
| Founder Reach | Kevin Gauthier: X 332 and LinkedIn approximately 7K ([X mirror](https://xitter.gq/kgauthier15), [LinkedIn](https://fr.linkedin.com/in/kevin-gauthier-7b663b87)); Sebastien Texier: LinkedIn approximately 3K ([LinkedIn](https://fr.linkedin.com/in/sebastientexier)); Shuai ZHANG: `dev-loop` 5 stars ([GitHub](https://github.com/dyzsasd)) |
| Distribution Signals | 1,098 LinkedIn followers, 149 X followers, 55 weekly plugin downloads ([LinkedIn](https://www.linkedin.com/company/jinkotravel), [X mirror](https://nitter.gq/jinkohq), [npm](https://www.npmjs.com/package/%40gojinko/plugin?activeTab=dependencies), Nov 2026) |
| Emails | partnership@gojinko.com for sales and partnerships, support@gojinko.com for support ([Jinko Contact](https://gojinko.com/contact/)), privacy@gojinko.com for privacy requests ([Jinko Privacy Policy](https://gojinko.com/privacy/)) |
