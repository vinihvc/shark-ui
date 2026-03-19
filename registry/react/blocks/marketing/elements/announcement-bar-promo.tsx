import { Button } from "@/registry/react/components/button";
import { X } from "lucide-react";

const AnnouncementBarPromo = () => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border bg-primary/10 px-4 py-3">
      <p className="text-foreground text-sm">
        <span className="font-medium">Save 20%</span> — Use code{" "}
        <code className="rounded bg-primary/20 px-1.5 py-0.5 font-mono text-sm">
          WELCOME20
        </code>{" "}
        at checkout
      </p>
      <Button variant="ghost" size="icon-xs">
        <X className="size-4" />
      </Button>
    </div>
  );
};

export default AnnouncementBarPromo;
