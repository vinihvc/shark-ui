import { SearchIcon } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { Kbd } from "@/registry/react/components/kbd";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateTitle,
} from "@/registry/react/components/state";

const Example = () => (
  <State>
    <StateHeader>
      <StateTitle asChild>
        <h2>404 - Not Found</h2>
      </StateTitle>
      <StateDescription>
        The page you&apos;re looking for doesn&apos;t exist. Try searching for
        what you need below.
      </StateDescription>
    </StateHeader>
    <StateContent>
      <InputGroup className="sm:w-3/4">
        <InputGroupInput
          aria-label="Search pages"
          placeholder="Try searching for pages..."
          type="search"
        />
        <InputGroupAddon>
          <SearchIcon aria-hidden="true" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>/</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <StateDescription>
        Need help? <a href="#">Contact support</a>
      </StateDescription>
    </StateContent>
  </State>
);

export default Example;
