"use client";

// Types

export type FilterValue =
  | { type: "string"; value: string }
  | { type: "integer"; value: number }
  | { type: "float"; value: number }
  | { type: "boolean"; value: boolean }
  | { type: "enum"; value: string }
  | { type: "enum_list"; value: string[] }
  | { type: "date_absolute"; value: string } // YYYY-MM-DD
  | { type: "empty" };

export interface EnumItem {
  icon?: React.ReactNode;
  label: string;
  value: string;
}

export type OperatorValue =
  | { type: "string" }
  | { type: "integer" }
  | { type: "float" }
  | { type: "boolean" }
  | { type: "enum"; items: EnumItem[] }
  | { type: "enum_list"; items: EnumItem[] }
  | { type: "date_absolute" }
  | { type: "empty" };

export interface PowerSearchFilter {
  field: string;
  operator: string;
  value: FilterValue;
}

export interface PowerSearchOperator {
  key: string;
  label: string;
  value: OperatorValue;
}

export interface PowerSearchField {
  defaultOperator?: string;
  icon?: React.ReactNode;
  key: string;
  label: string;
  operators: PowerSearchOperator[];
}

export interface PowerSearchConfig {
  applyFilters: <T extends Record<string, unknown>>(
    data: T[],
    filters: readonly PowerSearchFilter[]
  ) => T[];
  fields: PowerSearchField[];
  name: string;
}

// Helper types for config definition
export type FieldDefinition =
  | {
      type: "string";
      key: string;
      label: string;
      icon?: React.ReactNode;
    }
  | {
      type: "number";
      key: string;
      label: string;
      icon?: React.ReactNode;
    }
  | {
      type: "boolean";
      key: string;
      label: string;
      icon?: React.ReactNode;
    }
  | {
      type: "enum";
      key: string;
      label: string;
      items: EnumItem[];
      icon?: React.ReactNode;
    }
  | {
      type: "enum_list";
      key: string;
      label: string;
      items: EnumItem[];
      icon?: React.ReactNode;
    }
  | {
      type: "date";
      key: string;
      label: string;
      icon?: React.ReactNode;
    };

// Type inference utility
type ExtractFieldType<T extends FieldDefinition> = T extends { type: "string" }
  ? string
  : T extends { type: "number" }
    ? number
    : T extends { type: "boolean" }
      ? boolean
      : T extends { type: "enum" }
        ? string
        : T extends { type: "enum_list" }
          ? string[]
          : T extends { type: "date" }
            ? string
            : never;

export type InferData<T extends readonly FieldDefinition[]> = {
  [K in T[number] as K["key"]]: ExtractFieldType<K> | null | undefined;
};

// Config hook

// Operator definitions
const STRING_OPERATORS: PowerSearchOperator[] = [
  { key: "contains", label: "contains", value: { type: "string" } },
  { key: "not_contains", label: "does not contain", value: { type: "string" } },
  { key: "is", label: "is", value: { type: "string" } },
  { key: "is_not", label: "is not", value: { type: "string" } },
  { key: "starts_with", label: "starts with", value: { type: "string" } },
  { key: "ends_with", label: "ends with", value: { type: "string" } },
  { key: "is_empty", label: "is empty", value: { type: "empty" } },
  { key: "is_not_empty", label: "is not empty", value: { type: "empty" } },
];

const NUMBER_OPERATORS: PowerSearchOperator[] = [
  { key: "eq", label: "=", value: { type: "float" } },
  { key: "neq", label: "≠", value: { type: "float" } },
  { key: "gt", label: ">", value: { type: "float" } },
  { key: "gte", label: "≥", value: { type: "float" } },
  { key: "lt", label: "<", value: { type: "float" } },
  { key: "lte", label: "≤", value: { type: "float" } },
  { key: "is_empty", label: "is empty", value: { type: "empty" } },
  { key: "is_not_empty", label: "is not empty", value: { type: "empty" } },
];

