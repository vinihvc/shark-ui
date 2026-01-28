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
  const slides = Array.from({ length: 16 });

  return (
    <Carousel
      className="w-full max-w-48 sm:max-w-80"
      slideCount={slides.length}
      slidesPerPage={3}
    >
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem index={index} key={index}>
            <Card>
              <CardContent className="flex h-40 items-center justify-center">
                <span className="font-semibold text-2xl">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Example;
