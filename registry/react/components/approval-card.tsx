"use client";

import { createContext } from "@ark-ui/react/utils";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  type QuestionnaireItemChangeDetails,
  type QuestionnaireItemDefinition,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  type QuestionnaireProps,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
  type QuestionnaireValue,
  type QuestionnaireValueChangeDetails,
} from "@/registry/react/components/questionnaire";

export type ApprovalCardItemDefinition = QuestionnaireItemDefinition;
export type ApprovalCardValue = QuestionnaireValue;
export type ApprovalCardValueChangeDetails = QuestionnaireValueChangeDetails;
export type ApprovalCardItemChangeDetails = QuestionnaireItemChangeDetails;

export interface ApprovalCardSubmitDetails {
  formData?: FormData;
}

export interface ApprovalCardProps extends Omit<QuestionnaireProps, "items"> {
  items?: QuestionnaireProps["items"];
  onApprove?: (details?: ApprovalCardSubmitDetails) => void;
  onReject?: () => void;
}

interface ApprovalCardContextValue {
  reject: () => void;
}

const [ApprovalCardProvider, _useApprovalCardContext] =
  createContext<ApprovalCardContextValue>({
    name: "ApprovalCardContext",
    providerName: "ApprovalCard",
  });

const DEFAULT_ITEMS = [{ name: "approval" }] as const;

export const ApprovalCard = (props: ApprovalCardProps) => {
  const {
    className,
    items = DEFAULT_ITEMS,
    onApprove,
    onReject,
    onSubmit,
    children,
    ...rest
  } = props;

  const reject = () => onReject?.();

  return (
    <ApprovalCardProvider value={{ reject }}>
      <Questionnaire
        {...rest}
        className="gap-0"
        items={items}
        onSubmit={(event) => {
          onSubmit?.(event);

          if (event.defaultPrevented) {
            return;
          }

          event.preventDefault();
          onApprove?.({ formData: new FormData(event.currentTarget) });
        }}
      >
        <Card
          className={cn(
            "w-full has-data-[slot=approval-card-footer]:pb-0",
            className
          )}
        >
          {children}
        </Card>
      </Questionnaire>
    </ApprovalCardProvider>
  );
};

export interface ApprovalCardHeaderProps
  extends React.ComponentProps<typeof CardHeader> {
  /**
   * The title of the approval card
   */
  title?: string;
}

export const ApprovalCardHeader = (props: ApprovalCardHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <CardHeader
      {...rest}
      className={cn(
        "flex flex-row items-start gap-2",
        "min-w-0 text-muted-foreground",
        "[&_svg:not([class*='h-'])]:h-lh [&_svg:not([class*='w-'])]:w-4",
        "[&_svg]:shrink-0 [&_svg]:self-start",
        className
      )}
      data-slot="approval-card-header"
    >
      {!!title && <ApprovalCardTitle>{title}</ApprovalCardTitle>}
      {!title && typeof children === "string" ? (
        <ApprovalCardTitle>{children}</ApprovalCardTitle>
      ) : (
        children
      )}
    </CardHeader>
  );
};

export const ApprovalCardTitle = (
  props: React.ComponentProps<typeof CardTitle>
) => {
  const { className, ...rest } = props;

  return (
    <CardTitle
      className={cn(
        "h-lh min-w-0 font-medium text-muted-foreground text-sm",
        className
      )}
      data-slot="approval-card-title"
      {...rest}
    />
  );
};

export const ApprovalCardAction = (
  props: React.ComponentProps<typeof CardAction>
) => {
  const { className, ...rest } = props;

  return (
    <CardAction
      {...rest}
      className={cn(
        "col-start-auto row-span-1 row-start-auto",
        "ms-auto self-center text-xs/none",
        className
      )}
      data-slot="approval-card-action"
    />
  );
};

export const ApprovalCardProgress = (
  props: React.ComponentProps<typeof QuestionnaireProgress>
) => <QuestionnaireProgress {...props} data-slot="approval-card-progress" />;

export const ApprovalCardContent = (
  props: React.ComponentProps<typeof CardContent>
) => {
  const { className, ...rest } = props;

  return (
    <CardContent
      {...rest}
      className={cn("min-w-0", className)}
      data-slot="approval-card-content"
    />
  );
};

