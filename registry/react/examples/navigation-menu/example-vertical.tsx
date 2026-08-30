import { ChevronRightIcon } from "lucide-react";
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
    <NavigationMenu aria-label="Example navigation" orientation="vertical">
      <NavigationMenuList className="w-40">
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>
            Products
            <span className="text-muted-foreground">
              <ChevronRightIcon
                aria-hidden="true"
                className="size-3.5 rtl:rotate-180"
              />
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

        <NavigationMenuItem value="resources">
          <NavigationMenuTrigger>
            Resources
            <span className="text-muted-foreground">
              <ChevronRightIcon
                aria-hidden="true"
                className="size-3.5 rtl:rotate-180"
              />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/docs">Blog</NavigationMenuLink>
            <NavigationMenuLink href="/docs/changelog">
              Changelog
            </NavigationMenuLink>
            <NavigationMenuLink href="https://github.com/sharkui-inc/shark-ui">
              Support
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="docs">
          <NavigationMenuLink className="font-medium" href="/docs">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export default NavigationMenuDemo;
