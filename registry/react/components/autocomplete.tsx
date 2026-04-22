"use client";

import type { Combobox as ArkCombobox } from "@ark-ui/react/combobox";
import type React from "react";
import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@/registry/react/components/combobox";
import { Separator } from "@/registry/react/components/separator";

export const Autocomplete: ArkCombobox.RootComponent = (props) => (
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
) => {
  const { showClear = false, showTrigger = false, ...rest } = props;

  return (
    <ComboboxInput
      data-slot="autocomplete-input"
      showClear={showClear}
      showTrigger={showTrigger}
      {...rest}
    />
  );
};

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

export const AutocompleteClear = (
  props: React.ComponentProps<typeof ComboboxClear>
) => <ComboboxClear data-slot="autocomplete-clear" {...props} />;

export const AutocompleteGroup = (
  props: React.ComponentProps<typeof ComboboxGroup>
) => <ComboboxGroup data-slot="autocomplete-group" {...props} />;

export const AutocompleteEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => <ComboboxEmpty data-slot="autocomplete-empty" {...props} />;

export const AutocompleteList = (
  props: React.ComponentProps<typeof ComboboxList>
) => <ComboboxList data-slot="autocomplete-list" {...props} />;

export const AutocompleteCollection = (
  props: React.ComponentProps<typeof ComboboxList>
) => <ComboboxList data-slot="autocomplete-collection" {...props} />;

export const AutocompleteSeparator = (
  props: React.ComponentProps<typeof Separator>
) => <Separator data-slot="autocomplete-separator" {...props} />;
