import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Rating } from "@/registry/react/components/rating";

const RatingDemo = () => (
  <Card className="w-full max-w-xs">
    <CardHeader className="flex flex-col items-center gap-3 text-center">
      <Avatar size="lg">
        <AvatarImage alt="Driver" src="https://github.com/vinihvc.png" />
        <AvatarFallback>VV</AvatarFallback>
      </Avatar>
      <div>
        <CardTitle className="text-base">Vinicius Vicentini</CardTitle>
        <CardDescription> Tuestday morning at Mercado N.89</CardDescription>
      </div>
    </CardHeader>
    <CardContent className="space-y-2 text-center">
      <p className="font-medium text-sm">Rate your driver</p>
      <Rating />
    </CardContent>
    <CardFooter>
      <Button className="w-full">Submit</Button>
    </CardFooter>
  </Card>
);

export default RatingDemo;
