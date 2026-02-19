import { BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react";
import {
  BottomNavigation,
  BottomNavigationItem,
  BottomNavigationItemBadge,
  BottomNavigationItemIcon,
  BottomNavigationItemLabel,
  BottomNavigationList,
} from "@/registry/react/components/bottom-navigation";

const Example = () => (
  <div className="w-full max-w-sm rounded-lg border">
    <div className="flex min-h-48 items-center justify-center text-muted-foreground text-sm">
      Content area
    </div>
    <BottomNavigation defaultValue="home">
      <BottomNavigationList>
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
        <BottomNavigationItem value="notifications">
          <BottomNavigationItemIcon>
            <BellIcon />
          </BottomNavigationItemIcon>
          <BottomNavigationItemLabel>Notifications</BottomNavigationItemLabel>
          <BottomNavigationItemBadge>3</BottomNavigationItemBadge>
        </BottomNavigationItem>
        <BottomNavigationItem value="profile">
          <BottomNavigationItemIcon>
            <UserIcon />
          </BottomNavigationItemIcon>
          <BottomNavigationItemLabel>Profile</BottomNavigationItemLabel>
        </BottomNavigationItem>
      </BottomNavigationList>
    </BottomNavigation>
  </div>
);

export default Example;
