"use client";

import { Button } from "../components/button";
import { useToast } from "../components/toast";

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
        type="button"
      >
        Show Toast
      </Button>
    </div>
  );
};

export default ToastDemo;
