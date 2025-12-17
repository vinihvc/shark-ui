import { ark } from "@ark-ui/react/factory";
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
  <Menu data-scope="context-menu" {...props} />
);

export const ContextMenuTrigger = (
  props: React.ComponentProps<typeof ArkMenu.ContextTrigger>
) => {
  const { children, asChild, ...rest } = props;

  return (
    <ArkMenu.ContextTrigger asChild data-scope="context-menu" {...rest}>
      <ark.span asChild={asChild}>{children}</ark.span>
    </ArkMenu.ContextTrigger>
  );
};

export const ContextMenuContent = (
  props: React.ComponentProps<typeof MenuContent>
) => <MenuContent data-scope="context-menu" showArrow={false} {...props} />;

export const ContextMenuGroup = (
  props: React.ComponentProps<typeof MenuGroup>
) => <MenuGroup data-scope="context-menu" {...props} />;

export const ContextMenuSeparator = (
  props: React.ComponentProps<typeof MenuSeparator>
) => <MenuSeparator data-scope="context-menu" {...props} />;

export const ContextMenuItem = (
  props: React.ComponentProps<typeof MenuItem>
) => <MenuItem data-scope="context-menu" {...props} />;

export const ContextMenuSub = (props: React.ComponentProps<typeof MenuSub>) => (
  <MenuSub data-scope="context-menu" {...props} />
);

export const ContextMenuSubContent = (
  props: React.ComponentProps<typeof MenuContent>
) => <MenuSubContent data-scope="context-menu" {...props} />;

export const ContextMenuSubTrigger = (
  props: React.ComponentProps<typeof MenuSubTrigger>
) => <MenuSubTrigger data-scope="context-menu" {...props} />;

export const ContextMenuShortcut = (
  props: React.ComponentProps<typeof MenuShortcut>
) => <MenuShortcut data-scope="context-menu" {...props} />;
