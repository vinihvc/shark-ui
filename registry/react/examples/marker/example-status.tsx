import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Marker role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Compacting conversation</MarkerContent>
    </Marker>
    <Marker role="status">
      <MarkerIcon>
        <Spinner />
      </MarkerIcon>
      <MarkerContent>Running tests</MarkerContent>
    </Marker>
  </div>
);

export default Example;
