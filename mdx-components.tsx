import defaultMdxComponents from "fumadocs-ui/mdx";
import { InfoIcon } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { CodeTabs } from "@/components/code-tabs";
import { ComponentInstallation } from "@/components/component-installation";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { getIconForLanguageExtension } from "@/lib/file-extension";
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
import { CopyButton } from "./components/copy-button";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./registry/react/components/table";

// use this function to get MDX components, you will need it for rendering MDX
export const mdxComponents = (components?: MDXComponents): MDXComponents => ({
  ...defaultMdxComponents,
  ...components,
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "font-medium text-foreground underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.ComponentProps<typeof Link>) => {
    const isExternal =
      typeof props.href === "string" && props.href.startsWith("http");

    return (
      <Link
        className={cn(
          "font-medium text-foreground underline underline-offset-4",
          className
        )}
        {...(isExternal && {
          rel: "noopener noreferrer",
          target: "_blank",
        })}
        {...props}
      />
    );
  },
  Button,
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 ps-6 italic", className)}
      {...props}
    />
  ),
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
            "px-1.5 py-0.5",
            "bg-secondary/32 dark:bg-muted",
            "font-mono text-foreground text-sm",
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
        {__raw__ && <CopyButton value={__raw__} />}
        <code {...props} />
      </>
    );
  },
  figcaption: ({
    className,
    children,
    ...props
  }: React.ComponentProps<"figcaption">) => {
    const iconExtension =
      "data-language" in props && typeof props["data-language"] === "string"
        ? getIconForLanguageExtension(props["data-language"])
        : null;

    return (
      <figcaption
        className={cn(
          "flex items-center gap-2 text-[.8125rem] text-muted-foreground [&_svg]:size-4.5 [&_svg]:text-muted-foreground [&_svg]:opacity-64 sm:[&_svg]:size-4",
          className
        )}
        {...props}
      >
        {iconExtension}
        {children}
      </figcaption>
    );
  },
  figure: ({ className, ...props }: React.ComponentProps<"figure">) => {
    return <figure className={cn(className)} {...props} />;
  },
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn("mt-2 scroll-m-20 font-semibold text-3xl", className)}
      {...props}
    />
  ),
  h2: ({ className, children, ...props }: React.ComponentProps<"h2">) => {
    const id =
      (props as { id?: string }).id ||
      children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase();

    return (
      <h2
        {...props}
        className={cn(
          "mt-12 scroll-m-20 font-semibold text-2xl first:mt-0 lg:mt-16 [&+p]:mt-4! *:[code]:text-2xl",
          className
        )}
        id={id}
      >
        <a
          className="no-underline underline-offset-4 hover:underline"
          href={`#${id}`}
        >
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ className, children, ...props }: React.ComponentProps<"h3">) => {
    const id =
      (props as { id?: string }).id ||
      children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase();

    return (
      <h3
        className={cn(
          "mt-8 scroll-m-20 font-semibold text-lg *:[code]:text-lg",

          className
        )}
        id={id}
        {...props}
      >
        <a
          className={cn(
            "-mx-2 px-2",
            "rounded-md",
            "no-underline underline-offset-4",
            "hover:underline",
            "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "border border-transparent"
          )}
          href={`#${id}`}
        >
          {children}
        </a>
      </h3>
    );
  },
  h4: ({ className, children, ...props }: React.ComponentProps<"h4">) => {
    const id =
      (props as { id?: string }).id ||
      children
        ?.toString()
        .replace(/ /g, "-")
        .replace(/'/g, "")
        .replace(/\?/g, "")
        .toLowerCase();

    return (
      <h4
        className={cn(
          "mt-8 scroll-m-20 font-medium text-lg tracking-tight",
          className
        )}
        id={id}
        {...props}
      >
        <a
          className="no-underline underline-offset-4 hover:underline"
          href={`#${id}`}
        >
          {children}
        </a>
      </h4>
    );
  },
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 font-medium text-lg tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  img: ({ className, ...props }: React.ComponentProps<"img">) => (
    <img className={cn("rounded-md", className)} {...props} />
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
    children,
    tabIndex,
    id: _id,
    ...props
  }: React.ComponentProps<"pre">) => {
    return (
      <ScrollArea>
        <pre
          className={cn(
            "w-max min-w-full px-4 py-3.5 text-[.8125rem] outline-none has-data-[slot=tabs]:p-0 has-data-highlighted-line:px-0 has-data-line-numbers:px-0",
            className
          )}
          {...props}
        >
          {children}
        </pre>
      </ScrollArea>
    );
  },
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-8 scroll-m-32 font-heading font-medium text-lg tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 [counter-reset:step] md:ml-4 md:border-l md:pl-8"
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
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
      className={cn("**:[code]:text-muted-foreground", className)}
      {...props}
    />
  ),
  thead: ({
    className,
    ...props
  }: React.ComponentProps<typeof TableHeader>) => (
    <TableHeader className={cn("bg-muted", className)} {...props} />
  ),
  th: ({ className, ...props }: React.ComponentProps<typeof TableHead>) => (
    <TableHead
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
  tr: (props: React.ComponentProps<typeof TableRow>) => <TableRow {...props} />,
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className={cn("my-6 ms-6 list-disc text-muted-foreground", className)}
      {...props}
    />
  ),
  Alert: ({ className, ...props }: React.ComponentProps<typeof Alert>) => (
    <Alert className={cn("my-6", className)} {...props} />
  ),
  AlertAction,
  AlertDescription,
  AlertTitle,
  Tabs,
  TabsList,
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
  TabsTrigger,
  InfoIcon,
  ComponentPreview,
  ComponentInstallation,
  ComponentSource,
  CodeTabs,
  CodeCollapsibleWrapper,
});
