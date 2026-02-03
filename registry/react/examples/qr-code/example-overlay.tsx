import { Logo } from "@/components/logo";
import {
  QrCode,
  QrCodeFrame,
  QrCodeOverlay,
} from "@/registry/react/components/qr-code";

const Example = () => (
  <QrCode value="https://x.com/vinihvc">
    <QrCodeFrame />
    <QrCodeOverlay>
      <Logo />
    </QrCodeOverlay>
  </QrCode>
);

export default Example;
