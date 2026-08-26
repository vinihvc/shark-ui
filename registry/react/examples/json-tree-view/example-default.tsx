import { JsonTreeView } from "@/registry/react/components/json-tree-view";

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

const Example = () => (
  <div className="w-full max-w-md">
    <JsonTreeView data={data} defaultExpandedDepth={1} />
  </div>
);

export default Example;
