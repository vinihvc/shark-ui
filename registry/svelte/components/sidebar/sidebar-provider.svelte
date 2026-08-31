<script lang="ts">
import { onMount, setContext, type Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { cn } from "@/lib/utils";
import { sidebarContextKey, type SidebarContextValue } from "./sidebar-context";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: Snippet;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

let {
  children,
  class: className,
  defaultOpen = true,
  onOpenChange,
  open = $bindable(defaultOpen),
  style,
  ...rest
}: Props = $props();
let openMobile = $state(false);
let isMobile = $state(false);

const setOpen = (next: boolean) => {
  open = next;
  onOpenChange?.(next);
  document.cookie = `${SIDEBAR_COOKIE_NAME}=${next}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
};
const setOpenMobile = (next: boolean) => {
  openMobile = next;
};
const toggleSidebar = () => {
  if (isMobile) setOpenMobile(!openMobile);
  else setOpen(!open);
};

setContext<SidebarContextValue>(sidebarContextKey, {
  get isMobile() {
    return isMobile;
  },
  get open() {
    return open;
  },
  get openMobile() {
    return openMobile;
  },
  get state() {
    return open ? "expanded" : "collapsed";
  },
  setOpen,
  setOpenMobile,
  toggleSidebar,
});

onMount(() => {
  const media = window.matchMedia("(max-width: 767px)");
  const updateMobile = () => {
    isMobile = media.matches;
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (
      event.key.toLowerCase() === SIDEBAR_KEYBOARD_SHORTCUT &&
      (event.metaKey || event.ctrlKey)
    ) {
      event.preventDefault();
      toggleSidebar();
    }
  };
  updateMobile();
  media.addEventListener("change", updateMobile);
  window.addEventListener("keydown", onKeyDown);
  return () => {
    media.removeEventListener("change", updateMobile);
    window.removeEventListener("keydown", onKeyDown);
  };
});
</script>

<div
  {...rest}
  class={cn("group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar", className)}
  data-slot="sidebar-wrapper"
  style:--sidebar-width="16rem"
  style:--sidebar-width-icon="3rem"
  {style}
>
  {@render children?.()}
</div>
