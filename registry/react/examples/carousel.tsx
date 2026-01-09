import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Carousel,
  CarouselControl,
  CarouselGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const CarouselDemo = () => {
  const items = Array.from({ length: 8 }, (_, index) => `Slide ${index}`);

  return (
    <Carousel
      allowMouseDrag
      slideCount={items.length}
      slidesPerPage={2}
      spacing="24px"
    >
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselGroup>
        {items.map((item, index) => (
          <CarouselItem index={index} key={item}>
            <Card title={`Slide ${index}`}>
              <CardHeader
                description={`Slide ${index}`}
                title={`Slide ${index}`}
              />
              <CardContent>
                Check out the documentation to get started.
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselGroup>
    </Carousel>
  );
};

export default CarouselDemo;
