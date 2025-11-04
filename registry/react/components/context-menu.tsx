import { Menu as ArkMenu } from "@ark-ui/react/menu";
import type React from "react";
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
} from "@/registry/react/components/menu";

export const ContextMenu = (props: React.ComponentProps<typeof Menu>) => (
  <Menu data-part="root" data-scope="context-menu" {...props} />
);

export const ContextMenuTrigger = (
  props: React.ComponentProps<typeof ArkMenu.ContextTrigger>
) => (
  <ArkMenu.ContextTrigger
    data-part="trigger"
    data-scope="context-menu"
    {...props}
  />
);

export const ContextMenuContent = (
  props: React.ComponentProps<typeof MenuContent>
) => <MenuContent data-part="content" data-scope="context-menu" {...props} />;

export const ContextMenuGroup = (
  props: React.ComponentProps<typeof MenuGroup>
) => <MenuGroup data-part="item-group" data-scope="context-menu" {...props} />;

export const ContextMenuSeparator = (
  props: React.ComponentProps<typeof MenuSeparator>
) => (
  <MenuSeparator data-part="separator" data-scope="context-menu" {...props} />
);

export const ContextMenuItem = (
  props: React.ComponentProps<typeof MenuItem>
) => <MenuItem data-part="item" data-scope="context-menu" {...props} />;

export const ContextMenuSub = (props: React.ComponentProps<typeof MenuSub>) => (
  <MenuSub data-part="sub" data-scope="context-menu" {...props} />
);

export const ContextMenuSubContent = (
  props: React.ComponentProps<typeof MenuContent>
) => (
  <MenuSubContent
    data-part="sub-content"
    data-scope="context-menu"
    {...props}
  />
);

export const ContextMenuSubTrigger = (
  props: React.ComponentProps<typeof MenuSubTrigger>
) => (
  <MenuSubTrigger
    data-part="sub-trigger"
    data-scope="context-menu"
    {...props}
  />
);

export const ContextMenuShortcut = (props: React.ComponentProps<"span">) => (
  <MenuShortcut data-part="shortcut" data-scope="context-menu" {...props} />
);
