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

const Example = () => (
  <Carousel
    className="h-40 w-full max-w-48 sm:max-w-64"
    loop
    orientation="vertical"
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

    <CarouselIndicatorGroup className="ml-4">
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

const slides = [
  {
    alt: "Green mesh gradient",
    src: "/images/gradients/green-dark.svg",
  },
  {
    alt: "Blue mesh gradient",
    src: "/images/gradients/blue.svg",
  },
  {
    alt: "Purple mesh gradient",
    src: "/images/gradients/purple.svg",
  },
  {
    alt: "Orange mesh gradient",
    src: "/images/gradients/orange.svg",
  },
  {
    alt: "Rose mesh gradient",
    src: "/images/gradients/rose.svg",
  },
];

export default Example;
