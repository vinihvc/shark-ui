import { CopyIcon, FileCodeIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";

const Example = () => (
  <InputGroup className="w-full max-w-sm">
    <InputGroupTextarea
      className="font-mono text-sm"
      placeholder="console.log('Hello, world!');"
    />
    <InputGroupAddon align="block-start">
      <FileCodeIcon className="text-muted-foreground" />
      <InputGroupText className="font-mono">script.js</InputGroupText>
      <InputGroupButton aria-label="Copy" className="ml-auto" size="icon-xs">
        <CopyIcon />
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
);

export default Example;
