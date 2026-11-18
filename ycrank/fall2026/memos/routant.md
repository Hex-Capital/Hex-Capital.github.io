# Routant

> Last mile deployment and connectivity for Agents as a Service

| Field | Value |
|-------|-------|
| Website | https://routant.ai/ |
| YC Page | https://www.ycombinator.com/companies/routant |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/routant)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Cybersecurity, AI |
| YC Partner | Charlie Warren ([YC directory](https://www.ycombinator.com/companies/routant)) |
| Emails | aditya@routant.ai (Aditya Mehta, [Company Launch Tracker, Nov 11, 2026](https://companylaunchtracker.substack.com/p/company-launch-tracker-124)), support@alphadilabs.ai (company support and privacy inquiries, [Routant Privacy Policy](https://routant.ai/privacy)) |

## The Idea

- **Problem:** Software vendors deploying agents inside customer systems assemble VPNs, custom integrations, credentials, and approval workflows for each environment, which can give agents access beyond what their tasks require ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhP-routant-let-ai-agents-into-your-apps-on-your-rules)).
- **Approach:** Vendors connect through one Model Context Protocol (MCP) endpoint, customers connect private or on-premises systems through outbound-only gateways, and Routant enforces each customer’s permissions, pauses designated actions for human approval, and logs requests and decisions ([Routant product site](https://routant.ai/)).
- **Differentiation:** Routant focuses on customer-operated approvals and outbound connections for vendors serving multiple enterprises, while Arcade.dev offers prebuilt tools and Cisco Duo approvals, Keycard issues task-scoped credentials, and Pomerium adds isolated agent execution to its access gateway ([Routant product site](https://routant.ai/), [Cisco Duo](https://duo.com/blog/duo-brings-identity-and-authorization-across-ai-agent-gateways), [Keycard](https://www.keycard.ai/), [Pomerium](https://www.pomerium.com/agentic-access-management)).
- **Business Model:** [Inferred]: The demo-led sales path and reusable vendor integration suggest a managed software subscription ([Routant product site](https://routant.ai/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment (the broader global agentic AI security market is forecast at $1.8B in 2026, with 38.9% CAGR through 2033, per [Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report)).
- **GTM / Distribution:** Routant solicits introductions to security leaders deploying agents in production and directs CTOs and CISOs to book a demo ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhP-routant-let-ai-agents-into-your-apps-on-your-rules), [Routant product site](https://routant.ai/)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Customer-specific policies, gateway deployments, and approval workflows could create migration work as installations accumulate, though public sources do not quantify deployments or switching costs ([Routant product site](https://routant.ai/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** AWS already offers managed private connectivity and centralized governance for MCP tools through Bedrock AgentCore Gateway, giving AWS customers an overlapping option within their cloud environment ([AWS, Apr and Jun 2026](https://aws.amazon.com/blogs/machine-learning/extending-mcp-support-for-amazon-bedrock-agentcore-gateway-2/)).

## Market & Traction

- **Traction signals:**
  - Public launch with 9 votes displayed ([Launch YC, Nov 17, 2026](https://www.ycombinator.com/launches/WhP-routant-let-ai-agents-into-your-apps-on-your-rules)).
  - Launch coverage in Reveneau, which labels its article AI-written, and in Drake Dukes’s Company Launch Tracker ([Reveneau, Nov 3, 2026](https://reveneau.com/ainews/routant-yc-launch-selective-ai-agent-access-mcp-approvals), [Company Launch Tracker, Nov 11, 2026](https://companylaunchtracker.substack.com/p/company-launch-tracker-124)).
  - 29 comments on YC’s LinkedIn post about Routant ([YC on LinkedIn, Nov 17, 2026](https://www.linkedin.com/posts/y-combinator_routant-yc-f26-is-building-the-zero-trust-activity-7523157094980808705-UvIn)).
  - Routant company LinkedIn page live, follower count not retrievable ([LinkedIn, Nov 17, 2026](https://www.linkedin.com/company/routant)).
  - 0 job postings on YC ([YC Jobs, Nov 17, 2026](https://www.ycombinator.com/companies/routant/jobs)).
  - YC backing is confirmed, while Dealroom lists a $125K seed entry in Sep 2026 and CB Insights reports $500K as a convertible note on Nov 1, 2026. YC’s published standard deal totals $500K across a $125K SAFE and a $375K SAFE ([Routant](https://routant.ai/), [Dealroom](https://app.dealroom.co/companies/routant), [CB Insights](https://www.cbinsights.com/company/routant/financials), [YC Standard Deal](https://www.ycombinator.com/deal/)).
- **Competitors:**
  - **Arcade.dev** ($72M disclosed through Jun 2026, revenue unknown): An agent tool runtime with prebuilt integrations and Cisco Duo approvals for sensitive calls, funded by a $60M Series A led by SYN Ventures in Jun 2026 and an undisclosed Cisco Investments extension in Sep 2026 ([Arcade.dev Series A](https://www.arcade.dev/blog/arcade-series-a/), [Arcade.dev extension](https://www.arcade.dev/blog/cisco-investments-backs-arcade/), [Cisco Duo](https://duo.com/blog/duo-brings-identity-and-authorization-across-ai-agent-gateways)).
  - **Keycard** ($38M raised, revenue unknown): Issues just-in-time, scoped credentials based on agent identity and request context, with a $30M Series A led by Acrew Capital in Oct 2025 ([boldstart ventures](https://boldstart.vc/companies/keycard/), [Keycard](https://www.keycard.ai/)).
  - **Pomerium** ($18M raised, revenue unknown): Combines instance-level agent sandboxing with inbound and outbound access policies and tool-call logging, with a $13.75M Series A led by Benchmark in Jun 2024 ([SecurityWeek, Jun 2024](https://www.securityweek.com/access-management-startup-pomerium-raises-13-75-million/), [Pomerium](https://www.pomerium.com/agentic-access-management)).
- **Why now:** [Inferred]: Anthropic’s Dec 2025 donation of MCP to the Linux Foundation’s Agentic AI Foundation gave vendors a shared protocol under neutral governance, making a single agent-to-tool interface more practical across vendors ([Anthropic, Dec 2025](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), [Routant product site](https://routant.ai/)).

## Founders & Team

- **Aditya Mehta (Founder & CEO):** aditya@routant.ai ([Routant About](https://routant.ai/about), [Company Launch Tracker, Nov 11, 2026](https://companylaunchtracker.substack.com/p/company-launch-tracker-124))
  - **Background:** Mehta studied computer science and conducted machine-learning research at Princeton, built pricing models as an IMC quantitative options trader, and interned in data science at Cequence Security ([Routant About](https://routant.ai/about), [FINRA BrokerCheck](https://files.brokercheck.finra.org/individual/individual_7976455.pdf)).
  - **Twitter/X:** No public account found.
  - **LinkedIn:** Current headline not retrievable, with a cached result headed “Aditya Mehta - Pear VC” showing 158 followers and 147 connections ([LinkedIn, via search snippet](https://www.linkedin.com/in/aditya-mehta-02)).
  - **GitHub:** No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Mehta traces Routant’s emphasis on bounded authority, approvals, and audit trails to his experience with automated trading systems at IMC, and Routant identifies YC as its backer ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhP-routant-let-ai-agents-into-your-apps-on-your-rules), [Routant product site](https://routant.ai/)).

## Key Risks

- **Customer-side rollout:** [Inferred]: Vendor integration alone cannot bring a deployment live because each customer chooses which systems to connect and sets its access policies, with an outbound-only gateway reducing the need for network changes ([Routant product site](https://routant.ai/)).
- **Gateway availability:** [Inferred]: A gateway outage could interrupt agent workflows because tool requests pass through Routant, whose public terms provide service on an as-available basis and allow separate written commitments ([Routant product site](https://routant.ai/), [Routant Terms of Service, Oct 2026](https://routant.ai/terms)).
- **Approval delays:** [Inferred]: Sensitive workflows can stall while awaiting a reviewer, with customer-configured policies allowing routine actions to continue without an approval step ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhP-routant-let-ai-agents-into-your-apps-on-your-rules)).
- **Cloud substitution:** [Inferred]: AWS customers can adopt native MCP policy enforcement and private connectivity through Bedrock AgentCore, while Routant supports vendor agents on their existing runtimes and outbound connections to customer-managed environments ([AWS, Apr and Jun 2026](https://aws.amazon.com/blogs/machine-learning/configuring-amazon-bedrock-agentcore-gateway-for-secure-access-to-private-resources/), [Routant product site](https://routant.ai/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 9 launch votes ([Launch YC, Nov 17, 2026](https://www.ycombinator.com/launches/WhP-routant-let-ai-agents-into-your-apps-on-your-rules)), 29 comments ([YC on LinkedIn, Nov 17, 2026](https://www.linkedin.com/posts/y-combinator_routant-yc-f26-is-building-the-zero-trust-activity-7523157094980808705-UvIn)), 0 YC job postings ([YC Jobs, Nov 17, 2026](https://www.ycombinator.com/companies/routant/jobs)), launch coverage ([Reveneau, Nov 3, 2026](https://reveneau.com/ainews/routant-yc-launch-selective-ai-agent-access-mcp-approvals), [Company Launch Tracker, Nov 11, 2026](https://companylaunchtracker.substack.com/p/company-launch-tracker-124)) |
| Revenue Signal | No public data found |
| Founders | Aditya Mehta (Founder & CEO), Princeton computer science and ML research, IMC quantitative options trading ([Routant About](https://routant.ai/about)). Routant’s LinkedIn page lists 1 employee ([LinkedIn, Nov 17, 2026](https://www.linkedin.com/company/routant)). |
| Competitors | Arcade.dev ($72M through Jun 2026, revenue unknown, tool runtime and Duo approvals) ([Arcade.dev](https://www.arcade.dev/blog/arcade-series-a/), [Cisco Duo](https://duo.com/blog/duo-brings-identity-and-authorization-across-ai-agent-gateways)), Keycard ($38M raised, revenue unknown, scoped credentials) ([boldstart ventures](https://boldstart.vc/companies/keycard/), [Keycard](https://www.keycard.ai/)), Pomerium ($18M raised, revenue unknown, agent sandboxing) ([SecurityWeek](https://www.securityweek.com/access-management-startup-pomerium-raises-13-75-million/), [Pomerium](https://www.pomerium.com/agentic-access-management)) |
| Moat Signals | No public data found |
| Risk Factors | Customer-managed system onboarding ([Routant product site](https://routant.ai/)), gateway availability under public terms ([Routant Terms of Service](https://routant.ai/terms)), overlap with native AWS gateway controls ([AWS](https://aws.amazon.com/blogs/machine-learning/extending-mcp-support-for-amazon-bedrock-agentcore-gateway-2/)) |
| Founder Reach | Aditya Mehta, 158 LinkedIn followers and 147 connections in a cached result ([LinkedIn, via search snippet](https://www.linkedin.com/in/aditya-mehta-02)) |
| Distribution Signals | YC launch and demo video ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhP-routant-let-ai-agents-into-your-apps-on-your-rules)), direct demo bookings ([Routant product site](https://routant.ai/)), company LinkedIn page with follower count not retrievable ([LinkedIn, Nov 2026](https://www.linkedin.com/company/routant)) |
| Emails | aditya@routant.ai (Aditya Mehta, [Company Launch Tracker, Nov 11, 2026](https://companylaunchtracker.substack.com/p/company-launch-tracker-124)), support@alphadilabs.ai (company support and privacy inquiries, [Routant Privacy Policy](https://routant.ai/privacy)) |