export const ApprovalCardItem = (
  props: React.ComponentProps<typeof QuestionnaireItem>
) => <QuestionnaireItem {...props} data-slot="approval-card-item" />;

export const ApprovalCardItemTitle = (
  props: React.ComponentProps<typeof QuestionnaireTitle>
) => <QuestionnaireTitle {...props} data-slot="approval-card-item-title" />;

export const ApprovalCardItemDescription = (
  props: React.ComponentProps<typeof QuestionnaireDescription>
) => (
  <QuestionnaireDescription
    {...props}
    data-slot="approval-card-item-description"
  />
);

export const ApprovalCardChoices = (
  props: React.ComponentProps<typeof QuestionnaireChoices>
) => <QuestionnaireChoices {...props} data-slot="approval-card-choices" />;

export const ApprovalCardChoice = (
  props: React.ComponentProps<typeof QuestionnaireChoice>
) => <QuestionnaireChoice {...props} data-slot="approval-card-choice" />;

export const ApprovalCardChoiceShortcut = (
  props: React.ComponentProps<typeof QuestionnaireChoiceShortcut>
) => (
  <QuestionnaireChoiceShortcut
    {...props}
    data-slot="approval-card-choice-shortcut"
  />
);

export const ApprovalCardInput = (
  props: React.ComponentProps<typeof QuestionnaireInput>
) => <QuestionnaireInput {...props} data-slot="approval-card-input" />;

export const ApprovalCardError = (
  props: React.ComponentProps<typeof QuestionnaireError>
) => <QuestionnaireError {...props} data-slot="approval-card-error" />;

export const ApprovalCardFooter = (
  props: React.ComponentProps<typeof CardFooter>
) => {
  const { children, className, ...rest } = props;

  return (
    <CardFooter
      {...rest}
      className={cn("w-full min-w-0", className)}
      data-slot="approval-card-footer"
    >
      <QuestionnaireActions
        className="min-w-0 flex-1"
        data-slot="approval-card-actions"
      >
        {children}
      </QuestionnaireActions>
    </CardFooter>
  );
};

export const ApprovalCardPrevious = (
  props: React.ComponentProps<typeof QuestionnairePrevious>
) => {
  const { children, ...rest } = props;

  return (
    <QuestionnairePrevious {...rest} data-slot="approval-card-previous">
      {children || "Previous"}
    </QuestionnairePrevious>
  );
};

export const ApprovalCardNext = (
  props: React.ComponentProps<typeof QuestionnaireNext>
) => {
  const { children, ...rest } = props;

  return (
    <QuestionnaireNext {...rest} data-slot="approval-card-next">
      {children || "Next"}
    </QuestionnaireNext>
  );
};

export const ApprovalCardSkip = (
  props: React.ComponentProps<typeof QuestionnaireSkip>
) => {
  const { children, ...rest } = props;

  return (
    <QuestionnaireSkip {...rest} data-slot="approval-card-skip">
      {children || "Skip"}
    </QuestionnaireSkip>
  );
};

export const ApprovalCardSubmit = (
  props: React.ComponentProps<typeof QuestionnaireSubmit>
) => {
  const { children, ...rest } = props;

  return (
    <QuestionnaireSubmit {...rest} data-slot="approval-card-submit">
      {children || "Approve"}
    </QuestionnaireSubmit>
  );
};

export type ApprovalCardRejectProps = Omit<
  React.ComponentProps<typeof Button>,
  "type"
>;

export const ApprovalCardReject = (props: ApprovalCardRejectProps) => {
  const { variant = "ghost", onClick, className, children, ...rest } = props;

  const { reject } = _useApprovalCardContext();

  return (
    <Button
      {...rest}
      className={cn("col-start-1 row-start-1 justify-self-start", className)}
      data-slot="approval-card-reject"
      onClick={(event) => {
        onClick?.(event);

        if (!event.defaultPrevented) {
          reject();
        }
      }}
      type="button"
      variant={variant}
    >
      {children || "Reject"}
    </Button>
  );
};
