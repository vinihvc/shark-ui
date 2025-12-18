import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";

export const CardsButtons = () => (
  <Card>
    <CardHeader title="Buttons" />
    <CardContent className="flex flex-wrap gap-4">
      <Button>Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary"> Secondary</Button>
      <Button variant="ghost"> Ghost</Button>
      <Button variant="link"> Link</Button>
    </CardContent>
  </Card>
);
