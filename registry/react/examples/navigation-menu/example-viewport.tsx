import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuViewportPositioner,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuViewportDemo = () => (
  <NavigationMenu className="max-w-max">
    <NavigationMenuList>
      <NavigationMenuItem value="products">
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
            <div className="space-y-2">
              <p className="font-medium text-sm">Analytics</p>
              <NavigationMenuLink href="/analytics" value="products">
                Dashboard
              </NavigationMenuLink>
              <NavigationMenuLink href="/reports" value="products">
                Reports
              </NavigationMenuLink>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-sm">Marketing</p>
              <NavigationMenuLink href="/campaigns" value="products">
                Campaigns
              </NavigationMenuLink>
              <NavigationMenuLink href="/audience" value="products">
                Audience
              </NavigationMenuLink>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem value="solutions">
        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-[400px] gap-2 p-4">
            <NavigationMenuLink href="/docs" value="solutions">
              Documentation
            </NavigationMenuLink>
            <NavigationMenuLink href="/api" value="solutions">
              API Reference
            </NavigationMenuLink>
            <NavigationMenuLink href="/integrations" value="solutions">
              Integrations
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem value="resources">
        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid w-48 gap-2 p-4">
            <NavigationMenuLink href="/blog" value="resources">
              Blog
            </NavigationMenuLink>
            <NavigationMenuLink href="/support" value="resources">
              Support
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem value="pricing">
        <NavigationMenuLink href="/pricing" value="pricing">
          Pricing
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator variant="underline" />
    </NavigationMenuList>

    <NavigationMenuViewportPositioner>
      <NavigationMenuViewport />
    </NavigationMenuViewportPositioner>
  </NavigationMenu>
);

export default NavigationMenuViewportDemo;
