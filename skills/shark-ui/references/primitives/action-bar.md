# Shark Action Bar

## When to use

- Bulk actions after selecting rows or items in a list or table.
- A compact, fixed non-modal action surface with a selection count, dismiss control, and primary actions.

## Install

```bash
npx shadcn@latest add @shark/action-bar
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react tailwind-variants
```

Install Shark `badge` and `separator` for the component, and `button` for the examples.

## Canonical imports

```tsx
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarValue,
  ActionBarTrigger,
} from "@/components/ui/action-bar"
```

## Minimal pattern

```tsx
<ActionBar>
  <ActionBarTrigger asChild>
    <Button variant="outline">Open</Button>
  </ActionBarTrigger>
  <ActionBarContent aria-label="Bulk actions" className="w-full max-w-xl">
    <ActionBarClose asChild>
      <Button size="icon-sm" variant="ghost">
        <XIcon />
      </Button>
    </ActionBarClose>
    <ActionBarValue count={3} />
    <ActionBarBody>{/* action buttons */}</ActionBarBody>
  </ActionBarContent>
</ActionBar>
```

### Key patterns

`ActionBarValue` shows selection count; `ActionBarBody` holds the action row. Prefer `asChild` on triggers and close controls so real `Button` elements handle focus and keyboard.

`ActionBarTrigger` and `ActionBarClose` wrap Ark's native Popover trigger parts.
The trigger toggles the bar open and closed.

The surface uses Ark Popover with `role="dialog"`, without automatic focus,
focus trapping, or outside-interaction dismissal. Supply an accessible name.
Escape and focus restoration follow Ark's native Popover behavior. Without
`ActionBarTrigger`, the application owns the focus flow when removing a focused
control. Configure custom action shortcuts in the application.

## Common pitfalls

- Missing **Button** dependency or imports when copying examples.
- Putting `ActionBarClose` / `ActionBarBody` outside `ActionBarContent`—keep the documented hierarchy.
- Omitting `count` (or wrong type) on `ActionBarValue` when you need selection feedback.
- Skipping `asChild` and ending up with nested interactive elements or wrong roles.

## Registry example files

- [`example-close-trigger.tsx`](/registry/react/examples/action-bar/example-close-trigger.tsx)
- [`example-controlled.tsx`](/registry/react/examples/action-bar/example-controlled.tsx)
- [`example-custom-spacing.tsx`](/registry/react/examples/action-bar/example-custom-spacing.tsx)
- [`example-default.tsx`](/registry/react/examples/action-bar/example-default.tsx)
- [`example-dialog.tsx`](/registry/react/examples/action-bar/example-dialog.tsx)
- [`example-gutter.tsx`](/registry/react/examples/action-bar/example-gutter.tsx)
- [`example-menu.tsx`](/registry/react/examples/action-bar/example-menu.tsx)
- [`example-positioning.tsx`](/registry/react/examples/action-bar/example-positioning.tsx)
- [`example-table.tsx`](/registry/react/examples/action-bar/example-table.tsx)
