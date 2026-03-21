import { BarChart3, Plug, Sparkles } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track and visualize your data with powerful insights.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    description: "Connect with your favorite tools and services.",
  },
  {
    icon: Sparkles,
    title: "Intuitive UI",
    description: "Beautiful design that works the way you do.",
  },
];

const IconRow = () => {
  return (
    <div className="rounded-xl border bg-card p-8">
      <div className="grid gap-8 sm:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-3 text-center"
          >
            <feature.icon className="size-10 text-primary" />
            <h3 className="font-semibold text-foreground">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconRow;
