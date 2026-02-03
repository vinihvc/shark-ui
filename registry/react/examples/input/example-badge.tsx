import { Badge } from "@/registry/react/components/badge";
import { Field, FieldLabel } from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => (
  <Field className="w-full max-w-64">
    <FieldLabel className="flex items-center gap-2">
      Webhook URL
      <Badge className="ml-auto" variant="secondary">
        Beta
      </Badge>
    </FieldLabel>
    <Input placeholder="https://example.com/webhook" />
  </Field>
);

export default Example;
