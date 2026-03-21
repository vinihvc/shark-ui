"use client";

import { Check } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { Switch } from "@/registry/react/components/switch";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: ["5 projects", "10GB storage", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: ["Unlimited projects", "50GB storage", "Priority support"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 79,
    features: ["Everything in Pro", "Dedicated support", "SLA"],
    highlighted: false,
  },
];

const ThreePlansWithToggle = () => {
  const [yearly, setYearly] = React.useState(false);

  return (
    <div className="rounded-xl border bg-card p-8">
      <div className="mb-8 flex items-center justify-center gap-3">
        <span
          className={`font-medium ${yearly ? "text-muted-foreground" : "text-foreground"}`}
        >
          Monthly
        </span>
        <Switch
          checked={yearly}
          onCheckedChange={({ checked }) => setYearly(checked ?? false)}
        />
        <span
          className={`font-medium ${yearly ? "text-foreground" : "text-muted-foreground"}`}
        >
          Yearly
        </span>
      </div>
      <div className="grid gap-6 sm:grid-cols-3">
        {plans.map((plan) => (
          <Card
            className={plan.highlighted ? "ring-2 ring-primary" : ""}
            key={plan.name}
          >
            <CardHeader
              description={`$${yearly ? plan.yearlyPrice : plan.monthlyPrice}/mo`}
              title={plan.name}
            />
            <CardContent>
              <ul className="mb-6 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li className="flex items-center gap-2 text-sm" key={feature}>
                    <Check className="size-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
              >
                Get started
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ThreePlansWithToggle;
