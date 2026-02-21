import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <div className="flex h-72 w-full max-w-xs flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
    <ScrollArea>
      <div className="h-96" />
      <BottomNavigation defaultValue="home">
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
);

export default Example;
