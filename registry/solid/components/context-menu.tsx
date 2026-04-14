import { Menu as ArkMenu, useMenuContext } from "@ark-ui/solid/menu";
import type { ComponentProps } from "solid-js";

import { cn } from "@/lib/utils";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
} from "@/registry/solid/components/menu";

export const useContextMenu = useMenuContext;

export const ContextMenu = (props: ComponentProps<typeof Menu>) => (
  <Menu data-slot="context-menu" {...props} />
);

export const ContextMenuTrigger = (
  props: ComponentProps<typeof ArkMenu.ContextTrigger>
) => {
  const { class: className, ...rest } = props;

  return (
    <ArkMenu.ContextTrigger
      class={cn("cursor-default select-none", className)}
      data-slot="context-menu"
      {...rest}
    />
  );
};

export const ContextMenuContent = (
  props: ComponentProps<typeof MenuContent>
) => <MenuContent data-slot="context-menu" {...props} />;

export const ContextMenuGroup = (props: ComponentProps<typeof MenuGroup>) => (
  <MenuGroup data-slot="context-menu" {...props} />
);

export const ContextMenuSeparator = (
  props: ComponentProps<typeof MenuSeparator>
) => <MenuSeparator data-slot="context-menu" {...props} />;

export const ContextMenuItem = (props: ComponentProps<typeof MenuItem>) => (
  <MenuItem data-slot="context-menu" {...props} />
);

export const ContextMenuSub = (props: ComponentProps<typeof MenuSub>) => (
  <MenuSub data-slot="context-menu" {...props} />
);

export const ContextMenuSubContent = (
  props: ComponentProps<typeof MenuContent>
) => <MenuSubContent data-slot="context-menu" {...props} />;

export const ContextMenuSubTrigger = (
  props: ComponentProps<typeof MenuSubTrigger>
) => <MenuSubTrigger data-slot="context-menu" {...props} />;

export const ContextMenuShortcut = (
  props: ComponentProps<typeof MenuShortcut>
) => <MenuShortcut data-slot="context-menu" {...props} />;