const BOOLEAN_OPERATORS: PowerSearchOperator[] = [
  { key: "is", label: "is", value: { type: "boolean" } },
];

const ENUM_OPERATORS = (items: EnumItem[]): PowerSearchOperator[] => [
  { key: "is", label: "is", value: { type: "enum", items } },
  { key: "is_not", label: "is not", value: { type: "enum", items } },
  { key: "is_any", label: "is any of", value: { type: "enum_list", items } },
  { key: "is_none", label: "is none of", value: { type: "enum_list", items } },
  { key: "is_empty", label: "is empty", value: { type: "empty" } },
  { key: "is_not_empty", label: "is not empty", value: { type: "empty" } },
];

const ENUM_LIST_OPERATORS = (items: EnumItem[]): PowerSearchOperator[] => [
  {
    key: "contains_all",
    label: "contains all",
    value: { type: "enum_list", items },
  },
  {
    key: "contains_any",
    label: "contains any",
    value: { type: "enum_list", items },
  },
  {
    key: "contains_none",
    label: "contains none",
    value: { type: "enum_list", items },
  },
  { key: "is_empty", label: "is empty", value: { type: "empty" } },
  { key: "is_not_empty", label: "is not empty", value: { type: "empty" } },
];

const DATE_OPERATORS: PowerSearchOperator[] = [
  { key: "is", label: "is", value: { type: "date_absolute" } },
  { key: "is_before", label: "is before", value: { type: "date_absolute" } },
  { key: "is_after", label: "is after", value: { type: "date_absolute" } },
  { key: "is_empty", label: "is empty", value: { type: "empty" } },
  { key: "is_not_empty", label: "is not empty", value: { type: "empty" } },
];

