# Shark Rating

## When to use

- Star (or custom icon) ratings for reviews, feedback, or read-only summaries.
- Half-star precision and controlled values synced to forms.

## Install

```bash
npx shadcn@latest add @shark/rating
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import { Rating, RatingItem, useRating } from "@/components/ui/rating"
```

## Minimal pattern

```tsx
<Rating defaultValue={3} />
```

### Key patterns

Use `value` / `onValueChange` for controlled usage; enable `allowHalf` for half-star selection. Customize `icon` or styles per examples (`example-custom-icon`, `example-custom-color`).

## Common pitfalls

- Importing `RatingGroup` from MDX snippets—Shark exports **`Rating`** / **`RatingItem`** from `rating.tsx` while Ark’s module is `rating`.
- Missing `lucide-react` when relying on default star icons.
- Using string values—`value` is numeric; see Ark `rating` docs for `ValueChangeDetails`.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/rating/example-controlled.tsx)
- [`example-count.tsx`](/registry/react/examples/rating/example-count.tsx)
- [`example-custom-color.tsx`](/registry/react/examples/rating/example-custom-color.tsx)
- [`example-custom-icon.tsx`](/registry/react/examples/rating/example-custom-icon.tsx)
- [`example-custom-size.tsx`](/registry/react/examples/rating/example-custom-size.tsx)
- [`example-default.tsx`](/registry/react/examples/rating/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/rating/example-disabled.tsx)
- [`example-half-star.tsx`](/registry/react/examples/rating/example-half-star.tsx)
- [`example-readonly.tsx`](/registry/react/examples/rating/example-readonly.tsx)
- [`example-testimonial.tsx`](/registry/react/examples/rating/example-testimonial.tsx)
