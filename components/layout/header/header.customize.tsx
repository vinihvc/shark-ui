"use client";

import {
  CheckIcon,
  ClipboardIcon,
  Shuffle,
  Undo,
  WandSparklesIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { CopyThemeCodeDialog } from "@/components/dialog/copy-theme";
import { useHotKeys } from "@/hooks/use-hot-keys";
import { BORDER_RADIUS, GRAY_COLORS, PRIMARY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Kbd } from "@/registry/react/components/kbd";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";
import { Slider } from "@/registry/react/components/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";
import {
  type BorderRadius,
  DEFAULT_BORDER_RADIUS,
  DEFAULT_GRAY_COLOR,
  DEFAULT_PRIMARY_COLOR,
  type GrayColor,
  type PrimaryColor,
  useConfig,
} from "@/store/config";

export const HeaderCustomize = () => {
  const [config, setConfig] = useConfig();
  const { resolvedTheme } = useTheme();

  const [isOpen, setIsOpen] = React.useState(false);

  useHotKeys(["c", "C"], () => setIsOpen((prev) => !prev));

  const isLight = resolvedTheme === "light";

  const handleSelectGrayColor = (color: GrayColor) => {
    setConfig({
      ...config,
      grayColor: color,
    });
  };

  const handleSelectPrimaryColor = (color: PrimaryColor) => {
    setConfig({
      ...config,
      primaryColor: color,
    });
  };

  return (
    <Sheet
      closeOnInteractOutside
      modal={false}
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>
            <Button size="icon-md" variant="ghost">
              <WandSparklesIcon aria-hidden />
            </Button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2 pr-2">
          Customize <Kbd>C</Kbd>
        </TooltipContent>
      </Tooltip>

      <SheetContent className="max-sm:w-full max-sm:max-w-full">
        <SheetHeader
          description="Change the theme to match your style."
          title="Make it yours"
        />

        <SheetBody>
          <FieldGroup className="gap-6">
            <Field>
              <FieldLabel>Gray Color</FieldLabel>
              <RadioGroup
                className={cn(
                  "w-full",
                  "grid grid-cols-3 gap-4",
                  "**:data-[slot=radio-group-item-control]:hidden",
                  "**:data-[slot=radio-group-item-text]:flex **:data-[slot=radio-group-item-text]:w-full **:data-[slot=radio-group-item-text]:items-center **:data-[slot=radio-group-item-text]:justify-between"
                )}
                onValueChange={({ value }) =>
                  handleSelectGrayColor(value as GrayColor)
                }
                value={config.grayColor}
              >
                {GRAY_COLORS.map((color) => (
                  <RadioGroupItem
                    className={cn(
                      "group",
                      "w-full",
                      "flex items-center justify-between",
                      "px-3.5 py-2.5",
                      "bg-background",
                      "rounded-lg border border-input shadow-xs/5",
                      "data-[state=checked]:bg-input/32"
                    )}
                    key={color.value}
                    value={color.value}
                  >
                    <div className="flex flex-1 items-center gap-2">
                      <div
                        className={cn(
                          "size-5 rounded-full border",
                          `bg-${color.value}-500`
                        )}
                      />
                      {color.label}
                    </div>

                    <CheckIcon
                      aria-hidden
                      className="size-3.5 shrink-0 group-data-[state=unchecked]:hidden"
                    />
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </Field>

            <Field>
              <FieldLabel>Primary Color</FieldLabel>
              <RadioGroup
                className={cn(
                  "w-full",
                  "grid grid-cols-3 gap-4",
                  "**:data-[slot=radio-group-item-control]:hidden",
                  "**:data-[slot=radio-group-item-text]:flex **:data-[slot=radio-group-item-text]:w-full **:data-[slot=radio-group-item-text]:items-center **:data-[slot=radio-group-item-text]:justify-between"
                )}
                onValueChange={({ value }) =>
                  handleSelectPrimaryColor(value as PrimaryColor)
                }
                value={config.primaryColor}
              >
                {PRIMARY_COLORS.map((color) => {
                  const hex =
                    typeof color.hex === "string"
                      ? color.hex
                      : color.hex[isLight ? "light" : "dark"];

                  return (
                    <RadioGroupItem
                      className={cn(
                        "group",
                        "w-full",
                        "flex items-center justify-between",
                        "px-3.5 py-2.5",
                        "bg-background",
                        "rounded-lg border border-input shadow-xs/5",
                        "data-[state=checked]:bg-input/32"
                      )}
                      key={color.value}
                      value={color.value}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={cn("size-4 rounded-full border", hex)}
                        />
                        {color.label}
                      </div>
                      <CheckIcon
                        aria-hidden
                        className="size-3.5 shrink-0 group-data-[state=unchecked]:hidden"
                      />
                    </RadioGroupItem>
                  );
                })}
              </RadioGroup>
            </Field>

            <Field>
              <FieldLabel>Radius</FieldLabel>
              <Slider
                defaultValue={[5]}
                markerInterval={1}
                markerLabels={BORDER_RADIUS.map((radius) => radius.value)}
                max={BORDER_RADIUS.length - 1}
                min={0}
                onValueChange={({ value }) =>
                  setConfig({
                    ...config,
                    borderRadius: BORDER_RADIUS[value[0]].value as BorderRadius,
                  })
                }
                showMarkers
                value={[
                  BORDER_RADIUS.findIndex(
                    (radius) => radius.value === config.borderRadius
                  ),
                ]}
              />
            </Field>
          </FieldGroup>
        </SheetBody>

        <SheetFooter>
          <Button
            onClick={() =>
              setConfig({
                ...config,
                primaryColor: DEFAULT_PRIMARY_COLOR,
                grayColor: DEFAULT_GRAY_COLOR,
                borderRadius: DEFAULT_BORDER_RADIUS,
              })
            }
            variant="outline"
          >
            <Undo aria-hidden />
            <span className="sm:sr-only">Reset</span>
          </Button>
          <Button
            onClick={() => {
              const randomGray =
                GRAY_COLORS[Math.floor(Math.random() * GRAY_COLORS.length)];
              const randomPrimary =
                PRIMARY_COLORS[
                  Math.floor(Math.random() * PRIMARY_COLORS.length)
                ];
              const randomRadius =
                BORDER_RADIUS[Math.floor(Math.random() * BORDER_RADIUS.length)];
              setConfig({
                ...config,
                grayColor: randomGray.value as GrayColor,
                primaryColor: randomPrimary.value as PrimaryColor,
                borderRadius: randomRadius.value as BorderRadius,
              });
            }}
            variant="outline"
          >
            <Shuffle aria-hidden />
            <span className="sm:sr-only">Shuffle</span>
          </Button>

          <CopyThemeCodeDialog>
            <Button variant="outline">
              <ClipboardIcon />
              Copy theme
            </Button>
          </CopyThemeCodeDialog>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
