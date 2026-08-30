# Agent task UI patterns

**Question.** Should an autonomous-agent `Task` component display an aggregate counter and a button that lets a person mark a task complete?

## Conclusion

Keep a **counter as an optional list-level aggregate** when it is derived from agent-owned task state (for example, `1 of 3 complete`). Do **not** put a generic “Complete task” button in an autonomous-progress task row. Completion should be written by the agent after it has actually performed and verified the work.

If the agent needs the person to act, represent that separately as an **approval or input request**—for example, “Approve revoking this API key”—and update the task only after the approved operation succeeds. The screenshot's “Complete: revoke the API key” conflates those two concepts: revoking a production key is an external side effect requiring approval, not a manual progress toggle.

## Evidence from primary product documentation

| Product | Progress/task pattern | Human action pattern |
| --- | --- | --- |
| [AI Elements Task](https://elements.ai-sdk.dev/components/task) | The component is for AI workflow progress and explicitly lists a built-in completed/total counter. Its AI SDK example streams task objects with `pending`, `in_progress`, and `completed` statuses. | The documented `Task` API is a collapsible task/list composition. In the example, buttons start a mock task type; streamed agent output supplies task status. It does not document a per-task manual-completion control. |
| [Cursor Agent planning](https://docs.cursor.com/en/agent/planning) | Agent automatically creates to-dos for complex work; the list updates in real time and completed tasks are marked automatically. | The docs describe viewing the breakdown, not manually marking items complete. Command approval is a separate CLI interaction: users approve or reject terminal commands. [Cursor CLI](https://docs.cursor.com/en/cli/using) |
| [Claude Code task list](https://code.claude.com/docs/en/interactive-mode) | Claude creates a task list for complex work; terminal status shows pending, in-progress, and completed indicators. People can toggle the view, ask to show all, or clear it. | Task creation/update is handled by Claude tools (`TaskCreate`, `TaskUpdate`, and `TodoWrite`), not an approval flow. [Tools reference](https://code.claude.com/docs/en/tools-reference) Permissions for writes and shell commands are separate prompts. [Permissions](https://code.claude.com/docs/en/permissions) |
| [OpenAI Codex CLI](https://help.openai.com/en/articles/11096431) | The documentation describes approval modes and inline proposed patches/commands, rather than a user-managed per-step completion control. | Approvals govern edits and command execution: suggest mode requires approval before changes or commands; more autonomous modes reduce those prompts. That is distinct from marking an execution-plan item complete. |

## Recommended Shark API boundary

- `Task` / `TaskList`: agent-owned execution state and optional derived progress (`completed / total`). A counter belongs to the list header or footer, not a single row.
- `ApprovalCard` (or an explicit action-request primitive): a user-owned decision for a proposed side effect, with approve/reject and meaningful scope.
- Integration: approval succeeds → agent invokes the operation → operation succeeds/errs → agent updates the corresponding `Task` status.

This lets a task list be readable during autonomous runs, while keeping consequential decisions unmistakably separate from ordinary progress controls.
