import { HistoryIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert className="max-w-md" variant="info">
    <HistoryIcon />
    <AlertTitle>New update available</AlertTitle>
    <AlertDescription>
      A new update is available. Check it out now.
    </AlertDescription>
  </Alert>
);

export default Example;
