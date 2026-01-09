"use client";

import { Carousel as ArkCarousel } from "@ark-ui/react/carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const Carousel = (
  props: React.ComponentProps<typeof ArkCarousel.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.Root
      className={cn("relative", className)}
      data-slot="carousel"
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
      className={cn(className)}
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
      className={cn("absolute top-1/2 -left-12 -translate-y-1/2", className)}
      data-slot="carousel-previous"
      {...rest}
      asChild
    >
      <Button className="rounded-full" size="icon-sm">
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
      className={cn("absolute top-1/2 -right-12 -translate-y-1/2", className)}
      {...rest}
      asChild
      data-slot="carousel-next"
    >
      <Button className="rounded-full" size="icon-sm">
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
        "absolute bottom-2 left-1/2 -translate-x-1/2",
        "flex gap-2",
        "px-3 py-3",
        "bg-background/80 backdrop-blur-sm",
        "rounded-lg",
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
        "bg-foreground",
        "opacity-50 data-current:opacity-100",
        "rounded-full",
        className
      )}
      data-slot="carousel-indicator"
      {...rest}
    />
  );
};

export const CarouselGroup = (
  props: React.ComponentProps<typeof ArkCarousel.ItemGroup>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCarousel.ItemGroup
      className={cn("flex", className)}
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
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      data-slot="carousel-item"
      {...rest}
    />
  );
};
