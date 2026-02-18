import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";

const Example = () => (
  <Accordion className="w-full max-w-lg" multiple>
    <AccordionItem value="item-1">
      <AccordionTrigger>Product Information</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        <p>
          Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Shipping Details</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        <p>
          We offer worldwide shipping through trusted courier partners. Standard
          delivery takes 3-5 business days.
        </p>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Return Policy</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">
        <p>
          We stand behind our products with a comprehensive 30-day return
          policy. If you&apos;re not completely satisfied, simply return the
          item in its original condition.
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default Example;
