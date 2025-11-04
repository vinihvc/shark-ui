import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
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

export const AutocompleteItemGroupLabel = (
  props: React.ComponentProps<typeof ComboboxItemGroupLabel>
) => <ComboboxItemGroupLabel {...props} />;

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

export const AutocompleteItemGroup = (
  props: React.ComponentProps<typeof ComboboxItemGroup>
) => <ComboboxItemGroup {...props} />;

export const AutocompleteEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => <ComboboxEmpty {...props} />;
