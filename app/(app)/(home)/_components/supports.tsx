import { ReactIcon } from "@/components/icons/react";
import { SolidIcon } from "@/components/icons/solid";
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
    soon: false,
  },
];

export const Supports = (props: React.ComponentProps<"section">) => {
  const { className, ...rest } = props;

  return (
    <section className={cn("flex w-full gap-4", className)} {...rest}>
      {FRAMEWORKS.map(({ name, icon: Icon, hex, soon }) => (
        <Tooltip key={name} positioning={{ placement: "bottom" }}>
          <TooltipTrigger asChild>
            <div
              className="relative flex flex-wrap items-center gap-2 text-muted-foreground data-[release=soon]:opacity-32"
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
