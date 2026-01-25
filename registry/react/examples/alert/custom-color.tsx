import { WandSparkles } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert className="border-purple-500/32 bg-purple-500/5 [&>svg]:text-purple-500">
    <WandSparkles />
    <AlertTitle>Fancy alert, huh?</AlertTitle>
    <AlertDescription>
      This is a fancy alert with a custom color.
    </AlertDescription>
  </Alert>
);

export default Example;
