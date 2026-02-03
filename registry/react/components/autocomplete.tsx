import type React from "react";
import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxTrigger,
} from "@/registry/react/components/combobox";
import { Input } from "./input";

export const Autocomplete = <T,>(
  props: React.ComponentProps<typeof Combobox<T>>
) => (
  <Combobox
    allowCustomValue
    data-slot="autocomplete"
    inputBehavior="autocomplete"
    {...props}
  />
);

export const AutocompleteControl = (
  props: React.ComponentProps<typeof ComboboxControl>
) => <ComboboxControl data-slot="autocomplete-control" {...props} />;

export const AutocompleteInput = (
  props: React.ComponentProps<typeof ComboboxInput>
) => (
  <ComboboxInput data-slot="autocomplete-input" {...props} asChild>
    <Input />
  </ComboboxInput>
);

export const AutocompleteGroupLabel = (
  props: React.ComponentProps<typeof ComboboxGroupLabel>
) => <ComboboxGroupLabel data-slot="autocomplete-group-label" {...props} />;

export const AutocompleteItem = (
  props: React.ComponentProps<typeof ComboboxItem>
) => <ComboboxItem data-slot="autocomplete-item" {...props} />;

export const AutocompleteContent = (
  props: React.ComponentProps<typeof ComboboxContent>
) => <ComboboxContent data-slot="autocomplete-content" {...props} />;

export const AutocompleteTrigger = (
  props: React.ComponentProps<typeof ComboboxTrigger>
) => <ComboboxTrigger data-slot="autocomplete-trigger" {...props} />;

export const AutocompleteClearTrigger = (
  props: React.ComponentProps<typeof ComboboxClearTrigger>
) => <ComboboxClearTrigger data-slot="autocomplete-clear-trigger" {...props} />;

export const AutocompleteGroup = (
  props: React.ComponentProps<typeof ComboboxGroup>
) => <ComboboxGroup data-slot="autocomplete-group" {...props} />;

export const AutocompleteEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => <ComboboxEmpty data-slot="autocomplete-empty" {...props} />;
