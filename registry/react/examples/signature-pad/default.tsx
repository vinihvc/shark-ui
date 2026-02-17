import { SignaturePad } from "@/registry/react/components/signature-pad";

const SignaturePadDemo = () => (
  <SignaturePad.Root>
    <SignaturePad.Label>Sign below</SignaturePad.Label>
    <SignaturePad.Control>
      <SignaturePad.Segment />
      <SignaturePad.ClearTrigger />
      <SignaturePad.Guide />
    </SignaturePad.Control>
  </SignaturePad.Root>
);

export default SignaturePadDemo;
