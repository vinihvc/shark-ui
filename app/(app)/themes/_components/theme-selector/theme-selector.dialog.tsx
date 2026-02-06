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
      <Clipboard
        value={createCssVars(
          config.primaryColor,
          config.grayColor,
          config.borderRadius
        )}
      >
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
            Open theme <ChevronDown className="opacity-64" />
          </Button>
        </DialogTrigger>

        <DialogContent size="xl">
          <DialogHeader
            description="Copy the CSS variables for this theme to use in your project."
            title={`${colorLabel} Color`}
          />

          <DialogBody className="pb-6 text-xs leading-10">
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
      lang="css"
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
  const gray = GRAY_COLORS.find((item) => item.value === grayColor)?.cssVars;
  const radius = BORDER_RADIUS.find(
    (item) => item.value === borderRadius
  )?.cssVars;

  return `:root {
  --radius: ${radius?.radius};
  --background: ${gray?.light.background};
  --foreground: ${gray?.light.foreground};
  --card: var(--color-white);
  --card-foreground: ${gray?.light["card-foreground"]};
  --popover: ${gray?.light.popover};
  --popover-foreground: ${gray?.light["popover-foreground"]};
  --primary: var(--${primary?.light.primary});
  --primary-foreground: var(--${primary?.light["primary-foreground"]});
  --secondary: ${gray?.light.secondary};
  --secondary-foreground: ${gray?.light["secondary-foreground"]};
  --muted: ${gray?.light.muted};
  --muted-foreground: ${gray?.light["muted-foreground"]};
  --accent: ${gray?.light.accent};
  --accent-foreground: ${gray?.light["accent-foreground"]};
  --success: var(--color-emerald-600);
  --success-foreground: var(--color-green-50);
  --info: var(--color-sky-600);
  --info-foreground: var(--color-sky-50);
  --warning: var(--color-yellow-400);
  --warning-foreground: var(--color-yellow-950);
  --destructive: var(--color-red-600);
  --destructive-foreground: var(--color-red-50);
  --border: ${gray?.light.border};
  --input: ${gray?.light.input};
  --ring: ${primary?.light.ring};
  --chart-1: var(--color-orange-600);
  --chart-2: var(--color-teal-600);
  --chart-3: var(--color-cyan-900);
  --chart-4: var(--color-amber-400);
  --chart-5: var(--color-amber-500);
}

.dark {
  --background: ${gray?.dark.background};
  --foreground: ${gray?.dark.foreground};
  --card: ${gray?.dark.card};
  --card-foreground: ${gray?.dark["card-foreground"]};
  --popover: ${gray?.dark.popover};
  --popover-foreground: ${gray?.dark["popover-foreground"]};
  --primary: ${primary?.dark.primary};
  --primary-foreground: ${primary?.dark["primary-foreground"]};
  --secondary: ${gray?.dark.secondary};
  --secondary-foreground: ${gray?.dark["secondary-foreground"]};
  --muted: ${gray?.dark.muted};
  --muted-foreground: ${gray?.dark["muted-foreground"]};
  --accent: ${gray?.dark.accent};
  --accent-foreground: ${gray?.dark["accent-foreground"]};
  --success: var(--color-emerald-600);
  --success-foreground: var(--color-green-50);
  --info: var(--color-sky-600);
  --info-foreground: var(--color-sky-50);
  --warning: var(--color-yellow-600);
  --warning-foreground: var(--color-yellow-50);
  --destructive: var(--color-red-700);
  --destructive-foreground: var(--color-red-50);
  --border: ${gray?.dark.border};
  --input: ${gray?.dark.input};
  --ring: ${primary?.dark.ring};
  --chart-1: var(--color-blue-700);
  --chart-2: var(--color-emerald-500);
  --chart-3: var(--color-amber-500);
  --chart-4: var(--color-purple-500);
  --chart-5: var(--color-rose-500);
}`;
};
