import { ChevronDownIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuDemo = () => (
  <div className="flex min-h-80 w-full justify-center pt-2">
    <NavigationMenu aria-label="Example navigation">
      <NavigationMenuList>
        <NavigationMenuItem value="home">
          <NavigationMenuLink className="font-medium" current href="/docs">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>
            Products
            <span className="text-muted-foreground">
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs/components/chart">
              Analytics
            </NavigationMenuLink>
            <NavigationMenuLink href="/docs/components/card">
              Commerce
            </NavigationMenuLink>
            <NavigationMenuLink href="/docs/components/button">
              Payments
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

export default NavigationMenuDemo;
