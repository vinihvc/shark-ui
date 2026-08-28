import type { ReactNode } from "react";
import { createMetadata } from "@/lib/metadata";
import { SkipNavContent } from "@/registry/react/components/skip-nav";

const BLOCKS_DIRECTION_CONTRACT = {
  finish:
    "unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance",
  firstViewport:
    "A persistent catalog rail with collapsible categories whose subitems are the blocks. The main pane is the live specimen: block name, install command, Preview/Code. No page hero copy.",
  form: "Registry workspace with a dense navigation rail, concise context, and one active live specimen; seed key 559a84bf.",
  ownWorld:
    "Shark UI neutral semantic surfaces, restrained borders, compact controls, heading face, and one theme accent; the live composition is the material.",
  story:
    "Browse by category in the rail, choose a block in the main pane, test the live preview, inspect its files, then copy a file or install the whole block.",
  thesis:
    "A block catalog should feel like a live registry specimen, not a marketing gallery or a grid of screenshots.",
} as const;

export const metadata = createMetadata({
  description: "Composed Shark UI interfaces you can copy or install.",
  title: "Blocks",
  url: "/blocks",
});

const BlocksLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SkipNavContent>
      <script
        // This is inert, auditable build metadata rather than executable code.
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON is serialized from a local constant and escaped before emission.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BLOCKS_DIRECTION_CONTRACT).replaceAll(
            "<",
            "\\u003c"
          ),
        }}
        data-impeccable-direction-contract="blocks"
        type="application/json"
      />
      {children}
    </SkipNavContent>
  );
};

export default BlocksLayout;
