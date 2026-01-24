import { QrCode, QrCodeFrame } from "@/registry/react/components/qr-code";

const QrCodeDemo = () => (
  <QrCode value="https://www.x.com/vinihvc">
    <QrCodeFrame className="size-40" />
  </QrCode>
);

export default QrCodeDemo;
