"use client";

import Link from "next/link";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const Example = () => (
  <LinkBox asChild>
    <article className="flex w-full max-w-xs flex-col gap-2 rounded-xl border p-4">
      <LinkOverlay asChild>
        <Link href="#">Simple blog post title</Link>
      </LinkOverlay>
      <p className="text-muted-foreground text-sm">
        This is a awesome blog post!
      </p>
      <Link className="text-primary underline" href="#inner-link">
        Inner link
      </Link>
    </article>
  </LinkBox>
);

export default Example;
