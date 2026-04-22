"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        toast.create({
          title: "Event has been created.",
          description: "Tuesday, February 10, 2026 at 10:00 AM.",
          closable: true,
        })
      }
      variant="outline"
    >
      Toast
    </Button>
  </div>
);

export default Example;
