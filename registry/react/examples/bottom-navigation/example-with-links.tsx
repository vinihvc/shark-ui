"use client";

import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => {
  const pathname = usePathname() ?? "/";

  return (
    <div className="flex h-72 w-full max-w-xs flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
      <ScrollArea>
        <div className="h-96" />
        <BottomNavigation value={pathname}>
          <BottomNavigationList className="absolute">
            <BottomNavigationItem asChild value="/">
              <Link href="#">
                <BottomNavigationItemIcon>
                  <HomeIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>Home</BottomNavigationItemLabel>
              </Link>
            </BottomNavigationItem>
            <BottomNavigationItem asChild value="/docs">
              <Link href="#">
                <BottomNavigationItemIcon>
                  <SearchIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>Search</BottomNavigationItemLabel>
              </Link>
            </BottomNavigationItem>
            <BottomNavigationItem asChild value="/docs/components">
              <Link href="#">
                <BottomNavigationItemIcon>
                  <BellIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>News</BottomNavigationItemLabel>
              </Link>
            </BottomNavigationItem>
            <BottomNavigationItem asChild value="/docs/components">
              <Link href="#">
                <BottomNavigationItemIcon>
                  <UserIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>Profile</BottomNavigationItemLabel>
              </Link>
            </BottomNavigationItem>
          </BottomNavigationList>
        </BottomNavigation>
      </ScrollArea>
    </div>
  );
};

export default Example;
