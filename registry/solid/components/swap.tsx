import { Swap as ArkSwap, useSwapContext } from "@ark-ui/solid/swap";
import type { ComponentProps } from "solid-js";

import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useSwap = useSwapContext;

const swapIndicatorVariants = tv({
  variants: {
    variant: {
      fade: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-200",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
      scale: [
        "[&>span]:data-[state=open]:zoom-in-0 [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-200",
        "[&>span]:data-[state=closed]:zoom-out-100 [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
      flip: [
        "[&>span]:backface-hidden",
        "[&>span]:data-[state=open]:animate-[flip-in_400ms_ease]",
        "[&>span]:data-[state=closed]:animate-[flip-out_200ms_ease]",
      ],
      rotate: [
        "[&>span]:data-[state=open]:spin-in-[-90deg] [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-250",
        "[&>span]:data-[state=closed]:spin-out-[90deg] [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
      blur: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:zoom-in-50 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:blur-in-sm [&>span]:data-[state=open]:duration-250",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:zoom-out-50 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:blur-out-sm [&>span]:data-[state=closed]:duration-150",
      ],
    },
  },
  defaultVariants: {
    variant: "fade",
  },
});

interface SwapProps
  extends ComponentProps<typeof ArkSwap.Root>,
    VariantProps<typeof swapIndicatorVariants> {}

export const Swap = (props: SwapProps) => {
  const {
    variant = "fade",
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <ArkSwap.Root
      class={cn(swapIndicatorVariants({ variant }))}
      data-slot="swap"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const SwapIndicator = (
  props: ComponentProps<typeof ArkSwap.Indicator>
) => {
  return <ArkSwap.Indicator data-slot="swap-indicator" {...props} />;
};
