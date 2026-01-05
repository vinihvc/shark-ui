import { highlight } from "fumadocs-core/highlight";
import {
  CodeBlock as BaseCodeBlock,
  Pre as BasePre,
} from "fumadocs-ui/components/codeblock";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";

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

  const rendered = await highlight(code, {
    lang,
    components: {
      pre: (props) => <BasePre {...props} />,
    },
  });

  return (
    <BaseCodeBlock
      allowCopy={false}
      className={cn("relative my-0", className)}
      {...(lineNumbers
        ? { "data-line-numbers": true }
        : { "data-line-numbers": undefined })}
      data-slot="code-block"
      {...rest}
    >
      {!!title && (
        <figcaption
          className={cn(
            "-mt-3",
            "px-2 py-1",
            "flex items-center gap-2",
            "text-code-foreground",
            "bg-input",
            "[&_svg]:size-5 [&_svg]:text-code-foreground sm:[&_svg]:size-4"
          )}
        >
          <Badge className="p-1" variant="outline">
            {icon}
          </Badge>

          {title}
        </figcaption>
      )}

      {copyButton && (
        <Clipboard
          className="absolute top-2 right-2 z-10"
          value="https://x.com/vinihvc"
        >
          <ClipboardTrigger asChild>
            <Button size="icon-sm" variant="ghost">
              <ClipboardIndicator />
            </Button>
          </ClipboardTrigger>
        </Clipboard>
      )}

      {rendered}
    </BaseCodeBlock>
  );
};
