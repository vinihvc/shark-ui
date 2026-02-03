"use client";

import { useState } from "react";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const Example = () => {
  const [page, setPage] = useState(0);

  const slides = Array.from({ length: 8 });

  return (
    <div className="flex flex-col gap-4">
      <Carousel
        className="w-full max-w-48 sm:max-w-64"
        onPageChange={({ page }) => setPage(page)}
        page={page}
        slideCount={slides.length}
      >
        <CarouselControl>
          <CarouselPrevious>Previous</CarouselPrevious>
          <CarouselNext>Next</CarouselNext>
        </CarouselControl>

        <CarouselContent>
          {slides.map((_, index) => (
            <CarouselItem index={index} key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-center text-muted-foreground text-sm">
        Current page: {page + 1} of 5
      </p>
    </div>
  );
};

export default Example;
