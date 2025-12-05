import { GithubIcon } from "lucide-react";
import { NavLink } from "@/components/nav-link";
import { NAV_ITEMS } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";
import { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Separator } from "@/registry/react/components/separator";
import { Logo } from "../../logo";
import { CommandMenu } from "../command-menu";
import { ModeSwitcher } from "../mode-switcher";
import { MainNav } from "./header.main";
import { MobileNav } from "./header.mobile";

interface SiteHeaderProps extends React.ComponentProps<"header"> {}

export const SiteHeader = (props: SiteHeaderProps) => {
  const { className, ...rest } = props;

  const pageTree = source.pageTree;

  return (
    <header
      className={cn("sticky top-0 z-50 w-full bg-background", className)}
      {...rest}
    >
      <div className="container px-6">
        <div className="flex h-(--header-height) items-center **:data-[scope=separator]:h-4!">
          <MobileNav
            className="flex lg:hidden"
            items={NAV_ITEMS}
            tree={pageTree}
          />

          <Button asChild className="hidden lg:flex" variant="ghost">
            <NavLink href="/">
              <Logo />
              <span>{SITE_CONFIG.name}</span>
            </NavLink>
          </Button>

          <MainNav className="hidden lg:flex" items={NAV_ITEMS} />

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <CommandMenu tree={pageTree} />
            </div>

            <Separator
              className="ml-2 hidden lg:block"
              orientation="vertical"
            />

            <Button asChild size="icon-md" variant="ghost">
              <a
                href="https://github.com/vinihvc/shark-ui"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="sr-only">GitHub</span>
                <GithubIcon />
              </a>
            </Button>

            <Separator orientation="vertical" />

            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