function buildFields(
  definitions: readonly FieldDefinition[]
): PowerSearchField[] {
  return definitions.map((def) => {
    switch (def.type) {
      case "string":
        return {
          key: def.key,
          label: def.label,
          icon: def.icon,
          operators: STRING_OPERATORS,
          defaultOperator: "contains",
        };
      case "number":
        return {
          key: def.key,
          label: def.label,
          icon: def.icon,
          operators: NUMBER_OPERATORS,
          defaultOperator: "eq",
        };
      case "boolean":
        return {
          key: def.key,
          label: def.label,
          icon: def.icon,
          operators: BOOLEAN_OPERATORS,
          defaultOperator: "is",
        };
      case "enum":
        return {
          key: def.key,
          label: def.label,
          icon: def.icon,
          operators: ENUM_OPERATORS(def.items),
          defaultOperator: "is",
        };
      case "enum_list":
        return {
          key: def.key,
          label: def.label,
          icon: def.icon,
          operators: ENUM_LIST_OPERATORS(def.items),
          defaultOperator: "contains_any",
        };
      case "date":
        return {
          key: def.key,
          label: def.label,
          icon: def.icon,
          operators: DATE_OPERATORS,
          defaultOperator: "is",
        };
      default:
        throw new Error(
          `Unsupported field type: ${(def as { type: string }).type}`
        );
    }
  });
}

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: Required for filter logic
function checkFilterCondition(
  recordValue: unknown,
  operator: string,
  filterValueType: string,
  filterValue: unknown
): boolean {
  // Handle empty operators universally
  if (operator === "is_empty") {
    if (
      recordValue === null ||
      recordValue === undefined ||
      recordValue === ""
    ) {
      return true;
    }
    if (Array.isArray(recordValue) && recordValue.length === 0) {
      return true;
    }
    return false;
  }
  if (operator === "is_not_empty") {
    if (
      recordValue === null ||
      recordValue === undefined ||
      recordValue === ""
    ) {
      return false;
    }
    if (Array.isArray(recordValue) && recordValue.length === 0) {
      return false;
    }
    return true;
  }

  // If the record is empty but the operator isn't checking for empty, it's a mismatch
  if (recordValue === null || recordValue === undefined) {
    return false;
  }

  switch (filterValueType) {
    case "string": {
      const v = String(filterValue).toLowerCase();
      const rv = String(recordValue).toLowerCase();
      switch (operator) {
        case "contains":
          return rv.includes(v);
        case "not_contains":
          return !rv.includes(v);
        case "is":
          return rv === v;
        case "is_not":
          return rv !== v;
        case "starts_with":
          return rv.startsWith(v);
        case "ends_with":
          return rv.endsWith(v);
        default:
          return false;
      }
    }
    case "float":
    case "integer": {
      const v = Number(filterValue);
      const rv = Number(recordValue);
      if (Number.isNaN(v) || Number.isNaN(rv)) {
        return false;
      }
      switch (operator) {
        case "eq":
          return rv === v;
        case "neq":
          return rv !== v;
        case "gt":
          return rv > v;
        case "gte":
          return rv >= v;
        case "lt":
          return rv < v;
        case "lte":
          return rv <= v;
        default:
          return false;
      }
    }
    case "boolean": {
      const v = Boolean(filterValue);
      const rv = Boolean(recordValue);
      return operator === "is" ? rv === v : false;
    }
    case "enum": {
      const v = String(filterValue);
      const rv = String(recordValue);
      switch (operator) {
        case "is":
          return rv === v;
        case "is_not":
          return rv !== v;
        default:
          return false;
      }
    }
    case "enum_list": {
      const vArray = Array.isArray(filterValue) ? filterValue : [];
      const rvArray = Array.isArray(recordValue) ? recordValue : [recordValue];
      if (vArray.length === 0) {
        return true; // No selection = match all
      }

      switch (operator) {
        case "is_any":
        case "contains_any":
          return vArray.some((v) => rvArray.includes(v));
        case "is_none":
        case "contains_none":
          return !vArray.some((v) => rvArray.includes(v));
        case "contains_all":
          return vArray.every((v) => rvArray.includes(v));
        default:
          return false;
      }
    }
    case "date_absolute": {
      // Basic string comparison works for YYYY-MM-DD
      const v = String(filterValue);
      const rv = String(recordValue);
      switch (operator) {
        case "is":
          return rv === v;
        case "is_before":
          return rv < v;
        case "is_after":
          return rv > v;
        default:
          return false;
      }
    }
    default:
      return false;
  }
}

export function createPowerSearchConfig(
  definitions: readonly FieldDefinition[],
  name = "default"
): PowerSearchConfig {
  const fields = buildFields(definitions);

  return {
    name,
    fields,
    applyFilters: (data, filters) => {
      if (!filters.length) {
        return data;
      }

      return data.filter((item) => {
        // AND logic: all filters must pass
        return filters.every((filter) => {
          const recordValue = item[filter.field];
          return checkFilterCondition(
            recordValue,
            filter.operator,
            filter.value.type,
            filter.value.type === "empty"
              ? undefined
              : (filter.value as { value: unknown }).value
          );
        });
      });
    },
  };
}

export function usePowerSearchConfig(
  definitions: readonly FieldDefinition[],
  name?: string
): PowerSearchConfig {
  return useMemo(
    () => createPowerSearchConfig(definitions, name),
    [definitions, name]
  );
}

// Component

