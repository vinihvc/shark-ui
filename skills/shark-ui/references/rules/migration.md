# ark-ui vs shadcn/Radix assumptions

Use this guide when adapting snippets that were originally written with shadcn/Radix mental models.

The public counterpart is [`/docs/migration/shadcn`](../../../../content/docs/migration/shadcn.mdx). Keep behavioral claims and examples aligned when either guide changes.

## Core idea

Shark UI is close to shadcn ergonomically (also uses `asChild` prop for composition), but its primitives and composition model are aligned to Ark UI patterns.

## High-impact differences

- Do not assume every shadcn pattern translates 1:1.
- Verify trigger and popup composition from Ark UI docs before coding.

## Practical migration examples

Use these snippets as fast conversion templates when migrating shadcn/Radix code, 

### Select: `items`-first + placeholder on `SelectValue`

```tsx
// shadcn/Radix
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="next">Next.js</SelectItem>
    <SelectItem value="vite">Vite</SelectItem>
  </SelectContent>
</Select>
```

```tsx
// shark-ui/ark-ui
const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});

<Select collection={collection}>
  <SelectTrigger>
    <SelectValue placeholder="Select a framework" />
  </SelectTrigger>
  <SelectContent>
    {collection.items.map((item) => (
      <SelectItem key={item} value={item}>
        {item}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
```

### Toggle Group: `type` -> `multiple`

```tsx
// shadcn/Radix
<ToggleGroup type="single" defaultValue="daily">
  <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
  <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
</ToggleGroup>
```

```tsx
// shark-ui/ark-ui
<ToggleGroup defaultValue={["daily"]}>
  <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
  <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
</ToggleGroup>
```

### Accordion: `type/collapsible` -> shark-ui defaults

```tsx
// shadcn/Radix
<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">...</AccordionItem>
</Accordion>
```

```tsx
// shark-ui/ark-ui
<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">...</AccordionItem>
</Accordion>
```

### OTP Field: `input-otp` package → `@shark/input-otp`

Shark UI wraps [Ark UI OTP Field](https://ark-ui.com/docs/components/pin-input) (`InputOTP`). Remove the `input-otp` dependency and align with the new names and root props.

```tsx
// shadcn / input-otp
<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
  </InputOTPGroup>
   <InputOTPSeparator />
   <InputOTPSlot index={2} />
   <InputOTPSlot index={3} />
</InputOTP>
```

```tsx
// shark-ui/ark-ui
 <InputOTP onValueChange={({ value }) => setValue(value)} value={value}>
  <InputOTPSlot index={0} />
  <InputOTPSlot index={1} />
  <InputOTPSeparator />
  <InputOTPSlot index={2} />
  <InputOTPSlot index={3} />
</InputOTP>
```

- `InputOTPGroup` is not used.
- Render one `InputOTPSlot` per character in order; need to pass `index`.

## Migration checklist

1. Confirm the exact shark-ui imports from docs.
2. Confirm child structure requirements (trigger/header/panel/footer/items/groups).
3. Confirm prop names and semantics from the shark-ui docs page.
4. Validate with at least one shark-ui particle example.

## Per-component migration notes

For the full component registry, see `../component-registry.md`.

## Anti-patterns

- Copy/paste shadcn examples and only change import path.
- Using undocumented props because they exist in other ecosystems.
- Omitting required subcomponents in overlays/forms because the source snippet did.
