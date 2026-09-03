import { GitBranchIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const Example = () => (
  <Marker className="w-full max-w-sm" variant="border">
    <MarkerIcon>
      <GitBranchIcon />
    </MarkerIcon>
    <MarkerContent>Switched to release-candidate</MarkerContent>
  </Marker>
);

export default Example;
