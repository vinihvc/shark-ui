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
) => <Combobox allowCustomValue inputBehavior="autocomplete" {...props} />;

export const AutocompleteControl = (
  props: React.ComponentProps<typeof ComboboxControl>
) => <ComboboxControl {...props} />;

export const AutocompleteInput = (
  props: React.ComponentProps<typeof ComboboxInput>
) => (
  <ComboboxInput {...props} asChild>
    <Input />
  </ComboboxInput>
);

export const AutocompleteGroupLabel = (
  props: React.ComponentProps<typeof ComboboxGroupLabel>
) => <ComboboxGroupLabel {...props} />;

export const AutocompleteItem = (
  props: React.ComponentProps<typeof ComboboxItem>
) => <ComboboxItem {...props} />;

export const AutocompleteContent = (
  props: React.ComponentProps<typeof ComboboxContent>
) => <ComboboxContent {...props} />;

export const AutocompleteTrigger = (
  props: React.ComponentProps<typeof ComboboxTrigger>
) => <ComboboxTrigger {...props} />;

export const AutocompleteClearTrigger = (
  props: React.ComponentProps<typeof ComboboxClearTrigger>
) => <ComboboxClearTrigger {...props} />;

export const AutocompleteGroup = (
  props: React.ComponentProps<typeof ComboboxGroup>
) => <ComboboxGroup {...props} />;

export const AutocompleteEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => <ComboboxEmpty {...props} />;
