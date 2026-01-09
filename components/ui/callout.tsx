import { cn } from "@/lib/utils";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/react/components/alert";

interface CalloutProps extends React.ComponentProps<typeof Alert> {
  /**
   * The icon to display in the callout
   */
  icon?: React.ReactNode;
}

export const Callout = (props: CalloutProps) => {
  const { title, children, icon, className, ...rest } = props;

  return (
    <Alert className={cn("mb-4 py-0", className)} {...rest}>
      {icon}

      {title && <AlertTitle>{title}</AlertTitle>}

      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
};
