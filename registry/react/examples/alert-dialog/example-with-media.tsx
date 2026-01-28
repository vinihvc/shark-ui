import { Bluetooth } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";
import { DialogFooter } from "@/registry/react/components/dialog";

const Example = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Show Dialog</Button>
    </AlertDialogTrigger>

    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogMedia>
          <Bluetooth />
        </AlertDialogMedia>
        <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
        <AlertDialogDescription>
          Do you want to allow the USB accessory to connect to this device?
        </AlertDialogDescription>
      </AlertDialogHeader>

      <DialogFooter>
        <AlertDialogCancel>Don't allow</AlertDialogCancel>

        <AlertDialogAction>Allow</AlertDialogAction>
      </DialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default Example;
