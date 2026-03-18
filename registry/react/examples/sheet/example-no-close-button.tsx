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

const Example = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>

    <SheetContent showCloseButton={false}>
      <SheetHeader
        description="You can only close this sheet using the buttons in the footer, by pressing Escape or by clicking the backdrop."
        title="No close button"
      />
      <SheetBody>
        <p className="text-muted-foreground text-sm">
          The close button in the top right corner is hidden. Use the footer
          buttons or press Escape to close.
        </p>
      </SheetBody>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="outline">Cancel</Button>
        </SheetClose>
        <SheetClose asChild>
          <Button>Confirm</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
