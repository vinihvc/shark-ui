import { History } from "lucide-react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";

const Example = () => (
  <Alert variant="info">
    <History />
    <AlertTitle>New update available</AlertTitle>
    <AlertDescription>
      A new update is available. Check it out now.
    </AlertDescription>
    <AlertAction>
      <Button size="xs" variant="ghost">
        Ignore
      </Button>
      <Button size="xs">Update</Button>
    </AlertAction>
  </Alert>
);

export default Example;
