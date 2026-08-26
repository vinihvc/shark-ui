import { Marker, MarkerContent } from "@/registry/react/components/marker";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Marker role="status">
      <MarkerContent className="shimmer">Thinking...</MarkerContent>
    </Marker>
    <Marker role="status">
      <MarkerContent className="shimmer">Reading 4 files</MarkerContent>
    </Marker>
  </div>
);

export default Example;
