import { DownloadIcon, FileTextIcon } from "lucide-react";
import { DownloadTrigger } from "@/registry/react/components/download-trigger";

const content = "Hello, World! This is a sample text file.";

const DownloadTriggerDemo = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2 rounded-lg border bg-muted/50 p-3">
      <FileTextIcon className="size-5 shrink-0 text-muted-foreground" />
      <span className="min-w-0 flex-1 truncate text-foreground text-sm">
        {content}
      </span>
    </div>
    <DownloadTrigger data={content} fileName="hello.txt" mimeType="text/plain">
      <DownloadIcon />
      Download txt
    </DownloadTrigger>
  </div>
);

export default DownloadTriggerDemo;
