"use client";

import type React from "react";
import { NavLink } from "@/components/nav-link";
import type { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const TOP_LEVEL_SECTIONS = [
  { name: "Introduction", href: "/docs" },
  { name: "Installation", href: "/docs/installation" },
  { name: "Components", href: "/docs/components" },
  { name: "asChild prop", href: "/docs/as-child" },
  { name: "Changelog", href: "/docs/changelog" },
];

interface MobileNavProps extends React.ComponentProps<typeof Popover> {
  className?: string;
  items: { href: string; label: string }[];
  tree: typeof source.pageTree;
}

export const MobileNav = (props: MobileNavProps) => {
  const { tree, items, className, ...rest } = props;

  return (
    <Popover {...rest}>
      <PopoverTrigger asChild>
        <Button
          aria-label="Toggle Menu"
          className={cn(
            "group extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
          variant="ghost"
        >
          <div className="relative flex h-8 w-4 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                  "top-1 group-data-[state=open]:top-[0.4rem] group-data-[state=open]:-rotate-45"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                  "top-2.5 group-data-[state=open]:top-[0.4rem] group-data-[state=open]:rotate-45"
                )}
              />
            </div>
          </div>
          <span className="flex h-8 items-center font-medium text-lg leading-none">
            Menu
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="h-(--available-height) w-(--available-width) overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur duration-100">
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="font-medium text-muted-foreground text-sm">
              Sections
            </div>
            <div className="flex flex-col gap-3">
              {TOP_LEVEL_SECTIONS.map(({ name, href }) => (
                <PopoverClose asChild key={href}>
                  <NavLink
                    className="flex items-center gap-2 font-medium text-2xl"
                    href={href}
                  >
                    {name}
                  </NavLink>
                </PopoverClose>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {tree?.children?.map((group, index) => {
              if (group.type === "folder") {
                return (
                  <div className="flex flex-col gap-4" key={index}>
                    <div className="font-medium text-muted-foreground text-sm">
                      {group.name}
                    </div>
                    <div className="flex flex-col gap-3">
                      {group.children.map((item) => {
                        if (item.type === "page") {
                          return (
                            <PopoverClose asChild key={`${item.url}-${index}`}>
                              <NavLink
                                className="flex items-center gap-2 font-medium text-2xl"
                                href={item.url}
                              >
                                {item.name}
                              </NavLink>
                            </PopoverClose>
                          );
                        }
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
