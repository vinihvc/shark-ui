import { TriangleAlertIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert className="max-w-md" variant="destructive">
    <TriangleAlertIcon />
    <AlertTitle>Session expired</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
);

export default Example;
