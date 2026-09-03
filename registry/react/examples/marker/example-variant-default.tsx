import { CalendarIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const Example = () => (
  <Marker className="w-full max-w-sm">
    <MarkerIcon>
      <CalendarIcon />
    </MarkerIcon>
    <MarkerContent>Ada joined the conversation</MarkerContent>
  </Marker>
);

export default Example;
