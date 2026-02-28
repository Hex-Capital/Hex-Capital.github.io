# Martini

> Collaborative AI-native filmmaking for professionals

| Field | Value |
|-------|-------|
| Website | https://martini.film |
| YC Page | https://www.ycombinator.com/companies/martini |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, Entertainment, Design Tools, Video, Media |
| YC Partner | Jared Friedman |
| Emails | koh@c47.studio (company website) |

## The Idea

**Problem:** Professional filmmakers and creative agencies wanting to use generative AI video models (Veo 3, Kling, Sora, Runway Gen-4, etc.) are currently forced to interact with these models through individual prompt-and-generate interfaces that lack cinematographic controls, collaborative workflows, and integration with professional post-production tools. The experience is closer to "prompting a chatbot" than "directing a film" — filmmakers cannot control camera position, lens selection, or movement, and teams cannot collaborate in real time. Each model exists in its own silo with separate pricing and UIs.

**Approach:** Martini provides a web-based collaborative workspace — described as "Figma, but for generative film" (VP Land, Feb 2026) — that wraps multiple third-party AI video generation models into a single interface with professional cinematography controls. Users can compose shots with camera position, lens selection, and movement; step into any generated image or video to reframe and reshoot; assemble rough cuts on a built-in timeline; and export XML files compatible with Premiere Pro and DaVinci Resolve. The platform does not train its own video models; instead it is model-agnostic, routing generation requests to whichever model the user selects (martini.film).

**Differentiation:** Unlike Runway, Pika, or Luma AI — which are primarily model companies that build and sell their own generation models — Martini is an orchestration and workflow layer that integrates multiple third-party models. It differentiates on three axes: (1) cinematography-native controls (camera, lens, movement) vs. text-prompt-only interfaces; (2) real-time team collaboration vs. single-user generation; and (3) professional NLE export (Premiere/Resolve XML) vs. standalone clip output. Compared to Katalist, which targets social media creators and influencer content, Martini positions itself toward professional filmmakers, studios, and agencies.

**Business Model:** Freemium SaaS with pay-per-use credits. Credits are denominated in "Olives" (1 Olive = $0.10 USD). Four tiers: Indie (free, $0 monthly credits, public projects only), Pro ($30/month, $30 in credits, private projects, Martini Labs access), Studio ($150/month, $150 in credits, permission controls, team management, project-based billing), and Enterprise (custom pricing, SLAs, custom integrations). All tiers access the same AI model library. Unused credits roll over; additional top-ups available at any time and never expire. Per-model pricing ranges from $0.30/5s clip (Grok Imagine) to $2.25/5s clip (Veo 3.1) (martini.film/pricing).

**TAM/SAM:** The global AI in filmmaking market was estimated at $3.24 billion in 2024, projected to reach $23.54 billion by 2033 at a 25.4% CAGR (Grand View Research, via search snippet). The generative AI in movies sub-segment was valued at $366.9 million in 2023, expected to grow at ~26.5% CAGR to ~$3.7 billion by 2033 (UnivDatos / MarketResearch.biz, via search snippet). No public SAM estimate specific to professional AI video production workflow tools was found.

**GTM / Distribution:** The company has hosted in-person events (Martini Showcase at SF Tech Week; Martini Halloween Workshop via Luma). The website offers a "Request Access" flow and a "Book a Demo" option, suggesting a sales-assisted or waitlist-gated onboarding model targeting professional users. A showcase site at madewithmartini.com highlights customer work. [Inferred]: The most likely distribution path is bottom-up adoption by individual filmmakers and small studios through the free Indie tier, with expansion to agency and enterprise accounts through the Studio/Enterprise tiers and direct sales outreach.

## Defensibility

Martini's current defensibility signals are limited at this stage. Potential moat mechanisms include: (1) workflow lock-in through project data, team configurations, and NLE export integrations that create switching costs; (2) a network effect if the collaboration features lead to teams standardizing on the platform; and (3) proprietary cinematography UX built by professional filmmakers that may be difficult to replicate by non-domain-expert teams.

**Market structure:** The primary structural barrier against incumbents (Runway, Luma, Pika) copying this approach is business model conflict. These companies are vertically integrated model companies whose revenue comes from users generating with *their* models. Building a model-agnostic orchestration layer that routes users to competitors' models would cannibalize their core business. Autodesk (which acquired Wonder Dynamics) could theoretically build similar workflows but would face sales channel conflict between its legacy VFX toolchain and a generative-first product.

**Commoditization risk:** The orchestration/workflow layer sits between commodity inputs (third-party AI models accessible via API) and commodity outputs (video files). Any well-resourced design tool company (Figma, Canva, Adobe) or another startup could build similar camera controls and multi-model routing. The proprietary value lies in the specific UX design informed by professional filmmaking expertise, which is replicable but requires deep domain knowledge.

## Market & Traction

