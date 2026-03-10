import { InfoIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
} from "@/registry/react/components/data-list";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const Example = () => (
  <DataList>
    {data.map((item) => (
      <DataListItem key={item.label}>
        <DataListItemLabel className="inline-flex items-center gap-1.5">
          {item.label}
          <ToggleTooltip>
            <ToggleTooltipTrigger asChild>
              <Button aria-label={`Info about ${item.label}`} variant="outline">
                <InfoIcon />
              </Button>
            </ToggleTooltipTrigger>
            <ToggleTooltipContent>{item.info}</ToggleTooltipContent>
          </ToggleTooltip>
        </DataListItemLabel>
        <DataListItemValue>{item.value}</DataListItemValue>
      </DataListItem>
    ))}
  </DataList>
);

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

export default Example;
