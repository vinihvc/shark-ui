import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <Sources defaultOpen>
      <SourcesTrigger count={2} />
      <SourcesContent>
        <Source href="https://react.dev" title="React Documentation" />
        <Source href="https://ark-ui.com" title="Ark UI" />
      </SourcesContent>
    </Sources>
  </div>
);

export default Example;
