import { Button } from "@/registry/react/components/button";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => (
  <div className="flex flex-wrap justify-center gap-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Right</Button>
      </SheetTrigger>
      <SheetContent placement="right">
        <SheetHeader title="Right Placement Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the right placement.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Left</Button>
      </SheetTrigger>
      <SheetContent placement="left">
        <SheetHeader title="Left Placement Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the left placement.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Top</Button>
      </SheetTrigger>
      <SheetContent placement="top">
        <SheetHeader title="Top Placement Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the top placement.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </SheetTrigger>
      <SheetContent placement="bottom">
        <SheetHeader title="Bottom Placement Sheet" />
        <SheetBody>
          <p className="text-muted-foreground text-sm">
            This sheet slides in from the bottom.
          </p>
        </SheetBody>
      </SheetContent>
    </Sheet>
  </div>
);

export default Example;
