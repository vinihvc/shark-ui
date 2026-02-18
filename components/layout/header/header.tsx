import { GithubIcon } from "lucide-react";
import { Logo } from "@/components/icons/logo";
import { HeaderCommand } from "@/components/layout/header/header.command";
import { MainNav } from "@/components/layout/header/header.main";
import { MobileNav } from "@/components/layout/header/header.mobile";
import { ModeSwitcher } from "@/components/layout/mode-switcher";
import { NavLink } from "@/components/nav-link";
import { NAV_ITEMS } from "@/config/navigation";
import { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Separator } from "@/registry/react/components/separator";
import { HeaderCustomize } from "./header.customize";

interface SiteHeaderProps extends React.ComponentProps<"header"> {}

export const SiteHeader = (props: SiteHeaderProps) => {
  const { className, ...rest } = props;

  const pageTree = source.pageTree;

  return (
    <header
      className={cn(
        "z-40",
        "sticky top-0",
        "w-full",
        "bg-background/80 backdrop-blur-sm",

        className
      )}
      {...rest}
    >
      <div className="container px-6">
        <div className="flex h-(--header-height) items-center gap-4">
          <MobileNav
            className="flex lg:hidden"
            items={NAV_ITEMS}
            tree={pageTree}
          />

          <NavLink
            className={cn(
              "hidden gap-2 lg:flex",
              "font-bold text-base",
              "rounded-md border border-transparent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
            href="/"
          >
            <Logo className="size-5 shrink-0" />
            Shark
          </NavLink>

          <MainNav className="hidden lg:flex" items={NAV_ITEMS} />

          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
              <HeaderCommand tree={pageTree} />
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

            <HeaderCustomize />

            <ModeSwitcher />
          </div>
        </div>
      </div>

      <span className="block h-px bg-[linear-gradient(90deg,var(--color-foreground)_1px,transparent_1px)] bg-bottom bg-size-[6px_1px] bg-repeat-x opacity-30 dark:opacity-15" />
    </header>
  );
};
