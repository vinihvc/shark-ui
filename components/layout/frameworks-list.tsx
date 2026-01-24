import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { AstroIcon } from "../icons/astro";
import { NextIcon } from "../icons/next";
import { ReactIcon } from "../icons/react";
import { ReactRouterIcon } from "../icons/react-router";
import { TanstackIcon } from "../icons/tanstack-start";
import { ViteIcon } from "../icons/vite";
import { NavLink } from "../nav-link";

export const FrameworksList = () => {
  return (
    <div className="not-prose grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {FRAMEWORKS.map((framework) => (
        <Item asChild key={framework.name}>
          <NavLink
            className="w-full border-border transition-all"
            href={framework.href}
          >
            <ItemMedia>{framework.icon}</ItemMedia>
            <ItemContent>
              <ItemTitle>{framework.name}</ItemTitle>
            </ItemContent>
          </NavLink>
        </Item>
      ))}
    </div>
  );
};

const FRAMEWORKS = [
  {
    name: "Next.js",
    href: "/docs/installation/next",
    icon: <NextIcon className="size-10" />,
  },
  {
    name: "Vite",
    href: "/docs/installation/vite",
    icon: <ViteIcon className="size-10" />,
  },
  {
    name: "TanStack Start",
    href: "/docs/installation/tanstack-start",
    icon: <TanstackIcon className="size-10" />,
  },
  {
    name: "Astro",
    href: "/docs/installation/astro",
    icon: <AstroIcon className="size-10" />,
  },
  {
    name: "React Router",
    href: "/docs/installation/react-router",
    icon: <ReactRouterIcon className="size-10" />,
  },
  {
    name: "Manual",
    href: "/docs/installation/manual",
    icon: <ReactIcon className="size-10" />,
  },
];
