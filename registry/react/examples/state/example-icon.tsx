import { BookmarkIcon } from "lucide-react";
import {
  State,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

const Example = () => (
  <State>
    <StateHeader>
      <StateMedia variant="icon">
        <BookmarkIcon aria-hidden="true" />
      </StateMedia>
      <StateTitle asChild>
        <h2>No bookmarks</h2>
      </StateTitle>
      <StateDescription>
        Save interesting content by bookmarking it.
      </StateDescription>
    </StateHeader>
  </State>
);

export default Example;
