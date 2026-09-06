# Design Package: Ahmad Abuadas, personal site

Tier 1, single journey. Written before generation. Every line of copy below ships verbatim.

## 1. The brand premise

**Reconciled.** One word from Ahmad's own working world: reconciliation is the process he ran at Citi across markets, and it is also what his whole career does. Two sides that must agree. Raw data and the number a bank signs off on. The claim on a resume and the proof behind it. The pipeline and the SLA. Every section teaches that one idea, the interactive moment makes the visitor perform it, and the closing line lands on it. A section that does not serve reconciliation does not belong on the page.

## 2. The palette as CSS tokens

Sampled from the footage's world: cool white-blue sparks falling through deep ink indigo, resolving to a bright horizon. The accent is an electric magenta, deliberately NOT the acid green or warm amber that dark AI sites default to.

```css
:root{
  --canvas:#0A0B14;          /* deep ink indigo, never pure black */
  --canvas-2:#0E1020;        /* the second ground for alternating sections */
  --panel:#141830;           /* cards and raised surfaces */
  --line:#242A48;            /* structural hairlines */
  --line-strong:#3A4270;     /* interactive borders, must clear 3:1 */
  --accent:#FF2E88;          /* electric magenta: the CTA and rare emphasis */
  --accent-hover:#FF5CA0;
  --accent-muted:rgba(255,46,136,.18);  /* borders, glows, particles */
  --signal:#8FD8FF;          /* the footage's cool spark light, for mono labels */
  --text-primary:#EDEFF8;
  --text-secondary:#A2A9C8;
}
```

## 3. The type trio

- **Display:** Sora, weights 600 and 700. Geometric, wide aperture, sharp. Not Inter, not Roboto.
- **Body:** Manrope, weights 400 and 500. Quiet, high legibility.
- **Mono:** JetBrains Mono, weights 400 and 500. The engineer's own world, used for kickers, readouts, and stack labels.

## 4. The band map

Hero height 620vh, so the scroll range is 520vh and each band gets a 130vh plateau. This is a deliberate deviation from the 400vh Tier 1 default: four beats need the room, and 400vh would give each beat 75vh, below the readable floor.

| Band | Range (starting point) | Footage moment | Copy (verbatim) | Entrance |
|---|---|---|---|---|
| 1 | 0.00 to 0.22 | Sparks tumbling, chaotic, filling the shaft | "Ahmad Abuadas" / "Data and AI engineer. Fourteen years in software, the last seven at big data scale." | Scatter, echoing the tumbling sparks |
| 2 | 0.24 to 0.48 | Sparks begin sorting into parallel vertical lanes | "Data arrives as noise." | Grid snap-align, echoing the sort into lanes |
| 3 | 0.50 to 0.74 | Lanes converge and accelerate downward | "It leaves as evidence." | Drift-down, echoing the fall |
| 4 | 0.76 to 1.00 | Everything settles onto one bright calm horizon | "Reconciled." / "Snowflake, Spark, and AI systems that hold up in production at a global bank." / CTA row | Word-by-word rise into a staged settle |

Bands 2 and 3 are a designed pair, a deliberate brand device. They stay through the copy sweep.

## 5. The static-hero copy block

For phones and reduced motion, composed over the ending frame:

- Headline: "Ahmad Abuadas"
- Subline: "Data and AI engineer. I make two sides agree: the raw data, and the number a bank will sign off on."
- CTA: "Start a conversation"

## 6. The below-fold outline

Every section funnels to `#contact`.

1. **The claim strip.** Four true facts in mono, no invented metrics: `14 YEARS IN SOFTWARE` / `7 YEARS IN BIG DATA` / `HIVE TO SNOWFLAKE, MIGRATED` / `PRODUCTION ON-CALL AT A GLOBAL BANK`.
2. **What I actually do.** Three equal cards, each built from the buyers' own recurring language, each with its own image from the approved footage.
   - "Pipelines that hold." Body: "Jobs break at the worst hour. I build the scheduling, the alerting, the backfills, and the late arriving data handling so the break is caught before anyone downstream feels it. Autosys, Jenkins, RLM, Airflow, and a lot of on-call."
   - "Numbers people trust." Body: "Reconciliation across markets and regions at Citi. Data quality checks and unit tests in dbt and SQL. The grain is defined, the keys are known, and the report matches the source."
   - "AI that ships." Body: "Most AI on a resume is one demo. Mine runs: LangChain agents that plan and use tools, retrieval over vector databases, and OpenAI workflows wired into real data platforms with monitoring on the output."
