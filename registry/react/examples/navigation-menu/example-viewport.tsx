import {
  AccessibilityIcon,
  ChevronDownIcon,
  ClapperboardIcon,
  LayersIcon,
  ListChecksIcon,
  PaletteIcon,
  RocketIcon,
  SparklesIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuArrow,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuViewportPositioner,
} from "@/registry/react/components/navigation-menu";

const NavigationMenuDemo = () => (
  <div className="flex min-h-80 w-full justify-center pt-2">
    <NavigationMenu
      aria-label="Example navigation"
      lazyMount={false}
      unmountOnExit={false}
    >
      <NavigationMenuList>
        <NavigationMenuItem value="overview">
          <NavigationMenuTrigger>
            Overview
            <span className="text-muted-foreground">
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 p-2 sm:grid-cols-2">
              {overviewSections.map((section) => (
                <div
                  className="flex min-w-48 flex-col gap-1 p-1"
                  key={section.label}
                >
                  <span className="px-3 py-2 font-medium text-muted-foreground text-xs">
                    {section.label}
                  </span>
                  {section.links.map((item) => (
                    <NavigationMenuLink
                      className="items-start"
                      href={item.href}
                      key={item.href}
                    >
                      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground [&_svg]:size-4">
                        <item.icon aria-hidden="true" className="size-4" />
                      </span>
                      <span className="flex flex-col gap-0.5">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-muted-foreground text-xs">
                          {item.description}
                        </span>
                      </span>
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="guides">
          <NavigationMenuTrigger>
            Guides
            <span className="text-muted-foreground">
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex min-w-48 flex-col gap-1 p-1" data-single="">
              <span className="px-3 py-2 font-medium text-muted-foreground text-xs">
                Guides
              </span>
              {guideLinks.map((item) => (
                <NavigationMenuLink
                  className="items-start"
                  href={item.href}
                  key={item.href}
                >
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground [&_svg]:size-4">
                    <item.icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-muted-foreground text-xs">
                      {item.description}
                    </span>
                  </span>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="docs">
          <NavigationMenuLink
            className="font-medium"
            href="https://shark.vini.one/docs"
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator>
          <NavigationMenuArrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <NavigationMenuViewportPositioner align="start">
        <NavigationMenuViewport />
      </NavigationMenuViewportPositioner>
    </NavigationMenu>
  </div>
);

const overviewSections = [
  {
    label: "Get started",
    links: [
      {
        description: "Install and assemble",
        href: "/docs/installation",
        icon: RocketIcon,
        title: "Quick Start",
      },
      {
        description: "CSS, CSS-in-JS, or utilities",
        href: "/docs/styling",
        icon: PaletteIcon,
        title: "Styling",
      },
    ],
  },
  {
    label: "Learn",
    links: [
      {
        description: "Keyboard and ARIA support",
        href: "/docs/components/field",
        icon: AccessibilityIcon,
        title: "Accessibility",
      },
      {
        description: "What's new in Shark UI",
        href: "/docs/changelog",
        icon: SparklesIcon,
        title: "Releases",
      },
    ],
  },
];

const guideLinks = [
  {
    description: "CSS or JavaScript",
    href: "/docs/utilities/presence",
    icon: ClapperboardIcon,
    title: "Animation",
  },
  {
    description: "Replace and compose parts",
    href: "/docs/components/menu",
    icon: LayersIcon,
    title: "Composition",
  },
  {
    description: "Native and library forms",
    href: "/docs/forms",
    icon: ListChecksIcon,
    title: "Forms",
  },
];

export default NavigationMenuDemo;
