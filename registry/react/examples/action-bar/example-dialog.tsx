import { Trash2Icon, XIcon } from "lucide-react";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSelectionTrigger,
  ActionBarTrigger,
} from "@/registry/react/components/action-bar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";

const Example = () => (
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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm" variant="destructive">
              <Trash2Icon />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader
              description="This action cannot be undone."
              title="Delete selected orders?"
            />

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ActionBarBody>
    </ActionBarContent>
  </ActionBar>
);

export default Example;
