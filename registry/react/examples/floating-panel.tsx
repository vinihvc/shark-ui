"use client";

import { createListCollection } from "@ark-ui/react";
import { Cog, Maximize, Minus, SquareArrowOutUpRight, X } from "lucide-react";
import { Button } from "../components/button";
import { Field, FieldInput, FieldLabel } from "../components/field";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelClose,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelHeader,
  FloatingPanelStageTrigger,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "../components/floating-panel";
import { NumberInput } from "../components/number-input";
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectTrigger,
  SelectValueText,
} from "../components/select";

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
          <Cog />
          <FloatingPanelTitle>Settings</FloatingPanelTitle>

          <FloatingPanelControl>
            <FloatingPanelStageTrigger asChild stage="minimized">
              <Button size="icon-sm" variant="ghost">
                <Minus />
                <span className="sr-only">Minimize</span>
              </Button>
            </FloatingPanelStageTrigger>

            <FloatingPanelStageTrigger asChild stage="maximized">
              <Button size="icon-sm" variant="ghost">
                <Maximize />
                <span className="sr-only">Maximize</span>
              </Button>
            </FloatingPanelStageTrigger>

            <FloatingPanelStageTrigger asChild stage="default">
              <Button size="icon-sm" variant="outline">
                <SquareArrowOutUpRight />
                <span className="sr-only">Restore</span>
              </Button>
            </FloatingPanelStageTrigger>

            <FloatingPanelClose asChild>
              <Button size="icon-sm" variant="solid">
                <X />
                <span className="sr-only">Close</span>
              </Button>
            </FloatingPanelClose>
          </FloatingPanelControl>
        </FloatingPanelHeader>

        <FloatingPanelBody>
          <Field>
            <FieldLabel>Font family</FieldLabel>
            <FieldInput>
              <Select collection={collection} defaultValue={["Inter"]}>
                <SelectControl>
                  <SelectTrigger className="w-full">
                    <SelectValueText />
                  </SelectTrigger>
                </SelectControl>

                <SelectContent>
                  {collection.items.map((item) => (
                    <SelectItem item={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FieldInput>
          </Field>

          <Field>
            <FieldLabel>Font size</FieldLabel>
            <FieldInput>
              <NumberInput className="w-full" defaultValue="16" />
            </FieldInput>
          </Field>
        </FloatingPanelBody>
      </FloatingPanelContent>
    </FloatingPanel>
  );
};

export default FloatingPanelDemo;
