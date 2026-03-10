import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const data = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  balance: 1234.56,
  score: -42,
  isActive: true,
  isVerified: false,
  avatar: null,
  description: undefined,
  createdAt: new Date("2024-01-15T14:22:00.000Z"),
  lastLogin: new Date("2024-01-12T00:00:00.000Z"),
  tags: ["user", "premium", "verified"],
  scores: [95, 87, 92, 78, 100],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: 12_345,
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
};

const Example = () => <JsonTreeView data={data} defaultExpandedDepth={2} />;

export default Example;
