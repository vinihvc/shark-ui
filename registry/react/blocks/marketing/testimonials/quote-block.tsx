import {
  Avatar,
  AvatarFallback,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuoteBlock = () => {
  return (
    <div className="rounded-xl border bg-card p-8">
      <blockquote className="font-medium italic text-foreground">
        &ldquo;Incredible support and a product that just works. We&apos;ve
        seen a 40% increase in productivity since switching.&rdquo;
      </blockquote>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-foreground">Alex Chen</p>
            <p className="text-muted-foreground text-sm">CTO, TechStart</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon-sm">
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="outline" size="icon-sm">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteBlock;
