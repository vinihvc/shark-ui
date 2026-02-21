"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps extends React.ComponentProps<typeof Link> {}

export const NavLink = (props: NavLinkProps) => {
  const { href, className, ...rest } = props;

  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn({ active: isActive }, className)}
      href={href}
      {...rest}
    />
  );
};
