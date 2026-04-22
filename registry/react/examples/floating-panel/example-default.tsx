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
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/react/components/number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const FloatingPanelDemo = () => (
  <FloatingPanel defaultSize={{ width: 360, height: 300 }}>
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
          <NumberField className="w-full" defaultValue="16">
            <NumberFieldGroup>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldGroup>
          </NumberField>
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
