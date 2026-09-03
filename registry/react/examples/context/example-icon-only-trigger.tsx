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

const Example = () => (
  <div className="flex justify-center">
    <Context maxTokens={128_000} usedTokens={18_420}>
      <ContextTrigger aria-label="Context usage" size="icon-sm">
        <ContextIcon />
      </ContextTrigger>
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

const contextUsage = [
  { title: "Input", value: 4200 },
  { title: "Output", value: 860 },
  { title: "Reasoning", value: 640 },
  { title: "Cache", value: 1200 },
];

export default Example;
