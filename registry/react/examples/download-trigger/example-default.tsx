import { DownloadIcon, FileTextIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import { DownloadTrigger } from "@/registry/react/components/download-trigger";
import { Item, ItemTitle } from "@/registry/react/components/item";

const DownloadTriggerDemo = () => (
  <div className="flex flex-col gap-4">
    <Item variant="outline">
      <FileTextIcon />
      <ItemTitle>{content}</ItemTitle>
    </Item>
    <DownloadTrigger
      asChild
      data={content}
      fileName="hello.txt"
      mimeType="text/plain"
    >
      <Button size="lg" variant="outline">
        <DownloadIcon />
        Download
      </Button>
    </DownloadTrigger>
  </div>
);

const content = "Hello, World! This is a sample text file.";

export default DownloadTriggerDemo;
