import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  isManagedThemeClass,
  isPreviewThemeMessage,
  PREVIEW_THEME_MESSAGE_TYPE,
} from "./preview-theme";

describe("isManagedThemeClass", () => {
  it("treats theme, gray, radius, and color-mode classes as managed", () => {
    assert.equal(isManagedThemeClass("theme-red"), true);
    assert.equal(isManagedThemeClass("bg-zinc"), true);
    assert.equal(isManagedThemeClass("radius-md"), true);
    assert.equal(isManagedThemeClass("dark"), true);
    assert.equal(isManagedThemeClass("light"), true);
  });

  it("leaves unrelated body classes alone", () => {
    assert.equal(isManagedThemeClass("relative"), false);
  });
});

describe("isPreviewThemeMessage", () => {
  it("rejects borderRadius values that CSS does not implement", () => {
    assert.equal(
      isPreviewThemeMessage({
        payload: {
          borderRadius: "xl",
          grayColor: "neutral",
          mode: "dark",
          primaryColor: "red",
        },
        type: PREVIEW_THEME_MESSAGE_TYPE,
      }),
      false
    );
  });
});
