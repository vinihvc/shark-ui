import { Info } from "lucide-react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

const AlertDemo = () => {
  const variants = ["solid", "outline", "destructive"] as const;

  return (
    <div className="flex flex-col gap-4">
      {variants.map((variant) => (
        <Alert key={variant} variant={variant}>
          <Info />
          <AlertTitle>{`This is an ${variant} alert`}</AlertTitle>
          <AlertDescription>{`This is an ${variant} alert description`}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
};

export default AlertDemo;
