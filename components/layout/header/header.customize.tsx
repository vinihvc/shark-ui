"use client";

import { Undo, WandSparklesIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { GRAY_COLORS, PRIMARY_COLORS } from "@/lib/themes";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";
import { type GrayColor, type PrimaryColor, useConfig } from "@/store/config";

export const HeaderCustomize = () => {
  const [config, setConfig] = useConfig();
  const { resolvedTheme } = useTheme();

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
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button size="icon-md" variant="ghost">
          <WandSparklesIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader
          description="Change the theme to match your style."
          title="Make it yours"
        />

        <SheetBody>
          <FieldGroup>
            <Field>
              <FieldLabel>Gray Color</FieldLabel>
              <ToggleGroup
                className="grid w-full grid-cols-3 gap-2"
                multiple={false}
                onValueChange={({ value }) =>
                  handleSelectGrayColor(value[0] as GrayColor)
                }
                value={[config.grayColor]}
              >
                {GRAY_COLORS.map((color) => (
                  <ToggleGroupItem
                    className="flex items-center justify-start gap-2 border-input"
                    key={color.value}
                    value={color.value}
                  >
                    <div
                      className={cn(
                        "size-4 rounded-full border",
                        `bg-${color.value}-900`
                      )}
                    />
                    {color.label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </Field>

            <Field>
              <FieldLabel>Primary Color</FieldLabel>
              <ToggleGroup
                className="grid w-full grid-cols-3 gap-4"
                multiple={false}
                onValueChange={({ value }) =>
                  handleSelectPrimaryColor(value[0] as PrimaryColor)
                }
                value={[config.primaryColor]}
              >
                {PRIMARY_COLORS.map((color) => {
                  const hex =
                    typeof color.hex === "string"
                      ? color.hex
                      : color.hex[isLight ? "light" : "dark"];

                  return (
                    <ToggleGroupItem
                      className="flex items-center justify-start gap-2 border-input"
                      key={color.value}
                      value={color.value}
                    >
                      <div className={cn("size-4 rounded-full border", hex)} />
                      {color.label}
                    </ToggleGroupItem>
                  );
                })}
              </ToggleGroup>
            </Field>
          </FieldGroup>
        </SheetBody>

        <SheetFooter>
          <Button variant="outline">
            <Undo /> Reset
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
