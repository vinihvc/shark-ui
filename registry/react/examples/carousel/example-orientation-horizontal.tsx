import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/react/components/carousel";

const Example = () => (
  <Carousel className="w-full max-w-48 sm:max-w-64" slideCount={slides.length}>
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
