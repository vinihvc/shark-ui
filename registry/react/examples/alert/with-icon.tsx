import { Sparkles } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert>
    <Sparkles />
    <AlertTitle>New Feature Available</AlertTitle>
    <AlertDescription>
      Icons can be added to alerts to provide visual context and improve user
      experience.
    </AlertDescription>
  </Alert>
);

export default Example;
