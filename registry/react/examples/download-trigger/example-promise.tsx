"use client";

import { DownloadIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { DownloadTrigger } from "@/registry/react/components/download-trigger";

const Example = () => (
  <DownloadTrigger
    asChild
    data={fetchData}
    fileName="data.json"
    mimeType="application/json"
  >
    <Button size="lg" variant="outline">
      <DownloadIcon />
      Download
    </Button>
  </DownloadTrigger>
);

const fetchData = () =>
  new Promise<Blob>((resolve) => {
    setTimeout(() => {
      resolve(
        new Blob(['{"message": "Loaded asynchronously!"}'], {
          type: "application/json",
        })
      );
    }, 500);
  });

export default Example;
