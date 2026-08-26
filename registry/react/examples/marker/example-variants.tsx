import { Marker, MarkerContent } from "@/registry/react/components/marker";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Marker>
      <MarkerContent>A default marker for inline notes.</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>A separator marker</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerContent>A border marker for row boundaries.</MarkerContent>
    </Marker>
  </div>
);

export default Example;
