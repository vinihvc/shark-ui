import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <Drawer
    defaultSnapPoint={0.5}
    snapPoints={[0.25, 0.5, 1]}
    snapToSequentialPoints
    swipeDirection="down"
  >
    <DrawerTrigger asChild>
      <Button variant="outline">Open with snap points</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader
        description="Drag to 25%, 50%, or 100% height. Swipe down to close."
        title="Snap Points"
      />
      <DrawerBody>
        <p className="text-muted-foreground text-sm">
          This drawer has multiple snap points. Try dragging the handle to
          quarter, half, or full height.
        </p>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Example;
