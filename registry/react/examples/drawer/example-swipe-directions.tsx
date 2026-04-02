import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="Bottom Drawer" />
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            Swipe down to close this drawer.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer swipeDirection="up">
      <DrawerTrigger asChild>
        <Button variant="outline">Top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="Top Drawer" />
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            Swipe up to close this drawer.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer swipeDirection="start">
      <DrawerTrigger asChild>
        <Button variant="outline">Left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="Start Drawer" />
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            Swipe left to close this drawer.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>

    <Drawer swipeDirection="end">
      <DrawerTrigger asChild>
        <Button variant="outline">Right</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader title="End Drawer" />
        <DrawerBody>
          <p className="text-muted-foreground text-sm">
            Swipe right to close this drawer.
          </p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </div>
);

export default Example;
