import { SparkleIcon, SparklesIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";

const Example = () => (
  <Clipboard value="https://x.com/vinihvc">
    <ClipboardTrigger asChild>
      <Button size="icon-md">
        <ClipboardIndicator copied={<SparklesIcon />}>
          <SparkleIcon />
        </ClipboardIndicator>
      </Button>
    </ClipboardTrigger>
  </Clipboard>
);

export default Example;
