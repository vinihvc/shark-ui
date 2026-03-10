"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() =>
          toast.success({
            title: "Success!",
            description: "Event has been created.",
          })
        }
        variant="outline"
      >
        Success
      </Button>
      <Button
        onClick={() =>
          toast.error({
            title: "Something went wrong.",
            description: "Event has not been created.",
          })
        }
        variant="outline"
      >
        Error
      </Button>
      <Button
        onClick={() =>
          toast.warning({
            title: "Warning!",
            description: "Your session will expire soon.",
          })
        }
        variant="outline"
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          toast.info({
            title: "Heads up!",
            description: "Your have a new event.",
          })
        }
        variant="outline"
      >
        Info
      </Button>
      <Button
        onClick={() => {
          toast.promise(
            () =>
              new Promise((resolve) => setTimeout(() => resolve(true), 2000)),
            {
              loading: {
                title: "Creating event",
                description: "Please wait while we create the event.",
              },
              success: () => ({
                title: "Event has been created!",
                description: "You can now view the event.",
              }),
              error: () => ({
                title: "Something went wrong.",
                description: "Please try again.",
              }),
            }
          );
        }}
        variant="outline"
      >
        Promise
      </Button>
    </div>
  );
};

export default Example;
