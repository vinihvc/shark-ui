import { Check } from "lucide-react";

const features = [
  "Unlimited projects and storage",
  "Real-time collaboration",
  "Advanced analytics dashboard",
  "Priority support",
];

const SplitLayoutWithList = () => {
  return (
    <div className="flex flex-col gap-8 rounded-xl border bg-card p-8 lg:flex-row lg:items-center lg:gap-12 lg:p-12">
      <div className="flex shrink-0 justify-center lg:order-2">
        <div className="h-48 w-64 rounded-lg bg-muted sm:h-64 sm:w-80" />
      </div>
      <div className="flex flex-col gap-4 lg:order-1">
        <h2 className="font-bold text-2xl tracking-tight text-foreground sm:text-3xl">
          Two-column layout with image
        </h2>
        <p className="text-muted-foreground text-base">
          Two-column layout with image on the left and feature bullets on the
          right. Perfect for product highlights and feature lists.
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-foreground text-sm"
            >
              <Check className="size-5 shrink-0 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SplitLayoutWithList;