import { createListCollection } from "@ark-ui/react/collection";
import { SearchIcon, XIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";
import { InputGroup } from "@/registry/react/components/input-group";
import {
  NumberInput,
  NumberInputInput,
} from "@/registry/react/components/number-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

interface PowerSearchProps {
  className?: string;
  config: PowerSearchConfig;
  disabled?: boolean;
  filters: readonly PowerSearchFilter[];
  onChange: (filters: readonly PowerSearchFilter[]) => void;
  placeholder?: string;
  readOnly?: boolean;
  resultCount?: number | string;
}

export const PowerSearch = (props: PowerSearchProps) => {
  const {
    config,
    filters,
    onChange,
    placeholder = "Search...",
    resultCount,
    disabled = false,
    readOnly = false,
    className,
  } = props;

  // Field typeahead
  const fieldsCollection = useMemo(
    () =>
      createListCollection({
        items: config.fields,
        itemToString: (item) => item.label,
        itemToValue: (item) => item.key,
      }),
    [config.fields]
  );

  const [autocompleteValue, setAutocompleteValue] = useState("");
  const [editingFilterId, setEditingFilterId] = useState<string | null>(null);
  const [activeFieldKey, setActiveFieldKey] = useState<string | null>(null);

  const handleFieldSelect = (fieldKey: string) => {
    setAutocompleteValue("");
    setActiveFieldKey(fieldKey);
  };

  const handleRemoveFilter = (index: number) => {
    const newFilters = [...filters];
    newFilters.splice(index, 1);
    onChange(newFilters);
  };

  const handleSaveFilter = (filter: PowerSearchFilter, index?: number) => {
    if (index !== undefined && index >= 0) {
      const newFilters = [...filters];
      newFilters[index] = filter;
      onChange(newFilters);
    } else {
      onChange([...filters, filter]);
    }
    setActiveFieldKey(null);
    setEditingFilterId(null);
    setAutocompleteValue("");
  };

  const handleCancelEdit = () => {
    setActiveFieldKey(null);
    setEditingFilterId(null);
    setAutocompleteValue("");
  };

  return (
    <div className={cn("relative flex w-full flex-col gap-2", className)}>
      <div className="relative flex min-h-10 w-full items-center rounded-lg border border-input bg-background px-2 shadow-xs focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <SearchIcon className="me-2 size-4 shrink-0 text-muted-foreground" />

        <div className="flex flex-1 flex-wrap items-center gap-1.5 py-1.5">
          {filters.map((filter, idx) => (
            <PowerSearchToken
              config={config}
              filter={filter}
              isEditing={editingFilterId === `${filter.field}-${idx}`}
              // biome-ignore lint/suspicious/noArrayIndexKey: Filters don't have unique IDs
              key={`${filter.field}-${idx}`}
              onCancel={handleCancelEdit}
              onEdit={() => setEditingFilterId(`${filter.field}-${idx}`)}
              onRemove={() => handleRemoveFilter(idx)}
              onSave={(newFilter) => handleSaveFilter(newFilter, idx)}
            />
          ))}

          {/* New Filter Creation */}
          {activeFieldKey && !editingFilterId ? (
            <PowerSearchEditPopover
              config={config}
              fieldKey={activeFieldKey}
              onCancel={handleCancelEdit}
              onSave={(newFilter) => handleSaveFilter(newFilter)}
              open={true}
            />
          ) : (
            <Autocomplete
              collection={fieldsCollection}
              disabled={disabled || readOnly}
              inputValue={autocompleteValue}
              onInputValueChange={({ inputValue }) =>
                setAutocompleteValue(inputValue)
              }
              onValueChange={({ value }) => {
                if (value[0]) {
                  handleFieldSelect(value[0]);
                }
              }}
            >
              <AutocompleteInput
                className="h-7 min-w-32 flex-1 border-0 bg-transparent px-1 py-0 shadow-none placeholder:text-muted-foreground focus-visible:ring-0"
                placeholder={placeholder}
                showClear={false}
              />
              <AutocompleteContent className="w-56">
                <AutocompleteEmpty>No fields found.</AutocompleteEmpty>
                <AutocompleteList>
                  {fieldsCollection.items
                    .filter((item) =>
                      item.label
                        .toLowerCase()
                        .includes(autocompleteValue.toLowerCase())
                    )
                    .map((item) => (
                      <AutocompleteItem item={item} key={item.key}>
                        <div className="flex items-center gap-2">
                          {item.icon}
                          {item.label}
                        </div>
                      </AutocompleteItem>
                    ))}
                </AutocompleteList>
              </AutocompleteContent>
            </Autocomplete>
          )}
        </div>

        {(filters.length > 0 || resultCount !== undefined) && (
          <div className="ms-2 flex items-center gap-2">
            {resultCount !== undefined && (
              <span className="text-muted-foreground text-xs">
                {resultCount} {resultCount === 1 ? "result" : "results"}
              </span>
            )}
            {filters.length > 0 && !readOnly && !disabled && (
              <Button
                aria-label="Clear all filters"
                className="size-6 rounded-full"
                onClick={() => onChange([])}
                size="icon-xs"
                variant="ghost"
              >
                <XIcon className="size-3" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// PowerSearchToken
// ============================================================================

interface PowerSearchTokenProps {
  config: PowerSearchConfig;
  filter: PowerSearchFilter;
  isEditing: boolean;
  onCancel: () => void;
  onEdit: () => void;
  onRemove: () => void;
  onSave: (filter: PowerSearchFilter) => void;
}

export const PowerSearchToken = (props: PowerSearchTokenProps) => {
  const { config, filter, onRemove, onEdit, isEditing, onSave, onCancel } =
    props;

  const fieldDef = config.fields.find((f) => f.key === filter.field);
  const operatorDef = fieldDef?.operators.find(
    (o) => o.key === filter.operator
  );

  if (!fieldDef) {
    return null;
  }

  const getDisplayValue = () => {
    if (filter.value.type === "empty") {
      return "";
    }
    if (filter.value.type === "enum" || filter.value.type === "enum_list") {
      const items =
        (
          operatorDef?.value as Extract<
            NonNullable<typeof operatorDef>["value"],
            { items: { label: string; value: string }[] }
          >
        )?.items || [];
      if (filter.value.type === "enum") {
        const fValue = filter.value.value;
        const item = items.find(
          (i: { value: string; label: string }) => i.value === fValue
        );
        return item ? item.label : String(fValue);
      }

      const listValue = (filter.value as { value?: string[] }).value || [];
      return listValue
        .map((v: string) => {
          const item = items.find(
            (i: { value: string; label: string }) => i.value === v
          );
          return item ? item.label : String(v);
        })
        .join(", ");
    }
    if (filter.value.type === "date_absolute") {
      return String(filter.value.value);
    }
    return String((filter.value as { value?: unknown }).value || "");
  };

  const displayValue = getDisplayValue();

  return (
    <Popover
      onOpenChange={(e) => {
        if (!e.open) {
          onCancel();
        }
      }}
      open={isEditing}
      portalled={false}
      positioning={{ placement: "bottom-start" }}
    >
      <PopoverTrigger asChild>
        <Badge
          className="flex h-7 items-center gap-1.5 px-2 font-normal hover:bg-secondary/80 data-[state=open]:bg-secondary/80"
          onClick={onEdit}
          variant="secondary"
        >
          {fieldDef.icon && <span className="size-3">{fieldDef.icon}</span>}
          <span className="font-medium">{fieldDef.label}</span>
          <span className="text-muted-foreground">{operatorDef?.label}</span>
          {displayValue && (
            <span className="max-w-40 truncate">{displayValue}</span>
          )}
          <button
            className="ms-1 rounded-full p-0.5 hover:bg-background/50 focus-visible:ring-1 focus-visible:ring-ring"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            type="button"
          >
            <XIcon className="size-3" />
          </button>
        </Badge>
      </PopoverTrigger>
      {isEditing && (
        <PowerSearchEditPopover
          config={config}
          fieldKey={filter.field}
          initialFilter={filter}
          onCancel={onCancel}
          onSave={onSave}
        />
      )}
    </Popover>
  );
};

// ============================================================================
// PowerSearchEditPopover
// ============================================================================

interface PowerSearchEditPopoverProps {
  config: PowerSearchConfig;
  fieldKey: string;
  initialFilter?: PowerSearchFilter;
  onCancel: () => void;
  onSave: (filter: PowerSearchFilter) => void;
  open?: boolean;
}

const PowerSearchEditPopover = (props: PowerSearchEditPopoverProps) => {
  const { config, fieldKey, initialFilter, onSave, onCancel, open } = props;

  const fieldDef = config.fields.find((f) => f.key === fieldKey);

  const [operator, setOperator] = useState<string>(
    initialFilter?.operator ||
      fieldDef?.defaultOperator ||
      (fieldDef?.operators.length ? fieldDef.operators[0].key : "")
  );

  let initialValue: unknown;
  if (initialFilter) {
    if (initialFilter.value.type === "empty") {
      initialValue = undefined;
    } else {
      initialValue = (initialFilter.value as { value?: unknown }).value;
    }
  }

  const [value, setValue] = useState<unknown>(initialValue);

  const operatorCollection = useMemo(
    () =>
      createListCollection({
        items: fieldDef?.operators || [],
        itemToString: (item) => item.label,
        itemToValue: (item) => item.key,
      }),
    [fieldDef]
  );

  if (!fieldDef) {
    return null;
  }

  const operatorDef = fieldDef.operators.find((o) => o.key === operator);

  const handleSave = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (!operatorDef) {
      return;
    }

    let filterValue: FilterValue;
    const opType = operatorDef.value.type;

    switch (opType) {
      case "empty":
        filterValue = { type: "empty" };
        break;
      case "string":
        filterValue = { type: "string", value: (value as string) || "" };
        break;
      case "integer":
        filterValue = {
          type: "integer",
          value: Number.parseInt(String(value), 10) || 0,
        };
        break;
      case "float":
        filterValue = {
          type: "float",
          value: Number.parseFloat(String(value)) || 0,
        };
        break;
      case "boolean":
        filterValue = { type: "boolean", value: !!value };
        break;
      case "enum":
        filterValue = { type: "enum", value: (value as string) || "" };
        break;
      case "enum_list":
        filterValue = {
          type: "enum_list",
          value: Array.isArray(value) ? value : [],
        };
        break;
      case "date_absolute":
        filterValue = { type: "date_absolute", value: (value as string) || "" };
        break;
      default:
        filterValue = { type: "empty" };
    }

    onSave({
      field: fieldKey,
      operator,
      value: filterValue,
    });
  };

  // Wrapper if we're rendering it inline as a "new filter" popover
  const PopoverWrapper = open === undefined ? React.Fragment : Popover;
  const popoverProps =
    open === undefined
      ? {}
      : {
          open,
          onOpenChange: (e: { open: boolean }) => {
            if (!e.open) {
              onCancel();
            }
          },
          positioning: { placement: "bottom-start" } as const,
        };

  return (
    <PopoverWrapper {...popoverProps}>
      {open !== undefined && (
        <PopoverTrigger asChild>
          <Badge
            className="flex h-7 cursor-default items-center gap-1.5 px-2 font-normal hover:bg-secondary/80 data-[state=open]:bg-secondary/80"
            variant="secondary"
          >
            {fieldDef.icon && <span className="size-3">{fieldDef.icon}</span>}
            <span className="font-medium">{fieldDef.label}</span>
          </Badge>
        </PopoverTrigger>
      )}
      <PopoverContent className="w-80 p-3 shadow-lg">
        <form className="flex flex-col gap-3" onSubmit={handleSave}>
          <div className="flex items-center gap-2 border-b pb-2">
            {fieldDef.icon && (
              <span className="size-4 text-muted-foreground">
                {fieldDef.icon}
              </span>
            )}
            <span className="font-medium text-sm">{fieldDef.label}</span>
          </div>

          <div className="flex flex-col gap-2">
            <Select
              collection={operatorCollection}
              onValueChange={({ value }) => {
                setOperator(value[0]);
                // Reset value when operator changes significantly
                setValue(undefined);
              }}
              value={[operator]}
            >
              <SelectTrigger className="w-full" size="sm">
                <SelectValue placeholder="Select operator" />
              </SelectTrigger>
              <SelectContent>
                {operatorCollection.items.map((op) => (
                  <SelectItem item={op} key={op.key}>
                    {op.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <ValueEditor
              onChange={setValue}
              onSubmit={handleSave}
              operatorDef={operatorDef}
              value={value}
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button onClick={onCancel} size="sm" type="button" variant="ghost">
              Cancel
            </Button>
            <Button size="sm" type="submit">
              Apply
            </Button>
          </div>
        </form>
      </PopoverContent>
    </PopoverWrapper>
  );
};

// ============================================================================
// ValueEditor
// ============================================================================

const ValueEditor = ({
  operatorDef,
  value,
  onChange,
  onSubmit,
}: {
  operatorDef?: PowerSearchOperator;
  value: unknown;
  onChange: (val: unknown) => void;
  onSubmit: () => void;
}) => {
  if (!operatorDef || operatorDef.value.type === "empty") {
    return null; // No value editor needed
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  switch (operatorDef.value.type) {
    case "string":
      return (
        <Input
          autoFocus
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Value..."
          size="sm"
          value={(value as string) || ""}
        />
      );

    case "integer":
    case "float":
      return (
        <NumberInput
          onValueChange={(details) => onChange(details.value)}
          size="sm"
          value={value ? String(value) : ""}
        >
          <NumberInputInput
            autoFocus
            onKeyDown={handleKeyDown}
            placeholder="Number..."
          />
        </NumberInput>
      );

    case "date_absolute":
      // Using native date input inside Shark UI's DateInput styling
      return (
        <InputGroup size="sm">
          <Input
            autoFocus
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            type="date"
            value={(value as string) || ""}
          />
        </InputGroup>
      );

    case "boolean": {
      const boolCollection = createListCollection({
        items: [
          { label: "True", value: "true" },
          { label: "False", value: "false" },
        ],
      });
      return (
        <Select
          collection={boolCollection}
          onValueChange={(e) => onChange(e.value[0] === "true")}
          value={value === undefined ? [] : [String(value)]}
        >
          <SelectTrigger size="sm">
            <SelectValue placeholder="Select true/false" />
          </SelectTrigger>
          <SelectContent>
            {boolCollection.items.map((i) => (
              <SelectItem item={i} key={i.value}>
                {i.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    case "enum": {
      const enumCollection = createListCollection({
        items: operatorDef.value.items,
        itemToString: (item) => item.label,
        itemToValue: (item) => item.value,
      });
      return (
        <Select
          collection={enumCollection}
          onValueChange={(e) => onChange(e.value[0])}
          value={value ? [value as string] : []}
        >
          <SelectTrigger size="sm">
            <SelectValue placeholder="Select value..." />
          </SelectTrigger>
          <SelectContent>
            {enumCollection.items.map((i) => (
              <SelectItem item={i} key={i.value}>
                <div className="flex items-center gap-2">
                  {i.icon}
                  {i.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    case "enum_list": {
      // Simple multi-select using multiple tags pattern or just multiple select
      const enumListCollection = createListCollection({
        items: operatorDef.value.items,
        itemToString: (item) => item.label,
        itemToValue: (item) => item.value,
      });
      return (
        <Select
          collection={enumListCollection}
          multiple
          onValueChange={(e) => onChange(e.value)}
          value={Array.isArray(value) ? value : []}
        >
          <SelectTrigger size="sm">
            <SelectValue placeholder="Select values..." />
          </SelectTrigger>
          <SelectContent>
            {enumListCollection.items.map((i) => (
              <SelectItem item={i} key={i.value}>
                <div className="flex items-center gap-2">
                  {i.icon}
                  {i.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    default:
      return null;
  }
};
