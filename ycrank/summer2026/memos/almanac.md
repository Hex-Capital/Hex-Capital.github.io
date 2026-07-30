# Almanac

> Self updating wiki for your coding agents

| Field | Value |
|-------|-------|
| Website | https://codealmanac.com |
| YC Page | https://www.ycombinator.com/companies/almanac |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI |
| YC Partner | Harshita Arora ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/almanac)) |
| Emails | No public data found |

## The Idea

- **Problem:** Engineering teams accumulate architecture decisions, implementation history, and failure context across agent conversations, Slack, issues, and code reviews, forcing developers to repeat explanations when coding agents begin new sessions ([Almanac founder announcement, Jul 2026](https://www.linkedin.com/posts/kushagra-chitkara-2b3226192_big-personal-update-we-got-into-y-combinator-activity-7477238921337171968-UgXS)).
- **Approach:** Almanac extracts context from coding sessions into connected Markdown pages stored in the repository, indexes them locally, and configures agents to search the wiki before making changes ([YC company profile, Jul 2026](https://www.ycombinator.com/companies/almanac); [GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)).
- **Differentiation:** Unlike Cognition’s hosted DeepWiki for public repositories, Almanac stores a Git-reviewable wiki inside the customer’s repository and incorporates Codex and Claude Code conversations, while Swimm couples documentation to code and CI rather than focusing on agent-session memory ([Cognition, May 2025](https://cognition.com/blog/deepwiki); [Almanac GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac); [Swimm, Nov 2021](https://swimm.io/blog/celebrating-swimms-27-6m-series-a)).
- **Business Model:** [Inferred]: The Apache-2.0 CLI can support adoption, while the website’s “Let’s talk” sales call and references to future hosted integrations indicate a possible paid team or hosted product, but no pricing is published ([Almanac website, Jul 2026](https://www.codealmanac.com/); [GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Almanac distributes its free open-source CLI through GitHub and PyPI and solicits engineering-team conversations through a founder booking link ([Almanac website, Jul 2026](https://www.codealmanac.com/); [PyPI, Jul 2026](https://pypi.org/project/codealmanac/0.1.5/)).

## Defensibility

- **Moat today:** The public repository has 743 GitHub stars, 68 forks, and 843 commits, while the product’s repository-local Markdown and Apache-2.0 license reduce proprietary lock-in ([GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)).
- **Future moat:** [Inferred]: A corpus linking code changes, conversations, incidents, and accepted documentation edits could improve retrieval and prioritization, but no proprietary dataset or measured retrieval advantage is publicly documented.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Cognition already offers DeepWiki and Devin Search, Swimm generates continuously synchronized code documentation, and any coding-agent vendor with repository and conversation access could implement overlapping memory or documentation features ([Cognition, May 2025](https://cognition.com/blog/deepwiki); [Swimm, Nov 2021](https://swimm.io/blog/celebrating-swimms-27-6m-series-a)).

## Market & Traction

- **Traction signals:**
  - 743 GitHub stars and 68 forks ([GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)).
  - Five engineering teams—cmux, Agnost AI, Click, Conifer, and chromie.dev—are displayed as users ([Almanac website, Jul 2026](https://www.codealmanac.com/)).
  - The CodeAlmanac package reached version 0.1.5 on PyPI ([PyPI, Jul 2026](https://pypi.org/project/codealmanac/0.1.5/)).
  - Kushagra Chitkara had approximately 1,000 LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/kushagra-chitkara-2b3226192)).
  - Rohan Sharma had 286 LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/rohan-sharma-b6275219b)).
  - Divit Sheth had 1,165 LinkedIn followers on a July 2026 company-related post page ([LinkedIn, Jul 2026](https://www.linkedin.com/posts/divit-sheth_ycombinator-startups-devtools-activity-7477052397857599488-AR_1)).
  - Zero active YC job postings ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/almanac)).
- **Competitors (minimum 3, up to 5):**
  - Cognition/DeepWiki (over $1B raised, $492M run-rate revenue): hosted repository documentation and search integrated with Devin, versus Almanac’s repository-owned Markdown and local agent-session ingestion ([Cognition, May 2026](https://cognition.com/blog/series-d)).
  - Swimm ($33.3M raised, revenue unknown): CI-coupled documentation and stale-document detection, versus Almanac’s wiki retrieval for coding agents and ingestion of agent conversations ([TechCrunch, Nov 2021](https://techcrunch.com/2021/11/08/swimm-nabs-27-6m-series-a-to-include-up-to-date-documentation-in-every-release/)).
  - Mintlify ($67M raised, revenue unknown): external product documentation used by more than 20,000 companies, versus Almanac’s internal codebase context and implementation history ([Mintlify, Apr 2026](https://www.mintlify.com/blog/series-b)).
  - Greptile ($30M raised, revenue unknown): AI code review and repository analysis for more than 2,000 customers, versus Almanac’s persistent agent-readable wiki ([Georgia Tech, Jan 2026](https://www.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level)).
- **Why now:** [Inferred]: The spread of long-running coding-agent workflows creates more implementation decisions inside ephemeral AI conversations, illustrated by Almanac’s founder reporting 12-hour-plus and 16-hour Codex runs in July 2026 ([LinkedIn, Jul 2026](https://www.linkedin.com/in/kushagra-chitkara-2b3226192)).

## Founders & Team

- **Kushagra Chitkara (Founder):**
  - Background: MS in Data Science from Harvard in 2025 and bachelor’s in Electrical Engineering from IIT Kharagpur in 2023 ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/almanac)).
  - Twitter/X: No public account found.
  - LinkedIn: “Allow me to convince you to get a wiki for your codebase” with approximately 1,000 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/kushagra-chitkara-2b3226192)).
  - GitHub: No public repos found.
- **Rohan Sharma (Founder):**
  - Background: MEng in Computational Science from Harvard, BTech from IIT Delhi, and machine-learning research experience at the Vector Institute, CMU, and MIT ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/almanac)).
  - Twitter/X: No public account found.
  - LinkedIn: “Almanac” with 286 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/rohan-sharma-b6275219b)).
  - GitHub: No public repos found.
- **Divit Sheth (Founder):**
  - Background: Former Senior Software Engineer at Arcesium with a BE in Electrical and Electronics Engineering and Data Science minor from BITS Pilani ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/almanac)).
  - Twitter/X: No public account found.
  - LinkedIn: “Currently working as an SSE at Arcesium” on the indexed profile, with 1,165 followers shown on a later company-related post page ([LinkedIn profile](https://in.linkedin.com/in/divit-sheth); [LinkedIn post, Jul 2026](https://www.linkedin.com/posts/divit-sheth_ycombinator-startups-devtools-activity-7477052397857599488-AR_1)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Kushagra Chitkara and Rohan Sharma attended Harvard during 2023–2025 ([LinkedIn: Chitkara](https://www.linkedin.com/in/kushagra-chitkara-2b3226192); [LinkedIn: Sharma](https://www.linkedin.com/in/rohan-sharma-b6275219b)).
- **Founder-market fit:** The founders combine information-retrieval and ML research, software-engineering employment, and data-science education relevant to repository search, agent context extraction, and developer tooling ([YC company profile, Jul 2026](https://www.ycombinator.com/companies/almanac); [LinkedIn: Chitkara](https://www.linkedin.com/in/kushagra-chitkara-2b3226192)).

## Key Risks

- **Platform substitution:** Cognition operates DeepWiki and Devin Search, while coding-agent vendors control the conversation and repository interfaces needed to add native persistent context ([Cognition, May 2025](https://cognition.com/blog/deepwiki)).
- **Platform coverage:** The current public release supports macOS with Codex or Claude Code and requires Python 3.12+, limiting documented compatibility with Windows, Linux, and other agents ([GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)).
- **Knowledge accuracy:** Almanac uses AI agents to create and maintain documentation, so incorrect or stale generated pages could be retrieved as context; the mitigation is plain Markdown reviewed through Git and a daily “garden” process for stale or duplicated knowledge ([GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)).
- **Deployment and privacy:** The product processes source code and agent conversations, while the current implementation mitigates exposure by running wiki work locally and stating that telemetry excludes code, paths, prompts, transcripts, and credentials ([GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)).
- **Name ambiguity:** “Almanac” is also used by unrelated products and a medical retrieval framework, increasing search and brand disambiguation requirements ([Almanac medical paper, Mar 2023](https://arxiv.org/abs/2303.01229)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 743 GitHub stars, 68 forks, and five displayed engineering-team users ([GitHub](https://github.com/AlmanacCode/codealmanac); [company website, Jul 2026](https://www.codealmanac.com/)) |
| Revenue Signal | No public data found |
| Founders | Kushagra Chitkara (Founder): Harvard MS Data Science, IIT Kharagpur Electrical Engineering; Rohan Sharma (Founder): Harvard MEng, IIT Delhi BTech, ML research at Vector Institute/CMU/MIT; Divit Sheth (Founder): former Arcesium Senior Software Engineer, BITS Pilani BE ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/almanac)) |
| Competitors | Cognition/DeepWiki (over $1B raised, $492M run-rate revenue, hosted Devin-integrated wiki); Swimm ($33.3M raised, revenue unknown, CI-coupled documentation); Mintlify ($67M raised, revenue unknown, external product documentation); Greptile ($30M raised, revenue unknown, AI code review) ([Cognition](https://cognition.com/blog/series-d); [TechCrunch](https://techcrunch.com/2021/11/08/swimm-nabs-27-6m-series-a-to-include-up-to-date-documentation-in-every-release/); [Mintlify](https://www.mintlify.com/blog/series-b); [Georgia Tech](https://www.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level)) |
| Moat Signals | 743-star Apache-2.0 repository, repository-owned Markdown, local indexing, and agent-conversation ingestion ([GitHub, Jul 2026](https://github.com/AlmanacCode/codealmanac)) |
| Risk Factors | Native substitution by coding-agent vendors, macOS-only documented support, AI-generated knowledge accuracy ([GitHub](https://github.com/AlmanacCode/codealmanac); [Cognition](https://cognition.com/blog/deepwiki)) |
| Founder Reach | Kushagra Chitkara: LinkedIn approximately 1,000; Rohan Sharma: LinkedIn 286; Divit Sheth: LinkedIn 1,165; Twitter and personal GitHub reach not found ([LinkedIn: Chitkara](https://www.linkedin.com/in/kushagra-chitkara-2b3226192); [LinkedIn: Sharma](https://www.linkedin.com/in/rohan-sharma-b6275219b); [LinkedIn: Sheth](https://www.linkedin.com/posts/divit-sheth_ycombinator-startups-devtools-activity-7477052397857599488-AR_1)) |
| Distribution Signals | 743 GitHub stars, 68 forks, PyPI package version 0.1.5, and zero YC job postings ([GitHub](https://github.com/AlmanacCode/codealmanac); [PyPI](https://pypi.org/project/codealmanac/0.1.5/); [Y Combinator, Jul 2026](https://www.ycombinator.com/companies/almanac)) |
| Emails | No public data found |
