import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ComponentInstallation } from "./components/component-installation";
import { ComponentPreviewFile } from "./components/component-preview-file";
import { cn } from "./lib/utils";
import {
  Table,
  TableCell,
  TableHead,
  TableRow,
} from "./registry/react/components/table";

// use this function to get MDX components, you will need it for rendering MDX
export const getMDXComponents = (
  components?: MDXComponents
): MDXComponents => ({
  ...defaultMdxComponents,
  ...components,
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className={cn(
        "mt-2 scroll-m-28 font-bold font-heading text-3xl tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.ComponentProps<"h2">) => {
    return (
      <h2
        className={cn(
          "mt-10 scroll-m-28 font-heading font-medium text-xl tracking-tight first:mt-0 lg:mt-16 [&+.steps>h3]:mt-4! [&+.steps]:mt-0! [&+h3]:mt-6! [&+p]:mt-4! [&+]*:[code]:text-xl",
          className
        )}
        id={props.children
          ?.toString()
          .replace(/ /g, "-")
          .replace(/'/g, "")
          .replace(/\?/g, "")
          .toLowerCase()}
        {...props}
      />
    );
  },
  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-12 scroll-m-28 font-heading font-medium text-lg tracking-tight [&+p]:mt-4! *:[code]:text-xl",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      className={cn(
        "mt-8 scroll-m-28 font-heading font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.ComponentProps<"h5">) => (
    <h5
      className={cn(
        "mt-8 scroll-m-28 font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.ComponentProps<"h6">) => (
    <h6
      className={cn(
        "mt-8 scroll-m-28 font-medium text-base tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.ComponentProps<"a">) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p className={cn("not-first:mt-6 leading-relaxed", className)} {...props} />
  ),
  strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<"img">) => (
    <img alt={alt} className={cn("rounded-md", className)} {...props} />
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: (pros: React.ComponentProps<"table">) => <Table {...pros} />,
  tr: (pros: React.ComponentProps<"tr">) => <TableRow {...pros} />,
  th: (pros: React.ComponentProps<"th">) => <TableHead {...pros} />,
  td: (pros: React.ComponentProps<"td">) => <TableCell {...pros} />,
  pre: ({
    className,
    children,
    tabIndex,
    ref: _ref,
    ...props
  }: React.ComponentProps<"pre">) => {
    return (
      <CodeBlock
        className={cn(
          "no-scrollbar relative min-w-0 overflow-x-auto overscroll-none bg-card! outline-none",
          className
        )}
        {...props}
      >
        <Pre className="w-max min-w-full leading-relaxed *:flex *:flex-col">
          {children}
        </Pre>
      </CodeBlock>
    );
  },
  figure: ({ className, ...props }: React.ComponentProps<"figure">) => {
    return <figure className={cn(className)} {...props} />;
  },
  TypeTable,
  ComponentPreviewFile,
  ComponentInstallation,
  // figcaption: ({
  //   className,
  //   children,
  //   ...props
  // }: React.ComponentProps<"figcaption">) => {
  //   const iconExtension =
  //     "data-language" in props && typeof props["data-language"] === "string"
  //       ? getIconForLanguageExtension(props["data-language"])
  //       : null;

  //   return (
  //     <figcaption
  //       className={cn(
  //         "flex items-center gap-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70",
  //         className
  //       )}
  //       {...props}
  //     >
  //       {iconExtension}
  //       {children}
  //     </figcaption>
  //   );
  // },
});
