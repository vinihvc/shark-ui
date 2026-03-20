import { readFileSync } from "node:fs";
import { join } from "node:path";
import { NextResponse } from "next/server";
import { BLOCK_MAP } from "@/app/(app)/blocks/_data/blocks-data";
import { replaceContentForCopy } from "@/utils/formatter";

export function GET(req: Request) {
  const url = new URL(req.url);
  const key = url.searchParams.get("key");

  if (!key || typeof key !== "string") {
    return NextResponse.json(
      { error: "Missing required query param: key" },
      { status: 400 }
    );
  }

  const block = BLOCK_MAP.get(key);

  if (!block) {
    return NextResponse.json({ error: "Unknown block key" }, { status: 404 });
  }

  const blockPath = join(
    process.cwd(),
    "registry",
    "react",
    "blocks",
    block.category,
    block.subcategory,
    `${block.id}.tsx`
  );

  let sourceCode = "";
  try {
    sourceCode = readFileSync(blockPath, "utf-8");
  } catch {
    sourceCode = `// Source not available for ${block.name}`;
  }

  return NextResponse.json({ code: replaceContentForCopy(sourceCode) });
}
