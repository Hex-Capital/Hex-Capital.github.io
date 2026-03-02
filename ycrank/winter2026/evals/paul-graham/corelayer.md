# Corelayer -- Paul Graham Evaluation

The first thing I notice about Corelayer is the origin of the idea. Both founders built data infrastructure at Goldman Sachs, debugging systems that processed hundreds of billions of rows daily. They didn't sit down and brainstorm "what's hot in AI" -- they were the on-call engineers. They were the ones getting paged at 3am to figure out why a data pipeline was producing bad values in a production system at a bank. The idea grew from the job, not from a whiteboard. That passes my organic test cleanly.

The schlep here is also genuine, and it's the thing that makes this company more interesting than the dozen other AI debugging startups I've seen. Most founders building AI agents for incident response target tech companies -- that's the easy version. Corelayer is targeting financial services, healthcare, and insurance, where production data is regulated, access is restricted, and compliance requirements are brutal. They got SOC 2 Type I certified as a two-person team. They built confidential compute and on-prem deployment options. That's tedious, unglamorous work that most founders instinctively avoid. When I see a pre-seed company that has already done the compliance paperwork, I know they understand their customer deeply enough to know it's table stakes, not a feature to add later. The regulated-industry schlep is a real barrier -- not because the technology is hard, but because the process is painful. That's exactly the kind of protection I described in "Schlep Blindness."

But here's where my enthusiasm hits a wall: this problem isn't hiding in plain sight. It's hiding in bright fluorescent light. incident.io raised $62 million in April 2025 explicitly to build AI agents that resolve incidents. PagerDuty and Datadog -- companies with massive existing customer bases and hundreds of millions in revenue -- are all adding AI debugging capabilities. When a space has this much funded activity from well-capitalized incumbents, the schlep advantage needs to be enormous to matter. The regulated-industry angle adds a meaningful schlep layer that generic incident tools may avoid, but I'm not sure it's enough. The Stripe analogy would hold if nobody else was building payment infrastructure -- but in this case, well-funded companies are already converging on the same destination, just from different starting points.

The bull case is that the data-layer focus is a genuinely different wedge. Datadog watches your servers; PagerDuty pages your engineers; incident.io coordinates your response. But none of them inspect your actual data -- the rows, the pipeline outputs, the values that are wrong. If you've worked at a bank and your pipeline produced incorrect risk calculations at 2am, you know that the problem isn't the server going down, it's the data going bad. That's a different problem requiring different access patterns, different security guarantees, and different domain expertise. If Corelayer can own "AI that debugs your data" rather than "AI that debugs your infrastructure," that's a wedge that incumbents might genuinely struggle to replicate because it requires the compliance posture and data access that their existing architectures weren't built for. The Goldman Sachs network also gives them a plausible path to first design partners in exactly the right industry.

What concerns me most is the gap between the ambition and the team size. Two people selling to Fortune 100 financial institutions. These are organizations where procurement takes six months, security reviews take three months, and pilot programs take another six months. A two-person startup can die of starvation waiting for a bank to sign a contract. I see no evidence yet of any customer traction -- no named design partners, no revenue signals, no waitlist, nothing. The product launched February 9, 2026, so the absence of traction data is expected. But at this stage, even one named pilot customer at a financial institution would significantly change my calculus. Without it, I'm evaluating the potential, not the pull.

The founders have the right background and the idea has genuine organic roots. But the competitive landscape is too crowded and the sales motion too heavy for me to write a check based on potential alone. I'd want to see evidence that someone at a bank actually let this system touch their production data -- because that's the moment when the schlep advantage becomes real, and right now it's theoretical.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 22/30 |
| Relentlessly Resourceful Founders | 12/25 |
| Evidence of Wanting: Demonstrated User Pull | 7/20 |
| Technical Hacker Founders Who Build | 8/15 |
| Growth Trajectory and Default Alive Economics | 4/10 |
| **Total** | **53/100** |

**Total Score: 53/100** (Neutral)
