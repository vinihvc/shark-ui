import { QrCode, QrCodeFrame } from "@/registry/react/components/qr-code";

const eccLevels = ["L", "M", "Q", "H"] as const;

const Example = () => (
  <div className="flex flex-wrap items-center gap-6">
    {eccLevels.map((ecc) => (
      <div className="flex flex-col items-center gap-2" key={ecc}>
        <QrCode
          className="[--qr-code-size:6rem]"
          encoding={{ ecc }}
          value="https://x.com/vinihvc"
        >
          <QrCodeFrame />
        </QrCode>

        <p className="text-muted-foreground text-sm">{ecc}</p>
      </div>
    ))}
  </div>
);

export default Example;
