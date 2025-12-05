import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";

const CardDemo = () => (
  <Card>
    <CardHeader
      description="Ark UI is a modern and flexible UI library for building web applications."
      title="Welcome to Ark UI"
    />

    <CardContent>
      This card is a simple example of how to use the Card component. You can
      also check all the other components in the documentation.
    </CardContent>

    <CardFooter>
      <Button>Get Started</Button>
    </CardFooter>
  </Card>
);

export default CardDemo;
