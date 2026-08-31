export const dialogPresentationKey = Symbol("shark-dialog");

export interface DialogPresentationContext {
  readonly modal: boolean;
}
