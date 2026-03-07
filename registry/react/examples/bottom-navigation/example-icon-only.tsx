import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemIcon,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <div className="flex h-72 w-full max-w-xs flex-col overflow-y-auto rounded-lg border bg-muted shadow-lg/5">
    <ScrollArea>
      <div className="h-96" />
      <BottomNavigation defaultValue="home">
        <BottomNavigationList className="absolute">
          <BottomNavigationItem aria-label="Home" value="home">
            <BottomNavigationItemIcon>
              <HomeIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
          <BottomNavigationItem aria-label="Search" value="search">
            <BottomNavigationItemIcon>
              <SearchIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
          <BottomNavigationItem aria-label="News" value="news">
            <BottomNavigationItemIcon>
              <BellIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
          <BottomNavigationItem aria-label="Profile" value="profile">
            <BottomNavigationItemIcon>
              <UserIcon />
            </BottomNavigationItemIcon>
          </BottomNavigationItem>
        </BottomNavigationList>
      </BottomNavigation>
    </ScrollArea>
  </div>
);

export default Example;
