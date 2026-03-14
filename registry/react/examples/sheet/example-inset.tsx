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
    <SheetContent variant="inset">
      <SheetHeader
        description="This sheet uses the inset variant with rounded corners and padding."
        title="Inset Sheet"
      />
      <SheetBody>
        <FieldGroup>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input defaultValue="Vinicius Vicentini" />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input defaultValue="vinicius@example.com" />
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
