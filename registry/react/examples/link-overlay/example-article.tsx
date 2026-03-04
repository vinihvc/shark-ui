"use client";

import Link from "next/link";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const Example = () => (
  <LinkBox asChild>
    <article className="max-w-sm rounded-xl border p-4">
      <span className="text-muted-foreground text-sm">
        <time dateTime="2026-03-03T15:30:00Z">3 days ago</time>
      </span>
      <h2 className="my-2 font-medium text-lg">
        <LinkOverlay href="#">A11y Link Overlay</LinkOverlay>
      </h2>
      <p className="mb-3 text-muted-foreground text-sm">
        Learn how to construct a screen reader friendly link overlay for
        accessibility and usability.
      </p>
      <Link
        className="text-primary text-sm underline hover:underline"
        href="#inner-link"
      >
        Read more
      </Link>
    </article>
  </LinkBox>
);

export default Example;
