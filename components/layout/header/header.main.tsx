"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { NavLink } from "../../nav-link";

interface MainNavProps extends React.ComponentProps<"nav"> {
  items: { href: string; label: string }[];
}

export const MainNav = (props: MainNavProps) => {
  const { items, className, ...rest } = props;

  return (
    <nav className={cn("items-center", className)} {...rest}>
      {items.map((item) => (
        <Button asChild key={item.href} size="sm" variant="ghost">
          <NavLink className="[&.active]:text-primary" href={item.href}>
            {item.label}
          </NavLink>
        </Button>
      ))}
    </nav>
  );
};
