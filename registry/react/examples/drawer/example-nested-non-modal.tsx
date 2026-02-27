import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer modal={false} swipeDirection="down">
    <DrawerTrigger asChild>
      <Button variant="outline">Open drawer</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="Non-modal drawer. You can interact with the page behind it. Open a nested drawer inside."
        title="First drawer"
      />
      <DrawerBody>
        <Drawer modal={false} swipeDirection="down">
          <DrawerTrigger asChild>
            <Button size="sm" variant="outline">
              Open nested drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader
              description="This is a nested drawer. Both drawers are non-modal."
              title="Nested drawer"
            />
            <DrawerBody>
              <p className="text-muted-foreground text-sm">
                Nested non-modal drawers allow you to stack multiple panels
                while still interacting with content behind them.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Close nested</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </DrawerBody>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);

export default Example;
