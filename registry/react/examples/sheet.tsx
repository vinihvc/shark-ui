import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldInput,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const SheetDemo = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>

    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit User</SheetTitle>
        <SheetDescription>
          Make changes to your account here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>

      <SheetBody className="flex flex-col gap-4">
        <Field>
          <FieldLabel>Name</FieldLabel>

          <FieldInput>
            <Input defaultValue="Vinicius Vicentini" />
          </FieldInput>
        </Field>

        <Field>
          <FieldLabel>Username</FieldLabel>

          <FieldInput>
            <Input defaultValue="@vinihvc" />
          </FieldInput>
        </Field>
      </SheetBody>

      <SheetFooter className="mt-auto">
        <SheetClose asChild>
          <Button>Save changes</Button>
        </SheetClose>

        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default SheetDemo;
