"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/react/components/field";
import { useHotkeys } from "@/registry/react/components/hotkeys";
import { Input } from "@/registry/react/components/input";
import { Kbd } from "@/registry/react/components/kbd";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";

export interface QuestionnaireItemDefinition {
  multiple?: boolean;
  name: string;
  required?: boolean;
}

export interface QuestionnaireAnswer {
  input: string;
  values: string[];
}

export type QuestionnaireValue = Record<string, QuestionnaireAnswer>;

export interface QuestionnaireValueChangeDetails {
  value: QuestionnaireValue;
}

export interface QuestionnaireItemChangeDetails {
  item: string;
}

export interface QuestionnaireProps
  extends Omit<
    React.ComponentProps<typeof ark.form>,
    "defaultValue" | "noValidate"
  > {
  defaultItem?: string;
  defaultValue?: QuestionnaireValue;
  item?: string;
  items: readonly QuestionnaireItemDefinition[];
  onItemChange?: (details: QuestionnaireItemChangeDetails) => void;
  onValueChange?: (details: QuestionnaireValueChangeDetails) => void;
  shortcuts?: "letters" | "numbers";
  value?: QuestionnaireValue;
}

interface FocusRequest {
  invalid: boolean;
  name: string;
}

interface QuestionnaireContextValue {
  activeItem: QuestionnaireItemDefinition | undefined;
  focusRequest: FocusRequest | undefined;
  index: number;
  invalidItems: string[];
  itemDefinitions: ReadonlyMap<string, QuestionnaireItemDefinition>;
  itemIndexes: ReadonlyMap<string, number>;
  items: readonly QuestionnaireItemDefinition[];
  navigate: (index: number) => void;
  next: () => void;
  setAnswer: (name: string, answer: QuestionnaireAnswer) => void;
  shortcuts: "letters" | "numbers" | undefined;
  skip: () => void;
  value: QuestionnaireValue;
}

const [QuestionnaireProvider, _useQuestionnaire] =
  createContext<QuestionnaireContextValue>({
    name: "QuestionnaireContext",
    providerName: "Questionnaire",
  });

interface QuestionnaireItemContextValue {
  answer: QuestionnaireAnswer;
  definition: QuestionnaireItemDefinition;
  descriptionId: string;
  errorId: string;
  hasDescription: boolean;
  hasError: boolean;
  invalid: boolean;
  titleId: string;
}

interface QuestionnaireChoiceContextValue {
  shortcut: string | undefined;
}

const [QuestionnaireItemProvider, _useQuestionnaireItem] =
  createContext<QuestionnaireItemContextValue>({
    name: "QuestionnaireItemContext",
    providerName: "QuestionnaireItem",
  });

const [QuestionnaireChoiceProvider, useQuestionnaireChoiceContext] =
  createContext<QuestionnaireChoiceContextValue>({
    name: "QuestionnaireChoiceContext",
    providerName: "QuestionnaireChoice",
  });

const EMPTY_ANSWER: QuestionnaireAnswer = { input: "", values: [] };

const hasAnswer = (answer: QuestionnaireAnswer | undefined) =>
  Boolean(answer?.input.trim() || answer?.values.some((value) => value.trim()));

const getDescribedBy = (...ids: (false | string | undefined)[]) => {
  const value = ids.filter(Boolean).join(" ");
  return value || undefined;
};

const hasQuestionnairePart = (
  children: React.ReactNode,
  part: React.ElementType
): boolean =>
  React.Children.toArray(children).some((child) => {
    if (!React.isValidElement<{ children?: React.ReactNode }>(child)) {
      return false;
    }

    return (
      child.type === part ||
      (child.type === React.Fragment &&
        hasQuestionnairePart(child.props.children, part))
    );
  });

