import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const PopoverDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button>Open Popover</Button>
    </PopoverTrigger>

    <PopoverContent className="w-80">
      <PopoverHeader>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverHeader>

      <PopoverBody className="grid gap-4">
        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel>Width</FieldLabel>
          <Input className="col-span-2 h-8" defaultValue="100%" />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel>Max. width</FieldLabel>
          <Input className="col-span-2 h-8" defaultValue="300px" />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel>Height</FieldLabel>
          <Input className="col-span-2 h-8" defaultValue="25px" />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel>Max. height</FieldLabel>
          <Input className="col-span-2 h-8" defaultValue="none" />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel>Width</FieldLabel>
          <Input className="col-span-2 h-8" defaultValue="none" />
        </Field>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export default PopoverDemo;
