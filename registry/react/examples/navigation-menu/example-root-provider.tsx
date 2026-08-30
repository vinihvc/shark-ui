"use client";

import { ChevronDownIcon } from "lucide-react";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRootProvider,
  NavigationMenuTrigger,
  useNavigationMenu,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuDemo = () => {
  const navigationMenu = useNavigationMenu();

  return (
    <div className="flex min-h-80 w-full justify-center pt-2">
      <NavigationMenuRootProvider
        aria-label="Example navigation"
        value={navigationMenu}
      >
        <output className="mb-3 block text-muted-foreground text-sm">
          value: {navigationMenu.value}
        </output>
        <NavigationMenuList>
          <NavigationMenuItem value="features">
            <NavigationMenuTrigger>
              Features
              <span className="text-muted-foreground">
                <ChevronDownIcon aria-hidden="true" className="size-3.5" />
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/docs/components">
                Overview
              </NavigationMenuLink>
              <NavigationMenuLink href="/docs/components/combobox">
                Features
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem value="docs">
            <NavigationMenuTrigger>
              Documentation
              <span className="text-muted-foreground">
                <ChevronDownIcon aria-hidden="true" className="size-3.5" />
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/docs">Introduction</NavigationMenuLink>
              <NavigationMenuLink href="/docs/installation">
                Installation
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem value="about">
            <NavigationMenuLink className="font-medium" href="/docs">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRootProvider>
    </div>
  );
};

export default NavigationMenuDemo;
