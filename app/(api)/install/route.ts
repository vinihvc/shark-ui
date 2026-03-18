import fs from "node:fs/promises";
import path from "node:path";

export const revalidate = false;

export const GET = async () => {
  const scriptPath = path.join(process.cwd(), "scripts", "install.sh");
  const content = await fs.readFile(scriptPath, "utf-8");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
