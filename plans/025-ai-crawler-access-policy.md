# Plan 025: Separate search/user agents from AI training crawlers in the access policy

> **Executor instructions**: This is a policy decision, not a regex cleanup. Confirm bot identities against current first-party documentation before changing access. If web access is not allowed for that verification, stop and report. Update plan 025 in `plans/README.md` when the decision is implemented and documented.
>
> **Drift check (run first)**: `git diff --stat 1261047..HEAD -- vercel.json app/robots.ts 'content/docs/(root)/llms-txt.mdx' README.md`

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: MED
- **Depends on**: none
- **Category**: direction / SEO / infrastructure
- **Planned at**: commit `1261047`, 2026-08-26

## Why this matters

`vercel.json` currently groups training crawlers, AI search crawlers, and user-triggered fetchers into one deny rule for `/docs` and `/view`. That can save bandwidth, but it can also prevent Shark UI docs from appearing in AI search or being opened when a user asks an assistant to read them—despite the site advertising LLM-friendly content. The project needs an intentional, documented distinction.

## Current state

- `vercel.json` has a `/(docs|view)` rule whose user-agent regex includes names such as `GPTBot`, `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `Claude-Web`, `PerplexityBot`, and `Perplexity-User`.
- `content/docs/(root)/llms-txt.mdx` promotes `/llms.txt` as an AI-oriented surface.
- `/view` is a preview/iframe route and should remain `noindex`; it is not a search landing page.
- Search-engine `robots.txt` blocking for `/view` is not recommended: if Google/Bing cannot crawl it, they cannot see its page-level `noindex`, and the URL can linger as “indexed without content.” Keeping it out of the sitemap and emitting `noindex` is the correct search-indexing control.

## Commands you will need

| Purpose | Command | Expected on success |
|---|---|---|
| Inspect current rules | `rg -n 'GPTBot|ChatGPT-User|OAI-SearchBot|Claude|Perplexity|docs|view' vercel.json app/robots.ts` | every current rule is visible for classification |
| JSON syntax | `node -e 'JSON.parse(require("fs").readFileSync("vercel.json","utf8")); console.log("valid")'` | prints `valid`, exits 0 |
| `/view` search policy | `rg -n 'view' app/robots.ts app/sitemap.ts` | no new blanket search-engine disallow or sitemap entry |

## Scope

**In scope**: `vercel.json`, `app/robots.ts` only if a bot-specific policy truly belongs there, `content/docs/(root)/llms-txt.mdx`, a concise policy note in an existing appropriate repo doc or `docs/decisions/ai-crawler-policy.md`, `plans/README.md`.

**Out of scope**: allowing `/view` into search, removing its `noindex`, changing authentication/rate limits, claiming all AI agents honor robots, or categorizing bots from memory.

## Git workflow

Use the current branch and dirty working tree. Do not stash, switch branches, commit, push, or open a PR unless asked. No deployment/push is authorized by this plan.

## Decision to obtain

Ask the operator to choose/confirm this recommended policy after presenting verified current bot semantics:

- Allow mainstream search crawlers to read `/view` only far enough to observe `noindex`; keep it out of the sitemap.
- Allow user-triggered fetchers and AI search/index agents on public `/docs` and LLM text endpoints when discoverability is desired.
- Continue denying model-training-only crawlers if the operator does not want training reuse.
- Edge-deny expensive non-search bots on `/view` if preview rendering cost is the concern; do not express that as a blanket `robots.txt` disallow for search engines.

## Steps

### Step 1: Verify current bot semantics from primary sources

Use official vendor crawler documentation only. Record the access purpose and applicable robots/header behavior for every user-agent currently in the regex. Clearly mark ambiguous/deprecated agents. Do not rely on blog posts or remembered classifications.

**Verify**: every regex token has a cited first-party classification or is removed/held pending evidence.

### Step 2: Get the operator’s policy decision

Present a small matrix: agent, purpose (training/search/user-triggered), current access, proposed access, tradeoff. Obtain explicit approval before editing `vercel.json`.

### Step 3: Implement narrowly

Split the edge rules by purpose rather than maintaining one combined deny expression. Keep public docs aligned with the approved policy. Keep `/view` absent from sitemap and page-level `noindex`; do not add `/view` to a blanket Google/Bing robots disallow. Update the LLM docs/policy note so advertised access matches reality.

**Verify**: parse `vercel.json` as JSON; then inspect every user-agent against the approved matrix. There must be no accidental allow/deny caused by substring overlap.

### Step 4: Validate deployment configuration

Run the repository’s available Vercel/config validation if one exists; otherwise `node -e 'JSON.parse(require("fs").readFileSync("vercel.json","utf8")); console.log("valid")'` → `valid`. Network requests against production are outside scope unless the operator explicitly asks.

## Test plan

- JSON parse must pass.
- Build a local table of representative user-agent strings and evaluate them against the final regex; each result must equal the operator-approved matrix.
- Confirm `/docs`, `/llms.txt`, and `/view` are treated separately as approved.
- Do not probe production or third-party bots without explicit authorization.

## Done criteria

- [ ] Every listed bot has a verified, documented purpose.
- [ ] Operator approved the allow/deny matrix.
- [ ] Training, search, and user-triggered agents are no longer conflated.
- [ ] `/view` remains out of sitemap and page-level `noindex`; no blanket search-engine robots block was added.
- [ ] LLM-facing documentation matches deployed access policy.
- [ ] `vercel.json` parses; README row updated.

## STOP conditions

- Official crawler documentation cannot be accessed or is ambiguous.
- Operator has not chosen the training/search policy.
- The requested behavior requires a paid firewall/rate-limit product not already configured.
- A change would make `/view` indexable.

## Maintenance notes

Crawler names and purposes change. Re-verify first-party docs whenever the regex is edited; treat this as an access policy with an owner, not a one-time SEO tweak.
