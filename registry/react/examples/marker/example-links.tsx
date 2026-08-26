import { GitBranchIcon, RotateCcwIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-3">
    <Marker asChild>
      <a href="#pull-request">
        <MarkerIcon>
          <GitBranchIcon />
        </MarkerIcon>
        <MarkerContent>View the pull request</MarkerContent>
      </a>
    </Marker>
    <Marker asChild>
      <button type="button">
        <MarkerIcon>
          <RotateCcwIcon />
        </MarkerIcon>
        <MarkerContent>Revert this change</MarkerContent>
      </button>
    </Marker>
  </div>
);

export default Example;
