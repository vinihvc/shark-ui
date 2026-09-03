import { useId } from "react";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => {
  const triggerId = useId();

  return (
    <div className="flex justify-center">
      <Context
        ids={{ trigger: triggerId }}
        maxTokens={128_000}
        usedTokens={18_420}
      >
        <Tooltip ids={{ trigger: triggerId }}>
          <TooltipTrigger asChild>
            <ContextTrigger aria-label="Context usage" size="icon-sm">
              <ContextIcon />
            </ContextTrigger>
          </TooltipTrigger>
          <TooltipContent>Show context usage</TooltipContent>
        </Tooltip>
        <ContextContent>
          <ContextHeader>
            <ContextMeter />
          </ContextHeader>
          <ContextBody>
            {contextUsage.map((usage) => (
              <ContextUsageRow key={usage.title} {...usage} />
            ))}
          </ContextBody>
        </ContextContent>
      </Context>
    </div>
  );
};

const contextUsage = [
  { title: "Input", value: 4200 },
  { title: "Output", value: 860 },
  { title: "Reasoning", value: 640 },
  { title: "Cache", value: 1200 },
];

export default Example;
