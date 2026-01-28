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
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Open dialog</Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader
        description="This action cannot be undone. This will permanently delete the project and remove all data."
        title="Delete Project"
      />
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>

        <AlertDialogAction variant="destructive">
          Delete project
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
