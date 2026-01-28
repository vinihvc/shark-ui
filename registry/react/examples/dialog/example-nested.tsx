import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader
          description="View and manage a user in your team."
          title="Manage team member"
        />

        <DialogBody>
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Name</p>
            <p className="font-medium text-sm">Bora Baloglu</p>
          </div>
          <div className="grid gap-1">
            <p className="text-muted-foreground text-sm">Email</p>
            <p className="font-medium text-sm">bora@example.com</p>
          </div>
        </DialogBody>

        <DialogFooter>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Edit details</Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Edit details</DialogTitle>
                <DialogDescription>
                  Make changes to the member&apos;s information.
                </DialogDescription>
              </DialogHeader>
              <DialogBody>
                <FieldGroup>
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input defaultValue="Bora Baloglu" type="text" />
                  </Field>
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input defaultValue="bora@example.com" type="text" />
                  </Field>
                </FieldGroup>
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Example;
