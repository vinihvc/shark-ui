"use client";

import {
  BORDER_RADIUS,
  createCssVars,
  GRAY_COLORS,
  PRIMARY_COLORS,
} from "@/lib/themes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
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
  const title =
    primary && gray && radius
      ? `${gray.label} / ${primary.label} / ${radius.label}`
      : "Theme";

  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent size="xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Copy and paste the following code into your CSS file.
          </DialogDescription>
        </DialogHeader>
        <div
          className="min-h-0 min-w-0 flex-1 overflow-hidden p-(--space) in-[[data-slot=dialog-content]:has([data-slot=dialog-header])]:pt-0"
          data-slot="dialog-body"
        >
          <figure
            className="relative mt-0 w-full min-w-0 overflow-hidden rounded-xl"
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
            <CopyButton
              className="absolute inset-e-1.5 top-1.5"
              value={cssCode}
            />

            <div className="h-[300px] w-full min-w-0 overflow-auto md:h-[450px]">
              <pre className="m-0 w-max min-w-full bg-code py-3.5 text-sm outline-none">
                <code
                  className="flex w-max min-w-full flex-col font-mono"
                  data-language="css"
                >
                  {lines.map((line, index) => {
                    const key = line ? `line-${index}` : `blank-${index}`;

                    return (
                      <span className="flex min-h-6 w-max min-w-full" key={key}>
                        <span className="sticky left-0 z-1 w-16 shrink-0 select-none bg-code pe-6 text-end text-muted-foreground tabular-nums">
                          {index + 1}
                        </span>
                        <span className="whitespace-pre pe-4 text-code-foreground">
                          {line || "\u00a0"}
                        </span>
                      </span>
                    );
                  })}
                </code>
              </pre>
            </div>
          </figure>
        </div>
      </DialogContent>
    </Dialog>
  );
};
