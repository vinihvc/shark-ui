import { Card, CardHeader } from "@/registry/react/components/card";

const cards = [
  {
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your business with our comprehensive analytics suite.",
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and automate workflows without the hassle.",
  },
];

const HorizontalDetailCards = () => {
  return (
    <div className="flex flex-col gap-6">
      {cards.map((card) => (
        <Card key={card.title} className="flex flex-row items-start gap-4 p-6">
          <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/20" />
          <CardHeader
            className="p-0"
            description={card.description}
            title={card.title}
          />
        </Card>
      ))}
    </div>
  );
};

export default HorizontalDetailCards;
