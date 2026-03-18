import Link from "next/link";
import type React from "react";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";
import { SharkIcon } from "../icons/shark";

const DOCS_LINKS = [
  { label: "Components", href: "/docs/components" },
  { label: "Theming", href: "/themes" },
  { label: "Installation", href: "/docs/installation" },
  { label: "Get Started", href: "/docs" },
] as const;

const PROJECTS_LINKS = [
  { label: "Blocks", href: "/blocks" },
  { label: "Showcase", href: "/showcase" },
  { label: "Templates", href: "/templates" },
] as const;

const COMMUNITY_LINKS = [
  { label: "GitHub", href: SITE_CONFIG.repoUrl },
  {
    label: "Twitter",
    href: `https://x.com/${SITE_CONFIG.creator.replace("@", "")}`,
  },
] as const;

interface FooterProps extends React.ComponentProps<"footer"> {}

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props;

  return (
    <footer
      className={cn(
        "relative mt-32 border-t bg-linear-to-t from-muted to-muted/10",
        className
      )}
      {...rest}
    >
      <div className="absolute inset-s-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-xl bg-primary p-2">
          <SharkIcon className="size-8 text-primary-foreground" />
        </div>
      </div>

      <div className="container pt-24 pb-8">
        <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-sm">
              <SharkIcon className="inline-flex h-lh w-4 -translate-y-0.5" />{" "}
              Created by{" "}
              <a
                className="underline-offset-2 outline-none hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
                href="https://vini.one"
                rel="noopener noreferrer"
                target="_blank"
              >
                Vinicius Vicentini
              </a>{" "}
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-12 gap-y-6 sm:gap-x-16"
          >
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground text-sm">
                Documentation
              </span>
              <ul className="flex flex-col gap-1.5">
                {DOCS_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      className="text-muted-foreground text-sm outline-none hover:text-foreground focus-visible:text-foreground"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground text-sm">
                Projects
              </span>
              <ul className="flex flex-col gap-1.5">
                {PROJECTS_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      className="text-muted-foreground text-sm outline-none hover:text-foreground focus-visible:text-foreground"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium text-foreground text-sm">
                Community
              </span>
              <ul className="flex flex-col gap-1.5">
                {COMMUNITY_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a
                      className="text-muted-foreground text-sm outline-none hover:text-foreground focus-visible:text-foreground"
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};
