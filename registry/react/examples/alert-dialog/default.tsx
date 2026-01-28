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

const AlertDialogDemo = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Show Dialog</Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader
        description="You can restore it later. You'll be able to access it from the activity history."
        title="Archive project"
      />
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>

        <AlertDialogAction>Archive project</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogDemo;