const getShortcutKeys = (shortcuts: QuestionnaireProps["shortcuts"]) => {
  if (shortcuts === "letters") {
    return Array.from({ length: 26 }, (_, index) =>
      String.fromCharCode(65 + index)
    );
  }

  if (shortcuts === "numbers") {
    return Array.from({ length: 9 }, (_, index) => String(index + 1));
  }

  return [];
};

const isTextEntryTarget = (target: EventTarget | null) => {
  if (
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  ) {
    return true;
  }

  if (target instanceof HTMLInputElement) {
    return !["button", "checkbox", "radio", "reset", "submit"].includes(
      target.type
    );
  }

  return target instanceof HTMLElement && target.isContentEditable;
};

const isChoiceNavigationTarget = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  Boolean(
    target.closest(
      '[data-slot="radio-group"], [data-questionnaire-answer="choice"]'
    )
  );

const isInteractiveHotkeyTarget = (target: EventTarget | null) => {
  if (isTextEntryTarget(target)) {
    return true;
  }

  return (
    target instanceof Element &&
    Boolean(
      target.closest(
        "a[href], button, input, select, textarea, [contenteditable=true]"
      )
    )
  );
};

export const Questionnaire = (props: QuestionnaireProps) => {
  const {
    defaultItem,
    defaultValue = {},
    item: controlledItem,
    items,
    onItemChange,
    onReset,
    onSubmit,
    onValueChange,
    shortcuts,
    value: controlledValue,
    className,
    children,
    ref,
    onPointerDown,
    ...rest
  } = props;

  const [internalItem, setInternalItem] = React.useState(defaultItem);
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const [invalidItems, setInvalidItems] = React.useState<string[]>([]);
  const [skippedItems, setSkippedItems] = React.useState<string[]>([]);
  const [focusRequest, setFocusRequest] = React.useState<FocusRequest>();

  const formRef = React.useRef<HTMLFormElement>(null);

  const setFormRef = React.useCallback(
    (node: HTMLFormElement | null) => {
      formRef.current = node;

      if (typeof ref === "function") {
        return ref(node);
      }

      if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  const hotkeyId = React.useId();

  const value = controlledValue ?? internalValue;
  const requestedItem = controlledItem ?? internalItem;

  const { itemDefinitions, itemIndexes } = React.useMemo(() => {
    const definitions = new Map<string, QuestionnaireItemDefinition>();
    const indexes = new Map<string, number>();

    for (const [index, definition] of items.entries()) {
      if (!definition.name) {
        throw new Error("Questionnaire item names must be nonempty.");
      }

      if (definitions.has(definition.name)) {
        throw new Error(
          `Questionnaire item names must be unique. Duplicate name: "${definition.name}".`
        );
      }

      definitions.set(definition.name, definition);
      indexes.set(definition.name, index);
    }

    return { itemDefinitions: definitions, itemIndexes: indexes };
  }, [items]);
  const index = items.length ? (itemIndexes.get(requestedItem ?? "") ?? 0) : -1;

  const activeItem = items[index];

  const changeItem = (name: string) => {
    if (controlledItem === undefined) {
      setInternalItem(name);
    }
    if (name !== activeItem?.name) {
      onItemChange?.({ item: name });
    }
  };

  const changeValue = (nextValue: QuestionnaireValue) => {
    if (controlledValue === undefined) {
      setInternalValue(nextValue);
    }
    onValueChange?.({ value: nextValue });
  };

  const setAnswer = (name: string, answer: QuestionnaireAnswer) => {
    setSkippedItems((current) => current.filter((item) => item !== name));
    changeValue({ ...value, [name]: answer });
  };

  const navigate = (nextIndex: number) => {
    const nextItem = items[nextIndex];

    if (nextItem) {
      changeItem(nextItem.name);
      setFocusRequest({ invalid: false, name: nextItem.name });
    }
  };

  const validate = (entries: readonly QuestionnaireItemDefinition[]) => {
    const invalid = entries.filter(
      (entry) => entry.required && !hasAnswer(value[entry.name])
    );
    setInvalidItems((current) => [
      ...current.filter(
        (name) => !entries.some((entry) => entry.name === name)
      ),
      ...invalid.map((entry) => entry.name),
    ]);

    const [first] = invalid;

    if (first) {
      changeItem(first.name);
      setFocusRequest({ invalid: true, name: first.name });
    }

    return invalid.length === 0;
  };

  const next = () => {
    if (activeItem && validate([activeItem])) {
      navigate(index + 1);
    }
  };

  const skip = () => {
    if (!activeItem || activeItem.required || index >= items.length - 1) {
      return;
    }

    setAnswer(activeItem.name, EMPTY_ANSWER);
    setSkippedItems((current) =>
      current.includes(activeItem.name)
        ? current
        : [...current, activeItem.name]
    );

    navigate(index + 1);
  };

  const confirm = () => {
    if (!(activeItem && validate([activeItem]))) {
      return;
    }

    if (index === items.length - 1) {
      formRef.current?.requestSubmit();
      return;
    }

    navigate(index + 1);
  };

  const getActiveAnswerControls = () => {
    const item = formRef.current?.querySelector<HTMLElement>(
      '[data-slot="questionnaire-item"][data-active]'
    );

    if (!item) {
      return [];
    }

    return Array.from(
      item.querySelectorAll<HTMLElement>(
        "[data-questionnaire-answer]:not([data-disabled])"
      )
    ).flatMap((answer) => {
      const input = answer.matches("input")
        ? answer
        : answer.querySelector<HTMLInputElement>("input:not(:disabled)");

      return input instanceof HTMLInputElement ? [{ answer, input }] : [];
    });
  };

  const moveAnswerFocus = (event: KeyboardEvent, direction: -1 | 1) => {
    if (event.defaultPrevented || event.isComposing || event.keyCode === 229) {
      return false;
    }

    const controls = getActiveAnswerControls();

    if (controls.length === 0) {
      return false;
    }

    const { target } = event;

    if (isTextEntryTarget(target)) {
      return false;
    }

    const currentIndex = controls.findIndex(
      ({ answer, input }) => answer.contains(target as Node) || input === target
    );

    const fallbackIndex =
      direction === 1
        ? Math.max(
            0,
            controls.findIndex(({ input }) => input.checked)
          )
        : controls.length - 1;

    const nextIndex =
      currentIndex < 0
        ? fallbackIndex
        : (currentIndex + direction + controls.length) % controls.length;

    const current = controls[currentIndex];
    const nextControl = controls[nextIndex];

    if (!nextControl || nextControl === current) {
      return false;
    }

    event.preventDefault();
    nextControl.input.focus();

    if (current?.input.type === "radio" && nextControl.input.type === "radio") {
      nextControl.input.click();
    }

    return true;
  };

  const handleHotkey = (event: KeyboardEvent, action: () => void) => {
    if (event.defaultPrevented || event.isComposing || event.keyCode === 229) {
      return;
    }

    event.preventDefault();

    if (!event.repeat) {
      action();
    }
  };

  const shortcutKeys = getShortcutKeys(shortcuts);

  const hotkeyOptions = {
    capture: false,
    enableOnContentEditable: true,
    enableOnFormTags: true,
    preventDefault: false,
    target: () => formRef.current,
  } as const;

  useHotkeys({
    commands: [
      {
        action: (event) => handleHotkey(event, confirm),
        hotkey: "mod+enter",
        id: `${hotkeyId}-confirm`,
        options: hotkeyOptions,
      },
      {
        action: (event) => {
          if (
            isTextEntryTarget(event.target) ||
            isChoiceNavigationTarget(event.target)
          ) {
            return;
          }

          const active = activeItem;

          if (
            !(
              active &&
              (hasAnswer(value[active.name]) ||
                skippedItems.includes(active.name))
            )
          ) {
            return;
          }

          handleHotkey(event, next);
        },
        hotkey: "arrowright",
        id: `${hotkeyId}-next`,
        options: hotkeyOptions,
      },
      {
        action: (event) => {
          if (
            isTextEntryTarget(event.target) ||
            isChoiceNavigationTarget(event.target)
          ) {
            return;
          }

          if (index <= 0) {
            return;
          }

          handleHotkey(event, () => navigate(index - 1));
        },
        hotkey: "arrowleft",
        id: `${hotkeyId}-previous`,
        options: hotkeyOptions,
      },
      {
        action: (event) => moveAnswerFocus(event, -1),
        hotkey: "arrowup",
        id: `${hotkeyId}-previous-answer`,
        options: hotkeyOptions,
      },
      {
        action: (event) => moveAnswerFocus(event, 1),
        hotkey: "arrowdown",
        id: `${hotkeyId}-next-answer`,
        options: hotkeyOptions,
      },
      ...shortcutKeys.map((hotkey) => ({
        action: (event: KeyboardEvent) => {
          if (isTextEntryTarget(event.target)) {
            return;
          }

          const choice = getActiveAnswerControls()
            .filter(
              ({ input }) => input.type === "radio" || input.type === "checkbox"
            )
            .at(shortcutKeys.indexOf(hotkey));

          if (!choice) {
            return;
          }

          handleHotkey(event, () => {
            choice.input.focus();
            choice.input.click();
          });
        },
        hotkey,
        id: `${hotkeyId}-choice-${hotkey}`,
        options: hotkeyOptions,
      })),
      {
        action: (event) => {
          const control = getActiveAnswerControls().find(
            ({ answer, input }) =>
              answer.contains(event.target as Node) || input === event.target
          );
          const isChoice =
            control?.input.type === "radio" ||
            control?.input.type === "checkbox";

          if (!control) {
            return;
          }

          if (isChoice ? !control.input.checked : !control.input.value.trim()) {
            return;
          }

          handleHotkey(event, confirm);
        },
        hotkey: "enter",
        id: `${hotkeyId}-enter`,
        options: hotkeyOptions,
      },
    ],
  });

  return (
    <QuestionnaireProvider
      value={{
        activeItem,
        focusRequest,
        index,
        invalidItems,
        itemDefinitions,
        itemIndexes,
        items,
        navigate,
        next,
        setAnswer,
        shortcuts,
        skip,
        value,
      }}
    >
      <ark.form
        {...rest}
        className={cn(
          "flex w-full min-w-0 flex-col gap-4 text-sm outline-none",
          className
        )}
        data-slot="questionnaire"
        noValidate
        onPointerDown={(event) => {
          onPointerDown?.(event);
          if (
            event.defaultPrevented ||
            isInteractiveHotkeyTarget(event.target)
          ) {
            return;
          }

          event.currentTarget.focus({ preventScroll: true });
        }}
        onReset={(event) => {
          onReset?.(event);

          if (event.defaultPrevented) {
            return;
          }

          event.preventDefault();
          changeValue(defaultValue);
          setInvalidItems([]);
          setSkippedItems([]);

          const initialItem =
            items.find((entry) => entry.name === defaultItem) ?? items[0];

          if (initialItem) {
            changeItem(initialItem.name);
          }
        }}
        onSubmit={(event) => {
          if (!activeItem) {
            event.preventDefault();
            return;
          }

          if (index < items.length - 1) {
            event.preventDefault();
            next();
            return;
          }

          if (!validate(items)) {
            event.preventDefault();
            return;
          }

          onSubmit?.(event as React.SubmitEvent<HTMLFormElement>);
        }}
        ref={setFormRef}
        tabIndex={-1}
      >
        {children}
      </ark.form>
    </QuestionnaireProvider>
  );
};

export interface QuestionnaireItemProps
  extends Omit<
    React.ComponentProps<typeof FieldSet>,
    | "asChild"
    | "disabled"
    | "hidden"
    | "inert"
    | "invalid"
    | "name"
    | "tabIndex"
  > {
  name: string;
}

export const QuestionnaireItem = (props: QuestionnaireItemProps) => {
  const { children, className, id: providedId, name, ref, ...rest } = props;

  const context = _useQuestionnaire();
  const generatedId = React.useId();

  const id = providedId ?? generatedId;
  const definition = context.itemDefinitions.get(name);
  const active = context.activeItem?.name === name;
  const answer = context.value[name] ?? EMPTY_ANSWER;
  const invalid = context.invalidItems.includes(name) && !hasAnswer(answer);

  const itemRef = React.useRef<HTMLFieldSetElement>(null);
  const wasActive = React.useRef(active);
  const lastRequest = React.useRef(context.focusRequest);

  const setRef = React.useCallback(
    (node: HTMLFieldSetElement | null) => {
      itemRef.current = node;
      if (typeof ref === "function") {
        return ref(node);
      }
      if (ref) {
        ref.current = node;
      }
    },
    [ref]
  );

  React.useEffect(() => {
    const request = context.focusRequest;
    const requested = request?.name === name && request !== lastRequest.current;

    if (active && (!wasActive.current || requested)) {
      const element = itemRef.current;
      const control =
        requested && request.invalid
          ? element?.querySelector<HTMLInputElement>(
              "input:not([type=hidden]):not(:disabled)"
            )
          : undefined;
      (control ?? element)?.focus({ preventScroll: true });
    }
    wasActive.current = active;

    if (active) {
      lastRequest.current = request;
    }
  }, [active, context.focusRequest, name]);

  if (!definition) {
    throw new Error(
      `QuestionnaireItem "${name}" must be included in Questionnaire items.`
    );
  }

  const hasDescription = hasQuestionnairePart(
    children,
    QuestionnaireDescription
  );
  const hasError = hasQuestionnairePart(children, QuestionnaireError);
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;

  return (
    <QuestionnaireItemProvider
      value={{
        answer,
        definition,
        descriptionId,
        errorId,
        hasDescription,
        hasError,
        invalid,
        titleId,
      }}
    >
      <FieldSet
        {...rest}
        aria-describedby={getDescribedBy(
          hasDescription && descriptionId,
          invalid && hasError && errorId,
          rest["aria-describedby"]
        )}
        aria-invalid={invalid || undefined}
        aria-labelledby={titleId}
        className={cn(
          "min-w-0 gap-4 outline-none",
          className,
          !active && "hidden"
        )}
        data-active={active ? "" : undefined}
        data-multiple={definition.multiple ? "" : undefined}
        data-name={name}
        data-required={definition.required ? "" : undefined}
        data-slot="questionnaire-item"
        hidden={!active}
        id={id}
        inert={!active}
        invalid={invalid}
        ref={setRef}
        tabIndex={-1}
      >
        {children}
      </FieldSet>
    </QuestionnaireItemProvider>
  );
};

export const QuestionnaireTitle = (
  props: Omit<React.ComponentProps<typeof FieldLegend>, "id">
) => {
  const { className, ...rest } = props;

  const { titleId } = _useQuestionnaireItem();

  return (
    <FieldLegend
      {...rest}
      className={cn(
        "mb-0 text-pretty [&:not(:has(~[data-slot=questionnaire-description]))]:mb-4",
        className
      )}
      data-slot="questionnaire-title"
      id={titleId}
    />
  );
};

export const QuestionnaireDescription = (
  props: Omit<React.ComponentProps<typeof ark.p>, "id">
) => {
  const { className, ...rest } = props;

  const { descriptionId } = _useQuestionnaireItem();

  return (
    <ark.p
      {...rest}
      className={cn("text-pretty text-muted-foreground", className)}
      data-slot="questionnaire-description"
      id={descriptionId}
    />
  );
};

export const QuestionnaireChoices = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { children, className, ...rest } = props;

  const {
    answer,
    definition,
    descriptionId,
    hasDescription,
    invalid,
    titleId,
  } = _useQuestionnaireItem();

  const { setAnswer, shortcuts } = _useQuestionnaire();

  const shortcutKeys = getShortcutKeys(shortcuts);
  let choiceIndex = 0;

  const content = React.Children.map(children, (child) => {
    if (
      !React.isValidElement<QuestionnaireChoiceProps>(child) ||
      child.type !== QuestionnaireChoice
    ) {
      return child;
    }
    const shortcut = child.props.disabled
      ? undefined
      : shortcutKeys[choiceIndex];

    if (!child.props.disabled) {
      choiceIndex += 1;
    }

    return React.cloneElement(child, { shortcut });
  });

  if (definition.multiple) {
    return (
      <ark.div
        className={cn("flex flex-col gap-2", className)}
        data-slot="questionnaire-choices"
        {...rest}
      >
        {content}
      </ark.div>
    );
  }

  return (
    <ark.div
      {...rest}
      className={cn("flex flex-col gap-2", className)}
      data-slot="questionnaire-choices"
    >
      <RadioGroup
        aria-describedby={getDescribedBy(
          hasDescription && descriptionId,
          rest["aria-describedby"]
        )}
        aria-labelledby={titleId}
        className="flex flex-col gap-2"
        invalid={invalid}
        name={definition.name}
        onValueChange={({ value }) => {
          setAnswer(definition.name, {
            input: "",
            values: value ? [value] : [],
          });
        }}
        value={answer.input.trim() ? null : (answer.values[0] ?? null)}
      >
        {content}
      </RadioGroup>
    </ark.div>
  );
};

export interface QuestionnaireChoiceProps
  extends React.ComponentProps<typeof ark.div> {
  /**
   * Whether the choice is disabled
   */
  disabled?: boolean;
  /**
   *
   */
  shortcut?: string;
  /**
   *
   */
  value: string;
}

export const QuestionnaireChoice = (props: QuestionnaireChoiceProps) => {
  const {
    children,
    className,
    disabled,
    onClick,
    onClickCapture,
    shortcut,
    value,
    ...rest
  } = props;

  const {
    answer,
    definition,
    descriptionId,
    errorId,
    hasDescription,
    hasError,
    invalid,
  } = _useQuestionnaireItem();

  const { setAnswer } = _useQuestionnaire();

  const checked =
    (definition.multiple || !answer.input.trim()) &&
    answer.values.includes(value);

  const choiceProps = {
    ...rest,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(event);

      if (
        event.defaultPrevented ||
        disabled ||
        !definition.multiple ||
        !(event.target instanceof HTMLElement) ||
        event.target.dataset.slot !== "field"
      ) {
        return;
      }

      event.target
        .querySelector<HTMLElement>('[data-questionnaire-answer="choice"]')
        ?.click();
    },
    onClickCapture,
  };

  return (
    <QuestionnaireChoiceProvider value={{ shortcut }}>
      <ark.div
        className={cn(
          "relative",
          "min-w-0",
          "text-start",
          "rounded-xl border border-input",
          "data-[state=checked]:border-primary data-[state=checked]:bg-primary/5",
          "has-focus-visible:border-primary has-focus-visible:ring-[3px] has-focus-visible:ring-ring/32",
          "data-disabled:opacity-64",
          className
        )}
        data-disabled={disabled ? "" : undefined}
        data-slot="questionnaire-choice"
        data-state={checked ? "checked" : "unchecked"}
        {...choiceProps}
      >
        {definition.multiple ? (
          <Field
            className={cn(
              "items-start p-2.5",
              !disabled && "cursor-pointer",
              shortcut && "pe-12"
            )}
            disabled={disabled}
            invalid={invalid}
            orientation="horizontal"
          >
            <span className="flex h-lh shrink-0 items-center">
              <Checkbox
                aria-describedby={getDescribedBy(
                  hasDescription && descriptionId,
                  invalid && hasError && errorId
                )}
                aria-keyshortcuts={shortcut}
                checked={checked}
                data-questionnaire-answer="choice"
                name={definition.name}
                onCheckedChange={({ checked: nextChecked }) => {
                  setAnswer(definition.name, {
                    input: answer.input,
                    values:
                      nextChecked === true
                        ? [...new Set([...answer.values, value])]
                        : answer.values.filter((entry) => entry !== value),
                  });
                }}
                value={value}
              />
            </span>
            <FieldLabel className="flex min-w-0 flex-1 cursor-pointer flex-col gap-0.5">
              {children}
            </FieldLabel>
          </Field>
        ) : (
          <RadioGroupItem
            aria-keyshortcuts={shortcut}
            className={cn(
              "flex w-full items-start",
              "p-2.5",
              "cursor-pointer",
              "*:data-[slot=radio-group-item-control]:mt-[calc((1lh-1rem)/2)]",
              "*:data-[slot=radio-group-item-text]:min-w-0",
              "*:data-[slot=radio-group-item-text]:w-full",
              "*:data-[slot=radio-group-item-text]:flex-1",
              "*:data-[slot=radio-group-item-text]:flex-col",
              "*:data-[slot=radio-group-item-text]:gap-0.5",
              shortcut && "pe-12"
            )}
            data-questionnaire-answer="choice"
            disabled={disabled}
            value={value}
          >
            {children}
          </RadioGroupItem>
        )}
      </ark.div>
    </QuestionnaireChoiceProvider>
  );
};

