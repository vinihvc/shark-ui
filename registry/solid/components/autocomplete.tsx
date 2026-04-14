import type { Combobox as ArkCombobox } from "@ark-ui/solid/combobox";
import type { ComponentProps } from "solid-js";

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
} from "@/registry/solid/components/combobox";
import { Separator } from "@/registry/solid/components/separator";

export const Autocomplete: ArkCombobox.RootComponent = (props) => {
  return (
    <Combobox
      allowCustomValue
      data-slot="autocomplete"
      inputBehavior="autocomplete"
      {...props}
    />
  );
};

export const AutocompleteControl = (
  props: ComponentProps<typeof ComboboxControl>
) => <ComboboxControl data-slot="autocomplete-control" {...props} />;

export const AutocompleteInput = (
  props: ComponentProps<typeof ComboboxInput>
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
  props: ComponentProps<typeof ComboboxGroupLabel>
) => <ComboboxGroupLabel data-slot="autocomplete-group-label" {...props} />;

export const AutocompleteItem = (
  props: ComponentProps<typeof ComboboxItem>
) => <ComboboxItem data-slot="autocomplete-item" {...props} />;

export const AutocompleteContent = (
  props: ComponentProps<typeof ComboboxContent>
) => <ComboboxContent data-slot="autocomplete-content" {...props} />;

export const AutocompleteTrigger = (
  props: ComponentProps<typeof ComboboxTrigger>
) => <ComboboxTrigger data-slot="autocomplete-trigger" {...props} />;

export const AutocompleteClear = (
  props: ComponentProps<typeof ComboboxClear>
) => <ComboboxClear data-slot="autocomplete-clear" {...props} />;

export const AutocompleteGroup = (
  props: ComponentProps<typeof ComboboxGroup>
) => <ComboboxGroup data-slot="autocomplete-group" {...props} />;

export const AutocompleteEmpty = (
  props: ComponentProps<typeof ComboboxEmpty>
) => <ComboboxEmpty data-slot="autocomplete-empty" {...props} />;

export const AutocompleteList = (
  props: ComponentProps<typeof ComboboxList>
) => <ComboboxList data-slot="autocomplete-list" {...props} />;

export const AutocompleteCollection = (
  props: ComponentProps<typeof ComboboxList>
) => <ComboboxList data-slot="autocomplete-collection" {...props} />;

export const AutocompleteSeparator = (
  props: ComponentProps<typeof Separator>
) => <Separator data-slot="autocomplete-separator" {...props} />;
