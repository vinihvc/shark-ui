import { ReactIcon } from "@/components/icons/react";
import { SolidIcon } from "@/components/icons/solid";
import { SvelteIcon } from "@/components/icons/svelte";
import { VueIcon } from "@/components/icons/vue";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const FRAMEWORKS = [
  { name: "React", hex: "#61dafb", icon: ReactIcon, soon: false },
  {
    name: "Solid",
    hex: "var(--color-foreground)",
    icon: SolidIcon,
    soon: true,
  },
  { name: "Vue", hex: "#42b883", icon: VueIcon, soon: true },
  { name: "Svelte", hex: "#ff3e00", icon: SvelteIcon, soon: true },
];

export const Supports = (props: React.ComponentProps<"section">) => {
  const { className, ...rest } = props;

  return (
    <section className={cn("flex w-full gap-4", className)} {...rest}>
      {FRAMEWORKS.map(({ name, icon: Icon, hex, soon }) => (
        <Tooltip key={name} positioning={{ placement: "bottom" }}>
          <TooltipTrigger asChild>
            <div
              className="relative flex flex-wrap items-center gap-3 text-muted-foreground data-[release=soon]:opacity-32"
              data-release={soon ? "soon" : "released"}
            >
              <Icon
                aria-hidden
                className="size-6 shrink-0"
                {...(!soon && { style: { color: hex } })}
              />
              <span className="select-none font-medium text-sm">{name}</span>
            </div>
          </TooltipTrigger>
          {soon && <TooltipContent>Coming soon</TooltipContent>}
        </Tooltip>
      ))}
    </section>
  );
};
