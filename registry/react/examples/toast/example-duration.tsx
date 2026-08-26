"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <div className="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        toast.create({
          description: "This toast disappears after 2 seconds.",
          duration: 2000,
          title: "Short duration.",
        })
      }
      variant="outline"
    >
      2 seconds
    </Button>
    <Button
      onClick={() =>
        toast.create({
          description: "This toast stays for 10 seconds.",
          duration: 10_000,
          title: "Long duration.",
        })
      }
      variant="outline"
    >
      10 seconds
    </Button>
    <Button
      onClick={() =>
        toast.create({
          closable: true,
          description: "This toast stays until you close it.",
          duration: Number.POSITIVE_INFINITY,
          title: "Persistent.",
        })
      }
      variant="outline"
    >
      Until dismissed
    </Button>
  </div>
);

export default Example;
