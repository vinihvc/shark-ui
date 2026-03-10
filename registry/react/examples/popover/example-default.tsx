import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const PopoverDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open</Button>
    </PopoverTrigger>

    <PopoverContent className="w-80">
      <PopoverHeader
        description="Set the dimensions for the layer."
        title="Dimensions"
      />
      <PopoverBody>
        <FieldGroup className="gap-2">
          <Field className="grid grid-cols-3 items-center gap-4">
            <FieldLabel>Width</FieldLabel>
            <Input className="col-span-2" defaultValue="100%" />
          </Field>

          <Field className="grid grid-cols-3 items-center gap-4">
            <FieldLabel>Max. width</FieldLabel>
            <Input className="col-span-2" defaultValue="300px" />
          </Field>

          <Field className="grid grid-cols-3 items-center gap-4">
            <FieldLabel>Height</FieldLabel>
            <Input className="col-span-2" defaultValue="25px" />
          </Field>

          <Field className="grid grid-cols-3 items-center gap-4">
            <FieldLabel>Max. height</FieldLabel>
            <Input className="col-span-2" defaultValue="none" />
          </Field>
        </FieldGroup>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export default PopoverDemo;
