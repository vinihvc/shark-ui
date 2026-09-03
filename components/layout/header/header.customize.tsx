"use client";

import { useTheme } from "@teispace/next-themes";
import {
  CheckIcon,
  ClipboardIcon,
  Shuffle,
  Undo,
  WandSparklesIcon,
} from "lucide-react";
import React from "react";
import { CopyThemeCodeDialog } from "@/components/dialog/copy-theme";
import { BORDER_RADIUS, GRAY_COLORS, PRIMARY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Field, FieldGroup } from "@/registry/react/components/field";
import { useHotkey } from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/registry/react/components/radio-group";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";
import { Slider, SliderLabel } from "@/registry/react/components/slider";
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

  useHotkey({
    action: () => setIsOpen((open) => !open),
    hotkey: "c",
    options: { preventDefault: true },
  });

  const isLight = resolvedTheme === "light";
  const storedRadiusIndex = BORDER_RADIUS.findIndex(
    (radius) => radius.value === config.borderRadius
  );
  const radiusIndex =
    storedRadiusIndex >= 0
      ? storedRadiusIndex
      : BORDER_RADIUS.findIndex(
          (radius) => radius.value === DEFAULT_BORDER_RADIUS
        );

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

  const handleSelectRadius = ({ value }: { value: number[] }) => {
    const next = BORDER_RADIUS[value[0]]?.value ?? DEFAULT_BORDER_RADIUS;

    setConfig({
      ...config,
      borderRadius: next,
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
            <Button aria-label="Customize" size="icon-md" variant="ghost">
              <WandSparklesIcon />
            </Button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent className="flex items-center gap-2 pe-2">
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
              <RadioGroup
                className={cn(
                  "w-full",
                  "grid grid-cols-3 gap-2 sm:gap-4",
                  "**:data-[slot=radio-group-item-control]:hidden",
                  "**:data-[slot=radio-group-item-text]:flex **:data-[slot=radio-group-item-text]:w-full **:data-[slot=radio-group-item-text]:items-center **:data-[slot=radio-group-item-text]:justify-between"
                )}
                onValueChange={({ value }) =>
                  handleSelectGrayColor(value as GrayColor)
                }
                value={config.grayColor}
              >
                <RadioGroupLabel className="col-span-3">
                  Gray Color
                </RadioGroupLabel>
                {GRAY_COLORS.map((color) => (
                  <RadioGroupItem
                    className={cn(
                      "group",
                      "w-full",
                      "flex items-center justify-between",
                      "px-3.5 py-2.5",
                      "rounded-lg border shadow-xs/5",
                      "data-[state=checked]:bg-accent"
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
                      className="size-3.5 shrink-0 group-data-[state=unchecked]:hidden max-sm:hidden"
                    />
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </Field>

            <Field>
              <RadioGroup
                className={cn(
                  "w-full",
                  "grid grid-cols-3 gap-2 sm:gap-4",
                  "**:data-[slot=radio-group-item-control]:hidden",
                  "**:data-[slot=radio-group-item-text]:flex **:data-[slot=radio-group-item-text]:w-full **:data-[slot=radio-group-item-text]:items-center **:data-[slot=radio-group-item-text]:justify-between"
                )}
                onValueChange={({ value }) =>
                  handleSelectPrimaryColor(value as PrimaryColor)
                }
                value={config.primaryColor}
              >
                <RadioGroupLabel className="col-span-3">
                  Primary Color
                </RadioGroupLabel>
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
                        "rounded-lg border shadow-xs/5",
                        "data-[state=checked]:bg-accent"
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
                        className="size-3.5 shrink-0 group-data-[state=unchecked]:hidden max-sm:hidden"
                      />
                    </RadioGroupItem>
                  );
                })}
              </RadioGroup>
            </Field>

            <Field>
              <Slider
                markerInterval={1}
                markerLabels={BORDER_RADIUS.map((radius) => radius.value)}
                max={BORDER_RADIUS.length - 1}
                min={0}
                onValueChange={handleSelectRadius}
                showMarkers
                value={[radiusIndex]}
              >
                <SliderLabel>Radius</SliderLabel>
              </Slider>
            </Field>
          </FieldGroup>
        </SheetBody>

        <SheetFooter>
          <Button
            onClick={() =>
              setConfig({
                ...config,
                borderRadius: DEFAULT_BORDER_RADIUS,
                grayColor: DEFAULT_GRAY_COLOR,
                primaryColor: DEFAULT_PRIMARY_COLOR,
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
                borderRadius: randomRadius.value as BorderRadius,
                grayColor: randomGray.value as GrayColor,
                primaryColor: randomPrimary.value as PrimaryColor,
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
