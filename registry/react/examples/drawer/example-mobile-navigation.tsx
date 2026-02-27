import { MenuIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const navItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
  { href: "#", label: "Settings" },
] as const;

const Example = () => (
  <Drawer swipeDirection="up">
    <DrawerTrigger asChild>
      <Button size="icon-md" variant="outline">
        <MenuIcon className="size-5" />
        <span className="sr-only">Open menu</span>
      </Button>
    </DrawerTrigger>
    <DrawerContent className="max-h-[96svh]">
      <DrawerHeader description="Swipe up to dismiss" title="Navigation" />
      <DrawerBody className="flex flex-col gap-1">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <DrawerClose asChild key={item.label}>
              <a
                className="flex items-center rounded-lg px-4 py-3 font-medium text-sm transition-colors hover:bg-muted"
                href={item.href}
              >
                {item.label}
              </a>
            </DrawerClose>
          ))}
        </nav>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

export default Example;
