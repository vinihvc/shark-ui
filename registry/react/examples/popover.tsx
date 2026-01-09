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
          <FieldLabel htmlFor="width">Width</FieldLabel>
          <Input className="col-span-2 h-8" defaultValue="100%" id="width" />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="maxWidth">Max. width</FieldLabel>
          <Input
            className="col-span-2 h-8"
            defaultValue="300px"
            id="maxWidth"
          />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="height">Height</FieldLabel>
          <Input className="col-span-2 h-8" defaultValue="25px" id="height" />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="maxHeight">Max. height</FieldLabel>
          <Input
            className="col-span-2 h-8"
            defaultValue="none"
            id="maxHeight"
          />
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="width">Width</FieldLabel>
          <Input
            className="col-span-2 h-8"
            defaultValue="none"
            id="maxHeight"
          />
        </Field>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export default PopoverDemo;
