"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleAction = () => {
    const id = toast.create({
      action: {
        label: "Undo",
        onClick() {
          toast.dismiss(id);
          toast.success({
            id: "action-undone",
            title: "User has been restored.",
            type: "success",
          });
        },
      },
      description: "You can restore the user.",
      id: "action-performed",
      title: "User has been deleted.",
      type: "error",
    });
  };

  return (
    <Button onClick={handleAction} variant="outline">
      Toast
    </Button>
  );
};

export default Example;
