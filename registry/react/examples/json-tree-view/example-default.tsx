import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const Example = () => (
  <div className="w-full max-w-md">
    <JsonTreeView data={data} defaultExpandedDepth={1} />
  </div>
);

const data = {
  address: {
    city: "Anytown",
    state: "CA",
    street: "123 Main St",
    zip: "12345",
  },
  age: 30,
  email: "john.doe@example.com",
  name: "John Doe",
};

export default Example;