export const QuestionnaireChoiceShortcut = (
  props: Omit<React.ComponentProps<typeof Kbd>, "hidden">
) => {
  const { children, className, ...rest } = props;

  const { shortcut } = useQuestionnaireChoiceContext();

  return (
    <Kbd
      {...rest}
      aria-hidden="true"
      className={cn(
        "z-10",
        "absolute inset-e-3 top-2.5",
        "bg-background/64 text-foreground",
        "border border-input",
        "pointer-events-none",
        className
      )}
      data-slot="questionnaire-choice-shortcut"
      hidden={!shortcut}
    >
      {children ?? shortcut}
    </Kbd>
  );
};

export interface QuestionnaireInputProps
  extends Omit<
    React.ComponentProps<typeof Input>,
    "defaultValue" | "name" | "value" | "type" | "required"
  > {}

export const QuestionnaireInput = (props: QuestionnaireInputProps) => {
  const { onChange, ...rest } = props;

  const {
    answer,
    definition,
    descriptionId,
    errorId,
    hasDescription,
    hasError,
    invalid,
  } = _useQuestionnaireItem();

  const { setAnswer } = _useQuestionnaire();

  return (
    <Input
      {...rest}
      aria-describedby={getDescribedBy(
        hasDescription && descriptionId,
        invalid && hasError && errorId,
        rest["aria-describedby"]
      )}
      aria-invalid={invalid || undefined}
      aria-keyshortcuts={answer.input.trim() ? "Enter" : undefined}
      data-questionnaire-answer="input"
      data-slot="questionnaire-input"
      name={answer.input.trim() ? definition.name : undefined}
      onChange={(event) => {
        onChange?.(event);

        if (!event.defaultPrevented) {
          setAnswer(definition.name, {
            input: event.target.value,
            values: definition.multiple ? answer.values : [],
          });
        }
      }}
      type="text"
      value={answer.input}
    />
  );
};

