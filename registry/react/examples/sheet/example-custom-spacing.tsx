import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent className="[--space:--spacing(4)] sm:[--space:--spacing(8)]">
      <SheetHeader
        description="Make changes to your account here. Click save when you're done."
        title="Edit User"
      />
      <SheetBody>
        <FieldGroup>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input defaultValue="Vinicius Vicentini" />
          </Field>
          <Field>
            <FieldLabel>Username</FieldLabel>
            <Input defaultValue="@vinihvc" />
          </Field>
        </FieldGroup>
      </SheetBody>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
        <SheetClose asChild>
          <Button>Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
