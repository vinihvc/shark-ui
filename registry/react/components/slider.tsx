import { Slider as ArkSlider } from "@ark-ui/react/slider";
import React from "react";
import { cn } from "@/lib/utils";

interface SliderProps extends React.ComponentProps<typeof ArkSlider.Root> {}

export const Slider = (props: SliderProps) => {
  const { value, defaultValue, min = 0, max = 100, children, ...rest } = props;

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
          className={cn("h-1.5 flex-1 overflow-hidden rounded-full bg-muted")}
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
              "cursor-grab",
              "size-4",
              "border",
              "bg-primary",
              "rounded-full",
              "transition-[color,box-shadow]",
              "shadow-sm",
              "ring-ring/50",
              "data-dragging:cursor-grabbing data-dragging:ring-4",
              "hover:ring-4",
              "focus-visible:outline-hidden focus-visible:ring-4",
              "disabled:pointer-events-none disabled:opacity-50"
            )}
            index={index}
            key={index}
          >
            <ArkSlider.HiddenInput />
          </ArkSlider.Thumb>
        ))}
      </ArkSlider.Control>

      {children}
    </ArkSlider.Root>
  );
};

export const SliderValueText = (
  props: React.ComponentProps<typeof ArkSlider.ValueText>
) => <ArkSlider.ValueText {...props} />;
