import Link from "next/link";
import { Card, CardMedia } from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";
import type { Block } from "../_data/blocks-data";

interface BlockCardProps {
  block: Block;
}

export const BlockCard = ({ block }: BlockCardProps) => {
  return (
    <LinkBox asChild>
      <Card>
        <LinkOverlay asChild className="absolute inset-0 z-10">
          <Link href={block.blockUrl}>
            <span className="sr-only">View {block.name} block</span>
          </Link>
        </LinkOverlay>
        <CardMedia className="aspect-video bg-muted" variant="image" />
        <div className="flex flex-col gap-1 p-4">
          <h3 className="font-semibold text-base tracking-tight">
            {block.name}
          </h3>
          <p className="line-clamp-2 text-muted-foreground text-sm">
            {block.description}
          </p>
        </div>
      </Card>
    </LinkBox>
  );
};
