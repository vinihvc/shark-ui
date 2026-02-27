import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Drawer swipeDirection="down">
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>

    <DrawerContent>
      <DrawerHeader
        description="View and manage a user in your team."
        title="Manage team member"
      />

      <DrawerBody className="grid gap-4">
        <div className="grid gap-1">
          <p className="text-muted-foreground text-sm">Name</p>
          <p className="font-medium text-sm">Bora Baloglu</p>
        </div>
        <div className="grid gap-1">
          <p className="text-muted-foreground text-sm">Email</p>
          <p className="font-medium text-sm">bora@example.com</p>
        </div>
      </DrawerBody>

      <DrawerFooter>
        <Drawer swipeDirection="down">
          <DrawerTrigger asChild>
            <Button variant="outline">Edit details</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit details</DrawerTitle>
              <DrawerDescription>
                Make changes to the member&apos;s information.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerBody>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input defaultValue="Bora Baloglu" type="text" />
                </Field>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input defaultValue="bora@example.com" type="email" />
                </Field>
              </FieldGroup>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="ghost">Cancel</Button>
              </DrawerClose>
              <Button type="submit">Save changes</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
