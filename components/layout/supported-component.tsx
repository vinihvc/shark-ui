"use client";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@registry/react/components/alert";
import { TriangleAlertIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useConfig } from "@/store/config";
import { capitalize } from "@/utils/formatter";

interface SupportedComponentProps extends React.ComponentProps<typeof Alert> {
  /**
   * The frameworks that are supported by the component
   */
  supportedFrameworks: string[];
}

export const SupportedComponent = (props: SupportedComponentProps) => {
  const { supportedFrameworks, className, ...rest } = props;

  const [config] = useConfig();

  const isSupported = supportedFrameworks.includes(config.framework);

  if (isSupported) {
    return null;
  }

  return (
    <Alert className={cn(className)} {...rest}>
      <TriangleAlertIcon />
      <AlertTitle>
        This component is not supported in the {capitalize(config.framework)}.
      </AlertTitle>
      <AlertDescription>
        Check the available frameworks:{" "}
        {supportedFrameworks.map(capitalize).join(", ")}
      </AlertDescription>
    </Alert>
  );
};
