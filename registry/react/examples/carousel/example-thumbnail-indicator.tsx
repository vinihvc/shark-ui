import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const Example = () => {
  const slides = [
    { src: "https://picsum.photos/seed/1/500/300", alt: "Nature landscape" },
    { src: "https://picsum.photos/seed/2/500/300", alt: "City skyline" },
    { src: "https://picsum.photos/seed/3/500/300", alt: "Mountain view" },
    { src: "https://picsum.photos/seed/4/500/300", alt: "Ocean sunset" },
    { src: "https://picsum.photos/seed/5/500/300", alt: "Forest path" },
  ];

  return (
    <Carousel
      className="w-full max-w-48 sm:max-w-64"
      loop
      slideCount={slides.length}
    >
      <CarouselControl className="relative">
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>

        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem index={index} key={slide.src}>
              <img alt={slide.alt} height={300} src={slide.src} width={500} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselControl>

      <CarouselIndicatorGroup className="mt-4">
        {slides.map((slide) => (
          <CarouselIndicator
            className="size-10 rounded-md"
            index={slides.indexOf(slide)}
            key={slide.src}
          >
            <img alt={slide.alt} height={40} src={slide.src} width={40} />
          </CarouselIndicator>
        ))}
      </CarouselIndicatorGroup>
    </Carousel>
  );
};

export default Example;
