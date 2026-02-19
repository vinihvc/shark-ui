"use client";

import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

type CarouselProps = Omit<
  React.ComponentProps<typeof ArkCarousel.Root>,
  "spacing" | "padding"
> & {
  /**
   * The amount of space between items.
   */
  spacing?: number;
  /**
   * The amount of padding around the carousel.
   */
  padding?: number;
};

export const Carousel = (props: CarouselProps) => {
  const { spacing = 4, padding = 0, className, ...rest } = props;

  const spacingValue = `${(spacing * 4) / 16}rem`;
  const paddingValue = `${(padding * 4) / 16}rem`;

  return (
    <ArkCarousel.Root
      className={cn(
        "relative",
        "flex flex-col",
        "data-[orientation=vertical]:w-max data-[orientation=vertical]:flex-row",
        className
      )}
      data-slot="carousel"
      padding={paddingValue}
      spacing={spacingValue}
      {...rest}
    />
  );
};

export const CarouselControl = (
  props: React.ComponentProps<typeof ArkCarousel.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Control
      className={cn(
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
  props: React.ComponentProps<typeof ArkCarousel.PrevTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.PrevTrigger
      className={cn(
        "absolute",
        "data-[orientation=horizontal]:-start-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
        "data-[orientation=vertical]:-top-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
        className
      )}
      data-slot="carousel-previous"
      {...rest}
      asChild
    >
      <Button clickEffect={false} pill size="icon-md" variant="outline">
        <ChevronLeftIcon />
        <span className="sr-only">Previous</span>
      </Button>
    </ArkCarousel.PrevTrigger>
  );
};

export const CarouselNext = (
  props: React.ComponentProps<typeof ArkCarousel.NextTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.NextTrigger
      className={cn(
        "absolute",
        "data-[orientation=horizontal]:-end-12 data-[orientation=horizontal]:top-1/2 data-[orientation=horizontal]:-translate-y-1/2",
        "data-[orientation=vertical]:-bottom-12 data-[orientation=vertical]:left-1/2 data-[orientation=vertical]:-translate-x-1/2 data-[orientation=vertical]:rotate-90",
        className
      )}
      {...rest}
      asChild
      data-slot="carousel-next"
    >
      <Button clickEffect={false} pill size="icon-md" variant="outline">
        <ChevronRightIcon />
        <span className="sr-only">Next</span>
      </Button>
    </ArkCarousel.NextTrigger>
  );
};

export const CarouselIndicatorGroup = (
  props: React.ComponentProps<typeof ArkCarousel.IndicatorGroup>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.IndicatorGroup
      className={cn(
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
  props: React.ComponentProps<typeof ArkCarousel.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Indicator
      className={cn(
        "size-2",
        "shrink-0",
        "bg-foreground",
        "opacity-64 data-current:opacity-100",
        "overflow-hidden",
        "[&_img]:size-full [&_img]:rounded-md [&_img]:object-cover",
        "rounded-full",
        className
      )}
      data-slot="carousel-indicator"
      {...rest}
    />
  );
};

export const CarouselContent = (
  props: React.ComponentProps<typeof ArkCarousel.ItemGroup>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.ItemGroup
      className={cn(
        "min-w-0",
        "flex flex-1",
        "overflow-hidden rounded-md",
        className
      )}
      data-slot="carousel-group"
      {...rest}
    />
  );
};

export const CarouselItem = (
  props: React.ComponentProps<typeof ArkCarousel.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Item
      className={cn(
        "min-w-0",
        "shrink-0 grow-0 basis-full",
        "[&_img]:size-full [&_img]:rounded-md [&_img]:object-cover",
        className
      )}
      data-slot="carousel-item"
      {...rest}
    />
  );
};
