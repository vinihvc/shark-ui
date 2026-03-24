import type { Frame } from "@ark-ui/react";
import { cn } from "@/lib/utils";

interface PreviewIframeProps extends React.ComponentProps<typeof Frame> {
  /**
   * The source URL of the iframe
   */
  src: string;
  /**
   * The title of the iframe
   */
  title: string;
}

export const PreviewIframe = (props: PreviewIframeProps) => {
  const { src, title, className, ...rest } = props;

  return (
    <iframe
      className={cn(
        "min-h-[450px] w-full overflow-hidden rounded-2xl border",
        className
      )}
      src={src}
      title={title}
      {...rest}
    />
  );
};
