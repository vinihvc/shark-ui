import {
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  DataListRoot,
} from "@/registry/react/components/data-list";

const DataListOrientationDemo = () => (
  <div className="grid gap-8 sm:grid-cols-2">
    <div>
      <p className="mb-2 text-muted-foreground text-sm">Horizontal</p>
      <DataListRoot orientation="horizontal">
        <DataListItem>
          <DataListItemLabel>First Name</DataListItemLabel>
          <DataListItemValue>Jassie</DataListItemValue>
        </DataListItem>
        <DataListItem>
          <DataListItemLabel>Last Name</DataListItemLabel>
          <DataListItemValue>Bhatia</DataListItemValue>
        </DataListItem>
        <DataListItem>
          <DataListItemLabel>Email</DataListItemLabel>
          <DataListItemValue>jassie@example.com</DataListItemValue>
        </DataListItem>
      </DataListRoot>
    </div>
    <div>
      <p className="mb-2 text-muted-foreground text-sm">Vertical</p>
      <DataListRoot orientation="vertical">
        <DataListItem>
          <DataListItemLabel>First Name</DataListItemLabel>
          <DataListItemValue>Jassie</DataListItemValue>
        </DataListItem>
        <DataListItem>
          <DataListItemLabel>Last Name</DataListItemLabel>
          <DataListItemValue>Bhatia</DataListItemValue>
        </DataListItem>
        <DataListItem>
          <DataListItemLabel>Email</DataListItemLabel>
          <DataListItemValue>jassie@example.com</DataListItemValue>
        </DataListItem>
      </DataListRoot>
    </div>
  </div>
);

export default DataListOrientationDemo;
