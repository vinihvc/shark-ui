"use client";

import { NavLink } from "@/components/nav-link";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

interface MainNavProps extends React.ComponentProps<"nav"> {
  items: { href: string; label: string }[];
}

export const MainNav = (props: MainNavProps) => {
  const { items, className, ...rest } = props;

  return (
    <nav className={cn("items-center", className)} {...rest}>
      {items.map((item) => (
        <Button asChild key={item.href} variant="ghost">
          <NavLink
            className="px-2 text-muted-foreground hover:text-foreground [&.active]:text-foreground"
            href={item.href}
          >
            {item.label}
          </NavLink>
        </Button>
      ))}
    </nav>
  );
};
