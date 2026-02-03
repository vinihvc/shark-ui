import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const images = [
  {
    src: "https://picsum.photos/seed/1/500/300",
    alt: "Midnight City Lights",
    description: "Electric Nights · Neon Dreams · 3:45",
  },
  {
    src: "https://picsum.photos/seed/2/500/300",
    alt: "Coffee Shop Conversations",
    description: "Urban Stories · The Morning Brew · 4:05",
  },
  {
    src: "https://picsum.photos/seed/3/500/300",
    alt: "Digital Rain",
    description: "Binary Beats · Cyber Symphony · 3:30",
  },
];

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    {images.map((image) => (
      <Item key={image.src} variant="outline">
        <ItemMedia variant="image">
          <img
            alt={image.alt}
            className="aspect-square w-full rounded-sm object-cover grayscale"
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

export default Example;
