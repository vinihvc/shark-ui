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
  const slides = Array.from({ length: 4 });

  return (
    <Carousel
      autoplay
      className="w-full max-w-48 sm:max-w-64"
      loop
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
  );
};

export default Example;
