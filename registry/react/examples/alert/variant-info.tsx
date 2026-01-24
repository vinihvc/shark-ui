import { Info } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert variant="info">
    <Info />
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>
      A new update is available. Check it out now.
    </AlertDescription>
  </Alert>
);

export default Example;
