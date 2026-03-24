import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerContentInner,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent className="[--bleed:2rem] [--space:--spacing(6)]">
      <DrawerContentInner>
        <DrawerHeader
          description="Tighter bleed and larger internal padding than defaults."
          title="Custom spacing"
        />
        <DrawerBody>
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
        </DrawerBody>
      </DrawerContentInner>

      <DrawerFooter>
        <DrawerContentInner>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
          <DrawerClose asChild>
            <Button>Save changes</Button>
          </DrawerClose>
        </DrawerContentInner>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
