"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const Example = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="flex w-full flex-col gap-4">
      <Accordion
        className="w-full"
        onValueChange={(e) => setValue(e.value)}
        value={value}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Information</AccordionTrigger>
          <AccordionContent className="text-pretty text-muted-foreground">
            <p>
              Our flagship product combines cutting-edge technology with sleek
              design. Built with premium materials, it offers unparalleled
              performance and reliability.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Shipping Details</AccordionTrigger>
          <AccordionContent className="text-pretty text-muted-foreground">
            <p>
              We offer worldwide shipping through trusted courier partners.
              Standard delivery takes 3-5 business days.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Return Policy</AccordionTrigger>
          <AccordionContent className="text-pretty text-muted-foreground">
            <p>
              We stand behind our products with a comprehensive 30-day return
              policy. If you&apos;re not completely satisfied, simply return the
              item in its original condition.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="text-muted-foreground text-sm">
        Open items: {value.length === 0 ? "None" : value.join(", ")}
      </div>
    </div>
  );
};

export default Example;
