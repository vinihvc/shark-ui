"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const handleAction = () => {
    const id = toast.create({
      id: "action-performed",
      title: "User has been deleted.",
      description: "You can restore the user.",
      type: "error",
      action: {
        label: "Undo",
        onClick() {
          toast.dismiss(id);
          toast.create({
            id: "action-undone",
            title: "User has been restored.",
            type: "success",
          });
        },
      },
    });
  };

  return (
    <Button onClick={handleAction} variant="outline">
      Toast
    </Button>
  );
};

export default Example;
