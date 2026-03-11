import { CodeIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";
import { Card } from "@/registry/react/components/card";
import type { MockTemplate } from "../_data/mock-templates";

interface TemplateCardProps {
  template: MockTemplate;
}

const InfoPanel = ({
  template,
  isAvailable,
}: {
  isAvailable: boolean;
  template: MockTemplate;
}) => (
  <div className="flex flex-1 flex-col justify-center gap-4 p-6 lg:p-8">
    <span className="font-medium text-primary text-sm">Template</span>
    <h3 className="font-semibold text-2xl tracking-tight">{template.name}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {template.description}
    </p>
    <div className="flex flex-wrap gap-3">
      {isAvailable && (
        <Button asChild size="lg" variant="default">
          <Link href={template.livePreviewUrl}>
            View Code
            <CodeIcon aria-hidden />
          </Link>
        </Button>
      )}
      {isAvailable && (
        <Button asChild size="lg" variant="outline">
          <Link
            href={template.livePreviewUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Live Preview
            <ExternalLinkIcon aria-hidden />
          </Link>
        </Button>
      )}
    </div>
  </div>
);

const PreviewPanel = () => (
  <div className="relative aspect-square flex-1 overflow-hidden rounded-lg bg-muted" />
);

export const TemplateCard = ({ template }: TemplateCardProps) => {
  const isAvailable = template.status === "available";

  return (
    <Card className="flex flex-col gap-0 overflow-hidden lg:flex-row lg:items-stretch">
      <div className="min-w-0 flex-1">
        <InfoPanel isAvailable={isAvailable} template={template} />
      </div>
      <div className="min-w-0 flex-1 p-4 lg:p-6">
        <PreviewPanel />
      </div>
    </Card>
  );
};
