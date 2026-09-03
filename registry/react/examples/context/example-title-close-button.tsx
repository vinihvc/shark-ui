import {
  Context,
  ContextBody,
  ContextContent,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context maxTokens={256_000} usedTokens={116_200}>
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
      </ContextContent>
    </Context>
  </div>
);

const contextUsage = [
  { title: "Input", value: 41_300 },
  { title: "Output", value: 25_600 },
  { title: "Reasoning", value: 36_100 },
  { title: "Cache", value: 13_200 },
];

export default Example;
