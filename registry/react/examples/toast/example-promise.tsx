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
          loading: {
            title: "Generating event...",
            description: "Please wait while we generate the event.",
          },
          success: (data) => ({
            title: "Event generated!",
            description: `${data.name} has been created`,
          }),
          error: {
            title: "Error generating event",
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

export default Example;
