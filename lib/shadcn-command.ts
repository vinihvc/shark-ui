export const formatShadcnCommandDisplay = (command: string) =>
  command.replaceAll("shadcn@latest", "shadcn");

export const packageManagerCommandVariants = (raw: string) => {
  if (raw.startsWith("npm install")) {
    return {
      bun: raw.replaceAll("npm install", "bun add"),
      npm: raw,
      pnpm: raw.replaceAll("npm install", "pnpm add"),
      yarn: raw.replaceAll("npm install", "yarn add"),
    };
  }
  if (raw.startsWith("npx create-")) {
    return {
      bun: raw.replace("npx", "bunx --bun"),
      npm: raw,
      pnpm: raw.replace("npx create-", "pnpm create "),
      yarn: raw.replace("npx create-", "yarn create "),
    };
  }
  if (raw.startsWith("npm create")) {
    return {
      bun: raw.replace("npm create", "bun create"),
      npm: raw,
      pnpm: raw.replace("npm create", "pnpm create"),
      yarn: raw.replace("npm create", "yarn create"),
    };
  }
  if (raw.startsWith("npx")) {
    return {
      bun: raw
        .replaceAll("npx", "bunx --bun")
        .replaceAll("npm install", "bun add"),
      npm: raw,
      pnpm: raw
        .replaceAll("npx", "pnpm dlx")
        .replaceAll("npm install", "pnpm add"),
      yarn: raw.replaceAll("npx", "yarn").replaceAll("npm install", "yarn add"),
    };
  }
  if (raw.startsWith("npm run")) {
    return {
      bun: raw.replace("npm run", "bun"),
      npm: raw,
      pnpm: raw.replace("npm run", "pnpm"),
      yarn: raw.replace("npm run", "yarn"),
    };
  }
  return null;
};
