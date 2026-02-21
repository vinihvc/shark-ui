import { DataList } from "@/registry/react/components/data-list";

const data = [
  { label: "New Users", value: "234" },
  { label: "Sales", value: "£12,340" },
  { label: "Revenue", value: "3,450" },
];

const DataListDemo = () => (
  <DataList.Root>
    {data.map((item) => (
      <DataList.Item key={item.label}>
        <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
        <DataList.ItemValue>{item.value}</DataList.ItemValue>
      </DataList.Item>
    ))}
  </DataList.Root>
);

export default DataListDemo;
