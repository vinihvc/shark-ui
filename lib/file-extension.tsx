import { Brackets, Folder, Palette } from "lucide-react";
import { TypeScriptIcon } from "@/components/icons/typescript";

export const getIconForLanguageExtension = (language: string) => {
  switch (language) {
    case "json":
      return <Brackets className="size-4" />;
    case "css":
      return <Palette className="size-4" />;
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
    case "typescript":
      return <TypeScriptIcon className="size-4" />;
    default:
      return <Folder className="size-4" />;
  }
};
