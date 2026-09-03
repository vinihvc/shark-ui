import { SearchIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const Example = () => (
  <Marker className="w-full max-w-sm">
    <MarkerIcon>
      <SearchIcon />
    </MarkerIcon>
    <MarkerContent className="shimmer">
      Searching 12 files for authentication logic
    </MarkerContent>
  </Marker>
);

export default Example;
