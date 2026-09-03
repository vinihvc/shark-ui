import { ArrowUpRightIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { CodeTabs } from "@/components/code-tabs";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { PreviewIframe } from "@/components/preview-iframe";
import { cn } from "@/lib/utils";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import {
  getIconForLanguageExtension,
  languageFromFileName,
} from "@/utils/file-extension";
import { CopyButton } from "./components/copy-button";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./registry/react/components/table";

export const mdxComponents = {
  Alert: ({ className, ...props }: React.ComponentProps<typeof Alert>) => (
    <Alert className={cn("my-6", className)} {...props} />
  ),
  AlertAction,
  AlertDescription,
  AlertTitle,
  a: ({ href, className, children, ...props }: React.ComponentProps<"a">) => {
    const isExternal = typeof href === "string" && href.startsWith("http");

    return (
      <Link
        className={cn(
          "inline-flex items-center gap-0.5",
          "font-medium text-foreground",
          "rounded-md border border-transparent",
          "underline underline-offset-4",
          "hover:underline",
          "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "**:[code]:decoration-primary",
          className
        )}
        href={href ?? "#"}
        {...(isExternal && {
          rel: "noopener noreferrer",
          target: "_blank",
        })}
        {...props}
      >
        {children}
        {isExternal && <ArrowUpRightIcon className="size-3.5 opacity-90" />}
      </Link>
    );
  },
  Button,
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 ps-6 italic", className)}
      {...props}
    />
  ),
  CodeCollapsibleWrapper,
  CodeTabs,
  ComponentPreview,
  ComponentSource,
  code: ({
    className,
    __raw__,
    __src__,
    __npm__,
    __yarn__,
    __pnpm__,
    __bun__,
    ...props
  }: React.ComponentProps<"code"> & {
    __raw__?: string;
    __src__?: string;
    __npm__?: string;
    __yarn__?: string;
    __pnpm__?: string;
    __bun__?: string;
  }) => {
    // Inline Code.
    if (typeof props.children === "string") {
      return (
        <code
          className={cn(
            "relative",
            "px-1",
            "bg-primary/5",
            "font-mono text-primary text-sm",
            "rounded-md",
            "outline-none",
            className
          )}
          {...props}
        />
      );
    }

    // npm command.
    const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__;
    if (isNpmCommand) {
      return (
        <CodeBlockCommand
          __bun__={__bun__}
          __npm__={__npm__}
          __pnpm__={__pnpm__}
          __yarn__={__yarn__}
        />
      );
    }

    // Default codeblock.
    return (
      <>
        {__raw__ && (
          <CopyButton
            className="absolute inset-e-1.5 top-1.5"
            value={__raw__}
          />
        )}
        <code {...props} />
      </>
    );
  },
  figcaption: ({
    className,
    children,
    ...props
  }: React.ComponentProps<"figcaption">) => {
    const dataLanguage =
      "data-language" in props && typeof props["data-language"] === "string"
        ? props["data-language"]
        : undefined;

    const iconLanguage =
      languageFromFileName(
        typeof children === "string" ? children : undefined
      ) ?? dataLanguage;

    const iconExtension = iconLanguage
      ? getIconForLanguageExtension(iconLanguage)
      : null;

    return (
      <figcaption
        className={cn(
          "flex items-center gap-2",
          "text-[.8125rem] text-code-foreground",
          "[&_svg]:size-4.5 [&_svg]:text-code-foreground [&_svg]:opacity-64 sm:[&_svg]:size-4",
          className
        )}
        {...props}
      >
        {iconExtension}
        {children}
      </figcaption>
    );
  },
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "mt-2 scroll-m-28",
        "font-heading font-semibold text-3xl tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ id, className, children, ...props }: React.ComponentProps<"h2">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h2
        {...props}
        className={cn(
          "mt-10 scroll-m-28",
          "font-heading font-medium text-xl tracking-tight",
          "first:mt-0",
          "lg:mt-12",
          "[&+.steps>h3]:mt-4!",
          "[&+.steps]:mt-0!",
          "[&+h3]:mt-6!",
          "[&+p]:mt-4!",
          "[&+]*:[code]:text-xl",
          className
        )}
        id={headingId}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h2>
    );
  },
  h3: ({ id, className, children, ...props }: React.ComponentProps<"h3">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h3
        className={cn(
          "mt-12 scroll-m-28",
          "font-heading text-lg",
          "font-medium tracking-tight",
          "[&+p]:mt-4!",
          "*:[code]:text-xl",
          className
        )}
        id={headingId}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h3>
    );
  },
  h4: ({ className, children, ...props }: React.ComponentProps<"h4">) => {
    const headingId = getHeadingId(children);

    return (
      <h4
        className={cn(
          "mt-8 scroll-m-28",
          "font-heading font-medium text-base tracking-tight",
          className
        )}
        id={headingId}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h4>
    );
  },
  h5: ({ id, className, children, ...props }: React.ComponentProps<"h5">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h5
        className={cn(
          "mt-8 scroll-m-28",
          "font-heading font-medium text-base tracking-tight",
          className
        )}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h5>
    );
  },
  h6: ({ id, className, children, ...props }: React.ComponentProps<"h6">) => {
    const headingId = id ?? getHeadingId(children);

    return (
      <h6
        className={cn(
          "mt-8 scroll-m-28",
          "font-medium text-base tracking-tight",
          className
        )}
        id={headingId}
        {...props}
      >
        <HeadingAnchor id={headingId}>{children}</HeadingAnchor>
      </h6>
    );
  },
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  InfoIcon,
  img: ({ className, ...props }: React.ComponentProps<"img">) => (
    <img className={cn("rounded-lg", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol
      className={cn("my-6 ms-6 list-decimal text-muted-foreground", className)}
      {...props}
    />
  ),
  PreviewIframe,
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn(
        "not-first:mt-6 text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    tabIndex: _tabIndex,
    id: _id,
    ...props
  }: React.ComponentProps<"pre">) => (
    <ScrollArea>
      <pre
        className={cn(
          "w-max min-w-full px-4 py-3.5 text-[.8125rem] outline-none has-data-[slot=tabs]:p-0 has-data-highlighted-line:px-0 has-data-line-numbers:px-0",
          className
        )}
        {...props}
      />
    </ScrollArea>
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn("mt-8 scroll-m-32 tracking-tight", className)}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 [counter-reset:step] md:ms-4 md:border-s md:ps-8"
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
  Tabs,
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative [&>.steps]:mt-6 [&_h3]:font-medium [&_h3]:text-base *:[figure]:first:mt-0",
        className
      )}
      {...props}
    />
  ),
  TabsList,
  TabsTrigger,
  table: ({ className, ...props }: React.ComponentProps<typeof Table>) => (
    <ScrollArea className="my-6 rounded-xl border">
      <Table
        className={cn(
          "relative w-full border-none [&_tbody_tr:last-child]:border-b-0",
          className
        )}
        isHoverable={false}
        {...props}
      />
    </ScrollArea>
  ),
  td: ({ className, ...props }: React.ComponentProps<typeof TableCell>) => (
    <TableCell
      className={cn(
        "**:[code]:bg-transparent **:[code]:text-foreground",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<typeof TableHead>) => (
    <TableHead className={cn("font-medium", className)} {...props} />
  ),
  thead: ({
    className,
    ...props
  }: React.ComponentProps<typeof TableHeader>) => (
    <TableHeader className={cn("bg-muted", className)} {...props} />
  ),
  tr: (props: React.ComponentProps<typeof TableRow>) => <TableRow {...props} />,
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className={cn("my-6 ms-6 list-disc text-muted-foreground", className)}
      {...props}
    />
  ),
};

const getHeadingId = (children: React.ReactNode) =>
  children
    ?.toString()
    .replace(/ /g, "-")
    .replace(/'/g, "")
    .replace(/\?/g, "")
    .toLowerCase();

const HeadingAnchor = ({ id, children }: React.ComponentProps<"a">) => {
  if (!id) {
    return children;
  }

  return (
    <a
      className={cn(
        "group",
        "-mx-2 px-2",
        "rounded-md",
        "no-underline underline-offset-4",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "border border-transparent"
      )}
      href={`#${id}`}
    >
      <span className="underline-offset-4 group-hover:underline">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="ml-2 text-muted-foreground opacity-0 group-hover:opacity-100"
      >
        #
      </span>
    </a>
  );
};
