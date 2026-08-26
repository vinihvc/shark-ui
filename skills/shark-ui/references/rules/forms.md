# Forms & Inputs

## Contents

- Forms use FieldGroup + Field
- InputGroup requires InputGroupInput/InputGroupTextarea
- Buttons inside inputs use InputGroup + InputGroupAddon
- Option sets (2–7 choices) use ToggleGroup
- FieldSet + FieldLegend for grouping related fields
- Field validation and disabled states

## Core Rules

- Prefer composing existing primitives over custom wrappers with duplicated behavior.
- For trigger-based primitives (Dialog, Menu, Select, Popover, Tooltip), follow each primitive's documented trigger/content hierarchy and composition API; do not mix patterns across components.

---

## Forms use FieldGroup + Field

Always use `FieldGroup` + `Field` — never raw `div` with `space-y-*`:

```tsx
<FieldGroup>
  <Field>
    <FieldLabel>Email</FieldLabel>
    <Input type="email" />
  </Field>
  <Field>
    <FieldLabel>Password</FieldLabel>
    <Input type="password" />
  </Field>
</FieldGroup>
```

Use `Field orientation="horizontal"` for settings pages. Use `FieldLabel className="sr-only"` for visually hidden labels.

Don't need to use htmlFor and id, Ark UI will handle this for you.

`FieldLabel` associates with native Field-aware controls (`Input`, `Select`, `Combobox`, `Checkbox`, `Switch`, `NumberInput`, and similar). For widgets that keep their own label part, put that label **inside** the primitive root instead of a sibling `FieldLabel`:

| Control | Label |
| --- | --- |
| Slider | `SliderLabel` |
| RadioGroup (group) | `RadioGroupLabel` or `FieldSet` + `FieldLegend` |
| DateInput | `DateInputLabel` |
| DatePicker | `DatePickerLabel` |
| Listbox | `ListboxLabel` |
| Progress | `ProgressLabel` |
| CircularProgress | `CircularProgressLabel` |
| CircularSlider | `CircularSliderLabel` |
| ToggleGroup | `id` on the title + `aria-labelledby` on the group |

`FieldTitle` is visual only (for example inside a wrapping `FieldLabel` card). It does not set `htmlFor`.

**Choosing form controls:**

- Simple text input → `Input`
- Dropdown with predefined options → `Select`
- Searchable dropdown → `Combobox`
- Native HTML select (no JS) → `native-select`
- Boolean toggle → `Switch` (for settings) or `Checkbox` (for forms)
- Single choice from few options → `RadioGroup`
- Toggle between 2–5 options → `ToggleGroup` + `ToggleGroupItem`
- OTP/verification code → `InputOTP`
- Multi-line text → `Textarea`

---

## InputGroup requires InputGroupInput/InputGroupTextarea

Never use raw `Input` or `Textarea` inside an `InputGroup`.

**Incorrect:**

```tsx
<InputGroup>
  <Input placeholder="Search..." />
</InputGroup>
```

**Correct:**

```tsx
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"

<InputGroup>
  <InputGroupInput placeholder="Search..." />
</InputGroup>
```

---

## Buttons inside inputs use InputGroup + InputGroupAddon

Never place a `Button` directly inside or adjacent to an `Input` with custom positioning.

**Incorrect:**

```tsx
<div className="relative">
  <Input placeholder="Search..." className="pr-10" />
  <Button className="absolute right-0 top-0" size="icon">
    <SearchIcon />
  </Button>
</div>
```

**Correct:**

```tsx
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group"

<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <Button size="icon">
      <SearchIcon data-icon="inline-start" />
    </Button>
  </InputGroupAddon>
</InputGroup>
```

---

## Option sets (2–7 choices) use ToggleGroup

Don't manually loop `Button` components with active state.

**Incorrect:**

```tsx
const [selected, setSelected] = useState("daily")

<div className="flex gap-2">
  {["daily", "weekly", "monthly"].map((option) => (
    <Button
      key={option}
      variant={selected === option ? "default" : "outline"}
      onClick={() => setSelected(option)}
    >
      {option}
    </Button>
  ))}
</div>
```

**Correct:**

```tsx
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup spacing={2}>
  <ToggleGroupItem value="daily">Daily</ToggleGroupItem>
  <ToggleGroupItem value="weekly">Weekly</ToggleGroupItem>
  <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
</ToggleGroup>
```

Combine with `Field` for labelled toggle groups:

```tsx
<Field orientation="horizontal">
  <FieldTitle id="theme-label">Theme</FieldTitle>
  <ToggleGroup aria-labelledby="theme-label" spacing={2}>
    <ToggleGroupItem value="light">Light</ToggleGroupItem>
    <ToggleGroupItem value="dark">Dark</ToggleGroupItem>
    <ToggleGroupItem value="system">System</ToggleGroupItem>
  </ToggleGroup>
</Field>
```

> **Note:** `defaultValue` and `type`/`multiple` props differ between base and radix. See [base-vs-radix.md](./base-vs-radix.md#togglegroup).

---

## FieldSet + FieldLegend for grouping related fields

Use `FieldSet` + `FieldLegend` for related checkboxes, radios, or switches — not `div` with a heading:

```tsx
<FieldSet>
  <FieldLegend variant="label">Preferences</FieldLegend>
  <FieldDescription>Select all that apply.</FieldDescription>
  <FieldGroup className="gap-3">
    <Field orientation="horizontal">
      <Checkbox />
      <FieldLabel className="font-normal">Dark mode</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>
```

---

## Field validation and disabled states

Use `invalid` and `disabled` just in the `Field` component, it will be passed to the control automatically.

```tsx
// Invalid.
<Field invalid>
  <FieldLabel>Email</FieldLabel>
  <Input  />
  <FieldDescription>Invalid email address.</FieldDescription>
</Field>

// Disabled.
<Field disabled>
  <FieldLabel>Email</FieldLabel>
  <Input  />
</Field>
```

Works for all controls: `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroupItem`, `Switch`, `Slider`, `NativeSelect`, `InputOTP`, `Autocomplete`, `Combobox`, `NumberInput`, `DatePicker`, `ColorPicker`, `FileUpload`, `Editable`.

## Anti-patterns

- Building bespoke dropdown/dialog behavior instead of using primitives.
- Mixing APIs from other ecosystems (radix-ui/base-ui) without checking ark-ui equivalents.
- Omitting key subcomponents that preserve accessibility and layout conventions.

## Form validation

- [React-Hook-Form](@/content/docs/forms/react-hook-form.mdx)
- [TanStack Form](@/content/docs/forms/tanstack-form.mdx)
- [Formisch](@/content/docs/forms/formisch.mdx)

