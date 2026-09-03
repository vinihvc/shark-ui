import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    {images.map((image) => (
      <Item key={image.src} variant="outline">
        <ItemMedia variant="image">
          <img
            alt={image.alt}
            className="aspect-square w-full object-cover grayscale"
            height={80}
            src={image.src}
            width={80}
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{image.alt}</ItemTitle>
          <ItemDescription>{image.description}</ItemDescription>
        </ItemContent>
      </Item>
    ))}
  </div>
);

const images = [
  {
    alt: "Midnight City Lights",
    description: "Electric Nights · Neon Dreams · 3:45",
    src: "/images/gradients/blue.svg",
  },
  {
    alt: "Coffee Shop Conversations",
    description: "Urban Stories · The Morning Brew · 4:05",
    src: "/images/gradients/orange.svg",
  },
  {
    alt: "Digital Rain",
    description: "Binary Beats · Cyber Symphony · 3:30",
    src: "/images/gradients/purple.svg",
  },
];

export default Example;
