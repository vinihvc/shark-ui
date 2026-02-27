import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuDemo = () => (
  <NavigationMenu className="max-w-max">
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
            <NavigationMenuLink href="/engagement" value="products">
              Engagement
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
);

export default NavigationMenuDemo;
