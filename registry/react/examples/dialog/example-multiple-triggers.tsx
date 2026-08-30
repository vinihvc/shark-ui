import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const Example = () => (
  <Dialog>
    <div className="flex flex-wrap justify-center gap-2">
      {users.map((user) => (
        <DialogTrigger asChild key={user.value} value={user.value}>
          <Button variant="outline">Edit {user.name}</Button>
        </DialogTrigger>
      ))}
    </div>
    <DialogContent>
      <DialogHeader
        description="One dialog, shared across every trigger. Each trigger has a value so the panel can follow the button that opened it."
        title="Edit teammate"
      />
      <DialogBody>
        <p className="text-muted-foreground text-sm">
          The same content opens from either button.
        </p>
      </DialogBody>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>Save</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const users = [
  { name: "Alice", value: "alice" },
  { name: "Bob", value: "bob" },
];

export default Example;