3. **The reconciliation moment** (the one interactive element, lives in its own section). Two columns of mismatched figures. Press and hold; they slide into alignment, the difference falls to zero, and completing it reveals the line: "This is the whole job. Two sides, made to agree."
4. **The work.** Three real projects: the AML data science platform, the Hive to Snowflake migration, the LangChain and OpenAI agent work. Each with its true stack.
5. **Where it happened.** Career timeline: Citi Group (Sep 2022 to now), Kelvin Inc (2022), Johnson & Johnson Vision (2019 to 2022), Fibertex Non-Woven (2016 to 2018), Public Works and Housing, Jordan (2012 to 2016). Real company logos already in the repo.
6. **The stack.** Grouped in mono labels: languages, big data, cloud, warehouse, orchestration, AI, reporting.
7. **Study.** MS FinTech, University of South Florida (2026 to 2027). Master's in Information Technology, Walden University (2018 to 2020). Bachelor's in Mechatronics Engineering, Al Balqa University, Jordan.
8. **Straight answers** (FAQ, answering the exact objections found in research):
   - "Is this another AI resume?" / "Fair question. Three in five people claiming LLM work shipped one demo. Mine is agent workflows and retrieval running against production data platforms at a bank, with monitoring on what comes out. Ask me about the failure modes and you will get a real answer."
   - "Can you work in a regulated environment?" / "That is where I have spent the last few years. Anti money laundering systems and financial reconciliation at Citi, and medical device data at Johnson & Johnson. Audit trails and validation are normal to me, not overhead."
   - "What happens when a pipeline breaks at 3am?" / "I get paged and I fix it, then I fix the reason it woke anyone. Most of my production work is the unglamorous half: alerting, backfills, late arriving data, and the runbook."
   - "Can you lead a migration without losing rows?" / "I did the Hive to Snowflake move end to end. Schema conversion, pipeline refactoring, performance tuning, and validation on both sides until the counts matched."
   - "Are you open to contract work?" / "Yes. Full time roles first, and project work when the problem is a good fit. Say which one you need in the form and I will answer honestly."
9. **The form.** Section id `contact`.
   - Labels: "Your name", "Email", "What do you need?"
   - The third field is a select: "A role I am hiring for", "A project or a broken pipeline", "Something else".
   - Textarea placeholder: "A sentence is enough."
   - Button: "Send it"
   - Success state: "Sent. I will reply from ahmadabuadas2013@gmail.com, usually within a day."
   - Handling: chosen with the user in the build. Default is mailto so the message reaches a real inbox.
10. **Footer.** Contact details, LinkedIn, GitHub, resume PDF link, and one quiet honest line: the hero imagery is generated abstract art, not a photograph of real systems.

## 7. The vector layer plan

- **The reconciliation bar (the signature element).** An SVG divider between every below-fold section: two horizontal halves offset from each other, which slide into alignment and lock as the divider enters the viewport. Same element every time, so the page's one idea repeats structurally. Under reduced motion it renders already aligned.
- **The lane lattice.** A drawn SVG of thin vertical lanes behind the claim strip and the stack section, echoing the footage's sorted lanes. Draws itself on scroll with `stroke-dashoffset`.
- **Whisper particles.** A single fixed background layer of slow drifting specks in `--signal` at very low opacity, cycling over 90 seconds, so the whole page sits in one environment.
- All of it honors reduced motion: final states shown, drives stopped.

## 8. The engineering list

The full standard from `scrub-pipeline.md`, no half-remembering: Blob fetch with the loading ring and a re-armed watchdog, dt-normalized lerp in a rAF loop that rests, gated seeks with the error escape, delta-gated DOM writes, band pacing validated by the flick test, the four-layer legibility system audited against worst frames at 3.5:1, the five static-hero gates kept live with change listeners in both CSS and JS, complete-without-video, and the quality floor. Plus the whole-site-animated standard: entrances everywhere, one living element per section at whisper level, everything eased, nothing snapping.

## 9. The copy gate line

Every viewer-facing line above ships verbatim. The built page must pass the Phase 9 grep gate (zero em dashes, zero stock words) and the body-copy sweep for AI tells before anyone sees it. The designed pair in bands 2 and 3 is a deliberate brand device and stays.
