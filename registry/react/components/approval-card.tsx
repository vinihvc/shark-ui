"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  CornerDownLeftIcon,
  ListTodoIcon,
  MessageCircleQuestionIcon,
  TerminalIcon,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Input } from "@/registry/react/components/input";
import { Kbd } from "@/registry/react/components/kbd";

export type ApprovalVariant = "command" | "plan" | "questions";

export interface ApprovalQuestion {
  id: string;
  options: string[];
  prompt: string;
}

export interface ApprovalPlanStep {
  detail?: string;
  id: string;
  title: string;
}

const DEFAULT_AUTO_APPROVE_SECS = 30;
const DEFAULT_PLAN_PREVIEW = 3;

interface ApprovalCardProps extends React.ComponentProps<"div"> {
  approveLabel?: string;
  autoApproveSeconds?: number;
  command?: string;
  cwd?: string;
  onApprove?: (payload?: { answers?: Record<string, string> }) => void;
  onReject?: () => void;
  plan?: ApprovalPlanStep[];
  planPreviewCount?: number;
  planSummary?: string;
  planTitle?: string;
  questions?: ApprovalQuestion[];
  rejectLabel?: string;
  title?: string;
  variant?: ApprovalVariant;
}

const resolveTitle = (
  title: string | undefined,
  variant: ApprovalVariant
): string => {
  if (title) {
    return title;
  }
  if (variant === "questions") {
    return "Questions";
  }
  if (variant === "command") {
    return "Run this command?";
  }
  return "Plan overview";
};

const resolveApproveLabel = (
  approveLabel: string | undefined,
  variant: ApprovalVariant
): string => {
  if (approveLabel) {
    return approveLabel;
  }
  if (variant === "questions") {
    return "Continue";
  }
  if (variant === "command") {
    return "Run";
  }
  return "Approve";
};

const resolveIcon = (variant: ApprovalVariant) => {
  if (variant === "questions") {
    return MessageCircleQuestionIcon;
  }
  if (variant === "command") {
    return TerminalIcon;
  }
  return ListTodoIcon;
};

