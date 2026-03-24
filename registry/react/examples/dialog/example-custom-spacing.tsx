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
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const Example = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open</Button>
    </DialogTrigger>

    <DialogContent className="[--space:--spacing(4)] sm:[--space:--spacing(8)]">
      <DialogHeader
        description="Make changes to your project settings."
        title="Edit project"
      />
      <DialogBody>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>Name</FieldLabel>
              <Input placeholder="My Project" />
            </Field>

            <Field>
              <FieldLabel>Main branch</FieldLabel>
              <NativeSelect>
                <NativeSelectOption value="main">main</NativeSelectOption>
                <NativeSelectOption value="develop">develop</NativeSelectOption>
              </NativeSelect>
            </Field>
          </FieldGroup>
        </FieldSet>
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

export default Example;
