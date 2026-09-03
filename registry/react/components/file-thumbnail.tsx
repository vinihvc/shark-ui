import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export type FileThumbnailTone = NonNullable<
  VariantProps<typeof fileThumbnailVariants>["tone"]
>;

export const fileThumbnailVariants = tv({
  defaultVariants: {
    size: "md",
    tone: "default",
  },
  slots: {
    badge: [
      "absolute",
      "select-none whitespace-nowrap font-medium uppercase leading-none",
      "rounded-[0.35em] border-t shadow-xs/5",
    ],
    sheet: "rounded-md border border-border bg-white",
  },
  variants: {
    size: {
      lg: {
        badge: ["-inset-s-2 bottom-2", "text-[11px]", "px-1.5 py-0.5"],
        sheet: "h-14 w-11",
      },
      md: {
        badge: ["-inset-s-1.5 bottom-1.5", "text-[10px]", "px-1 py-px"],
        sheet: "h-10 w-8",
      },
      sm: {
        badge: ["-inset-s-1 bottom-1", "text-[9px]", "px-1 py-px"],
        sheet: "h-8 w-6.5",
      },
    },
    tone: {
      default: {
        badge: [
          "bg-secondary text-secondary-foreground",
          "border-t-secondary-foreground/35 shadow-secondary-foreground/25",
        ],
      },
      destructive: {
        badge: [
          "bg-destructive text-white",
          "border-t-destructive-foreground shadow-destructive/35",
        ],
      },
      info: {
        badge: [
          "bg-info text-white",
          "border-t-info-foreground shadow-info/35",
        ],
      },
      primary: {
        badge: [
          "bg-primary text-white",
          "border-t-primary-foreground/30 shadow-primary/35",
        ],
      },
      success: {
        badge: [
          "bg-success text-white",
          "border-t-success-foreground shadow-success/35",
        ],
      },
      warning: {
        badge: [
          "bg-warning text-white",
          "border-t-warning-foreground shadow-warning/35",
        ],
      },
    },
  },
});

export interface FileThumbnailProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof fileThumbnailVariants> {
  /**
   * The format of the file.
   */
  format?: string;
}

export const FileThumbnail = (props: FileThumbnailProps) => {
  const { format, size, tone, className, ...rest } = props;

  const label = format ?? "FILE";

  const { badge, sheet } = fileThumbnailVariants({
    size,
    tone: tone ?? (format ? toneForFormat(format) : "default"),
  });

  return (
    <ark.div
      className={cn("relative inline-block size-fit", className)}
      data-slot="file-thumbnail"
      {...rest}
    >
      <span className={badge()} data-slot="file-thumbnail-badge">
        {label}
      </span>
      <div className={sheet()} data-slot="file-thumbnail-sheet" />
    </ark.div>
  );
};

const LEADING_DOT_RE = /^\./;

const toneForFormat = (format: string): FileThumbnailTone =>
  FORMAT_TONES[format.trim().toLowerCase().replace(LEADING_DOT_RE, "")] ??
  "default";

const FORMATS_BY_TONE = {
  destructive: [
    "3g2",
    "3gp",
    "aac",
    "aiff",
    "avi",
    "css",
    "djv",
    "djvu",
    "f4v",
    "flac",
    "flv",
    "htm",
    "html",
    "java",
    "m2ts",
    "m4a",
    "m4v",
    "mid",
    "midi",
    "mkv",
    "mov",
    "mp3",
    "mp4",
    "mpeg",
    "mpg",
    "oga",
    "ogg",
    "ogv",
    "opus",
    "oxps",
    "pdf",
    "rb",
    "rs",
    "sass",
    "scss",
    "wav",
    "webm",
    "wma",
    "wmv",
    "xps",
  ],
  info: [
    "c",
    "cpp",
    "cxx",
    "d.ts",
    "doc",
    "docm",
    "docx",
    "epub",
    "go",
    "h",
    "hpp",
    "json",
    "md",
    "odt",
    "rtf",
    "tex",
    "ts",
    "tsx",
    "txt",
  ],
  primary: [
    "apng",
    "avif",
    "bmp",
    "cs",
    "gif",
    "heic",
    "ico",
    "jpeg",
    "jpg",
    "php",
    "png",
    "svg",
    "tif",
    "tiff",
    "webp",
  ],
  success: [
    "7z",
    "bz2",
    "cab",
    "csv",
    "gz",
    "ods",
    "py",
    "pyw",
    "rar",
    "tar",
    "tgz",
    "tsv",
    "xls",
    "xlsb",
    "xlsm",
    "xlsx",
    "xz",
    "zip",
    "zst",
  ],
  warning: [
    "cjs",
    "js",
    "jsx",
    "key",
    "mjs",
    "odp",
    "pot",
    "potx",
    "pps",
    "ppsx",
    "ppt",
    "pptm",
    "pptx",
    "swift",
  ],
} as const satisfies Partial<Record<FileThumbnailTone, readonly string[]>>;

const FORMAT_TONES: Record<string, FileThumbnailTone> = Object.fromEntries(
  Object.entries(FORMATS_BY_TONE).flatMap(([tone, formats]) =>
    formats.map((format) => [format, tone as FileThumbnailTone])
  )
);
