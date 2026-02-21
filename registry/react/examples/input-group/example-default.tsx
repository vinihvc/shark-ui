import {
  ArrowUpIcon,
  CheckIcon,
  HelpCircleIcon,
  PlusCircleIcon,
  SearchIcon,
} from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/react/components/input-group";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { Separator } from "@/registry/react/components/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const InputGroupDemo = () => (
  <div className="grid w-full max-w-sm gap-6">
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput className="pl-1!" placeholder="example.com" />
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton pill size="icon-xs">
              <HelpCircleIcon />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipContent>This is content in a tooltip.</TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupTextarea placeholder="Ask, Search or Chat..." />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          className="rounded-full"
          size="icon-xs"
          variant="outline"
        >
          <PlusCircleIcon />
        </InputGroupButton>
        <Menu positioning={{ placement: "bottom-start" }}>
          <MenuTrigger asChild>
            <InputGroupButton variant="ghost">Auto</InputGroupButton>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value="auto">Auto</MenuItem>
            <MenuItem value="agent">Agent</MenuItem>
            <MenuItem value="manual">Manual</MenuItem>
          </MenuContent>
        </Menu>
        <InputGroupText className="ml-auto">52% used</InputGroupText>
        <Separator className="h-4!" orientation="vertical" />
        <InputGroupButton disabled pill size="icon-xs">
          <ArrowUpIcon />
          <span className="sr-only">Send</span>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="@vinihvc" />

      <InputGroupAddon align="inline-end">
        <div className="flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <CheckIcon className="size-3" />
        </div>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default InputGroupDemo;