export const QuestionnaireError = (
  props: Omit<React.ComponentProps<typeof ark.p>, "id">
) => {
  const { className, children, ...rest } = props;

  const { errorId, invalid } = _useQuestionnaireItem();

  return (
    <ark.p
      {...rest}
      aria-live="polite"
      className={cn(
        "text-destructive dark:text-destructive-foreground",
        className
      )}
      data-slot="questionnaire-error"
      hidden={!invalid}
      id={errorId}
    >
      {invalid ? children || "Choose an answer to continue." : null}
    </ark.p>
  );
};

export const QuestionnaireProgress = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { "aria-label": ariaLabel, children, className, ...rest } = props;

  const { index, items } = _useQuestionnaire();

  const text = items.length ? `${index + 1} of ${items.length}` : "0 / 0";

  if (!items.length) {
    return (
      <ark.div
        {...rest}
        className={cn("text-muted-foreground tabular-nums", className)}
        data-slot="questionnaire-progress"
        role="status"
      >
        {children ?? text}
      </ark.div>
    );
  }

  return (
    <ark.div
      {...rest}
      aria-label={ariaLabel ?? "Question progress"}
      aria-valuemax={items.length}
      aria-valuemin={1}
      aria-valuenow={index + 1}
      aria-valuetext={text}
      className={cn("text-muted-foreground tabular-nums", className)}
      data-slot="questionnaire-progress"
      role="progressbar"
    >
      {children ?? text}
    </ark.div>
  );
};

