import {
  Context,
  ContextBody,
  ContextCacheUsage,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger,
} from "@/registry/react/components/context";

const Example = () => (
  <div className="flex justify-center">
    <Context
      costLabel="$0.042"
      maxTokens={128_000}
      usage={{ cache: 1200, input: 4200, output: 860, reasoning: 640 }}
      usedTokens={18_420}
    >
      <ContextTrigger />
      <ContextContent>
        <ContextHeader />
        <ContextBody>
          <ContextInputUsage />
          <ContextOutputUsage />
          <ContextReasoningUsage />
          <ContextCacheUsage />
        </ContextBody>
        <ContextFooter />
      </ContextContent>
    </Context>
  </div>
);

export default Example;
