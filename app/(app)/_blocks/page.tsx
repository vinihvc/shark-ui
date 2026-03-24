import { createMetadata } from "@/lib/metadata";

export const revalidate = false;
export const dynamic = "force-static";

export const metadata = createMetadata({
  title: "Blocks",
  description: "Blocks",
  url: "/blocks",
});

const BlocksPage = async () => {
  return <div>all blocks</div>;
};

export default BlocksPage;
