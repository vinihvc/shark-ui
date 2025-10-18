import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const CarouselDemo = () => {
  const images = Array.from(
    { length: 8 },
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/300`
  );

  return (
    <Carousel allowMouseDrag slideCount={images.length}>
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselIndicatorGroup>
        {images.map((_, index) => (
          <CarouselIndicator index={index} key={index} />
        ))}
      </CarouselIndicatorGroup>

      <CarouselItemGroup>
        {images.map((image, index) => (
          <CarouselItem index={index} key={image}>
            <img
              alt={`Slide ${index}`}
              className="h-full w-full rounded-md object-cover"
              src={image}
            />
          </CarouselItem>
        ))}
      </CarouselItemGroup>
    </Carousel>
  );
};

export default CarouselDemo;
