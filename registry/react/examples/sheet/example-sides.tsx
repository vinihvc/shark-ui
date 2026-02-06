import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const SheetSidesDemo = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Right</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader title="Right Side Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the right side.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader title="Left Side Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the left side.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader title="Top Side Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the top.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader title="Bottom Side Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the bottom.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>
  </div>
);

export default SheetSidesDemo;