**Traction signals:**
- 200+ films created on the platform, with productions aired as TV commercials, displayed as artwork, and gone viral on social media (martini.film, YC page)
- Gami Orbegoso, described as a Spanish Film Director, listed as a "Martini Creative Partner" (madewithmartini.com)
- Press coverage: VP Land article "Martini Brings a Film Set Mentality to AI Video Production" (Feb 3, 2026)
- G2 listing: The G2 page for "Martini" refers to a different product (Toro Cloud's integration platform), not this company
- Product Hunt: No listing found
- Social media: Instagram @martini.film (follower count not retrievable); LinkedIn company page "martini-film" (follower count not retrievable)
- Discord/Slack community: No public community found
- App store / Chrome extension: Not applicable (web-based platform)
- Twitter/X company account: No dedicated company account found (note: @FilmMartini belongs to Martini Film Studios in Langley, BC, an unrelated physical film studio)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Martini |
|---|---|---|---|
| **Runway** | $860M total ($315M Series E, Feb 2026) at $5.3B valuation (TechCrunch, Feb 2026) | Targeting $300M annualized revenue (TechCrunch, Feb 2026, via search snippet); 422 employees | Vertically integrated model company (Gen-4.5); builds and trains its own generation models. Martini is model-agnostic and workflow-focused |
| **Pika** | $135M total ($80M Series B, Jun 2024) at ~$470M-$900M valuation (VentureBeat / Sacra, via search snippet) | No public data found | Consumer-friendly prompt-to-video interface; Martini targets professional filmmakers with cinematography controls |
| **Luma AI** | >$1B total ($900M Series C, Nov 2025) at ~$4B valuation (CNBC, Nov 2025) | ~$8M annualized revenue as of Dec 2024 (Sacra, via search snippet); 30M+ active users | Builds proprietary "reasoning video model" (Ray3); consumer-oriented Dream Machine app. Martini provides multi-model access and professional workflow |
| **Katalist** | $1.5M seed (Dec 2025) (The SaaS News) | No public data found; 250K+ professionals (katalist.ai, via search snippet) | Targets social media creators, YouTube automation, short-form AI influencer content. Martini targets professional film production with NLE integration |
| **Wonder Dynamics / Autodesk Flow Studio** | Acquired by Autodesk, 2024; prior VC from Founders Fund, Epic Games (BusinessWire, 2023) | No public data found | Focused on VFX character integration into live-action footage rather than end-to-end generative video production |

**Why now:** [Inferred]: Several converging factors opened this opportunity in 2024-2025: (1) Multiple competitive AI video generation models (Sora, Veo, Kling, Runway Gen-4) reached commercial availability within months of each other, creating a multi-model ecosystem that benefits an orchestration layer; (2) video generation quality crossed a threshold where outputs are usable in commercial production (TV commercials, brand content), creating professional demand; (3) generation costs dropped to levels enabling per-second pay-as-you-go pricing accessible to independent filmmakers. The simultaneous availability of multiple capable models is the specific catalyst — when only one model existed, there was less need for a model-agnostic workflow tool.

## Founders & Team

**Koh Terai** — Co-founder
- Japanese designer, artist, cinematographer, and entrepreneur (kohterai.com)
- Education: BS Computer Science, New York University Abu Dhabi; MS Design, Stanford University (class of 2025) (Stanford d.school directory; LinkedIn)
- Cannes-screened cinematographer; credits include *Mosaic* (2017), *The Monarch Mimes* (2018), *Word Count* (2017) (IMDb: nm6535713)
- Featured in Stanford d.school's 2025 Personal Statement Highlights (Stanford d.school)
- Featured in Prototypes for Humanity exhibition (prototypesforhumanity.com)
- Specializes in interaction design, generative AI, cinematography, computational media, light art, and product strategy (kohterai.com)
- Company entity: C47 Inc.
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/kohterai (follower/connection count not retrievable)
- GitHub: github.com/kohterai — 9 repos, 24 followers; pinned repos include OBJ-Parser (16 stars), nyu-vote (7 stars); Arctic Code Vault Contributor
- Instagram: @kohterai

**Long Hoang** — Co-founder
- Originally from Überlingen, Germany; based in Singapore prior to San Francisco (LinkedIn, GitHub)
- Education: The Hong Kong University of Science and Technology (2003–2012) (LinkedIn)
- Languages: German (native), Vietnamese (native), English (native) (LinkedIn)
- Winner, AngelHack Hong Kong (June 2015); Asia Champion, IET/MATE Underwater Robot Challenge (2014, 2015); 3rd Place, Field Robot World Championship (June 2012); 1st Place, SAP "Explore IT" (2011) (LinkedIn)
- Published research on energy storage implementation in Hong Kong (Oct 2013) (LinkedIn)
- Volunteer speaker at Startup Weekend (2016) (LinkedIn)
- GitHub organization membership: @c47-inc, @firevisor (GitHub)
- Twitter/X: No public account found
- LinkedIn: sg.linkedin.com/in/longh — 5K+ followers, 500+ connections; headline: "turns beer into code. martinis into video." (LinkedIn)
- GitHub: github.com/loong — 70 public repos, 257 followers; pinned repos include go-concurrency-exercises (1.9K stars, though this appears to be a fork/contribution), contributions to supabase (98.2K stars), sendgrid-go (1K stars); Arctic Code Vault Contributor

**Co-founder relationship:** Both founders are members of the @c47-inc GitHub organization, which corresponds to C47 Inc., the corporate entity behind Martini. No shared prior employer or university was found in public data — Koh Terai attended NYU Abu Dhabi and Stanford, while Long Hoang attended HKUST.

**Founder-market fit:** Koh Terai brings direct filmmaking domain expertise as a professional cinematographer with Cannes screening credits and Stanford design training, providing the creative vision for how generative AI should integrate into professional film workflows. Long Hoang brings engineering depth with a strong competitive programming and systems background (robotics championships, hackathon wins, Supabase and SendGrid open-source contributions), providing the technical capability to build the platform. The combination of a cinematographer who understands professional film production needs and an engineer with experience building developer tools and infrastructure maps directly to the product's dual value proposition of professional creative controls built on a robust multi-model integration layer.

## Key Risks

**Model provider dependency:** Martini does not train its own models; it depends entirely on third-party AI video models (Veo 3, Kling, Sora, Runway Gen-4, etc.) accessed via API. Any of these providers could restrict API access, raise prices, or build competing workflow features. Runway in particular already offers its own editing interface and could restrict third-party access to Gen-4. Mitigation: multi-model support reduces single-provider risk.

**Brand disambiguation challenge:** "Martini" is a common word shared with the Martini beverage brand (Bacardi), Martini Film Studios (a physical studio in Langley, BC), Martini Media (a digital marketing firm), and Martini by Toro Cloud (an integration platform listed on G2). This creates SEO competition and potential customer confusion. The .film TLD helps but is non-standard.

**Thin value capture in orchestration layer:** As a workflow layer between model providers and end users, Martini's pricing is tied to pass-through model costs (per-second generation fees). If model providers reduce prices or offer free tiers, Martini's margin compresses. If model providers build native collaboration and NLE export features, the orchestration layer's value diminishes. The subscription tiers ($30–$150/month) provide some recurring revenue independent of generation volume.

**Well-funded competitive encirclement:** Runway ($860M raised, $5.3B valuation), Luma AI (>$1B raised, ~$4B valuation), and Pika ($135M raised) have orders-of-magnitude more capital and could build similar workflow/collaboration features as extensions of their model platforms. Adobe, which invested in Runway's Series E and owns Premiere Pro (the primary export target), could build native AI generation into its NLE products.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.24B AI in filmmaking market (Grand View Research, 2024, 25.4% CAGR, via search snippet); $366.9M generative AI in movies sub-segment (UnivDatos, 2023, 26.5% CAGR, via search snippet) |
| SAM | No public data found |
| Traction | 200+ films created on platform (martini.film, YC page); press coverage in VP Land (Feb 2026); Martini Showcase event at SF Tech Week (Partiful) |
| Revenue Signal | Pricing page live: Free / $30/mo / $150/mo / Enterprise tiers + pay-per-use credits at $0.10/Olive (martini.film/pricing). No public revenue figures |
| Founders | Koh Terai (Co-founder): NYU Abu Dhabi CS, Stanford MS Design, Cannes-screened cinematographer. Long Hoang (Co-founder): HKUST, robotics/hackathon champion, open-source contributor (Supabase, SendGrid) |
| Competitors | Runway ($860M raised, targeting $300M ARR, vertically integrated model company); Pika ($135M raised, revenue unknown, consumer prompt-to-video); Luma AI (>$1B raised, ~$8M ARR est., proprietary reasoning model); Katalist ($1.5M seed, revenue unknown, social media creator focus); Wonder Dynamics (acquired by Autodesk, VFX-focused) |
| Moat Signals | Cinematographer-founded domain expertise in UX; model-agnostic positioning avoids single-model lock-in; collaboration + NLE export create workflow switching costs |
| Risk Factors | Model provider dependency (no proprietary models), brand disambiguation ("Martini" is a common word), well-funded competitors could replicate workflow features |
| Founder Reach | Koh Terai: Twitter not found, LinkedIn handle kohterai (count not retrievable), GitHub 24 followers / 16 stars (OBJ-Parser). Long Hoang: Twitter not found, LinkedIn 5K+ followers, GitHub 257 followers / pinned repos include go-concurrency-exercises (1.9K stars) |
| Distribution Signals | VP Land press coverage (Feb 2026); SF Tech Week showcase event; madewithmartini.com showcase site; No Product Hunt listing found |
| Emails | koh@c47.studio (company website) |
