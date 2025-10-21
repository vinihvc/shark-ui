import { Slider as ArkSlider } from "@ark-ui/react/slider";
import React from "react";
import { cn } from "@/lib/utils";

export const Slider = (props: React.ComponentProps<typeof ArkSlider.Root>) => {
  const { value, defaultValue, min = 0, max = 100, ...rest } = props;

  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  );

  return (
    <ArkSlider.Root
      className="flex w-full flex-col gap-1"
      defaultValue={defaultValue}
      max={max}
      min={min}
      value={value}
      {...rest}
    >
      <ArkSlider.Control className="relative flex h-4 items-center">
        <ArkSlider.Track
          className={cn("h-2.5 flex-1 overflow-hidden rounded-full bg-muted")}
        >
          <ArkSlider.Range
            className={cn(
              "absolute",
              "bg-primary",
              "data-[orientation=horizontal]:h-full",
              'data-[orientation=vertical]:w-full"'
            )}
          />
        </ArkSlider.Track>

        {Array.from({ length: _values.length }, (_, index) => (
          <ArkSlider.Thumb
            className={cn(
              "relative",
              "size-4",
              "bg-primary",
              "rounded-full",
              "transition-[color,box-shadow]",
              "shadow-sm",
              "ring-ring/50 hover:ring-4 focus-visible:outline-hidden focus-visible:ring-4",
              "disabled:pointer-events-none disabled:opacity-50"
            )}
            index={index}
            key={index}
          >
            <ArkSlider.HiddenInput />
          </ArkSlider.Thumb>
        ))}
      </ArkSlider.Control>

      <ArkSlider.MarkerGroup>
        <ArkSlider.Marker value={0}>0</ArkSlider.Marker>
        <ArkSlider.Marker value={25}>*</ArkSlider.Marker>
        <ArkSlider.Marker value={50}>50</ArkSlider.Marker>
        <ArkSlider.Marker value={75}>*</ArkSlider.Marker>
      </ArkSlider.MarkerGroup>
    </ArkSlider.Root>
  );
};

export const SliderValueText = (
  props: React.ComponentProps<typeof ArkSlider.ValueText>
) => <ArkSlider.ValueText {...props} />;
