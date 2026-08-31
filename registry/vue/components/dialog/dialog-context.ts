import type { InjectionKey } from "vue";

export const dialogPresentationKey = Symbol("shark-dialog") as InjectionKey<{
  modal: boolean;
}>;
