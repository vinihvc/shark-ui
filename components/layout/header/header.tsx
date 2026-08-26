import Link from "next/link";
import { GithubIcon } from "@/components/icons/github";
import { SharkIcon } from "@/components/icons/shark";
import { HeaderCommand } from "@/components/layout/header/header.command";
import { MainNav } from "@/components/layout/header/header.main";
import { MobileNav } from "@/components/layout/header/header.mobile";
import { ModeSwitcher } from "@/components/layout/mode-switcher";
import { NAV_ITEMS } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";
import { getCommandCompositionItems } from "@/lib/command-composition-items";
import { source } from "@/lib/fumadocs";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Separator } from "@/registry/react/components/separator";
import { HeaderBrand } from "./header.brand";
import { HeaderCustomize } from "./header.customize";

export const SiteHeader = (props: React.ComponentProps<"header">) => {
  const { className, ...rest } = props;

  const { pageTree } = source;
  const compositionItems = getCommandCompositionItems();

  return (
    <header
      className={cn(
        "z-40",
        "sticky top-0",
        "h-(--header-height) w-full",
        "bg-background/80 backdrop-blur-sm",
        "border-b",
        className
      )}
      {...rest}
    >
      <div className="container flex h-full items-center gap-4">
        <HeaderBrand asChild>
          <Link aria-label="Shark UI, back to home" href="/">
            <SharkIcon className="size-5 shrink-0" />
            Shark
          </Link>
        </HeaderBrand>

        <MainNav className="hidden lg:flex" items={NAV_ITEMS} />

        <div className="ms-auto flex items-center gap-2 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 sm:flex md:w-auto md:flex-none">
            <HeaderCommand
              compositionItems={compositionItems}
              navItems={NAV_ITEMS.filter((item) => item.label !== "Docs")}
              tree={pageTree}
            />
          </div>

          <Separator className="ml-2 h-4" orientation="vertical" />

          <Button
            aria-label="Visit GitHub"
            asChild
            size="icon-md"
            variant="ghost"
          >
            <a
              href={SITE_CONFIG.repoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </Button>

          <Separator className="h-4" orientation="vertical" />

          <HeaderCustomize />

          <Separator className="h-4" orientation="vertical" />

          <ModeSwitcher />

          <Separator className="h-4 lg:hidden" orientation="vertical" />

          <MobileNav
            className="flex lg:hidden"
            items={NAV_ITEMS}
            tree={pageTree}
          />
        </div>
      </div>
    </header>
  );
};
