import {
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
} from "@/registry/react/components/data-list";

const Example = () => (
  <DataList orientation="horizontal">
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
  </DataList>
);

export default Example;
