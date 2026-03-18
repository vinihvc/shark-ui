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

    <SheetContent>
      <SheetHeader title="Terms & Conditions" />
      <SheetBody scrollFade>
        <div className="space-y-2 **:[h3]:font-semibold **:[p]:text-muted-foreground **:[p]:text-sm">
          <h3>What is Lorem Ipsum?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            imperdiet placerat nisl, ac consequat sem hendrerit in.
          </p>
          <h3>Why do we use it?</h3>
          <p>
            Pellentesque quis sapien tortor. Nulla egestas tristique justo, in
            commodo quam posuere id. Cras varius, nunc non placerat vulputate,
            dolor turpis elementum elit, non lobortis lacus nunc nec nisl.
          </p>
          <h3>Where does it come from?</h3>
          <p>
            Pellentesque turpis est, mollis eu arcu eu, tempor tincidunt urna.
            Pellentesque pellentesque est euismod accumsan ullamcorper. Quisque
            urna lorem, porttitor ac malesuada at, vehicula eget nulla. Donec
            eget consequat erat, quis pharetra ex.
          </p>
          <h3>Where can I get some?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas semper eros a maximus. Sed consequat tempus lobortis.
            Phasellus sed vulputate turpis. Nulla facilisi. Curabitur consequat
            dui tellus.
          </p>
          <h3>Who can I contact if I have questions?</h3>
          <p>
            Donec tortor lorem, finibus vel suscipit vehicula, sagittis
            efficitur erat. Proin sagittis aliquam sagittis. Nullam sed porta
            leo. Nunc sed velit felis.
          </p>
          <h3>What happens if I don't agree to these terms?</h3>
          <p>
            Aenean maximus, libero vel laoreet congue, purus leo iaculis libero,
            egestas egestas quam mi at quam. Curabitur eu tempus mauris.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae;
          </p>
          <h3>Where can I get some?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas semper eros a maximus. Sed consequat tempus lobortis.
            Phasellus sed vulputate turpis. Nulla facilisi. Curabitur consequat
            dui tellus.
          </p>
        </div>
      </SheetBody>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="ghost">Cancel</Button>
        </SheetClose>
        <SheetClose asChild>
          <Button>I Agree</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

export default Example;
