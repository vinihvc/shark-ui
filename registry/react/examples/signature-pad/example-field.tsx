import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import { SignaturePad } from "@/registry/react/components/signature-pad";

const SignaturePadFieldDemo = () => (
  <Field className="w-full max-w-md">
    <FieldLabel>Signature</FieldLabel>
    <SignaturePad />
    <FieldHelper>Draw your signature in the box above</FieldHelper>
  </Field>
);

export default SignaturePadFieldDemo;
