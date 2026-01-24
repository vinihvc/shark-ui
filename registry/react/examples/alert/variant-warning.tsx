import { AlertTriangle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert variant="warning">
    <AlertTriangle />
    <AlertTitle>Warning</AlertTitle>
    <AlertDescription>
      Your storage is almost full. Consider upgrading your plan.
    </AlertDescription>
  </Alert>
);

export default Example;
