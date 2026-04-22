import {
  EllipsisIcon,
  PencilIcon,
  SendIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarTrigger,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

const ActionBarDemo = () => (
  <ActionBar>
    <ActionBarTrigger asChild>
      <Button variant="outline">Open</Button>
    </ActionBarTrigger>
    <ActionBarContent className="w-full max-w-xl">
      <ActionBarClose asChild>
        <Button size="icon-sm" variant="ghost">
          <XIcon />
        </Button>
      </ActionBarClose>
      <ActionBarSelectionTrigger count={3} />
      <ActionBarBody>
        <Button asChild size="sm" variant="secondary">
          <SendIcon />
          Send
        </Button>
        <Button className="max-sm:hidden" size="sm" variant="secondary">
          <PencilIcon />
          Edit
        </Button>
        <Button size="sm" variant="secondary">
          <EllipsisIcon />
        </Button>
        <Button className="max-sm:hidden" size="sm" variant="destructive">
          <Trash2Icon />
          Delete
        </Button>
      </ActionBarBody>
    </ActionBarContent>
  </ActionBar>
);

export default ActionBarDemo;
