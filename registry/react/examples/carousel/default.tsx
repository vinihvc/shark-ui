import { Card, CardContent } from "@/registry/react/components/card";
import {
  Carousel,
  CarouselControl,
  CarouselGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const CarouselDemo = () => {
  return (
    <Carousel
      allowMouseDrag
      className="w-full max-w-48 sm:max-w-xs"
      slideCount={8}
      slidesPerPage={1}
      spacing="20px"
    >
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselGroup>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem index={index} key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="font-semibold text-4xl">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselGroup>
    </Carousel>
  );
};

export default CarouselDemo;
