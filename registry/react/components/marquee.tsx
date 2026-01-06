import { Marquee as ArkMarquee } from "@ark-ui/react/marquee";
import type React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps
  extends Omit<React.ComponentProps<typeof ArkMarquee.Root>, "spacing"> {}

export const Marquee = (props: MarqueeProps) => {
  const { autoFill = true, speed = 50, className, children, ...rest } = props;

  return (
    <ArkMarquee.Root
      autoFill={autoFill}
      className={cn(
        "[--gap:--spacing(6)] [--marquee-spacing:var(--gap)]",
        "relative",
        "group",
        "w-full max-w-full",
        className
      )}
      data-slot="marquee"
      speed={speed}
      {...rest}
    >
      <MarqueeEdge side="start" />

      <ArkMarquee.Viewport
        className="flex overflow-hidden"
        data-slot="marquee-viewport"
      >
        <ArkMarquee.Content
          className={cn(
            "flex",
            "min-w-max",
            "delay-(--marquee-delay)",
            "data-[side=bottom]:animate-marquee-y data-[side=top]:animate-marquee-y",
            "data-[side=end]:animate-marquee-x data-[side=start]:animate-marquee-x",
            "data-[orientation=horizontal]:flex-row",
            "data-[orientation=vertical]:flex-col",
            "data-reverse:direction-[reverse]",
            "group-data-paused:paused!"
          )}
          data-slot="marquee-content"
        >
          {children}
        </ArkMarquee.Content>
      </ArkMarquee.Viewport>

      <MarqueeEdge side="end" />
    </ArkMarquee.Root>
  );
};

export const MarqueeItem = (
  props: React.ComponentProps<typeof ArkMarquee.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Item
      className={cn("w-full text-nowrap", className)}
      data-slot="marquee-item"
      {...rest}
    />
  );
};

export const MarqueeEdge = (
  props: React.ComponentProps<typeof ArkMarquee.Edge>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Edge
      className={cn(
        "absolute z-10",
        "w-1/5",
        "pointer-events-none",
        "from-background to-transparent",
        "data-[side=start]:bg-linear-to-r",
        "data-[side=end]:bg-linear-to-l",
        "data-[side=top]:bg-linear-to-b",
        "data-[side=bottom]:bg-linear-to-t",
        className
      )}
      data-slot="marquee-edge"
      {...rest}
    />
  );
};
