import { Code } from "lucide-react";
import { type BundledLanguage, codeToHtml } from "shiki";
import { cn } from "@/lib/utils";
import {
  Clipboard,
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
   * Whether to show the copy button
   *
   * @default true
   */
  copyButton?: boolean;
  /**
   * The language of the code
   * @default "typescript"
   */
  language?: BundledLanguage;
}

export const CodeBlock = async (props: CodeBlockProps) => {
  const {
    title,
    code,
    copyButton = true,
    language = "typescript",
    className,
    ...rest
  } = props;

  const highlightedCode = await codeToHtml(code, {
    lang: language,
    theme: "github-dark",
  });

  return (
    <figure className={cn("", className)} {...rest}>
      {!!title && (
        <figcaption
          className={cn(
            "flex items-center gap-2",
            "text-code-foreground",
            "[&_svg]:size-5 [&_svg]:text-code-foreground sm:[&_svg]:size-4"
          )}
        >
          <Code />
          {title}
        </figcaption>
      )}

      {!!copyButton && (
        <Clipboard value={code}>
          <ClipboardTrigger />
        </Clipboard>
      )}
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki generates safe HTML */}
      <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </figure>
  );
};
