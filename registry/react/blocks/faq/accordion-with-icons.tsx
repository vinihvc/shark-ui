import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/react/components/accordion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Sign up for a free account and follow the onboarding guide. You'll be up and running in minutes.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. No questions asked.",
  },
];

const AccordionWithIcons = () => {
  return (
    <div className="rounded-xl border bg-card p-8">
      <h2 className="mb-6 font-bold text-2xl tracking-tight text-foreground">
        Frequently asked questions
      </h2>
      <Accordion>
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>
              <span className="flex items-center gap-2">
                <Plus className="size-4 shrink-0 text-primary" />
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionWithIcons;
