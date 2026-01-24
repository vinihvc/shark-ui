import { Info } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <Alert>
    <Info />
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>
      A new update is available. Check it out now.
    </AlertDescription>
    <AlertAction>
      <Button size="xs" variant="ghost">
        Dismiss
      </Button>
      <Button size="xs">Ok</Button>
    </AlertAction>
  </Alert>
);

export default Example;
