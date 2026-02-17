"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/react/components/breadcrumb";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <Menu positioning={{ placement: "bottom-start" }}>
          <MenuTrigger asChild>
            <Button
              aria-label="Open menu to view more breadcrumb items"
              size="icon-sm"
              variant="ghost"
            >
              <BreadcrumbEllipsis />
            </Button>
          </MenuTrigger>
          <MenuContent className="w-48">
            <MenuItem asChild value="docs">
              <a href="#">Documentation</a>
            </MenuItem>
            <MenuItem asChild value="components">
              <a href="#">Components</a>
            </MenuItem>
            <MenuItem asChild value="hooks">
              <a href="#">Hooks</a>
            </MenuItem>
          </MenuContent>
        </Menu>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export default Example;
