"use client";

import { createListCollection } from "@ark-ui/react";
import { CogIcon, XIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelClose,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelHeader,
  FloatingPanelMaximize,
  FloatingPanelMinimize,
  FloatingPanelRestore,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "@/registry/react/components/floating-panel";
import { NumberField } from "@/registry/react/components/number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const FloatingPanelDemo = () => {
  const collection = createListCollection({
    items: ["Inter", "Roboto", "Helvetica", "Geist"],
  });

  return (
    <FloatingPanel>
      <FloatingPanelTrigger asChild>
        <Button>Open Panel</Button>
      </FloatingPanelTrigger>

      <FloatingPanelContent>
        <FloatingPanelHeader>
          <CogIcon />
          <FloatingPanelTitle>Settings</FloatingPanelTitle>

          <FloatingPanelControl>
            <FloatingPanelMinimize />

            <FloatingPanelMaximize />

            <FloatingPanelRestore />

            <FloatingPanelClose asChild>
              <Button aria-label="Close" size="icon-sm">
                <XIcon aria-hidden />
              </Button>
            </FloatingPanelClose>
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
            <NumberField className="w-full" defaultValue="16" />
          </Field>
        </FloatingPanelBody>
      </FloatingPanelContent>
    </FloatingPanel>
  );
};

export default FloatingPanelDemo;
