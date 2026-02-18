import { DataList } from "@/registry/react/components/data-list";

const DataListOrientationDemo = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    <div>
      <p className="mb-2 text-muted-foreground text-sm">Horizontal</p>
      <DataList.Root orientation="horizontal">
        <DataList.Item>
          <DataList.ItemLabel>First Name</DataList.ItemLabel>
          <DataList.ItemValue>Jassie</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Last Name</DataList.ItemLabel>
          <DataList.ItemValue>Bhatia</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Email</DataList.ItemLabel>
          <DataList.ItemValue>jassie@example.com</DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
    </div>
    <div>
      <p className="mb-2 text-muted-foreground text-sm">Vertical</p>
      <DataList.Root orientation="vertical">
        <DataList.Item>
          <DataList.ItemLabel>First Name</DataList.ItemLabel>
          <DataList.ItemValue>Jassie</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Last Name</DataList.ItemLabel>
          <DataList.ItemValue>Bhatia</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Email</DataList.ItemLabel>
          <DataList.ItemValue>jassie@example.com</DataList.ItemValue>
        </DataList.Item>
      </DataList.Root>
    </div>
  </div>
);

export default DataListOrientationDemo;
