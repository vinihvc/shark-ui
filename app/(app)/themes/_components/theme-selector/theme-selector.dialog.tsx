"use client";

import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { ChevronDownIcon } from "lucide-react";
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
            Open theme <ChevronDownIcon className="opacity-64" />
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

  const light = gray?.light;
  const dark = gray?.dark;
  const pLight = primary?.light;
  const pDark = primary?.dark;

  return `:root {
  --radius: ${radius?.radius ?? "0.5rem"};

  --background: ${light?.background};
  --foreground: ${light?.foreground};

  --card: ${light?.card};
  --card-foreground: ${light?.["card-foreground"]};

  --popover: ${light?.popover};
  --popover-foreground: ${light?.["popover-foreground"]};

  --primary: ${pLight?.primary ?? light?.primary};
  --primary-foreground: ${pLight?.["primary-foreground"] ?? light?.["primary-foreground"]};

  --secondary: ${light?.secondary};
  --secondary-foreground: ${light?.["secondary-foreground"]};

  --muted: ${light?.muted};
  --muted-foreground: ${light?.["muted-foreground"]};

  --accent: ${light?.accent};
  --accent-foreground: ${light?.["accent-foreground"]};

  --destructive: var(--color-red-500);
  --destructive-foreground: var(--color-red-700);

  --info: var(--color-blue-500);
  --info-foreground: var(--color-blue-700);

  --success: var(--color-emerald-500);
  --success-foreground: var(--color-emerald-700);

  --warning: var(--color-amber-500);
  --warning-foreground: var(--color-amber-700);

  --border: ${light?.border};
  --input: ${light?.input};
  --ring: ${pLight?.ring ?? light?.ring};

  --chart-1: var(--color-orange-600);
  --chart-2: var(--color-teal-600);
  --chart-3: var(--color-cyan-900);
  --chart-4: var(--color-amber-400);
  --chart-5: var(--color-amber-500);
}

.dark {
  --background: ${dark?.background};
  --foreground: ${dark?.foreground};

  --card: ${dark?.card};
  --card-foreground: ${dark?.["card-foreground"]};

  --popover: ${dark?.popover};
  --popover-foreground: ${dark?.["popover-foreground"]};

  --primary: ${pDark?.primary ?? dark?.primary};
  --primary-foreground: ${pDark?.["primary-foreground"] ?? dark?.["primary-foreground"]};

  --secondary: ${dark?.secondary};
  --secondary-foreground: ${dark?.["secondary-foreground"]};

  --muted: ${dark?.muted};
  --muted-foreground: ${dark?.["muted-foreground"]};

  --accent: ${dark?.accent};
  --accent-foreground: ${dark?.["accent-foreground"]};

  --destructive: ${dark?.destructive};
  --destructive-foreground: ${dark?.["destructive-foreground"]};

  --info: var(--color-blue-500);
  --info-foreground: var(--color-blue-400);

  --success: var(--color-emerald-500);
  --success-foreground: var(--color-emerald-400);

  --warning: var(--color-amber-500);
  --warning-foreground: var(--color-amber-400);

  --border: ${dark?.border};
  --input: ${dark?.input};
  --ring: ${pDark?.ring ?? dark?.ring};

  --chart-1: var(--color-blue-700);
  --chart-2: var(--color-emerald-500);
  --chart-3: var(--color-amber-500);
  --chart-4: var(--color-purple-500);
  --chart-5: var(--color-rose-500);
}`;
};
