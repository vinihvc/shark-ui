import { CalendarIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Marker>
      <MarkerIcon>
        <CalendarIcon />
      </MarkerIcon>
      <MarkerContent>Ada joined the conversation</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Marker variant="border">
      <MarkerContent>Streaming paused</MarkerContent>
    </Marker>
  </div>
);

export default Example;
