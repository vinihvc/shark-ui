# Shark Date Input

## When to use

- Typed date entry with segment-by-segment navigation (month, day, year, time).
- Date or time fields without opening a calendar popover.
- Range entry with two segment groups on one control.

## Install

```bash
npx shadcn@latest add @shark/date-input
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

Requires `@ark-ui/react` **5.37.2+** (Date Input preview).

## Canonical imports

```tsx
import { parseDate } from "@ark-ui/react";
import { DateInput } from "@/components/ui/date-input";
```

## Minimal pattern

```tsx
<DateInput defaultValue={[parseDate("2024-04-04")]} />
```

### Key patterns

Range mode:

```tsx
<DateInput
  selectionMode="range"
  defaultValue={[parseDate("2024-04-04"), parseDate("2024-04-10")]}
/>
```

Custom range separator (`separator` prop accepts a string or React node):

```tsx
import { ArrowRightIcon } from "lucide-react";

<DateInput
  selectionMode="range"
  defaultValue={[parseDate("2024-04-04"), parseDate("2024-04-10")]}
  separator={<ArrowRightIcon aria-hidden />}
/>
```

Time-only input (custom `formatter` with time fields only):

```tsx
import { parseDate, useDateFormatter } from "@ark-ui/react";

const formatter = useDateFormatter({
  hour: "numeric",
  minute: "2-digit",
  hourCycle: "h12",
});

<DateInput
  defaultValue={[parseDate("2024-04-04")]}
  formatter={formatter}
  granularity="minute"
  hourCycle={12}
/>
```

Clear button with built-in `showClear`:

```tsx
const [value, setValue] = useState([parseDate("2024-04-04")]);

<DateInput
  showClear
  value={value}
  onValueChange={(details) => setValue(details.value)}
/>
```

Inside an existing `DateInput` tree, use `useDateInputContext()` to read state.

Use [Field](/docs/components/field) for helper and error text. Put `DateInputLabel` **inside** `DateInput` — `FieldLabel` does not associate with the segments.

```tsx
<Field>
  <DateInput>
    <DateInputLabel>Date of birth</DateInputLabel>
  </DateInput>
  <FieldDescription>Use your local date format.</FieldDescription>
</Field>
```

## Common pitfalls

- Forgetting `parseDate` / `DateValue[]` shape — value is always an array.
- Range mode uses `selectionMode="range"`; customize the divider with `separator`.
- Missing `@ark-ui/react` 5.37.2+ — Date Input is not in earlier releases.
- Using physical `ml-*` / `mr-*` for RTL layouts — prefer logical spacing (`ms-*`, `me-*`).

## Registry example files

- [`example-default.tsx`](/registry/react/examples/date-input/example-default.tsx)
- [`example-controlled.tsx`](/registry/react/examples/date-input/example-controlled.tsx)
- [`example-with-field.tsx`](/registry/react/examples/date-input/example-with-field.tsx)
- [`example-granularity.tsx`](/registry/react/examples/date-input/example-granularity.tsx)
- [`example-time-only.tsx`](/registry/react/examples/date-input/example-time-only.tsx)
- [`example-range.tsx`](/registry/react/examples/date-input/example-range.tsx)
- [`example-custom-separator.tsx`](/registry/react/examples/date-input/example-custom-separator.tsx)
- [`example-min-max.tsx`](/registry/react/examples/date-input/example-min-max.tsx)
- [`example-disabled.tsx`](/registry/react/examples/date-input/example-disabled.tsx)
- [`example-invalid.tsx`](/registry/react/examples/date-input/example-invalid.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/date-input/example-size-sm.tsx)
- [`example-size-md.tsx`](/registry/react/examples/date-input/example-size-md.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/date-input/example-size-lg.tsx)
- [`example-leading-zeros.tsx`](/registry/react/examples/date-input/example-leading-zeros.tsx)
- [`example-with-clear-button.tsx`](/registry/react/examples/date-input/example-with-clear-button.tsx)