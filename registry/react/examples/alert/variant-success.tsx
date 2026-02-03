import { CheckCircle } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const Example = () => (
  <Alert variant="success">
    <CheckCircle />
    <AlertTitle>Payment successful</AlertTitle>
    <AlertDescription>
      Your payment has been processed successfully. You will receive a receipt
      in your email.
    </AlertDescription>
  </Alert>
);

export default Example;
