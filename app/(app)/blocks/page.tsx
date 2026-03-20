import { createMetadata } from "@/lib/metadata";
import { BlocksCatalog } from "./_components/blocks-catalog";
import { BLOCKS } from "./_data/blocks-data";

export const revalidate = false;
export const dynamic = "force-static";

export const metadata = createMetadata({
  title: "Blocks",
  description: "Blocks",
  url: "/blocks",
});

const BlocksPage = async () => {
  return <BlocksCatalog blocks={BLOCKS} />;
};

export default BlocksPage;
