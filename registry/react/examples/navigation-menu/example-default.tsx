import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuDemo = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem value="features">
        <NavigationMenuTrigger>Features</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Overview</NavigationMenuLink>
          <NavigationMenuLink>Features</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem value="docs">
        <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Introduction</NavigationMenuLink>
          <NavigationMenuLink>Installation</NavigationMenuLink>
          <NavigationMenuLink context="content" href="#components" value="docs">
            Components
          </NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem value="about">
        <NavigationMenuLink href="#about" value="about">
          About
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export default NavigationMenuDemo;
