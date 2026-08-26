"use client";

import { Button } from "@/registry/react/components/button";
import { toast } from "@/registry/react/components/toast";

const Example = () => (
  <div className="flex gap-2">
    <Button
      onClick={() =>
        toast.create({
          description: "This is a toast with id.",
          id: "dedupe-on",
          title: "Heads up!",
        })
      }
      variant="outline"
    >
      Toast with id
    </Button>
    <Button
      onClick={() =>
        toast.create({
          description: "This is a toast without id.",
          title: "Heads up!",
        })
      }
      variant="outline"
    >
      Toast without id
    </Button>
  </div>
);

export default Example;
