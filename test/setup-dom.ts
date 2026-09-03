import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost",
});

Object.assign(globalThis, {
  AbortController: dom.window.AbortController,
  AbortSignal: dom.window.AbortSignal,
  CustomEvent: dom.window.CustomEvent,
  DOMRect: dom.window.DOMRect,
  document: dom.window.document,
  Event: dom.window.Event,
  EventTarget: dom.window.EventTarget,
  FormData: dom.window.FormData,
  HTMLElement: dom.window.HTMLElement,
  HTMLInputElement: dom.window.HTMLInputElement,
  KeyboardEvent: dom.window.KeyboardEvent,
  MouseEvent: dom.window.MouseEvent,
  MutationObserver: dom.window.MutationObserver,
  Node: dom.window.Node,
  window: dom.window,
});

try {
  globalThis.navigator = dom.window.navigator;
} catch {
  // Node 26+ exposes `navigator` as a getter on globalThis.
}

globalThis.requestAnimationFrame = (callback) =>
  setTimeout(() => callback(Date.now()), 0) as unknown as number;
globalThis.cancelAnimationFrame = (id) => clearTimeout(id);

if (!globalThis.PointerEvent) {
  globalThis.PointerEvent = dom.window.MouseEvent as typeof PointerEvent;
}
