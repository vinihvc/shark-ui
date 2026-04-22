import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Landing Template",
  description:
    "Marketing landing page with hero, features, pricing, and CTA sections. Optimized for conversions.",
  url: "/templates/landing",
});

import Link from "next/link";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Separator } from "@/registry/react/components/separator";

const FEATURES = [
  {
    title: "Fast",
    description:
      "Built for performance. Ship quickly with pre-optimized components.",
  },
  {
    title: "Accessible",
    description:
      "Follows WCAG guidelines. Keyboard navigable and screen-reader friendly.",
  },
  {
    title: "Customizable",
    description:
      "Tailwind-based styling. Themes and tokens for consistent design.",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "$0",
    description: "For side projects and experiments",
    features: ["5 projects", "Basic components", "Community support"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For teams and professionals",
    features: ["Unlimited projects", "All components", "Priority support"],
  },
];

const LandingTemplate = () => (
  <div className="flex min-h-svh flex-col">
    <header className="container flex h-16 items-center justify-between">
      <span className="font-semibold">Acme</span>
      <nav className="flex gap-4">
        <Link
          className="text-muted-foreground text-sm hover:text-foreground"
          href="#features"
        >
          Features
        </Link>
        <Link
          className="text-muted-foreground text-sm hover:text-foreground"
          href="#pricing"
        >
          Pricing
        </Link>
      </nav>
      <Button asChild size="sm">
        <Link href="#">Get Started</Link>
      </Button>
    </header>

    <main className="flex flex-1 flex-col">
      <section className="container flex flex-col items-center gap-6 py-24 text-center">
        <h1 className="font-bold text-4xl tracking-tight sm:text-5xl">
          Build your product faster
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A complete set of components to build modern web apps. Accessible,
          customizable, and ready to ship.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#">
              Get Started
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </section>

      <Separator />

      <section className="container flex flex-col gap-12 py-24" id="features">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-2xl">Features</h2>
          <p className="mt-2 text-muted-foreground">
            Everything you need to build a modern application.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="container flex flex-col gap-12 py-24" id="pricing">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-semibold text-2xl">Pricing</h2>
          <p className="mt-2 text-muted-foreground">
            Simple, transparent pricing for teams of all sizes.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-4xl gap-6 sm:grid-cols-2">
          {PRICING.map((plan) => (
            <Card key={plan.name}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="font-bold text-3xl">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <ul className="flex flex-col gap-2">
                  {plan.features.map((f) => (
                    <li className="text-muted-foreground text-sm" key={f}>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-4">
                  <Link href="#">Get {plan.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="container flex flex-col items-center gap-6 py-24 text-center">
        <h2 className="font-semibold text-2xl">Ready to get started?</h2>
        <p className="max-w-md text-muted-foreground">
          Join thousands of developers building with our components.
        </p>
        <Button asChild size="lg">
          <Link href="#">Start for free</Link>
        </Button>
      </section>
    </main>

    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between">
        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Acme. All rights reserved.
        </span>
      </div>
    </footer>
  </div>
);

export default LandingTemplate;
