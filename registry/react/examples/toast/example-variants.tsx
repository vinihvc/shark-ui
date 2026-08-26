"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        toast.success({
          description: "Event has been created.",
          title: "Success!",
        })
      }
      variant="outline"
    >
      Success
    </Button>
    <Button
      onClick={() =>
        toast.error({
          description: "Event has not been created.",
          title: "Something went wrong.",
        })
      }
      variant="outline"
    >
      Error
    </Button>
    <Button
      onClick={() =>
        toast.warning({
          description: "Your session will expire soon.",
          title: "Warning!",
        })
      }
      variant="outline"
    >
      Warning
    </Button>
    <Button
      onClick={() =>
        toast.info({
          description: "You have a new event.",
          title: "Heads up!",
        })
      }
      variant="outline"
    >
      Info
    </Button>
  </div>
);

export default Example;
