import { FieldInput } from "@ark-ui/react";
import { Ellipsis } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Field, FieldLabel, FieldSet } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const CardDemo = () => (
  <div className="w-full max-w-lg">
    <Card className="w-full">
      <CardHeader
        description="Manage your user account here"
        title="User account"
      >
        <CardAction>
          <Button size="icon-md" variant="ghost">
            <Ellipsis />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <FieldSet>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <FieldInput asChild>
              <Input defaultValue="Vinicius Vicentini" />
            </FieldInput>
          </Field>

          <Field>
            <FieldLabel>Email</FieldLabel>
            <FieldInput asChild>
              <Input defaultValue="vinihvc@gmail.com" />
            </FieldInput>
          </Field>
        </FieldSet>
      </CardContent>

      <CardFooter className="flex-row-reverse">
        <Button size="lg">Save changes</Button>

        <Button size="lg" variant="outline">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  </div>
);

export default CardDemo;
