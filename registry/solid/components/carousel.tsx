import {
  Carousel as ArkCarousel,
  useCarouselContext,
} from "@ark-ui/solid/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-solid";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/solid/components/button";

export const useCarousel = useCarouselContext;

export const Carousel = (props: ComponentProps<typeof ArkCarousel.Root>) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.Root
      class={cn(
        "relative",
        "flex flex-col",
        "data-[orientation=vertical]:w-max data-[orientation=vertical]:flex-row",
        className
      )}
      data-slot="carousel"
      {...rest}
    />
  );
};

export const CarouselControl = (
  props: ComponentProps<typeof ArkCarousel.Control>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.Control
      class={cn(
        "flex items-center justify-between gap-2",
        "data-[orientation=vertical]:flex-col",
        className
      )}
      data-slot="carousel-control"
      {...rest}
    />
  );
};

export const CarouselPrevious = (
  props: ComponentProps<typeof ArkCarousel.PrevTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.PrevTrigger
      class={cn(
        "absolute",
        "data-[orientation=horizontal]:-inset-s-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
        "data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
        className
      )}
      data-slot="carousel-previous"
      {...rest}
      asChild
    >
      <Button
        aria-label="Previous"
        clickEffect={false}
        pill
        size="icon-md"
        variant="outline"
      >
        <ChevronLeftIcon aria-hidden />
      </Button>
    </ArkCarousel.PrevTrigger>
  );
};

export const CarouselNext = (
  props: ComponentProps<typeof ArkCarousel.NextTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.NextTrigger
      class={cn(
        "absolute",
        "data-[orientation=horizontal]:-inset-e-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
        "data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
        className
      )}
      {...rest}
      asChild
      data-slot="carousel-next"
    >
      <Button
        aria-label="Next"
        clickEffect={false}
        pill
        size="icon-md"
        variant="outline"
      >
        <ChevronRightIcon aria-hidden />
      </Button>
    </ArkCarousel.NextTrigger>
  );
};

export const CarouselIndicatorGroup = (
  props: ComponentProps<typeof ArkCarousel.IndicatorGroup>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.IndicatorGroup
      class={cn(
        "flex justify-center gap-2",
        "data-[orientation=vertical]:flex-col",
        className
      )}
      data-slot="carousel-indicator-group"
      {...rest}
    />
  );
};

export const CarouselIndicator = (
  props: ComponentProps<typeof ArkCarousel.Indicator>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.Indicator
      class={cn(
        "size-2",
        "shrink-0",
        "bg-foreground",
        "opacity-64 data-current:opacity-100",
        "overflow-hidden",
        "[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover",
        "rounded-full",
        className
      )}
      data-slot="carousel-indicator"
      {...rest}
    />
  );
};

export const CarouselContent = (
  props: ComponentProps<typeof ArkCarousel.ItemGroup>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.ItemGroup
      class={cn(
        "min-w-0",
        "-my-4 py-4",
        "flex flex-1",
        "overflow-hidden rounded-lg",
        className
      )}
      data-slot="carousel-group"
      {...rest}
    />
  );
};

export const CarouselItem = (
  props: ComponentProps<typeof ArkCarousel.Item>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkCarousel.Item
      class={cn(
        "min-w-0",
        "shrink-0 grow-0 basis-full",
        "[&_img]:size-full [&_img]:rounded-lg [&_img]:object-cover",
        className
      )}
      data-slot="carousel-item"
      {...rest}
    />
  );
};
