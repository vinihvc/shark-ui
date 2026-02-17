import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Field } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64" orientation="horizontal">
    <Input placeholder="Search..." />
    <Button aria-label="Search" size="icon-md">
      <SearchIcon />
    </Button>
  </Field>
);

export default Example;
