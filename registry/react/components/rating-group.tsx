"use client";

import { RatingGroup as ArkRatingGroup } from "@ark-ui/react/rating-group";
import { Star } from "lucide-react";
import type React from "react";

export const RatingGroup = (
  props: React.ComponentProps<typeof ArkRatingGroup.Root>
) => {
  const { allowHalf = false, count = 5, ...rest } = props;

  return (
    <ArkRatingGroup.Root
      allowHalf={allowHalf}
      className="text-primary"
      count={count}
      data-slot="rating-group"
      {...rest}
    >
      <ArkRatingGroup.Control
        className="inline-flex gap-1"
        data-slot="rating-group-control"
      >
        <ArkRatingGroup.Context>
          {({ items }) =>
            items.map((item) => (
              <ArkRatingGroup.Item
                className="outline-none"
                data-slot="rating-group-item"
                index={item}
                key={item}
              >
                <ArkRatingGroup.ItemContext>
                  {({ half, highlighted }) => {
                    if (half) {
                      return (
                        <div className="relative">
                          <Star className="stroke-current" />

                          <div className="absolute inset-0 w-1/2 overflow-hidden">
                            <Star className="fill-current" />
                          </div>
                        </div>
                      );
                    }

                    if (highlighted) {
                      return <Star className="fill-current" />;
                    }

                    return <Star />;
                  }}
                </ArkRatingGroup.ItemContext>
              </ArkRatingGroup.Item>
            ))
          }
        </ArkRatingGroup.Context>

        <ArkRatingGroup.HiddenInput />
      </ArkRatingGroup.Control>
    </ArkRatingGroup.Root>
  );
};
