"use client";

import {
  BORDER_RADIUS,
  createCssVars,
  GRAY_COLORS,
  PRIMARY_COLORS,
} from "@/lib/themes";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { useConfig } from "@/store/config";
import { getIconForLanguageExtension } from "@/utils/file-extension";
import { CopyButton } from "../copy-button";

export const CopyThemeCodeDialog = (
  props: React.ComponentProps<typeof Dialog>
) => {
  const { children, ...rest } = props;

  const [cfg] = useConfig();

  const primary = PRIMARY_COLORS.find(
    ({ value }) => value === cfg.primaryColor
  );
  const gray = GRAY_COLORS.find(({ value }) => value === cfg.grayColor);
  const radius = BORDER_RADIUS.find(({ value }) => value === cfg.borderRadius);

  const cssCode =
    primary && gray && radius
      ? createCssVars(primary.cssVars, gray.cssVars, radius.cssVars)
      : "";

  const lines = cssCode.split("\n");

  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent size="xl">
        <DialogHeader>
          <DialogTitle className="capitalize">{cfg.primaryColor}</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file.
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <figure
            className="relative overflow-hidden rounded-xl"
            data-rehype-pretty-code-figure
          >
            <figcaption
              className="flex items-center gap-2 text-[.8125rem] text-muted-foreground [&_svg]:size-4.5 [&_svg]:text-muted-foreground [&_svg]:opacity-64 sm:[&_svg]:size-4"
              data-language="css"
              data-rehype-pretty-code-title=""
              data-theme="github-dark github-light-default"
            >
              {getIconForLanguageExtension("css")}
              globals.css
            </figcaption>
            <CopyButton value={cssCode} />

            <ScrollArea className="h-[300px] md:h-[450px]">
              <pre className="min-w-0 max-w-xl bg-code px-4 py-3.5 text-sm outline-none has-data-highlighted-line:px-0 has-data-line-numbers:px-0">
                <code data-language="css" data-line-numbers>
                  {lines.map((line, index) => {
                    const key = line ? `line-${index}` : `blank-${index}`;

                    return (
                      <span
                        className="line text-code-foreground"
                        data-line
                        key={key}
                      >
                        {line || "\u00a0"}
                      </span>
                    );
                  })}
                </code>
              </pre>
            </ScrollArea>
          </figure>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};