export const QuestionnaireActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-h-11 w-full sm:min-h-8",
        "grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-2",
        className
      )}
      data-slot="questionnaire-actions"
      {...rest}
    />
  );
};

type QuestionnaireActionProps = Omit<
  React.ComponentProps<typeof Button>,
  "type"
>;

export const QuestionnairePrevious = (props: QuestionnaireActionProps) => {
  const { children, className, disabled, onClick, ...rest } = props;

  const { index, navigate } = _useQuestionnaire();

  if (index === 0) {
    return null;
  }

  return (
    <Button
      {...rest}
      className={cn("col-start-1 row-start-1 justify-self-start", className)}
      data-slot="questionnaire-previous"
      disabled={disabled}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          navigate(index - 1);
        }
      }}
      type="button"
      variant="outline"
    >
      {children || "Previous"}
    </Button>
  );
};

export const QuestionnaireNext = (props: QuestionnaireActionProps) => {
  const { className, disabled, onClick, children, ...rest } = props;

  const { index, items, next } = _useQuestionnaire();

  if (index < 0 || index >= items.length - 1) {
    return null;
  }

  return (
    <Button
      {...rest}
      aria-keyshortcuts={disabled ? undefined : "Enter"}
      className={cn("col-start-3 row-start-1 justify-self-end", className)}
      data-slot="questionnaire-next"
      disabled={disabled}
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          next();
        }
      }}
      type="button"
    >
      {children || "Next"}
    </Button>
  );
};

export const QuestionnaireSkip = (props: QuestionnaireActionProps) => {
  const { className, onClick, children, ...rest } = props;

  const { activeItem, index, items, skip } = _useQuestionnaire();

  if (!activeItem || activeItem.required || index >= items.length - 1) {
    return null;
  }

  return (
    <Button
      {...rest}
      className={cn("col-start-2 row-start-1 justify-self-end", className)}
      data-slot="questionnaire-skip"
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          skip();
        }
      }}
      type="button"
      variant="ghost"
    >
      {children || "Skip"}
    </Button>
  );
};

export const QuestionnaireSubmit = (props: QuestionnaireActionProps) => {
  const { children, className, disabled, ...rest } = props;

  const { index, items } = _useQuestionnaire();

  if (index < 0 || index !== items.length - 1) {
    return null;
  }

  return (
    <Button
      {...rest}
      aria-keyshortcuts={
        disabled ? undefined : "Enter Control+Enter Meta+Enter"
      }
      className={cn("col-start-3 row-start-1 justify-self-end", className)}
      data-slot="questionnaire-submit"
      disabled={disabled}
      type="submit"
    >
      {children || "Submit"}
    </Button>
  );
};
