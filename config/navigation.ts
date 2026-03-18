export const NAV_ITEMS = [
  {
    href: "/docs/components",
    label: "Components",
    showOnHeader: true,
  },
  {
    href: "/blocks",
    label: "Blocks",
    showOnHeader: true,
  },
  {
    href: "/templates",
    label: "Templates",
    showOnHeader: true,
  },
  {
    href: "/themes",
    label: "Themes",
    showOnHeader: true,
  },
];

export type NavItem = (typeof NAV_ITEMS)[number];
