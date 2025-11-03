"use client";

import { ark, Portal } from "@ark-ui/react";
import {
  Tour as ArkTour,
  type TourStepDetails,
  type UseTourReturn,
  useTour,
} from "@ark-ui/react/tour";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  type DialogBackdrop,
  DialogBody,
  DialogFooter,
  DialogHeader,
  dialogBackdropVariants,
} from "@/registry/react/components/dialog";

export type TourStepType = TourStepDetails;

type TourProviderProps = {
  /**
   * The tour instance
   */
  tour: UseTourReturn;
  /**
   * The function to start the tour
   */
  handleStart: () => void;
};

const TourProvider = React.createContext<TourProviderProps>(
  {} as TourProviderProps
);

interface TourProps
  extends Omit<React.ComponentProps<typeof ArkTour.Root>, "tour"> {
  /**
   * The steps to display in the tour
   *
   * @default []
   */
  steps: TourStepDetails[];
}

export const Tour = (props: TourProps) => {
  const { steps = [], lazyMount = true, unmountOnExit = true, ...rest } = props;

  const [isStarted, setIsStarted] = React.useState(false);

  const tour = useTour({ steps });

  React.useEffect(() => {
    if (isStarted) {
      document.body.classList.add("relative");
    } else {
      document.body.classList.remove("relative");
    }

    return () => {
      document.body.classList.remove("relative");
    };
  }, [isStarted]);

  const handleStart = React.useCallback(() => {
    setIsStarted(true);
    tour.start();
  }, [tour]);

  return (
    <TourProvider.Provider value={{ tour, handleStart }}>
      <ArkTour.Root
        lazyMount={lazyMount}
        tour={tour}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </TourProvider.Provider>
  );
};

interface TourTriggerProps extends React.ComponentProps<"button"> {}

export const TourTrigger = (props: TourTriggerProps) => {
  const { onClick, ...rest } = props;

  const { handleStart } = useTourContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    handleStart();
  };

  return (
    <ark.button
      data-part="trigger"
      data-scope="tour"
      type="button"
      {...rest}
      onClick={handleClick}
    />
  );
};

export const TourActionTrigger = (
  props: React.ComponentProps<typeof ArkTour.ActionTrigger>
) => <ArkTour.ActionTrigger {...props} />;

export const TourBackdrop = (
  props: React.ComponentProps<typeof DialogBackdrop>
) => <ArkTour.Backdrop className={dialogBackdropVariants()} {...props} />;

interface TourContentProps
  extends React.ComponentProps<typeof ArkTour.Content> {
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const TourContent = (props: TourContentProps) => {
  const { showCloseButton = true, className, children, ...rest } = props;

  return (
    <Portal>
      <TourBackdrop />

      <ArkTour.Positioner
        className={cn(
          "z-50",
          "flex items-center justify-center",
          "data-[type=dialog]:fixed data-[type=dialog]:inset-0",
          "data-[type=tooltip]:absolute"
        )}
      >
        <ArkTour.Content
          className={cn(
            "z-50",
            "relative",
            "w-full max-w-md",
            "flex flex-col gap-4",
            "bg-background",
            "rounded-lg border shadow-lg",
            "focus:outline-none focus:ring-0",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
            "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            className
          )}
          {...rest}
        >
          {children}

          {showCloseButton && (
            <TourClose asChild className="absolute top-4 right-4">
              <Button
                className="size-8 border-none opacity-70 hover:opacity-100"
                size="icon-md"
                variant="ghost"
              >
                <X />

                <span className="sr-only">Close</span>
              </Button>
            </TourClose>
          )}
        </ArkTour.Content>
      </ArkTour.Positioner>

      <ArkTour.Spotlight className="z-50 border-2 border-ark" />
    </Portal>
  );
};

export const TourBody = (props: React.ComponentProps<typeof DialogBody>) => (
  <DialogBody data-scope="tour" {...props} />
);

export const TourHeader = (
  props: React.ComponentProps<typeof DialogHeader>
) => <DialogHeader data-scope="tour" {...props} />;

export const TourTitle = (
  props: React.ComponentProps<typeof ArkTour.Title>
) => {
  const { className, ...rest } = props;

  const { tour } = useTourContext();

  return (
    <ArkTour.Title
      className={cn(
        "font-semibold text-base leading-none tracking-tight",
        className
      )}
      {...rest}
    >
      {tour.step?.title}
    </ArkTour.Title>
  );
};

export const TourDescription = (
  props: React.ComponentProps<typeof ArkTour.Description>
) => {
  const { className, ...rest } = props;

  const { tour } = useTourContext();

  return (
    <ArkTour.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...rest}
    >
      {tour.step?.description}
    </ArkTour.Description>
  );
};

export const TourProgressText = (
  props: React.ComponentProps<typeof ArkTour.ProgressText>
) => {
  const { className, ...rest } = props;

  const { tour } = useTourContext();

  return (
    <ArkTour.ProgressText
      className={cn("text-muted-foreground text-sm", className)}
      {...rest}
    >
      {tour.getProgressText()}
    </ArkTour.ProgressText>
  );
};

export const TourClose = (
  props: React.ComponentProps<typeof ArkTour.CloseTrigger>
) => <ArkTour.CloseTrigger {...props} />;

export const TourFooter = (
  props: React.ComponentProps<typeof DialogFooter>
) => {
  const { children, ...rest } = props;

  return (
    <ArkTour.Control {...rest} asChild>
      <DialogFooter data-scope="tour">{children}</DialogFooter>
    </ArkTour.Control>
  );
};

export const TourPreviousStep = (
  props: Omit<React.ComponentProps<typeof TourActionTrigger>, "action">
) => {
  const { ...rest } = props;

  const { tour } = useTourContext();

  const prevAction = React.useMemo(
    () => tour.step?.actions?.find((action) => action.action === "prev"),
    [tour]
  );

  if (!prevAction) {
    return null;
  }

  return (
    <TourActionTrigger {...rest} action={prevAction} asChild>
      <Button size="sm" variant="outline">
        <ChevronLeft />
        {prevAction.label}
      </Button>
    </TourActionTrigger>
  );
};

export const TourNextStep = (
  props: Omit<React.ComponentProps<typeof TourActionTrigger>, "action">
) => {
  const { ...rest } = props;

  const { tour } = useTourContext();

  const action = React.useMemo(
    () =>
      tour.step?.actions?.find(
        (a) => a.action === "next" || a.action === "dismiss"
      ),
    [tour]
  );

  const actionType = React.useMemo(() => action?.action, [action]);

  if (!action) {
    return null;
  }

  return (
    <TourActionTrigger {...rest} action={action} asChild>
      <Button size="sm">
        {action.label}

        {actionType === "next" && <ChevronRight />}
      </Button>
    </TourActionTrigger>
  );
};

export const useTourContext = () => {
  const context = React.use(TourProvider);

  if (!context) {
    throw new Error("useTour must be used within a TourProvider");
  }

  return context;
};
