import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuShortcut,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuItem asChild value="docs">
        <a
          href="https://x.com/vinihvc"
          rel="noopener noreferrer"
          target="_blank"
        >
          External link
          <MenuShortcut>
            <ExternalLink />
          </MenuShortcut>
        </a>
      </MenuItem>
      <MenuItem asChild value="components">
        <Link href="/docs/components">View docs</Link>
      </MenuItem>
    </MenuContent>
  </Menu>
);

export default Example;
