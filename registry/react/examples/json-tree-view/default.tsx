import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const data = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  tags: ["tag1", "tag2", "tag3"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};

const JsonTreeViewDemo = () => (
  <JsonTreeView data={data} defaultExpandedDepth={1} />
);

export default JsonTreeViewDemo;
