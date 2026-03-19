"use client";

import { Button } from "@/registry/react/components/button";
import { Card, CardContent, CardHeader } from "@/registry/react/components/card";
import { Switch } from "@/registry/react/components/switch";
import { Check } from "lucide-react";
import { useState } from "react";

const features = ["Unlimited projects", "50GB storage", "Priority support", "SSO"];

const SinglePlanWithToggle = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader
        description={yearly ? "$39/month (billed yearly)" : "$49/month"}
        title="Pro Plan"
      />
      <CardContent className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span
            className={`font-medium ${!yearly ? "text-foreground" : "text-muted-foreground"}`}
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
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Check className="size-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full">Get started</Button>
      </CardContent>
    </Card>
  );
};

export default SinglePlanWithToggle;
