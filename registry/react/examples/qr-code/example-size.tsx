import { QrCode, QrCodeFrame } from "@/registry/react/components/qr-code";

const Example = () => (
  <div className="flex flex-wrap items-end justify-center gap-6">
    <QrCode className="[--qr-code-size:6rem]">
      <QrCodeFrame className="rounded-md border" />
    </QrCode>

    <QrCode className="[--qr-code-size:8rem]">
      <QrCodeFrame className="rounded-md border" />
    </QrCode>
  </div>
);

export default Example;
