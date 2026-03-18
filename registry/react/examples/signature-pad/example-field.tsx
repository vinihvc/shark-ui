import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import { SignaturePad } from "@/registry/react/components/signature-pad";

const Example = () => (
  <Field className="w-full max-w-md">
    <FieldLabel>Signature</FieldLabel>
    <SignaturePad />
    <FieldHelper>Draw your signature in the box above</FieldHelper>
  </Field>
);

export default Example;
