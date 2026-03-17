import Link from "next/link";
import { Card, CardMedia } from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";
import type { MockShowcase } from "../_data/mock-showcases";

interface ShowcaseCardProps {
  showcase: MockShowcase;
}

export const ShowcaseCard = ({ showcase }: ShowcaseCardProps) => {
  return (
    <LinkBox asChild>
      <Card>
        <LinkOverlay asChild className="absolute inset-0 z-10">
          {showcase.external ? (
            <a
              href={showcase.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">View {showcase.name} showcase</span>
            </a>
          ) : (
            <Link href={showcase.url}>
              <span className="sr-only">View {showcase.name} showcase</span>
            </Link>
          )}
        </LinkOverlay>
        <CardMedia className="aspect-video bg-muted" variant="image" />
        <div className="flex flex-col gap-1 p-4">
          <h3 className="font-semibold text-base tracking-tight">
            {showcase.name}
          </h3>
          <p className="line-clamp-2 text-muted-foreground text-sm">
            {showcase.description}
          </p>
        </div>
      </Card>
    </LinkBox>
  );
};
