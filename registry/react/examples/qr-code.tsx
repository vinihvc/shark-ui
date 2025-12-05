import { QrCode, QrCodeFrame } from "../components/qr-code";

const QrCodeDemo = () => (
  <QrCode value="https://www.x.com/vinihvc">
    <QrCodeFrame className="size-40" />
  </QrCode>
);

export default QrCodeDemo;
