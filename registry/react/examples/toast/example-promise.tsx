"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <Button
    onClick={() => {
      toast.promise<{ name: string }>(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ name: "Event" }), 2000)
          ),
        {
          error: {
            description: "Something went wrong.",
            title: "Error generating event",
          },
          loading: {
            description: "Please wait while we generate the event.",
            title: "Generating event...",
          },
          success: (data) => ({
            description: `${data.name} has been created`,
            title: "Event generated!",
          }),
        }
      );
    }}
    variant="outline"
  >
    Run Promise
  </Button>
);

export default Example;
