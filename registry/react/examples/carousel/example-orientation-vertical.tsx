import {
  Carousel,
  CarouselContent,
  CarouselControl,
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
      className="h-40 w-full max-w-48 sm:max-w-64"
      orientation="vertical"
      slideCount={slides.length}
    >
      <CarouselControl>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </CarouselControl>

      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem index={index} key={slide.src}>
            <img alt={slide.alt} height={300} src={slide.src} width={500} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Example;
