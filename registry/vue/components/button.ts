export { default as Button } from "./button.vue";
export { buttonVariants } from "./_shark/button.contract";

export interface ButtonProps {
  asChild?: boolean;
  clickEffect?: boolean;
  isLoading?: boolean;
  pill?: boolean;
  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "icon-xs"
    | "icon-sm"
    | "icon-md"
    | "icon-lg"
    | "icon-xl";
  type?: "button" | "reset" | "submit";
  variant?:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary";
}
