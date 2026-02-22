import {
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  DataListRoot,
} from "@/registry/react/components/data-list";

const data = [
  { label: "New Users", value: "234" },
  { label: "Sales", value: "£12,340" },
  { label: "Revenue", value: "3,450" },
];

const DataListDemo = () => (
  <DataListRoot>
    {data.map((item) => (
      <DataListItem key={item.label}>
        <DataListItemLabel>{item.label}</DataListItemLabel>
        <DataListItemValue>{item.value}</DataListItemValue>
      </DataListItem>
    ))}
  </DataListRoot>
);

export default DataListDemo;
