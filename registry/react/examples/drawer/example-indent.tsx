import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerProvider,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => (
  <DrawerProvider>
    <div className="flex min-h-[320px] flex-col items-center justify-center gap-6 rounded-lg border border-border border-dashed p-8">
      <p className="text-center text-muted-foreground text-sm">
        This content scales down and gains rounded corners when you open the
        drawer below.
      </p>
      <Drawer swipeDirection="down">
        <DrawerTrigger asChild>
          <Button variant="outline">Open drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader
            description="Notice how the content behind scales and rounds as the drawer opens."
            title="Indent effect"
          />
          <DrawerBody>
            <p className="text-muted-foreground text-sm">
              The indent effect creates a subtle depth by scaling down the page
              content and adding rounded top corners. It works best when
              DrawerProvider wraps your app layout.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  </DrawerProvider>
);

export default Example;
