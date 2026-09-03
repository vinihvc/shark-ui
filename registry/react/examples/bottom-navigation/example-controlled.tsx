"use client";

import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => {
  const [value, setValue] = useState("home");

  const handleValueChange = (details: { value: string }) => {
    setValue(details.value);
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex h-72 flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
        <ScrollArea>
          <div className="h-96" />
          <BottomNavigation onValueChange={handleValueChange} value={value}>
            <BottomNavigationList className="absolute">
              <BottomNavigationItem value="home">
                <BottomNavigationItemIcon>
                  <HomeIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>Home</BottomNavigationItemLabel>
              </BottomNavigationItem>
              <BottomNavigationItem value="search">
                <BottomNavigationItemIcon>
                  <SearchIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>Search</BottomNavigationItemLabel>
              </BottomNavigationItem>
              <BottomNavigationItem value="news">
                <BottomNavigationItemIcon>
                  <BellIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>News</BottomNavigationItemLabel>
              </BottomNavigationItem>
              <BottomNavigationItem value="profile">
                <BottomNavigationItemIcon>
                  <UserIcon />
                </BottomNavigationItemIcon>
                <BottomNavigationItemLabel>Profile</BottomNavigationItemLabel>
              </BottomNavigationItem>
            </BottomNavigationList>
          </BottomNavigation>
        </ScrollArea>
      </div>
      <p className="text-muted-foreground text-sm">Selected: {value}</p>
    </div>
  );
};

export default Example;
