import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const data = {
  address: {
    city: "Anytown",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    state: "CA",
    street: "123 Main St",
    zip: 12_345,
  },
  age: 30,
  avatar: null,
  balance: 1234.56,
  createdAt: new Date("2024-01-15T14:22:00.000Z"),
  description: undefined,
  email: "john.doe@example.com",
  isActive: true,
  isVerified: false,
  lastLogin: new Date("2024-01-12T00:00:00.000Z"),
  name: "John Doe",
  score: -42,
  scores: [95, 87, 92, 78, 100],
  tags: ["user", "premium", "verified"],
};

const Example = () => <JsonTreeView data={data} defaultExpandedDepth={2} />;

export default Example;
