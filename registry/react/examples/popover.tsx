import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldInput,
  FieldLabel,
} from "@/registry/react/components/field";
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
          <FieldInput>
            <Input className="col-span-2 h-8" defaultValue="100%" id="width" />
          </FieldInput>
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="maxWidth">Max. width</FieldLabel>
          <FieldInput>
            <Input
              className="col-span-2 h-8"
              defaultValue="300px"
              id="maxWidth"
            />
          </FieldInput>
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="height">Height</FieldLabel>
          <FieldInput>
            <Input className="col-span-2 h-8" defaultValue="25px" id="height" />
          </FieldInput>
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="maxHeight">Max. height</FieldLabel>
          <FieldInput>
            <Input
              className="col-span-2 h-8"
              defaultValue="none"
              id="maxHeight"
            />
          </FieldInput>
        </Field>

        <Field className="grid grid-cols-3 items-center gap-4">
          <FieldLabel htmlFor="width">Width</FieldLabel>
          <FieldInput>
            <Input
              className="col-span-2 h-8"
              defaultValue="none"
              id="maxHeight"
            />
          </FieldInput>
        </Field>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

export default PopoverDemo;
