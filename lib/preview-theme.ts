import type { BorderRadius, GrayColor, PrimaryColor } from "@/store/config";

export const PREVIEW_THEME_MESSAGE_TYPE = "shark-ui:preview-theme" as const;

export const PREVIEW_PRIMARY_COLORS = [
  "neutral",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const satisfies readonly PrimaryColor[];

export const PREVIEW_GRAY_COLORS = [
  "neutral",
  "slate",
  "gray",
  "zinc",
  "stone",
  "mauve",
  "olive",
  "mist",
  "taupe",
] as const satisfies readonly GrayColor[];

export const PREVIEW_BORDER_RADII = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
] as const satisfies readonly BorderRadius[];

export const isManagedThemeClass = (className: string) =>
  className === "light" ||
  className === "dark" ||
  className.startsWith("theme-") ||
  className.startsWith("bg-") ||
  className.startsWith("radius-");

export const applyBodyThemeClasses = (input: {
  borderRadius: BorderRadius;
  grayColor: GrayColor;
  primaryColor: PrimaryColor;
}) => {
  if (typeof document === "undefined") {
    return;
  }

  const { body } = document;
  const managed = Array.from(body.classList).filter(isManagedThemeClass);

  if (managed.length > 0) {
    body.classList.remove(...managed);
  }

  body.classList.add(
    `bg-${input.grayColor}`,
    `radius-${input.borderRadius}`,
    `theme-${input.primaryColor}`
  );
};

export interface PreviewThemeMessage {
  payload: {
    borderRadius: BorderRadius;
    grayColor: GrayColor;
    mode: "light" | "dark";
    primaryColor: PrimaryColor;
  };
  type: typeof PREVIEW_THEME_MESSAGE_TYPE;
}

export const isPreviewThemeMessage = (
  value: unknown
): value is PreviewThemeMessage => {
  if (!(value && typeof value === "object")) {
    return false;
  }

  const message = value as Partial<PreviewThemeMessage>;
  const { payload } = message;

  return (
    message.type === PREVIEW_THEME_MESSAGE_TYPE &&
    !!payload &&
    (payload.mode === "light" || payload.mode === "dark") &&
    PREVIEW_PRIMARY_COLORS.includes(payload.primaryColor as PrimaryColor) &&
    PREVIEW_GRAY_COLORS.includes(payload.grayColor as GrayColor) &&
    PREVIEW_BORDER_RADII.includes(payload.borderRadius as BorderRadius)
  );
};
