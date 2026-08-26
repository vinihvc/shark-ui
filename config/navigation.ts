export const NAV_ITEMS = [
  {
    href: "/docs/installation",
    label: "Docs",
    showOnHeader: true,
  },
  {
    href: "/docs/components",
    label: "Components",
    showOnHeader: true,
  },
  {
    href: "/themes",
    label: "Themes",
    showOnHeader: true,
  },
  {
    href: "/blocks",
    label: "Blocks",
    showOnHeader: true,
  },
];

export type NavItem = (typeof NAV_ITEMS)[number];
