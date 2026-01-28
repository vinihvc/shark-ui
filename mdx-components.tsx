import Link from "fumadocs-core/link";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Info } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import { CodeBlockCommand } from "@/components/code-block-command";
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

// use this function to get MDX components, you will need it for rendering MDX
export const getMDXComponents = (
  components?: MDXComponents
): MDXComponents => ({
  ...defaultMdxComponents,
  ...components,
  Alert: ({ className, ...props }: React.ComponentProps<typeof Alert>) => (
    <Alert className={cn("my-6", className)} {...props} />
  ),
  AlertAction,
  AlertDescription,
  AlertTitle,
  a: ({ className, ...props }: React.ComponentProps<"a">) => (
    <a
      className={cn(
        "font-medium text-foreground underline underline-offset-4",
        className
      )}
      {...props}
    />
  ),
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
            "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[.8125rem] text-muted-foreground outline-none",
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
          "flex items-center gap-2 text-[.8125rem] text-code-foreground [&_svg]:size-4.5 [&_svg]:text-code-foreground [&_svg]:opacity-70 sm:[&_svg]:size-4",
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
      className={cn(
        "mt-2 scroll-m-20 font-heading font-semibold text-3xl",
        className
      )}
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
          "mt-12 scroll-m-20 font-heading font-semibold text-2xl first:mt-0 lg:mt-16 [&+p]:mt-4! *:[code]:text-2xl",
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
        {...props}
        className={cn(
          "mt-8 scroll-m-20 font-semibold text-lg *:[code]:text-lg",
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
      </h3>
    );
  },
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={cn("mt-8 scroll-m-20 font-medium tracking-tight", className)}
      {...props}
    />
  ),
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
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
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
      className={cn("mt-8 scroll-m-32 font-medium tracking-tight", className)}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="steps [&>h3]:step mb-12 [counter-reset:step] *:[h3]:first:mt-0!"
      {...props}
    />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-medium text-foreground", className)}
      {...props}
    />
  ),
  Tab: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={cn(className)} {...props} />
  ),
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => {
    return <Tabs className={cn(className)} {...props} />;
  },
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList className={cn("", className)} {...props} />
  ),
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
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <ScrollArea className="my-6">
      <table
        className={cn("relative w-full border-none text-sm", className)}
        {...props}
      />
    </ScrollArea>
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "whitespace-nowrap px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr
      className={cn("m-0 border-b last:border-b-none", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className={cn("my-6 ms-6 list-disc text-muted-foreground", className)}
      {...props}
    />
  ),
  Info,
  ComponentPreview,
  ComponentInstallation,
  ComponentSource,
  CodeTabs,
});
