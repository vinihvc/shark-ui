# Shark Status

## When to use

- Compact status pills (online, warning, error) with optional dot, icon, or badge.
- System health rows or table cells that need semantic color variants.

## Install

```bash
npx shadcn@latest add @shark/status
```

Manual deps from docs:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import { Status } from "@/components/ui/status"
```

## Minimal pattern

```tsx
<Status variant="success">Healthy</Status>
```

### Key patterns

Combine with `Badge` or icons from examples; use `size` props for density in tables or headers.

## Common pitfalls

- Using `Status` as the only signal—pair with text or icons for color-blind users.
- Skipping `tailwind-variants` in manual installs.
- Hardcoding colors instead of `variant` tokens defined in source.

## Registry example files

- [`example-custom-color.tsx`](/registry/react/examples/status/example-custom-color.tsx)
- [`example-custom-size.tsx`](/registry/react/examples/status/example-custom-size.tsx)
- [`example-default.tsx`](/registry/react/examples/status/example-default.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/status/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/status/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/status/example-size-sm.tsx)
- [`example-variant-default.tsx`](/registry/react/examples/status/example-variant-default.tsx)
- [`example-variant-destructive.tsx`](/registry/react/examples/status/example-variant-destructive.tsx)
- [`example-variant-info.tsx`](/registry/react/examples/status/example-variant-info.tsx)
- [`example-variant-success.tsx`](/registry/react/examples/status/example-variant-success.tsx)
- [`example-variant-warning.tsx`](/registry/react/examples/status/example-variant-warning.tsx)
- [`example-with-avatar.tsx`](/registry/react/examples/status/example-with-avatar.tsx)
- [`example-with-badge.tsx`](/registry/react/examples/status/example-with-badge.tsx)
- [`example-with-icon.tsx`](/registry/react/examples/status/example-with-icon.tsx)
