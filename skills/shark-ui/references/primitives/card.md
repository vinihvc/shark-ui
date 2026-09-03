# Shark Card

## When to use

- Structured surface sections for grouped content.
- Settings, dashboard, and preview layouts with header/panel/footer semantics.

## Install

```bash
npx shadcn@latest add @shark/card
```

Manual deps from docs:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import {
  Card,
  CardMedia,
  CardDescription,
  CardFooter,
  CardHeader,
  CardContent,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
```

## Minimal pattern

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Key patterns

Shorthand Title and Description

```tsx
// …
<CardHeader 
  title="Title" 
  description="Description" 
>
  <CardAction>Action</CardAction>
</CardHeader>
// …
```

Card with form content:

```tsx
<Card className="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one click.</CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col gap-4">
    <Field>
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="My project" />
    </Field>
  </CardContent>
  <CardFooter className="flex justify-end gap-2">
    <Button variant="ghost">Cancel</Button>
    <Button>Create</Button>
  </CardFooter>
</Card>
```

Card with `CardMedia` via the `variant` prop (`icon`|`image`|`default`):

```tsx
<Card>
  <CardMedia variant="image">
    <img src="https://via.placeholder.com/150" alt="Card image" />
  </CardMedia>
  {/* … */}
</Card>
```

Use `[--space:--spacing("value")]` on `<Card />` to adjust internal spacing.

Default spacing is `--spacing(6)`.

```tsx
<Card className="[--space:--spacing(8)]">
   {/* … */}
</Card>
```

Keep `CardHeader`, `CardContent`, and `CardFooter` as direct children of `Card` to preserve built-in spacing and layout.

## Common pitfalls

- Skipping `CardHeader`/`CardContent`/`CardFooter` structure in composed cards.
- Mixing unrelated layout wrappers that break spacing between card sections.
- Using cards as generic wrappers when `Frame` or plain layout would be clearer.

## Registry example files

- [`example-custom-spacing.tsx`](/registry/react/examples/card/example-custom-spacing.tsx)
- [`example-default.tsx`](/registry/react/examples/card/example-default.tsx)
- [`example-icon.tsx`](/registry/react/examples/card/example-icon.tsx)
- [`example-media-default.tsx`](/registry/react/examples/card/example-media-default.tsx)
- [`example-product.tsx`](/registry/react/examples/card/example-product.tsx)
