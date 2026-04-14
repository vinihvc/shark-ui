import { Marquee as ArkMarquee } from "@ark-ui/solid/marquee";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";

interface MarqueeProps
  extends Omit<ComponentProps<typeof ArkMarquee.Root>, "side"> {
  /**
   *
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Whether to show the edges of the marquee
   *
   * @default true
   */
  showEdges?: boolean;
}

export const Marquee = (props: MarqueeProps) => {
  const {
    speed = 50,
    showEdges = true,
    spacing = 4,
    orientation = "horizontal",
    class: className,
    children,
    ...rest
  } = props;

  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <ArkMarquee.Root
      class={cn(
        "group/marquee",
        "relative",
        "group",
        "w-full max-w-full",
        className
      )}
      data-orientation={orientation}
      data-slot="marquee"
      side={side}
      speed={speed}
      {...rest}
    >
      {children}

      {showEdges && (
        <>
          <MarqueeEdge side={orientation === "horizontal" ? "start" : "top"} />
          <MarqueeEdge side={orientation === "horizontal" ? "end" : "bottom"} />
        </>
      )}
    </ArkMarquee.Root>
  );
};

export const MarqueeContent = (
  props: ComponentProps<typeof ArkMarquee.Content>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkMarquee.Viewport
      class="flex overflow-hidden"
      data-slot="marquee-viewport"
    >
      <ArkMarquee.Content
        class={cn(
          "flex",
          "min-w-max",
          "delay-(--marquee-delay)",
          "data-[orientation=vertical]:animate-marquee-y",
          "data-[orientation=horizontal]:animate-marquee-x",
          "data-[orientation=horizontal]:flex-row",
          "data-[orientation=vertical]:flex-col",
          "data-reverse:direction-[reverse]!",
          "group-data-paused:paused!",
          className
        )}
        data-slot="marquee-content"
        {...rest}
      />
    </ArkMarquee.Viewport>
  );
};

export const MarqueeItem = (props: ComponentProps<typeof ArkMarquee.Item>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkMarquee.Item
      class={cn("w-full text-nowrap", className)}
      data-slot="marquee-item"
      {...rest}
    />
  );
};

export const MarqueeEdge = (props: ComponentProps<typeof ArkMarquee.Edge>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkMarquee.Edge
      class={cn(
        "absolute z-10",
        "group-data-[orientation=horizontal]/marquee:h-full group-data-[orientation=horizontal]/marquee:w-1/5",
        "group-data-[orientation=vertical]/marquee:h-1/5 group-data-[orientation=vertical]/marquee:w-full",
        "pointer-events-none",
        "from-background to-transparent",
        "data-[placement=start]:bg-linear-to-r",
        "data-[placement=end]:bg-linear-to-l",
        "data-[placement=top]:bg-linear-to-b",
        "data-[placement=bottom]:bg-linear-to-t",
        className
      )}
      data-slot="marquee-edge"
      {...rest}
    />
  );
};
