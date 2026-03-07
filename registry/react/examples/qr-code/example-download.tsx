"use client";

import { DownloadIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import { Card, CardContent } from "@/registry/react/components/card";
import { Input } from "@/registry/react/components/input";
import {
  QrCode,
  QrCodeDownload,
  QrCodeFrame,
} from "@/registry/react/components/qr-code";

const QUALITY_BY_LEVEL = {
  0: "L",
  20: "M",
  40: "Q",
  60: "H",
} as const;

const Example = () => {
  const [value, setValue] = React.useState("");

  const qualityLabel = QUALITY_BY_LEVEL[getQualityLevel(value.length)];

  return (
    <QrCode encoding={{ ecc: qualityLabel }} value={value}>
      <Card className="w-full max-w-xs [--space:--spacing(6)]">
        <CardContent className="flex flex-col justify-center gap-6">
          <Input
            onChange={(e) => setValue(e.target.value)}
            placeholder="Generate a QR code"
            value={value}
          />

          <div className="flex flex-col items-center gap-2">
            <p className="font-medium text-muted-foreground text-sm">
              Live Preview
            </p>
            <QrCodeFrame />
          </div>

          <div className="flex items-center gap-2">
            <QrCodeDownload asChild fileName="qr-code" mimeType="image/png">
              <Button className="w-1/2" size="icon-md" variant="outline">
                <DownloadIcon />
                PNG
              </Button>
            </QrCodeDownload>

            <QrCodeDownload asChild fileName="qr-code" mimeType="image/svg+xml">
              <Button className="w-1/2" size="icon-md">
                <DownloadIcon />
                SVG
              </Button>
            </QrCodeDownload>
          </div>
        </CardContent>
      </Card>
    </QrCode>
  );
};

const getQualityLevel = (length: number) => {
  if (length < 20) {
    return 0;
  }
  if (length < 40) {
    return 20;
  }
  if (length < 60) {
    return 40;
  }
  return 60;
};

export default Example;