interface QuestionOptionsProps {
  activeQuestion: ApprovalQuestion;
  answers: Record<string, string>;
  customDraft: Record<string, string>;
  formId: string;
  isOtherChoice: (question: ApprovalQuestion) => boolean;
  onCustomChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCustomFocus: () => void;
  onOptionClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuestionOptions = ({
  activeQuestion,
  answers,
  customDraft,
  formId,
  isOtherChoice,
  onCustomChange,
  onCustomFocus,
  onOptionClick,
}: QuestionOptionsProps) => {
  const otherSelected = isOtherChoice(activeQuestion);
  const customValue =
    customDraft[activeQuestion.id] ??
    (otherSelected ? (answers[activeQuestion.id] ?? "") : "");

  return (
    <fieldset className="m-0 flex flex-col gap-1.5 border-0 p-0">
      <legend className="sr-only">{activeQuestion.prompt}</legend>
      {activeQuestion.options.map((option, index) => {
        const selected =
          answers[activeQuestion.id] === option && !otherSelected;
        const letter = String.fromCharCode(65 + index);
        return (
          <button
            aria-pressed={selected}
            className={cn(
              "flex items-center gap-2 rounded-lg border px-2.5 py-2 text-start hover:bg-muted/60",
              selected && "border-primary bg-accent"
            )}
            data-option={option}
            data-question-id={activeQuestion.id}
            key={option}
            onClick={onOptionClick}
            type="button"
          >
            <Kbd>{letter}</Kbd>
            <span>{option}</span>
          </button>
        );
      })}
      <div
        className={cn(
          "flex items-center gap-2 rounded-lg border px-2.5 py-2",
          otherSelected && "border-primary bg-accent"
        )}
      >
        <Kbd>{String.fromCharCode(65 + activeQuestion.options.length)}</Kbd>
        <Input
          aria-label={`Custom answer for: ${activeQuestion.prompt}`}
          className="h-7 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
          id={`${formId}-${activeQuestion.id}`}
          onChange={onCustomChange}
          onFocus={onCustomFocus}
          placeholder="Something else…"
          type="text"
          value={customValue}
        />
      </div>
    </fieldset>
  );
};

interface PlanPanelProps {
  onToggleExpand: () => void;
  plan: ApprovalPlanStep[];
  planExpanded: boolean;
  planPreview: ApprovalPlanStep[];
  planRest: ApprovalPlanStep[];
  planSummary?: string;
  planTitle: string;
}

const PlanPanel = ({
  onToggleExpand,
  plan,
  planExpanded,
  planPreview,
  planRest,
  planSummary,
  planTitle,
}: PlanPanelProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex flex-col gap-1">
      <p className="font-medium">{planTitle}</p>
      {planSummary ? (
        <p className="whitespace-pre-wrap text-muted-foreground text-xs">
          {planSummary}
        </p>
      ) : null}
    </div>
    <div className="rounded-lg border bg-muted/30">
      <div className="flex items-center gap-2 border-b px-3 py-2 text-xs">
        <ListTodoIcon aria-hidden="true" className="size-3.5" />
        <span className="font-medium">To-dos</span>
        <span className="text-muted-foreground">{plan.length}</span>
      </div>
      <ul className="flex flex-col gap-1 p-2">
        {(planExpanded ? plan : planPreview).map((item) => (
          <li
            className="flex items-start gap-2 rounded-md px-2 py-1.5 text-xs"
            key={item.id}
          >
            <span
              aria-hidden="true"
              className="mt-1 size-2 shrink-0 rounded-full border border-muted-foreground/50"
            />
            <span className="min-w-0 flex-1">
              <span className="font-medium">{item.title}</span>
              {item.detail ? (
                <span className="mt-0.5 block text-muted-foreground">
                  {item.detail}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
      {planRest.length > 0 ? (
        <button
          aria-expanded={planExpanded}
          className="flex w-full items-center justify-center gap-1 border-t px-3 py-2 text-muted-foreground text-xs hover:text-foreground"
          onClick={onToggleExpand}
          type="button"
        >
          {planExpanded ? "Show less" : `${planRest.length} more`}
        </button>
      ) : null}
    </div>
  </div>
);

interface FooterStartProps {
  autoActive: boolean;
  autoSecs: number;
  onCancelAuto: () => void;
  onNext: () => void;
  onPrevious: () => void;
  questionCount: number;
  safeStep: number;
  variant: ApprovalVariant;
}

const FooterStart = ({
  autoActive,
  autoSecs,
  onCancelAuto,
  onNext,
  onPrevious,
  questionCount,
  safeStep,
  variant,
}: FooterStartProps) => {
  if (variant === "questions") {
    return (
      <fieldset
        aria-label={`Question ${safeStep + 1} of ${questionCount}`}
        className="m-0 flex items-center gap-1 border-0 p-0"
      >
        <Button
          aria-label="Previous question"
          disabled={safeStep <= 0}
          onClick={onPrevious}
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <ChevronUpIcon aria-hidden="true" />
        </Button>
        <span className="min-w-10 text-center text-muted-foreground text-xs tabular-nums">
          {safeStep + 1} / {questionCount}
        </span>
        <Button
          aria-label="Next question"
          disabled={safeStep >= questionCount - 1}
          onClick={onNext}
          size="icon-xs"
          type="button"
          variant="ghost"
        >
          <ChevronDownIcon aria-hidden="true" />
        </Button>
      </fieldset>
    );
  }

  if (variant === "plan" && autoActive) {
    return (
      <button
        aria-label={`Auto approve in ${autoSecs} seconds. Click to cancel.`}
        className="text-muted-foreground text-xs hover:text-foreground"
        onClick={onCancelAuto}
        type="button"
      >
        Auto approve in {autoSecs}s
      </button>
    );
  }

  return <span aria-hidden="true" />;
};

export const ApprovalCard = (props: ApprovalCardProps) => {
  const {
    approveLabel,
    autoApproveSeconds = DEFAULT_AUTO_APPROVE_SECS,
    className,
    command = "pnpm build",
    cwd = "~/project",
    onApprove,
    onReject,
    plan = [],
    planPreviewCount = DEFAULT_PLAN_PREVIEW,
    planSummary,
    planTitle = "Implementation plan",
    questions = [],
    rejectLabel,
    title,
    variant = "questions",
    ...rest
  } = props;

  const formId = useId();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [otherSelected, setOtherSelected] = useState<Record<string, boolean>>(
    {}
  );
  const [customDraft, setCustomDraft] = useState<Record<string, string>>({});
  const [planExpanded, setPlanExpanded] = useState(false);
  const [autoSecs, setAutoSecs] = useState(autoApproveSeconds);
  const [autoActive, setAutoActive] = useState(
    variant === "plan" && autoApproveSeconds > 0
  );

  useEffect(() => {
    if (variant !== "plan" || !autoActive) {
      return;
    }
    const id = window.setInterval(() => {
      setAutoSecs((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [autoActive, variant]);

  useEffect(() => {
    if (variant !== "plan" || !autoActive || autoSecs > 0) {
      return;
    }
    setAutoActive(false);
    onApprove?.();
  }, [autoActive, autoSecs, onApprove, variant]);

  const safeStep = Math.min(step, Math.max(questions.length - 1, 0));
  const activeQuestion = questions[safeStep];
  const allAnswered =
    questions.length > 0 &&
    questions.every((question) => Boolean(answers[question.id]?.trim()));

  const resolvedTitle = resolveTitle(title, variant);
  const resolvedApprove = resolveApproveLabel(approveLabel, variant);
  const resolvedReject =
    rejectLabel ?? (variant === "plan" ? "View plan" : "Skip");

  const canContinue = variant !== "questions" || allAnswered;
  const previewCount = Math.max(0, planPreviewCount);
  const planPreview = plan.slice(0, previewCount);
  const planRest = plan.slice(previewCount);
  const Icon = resolveIcon(variant);

  const handleApprove = useCallback(() => {
    setAutoActive(false);
    if (variant === "questions") {
      if (!allAnswered) {
        return;
      }
      onApprove?.({ answers });
      return;
    }
    onApprove?.();
  }, [allAnswered, answers, onApprove, variant]);

  const handleReject = useCallback(() => {
    setAutoActive(false);
    onReject?.();
  }, [onReject]);

  const selectOption = useCallback(
    (questionId: string, option: string) => {
      setOtherSelected((current) => ({ ...current, [questionId]: false }));
      setAnswers((current) => ({ ...current, [questionId]: option }));
      if (safeStep < questions.length - 1) {
        setStep((current) => Math.min(current + 1, questions.length - 1));
      }
    },
    [questions.length, safeStep]
  );

  const handleOptionClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { option, questionId } = event.currentTarget.dataset;
      if (option && questionId) {
        selectOption(questionId, option);
      }
    },
    [selectOption]
  );

  const selectOther = useCallback(
    (questionId: string) => {
      setOtherSelected((current) => ({ ...current, [questionId]: true }));
      const draft = customDraft[questionId]?.trim() ?? "";
      setAnswers((current) => {
        const next = { ...current };
        if (draft) {
          next[questionId] = draft;
        } else {
          delete next[questionId];
        }
        return next;
      });
    },
    [customDraft]
  );

  const handleCustomFocus = useCallback(() => {
    if (activeQuestion) {
      selectOther(activeQuestion.id);
    }
  }, [activeQuestion, selectOther]);

  const handleCustomChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!activeQuestion) {
        return;
      }
      const questionId = activeQuestion.id;
      const text = event.target.value;
      setCustomDraft((current) => ({ ...current, [questionId]: text }));
      setOtherSelected((current) => ({ ...current, [questionId]: true }));
      setAnswers((current) => {
        const next = { ...current };
        const trimmed = text.trim();
        if (trimmed) {
          next[questionId] = trimmed;
        } else {
          delete next[questionId];
        }
        return next;
      });
    },
    [activeQuestion]
  );

  const isOtherChoice = useCallback(
    (question: ApprovalQuestion) => {
      if (otherSelected[question.id]) {
        return true;
      }
      const answer = answers[question.id];
      return Boolean(answer) && !question.options.includes(answer);
    },
    [answers, otherSelected]
  );

  const handleTogglePlanExpand = useCallback(() => {
    setPlanExpanded((open) => !open);
  }, []);

  const handlePrevious = useCallback(() => {
    setStep((current) => Math.max(0, current - 1));
  }, []);

  const handleNext = useCallback(() => {
    setStep((current) => Math.min(current + 1, questions.length - 1));
  }, [questions.length]);

  const handleCancelAuto = useCallback(() => {
    setAutoActive(false);
  }, []);

  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-col gap-3 rounded-xl border bg-card p-3 text-card-foreground text-sm",
        className
      )}
      data-slot="approval-card"
      data-variant={variant}
      {...rest}
    >
      <div className="flex items-start gap-2">
        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-foreground">
          <Icon aria-hidden="true" className="size-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-medium">{resolvedTitle}</p>
        </div>
      </div>

      {variant === "questions" && activeQuestion ? (
        <div aria-live="polite" className="flex flex-col gap-3">
          <p className="font-medium text-foreground">{activeQuestion.prompt}</p>
          <QuestionOptions
            activeQuestion={activeQuestion}
            answers={answers}
            customDraft={customDraft}
            formId={formId}
            isOtherChoice={isOtherChoice}
            onCustomChange={handleCustomChange}
            onCustomFocus={handleCustomFocus}
            onOptionClick={handleOptionClick}
          />
        </div>
      ) : null}

      {variant === "command" ? (
        <div className="overflow-hidden rounded-lg border bg-muted/40">
          <div className="border-b px-3 py-1.5 font-mono text-muted-foreground text-xs">
            {cwd}
          </div>
          <pre className="overflow-x-auto px-3 py-2 font-mono text-xs">
            {command}
          </pre>
        </div>
      ) : null}

      {variant === "plan" ? (
        <PlanPanel
          onToggleExpand={handleTogglePlanExpand}
          plan={plan}
          planExpanded={planExpanded}
          planPreview={planPreview}
          planRest={planRest}
          planSummary={planSummary}
          planTitle={planTitle}
        />
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-2">
        <FooterStart
          autoActive={autoActive}
          autoSecs={autoSecs}
          onCancelAuto={handleCancelAuto}
          onNext={handleNext}
          onPrevious={handlePrevious}
          questionCount={questions.length}
          safeStep={safeStep}
          variant={variant}
        />

        <div className="ms-auto flex items-center gap-2">
          <Button
            onClick={handleReject}
            size="sm"
            type="button"
            variant="ghost"
          >
            {resolvedReject}
          </Button>
          <Button
            disabled={!canContinue}
            onClick={handleApprove}
            size="sm"
            type="button"
          >
            {resolvedApprove}
            <CornerDownLeftIcon aria-hidden="true" className="size-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};
