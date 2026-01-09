import type React from "react";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";

interface FooterProps extends React.ComponentProps<"footer"> {}

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props;

  return (
    <footer className={cn("border-t bg-background", className)} {...rest}>
      <div className="container py-12">
        <div className="text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
