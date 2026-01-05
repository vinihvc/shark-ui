"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { ChevronDown } from "lucide-react";
import { BORDER_RADIUS, GRAY_COLORS, PRIMARY_COLORS } from "@/lib/themes";
import { Button } from "@/registry/react/components/button";
import { ButtonGroup } from "@/registry/react/components/button-group";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";
import { type Config, useConfig } from "@/store/config";

export const ThemeSelectorDialog = (
  props: React.ComponentProps<typeof ButtonGroup>
) => {
  const { children, ...rest } = props;

  const [config] = useConfig();

  const colorLabel =
    PRIMARY_COLORS.find((item) => item.value === config.primaryColor)?.label ??
    config.primaryColor;

  return (
    <ButtonGroup {...rest}>
      <Clipboard value="a">
        <ClipboardTrigger asChild>
          <Button
            className="rounded-r-none rounded-l-md"
            size="icon-sm"
            variant="outline"
          >
            <ClipboardIndicator />

            <span className="sr-only">Copy</span>
          </Button>
        </ClipboardTrigger>
      </Clipboard>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="outline">
            Open theme <ChevronDown className="opacity-50" />
          </Button>
        </DialogTrigger>

        <DialogContent size="2xl">
          <DialogHeader
            description="Copy the CSS variables for this theme to use in your project."
            title={`${colorLabel} Color`}
          />

          <DialogBody className="pb-6">
            <BlockColors
              borderRadius={config.borderRadius}
              grayColor={config.grayColor}
              primaryColor={config.primaryColor}
            />
          </DialogBody>
        </DialogContent>
      </Dialog>
    </ButtonGroup>
  );
};

type BlockColorsProps = Pick<
  Config,
  "primaryColor" | "grayColor" | "borderRadius"
>;

export const BlockColors = (props: BlockColorsProps) => {
  const { primaryColor, grayColor, borderRadius } = props;

  return (
    <DynamicCodeBlock
      code={createCssVars(primaryColor, grayColor, borderRadius)}
      data-line-numbers
      lang="none"
    />
  );
};

const createCssVars = (
  primaryColor: string,
  grayColor: string,
  borderRadius: string
) => {
  const primary = PRIMARY_COLORS.find(
    (item) => item.value === primaryColor
  )?.cssVars;
  const gray = GRAY_COLORS.find((item) => item.value === grayColor)?.cssVars
    .light.gray;
  const radius = BORDER_RADIUS.find((item) => item.value === borderRadius)
    ?.cssVars.radius;

  return `:root {
  --radius: ${radius};
  --background: var(--color-white);
  --foreground: var(--color-neutral-950);
  --card: var(--color-white);
  --card-foreground: var(--color-neutral-950);
  --popover: var(--color-white);
  --popover-foreground: var(--color-neutral-950);
  --primary: var(--${primary?.light.primary});
  --primary-foreground: var(--${primary?.light["primary-foreground"]});
  --secondary: var(--color-neutral-100);
  --secondary-foreground: var(--color-neutral-900);
  --muted: var(--color-neutral-100);
  --muted-foreground: var(--color-neutral-500);
  --accent: var(--color-neutral-100);
  --accent-foreground: var(--color-neutral-900);
  --success: var(--color-emerald-600);
  --success-foreground: var(--color-green-50);
  --info: var(--color-sky-600);
  --info-foreground: var(--color-sky-50);
  --warning: var(--color-yellow-400);
  --warning-foreground: var(--color-yellow-950);
  --destructive: var(--color-red-600);
  --destructive-foreground: var(--color-red-50);
  --border: var(--color-neutral-200);
  --input: var(--color-neutral-300);
  --ring: var(--color-primary);
  --chart-1: var(--color-orange-600);
  --chart-2: var(--color-teal-600);
  --chart-3: var(--color-cyan-900);
  --chart-4: var(--color-amber-400);
  --chart-5: var(--color-amber-500);
}

.dark {
  --background: var(--color-neutral-950);
  --foreground: var(--color-neutral-50);
  --card: var(--color-neutral-950);
  --card-foreground: var(--color-neutral-50);
  --popover: var(--color-neutral-950);
  --popover-foreground: var(--color-neutral-50);
  --primary: var(--color-neutral-50);
  --primary-foreground: var(--color-neutral-900);
  --secondary: var(--color-neutral-800);
  --secondary-foreground: var(--color-neutral-50);
  --muted: var(--color-neutral-900);
  --muted-foreground: var(--color-neutral-400);
  --accent: var(--color-neutral-800);
  --accent-foreground: var(--color-neutral-50);
  --success: var(--color-emerald-600);
  --success-foreground: var(--color-green-50);
  --info: var(--color-sky-600);
  --info-foreground: var(--color-sky-50);
  --warning: var(--color-yellow-600);
  --warning-foreground: var(--color-yellow-50);
  --destructive: var(--color-red-700);
  --destructive-foreground: var(--color-red-50);
  --border: var(--color-neutral-800);
  --input: var(--color-neutral-800);
  --ring: var(--color-primary);
  --chart-1: var(--color-blue-700);
  --chart-2: var(--color-emerald-500);
  --chart-3: var(--color-amber-500);
  --chart-4: var(--color-purple-500);
  --chart-5: var(--color-rose-500);
}`;
};
