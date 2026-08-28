"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockAlertIcon,
  CopyIcon,
  MinusIcon,
  MoreHorizontalIcon,
  PlusIcon,
  RefreshCwIcon,
  ShoppingBagIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";

const ICONS = [
  { Icon: CopyIcon, label: "Copy" },
  { Icon: ClockAlertIcon, label: "Clock alert" },
  { Icon: Trash2Icon, label: "Delete" },
  { Icon: UploadIcon, label: "Upload" },
  { Icon: ShoppingBagIcon, label: "Shopping bag" },
  { Icon: MoreHorizontalIcon, label: "More options" },
  { Icon: RefreshCwIcon, label: "Refresh" },
  { Icon: PlusIcon, label: "Add" },
  { Icon: MinusIcon, label: "Remove" },
  { Icon: ArrowLeftIcon, label: "Previous" },
  { Icon: ArrowRightIcon, label: "Next" },
  { Icon: CheckIcon, label: "Confirm" },
];

export const IconsGridExample = (props: React.ComponentProps<"div">) => (
  <Card {...props}>
    <CardContent>
      <div className="grid grid-cols-6 gap-2">
        {ICONS.map(({ Icon, label }) => (
          <Button
            aria-label={label}
            key={label}
            size="icon-md"
            tabIndex={-1}
            variant="outline"
          >
            <Icon aria-hidden />
          </Button>
        ))}
      </div>
    </CardContent>
  </Card>
);
