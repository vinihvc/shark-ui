import { InfoIcon } from "lucide-react";
import {
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
} from "@/registry/react/components/data-list";
import {
  Hint,
  HintContent,
  HintTrigger,
} from "@/registry/react/components/hint";

const data = [
  {
    label: "New Users",
    value: "234",
    info: "Total new user signups this month",
  },
  { label: "Sales", value: "£12,340", info: "Revenue from product sales" },
  {
    label: "Revenue",
    value: "3,450",
    info: "Total revenue in the last quarter",
  },
];

const Example = () => (
  <DataList>
    {data.map((item) => (
      <DataListItem key={item.label}>
        <DataListItemLabel className="inline-flex items-center gap-1.5">
          {item.label}
          <Hint positioning={{ placement: "top" }}>
            <HintTrigger asChild>
              <button
                aria-label={`Info about ${item.label}`}
                className="inline-flex text-muted-foreground hover:text-foreground"
                type="button"
              >
                <InfoIcon className="size-3.5" />
              </button>
            </HintTrigger>
            <HintContent>{item.info}</HintContent>
          </Hint>
        </DataListItemLabel>
        <DataListItemValue>{item.value}</DataListItemValue>
      </DataListItem>
    ))}
  </DataList>
);

export default Example;
