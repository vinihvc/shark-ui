# Plan 043: Resolve radio-arrow navigation ownership

> **Executor instructions**: Work only in the current checkout. Do not create or switch branches, do not stash, commit, push, or open a PR. Preserve unrelated dirty changes.
>
> **Drift check**: `git diff --stat 2310c90..HEAD -- registry/react/components/questionnaire.tsx content/docs/components/questionnaire.mdx registry/react/examples/questionnaire public/r/questionnaire.json` plus unstaged diff review must match the excerpts below; otherwise STOP.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: MED
- **Depends on**: `plans/041-questionnaire-interaction-test-baseline.md`
- **Category**: bug
- **Planned at**: commit `2310c90`, 2026-08-31

## Why this matters

The Questionnaire registers `ArrowRight` as “next question” whenever the active step is answered. With focus in an Ark `RadioGroup`, this prevents the conventional horizontal radio navigation and can move the user away from the question instead. The component must give directional keys one unambiguous owner and teach its final behavior in docs.

## Current state

- `registry/react/components/questionnaire.tsx:446–483` registers `arrowright` and `arrowleft` for step navigation.
- `registry/react/components/questionnaire.tsx:486–495` separately handles vertical arrows for answer focus.
- `registry/react/components/questionnaire.tsx:1231–1243` advertises `ArrowRight Enter` on the Next button.
- `registry/react/components/radio-group.tsx:12–70` delegates radio behavior to Ark UI. Preserve its native keyboard expectations.

## Commands

| Purpose | Command | Expected result |
|---|---|---|
| Focused tests | `pnpm test -- questionnaire` | do **not** run without separate operator authorization |
| Lint | `pnpm exec ultracite check registry/react/components/questionnaire.tsx content/docs/components/questionnaire.mdx <questionnaire-test-path>` | exit 0 |
| Registry | `pnpm registry:build` | exit 0 |
| Whitespace | `git diff --check` | no output |

## Scope

**In scope:** Questionnaire source, its focused test, questionnaire docs, and generated registry JSON.

**Out of scope:** changing generic RadioGroup keyboard behavior, adding global hotkeys, or redesigning action controls.

## Steps

1. Add a test with a selected radio and focus on its native input. Assert `ArrowRight` leaves step navigation to the radio group; assert the questionnaire’s documented advance command still works from the Next button and Enter on an answered control.
2. In the Questionnaire hotkey callbacks, return without handling left/right directional keys whenever the event target belongs to a radio group or checkbox choice. Keep current text-entry and composition guards intact.
3. Remove `ArrowRight` from the Next button’s `aria-keyshortcuts` unless an actual non-conflicting global shortcut remains. Update the Shortcuts or Usage docs with the exact final navigation keys; preserve English documentation.
4. Regenerate the registry JSON and run the allowed checks.

## Done criteria

- [ ] Horizontal radio navigation is not intercepted by Questionnaire.
- [ ] The Next button does not advertise an unavailable shortcut.
- [ ] Docs state the surviving navigation behavior precisely.
- [ ] Allowed checks pass; tests await authorization.

## STOP conditions

- Ark UI’s vertical RadioGroup does not own `ArrowRight` in its current version; inspect its behavior before changing the Questionnaire policy.
- Product owners require `ArrowRight` global navigation even inside radios; stop for an explicit accessibility trade-off decision.
- Removing the shortcut requires a public API change beyond docs and `aria-keyshortcuts`.

## Maintenance notes

Any future global shortcut must first exempt native composite widgets that already own the same key. Keep this policy adjacent to `isTextEntryTarget`/interactive-target helpers.
