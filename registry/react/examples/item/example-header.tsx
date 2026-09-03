import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <div className="flex w-full max-w-xl flex-col gap-6">
    <ItemGroup className="grid grid-cols-3 gap-4">
      {models.map((model) => (
        <Item key={model.name} variant="outline">
          <ItemHeader>
            <img
              alt={model.name}
              className="aspect-square grayscale"
              height={128}
              src={model.image}
              width={128}
            />
          </ItemHeader>
          <ItemContent>
            <ItemTitle>{model.name}</ItemTitle>
            <ItemDescription>{model.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  </div>
);

const models = [
  {
    description: "Everyday tasks and UI generation.",
    image: "/images/gradients/green-dark.svg",
    name: "v0-1.5-sm",
  },
  {
    description: "Advanced thinking or reasoning.",
    image: "/images/gradients/rose.svg",
    name: "v0-1.5-lg",
  },
  {
    description: "Open Source model for everyone.",
    image: "/images/gradients/amber.svg",
    name: "v0-2.0-mini",
  },
];

export default Example;
