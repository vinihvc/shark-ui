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

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>

    <DialogContent>
      <DialogHeader
        description="Make changes to your project here. Click save when you're done."
        title="Edit project"
      />
      <DialogBody>
        <FieldSet>
          <FieldGroup>
            <Field>
              <FieldLabel>Project Name</FieldLabel>
              <Input placeholder="My Project" />
            </Field>

            <Field>
              <FieldLabel>Main branch</FieldLabel>
              <NativeSelect>
                <NativeSelectOption value="main">main</NativeSelectOption>
                <NativeSelectOption value="develop">develop</NativeSelectOption>
                <NativeSelectOption value="feature/123">
                  feature/123
                </NativeSelectOption>
                <NativeSelectOption value="release/1.0.0">
                  release/1.0.0
                </NativeSelectOption>
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
          <Button>Save changes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default DialogDemo;
