import { SharkIcon } from "@/components/icons/shark";
import {
  QrCode,
  QrCodeFrame,
  QrCodeOverlay,
} from "@/registry/react/components/qr-code";

const Example = () => (
  <QrCode value="https://x.com/vinihvc">
    <QrCodeFrame />
    <QrCodeOverlay>
      <SharkIcon />
    </QrCodeOverlay>
  </QrCode>
);

export default Example;
