import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertDemo = () => (
  <Alert>
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add icons to alerts to provide visual context and improve user
      experience.
    </AlertDescription>
  </Alert>
);

export default AlertDemo;
