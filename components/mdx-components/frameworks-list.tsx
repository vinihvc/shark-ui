import { AstroIcon } from "@/components/icons/astro";
import { LaravelIcon } from "@/components/icons/laravel";
import { NextIcon } from "@/components/icons/next";
import { ReactIcon } from "@/components/icons/react";
import { ReactRouterIcon } from "@/components/icons/react-router";
import { TanstackIcon } from "@/components/icons/tanstack-start";
import { ViteIcon } from "@/components/icons/vite";
import { NavLink } from "@/components/nav-link";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const FrameworksList = () => (
  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {FRAMEWORKS.map((framework) => (
      <Item
        asChild
        className="border-input [--space:--spacing(4)]"
        key={framework.name}
        variant="muted"
      >
        <NavLink href={framework.href}>
          <ItemMedia variant="image">{framework.icon}</ItemMedia>
          <ItemContent>
            <ItemTitle>{framework.name}</ItemTitle>
          </ItemContent>
        </NavLink>
      </Item>
    ))}
  </div>
);

const FRAMEWORKS = [
  {
    href: "/docs/installation/next",
    icon: <NextIcon className="size-8" />,
    name: "Next.js",
  },
  {
    href: "/docs/installation/vite",
    icon: <ViteIcon className="size-8" />,
    name: "Vite",
  },
  {
    href: "/docs/installation/tanstack-start",
    icon: <TanstackIcon className="size-8" />,
    name: "TanStack Start",
  },
  {
    href: "/docs/installation/astro",
    icon: <AstroIcon className="size-8" />,
    name: "Astro",
  },
  {
    href: "/docs/installation/react-router",
    icon: <ReactRouterIcon className="size-8" />,
    name: "React Router",
  },
  {
    href: "/docs/installation/laravel",
    icon: <LaravelIcon className="size-8" />,
    name: "Laravel",
  },
  {
    href: "/docs/installation/manual",
    icon: <ReactIcon className="size-8" />,
    name: "Manual",
  },
];
