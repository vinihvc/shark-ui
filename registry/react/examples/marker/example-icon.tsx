import { BookOpenCheckIcon, GitBranchIcon, SearchIcon } from "lucide-react";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Marker>
      <MarkerIcon>
        <GitBranchIcon />
      </MarkerIcon>
      <MarkerContent>Switched to a new branch</MarkerContent>
    </Marker>
    <Marker>
      <MarkerIcon>
        <SearchIcon />
      </MarkerIcon>
      <MarkerContent>Explored 4 files</MarkerContent>
    </Marker>
    <Marker>
      <MarkerIcon>
        <BookOpenCheckIcon />
      </MarkerIcon>
      <MarkerContent>Syncing completed</MarkerContent>
    </Marker>
  </div>
);

export default Example;
