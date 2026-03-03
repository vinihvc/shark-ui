import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuViewportPositioner,
} from "@/registry/react/components/navigation-menu";

export const Viewport = () => {
  const renderLinks = (opts: { value: string; items: string[] }) => {
    const { value, items } = opts;

    return items.map((item) => (
      <NavigationMenuLink
        asChild
        className={cn(
          "flex items-center gap-2 rounded p-2 text-inherit text-sm leading-5 outline-none transition-colors",
          "hover:bg-muted focus-visible:bg-muted focus-visible:outline-2 focus-visible:outline-ring focus-visible:-outline-offset-1",
          "data-disabled:text-muted-foreground data-disabled:opacity-50"
        )}
        key={`${value}-${item}`}
      >
        <a href={`#${value}-${item.toLowerCase().replace(/\s+/g, "-")}`}>
          {item}
        </a>
      </NavigationMenuLink>
    ));
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              gridTemplateColumns: "1fr 2fr",
              width: 600,
            }}
          >
            {renderLinks({
              value: "products",
              items: [
                "Analytics Platform",
                "Customer Engagement",
                "Marketing Automation",
                "Data Integration",
                "Enterprise Solutions",
                "API Documentation",
              ],
            })}

            {renderLinks({
              value: "products",
              items: [
                "Case Studies",
                "Success Stories",
                "Integration Partners",
                "Security & Compliance",
              ],
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="company">
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              gridTemplateColumns: "1fr 1fr",
              width: 450,
            }}
          >
            {renderLinks({
              value: "company",
              items: [
                "About Us",
                "Leadership Team",
                "Careers",
                "Press Releases",
              ],
            })}

            {renderLinks({
              value: "company",
              items: ["Investors", "Partners", "Corporate Responsibility"],
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="developers">
          <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
          <NavigationMenuContent
            style={{
              gridTemplateColumns: "1.6fr 1fr",
              width: 650,
            }}
          >
            {renderLinks({
              value: "developers",
              items: [
                "API Documentation",
                "SDKs & Libraries",
                "Developer Guides",
                "Code Samples",
                "Webhooks",
                "GraphQL Explorer",
              ],
            })}
            {renderLinks({
              value: "developers",
              items: [
                "Developer Community",
                "Changelog",
                "Status Page",
                "Rate Limits",
              ],
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="pricing">
          <NavigationMenuLink href="#pricing">Pricing</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuViewportPositioner align="start">
        <NavigationMenuViewport />
      </NavigationMenuViewportPositioner>
    </NavigationMenu>
  );
};

export default Viewport;
