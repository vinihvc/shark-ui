"use client";

import { type PropsWithChildren, useEffect, useRef } from "react";

const TABBABLE_SELECTOR = [
  "a[href]",
  "area[href]",
  "button",
  "input:not([type=hidden])",
  "select",
  "textarea",
  "iframe",
  "object",
  "embed",
  "summary",
  "[contenteditable]:not([contenteditable=false])",
  "[tabindex]",
].join(",");

const removeFromTabOrder = (root: HTMLElement) => {
  for (const element of root.querySelectorAll<HTMLElement>(TABBABLE_SELECTOR)) {
    if (element.tabIndex >= 0) {
      element.tabIndex = -1;
    }
  }
};

export const HomeExamplesTabGuard = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;

    removeFromTabOrder(root);

    const observer = new MutationObserver(() => removeFromTabOrder(root));

    observer.observe(root, {
      attributeFilter: ["contenteditable", "disabled", "href", "tabindex"],
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
};
