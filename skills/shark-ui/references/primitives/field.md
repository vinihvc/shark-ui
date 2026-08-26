# Shark Field

## When to use

- Accessible field wrappers with labels, descriptions, and errors.
- Form control state wiring (`invalid`, `required`, touched/error messaging).
- Grouped related controls under one legend/description.
- Complex forms requiring semantic grouping for radios/checkboxes.

## Install

```bash
npx shadcn@latest add @shark/field
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Field,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldDescription,
  FieldError,
  FieldTitle,
  FieldSeparator,
  FieldHelper,
  FieldRequiredIndicator,
  FieldLabel,
} from "@/registry/react/components/field"
```

## Minimal pattern

```tsx
import { Input } from "@/registry/react/components/input"

<Field>
  <FieldLabel>Name</FieldLabel>
  <Input type="text" placeholder="Enter your name" />
  <FieldDescription>Visible on your profile</FieldDescription>
  <FieldError>Please enter a valid name</FieldError>
</Field>
```

### Key patterns

Required field with error:

```tsx
<Field name="email" required>
  <FieldLabel>Email <FieldRequiredIndicator /></FieldLabel>
  <Input type="email" placeholder="name@company.com" />
  <FieldDescription>We'll never share your email.</FieldDescription>
  <FieldError>Please enter a valid email.</FieldError>
</Field>
```

FieldSet grouping related fields:

```tsx
<FieldSet>
  <FieldLegend>Personal Information</FieldLegend>
  <Field name="firstName">
    <FieldLabel>First name</FieldLabel>
    <Input type="text" />
  </Field>
  <Field name="lastName">
    <FieldLabel>Last name</FieldLabel>
    <Input type="text" />
  </Field>
</FieldSet>
```

Always include `FieldLegend` as the accessible group heading.

`FieldLabel` does not associate Slider, Date Input, Date Picker, Listbox, Progress, or Radio Group. Use each primitive's own Label inside its root. `FieldTitle` is not a label.

## Common pitfalls

- Rendering errors detached from the related control, breaking context.
- Missing `name` in form flows, causing silent submit omissions.
- Using field wrapper without corresponding label/description/error semantics.
- Using ad-hoc div wrappers instead of semantic fieldset for grouped controls.
- Omitting `FieldLegend`, reducing accessibility context.
- Placing unrelated controls inside one fieldset, hurting form clarity.

## Registry example files

- [`example-autocomplete-field.tsx`](/registry/react/examples/field/example-autocomplete-field.tsx)
- [`example-checkbox-field.tsx`](/registry/react/examples/field/example-checkbox-field.tsx)
- [`example-checkbox-group-field.tsx`](/registry/react/examples/field/example-checkbox-group-field.tsx)
- [`example-combobox-field.tsx`](/registry/react/examples/field/example-combobox-field.tsx)
- [`example-combobox-multiple-field.tsx`](/registry/react/examples/field/example-combobox-multiple-field.tsx)
- [`example-default.tsx`](/registry/react/examples/field/example-default.tsx)
- [`example-disabled-field.tsx`](/registry/react/examples/field/example-disabled-field.tsx)
- [`example-field-group.tsx`](/registry/react/examples/field/example-field-group.tsx)
- [`example-input-group.tsx`](/registry/react/examples/field/example-input-group.tsx)
- [`example-number-input.tsx`](/registry/react/examples/field/example-number-input.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/field/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/field/example-orientation-vertical.tsx)
