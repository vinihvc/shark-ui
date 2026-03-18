"use client";

import {
  RatingGroup as ArkRatingGroup,
  useRatingGroupContext,
} from "@ark-ui/react/rating-group";
import { StarIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export const useRating = useRatingGroupContext;

interface RatingProps extends React.ComponentProps<typeof ArkRatingGroup.Root> {
  /**
   * The icon to use for the rating.
   *
   * @default <StarIcon />
   */
  icon?: React.ReactNode;
}

export const Rating = (props: RatingProps) => {
  const {
    icon = <StarIcon />,
    allowHalf = false,
    count = 5,
    className,
    ...rest
  } = props;

  return (
    <ArkRatingGroup.Root
      allowHalf={allowHalf}
      className={cn(
        "**:data-[slot=rating-item-indicator]:size-6",
        "text-warning",
        "data-readonly:pointer-events-none",
        className
      )}
      count={count}
      data-slot="rating"
      {...rest}
    >
      <ArkRatingGroup.Control
        className="inline-flex items-center gap-1"
        data-slot="rating-control"
      >
        <ArkRatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <RatingItem index={item} key={item}>
                <ArkRatingGroup.ItemContext>
                  {({ half, highlighted }) => (
                    <span
                      className={cn(
                        "relative inline-flex",
                        "**:data-fg:text-current **:data-fg:[clip-path:inset(0_0_0_0)]",
                        "[&[data-half]_[data-fg]]:[clip-path:inset(0_50%_0_0)]",
                        "[&:not([data-highlighted])_[data-fg]]:[clip-path:inset(0_100%_0_0)]",
                        "[&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full [&_svg]:text-current"
                      )}
                      data-half={half ? "" : undefined}
                      data-highlighted={highlighted ? "" : undefined}
                      data-slot="rating-item-indicator"
                    >
                      {React.cloneElement(
                        icon as React.ReactElement,
                        {
                          "data-bg": "",
                        } as React.ComponentProps<"svg">
                      )}

                      {React.cloneElement(
                        icon as React.ReactElement,
                        {
                          "data-fg": "",
                          fill: "currentColor",
                        } as React.ComponentProps<"svg">
                      )}
                    </span>
                  )}
                </ArkRatingGroup.ItemContext>
              </RatingItem>
            ))
          }
        </ArkRatingGroup.Context>

        <ArkRatingGroup.HiddenInput />
      </ArkRatingGroup.Control>
    </ArkRatingGroup.Root>
  );
};

export const RatingItem = (
  props: React.ComponentProps<typeof ArkRatingGroup.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkRatingGroup.Item
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-md",
        "not-[[data-disabled],[data-readonly]]:cursor-pointer",
        "data-disabled:opacity-64 data-disabled:grayscale",
        "outline-none focus-visible:ring-current not-data-readonly:focus-visible:ring-[3px] focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        className
      )}
      data-slot="rating-item"
      {...rest}
    />
  );
};
