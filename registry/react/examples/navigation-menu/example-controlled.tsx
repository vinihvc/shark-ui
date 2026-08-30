"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  type NavigationMenuValueChangeDetails,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuDemo = () => {
  const [value, setValue] = useState<string>("");

  const handleValueChange = (details: NavigationMenuValueChangeDetails) =>
    setValue(details.value);

  return (
    <div className="flex min-h-80 w-full justify-center pt-2">
      <NavigationMenu
        aria-label="Example navigation"
        onValueChange={handleValueChange}
        value={value}
      >
        <output className="mb-3 block text-muted-foreground text-sm">
          value: {value}
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
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuDemo;
