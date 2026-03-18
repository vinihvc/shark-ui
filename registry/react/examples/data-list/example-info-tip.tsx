import { InfoIcon } from "lucide-react";
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
import { Button } from "@/registry/react/components/button";

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
          <ToggleTooltip positioning={{ placement: "top" }}>
            <ToggleTooltipTrigger asChild>
              <Button
                aria-label={`Info about ${item.label}`}
                size="icon-sm"
                variant="ghost"
              >
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

export default Example;
