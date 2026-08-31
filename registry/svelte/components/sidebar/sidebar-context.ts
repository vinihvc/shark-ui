import { getContext } from "svelte";

export interface SidebarContextValue {
  readonly isMobile: boolean;
  readonly open: boolean;
  readonly openMobile: boolean;
  readonly state: "collapsed" | "expanded";
  setOpen: (open: boolean) => void;
  setOpenMobile: (open: boolean) => void;
  toggleSidebar: () => void;
}

export const sidebarContextKey = Symbol("shark-sidebar");

export const useSidebar = () => {
  const context = getContext<SidebarContextValue>(sidebarContextKey);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
};
