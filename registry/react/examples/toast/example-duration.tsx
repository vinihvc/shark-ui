"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        toast.create({
          title: "Short duration.",
          description: "This toast disappears after 2 seconds.",
          duration: 2000,
        })
      }
      variant="outline"
    >
      2 seconds
    </Button>
    <Button
      onClick={() =>
        toast.create({
          title: "Long duration.",
          description: "This toast stays for 10 seconds.",
          duration: 10_000,
        })
      }
      variant="outline"
    >
      10 seconds
    </Button>
    <Button
      onClick={() =>
        toast.create({
          title: "Persistent.",
          description: "This toast stays until you close it.",
          duration: Number.POSITIVE_INFINITY,
          closable: true,
        })
      }
      variant="outline"
    >
      Until dismissed
    </Button>
  </div>
);

export default Example;
