import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const SheetNonModalDemo = () => (
  <Sheet modal={false}>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader
        description="This is a non-modal sheet. You can interact with elements outside the sheet."
        title="Non-Modal Sheet"
      />
      <SheetBody>
        <p className="text-muted-foreground text-sm">
          Non-modal sheets allow interaction with elements outside. Focus
          trapping and scroll prevention are disabled.
        </p>
      </SheetBody>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="outline">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default SheetNonModalDemo;
