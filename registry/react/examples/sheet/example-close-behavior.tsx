import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const SheetCloseBehaviorDemo = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Sheet closeOnInteractOutside={false}>
      <SheetTrigger asChild>
        <Button variant="outline">No close on outside click</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader
          description="Clicking outside does not close this sheet. Press ESC or use the close button."
          title="Stays on outside click"
        />
      </SheetContent>
    </Sheet>
    <Sheet closeOnEscape={false}>
      <SheetTrigger asChild>
        <Button variant="outline">No close on Escape</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader
          description="Pressing Escape does not close this sheet. Click outside or use the close button."
          title="Escape disabled"
        />
      </SheetContent>
    </Sheet>
  </div>
);

export default SheetCloseBehaviorDemo;
