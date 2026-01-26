import { CodeBlock as BaseCodeBlock } from "fumadocs-ui/components/codeblock";
import { Code } from "lucide-react";
import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";

export interface CodeBlockProps extends React.ComponentProps<"figure"> {
  /**
   * The title of the code block
   */
  title?: string;
  /**
   * The code to highlight
   */
  code: string;
  /**
   * The icon to display in the code block
   */
  icon?: React.ReactNode;
  /**
   * Whether to show the line numbers
   *
   * @default true
   */
  lineNumbers?: boolean;
  /**
   * Whether to show the copy button
   *
   * @default true
   */
  copyButton?: boolean;
}

export const CodeBlock = async (props: CodeBlockProps) => {
  const {
    title,
    code,
    lineNumbers = true,
    copyButton = true,
    icon = <Code />,
    lang = "tsx",
    className,
    ...rest
  } = props;

  const highlightedCode = await highlightCode(code, lang);

  return (
    <BaseCodeBlock
      className={cn("relative my-0 rounded-lg bg-muted", className)}
      {...(lineNumbers && { "data-line-numbers": true })}
      data-slot="code-block"
      {...rest}
    >
      {!!title && (
        <figcaption
          className={cn(
            "-mt-3",
            "px-2 py-1",
            "flex items-center gap-2",
            "text-foreground",
            "bg-input",
            "[&_svg]:size-5 [&_svg]:text-foreground sm:[&_svg]:size-4"
          )}
        >
          <Badge className="p-1" variant="outline">
            {icon}
          </Badge>

          {title}
        </figcaption>
      )}

      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: shiki is safe */}
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </BaseCodeBlock>
  );
};
