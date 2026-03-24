import { CopyButton } from "@/components/copy-button";
import { highlightCode } from "@/lib/highlight-code";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { getIconForLanguageExtension } from "@/utils/file-extension";

export interface CodeBlockProps extends React.ComponentProps<"figure"> {
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
   * Whether to show the line numbers
   *
   * @default true
   */
  showshowLineNumbers?: boolean;
  /**
   * The title of the code block
   */
  title?: string;
}

export const CodeBlock = async (props: CodeBlockProps) => {
  const {
    title,
    code,
    copyButton = true,
    lang = "tsx",
    className,
    ...rest
  } = props;

  const highlightedCode = await highlightCode(code, lang);

  return (
    <figure data-rehype-pretty-code-figure="" data-slot="code-block" {...rest}>
      {!!title && (
        <figcaption
          className="flex items-center gap-2 text-[.8125rem] text-muted-foreground [&_svg]:size-4.5 [&_svg]:text-muted-foreground sm:[&_svg]:size-4"
          data-language={lang}
          data-rehype-pretty-code-title=""
          data-slot="code-block-title"
        >
          {getIconForLanguageExtension(lang)}
          {title}
        </figcaption>
      )}

      {copyButton && (
        <CopyButton className="absolute inset-e-1.5 top-1.5" value={code} />
      )}

      <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:data-[orientation=horizontal]:mx-2 **:data-[slot=scroll-area-scrollbar]:data-[orientation=vertical]:my-2">
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: it's ok */}
        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </ScrollArea>
    </figure>
  );
};
