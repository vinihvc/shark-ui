import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const actions = [
  "Unfollow",
  "Mute",
  "Add to Favourites",
  "Add to Close Friends",
  "Restrict",
] as const;

const Example = () => (
  <Drawer swipeDirection="down">
    <DrawerTrigger asChild>
      <Button variant="outline">Open action sheet</Button>
    </DrawerTrigger>
    <DrawerContent className="max-h-fit">
      <DrawerBody className="flex flex-col gap-0 p-0">
        <div className="flex flex-col divide-y divide-border">
          {actions.map((label) => (
            <DrawerClose asChild key={label}>
              <button
                className="flex w-full items-center justify-center px-4 py-4 font-medium text-sm transition-colors hover:bg-muted"
                type="button"
              >
                {label}
              </button>
            </DrawerClose>
          ))}
        </div>
        <div className="mt-2 pt-2">
          <DrawerClose asChild>
            <button
              className="flex w-full items-center justify-center px-4 py-4 font-medium text-destructive text-sm transition-colors hover:bg-destructive/10"
              type="button"
            >
              Block User
            </button>
          </DrawerClose>
        </div>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Example;
