"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const ToastDemo = () => {
  return (
    <Button
      onClick={() => {
        toast.create({
          id: "event-created",
          title: "Event has been created.",
          description: "Tuesday, February 10, 2026 at 10:00 AM.",
        });
      }}
      variant="outline"
    >
      Toast
    </Button>
  );
};

export default ToastDemo;
