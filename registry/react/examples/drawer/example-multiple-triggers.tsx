import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const users = [
  { name: "Alice", value: "alice" },
  { name: "Bob", value: "bob" },
];

const Example = () => (
  <Drawer>
    <div className="flex flex-wrap justify-center gap-2">
      {users.map((user) => (
        <DrawerTrigger asChild key={user.value} value={user.value}>
          <Button variant="outline">Edit {user.name}</Button>
        </DrawerTrigger>
      ))}
    </div>
    <DrawerContent>
      <DrawerHeader
        description="One drawer, shared across every trigger."
        title="Edit teammate"
      />
      <DrawerFooter>
        <DrawerClose asChild>
          <Button className="w-full" variant="outline">
            Close
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
