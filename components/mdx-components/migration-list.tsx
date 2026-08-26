import { BaseUIIcon } from "@/components/icons/base-ui";
import { RadixIcon } from "@/components/icons/radix";
import { ShadcnIcon } from "@/components/icons/shadcn";
import { NavLink } from "@/components/nav-link";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const MigrationList = () => (
  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {DESIGN_SYSTEMS.map((system) => (
      <Item asChild className="[--space:--spacing(4)]" key={system.name}>
        <NavLink
          className="w-full border-input transition-all"
          href={system.href}
        >
          <ItemMedia>{system.icon}</ItemMedia>
          <ItemContent>
            <ItemTitle>{system.name}</ItemTitle>
          </ItemContent>
        </NavLink>
      </Item>
    ))}
  </div>
);

const DESIGN_SYSTEMS = [
  {
    href: "/docs/migration/shadcn",
    icon: <ShadcnIcon className="size-8" />,
    name: "shadcn/ui",
  },
  {
    href: "/docs/migration/radix",
    icon: <RadixIcon className="size-8" />,
    name: "Radix UI",
  },
  {
    href: "/docs/migration/base-ui",
    icon: <BaseUIIcon className="size-8" />,
    name: "Base UI",
  },
];
