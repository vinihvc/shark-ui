"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  return (
    <Button
      onClick={() => {
        toast.promise<{ name: string }>(
          () =>
            new Promise((resolve) =>
              setTimeout(() => resolve({ name: "Event" }), 2000)
            ),
          {
            loading: {
              title: "Loading...",
              description: "Please wait.",
            },
            success: (data) => ({
              title: "Success!",
              description: `${data.name} has been created`,
            }),
            error: {
              title: "Error",
              description: "Something went wrong.",
            },
          }
        );
      }}
      variant="outline"
    >
      Run Promise
    </Button>
  );
};

export default Example;
