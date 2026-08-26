"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const ToastDemo = () => (
  <Button
    onClick={() => {
      toast.create({
        description: "Tuesday, February 10, 2026 at 10:00 AM.",
        title: "Event has been created.",
      });
    }}
    variant="outline"
  >
    Toast
  </Button>
);

export default ToastDemo;
