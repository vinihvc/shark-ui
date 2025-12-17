"use client";

import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/react/components/radio-group";
import { Textarea } from "@/registry/react/components/textarea";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description: "For small businesses.",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "More features and storage.",
    price: "$20",
  },
] as const;

export function CardsForms() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Upgrade your Subscription</CardTitle>
        <CardDescription className="text-balance">
          You are currently on the free plan. Upgrade to the pro plan to get
          access to all features.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <FieldGroup>
            <FieldGroup className="grid grid-cols-2">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="Max Leiter" />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="mail@acme.com" />
              </Field>
            </FieldGroup>
            <FieldGroup className="grid grid-cols-2 gap-3 md:grid-cols-[1fr_80px_60px]">
              <Field>
                <FieldLabel htmlFor="card-number">Card Number</FieldLabel>
                <Input
                  className="col-span-2 md:col-span-1"
                  id="card-number"
                  placeholder="1234 1234 1234 1234"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-number-expiry">
                  Expiry Date
                </FieldLabel>
                <Input id="card-number-expiry" placeholder="MM/YY" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-number-cvc">CVC</FieldLabel>
                <Input id="card-number-cvc" placeholder="CVC" />
              </Field>
            </FieldGroup>
            <FieldSet>
              <FieldLegend>Plan</FieldLegend>
              <FieldDescription>
                Select the plan that best fits your needs.
              </FieldDescription>
              <RadioGroup
                className="grid grid-cols-2 gap-2"
                defaultValue="starter"
              >
                {plans.map((plan) => (
                  <FieldLabel key={plan.id}>
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>{plan.name}</FieldTitle>
                        <FieldDescription className="text-xs">
                          {plan.description}
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem id={plan.name} value={plan.id} />
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
            </FieldSet>
            <Field>
              <FieldLabel htmlFor="notes">Notes</FieldLabel>
              <Textarea id="notes" placeholder="Enter notes" />
            </Field>
            <Field>
              <Field orientation="horizontal">
                <Checkbox id="terms" />
                <FieldLabel className="font-normal" htmlFor="terms">
                  I agree to the terms and conditions
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox defaultChecked id="newsletter" />
                <FieldLabel className="font-normal" htmlFor="newsletter">
                  Allow us to send you emails
                </FieldLabel>
              </Field>
            </Field>
            <Field orientation="horizontal">
              <Button size="sm" variant="outline">
                Cancel
              </Button>
              <Button size="sm">Upgrade Plan</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
