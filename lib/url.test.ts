import assert from "node:assert/strict";
import { after, describe, it } from "node:test";
import { SITE_CONFIG } from "@/config/site";
import { absoluteUrl } from "./url";

describe("absoluteUrl", () => {
  const previous = process.env.NEXT_PUBLIC_SITE_URL;

  after(() => {
    if (previous === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = previous;
    }
  });

  it("joins NEXT_PUBLIC_SITE_URL without a double slash", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.test/";
    assert.equal(
      absoluteUrl("/r/button.json"),
      "https://example.test/r/button.json"
    );
  });

  it("falls back to SITE_CONFIG.url when env is unset", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    assert.equal(absoluteUrl("/docs"), `${SITE_CONFIG.url}/docs`);
  });
});
