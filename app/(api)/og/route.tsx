import { Buffer } from "node:buffer";
import type { Font } from "@takumi-rs/core";
import { ImageResponse } from "@takumi-rs/image-response";

async function loadAssets(): Promise<
  { name: string; data: ArrayBuffer; weight: 400 | 600; style: "normal" }[]
> {
  const [{ base64Font: normal }, { base64Font: semibold }] = await Promise.all([
    import("./hanken-grotesk-400.json").then((mod) => mod.default ?? mod),
    import("./hanken-grotesk-600.json").then((mod) => mod.default ?? mod),
  ]);

  const toArrayBuffer = (base64: string) => {
    const buffer = Buffer.from(base64, "base64");
    return buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    );
  };

  return [
    {
      name: "Hanken Grotesk",
      data: toArrayBuffer(normal),
      weight: 400,
      style: "normal",
    },
    {
      name: "Hanken Grotesk",
      data: toArrayBuffer(semibold),
      weight: 600,
      style: "normal",
    },
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const fonts: Font[] = await loadAssets();

  return new ImageResponse(
    <div
      style={{ fontFamily: "Hanken Grotesk" }}
      tw="flex h-full w-full bg-black text-white"
    >
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-stone-700 inset-x-0 h-[1px] bottom-16" />
      <div tw="flex absolute flex-row bottom-24 right-24 text-white">
        <svg
          aria-hidden
          fill="currentColor"
          height="48"
          viewBox="0 0 512 512"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Shark</title>
          <path d="M40 440c0 17.673 14.327 32 32 32H436.412c19.014 0 33.909-16.558 30.776-35.311-35.6-213.126-180.861-347.756-390.643-390.305C57.403 42.5 40 57.532 40 77.064v132.788c0 17.673 14.327 32 32 32h85.684c17.673 0 32 14.326 32 32v9.572c0 17.673-14.327 32-32 32H72c-17.673 0-32 14.327-32 32V440Z" />
        </svg>
      </div>
      <div tw="flex flex-col absolute w-[896px] justify-center inset-32">
        <div
          style={{
            textWrap: "balance",
            fontWeight: 600,
            fontSize: title && title.length > 20 ? 64 : 80,
            letterSpacing: "-0.04em",
          }}
          tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
        >
          {title}
        </div>
        <div
          style={{
            fontWeight: 400,
            textWrap: "balance",
          }}
          tw="text-[40px] leading-[1.5] flex-grow-1 text-stone-400"
        >
          {description}
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts,
      headers: {
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}
