"use client";

import { cn } from "@/lib/utils";
import { NavLink } from "../../nav-link";

interface MainNavProps extends React.ComponentProps<"nav"> {
  items: { href: string; label: string }[];
}

export const MainNav = (props: MainNavProps) => {
  const { items, className, ...rest } = props;

  return (
    <nav className={cn("items-center", className)} {...rest}>
      {items.map((item) => (
        <NavLink
          className="px-3 py-2 text-muted-foreground text-sm hover:text-foreground [&.active]:text-primary"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
