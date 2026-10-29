# The Agentic Data Co.

> Training Data For Speech Models.

| Field | Value |
|-------|-------|
| Website | https://theagenticdatacompany.com |
| YC Page | https://www.ycombinator.com/companies/the-agentic-data-co |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/the-agentic-data-co)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AI, Conversational AI, ML |
| YC Partner | Christopher Golda ([YC directory](https://www.ycombinator.com/companies/the-agentic-data-co)) |
| Emails | matias@theagenticdatacompany.com ([dataset page](https://theagenticdatacompany.com/datasets/tool-calling)); christian@theagenticdatacompany.com ([Hugging Face](https://huggingface.co/TheAgenticDataCompany)); legal@theagenticdatacompany.com ([privacy notice](https://theagenticdatacompany.com/privacy)) |

## The Idea

- **Problem:** Speech-model developers lack conversational training audio capturing interruptions, hesitation, and intent because existing inputs include audiobooks, podcasts, scraped video, and synthetic dialogue, according to the [company website](https://theagenticdatacompany.com/).
- **Approach:** Participants invite people they know to conversations recorded through the company’s app, which captures separate speaker tracks followed by human linguistic review and automated screening ([Open Yap documentation](https://theagenticdatacompany.com/open-yap-1k)).
- **Differentiation:** Against Fisher and Switchboard’s assigned partners and telephone recordings, Open Yap uses self-selected acquaintances and wideband recordings; these are company-described differences rather than independent comparative findings ([dataset documentation](https://github.com/The-Agentic-Data-Co/open-yap-1k)).
- **Business Model:** Open Yap is free for approved commercial and research use, while private datasets require commercial licenses; paid prices and billing units have no public data found ([Open Yap](https://theagenticdatacompany.com/open-yap-1k), [private dataset](https://theagenticdatacompany.com/datasets/tool-calling)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes a Hugging Face sample, GitHub documentation, research publications, and direct dataset-access requests ([Hugging Face](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k), [research page](https://theagenticdatacompany.com/research), [contact page](https://theagenticdatacompany.com/contact)).

## Defensibility

- **Moat today:** Documented assets include an internally operated collection platform and a corpus used to train OpenYap Turn on 1,984 hours across 2,500 conversations, without demonstrated exclusivity ([company research, October 2026](https://theagenticdatacompany.com/research/turn-taking)).
- **Future moat:** [Inferred]: Repeated collection and model evaluations could improve dataset specification and contributor recruitment, but durable cost advantages and customer switching costs remain unverified.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given overlapping collection and licensing offerings from established data providers.
- **Commoditization risk:** David AI also designs, collects, and evaluates audio datasets, while Defined.ai supplies custom training-data collection across modalities, establishing existing substitutes for the underlying service ([David AI](https://www.withdavid.ai/), [Defined.ai](https://defined.ai/solutions/data-collection)).

## Market & Traction

- **Traction signals:**
  - Released corpus: 1,000.245 hours, 1,602 conversations, and 239 speakers ([Open Yap, accessed October 27, 2026](https://theagenticdatacompany.com/open-yap-1k)).
  - Hugging Face sample: 3,022 downloads in the preceding month and 160 likes; these measure the sample repository rather than full-corpus customers ([Hugging Face, October 27, 2026](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k)).
  - GitHub repository: 19 stars ([GitHub, October 27, 2026](https://github.com/The-Agentic-Data-Co/open-yap-1k)).
  - Company LinkedIn: 201 followers ([LinkedIn, October 27, 2026](https://www.linkedin.com/company/theagenticdataco/)).
  - Company-reported OpenYap Turn results: first of 24 entries for end-of-turn prediction and second of 23 for interruption prediction ([company research, leaderboard snapshot October 17, 2026](https://theagenticdatacompany.com/research/turn-taking)).
  - Founder acknowledged existing customers without naming them or disclosing contract values ([Matias’s LinkedIn, retrieved October 2026 via search snippet](https://www.linkedin.com/in/matiasdrejer)).
  - Founder interview published by the Center for Data Innovation ([October 23, 2026, via search snippet](https://datainnovation.org/2026/10/5-qs-with-christian-vestergaard-co-founder-of-the-agentic-data-company/)).
  - YC job listings: 0 ([YC, October 27, 2026](https://www.ycombinator.com/companies/the-agentic-data-co)).
- **Competitors:**
  - **David AI** ($80M across announced rounds, revenue unknown): commercial audio-data research offering overlaps directly; latest announced round was $50M Series B led by Meritech in October 2025 ([company announcement](https://www.withdavid.ai/news/announcing-our-50m-series-b), [earlier rounds on YC](https://www.ycombinator.com/companies/david-ai)).
  - **Defined.ai** ($85M+ raised, revenue unknown): offers collection across audio and other modalities rather than specializing solely in speech; Forge documents a $15M Series B-1 in January 2022 with investors undisclosed ([company overview](https://defined.ai/about-us), [Forge](https://forgeglobal.com/definedcrowd_stock/)).
  - **Appen** (lifetime funding total unavailable; US$230.8M FY2025 revenue): combines speech datasets with annotation and model evaluation, including private audio for Hugging Face’s ASR benchmark; its October–November 2024 equity raising comprised A$50M placement and A$15M shareholder purchase plan ([FY2025 results](https://announcements.asx.com.au/asxpdf/20260225/pdf/06wq7ntr51bhgl.pdf), [audio offering](https://www.appen.com/press-release/appen-hugging-face-open-asr-leaderboard), [financing announcement](https://announcements.asx.com.au/asxpdf/20241107/pdf/06b46lfjn8byx0.pdf)).
- **Why now:** [Inferred]: NVIDIA’s January 2026 PersonaPlex release, which listens and speaks simultaneously while handling interruptions, expands applications requiring conversational timing data ([NVIDIA Research](https://research.nvidia.com/labs/adlr/personaplex/)).

## Founders & Team

- **Christian Vestergaard (Co-Founder):**
  - Background: Designer and engineer who founded Postbuddy; YC lists prior experience at Resights, Nova Founders Capital, and Saxo Bank, while education has no public data found in verified primary profiles ([personal website](https://vestergaardn.com/), [YC profile](https://www.ycombinator.com/founders/christian-vestergaard)).
  - Twitter/X: @CVestergaard_; count not retrievable ([YC-linked account](https://x.com/CVestergaard_)).
  - LinkedIn: Profile identifies The Agentic Data Company (YC F26), with approximately 6K followers ([LinkedIn, October 2026 via search snippet](https://www.linkedin.com/in/chrisvestergaard)).
  - GitHub: @vestergaardn; speech-related repository moshi-tuning has 0 stars ([GitHub, October 27, 2026](https://github.com/vestergaardn/moshi-tuning)).
- **Matias Voldby Drejer (Co-founder):**
  - Background: Previously Head of Growth & Operations at Female Invest and a Copenhagen Business School alumnus; he reports Christian sold his prior company before joining this venture, without buyer or transaction terms ([YC profile](https://www.ycombinator.com/founders/matias-voldby-drejer), [founder post](https://www.linkedin.com/posts/matiasdrejer_2-months-ago-i-quit-my-job-to-build-the-future-activity-7461069275072561152-xI-l)).
  - Twitter/X: @matiasdrejer; count not retrievable ([YC-linked account](https://x.com/matiasdrejer)).
  - LinkedIn: Profile identifies The Agentic Data Company, with approximately 8K followers ([LinkedIn, October 2026 via search snippet](https://www.linkedin.com/in/matiasdrejer)).
  - GitHub: @MatiasVoldbyDrejer; track-me-bro has 2 stars ([GitHub, October 27, 2026](https://github.com/MatiasVoldbyDrejer)).
- **Co-founder relationship:** Both list Nova Founders Capital among prior employers; overlapping employment dates were not established ([Christian’s YC profile](https://www.ycombinator.com/founders/christian-vestergaard), [Matias’s YC profile](https://www.ycombinator.com/founders/matias-voldby-drejer)).
- **Founder-market fit:** [Inferred]: Christian’s engineering and company-building experience and Matias’s growth/operations background relate to collection-platform development and contributor acquisition; YC is a confirmed backer ([founder website](https://vestergaardn.com/), [YC](https://www.ycombinator.com/companies/the-agentic-data-co)).

## Key Risks

- **Transcript accuracy:** Delivered word-level transcripts use Deepgram Nova-3 and are not human-verified, although human reviewers assess language, accent, naturalness, and expressivity ([dataset documentation](https://theagenticdatacompany.com/open-yap-1k)).
- **Privacy screening:** [Inferred]: Automated screening could miss identifying information in natural conversations; disclosed mitigations include explicit consent, pseudonymous identifiers, and exclusion of flagged conversations ([dataset documentation](https://theagenticdatacompany.com/open-yap-1k)).
- **Technical generalization:** The company’s model evaluation does not establish performance on mixed-channel recordings, meetings, or noisy environments ([research limitations](https://theagenticdatacompany.com/research/turn-taking)).
- **Commercial substitution:** [Inferred]: Buyers can source overlapping audio-data services from David AI and Appen, potentially reducing differentiation based solely on dataset availability ([David AI](https://www.withdavid.ai/), [Appen](https://www.appen.com/press-release/appen-hugging-face-open-asr-leaderboard)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 1,000.245 released hours, 1,602 conversations, 239 speakers ([Open Yap, October 2026](https://theagenticdatacompany.com/open-yap-1k)); 3,022 monthly sample downloads ([Hugging Face, October 2026](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k)). |
| Revenue Signal | Free public corpus; private datasets commercially licensed, without published prices or revenue ([company dataset pages, October 2026](https://theagenticdatacompany.com/datasets/tool-calling)). |
| Founders | Christian Vestergaard: Co-Founder, designer/engineer, Postbuddy founder ([personal website](https://vestergaardn.com/)); Matias Voldby Drejer: Co-founder, ex-Female Invest growth/operations, Copenhagen Business School ([YC](https://www.ycombinator.com/founders/matias-voldby-drejer)). |
| Competitors | David AI: $80M announced rounds, revenue unknown, audio specialization ([YC](https://www.ycombinator.com/companies/david-ai)); Defined.ai: $85M+ raised, revenue unknown, multimodal collection ([company](https://defined.ai/about-us)); Appen: US$230.8M FY2025 revenue, broader data services ([ASX results](https://announcements.asx.com.au/asxpdf/20260225/pdf/06wq7ntr51bhgl.pdf)). |
| Moat Signals | Collection platform, licensed corpus, and model-based evaluations ([company research, October 2026](https://theagenticdatacompany.com/research/turn-taking)). |
| Risk Factors | Transcripts not human-verified ([dataset documentation](https://theagenticdatacompany.com/open-yap-1k)); unmeasured deployment environments ([research limitations](https://theagenticdatacompany.com/research/turn-taking)). |
| Founder Reach | Christian: LinkedIn approximately 6K ([LinkedIn via search snippet](https://www.linkedin.com/in/chrisvestergaard)); Matias: LinkedIn approximately 8K ([LinkedIn via search snippet](https://www.linkedin.com/in/matiasdrejer)); retrieved October 2026. |
| Distribution Signals | 19 GitHub stars ([GitHub](https://github.com/The-Agentic-Data-Co/open-yap-1k)); 201 company LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/theagenticdataco/)); October 27, 2026. |
| Emails | matias@theagenticdatacompany.com ([company](https://theagenticdatacompany.com/datasets/tool-calling)); christian@theagenticdatacompany.com ([Hugging Face](https://huggingface.co/TheAgenticDataCompany)); legal@theagenticdatacompany.com ([privacy notice](https://theagenticdatacompany.com/privacy)). |
