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
    <Drawer swipeDirection="down">
      <DrawerTrigger asChild>
        <Button variant="outline">Bottom (swipe down)</Button>
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
        <Button variant="outline">Top (swipe up)</Button>
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

    <Drawer swipeDirection="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Start (swipe left)</Button>
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

    <Drawer swipeDirection="right">
      <DrawerTrigger asChild>
        <Button variant="outline">End (swipe right)</Button>
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
