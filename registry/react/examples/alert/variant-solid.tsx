import { CheckCheckIcon } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert>
    <CheckCheckIcon />
    <AlertTitle>Deployment successful</AlertTitle>
    <AlertDescription>
      You can now start building your next great project.
    </AlertDescription>
  </Alert>
);

export default Example;
