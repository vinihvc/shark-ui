import React from "react";

interface UseCopyToClipboardProps {
  /**
   * The function to call when the clipboard is copied
   */
  onCopy?: () => void;
  /**
   * The timeout in milliseconds to show the copied state
   *
   * @default 2000
   */
  timeout?: number;
}

export const useCopyToClipboard = (props: UseCopyToClipboardProps = {}) => {
  const { timeout = 2000, onCopy } = props;

  const [isCopied, setIsCopied] = React.useState(false);
  const timeoutIdRef = React.useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = (value: string): void => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      return;
    }

    if (!value) {
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      setIsCopied(true);

      if (onCopy) {
        onCopy();
      }

      if (timeout !== 0) {
        timeoutIdRef.current = setTimeout(() => {
          setIsCopied(false);
          timeoutIdRef.current = null;
        }, timeout);
      }
    }, console.error);
  };

  React.useEffect(
    () => (): void => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    },
    []
  );

  return { copyToClipboard, isCopied };
};
