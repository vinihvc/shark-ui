"use client";

import { Button } from "@/registry/react/components/button";
import { useToast } from "@/registry/react/components/toast";

const ToastDemo = () => {
  const toast = useToast();

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => {
          toast.create({
            title: "Show Info Toast",
            description: "This is a info toast",
            type: "error",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  );
};

export default ToastDemo;
