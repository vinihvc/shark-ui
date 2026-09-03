import {
  Context,
  ContextBody,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context costLabel="$0.042" maxTokens={128_000} usedTokens={18_420}>
      <ContextTrigger />
      <ContextContent>
        <ContextHeader>
          <ContextTitle showCloseButton>Context Usage</ContextTitle>
          <ContextMeter />
        </ContextHeader>
        <ContextBody>
          {contextUsage.map((usage) => (
            <ContextUsageRow key={usage.title} {...usage} />
          ))}
        </ContextBody>
        <ContextFooter />
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
