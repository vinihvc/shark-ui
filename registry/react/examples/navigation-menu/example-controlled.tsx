"use client";

import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuControlledDemo = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button
          onClick={() => setValue("products")}
          size="sm"
          type="button"
          variant="outline"
        >
          Open Products
        </Button>
        <Button
          onClick={() => setValue("solutions")}
          size="sm"
          type="button"
          variant="outline"
        >
          Open Solutions
        </Button>
        <Button
          onClick={() => setValue("")}
          size="sm"
          type="button"
          variant="outline"
        >
          Close all
        </Button>
      </div>

      <NavigationMenu
        className="max-w-max"
        onValueChange={(details) => setValue(details.value)}
        value={value}
      >
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-48 gap-2 p-2">
                <NavigationMenuLink href="/analytics" value="products">
                  Analytics
                </NavigationMenuLink>
                <NavigationMenuLink href="/marketing" value="products">
                  Marketing
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem value="solutions">
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-48 gap-2 p-2">
                <NavigationMenuLink href="/docs" value="solutions">
                  Documentation
                </NavigationMenuLink>
                <NavigationMenuLink href="/api" value="solutions">
                  API Reference
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem value="pricing">
            <NavigationMenuLink href="/pricing" value="pricing">
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavigationMenuControlledDemo;
