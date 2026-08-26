"use client";

import { createListCollection } from "@ark-ui/react";
import { Settings2Icon, XIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelFooter,
  FloatingPanelHeader,
  FloatingPanelMaximize,
  FloatingPanelMinimize,
  FloatingPanelRestore,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "@/registry/react/components/floating-panel";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const FloatingPanelDemo = () => (
  <FloatingPanel defaultSize={{ height: 300, width: 360 }}>
    <FloatingPanelTrigger asChild>
      <Button variant="outline">Open</Button>
    </FloatingPanelTrigger>
    <FloatingPanelContent>
      <FloatingPanelHeader>
        <Settings2Icon />
        <FloatingPanelTitle>Settings</FloatingPanelTitle>
        <FloatingPanelControl>
          <FloatingPanelMinimize />
          <FloatingPanelMaximize />
          <FloatingPanelRestore />
          <FloatingPanelCloseTrigger asChild>
            <Button aria-label="Close" size="icon-xs">
              <XIcon aria-hidden />
            </Button>
          </FloatingPanelCloseTrigger>
        </FloatingPanelControl>
      </FloatingPanelHeader>
      <FloatingPanelBody>
        <Field>
          <FieldLabel>Font family</FieldLabel>
          <Select collection={collection} defaultValue={["Inter"]}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {collection.items.map((item) => (
                <SelectItem item={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel>Font size</FieldLabel>
          <NumberInput className="w-full" defaultValue="16">
            <NumberInputGroup>
              <NumberInputDecrement />
              <NumberInputInput />
              <NumberInputIncrement />
            </NumberInputGroup>
          </NumberInput>
        </Field>
      </FloatingPanelBody>
      <FloatingPanelFooter>
        <Button variant="outline">Save</Button>
      </FloatingPanelFooter>
    </FloatingPanelContent>
  </FloatingPanel>
);

const collection = createListCollection({
  items: ["Inter", "Roboto", "Helvetica", "Geist"],
});

export default FloatingPanelDemo;
