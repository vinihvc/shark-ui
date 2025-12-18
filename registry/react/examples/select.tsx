import {
  createCollection,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const SelectDemo = () => {
  const collection = createCollection({
    items: ["Banana", "Apple", "Orange", "Pineapple"],
  });

  return (
    <Select collection={collection}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup heading="Fruits">
          {collection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDemo;
